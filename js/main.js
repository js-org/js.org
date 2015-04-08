///#source 1 1 /src/script/zodiac.js
/*!
 * Zodiac
 *
 * @author Stefan Keim (indus)
 * @version 0.1.1
 * @description canvas based particle background
 *
 * Inspired by https://github.com/jnicol/particleground
 */
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
"use static";
var Zodiac = (function () {
    function Zodiac(canvas, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.options = {
            directionX: -1,
            directionY: -1,
            velocityX: [.1, .2],
            velocityY: [.5, 1],
            bounceX: true,
            bounceY: false,
            parallax: .2,
            pivot: 0,
            density: 6000,
            dotRadius: [1, 5],
            //backgroundColor: 'rgba(9,9,9,1)',   // default transparent; use alpha value for motion blur and ghosting
            //dotColor: 'rgba(99,99,99,.5)',
            linkColor: 'rgba(99,99,99,.8)',
            linkDistance: 50,
            linkWidth: 2
        };
        var canvas = (typeof canvas == 'string' || canvas instanceof String) ? document.getElementById(canvas) : canvas;
        if (canvas.tagName != 'CANVAS')
            return;
        for (var key in options) {
            this.options[key] = options[key];
        }
        options = this.options;
        var ctx = this._ctx = canvas.getContext('2d', { alpha: !options.backgroundColor }), tilt = { x: 0, y: 0 }, _, w, h;
        var update = function () {
            if (options.backgroundColor) {
                ctx.fillStyle = options.backgroundColor;
                ctx.fillRect(0, 0, w, h);
                ctx.fillStyle = options.dotColor;
            }
            else {
                ctx.clearRect(0, 0, w, h);
            }
            ctx.beginPath();
            for (var i = 0, p, x, y; i < _.length; i++) {
                p = _[i];
                /* MOVE */
                p.x += p.vx;
                p.y += p.vy;
                /* POSITION */
                if (options.parallax) {
                    var fac = p.z * options.parallax;
                    p.dx += (tilt.x * fac - p.dx) / 10;
                    p.dy += (tilt.y * fac - p.dy) / 10;
                }
                x = p.x + p.dx;
                y = p.y + p.dy;
                if (x < 0 || x > w)
                    (options.bounceX) ? (p.vx = -p.vx) : (p.x = ((x + w) % w) - p.dx);
                if (y < 0 || y > h)
                    (options.bounceY) ? (p.vy = -p.vy) : (p.y = ((y + h) % h) - p.dy);
                /* DRAW */
                ctx.moveTo(x + p.r, y);
                ctx.arc(x, y, p.r, 0, Math.PI * 2);
                for (var j = i - 1; j >= 0; j--) {
                    var q = _[j], dx = q.x - p.x, dy = q.y - p.y, dist = Math.sqrt((dx * dx) + (dy * dy));
                    if (dist < options.linkDistance) {
                        var x = p.x + p.dx, y = p.y + p.dy, x2 = q.x + q.dx, y2 = q.y + q.dy, a = Math.atan2(y2 - y, x2 - x), cos = Math.cos(a), sin = Math.sin(a);
                        x += p.r * cos;
                        y += p.r * sin;
                        x2 -= q.r * cos;
                        y2 -= q.r * sin;
                        ctx.moveTo(x, y);
                        ctx.lineTo(x2, y2);
                    }
                }
            }
            ;
            ctx.stroke();
            options.dotColor && ctx.fill();
            requestAnimationFrame(update);
        };
        function onMousemove(ev) {
            tilt.x = ev.pageX - window.innerWidth / 2;
            tilt.y = ev.pageY - window.innerHeight / 2;
        }
        function onOrientation(ev) {
            tilt.x = Math.min(Math.max(-ev.gamma, -30), 30) * (window.innerWidth / 30);
            tilt.y = Math.min(Math.max(-ev.beta, -30), 30) * (window.innerHeight / 30);
        }
        var onResize = this._refresh = function () {
            _ = _this._ = _this._ || [];
            var radius = [].concat(options.dotRadius);
            if (radius[0] == radius[1])
                radius = radius[0];
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
            var vx = options.velocityX, vy = options.velocityY, random = Math.random;
            var num = Math.ceil((w * h) / options.density);
            for (var i = _.length - 1; i >= 0; i--)
                if (_[i].x > w || _[i].y > h)
                    _.splice(i, 1);
            if (num < _.length)
                _.splice(num);
            while (num > _.length) {
                var r = random();
                _.push({
                    // position
                    z: (r - options.pivot) / 4,
                    r: radius[1] ? (r * (radius[1] - radius[0]) + radius[0]) : radius[0],
                    x: Math.ceil(random() * w),
                    y: Math.ceil(random() * h),
                    //  velocity: (random)direction * clamped random velocity
                    vx: (options.directionX || ((random() > .5) ? 1 : -1)) * (random() * (vx[1] - vx[0]) + vx[0]),
                    vy: (options.directionY || ((random() > .5) ? 1 : -1)) * (random() * (vy[1] - vy[0]) + vy[0]),
                    // offset
                    dx: 0,
                    dy: 0
                });
            }
            ctx.strokeStyle = options.linkColor;
            ctx.lineWidth = options.linkWidth;
            ctx.fillStyle = options.dotColor;
        };
        window.addEventListener('resize', onResize, false);
        document.addEventListener('mousemove', onMousemove, false);
        window.addEventListener('deviceorientation', onOrientation, false);
        onResize();
        update();
    }
    return Zodiac;
})();
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

