// This validates the file has a correct format, if not Deno will throw an error.

import { cnames_active } from "../cnames_active.js"

const DOMAINS = Object.keys(cnames_active)
const SORTED_DOMAINS = [...DOMAINS].sort()

if (SORTED_DOMAINS !== DOMAINS) {
  throw new Error("The Domains are not sorted alphabetically.")
}
