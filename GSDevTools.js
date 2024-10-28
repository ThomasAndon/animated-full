
let e, t, o, i, n, l, s, r, a, d = "transform", c = d + "Origin", p = n => {
        let l = n.ownerDocument || n;
        !(d in n.style) && "msTransform" in n.style && (d = "msTransform", c = d + "Origin");
        for (; l.parentNode && (l = l.parentNode);) ;
        if (t = window, s = new y, l) {
            e = l, o = l.documentElement, i = l.body, r = e.createElementNS("http://www.w3.org/2000/svg", "g"), r.style.transform = "none";
            let t = l.createElement("div"), n = l.createElement("div"), s = l && (l.body || l.firstElementChild);
            s && s.appendChild && (s.appendChild(t), t.appendChild(n), t.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), a = n.offsetParent !== t, s.removeChild(t))
        }
        return l
    }, g = [], h = [], u = e => e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null),
    m = e => "fixed" === t.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? m(e) : void 0),
    f = (t, o) => {
        if (t.parentNode && (e || p(t))) {
            let i = u(t),
                s = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                r = i ? o ? "rect" : "g" : "div", a = 2 !== o ? 0 : 100, d = 3 === o ? 100 : 0,
                c = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                p = e.createElementNS ? e.createElementNS(s.replace(/^https/, "http"), r) : e.createElement(r);
            return o && (i ? (l || (l = f(t)), p.setAttribute("width", .01), p.setAttribute("height", .01), p.setAttribute("transform", "translate(" + a + "," + d + ")"), l.appendChild(p)) : (n || (n = f(t), n.style.cssText = c), p.style.cssText = c + "width:0.1px;height:0.1px;top:" + d + "px;left:" + a + "px", n.appendChild(p))), p
        }
        throw "Need document and parent."
    }, x = (e, o) => {
        let i, p, m, x, v, w, b = u(e), T = e === b, k = b ? g : h, _ = e.parentNode;
        if (e === t) return e;
        if (k.length || k.push(f(e, 1), f(e, 2), f(e, 3)), i = b ? l : n, b) T ? (m = (e => {
            let t, o = e.getCTM();
            return o || (t = e.style[d], e.style[d] = "none", e.appendChild(r), o = r.getCTM(), e.removeChild(r), t ? e.style[d] = t : e.style.removeProperty(d.replace(/([A-Z])/g, "-$1").toLowerCase())), o || s.clone()
        })(e), x = -m.e / m.a, v = -m.f / m.d, p = s) : e.getBBox ? (m = e.getBBox(), p = e.transform ? e.transform.baseVal : {}, p = p.numberOfItems ? p.numberOfItems > 1 ? (e => {
            let t = new y, o = 0;
            for (; o < e.numberOfItems; o++) t.multiply(e.getItem(o).matrix);
            return t
        })(p) : p.getItem(0).matrix : s, x = p.a * m.x + p.c * m.y, v = p.b * m.x + p.d * m.y) : (p = new y, x = v = 0), o && "g" === e.tagName.toLowerCase() && (x = v = 0), (T ? b : _).appendChild(i), i.setAttribute("transform", "matrix(" + p.a + "," + p.b + "," + p.c + "," + p.d + "," + (p.e + x) + "," + (p.f + v) + ")"); else {
            if (x = v = 0, a) for (p = e.offsetParent, m = e; m && (m = m.parentNode) && m !== p && m.parentNode;) (t.getComputedStyle(m)[d] + "").length > 4 && (x = m.offsetLeft, v = m.offsetTop, m = 0);
            if (w = t.getComputedStyle(e), "absolute" !== w.position && "fixed" !== w.position) for (p = e.offsetParent; _ && _ !== p;) x += _.scrollLeft || 0, v += _.scrollTop || 0, _ = _.parentNode;
            m = i.style, m.top = e.offsetTop - v + "px", m.left = e.offsetLeft - x + "px", m[d] = w[d], m[c] = w[c], m.position = "fixed" === w.position ? "fixed" : "absolute", e.parentNode.appendChild(i)
        }
        return i
    }, v = (e, t, o, i, n, l, s) => (e.a = t, e.b = o, e.c = i, e.d = n, e.e = l, e.f = s, e);

class y {
    constructor(e = 1, t = 0, o = 0, i = 1, n = 0, l = 0) {
        v(this, e, t, o, i, n, l)
    }

    inverse() {
        let {a: e, b: t, c: o, d: i, e: n, f: l} = this, s = e * i - t * o || 1e-10;
        return v(this, i / s, -t / s, -o / s, e / s, (o * l - i * n) / s, -(e * l - t * n) / s)
    }

    multiply(e) {
        let {a: t, b: o, c: i, d: n, e: l, f: s} = this, r = e.a, a = e.c, d = e.b, c = e.d, p = e.e, g = e.f;
        return v(this, r * t + d * i, r * o + d * n, a * t + c * i, a * o + c * n, l + p * t + g * i, s + p * o + g * n)
    }

    clone() {
        return new y(this.a, this.b, this.c, this.d, this.e, this.f)
    }

    equals(e) {
        let {a: t, b: o, c: i, d: n, e: l, f: s} = this;
        return t === e.a && o === e.b && i === e.c && n === e.d && l === e.e && s === e.f
    }

    apply(e, t = {}) {
        let {x: o, y: i} = e, {a: n, b: l, c: s, d: r, e: a, f: d} = this;
        return t.x = o * n + i * s + a || 0, t.y = o * l + i * r + d || 0, t
    }
}

function w(n, l, s, r) {
    if (!n || !n.parentNode || (e || p(n)).documentElement === n) return new y;
    let a = (e => {
            let t, o;
            for (; e && e !== i;) o = e._gsap, o && o.uncache && o.get(e, "x"), o && !o.scaleX && !o.scaleY && o.renderTransform && (o.scaleX = o.scaleY = 1e-4, o.renderTransform(1, o), t ? t.push(o) : t = [o]), e = e.parentNode;
            return t
        })(n), d = u(n) ? g : h, c = x(n, s), f = d[0].getBoundingClientRect(), v = d[1].getBoundingClientRect(),
        w = d[2].getBoundingClientRect(), b = c.parentNode, T = !r && m(n),
        k = new y((v.left - f.left) / 100, (v.top - f.top) / 100, (w.left - f.left) / 100, (w.top - f.top) / 100, f.left + (T ? 0 : t.pageXOffset || e.scrollLeft || o.scrollLeft || i.scrollLeft || 0), f.top + (T ? 0 : t.pageYOffset || e.scrollTop || o.scrollTop || i.scrollTop || 0));
    if (b.removeChild(c), a) for (f = a.length; f--;) v = a[f], v.scaleX = v.scaleY = 0, v.renderTransform(1, v);
    return l ? k.inverse() : k
}

