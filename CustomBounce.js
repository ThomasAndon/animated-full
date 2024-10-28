

let e, t, n, o = () => e || "undefined" != typeof window && (e = window.gsap) && e.registerPlugin && e, i = i => {
        e = o(), n = e && e.parseEase("_CE"), n ? (t = 1, e.parseEase("bounce").config = e => "object" == typeof e ? f("", e) : f("bounce(" + e + ")", {strength: +e})) : i && console.warn("Please gsap.registerPlugin(CustomEase, CustomBounce)")
    }, s = e => {
        let t, n = e.length, o = 1 / e[n - 2];
        for (t = 2; t < n; t += 2) e[t] = ~~(e[t] * o * 1e3) / 1e3;
        e[n - 2] = 1
    }, r = function () {
        return String.fromCharCode.apply(null, arguments)
    }, a = r(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), u = r(103, 115, 97, 112, 46, 99, 111, 109),
    d = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, c = function (t) {
        var n = "undefined" != typeof window,
            o = true,
            // o = 0 === (n ? window.location.href : "").indexOf(r(102, 105, 108, 101, 58, 47, 47)) || -1 !== t.indexOf(r(108, 111, 99, 97, 108, 104, 111, 115, 116)) || d.test(t) || (n ? window.location.hostname : "").split(".").pop() === r(108, 111, 99, 97, 108),
            i = [a, u, r(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), r(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), r(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), r(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), r(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), r(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), r(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), r(99, 100, 112, 110, 46, 105, 111), r(112, 101, 110, 115, 46, 105, 111), r(103, 97, 110, 110, 111, 110, 46, 116, 118), r(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), r(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), r(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), r(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), r(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), r(112, 108, 110, 107, 114, 46, 99, 111), r(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), r(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), r(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), r(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), r(99, 115, 98, 46, 97, 112, 112), r(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), r(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), r(99, 111, 100, 105, 101, 114, 46, 105, 111), r(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), r(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), r(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), r(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), r(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), r(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
            s = function () {
                if (n) if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", s); else {
                    document.removeEventListener("readystatechange", s);
                    var t = "object" == typeof e ? e : n && window.gsap;
                    n && window.console && !window._gsapWarned && "object" == typeof t && !1 !== t.config().trialWarn &&false &&  (console.log("should not print"), window._gsapWarned = 1)
                }
            }, c = i.length;
        for (setTimeout(s, 50); --c > -1;) if (-1 !== t.indexOf(i[c])) return !0;
        return o || !setTimeout((function () {}), 4e3)
    }("undefined" != typeof window ? window.location.host : ""), f = (e, o) => {
        if (t || i(1), o = o || {}, c) {
            let t, i, r, a, u, d, c, f = .999, l = Math.min(f, o.strength || .7), g = l, p = (o.squash || 0) / 100, w = p,
                h = 1 / .03, m = .2, y = 1, C = .1, v = [0, 0, .07, 0, .1, 1, .1, 1], E = [0, 0, 0, 0, .1, 0, .1, 0];
            for (u = 0; u < 200 && (m *= g * ((g + 1) / 2), y *= l * l, d = C + m, r = C + .49 * m, a = 1 - y, t = C + y / h, i = r + .8 * (r - t), p && (C += p, t += p, r += p, i += p, d += p, c = p / w, E.push(C - p, 0, C - p, c, C - p / 2, c, C, c, C, 0, C, 0, C, -.6 * c, C + (d - C) / 6, 0, d, 0), v.push(C - p, 1, C, 1, C, 1), p *= l * l), v.push(C, 1, t, a, r, a, i, a, d, 1, d, 1), l *= .95, h = y / (d - i), C = d, !(a > f)); u++) ;
            if (o.endAtStart && "false" !== o.endAtStart) {
                if (r = -.1, v.unshift(r, 1, r, 1, -.07, 0), w) for (p = 2.5 * w, r -= p, v.unshift(r, 1, r, 1, r, 1), E.splice(0, 6), E.unshift(r, 0, r, 0, r, 1, r + p / 2, 1, r + p, 1, r + p, 0, r + p, 0, r + p, -.6, r + p + .033, 0), u = 0; u < E.length; u += 2) E[u] -= r;
                for (u = 0; u < v.length; u += 2) v[u] -= r, v[u + 1] = 1 - v[u + 1]
            }
            return p && (s(E), E[2] = "C" + E[2], n(o.squashID || e + "-squash", "M" + E.join(","))), s(v), v[2] = "C" + v[2], n(e, "M" + v.join(","))
        }
    };

class l {
    constructor(e, t) {
        this.ease = f(e, t)
    }

    static create(e, t) {
        return f(e, t)
    }

    static register(t) {
        e = t, i()
    }
}

o() && e.registerPlugin(l), l.version = "3.12.5";
export default l;
export {l as CustomBounce};
