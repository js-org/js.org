/*
 ***** ACTIVE SUBDOMAINS (NS records)
 * ***********************
 *
 * This list contains NS records in extension to the list of active CNAMEs in this repository.
 *
 * Second level NS records makes it possible for subdomain owners to redirect to another DNS provider.
 * This option has potential security issues (e.g. if you use another DNS provider to add MX records to route your email traffic)
 * and is only meant for advanced users.
 *
 * You should avoid this option if you only want a JS.ORG subdomain!!!
 * FYI: https://github.com/js-org/js.org/issues/2890
 */

var ns_active = {
  "appshelf": ["ns31.cloudns.net", "ns32.cloudns.net", "ns33.cloudns.net", "ns34.cloudns.net"],
  "castyte": ["ns31.cloudns.net", "ns32.cloudns.net", "ns33.cloudns.net", "ns34.cloudns.net"],
  "engine262": ["ns1.he.net", "ns2.he.net", "ns3.he.net", "ns4.he.net", "ns5.he.net"],
  "lolifamily": ["glen.ns.cloudflare.com", "melany.ns.cloudflare.com"],
  "mermaid": ["dns1.p04.nsone.net", "dns2.p04.nsone.net", "dns3.p04.nsone.net", "dns4.p04.nsone.net"],
  "ruby": ["alexis.ns.cloudflare.com", "connie.ns.cloudflare.com"],
  "samplasion": ["ns31.cloudns.net", "ns32.cloudns.net", "ns33.cloudns.net", "ns34.cloudns.net"],
  "shebang": ["dns1.p01.nsone.net", "dns2.p01.nsone.net", "dns3.p01.nsone.net", "dns4.p01.nsone.net"]
}

/*
 * The allocation of new ns records is discontinued (at the moment)
 */
