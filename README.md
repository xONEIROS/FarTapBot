# ربات کلیک اتوماتیک برای ربات FarTap -[ لیست ربات های بیشتر کلیک کنید ](https://t.me/xOneiros)



https://github.com/user-attachments/assets/b0496f96-a64f-4665-901f-c4f3e8c5da1d

## برای استفاده از این ربات باید از نسخه K تلگرام وب به ادرس Https://web.telegram.org/k/ استفاده کنید

## کدی که در ویدئو استفاده شده است را از زیر کپی کنید و در کنسول مرورگر وارد کنید ، دقت کنید ربات بعد از بالا امد روی قسمتی که کلیک میکنید ، راست کلیک کنید و بزنید اینسپکت و برید بخش کنسول
```
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
```