///#source 1 1 /src/script/hermes.js
/*!
 * Hermes (Baby)
 *
 * @author Stefan Keim (indus)
 * @version 0.0.1
 * @description tiny typewriter
 *
 */
'use static';
var Hermes = (function () {
    function Hermes(el, dict, options) {
        if (options === void 0) { options = {}; }
        this.options = {
            write_speed: 1000 / 4,
            write_acceleration: 1,
            write_random: .2,
            write_pause: 3000,
            clear_speed: 1000 / 16,
            clear_acceleration: 1,
            clear_random: .2,
            clear_pause: 500
        };
        var el = (typeof el == 'string' || el instanceof String) ? document.getElementById(el) : el;

        if (!('innerHTML' in el))
            throw 'no element';
        for (var key in options) {
            this.options[key] = options[key];
        }
        options = this.options;
        dict = [].concat(dict);
        var word = el.innerHTML, l = word.length, i = -1;
        var clear = function () {
            if (l-- > 0) {
                el.className = 'active';
                el.innerHTML = word.slice(0, l);
                setTimeout(clear, options.clear_speed + options.clear_speed * l / word.length * options.clear_acceleration + options.clear_speed * options.clear_random * Math.random());
            }
            else {
                word = '' + dict[(i = (i + 1) % dict.length)];
                setTimeout(write, options.clear_pause);
            }
        };
        var write = function () {
            if (l++ < word.length) {
                el.innerHTML = word.slice(0, l);
                setTimeout(write, options.write_speed + options.write_speed * -l / word.length * options.write_acceleration + options.write_speed * options.write_random * Math.random());
            }
            else {
                el.className = '';
                setTimeout(clear, options.write_pause);
            }
        };
        write();
    }
    return Hermes;
})();

///#source 1 1 /src/script/ghbtn.js
/*!
 *
 * The MIT License (MIT)
 * Copyright (c) 2013 Jonathan Ong me@jongleberry.com
 *
 */

