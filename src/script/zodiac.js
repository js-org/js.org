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
