

!function (n, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((n = n || self).window = n.window || {})
}(this, function (e) {
    "use strict";

    function g() {
        return a || "undefined" != typeof window && (a = window.gsap) && a.registerPlugin && a
    }

    function i(n) {
        return n
    }

    function j(n) {
        if (!y) if (a = g(), C = a && a.parseEase("_CE")) {
            for (var e in W) W[e] = C("", W[e]);
            y = 1, t("wiggle").config = function (n) {
                return "object" == typeof n ? t("", n) : t("wiggle(" + n + ")", {wiggles: +n})
            }
        } else n && console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")
    }

    function k(e, n) {
        return "function" != typeof e && (e = a.parseEase(e) || C("", e)), e.custom || !n ? e : function (n) {
            return 1 - e(n)
        }
    }

    function n() {
        return String.fromCharCode.apply(null, arguments)
    }

    var a, y, C, W = {
            easeOut: "M0,1,C0.7,1,0.6,0,1,0",
            easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
            anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
            uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"
        }, s = "CustomWiggle", u = n(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        f = n(103, 115, 97, 112, 46, 99, 111, 109), c = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, v = function (e) {
            var t = "undefined" != typeof window,
                o = true,
                // o = 0 === (t ? window.location.href : "").indexOf(n(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(n(108, 111, 99, 97, 108, 104, 111, 115, 116)) || c.test(e) || (t ? window.location.hostname : "").split(".").pop() === n(108, 111, 99, 97, 108),
                i = [u, f, n(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), n(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), n(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), n(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), n(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), n(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), n(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), n(99, 100, 112, 110, 46, 105, 111), n(112, 101, 110, 115, 46, 105, 111), n(103, 97, 110, 110, 111, 110, 46, 116, 118), n(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), n(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), n(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), n(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), n(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), n(112, 108, 110, 107, 114, 46, 99, 111), n(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), n(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), n(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), n(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), n(99, 115, 98, 46, 97, 112, 112), n(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), n(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), n(99, 111, 100, 105, 101, 114, 46, 105, 111), n(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), n(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), n(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), n(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), n(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), n(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
                r = i.length;
            for (setTimeout(function checkWarn() {
                if (t) if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", checkWarn); else {
                    document.removeEventListener("readystatechange", checkWarn);
                    var e = "object" == typeof a ? a : t && window.gsap;
                    t && window.console && !window._gsapWarned && "object" == typeof e && !1 !== e.config().trialWarn && false && (console.log(n(37, 99, 87, 97, 114, 110, 105, 110, 103), n(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(n(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + s + n(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(n(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), n(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                }
            }, 50); -1 < --r;) if (-1 !== e.indexOf(i[r])) return !0;
            return o || !setTimeout(function () {}, 4e3)
        }("undefined" != typeof window ? window.location.host : ""), t = function _create(n, e) {
            y || j(1);
            var t, o, r, a, s, u, f, c, g, d = 0 | ((e = e || {}).wiggles || 10), l = 1 / d, p = l / 2,
                w = "anticipate" === e.type, m = W[e.type] || W.easeOut, h = i;
            if (v) {
                if (w && (h = m, m = W.easeOut), e.timingEase && (h = k(e.timingEase)), e.amplitudeEase && (m = k(e.amplitudeEase, !0)), c = [0, 0, (u = h(p)) / 4, 0, u / 2, f = w ? -m(p) : m(p), u, f], "random" === e.type) {
                    for (c.length = 4, t = h(l), o = 2 * Math.random() - 1, g = 2; g < d; g++) p = t, f = o, t = h(l * g), o = 2 * Math.random() - 1, r = Math.atan2(o - c[c.length - 3], t - c[c.length - 4]), a = Math.cos(r) * l, s = Math.sin(r) * l, c.push(p - a, f - s, p, f, p + a, f + s);
                    c.push(t, 0, 1, 0)
                } else {
                    for (g = 1; g < d; g++) c.push(h(p + l / 2), f), p += l, f = (0 < f ? -1 : 1) * m(g * l), u = h(p), c.push(h(p - l / 2), f, u, f);
                    c.push(h(p + l / 4), f, h(p + l / 4), 0, 1, 0)
                }
                for (g = c.length; -1 < --g;) c[g] = ~~(1e3 * c[g]) / 1e3;
                return c[2] = "C" + c[2], C(n, "M" + c.join(","))
            }
        }, o = (CustomWiggle.create = function create(n, e) {
            return t(n, e)
        }, CustomWiggle.register = function register(n) {
            a = n, j()
        }, CustomWiggle);

    function CustomWiggle(n, e) {
        this.ease = t(n, e)
    }

    g() && a.registerPlugin(o), o.version = "3.12.5", e.CustomWiggle = o, e.default = o;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    } else {
        delete e.default
    }
});
