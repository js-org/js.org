/**
 * This file is based on https://github.com/MattIPv4/js.org-cleanup/blob/master/src/cnames.js
 * Licensed under AGPL-3.0 License
 *
 * @author Matt (IPv4)
 *
 */

// Load in fetch for URL testing
import fs from "fs";
import { resolve } from "path";

export type Cname = {
	target: string;
	noCF?: string;
	http?: string;
	https?: string;
	failed?: boolean;
	key: string;
};

/**
 * Fetches the raw cnames_active file from the configured repository
 * @returns {Promise<string>}
 */
export const getCNAMEsFile = async (): Promise<string> => {
	try {
		return await fs.promises.readFile(
			resolve(process.cwd(), "cnames_active.js"),
			"utf-8"
		);
	} catch (e) {
		console.log("The file 'cnames_active.js' does not exist.", true);
		return "";
	}
};

/**
 * Get all valid CNAME entries from the js.org repository
 * @param {string} [file] - The cnames file to use (will fetch if not provided)
 * @returns {Promise<cnamesObject>} - Every entry in the CNAMEs file
 */
export const getCNAMEs = async (file: string): Promise<Cname[]> => {
	// Log
	//console.log("\nStarting getCNAMEs process");

	// Get the raw cnames file
	if (!file) {
		file = await getCNAMEsFile();
		//console.log("\nResuming getCNAMEs process");
	}

	// Regex time
	const reg: RegExp = new RegExp(
		/[ \t]*["'](.*)["'][ \t]*:[ \t]*["'](.*)["'][ \t]*,?[ \t]*(\/\/ *[Nn][Oo][Cc][Ff].*)?[ \t]*\n/g
	);
	const cnames: Cname[] = [];
	let match;
	while ((match = reg.exec(file)) !== null) {
		cnames.push({
			key: match[1],
			target: match[2],
			noCF: match[3]
				? `// noCF${match[3].slice(2).trim().slice(4)}`
				: undefined,
		});
	}

	// Done
	//console.log("Parsing completed for getCNAMEs");
	return cnames;
};
