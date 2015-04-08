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