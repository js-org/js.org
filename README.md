[![JS.ORG](https://img.shields.io/badge/js.org-+-FFE70B.svg?style=flat-square)](http://js.org)
[![PRs](https://img.shields.io/github/issues-pr-closed-raw/js-org/js.org.svg?style=flat-square&colorB=FFE70B&label=pull%20requests)](https://github.com/js-org/js.org/pulls?q=is%3Apr+is%3Aclosed+label%3Aadd)
[![Contributors](https://img.shields.io/github/contributors-anon/js-org/js.org?color=FFE70B&style=flat-square)](https://github.com/js-org/js.org/graphs/contributors)
[![Activity](https://img.shields.io/github/commit-activity/m/js-org/js.org?color=FFE70B&style=flat-square)](https://github.com/js-org/js.org/pulse/monthly)
[![Donate](https://img.shields.io/badge/Donate-for_registrar_fees-1F87FF.svg?style=flat-square&logo=open-collective&logoColor=fff)](https://opencollective.com/js-org)

---

## GitHub Pages

To get a short and sleek subdomain for your own GitHub Pages site from JS.ORG follow these 4 steps:

### Step 1

If you haven't already, log in to your GitHub account and set up your GitHub Pages site following [their instructions](https://pages.github.com). **Make sure to add some reasonable content to your new page**.

### Step 2

Now determine your JS.ORG subdomain: either choose your username or the name of your repository according to the existing GitHub Pages URL (for `http://foo.github.io/bar`, either `foo.js.org` or `bar.js.org` would be possible). More details are available in the [wiki](https://github.com/js-org/js.org/wiki).

### Step 3

If you're [publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch):

Add a file named `CNAME` to your repo (in the `gh-pages` branch for project pages, or the branch that you've set as your GitHub Pages source) with a single line matching the domain you have chosen (e.g. `foo.js.org`). You can also use the UI in the repository settings as discussed below, if desired.

If you're [publishing using a workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch):

A `CNAME` file will not be processed when publishing a site via a workflow, so you will need to use the UI in the repository settings to [add the custom domain](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-sit). Head into the repository settings and under the Pages tab add your JS.ORG subdomain as a custom domain.

### Step 4

To finish the procedure, make a pull request in this GitHub repository that adds your subdomain to the [subdomains list](https://github.com/js-org/js.org/blob/master/cnames_active.js) of existing JS.ORG domains. Your new URL should go live within 24 hours (keep an eye on your pull request in case of a naming conflict or if there are requested changes).

## Other Providers

If you'd like to use JS.ORG for a website hosted elsewhere, you can do that too!

### Step 1

If you haven't already, get your site setup with whatever hosting provider you desire. Note that to use JS.ORG, your hosting provider will need to support adding custom domains via a CNAME DNS record.

### Step 2

Now determine your JS.ORG subdomain: either choose your username or the name of your repository according to the existing GitHub Pages URL (for `http://foo.github.io/bar`, either `foo.js.org` or `bar.js.org` would be possible). More details are available in the [wiki](https://github.com/js-org/js.org/wiki).

### Step 3

Follow your hosting provider's instructions for adding a custom domain to your site, if configuration is needed.

<!-- TODO: Common provider notes? Vercel? Netlify? Cloudflare Pages? -->

### Step 4

As above with adding a subdomain to a GitHub Pages site, the final step is to make a pull request in this GitHub repository that adds your subdomain to the [subdomains list](https://github.com/js-org/js.org/blob/master/cnames_active.js) of existing JS.ORG domains.

---

> [!IMPORTANT]
> Please be aware that there are some rules that apply to website content hosted on JS.ORG subdomains:
>
> **Websites must be *directly* related to the JavaScript ecosystem/community (such as NPM packages / JS tools, not personal pages / portfolios)**
> 
> - No placeholder pages. Websites must contain substantive content relevant to their purpose.
> - No automatic redirects away from the **js.org** domain. Redirects must require user interaction.
> - No unrelated content. Websites must stay focused on their intended topic or purpose.
>
> _Additionally, please be aware of our full [Terms and Conditions](https://js.org/terms.html) for the JS.ORG service._

---

Thanks to **[Cloudflare](https://www.cloudflare.com)** for their awesome DNS service that makes this service possible. While JS.ORG is using their free plan - to a shameless extent - they helped us more than once with some flexible solutions and extended quotas. Many thanks!
