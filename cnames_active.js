/*
 ***** ACTIVE SUBDOMAINS
 * ***********************
 *
 * for the moment the following subdomains are active
 * file a pull request to add your own GitHub Page
 *
 *
 **** README
 * ***********
 *
 * KEY:         The subdomain you request (e.g.: "foo" would give the custom domain "foo.js.org").
 *
 * VALUE:       The regular domain provided by GitHub (e.g.: "foo.github.io" for a User-/Organization Page
 *              or "foo.github.io/bar" for a Project Page).
 *
 * CLOUDFLARE:  JS.ORG uses Cloudflare as its DNS. By default, Cloudflare proxies all requests to your subdomain
 *              to get SSL support (https://foo.js.org) and make use of browser caching with a TTL of 30 min.
 *              But you can opt-out from this and make Cloudflare forward all requests directly to GitHub.
 *              Just add '// noCF' in the line of your requested subdomain to give us a hint.
 *              (all the lines marked with '// noCF?' are from a time when a requester had to explicitly opt-in;
 *              see: https://github.com/js-org/js.org/issues/554)
 *
 * IMPORTANT:   To authorize yourself as the owner of the GitHub Page you must have added a valid CNAME file
 *              (with the requested domain, e.g.: "foo.js.org") to your repository.
 *              The requested subdomain must match either your GitHub username or the name of your project
 *              repository. Exceptions are possible for the sake of clarity (e.g. if your project has the
 *              name "foojs" you can request "foo").
 *              Before you start a request for your personal fork of "react" or "vue" you should read
 *              the section "naming conflicts" in the wiki!
 *
 * NOTICE:      Please follow the format set by everyone else in this file. Entries should use double quotes,
 *              with space between the colon (after the key) and the value and should always be in alphabetical
 *              order. Each line apart from the very last entry should have a comma after it to ensure this file
 *              is valid syntax.
 *
 *              BECAUSE OF THE RISK OF ABUSE, I'M NOT ACCEPTING REQUESTS FOR PAGES WITHOUT REASONABLE CONTENT!
 */

var cnames_active = {
  "": "js-org.github.io",
  "01mz": "01mz.github.io",
  "GrasslandForest": "killergames3.github.io"
  "zyx": "zyx.alwaysdata.net",
  "zyy": "zyyou.github.io/notes"
  /*
   * please don't add your subdomain records down here!
   * insert them in alphabetical order to help reduce merge conflicts.
   * <3
   */
}
