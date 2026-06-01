import fs from 'node:fs';
import generate from './generate.js';

console.log('Watching for changes...');
fs.watch('.', (eventType, filename) => {
	if (eventType !== 'change') return;
	console.log(`Detected change in '${filename}'`);
	generate(undefined, '..');
});
