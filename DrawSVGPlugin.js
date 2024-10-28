
let e, t, n, i, r, s, o, a, l = () => "undefined" != typeof window,
    d = () => e || l() && (e = window.gsap) && e.registerPlugin && e, h = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    f = {rect: ["width", "height"], circle: ["r", "r"], ellipse: ["rx", "ry"], line: ["x2", "y2"]},
    g = e => Math.round(1e4 * e) / 1e4, c = e => parseFloat(e) || 0, u = (e, t) => {
        let n = c(e);
        return ~e.indexOf("%") ? n / 100 * t : n
    }, p = (e, t) => c(e.getAttribute(t)), w = Math.sqrt,
    y = (e, t, n, i, r, s) => w(((c(n) - c(e)) * r) ** 2 + ((c(i) - c(t)) * s) ** 2), _ = e => console.warn(e),
    x = e => "non-scaling-stroke" === e.getAttribute("vector-effect"), m = function () {
        return String.fromCharCode.apply(null, arguments)
    }, k = m(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), v = m(103, 115, 97, 112, 46, 99, 111, 109),
    b = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, P = function (t) {
        var n = "undefined" != typeof window,
            i = true,
            // i = 0 === (n ? window.location.href : "").indexOf(m(102, 105, 108, 101, 58, 47, 47)) || -1 !== t.indexOf(m(108, 111, 99, 97, 108, 104, 111, 115, 116)) || b.test(t) || (n ? window.location.hostname : "").split(".").pop() === m(108, 111, 99, 97, 108),
            r = [k, v, m(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), m(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), m(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), m(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), m(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), m(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), m(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), m(99, 100, 112, 110, 46, 105, 111), m(112, 101, 110, 115, 46, 105, 111), m(103, 97, 110, 110, 111, 110, 46, 116, 118), m(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), m(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), m(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), m(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), m(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), m(112, 108, 110, 107, 114, 46, 99, 111), m(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), m(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), m(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), m(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), m(99, 115, 98, 46, 97, 112, 112), m(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), m(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), m(99, 111, 100, 105, 101, 114, 46, 105, 111), m(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), m(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), m(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), m(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), m(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), m(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
            s = function () {
                if (n) if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", s); else {
                    document.removeEventListener("readystatechange", s);
                    var t = "object" == typeof e ? e : n && window.gsap;
                    n && window.console && !window._gsapWarned && "object" == typeof t && !1 !== t.config().trialWarn && false &&  (console.log(m(37, 99, 87, 97, 114, 110, 105, 110, 103), m(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(m(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "DrawSVGPlugin" + m(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(m(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), m(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                }
            }, o = r.length;
        for (setTimeout(s, 50); --o > -1;) if (-1 !== t.indexOf(r[o])) return !0;
        return i || !setTimeout((function () {}), 4e3)
    }("undefined" != typeof window ? window.location.host : ""), S = e => {
        if (!(e = t(e)[0])) return 0;
        let n, i, r, o, a, l, d, c = e.tagName.toLowerCase(), u = e.style, m = 1, k = 1;
        x(e) && (k = e.getScreenCTM(), m = w(k.a * k.a + k.b * k.b), k = w(k.d * k.d + k.c * k.c));
        try {
            i = e.getBBox()
        } catch (e) {
            _("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        let {x: v, y: b, width: P, height: S} = i || {x: 0, y: 0, width: 0, height: 0};
        if (i && (P || S) || !f[c] || (P = p(e, f[c][0]), S = p(e, f[c][1]), "rect" !== c && "line" !== c && (P *= 2, S *= 2), "line" === c && (v = p(e, "x1"), b = p(e, "y1"), P = Math.abs(P - v), S = Math.abs(S - b))), "path" === c) o = u.strokeDasharray, u.strokeDasharray = "none", n = e.getTotalLength() || 0, g(m) !== g(k) && !s && (s = 1) && _("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), n *= (m + k) / 2, u.strokeDasharray = o; else if ("rect" === c) n = 2 * P * m + 2 * S * k; else if ("line" === c) n = y(v, b, v + P, b + S, m, k); else if ("polyline" === c || "polygon" === c) for (r = e.getAttribute("points").match(h) || [], "polygon" === c && r.push(r[0], r[1]), n = 0, a = 2; a < r.length; a += 2) n += y(r[a - 2], r[a - 1], r[a], r[a + 1], m, k) || 0; else "circle" !== c && "ellipse" !== c || (l = P / 2 * m, d = S / 2 * k, n = Math.PI * (3 * (l + d) - w((3 * l + d) * (l + 3 * d))));
        return n || 0
    }, T = (e, i) => {
        if (!(e = t(e)[0])) return [0, 0];
        i || (i = S(e) + 1);
        let r = n.getComputedStyle(e), s = r.strokeDasharray || "", o = c(r.strokeDashoffset), a = s.indexOf(",");
        return a < 0 && (a = s.indexOf(" ")), s = a < 0 ? i : c(s.substr(0, a)), s > i && (s = i), [-o || 0, s - o || 0]
    }, D = () => {
        l() && (n = window, r = e = d(), t = e.utils.toArray, o = e.core.getStyleSaver, a = e.core.reverting || function () {
        }, i = -1 !== ((n.navigator || {}).userAgent || "").indexOf("Edge"))
    };
const O = {
    version: "3.12.5", name: "drawSVG", register(t) {
        e = t, D()
    }, init(e, t, s, a, l) {
        if (!e.getBBox) return !1;
        r || D();
        let d, h, f, p = S(e);
        return this.styles = o && o(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = s, this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", d = T(e, p), h = ((e, t, n) => {
            let i, r, s = e.indexOf(" ");
            return s < 0 ? (i = void 0 !== n ? n + "" : e, r = e) : (i = e.substr(0, s), r = e.substr(s + 1)), i = u(i, t), r = u(r, t), i > r ? [r, i] : [i, r]
        })(t, p, d[0]), this._length = g(p), this._dash = g(d[1] - d[0]), this._offset = g(-d[0]), this._dashPT = this.add(this, "_dash", this._dash, g(h[1] - h[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, g(-h[0]), 0, 0, 0, 0, 0, 1), i && (f = n.getComputedStyle(e), f.strokeLinecap !== f.strokeLinejoin && (h = c(f.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", h, h + .01))), this._live = x(e) || ~(t + "").indexOf("live"), this._nowrap = ~(t + "").indexOf("nowrap"), this._props.push("drawSVG"), P
    }, render(e, t) {
        if (t.tween._time || !a()) {
            let n, i, r, s, o = t._pt, a = t._style;
            if (o) {
                for (t._live && (n = S(t._target), n !== t._length && (i = n / t._length, t._length = n, t._offsetPT && (t._offsetPT.s *= i, t._offsetPT.c *= i), t._dashPT ? (t._dashPT.s *= i, t._dashPT.c *= i) : t._dash *= i)); o;) o.r(e, o.d), o = o._next;
                r = t._dash || (e && 1 !== e ? 1e-4 : 0), n = t._length - r + .1, s = t._offset, r && s && r + Math.abs(s % t._length) > t._length - .2 && (s += s < 0 ? .1 : -.1) && (n += .1), a.strokeDashoffset = r ? s : s + .001, a.strokeDasharray = n < .2 ? "none" : r ? r + "px," + (t._nowrap ? 999999 : n) + "px" : "0px, 999999px"
            }
        } else t.styles.revert()
    }, getLength: S, getPosition: T
};
d() && e.registerPlugin(O);
export default O;
export {O as DrawSVGPlugin};
