'use static';
(function () {
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
    new Hermes('hermes', ["mydomain", "free", "community", "learn", "munich"]);
})();