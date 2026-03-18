import fs from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * The generate main script, which generates theme files for each target.
 * @param {string?} argv[1] The targets to generate themes for, either a single target or a JSON array of targets as a string (e.g. '[\"vscode\"]'). If undefined, will generate for all targets. Defaults to undefined.
 * @param {string?} argv[2] The directory to save themes in. If specified and only one target is being generated, no subdirectories will be created. If undefined, will use the 'dist' directory, and will create subdirectories no matter what. Defaults to undefined.
 */
const __file__ = fileURLToPath(import.meta.url);
if (process.argv[1] === __file__) {
	// Set build targets
	let targets;
	if (process.argv[2] === undefined) {
		const targetsDir = path.join(path.dirname(__file__), 'targets');
		targets = fs.readdirSync(targetsDir);
	} else {
		try {
			targets = JSON.parse(process.argv[2]);
		} catch {
			targets = process.argv[2];
		}
		if (typeof targets !== 'string' && !Array.isArray(targets)) {
			throw new Error('targets must be a string or array');
		} else if (typeof targets === 'string') {
			targets = [targets];
		}
	}
	console.log(`Targets: ${JSON.stringify(targets)}`);
	// For each permutation of each key in variants, save the Nunjucks-interpreted palette
	const palettePath = path.join(path.dirname(__file__), 'palette.json');
	let paletteJson = JSON.parse(fs.readFileSync(palettePath, 'utf-8'));
	delete paletteJson.variants['//'];
	delete paletteJson.colours['//'];
	const variants = paletteJson.variants;
	let paletteVariants = [];
	for (let i = 0; i < variants.modes.length; i++) {
		for (let j = 0; j < variants.accents.length; j++) {
			const variantsObj = {
				variants: {
					mode: variants.modes[i],
					accent: variants.accents[j],
				},
			};
			paletteJson = JSON.parse(
				nunjucks.renderString(
					fs.readFileSync(palettePath, 'utf-8'),
					variantsObj
				)
			);
			delete paletteJson.variants['//'];
			delete paletteJson.colours['//'];
			paletteVariants.push({
				...paletteJson,
				variants: {
					...paletteJson.variants,
					...variantsObj.variants,
				},
			});
		}
	}
	// Generate theme for each target
	let buildDir = '../dist';
	if (process.argv[3] !== undefined) {
		buildDir = process.argv[3];
	}
	for (let target of targets) {
		console.log(`Generating themes for target: ${target}`);
		const targetDir = path.join(path.dirname(__file__), 'targets', target);
		const targetFiles = fs.readdirSync(targetDir, { recursive: true });
		let buildTargetDir = path.join(buildDir, target);
		if (targets.length === 1 && buildDir !== 'dist') {
			buildTargetDir = buildDir;
		}
		fs.mkdirSync(buildTargetDir, { recursive: true });
		for (let constFilePath of ['icon.png', 'LICENSE.md', 'README.md']) {
			const copyFilePath = path.join(buildTargetDir, `../${constFilePath}`);
			if (!fs.existsSync(copyFilePath)) {
				fs.copyFileSync(`../${constFilePath}`, copyFilePath);
			}
		}
		for (let filePath of targetFiles) {
			const absFilePath = path.join(targetDir, filePath);
			if (fs.lstatSync(absFilePath).isDirectory()) {
				continue;
			}
			// Check if file path accepts Nunjucks
			const filePathVariantsTest = nunjucks.renderString(
				filePath,
				paletteVariants[0]
			);
			const file = fs.readFileSync(absFilePath, 'utf-8');
			let filePathVariant;
			let fileVariant;
			if (filePath === filePathVariantsTest) {
				// File path does not accept Nunjucks, render once
				console.log(`Rendering file: ${filePath}`);
				filePathVariant = path.join(buildTargetDir, filePath);
				if (filePathVariant.endsWith('.jinja')) {
					filePathVariant = filePathVariant.slice(0, -6);
				}
				fs.mkdirSync(path.dirname(filePathVariant), { recursive: true });
				fileVariant = nunjucks.renderString(file, paletteVariants[0]);
				fs.writeFileSync(filePathVariant, fileVariant);
			} else {
				// File path accepts Nunjucks, render for each variant
				for (let variant of paletteVariants) {
					console.log(
						`Rendering file for variant ${JSON.stringify({ mode: variant.variants.mode, accent: variant.variants.accent })}: ${filePath}`
					);
					filePathVariant = path.join(
						buildTargetDir,
						nunjucks.renderString(filePath, variant)
					);
					if (filePathVariant.endsWith('.jinja')) {
						filePathVariant = filePathVariant.slice(0, -6);
					}
					fs.mkdirSync(path.dirname(filePathVariant), { recursive: true });
					fileVariant = nunjucks.renderString(file, variant);
					fs.writeFileSync(filePathVariant, fileVariant);
				}
			}
		}
	}
	console.log('Themes generated successfully');
}
