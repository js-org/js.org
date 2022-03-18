const search = window.location.search.slice(1).replace(/\.js$/, '');

(function (el: any) {
    if (search && (el = document.getElementById(el))) {
        el.innerHTML = search;
    }
})('sd');

(function (el: any) {
    if (el = document.getElementById(el)) {
        let sec = 5;
        setInterval(() => {
            if (!--sec) return window.top.location.href = 'https://js.org/?' + search;
            el.innerText = `${sec} second${sec > 1 ? 's' : ''}`
        }, 1000)
    }
})('rt');

(function (el: any) {
    window.onload = () => {
        if (el = document.getElementById(el)) {
            let cad = document.getElementById('_carbonads_projs')
            if (!cad) el.classList.add('blocked');
            fetch(`https://js.org/count/${cad ? 'cad' : 'nocad'}`)
        }
    }
})('cad');

(function (el: any) {
    if (!(el = document.getElementById(el))) return;
    const h = document.getElementsByTagName('head')[0],
        id = 'cb_' + Math.random().toString(36).substring(2, 16),
        req = document.createElement('script');

    window[id] = obj => {
        el.innerHTML = ((obj.data.watchers || 0) / 1000).toFixed(1) + 'K'
    };
    req.src = 'https://api.github.com/repos/js-org/js.org?callback=' + id;
    h.insertBefore(req, h.firstChild)
})('ghstars');

(function (el: any, dict) {
    if (!(el = document.getElementById(el))) return;

    if (search)
        dict.unshift(search.substring(0, 8))

    let write_speed = 1000 / 4,
        write_acceleration = 1,
        write_random = .2,
        write_pause = 3000,
        clear_speed = 1000 / 16,
        clear_acceleration = 1,
        clear_random = .2,
        clear_pause = 500;

    let word = el.innerHTML, l = word.length, i = -1;
    const clear = () => {
        if (l-- > 0) {
            el.className = 'active';
            el.innerHTML = word.slice(0, l);
            setTimeout(clear, clear_speed + clear_speed * l / word.length * clear_acceleration + clear_speed * clear_random * Math.random());
        }
        else {
            word = '' + dict[(i = (i + 1) % dict.length)];
            setTimeout(write, clear_pause);
        }
    };

    const write = () => {
        if (l++ < word.length) {
            el.innerHTML = word.slice(0, l);
            setTimeout(write, write_speed + write_speed * -l / word.length * write_acceleration + write_speed * write_random * Math.random());
        }
        else {
            el.className = '';
            setTimeout(clear, write_pause);
        }
    }
    write();
})('hermes', ['your', 'domain', '4free', 'project', 'learn', 'tool', 'munich']);