; (function () {

/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(path, parent, orig) {
  var resolved = require.resolve(path);

  // lookup failed
  if (null == resolved) {
    orig = orig || path;
    parent = parent || 'root';
    var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
    err.path = orig;
    err.parent = parent;
    err.require = true;
    throw err;
  }

  var module = require.modules[resolved];

  // perform real require()
  // by invoking the module's
  // registered function
  if (!module.exports) {
    module.exports = {};
    module.client = module.component = true;
    module.call(this, module.exports, require.relative(resolved), module);
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path) {
  if (path.charAt(0) === '/') path = path.slice(1);

  var paths = [
    path,
    path + '.js',
    path + '.json',
    path + '/index.js',
    path + '/index.json'
  ];

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (require.modules.hasOwnProperty(path)) return path;
    if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
  }
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `definition`.
 *
 * @param {String} path
 * @param {Function} definition
 * @api private
 */

require.register = function(path, definition) {
  require.modules[path] = definition;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to) {
  if (!require.modules.hasOwnProperty(from)) {
    throw new Error('Failed to alias "' + from + '", it does not exist');
  }
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function localRequire(path) {
    var resolved = localRequire.resolve(path);
    return require(resolved, parent, path);
  }

  /**
   * Resolve relative to the parent.
   */

  localRequire.resolve = function(path) {
    var c = path.charAt(0);
    if ('/' == c) return path.slice(1);
    if ('.' == c) return require.normalize(p, path);

    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    var segs = parent.split('/');
    var i = lastIndexOf(segs, 'deps') + 1;
    if (!i) i = 0;
    path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
    return path;
  };

  /**
   * Check if module is defined at `path`.
   */

  localRequire.exists = function(path) {
    return require.modules.hasOwnProperty(localRequire.resolve(path));
  };

  return localRequire;
};
require.register("github-buttons/index.js", function(exports, require, module){
// Sauce: https://github.com/mdo/github-buttons/blob/master/ghbtn.html

var head = document.getElementsByTagName('head')[0]

var counterMap = {
  watch: 'watchers',
  fork: 'forks',
  follow: 'followers'
}

module.exports = setButton

;(setButton.all = function () {
  var buttons = document.querySelectorAll('.ghbtn')
  var button
  for (var i = 0, l = buttons.length; i < l; i++)
    if (!(button = buttons[i]).getAttribute('data-processed'))
      setButton(button)
})()

function setButton(el) {
  var user = el.getAttribute('data-user')
  var repo = el.getAttribute('data-repo')
  var type = el.getAttribute('data-type') || 'watch'
  var count = el.getAttribute('data-count')
  var size = el.getAttribute('data-size')

  if (!user)
    throw new Error('User not set!')

  var btn = createButton()

  // Set href to be URL for repo
  btn.button.href = 'https://github.com/' + user + '/' + repo + '/'

  // Add the class, change the text label, set count link href
  if (type === 'watch') {
    btn.main.className += ' github-watchers'
    btn.text.innerHTML = 'Star'
    btn.counter.href = 'https://github.com/' + user + '/' + repo + '/stargazers'
  } else if (type === 'fork') {
    btn.main.className += ' github-forks'
    btn.text.innerHTML = 'Fork'
    btn.counter.href = 'https://github.com/' + user + '/' + repo + '/network'
  } else if (type === 'follow') {
    btn.main.className += ' github-me'
    btn.text.innerHTML = 'Follow @' + user
    btn.button.href = 'https://github.com/' + user
    btn.counter.href = 'https://github.com/' + user + '/followers'
  } else {
    throw new Error('Invalid type.')
  }

  // Change the size
  if (size === 'large')
    btn.main.className += ' ghbtn-large'

  var id = 'callback_' + Math.random().toString(36).substr(2,16)
  window[id] = callback

  if (type == 'follow')
    jsonp('https://api.github.com/users/' + user, id)
  else
    jsonp('https://api.github.com/repos/' + user + '/' + repo, id)

  function callback(obj) {
    btn.counter.innerHTML = addCommas(obj.data[counterMap[type]] || 0)

    if (count)
      btn.counter.style.display = 'block'

    el.parentNode.replaceChild(btn.main, el)

    delete window[id]
  }
}

function createButton() {
  var main = document.createElement('span')
  main.className = 'ghbtn'
  main.setAttribute('data-processed', '1')

  var button = document.createElement('a')
  button.className = 'gh-btn'

  var text = document.createElement('span')
  text.className = 'gh-text'

  var icon = document.createElement('span')
  icon.className = 'gh-ico'

  var counter = document.createElement('a')
  counter.className = 'gh-count'

  button.href = counter.href = '#'
  button.target = counter.target = '_blank'

  main.appendChild(button)
  button.appendChild(icon)
  button.appendChild(text)
  main.appendChild(counter)

  return {
    main: main,
    button: button,
    text: text,
    icon: icon,
    counter: counter
  }
}

function addCommas(n) {
  return String(n).replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

function jsonp(path, callback) {
  var el = document.createElement('script')
  el.src = path + '?callback=' + callback
  head.insertBefore(el, head.firstChild)
}
});
require.alias("github-buttons/index.js", "github-buttons/index.js");if (typeof exports == "object") {
  module.exports = require("github-buttons");
} else if (typeof define == "function" && define.amd) {
  define(function(){ return require("github-buttons"); });
} else {
  this["githubButtons"] = require("github-buttons");
}})();
///#source 1 1 /src/script/main.js

//document.addEventListener('DOMContentLoaded', function () {
    var zodiac = new Zodiac('zodiac',
                {
                    directionX: 0,
                    directionY: -1,
                    velocityX: [.1, .3],
                    velocityY: [.3, .7],
                    bounceX: true,
                    bounceY: false,
                    parallax: .2,
                    density: 9999,
                    dotRadius: [1, 5],
                    linkColor: '#ffc545',
                    linkDistance: 55,
                    linkWidth: 3
                });


    new Hermes('hermes', ["mydomain", "free", "community", "learn", "munich"]);
//})


