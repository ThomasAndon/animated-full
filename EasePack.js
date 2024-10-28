let e, t, n = () => e || "undefined" != typeof window && (e = window.gsap) && e.registerPlugin && e,
    o = (e, t) => !!(void 0 === e ? t : e && !~(e + "").indexOf("false")), r = o => {
        if (e = o || n(), e) {
            t = e.registerEase;
            let n, o = e.parseEase(), r = e => t => {
                let n = .5 + t / 2;
                e.config = t => e(2 * (1 - t) * t * n + t * t)
            };
            for (n in o) o[n].config || r(o[n]);
            for (n in t("slow", p), t("expoScale", f), t("rough", g), c) "version" !== n && e.core.globals(n, c[n])
        }
    }, s = (e, t, n) => {
        let r = (e = Math.min(1, e || .7)) < 1 ? t || 0 === t ? t : .7 : 0, s = (1 - e) / 2, i = s + e, a = o(n);
        return e => {
            let t = e + (.5 - e) * r;
            return e < s ? a ? 1 - (e = 1 - e / s) * e : t - (e = 1 - e / s) * e * e * e * t : e > i ? a ? 1 === e ? 0 : 1 - (e = (e - i) / s) * e : t + (e - t) * (e = (e - i) / s) * e * e * e : a ? 1 : t
        }
    }, i = (t, n, o) => {
        let r = Math.log(n / t), s = n - t;
        return o && (o = e.parseEase(o)), e => (t * Math.exp(r * (o ? o(e) : e)) - t) / s
    }, a = function (e, t, n) {
        this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
    }, l = t => {
        "object" != typeof t && (t = {points: +t || 20});
        let n, r, s, i, l, p, f, g = t.taper || "none", c = [], h = 0, u = 0 | (+t.points || 20), x = u,
            d = o(t.randomize, !0), v = o(t.clamp), w = e ? e.parseEase(t.template) : 0, E = .4 * (+t.strength || 1);
        for (; --x > -1;) n = d ? Math.random() : 1 / u * x, r = w ? w(n) : n, "none" === g ? s = E : "out" === g ? (i = 1 - n, s = i * i * E) : "in" === g ? s = n * n * E : n < .5 ? (i = 2 * n, s = i * i * .5 * E) : (i = 2 * (1 - n), s = i * i * .5 * E), d ? r += Math.random() * s - .5 * s : x % 2 ? r += .5 * s : r -= .5 * s, v && (r > 1 ? r = 1 : r < 0 && (r = 0)), c[h++] = {
            x: n,
            y: r
        };
        for (c.sort((e, t) => e.x - t.x), p = new a(1, 1, null), x = u; x--;) l = c[x], p = new a(l.x, l.y, p);
        return f = new a(0, 0, p.t ? p : p.next), e => {
            let t = f;
            if (e > t.t) {
                for (; t.next && e >= t.t;) t = t.next;
                t = t.prev
            } else for (; t.prev && e <= t.t;) t = t.prev;
            return f = t, t.v + (e - t.t) / t.gap * t.c
        }
    };
const p = s(.7);
p.ease = p, p.config = s;
const f = i(1, 2);
f.config = i;
const g = l();
g.ease = g, g.config = l;
const c = {SlowMo: p, RoughEase: g, ExpoScaleEase: f};
for (let e in c) c[e].register = r, c[e].version = "3.12.5";
n() && e.registerPlugin(p);
export default c;
export {c as EasePack, f as ExpoScaleEase, g as RoughEase, p as SlowMo};
