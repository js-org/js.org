// This validates the file has a correct format, if not Deno will throw an error.

const data = await Deno.readTextFile("./cnames_active.js");

const cnames = Function(data + "; return cnames_active")();

const DOMAINS = Object.keys(cnames);
const SORTED_DOMAINS = [...DOMAINS].sort();

if (SORTED_DOMAINS !== DOMAINS) {
  throw new Error("The Domains are not sorted alphabetically.");
}
