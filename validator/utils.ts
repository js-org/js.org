export function activeCNAMES(): { [key: string]: string } {
  const data = Deno.readTextFileSync("./cnames_active.js");

  return Function(data + "; return cnames_active")();
}

export const CNAMES = activeCNAMES();