let b, T, k, _, M, S, D, C, E, P, L, X, N, Y, H, z, B, R, I, O, A, F, W = 0, G = () => "undefined" != typeof window,
    V = () => b || G() && (b = window.gsap) && b.registerPlugin && b, q = e => "function" == typeof e,
    j = e => "object" == typeof e, K = e => void 0 === e, Z = () => !1, U = "transform", $ = "transformOrigin",
    J = e => Math.round(1e4 * e) / 1e4, Q = Array.isArray, ee = (e, t) => {
        let o = k.createElementNS ? k.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : k.createElement(e);
        return o.style ? o : k.createElement(e)
    }, te = 180 / Math.PI, oe = 1e20, ie = new y, ne = Date.now || (() => (new Date).getTime()), le = [], se = {}, re = 0,
    ae = /^(?:a|input|textarea|button|select)$/i, de = 0, ce = {}, pe = {}, ge = (e, t) => {
        let o, i = {};
        for (o in e) i[o] = t ? e[o] * t : e[o];
        return i
    }, he = (e, t) => {
        let o, i = e.length;
        for (; i--;) t ? e[i].style.touchAction = t : e[i].style.removeProperty("touch-action"), o = e[i].children, o && o.length && he(o, t)
    }, ue = () => le.forEach(e => e()), me = () => !le.length && b.ticker.remove(ue), fe = e => {
        let t = le.length;
        for (; t--;) le[t] === e && le.splice(t, 1);
        b.to(me, {overwrite: !0, delay: 15, duration: 0, onComplete: me, data: "_draggable"})
    }, xe = (e, t, o, i) => {
        if (e.addEventListener) {
            let n = N[t];
            i = i || (L ? {passive: !1} : null), e.addEventListener(n || t, o, i), n && t !== n && e.addEventListener(t, o, i)
        }
    }, ve = (e, t, o, i) => {
        if (e.removeEventListener) {
            let n = N[t];
            e.removeEventListener(n || t, o, i), n && t !== n && e.removeEventListener(t, o, i)
        }
    }, ye = e => {
        e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
    }, we = e => {
        Y = e.touches && W < e.touches.length, ve(e.target, "touchend", we)
    }, be = e => {
        Y = e.touches && W < e.touches.length, xe(e.target, "touchend", we)
    }, Te = e => T.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0,
    ke = e => T.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0, _e = (e, t) => {
        xe(e, "scroll", t), Se(e.parentNode) || _e(e.parentNode, t)
    }, Me = (e, t) => {
        ve(e, "scroll", t), Se(e.parentNode) || Me(e.parentNode, t)
    }, Se = e => !(e && e !== _ && 9 !== e.nodeType && e !== k.body && e !== T && e.nodeType && e.parentNode),
    De = (e, t) => {
        let o = "x" === t ? "Width" : "Height", i = "scroll" + o, n = "client" + o;
        return Math.max(0, Se(e) ? Math.max(_[i], M[i]) - (T["inner" + o] || _[n] || M[n]) : e[i] - e[n])
    }, Ce = (e, t) => {
        let o = De(e, "x"), i = De(e, "y");
        Se(e) ? e = pe : Ce(e.parentNode, t), e._gsMaxScrollX = o, e._gsMaxScrollY = i, t || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
    }, Ee = (e, t, o) => {
        let i = e.style;
        i && (K(i[t]) && (t = E(t, e) || t), null == o ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = o)
    }, Pe = e => T.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e), Le = {},
    Xe = e => {
        if (e === T) return Le.left = Le.top = 0, Le.width = Le.right = _.clientWidth || e.innerWidth || M.clientWidth || 0, Le.height = Le.bottom = (e.innerHeight || 0) - 20 < _.clientHeight ? _.clientHeight : e.innerHeight || M.clientHeight || 0, Le;
        let t = e.ownerDocument || k,
            o = K(e.pageX) ? e.nodeType || K(e.left) || K(e.top) ? P(e)[0].getBoundingClientRect() : e : {
                left: e.pageX - ke(t),
                top: e.pageY - Te(t),
                right: e.pageX - ke(t) + 1,
                bottom: e.pageY - Te(t) + 1
            };
        return K(o.right) && !K(o.width) ? (o.right = o.left + o.width, o.bottom = o.top + o.height) : K(o.width) && (o = {
            width: o.right - o.left,
            height: o.bottom - o.top,
            right: o.right,
            left: o.left,
            bottom: o.bottom,
            top: o.top
        }), o
    }, Ne = (e, t, o) => {
        let i, n = e.vars, l = n[o], s = e._listeners[t];
        return q(l) && (i = l.apply(n.callbackScope || e, n[o + "Params"] || [e.pointerEvent])), s && !1 === e.dispatchEvent(t) && (i = !1), i
    }, Ye = (e, t) => {
        let o, i, n, l = P(e)[0];
        return l.nodeType || l === T ? ze(l, t) : K(e.left) ? (i = e.min || e.minX || e.minRotation || 0, o = e.min || e.minY || 0, {
            left: i,
            top: o,
            width: (e.max || e.maxX || e.maxRotation || 0) - i,
            height: (e.max || e.maxY || 0) - o
        }) : (n = {x: 0, y: 0}, {left: e.left - n.x, top: e.top - n.y, width: e.width, height: e.height})
    }, He = {}, ze = (e, t) => {
        t = P(t)[0];
        let o, i, n, l, s, r, a, d, c, p, g, h, u, m = e.getBBox && e.ownerSVGElement, f = e.ownerDocument || k;
        if (e === T) n = Te(f), o = ke(f), i = o + (f.documentElement.clientWidth || e.innerWidth || f.body.clientWidth || 0), l = n + ((e.innerHeight || 0) - 20 < f.documentElement.clientHeight ? f.documentElement.clientHeight : e.innerHeight || f.body.clientHeight || 0); else {
            if (t === T || K(t)) return e.getBoundingClientRect();
            o = n = 0, m ? (p = e.getBBox(), g = p.width, h = p.height) : (e.viewBox && (p = e.viewBox.baseVal) && (o = p.x || 0, n = p.y || 0, g = p.width, h = p.height), g || (u = Pe(e), p = "border-box" === u.boxSizing, g = (parseFloat(u.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(u.borderLeftWidth) + parseFloat(u.borderRightWidth)), h = (parseFloat(u.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(u.borderTopWidth) + parseFloat(u.borderBottomWidth)))), i = g, l = h
        }
        return e === t ? {left: o, top: n, width: i - o, height: l - n} : (s = w(t, !0).multiply(w(e)), r = s.apply({
            x: o,
            y: n
        }), a = s.apply({x: i, y: n}), d = s.apply({x: i, y: l}), c = s.apply({
            x: o,
            y: l
        }), o = Math.min(r.x, a.x, d.x, c.x), n = Math.min(r.y, a.y, d.y, c.y), {
            left: o,
            top: n,
            width: Math.max(r.x, a.x, d.x, c.x) - o,
            height: Math.max(r.y, a.y, d.y, c.y) - n
        })
    }, Be = (e, t, o, i, n, l) => {
        let s, r, a, d = {};
        if (t) if (1 !== n && t instanceof Array) {
            if (d.end = s = [], a = t.length, j(t[0])) for (r = 0; r < a; r++) s[r] = ge(t[r], n); else for (r = 0; r < a; r++) s[r] = t[r] * n;
            o += 1.1, i -= 1.1
        } else q(t) ? d.end = o => {
            let i, l, s = t.call(e, o);
            if (1 !== n) if (j(s)) {
                for (l in i = {}, s) i[l] = s[l] * n;
                s = i
            } else s *= n;
            return s
        } : d.end = t;
        return (o || 0 === o) && (d.max = o), (i || 0 === i) && (d.min = i), l && (d.velocity = 0), d
    }, Re = e => {
        let t;
        return !(!e || !e.getAttribute || e === M) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !ae.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || Re(e.parentNode))
    }, Ie = (e, t) => {
        let o, i = e.length;
        for (; i--;) o = e[i], o.ondragstart = o.onselectstart = t ? null : Z, b.set(o, {
            lazy: !0,
            userSelect: t ? "text" : "none"
        })
    }, Oe = e => "fixed" === Pe(e).position || ((e = e.parentNode) && 1 === e.nodeType ? Oe(e) : void 0),
    Ae = function (e, t) {
        e = b.utils.toArray(e)[0], t = t || {};
        let o, i, n, l, s, r, a = document.createElement("div"), d = a.style, c = e.firstChild, p = 0, g = 0,
            h = e.scrollTop, u = e.scrollLeft, m = e.scrollWidth, f = e.scrollHeight, x = 0, v = 0, y = 0;
        A && !1 !== t.force3D ? (s = "translate3d(", r = "px,0px)") : U && (s = "translate(", r = "px)"), this.scrollTop = function (e, t) {
            if (!arguments.length) return -this.top();
            this.top(-e, t)
        }, this.scrollLeft = function (e, t) {
            if (!arguments.length) return -this.left();
            this.left(-e, t)
        }, this.left = function (o, i) {
            if (!arguments.length) return -(e.scrollLeft + g);
            let n = e.scrollLeft - u, l = g;
            if ((n > 2 || n < -2) && !i) return u = e.scrollLeft, b.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
            }), this.left(-u), void (t.onKill && t.onKill());
            (o = -o) < 0 ? (g = o - .5 | 0, o = 0) : o > v ? (g = o - v | 0, o = v) : g = 0, (g || l) && (this._skip || (d[U] = s + -g + "px," + -p + r), g + x >= 0 && (d.paddingRight = g + x + "px")), e.scrollLeft = 0 | o, u = e.scrollLeft
        }, this.top = function (o, i) {
            if (!arguments.length) return -(e.scrollTop + p);
            let n = e.scrollTop - h, l = p;
            if ((n > 2 || n < -2) && !i) return h = e.scrollTop, b.killTweensOf(this, {
                top: 1,
                scrollTop: 1
            }), this.top(-h), void (t.onKill && t.onKill());
            (o = -o) < 0 ? (p = o - .5 | 0, o = 0) : o > y ? (p = o - y | 0, o = y) : p = 0, (p || l) && (this._skip || (d[U] = s + -g + "px," + -p + r)), e.scrollTop = 0 | o, h = e.scrollTop
        }, this.maxScrollTop = () => y, this.maxScrollLeft = () => v, this.disable = function () {
            for (c = a.firstChild; c;) l = c.nextSibling, e.appendChild(c), c = l;
            e === a.parentNode && e.removeChild(a)
        }, this.enable = function () {
            if (c = e.firstChild, c !== a) {
                for (; c;) l = c.nextSibling, a.appendChild(c), c = l;
                e.appendChild(a), this.calibrate()
            }
        }, this.calibrate = function (t) {
            let l, s, r, c = e.clientWidth === o;
            h = e.scrollTop, u = e.scrollLeft, c && e.clientHeight === i && a.offsetHeight === n && m === e.scrollWidth && f === e.scrollHeight && !t || ((p || g) && (s = this.left(), r = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), l = Pe(e), c && !t || (d.display = "block", d.width = "auto", d.paddingRight = "0px", x = Math.max(0, e.scrollWidth - e.clientWidth), x && (x += parseFloat(l.paddingLeft) + (F ? parseFloat(l.paddingRight) : 0))), d.display = "inline-block", d.position = "relative", d.overflow = "visible", d.verticalAlign = "top", d.boxSizing = "content-box", d.width = "100%", d.paddingRight = x + "px", F && (d.paddingBottom = l.paddingBottom), o = e.clientWidth, i = e.clientHeight, m = e.scrollWidth, f = e.scrollHeight, v = e.scrollWidth - o, y = e.scrollHeight - i, n = a.offsetHeight, d.display = "block", (s || r) && (this.left(s), this.top(r)))
        }, this.content = a, this.element = e, this._skip = !1, this.enable()
    }, Fe = e => {
        if (G() && document.body) {
            let e = window && window.navigator;
            T = window, k = document, _ = k.documentElement, M = k.body, S = ee("div"), R = !!window.PointerEvent, D = ee("div"), D.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", B = "grab" === D.style.cursor ? "grab" : "move", H = e && -1 !== e.userAgent.toLowerCase().indexOf("android"), X = "ontouchstart" in _ && "orientation" in T || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), F = function () {
                let e, t = ee("div"), o = ee("div"), i = o.style, n = M;
                return i.display = "inline-block", i.position = "relative", t.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", t.appendChild(o), n.appendChild(t), e = o.offsetHeight + 18 > t.scrollHeight, n.removeChild(t), e
            }(), N = function (e) {
                let t = e.split(","),
                    o = ("onpointerdown" in S ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in S ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","),
                    i = {}, n = 4;
                for (; --n > -1;) i[t[n]] = o[n], i[o[n]] = t[n];
                try {
                    _.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function () {
                            L = 1
                        }
                    }))
                } catch (e) {
                }
                return i
            }("touchstart,touchmove,touchend,touchcancel"), xe(k, "touchcancel", Z), xe(T, "touchmove", Z), M && M.addEventListener("touchstart", Z), xe(k, "contextmenu", (function () {
                for (let e in se) se[e].isPressed && se[e].endDrag()
            })), b = C = V()
        }
        b ? (z = b.plugins.inertia, I = b.core.context || function () {
        }, E = b.utils.checkPrefix, U = E(U), $ = E($), P = b.utils.toArray, O = b.core.getStyleSaver, A = !!E("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    };

class We extends class {
    constructor(e) {
        this._listeners = {}, this.target = e || this
    }

    addEventListener(e, t) {
        let o = this._listeners[e] || (this._listeners[e] = []);
        ~o.indexOf(t) || o.push(t)
    }

    removeEventListener(e, t) {
        let o = this._listeners[e], i = o && o.indexOf(t);
        i >= 0 && o.splice(i, 1)
    }

    dispatchEvent(e) {
        let t;
        return (this._listeners[e] || []).forEach(o => !1 === o.call(this, {
            type: e,
            target: this.target
        }) && (t = !1)), t
    }
} {
    constructor(e, t) {
        super(), C || Fe(1), e = P(e)[0], this.styles = O && O(e, "transform,left,top"), z || (z = b.plugins.inertia), this.vars = t = ge(t || {}), this.target = e, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(t.dragResistance) || 0, this.edgeResistance = isNaN(t.edgeResistance) ? 1 : parseFloat(t.edgeResistance) || 0, this.lockAxis = t.lockAxis, this.autoScroll = t.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!t.allowEventDefault, b.getProperty(e, "x");
        let o, i, n, l, s, r, a, d, c, p, g, h, u, m, f, x, v, M, S, E, L, A, F, G, V, Z, U, ee, ae, me, we, De, Le,
            ze = (t.type || "x,y").toLowerCase(), Ge = ~ze.indexOf("x") || ~ze.indexOf("y"),
            Ve = -1 !== ze.indexOf("rotation"), qe = Ve ? "rotation" : Ge ? "x" : "left", je = Ge ? "y" : "top",
            Ke = !(!~ze.indexOf("x") && !~ze.indexOf("left") && "scroll" !== ze),
            Ze = !(!~ze.indexOf("y") && !~ze.indexOf("top") && "scroll" !== ze), Ue = t.minimumMovement || 2, $e = this,
            Je = P(t.trigger || t.handle || e), Qe = {}, et = 0, tt = !1, ot = t.autoScrollMarginTop || 40,
            it = t.autoScrollMarginRight || 40, nt = t.autoScrollMarginBottom || 40, lt = t.autoScrollMarginLeft || 40,
            st = t.clickableTest || Re, rt = 0, at = e._gsap || b.core.getCache(e), dt = Oe(e),
            ct = (t, o) => parseFloat(at.get(e, t, o)), pt = e.ownerDocument || k,
            gt = e => (ye(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1), ht = t => {
                if ($e.autoScroll && $e.isDragging && (tt || v)) {
                    let t, o, i, n, l, s, r, a, d = e, c = 15 * $e.autoScroll;
                    for (tt = !1, pe.scrollTop = null != T.pageYOffset ? T.pageYOffset : null != pt.documentElement.scrollTop ? pt.documentElement.scrollTop : pt.body.scrollTop, pe.scrollLeft = null != T.pageXOffset ? T.pageXOffset : null != pt.documentElement.scrollLeft ? pt.documentElement.scrollLeft : pt.body.scrollLeft, n = $e.pointerX - pe.scrollLeft, l = $e.pointerY - pe.scrollTop; d && !o;) o = Se(d.parentNode), t = o ? pe : d.parentNode, i = o ? {
                        bottom: Math.max(_.clientHeight, T.innerHeight || 0),
                        right: Math.max(_.clientWidth, T.innerWidth || 0),
                        left: 0,
                        top: 0
                    } : t.getBoundingClientRect(), s = r = 0, Ze && (a = t._gsMaxScrollY - t.scrollTop, a < 0 ? r = a : l > i.bottom - nt && a ? (tt = !0, r = Math.min(a, c * (1 - Math.max(0, i.bottom - l) / nt) | 0)) : l < i.top + ot && t.scrollTop && (tt = !0, r = -Math.min(t.scrollTop, c * (1 - Math.max(0, l - i.top) / ot) | 0)), r && (t.scrollTop += r)), Ke && (a = t._gsMaxScrollX - t.scrollLeft, a < 0 ? s = a : n > i.right - it && a ? (tt = !0, s = Math.min(a, c * (1 - Math.max(0, i.right - n) / it) | 0)) : n < i.left + lt && t.scrollLeft && (tt = !0, s = -Math.min(t.scrollLeft, c * (1 - Math.max(0, n - i.left) / lt) | 0)), s && (t.scrollLeft += s)), o && (s || r) && (T.scrollTo(t.scrollLeft, t.scrollTop), St($e.pointerX + s, $e.pointerY + r)), d = t
                }
                if (v) {
                    let {x: o, y: n} = $e;
                    Ve ? ($e.deltaX = o - parseFloat(at.rotation), $e.rotation = o, at.rotation = o + "deg", at.renderTransform(1, at)) : i ? (Ze && ($e.deltaY = n - i.top(), i.top(n)), Ke && ($e.deltaX = o - i.left(), i.left(o))) : Ge ? (Ze && ($e.deltaY = n - parseFloat(at.y), at.y = n + "px"), Ke && ($e.deltaX = o - parseFloat(at.x), at.x = o + "px"), at.renderTransform(1, at)) : (Ze && ($e.deltaY = n - parseFloat(e.style.top || 0), e.style.top = n + "px"), Ke && ($e.deltaX = o - parseFloat(e.style.left || 0), e.style.left = o + "px")), !d || t || ee || (ee = !0, !1 === Ne($e, "drag", "onDrag") && (Ke && ($e.x -= $e.deltaX), Ze && ($e.y -= $e.deltaY), ht(!0)), ee = !1)
                }
                v = !1
            }, ut = (t, o) => {
                let n, l, {x: s, y: r} = $e;
                e._gsap || (at = b.core.getCache(e)), at.uncache && b.getProperty(e, "x"), Ge ? ($e.x = parseFloat(at.x), $e.y = parseFloat(at.y)) : Ve ? $e.x = $e.rotation = parseFloat(at.rotation) : i ? ($e.y = i.top(), $e.x = i.left()) : ($e.y = parseFloat(e.style.top || (l = Pe(e)) && l.top) || 0, $e.x = parseFloat(e.style.left || (l || {}).left) || 0), (S || E || L) && !o && ($e.isDragging || $e.isThrowing) && (L && (ce.x = $e.x, ce.y = $e.y, n = L(ce), n.x !== $e.x && ($e.x = n.x, v = !0), n.y !== $e.y && ($e.y = n.y, v = !0)), S && (n = S($e.x), n !== $e.x && ($e.x = n, Ve && ($e.rotation = n), v = !0)), E && (n = E($e.y), n !== $e.y && ($e.y = n), v = !0)), v && ht(!0), t || ($e.deltaX = $e.x - s, $e.deltaY = $e.y - r, Ne($e, "throwupdate", "onThrowUpdate"))
            }, mt = (e, t, o, i) => (null == t && (t = -oe), null == o && (o = oe), q(e) ? n => {
                let l = $e.isPressed ? 1 - $e.edgeResistance : 1;
                return e.call($e, (n > o ? o + (n - o) * l : n < t ? t + (n - t) * l : n) * i) * i
            } : Q(e) ? i => {
                let n, l, s = e.length, r = 0, a = oe;
                for (; --s > -1;) n = e[s], l = n - i, l < 0 && (l = -l), l < a && n >= t && n <= o && (r = s, a = l);
                return e[r]
            } : isNaN(e) ? e => e : () => e * i), ft = () => {
                let o, n, l, s;
                a = !1, i ? (i.calibrate(), $e.minX = g = -i.maxScrollLeft(), $e.minY = u = -i.maxScrollTop(), $e.maxX = p = $e.maxY = h = 0, a = !0) : t.bounds && (o = Ye(t.bounds, e.parentNode), Ve ? ($e.minX = g = o.left, $e.maxX = p = o.left + o.width, $e.minY = u = $e.maxY = h = 0) : K(t.bounds.maxX) && K(t.bounds.maxY) ? (n = Ye(e, e.parentNode), $e.minX = g = Math.round(ct(qe, "px") + o.left - n.left), $e.minY = u = Math.round(ct(je, "px") + o.top - n.top), $e.maxX = p = Math.round(g + (o.width - n.width)), $e.maxY = h = Math.round(u + (o.height - n.height))) : (o = t.bounds, $e.minX = g = o.minX, $e.minY = u = o.minY, $e.maxX = p = o.maxX, $e.maxY = h = o.maxY), g > p && ($e.minX = p, $e.maxX = p = g, g = $e.minX), u > h && ($e.minY = h, $e.maxY = h = u, u = $e.minY), Ve && ($e.minRotation = g, $e.maxRotation = p), a = !0), t.liveSnap && (l = !0 === t.liveSnap ? t.snap || {} : t.liveSnap, s = Q(l) || q(l), Ve ? (S = mt(s ? l : l.rotation, g, p, 1), E = null) : l.points ? L = ((e, t, o, i, n, l, s) => (l = l && l < oe ? l * l : oe, q(e) ? r => {
                    let a, d, c, p = $e.isPressed ? 1 - $e.edgeResistance : 1, g = r.x, h = r.y;
                    return r.x = g = g > o ? o + (g - o) * p : g < t ? t + (g - t) * p : g, r.y = h = h > n ? n + (h - n) * p : h < i ? i + (h - i) * p : h, a = e.call($e, r), a !== r && (r.x = a.x, r.y = a.y), 1 !== s && (r.x *= s, r.y *= s), l < oe && (d = r.x - g, c = r.y - h, d * d + c * c > l && (r.x = g, r.y = h)), r
                } : Q(e) ? t => {
                    let o, i, n, s, r = e.length, a = 0, d = oe;
                    for (; --r > -1;) n = e[r], o = n.x - t.x, i = n.y - t.y, s = o * o + i * i, s < d && (a = r, d = s);
                    return d <= l ? e[a] : t
                } : e => e))(s ? l : l.points, g, p, u, h, l.radius, i ? -1 : 1) : (Ke && (S = mt(s ? l : l.x || l.left || l.scrollLeft, g, p, i ? -1 : 1)), Ze && (E = mt(s ? l : l.y || l.top || l.scrollTop, u, h, i ? -1 : 1))))
            }, xt = () => {
                $e.isThrowing = !1, Ne($e, "throwcomplete", "onThrowComplete")
            }, vt = () => {
                $e.isThrowing = !1
            }, yt = (o, n) => {
                let l, s, r, d;
                o && z ? (!0 === o && (l = t.snap || t.liveSnap || {}, s = Q(l) || q(l), o = {resistance: (t.throwResistance || t.resistance || 1e3) / (Ve ? 10 : 1)}, Ve ? o.rotation = Be($e, s ? l : l.rotation, p, g, 1, n) : (Ke && (o[qe] = Be($e, s ? l : l.points || l.x || l.left, p, g, i ? -1 : 1, n || "x" === $e.lockedAxis)), Ze && (o[je] = Be($e, s ? l : l.points || l.y || l.top, h, u, i ? -1 : 1, n || "y" === $e.lockedAxis)), (l.points || Q(l) && j(l[0])) && (o.linkedProps = qe + "," + je, o.radius = l.radius))), $e.isThrowing = !0, d = isNaN(t.overshootTolerance) ? 1 === t.edgeResistance ? 0 : 1 - $e.edgeResistance + .2 : t.overshootTolerance, o.duration || (o.duration = {
                    max: Math.max(t.minDuration || 0, "maxDuration" in t ? t.maxDuration : 2),
                    min: isNaN(t.minDuration) ? 0 === d || j(o) && o.resistance > 1e3 ? 0 : .5 : t.minDuration,
                    overshoot: d
                }), $e.tween = r = b.to(i || e, {
                    inertia: o,
                    data: "_draggable",
                    inherit: !1,
                    onComplete: xt,
                    onInterrupt: vt,
                    onUpdate: t.fastMode ? Ne : ut,
                    onUpdateParams: t.fastMode ? [$e, "onthrowupdate", "onThrowUpdate"] : l && l.radius ? [!1, !0] : []
                }), t.fastMode || (i && (i._skip = !0), r.render(1e9, !0, !0), ut(!0, !0), $e.endX = $e.x, $e.endY = $e.y, Ve && ($e.endRotation = $e.x), r.play(0), ut(!0, !0), i && (i._skip = !1))) : a && $e.applyBounds()
            }, wt = t => {
                let o, i = G;
                G = w(e.parentNode, !0), t && $e.isPressed && !G.equals(i || new y) && (o = i.inverse().apply({
                    x: n,
                    y: l
                }), G.apply(o, o), n = o.x, l = o.y), G.equals(ie) && (G = null)
            }, bt = () => {
                let t, o, d, c = 1 - $e.edgeResistance, m = dt ? ke(pt) : 0, f = dt ? Te(pt) : 0;
                Ge && (at.x = ct(qe, "px") + "px", at.y = ct(je, "px") + "px", at.renderTransform()), wt(!1), He.x = $e.pointerX - m, He.y = $e.pointerY - f, G && G.apply(He, He), n = He.x, l = He.y, v && (St($e.pointerX, $e.pointerY), ht(!0)), De = w(e), i ? (ft(), r = i.top(), s = i.left()) : (Tt() ? (ut(!0, !0), ft()) : $e.applyBounds(), Ve ? (t = e.ownerSVGElement ? [at.xOrigin - e.getBBox().x, at.yOrigin - e.getBBox().y] : (Pe(e)[$] || "0 0").split(" "), x = $e.rotationOrigin = w(e).apply({
                    x: parseFloat(t[0]) || 0,
                    y: parseFloat(t[1]) || 0
                }), ut(!0, !0), o = $e.pointerX - x.x - m, d = x.y - $e.pointerY + f, s = $e.x, r = $e.y = Math.atan2(d, o) * te) : (r = ct(je, "px"), s = ct(qe, "px"))), a && c && (s > p ? s = p + (s - p) / c : s < g && (s = g - (g - s) / c), Ve || (r > h ? r = h + (r - h) / c : r < u && (r = u - (u - r) / c))), $e.startX = s = J(s), $e.startY = r = J(r)
            }, Tt = () => $e.tween && $e.tween.isActive(), kt = () => {
                !D.parentNode || Tt() || $e.isDragging || D.parentNode.removeChild(D)
            }, _t = (s, r) => {
                let a;
                if (!o || $e.isPressed || !s || !("mousedown" !== s.type && "pointerdown" !== s.type || r) && ne() - rt < 30 && N[$e.pointerEvent.type]) we && s && o && ye(s); else {
                    if (V = Tt(), Le = !1, $e.pointerEvent = s, N[s.type] ? (F = ~s.type.indexOf("touch") ? s.currentTarget || s.target : pt, xe(F, "touchend", Dt), xe(F, "touchmove", Mt), xe(F, "touchcancel", Dt), xe(pt, "touchstart", be)) : (F = null, xe(pt, "mousemove", Mt)), U = null, R && F || (xe(pt, "mouseup", Dt), s && s.target && xe(s.target, "mouseup", Dt)), A = st.call($e, s.target) && !1 === t.dragClickables && !r, A) return xe(s.target, "change", Dt), Ne($e, "pressInit", "onPressInit"), Ne($e, "press", "onPress"), Ie(Je, !0), void (we = !1);
                    var p;
                    if (Z = !(!F || Ke === Ze || !1 === $e.vars.allowNativeTouchScrolling || $e.vars.allowContextMenu && s && (s.ctrlKey || s.which > 2)) && (Ke ? "y" : "x"), we = !Z && !$e.allowEventDefault, we && (ye(s), xe(T, "touchforcechange", ye)), s.changedTouches ? (s = m = s.changedTouches[0], f = s.identifier) : s.pointerId ? f = s.pointerId : m = f = null, W++, p = ht, le.push(p), 1 === le.length && b.ticker.add(ue), l = $e.pointerY = s.pageY, n = $e.pointerX = s.pageX, Ne($e, "pressInit", "onPressInit"), (Z || $e.autoScroll) && Ce(e.parentNode), !e.parentNode || !$e.autoScroll || i || Ve || !e.parentNode._gsMaxScrollX || D.parentNode || e.getBBox || (D.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(D)), bt(), $e.tween && $e.tween.kill(), $e.isThrowing = !1, b.killTweensOf(i || e, Qe, !0), i && b.killTweensOf(e, {scrollTo: 1}, !0), $e.tween = $e.lockedAxis = null, (t.zIndexBoost || !Ve && !i && !1 !== t.zIndexBoost) && (e.style.zIndex = We.zIndex++), $e.isPressed = !0, d = !(!t.onDrag && !$e._listeners.drag), c = !(!t.onMove && !$e._listeners.move), !1 !== t.cursor || t.activeCursor) for (a = Je.length; --a > -1;) b.set(Je[a], {cursor: t.activeCursor || t.cursor || ("grab" === B ? "grabbing" : B)});
                    Ne($e, "press", "onPress")
                }
            }, Mt = t => {
                let i, s, r, a, d, p, g = t;
                if (o && !Y && $e.isPressed && t) {
                    if ($e.pointerEvent = t, i = t.changedTouches, i) {
                        if ((t = i[0]) !== m && t.identifier !== f) {
                            for (a = i.length; --a > -1 && (t = i[a]).identifier !== f && t.target !== e;) ;
                            if (a < 0) return
                        }
                    } else if (t.pointerId && f && t.pointerId !== f) return;
                    F && Z && !U && (He.x = t.pageX - (dt ? ke(pt) : 0), He.y = t.pageY - (dt ? Te(pt) : 0), G && G.apply(He, He), s = He.x, r = He.y, d = Math.abs(s - n), p = Math.abs(r - l), (d !== p && (d > Ue || p > Ue) || H && Z === U) && (U = d > p && Ke ? "x" : "y", Z && U !== Z && xe(T, "touchforcechange", ye), !1 !== $e.vars.lockAxisOnTouchScroll && Ke && Ze && ($e.lockedAxis = "x" === U ? "y" : "x", q($e.vars.onLockAxis) && $e.vars.onLockAxis.call($e, g)), H && Z === U)) ? Dt(g) : ($e.allowEventDefault || Z && (!U || Z === U) || !1 === g.cancelable ? we && (we = !1) : (ye(g), we = !0), $e.autoScroll && (tt = !0), St(t.pageX, t.pageY, c))
                } else we && t && o && ye(t)
            }, St = (e, t, o) => {
                let i, d, c, m, f, y, w = 1 - $e.dragResistance, b = 1 - $e.edgeResistance, T = $e.pointerX,
                    k = $e.pointerY, _ = r, M = $e.x, D = $e.y, C = $e.endX, P = $e.endY, X = $e.endRotation, N = v;
                $e.pointerX = e, $e.pointerY = t, dt && (e -= ke(pt), t -= Te(pt)), Ve ? (m = Math.atan2(x.y - t, e - x.x) * te, f = $e.y - m, f > 180 ? (r -= 360, $e.y = m) : f < -180 && (r += 360, $e.y = m), $e.x !== s || Math.abs(r - m) > Ue ? ($e.y = m, c = s + (r - m) * w) : c = s) : (G && (y = e * G.a + t * G.c + G.e, t = e * G.b + t * G.d + G.f, e = y), d = t - l, i = e - n, d < Ue && d > -Ue && (d = 0), i < Ue && i > -Ue && (i = 0), ($e.lockAxis || $e.lockedAxis) && (i || d) && (y = $e.lockedAxis, y || ($e.lockedAxis = y = Ke && Math.abs(i) > Math.abs(d) ? "y" : Ze ? "x" : null, y && q($e.vars.onLockAxis) && $e.vars.onLockAxis.call($e, $e.pointerEvent)), "y" === y ? d = 0 : "x" === y && (i = 0)), c = J(s + i * w), m = J(r + d * w)), (S || E || L) && ($e.x !== c || $e.y !== m && !Ve) && (L && (ce.x = c, ce.y = m, y = L(ce), c = J(y.x), m = J(y.y)), S && (c = J(S(c))), E && (m = J(E(m)))), a && (c > p ? c = p + Math.round((c - p) * b) : c < g && (c = g + Math.round((c - g) * b)), Ve || (m > h ? m = Math.round(h + (m - h) * b) : m < u && (m = Math.round(u + (m - u) * b)))), ($e.x !== c || $e.y !== m && !Ve) && (Ve ? ($e.endRotation = $e.x = $e.endX = c, v = !0) : (Ze && ($e.y = $e.endY = m, v = !0), Ke && ($e.x = $e.endX = c, v = !0)), o && !1 === Ne($e, "move", "onMove") ? ($e.pointerX = T, $e.pointerY = k, r = _, $e.x = M, $e.y = D, $e.endX = C, $e.endY = P, $e.endRotation = X, v = N) : !$e.isDragging && $e.isPressed && ($e.isDragging = Le = !0, Ne($e, "dragstart", "onDragStart")))
            }, Dt = (i, n) => {
                if (!o || !$e.isPressed || i && null != f && !n && (i.pointerId && i.pointerId !== f && i.target !== e || i.changedTouches && !((e, t) => {
                    let o = e.length;
                    for (; o--;) if (e[o].identifier === t) return !0
                })(i.changedTouches, f))) return void (we && i && o && ye(i));
                $e.isPressed = !1;
                let l, s, r, a, d, c = i, p = $e.isDragging,
                    g = $e.vars.allowContextMenu && i && (i.ctrlKey || i.which > 2), h = b.delayedCall(.001, kt);
                if (F ? (ve(F, "touchend", Dt), ve(F, "touchmove", Mt), ve(F, "touchcancel", Dt), ve(pt, "touchstart", be)) : ve(pt, "mousemove", Mt), ve(T, "touchforcechange", ye), R && F || (ve(pt, "mouseup", Dt), i && i.target && ve(i.target, "mouseup", Dt)), v = !1, p && (et = de = ne(), $e.isDragging = !1), fe(ht), A && !g) return i && (ve(i.target, "change", Dt), $e.pointerEvent = c), Ie(Je, !1), Ne($e, "release", "onRelease"), Ne($e, "click", "onClick"), void (A = !1);
                for (s = Je.length; --s > -1;) Ee(Je[s], "cursor", t.cursor || (!1 !== t.cursor ? B : null));
                if (W--, i) {
                    if (l = i.changedTouches, l && (i = l[0]) !== m && i.identifier !== f) {
                        for (s = l.length; --s > -1 && (i = l[s]).identifier !== f && i.target !== e;) ;
                        if (s < 0 && !n) return
                    }
                    $e.pointerEvent = c, $e.pointerX = i.pageX, $e.pointerY = i.pageY
                }
                return g && c ? (ye(c), we = !0, Ne($e, "release", "onRelease")) : c && !p ? (we = !1, V && (t.snap || t.bounds) && yt(t.inertia || t.throwProps), Ne($e, "release", "onRelease"), H && "touchmove" === c.type || -1 !== c.type.indexOf("cancel") || (Ne($e, "click", "onClick"), ne() - rt < 300 && Ne($e, "doubleclick", "onDoubleClick"), a = c.target || e, rt = ne(), d = () => {
                    rt === ae || !$e.enabled() || $e.isPressed || c.defaultPrevented || (a.click ? a.click() : pt.createEvent && (r = pt.createEvent("MouseEvents"), r.initMouseEvent("click", !0, !0, T, 1, $e.pointerEvent.screenX, $e.pointerEvent.screenY, $e.pointerX, $e.pointerY, !1, !1, !1, !1, 0, null), a.dispatchEvent(r)))
                }, H || c.defaultPrevented || b.delayedCall(.05, d))) : (yt(t.inertia || t.throwProps), $e.allowEventDefault || !c || !1 === t.dragClickables && st.call($e, c.target) || !p || Z && (!U || Z !== U) || !1 === c.cancelable ? we = !1 : (we = !0, ye(c)), Ne($e, "release", "onRelease")), Tt() && h.duration($e.tween.duration()), p && Ne($e, "dragend", "onDragEnd"), !0
            }, Ct = t => {
                if (t && $e.isDragging && !i) {
                    let o = t.target || e.parentNode, i = o.scrollLeft - o._gsScrollX, s = o.scrollTop - o._gsScrollY;
                    (i || s) && (G ? (n -= i * G.a + s * G.c, l -= s * G.d + i * G.b) : (n -= i, l -= s), o._gsScrollX += i, o._gsScrollY += s, St($e.pointerX, $e.pointerY))
                }
            }, Et = e => {
                let t = ne(), o = t - rt < 100, i = t - et < 50, n = o && ae === rt,
                    l = $e.pointerEvent && $e.pointerEvent.defaultPrevented, s = o && me === rt,
                    r = e.isTrusted || null == e.isTrusted && o && n;
                if ((n || i && !1 !== $e.vars.suppressClickOnDrag) && e.stopImmediatePropagation && e.stopImmediatePropagation(), o && (!$e.pointerEvent || !$e.pointerEvent.defaultPrevented) && (!n || r && !s)) return r && n && (me = rt), void (ae = rt);
                ($e.isPressed || i || o) && (r && e.detail && o && !l || ye(e)), o || i || Le || (e && e.target && ($e.pointerEvent = e), Ne($e, "click", "onClick"))
            }, Pt = e => G ? {x: e.x * G.a + e.y * G.c + G.e, y: e.x * G.b + e.y * G.d + G.f} : {x: e.x, y: e.y};
        M = We.get(e), M && M.kill(), this.startDrag = (t, o) => {
            let i, s, r, a;
            _t(t || $e.pointerEvent, !0), o && !$e.hitTest(t || $e.pointerEvent) && (i = Xe(t || $e.pointerEvent), s = Xe(e), r = Pt({
                x: i.left + i.width / 2,
                y: i.top + i.height / 2
            }), a = Pt({
                x: s.left + s.width / 2,
                y: s.top + s.height / 2
            }), n -= r.x - a.x, l -= r.y - a.y), $e.isDragging || ($e.isDragging = Le = !0, Ne($e, "dragstart", "onDragStart"))
        }, this.drag = Mt, this.endDrag = e => Dt(e || $e.pointerEvent, !0), this.timeSinceDrag = () => $e.isDragging ? 0 : (ne() - et) / 1e3, this.timeSinceClick = () => (ne() - rt) / 1e3, this.hitTest = (e, t) => We.hitTest($e.target, e, t), this.getDirection = (t, o) => {
            let i, n, l, a, d, c, p = "velocity" === t && z ? t : j(t) && !Ve ? "element" : "start";
            return "element" === p && (d = Xe($e.target), c = Xe(t)), i = "start" === p ? $e.x - s : "velocity" === p ? z.getVelocity(e, qe) : d.left + d.width / 2 - (c.left + c.width / 2), Ve ? i < 0 ? "counter-clockwise" : "clockwise" : (o = o || 2, n = "start" === p ? $e.y - r : "velocity" === p ? z.getVelocity(e, je) : d.top + d.height / 2 - (c.top + c.height / 2), l = Math.abs(i / n), a = l < 1 / o ? "" : i < 0 ? "left" : "right", l < o && ("" !== a && (a += "-"), a += n < 0 ? "up" : "down"), a)
        }, this.applyBounds = (o, i) => {
            let n, l, s, r, d, c;
            if (o && t.bounds !== o) return t.bounds = o, $e.update(!0, i);
            if (ut(!0), ft(), a && !Tt()) {
                if (n = $e.x, l = $e.y, n > p ? n = p : n < g && (n = g), l > h ? l = h : l < u && (l = u), ($e.x !== n || $e.y !== l) && (s = !0, $e.x = $e.endX = n, Ve ? $e.endRotation = n : $e.y = $e.endY = l, v = !0, ht(!0), $e.autoScroll && !$e.isDragging)) for (Ce(e.parentNode), r = e, pe.scrollTop = null != T.pageYOffset ? T.pageYOffset : null != pt.documentElement.scrollTop ? pt.documentElement.scrollTop : pt.body.scrollTop, pe.scrollLeft = null != T.pageXOffset ? T.pageXOffset : null != pt.documentElement.scrollLeft ? pt.documentElement.scrollLeft : pt.body.scrollLeft; r && !c;) c = Se(r.parentNode), d = c ? pe : r.parentNode, Ze && d.scrollTop > d._gsMaxScrollY && (d.scrollTop = d._gsMaxScrollY), Ke && d.scrollLeft > d._gsMaxScrollX && (d.scrollLeft = d._gsMaxScrollX), r = d;
                $e.isThrowing && (s || $e.endX > p || $e.endX < g || $e.endY > h || $e.endY < u) && yt(t.inertia || t.throwProps, s)
            }
            return $e
        }, this.update = (t, o, i) => {
            if (o && $e.isPressed) {
                let t = w(e), o = De.apply({x: $e.x - s, y: $e.y - r}), i = w(e.parentNode, !0);
                i.apply({x: t.e - o.x, y: t.f - o.y}, o), $e.x -= o.x - i.e, $e.y -= o.y - i.f, ht(!0), bt()
            }
            let {x: n, y: l} = $e;
            return wt(!o), t ? $e.applyBounds() : (v && i && ht(!0), ut(!0)), o && (St($e.pointerX, $e.pointerY), v && ht(!0)), $e.isPressed && !o && (Ke && Math.abs(n - $e.x) > .01 || Ze && Math.abs(l - $e.y) > .01 && !Ve) && bt(), $e.autoScroll && (Ce(e.parentNode, $e.isDragging), tt = $e.isDragging, ht(!0), Me(e, Ct), _e(e, Ct)), $e
        }, this.enable = n => {
            let l, s, r, a = {lazy: !0};
            if (!1 !== t.cursor && (a.cursor = t.cursor || B), b.utils.checkPrefix("touchCallout") && (a.touchCallout = "none"), "soft" !== n) {
                for (he(Je, Ke === Ze ? "none" : t.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || t.allowEventDefault ? "manipulation" : Ke ? "pan-y" : "pan-x"), s = Je.length; --s > -1;) r = Je[s], R || xe(r, "mousedown", _t), xe(r, "touchstart", _t), xe(r, "click", Et, !0), b.set(r, a), r.getBBox && r.ownerSVGElement && Ke !== Ze && b.set(r.ownerSVGElement, {touchAction: t.allowNativeTouchScrolling || t.allowEventDefault ? "manipulation" : Ke ? "pan-y" : "pan-x"}), t.allowContextMenu || xe(r, "contextmenu", gt);
                Ie(Je, !1)
            }
            return _e(e, Ct), o = !0, z && "soft" !== n && z.track(i || e, Ge ? "x,y" : Ve ? "rotation" : "top,left"), e._gsDragID = l = "d" + re++, se[l] = $e, i && (i.enable(), i.element._gsDragID = l), (t.bounds || Ve) && bt(), t.bounds && $e.applyBounds(), $e
        }, this.disable = t => {
            let n, l = $e.isDragging, s = Je.length;
            for (; --s > -1;) Ee(Je[s], "cursor", null);
            if ("soft" !== t) {
                for (he(Je, null), s = Je.length; --s > -1;) n = Je[s], Ee(n, "touchCallout", null), ve(n, "mousedown", _t), ve(n, "touchstart", _t), ve(n, "click", Et, !0), ve(n, "contextmenu", gt);
                Ie(Je, !0), F && (ve(F, "touchcancel", Dt), ve(F, "touchend", Dt), ve(F, "touchmove", Mt)), ve(pt, "mouseup", Dt), ve(pt, "mousemove", Mt)
            }
            return Me(e, Ct), o = !1, z && "soft" !== t && (z.untrack(i || e, Ge ? "x,y" : Ve ? "rotation" : "top,left"), $e.tween && $e.tween.kill()), i && i.disable(), fe(ht), $e.isDragging = $e.isPressed = A = !1, l && Ne($e, "dragend", "onDragEnd"), $e
        }, this.enabled = function (e, t) {
            return arguments.length ? e ? $e.enable(t) : $e.disable(t) : o
        }, this.kill = function () {
            return $e.isThrowing = !1, $e.tween && $e.tween.kill(), $e.disable(), b.set(Je, {clearProps: "userSelect"}), delete se[e._gsDragID], $e
        }, this.revert = function () {
            this.kill(), this.styles && this.styles.revert()
        }, ~ze.indexOf("scroll") && (i = this.scrollProxy = new Ae(e, ((e, t) => {
            for (let o in t) o in e || (e[o] = t[o]);
            return e
        })({
            onKill: function () {
                $e.isPressed && Dt(null)
            }
        }, t)), e.style.overflowY = Ze && !X ? "auto" : "hidden", e.style.overflowX = Ke && !X ? "auto" : "hidden", e = i.content), Ve ? Qe.rotation = 1 : (Ke && (Qe[qe] = 1), Ze && (Qe[je] = 1)), at.force3D = !("force3D" in t) || t.force3D, I(this), this.enable()
    }

    static register(e) {
        b = e, Fe()
    }

    static create(e, t) {
        return C || Fe(!0), P(e).map(e => new We(e, t))
    }

    static get(e) {
        return se[(P(e)[0] || {})._gsDragID]
    }

    static timeSinceDrag() {
        return (ne() - de) / 1e3
    }

    static hitTest(e, t, o) {
        if (e === t) return !1;
        let i, n, l, s = Xe(e), r = Xe(t), {top: a, left: d, right: c, bottom: p, width: g, height: h} = s,
            u = r.left > c || r.right < d || r.top > p || r.bottom < a;
        return u || !o ? !u : (l = -1 !== (o + "").indexOf("%"), o = parseFloat(o) || 0, i = {
            left: Math.max(d, r.left),
            top: Math.max(a, r.top)
        }, i.width = Math.min(c, r.right) - i.left, i.height = Math.min(p, r.bottom) - i.top, !(i.width < 0 || i.height < 0) && (l ? (o *= .01, n = i.width * i.height, n >= g * h * o || n >= r.width * r.height * o) : i.width > o && i.height > o))
    }
}

((e, t) => {
    for (let o in t) o in e || (e[o] = t[o])
})(We.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
}), We.zIndex = 1e3, We.version = "3.12.5", V() && b.registerPlugin(We);
let Ge, Ve, qe, je, Ke, Ze, Ue, $e, Je, Qe, et, tt, ot, it, nt, lt = !0, st = 0,
    rt = () => "undefined" != typeof window, at = () => Ge || rt() && (Ge = window.gsap) && Ge.registerPlugin && Ge,
    dt = e => "string" == typeof e, ct = e => void 0 === e, pt = function () {
        return String.fromCharCode.apply(null, arguments)
    }, gt = pt(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), ht = pt(103, 115, 97, 112, 46, 99, 111, 109),
    ut = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, mt = (function (e) {
        var t = "undefined" != typeof window,
            o = true,
            // o = 0 === (t ? window.location.href : "").indexOf(pt(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(pt(108, 111, 99, 97, 108, 104, 111, 115, 116)) || ut.test(e) || (t ? window.location.hostname : "").split(".").pop() === pt(108, 111, 99, 97, 108),
            i = [gt, ht, pt(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), pt(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), pt(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), pt(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), pt(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), pt(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), pt(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), pt(99, 100, 112, 110, 46, 105, 111), pt(112, 101, 110, 115, 46, 105, 111), pt(103, 97, 110, 110, 111, 110, 46, 116, 118), pt(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), pt(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), pt(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), pt(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), pt(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), pt(112, 108, 110, 107, 114, 46, 99, 111), pt(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), pt(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), pt(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), pt(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), pt(99, 115, 98, 46, 97, 112, 112), pt(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), pt(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), pt(99, 111, 100, 105, 101, 114, 46, 105, 111), pt(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), pt(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), pt(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), pt(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), pt(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), pt(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
            n = function () {
                if (t) if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", n); else {
                    document.removeEventListener("readystatechange", n);
                    var e = "object" == typeof Ge ? Ge : t && window.gsap;
                    t && window.console && !window._gsapWarned && "object" == typeof e && !1 !== e.config().trialWarn && false &&  (console.log(pt(37, 99, 87, 97, 114, 110, 105, 110, 103), pt(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(pt(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "GSDevTools" + pt(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(pt(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), pt(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                }
            }, l = i.length;
        for (setTimeout(n, 50); --l > -1;) if (-1 !== e.indexOf(i[l])) return !0;
        o || setTimeout((function () {}), 4e3)
    }("undefined" != typeof window ? window.location.host : ""), "http://www.w3.org/2000/svg"),
    ft = "http://www.w3.org/1999/xhtml", xt = 0, vt = {}, yt = function () {
        try {
            return sessionStorage.setItem("gsTest", "1"), sessionStorage.removeItem("gsTest"), !0
        } catch (e) {
            return !1
        }
    }(), wt = (e, t, o) => {
        let i = qe.createElementNS ? qe.createElementNS("svg" === e ? mt : ft, e) : qe.createElement(e);
        return t && (dt(t) && (t = qe.querySelector(t)), t.appendChild(i)), "svg" === e && (i.setAttribute("xmlns", mt), i.setAttribute("xmlns:xlink", ft)), o && (i.style.cssText = o), i
    }, bt = () => {
        qe.selection ? qe.selection.empty() : Ke.getSelection && Ke.getSelection().removeAllRanges()
    }, Tt = (e, t) => {
        let o = [], i = 0, n = Ge.core.Tween, l = e._first;
        for (; l;) l instanceof n ? l.vars.id && (o[i++] = l) : (t && l.vars.id && (o[i++] = l), o = o.concat(Tt(l, t)), i = o.length), l = l._next;
        return o
    }, kt = (e, t) => {
        let o = 0, i = Math.max(0, e._repeat), n = e._first;
        for (n || (o = e.duration()); n;) o = Math.max(o, n.totalDuration() > 999 ? n.endTime(!1) : n._start + n._tDur / n._ts), n = n._next;
        return !t && i ? o * (i + 1) + e._rDelay * i : o
    }, _t = (e, t, o, i) => {
        let n, l, s;
        return dt(e) && ("=" === e.charAt(1) ? (n = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)), n < 0 && 0 === i && (i = 100), e = i / 100 * t.duration() + n) : isNaN(e) && t.labels && -1 !== t.labels[e] ? e = t.labels[e] : t === Ze && (l = e.indexOf("="), l > 0 ? (n = parseInt(e.charAt(l - 1) + "1", 10) * parseFloat(e.substr(l + 1)), e = e.substr(0, l - 1)) : n = 0, s = Ge.getById(e), s && (e = function (e, t) {
            let o = e, i = arguments.length > 1 ? +t : o.rawTime();
            for (; o;) i = o._start + i / (o._ts || 1), o = o.parent;
            return i
        }(s, o / 100 * s.duration()) + n))), e = isNaN(e) ? o : parseFloat(e), Math.min(100, Math.max(0, e / t.duration() * 100))
    }, Mt = !0, St = (e, t, o, i) => {
        let n, l;
        if ("mousedown" !== t && "mouseup" !== t || (e.style.cursor = "pointer"), "mousedown" === t && (l = ct(e.onpointerdown) ? ct(e.ontouchstart) ? null : "touchstart" : "pointerdown", l)) return n = t => {
            "select" !== t.target.nodeName.toLowerCase() && t.type === l ? (t.stopPropagation(), Mt && (t.preventDefault(), o.call(e, t))) : t.type !== l && o.call(e, t), Mt = !0
        }, e.addEventListener(l, n, i), void ("pointerdown" !== l && e.addEventListener(t, n, i));
        e.addEventListener(t, o, i)
    }, Dt = (e, t, o) => {
        e.removeEventListener(t, o), (t = "mousedown" !== t ? null : ct(e.onpointerdown) ? ct(e.ontouchstart) ? null : "touchstart" : "pointerdown") && e.removeEventListener(t, o)
    }, Ct = (e, t, o, i) => {
        let n, l = e.options, s = l.length;
        for (t += ""; --s > -1;) if (l[s].innerHTML === t || l[s].value === t) return e.selectedIndex = s, o.innerHTML = l[s].innerHTML, l[s];
        i && (n = wt("option", e), n.setAttribute("value", t), n.innerHTML = o.innerHTML = dt(i) ? i : t, e.selectedIndex = l.length - 1)
    }, Et = (e, t, o) => {
        let i = e.options, n = Math.min(i.length - 1, Math.max(0, e.selectedIndex + t));
        return e.selectedIndex = n, o && (o.innerHTML = i[n].innerHTML), i[n].value
    }, Pt = () => {
        let e, t, o, i = et._first;
        if (Je) {
            for (e = Ze._dur; i;) t = i._next, o = i._targets && i._targets[0], "function" == typeof o && o === i.vars.onComplete && !i._dur || o && o._gsIgnore || Ze.add(i, i._start - i._delay), i = t;
            return e !== Ze.duration()
        }
    }, Lt = e => Ge.getById(e) || tt.getById(e) || e === Ze.vars.id && Ze, Xt = e => {
        Ge = e || at(), Ve || Ge && rt() && (qe = document, je = qe.documentElement, Ke = window, it = Ge.core.context || function () {
        }, Ge.registerPlugin(We), et = Ge.globalTimeline, et._sort = !0, et.autoRemoveChildren = !1, Ue = Ge.core.Animation, tt = Ge.timeline({
            data: "indy",
            autoRemoveChildren: !0,
            smoothChildTiming: !0
        }), tt.kill(), tt._dp = 0, tt.to({}, {duration: 1e12}), Ze = Ge.timeline({
            data: "root",
            id: "Global Timeline",
            autoRemoveChildren: !1,
            smoothChildTiming: !0,
            parent: tt
        }, 0), $e = Ge.to(Ze, {
            duration: 1,
            time: 1,
            ease: "none",
            data: "root",
            id: "_rootTween",
            paused: !0,
            immediateRender: !1,
            parent: tt
        }, 0), et.killTweensOf = function (e, t, o) {
            Ze.killTweensOf(e, t, o), Ze.killTweensOf.call(et, e, t, o)
        }, tt._start = Ge.ticker.time, Ge.ticker.add(e => tt.render(e - tt._start)), et._start += et._time, Ze._start = et._time = et._tTime = 0, ot = (e, t, o, i) => Ge.to(t, {
            delay: e,
            duration: 0,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: i,
            parent: tt
        }, tt._time), ot(.01, () => Je ? Je.update() : Pt()), ot(2, () => {
            let e, t, o;
            if (!Je) for (Pt(), e = Ze._first, o = Ze._start; e;) t = e._next, e._tDur !== e._tTime || !e._dur && 1 !== e.progress() ? et.add(e, e._start - e._delay + o) : e.kill(), e = t;
            Yt.globalRecordingTime > 2 ? ot(Yt.globalRecordingTime - 2, () => {
                Je && Je.update(), et.autoRemoveChildren = !0
            }) : et.autoRemoveChildren = !0, lt = !1
        }), Ve = 1)
    }, Nt = (e, t) => {
        t.globalSync || e.parent === et || et.add(e, et.time())
    }, Yt = function (e) {
        Ve || (Xt(), Ge || console.warn("Please gsap.registerPlugin(GSDevTools)")), this.vars = e = e || {}, e.animation && (Yt.getByAnimation(e.animation) || {kill: () => 0}).kill(), e.id = e.id || (dt(e.animation) ? e.animation : xt++), vt[e.id + ""] = this, "globalSync" in e || (e.globalSync = !e.animation);
        let t, o, i, n, l, s, r, a, d, c, p, g, h, u = this, m = ((e, t, o) => {
                nt || (wt("style", je).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", nt = !0), dt(e) && (e = qe.querySelector(e));
                let i = wt("div", e || je.getElementsByTagName("body")[0] || je);
                return i.setAttribute("class", "gs-dev-tools" + (t ? " minimal" : "")), i.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg><svg class=out-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span><svg class=select-arrow viewBox="0 0 12.05 6.73" xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38" xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg><svg class=play-pause viewBox="0 0 20.97 25.67" xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88" class="gs-btn-white play-1" style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85" class="gs-btn-white play-2" style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38" xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67" xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://gsap.com/docs/v3/Plugins/GSDevTools?source=GSDevTools" target=_blank title=Docs><svg class=logo viewBox="0 0 100 100" xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z" style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z" style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z" style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', e && (i.style.position = "absolute", i.style.top = t ? "calc(100% - 42px)" : "calc(100% - 51px)"), o && (dt(o) ? i.style.cssText = o : "object" == typeof o && (o.data = "root", Ge.set(i, o).kill()), i.style.top && (i.style.bottom = "auto"), i.style.width && Ge.set(i, {
                    xPercent: -50,
                    left: "50%",
                    right: "auto",
                    data: "root"
                }).kill()), !t && i.offsetWidth < 600 && (i.setAttribute("class", "gs-dev-tools minimal"), e && (i.style.top = "calc(100% - 42px)")), i
            })(e.container, e.minimal, e.css), f = e => m.querySelector(e),
            x = (t, o) => (!1 !== e.persist && yt && sessionStorage.setItem("gs-dev-" + t + e.id, o), o), v = t => {
                let o;
                if (!1 !== e.persist && yt) return o = sessionStorage.getItem("gs-dev-" + t + e.id), "animation" === t ? o : "loop" === t ? "true" === o : parseFloat(o)
            }, y = f(".playhead"), w = f(".timeline-track"), b = f(".progress-bar"), T = f(".time"), k = f(".duration"), _ = 0,
            M = f(".in-point"), S = f(".out-point"), D = 0, C = 100, E = f(".animation-list"), P = f(".animation-label"),
            L = f(".play-pause"), X = (e => {
                let t = Ge.timeline({data: "root", parent: tt, onComplete: () => t.kill()}, tt._time);
                return t.to(e.querySelector(".play-1"), {
                    duration: .4,
                    attr: {d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"},
                    ease: "power2.inOut",
                    rotation: 360,
                    transformOrigin: "50% 50%"
                }).to(e.querySelector(".play-2"), {
                    duration: .4,
                    attr: {d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"},
                    ease: "power2.inOut",
                    rotation: 360,
                    transformOrigin: "50% 50%"
                }, .05), t
            })(L), N = !1, Y = f(".loop"), H = (e => {
                let t = Ge.timeline({data: "root", id: "loop", parent: tt, paused: !0, onComplete: () => t.kill()}, tt._time);
                return t.to(e, {
                    duration: .5,
                    rotation: 360,
                    ease: "power3.inOut",
                    transformOrigin: "50% 50%"
                }).to(e.querySelectorAll(".loop-path"), {duration: .5, fill: "#91e600", ease: "none"}, 0), t
            })(Y), z = f(".time-scale select"), B = f(".time-scale-label"), R = (e, s, a) => function (d) {
                let c, p = w.getBoundingClientRect(), g = e.getBoundingClientRect(), h = g.width * s,
                    u = Ge.getProperty(e, "x"), m = p.left - g.left - h + u, f = p.right - g.right + (g.width - h) + u, x = m;
                a && (e !== M && (c = M.getBoundingClientRect(), c.left && (m += c.left + c.width - p.left)), e !== S && (c = S.getBoundingClientRect(), c.left && (f -= p.left + p.width - c.left))), l = N, this.applyBounds({
                    minX: m,
                    maxX: f
                }), t = r.duration() / p.width, o = -x * t, n ? r.pause() : r.pause(o + t * this.x), this.target === y && (this.activated && (this.allowEventDefault = !1), this.activated = !0), i = !0
            }, I = We.create(y, {
                type: "x",
                cursor: "ew-resize",
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                onPress: R(y, .5, !0),
                onDrag: function () {
                    let e = o + t * this.x;
                    e < 0 ? e = 0 : e > r._dur && (e = r._dur), n || r.time(e), b.style.width = Math.min(C - D, Math.max(0, e / r._dur * 100 - D)) + "%", T.innerHTML = e.toFixed(2)
                },
                onRelease: function () {
                    N || r.resume()
                }
            })[0], O = () => {
                D = 0, C = 100, M.style.left = "0%", S.style.left = "100%", x("in", D), x("out", C), W(!0)
            }, A = We.create(M, {
                type: "x",
                cursor: "ew-resize",
                zIndexBoost: !1,
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                onPress: R(M, 1, !0),
                onDoubleClick: O,
                onDrag: function () {
                    D = (o + t * this.x) / r.duration() * 100, r.progress(D / 100), W(!0)
                },
                onRelease: function () {
                    D < 0 && (D = 0), bt(), M.style.left = D + "%", x("in", D), Ge.set(M, {
                        x: 0,
                        data: "root",
                        display: "block"
                    }), N || r.resume()
                }
            })[0], F = We.create(S, {
                type: "x",
                cursor: "ew-resize",
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                zIndexBoost: !1,
                onPress: R(S, 0, !0),
                onDoubleClick: O,
                onDrag: function () {
                    C = (o + t * this.x) / r.duration() * 100, r.progress(C / 100), W(!0)
                },
                onRelease: function () {
                    C > 100 && (C = 100), bt(), S.style.left = C + "%", x("out", C), Ge.set(S, {
                        x: 0,
                        data: "root",
                        display: "block"
                    }), l || (V(), r.resume())
                }
            })[0], W = function (e) {
                if (I.isPressed && !0 !== e) return;
                let t, o = h || -1 !== s._repeat ? 100 * r.progress() || 0 : s.totalTime() / s.duration() * 100,
                    n = s._repeat && s._rDelay && s.totalTime() % (s.duration() + s._rDelay) > s.duration();
                o > 100 && (o = 100), o >= C ? !h || r.paused() || I.isDragging ? (o === C && -1 !== s._repeat || (o = C, r.progress(o / 100)), !N && (C < 100 || 1 === s.totalProgress() || -1 === s._repeat) && q()) : n || (o = D, t = r._targets && r._targets[0], t === s && t.seek(d + (c - d) * D / 100), s._repeat > 0 && !D && 100 === C ? 1 === s.totalProgress() && r.totalProgress(0, !0).resume() : r.progress(o / 100, !0).resume()) : o < D && (o = D, r.progress(o / 100, !0)), o === _ && !0 !== e || (b.style.left = D + "%", b.style.width = Math.max(0, o - D) + "%", y.style.left = o + "%", T.innerHTML = r._time.toFixed(2), k.innerHTML = r._dur.toFixed(2), i && (y.style.transform = "translate(-50%,0)", y._gsap.x = "0px", y._gsap.xPercent = -50, i = !1), _ = o), r.paused() !== N && j()
            }, G = function (e) {
                if (I.isPressed) return;
                let t = e.target.getBoundingClientRect(),
                    o = ((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width * 100;
                return o < D ? (D = o = Math.max(0, o), M.style.left = D + "%", void A.startDrag(e)) : o > C ? (C = o = Math.min(100, o), S.style.left = C + "%", void F.startDrag(e)) : (r.progress(o / 100).pause(), W(!0), void I.startDrag(e))
            }, V = () => {
                if (r.progress() >= C / 100) {
                    Nt(r, e);
                    let t = r._targets && r._targets[0];
                    t === s && t.seek(d + (c - d) * D / 100), r._repeat && !D ? r.totalProgress(0, !0) : r.reversed() || r.progress(D / 100, !0)
                }
                X.play(), r.resume(), N && u.update(), N = !1
            }, q = () => {
                X.reverse(), r && r.pause(), N = !0
            }, j = () => {
                N ? V() : q()
            }, K = t => {
                if (I.isPressed) return;
                Nt(r, e);
                let o = r._targets && r._targets[0];
                o === s && o.seek(d + (c - d) * D / 100), r.progress(D / 100, !0), N || r.resume()
            }, Z = e => {
                if (h = e, x("loop", h), h) {
                    if (H.play(), r.progress() >= C / 100) {
                        let e = r._targets && r._targets[0];
                        e === s && e.seek(d + (c - d) * D / 100), s._repeat && !D && 100 === C ? r.totalProgress(0, !0) : r.progress(D / 100, !0), V()
                    }
                } else H.reverse()
            }, U = () => Z(!h), $ = () => {
                let t, o, i = Tt(a && !e.globalSync ? a : Ze, !0), n = E.children, l = 0;
                for (a && !e.globalSync ? i.unshift(a) : e.hideGlobalTimeline || i.unshift(Ze), o = 0; o < i.length; o++) t = n[o] || wt("option", E), t.animation = i[o], l = o && i[o].vars.id === i[o - 1].vars.id ? l + 1 : 0, t.setAttribute("value", t.innerHTML = i[o].vars.id + (l ? " [" + l + "]" : i[o + 1] && i[o + 1].vars.id === i[o].vars.id ? " [0]" : ""));
                for (; o < n.length; o++) E.removeChild(n[o])
            }, J = function (t) {
                let o, i, n = parseFloat(z.options[z.selectedIndex].value) || 1;
                if (!arguments.length) return s;
                if (dt(t) && (t = Lt(t)), t instanceof Ue || console.warn("GSDevTools error: invalid animation."), t.scrollTrigger && console.warn("GSDevTools can't work with ScrollTrigger-based animations; either the scrollbar -OR- the GSDevTools scrubber can control the animation."), t !== s) {
                    if (s && (s._inProgress = D, s._outProgress = C), s = t, r && (n = r.timeScale(), r._targets && r._targets[0] === a && (a.resume(), r.kill())), D = s._inProgress || 0, C = s._outProgress || 100, M.style.left = D + "%", S.style.left = C + "%", p && (x("animation", s.vars.id), x("in", D), x("out", C)), d = 0, i = e.maxDuration || Math.min(1e3, kt(s)), s === Ze || e.globalSync) {
                        if (Pt(), r = $e, Je && Je !== u && console.warn("Error: GSDevTools can only have one instance that's globally synchronized."), Je = u, s !== Ze) for (o = s, c = o.totalDuration(), c > 99999999 && (c = o.duration()); o.parent;) d = d / o._ts + o._start, c = c / o._ts + o._start, o = o.parent; else c = Ze.duration();
                        c - d > i && (c = d + i), Ze.pause(d), $e.vars.time = c, $e.invalidate(), $e.duration(c - d).timeScale(n), N ? $e.progress(1, !0).pause(0, !0) : ot(.01, () => {
                            $e.resume().progress(D / 100), N && V()
                        })
                    } else {
                        if (Je === u && (Je = null), d = Math.min(D * s.duration(), s.time()), s !== a && a) {
                            for (o = s, c = o.totalDuration(), c > 99999999 && (c = o.duration()); o.parent.parent && o !== a;) d = d / (o._ts || o._pauseTS) + o._start, c = c / (o._ts || o._pauseTS) + o._start, o = o.parent;
                            c - d > i && (c = d + i), a.pause(d), r = Ge.to(a, {
                                duration: c - d,
                                time: c,
                                ease: "none",
                                data: "root",
                                parent: tt
                            }, tt._time)
                        } else r = s, !h && r._repeat && Z(!0);
                        r.timeScale(n), $e.pause(), Ze.resume(), r.seek(0)
                    }
                    k.innerHTML = r.duration().toFixed(2), Ct(E, s.vars.id, P)
                }
            }, Q = e => {
                J(E.options[E.selectedIndex].animation), e.target && e.target.blur && e.target.blur(), N && V()
            }, ee = e => {
                let t, o = parseFloat(z.options[z.selectedIndex].value) || 1;
                r.timeScale(o), x("timeScale", o), N || (r.progress() >= C / 100 ? (t = r._targets && r._targets[0], t === s && t.seek(d + (c - d) * D / 100), r.progress(D / 100, !0).pause()) : r.pause(), ot(.01, () => r.resume())), B.innerHTML = o + "x", z.blur && z.blur()
            }, te = Ge.to([f(".gs-bottom"), f(".gs-top")], {
                duration: .3,
                autoAlpha: 0,
                y: 50,
                ease: "power2.in",
                data: "root",
                paused: !0,
                parent: tt
            }, tt._time), oe = !1, ie = e => {
                We.hitTest(e, m) || I.isDragging || A.isDragging || F.isDragging || se.restart(!0)
            }, ne = () => {
                oe || (te.play(), se.pause(), oe = !0)
            }, le = () => {
                se.pause(), oe && (te.reverse(), oe = !1)
            }, se = ot(1.3, ne).pause(), re = t => {
                var o;
                lt && !st && (st = Ze._start), p = !t, o = e.animation, a = o instanceof Ue ? o : o ? Ge.getById(o) : null, a && !a.vars.id && (a.vars.id = "[no id]"), Pt(), $();
                let i = Lt(v("animation"));
                i && (i._inProgress = v("in") || 0, i._outProgress = v("out") || 100), e.paused && q(), s = null, J(a || i || Ze);
                let n = e.timeScale || v("timeScale"), l = i === s;
                n && (Ct(z, n, B, n + "x"), r.timeScale(n)), D = ("inTime" in e ? _t(e.inTime, s, 0, 0) : l ? i._inProgress : 0) || 0, 100 === D && !e.animation && i && (J(Ze), D = _t(e.inTime, s, 0, 0) || 0), D && (M.style.left = D + "%", M.style.display = S.style.display = "block"), C = ("outTime" in e ? _t(e.outTime, s, 100, D) : l ? i._outProgress : 0) || 100, C < D && (C = 100), 100 !== C && (S.style.left = C + "%", M.style.display = S.style.display = "block"), h = "loop" in e ? e.loop : v("loop"), h && Z(!0), e.paused && r.progress(D / 100, !0).pause(), lt && s === Ze && st && e.globalSync && !N && r.time(-st, !0), W(!0)
            };
        St(E, "change", Q), St(E, "mousedown", $), St(L, "mousedown", j), St(f(".seek-bar"), "mousedown", G), St(f(".rewind"), "mousedown", K), St(Y, "mousedown", U), St(z, "change", ee), "auto" === e.visibility ? (St(m, "mouseout", ie), St(m, "mouseover", le)) : "hidden" === e.visibility && (oe = !0, te.progress(1)), !1 !== e.keyboard && (Qe && e.keyboard ? console.warn("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (Qe = u, g = e => {
            let t, o = e.keyCode ? e.keyCode : e.which;
            32 === o ? j() : 38 === o ? (t = parseFloat(Et(z, -1, B)), r.timeScale(t), x("timeScale", t)) : 40 === o ? (t = parseFloat(Et(z, 1, B)), r.timeScale(t), x("timeScale", t)) : 37 === o ? K() : 39 === o ? r.progress(C / 100) : 76 === o ? U() : 72 === o ? oe ? le() : ne() : 73 === o ? (D = 100 * r.progress(), x("in", D), M.style.left = D + "%", W(!0)) : 79 === o && (C = 100 * r.progress(), x("out", C), S.style.left = C + "%", W(!0))
        }, St(je, "keydown", g))), Ge.set(y, {xPercent: -50, x: 0, data: "root"}), Ge.set(M, {
            xPercent: -100,
            x: 0,
            data: "root"
        }), M._gsIgnore = S._gsIgnore = y._gsIgnore = L._gsIgnore = Y._gsIgnore = !0, Ge.killTweensOf([M, S, y]), re(lt), lt && ot(1e-4, re, [!1], this), Ge.ticker.add(W), this.update = e => {
            Je === u && ($e.paused() && !e || Pt(), (() => {
                let e, t, o;
                s === Ze && (e = Ze._time, Ze.progress(1, !0).time(e, !0), e = ($e._dp._time - $e._start) * $e._ts, o = Math.min(1e3, Ze.duration()), 1e3 === o && (o = Math.min(1e3, kt(Ze))), t = $e.duration() / o, 1 !== t && o && (D *= t, C < 100 && (C *= t), $e.seek(0), $e.vars.time = o, $e.invalidate(), $e.duration(o), $e.time(e), k.innerHTML = o.toFixed(2), M.style.left = D + "%", S.style.left = C + "%", W(!0)))
            })())
        }, this.kill = this.revert = () => {
            Dt(E, "change", Q), Dt(E, "mousedown", $), Dt(L, "mousedown", j), Dt(f(".seek-bar"), "mousedown", G), Dt(f(".rewind"), "mousedown", K), Dt(Y, "mousedown", U), Dt(z, "change", ee), I.disable(), A.disable(), F.disable(), Ge.ticker.remove(W), Dt(m, "mouseout", ie), Dt(m, "mouseover", le), m.parentNode.removeChild(m), Je === u && (Je = null), Qe === u && (Qe = null, Dt(je, "keydown", g)), delete vt[e.id + ""]
        }, this.minimal = function (t) {
            let o, i = m.classList.contains("minimal");
            if (!arguments.length || i === t) return i;
            t ? m.classList.add("minimal") : m.classList.remove("minimal"), e.container && (m.style.top = t ? "calc(100% - 42px)" : "calc(100% - 51px)"), I.isPressed && (n = !0, I.endDrag(I.pointerEvent), n = !1, o = 100 * r.progress(), b.style.width = Math.max(0, o - D) + "%", y.style.left = o + "%", y.style.transform = "translate(-50%,0)", y._gsap.x = "0px", y._gsap.xPercent = -50, I.startDrag(I.pointerEvent, !0))
        }, this.animation = J, this.updateList = $, it(this)
    };
Yt.version = "3.12.5", Yt.globalRecordingTime = 2, Yt.getById = e => e ? vt[e] : Je, Yt.getByAnimation = e => {
    dt(e) && (e = Ge.getById(e));
    for (let t in vt) if (vt[t].animation() === e) return vt[t]
}, Yt.create = e => new Yt(e), Yt.register = Xt, at() && Ge.registerPlugin(Yt);
export default Yt;
export {Yt as GSDevTools};
