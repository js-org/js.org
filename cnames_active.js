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
 *              Just add '//noCF' in the line of your requested subdomain to give me a hint.
 *              (all the lines marked with '//noCF?' are from a time when a requester had to explicitly opt-in;
 *              see: https://github.com/js-org/dns.js.org/issues/554)
 *
 * IMPORTANT:   To authorize yourself as the owner of the GitHub Page you must have added a valid CNAME file
 *              (with the requested domain, e.g.: "foo.js.org") to your repository before the pull request.
 *              The requested subdomain must match either your GitHub username or the name of your project
 *              repository. Execeptions are possible for the sake of clarity (e.g. if your project has the
 *              name "foojs" you can request "foo").
 *              Before you start a request for your personal fork of "jquery" or "angular" you should read
 *              the section "naming conflicts" in the wiki!
 *
 * NOTICE:      It would be nice if you could keep the alphabetical order.
 *
 *              BECAUSE OF THE RISK OF ABUSE, I´M NOT ACCEPTING REQUESTS FOR PAGES WITHOUT REASONABLE CONTENT!
 */

var cnames_active = {
    "": "js-org.github.io"
    ,"100dayz": "deadcoder0904.github.io/100dayz"
    ,"101": "7anshuai.github.io/js101" //noCF? (don´t add this in a new PR)
    ,"7anshuai": "7anshuai.github.io" //noCF? (don´t add this in a new PR)
    ,"8art": "erayarslan.github.io/8art" //noCF? (don´t add this in a new PR)
    ,"abhishek":"rpidanny.github.io/personal-collage"
    ,"ajaxable": "artf.github.io/ajaxable"
    ,"akase": "cedmax.github.io/akase" //noCF? (don´t add this in a new PR)
    ,"akashacms": "akashacms.github.io" //noCF? (don´t add this in a new PR)
    ,"alasql": "alasql.github.io" //noCF? (don´t add this in a new PR)
    ,"algebra": "nicolewhite.github.io/algebra.js" //noCF? (don´t add this in a new PR)
    ,"aligos.js.org": "aligos.github.io" //noCF? (don´t add this in a new PR)
    ,"all": "learnsomuch.github.io/all.js" //noCF? (don´t add this in a new PR)
    ,"almin": "almin.github.io"
    ,"alt": "goatslacker.github.io/alt" //noCF? (don´t add this in a new PR)
    ,"anenth": "anenth.github.io" //noCF? (don´t add this in a new PR)
    ,"anggao": "anggao.github.io" //noCF? (don´t add this in a new PR)
    ,"angular-jsf": "json-schema-faker.github.io/angular-jsf" //noCF? (don´t add this in a new PR)
    ,"angularstompdk": "davinkevin.github.io/AngularStompDK" //noCF? (don´t add this in a new PR)
    ,"annotate": "taitems.github.io/web-pdf-annotation" //noCF? (don´t add this in a new PR)
    ,"annoyingmouse": "annoyingmouse.github.io" //noCF? (don´t add this in a new PR)
    ,"anukul": "anukul.github.io"
    ,"api-spec": "api-spec.github.io" //noCF? (don´t add this in a new PR)
    ,"apicluster": "ramsunvtech.github.io/apicluster" //noCF? (don´t add this in a new PR)
    ,"aping": "johnnythetank.github.io/apiNG" //noCF? (don´t add this in a new PR)
    ,"aplayer": "diygod.github.io/APlayer" //noCF? (don´t add this in a new PR)
    ,"apod": "marcosflorencio.github.io/angular-apod" //noCF? (don´t add this in a new PR)
    ,"arc": "diegohaz.github.io/arc"
    ,"argo": "albertosantini.github.io/argo" //noCF? (don´t add this in a new PR)
    ,"arime": "ninbryan.github.io/arime" //noCF? (don´t add this in a new PR)
    ,"artery": "arteryjs.github.io/gh-pages" //noCF? (don´t add this in a new PR)
    ,"ass": "weizhenye.github.io/ASS"
    ,"astral": "espinielli.github.io/astraljs" //noCF? (don´t add this in a new PR)
    ,"astrobench": "kupriyanenko.github.io/astrobench" //noCF? (don´t add this in a new PR)
    ,"atombundles": "lirantal.github.io/atombundles"
    ,"autodocs": "bguiz.github.io/autodocs" //noCF? (don´t add this in a new PR)
    ,"avi": "avinassh.github.io/avi" //noCF? (don´t add this in a new PR)
    ,"avner": "avnerus.github.io" //noCF? (don´t add this in a new PR)
    ,"awal": "awalGarg.github.io" //noCF? (don´t add this in a new PR)
    ,"awesomehub": "awesomehub.netlify.com"
    ,"awk": "42ua.github.io/awk" //noCF? (don´t add this in a new PR)
    ,"backlog": "backlog-js.github.io/backlog.js.org" //noCF? (don´t add this in a new PR)
    ,"badger": "just-glue-it.github.io/badger" //noCF? (don´t add this in a new PR)
    ,"badrudeen": "badrudeen.github.io" //noCF? (don´t add this in a new PR)
    ,"bali": "balijs.github.io" //noCF? (don´t add this in a new PR)
    ,"barcelona": "barcelona-js.github.io/website" //noCF? (don´t add this in a new PR)
    ,"bash": "bashjs.github.io" //noCF? (don´t add this in a new PR)
    ,"basicgame": "basicgame.github.io/basicGame.js" //noCF? (don´t add this in a new PR)
    ,"bc": "mazko.github.io/bc.js"
    ,"begin": "advanced-webapps-class.github.io/begin" //noCF? (don´t add this in a new PR)
    ,"bestof": "michaelrambeau.github.io/bestofjs" //noCF? (don´t add this in a new PR)
    ,"bildepunkt": "bildepunkt.github.io" //noCF? (don´t add this in a new PR)
    ,"bind-action-dispatchers": "cchamberlain.github.io/bind-action-dispatchers" //noCF? (don´t add this in a new PR)
    ,"biu": "aprilorange.github.io/biu" //noCF? (don´t add this in a new PR)
    ,"blogpage": "zanseven007.github.io/blog-page" //noCF
    ,"bodybuilder": "danpaz.github.io/bodybuilder" //noCF? (don´t add this in a new PR)
    ,"bombsweeper": "pakastin.github.io/bombsweeper"
    ,"bootstrap-confirmation": "mistic100.github.io/Bootstrap-Confirmation" //noCF? (don´t add this in a new PR)
    ,"bornaeon": "bornaeon.github.io" //noCF
    ,"box": "capacitorset.github.io/box-js" //noCF
    ,"bplayer": "classicoldsong.github.io/bPlayer" //noCF? (don´t add this in a new PR)
    ,"brandonmerritt": "brandonmerritt.github.io" //noCF? (don´t add this in a new PR)
    ,"braxit": "braxit.github.io" //noCF? (don´t add this in a new PR)
    ,"brexit-regrets": "adebounam.github.io/brexit-regrets" //noCF? (don´t add this in a new PR)
    ,"bricklayer": "ademilter.github.io/bricklayer" //noCF? (don´t add this in a new PR)
    ,"brum": "brumjs.github.io" //noCF? (don´t add this in a new PR)
    ,"bunyan-fork": "cchamberlain.github.io/bunyan-fork" //noCF? (don´t add this in a new PR)
    ,"bunyan-pmx": "cchamberlain.github.io/bunyan-pmx" //noCF? (don´t add this in a new PR)
    ,"bunyan-serializer": "cchamberlain.github.io/bunyan-serializer" //noCF? (don´t add this in a new PR)
    ,"burst": "hugeen.github.io/burst" //noCF? (don´t add this in a new PR)
    ,"bustime": "agarzola.github.io/bustime" //noCF? (don´t add this in a new PR)
    ,"cable": "whatgoodisaroad.github.io/cablejs" //noCF? (don´t add this in a new PR)
    ,"calcy": "odevlord.github.io/Calcy" //noCF? (don´t add this in a new PR)
    ,"calendarios": "helpdev.github.io/Calendarios" //noCF? (don´t add this in a new PR)
    ,"candyland": "candyland-js.github.io/candyland"
    ,"capital": "capitaljs.github.io/capitaljs"
    ,"cartodb-demo": "opensas.github.io/cartodb-demo" //noCF? (don´t add this in a new PR)
    ,"central-node": "central-node.github.io" //noCF? (don´t add this in a new PR)
    ,"checklist": "hellogreg.github.io/checklist"
    ,"cheerio": "cheeriojs.github.io/cheerio"
    ,"chernivtsi": "chernivtsijs.github.io" //noCF? (don´t add this in a new PR)
    ,"chimon2000": "chimon2000.github.io" //noCF? (don´t add this in a new PR)
    ,"chrislaughlin": "chrislaughlin.github.io" //noCF? (don´t add this in a new PR)
    ,"chrismendis": "chrismendis.github.io" //noCF? (don´t add this in a new PR)
    ,"christo": "christoga.github.io" //noCF? (don´t add this in a new PR)
    ,"chronos": "espinielli.github.io/chronos" //noCF? (don´t add this in a new PR)
    ,"clockwork": "arcadiogarcia.github.io/Clockwork.js" //noCF? (don´t add this in a new PR)
    ,"clusterize": "nexts.github.io/Clusterize.js"
    ,"cmbhackjs2013": "cmbjs.github.io/cmbHackjs2013"
    ,"cn.redux": "camsong.github.io/redux-in-chinese" //noCF? (don´t add this in a new PR)
    ,"codemade": "codemade.github.io" //noCF? (don´t add this in a new PR)
    ,"coffea": "caffeinery.github.io/coffea"
    ,"collegequest": "schoolhouserock.github.io/CollegeQuest" //noCF? (don´t add this in a new PR)
    ,"comixngn": "seun40.github.io/comix-ngn" //noCF? (don´t add this in a new PR)
    ,"commandfox": "commandfox.github.io/mc-tools" //noCF? (don´t add this in a new PR)
    ,"community.os": "js.bydiscourse.com" //noCF? (don´t add this in a new PR)
    ,"concursos": "mteyss.github.io/concursos" //noCF? (don´t add this in a new PR)
    ,"construyendotrabajo": "mteyss.github.io/construyendotrabajo" //noCF? (don´t add this in a new PR)
    ,"contextify": "abemedia.github.io/jquery-contextify" //noCF? (don´t add this in a new PR)
    ,"cordova-multiplatform-template": "ckgrafico.github.io/Cordova-Multiplatform-Template" //noCF? (don´t add this in a new PR)
    ,"cote": "dashersw.github.io/cote" //noCF? (don´t add this in a new PR)
    ,"country": "growmies.github.io/countryjs" //noCF? (don´t add this in a new PR)
    ,"cplayer": "copay.github.io/cPlayer" //noCF? (don´t add this in a new PR)
    ,"cqrs": "adrai.github.io/cqrs" //noCF? (don´t add this in a new PR)
    ,"cracked": "billorcutt.github.io/Cracked"
    ,"crunch": "vukicevic.github.io/crunch" //noCF? (don´t add this in a new PR)
    ,"cucumber-mink": "adezandee.github.io/cucumber-mink" //noCF? (don´t add this in a new PR)
    ,"cycle": "cyclejs.github.io"
    ,"d4": "joelburget.github.io/d4"
    ,"danmaku": "weizhenye.github.io/Danmaku"
    ,"danmol": "dan12mol.github.io" //noCF? (don´t add this in a new PR)
    ,"date": "matthewmueller.github.io/date" //noCF? (don´t add this in a new PR)
    ,"daysfromnow": "pedrokost.github.io/daysfromnow" //noCF? (don´t add this in a new PR)
    ,"dbo": "z3ta.github.io/dbo" //noCF? (don´t add this in a new PR)
    ,"deck-of-cards": "pakastin.github.io/deck-of-cards"
    ,"deepu": "deepu105.github.io" //noCF? (don´t add this in a new PR)
    ,"delegacias-fortaleza": "juliosampaio.github.io/delegacias-fortaleza" //noCF? (don´t add this in a new PR)
    ,"denali": "denali-js.github.io/denali" //noCF? (don´t add this in a new PR)
    ,"denisvieira": "fromdenisvieira.github.io" //noCF? (don´t add this in a new PR)
    ,"deputy": "ry4nolson.github.io/Deputy" //noCF? (don´t add this in a new PR)
    ,"detect-resize": "noderaider.github.io/detect-resize" //noCF? (don´t add this in a new PR)
    ,"deterministic": "nodeguy.github.io/Deterministic.js"
    ,"dgelong": "alexeyraspopov.github.io/dgelong" //noCF? (don´t add this in a new PR)
    ,"diffract": "ameyms.github.io/diffract" //noCF? (don´t add this in a new PR)
    ,"dinesh": "dineshondev.github.io/dinesh" //noCF? (don´t add this in a new PR)
    ,"discord": "hydrabolt.github.io/discord.js"
    ,"distillery": "achannarasappa.github.io/distillery" //noCF? (don´t add this in a new PR)
    ,"distri": "flarp.github.io/Distri-JS"
    ,"dmitry": "dmitry-zaets.github.io" //noCF? (don´t add this in a new PR)
    ,"dns": "js-org.github.io/dns.js.org"
    ,"docsify": "QingWei-Li.github.io/docsify"
    ,"documentation": "documentationjs.github.io" //noCF? (don´t add this in a new PR)
    ,"docute": "egoist.github.io/docute"
    ,"domtastic": "webpro.github.io/DOMtastic"
    ,"donavon": "donavon.github.io" //noCF? (don´t add this in a new PR)
    ,"dope": "fouad.github.io/dope" //noCF? (don´t add this in a new PR)
    ,"dplayer": "diygod.github.io/DPlayer" //noCF? (don´t add this in a new PR)
    ,"dprof": "andreasmadsen.github.io/dprof"
    ,"draft": "D1SC0tech.github.io/draft.js" //noCF? (don´t add this in a new PR)
    ,"drag": "classicoldsong.github.io/Drag.js" //noCF? (don´t add this in a new PR)
    ,"dragon": "sabertazimi.github.io/dragonjs" //noCF? (don´t add this in a new PR)
    ,"draw": "skillzzjesse.github.io/draw"
    ,"dio": "thysultan.github.io/dio.js"
    ,"du": "ruanyl.github.io/du" //noCF? (don´t add this in a new PR)
    ,"duffn": "duffn.github.io" //noCF? (don´t add this in a new PR)
    ,"dunedin": "dunedinjs.github.io",
    ,"dutchakdev": "dutchakdev.github.io" //noCF? (don´t add this in a new PR)
    ,"dynamicsnode": "crisfervil.github.io/DynamicsNode"
    ,"ed2k": "sunnyli.github.io/ed2k.js"
    ,"elf": "mytharcher.github.io/elf.js.org" //noCF? (don´t add this in a new PR)
    ,"elliot": "elliotboney.github.io" //noCF? (don´t add this in a new PR)
    ,"embedlam": "wnda.github.io/embedlam"
    ,"ember-cli-page-object": "san650.github.io/ember-cli-page-object" //noCF? (don´t add this in a new PR)
    ,"emeraldcraftmc": "emeraldcraftmc.github.io" //noCF? (don´t add this in a new PR)
    ,"emulisp": "grahack.github.io/EmuLisp" //noCF? (don´t add this in a new PR)
    ,"enclave": "eanplatter.github.io/enclave" //noCF? (don´t add this in a new PR)
    ,"engui": "engui.github.io"
    ,"eq8": "eq8.github.io"
    ,"eray": "erayarslan.github.io" //noCF? (don´t add this in a new PR)
    ,"erik": "erikroyall.github.com" //noCF? (don´t add this in a new PR)
    ,"es.redux": "sergiodxa.github.io/redux-in-spanish" //noCF? (don´t add this in a new PR)
    ,"es2015-node": "martinheidegger.github.io/es6modules-nodejs" //noCF? (don´t add this in a new PR)
    ,"escape": "licshee.github.io/Escape.js" //noCF? (don´t add this in a new PR)
    ,"euc": "wnda.github.io/euc"
    ,"euclid": "anandthakker.github.io/euclid" //noCF? (don´t add this in a new PR)
    ,"eval": "jshawl.github.io/eval" //noCF? (don´t add this in a new PR)
    ,"eventstore": "adrai.github.io/node-eventstore" //noCF? (don´t add this in a new PR)
    ,"exbars": "youssefkababe.github.io/exbars" //noCF? (don´t add this in a new PR)
    ,"express-saml2": "tngan.github.io/express-saml2"
    ,"extraction": "rse.github.io/extraction" //noCF? (don´t add this in a new PR)
    ,"facepalm": "santiagogil.github.io/facepalm"
    ,"farfetchd": "achannarasappa.github.io/farfetchd" //noCF? (don´t add this in a new PR)
    ,"fariz": "farizdev.github.io/fariz"
    ,"fcbosque": "cronopio.github.io/fcbosque" //noCF? (don´t add this in a new PR)
    ,"feeble": "feeblejs.github.io/feeble"
    ,"fela": "rofrischmann.github.io/fela" //noCF? (don´t add this in a new PR)
    ,"festercluck": "festercluck.github.io" //noCF? (don´t add this in a new PR)
    ,"filter":"filterjs.github.io/docs"
    ,"finder": "applait.github.io/finderjs" //noCF? (don´t add this in a new PR)
    ,"fire-hydrant": "cchamberlain.github.io/fire-hydrant" //noCF? (don´t add this in a new PR)
    ,"firenze": "fahad19.github.io/firenze" //noCF? (don´t add this in a new PR)
    ,"fis": "fex-team.github.io/fis-site" //noCF? (don´t add this in a new PR)
    ,"five": "jackdcrawford.github.io/five"
    ,"fld-grd": "mrksbnch.github.io/fld-grd"
    ,"flexmasonry": "kavanmevada.github.io/flex_masonry" //noCF
    ,"flowchart": "adrai.github.io/flowchart.js" //noCF? (don´t add this in a new PR)
    ,"fluxoff": "kingscott.github.io/flux-off" //noCF? (don´t add this in a new PR)
    ,"fortune": "fortunejs.github.io/fortune" //noCF? (don´t add this in a new PR)
    ,"freemarker": "ijse.github.io/freemarker.js" //noCF? (don´t add this in a new PR)
    ,"freezer": "pakastin.github.io/freezer"
    ,"frzr": "pakastin.github.io/frzr"
    ,"g": "nodebox.github.io/g.js"
    ,"gal": "galmail.github.io" //noCF? (don´t add this in a new PR)
    ,"gamedevcontestal": "fromdenisvieira.github.io/gamedevcontestal" //noCF? (don´t add this in a new PR)
    ,"gcse": "abemedia.github.io/jquery-gcse"
    ,"geekr": "ruanyl.github.io/geekr" //noCF? (don´t add this in a new PR)
    ,"genpasswd": "exos.github.io/genpasswd" //noCF? (don´t add this in a new PR)
    ,"getlink":"ilovecode1.github.io/linkjs" //noCF? (don´t add this in a new PR)
    ,"ghastly": "hkwu.github.io/ghastly"
    ,"ghsamm": "ghsamm.github.io" //noCF? (don´t add this in a new PR)
    ,"giant-piano": "moroshko.github.io/giant-piano" //noCF? (don´t add this in a new PR)
    ,"girls": "girls-js.github.io"
    ,"gol": "goljs.github.io/GoL"
    ,"goodseller": "goodseller.github.io" //noCF? (don´t add this in a new PR)
    ,"gotanda": "gotandajs.github.io" //noCF? (don´t add this in a new PR)
    ,"graphics2d": "keyten.github.io/Graphics2D" //noCF? (don´t add this in a new PR)
    ,"grapnel": "engineeringmode.github.io/Grapnel.js" //noCF? (don´t add this in a new PR)
    ,"greg": "gregorydgarcia.github.io" //noCF? (don´t add this in a new PR)
    ,"grep": "42ua.github.io/grep" //noCF? (don´t add this in a new PR)
    ,"gridiron": "noderaider.github.io/gridiron"
    ,"gridsplit": "assetinfo.github.io" //noCF? (don´t add this in a new PR)
    ,"gruft": "nikola.github.io/gruft" //noCF? (don´t add this in a new PR)
    ,"guillotine": "matiasgagliano.github.io/guillotine" //noCF? (don´t add this in a new PR)
    ,"guiseek": "guiseek.github.io" //noCF? (don´t add this in a new PR)
    ,"gully": "nmabhinandan.github.io/gully" //noCF? (don´t add this in a new PR)
    ,"gulpkit": "gulpkit.github.io/GulpKit"
    ,"gun": "gundb.github.io" //noCF? (don´t add this in a new PR)
    ,"guuibayer": "guuibayer.github.io" //noCF? (don´t add this in a new PR)
    ,"gyps": "huijari.github.io/Gyps"
    ,"gyre": "wridder.github.io/GyreJS" //noCF? (don´t add this in a new PR)
    ,"h": "makenowjust.github.io/h.js" //noCF? (don´t add this in a new PR)
    ,"halil" : "hibrahimsafak.github.io" //noCF? (don´t add this in a new PR)
    ,"haloapi": "derflatulator.github.io/haloapi.js" //noCF? (don´t add this in a new PR)
    ,"happy": "e24.github.io/happy" //noCF? (don´t add this in a new PR)
    ,"hask": "janbiasi.github.io/hask" //noCF? (don´t add this in a new PR)
    ,"hay": "hayjs.github.io/hay.js.org"
    ,"heartseekers": "rajington.github.io/heartseekers" //noCF? (don´t add this in a new PR)
    ,"hello": "hello-js-org.github.io" //noCF? (don´t add this in a new PR)
    ,"hilo": "erikroyall.github.io/hilo" //noCF? (don´t add this in a new PR)
    ,"hk": "akura-co.github.io/hk" //noCF? (don´t add this in a new PR)
    ,"hooloo": "hooloo.github.io" //noCF? (don´t add this in a new PR)
    ,"human": "human-js.gitbooks.io" //noCF? (don´t add this in a new PR)
    ,"humanreadable": "matt-sanders.github.io/humanreadable" //noCF? (don´t add this in a new PR)
    ,"hxxbit": "hxxbit.github.io"
    ,"hyde": "gheek.github.io/hyde" //noCF? (don´t add this in a new PR)
    ,"hyperform": "hyperform.github.io"
    ,"ienumerable": "mbasso.github.io/ienumerable"
    ,"iffe": "iffe-team.github.io"
    ,"igorsantana": "igorsantana.github.io" //noCF? (don´t add this in a new PR)
    ,"iio": "iioinc.github.io/iio.js" //noCF? (don´t add this in a new PR)
    ,"imagecapture": "googlechrome.github.io/imagecapture-polyfill/"
    ,"immense": "immense.github.io" //noCF? (don´t add this in a new PR)
    ,"immybox": "immense.github.io/immybox" //noCF? (don´t add this in a new PR)
    ,"i18n4v": "shibukawa.github.io/i18n4v"
    ,"initial-wu": "initial-wu.github.io"
    ,"invoicing": "vahe.github.io/InvoicingJs"
    ,"ip-address": "beaugunderson.github.io/ip-address" //noCF? (don´t add this in a new PR)
    ,"is": "arasatasaygin.github.io/is.js" //noCF? (don´t add this in a new PR)
    ,"ishan": "ishanthukral.github.io/ishan.js" //noCF? (don´t add this in a new PR)
    ,"istanbul": "istanbuljs.github.io"
    ,"italia": "milano-js.github.io/italia-js" //noCF? (don´t add this in a new PR)
    ,"itsashis4u": "itsashis4u.github.io" //noCF? (don´t add this in a new PR)
    ,"ivml": "influencetech.github.io/ivml" //noCF? (don´t add this in a new PR)
    ,"j2p": "j2p.github.io" //noCF? (don´t add this in a new PR)
    ,"jacques": "jacquesmarais.github.io/jacques" //noCF? (don´t add this in a new PR)
    ,"jakarta": "jakartajs.github.io/jakartajs" //noCF? (don´t add this in a new PR)
    ,"jakejarrett": "jakejarrett.github.io" //noCF? (don´t add this in a new PR)
    ,"jalbertbowden": "jalbertbowden.github.io" //noCF? (don´t add this in a new PR)
    ,"james": "jamesrowen.github.io/james" //noCF? (don´t add this in a new PR)
    ,"jargon": "hugogiraudel.github.io/SJSJ" //noCF? (don´t add this in a new PR)
    ,"jbone": "kupriyanenko.github.io/jbone" //noCF? (don´t add this in a new PR)
    ,"jets": "nexts.github.io/Jets.js"
    ,"jjlc": "k-yak.github.io/JJLC" //noCF? (don´t add this in a new PR)
    ,"jogja": "jogjajs.github.io" //noCF
    ,"josuedanielbust": "josuedanielbust.github.io" //noCF? (don´t add this in a new PR)
    ,"jsnippet": "JesseEisen.github.io/snippets" //noCF
    ,"json-schema-faker": "json-schema-faker.github.io/website-jsf" //noCF? (don´t add this in a new PR)
    ,"juancarlosqr": "juancarlosqr.github.io" //noCF? (don´t add this in a new PR)
    ,"julien": "julien.github.io" //noCF? (don´t add this in a new PR)
    ,"junctions": "jamesknelson.github.io/junctions"
    ,"juno-106": "stevengoldberg.github.io/juno-106" //noCF? (don´t add this in a new PR)
    ,"jus": "zeke.github.io/jus.js.org" //noCF? (don´t add this in a new PR)
    ,"jwt-autorefresh": "cchamberlain.github.io/jwt-autorefresh" //noCF? (don´t add this in a new PR)
    ,"kainy": "kainy.github.io/js.org"
    ,"kalm": "fed135.github.io/kalm.github.io" //noCF? (don´t add this in a new PR)
    ,"karl": "karlcoelho.github.io/portfolio" //noCF? (don´t add this in a new PR)
    ,"kelvinho": "kelvin2go.github.io" //noCF? (don´t add this in a new PR)
    ,"kilvin": "rofrischmann.github.io/kilvin"
    ,"komada": "eslachance.github.io/komada"
    ,"konsumer": "konsumer.github.io" //noCF? (don´t add this in a new PR)
    ,"labelauty": "fntneves.github.io/jquery-labelauty" //noCF? (don´t add this in a new PR)
    ,"lambda": "lambdajs.github.io" //noCF? (don´t add this in a new PR)
    ,"laubstein": "laubstein.github.io" //noCF? (don´t add this in a new PR)
    ,"lean-stack": "lean-stack.github.io" //noCF? (don´t add this in a new PR)
    ,"leandro": "leandrowd.github.io" //noCF? (don´t add this in a new PR)
    ,"learnGitBranching": "pcottle.github.io/learnGitBranching" //noCF? (don´t add this in a new PR)
    ,"leipzig": "leipzigjs.github.io" //noCF? (don´t add this in a new PR)
    ,"liveflow": "hasharray.github.io/liveflow.js",
    ,"leoj": "leoaj.github.io" //noCF? (don´t add this in a new PR)
    ,"lessmd": "linuxenko.github.io/lessmd"
    ,"leste": "atwood-cai.github.io/leste.js" //noCF? (don´t add this in a new PR)
    ,"liguori": "liguori.github.io" //noCF? (don´t add this in a new PR)
    ,"localsync": "noderaider.github.io/localsync" //noCF? (don´t add this in a new PR)
    ,"logo": "js-org.github.io/logo" //noCF? (don´t add this in a new PR)
    ,"lostyle": "rtsao.github.io/lostyle"
    ,"ls": "links-js.github.io"
    ,"lychee": "Artificial-Engineering.github.io/lycheeJS-website"
    ,"magnet": "magnetjs.github.io/Magnet" //noCF? (don´t add this in a new PR)
    ,"markmsmith": "markmsmith.github.io"
    ,"martin": "martinbutler.github.io" //noCF? (don´t add this in a new PR)
    ,"martingollogly": "martingollogly.github.io" //noCF? (don´t add this in a new PR)
    ,"marxist": "ohmfox.github.io/marxistjs" //noCF? (don´t add this in a new PR)
    ,"matthias-schuetz": "matthias-schuetz.github.io" //noCF? (don´t add this in a new PR)
    ,"maxnachlinger": "maxnachlinger.github.io" //noCF? (don´t add this in a new PR)
    ,"maxtracking": "maxtracking.github.io" //noCF? (don´t add this in a new PR)
    ,"marble": "jsguy.github.io/marble"
    ,"marcosflorencio": "marcosflorencio.github.io"
    ,"mc": "magicarbon.github.io/mc" //noCF? (don´t add this in a new PR)
    ,"mde": "lukehorvat.github.io/mde-soundboard" //noCF? (don´t add this in a new PR)
    ,"medan": "medan-js.github.io" //noCF
    ,"mediainfo": "buzz.github.io/mediainfo.js"
	,"medit": "echosoar.github.io/medit"
    ,"medium-header": "danielfeelfine.github.io/medium-header" //noCF? (don´t add this in a new PR)
    ,"meiosis": "foxdonut.github.io/meiosis" //noCF? (don´t add this in a new PR)
    ,"mern": "IamMohaiminul.github.io/MERN"
    ,"mesh": "crcn.github.io/mesh.js.org" //noCF? (don´t add this in a new PR)
    ,"metadata": "oknosoft.github.io/metadata.js"
    ,"metagon": "austinhuang0131.github.io/metagon"
    ,"mf": "awto.github.io/mfjs-compiler" //noCF? (don´t add this in a new PR)
    ,"miguelsr": "miguelsr.github.io" //noCF? (don´t add this in a new PR)
    ,"minesweeper": "derflatulator.github.io/minesweeper"
    ,"jinya": "chenjinya.github.io"
    ,"mingyi": "liangmingyi.github.io" //noCF? (don´t add this in a new PR)
    ,"minigrid": "henriquea.github.io/minigrid" //noCF? (don´t add this in a new PR)
    ,"mis101bird": "mis101bird.github.io" //noCF? (don´t add this in a new PR)
    ,"mithril-ja": "shibukawa.github.io/mithril-ja" //noCF? (don´t add this in a new PR)
    ,"mithril": "lhorie.github.io/mithril" //noCF? (don´t add this in a new PR)
    ,"mmcq": "nikola.github.io/MMCQ" //noCF? (don´t add this in a new PR)
    ,"modalizer": "dungo.github.io/modalizer" //noCF? (don´t add this in a new PR)
    ,"mog-script": "mog-script.github.io"
    ,"mol": "eigenmethod.github.io/mol"
    ,"mom": "momjs.github.io/mom"
    ,"momentum": "wemakeweb.github.io/momentum" //noCF? (don´t add this in a new PR)
    ,"monkberry": "monkberry.github.io" //noCF? (don´t add this in a new PR)
    ,"moose": "mustpax.github.io/moose"
    ,"morocco": "moroccojs.github.io"
    ,"motapc": "motapc97.github.io" //noCF? (don´t add this in a new PR)
    ,"mpe": "weareroli.github.io/mpejs" //noCF? (don´t add this in a new PR)
    ,"mrn": "binggg.github.io/mrn" //noCF? (don´t add this in a new PR)
    ,"mscgen": "sverweij.github.io/mscgen_js"
    ,"multiple": "nexts.github.io/Multiple.js"
    ,"murder": "rolandpoulter.github.io/murder" //noCF? (don´t add this in a new PR)
    ,"mvc": "morozovsk.github.io/mvc" //noCF
    ,"mvidalgarcia": "mvidalgarcia.github.io" //noCF? (don´t add this in a new PR)
    ,"mythbusters": "kikobeats.github.io/js-mythbusters"
    ,"n-j-m": "n-j-m.github.io" //noCF? (don´t add this in a new PR)
    ,"nanimation": "imthenachoman.github.io/nAnimation" //noCF? (don´t add this in a new PR)
    ,"ncms": "janbiasi.github.io/ncms" //noCF? (don´t add this in a new PR)
    ,"ncub8": "ncub8.github.io" //noCF? (don´t add this in a new PR)
    ,"nearley": "hardmath123.github.io/nearley" //noCF? (don´t add this in a new PR)
    ,"nemo": "paypal.github.io/nemo" //noCF? (don´t add this in a new PR)
    ,"nflow": "nflow-js.github.io" //noCF? (don´t add this in a new PR)
    ,"ng-wig": "stevermeister.github.io/ngWig" //noCF? (don´t add this in a new PR)
    ,"ngirc": "ngirc.github.io/ng-irc" //noCF
    ,"ngn": "nodengn.github.io/NGN" //noCF? (don´t add this in a new PR)
    ,"ngspice": "42ua.github.io/ngspice.js"
    ,"nick": "nmai.github.io" //noCF? (don´t add this in a new PR)
    ,"nite": "manvalls.github.io/nite"
    ,"nktx": "nktx.github.io" //noCF? (don´t add this in a new PR)
    ,"node-atlas": "haeresis.github.io/NodeAtlas"
    ,"node-browser_process": "caspervonb.github.io/node-browser_process" //noCF? (don´t add this in a new PR)
    ,"nodegarden": "pakastin.github.io/nodegarden"
    ,"noted": "carter-slade.github.io/Noted-/" //noCF? (don´t add this in a new PR)
    ,"noteit": "saha96.github.io/NoteIt" //noCF? (don´t add this in a new PR)
    ,"nsp": "hanul.github.io/NSP" //noCF? (don´t add this in a new PR)
    ,"nsptiles": "imthenachoman.github.io/nSPTiles" //noCF? (don´t add this in a new PR)
    ,"nvanthao": "nvanthao.github.io" //noCF? (don´t add this in a new PR)
    ,"objectmodel": "sylvainpolletvillard.github.io/ObjectModel" //noCF? (don´t add this in a new PR)
    ,"oec": "crellison.github.io/oec"
    ,"oib": "andreicek.github.io/oib.js"
    ,"omaha": "omahajs.github.io"
    ,"omega": "jczimm.github.io/omega" //noCF? (don´t add this in a new PR)
    ,"omer": "omeroot.github.io" //noCF? (don´t add this in a new PR)
    ,"onedesert": "onedesert.github.io" //noCF? (don´t add this in a new PR)
    ,"onlineth": "onlineth.github.io"
    ,"opentype": "nodebox.github.io/opentype.js" //noCF? (don´t add this in a new PR)
    ,"os": "os-js.github.io/OS.js"
    ,"pad": "ebraminio.github.io/pad.js" //noCF? (don´t add this in a new PR)
    ,"pamatcher": "pmros.github.io/pamatcher" //noCF? (don´t add this in a new PR)
    ,"pantarei": "pantareijs.github.io/pantarei.js.org"
    ,"panza": "panza-org.github.io/panza-docs" //noCF
    ,"paperclip": "crcn.github.com/paperclip.js.org" //noCF? (don´t add this in a new PR)
    ,"paraiba": "paraibajs.github.io" //noCF? (don´t add this in a new PR)
    ,"parallel": "parallel-js.github.io/parallel.js"
    ,"parametric-svg": "parametric-svg.github.io" //noCF? (don´t add this in a new PR)
    ,"pas-ce-soir": "oldergod.github.io/pas-ce-soir"
    ,"pastebin-alert": "ramadhanamizudin.github.io/pastebin-alert.js" //noCF? (don´t add this in a new PR)
    ,"pathtrace": "kovacsv.github.io/WebGLPathTrace" //noCF? (don´t add this in a new PR)
    ,"paul": "paul-brown.github.io" //noCF? (don´t add this in a new PR)
    ,"pdfutils": "gottox.github.io/node-pdfutils" //noCF? (don´t add this in a new PR)
    ,"pdp-elements": "go4cas.github.io/pdp_elements" //noCF? (don´t add this in a new PR)
    ,"peekaboo": "nadavspi.github.io/peekaboo.js/",
    ,"pegboard": "mplewis.github.io/pegboard",
    ,"penn-sdk": "pennlabs.github.io/penn-sdk-node" //noCF? (don´t add this in a new PR)
    ,"pentris": "justinjc.github.io/pentris2" //noCF? (don´t add this in a new PR)
    ,"pguth": "pguth.github.io"
    ,"pharaoh": "pharaoh-js.github.io" //noCF? (don´t add this in a new PR)
    ,"phobos": "phobosjs.github.io/phobos.js"
    ,"photo-sphere-viewer": "mistic100.github.io/Photo-Sphere-Viewer" //noCF? (don´t add this in a new PR)
    ,"piii": "theuves.github.io/piii.js" //noCF? (don´t add this in a new PR)
    ,"pinf": "pinf.github.io" //noCF? (don´t add this in a new PR)
    ,"pipes": "pipesjs.github.io" //noCF? (don´t add this in a new PR)
    ,"pitermarx": "pitermarx.github.io" //noCF? (don´t add this in a new PR)
    ,"pivot": "wnda.github.io/pivot"
    ,"pixelart": "meriadec.github.io/PixelartJS" //noCF? (don´t add this in a new PR)
    ,"plait": "wildlyinaccurate.github.io/plait"
    ,"planisphere": "dai-shi.github.io/planisphere-site" //noCF? (don´t add this in a new PR)
    ,"pliers": "pliersjs.github.io" //noCF? (don´t add this in a new PR)
    ,"poegems": "max-arias.github.io/poeGems" //noCF? (don´t add this in a new PR)
    ,"pogo": "aaronduino.github.io/pogo"
    ,"polished": "styled-components.github.io/polished",
    ,"polythene": "arthurclemens.github.io/Polythene" //noCF? (don´t add this in a new PR)
    ,"popper": "fezvrasta.github.io/popper.js"
    ,"porter": "ahopkins.github.io/porterjs" //CF
    ,"profanity-finder":"gautamkrishnar.github.io/profanity-finder.js"
    ,"proteic.js.org":"proteus-h2020.github.io/proteic"
    ,"qs": "kirjs.github.io/qs.js" //noCF? (don´t add this in a new PR)
    ,"querybuilder": "mistic100.github.io/jQuery-QueryBuilder" //noCF? (don´t add this in a new PR)
    ,"quiz-app": "odevlord.github.io/Quiz-App" //noCF? (don´t add this in a new PR)
    ,"quiz-revamped": "abhisekp.github.io/Quiz-Revamped" //noCF? (don´t add this in a new PR)
    ,"rad": "rapid-application-development-js.github.io/RAD.JS" //noCF? (don´t add this in a new PR)
    ,"radial": "ckgrafico.github.io/radial.js" //noCF? (don´t add this in a new PR)
    ,"rafaelmangolin": "rafaelMangolin.github.io" //noCF? (don´t add this in a new PR)
    ,"rag" : "michaellyons.github.io/react-amazon-gallery" //noCF? (don´t add this in a new PR)
    ,"rahul": "rahulsukla.github.io/rahul" //noCF? (don´t add this in a new PR)
    ,"rangeslider": "andreruffert.github.io/rangeslider.js" //noCF? (don´t add this in a new PR)
    ,"rate-limiter-api": "abhisekp.github.io/rate-limiter-api"
    ,"react-atomic-ui": "react-atomic.github.io/react-atomic-ui"
    ,"react-autosuggest": "moroshko.github.io/react-autosuggest" //noCF? (don´t add this in a new PR)
    ,"react-autowhatever": "moroshko.github.io/react-autowhatever" //noCF? (don´t add this in a new PR)
    ,"react-day-picker": "gpbl.github.io/react-day-picker" //noCF
    ,"react-easy-swipe": "leandrowd.github.io/react-easy-swipe" //noCF? (don´t add this in a new PR)
    ,"react-entanglement": "react-entanglement.github.io"
    ,"react-hint": "slmgc.github.io/react-hint"
    ,"react-responsive-carousel": "leandrowd.github.io/react-responsive-carousel" //noCF? (don´t add this in a new PR)
    ,"react-shared": "rvikmanis.github.io/react-shared" //noCF? (don´t add this in a new PR)
    ,"react-styleguidist": "sapegin.github.io/react-styleguidist" //noCF? (don´t add this in a new PR)
    ,"react-toulouse": "moox.github.io/react-toulouse"
    ,"reactabular": "bebraw.github.io/reactabular"
    ,"reactdesktop": "gabrielbull.github.io/react-desktop" //noCF? (don´t add this in a new PR)
    ,"reader": "ruanyl.github.io/js-reader" //noCF? (don´t add this in a new PR)
    ,"realtime": "datamcfly.github.io/realtimejs" //noCF? (don´t add this in a new PR)
    ,"reassign": "hasharray.github.io/reassign.js"
    ,"rebatov": "rebatov.github.io"
    ,"rebem": "rebem.github.io" //noCF? (don´t add this in a new PR)
    ,"recycle": "recyclejs.github.io/recycle"
    ,"redis": "noderedis.github.io/node_redis" //noCF? (don´t add this in a new PR)
    ,"redom": "pakastin.github.io/redom"
    ,"reduce": "reducejs.github.io" //noCF? (don´t add this in a new PR)
    ,"redux-minimal": "catalin-luntraru.github.io/redux-minimal"
    ,"redux-observable": "redux-observable.github.io/redux-observable"
    ,"redux-undo": "omnidan.github.io/redux-undo" //noCF? (don´t add this in a new PR)
    ,"redux-webpack-boilerplate": "cchamberlain.github.io/redux-webpack-boilerplate" //noCF? (don´t add this in a new PR)
    ,"redux": "rackt.github.io/redux" //noCF? (don´t add this in a new PR)
    ,"reduxible": "pitzcarraldo.github.io/reduxible" //noCF? (don´t add this in a new PR)
    ,"refraction": "mbasso.github.io/refraction" //noCF? (don´t add this in a new PR)
    ,"refujs": "refujs.github.io" //noCF? (don´t add this in a new PR)
    ,"rekit": "supnate.github.io/rekit" //noCF
    ,"relate": "jakelazaroff.github.io/relate" //noCF? (don´t add this in a new PR)
    ,"remark": "wooorm.github.io/remark" //noCF? (don´t add this in a new PR)
    ,"rene": "revrng.github.io" //noCF? (don´t add this in a new PR)
    ,"revaluate" "hasharray.github.io/revaluate.js"
    ,"repackage": "cchamberlain.github.io/repackage" //noCF? (don´t add this in a new PR)
    ,"request": "request.gitbooks.io" //noCF? (don´t add this in a new PR)
    ,"restjs": "daviesgeek.github.io/restjs"
    ,"reshift": "hasharray.github.io/reshift.js"
    ,"riotgear": "riotgear.github.io"
    ,"rishav": "xrisk.github.io"
    ,"rivki": "mikqi.github.io"
    ,"rmodal": "zewish.github.io/rmodal.js" //noCF? (don´t add this in a new PR)
    ,"router-advanced": "oldergod.github.io/router-advanced"
    ,"rp": "rpocklin.github.io" //noCF? (don´t add this in a new PR)
    ,"ruhuman": "ruhuman.github.io" //noCF? (don´t add this in a new PR)
    ,"ruwan": "rpgee.github.io"
    ,"saadmir": "saadmir.github.io" //noCF? (don´t add this in a new PR)
    ,"sagui": "saguijs.github.io" //noCF? (don´t add this in a new PR)
    ,"saigon": "saigonjs.github.io"
    ,"sam":"jdubray.github.io/sam" //noCF? (don´t add this in a new PR)
    ,"sanctuary": "sanctuary-js.github.io/sanctuary-site"
    ,"sass": "medialize.github.io/playground.sass.js" //noCF? (don´t add this in a new PR)
    ,"saulosantiago": "saulosilva.github.io" //noCF? (don´t add this in a new PR)
    ,"savingthrow": "pdistefano.github.io/SavingThrow.js" //noCF? (don´t add this in a new PR)
    ,"schisma": "schisma.github.io/opensource" //noCF? (don´t add this in a new PR)
    ,"scrolledin": "manuelromeroramos.github.io/scrolledIn.js" //noCF? (don´t add this in a new PR)
    ,"sdk-design": "huei90.github.io/javascript-sdk-design" //noCF? (don´t add this in a new PR)
    ,"sean": "seancallinan.github.io" //noCF? (don´t add this in a new PR)
    ,"sed": "42ua.github.io/sed" //noCF? (don´t add this in a new PR)
    ,"seesaw": "cajogos.github.io/seesaw" //noCF? (don´t add this in a new PR)
    ,"segoe-mdl2-css": "ckgrafico.github.io/Segoe-mdl2-assets-css" //noCF? (don´t add this in a new PR)
    ,"select_io": "selaromi.github.io/select_io" //noCF? (don´t add this in a new PR)
    ,"selectors": "selectors.github.io/selectors.js"
    ,"selectric": "lcdsantos.github.io/jQuery-Selectric" //noCF? (don´t add this in a new PR)
    ,"sendilkumarn": "sendilkumarn.github.io"
    ,"serender": "youssefkababe.github.io/serender" //noCF? (don´t add this in a new PR)
    ,"serginator": "serginator.github.io" //noCF? (don´t add this in a new PR)
    ,"serializer": "haircvt.github.io/serializerjs" //noCF? (don´t add this in a new PR)
    ,"shaily": "shailysangwan.github.io"
    ,"shedali": "shedali.github.io" //noCF? (don´t add this in a new PR)
    ,"shortquery": "s--minecraft.gitbooks.io/shortquery-js" //noCF? (don´t add this in a new PR)
    ,"shorttompkins": "shorttompkins.github.io" //noCF? (don´t add this in a new PR)
    ,"silfr": "silfr.github.io/iterativecolor"
    ,"silky": "wvv8oo.github.com/silky" //noCF? (don´t add this in a new PR)
    ,"siluna": "pahund.github.io/siluna" //noCF? (don´t add this in a new PR)
    ,"simulacra": "0x8890.github.io/simulacra" //noCF? (don´t add this in a new PR)
    ,"sirkit": "seckwei.github.io/SirKit_CircuitSim" //noCF? (don´t add this in a new PR)
    ,"sizle": "christoga.github.io/sizle" //noCF? (don´t add this in a new PR)
    ,"skate": "skatejs.github.io" //noCF? (don´t add this in a new PR)
    ,"skx": "skx.github.io" //noCF? (don´t add this in a new PR)
    ,"slang": "ramadis.github.io/slang" //noCF? (don´t add this in a new PR)
    ,"slideout": "mango.github.io/slideout"
    ,"smoove": "abemedia.github.io/jquery-smoove"
    ,"sn0w": "greensn0w.github.io" //noCF? (don´t add this in a new PR)
    ,"social-likes-next": "sapegin.github.io/social-likes-next" //noCF? (don´t add this in a new PR)
    ,"social-likes": "sapegin.github.io/social-likes" //noCF? (don´t add this in a new PR)
    ,"solome": "solome.github.io"
    ,"sonny": "sonnylazuardi.github.io" //noCF? (don´t add this in a new PR)
    ,"sox": "sox-team.github.io/sox" //noCF? (don´t add this in a new PR)
    ,"specky": "speckyjs.github.io/specky"
    ,"spectragram,": "adrianengine.github.io/jquery-spectragram" //noCF? (don´t add this in a new PR)
    ,"spicdev": "spicdev.github.io" //noCF? (don´t add this in a new PR)
    ,"spin": "fgnass.github.io/spin.js" //noCF? (don´t add this in a new PR)
    ,"spirare": "waldenn.github.io/spirare" //noCF? (don´t add this in a new PR)
    ,"spiritual": "spiritual-js.github.io" //noCF? (don´t add this in a new PR)
    ,"spreadsheet": "chiefofgxbxl.github.io/Spreadsheet.js/"
    ,"spritesheet": "arcadiogarcia.github.io/Spritesheet.js" //noCF? (don´t add this in a new PR)
    ,"spritewerk": "bildepunkt.github.io/spritewerk" //noCF? (don´t add this in a new PR)
    ,"squeak": "bertfreudenberg.github.io/SqueakJS"
    ,"stabs": "wnda.github.io/stabs"
    ,"starratio": "starratio.github.io/star-ratio" //noCF
    ,"staticinstance": "staticinstance.github.io" //noCF? (don´t add this in a new PR)
    ,"stats": "js-org.github.io/stats.js.org"
    ,"stego": "zeruniverse.github.io/CryptoStego" //noCF? (don´t add this in a new PR)
    ,"stepan": "stevermeister.github.io" //noCF? (don´t add this in a new PR)
    ,"stephenmccall": "stephenmccall.github.io" //noCF? (don´t add this in a new PR)
    ,"stress": "julindra.github.io/stress.js"
    ,"stuck": "linuxenko.github.io/unstuck-webpack"
    ,"style": "dhilipsiva.github.io/style.js" //noCF? (don´t add this in a new PR)
    ,"styletron": "rtsao.github.io/styletron" //noCF? (don´t add this in a new PR)
    ,"sudoku": "andreynering.github.io/sudoku"
    ,"sulky": "shingle.github.io/sulky" //noCF? (don´t add this in a new PR)
    ,"sunsistemo": "sunsistemo.github.io/sunsistemo"
    ,"supernova": "janbiasi.github.io/supernova" //noCF? (don´t add this in a new PR)
    ,"swichit": "dongryphon.github.io/switchit"
    ,"tagster": "goschevski.github.io/tagster" //noCF? (don´t add this in a new PR)
    ,"talker": "secondstreet.github.io/talker.js" //noCF? (don´t add this in a new PR)
    ,"tap-flux": "technologyadvice.github.io/tap-flux" //noCF? (don´t add this in a new PR)
    ,"tart": "tart.github.io/tartJS" //noCF? (don´t add this in a new PR)
    ,"techfest": "anukul.github.io/techfest" //noCF? (don´t add this in a new PR)
    ,"telaviv": "dustin-h.github.io/telaviv" //noCF? (don´t add this in a new PR)
    ,"telegraf": "telegraf.github.io/telegraf" //noCF? (don´t add this in a new PR)
    ,"temple": "beneaththeink.github.io/Temple" //noCF? (don´t add this in a new PR)
    ,"terminal": "gottox.github.io/terminal.js" //noCF? (don´t add this in a new PR)
    ,"textillate": "jschr.github.io/textillate" //noCF? (don´t add this in a new PR)
    ,"texy": "egoist.github.io/texy"
    ,"themoviedb": "chrisenytc.github.io/themoviedb" //noCF? (don´t add this in a new PR)
    ,"thundercats": "thundercatsjs.github.io/thundercats" //noCF? (don´t add this in a new PR)
    ,"timerizer": "callumacrae.github.io/timerizerJS" //noCF? (don´t add this in a new PR)
    ,"tint": "tintjs.github.io" //noCF? (don´t add this in a new PR)
    ,"tinylinux": "e8johan.github.io/tiny-js" //noCF? (don´t add this in a new PR)
    ,"toad": "wnda.github.io/toad"
    ,"torino": "torinojs.github.io" //noCF? (don´t add this in a new PR)
    ,"torlondev": "torlondev.github.io"
    ,"trace": "andreasmadsen.github.io/trace"
    ,"treviso": "trevisojs.github.io" //noCF? (don´t add this in a new PR)
    ,"trevorgk": "trevorgk.github.io" //noCF? (don´t add this in a new PR)
    ,"troxel": "troxeljs.github.io"
    ,"try-catch-finally": "c24w.github.io/try-catch-finally.js"
    ,"ts2jsdoc": "spatools.github.io/ts2jsdoc" //noCF? (don´t add this in a new PR)
    ,"tsfp": "zhenwenc.github.io/tsfp" //noCF? (don´t add this in a new PR)
    ,"tweetnacl": "dchest.github.io/tweetnacl-js"
    ,"two": "jonobr1.github.io/two.js"
    ,"tydel": "fahad19.github.io/tydel" //noCF? (don´t add this in a new PR)
    ,"typeahead": "corejavascript.github.io/typeahead.js"
    ,"u": "hanul.github.io/UJS" //noCF? (don´t add this in a new PR)
    ,"udnisap": "udnisap.github.io"
    ,"ukazap": "ukazap.github.io" //noCF? (don´t add this in a new PR)
    ,"ultcombo": "ultcombo.github.io" //noCF? (don´t add this in a new PR)
    ,"unexpected": "unexpectedjs.github.io" //noCF? (don´t add this in a new PR)
    ,"uni": "arcadiogarcia.github.io/UNIJS" //noCF? (don´t add this in a new PR)
    ,"upresent": "bobbybee.github.io/uPresent" //noCF? (don´t add this in a new PR)
    ,"utscrooms": "sunakujira1.github.io/UTSCRooms"
    ,"uvcharts": "imaginea.github.io/uvCharts" //noCF? (don´t add this in a new PR)
    ,"vaguilar": "vaguilar.github.io" //noCF? (don´t add this in a new PR)
    ,"valentin": "valentinvieriu.github.io" //noCF? (don´t add this in a new PR)
    ,"validator": "ppoffice.github.io/validator.js" //noCF? (don´t add this in a new PR)
    ,"vbuild":"egoist.github.io/vbuild.js.org"
    ,"vico": "bohdantkachenko.github.io/vico" //noCF? (don´t add this in a new PR)
    ,"vinimdocarmo": "vinimdocarmo.github.com" //noCF? (don´t add this in a new PR)
    ,"visualnovel": "selcher.github.io/visualnoveljs" //noCF? (don´t add this in a new PR)
    ,"vk-x": "vk-x.github.io"
    ,"vncz": "xvincentx.github.io/vncz"
    ,"voloshins": "voloshins.github.io" //noCF? (don´t add this in a new PR)
    ,"vorpal": "dthree.github.io/vorpal" //noCF? (don´t add this in a new PR)
    ,"vscode-apielements":"xvincentx.github.io/vscode-apielements"
    ,"vuikit":"vuikit.github.io"
    ,"vuongdothanhhuy": "vuongdothanhhuy.github.io" //noCF? (don´t add this in a new PR)
    ,"watch": "ducin.github.io/watchjs.org" //noCF? (don´t add this in a new PR)
    ,"wayou": "wayou.github.io" //noCF? (don´t add this in a new PR)
    ,"weaver": "maxkfranz.github.io/weaver" //noCF? (don´t add this in a new PR)
    ,"webpack": "webpack.github.io/webpack.js.org"
    ,"within": "eric-brechemier.github.io/within" //noCF? (don´t add this in a new PR)
    ,"wordywordy": "sverweij.github.io/wordywordy"
    ,"wwb": "eqielb.github.io/wwb" //noCF? (don´t add this in a new PR)
    ,"wyfe": "wangyuanstudio.github.io/WYFE" //noCF? (don´t add this in a new PR)
    ,"xprmntl": "xprmntl.github.io" //noCF? (don´t add this in a new PR)
    ,"xn--z7h": "daniloprates.github.io/xn--z7h"
    ,"xto6": "mohebifar.github.io/xto6" //noCF? (don´t add this in a new PR)
    ,"xtype": "lucono.github.io/xtypejs" //noCF? (don´t add this in a new PR)
    ,"y86": "quietshu.github.io/y86" //noCF? (don´t add this in a new PR)
    ,"yah": "thassiov.github.io/yah" //noCF? (don´t add this in a new PR)
    ,"yamdbf": "zajrik.github.io/yamdbf"
    ,"yargs": "yargs.github.io" //noCF? (don´t add this in a new PR)
    ,"youtim": "mortonfox.github.io/YouTim" //noCF? (don´t add this in a new PR)
    ,"youtube-box": "lucasmonteverde.github.io/youtube-box" //noCF? (don´t add this in a new PR)
    ,"zanyuyu": "zanseven007.github.io/resume" //noCF
    ,"zazu": "zazujs.github.io" //noCF? (don´t add this in a new PR)
    ,"zodiac": "indus.github.io/Zodiac" //noCF? (don´t add this in a new PR)
    ,"zombie": "assaf.github.io/zombie" //noCF? (don´t add this in a new PR)
    ,"mrpluto": "mrpluto.github.io"
}
