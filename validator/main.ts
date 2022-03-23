// This validates the file has a correct format, if not Deno will throw an error.

import { CNAMES } from "./utils.ts";

const DOMAINS = Object.keys(CNAMES);
const SORTED_DOMAINS = [...DOMAINS].sort();

if (SORTED_DOMAINS !== DOMAINS) {
  throw new Error("The Domains are not sorted alphabetically.");
}
