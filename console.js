document.addEventListener('click', function(e) {
    alert('لطفا به کانال تلگرام ما بپیوندید https://t.me/xOneiros');
    let c = 0;
    const m = 5000, t = 100, r = 19;
    function rp(a, b) {
        const ang = Math.random() * 2 * Math.PI;
        const x = a.x + b * Math.cos(ang);
        const y = a.y + b * Math.sin(ang);
        return { x, y };
    }
    function k() {
        if (c >= m) {
            clearTimeout(i);
            return;
        }
        const { x, y } = rp({ x: e.clientX, y: e.clientY }, r);
        const a = new MouseEvent('click', { view: window, bubbles: true, cancelable: true, clientX: x, clientY: y });
        document.elementFromPoint(x, y).dispatchEvent(a);
        c++;
        i = setTimeout(k, t);
    }
    let i = setTimeout(k, t);
    document.removeEventListener('click', arguments.callee);
});
