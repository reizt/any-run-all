import { execSync } from 'node:child_process';
import { getNpmScripts } from './get-scripts.mjs';

const scripts = getNpmScripts();

const cmds = process.argv.slice(2);

for (const cmd of cmds) {
	if (scripts[cmd] != null) {
		console.log(`> npm run ${cmd}`);
		execSync(`npm run ${cmd}`, { stdio: 'inherit' });
	} else {
		console.log(`> ${cmd}`);
		execSync(cmd, { stdio: 'inherit' });
	}
}
