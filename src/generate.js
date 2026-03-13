import fs from 'node:fs';

/**
 * Converts a hex colour code to RGBA number format.
 * @param {string} hex The hex colour code.
 * @returns The colour in RGBA number format.
 */
function hexToRgba(hex) {
	let rgba = [
		parseInt(hex.substring(1, 3), 16),
		parseInt(hex.substring(3, 5), 16),
		parseInt(hex.substring(5, 7), 16),
		255,
	];
	if (hex.length >= 9) {
		rgba[3] = parseInt(hex.substring(7, 9), 16);
	}
	return rgba;
}

/**
 * Mixes any number of colours together according to the given weights.
 * @param {number[][]} colours The colours in RGBA number format.
 * @param {number[]} weights The weight of each colour.
 * @returns {number[]} The mixed colour.
 */
function mixColours(colours, weights) {
	let totalWeight = weights.reduce((a, b) => a + b, 0);
	let mixed = [0, 0, 0, 0];
	for (let i = 0; i < colours.length; i++) {
		mixed[0] += colours[i][0] * (weights[i] / totalWeight);
		mixed[1] += colours[i][1] * (weights[i] / totalWeight);
		mixed[2] += colours[i][2] * (weights[i] / totalWeight);
		mixed[3] += colours[i][3] * (weights[i] / totalWeight);
	}
	for (let i = 0; i < mixed.length; i++) {
		mixed[i] = Math.round(Math.min(mixed[i], 255));
	}
	return mixed;
}

/**
 * Evaluates a colour definition and returns the colour in RGBA number format.
 * @param {string | Array<Object>} colourDef The colour definition.
 * @param {Map<string, number[]>} colours The map of colour names and colours in RGBA number format.
 * @param {Object} kwargs The current value of keyword arguments, e.g. iterators.
 * @returns {number[]} The colour in RGBA number format.
 * @throws If a colour in the definition is invalid due to a colour ID not being found.
 * @throws If a colour in the definition is invalid due to no colour value being found.
 * @throws If no colour in the definition is valid.
 */
function evalColour(colourDef, colours, kwargs) {
	if (typeof colourDef === 'string') {
		return hexToRgba(colourDef);
	}
	if (!Array.isArray(colourDef)) {
		colourDef = [colourDef];
	}
	for (let i = 0; i < colourDef.length; i++) {
		if (colourDef[i].eval !== undefined) {
			return evalColour(colourDef[i].eval, colours, kwargs);
		}
		if (colourDef[i].if !== undefined) {
			let fn = new Function('kwargs', `return ${colourDef[i].if};`);
			if (!fn(kwargs)) {
				continue;
			}
		}
		if (colourDef[i].id !== undefined) {
			if (colours[colourDef[i].id] !== undefined) {
				return colours[colourDef[i].id];
			}
			throw new Error(
				`Invalid colour at index ${i} in ${JSON.stringify(colourDef)} for ${JSON.stringify(kwargs)}, ${colourDef[i].id} not found`
			);
		}
		if (colourDef[i].mix !== undefined) {
			return mixColours(
				colourDef[i].mix.map((c) => evalColour(c, colours, kwargs)),
				colourDef[i].mix.map((c) => c.weight)
			);
		}
		if (colourDef[i].hex !== undefined) {
			return hexToRgba(colourDef[i].hex);
		}
		throw new Error(
			`Invalid colour at index ${i} in ${JSON.stringify(colourDef)} for ${JSON.stringify(kwargs)}, no colour value found`
		);
	}
	throw new Error(
		`No colours valid in ${JSON.stringify(colourDef)} for ${JSON.stringify(kwargs)}`
	);
}

/**
 * Converts a colour in RGBA number format to a hex colour code.
 * @param {number[]} rgba The colour in RGBA number format.
 * @returns The hex colour code.
 */
function rgbaToHex(rgba) {
	let hex = `#${rgba[0].toString(16).padStart(2, '0')}${rgba[1].toString(16).padStart(2, '0')}${rgba[2].toString(16).padStart(2, '0')}`;
	if (rgba[3] !== 255) {
		hex += `${rgba[3].toString(16).padStart(2, '0')}`;
	}
	return hex;
}

/**
 * Generates theme files for the Oblique Visual Studio Code theme by reading the variants and colours from a JSON file.
 */
let coloursJson = JSON.parse(fs.readFileSync('./src/colours.json', 'utf8'));
let packageJsonPath = './package.json';
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.contributes.themes = [];
let iters = [{}];
// For each variant, go through the list of iterations and duplicate them for each variant value.
for (let varId in coloursJson.variants) {
	if (varId.startsWith('//')) {
		continue;
	}
	let itersLen = iters.length;
	for (let i = 0; i < itersLen; i++) {
		for (let j = 0; j < coloursJson.variants[varId].length; j++) {
			if (j === 0) {
				iters[i][varId] = coloursJson.variants[varId][j];
			} else {
				iters.push({
					...iters[i],
					[varId]: coloursJson.variants[varId][j],
				});
			}
		}
	}
}
for (let i = 0; i < iters.length; i++) {
	console.log(`Generating theme file with ${JSON.stringify(iters[i])}`);
	// Evaluate colours
	let colours = new Map();
	for (let colourId in coloursJson.colours) {
		if (colourId === '//') {
			continue;
		}
		colours[colourId] = evalColour(
			coloursJson.colours[colourId],
			colours,
			iters[i]
		);
	}
	console.dir(colours, { depth: null });
	let themeName = 'Oblique';
	for (let varId in iters[i]) {
		if (varId === '') {
			continue;
		}
		themeName += ` ${iters[i][varId]}`;
	}
	let themeJson = JSON.parse(fs.readFileSync('./src/template.json', 'utf8'));
	themeJson.name = themeName;
	for (let colourId in colours) {
		let hex = rgbaToHex(colours[colourId]);
		let elements = coloursJson.colours[colourId].elements;
		if (elements !== undefined) {
			for (let i = 0; i < elements.length; i++) {
				if (elements[i].startsWith('//')) {
					continue;
				}
				themeJson.colors[elements[i]] = hex;
			}
		}
		let semantics = coloursJson.colours[colourId].semantics;
		if (semantics !== undefined) {
			for (let i = 0; i < semantics.length; i++) {
				if (semantics[i].startsWith('//')) {
					continue;
				}
				themeJson.semanticTokenColors[semantics[i]] = hex;
			}
		}
		let tokens = coloursJson.colours[colourId].tokens;
		if (tokens !== undefined) {
			for (let i = tokens.length - 1; i >= 0; i--) {
				if (tokens[i].startsWith('//')) {
					tokens.splice(i, 1);
				}
			}
			themeJson.tokenColors.push({
				scope: tokens,
				settings: { foreground: hex },
			});
		}
	}
	// Append font styles
	for (let i = 0; i < coloursJson.fontStyles.length; i++) {
		let tokens = coloursJson.fontStyles[i].tokens;
		for (let i = tokens.length - 1; i >= 0; i--) {
			if (tokens[i].startsWith('//')) {
				tokens.splice(i, 1);
			}
		}
		themeJson.tokenColors.push({
			scope: tokens,
			settings: coloursJson.fontStyles[i].settings,
		});
	}
	// Save theme file and update package.json
	let themePath = `./themes/${themeName}-color-theme.json`;
	fs.writeFileSync(themePath, JSON.stringify(themeJson, null, '\t') + '\n');
	packageJson.contributes.themes.push({
		label: themeName,
		uiTheme: iters[i].mode.includes('Light') ? 'vs' : 'vs-dark',
		path: themePath,
	});
}
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, '\t') + '\n');
