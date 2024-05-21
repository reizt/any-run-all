import { readFile } from 'node:fs/promises';

const mandatoryReadFile = async (path) => {
	try {
		return await readFile(path, 'utf8');
	} catch {
		return null;
	}
};

export const getNpmScripts = async () => {
	const currentDir = process.cwd();
	const packageJson = await mandatoryReadFile(`${currentDir}/package.json`);
	if (packageJson == null) {
		return {};
	}
	const pkg = JSON.parse(packageJson);
	return pkg.scripts ?? {};
};
