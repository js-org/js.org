[![JS.ORG Logo](http://logo.js.org/png/github_header.png)](http://js.org)

[![JS.ORG](https://img.shields.io/badge/js.org-+-FFE70B.svg?style=flat-square)](http://js.org)
[![PRs](https://img.shields.io/github/issues-pr-closed-raw/js-org/js.org.svg?style=flat-square&colorB=31a88b&label=Pull%20Requests)](https://github.com/js-org/js.org/pulls?q=is%3Apr+is%3Aclosed+label%3Aadd)
[![Donate](https://img.shields.io/badge/Donate-for_registrar_fees-blue.svg?style=flat-square&logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RPBWBDBKW62AC)

**To get a short and sleek subdomain for your own GitHub Pages site follow these 4 Steps:**

### Step 1
If you haven't already, now it's time to log in to your GitHub account and set up your GitHub Pages site following the instructions [here](https://pages.github.com/). To get a head start you can simply use the generator with one of the provided themes and **add some reasonable content to your new page**.

### Step 2
Now determine your js.org subdomain: either choose your username or the name of your repo according to the existing GitHub Pages URL (for ```http://foo.github.io/bar```, either ```foo.js.org``` or ```bar.js.org``` would be possible). More details in the [wiki](https://github.com/js-org/js.org/wiki).

### Step 3
Add a file named ```CNAME``` to your repo (in the ```gh-pages``` branch for project pages) with a single line matching the domain you have chosen (e.g. ```foo.js.org```). If you prefer a webinterface form, have a look at [GitHub Pages Help](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/).

### Step 4
To finish the procedure, make a pull request in this GitHub repository that adds your subdomain to the [list](https://github.com/js-org/js.org/blob/master/cnames_active.js) of existing JS.ORG domains. Your new URL should go live within 24 hours (keep an eye on your pull request in case of a naming conflict).
 
# 

### Thanks
... to **[Cloudflare](https://www.cloudflare.com)** for their superb DNS service that makes this possible. While JS.ORG is using their free plan - to a shameless extent - they helped us more than once with some flexible solutions and extended quotas. Many thanks!
