import { spawn } from 'node:child_process';
import { getNpmScripts } from './get-scripts.mjs';

const scripts = getNpmScripts();

const cmds = process.argv.slice(2);

const runCommand = (cmd) => {
	return new Promise((resolve, reject) => {
		const [command, ...args] = scripts[cmd] != null ? ['npm', 'run', cmd] : cmd.split(' ');

		console.log(`> ${command} ${args.join(' ')}`);
		const child = spawn(command, args, { stdio: 'inherit' });

		child.on('close', (code) => {
			if (code !== 0) {
				reject(new Error(`Command failed: ${cmd}`));
			} else {
				resolve();
			}
		});
	});
};

await Promise.all(cmds.map(runCommand));
