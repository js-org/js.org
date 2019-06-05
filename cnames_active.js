
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
 * CLOUDFLARE:  JS.ORG uses CloudFlare as its DNS. By default, CloudFlare proxies all requests to your subdomain
 *              to get SSL support (https://foo.js.org) and make use of browser caching with a TTL of 30 min.
 *              But you can opt-out from this and make Cloudflare forward all requests directly to GitHub.
 *              Just add '//noCF' in the line of your requested subdomain to give us a hint.
 *              (all the lines marked with '//noCF?' are from a time when a requester had to explicitly opt-in;
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
 *              BECAUSE OF THE RISK OF ABUSE, I´M NOT ACCEPTING REQUESTS FOR PAGES WITHOUT REASONABLE CONTENT!
 */

var cnames_active = {
  "": "js-org.github.io",
  "100dayz": "deadcoder0904.github.io/100dayz",
  "101": "7anshuai.github.io/js101", // noCF? (don´t add this in a new PR)
  "131": "netrvin.github.io",
  "140513": "140513.github.io",
  "1c": "oknosoft.github.io/1c",
  "21cm": "21cm.github.io",
  "23chemistrycamp": "nchuchemistry.github.io/23chemistrycamp",
  "2tube": "you2php.github.io/you2php",
  "3d-go": "3d-go.netlify.com",
  "404": "licshee.github.io/404",
  "76": "hustcc.github.io/76",
  "766": "766.github.io",
  "7anshuai": "7anshuai.github.io", // noCF? (don´t add this in a new PR)
  "98": "1j01.github.io/98",
  "9932": "dannyzhan.github.io",
  "abbyz": "Abbyzhoum.github.io",
  "abc": "afexteam.github.io/abc-mobile",
  "abdalla": "the94air.github.io/abdalla",
  "abhishek": "rpidanny.github.io/personal-collage",
  "abhishekmittal": "abhishek-mittal.github.io/abhishekmittal",
  "abialbon": "abialbon.github.io",
  "acarsy": "acarsy.github.io",
  "accessibility": "guilhermedelemos.github.io/accessibility",
  "accordion": "awps.github.io/Accordion.JS",
  "acebooks": "mohamed0group.github.io/acebooks",
  "acegroup": "mohamed0group.github.io/acegroup",
  "acho": "achojs.github.io/acho",
  "acme": "makepost.github.io/acme-commander",
  "action-u": "kevinast.github.io/action-u",
  "active-resource": "nicklandgrebe.github.io/activeresource.js",
  "acyort": "acyortjs.github.io/site",
  "ada": "ada-js.netlify.com",
  "adil": "adilzeshan.github.io/adil",
  "adnanbabakan": "adnanbabakan.github.io",
  "adon988": "adon988.github.io",
  "aemp": "afexteam.github.io/aemp",
  "affiliate": "teamtofu.github.io/affiliate",
  "agentnpm": "meetping.github.io/agentnpm",
  "aghasemi": "aghasemi.github.io",
  "agrawalnaman": "agrawalnaman.github.io",
  "agrawalrohit": "rohit0803.github.io/agrawal.github.io",
  "ahmad": "aruzikulov.github.io/ahmad",
  "airtable-plus": "victorhahn.github.io/airtable-plus",
  "ais": "yunyoujun.github.io/ais.js",
  "ajaxable": "artf.github.io/ajaxable",
  "ajinkya": "steelx.github.io/ajinkyaxjs",
  "ajv": "epoberezkin.github.io/ajv",
  "akase": "cedmax.github.io/akase", // noCF? (don´t add this in a new PR)
  "akatsuki": "akatsukijs.github.io/akatsuki",
  "akshay": "akshaygulhane.github.io",
  "akshaybhalotia": "akshaybhalotia.github.io",
  "alasql": "alasql.github.io", // noCF? (don´t add this in a new PR)
  "albertmolodec": "albertmolodec.github.io",
  "alfred": "amilajack.github.io/alfred",
  "algebra": "nicolewhite.github.io/algebra.js", // noCF? (don´t add this in a new PR)
  "ali": "alibouhrouche.github.io",
  "alien": "pschroen.github.io/alien.js",
  "aligos": "aligos.github.io", // noCF? (don´t add this in a new PR)
  "all": "learnsomuch.github.io/all.js", // noCF? (don´t add this in a new PR)
  "all-contributors": "all-contributors-js-org.netlify.com",
  "alley": "tinyalley.github.io",
  "almin": "almin.github.io",
  "alpap": "alpap.github.io/Portfolio",
  "alt": "goatslacker.github.io/alt", // noCF? (don´t add this in a new PR)
  "alveron": "rofrischmann.github.io/alveron",
  "alys": "rmjordas.github.io/alys",
  "amaple": "amjs-team.github.io/amaple",
  "amorphous": "ariabuckles.github.io/amorphous",
  "amp": "afexteam.github.io/amp",
  "amrit": "amritsrivastava.github.io",
  "andresito": "andresitodeguzman.github.io/andresito",
  "anenth": "anenth.github.io", // noCF? (don´t add this in a new PR)
  "angular-jsf": "json-schema-faker.github.io/angular-jsf", // noCF? (don´t add this in a new PR)
  "angular-uikit": "whoisjorge.github.io/angular-uikit",
  "angular2in1": "angular2in1.github.io/angular2in1js", //noCF
  "angularstompdk": "davinkevin.github.io/AngularStompDK", // noCF? (don´t add this in a new PR)
  "animals-ascii": "neotidev.github.io/animals-ascii-doc",
  "anime": "meguminsama.github.io/anime",
  "animo": "thrivingkings.github.io/animo",
  "animorph": "claudiobmgrtnr.github.io/animorph",
  "anna": "anna-wro.github.io/anna",
  "annotate": "taitems.github.io/web-pdf-annotation", // noCF? (don´t add this in a new PR)
  "annoyingmouse": "annoyingmouse.github.io", // noCF? (don´t add this in a new PR)
  "antropodigital": "antropodigital.github.io/CirculodeEstudio",
  "antwar": "antwarjs.github.io/antwar",
  "api-spec": "api-spec.github.io", // noCF? (don´t add this in a new PR)
  "apicluster": "ramsunvtech.github.io/apicluster", // noCF? (don´t add this in a new PR)
  "aping": "johnnythetank.github.io/apiNG", // noCF? (don´t add this in a new PR)
  "aplayer": "diygod.github.io/APlayer",
  "apod": "marcosflorencio.github.io/angular-apod", // noCF? (don´t add this in a new PR)
  "applied": "omahajs.github.io/applied",
  "apprun": "yysun.github.io/apprun",
  "appsocket": "appsocket.netlify.com",
  "apr": "ramitos.github.io/apr",
  "arc": "diegohaz.github.io/arc",
  "arcn": "alexakasanjeev.github.io/arcn",
  "arda": "ardasoyturk.github.io",
  "argo": "albertosantini.github.io/argo", // noCF? (don´t add this in a new PR)
  "arief": "1997arief.github.io",
  "arime": "ninbryan.github.io/arime", // noCF? (don´t add this in a new PR)
  "artalk": "qwqcode.github.io/Artalk",
  "artery": "arteryjs.github.io/gh-pages", // noCF? (don´t add this in a new PR)
  "arthurmbandeira": "arthurmbandeira.github.io",
  "ass": "weizhenye.github.io/ASS",
  "ass-editor": "jeff-tian.github.io/ass",
  "ast": "kindy.github.io/ast",
  "astral": "espinielli.github.io/astraljs", // noCF? (don´t add this in a new PR)
  "astrobench": "kupriyanenko.github.io/astrobench", // noCF? (don´t add this in a new PR)
  "astx-redux-util": "kevinast.github.io/astx-redux-util",
  "async-af": "asyncaf.github.io/AsyncAF",
  "atavic": "atavic.github.io",
  "atel": "atelchang.github.io",
  "atombundles": "lirantal.github.io/atombundles",
  "atomgit": "sawyerbx.github.io/atom-git-docs",
  "atomic-layout": "kettanaito.github.io/atomic-layout-docs",
  "atomicreact": "atomicreact.github.io/AtomicReact",
  "audio-stream": "guywhogeek.github.io/audio-stream",
  "autodocs": "bguiz.github.io/autodocs", // noCF? (don´t add this in a new PR)
  "automic": "automicjs.github.io",
  "ava": "aiava.github.io",
  "avi": "avinassh.github.io/avi", // noCF? (don´t add this in a new PR)
  "avner": "avnerus.github.io", // noCF? (don´t add this in a new PR)
  "avstream": "akash-joshi.github.io/avstream.js",
  "awal": "awalGarg.github.io", // noCF? (don´t add this in a new PR)
  "awesome-alexa": "dolanmiu.github.io/MMM-awesome-alexa",
  "awesome-nuxt": "ansidev.github.io/awesome-nuxt",
  "awesome-vue": "rmjordas.github.io/awesome-vue",
  "awesomefeed": "arojunior.github.io/awesome-feed",
  "awesomehub": "awesomehub.netlify.com",
  "awk": "42ua.github.io/awk",
  "awoo": "awoojs.github.io/website",
  "axelgreavette": "axelgreavette.github.io",
  "azdanov": "azdanov.netlify.com", //noCF
  "aziz": "iaziz786.netlify.com",
  "bara": "barajs.github.io/bara",
  "bachors": "bachors.github.io",
  "backlog": "backlog-js.github.io/backlog.js.org", // noCF? (don´t add this in a new PR)
  "backstage": "backstagejs.github.io/backstage",
  "backwards-n": "backwards-n.github.io",
  "badger": "just-glue-it.github.io/badger", // noCF? (don´t add this in a new PR)
  "badrudeen": "badrudeen.github.io", // noCF? (don´t add this in a new PR)
  "bai": "abaijs.github.io",
  "bali": "balijs.github.io",
  "bananaticos": "bananaticos.github.io/bananaticos-website", //noCF
  "bancho": "thepoon.github.io/bancho.js",
  "bandicoot": "canopytax.github.io/bandicoot.js.org",
  "bandung": "zufrizalyordan.github.io/bandungjs",
  "barba": "barbajs.github.io/barba",
  "barbagrigia": "barbagrigia.github.io",
  "base64": "licshee.github.io/base64",
  "bash": "bashjs.github.io",
  "basicgame": "basicgame.github.io/basicGame.js", // noCF? (don´t add this in a new PR)
  "bastion": "snkrsnkampa.github.io/Bastion-Site",
  "batch-cluster": "mceachen.github.io/batch-cluster.js",
  "battle-city": "shinima.github.io/battle-city",
  "battlecry": "battlecry.pedrosm.com",
  "battlerite": "dragory.github.io/battlerite.js",
  "bbn": "jammer99.github.io/bbn",
  "bc": "mazko.github.io/bc.js",
  "bci": "pwstegman.github.io/bcijs",
  "bcklib": "zyyou.github.io/npm-modules",
  "be": "davidep87.github.io/bejs.github.io",
  "beaga": "beagajs.github.io/beaga",
  "becarefulwith": "xMikee1.github.io/becarefulwith",
  "begin": "advanced-webapps-class.github.io/begin", // noCF? (don´t add this in a new PR)
  "benjick": "benjick.github.io",
  "berzan": "newbie13xd.github.io/berzan",
  "besafe": "ma124.github.io/BeSafe",
  "bestof": "michaelrambeau.github.io/bestofjs",
  "between": "na-west1.surge.sh",
  "brotat": "mariobob.github.io/brotat-website",
  "bind-action-dispatchers": "cchamberlain.github.io/bind-action-dispatchers", // noCF? (don´t add this in a new PR)
  "birb": "purpzie.github.io/birb.js.org",
  "biu": "aprilorange.github.io/biu", // noCF? (don´t add this in a new PR)
  "bfd": "mrsheldon.github.io/bfd.js",
  "black-fury": "black-fury.github.io",
  "blessmyrains": "dusterthefirst.github.io/blessmyrains",
  "bloomer": "algusdark.github.io/bloomer",
  "blotter": "bradley.github.io/Blotter",
  "bluelightos": "bluelightos.ddns.net",
  "blurple": "blurplejs.github.io/docs",
  "boats": "discordboats.github.io",
  "bob": "bhamblok.github.io",
  "bodybuilder": "danpaz.github.io/bodybuilder", // noCF? (don´t add this in a new PR)
  "boiler": "ro0t.github.com/Boiler",
  "boilerplates": "ckgrafico.github.io/frontend-boilerplates",
  "boldom": "marcisbee.github.io/boldom",
  "bombsweeper": "pakastin.github.io/bombsweeper",
  "bonzibuddy": "fardindadev.github.io/bonzibuddy",
  "bookmarklets": "novadevelopment.github.io/bookmarklets.js",
  "bool": "booljs.github.io",
  "booru": "atlasthebot.github.io/booru",
  "bootstrap-confirmation": "mistic100.github.io/Bootstrap-Confirmation", // noCF? (don´t add this in a new PR)
  "bootstrap-validate": "pascalebeier.github.io/bootstrap-validate",
  "bootstrap-vue": "bootstrap-vue.github.io",
  "bootstrap-vue-arsenic": "ycs77.github.io/bootstrap-vue-arsenic",
  "bornaeon": "bornaeon.github.io",
  "botgram": "botgram.github.io/botgram",
  "bottender": "bottenderjs.github.io",
  "boundless": "enigma-io.github.io/boundless",
  "box": "capacitorset.github.io/box-js", // noCF
  "brain": "brainjs.github.io/brain.js",
  "brandifyjs": "greybax.github.io/brandifyjs",
  "brandonmerritt": "brandonmerritt.github.io", // noCF? (don´t add this in a new PR)
  "bricklayer": "ademilter.github.io/bricklayer", // noCF? (don´t add this in a new PR)
  "browserless": "kikobeats.github.io/browserless",
  "brugnara": "brugnara.github.io",
  "brum": "brumjs.github.io", // noCF? (don´t add this in a new PR)
  "bt": "mldonkey.github.io/bt",
  "btgprice": "beeyev.github.io/btgprice.org",
  "bun": "the94air.github.io/bun",
  "bunjil": "bunjil.netlify.com",
  "bunyan-fork": "cchamberlain.github.io/bunyan-fork", // noCF? (don´t add this in a new PR)
  "bunyan-pmx": "cchamberlain.github.io/bunyan-pmx", // noCF? (don´t add this in a new PR)
  "bunyan-serializer": "cchamberlain.github.io/bunyan-serializer", // noCF? (don´t add this in a new PR)
  "burst": "hugeen.github.io/burst", // noCF? (don´t add this in a new PR)
  "bustime": "agarzola.github.io/bustime", // noCF? (don´t add this in a new PR)
  "buttermilk": "buttermilk.netlify.com",
  "c": "cocobear.github.io",
  "c-3po": "ttag-org.github.io/c-3po",
  "cable": "whatgoodisaroad.github.io/cablejs", // noCF? (don´t add this in a new PR)
  "cac": "cac.netlify.com",
  "caffeine": "ccrraaiigg.github.io/caffeine",
  "cagatay": "cagataycali.github.io",
  "calcy": "odevlord.github.io/Calcy", // noCF? (don´t add this in a new PR)
  "calendarios": "helpdev.github.io/Calendarios", // noCF? (don´t add this in a new PR)
  "candy": "candy02058912.github.io/portfolio",
  "candyland": "candyland-js.github.io/candyland",
  "candyref": "bbyjins.github.io/candy",
  "cans": "djyde.github.io/cans", // noCF
  "canvas": "anshuman-verma.github.io/canvas",
  "canvasconstructor": "kyranet.github.io/canvas-constructor-website",
  "canvo": "canvojs.github.io",
  "capital": "capitaljs.github.io/capitaljs",
  "capsid": "capsidjs.github.io/capsid",
  "capsule": "capsule-js-org.github.io/capsule",
  "carbon": "ardalanamini.github.io/carbonjs",
  "cardtabs": "blekerfeld.github.io/CardTabs",
  "cargo": "herber.github.io/cargo",
  "carloseduardo": "karllossouza.github.io/carloseduardo.js.org",
  "carmi": "wix-incubator.github.io/carmi",
  "cartodb-demo": "opensas.github.io/cartodb-demo", // noCF? (don´t add this in a new PR)
  "cassie": "milesgitgud.github.io/cassie",
  "cats": "whoisjorge.github.io/not-cat-gifs",
  "cbm": "iamnapo.github.io/cbmjs",
  "cebu": "javascriptcebu.netlify.com",
  "cennznet": "cennznet.github.io/cennznet-ui",
  "chaaat": "chaaat.github.io",
  "chain-able": "fluents.github.io/chain-able-site",
  "chatexchange": "jacob-gray.github.io/ChatExchangeJS",
  "charge": "charge-js.netlify.com",
  "chartconstructor": "quarksworks.github.io/chartConstructor",
  "chandzhang": "chandzhang.github.io",
  "cheerio": "cheeriojs.github.io/cheerio",
  "chernivtsi": "chernivtsijs.github.io",
  "chig": "eliotchignell.github.io",
  "chimon2000": "chimon2000.github.io", // noCF? (don´t add this in a new PR)
  "chirashi": "chirashijs.github.io/chirashi",
  "chordthing": "ifons42.github.io/chordthing",
  "chrismendis": "chrismendis.github.io", // noCF? (don´t add this in a new PR)
  "christo": "christoga.github.io/js-org", // noCF? (don´t add this in a new PR)
  "christopher": "marekkobida.github.io/christopher",
  "chronos": "espinielli.github.io/chronos", // noCF? (don´t add this in a new PR)
  "cineasta": "cineasta-js.github.io/cineasta-docs",
  "ciphercrack": "avirut.github.io/ciphercrack",
  "citation": "citation-js.github.io/site",
  "citeapa": "natsuozawa.github.io/citeapa",
  "city": "city.github.io",
  "civet": "civet-org.github.io",
  "clabe-validator": "center-key.github.io/clabe-validator",
  "clark": "clarkdo.github.io/new-blog",
  "clarkdo": "clarkdo.github.io",
  "clause": "clausejs.github.io/clausejs",
  "clevercord": "theanidox.github.io/Clevercord",
  "clockwork": "clockworkdev.github.io/ClockworkWebsite",
  "clusterize": "nexts.github.io/Clusterize.js",
  "cmbhackjs2013": "cmbjs.github.io/cmbHackjs2013",
  "cmdhub": "thatonetqnk.github.io/cmdhub",
  "cml": "didi.github.io/chameleon",
  "cn.iflow": "unadlib.github.io/iflow-docs-cn",
  "cn.mobx": "sangka.github.io/mobx-docs-cn", // noCF
  "cn.redux": "camsong.github.io/redux-in-chinese", // noCF? (don´t add this in a new PR)
  "cn.rx": "rxjs-cn.github.io/RxJS-Docs-CN", // noCF
  "cnc": "cncjs.github.io/cncjs.org",
  "codebooky": "hiteshsubnani0128.github.io/codebooky",
  "codemade": "codemade.github.io", // noCF? (don´t add this in a new PR)
  "codepan": "egoist.github.io/codepan",
  "codesurfer": "code-surfer.netlify.com", // noCF
  "codinsky": "izhaki.github.io/codinsky",
  "coffea": "caffeinery.github.io/coffea",
  "coir": "channg.github.io/coir",
  "collegequest": "schoolhouserock.github.io/CollegeQuest", // noCF? (don´t add this in a new PR)
  "colombo": "cmbjs.github.io/CMBJS",
  "color": "akash-joshi.github.io/neural-color-picker",
  "colorlab": "signalwerk.github.io/colorlab",
  "comframe": "haydennyyy.github.io/comframe",
  "comixngn": "seun40.github.io/comix-ngn", // noCF? (don´t add this in a new PR)
  "commandfox": "commandfox.github.io/mc-tools", // noCF? (don´t add this in a new PR)
  "commitlint": "conventional-changelog.github.io/commitlint",
  "common-utils-pkg": "iamdevlinph.github.io/common-utils-pkg",
  "community.os": "js.bydiscourse.com", // noCF? (don´t add this in a new PR)
  "concurrent-tasks": "hosting.gitbook.com",
  "concursos": "mteyss.github.io/concursos", // noCF? (don´t add this in a new PR)
  "conductor": "hosting.gitbook.com",
  "construyendotrabajo": "mteyss.github.io/construyendotrabajo", // noCF? (don´t add this in a new PR)
  "consultant": "jense5.github.io/consultant",
  "contextify": "abemedia.github.io/jquery-contextify", // noCF? (don´t add this in a new PR)
  "cookiebox": "metaa.gitlab.io/cookiebox.js",
  "coord": "itsacorn.github.io/jscoord",
  "copyer": "tsycode.github.io/copyer.js",
  "copywriting-correct": "rikakomoe.github.io/copywriting-correct",
  "cordova-multiplatform-template": "ckgrafico.github.io/Cordova-Multiplatform-Template", // noCF? (don´t add this in a new PR)
  "cork": "davej.github.io/CorkJS",
  "corki": "dvtate.github.io/corki",
  "corps": "copay.github.io",
  "cote": "dashersw.github.io/cote", // noCF? (don´t add this in a new PR)
  "countr": "gleeny.github.io/countr",
  "country": "growmies.github.io/countryjs", // noCF? (don´t add this in a new PR)
  "cp": "nestedobjects.github.io/cp",
  "cplayer": "copay.github.io/cPlayer",
  "cq-websocket": "momocow.github.io/node-cq-websocket",
  "cqrs": "adrai.github.io/cqrs", // noCF? (don´t add this in a new PR)
  "cr": "echosoar.github.io/cr",
  "cracked": "billorcutt.github.io/Cracked",
  "create-project": "chalarangelo.github.io/create-js-project",
  "createrest": "atomixinteractions.github.io/createrest",
  "creaturegen": "ryancromebook.github.io/creaturegen",
  "crunch": "vukicevic.github.io/crunch", // noCF? (don´t add this in a new PR)
  "cryptokey": "rumkin.github.com/crypto-key",
  "csv": "adaltas.github.io/node-csv-docs",
  "cucumber-mink": "adezandee.github.io/cucumber-mink", // noCF? (don´t add this in a new PR)
  "curi": "pshrmn.github.io/curi",
  "currency": "scurker.github.io/currency.js",
  "curseapp": "mcrocks999.github.io/curseapp.js",
  "customrpc": "realalexsss.github.io/CustomRPC",
  "cybernaut": "clebert.github.io/cybernaut",
  "cycle": "cyclejs.github.io",
  "cyclow": "pmros.github.io/cyclow", // noCF
  "cyliim": "cyliim.github.io",
  "cyris": "iCyris.github.io",
  "d4": "joelburget.github.io/d4",
  "dahlia": "dahliajs.github.io",
  "daily.tmr": "ttttmr.github.io/daily", // noCF
  "damo": "damodharanj.github.io",
  "danmaku": "weizhenye.github.io/Danmaku",
  "danmol": "dan12mol.github.io", // noCF? (don´t add this in a new PR)
  "dap": "jooher.github.io/dap",
  "data-dashboard": "dnajs.github.io/data-dashboard",
  "dataclass": "alexeyraspopov.github.io/dataclass",
  "datastructures": "deadcoder0904.github.io/datastructures",
  "date": "matthewmueller.github.io/date", // noCF? (don´t add this in a new PR)
  "davet": "egecue.github.io/davet",
  "davidtaylorjr": "davidtaylorjr.github.io",
  "dawn": "dawnelixir.github.io/dawn.js.org",
  "day": "iamkun.github.io/dayjs",
  "daysfromnow": "pedrokost.github.io/daysfromnow", // noCF? (don´t add this in a new PR)
  "dbar": "dbarjs.github.io",
  "dbo": "z3ta.github.io/dbo", // noCF? (don´t add this in a new PR)
  "deck-of-cards": "pakastin.github.io/deck-of-cards",
  "deepfractal": "munrocket.github.io/deep-fractal",
  "deepu": "deepu105.github.io",
  "defi": "finom.github.io/defi.js.org",
  "delegacias-fortaleza": "juliosampaio.github.io/delegacias-fortaleza", // noCF? (don´t add this in a new PR)
  "delet": "ds-development.github.io/delet",
  "denisvieira": "fromdenisvieira.github.io", // noCF? (don´t add this in a new PR)
  "deox": "deox.netlify.com",
  "depo": "boltxyz.github.io/depo",
  "deputy": "ry4nolson.github.io/Deputy", // noCF? (don´t add this in a new PR)
  "detect-resize": "noderaider.github.io/detect-resize", // noCF? (don´t add this in a new PR)
  "detector": "blackmirror1980.github.io/detector-js",
  "deterministic": "nodeguy.github.io/Deterministic.js",
  "dgelong": "alexeyraspopov.github.io/dgelong", // noCF? (don´t add this in a new PR)
  "dhruvdutt": "dhruvdutt.github.io",
  "diamond": "diamondpkg.github.io/website",
  "dice": "dicediscord.netlify.com",
  "dickbutt": "xpde.github.io/dickbutt",
  "diffract": "ameyms.github.io/diffract", // noCF? (don´t add this in a new PR)
  "dinesh": "dineshondev.github.io/dinesh", // noCF? (don´t add this in a new PR)
  "dinos": "0xflotus.github.io/dinos",
  "dio": "thysultan.github.io/dio.js",
  "discord": "discordjs.github.io/website",
  "discord4node": "mrsheldon.github.io/Discord4Node",
  "discordutil": "chroventer.github.io/discordutil",
  "discunit": "megacode18.github.io/discunit.js",
  "disode": "disode.github.io/disode",
  "display": "arguiot.github.io/DisplayJS",
  "distillery": "achannarasappa.github.io/distillery", // noCF? (don´t add this in a new PR)
  "distri": "flarp.github.io/Distri.js",
  "distribution": "distributionjs.github.io/website",
  "div": "div-js.github.io/div.js.org",
  "djinn-state": "djinn-state.github.io/djinn-state",
  "djsbasics": "djsbasics.gitlab.io/mkdocs",
  "djvu": "russcoder.github.io/djvujs", // noCF
  "djzhao": "djzhao627.github.io",
  "dmitry": "dmitry-zaets.github.io",
  "dna": "dnajs.github.io/dna.js",
  "dns": "js-org.github.io/dns.js.org",
  "docile": "teamtofu.github.io/docile",
  "docsify": "docsifyjs.github.io/docsify",
  "docsify-es": "sidval.github.io/docsify-es",
  "docsify-ru": "truepatch.github.io/docsify-ru",
  "docsite": "txd-team.github.io/docsite-doc-v1",
  "documentation": "documentationjs.github.io", // noCF? (don´t add this in a new PR)
  "docute": "egoist.github.io/docute",
  "docx": "dolanmiu.github.io/docx",
  "dodec-design": "dodec-design.github.io",
  "dogstack": "dogstack.gitbooks.io/handbook", // noCF
  "dollar": "defims.github.io/dollar",
  "dolphin": "uyouthe.github.io/dolphin",
  "domtastic": "webpro.github.io/DOMtastic",
  "donavon": "donavon.github.io", // noCF? (don´t add this in a new PR)
  "dope": "fouad.github.io/dope", // noCF? (don´t add this in a new PR)
  "dot": "dvs-bilisim.github.io/dot",
  "doz": "dozjs.github.io/website",
  "dplayer": "diygod.github.io/DPlayer", // noCF
  "dprof": "andreasmadsen.github.io/dprof",
  "draft": "D1SC0tech.github.io/draft.js", // noCF? (don´t add this in a new PR)
  "drag": "classicoldsong.github.io/Drag.js", // noCF? (don´t add this in a new PR)
  "dragon": "sabertazimi.github.io/dragonjs", // noCF? (don´t add this in a new PR)
  "draw": "skillzzjesse.github.io/draw",
  "drome": "dromejs.github.io/drome.js.org",
  "drupi": "drupijs.github.io/website",
  "dtools": "mrsheldon.github.io/dtools.js",
  "dtps": "jottocraft.github.io/dtps",
  "du": "ruanyl.github.io/du", // noCF? (don´t add this in a new PR)
  "dualcyclone": "dualcyclone.github.io/postit-todo-react-redux",
  "dunedin": "dunedinjs.github.io",
  "dungeon": "youssefelshemi.github.io/dungeon.js",
  "dvan": "dvan.netlify.com",
  "dynaflo": "trevorhanus.github.io/dynaflo",
  "dynamic-record": "na-west1.surge.sh",
  "dynamicsnode": "crisfervil.github.io/DynamicsNode",
  "dynwriter": "orbitalproject.github.io/dyn-client",
  "dyo": "dyo.github.io/dyo",
  "eahmed234": "eahmed234.github.io",
  "easy-bot": "bigaston.github.io/easy-bot",
  "eatery-nod-w": "kevinast.github.io/eatery-nod-w",
  "ebnsina": "ebnsina.github.io/js.ebnsina.me",
  "echo": "licshee.github.io/echo.js",
  "ed2k": "sunnyli.github.io/ed2k.js",
  "ef": "classicoldsong.github.io/ef.js.org",
  "effectful": "awto.github.io/effectfuljs",
  "effector": "zerobias.github.io/effector",
  "elastic-builder": "sudo-suhas.github.io/elastic-builder",
  "electron-react-boilerplate": "electron-react-boilerplate.github.io/site",
  "elementnet": "elementnet.github.io",
  "elf": "mytharcher.github.io/elf.js.org", // noCF? (don´t add this in a new PR)
  "elixor":"hosting.gitbook.com",
  "elliot": "elliotboney.github.io", // noCF? (don´t add this in a new PR)
  "elmo": "lap00zza.github.io/elmo",
  "elock": "yourtion.github.io/node-elock",
  "email-templates": "niftylettuce.github.io/email-templates",
  "emage": "douglasjunior.github.io/emage",
  "embedlam": "wnda.github.io/embedlam",
  "ember-cli-page-object": "san650.github.io/ember-cli-page-object", // noCF? (don´t add this in a new PR)
  "ember-electron": "felixrieseberg.github.io/ember-electron",
  "emeraldcraftmc": "emeraldcraftmc.github.io", // noCF? (don´t add this in a new PR)
  "emoji": "egoist.github.io/emoji",
  "emojipanel": "danbovey.github.io/EmojiPanel",
  "empathy": "the94air.github.io/empathy",
  "emulisp": "grahack.github.io/EmuLisp", // noCF? (don´t add this in a new PR)
  "enclave": "eanplatter.github.io/enclave", // noCF? (don´t add this in a new PR)
  "endb": "chroventer.github.io/endb",
  "energy": "energychain.github.io/energy",
  "engui": "engui.github.io",
  "epoxy": "hosting.gitbook.com",
  "eplayer": "132yse.github.io/eplayer",
  "eq8": "eq8.github.io",
  "eqeq": "slikts.github.io/js-equality-game",
  "eray": "erayarslan.github.io", // noCF? (don´t add this in a new PR)
  "erebos": "mainframehq.github.io/erebos",
  "erdems": "erdemsweb.github.io",
  "erest": "yourtion.github.io/node-erest",
  "erik": "erikroyall.github.com", // noCF? (don´t add this in a new PR)
  "erikng": "eriknguyen.github.io",
  "erisa": "erisaaa.github.io",
  "es.redux": "sergiodxa.github.io/redux-in-spanish", // noCF? (don´t add this in a new PR)
  "es2015-node": "martinheidegger.github.io/es6modules-nodejs", // noCF? (don´t add this in a new PR)
  "es6-module-seed": "blackmirror1980.github.io/es6-module-seed",
  "es6-tween": "tweenjs.github.io/es6-tween",
  "escape": "licshee.github.io/Escape.js", // noCF? (don´t add this in a new PR)
  "esfx": "esfx.github.io",
  "esper": "codecombat.github.io/esper.js",
  "ethavatar": "filips123.github.io/EthAvatar.JS",
  "euc": "wnda.github.io/euc",
  "euclid": "anandthakker.github.io/euclid", // noCF? (don´t add this in a new PR)
  "eval": "jshawl.github.io/eval", // noCF? (don´t add this in a new PR)
  "event-storage": "albe.github.io/node-event-storage",
  "eventstore": "adrai.github.io/node-eventstore", // noCF? (don´t add this in a new PR)
  "evolutions": "anshumanv.github.io/evolutions-webapp",
  "evolutionland": "evolutionlandorg.github.io/js-sdk",
  "ewa": "lyfeyaj.github.io/ewa",
  "exbars": "youssefkababe.github.io/exbars", // noCF? (don´t add this in a new PR)
  "excmd": "elliottcable.github.io/excmd.js",
  "exiftool-vendored": "mceachen.github.io/exiftool-vendored.js",
  "exp": "magicops.github.io/JQuery-expression-builder",
  "extenso": "theuves.github.io/extenso.js.org",
  "extraction": "rse.github.io/extraction", // noCF? (don´t add this in a new PR)
  "eye": "arguiot.github.io/EyeJS",
  "facepalm": "santiagogil.github.io/facepalm",
  "facreative": "facreative.github.io",
  "fairy": "fairymeee.github.io",
  "fallr": "faisalman.github.io/fallr-js",
  "fan": "garychamberlain.github.io/fan",
  "fantas": "fantastiser.github.io",
  "farfetchd": "achannarasappa.github.io/farfetchd", // noCF? (don´t add this in a new PR)
  "faucet": "faucetjs.github.io",
  "faux": "fauxOS.github.io",
  "fcbosque": "cronopio.github.io/fcbosque", // noCF? (don´t add this in a new PR)
  "fe": "xcss.github.io/FE",
  "feature-u": "kevinast.github.io/feature-u",
  "feeble": "feeblejs.github.io/feeble",
  "feedback": "mubaidr.github.io/feedback.io",
  "fela": "rofrischmann.github.io/fela", // noCF? (don´t add this in a new PR)
  "festercluck": "festercluck.github.io", // noCF? (don´t add this in a new PR)
  "fetch-json": "center-key.github.io/fetch-json",
  "fidel": "fidelyz.coding.me",
  "fikri": "ikrydev.github.io/fikri.js.org",
  "filer": "filerjs.github.io/filer",
  "finder": "applait.github.io/finderjs", // noCF? (don´t add this in a new PR)
  "fire-hydrant": "cchamberlain.github.io/fire-hydrant", // noCF? (don´t add this in a new PR)
  "firenze": "fahad19.github.io/firenze", // noCF? (don´t add this in a new PR)
  "five": "jackdcrawford.github.io/five",
  "flamecord": "flamexode.github.io/flamecord",
  "flameshot": "flameshotapp.github.io",
  "flatpickr": "flatpickr.github.io",
  "flavor": "blackmirror1980.github.io/flavor-js",
  "fld-grd": "mrksbnch.github.io/fld-grd",
  "flexmasonry": "kavanmevada.github.io/flex_masonry", // noCF
  "floffan": "floffah.github.io/floffan",
  "flowchart": "adrai.github.io/flowchart.js", // noCF? (don´t add this in a new PR)
  "flowcon": "oknosoft.github.io/flowcon",
  "fluid": "jottocraft.github.io/fluid",
  "fluxoff": "kingscott.github.io/flux-off", // noCF? (don´t add this in a new PR)
  "flybook": "rhiokim.github.io/flybook",
  "flying-squid.prismarine": "prismarinejs.github.io/flying-squid",
  "fnx": "fnxjs.gitbooks.io/fnx-documentation",
  "fontdragr": "ryanseddon.github.io/font-dragr",
  "food": "teamtofu.github.io/foodweb",
  "forceify": "dalisoft.github.io/Forceify",
  "form": "the94air.github.io/form",
  "formred": "zewish.github.io/formred",
  "fortnite": "ickerio.github.io/fortnite.js",
  "fortune": "fortunejs.github.io/fortune", // noCF? (don´t add this in a new PR)
  "foxford": "netology-group.github.io/foxford.github.io",
  "foxify": "foxifyjs.github.io/foxify",
  "foxman": "kaola-fed.github.io/foxman",
  "framework": "plasnerd.github.io/Framework.js",
  "frameworkless": "mtimofiiv.github.io/frameworkless",
  "fre": "132yse.github.io/fre",
  "freemarker": "ijse.github.io/freemarker.js", // noCF? (don´t add this in a new PR)
  "freezer": "pakastin.github.io/freezer",
  "frint": "frintjs.github.io/frint.js.org",
  "fritzbox": "lesander.github.io/fritzbox.js",
  "front-end": "whoisjorge.github.io/front-end",
  "frzr": "pakastin.github.io/frzr",
  "fs-nextra": "bdistin.github.io/fs-nextra",
  "fuck": "gerd2002.github.io/fuck.js",
  "fullscreen": "motyar.github.io/fullscreen",
  "funbook": "egoist.github.io/funbook",
  "funfuncs": "floffah.github.io/funfuncs",
  "fucao": "fusuhub.github.io",
  "futch": "jfbrennan.github.io/futch",
  "fyi": "tobihrbr.github.io/fyi",
  "farzad": "wikiweb.github.io/farzad",
  "g": "nodebox.github.io/g.js",
  "gal": "galmail.github.io", // noCF? (don´t add this in a new PR)
  "gamedevcontestal": "fromdenisvieira.github.io/gamedevcontestal", // noCF? (don´t add this in a new PR)
  "gazosekai": "starkblaze01.github.io/Gazo_Sekai",
  "gcse": "abemedia.github.io/jquery-gcse",
  "geekr": "ruanyl.github.io/geekr", // noCF? (don´t add this in a new PR)
  "genpasswd": "exos.github.io/genpasswd", // noCF? (don´t add this in a new PR)
  "george": "georgeyue.github.io/george",
  "german": "dipanshkhandelwal.github.io/Learning-German",
  "get": "hxco.github.io/Get",
  "getdot": "enderandfiredev.github.io/getdot",
  "getlink": "ilovecode1.github.io/linkjs", // noCF? (don´t add this in a new PR)
  "ghastly": "hkwu.github.io/ghastly",
  "ghapi": "haydennyyy.github.io/node-ghapi",
  "ghsamm": "ghsamm.github.io", // noCF? (don´t add this in a new PR)
  "giant-piano": "moroshko.github.io/giant-piano", // noCF? (don´t add this in a new PR)
  "girls": "girls-js.github.io",
  "girlscript": "girlscriptjaipur.github.io",
  "gitdown": "gc.github.io/gitdown",
  "gitme": "gitme.netlify.com",
  "gitstyle": "inKerk.github.io/git-style-guide",
  "gka": "gkajs.github.io/gka",
  "glaze": "kripod.github.io/glaze",
  "glitterbot": "glitterbot.netlify.com", //noCF
  "glottologist": "arguiot.github.io/Glottologist",
  "godzm4tt3o": "godzm4tt3o.github.io",
  "gol": "goljs.github.io/GoL",
  "gondel": "namics.github.io/gondel",
  "gotanda": "gotandajs.github.io",
  "gottasurf": "jottocraft.github.io/surf",
  "gramps": "gramps-graphql.github.io/gramps",
  "graphics2d": "keyten.github.io/Graphics2D", // noCF? (don´t add this in a new PR)
  "graphstore": "besync.github.io/graphstore",
  "grapnel": "engineeringmode.github.io/Grapnel.js", // noCF? (don´t add this in a new PR)
  "gregory": "f3z0.github.io",
  "grep": "42ua.github.io/grep",
  "gridiron": "noderaider.github.io/gridiron",
  "gridsplit": "assetinfo.github.io", // noCF? (don´t add this in a new PR)
  "gruft": "nikola.github.io/gruft", // noCF? (don´t add this in a new PR)
  "grumpy": "cringiest.github.io/grumpy",
  "guilherme": "guilhermedelemos.github.io/guilherme",
  "guillotine": "matiasgagliano.github.io/guillotine", // noCF? (don´t add this in a new PR)
  "guineapigbot": "guineapigbot.github.io",
  "guiseek": "guiseek.github.io", // noCF? (don´t add this in a new PR)
  "gully": "nmabhinandan.github.io/gully", // noCF? (don´t add this in a new PR)
  "gulp-skeleton": "mrdragonxm15.github.io/gulp-skeleton",
  "gulpkit": "gulpkit.github.io/GulpKit",
  "gun": "gundb.github.io", // noCF? (don´t add this in a new PR)
  "guppy": "daniel3735928559.github.io/guppy",
  "guuibayer": "guuibayer.github.io", // noCF? (don´t add this in a new PR)
  "gyps": "huijari.github.io/Gyps",
  "gyre": "wridder.github.io/GyreJS", // noCF? (don´t add this in a new PR)
  "gyx": "yourtion.github.io/gyx.js.org",
  "h": "makenowjust.github.io/h.js",
  "h7ml": "h7ml.github.io/web",
  "hahuutin": "hahuutin.github.io",
  "halil": "hibrahimsafak.github.io", // noCF? (don´t add this in a new PR)
  "haloapi": "derflatulator.github.io/haloapi.js", // noCF? (don´t add this in a new PR)
  "hamburger-menu": "center-key.github.io/hamburger-menu",
  "hamed": "phpniki.github.io/hamed",
  "handsfree": "handsfreejs.github.io/handsfree",
  "hapi-sol": "yonjah.github.io/hapi-sol",
  "happy": "e24.github.io/happy", // noCF? (don´t add this in a new PR)
  "happyae": "happyae.github.io",
  "ha-store": "fed135.github.io/ha-store",
  "hay": "hayjs.github.io/hay.js.org",
  "hbase": "adaltas.github.io/node-hbase-docs",
  "heartseekers": "rajington.github.io/heartseekers", // noCF? (don´t add this in a new PR)
  "hello": "hello-js-org.github.io", // noCF? (don´t add this in a new PR)
  "henry": "henrythedeveloper.github.io", //noCF
  "hibiki": "claritymoe.github.io/hibiki",
  "highway": "dogstudio.github.io/highway",
  "hijiangtao": "hijiangtao.github.io/hijiangtao.js.org",
  "hilo": "erikroyall.github.io/hilo", // noCF? (don´t add this in a new PR)
  "hitesh": "hitesh-lalwani.github.io",
  "hiteshsubnani": "hiteshsubnani0128.github.io/hiteshsubnani",
  "hk": "akura-co.github.io/hk", // noCF? (don´t add this in a new PR)
  "hoa": "thehoa.github.io",
  "hoast": "hoast.github.io",
  "hois": "hoisW.github.io",
  "hooloo": "hooloo.github.io", // noCF? (don´t add this in a new PR)
  "how-to-mithril": "stephanhoyer.github.io/how-to-mithril",
  "hpy": "happyae.github.io/www",
  "hrishi": "hrishi045.github.io",
  "hrtable": "uyouthe.github.io/hrtable",
  "hsiaoyi0504": "hsiaoyi0504.github.io",
  "hub": "yyued.github.io/hub.js",
  "hubble": "hubble.netlify.com",
  "huck": "huckjs.github.io/huck",
  "hugorocaproyectos": "hugoroca.github.io/coleccion-proyectos",
  "human": "human-js.gitbooks.io", // noCF? (don´t add this in a new PR)
  "hx": "hifocus.github.io/www.hxis.me",
  "hybrids": "hosting.gitbook.com", // noCF
  "hyde": "gheek.github.io/hyde", // noCF? (don´t add this in a new PR)
  "hydrogen": "siddharthbose-codeware.github.io/hydrogen-website",
  "hyf": "yafey.github.io",
  "hyperapp": "hyperapp.github.io",
  "hyperform": "hyperform.github.io",
  "hyperhtml-styleguide": "albertosantini.github.io/hyperhtml-styleguide", // noCF
  "i18n4v": "shibukawa.github.io/i18n4v",
  "iagrib": "iagrib.github.io",
  "icecast": "jucrouzet.github.io/icecast.js",
  "idettman": "idettman.github.io",
  "ienumerable": "mbasso.github.io/ienumerable",
  "iffe": "iffe-team.github.io",
  "iflow": "unadlib.github.io/iflow",
  "ignite": "ignitejscl.github.io",
  "iiilfaaa": "iiilfaaa.github.io",
  "iio": "iioinc.github.io/iio.js", // noCF? (don´t add this in a new PR)
  "ilfa": "iiilfaaa.github.io/www",
  "illuxi": "razod.github.io/illuxi",
  "imagecapture": "googlechrome.github.io/imagecapture-polyfill",
  "imcvampire": "imcvampire.github.io",
  "imeme": "svenmeister.github.io/imeme.js.org",
  "imgops": "dogancelik.github.io/imgops-multi", // noCF
  "immense": "immense.github.io", // noCF? (don´t add this in a new PR)
  "immybox": "immense.github.io/immybox", // noCF? (don´t add this in a new PR)
  "impress": "impress.github.io/impress.js",
  "imrc-datetime-picker": "smrsan76.github.io/imrc-datetime-picker",
  "infinite-tree": "cheton.github.io/infinite-tree",
  "initial-wu": "initial-wu.github.io",
  "injectify": "injectify.github.io/docs",
  "inko": "inko.netlify.com",
  "inline-style-prefixer": "rofrischmann.github.io/inline-style-prefixer",
  "inscriptum": "sumbad.github.io/inscriptum",
  "inset": "patlillis.github.io/inset.js",
  "instabousing": "jlbousing.github.io/instaBousing",
  "instacam": "xavierfoucrier.github.io/instacam",
  "instant": "instant.github.io",
  "integreat": "hosting.gitbook.com",
  "intelligo": "intelligo.netlify.com",
  "interview": "fengzilong.github.io/interview-101",
  "invoicing": "vahe.github.io/InvoicingJs",
  "ion": "ionjs-dev.github.io",
  "iori": "iori20091101.github.io",
  "iot": "product-engineer.github.io/iot.js.org", // noCF
  "ip-address": "beaugunderson.github.io/ip-address", // noCF? (don´t add this in a new PR)
  "ipv4": "licshee.github.io/IPv4-CIDR-Prefix-Merger",
  "iqbalfasri": "iqbalfasri.github.io",
  "ir": "irjs.github.io/docs",
  "iro": "jaames.github.io/iro.js",
  "is": "arasatasaygin.github.io/is.js", // noCF? (don´t add this in a new PR)
  "ishan": "ishanthukral.github.io/ishan.js", // noCF? (don´t add this in a new PR)
  "isic": "isic.github.io/isic-docs",
  "islisp": "ta2gch.github.io/islisp.js.org",
  "istanbul": "istanbuljs.github.io",
  "italia": "milano-js.github.io/italia-js", // noCF? (don´t add this in a new PR)
  "itsashis4u": "itsashis4u.github.io", // noCF? (don´t add this in a new PR)
  "itunes-bridge": "angrykiller.github.io/iTunes-bridge",
  "j3n5en": "j3n5en.github.io",
  "jackyef": "jackyef.github.io/jackyef",
  "jacques": "jacquesmarais.github.io/jacques", // noCF? (don´t add this in a new PR)
  "jackbot": "cairo2k18.github.io/jackbot",
  "jacob-ebey": "jacob-ebey.github.io",
  "jaibascript": "vasco3.github.io/jaibascript",
  "jakarta": "jakartajs.github.io/jakartajs", // noCF? (don´t add this in a new PR)
  "jakejarrett": "jakejarrett.github.io", // noCF? (don´t add this in a new PR)
  "jamal": "jamaljs.github.io/jamaljs",
  "james": "jamesrowen.github.io/james", // noCF? (don´t add this in a new PR)
  "jameshrx": "sawyerbx.github.io/james",
  "jason": "limeb.github.io/jason",
  "jargon": "hugogiraudel.github.io/SJSJ", // noCF? (don´t add this in a new PR)
  "javali": "diogomoretti.github.io/javali",
  "javascript-kitchen": "jskitchen.github.io",
  "jbone": "kupriyanenko.github.io/jbone", // noCF? (don´t add this in a new PR)
  "jcord": "discord-jcord.github.io/jcord",
  "jdc": "jdceeb.github.io",
  "jena": "javascript-in-jena.github.io", // noCF
  "jet": "alexanderbartels.github.io/jet-website",
  "jets": "nexts.github.io/Jets.js",
  "jf": "julianfrank.github.io",
  "jinya": "chenjinya.github.io",
  "jjlc": "k-yak.github.io/JJLC", // noCF? (don´t add this in a new PR)
  "jk": "joname1.github.io",
  "jl": "crusj.github.io",
  "jogja": "jogjajs.github.io", // noCF
  "john": "jozhn.github.io",
  "josep": "warlock.github.io",
  "josephsurin": "josephsurin.github.io/portfolio",
  "jparticles": "jparticles.github.io/Documentation",
  "js-fixerr": "anujsinghwd.github.io/js-fixerr",
  "jscord": "thepoptartcrpr.github.io/jscord",
  "jsnippet": "JesseEisen.github.io/snippets", // noCF
  "json-schema-faker": "json-schema-faker.github.io/website-jsf",
  "jsonapi": "ethanresnick.github.io/json-api",
  "jsonui": "yourtion.github.io/vue-json-ui-editor",
  "jsonuri": "aligay.github.io/jsonuri",
  "jsxcad": "jsxcad.github.io",
  "juancarlosqr": "juancarlosqr.github.io", // noCF? (don´t add this in a new PR)
  "julien": "julien.github.io", // noCF? (don´t add this in a new PR)
  "junctions": "jamesknelson.github.io/junctions",
  "juno-106": "stevengoldberg.github.io/juno-106", // noCF? (don´t add this in a new PR)
  "jus": "zeke.github.io/jus.js.org", // noCF? (don´t add this in a new PR)
  "just": "justjs.github.io",
  "juzgados": "mteyss.github.io/juzgados",
  "jwt-autorefresh": "cchamberlain.github.io/jwt-autorefresh", // noCF? (don´t add this in a new PR)
  "jz": "jz6.github.io",
  "kafka": "tulios.github.io/kafkajs",
  "kairusds": "kairusds.github.io",
  "kainy": "kainy.github.io/js.org",
  "kalm": "fed135.github.io/kalm.github.io", // noCF? (don´t add this in a new PR)
  "karolina-and-ryan": "mockturtlesoup.github.io/karolina-and-ryan",
  "karl": "karlcoelho.github.io/karlcoelho.com",
  "kate": "thecodesuite.github.io/katebot",
  "kawaii": "moemoesoft.github.io/kawaii", //noCF
  "kcak11": "kcak11.github.io/js-org-web",
  "kdiacodes": "kdiacodes.github.io",
  "kea": "keajs.github.io/kea",
  "kelvinho": "kelvin2go.github.io", // noCF? (don´t add this in a new PR)
  "kewitz": "kewitz.github.io",
  "keypress": "rumkin.github.io/keypress.js.org",
  "kilobyte": "kilobytehq.github.io/open-js",
  "kilvin": "rofrischmann.github.io/kilvin",
  "kim": "khareemnurulla.github.io/kim",
  "kiranremmarasu": "kiranremmarasu.github.io/kiranremmarasu",
  "kite": "kite-js.github.io/kite",
  "kiwidocs": "arguiot.github.io/KiwiDocs",
  "klasa": "dirigeants.github.io/klasa-website",
  "klasy-eris": "motiontheking.github.io/klasy-eris",
  "klepto": "mwjaworski.github.io/klepto",
  "knc": "chaituknag.github.io",
  "knowyourbundle": "enapupe.github.io/know-your-bundle",
  "ko": "ko25july.github.io/ko.js.org",
  "kofiloop": "norech.github.io/KofiLoop",
  "kolly": "cringiest.github.io/kolly",
  "komada": "dirigeants.github.io/komada",
  "konsumer": "konsumer.github.io", // noCF? (don´t add this in a new PR)
  "koolclash": "sukkaw.github.io/Koolshare-Clash",
  "koot": "cmux.github.io/koot",
  "koutla-swiss": "leny.github.io/koutla-swiss",
  "kowalski": "k0walslk1.github.io",
  "kremling": "canopytax.github.io/kremling.js.org",
  "kshitij": "kshitij98.github.io",
  "ktm": "developers-nepal.github.io/ktmjs",
  "kyoto": "kyotojs.github.io",
  "l2dwidget": "xiazeyu.github.io/live2d-widget.js-doc",
  "lab": "labjs.netlify.com",
  "labelauty": "fntneves.github.io/jquery-labelauty", // noCF? (don´t add this in a new PR)
  "lad": "ladjs.github.io/lad",
  "lambda": "lambdajs.github.io", // noCF? (don´t add this in a new PR)
  "lance": "lancepioch.com",
  "languages": "rsamaium.github.io/Languages",
  "larastrator": "the94air.github.io/larastrator",
  "lasers": "lukehorvat.github.io/need-more-lasers",
  "lass": "lassjs.github.io/lass",
  "latex": "michael-brade.github.io/LaTeX.js",
  "latte": "tehsenaus.github.io/latte-js",
  "laubstein": "laubstein.github.io", // noCF? (don´t add this in a new PR)
  "laue": "qingwei-li.github.io/laue",
  "lava": "palladium.github.io/Lava.js",
  "laveesh": "laveesh.github.io",
  "lcookie": "lf112.github.io/lcookie",
  "le": "letui.github.io",
  "leafless": "mofax.github.io/leafless",
  "lean-stack": "lean-stack.github.io", // noCF? (don´t add this in a new PR)
  "leandro": "leandrowd.github.io", // noCF? (don´t add this in a new PR)
  "learnGitBranching": "pcottle.github.io/learnGitBranching",
  "lee": "lee981265.github.io",
  "leet": "leetcodes.github.io",
  "lego": "polight.github.io/lego",
  "leipzig": "leipzigjs.github.io", // noCF? (don´t add this in a new PR)
  "lemn": "lemnjs.github.io/lemn",
  "leo": "leo66123.github.io",
  "leoj": "leoaj.github.io", // noCF? (don´t add this in a new PR)
  "lerna": "lerna.github.io/website",
  "lessmd": "linuxenko.github.io/lessmd",
  "leste": "atwood-cai.github.io/leste.js", // noCF? (don´t add this in a new PR)
  "lf": "lf112.github.io",
  "li": "mattsimmons1.github.io/li",
  "lifx": "fncxpro.github.io/lifx.js",
  "light": "lightjs.netlify.com",
  "light-observable": "dmitry-korolev.github.io/light-observable",
  "liguori": "liguori.github.io", // noCF? (don´t add this in a new PR)
  "liike": "liikejs.github.io/Liike",
  "likebeta": "likebeta.github.io/likebeta.js.org",
  "liljs": "liljs.netlify.com",
  "limitrr": "eddiejibson.github.io/limitrr",
  "lineup": "lineupjs.github.io",
  "lineupengine": "lineupjs.github.io/lineupengine.js.org",
  "ling": "wangziling.github.io",
  "lingui": "lingui.github.io/js-lingui",
  "linghucong": "jiji262.github.io",
  "liuence": "lxyzai.github.io/liuence",
  "liveflow": "hasharray.github.io/liveflow.js",
  "livenotif": "siffreinsg.github.io/livenotif",
  "lmk": "limengke123.github.io/newBlog",
  "localsync": "noderaider.github.io/localsync", // noCF? (don´t add this in a new PR)
  "logo": "js-org.github.io/logo",
  "loki": "oblador.github.io/loki",
  "lol": "xcss.github.io/lol",
  "lombok": "lombokjs.github.io",
  "loog": "israelroldan.github.io/loog",
  "lostyle": "rtsao.github.io/lostyle",
  "lottiefy": "pd4d10.github.io/lottiefy",
  "lps": "mauris.github.io/lps.js.org",
  "lribeiro": "lmribeiro.github.io",
  "ls": "links-js.github.io",
  "lwd-db": "dreamingbot.github.io/Login-With-Discord-DB",
  "lychee": "Artificial-Engineering.github.io/lycheeJS-website",
  "lyra": "amansahil.github.io/lyra.js.org",
  "m8bot": "mapreiff.github.io/m8-bot-site",
  "ma124": "ma124.netlify.com",
  "macosnotif": "mattipv4.github.io/macOSNotifJS",
  "madankumar": "jmadankumar.github.io",
  "magnet": "magnetjs.github.io/Magnet", // noCF? (don´t add this in a new PR)
  "mahdyar": "mahdyar.github.io/mahdyar.js.org",
  "mahmoud": "mahmoud-sagharjoughi.github.io/mahmoud",
  "mailgo": "manzinello.github.io/mailgo.js.org",
  "majestic": "moityjs.github.io/majestic",
  "maker": "microsoft.github.io/maker.js",
  "makes": "makesjs.github.io",
  "mali": "malijs.github.io",
  "manu": "botsdemanu.github.io/manu",
  "manual.bluelightos": "hosting.gitbook.com",
  "manytimepad": "dipanshkhandelwal.github.io/ManyTimePad",
  "mapa-cultura": "opensas.gitlab.io",
  "mappa": "cvalenzuela.github.io/Mappa",
  "marble": "jsguy.github.io/marble",
  "mardatonne": "neotidev.github.io/mardatonne-doc",
  "mare": "muzuiget.github.io/mare-site",
  "marie": "marie-js.github.io/MARIE.js",
  "mark": "henry-luo.github.io/mark",
  "markbox": "markbox.netlify.com",
  "markdownify": "amitmerchant1990.github.io/electron-markdownify",
  "marked": "markedjs.github.io/marked",
  "markmsmith": "markmsmith.github.io",
  "markvis-editor": "geekplux.github.io/markvis-editor",
  "markvis": "geekplux.github.io/markvis",
  "martin": "martinbutler.github.io", // noCF? (don´t add this in a new PR)
  "martingollogly": "martingollogly.github.io", // noCF? (don´t add this in a new PR)
  "marvnet": "marvnet.github.io/marvnet.js",
  "marxist": "wuz.github.io/marxistjs",
  "masha": "smarttelemax.github.io/MaSha",
  "materialish": "jamesplease.github.io/materialish",
  "materialize-bootbox": "iqbalfn.github.io/materialize-bootbox",
  "matrix-rref-solver": "arisweedler.github.io/matrix-rref-solver",
  "matthias-schuetz": "matthias-schuetz.github.io", // noCF? (don´t add this in a new PR)
  "maxnachlinger": "maxnachlinger.github.io", // noCF? (don´t add this in a new PR)
  "maxtracking": "maxtracking.github.io", // noCF? (don´t add this in a new PR)
  "mc": "magicarbon.github.io/mc", // noCF? (don´t add this in a new PR)
  "mde": "lukehorvat.github.io/mde-soundboard",
  "mechan": "dusterthefirst.github.io/mechan.js",
  "medan": "medan-js.github.io", // noCF
  "mediainfo": "buzz.github.io/mediainfo.js",
  "medit": "echosoar.github.io/medit",
  "medium-converter": "gunar.github.io/medium-converter", // noCF
  "meed": "pinjasaur.github.io/meed",
  "meethere": "ayazhafiz.github.io/meetHere",
  "megacode18": "megacode18.github.io",
  "mehrad": "mehrad77.github.io",
  "meiosis": "foxdonut.github.io/meiosis", // noCF? (don´t add this in a new PR)
  "melies-hugo": "cristinafsanz.github.io/melies-hugo",
  "melody": "trivago.github.io/melody-web",
  "memento": "jeanfortheweb.gitbooks.io/memento",
  "merkletree": "miguelmota.github.io/merkletreejs",
  "mern": "IamMohaiminul.GitHub.io/MERNjs",
  "mercury": "henryqw.github.io/mercury",
  "mesh": "crcn.github.io/mesh.js.org", // noCF? (don´t add this in a new PR)
  "meshesha": "meshesha.github.io",
  "metadata": "oknosoft.github.io/metadata.js",
  "metascraper": "microlinkhq.github.io/metascraper",
  "meth": "meth-meth-method.github.io/meth",
  "metools": "yimogit.github.io/metools-plugin",
  "meyda": "meyda.github.io",
  "mf": "awto.github.io/mfjs-compiler", // noCF? (don´t add this in a new PR)
  "mhsupport": "thatonetqnk.github.io/MHSupport",
  "mhy": "hosting.gitbook.com",
  "mi": "stevenjoezhang.github.io",
  "microfeedback": "microfeedback.github.io",
  "microlink": "microlinkhq.github.io/microlinkjs",
  "mics": "download.github.io/mics",
  "middy": "plnt9.github.io/middy",
  "miguelsr": "miguelsr.github.io", // noCF? (don´t add this in a new PR)
  "milesgitgud": "milesgitgud.github.io/homepage",
  "mimic": "500tech.github.io/mimic",
  "mina": "CenturyUna.github.io/mina",
  "mindyourtime": "michaloslav.github.io/Mind-Your-Time",
  "minecraft-data.prismarine": "prismarinejs.github.io/minecraft-data",
  "mineflayer.prismarine": "prismarinejs.github.io/mineflayer",
  "minesweeper": "derflatulator.github.io/minesweeper",
  "mingyi": "liangmingyi.github.io", // noCF? (don´t add this in a new PR)
  "minidrone": "mechazawa.github.io/minidrone-js",
  "minigrid": "henriquea.github.io/minigrid", // noCF? (don´t add this in a new PR)
  "mininote": "htdt.github.io/mininote",
  "miny": "pablopunk.github.io/miny",
  "mis101bird": "mis101bird.github.io", // noCF? (don´t add this in a new PR)
  "miscord": "bjornskjald.github.io/miscord-website-redirect",
  "mithril-ja": "shibukawa.github.io/mithril-ja", // noCF? (don´t add this in a new PR)
  "mithril": "mithriljs.github.io/mithril.js",
  "mm": "1ocalhost.github.io/mm",
  "mmcq": "nikola.github.io/MMCQ", // noCF? (don´t add this in a new PR)
  "mo": "mirmousaviii.github.io/mo",
  "mobx": "mobxjs.github.io/mobx",
  "mobx-react": "mobx-react.netlify.com",
  "mock-middleware": "luobotang.github.io/mock-middleware",
  "mockjs-lite": "52cik.github.io/mockjs-lite", // noCF
  "mockyeah": "mockyeah.github.io/mockyeah",
  "modbot": "modbotjs.github.io",
  "modofun": "modofunjs.github.io/modofun",
  "modoki": "araozu.github.io/modoki",
  "modulajs": "modulajs.netlify.com",
  "modv": "2xaa.github.io/modV",
  "moeditor": "moeditor.github.io",
  "moehou": "moehou.coding.me", //noCF
  "mog-script": "mog-script.github.io",
  "mohamad": "imohamad.github.io",
  "mohammad": "ahmady173.github.io/mohammad",
  "mohit": "mohitgarg.github.io",
  "mohitgupta": "mohitgupta8888.github.io/mohitgupta",
  "mojiscript": "joelnet.github.io/MojiScript",
  "mol": "eigenmethod.github.io/mol", // noCF
  "molti": "moltijs.github.io/molti",
  "mom": "momjs.github.io/mom",
  "momentum": "wemakeweb.github.io/momentum", // noCF? (don´t add this in a new PR)
  "monkberry": "monkberry.github.io",
  "mono": "mono-js.github.io/mono",
  "montage": "montagejs.github.io",
  "moondef": "moondef.github.io",
  "moose": "mustpax.github.io/moose",
  "moro": "omidfi.github.io/moro",
  "morocco": "moroccojs.github.io",
  "motapc": "motapc97.github.io", // noCF? (don´t add this in a new PR)
  "mpe": "weareroli.github.io/mpejs", // noCF? (don´t add this in a new PR)
  "mrn": "binggg.github.io/mrn", // noCF? (don´t add this in a new PR)
  "mrpluto": "mrpluto.github.io",
  "mrwanashraf": "mrwanashraf.github.io",
  "mscgen": "sverweij.github.io/mscgen_js",
  "msp430": "mazko.github.io/MSP430.js",
  "mubaidr": "mubaidr.github.io",
  "multiple": "nexts.github.io/Multiple.js",
  "murder": "rolandpoulter.github.io/murder", // noCF? (don´t add this in a new PR)
  "murmansk": "interfluve.github.io/Murmansk",
  "muto": "booleanapp.github.io/elastic-muto",
  "mvc": "morozovsk.github.io/mvc", // noCF
  "mw": "agauniyal.github.io/mw",
  "mysketch": "dipanshkhandelwal.github.io/MySketch",
  "mythbusters": "mythbustersjs.netlify.com",
  "mzplayer": "prince3661.github.io/Mzplayer",
  "nativemodels": "prefinem.github.io/nativemodels",
  "naja": "jiripudil.github.io/Naja",
  "name-my-colors": "domcoleman.github.io/name-my-colors",
  "namelessman": "namelessman.github.io",
  "nanimation": "imthenachoman.github.io/nAnimation", // noCF? (don´t add this in a new PR)
  "naughtychecker": "gautamkrishnar.github.io/naughtychecker.js",
  "nautilus": "ignigena.github.io/nautilus",
  "nbabot": "eliotchignell.github.io/NBABot",
  "ncub8": "ncub8.github.io", // noCF? (don´t add this in a new PR)
  "nearley": "kach.github.io/nearley",
  "nemaniarjun": "nemaniarjun.github.io",
  "nemo": "paypal.github.io/nemo", // noCF? (don´t add this in a new PR)
  "neo4": "janpeter.github.io/neo4js",
  "neotidev": "neotidev.github.io/website",
  "netology-group": "netology-group.github.io",
  "neuro": "neurojs.netlify.com",
  "neutralino": "neutralinojs.github.io",
  "neutrino": "neutrinojs.netlify.com", // noCF
  "newbyte": "newbie13xd.github.io/newbyte",
  "next": "zeit.github.io/next-site",
  "nexus": "nexusjs.netlify.com",
  "nflow": "nflow-js.github.io", // noCF? (don´t add this in a new PR)
  "nfwyst": "nfwyst.github.io",
  "ng-app": "zackschuster.github.io/ng-app",
  "ng-chess": "kaykayehnn.github.io/ng-chess",
  "ng-dux": "mister-what.github.io/ngDux",
  "ng-wig": "stevermeister.github.io/ngWig", // noCF? (don´t add this in a new PR)
  "ngbook": "ngbook.github.io",
  "ngirc": "ngirc.github.io/ng-irc", // noCF
  "ngn": "nodengn.github.io/NGN", // noCF? (don´t add this in a new PR)
  "ngspice": "42ua.github.io/ngspice.js",
  "ngxcebu": "angular-cebu.github.io",
  "ni": "js-ni.github.io/ni",
  "nic": "nic.github.io",
  "nick": "nmai.github.io", // noCF? (don´t add this in a new PR)
  "nikita": "adaltas.github.io/node-nikita-docs",
  "nikmartin": "nikmartin.github.io",
  "ninh": "reeganexe.github.io/ninh",
  "nintenbot": "nintenzone.github.io/NintenBot",
  "niscord": "niscord.github.io/niscord",
  "nite": "manvalls.github.io/nite",
  "noblox": "suufi.github.io/noblox.js",
  "nod": "diegohaz.github.io/nod",
  "node-atlas": "haeresis.github.io/NodeAtlas",
  "node-slate": "center-key.github.io/node-slate",
  "nodegarden": "pakastin.github.io/nodegarden",
  "nodeppt": "ksky521.github.io/nodeppt",
  "noderize": "cretezy.github.io/noderize",
  "noflux": "nofluxjs.gitbooks.io/noflux",
  "noo": "uyouthe.github.io/noo",
  "noobscroll": "arguiot.github.io/NoobScroll",
  "noted": "carter-slade.github.io/Noted-", // noCF? (don´t add this in a new PR)
  "notepad": "amitmerchant1990.github.io/notepad",
  "notibar": "duyetdev.github.io/notibar.js",
  "notice": "leoriviera.github.io/notice",
  "npmer": "rumkin.github.io/npm-watch",
  "nsp": "hanul.github.io/NSP", // noCF? (don´t add this in a new PR)
  "nsptiles": "imthenachoman.github.io/nSPTiles", // noCF? (don´t add this in a new PR)
  "nuclear": "nukeop.github.io/nuclear",
  "nut": "fengzilong.github.io/nut",
  "nuxtdoc": "hopeful-hoover-d87dd1.netlify.com",
  "nuxt-fluent-bootstrap": "disjfa.github.io/nuxt-fluent-bootstrap",
  "tui-nuxt": "hosting.gitbook.com", // noCF
  "nva": "ali322.github.io/nva",
  "nvanthao": "nvanthao.github.io", // noCF? (don´t add this in a new PR)
  "nxse": "nxse.github.io",
  "nyc": "nycjsorg.github.io/nyc",
  "nyr": "suriyaakudoisc.github.io/NYR",
  "objectmodel": "sylvainpolletvillard.github.io/ObjectModel", // noCF? (don´t add this in a new PR)
  "octo": "baileyjm02.github.io/OctoJS",
  "odararmy": "odararmy.github.io",
  "odin": "foxifyjs.github.io/odin",
  "oec": "crellison.github.io/oec",
  "officetohtml": "meshesha.github.io/officetohtml",
  "oguz": "okb1100.github.io",
  "ohmy": "mountainwang.github.io/ohmy",
  "oib": "andreicek.github.io/oib.js",
  "oktay": "98oktay.github.io/oktaybaskus",
  "olivia": "oliviachang29.github.io",
  "omaha": "omahajs.github.io",
  "omega": "jczimm.github.io/omega", // noCF? (don´t add this in a new PR)
  "omer": "omeroot.github.io", // noCF? (don´t add this in a new PR)
  "omid": "omidnikrah.github.io/omid",
  "omg": "pengjiyuan.github.io/omg",
  "onebang": "teamtofu.github.io/onebang",
  "onefx": "puncsky.github.com/onefx-home",
  "ongaku": "anshuman-verma.github.io/ongaku",
  "openrecord": "philwaldmann.github.io/openrecord",
  "opentype": "nodebox.github.io/opentype.js",
  "organizeapi": "zachary-murphy.gitbooks.io/organizeapi-docs",
  "origami": "origami-cms.github.io/cms",
  "orango": "roboncode.github.io/orango",
  "os": "91.247.228.125", // noCF
  "osagai": "henriquelimas.github.io/osagai",
  "oscillator": "lukehorvat.github.io/super-oscillator",
  "osom": "kikobeats.github.io/osom",
  "otakubot": "haydennyyy.github.io/otakubot",
  "outdoors": "mrdatastorage.github.io/outdoors.js",
  "overtrack": "aidant.github.io/overtrack.js",
  "p2psc": "kognise.github.io/p2psc",
  "pad": "ebraminio.github.io/pad.js", // noCF? (don´t add this in a new PR)
  "pad-project": "adaltas.github.io/node-pad-docs",
  "pageobject": "clebert.github.io/pageobject",
  "pagination": "superRaytin.github.io/paginationjs-site", // noCF
  "palette": "pakastin.github.io/palette",
  "pamatcher": "pmros.github.io/pamatcher", // noCF? (don´t add this in a new PR)
  "pangkeyd": "pangkeyd.github.io",
  "pantarei": "pantareijs.github.io/pantarei.js.org",
  "panza": "panza-org.github.io/panza-docs", // noCF
  "paperclip": "crcn.github.com/paperclip.js.org", // noCF? (don´t add this in a new PR)
  "paraiba": "paraibajs.github.io", // noCF? (don´t add this in a new PR)
  "parallel": "parallel-js.github.io/parallel.js",
  "parametric-svg": "parametric-svg.github.io", // noCF? (don´t add this in a new PR)
  "particledb": "boltxyz.github.io/particle.db",
  "pas-ce-soir": "oldergod.github.io/pas-ce-soir",
  "passepartout": "falkz.github.io/passepartout.js.org",
  "passwords": "sawyerbx.github.io/pw",
  "pastate": "birdleescut.github.io/pastate",
  "pastebin-alert": "ramadhanamizudin.github.io/pastebin-alert.js", // noCF? (don´t add this in a new PR)
  "pathtrace": "kovacsv.github.io/WebGLPathTrace", // noCF? (don´t add this in a new PR)
  "patternbase": "kamescg.github.io/PatternBase",
  "paul": "paul-brown.github.io", // noCF? (don´t add this in a new PR)
  "pax": "nathan.github.io/pax",
  "pdf": "iamcristye.github.io/PDF",
  "pdfutils": "gottox.github.io/node-pdfutils", // noCF? (don´t add this in a new PR)
  "pdp-elements": "go4cas.github.io/pdp_elements", // noCF? (don´t add this in a new PR)
  "pearl": "adamshurson.github.io/pearl",
  "peekaboo": "nadavspi.github.io/peekaboo.js",
  "pegboard": "mplewis.github.io/pegboard",
  "pekanbaru": "pekanbarujs.github.io",
  "penguins": "luisvallejomohl.github.io/Penguins.js",
  "penn-sdk": "pennlabs.github.io/penn-sdk-node", // noCF? (don´t add this in a new PR)
  "pentris": "justinjc.github.io/pentris2", // noCF? (don´t add this in a new PR)
  "perilla": "zhangzisu.github.io/perilla",
  "perguth": "perguth.github.io",
  "permissions": "danielnewell.github.io/permissions",
  "perspective": "leopoldthecoder.github.io/Perspective",
  "peter": "peterccpang.github.io",
  "pguth": "pguth.github.io",
  "ph1p": "ph1p.github.io",
  "pharaoh": "pharaoh-js.github.io", // noCF? (don´t add this in a new PR)
  "phobos": "phobosjs.github.io/phobos.js",
  "phoenix35": "phoenix35.github.io/js-help",
  "photo-sphere-viewer": "mistic100.github.io/Photo-Sphere-Viewer", // noCF? (don´t add this in a new PR)
  "phx": "phxjs.github.io",
  "phylum": "phylumjs.github.io",
  "picsim": "mazko.github.io/picsim.js",
  "pigeon-maps": "mariusandra.github.io/pigeon-maps",
  "piii": "piiijs.github.io/piii.js.org",
  "pinf": "pinf.github.io", // noCF? (don´t add this in a new PR)
  "pinipig": "jmdisuanco.github.io/pinipig",
  "pipes": "pipesjs.github.io", // noCF? (don´t add this in a new PR)
  "pitermarx": "pitermarx.github.io", // noCF? (don´t add this in a new PR)
  "pivot": "wnda.github.io/pivot",
  "pivotgrid": "iskandr1.github.io/Pivot",
  "pivottable": "nicolaskruchten.github.io/pivottable",
  "pixel": "lumitedubbz.github.io/Pixel",
  "pixelart": "meriadec.github.io/PixelartJS", // noCF? (don´t add this in a new PR)
  "pixxel": "pixxel.github.io",
  "plait": "wildlyinaccurate.github.io/plait",
  "plan": "agauniyal.github.io/plan",
  "planisphere": "dai-shi.github.io/planisphere-site", // noCF? (don´t add this in a new PR)
  "planner": "openplannerteam.github.io/planner.js",
  "platz": "fylipp.github.io/platz.js",
  "player": "player.netlify.com",
  "plexr": "plexrbot.github.io",
  "pliers": "pliersjs.github.io", // noCF? (don´t add this in a new PR)
  "pnpm": "pnpm.github.io",
  "poegems": "max-arias.github.io/poeGems", // noCF? (don´t add this in a new PR)
  "pogo": "aaronduino.github.io/pogo",
  "poi": "poi.netlify.com",
  "poke": "gregjw.github.io/poke",
  "polished": "styled-components.github.io/polished",
  "polix": "polix.netlify.com",
  "polkadot": "polkadot-js.github.io",
  "polygon-clipping": "mfogel.github.io/polygon-clipping",
  "polythene": "arthurclemens.github.io/Polythene", // noCF? (don´t add this in a new PR)
  "pomidorus": "tatyshev.github.io/pomidorus",
  "popcorn-api": "nirewen.github.io/popcorn-api",
  "popper": "fezvrasta.github.io/popper.js",
  "porter": "ahopkins.github.io/porterjs", // noCF? (don´t add this in a new PR)
  "post-type-discovery": "twozeroone.github.io/post-type-discovery",
  "potion": "finnfiddle.github.io/potion",
  "powercycle": "sarimarton.github.io/powercycle",
  "ppt": "1ocalhost.github.io/ppt",
  "pptx": "meshesha.github.io/jspptxjs.github.io",
  "pubg": "ickerio.github.io/pubg.js",
  "published": "fiverr.github.io/published",
  "pretty-print-json": "center-key.github.io/pretty-print-json",
  "prettylog": "moosecoop.github.io/PrettyLog",
  "prismic-nuxt": "jamespegg.github.io/prismic-nuxt",
  "pristine": "sha256.github.io/Pristine", //noCF
  "prismarine": "prismarinejs.github.io",
  "producify": "jesobreira.github.io/producify",
  "profanity-finder": "gautamkrishnar.github.io/profanity-finder.js",
  "project-ignite": "project-ignite.github.io",
  "projects-tracker": "iamdevlinph.github.io/projects-tracker",
  "promise": "gleeny.github.io",
  "proteic": "proteus-h2020.github.io/proteic",
  "proton-native": "kusti8.github.io/proton-native",
  "prototyped": "ardalanamini.github.io/prototyped.js",
  "protype": "arguiot.github.io/ProType",
  "ps": "spindlyskit.github.io/ps.js",
  "pure": "fengzilong.github.io/pure",
  "prylaris": "prylaris.github.io",
  "purpzie": "purpzie.github.io/site",
  "pwa-cookbook": "sylvainpolletvillard.github.io/pwa-cookbook",
  "pwa-workshop": "sylvainpolletvillard.github.io/pwa-workshop",
  "qbit": "fudan-mse.github.io/qbit",
  "qs": "kirjs.github.io/qs.js", // noCF? (don´t add this in a new PR)
  "quark": "smarchetti.github.io/quark",
  "querybuilder": "mistic100.github.io/jQuery-QueryBuilder", // noCF? (don´t add this in a new PR)
  "question": "teamtofu.github.io/questionify",
  "quickdb": "truexpixels.gitbooks.io/quickdb",
  "quinten": "regyo.github.io/quinten",
  "quiz-app": "odevlord.github.io/Quiz-App", // noCF? (don´t add this in a new PR)
  "quotes": "sawyerbx.github.io/quotes",
  "r": "r-js.github.io",
  "ractive": "ractivejs.github.io",
  "rad": "rapid-application-development-js.github.io/RAD.JS", // noCF? (don´t add this in a new PR)
  "radi": "radi-js.github.io/radi",
  "radial": "ckgrafico.github.io/radial.js", // noCF? (don´t add this in a new PR)
  "rafaelmangolin": "rafaelMangolin.github.io", // noCF? (don´t add this in a new PR)
  "rahul": "rahulsukla.github.io/rahul", // noCF? (don´t add this in a new PR)
  "rahulbussa": "rahulbussa.github.io",
  "ralmaz": "ralmaz.github.io",
  "ralphi": "yonjah.github.io/ralphi",
  "randy": "randyviandaputra.github.io",
  "rangeslider": "andreruffert.github.io/rangeslider.js", // noCF? (don´t add this in a new PR)
  "rasti": "8tentaculos.github.io/rasti",
  "rate-limiter-api": "abhisekp.github.io/rate-limiter-api",
  "rayo": "getrayo.github.io/rayo.js",
  "razod": "razod.github.io/razod",
  "rdf": "rdfjs.github.io", // noCF
  "react-atomic-ui": "react-atomic.github.io/react-atomic-ui",
  "react-autosuggest": "moroshko.github.io/react-autosuggest", // noCF? (don´t add this in a new PR)
  "react-autowhatever": "moroshko.github.io/react-autowhatever", // noCF? (don´t add this in a new PR)
  "react-chart": "react-charts.netlify.com",
  "react-charts": "react-charts.netlify.com",
  "react-controlled-form": "rofrischmann.github.io/react-controlled-form",
  "react-coroutine": "alexeyraspopov.github.io/react-coroutine",
  "react-day-picker": "gpbl.github.io/react-day-picker", // noCF
  "react-dropzone": "react-dropzone.netlify.com",
  "react-dropzone-uploader": "fortana-co.github.io/react-dropzone-uploader",
  "react-easy-swipe": "leandrowd.github.io/react-easy-swipe", // noCF? (don´t add this in a new PR)
  "react-entanglement": "react-entanglement.github.io",
  "react-form": "react-form.netlify.com",
  "react-hint": "slmgc.github.io/react-hint",
  "react-leaflet": "paullecam.github.io/react-leaflet",
  "react-move": "react-move.netlify.com",
  "react-native-floating-labels": "mayank-patel.github.io/react-native-floating-labels",
  "react-observatory": "hosting.gitbook.com",
  "react-pivottable": "plotly.github.io/react-pivottable",
  "react-redux": "react-redux-docs.netlify.com",
  "react-responsive-carousel": "leandrowd.github.io/react-responsive-carousel", // noCF? (don´t add this in a new PR)
  "react-static": "nozzle-react-static.netlify.com",
  "react-story": "react-story.netlify.com",
  "react-styleguidist": "styleguidist.netlify.com",
  "react-table": "react-table.netlify.com",
  "react-telegram": "appbak3r.github.io/react-telegram",
  "react-through": "hosting.gitbook.com",
  "react-toulouse": "moox.github.io/react-toulouse",
  "reactabular": "bebraw.github.io/reactabular",
  "reactdesktop": "gabrielbull.github.io/react-desktop", // noCF? (don´t add this in a new PR)
  "reactif": "frencojobs.github.io/Reactif",
  "reactour": "elrumordelaluz.github.io/reactour",
  "reactql": "leebenson.github.io/reactql-site",
  "readcolor": "keiww.github.io/readcolorhex",
  "reader": "ruanyl.github.io/js-reader", // noCF? (don´t add this in a new PR)
  "realt": "vnkitaev.github.io/realt",
  "realtime": "datamcfly.github.io/realtimejs", // noCF? (don´t add this in a new PR)
  "ream": "ream.netlify.com",
  "reassign": "hasharray.github.io/reassign.js",
  "rebatov": "rebatov.github.io",
  "rebem": "rebem.github.io", // noCF? (don´t add this in a new PR)
  "recover": "luisvallejomohl.github.io/Recover.js",
  "recycle": "recyclejs.github.io/recycle",
  "redis": "noderedis.github.io/node_redis", // noCF? (don´t add this in a new PR)
  "redom": "redom.github.io/redom",
  "reduce": "reducejs.github.io", // noCF? (don´t add this in a new PR)
  "redux-actions": "hosting.gitbook.com", // noCF
  "redux-aggregate": "redux-aggregate.netlify.com",
  "redux-arc": "viniciusdacal.github.io/redux-arc",
  "redux-data-structures": "adrienjt.github.io/redux-data-structures",
  "redux-dynamic-modules": "microsoft.github.io/redux-dynamic-modules",
  "redux-leaves": "redux-leaves.netlify.com",
  "redux-loop": "redux-loop.github.io/redux-loop",
  "redux-minimal": "catalin-luntraru.github.io/redux-minimal",
  "redux-nakshatra": "agenthunt.github.io/redux-nakshatra",
  "redux-observable-cn": "rxjs-cn.github.io/redux-observable-cn",
  "redux-observable": "redux-observable.github.io/redux-observable",
  "redux-preboiled": "hosting.gitbook.com",
  "redux-resource": "hosting.gitbook.com", // noCF
  "redux-ru": "hosting.gitbook.com",
  "redux-saga-in-chinese": "superRaytin.github.io/redux-saga-in-chinese",
  "redux-saga": "redux-saga.github.io/redux-saga",
  "redux-saga-firebase": "redux-saga-firebase.netlify.com", //noCF
  "redux-starter-kit": "redux-starter-kit-docs.netlify.com",
  "redux-tiles": "bloomca.github.io/redux-tiles",
  "redux-undo": "omnidan.github.io/redux-undo", // noCF? (don´t add this in a new PR)
  "redux-webpack-boilerplate": "cchamberlain.github.io/redux-webpack-boilerplate", // noCF? (don´t add this in a new PR)
  "redux": "redux-docs.netlify.com", // noCF
  "reduxible": "pitzcarraldo.github.io/reduxible", // noCF? (don´t add this in a new PR)
  "refract": "hosting.gitbook.com",
  "refraction": "mbasso.github.io/refraction", // noCF? (don´t add this in a new PR)
  "refujs": "refujs.github.io", // noCF? (don´t add this in a new PR)
  "rekit": "supnate.github.io/rekit", // noCF
  "relate": "jakelazaroff.github.io/relate", // noCF? (don´t add this in a new PR)
  "relaunch": "pd4d10.github.io/relaunch",
  "relift-html": "mardix.github.io/relift-html", // noCF
  "remark": "remarkjs.github.io/remark",
  "rene": "revrng.github.io", // noCF? (don´t add this in a new PR)
  "rengular": "chigix.github.io/rengular",
  "renovate": "sawyerbx.github.io/renovate",
  "repackage": "cchamberlain.github.io/repackage", // noCF? (don´t add this in a new PR)
  "replace": "quales.github.io/replace.js",
  "request": "request.gitbooks.io", // noCF? (don´t add this in a new PR)
  "reshape": "reshape.netlify.com",
  "reshift": "hasharray.github.io/reshift.js",
  "resources": "mrdatastorage.github.io/resources.js",
  "rest-client": "foxifyjs.github.io/rest-client",
  "restjs": "daviesgeek.github.io/restjs", // noCF? (don´t add this in a new PR)
  "rete": "retejs.github.io",
  "retech": "codeindore.github.io/retech",
  "revaluate": "hasharray.github.io/revaluate.js",
  "rickdesantis": "rickdesantis.github.io",
  "riklewis": "riklewis.github.io",
  "riot": "riot.github.io",
  "riotgear": "riotgear.github.io",
  "robloxutility": "robloxutility.github.io",
  "risingstars": "risingstars.netlify.com",
  "risingstars2016": "michaelrambeau.github.io/risingstars2016",
  "rishi": "rishiosaur.github.io",
  "rivki": "mikqi.github.io",
  "rize": "g-plane.github.io/rize",
  "rmodal": "zewish.github.io/rmodal.js",
  "roadmafia": "roadmafia.github.io",
  "rock": "w3core.github.io/RockJS",
  "rocket": "KevinOfNeu.github.io/rocket",
  "rocketact": "jdf2e.github.io/rocketact",
  "rockjins": "rockjins.github.io",
  "roger": "klopango.github.io/js-org",
  "rosmaro": "lukaszmakuch.github.io/rosmaro",
  "router-advanced": "oldergod.github.io/router-advanced",
  "router5": "hosting.gitbook.com",
  "routex": "routex.netlify.com",
  "rp": "rpocklin.github.io", // noCF? (don´t add this in a new PR)
  "rplayer": "davland7.github.io/rplayer",
  "rsshub": "diygod.github.io/RSSHub",
  "rsshub-reader": "sevenoutman.github.io/RSSHub-Reader",
  "ru.react": "js-rus.github.io/react-ru",
  "ru.redux-saga": "hosting.gitbook.com", // noCF
  "ruhuman": "ruhuman.github.io", // noCF? (don´t add this in a new PR)
  "russell": "teamtofu.github.io/russelljs",
  "rut": "jeam.github.io/rut",
  "ruwan": "rpgee.github.io",
  "ryzokuken": "ryzokuken.github.io",
  "s3swa": "s3swa-ict-upgifter.github.io/snow-eater",
  "s4swa": "s4swa.github.io",
  "sagui": "saguijs.github.io", // noCF? (don´t add this in a new PR)
  "saigon": "saigonjs.github.io",
  "sailesh": "saileshkasaju.github.io/crud-react-redux-mongo",
  "salvacam": "salvacam.github.io",
  "salvattore": "rnmp.github.io/salvattore",
  "sam": "jdubray.github.io/sam", // noCF? (don´t add this in a new PR)
  "samlify": "tngan.github.io/samlify",
  "samplyr": "arze1.github.io/samplyr-site",
  "sanctuary": "sanctuary-js.github.io/sanctuary-site",
  "sandeepkhandewale": "learner1024.github.io",
  "sandstone": "storehubnet.github.io/sandstone",
  "sanity-runner": "tophat.github.io/sanity-runner",
  "sanohin": "sanohin.github.io",
  "santa": "codedrs.github.io/secret-santa",
  "sao": "egoist.github.io/sao",
  "sass": "medialize.github.io/playground.sass.js", // noCF? (don´t add this in a new PR)
  "saulosantiago": "saulosilva.github.io", // noCF? (don´t add this in a new PR)
  "sawyer": "sawyerbx.github.io/personal",
  "sazerac": "sazeracjs.github.io/sazerac-site",
  "schema": "foxifyjs.github.io/schema",
  "scramble": "ignatiusmb.github.io/scramble.js",
  "scratch": "scratch-js.github.io",
  "scrape-pages": "andykais.github.io/scrape-pages",
  "screentocodesandbox": "ckgrafico.github.io/ScreenshotToCodeSandbox",
  "scriptex": "scriptex.github.io",
  "seatbelt": "seatbeltjs.github.io/seatbelt",
  "seatchart": "omarmahili.github.io/seatchart.js",
  "sed": "42ua.github.io/sed",
  "secsb": "secsb.github.io",
  "seesaw": "cajogos.github.io/seesaw", // noCF? (don´t add this in a new PR)
  "segoe-mdl2-css": "ckgrafico.github.io/Segoe-mdl2-assets-css", // noCF? (don´t add this in a new PR)
  "select_io": "selaromi.github.io/select_io", // noCF? (don´t add this in a new PR)
  "selectors": "selectors.github.io/selectors.js",
  "selectric": "lcdsantos.github.io/jQuery-Selectric", // noCF? (don´t add this in a new PR)
  "sendilkumarn": "sendilkumarn.github.io",
  "seoul": "seouljs.github.io/seoul.js.org",
  "sequential": "lorenzoongithub.github.io/sequential",
  "serginator": "serginator.github.io", // noCF? (don´t add this in a new PR)
  "serializer": "haircvt.github.io/serializerjs", // noCF? (don´t add this in a new PR)
  "serlina": "djyde.github.io/serlina",
  "service-mocker": "service-mocker.github.io/service-mocker",
  "serviceberry": "bob-gray.github.io/serviceberry",
  "shd": "pro-devel.github.io",
  "sheet": "sheetjs.github.io/sheet.js.org",
  "shekhar": "shekharreddy4.github.io/Shekhar",
  "shine": "shinenelson.github.io/shine.js.org",
  "shirajuki": "shirajuki.github.io",
  "short": "shortit.netlify.com",
  "shortener": "jsmiith.github.io/shortener",
  "short.vstatic": "axlehost.pro", //noCF
  "shortquery": "s--minecraft.gitbooks.io/shortquery-js", // noCF? (don´t add this in a new PR)
  "showroom": "showroom-js.herokuapp.com",
  "shscode": "shs-coding-club-projects.github.io",
  "sidekik": "inf3cti0n95.github.io/sidekik",
  "silas229": "silas229.github.io",
  "silfr": "silfr.github.io/iterativecolor",
  "silkster": "silkster.github.io",
  "silky": "wvv8oo.github.com/silky", // noCF? (don´t add this in a new PR)
  "siluna": "pahund.github.io/siluna", // noCF? (don´t add this in a new PR)
  "simulacra": "daliwali.github.io/simulacra",
  "sina": "sinabakh.github.io/sina",
  "simba": "jonathanzero.github.io/simba",
  "simplecounter": "tomkiernan120.github.io/simplecounter",
  "simples": "micnic.github.io/simples",
  "single-page-web-app": "lukejpreston.github.io/single-page-web-app",
  "single-spa": "canopytax.github.io/single-spa.js.org",
  "sirkit": "seckwei.github.io/SirKit_CircuitSim", // noCF? (don´t add this in a new PR)
  "sistersbio": "KDiaCodes.github.io/SistersBio",
  "sizle": "christoga.github.io/sizle", // noCF? (don´t add this in a new PR)
  "skeptical-coder": "rbpinheiro.github.io/skeptical-coder",
  "sketch": "keiww.github.io/sketch",
  "slang": "ramadis.github.io/slang", // noCF? (don´t add this in a new PR)
  "slidemenu": "alexkratky.github.io/SlideMenu.js",
  "slideout": "mango.github.io/slideout",
  "slider": "nikiforov-org.github.io/slider",
  "slides": "deadcoder0904.github.io/slides-official-website",
  "slidey": "thegreatrazz.github.io/slidey",
  "slim": "eavichay.github.io/slim.js",
  "slinky": "alizahid.github.io/slinky",
  "smartquotes": "kellym.github.io/smartquotes.js",
  "smiley": "Smiley422.github.io",
  "smoove": "abemedia.github.io/jquery-smoove",
  "smox": "132yse.github.io/smox",
  "snake": "pakastin.github.io/snake",
  "snowglobe": "3052cole.github.io/snowglobe",
  "snekfetch": "devsnek.github.io/snekfetch",
  "social-likes-next": "sapegin.github.io/social-likes-next", // noCF? (don´t add this in a new PR)
  "social-likes": "sapegin.github.io/social-likes", // noCF? (don´t add this in a new PR)
  "solace": "ethamitc.github.io/Solace",
  "solder": "mcrocks999.github.io/solder.js",
  "solome": "solome.github.io",
  "sonny": "sonnylazuardi.github.io", // noCF? (don´t add this in a new PR)
  "sorting-algorithm-visualiser": "lachlandk.github.io/sorting-algorithm-visualiser",
  "soukai": "noeldemartin.github.io/soukai",
  "soundpad": "mcpe-pc.github.io/soundpad.js",
  "sox": "sox-team.github.io/sox", // noCF? (don´t add this in a new PR)
  "spa": "sucom.github.io/SPA.js",
  "spaas": "pakastin.github.io/spaas",
  "spacebot": "spacebot2.github.io",
  "spectragram": "adrianengine.github.io/jquery-spectragram", // noCF? (don´t add this in a new PR)
  "speroxu": "speroxu.github.io",
  "spike": "spike.netlify.com",
  "spin": "fgnass.github.io/spin.js", // noCF? (don´t add this in a new PR)
  "spirare": "waldenn.github.io/spirare", // noCF? (don´t add this in a new PR)
  "spiritual": "spiritual-js.github.io", // noCF? (don´t add this in a new PR)
  "split": "nathancahill.github.io/split",
  "split-ease": "split-ease.netlify.com",
  "splitting": "shshaw.github.io/Splitting",
  "spotix": "sawyerbx.github.io/spotix",
  "spreadsheet": "chiefofgxbxl.github.io/Spreadsheet.js",
  "spritesheet": "arcadiogarcia.github.io/Spritesheet.js", // noCF? (don´t add this in a new PR)
  "spritewerk": "bildepunkt.github.io/spritewerk", // noCF? (don´t add this in a new PR)
  "squeak": "bertfreudenberg.github.io/SqueakJS",
  "squirrelly": "hosting.gitbook.com", // noCF
  "sri": "jackub.github.io/subresource-integrity-fallback",
  "stabs": "wnda.github.io/stabs",
  "stahlstadt": "dist1.storyblok.com",
  "stampit": "stampit-org.gitbook.io/docs",
  "standard-resource": "hosting.gitbook.com", // noCF
  "stapp": "tinkoffcreditsystems.github.io/stapp",
  "star": "starframework.github.io/STAR",
  "starratio": "starratio.github.io/star-ratio", // noCF
  "start": "deepsweet.github.io/start",
  "starterbot": "starterbot.netlify.com",
  "state-machine-cat": "sverweij.github.io/state-machine-cat",
  "staticinstance": "staticinstance.github.io", // noCF? (don´t add this in a new PR)
  "stats": "js-org.github.io/stats.js.org",
  "statsbot": "statsbot.netlify.com", // noCF
  "status": "mattipv4.github.io/status-codes",
  "steemsites": "yhozen.github.io/steemsites",
  "stego": "zeruniverse.github.io/CryptoStego", // noCF? (don´t add this in a new PR)
  "stepan": "stevermeister.github.io", // noCF? (don´t add this in a new PR)
  "stephenmccall": "stephenmccall.github.io", // noCF? (don´t add this in a new PR)
  "steven": "stpeng.github.io",
  "sticky": "fawmi.github.io/sticky-pro",
  "stino": "stinobe.github.io/Stino",
  "stockings": "kgroat.github.io/stockings",
  "storage": "uzitech.github.io/storage.js",
  "storybook": "storybooks.netlify.com", //noCF
  "storybooks": "storybooks.github.io",
  "str": "manelgarcia.github.io/str",
  "stratic": "straticjs.github.io",
  "stress": "julindra.github.io/stress.js",
  "structure": "hosting.gitbook.com",
  "stuck": "linuxenko.github.io/unstuck-webpack",
  "style": "dhilipsiva.github.io/style.js", // noCF? (don´t add this in a new PR)
  "styled-css-grid": "styled-css-grid.netlify.com",
  "styled-icons": "styled-icons.netlify.com",
  "stylis": "thysultan.github.io/stylis.js",
  "sudarshan": "sudarshanRaul.github.io",
  "sudoku": "andreynering.github.io/sudoku",
  "suka": "sukkaw.github.io",
  "sulky": "shingle.github.io/sulky", // noCF? (don´t add this in a new PR)
  "sunsistemo": "sunsistemo.github.io/sunsistemo",
  "super-controls": "thebearingedge.github.io/super-controls",
  "super-trim": "beeblebrox3.github.io/super-trim",
  "supernova": "janbiasi.github.io/supernova", // noCF? (don´t add this in a new PR)
  "iamsurajdc": "iamsurajdc.github.io",
  "sutanlab": "sutanlab.github.io.github.io",
  "svelteui": "transpiling.github.io/svelte-flat-ui",
  "svg-skeleton": "yyued.github.io/SVG-Skeleton",
  "svr": "kikobeats.github.io/svr",
  "sweetalert": "t4t5.github.io/sweetalert",
  "swipe": "lyfeyaj.github.io/swipe",
  "switchit": "dongryphon.github.io/switchit",
  "swup": "swup.github.io/docs"
  "sw-yx": "sw-yx.github.io",
  "sxw":"sxw-js.github.io",
  "sydinh": "sydinh.github.io",
  "synth": "lukehorvat.github.io/synth-mood",
  "syr": "dmikey.github.io/syr",
  "soroush": "soroushchehresa.github.io/soroush",
  "tagster": "goschevski.github.io/tagster", // noCF? (don´t add this in a new PR)
  "talker": "secondstreet.github.io/talker.js", // noCF? (don´t add this in a new PR)
  "talz": "geektalz.github.io",
  "tama": "etk.gitlab.io",
  "tanmay": "tan-mayhem.github.io/tanmay",
  "tanok": "brabadu.github.io/tanok",
  "tao": "zzyzxlab.github.io/tao.js",
  "tap-flux": "technologyadvice.github.io/tap-flux", // noCF? (don´t add this in a new PR)
  "tapestry-wp": "shortlist-digital.github.io/tapestry-wp",
  "tara": "shakyatara.github.io",
  "taro": "nervjs.github.io/taro-website",
  "tart": "tart.github.io/tartJS", // noCF? (don´t add this in a new PR)
  "tatsumaki": "mrjacz.github.io/tatsumaki.js",
  "taylorreis": "taylorreis.github.io",
  "tead": "teadjs.github.io",
  "telaviv": "dustin-h.github.io/telaviv", // noCF? (don´t add this in a new PR)
  "telegraf": "telegraf.github.io/telegraf", // noCF? (don´t add this in a new PR)
  "teletype": "keyvank.github.io/teletype.js",
  "temme": "shinima.github.io/temme",
  "tequila": "tequila-js.github.io",
  "terminal": "gottox.github.io/terminal.js", // noCF? (don´t add this in a new PR)
  "textillate": "jschr.github.io/textillate", // noCF? (don´t add this in a new PR)
  "texy": "egoist.github.io/texy",
  "thea": "idokutela.github.io/thea",
  "thegrid": "antoniandre.github.io/grid",
  "themoviedb": "chrisenytc.github.io/themoviedb", // noCF? (don´t add this in a new PR)
  "theorem": "arguiot.github.io/TheoremJS",
  "thundercats": "thundercatsjs.github.io/thundercats", // noCF? (don´t add this in a new PR)
  "tictactoe": "jeff-tian.github.io/tic-tac-toe-ai",
  "timeout": "anshuman-verma.github.io/setTimeout",
  "timerizer": "callumacrae.github.io/timerizerJS", // noCF? (don´t add this in a new PR)
  "tina": "tinajs.github.io/tina",
  "tint": "tintjs.github.io", // noCF? (don´t add this in a new PR)
  "tinylinux": "e8johan.github.io/tiny-js", // noCF? (don´t add this in a new PR)
  "title": "sawyerbx.github.io/titlejs",
  "tixol": "vcxiz.github.io/tixol",
  "tiza": "pd4d10.github.io/tiza",
  "tmr": "ttttmr.github.io",
  "toad": "wnda.github.io/toad",
  "tom": "tom-microservice.netlify.com",
  "tools-kit": "blackb1rd-development.github.io/tools-kit",
  "topbot": "resign05.github.io/TobWebsite",
  "tori": "boostcode.github.io/torijs",
  "torino": "torinojs.github.io", // noCF? (don´t add this in a new PR)
  "torlondev": "torlondev.github.io",
  "tp": "jottocraft.github.io/tp",
  "trace": "andreasmadsen.github.io/trace",
  "transposer": "francesco-dipi.github.io/transposer",
  "treviso": "trevisojs.github.io", // noCF? (don´t add this in a new PR)
  "trevorgk": "trevorgk.github.io", // noCF? (don´t add this in a new PR)
  "trier": "creimers.github.io/trier",
  "trilogy": "citycide.github.io/trilogy",
  "trinity": "marcus-sa.github.io/trinity-js",
  "troxel": "troxeljs.github.io",
  "troy": "troyxun.github.io",
  "true-myth": "chriskrycho.github.io/true-myth",
  "try-catch-finally": "c24w.github.io/try-catch-finally.js",
  "ts-creator": "ts-creator.netlify.com",
  "ts-react-boilerplate": "lapanti.github.io/ts-react-boilerplate",
  "ts2jsdoc": "spatools.github.io/ts2jsdoc", // noCF? (don´t add this in a new PR)
  "tsdi": "knisterpeter.github.io/tsdi",
  "ttag": "ttag-org.github.io/ttag",
  "ttgprotect": "ttgprotect.github.io",
  "tuplerone": "slikts.github.io/tuplerone",
  "turbo": "turbo.github.io",
  "tux": "tux.gitbooks.io/docs",
  "tweed": "tweedjs.github.io",
  "tweetnacl": "dchest.github.io/tweetnacl-js",
  "twentyfive": "luckyshot.github.io/twentyfive",
  "two": "jonobr1.github.io/two.js",
  "tydel": "fahad19.github.io/tydel", // noCF? (don´t add this in a new PR)
  "typeahead": "corejavascript.github.io/typeahead.js",
  "typed-ui": "pi-cubed.github.io/typed-ui",
  "typeless": "typeless.netlify.com",
  "typescript-play": "agentcooper.github.io/typescript-play",
  "u": "hanul.github.io/UJS", // noCF? (don´t add this in a new PR)
  "uav": "unearth-inc.github.io/uav",
  "ubuntu-hideout": "bytecommander.github.io/ubuntu-hideout",
  "udnisap": "udnisap.github.io",
  "ulog": "download.github.io/ulog",
  "ultcombo": "ultcombo.github.io",
  "umair": "mumairofficial.github.io",
  "umm": "umm233.github.io",
  "underline": "brightskyz.github.io/underline",
  "uneditable": "iamcristye.github.io/Uneditable.js",
  "unexpected": "unexpectedjs.github.io", // noCF? (don´t add this in a new PR)
  "uni": "arcadiogarcia.github.io/UNIJS", // noCF? (don´t add this in a new PR)
  "unicornly": "unicornly.github.io/unicornly",
  "unified": "unifiedjs.github.io",
  "units": "stak-digital.github.io/units",
  "unoconv": "blog.ryanwu.me/Unoconv-Promise",
  "unsafe": "unsafely.github.io/unsafe.js",
  "up": "codefeathers.github.io/up",
  "uppload": "elninotech.github.io/uppload",
  "upresent": "bobbybee.github.io/uPresent", // noCF? (don´t add this in a new PR)
  "uptime": "intelligo-systems.github.io/uptime.js",
  "urban": "snekjs.github.io/urban.js",
  "use": "use-js.github.io/use",
  "usv": "usvformat.github.io",
  "utscrooms": "sunakujira1.github.io/UTSCRooms",
  "uuid": "rumkin.github.io/uuid",
  "uvcharts": "imaginea.github.io/uvCharts", // noCF? (don´t add this in a new PR)
  "v4f": "v4f.netlify.com",
  "v-charts": "elemefe.github.io/v-charts",
  "v-decorators": "v-decorators.netlify.com",
  "vac": "mlinquan.github.io/vue-awesome-countdown",
  "valentin": "valentinvieriu.github.io", // noCF? (don´t add this in a new PR)
  "validator": "ppoffice.github.io/validator.js", // noCF? (don´t add this in a new PR)
  "valine": "xcss.github.io/valine",
  "valirator": "massive-angular.github.io/valirator",
  "vanessa": "vanessa219.github.io/vanessa",
  "vanilla": "haeresis.github.io/vanilla-js-dom",
  "vanilla-picker": "sphinxxxx.github.io/vanilla-picker",
  "vayne": "vaynejs.github.io",
  "vbuild": "egoist.github.io/vbuild",
  "ve-table": "xiguaxigua.github.io/ve-table",
  "vendywira": "vendywira.github.io",
  "verifyr": "arze1.github.io/verifyr-site",
  "verse": "druidic.github.io/verse",
  "viav": "brandondyer64.github.io/viav",
  "vico": "bohdantkachenko.github.io/vico", // noCF? (don´t add this in a new PR)
  "victor": "mrdatastorage.github.io/victor",
  "video-react": "video-react.github.io",
  "viki": "viki-org.github.io/viki-web-ui",
  "vinimdocarmo": "vinimdocarmo.github.com", // noCF? (don´t add this in a new PR)
  "viperhtml": "viperhtml.github.io",
  "virtual-keyboard": "virtual-keyboard-javascript.github.io",
  "visualnovel": "selcher.github.io/visualnoveljs", // noCF? (don´t add this in a new PR)
  "vk-x": "vk-x.github.io",
  "vncz": "xvincentx.github.io/vncz",
  "voloshins": "voloshins.github.io", // noCF? (don´t add this in a new PR)
  "vorpal": "dthree.github.io/vorpal", // noCF? (don´t add this in a new PR)
  "voxelcss": "jhwohlgemuth.github.io/voxelcss",
  "vrv": "cloudflare-to-cloudflare.readthedocs.io",
  "vscode-apielements": "xvincentx.github.io/vscode-apielements",
  "vssue": "vssue.netlify.com",
  "vstatic": "axlehost.pro", // noCF
  "vue-admin": "mingdev123.github.io/vue-admin",
  "vue-aplayer": "sevenoutman.github.io/vue-aplayer",
  "vue-coffee": "vue-coffee-guide.netlify.com",
  "vue-core": "triotech-fr.github.io/vue-core",
  "vue-land": "vue-land.netlify.com",
  "vue-mdc": "na-west1.surge.sh",
  "vue-minesweeper": "disjfa.github.io/vue-minesweeper",
  "vue-multiselect": "shentao.github.io/vue-multiselect",
  "vue-roast": "kronicker.github.io/vue-roast",
  "vue-route-timeline": "disjfa.github.io/vue-route-timeline",
  "vue-showdown": "vue-showdown.netlify.com",
  "vue-svg-loader": "vue-svg-loader.netlify.com",
  "vue-treeselect": "riophae.github.io/vue-treeselect",
  "vuejsindy": "vuejsindy.github.io",
  "vuelidate": "vuelidate.netlify.com",
  "vuelog": "myst729.github.io/Vuelog",
  "vuetify-sidebar-template": "disjfa.github.io/vuetify-sidebar-template",
  "vuikit": "vuikit.netlify.com",
  "vuongdothanhhuy": "vuongdothanhhuy.github.io", // noCF? (don´t add this in a new PR)
  "vxv": "vxv.netlify.com",
  "w4ctech": "w4ctech.github.io",
  "wanna": "mkermani144.github.io/wanna",
  "wargamer": "hkwu.github.io/wargamer",
  "warrior": "olistic.github.io/warriorjs",
  "warship": "vflopes.github.io/warship",
  "watch": "ducin.github.io/watchjs.org", // noCF? (don´t add this in a new PR)
  "watchfs": "prateekkumarweb.github.io/watchfs",
  "watermark": "fredy.github.io/watermark",
  "wc": "bryansha.github.io/wc",
  "wcfactory": "elmsln.github.io/wcfactory.js.org",
  "wdd": "wangduanduan.github.io",
  "wear": "cringiest.github.io/wear",
  "weaver": "maxkfranz.github.io/weaver", // noCF? (don´t add this in a new PR)
  "webassembly": "xtuc.github.io/webassemblyjs",
  "webmetry": "comongroup.github.io/webmetry",
  "webminer": "web-miner.github.io",
  "webpack": "webpack.github.io/webpack.js.org",
  "webpack-config-plugins.js.org": "namics.github.io/webpack-config-plugins",
  "webpack-inspect": "alexmost.github.io/webpack-inspect",
  "wedgetail": "wedgetail.netlify.com",
  "weeb": "jsmiith.github.io/weeb",
  "weekly": "xdimh.github.io/weekly",
  "wglt": "codyebberson.github.io/wglt",
  "whiteboard": "yhozen.github.io/whiteboard",
  "wice": "yulioaj290.github.io/wice.js",
  "wii": "andrewplus.github.io/Wii.JS",
  "wiki": "wikijs.netlify.com", // noCF
  "wildfire": "cheng-kang.github.io/wildfire",
  "willy": "willyarisky.github.io/willy",
  "within": "eric-brechemier.github.io/within", // noCF? (don´t add this in a new PR)
  "with-immutable-props-to-js": "tophat.github.io/with-immutable-props-to-js",
  "woodsman": "haximilian.github.io/woodsman",
  "wooyun": "jiji262.github.io/wooyun_articles",
  "wordywordy": "sverweij.github.io/wordywordy",
  "writebar": "alexander-shvets.github.io/writebar",
  "wthunting": "sawyerbx.github.io/wthunting",
  "wyfe": "wangyuanstudio.github.io/WYFE", // noCF? (don´t add this in a new PR)
  "wynncraft": "frawolf.github.io/wynncraft.js",
  "xhy": "xhy.github.io",
  "xn--w4h": "zzyzxlab.github.io/tao.js",
  "xprmntl": "xprmntl.github.io", // noCF? (don´t add this in a new PR)
  "xstate": "davidkpiano.github.io/xstate",
  "xto6": "mohebifar.github.io/xto6", // noCF? (don´t add this in a new PR)
  "xtype": "lucono.github.io/xtypejs", // noCF? (don´t add this in a new PR)
  "y86": "quietshu.github.io/y86", // noCF? (don´t add this in a new PR)
  "yadl": "yadljs.github.io",
  "yagolopez": "yagolopez.github.io",
  "yajdbl": "yajdbl.github.io/yajdbl",
  "yamdbf": "zajrik.github.io/yamdbf",
  "yamil-villarreal": "yvillarreal.github.io/index",
  "yargs": "yargs.github.io", // noCF? (don´t add this in a new PR)
  "yennj12": "yennanliu.github.io",
  "yf": "yafey.coding.me",
  "yiff": "codepupper.github.io/yiff",
  "yigit": "yigitusta.github.io",
  "yizao": "ssttii.github.io",
  "ymlair": "ymlair.github.io/TimestampHumanDemo",
  "youngjuning": "youngjuning.github.io",
  "youtim": "mortonfox.github.io/YouTim", // noCF? (don´t add this in a new PR)
  "youtube-box": "lucasmonteverde.github.io/youtube-box", // noCF? (don´t add this in a new PR)
  "youtube-lite": "9oelm.github.io/youtube-lite",
  "yt": "tangge1119.github.io",
  "yu": "yuxizhe.github.io/yu",
  "yuigahama": "project-yuigahama.github.io/docs",
  "yusril": "yusrilhs.github.io", // noCF
  "yvm": "tophat.github.io/yvm",
  "zachmurphy": "zachify.github.io",
  "zaporizhzhia": "zaporizhzhiajs.github.io",
  "zazu": "zazujs.github.io", // noCF? (don´t add this in a new PR)
  "zeit": "urvinh.github.io",
  "zhaomenghuan": "zhaomenghuan.github.io",
  "zhd": "zhDmitry.github.io",
  "zignis": "zhike-team.github.io/zignis",
  "zephyr": "zephyr-dh.github.io/zephyr",
  "zodiac": "indus.github.io/Zodiac", // noCF? (don´t add this in a new PR)
  "zodiacsigns": "dipanshkhandelwal.github.io/my-zodiac-sign",
  "zoe": "zoe-js.netlify.com",
  "zombie": "assaf.github.io/zombie", // noCF? (don´t add this in a new PR)
  "zonayed": "zonayedpca.github.io/js.zonayed.me",
  "zty": "zetaoyang.github.io",
  "zyy": "zyyou.github.io/notes"
  /*
  * please don't add your subdomain records down here!
  * insert them in alphabetical order to help reduce merge conflicts.
  * <3
  */
}
