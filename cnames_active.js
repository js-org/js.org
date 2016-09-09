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
    ,"101": "7anshuai.github.io/js101" //noCF?
    ,"7anshuai": "7anshuai.github.io" //noCF?
    ,"8art": "erayarslan.github.io/8art" //noCF?
    ,"abhishek":"rpidanny.github.io/personal-collage"
    ,"akase": "cedmax.github.io/akase" //noCF?
    ,"akashacms": "akashacms.github.io" //noCF?
    ,"alasql": "alasql.github.io" //noCF?
    ,"algebra": "nicolewhite.github.io/algebra.js" //noCF?
    ,"aligos.js.org": "aligos.github.io" //noCF?
    ,"all": "learnsomuch.github.io/all.js" //noCF?
    ,"almin": "almin.github.io"
    ,"alt": "goatslacker.github.io/alt" //noCF?
    ,"anenth": "anenth.github.io" //noCF?
    ,"anggao": "anggao.github.io" //noCF?
    ,"angular-jsf": "json-schema-faker.github.io/angular-jsf" //noCF?
    ,"angularstompdk": "davinkevin.github.io/AngularStompDK" //noCF?
    ,"annotate": "taitems.github.io/web-pdf-annotation" //noCF?
    ,"annoyingmouse": "annoyingmouse.github.io" //noCF?
    ,"api-spec": "api-spec.github.io" //noCF?
    ,"apicluster": "ramsunvtech.github.io/apicluster" //noCF?
    ,"aping": "johnnythetank.github.io/apiNG" //noCF?
    ,"aplayer": "diygod.github.io/APlayer" //noCF?
    ,"apod": "marcosflorencio.github.io/angular-apod" //noCF?
    ,"argo": "albertosantini.github.io/argo" //noCF?
    ,"arime": "ninbryan.github.io/arime" //noCF?
    ,"artery": "arteryjs.github.io/gh-pages" //noCF?
    ,"ass": "weizhenye.github.io/ASS"
    ,"astral": "espinielli.github.io/astraljs" //noCF?
    ,"astrobench": "kupriyanenko.github.io/astrobench" //noCF?
    ,"autodocs": "bguiz.github.io/autodocs" //noCF?
    ,"avi": "avinassh.github.io/avi" //noCF?
    ,"avner": "avnerus.github.io" //noCF?
    ,"awal": "awalGarg.github.io" //noCF?
    ,"awk": "42ua.github.io/awk" //noCF?
    ,"backlog": "backlog-js.github.io/backlog.js.org" //noCF?
    ,"badger": "just-glue-it.github.io/badger" //noCF?
    ,"badrudeen": "badrudeen.github.io" //noCF?
    ,"bali": "balijs.github.io" //noCF?
    ,"barcelona": "barcelona-js.github.io/website" //noCF?
    ,"bash": "bashjs.github.io" //noCF?
    ,"basicgame": "basicgame.github.io/basicGame.js" //noCF?
    ,"begin": "advanced-webapps-class.github.io/begin" //noCF?
    ,"bestof": "michaelrambeau.github.io/bestofjs" //noCF?
    ,"bildepunkt": "bildepunkt.github.io" //noCF?
    ,"bind-action-dispatchers": "cchamberlain.github.io/bind-action-dispatchers" //noCF?
    ,"biu": "aprilorange.github.io/biu" //noCF?
    ,"bodybuilder": "danpaz.github.io/bodybuilder" //noCF?
    ,"bombsweeper": "pakastin.github.io/bombsweeper"
    ,"bootstrap-confirmation": "mistic100.github.io/Bootstrap-Confirmation" //noCF?
    ,"bornaeon": "bornaeon.github.io" //noCF
    ,"bplayer": "classicoldsong.github.io/bPlayer" //noCF?
    ,"brandonmerritt": "brandonmerritt.github.io" //noCF?
    ,"braxit": "braxit.github.io" //noCF?
    ,"brexit-regrets": "adebounam.github.io/brexit-regrets" //noCF?
    ,"bricklayer": "ademilter.github.io/bricklayer" //noCF?
    ,"brum": "brumjs.github.io" //noCF?
    ,"bub": "dar5hak.github.io/bub" //noCF?
    ,"bunyan-fork": "cchamberlain.github.io/bunyan-fork" //noCF?
    ,"bunyan-pmx": "cchamberlain.github.io/bunyan-pmx" //noCF?
    ,"bunyan-serializer": "cchamberlain.github.io/bunyan-serializer" //noCF?
    ,"burst": "hugeen.github.io/burst" //noCF?
    ,"bustime": "agarzola.github.io/bustime" //noCF?
    ,"cable": "whatgoodisaroad.github.io/cablejs" //noCF?
    ,"calcy": "odevlord.github.io/Calcy" //noCF?
    ,"calendarios": "helpdev.github.io/Calendarios" //noCF?
    ,"candyland": "candyland-js.github.io/candyland"
    ,"capital": "capitaljs.github.io/capitaljs"
    ,"cartodb-demo": "opensas.github.io/cartodb-demo" //noCF?
    ,"central-node": "central-node.github.io" //noCF?
    ,"cheerio": "cheeriojs.github.io/cheerio"
    ,"chernivtsi": "chernivtsijs.github.io" //noCF?
    ,"chimon2000": "chimon2000.github.io" //noCF?
    ,"chrislaughlin": "chrislaughlin.github.io" //noCF?
    ,"chrismendis": "chrismendis.github.io" //noCF?
    ,"christo": "christoga.github.io" //noCF?
    ,"chronos": "espinielli.github.io/chronos" //noCF?
    ,"clockwork": "arcadiogarcia.github.io/Clockwork.js" //noCF?
    ,"clusterize": "nexts.github.io/Clusterize.js"
    ,"cmbhackjs2013": "cmbjs.github.io/cmbHackjs2013"
    ,"cn.redux": "camsong.github.io/redux-in-chinese" //noCF?
    ,"codemade": "codemade.github.io" //noCF?
    ,"collegequest": "schoolhouserock.github.io/CollegeQuest" //noCF?
    ,"comixngn": "seun40.github.io/comix-ngn" //noCF?
    ,"commandfox": "commandfox.github.io/mc-tools" //noCF?
    ,"community.os": "js.bydiscourse.com" //noCF?
    ,"concursos": "mteyss.github.io/concursos" //noCF?
    ,"construyendotrabajo": "mteyss.github.io/construyendotrabajo" //noCF?
    ,"contextify": "abemedia.github.io/jquery-contextify" //noCF?
    ,"cordova-multiplatform-template": "ckgrafico.github.io/Cordova-Multiplatform-Template" //noCF?
    ,"cote": "dashersw.github.io/cote" //noCF?
    ,"country": "growmies.github.io/countryjs" //noCF?
    ,"cplayer": "copay.github.io/cPlayer" //noCF?
    ,"cqrs": "adrai.github.io/cqrs" //noCF?
    ,"crunch": "vukicevic.github.io/crunch" //noCF?
    ,"cssjanus": "cssjanus.github.io"
    ,"cucumber-mink": "adezandee.github.io/cucumber-mink" //noCF?
    ,"cycle": "cyclejs.github.io" //noCF?
    ,"d4": "joelburget.github.io/d4"
    ,"danmaku": "weizhenye.github.io/Danmaku"
    ,"danmol": "dan12mol.github.io" //noCF?
    ,"date": "matthewmueller.github.io/date" //noCF?
    ,"daysfromnow": "pedrokost.github.io/daysfromnow" //noCF?
    ,"dbo": "z3ta.github.io/dbo" //noCF?
    ,"deck-of-cards": "pakastin.github.io/deck-of-cards"
    ,"deepu": "deepu105.github.io" //noCF?
    ,"delegacias-fortaleza": "juliosampaio.github.io/delegacias-fortaleza" //noCF?
    ,"denali": "denali-js.github.io/denali" //noCF?
    ,"denisvieira": "fromdenisvieira.github.io" //noCF?
    ,"deputy": "ry4nolson.github.io/Deputy" //noCF?
    ,"detect-resize": "noderaider.github.io/detect-resize" //noCF?
    ,"deterministic": "nodeguy.github.io/Deterministic.js" //noCF?
    ,"dgelong": "alexeyraspopov.github.io/dgelong" //noCF?
    ,"diffract": "ameyms.github.io/diffract" //noCF?
    ,"dinesh": "dineshondev.github.io/dinesh" //noCF?
    ,"distillery": "achannarasappa.github.io/distillery" //noCF?
    ,"dmitry": "dmitry-zaets.github.io" //noCF?
    ,"dns": "js-org.github.io/dns.js.org"
    ,"documentation": "documentationjs.github.io" //noCF?
    ,"domtastic": "webpro.github.io/DOMtastic"
    ,"donavon": "donavon.github.io" //noCF?
    ,"dope": "fouad.github.io/dope" //noCF?
    ,"dplayer": "diygod.github.io/DPlayer" //noCF?
    ,"draft": "D1SC0tech.github.io/draft.js" //noCF?
    ,"drag": "classicoldsong.github.io/Drag.js" //noCF?
    ,"dragon": "sabertazimi.github.io/dragonjs" //noCF?
    ,"draw": "skillzzjesse.github.io/draw"
    ,"du": "ruanyl.github.io/du" //noCF?
    ,"duffn": "duffn.github.io" //noCF?
    ,"dutchakdev": "dutchakdev.github.io" //noCF?
    ,"ed2k": "sunnyli.github.io/ed2k.js"
    ,"elf": "mytharcher.github.io/elf.js.org" //noCF?
    ,"elliot": "elliotboney.github.io" //noCF?
    ,"ember-cli-page-object": "san650.github.io/ember-cli-page-object" //noCF?
    ,"emeraldcraftmc": "emeraldcraftmc.github.io" //noCF?
    ,"emulisp": "grahack.github.io/EmuLisp" //noCF?
    ,"enclave": "eanplatter.github.io/enclave" //noCF?
    ,"engui": "engui.github.io"
    ,"eq8": "eq8.github.io"
    ,"eray": "erayarslan.github.io" //noCF?
    ,"erik": "erikroyall.github.com" //noCF?
    ,"es.redux": "sergiodxa.github.io/redux-in-spanish" //noCF?
    ,"es2015-node": "martinheidegger.github.io/es6modules-nodejs" //noCF?
    ,"escape": "licshee.github.io/Escape.js" //noCF?
    ,"euc": "wnda.github.io/euc"
    ,"euclid": "anandthakker.github.io/euclid" //noCF?
    ,"eval": "jshawl.github.io/eval" //noCF?
    ,"eventstore": "adrai.github.io/node-eventstore" //noCF?
    ,"exbars": "youssefkababe.github.io/exbars" //noCF?
    ,"extraction": "rse.github.io/extraction" //noCF?
    ,"facepalm": "santiagogil.github.io/facepalm"
    ,"farfetchd": "achannarasappa.github.io/farfetchd" //noCF?
    ,"fcbosque": "cronopio.github.io/fcbosque" //noCF?
    ,"fela": "rofrischmann.github.io/fela" //noCF?
    ,"festercluck": "festercluck.github.io" //noCF?
    ,"finder": "applait.github.io/finderjs" //noCF?
    ,"fire-hydrant": "cchamberlain.github.io/fire-hydrant" //noCF?
    ,"firenze": "fahad19.github.io/firenze" //noCF?
    ,"fis": "fex-team.github.io/fis-site" //noCF?
    ,"fld-grd": "mrksbnch.github.io/fld-grd"
    ,"flowchart": "adrai.github.io/flowchart.js" //noCF?
    ,"fluxoff": "kingscott.github.io/flux-off" //noCF?
    ,"fortune": "fortunejs.github.io/fortune" //noCF?
    ,"freemarker": "ijse.github.io/freemarker.js" //noCF?
    ,"freezer": "pakastin.github.io/freezer"
    ,"frzr": "pakastin.github.io/frzr"
    ,"gal": "galmail.github.io" //noCF?
    ,"gamedevcontestal": "fromdenisvieira.github.io/gamedevcontestal" //noCF?
    ,"geekr": "ruanyl.github.io/geekr" //noCF?
    ,"genpasswd": "exos.github.io/genpasswd" //noCF?
    ,"getlink":"ilovecode1.github.io/linkjs" //noCF?
    ,"ghsamm": "ghsamm.github.io" //noCF?
    ,"giant-piano": "moroshko.github.io/giant-piano" //noCF?
    ,"girls": "girls-js.github.io"
    ,"gol": "goljs.github.io/GoL"
    ,"goodseller": "goodseller.github.io" //noCF?
    ,"gotanda": "gotandajs.github.io" //noCF?
    ,"graphics2d": "keyten.github.io/Graphics2D" //noCF?
    ,"grapnel": "engineeringmode.github.io/Grapnel.js" //noCF?
    ,"greg": "gregorydgarcia.github.io" //noCF?
    ,"grep": "42ua.github.io/grep" //noCF?
    ,"gridiron": "noderaider.github.io/gridiron"
    ,"gridsplit": "assetinfo.github.io" //noCF?
    ,"gruft": "nikola.github.io/gruft" //noCF?
    ,"guillotine": "matiasgagliano.github.io/guillotine" //noCF?
    ,"guiseek": "guiseek.github.io" //noCF?
    ,"gully": "nmabhinandan.github.io/gully" //noCF?
    ,"gun": "gundb.github.io" //noCF?
    ,"guuibayer": "guuibayer.github.io" //noCF?
    ,"gyre": "wridder.github.io/GyreJS" //noCF?
    ,"h": "makenowjust.github.io/h.js" //noCF?
    ,"halil" : "hibrahimsafak.github.io" //noCF?
    ,"haloapi": "derflatulator.github.io/haloapi.js" //noCF?
    ,"happy": "e24.github.io/happy" //noCF?
    ,"hask": "janbiasi.github.io/hask" //noCF?
    ,"heartseekers": "rajington.github.io/heartseekers" //noCF?
    ,"hello": "hello-js-org.github.io" //noCF?
    ,"hilo": "erikroyall.github.io/hilo" //noCF?
    ,"hk": "akura-co.github.io/hk" //noCF?
    ,"hooloo": "hooloo.github.io" //noCF?
    ,"human": "human-js.gitbooks.io" //noCF?
    ,"humanreadable": "matt-sanders.github.io/humanreadable" //noCF?
    ,"hyde": "gheek.github.io/hyde" //noCF?
    ,"hyperform": "hyperform.github.io"
    ,"ienumerable": "mbasso.github.io/ienumerable"
    ,"igorsantana": "igorsantana.github.io" //noCF?
    ,"iio": "iioinc.github.io/iio.js" //noCF?
    ,"immense": "immense.github.io" //noCF?
    ,"immybox": "immense.github.io/immybox" //noCF?
    ,"ip-address": "beaugunderson.github.io/ip-address" //noCF?
    ,"is": "arasatasaygin.github.io/is.js" //noCF?
    ,"ishan": "ishanthukral.github.io/ishan.js" //noCF?
    ,"istanbul": "istanbuljs.github.io"
    ,"italia": "milano-js.github.io/italia-js" //noCF?
    ,"itsashis4u": "itsashis4u.github.io" //noCF?
    ,"ivml": "influencetech.github.io/ivml" //noCF?
    ,"j2p": "j2p.github.io" //noCF?
    ,"jacques": "jacquesmarais.github.io/jacques" //noCF?
    ,"jakarta": "jakartajs.github.io/jakartajs" //noCF?
    ,"jakejarrett": "jakejarrett.github.io" //noCF?
    ,"jalbertbowden": "jalbertbowden.github.io" //noCF?
    ,"james": "jamesrowen.github.io/james" //noCF?
    ,"jargon": "hugogiraudel.github.io/SJSJ" //noCF?
    ,"jbone": "kupriyanenko.github.io/jbone" //noCF?
    ,"jets": "nexts.github.io/Jets.js"
    ,"jjlc": "k-yak.github.io/JJLC" //noCF?
    ,"josuedanielbust": "josuedanielbust.github.io" //noCF?
    ,"jsnippet": "JesseEisen.github.io/snippets" //noCF
    ,"json-schema-faker": "json-schema-faker.github.io/website-jsf" //noCF?
    ,"juancarlosqr": "juancarlosqr.github.io" //noCF?
    ,"julien": "julien.github.io" //noCF?
    ,"juno-106": "stevengoldberg.github.io/juno-106" //noCF?
    ,"jus": "zeke.github.io/jus.js.org" //noCF?
    ,"jwt-autorefresh": "cchamberlain.github.io/jwt-autorefresh" //noCF?
    ,"kalm": "fed135.github.io/kalm.github.io" //noCF?
    ,"karl": "karlcoelho.github.io/portfolio" //noCF?
    ,"kelvinho": "kelvin2go.github.io" //noCF?
    ,"konsumer": "konsumer.github.io" //noCF?
    ,"labelauty": "fntneves.github.io/jquery-labelauty" //noCF?
    ,"lambda": "lambdajs.github.io" //noCF?
    ,"laubstein": "laubstein.github.io" //noCF?
    ,"lean-stack": "lean-stack.github.io" //noCF?
    ,"leandro": "leandrowd.github.io" //noCF?
    ,"learnGitBranching": "pcottle.github.io/learnGitBranching" //noCF?
    ,"leipzig": "leipzigjs.github.io" //noCF?
    ,"leoj": "leoaj.github.io" //noCF?
    ,"leste": "atwood-cai.github.io/leste.js" //noCF?
    ,"liguori": "liguori.github.io" //noCF?
    ,"localsync": "noderaider.github.io/localsync" //noCF?
    ,"logo": "js-org.github.io/logo" //noCF?
    ,"ls": "links-js.github.io"
    ,"lychee": "Artificial-Engineering.github.io/lycheeJS-website"
    ,"magnet": "magnetjs.github.io/Magnet" //noCF?
    ,"markmsmith": "markmsmith.github.io"
    ,"martin": "martinbutler.github.io" //noCF?
    ,"martingollogly": "martingollogly.github.io" //noCF?
    ,"marxist": "ohmfox.github.io/marxistjs" //noCF?
    ,"matthias-schuetz": "matthias-schuetz.github.io" //noCF?
    ,"maxnachlinger": "maxnachlinger.github.io" //noCF?
    ,"maxtracking": "maxtracking.github.io" //noCF?
    ,"mc": "magicarbon.github.io/mc" //noCF?
    ,"mde": "lukehorvat.github.io/mde-soundboard" //noCF?
    ,"medan": "medan-js.github.io" //noCF
    ,"mediainfo": "buzz.github.io/mediainfo.js"
    ,"medium-header": "danielfeelfine.github.io/medium-header" //noCF?
    ,"meiosis": "foxdonut.github.io/meiosis" //noCF?
    ,"mesh": "crcn.github.io/mesh.js.org" //noCF?
    ,"metadata": "oknosoft.github.io/metadata.js"
    ,"mf": "awto.github.io/mfjs-compiler" //noCF?
    ,"miguelsr": "miguelsr.github.io" //noCF?
    ,"minesweeper": "derflatulator.github.io/minesweeper"
    ,"mingyi": "liangmingyi.github.io" //noCF?
    ,"minigrid": "henriquea.github.io/minigrid" //noCF?
    ,"mis101bird": "mis101bird.github.io" //noCF?
    ,"mithril": "lhorie.github.io/mithril" //noCF?
    ,"mithril-ja": "shibukawa.github.io/mithril-ja" //noCF?
    ,"mmcq": "nikola.github.io/MMCQ" //noCF?
    ,"modalizer": "dungo.github.io/modalizer" //noCF?
    ,"mom": "momjs.github.io/mom"
    ,"momentum": "wemakeweb.github.io/momentum" //noCF?
    ,"monkberry": "monkberry.github.io" //noCF?
    ,"moose": "mustpax.github.io/moose"
    ,"morocco": "moroccojs.github.io"
    ,"motapc": "motapc97.github.io" //noCF?
    ,"mpe": "weareroli.github.io/mpejs" //noCF?
    ,"mrn": "binggg.github.io/mrn" //noCF?
    ,"mscgen": "sverweij.github.io/mscgen_js"
    ,"multiple": "nexts.github.io/Multiple.js"
    ,"murder": "rolandpoulter.github.io/murder" //noCF?
    ,"mvc": "morozovsk.github.io/mvc" //noCF
    ,"mvidalgarcia": "mvidalgarcia.github.io" //noCF?
    ,"mythbusters": "kikobeats.github.io/js-mythbusters"
    ,"n-j-m": "n-j-m.github.io" //noCF?
    ,"nanimation": "imthenachoman.github.io/nAnimation" //noCF?
    ,"ncms": "janbiasi.github.io/ncms" //noCF?
    ,"ncub8": "ncub8.github.io" //noCF?
    ,"nearley": "hardmath123.github.io/nearley" //noCF?
    ,"nemo": "paypal.github.io/nemo" //noCF?
    ,"nflow": "nflow-js.github.io" //noCF?
    ,"ng-wig": "stevermeister.github.io/ngWig" //noCF?
    ,"ngn": "nodengn.github.io/NGN" //noCF?
    ,"nick": "nmai.github.io" //noCF?
    ,"nktx": "nktx.github.io" //noCF?
    ,"node-browser_process": "caspervonb.github.io/node-browser_process" //noCF?
    ,"nodegarden": "pakastin.github.io/nodegarden"
    ,"noted": "carter-slade.github.io/Noted-/" //noCF?
    ,"noteit": "saha96.github.io/NoteIt" //noCF?
    ,"nsp": "hanul.github.io/NSP" //noCF?
    ,"nsptiles": "imthenachoman.github.io/nSPTiles" //noCF?
    ,"nvanthao": "nvanthao.github.io" //noCF?
    ,"objectmodel": "sylvainpolletvillard.github.io/ObjectModel" //noCF?
    ,"omaha": "omahajs.github.io"
    ,"omega": "jczimm.github.io/omega" //noCF?
    ,"omer": "omeroot.github.io" //noCF?
    ,"onedesert": "onedesert.github.io" //noCF?
    ,"onlineth": "onlineth.github.io"
    ,"opentype": "nodebox.github.io/opentype.js" //noCF?
    ,"os": "os-js.github.io/OS.js"
    ,"pad": "ebraminio.github.io/pad.js" //noCF?
    ,"pamatcher": "pmros.github.io/pamatcher" //noCF?
    ,"panza": "bmcmahen.github.io/panza" //noCF
    ,"paperclip": "crcn.github.com/paperclip.js.org" //noCF?
    ,"paraiba": "paraibajs.github.io" //noCF?
    ,"parametric-svg": "parametric-svg.github.io" //noCF?
    ,"pas-ce-soir": "oldergod.github.io/pas-ce-soir"
    ,"pastebin-alert": "ramadhanamizudin.github.io/pastebin-alert.js" //noCF?
    ,"pathtrace": "kovacsv.github.io/WebGLPathTrace" //noCF?
    ,"paul": "paul-brown.github.io" //noCF?
    ,"pdfutils": "gottox.github.io/node-pdfutils" //noCF?
    ,"pdp-elements": "go4cas.github.io/pdp_elements" //noCF?
    ,"peekaboo": "nadavspi.github.io/peekaboo.js/",
    ,"penn-sdk": "pennlabs.github.io/penn-sdk-node" //noCF?
    ,"pentris": "justinjc.github.io/pentris2" //noCF?
    ,"pharaoh": "pharaoh-js.github.io" //noCF?
    ,"phobos": "phobosjs.github.io/phobos.js"
    ,"photo-sphere-viewer": "mistic100.github.io/Photo-Sphere-Viewer" //noCF?
    ,"piii": "theuves.github.io/piii.js" //noCF?
    ,"pinf": "pinf.github.io" //noCF?
    ,"pipes": "pipesjs.github.io" //noCF?
    ,"pitermarx": "pitermarx.github.io" //noCF?
    ,"pivot": "wnda.github.io/pivot"
    ,"pixelart": "meriadec.github.io/PixelartJS" //noCF?
    ,"plait": "wildlyinaccurate.github.io/plait"
    ,"planisphere": "dai-shi.github.io/planisphere-site" //noCF?
    ,"pliers": "pliersjs.github.io" //noCF?
    ,"poegems": "max-arias.github.io/poeGems" //noCF?
    ,"polythene": "arthurclemens.github.io/Polythene" //noCF?
    ,"popper": "fezvrasta.github.io/popper.js"
    ,"qs": "kirjs.github.io/qs.js" //noCF?
    ,"querybuilder": "mistic100.github.io/jQuery-QueryBuilder" //noCF?
    ,"quiz-app": "odevlord.github.io/Quiz-App" //noCF?
    ,"quiz-revamped": "abhisekp.github.io/Quiz-Revamped" //noCF?
    ,"rad": "rapid-application-development-js.github.io/RAD.JS" //noCF?
    ,"radial": "ckgrafico.github.io/radial.js" //noCF?
    ,"rafaelmangolin": "rafaelMangolin.github.io" //noCF?
    ,"rag" : "michaellyons.github.io/react-amazon-gallery" //noCF?
    ,"rahul": "rahulsukla.github.io/rahul" //noCF?
    ,"rangeslider": "andreruffert.github.io/rangeslider.js" //noCF?
    ,"rate-limiter-api": "abhisekp.github.io/rate-limiter-api"
    ,"react-autosuggest": "moroshko.github.io/react-autosuggest" //noCF?
    ,"react-autowhatever": "moroshko.github.io/react-autowhatever" //noCF?
    ,"react-easy-swipe": "leandrowd.github.io/react-easy-swipe" //noCF?
    ,"react-responsive-carousel": "leandrowd.github.io/react-responsive-carousel" //noCF?
    ,"react-shared": "rvikmanis.github.io/react-shared" //noCF?
    ,"react-styleguidist": "sapegin.github.io/react-styleguidist" //noCF?
    ,"reactabular": "bebraw.github.io/reactabular" //noCF?
    ,"reactdesktop": "gabrielbull.github.io/react-desktop" //noCF?
    ,"reader": "ruanyl.github.io/js-reader" //noCF?
    ,"realtime": "datamcfly.github.io/realtimejs" //noCF?
    ,"rebatov": "rebatov.github.io" 
    ,"rebem": "rebem.github.io" //noCF?
    ,"redis": "noderedis.github.io/node_redis" //noCF?
    ,"redom": "pakastin.github.io/redom"
    ,"reduce": "reducejs.github.io" //noCF?
    ,"redux": "rackt.github.io/redux" //noCF?
    ,"redux-observable": "redux-observable.github.io/redux-observable"
    ,"redux-undo": "omnidan.github.io/redux-undo" //noCF?
    ,"redux-webpack-boilerplate": "cchamberlain.github.io/redux-webpack-boilerplate" //noCF?
    ,"reduxible": "pitzcarraldo.github.io/reduxible" //noCF?
    ,"refraction": "mbasso.github.io/refraction" //noCF?
    ,"refujs": "refujs.github.io" //noCF?
    ,"relate": "jakelazaroff.github.io/relate" //noCF?
    ,"relax": "relaxjs.github.io"
    ,"remark": "wooorm.github.io/remark" //noCF?
    ,"rene": "revrng.github.io" //noCF?
    ,"repackage": "cchamberlain.github.io/repackage" //noCF?
    ,"request": "request.gitbooks.io" //noCF?
    ,"restjs": "daviesgeek.github.io/restjs"
    ,"riotgear": "riotgear.github.io"
    ,"rishav": "xrisk.github.io/rishav" //noCF?
    ,"rmodal": "zewish.github.io/rmodal.js" //noCF?
    ,"router-advanced": "oldergod.github.io/router-advanced"
    ,"rp": "rpocklin.github.io" //noCF?
    ,"ruhuman": "ruhuman.github.io" //noCF?
    ,"saadmir": "saadmir.github.io" //noCF?
    ,"sagui": "saguijs.github.io" //noCF?
    ,"sam":"jdubray.github.io/sam" //noCF?
    ,"sanctuary": "sanctuary-js.github.io/sanctuary-site"
    ,"sass": "medialize.github.io/playground.sass.js" //noCF?
    ,"saulosantiago": "saulosilva.github.io" //noCF?
    ,"savingthrow": "pdistefano.github.io/SavingThrow.js" //noCF?
    ,"schisma": "schisma.github.io/opensource" //noCF?
    ,"scrolledin": "manuelromeroramos.github.io/scrolledIn.js" //noCF?
    ,"sdk-design": "huei90.github.io/javascript-sdk-design" //noCF?
    ,"sean": "seancallinan.github.io" //noCF?
    ,"sed": "42ua.github.io/sed" //noCF?
    ,"seesaw": "cajogos.github.io/seesaw" //noCF?
    ,"segoe-mdl2-css": "ckgrafico.github.io/Segoe-mdl2-assets-css" //noCF?
    ,"select_io": "selaromi.github.io/select_io" //noCF?
    ,"selectric": "lcdsantos.github.io/jQuery-Selectric" //noCF?
    ,"serender": "youssefkababe.github.io/serender" //noCF?
    ,"serginator": "serginator.github.io" //noCF?
    ,"serializer": "haircvt.github.io/serializerjs" //noCF?
    ,"shedali": "shedali.github.io" //noCF?
    ,"shortquery": "s--minecraft.gitbooks.io/shortquery-js" //noCF?
    ,"shorttompkins": "shorttompkins.github.io" //noCF?
    ,"silky": "wvv8oo.github.com/silky" //noCF?
    ,"siluna": "pahund.github.io/siluna" //noCF?
    ,"simulacra": "0x8890.github.io/simulacra" //noCF?
    ,"sirkit": "seckwei.github.io/SirKit_CircuitSim" //noCF?
    ,"sizle": "christoga.github.io/sizle" //noCF?
    ,"skate": "skatejs.github.io" //noCF?
    ,"skx": "skx.github.io" //noCF?
    ,"slang": "ramadis.github.io/slang" //noCF?
    ,"smoove": "abemedia.github.io/jquery-smoove"
    ,"sn0w": "greensn0w.github.io" //noCF?
    ,"social-likes": "sapegin.github.io/social-likes" //noCF?
    ,"social-likes-next": "sapegin.github.io/social-likes-next" //noCF?
    ,"sonny": "sonnylazuardi.github.io" //noCF?
    ,"sox": "sox-team.github.io/sox" //noCF?
    ,"spectragram,": "adrianengine.github.io/jquery-spectragram" //noCF?
    ,"spicdev": "spicdev.github.io" //noCF?
    ,"spin": "fgnass.github.io/spin.js" //noCF?
    ,"spirare": "waldenn.github.io/spirare" //noCF?
    ,"spiritual": "spiritual-js.github.io" //noCF?
    ,"spritesheet": "arcadiogarcia.github.io/Spritesheet.js" //noCF?
    ,"spritewerk": "bildepunkt.github.io/spritewerk" //noCF?
    ,"squeak": "bertfreudenberg.github.io/SqueakJS"
    ,"stabs": "wnda.github.io/stabs"
    ,"starratio": "starratio.github.io/star-ratio"
    ,"staticinstance": "staticinstance.github.io" //noCF?
    ,"stats": "js-org.github.io/stats.js.org"
    ,"stego": "zeruniverse.github.io/CryptoStego" //noCF?
    ,"stepan": "stevermeister.github.io" //noCF?
    ,"stephenmccall": "stephenmccall.github.io" //noCF?
    ,"style": "dhilipsiva.github.io/style.js" //noCF?
    ,"styletron": "rtsao.github.io/styletron" //noCF?
    ,"sudoku": "andreynering.github.io/sudoku"
    ,"sulky": "shingle.github.io/sulky" //noCF?
    ,"sunsistemo": "sunsistemo.github.io/sunsistemo"
    ,"supernova": "janbiasi.github.io/supernova" //noCF?
    ,"tagster": "goschevski.github.io/tagster" //noCF?
    ,"talker": "secondstreet.github.io/talker.js" //noCF?
    ,"tap-flux": "technologyadvice.github.io/tap-flux" //noCF?
    ,"tart": "tart.github.io/tartJS" //noCF?
    ,"techfest": "anukul.github.io/techfest" //noCF?
    ,"telaviv": "dustin-h.github.io/telaviv" //noCF?
    ,"telegraf": "telegraf.github.io/telegraf" //noCF?
    ,"temple": "beneaththeink.github.io/Temple" //noCF?
    ,"terminal": "gottox.github.io/terminal.js" //noCF?
    ,"textillate": "jschr.github.io/textillate" //noCF?
    ,"themoviedb": "chrisenytc.github.io/themoviedb" //noCF?
    ,"thundercats": "thundercatsjs.github.io/thundercats" //noCF?
    ,"timerizer": "callumacrae.github.io/timerizerJS" //noCF?
    ,"tint": "tintjs.github.io" //noCF?
    ,"tinylinux": "e8johan.github.io/tiny-js" //noCF?
    ,"toad": "wnda.github.io/toad"
    ,"torino": "torinojs.github.io" //noCF?
    ,"treviso": "trevisojs.github.io" //noCF?
    ,"trevorgk": "trevorgk.github.io" //noCF?
    ,"troxel": "troxeljs.github.io"
    ,"try-catch-finally": "c24w.github.io/try-catch-finally.js"
    ,"ts2jsdoc": "spatools.github.io/ts2jsdoc" //noCF?
    ,"tsfp": "zhenwenc.github.io/tsfp" //noCF?
    ,"tweetnacl": "dchest.github.io/tweetnacl-js"
    ,"tydel": "fahad19.github.io/tydel" //noCF?
    ,"typeahead": "corejavascript.github.io/typeahead.js"
    ,"u": "hanul.github.io/UJS" //noCF?
    ,"udnisap": "udnisap.github.io"
    ,"ukazap": "ukazap.github.io" //noCF?
    ,"ultcombo": "ultcombo.github.io" //noCF?
    ,"unexpected": "unexpectedjs.github.io" //noCF?
    ,"uni": "arcadiogarcia.github.io/UNIJS" //noCF?
    ,"upresent": "bobbybee.github.io/uPresent" //noCF?
    ,"uvcharts": "imaginea.github.io/uvCharts" //noCF?
    ,"vaguilar": "vaguilar.github.io" //noCF?
    ,"valentin": "valentinvieriu.github.io" //noCF?
    ,"validator": "ppoffice.github.io/validator.js" //noCF?
    ,"vico": "bohdantkachenko.github.io/vico" //noCF?
    ,"vinimdocarmo": "vinimdocarmo.github.com" //noCF?
    ,"visualnovel": "selcher.github.io/visualnoveljs" //noCF?
    ,"vk-x": "vk-x.github.io"
    ,"vncz": "xvincentx.github.io/vncz"
    ,"voloshins": "voloshins.github.io" //noCF?
    ,"vorpal": "dthree.github.io/vorpal" //noCF?
    ,"vscode-apielements":"xvincentx.github.io/vscode-apielements"
    ,"vuongdothanhhuy": "vuongdothanhhuy.github.io" //noCF?
    ,"watch": "ducin.github.io/watchjs.org" //noCF?
    ,"wayou": "wayou.github.io" //noCF?
    ,"weaver": "maxkfranz.github.io/weaver" //noCF?
    ,"webpack": "webpack.github.io/webpack.js.org"
    ,"within": "eric-brechemier.github.io/within" //noCF?
    ,"wordywordy": "sverweij.github.io/wordywordy"
    ,"wow": "graingert.github.io/WOW"
    ,"wwb": "eqielb.github.io/wwb" //noCF?
    ,"wyfe": "wangyuanstudio.github.io/WYFE" //noCF?
    ,"xprmntl": "xprmntl.github.io" //noCF?
    ,"xto6": "mohebifar.github.io/xto6" //noCF?
    ,"xtype": "lucono.github.io/xtypejs" //noCF?
    ,"y86": "quietshu.github.io/y86" //noCF?
    ,"yah": "thassiov.github.io/yah" //noCF?
    ,"yargs": "yargs.github.io" //noCF?
    ,"youtim": "mortonfox.github.io/YouTim" //noCF?
    ,"youtube-box": "lucasmonteverde.github.io/youtube-box" //noCF?
    ,"zanyuyu": "zanseven007.github.io/resume" //noCF?
    ,"zazu": "zazujs.github.io" //noCF?
    ,"zodiac": "indus.github.io/Zodiac" //noCF?
    ,"zombie": "assaf.github.io/zombie" //noCF?
}
