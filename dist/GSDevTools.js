

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
    "use strict";

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function w(e, t) {
        if (e.parentNode && (g || T(e))) {
            var o = C(e),
                n = o ? o.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                i = o ? t ? "rect" : "g" : "div", a = 2 !== t ? 0 : 100, r = 3 === t ? 100 : 0,
                s = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                l = g.createElementNS ? g.createElementNS(n.replace(/^https/, "http"), i) : g.createElement(i);
            return t && (o ? (f = f || w(e), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + a + "," + r + ")"), f.appendChild(l)) : (h || ((h = w(e)).style.cssText = s), l.style.cssText = s + "width:0.1px;height:0.1px;top:" + r + "px;left:" + a + "px", h.appendChild(l))), l
        }
        throw "Need document and parent."
    }

    function A(e, t, o, n, i, a, r) {
        return e.a = t, e.b = o, e.c = n, e.d = i, e.e = a, e.f = r, e
    }

    var g, u, a, r, h, f, m, v, x, t, b = "transform", y = b + "Origin", T = function _setDoc(e) {
        var t = e.ownerDocument || e;
        !(b in e.style) && "msTransform" in e.style && (y = (b = "msTransform") + "Origin");
        for (; t.parentNode && (t = t.parentNode);) ;
        if (u = window, m = new fe, t) {
            a = (g = t).documentElement, r = t.body, (v = g.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
            var o = t.createElement("div"), n = t.createElement("div"), i = t && (t.body || t.firstElementChild);
            i && i.appendChild && (i.appendChild(o), o.appendChild(n), o.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), x = n.offsetParent !== o, i.removeChild(o))
        }
        return t
    }, M = function _forceNonZeroScale(e) {
        for (var t, o; e && e !== r;) (o = e._gsap) && o.uncache && o.get(e, "x"), o && !o.scaleX && !o.scaleY && o.renderTransform && (o.scaleX = o.scaleY = 1e-4, o.renderTransform(1, o), t ? t.push(o) : t = [o]), e = e.parentNode;
        return t
    }, k = [], S = [], D = function _getDocScrollTop() {
        return u.pageYOffset || g.scrollTop || a.scrollTop || r.scrollTop || 0
    }, E = function _getDocScrollLeft() {
        return u.pageXOffset || g.scrollLeft || a.scrollLeft || r.scrollLeft || 0
    }, C = function _svgOwner(e) {
        return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
    }, P = function _isFixed(e) {
        return "fixed" === u.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
    }, L = function _placeSiblings(e, t) {
        var o, n, i, a, r, s, l = C(e), c = e === l, d = l ? k : S, p = e.parentNode;
        if (e === u) return e;
        if (d.length || d.push(w(e, 1), w(e, 2), w(e, 3)), o = l ? f : h, l) c ? (a = -(i = function _getCTM(e) {
            var t, o = e.getCTM();
            return o || (t = e.style[b], e.style[b] = "none", e.appendChild(v), o = v.getCTM(), e.removeChild(v), t ? e.style[b] = t : e.style.removeProperty(b.replace(/([A-Z])/g, "-$1").toLowerCase())), o || m.clone()
        }(e)).e / i.a, r = -i.f / i.d, n = m) : e.getBBox ? (i = e.getBBox(), a = (n = (n = e.transform ? e.transform.baseVal : {}).numberOfItems ? 1 < n.numberOfItems ? function _consolidate(e) {
            for (var t = new fe, o = 0; o < e.numberOfItems; o++) t.multiply(e.getItem(o).matrix);
            return t
        }(n) : n.getItem(0).matrix : m).a * i.x + n.c * i.y, r = n.b * i.x + n.d * i.y) : (n = new fe, a = r = 0), t && "g" === e.tagName.toLowerCase() && (a = r = 0), (c ? l : p).appendChild(o), o.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + a) + "," + (n.f + r) + ")"); else {
            if (a = r = 0, x) for (n = e.offsetParent, i = e; (i = i && i.parentNode) && i !== n && i.parentNode;) 4 < (u.getComputedStyle(i)[b] + "").length && (a = i.offsetLeft, r = i.offsetTop, i = 0);
            if ("absolute" !== (s = u.getComputedStyle(e)).position && "fixed" !== s.position) for (n = e.offsetParent; p && p !== n;) a += p.scrollLeft || 0, r += p.scrollTop || 0, p = p.parentNode;
            (i = o.style).top = e.offsetTop - r + "px", i.left = e.offsetLeft - a + "px", i[b] = s[b], i[y] = s[y], i.position = "fixed" === s.position ? "fixed" : "absolute", e.parentNode.appendChild(o)
        }
        return o
    }, fe = ((t = Matrix2D.prototype).inverse = function inverse() {
        var e = this.a, t = this.b, o = this.c, n = this.d, i = this.e, a = this.f, r = e * n - t * o || 1e-10;
        return A(this, n / r, -t / r, -o / r, e / r, (o * a - n * i) / r, -(e * a - t * i) / r)
    }, t.multiply = function multiply(e) {
        var t = this.a, o = this.b, n = this.c, i = this.d, a = this.e, r = this.f, s = e.a, l = e.c, c = e.b, d = e.d,
            p = e.e, u = e.f;
        return A(this, s * t + c * n, s * o + c * i, l * t + d * n, l * o + d * i, a + p * t + u * n, r + p * o + u * i)
    }, t.clone = function clone() {
        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f)
    }, t.equals = function equals(e) {
        var t = this.a, o = this.b, n = this.c, i = this.d, a = this.e, r = this.f;
        return t === e.a && o === e.b && n === e.c && i === e.d && a === e.e && r === e.f
    }, t.apply = function apply(e, t) {
        void 0 === t && (t = {});
        var o = e.x, n = e.y, i = this.a, a = this.b, r = this.c, s = this.d, l = this.e, c = this.f;
        return t.x = o * i + n * r + l || 0, t.y = o * a + n * s + c || 0, t
    }, Matrix2D);

    function Matrix2D(e, t, o, n, i, a) {
        void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === o && (o = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === a && (a = 0), A(this, e, t, o, n, i, a)
    }

    function getGlobalMatrix(e, t, o, n) {
        if (!e || !e.parentNode || (g || T(e)).documentElement === e) return new fe;
        var i = M(e), a = C(e) ? k : S, r = L(e, o), s = a[0].getBoundingClientRect(), l = a[1].getBoundingClientRect(),
            c = a[2].getBoundingClientRect(), d = r.parentNode, p = !n && P(e),
            u = new fe((l.left - s.left) / 100, (l.top - s.top) / 100, (c.left - s.left) / 100, (c.top - s.top) / 100, s.left + (p ? 0 : E()), s.top + (p ? 0 : D()));
        if (d.removeChild(r), i) for (s = i.length; s--;) (l = i[s]).scaleX = l.scaleY = 0, l.renderTransform(1, l);
        return t ? u.inverse() : u
    }

    function X() {
        return "undefined" != typeof window
    }

    function Y() {
        return me || X() && (me = window.gsap) && me.registerPlugin && me
    }

    function Z(e) {
        return "function" == typeof e
    }

    function $(e) {
        return "object" == typeof e
    }

    function _(e) {
        return void 0 === e
    }

    function aa() {
        return !1
    }

    function da(e) {
        return Math.round(1e4 * e) / 1e4
    }

    function fa(e, t) {
        var o = xe.createElementNS ? xe.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : xe.createElement(e);
        return o.style ? o : xe.createElement(e)
    }

    function ra(e, t) {
        var o, n = {};
        for (o in e) n[o] = t ? e[o] * t : e[o];
        return n
    }

    function ta(e, t) {
        for (var o, n = e.length; n--;) t ? e[n].style.touchAction = t : e[n].style.removeProperty("touch-action"), (o = e[n].children) && o.length && ta(o, t)
    }

    function ua() {
        return Ye.forEach(function (e) {
            return e()
        })
    }

    function wa() {
        return !Ye.length && me.ticker.remove(ua)
    }

    function xa(e) {
        for (var t = Ye.length; t--;) Ye[t] === e && Ye.splice(t, 1);
        me.to(wa, {overwrite: !0, delay: 15, duration: 0, onComplete: wa, data: "_draggable"})
    }

    function za(e, t, o, n) {
        if (e.addEventListener) {
            var i = Me[t];
            n = n || (d ? {passive: !1} : null), e.addEventListener(i || t, o, n), i && t !== i && e.addEventListener(t, o, n)
        }
    }

    function Aa(e, t, o, n) {
        if (e.removeEventListener) {
            var i = Me[t];
            e.removeEventListener(i || t, o, n), i && t !== i && e.removeEventListener(t, o, n)
        }
    }

    function Ba(e) {
        e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
    }

    function Da(e) {
        ke = e.touches && Le < e.touches.length, Aa(e.target, "touchend", Da)
    }

    function Ea(e) {
        ke = e.touches && Le < e.touches.length, za(e.target, "touchend", Da)
    }

    function Fa(e) {
        return ve.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
    }

    function Ga(e) {
        return ve.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
    }

    function Ha(e, t) {
        za(e, "scroll", t), Ge(e.parentNode) || Ha(e.parentNode, t)
    }

    function Ia(e, t) {
        Aa(e, "scroll", t), Ge(e.parentNode) || Ia(e.parentNode, t)
    }

    function Ka(e, t) {
        var o = "x" === t ? "Width" : "Height", n = "scroll" + o, i = "client" + o;
        return Math.max(0, Ge(e) ? Math.max(be[n], s[n]) - (ve["inner" + o] || be[i] || s[i]) : e[n] - e[i])
    }

    function La(e, t) {
        var o = Ka(e, "x"), n = Ka(e, "y");
        Ge(e) ? e = We : La(e.parentNode, t), e._gsMaxScrollX = o, e._gsMaxScrollY = n, t || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
    }

    function Ma(e, t, o) {
        var n = e.style;
        n && (_(n[t]) && (t = c(t, e) || t), null == o ? n.removeProperty && n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : n[t] = o)
    }

    function Na(e) {
        return ve.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
    }

    function Pa(e) {
        if (e === ve) return p.left = p.top = 0, p.width = p.right = be.clientWidth || e.innerWidth || s.clientWidth || 0, p.height = p.bottom = (e.innerHeight || 0) - 20 < be.clientHeight ? be.clientHeight : e.innerHeight || s.clientHeight || 0, p;
        var t = e.ownerDocument || xe,
            o = _(e.pageX) ? e.nodeType || _(e.left) || _(e.top) ? _e(e)[0].getBoundingClientRect() : e : {
                left: e.pageX - Ga(t),
                top: e.pageY - Fa(t),
                right: e.pageX - Ga(t) + 1,
                bottom: e.pageY - Fa(t) + 1
            };
        return _(o.right) && !_(o.width) ? (o.right = o.left + o.width, o.bottom = o.top + o.height) : _(o.width) && (o = {
            width: o.right - o.left,
            height: o.bottom - o.top,
            right: o.right,
            left: o.left,
            bottom: o.bottom,
            top: o.top
        }), o
    }

    function Qa(e, t, o) {
        var n, i = e.vars, a = i[o], r = e._listeners[t];
        return Z(a) && (n = a.apply(i.callbackScope || e, i[o + "Params"] || [e.pointerEvent])), r && !1 === e.dispatchEvent(t) && (n = !1), n
    }

    function Ra(e, t) {
        var o, n, i, a = _e(e)[0];
        return a.nodeType || a === ve ? R(a, t) : _(e.left) ? {
            left: n = e.min || e.minX || e.minRotation || 0,
            top: o = e.min || e.minY || 0,
            width: (e.max || e.maxX || e.maxRotation || 0) - n,
            height: (e.max || e.maxY || 0) - o
        } : (i = {x: 0, y: 0}, {left: e.left - i.x, top: e.top - i.y, width: e.width, height: e.height})
    }

    function Ua(i, a, e, t, r, o) {
        var n, s, l, c = {};
        if (a) if (1 !== r && a instanceof Array) {
            if (c.end = n = [], l = a.length, $(a[0])) for (s = 0; s < l; s++) n[s] = ra(a[s], r); else for (s = 0; s < l; s++) n[s] = a[s] * r;
            e += 1.1, t -= 1.1
        } else Z(a) ? c.end = function (e) {
            var t, o, n = a.call(i, e);
            if (1 !== r) if ($(n)) {
                for (o in t = {}, n) t[o] = n[o] * r;
                n = t
            } else n *= r;
            return n
        } : c.end = a;
        return !e && 0 !== e || (c.max = e), !t && 0 !== t || (c.min = t), o && (c.velocity = 0), c
    }

    function Va(e) {
        var t;
        return !(!e || !e.getAttribute || e === s) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !n.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || Va(e.parentNode))
    }

    function Wa(e, t) {
        for (var o, n = e.length; n--;) (o = e[n]).ondragstart = o.onselectstart = t ? null : aa, me.set(o, {
            lazy: !0,
            userSelect: t ? "text" : "none"
        })
    }

    function $a(a, i) {
        a = me.utils.toArray(a)[0], i = i || {};
        var r, s, l, e, c, d, p = document.createElement("div"), u = p.style, t = a.firstChild, g = 0, h = 0,
            f = a.scrollTop, m = a.scrollLeft, v = a.scrollWidth, x = a.scrollHeight, b = 0, y = 0, w = 0;
        z && !1 !== i.force3D ? (c = "translate3d(", d = "px,0px)") : N && (c = "translate(", d = "px)"), this.scrollTop = function (e, t) {
            if (!arguments.length) return -this.top();
            this.top(-e, t)
        }, this.scrollLeft = function (e, t) {
            if (!arguments.length) return -this.left();
            this.left(-e, t)
        }, this.left = function (e, t) {
            if (!arguments.length) return -(a.scrollLeft + h);
            var o = a.scrollLeft - m, n = h;
            if ((2 < o || o < -2) && !t) return m = a.scrollLeft, me.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
            }), this.left(-m), void (i.onKill && i.onKill());
            (e = -e) < 0 ? (h = e - .5 | 0, e = 0) : y < e ? (h = e - y | 0, e = y) : h = 0, (h || n) && (this._skip || (u[N] = c + -h + "px," + -g + d), 0 <= h + b && (u.paddingRight = h + b + "px")), a.scrollLeft = 0 | e, m = a.scrollLeft
        }, this.top = function (e, t) {
            if (!arguments.length) return -(a.scrollTop + g);
            var o = a.scrollTop - f, n = g;
            if ((2 < o || o < -2) && !t) return f = a.scrollTop, me.killTweensOf(this, {
                top: 1,
                scrollTop: 1
            }), this.top(-f), void (i.onKill && i.onKill());
            (e = -e) < 0 ? (g = e - .5 | 0, e = 0) : w < e ? (g = e - w | 0, e = w) : g = 0, (g || n) && (this._skip || (u[N] = c + -h + "px," + -g + d)), a.scrollTop = 0 | e, f = a.scrollTop
        }, this.maxScrollTop = function () {
            return w
        }, this.maxScrollLeft = function () {
            return y
        }, this.disable = function () {
            for (t = p.firstChild; t;) e = t.nextSibling, a.appendChild(t), t = e;
            a === p.parentNode && a.removeChild(p)
        }, this.enable = function () {
            if ((t = a.firstChild) !== p) {
                for (; t;) e = t.nextSibling, p.appendChild(t), t = e;
                a.appendChild(p), this.calibrate()
            }
        }, this.calibrate = function (e) {
            var t, o, n, i = a.clientWidth === r;
            f = a.scrollTop, m = a.scrollLeft, i && a.clientHeight === s && p.offsetHeight === l && v === a.scrollWidth && x === a.scrollHeight && !e || ((g || h) && (o = this.left(), n = this.top(), this.left(-a.scrollLeft), this.top(-a.scrollTop)), t = Na(a), i && !e || (u.display = "block", u.width = "auto", u.paddingRight = "0px", (b = Math.max(0, a.scrollWidth - a.clientWidth)) && (b += parseFloat(t.paddingLeft) + (B ? parseFloat(t.paddingRight) : 0))), u.display = "inline-block", u.position = "relative", u.overflow = "visible", u.verticalAlign = "top", u.boxSizing = "content-box", u.width = "100%", u.paddingRight = b + "px", B && (u.paddingBottom = t.paddingBottom), r = a.clientWidth, s = a.clientHeight, v = a.scrollWidth, x = a.scrollHeight, y = a.scrollWidth - r, w = a.scrollHeight - s, l = p.offsetHeight, u.display = "block", (o || n) && (this.left(o), this.top(n)))
        }, this.content = p, this.element = a, this._skip = !1, this.enable()
    }

    function _a(e) {
        if (X() && document.body) {
            var t = window && window.navigator;
            ve = window, xe = document, be = xe.documentElement, s = xe.body, l = fa("div"), Ee = !!window.PointerEvent, (ye = fa("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Ae = "grab" === ye.style.cursor ? "grab" : "move", Se = t && -1 !== t.userAgent.toLowerCase().indexOf("android"), Te = "ontouchstart" in be && "orientation" in ve || t && (0 < t.MaxTouchPoints || 0 < t.msMaxTouchPoints), n = fa("div"), i = fa("div"), a = i.style, r = s, a.display = "inline-block", a.position = "relative", n.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", n.appendChild(i), r.appendChild(n), o = i.offsetHeight + 18 > n.scrollHeight, r.removeChild(n), B = o, Me = function (e) {
                for (var t = e.split(","), o = (("onpointerdown" in l ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in l ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(",")), n = {}, i = 4; -1 < --i;) n[t[i]] = o[i], n[o[i]] = t[i];
                try {
                    be.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function get() {
                            d = 1
                        }
                    }))
                } catch (e) {
                }
                return n
            }("touchstart,touchmove,touchend,touchcancel"), za(xe, "touchcancel", aa), za(ve, "touchmove", aa), s && s.addEventListener("touchstart", aa), za(xe, "contextmenu", function () {
                for (var e in He) He[e].isPressed && He[e].endDrag()
            }), me = we = Y()
        }
        var o, n, i, a, r;
        me ? (De = me.plugins.inertia, Ce = me.core.context || function () {
        }, c = me.utils.checkPrefix, N = c(N), ze = c(ze), _e = me.utils.toArray, Pe = me.core.getStyleSaver, z = !!c("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    }

    var me, ve, xe, be, s, l, ye, we, c, _e, d, Te, Me, ke, Se, De, Ae, Ee, Ce, Pe, z, B, o, Le = 0, N = "transform",
        ze = "transformOrigin", Xe = Array.isArray, Be = 180 / Math.PI, Ne = 1e20, i = new fe,
        Re = Date.now || function () {
            return (new Date).getTime()
        }, Ye = [], He = {}, Ie = 0, n = /^(?:a|input|textarea|button|select)$/i, Oe = 0, Fe = {}, We = {},
        Ge = function _isRoot(e) {
            return !(e && e !== be && 9 !== e.nodeType && e !== xe.body && e !== ve && e.nodeType && e.parentNode)
        }, p = {}, Ve = {}, R = function _getElementBounds(e, t) {
            t = _e(t)[0];
            var o, n, i, a, r, s, l, c, d, p, u, g, h, f = e.getBBox && e.ownerSVGElement, m = e.ownerDocument || xe;
            if (e === ve) i = Fa(m), n = (o = Ga(m)) + (m.documentElement.clientWidth || e.innerWidth || m.body.clientWidth || 0), a = i + ((e.innerHeight || 0) - 20 < m.documentElement.clientHeight ? m.documentElement.clientHeight : e.innerHeight || m.body.clientHeight || 0); else {
                if (t === ve || _(t)) return e.getBoundingClientRect();
                o = i = 0, f ? (u = (p = e.getBBox()).width, g = p.height) : (e.viewBox && (p = e.viewBox.baseVal) && (o = p.x || 0, i = p.y || 0, u = p.width, g = p.height), u || (p = "border-box" === (h = Na(e)).boxSizing, u = (parseFloat(h.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(h.borderLeftWidth) + parseFloat(h.borderRightWidth)), g = (parseFloat(h.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(h.borderTopWidth) + parseFloat(h.borderBottomWidth)))), n = u, a = g
            }
            return e === t ? {
                left: o,
                top: i,
                width: n - o,
                height: a - i
            } : (s = (r = getGlobalMatrix(t, !0).multiply(getGlobalMatrix(e))).apply({x: o, y: i}), l = r.apply({
                x: n,
                y: i
            }), c = r.apply({x: n, y: a}), d = r.apply({x: o, y: a}), {
                left: o = Math.min(s.x, l.x, c.x, d.x),
                top: i = Math.min(s.y, l.y, c.y, d.y),
                width: Math.max(s.x, l.x, c.x, d.x) - o,
                height: Math.max(s.y, l.y, c.y, d.y) - i
            })
        }, H = ((o = EventDispatcher.prototype).addEventListener = function addEventListener(e, t) {
            var o = this._listeners[e] || (this._listeners[e] = []);
            ~o.indexOf(t) || o.push(t)
        }, o.removeEventListener = function removeEventListener(e, t) {
            var o = this._listeners[e], n = o && o.indexOf(t);
            0 <= n && o.splice(n, 1)
        }, o.dispatchEvent = function dispatchEvent(t) {
            var o, n = this;
            return (this._listeners[t] || []).forEach(function (e) {
                return !1 === e.call(n, {type: t, target: n.target}) && (o = !1)
            }), o
        }, EventDispatcher);

    function EventDispatcher(e) {
        this._listeners = {}, this.target = e || this
    }

    var Qe, V = (function _inheritsLoose(e, t) {
        e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
    }(Draggable, Qe = H), Draggable.register = function register(e) {
        me = e, _a()
    }, Draggable.create = function create(e, t) {
        return we || _a(!0), _e(e).map(function (e) {
            return new Draggable(e, t)
        })
    }, Draggable.get = function get(e) {
        return He[(_e(e)[0] || {})._gsDragID]
    }, Draggable.timeSinceDrag = function timeSinceDrag() {
        return (Re() - Oe) / 1e3
    }, Draggable.hitTest = function hitTest(e, t, o) {
        if (e === t) return !1;
        var n, i, a, r = Pa(e), s = Pa(t), l = r.top, c = r.left, d = r.right, p = r.bottom, u = r.width, g = r.height,
            h = s.left > d || s.right < c || s.top > p || s.bottom < l;
        return h || !o ? !h : (a = -1 !== (o + "").indexOf("%"), o = parseFloat(o) || 0, (n = {
            left: Math.max(c, s.left),
            top: Math.max(l, s.top)
        }).width = Math.min(d, s.right) - n.left, n.height = Math.min(p, s.bottom) - n.top, !(n.width < 0 || n.height < 0) && (a ? u * g * (o *= .01) <= (i = n.width * n.height) || i >= s.width * s.height * o : n.width > o && n.height > o))
    }, Draggable);

    function Draggable(g, p) {
        var e;
        e = Qe.call(this) || this, we || _a(1), g = _e(g)[0], e.styles = Pe && Pe(g, "transform,left,top"), De = De || me.plugins.inertia, e.vars = p = ra(p || {}), e.target = g, e.x = e.y = e.rotation = 0, e.dragResistance = parseFloat(p.dragResistance) || 0, e.edgeResistance = isNaN(p.edgeResistance) ? 1 : parseFloat(p.edgeResistance) || 0, e.lockAxis = p.lockAxis, e.autoScroll = p.autoScroll || 0, e.lockedAxis = null, e.allowEventDefault = !!p.allowEventDefault, me.getProperty(g, "x");

        function Sh(e, t) {
            return parseFloat(le.get(g, e, t))
        }

        function zi(e) {
            return Ba(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
        }

        function Ai(e) {
            if (q.autoScroll && q.isDragging && (te || P)) {
                var t, o, n, i, a, r, s, l, c = g, d = 15 * q.autoScroll;
                for (te = !1, We.scrollTop = null != ve.pageYOffset ? ve.pageYOffset : null != de.documentElement.scrollTop ? de.documentElement.scrollTop : de.body.scrollTop, We.scrollLeft = null != ve.pageXOffset ? ve.pageXOffset : null != de.documentElement.scrollLeft ? de.documentElement.scrollLeft : de.body.scrollLeft, i = q.pointerX - We.scrollLeft, a = q.pointerY - We.scrollTop; c && !o;) t = (o = Ge(c.parentNode)) ? We : c.parentNode, n = o ? {
                    bottom: Math.max(be.clientHeight, ve.innerHeight || 0),
                    right: Math.max(be.clientWidth, ve.innerWidth || 0),
                    left: 0,
                    top: 0
                } : t.getBoundingClientRect(), r = s = 0, j && ((l = t._gsMaxScrollY - t.scrollTop) < 0 ? s = l : a > n.bottom - ie && l ? (te = !0, s = Math.min(l, d * (1 - Math.max(0, n.bottom - a) / ie) | 0)) : a < n.top + oe && t.scrollTop && (te = !0, s = -Math.min(t.scrollTop, d * (1 - Math.max(0, a - n.top) / oe) | 0)), s && (t.scrollTop += s)), U && ((l = t._gsMaxScrollX - t.scrollLeft) < 0 ? r = l : i > n.right - ne && l ? (te = !0, r = Math.min(l, d * (1 - Math.max(0, n.right - i) / ne) | 0)) : i < n.left + ae && t.scrollLeft && (te = !0, r = -Math.min(t.scrollLeft, d * (1 - Math.max(0, i - n.left) / ae) | 0)), r && (t.scrollLeft += r)), o && (r || s) && (ve.scrollTo(t.scrollLeft, t.scrollTop), ge(q.pointerX + r, q.pointerY + s)), c = t
            }
            if (P) {
                var p = q.x, u = q.y;
                G ? (q.deltaX = p - parseFloat(le.rotation), q.rotation = p, le.rotation = p + "deg", le.renderTransform(1, le)) : h ? (j && (q.deltaY = u - h.top(), h.top(u)), U && (q.deltaX = p - h.left(), h.left(p))) : W ? (j && (q.deltaY = u - parseFloat(le.y), le.y = u + "px"), U && (q.deltaX = p - parseFloat(le.x), le.x = p + "px"), le.renderTransform(1, le)) : (j && (q.deltaY = u - parseFloat(g.style.top || 0), g.style.top = u + "px"), U && (q.deltaX = p - parseFloat(g.style.left || 0), g.style.left = p + "px")), !f || e || H || (!(H = !0) === Qa(q, "drag", "onDrag") && (U && (q.x -= q.deltaX), j && (q.y -= q.deltaY), Ai(!0)), H = !1)
            }
            P = !1
        }

        function Bi(e, t) {
            var o, n, i = q.x, a = q.y;
            g._gsap || (le = me.core.getCache(g)), le.uncache && me.getProperty(g, "x"), W ? (q.x = parseFloat(le.x), q.y = parseFloat(le.y)) : G ? q.x = q.rotation = parseFloat(le.rotation) : h ? (q.y = h.top(), q.x = h.left()) : (q.y = parseFloat(g.style.top || (n = Na(g)) && n.top) || 0, q.x = parseFloat(g.style.left || (n || {}).left) || 0), (L || z || X) && !t && (q.isDragging || q.isThrowing) && (X && (Fe.x = q.x, Fe.y = q.y, (o = X(Fe)).x !== q.x && (q.x = o.x, P = !0), o.y !== q.y && (q.y = o.y, P = !0)), L && (o = L(q.x)) !== q.x && (q.x = o, G && (q.rotation = o), P = !0), z && ((o = z(q.y)) !== q.y && (q.y = o), P = !0)), P && Ai(!0), e || (q.deltaX = q.x - i, q.deltaY = q.y - a, Qa(q, "throwupdate", "onThrowUpdate"))
        }

        function Ci(r, s, l, o) {
            return null == s && (s = -Ne), null == l && (l = Ne), Z(r) ? function (e) {
                var t = q.isPressed ? 1 - q.edgeResistance : 1;
                return r.call(q, (l < e ? l + (e - l) * t : e < s ? s + (e - s) * t : e) * o) * o
            } : Xe(r) ? function (e) {
                for (var t, o, n = r.length, i = 0, a = Ne; -1 < --n;) (o = (t = r[n]) - e) < 0 && (o = -o), o < a && s <= t && t <= l && (i = n, a = o);
                return r[i]
            } : isNaN(r) ? function (e) {
                return e
            } : function () {
                return r * o
            }
        }

        function Ei() {
            var e, t, o, n;
            k = !1, h ? (h.calibrate(), q.minX = D = -h.maxScrollLeft(), q.minY = E = -h.maxScrollTop(), q.maxX = S = q.maxY = A = 0, k = !0) : p.bounds && (e = Ra(p.bounds, g.parentNode), G ? (q.minX = D = e.left, q.maxX = S = e.left + e.width, q.minY = E = q.maxY = A = 0) : _(p.bounds.maxX) && _(p.bounds.maxY) ? (t = Ra(g, g.parentNode), q.minX = D = Math.round(Sh(V, "px") + e.left - t.left), q.minY = E = Math.round(Sh(Q, "px") + e.top - t.top), q.maxX = S = Math.round(D + (e.width - t.width)), q.maxY = A = Math.round(E + (e.height - t.height))) : (e = p.bounds, q.minX = D = e.minX, q.minY = E = e.minY, q.maxX = S = e.maxX, q.maxY = A = e.maxY), S < D && (q.minX = S, q.maxX = S = D, D = q.minX), A < E && (q.minY = A, q.maxY = A = E, E = q.minY), G && (q.minRotation = D, q.maxRotation = S), k = !0), p.liveSnap && (o = !0 === p.liveSnap ? p.snap || {} : p.liveSnap, n = Xe(o) || Z(o), G ? (L = Ci(n ? o : o.rotation, D, S, 1), z = null) : o.points ? X = function buildPointSnapFunc(l, s, c, d, p, u, g) {
                return u = u && u < Ne ? u * u : Ne, Z(l) ? function (e) {
                    var t, o, n, i = q.isPressed ? 1 - q.edgeResistance : 1, a = e.x, r = e.y;
                    return e.x = a = c < a ? c + (a - c) * i : a < s ? s + (a - s) * i : a, e.y = r = p < r ? p + (r - p) * i : r < d ? d + (r - d) * i : r, (t = l.call(q, e)) !== e && (e.x = t.x, e.y = t.y), 1 !== g && (e.x *= g, e.y *= g), u < Ne && (o = e.x - a, n = e.y - r, u < o * o + n * n && (e.x = a, e.y = r)), e
                } : Xe(l) ? function (e) {
                    for (var t, o, n, i, a = l.length, r = 0, s = Ne; -1 < --a;) (i = (t = (n = l[a]).x - e.x) * t + (o = n.y - e.y) * o) < s && (r = a, s = i);
                    return s <= u ? l[r] : e
                } : function (e) {
                    return e
                }
            }(n ? o : o.points, D, S, E, A, o.radius, h ? -1 : 1) : (U && (L = Ci(n ? o : o.x || o.left || o.scrollLeft, D, S, h ? -1 : 1)), j && (z = Ci(n ? o : o.y || o.top || o.scrollTop, E, A, h ? -1 : 1))))
        }

        function Fi() {
            q.isThrowing = !1, Qa(q, "throwcomplete", "onThrowComplete")
        }

        function Gi() {
            q.isThrowing = !1
        }

        function Hi(e, t) {
            var o, n, i, a;
            e && De ? (!0 === e && (o = p.snap || p.liveSnap || {}, n = Xe(o) || Z(o), e = {resistance: (p.throwResistance || p.resistance || 1e3) / (G ? 10 : 1)}, G ? e.rotation = Ua(q, n ? o : o.rotation, S, D, 1, t) : (U && (e[V] = Ua(q, n ? o : o.points || o.x || o.left, S, D, h ? -1 : 1, t || "x" === q.lockedAxis)), j && (e[Q] = Ua(q, n ? o : o.points || o.y || o.top, A, E, h ? -1 : 1, t || "y" === q.lockedAxis)), (o.points || Xe(o) && $(o[0])) && (e.linkedProps = V + "," + Q, e.radius = o.radius))), q.isThrowing = !0, a = isNaN(p.overshootTolerance) ? 1 === p.edgeResistance ? 0 : 1 - q.edgeResistance + .2 : p.overshootTolerance, e.duration || (e.duration = {
                max: Math.max(p.minDuration || 0, "maxDuration" in p ? p.maxDuration : 2),
                min: isNaN(p.minDuration) ? 0 === a || $(e) && 1e3 < e.resistance ? 0 : .5 : p.minDuration,
                overshoot: a
            }), q.tween = i = me.to(h || g, {
                inertia: e,
                data: "_draggable",
                inherit: !1,
                onComplete: Fi,
                onInterrupt: Gi,
                onUpdate: p.fastMode ? Qa : Bi,
                onUpdateParams: p.fastMode ? [q, "onthrowupdate", "onThrowUpdate"] : o && o.radius ? [!1, !0] : []
            }), p.fastMode || (h && (h._skip = !0), i.render(1e9, !0, !0), Bi(!0, !0), q.endX = q.x, q.endY = q.y, G && (q.endRotation = q.x), i.play(0), Bi(!0, !0), h && (h._skip = !1))) : k && q.applyBounds()
        }

        function Ii(e) {
            var t, o = B;
            B = getGlobalMatrix(g.parentNode, !0), e && q.isPressed && !B.equals(o || new fe) && (t = o.inverse().apply({
                x: y,
                y: w
            }), B.apply(t, t), y = t.x, w = t.y), B.equals(i) && (B = null)
        }

        function Ji() {
            var e, t, o, n = 1 - q.edgeResistance, i = ce ? Ga(de) : 0, a = ce ? Fa(de) : 0;
            W && (le.x = Sh(V, "px") + "px", le.y = Sh(Q, "px") + "px", le.renderTransform()), Ii(!1), Ve.x = q.pointerX - i, Ve.y = q.pointerY - a, B && B.apply(Ve, Ve), y = Ve.x, w = Ve.y, P && (ge(q.pointerX, q.pointerY), Ai(!0)), d = getGlobalMatrix(g), h ? (Ei(), M = h.top(), T = h.left()) : (pe() ? (Bi(!0, !0), Ei()) : q.applyBounds(), G ? (e = g.ownerSVGElement ? [le.xOrigin - g.getBBox().x, le.yOrigin - g.getBBox().y] : (Na(g)[ze] || "0 0").split(" "), C = q.rotationOrigin = getGlobalMatrix(g).apply({
                x: parseFloat(e[0]) || 0,
                y: parseFloat(e[1]) || 0
            }), Bi(!0, !0), t = q.pointerX - C.x - i, o = C.y - q.pointerY + a, T = q.x, M = q.y = Math.atan2(o, t) * Be) : (M = Sh(Q, "px"), T = Sh(V, "px"))), k && n && (S < T ? T = S + (T - S) / n : T < D && (T = D - (D - T) / n), G || (A < M ? M = A + (M - A) / n : M < E && (M = E - (E - M) / n))), q.startX = T = da(T), q.startY = M = da(M)
        }

        function Li() {
            !ye.parentNode || pe() || q.isDragging || ye.parentNode.removeChild(ye)
        }

        function Mi(e, t) {
            var o;
            if (!u || q.isPressed || !e || !("mousedown" !== e.type && "pointerdown" !== e.type || t) && Re() - se < 30 && Me[q.pointerEvent.type]) O && e && u && Ba(e); else {
                if (N = pe(), F = !1, q.pointerEvent = e, Me[e.type] ? (b = ~e.type.indexOf("touch") ? e.currentTarget || e.target : de, za(b, "touchend", he), za(b, "touchmove", ue), za(b, "touchcancel", he), za(de, "touchstart", Ea)) : (b = null, za(de, "mousemove", ue)), Y = null, Ee && b || (za(de, "mouseup", he), e && e.target && za(e.target, "mouseup", he)), x = re.call(q, e.target) && !1 === p.dragClickables && !t) return za(e.target, "change", he), Qa(q, "pressInit", "onPressInit"), Qa(q, "press", "onPress"), Wa(J, !0), void (O = !1);
                if (R = !(!b || U == j || !1 === q.vars.allowNativeTouchScrolling || q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which)) && (U ? "y" : "x"), (O = !R && !q.allowEventDefault) && (Ba(e), za(ve, "touchforcechange", Ba)), e.changedTouches ? (e = m = e.changedTouches[0], v = e.identifier) : e.pointerId ? v = e.pointerId : m = v = null, Le++, function _addToRenderQueue(e) {
                    Ye.push(e), 1 === Ye.length && me.ticker.add(ua)
                }(Ai), w = q.pointerY = e.pageY, y = q.pointerX = e.pageX, Qa(q, "pressInit", "onPressInit"), (R || q.autoScroll) && La(g.parentNode), !g.parentNode || !q.autoScroll || h || G || !g.parentNode._gsMaxScrollX || ye.parentNode || g.getBBox || (ye.style.width = g.parentNode.scrollWidth + "px", g.parentNode.appendChild(ye)), Ji(), q.tween && q.tween.kill(), q.isThrowing = !1, me.killTweensOf(h || g, n, !0), h && me.killTweensOf(g, {scrollTo: 1}, !0), q.tween = q.lockedAxis = null, !p.zIndexBoost && (G || h || !1 === p.zIndexBoost) || (g.style.zIndex = Draggable.zIndex++), q.isPressed = !0, f = !(!p.onDrag && !q._listeners.drag), l = !(!p.onMove && !q._listeners.move), !1 !== p.cursor || p.activeCursor) for (o = J.length; -1 < --o;) me.set(J[o], {cursor: p.activeCursor || p.cursor || ("grab" === Ae ? "grabbing" : Ae)});
                Qa(q, "press", "onPress")
            }
        }

        function Qi(e) {
            if (e && q.isDragging && !h) {
                var t = e.target || g.parentNode, o = t.scrollLeft - t._gsScrollX, n = t.scrollTop - t._gsScrollY;
                (o || n) && (B ? (y -= o * B.a + n * B.c, w -= n * B.d + o * B.b) : (y -= o, w -= n), t._gsScrollX += o, t._gsScrollY += n, ge(q.pointerX, q.pointerY))
            }
        }

        function Ri(e) {
            var t = Re(), o = t - se < 100, n = t - ee < 50, i = o && I === se,
                a = q.pointerEvent && q.pointerEvent.defaultPrevented, r = o && c === se,
                s = e.isTrusted || null == e.isTrusted && o && i;
            if ((i || n && !1 !== q.vars.suppressClickOnDrag) && e.stopImmediatePropagation && e.stopImmediatePropagation(), o && (!q.pointerEvent || !q.pointerEvent.defaultPrevented) && (!i || s && !r)) return s && i && (c = se), void (I = se);
            (q.isPressed || n || o) && (s && e.detail && o && !a || Ba(e)), o || n || F || (e && e.target && (q.pointerEvent = e), Qa(q, "click", "onClick"))
        }

        function Si(e) {
            return B ? {x: e.x * B.a + e.y * B.c + B.e, y: e.x * B.b + e.y * B.d + B.f} : {x: e.x, y: e.y}
        }

        var u, h, y, w, T, M, k, f, l, S, D, A, E, m, v, C, P, t, L, z, X, x, b, B, N, R, Y, H, I, c, O, d, F,
            o = (p.type || "x,y").toLowerCase(), W = ~o.indexOf("x") || ~o.indexOf("y"),
            G = -1 !== o.indexOf("rotation"), V = G ? "rotation" : W ? "x" : "left", Q = W ? "y" : "top",
            U = !(!~o.indexOf("x") && !~o.indexOf("left") && "scroll" !== o),
            j = !(!~o.indexOf("y") && !~o.indexOf("top") && "scroll" !== o), K = p.minimumMovement || 2,
            q = _assertThisInitialized(e), J = _e(p.trigger || p.handle || g), n = {}, ee = 0, te = !1,
            oe = p.autoScrollMarginTop || 40, ne = p.autoScrollMarginRight || 40, ie = p.autoScrollMarginBottom || 40,
            ae = p.autoScrollMarginLeft || 40, re = p.clickableTest || Va, se = 0, le = g._gsap || me.core.getCache(g),
            ce = function _isFixed(e) {
                return "fixed" === Na(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
            }(g), de = g.ownerDocument || xe, pe = function isTweening() {
                return q.tween && q.tween.isActive()
            }, ue = function onMove(e) {
                var t, o, n, i, a, r, s = e;
                if (u && !ke && q.isPressed && e) {
                    if (t = (q.pointerEvent = e).changedTouches) {
                        if ((e = t[0]) !== m && e.identifier !== v) {
                            for (i = t.length; -1 < --i && (e = t[i]).identifier !== v && e.target !== g;) ;
                            if (i < 0) return
                        }
                    } else if (e.pointerId && v && e.pointerId !== v) return;
                    b && R && !Y && (Ve.x = e.pageX - (ce ? Ga(de) : 0), Ve.y = e.pageY - (ce ? Fa(de) : 0), B && B.apply(Ve, Ve), o = Ve.x, n = Ve.y, ((a = Math.abs(o - y)) !== (r = Math.abs(n - w)) && (K < a || K < r) || Se && R === Y) && (Y = r < a && U ? "x" : "y", R && Y !== R && za(ve, "touchforcechange", Ba), !1 !== q.vars.lockAxisOnTouchScroll && U && j && (q.lockedAxis = "x" === Y ? "y" : "x", Z(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, s)), Se && R === Y)) ? he(s) : (O = q.allowEventDefault || R && (!Y || R === Y) || !1 === s.cancelable ? O && !1 : (Ba(s), !0), q.autoScroll && (te = !0), ge(e.pageX, e.pageY, l))
                } else O && e && u && Ba(e)
            }, ge = function setPointerPosition(e, t, o) {
                var n, i, a, r, s, l, c = 1 - q.dragResistance, d = 1 - q.edgeResistance, p = q.pointerX, u = q.pointerY,
                    g = M, h = q.x, f = q.y, m = q.endX, v = q.endY, x = q.endRotation, b = P;
                q.pointerX = e, q.pointerY = t, ce && (e -= Ga(de), t -= Fa(de)), G ? (r = Math.atan2(C.y - t, e - C.x) * Be, 180 < (s = q.y - r) ? (M -= 360, q.y = r) : s < -180 && (M += 360, q.y = r), a = q.x !== T || Math.abs(M - r) > K ? (q.y = r, T + (M - r) * c) : T) : (B && (l = e * B.a + t * B.c + B.e, t = e * B.b + t * B.d + B.f, e = l), (i = t - w) < K && -K < i && (i = 0), (n = e - y) < K && -K < n && (n = 0), (q.lockAxis || q.lockedAxis) && (n || i) && ((l = q.lockedAxis) || (q.lockedAxis = l = U && Math.abs(n) > Math.abs(i) ? "y" : j ? "x" : null, l && Z(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, q.pointerEvent)), "y" === l ? i = 0 : "x" === l && (n = 0)), a = da(T + n * c), r = da(M + i * c)), (L || z || X) && (q.x !== a || q.y !== r && !G) && (X && (Fe.x = a, Fe.y = r, l = X(Fe), a = da(l.x), r = da(l.y)), L && (a = da(L(a))), z && (r = da(z(r)))), k && (S < a ? a = S + Math.round((a - S) * d) : a < D && (a = D + Math.round((a - D) * d)), G || (A < r ? r = Math.round(A + (r - A) * d) : r < E && (r = Math.round(E + (r - E) * d)))), q.x === a && (q.y === r || G) || (G ? (q.endRotation = q.x = q.endX = a, P = !0) : (j && (q.y = q.endY = r, P = !0), U && (q.x = q.endX = a, P = !0)), o && !1 === Qa(q, "move", "onMove") ? (q.pointerX = p, q.pointerY = u, M = g, q.x = h, q.y = f, q.endX = m, q.endY = v, q.endRotation = x, P = b) : !q.isDragging && q.isPressed && (q.isDragging = F = !0, Qa(q, "dragstart", "onDragStart")))
            }, he = function onRelease(e, t) {
                if (u && q.isPressed && (!e || null == v || t || !(e.pointerId && e.pointerId !== v && e.target !== g || e.changedTouches && !function _hasTouchID(e, t) {
                    for (var o = e.length; o--;) if (e[o].identifier === t) return !0
                }(e.changedTouches, v)))) {
                    q.isPressed = !1;
                    var o, n, i, a, r, s = e, l = q.isDragging,
                        c = q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which), d = me.delayedCall(.001, Li);
                    if (b ? (Aa(b, "touchend", onRelease), Aa(b, "touchmove", ue), Aa(b, "touchcancel", onRelease), Aa(de, "touchstart", Ea)) : Aa(de, "mousemove", ue), Aa(ve, "touchforcechange", Ba), Ee && b || (Aa(de, "mouseup", onRelease), e && e.target && Aa(e.target, "mouseup", onRelease)), P = !1, l && (ee = Oe = Re(), q.isDragging = !1), xa(Ai), x && !c) return e && (Aa(e.target, "change", onRelease), q.pointerEvent = s), Wa(J, !1), Qa(q, "release", "onRelease"), Qa(q, "click", "onClick"), void (x = !1);
                    for (n = J.length; -1 < --n;) Ma(J[n], "cursor", p.cursor || (!1 !== p.cursor ? Ae : null));
                    if (Le--, e) {
                        if ((o = e.changedTouches) && (e = o[0]) !== m && e.identifier !== v) {
                            for (n = o.length; -1 < --n && (e = o[n]).identifier !== v && e.target !== g;) ;
                            if (n < 0 && !t) return
                        }
                        q.pointerEvent = s, q.pointerX = e.pageX, q.pointerY = e.pageY
                    }
                    return c && s ? (Ba(s), O = !0, Qa(q, "release", "onRelease")) : s && !l ? (O = !1, N && (p.snap || p.bounds) && Hi(p.inertia || p.throwProps), Qa(q, "release", "onRelease"), Se && "touchmove" === s.type || -1 !== s.type.indexOf("cancel") || (Qa(q, "click", "onClick"), Re() - se < 300 && Qa(q, "doubleclick", "onDoubleClick"), a = s.target || g, se = Re(), r = function syntheticClick() {
                        se === I || !q.enabled() || q.isPressed || s.defaultPrevented || (a.click ? a.click() : de.createEvent && ((i = de.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, ve, 1, q.pointerEvent.screenX, q.pointerEvent.screenY, q.pointerX, q.pointerY, !1, !1, !1, !1, 0, null), a.dispatchEvent(i)))
                    }, Se || s.defaultPrevented || me.delayedCall(.05, r))) : (Hi(p.inertia || p.throwProps), q.allowEventDefault || !s || !1 === p.dragClickables && re.call(q, s.target) || !l || R && (!Y || R !== Y) || !1 === s.cancelable ? O = !1 : (O = !0, Ba(s)), Qa(q, "release", "onRelease")), pe() && d.duration(q.tween.duration()), l && Qa(q, "dragend", "onDragEnd"), !0
                }
                O && e && u && Ba(e)
            };
        return (t = Draggable.get(g)) && t.kill(), e.startDrag = function (e, t) {
            var o, n, i, a;
            Mi(e || q.pointerEvent, !0), t && !q.hitTest(e || q.pointerEvent) && (o = Pa(e || q.pointerEvent), n = Pa(g), i = Si({
                x: o.left + o.width / 2,
                y: o.top + o.height / 2
            }), a = Si({
                x: n.left + n.width / 2,
                y: n.top + n.height / 2
            }), y -= i.x - a.x, w -= i.y - a.y), q.isDragging || (q.isDragging = F = !0, Qa(q, "dragstart", "onDragStart"))
        }, e.drag = ue, e.endDrag = function (e) {
            return he(e || q.pointerEvent, !0)
        }, e.timeSinceDrag = function () {
            return q.isDragging ? 0 : (Re() - ee) / 1e3
        }, e.timeSinceClick = function () {
            return (Re() - se) / 1e3
        }, e.hitTest = function (e, t) {
            return Draggable.hitTest(q.target, e, t)
        }, e.getDirection = function (e, t) {
            var o, n, i, a, r, s, l = "velocity" === e && De ? e : $(e) && !G ? "element" : "start";
            return "element" === l && (r = Pa(q.target), s = Pa(e)), o = "start" === l ? q.x - T : "velocity" === l ? De.getVelocity(g, V) : r.left + r.width / 2 - (s.left + s.width / 2), G ? o < 0 ? "counter-clockwise" : "clockwise" : (t = t || 2, n = "start" === l ? q.y - M : "velocity" === l ? De.getVelocity(g, Q) : r.top + r.height / 2 - (s.top + s.height / 2), a = (i = Math.abs(o / n)) < 1 / t ? "" : o < 0 ? "left" : "right", i < t && ("" !== a && (a += "-"), a += n < 0 ? "up" : "down"), a)
        }, e.applyBounds = function (e, t) {
            var o, n, i, a, r, s;
            if (e && p.bounds !== e) return p.bounds = e, q.update(!0, t);
            if (Bi(!0), Ei(), k && !pe()) {
                if (o = q.x, n = q.y, S < o ? o = S : o < D && (o = D), A < n ? n = A : n < E && (n = E), (q.x !== o || q.y !== n) && (i = !0, q.x = q.endX = o, G ? q.endRotation = o : q.y = q.endY = n, Ai(P = !0), q.autoScroll && !q.isDragging)) for (La(g.parentNode), a = g, We.scrollTop = null != ve.pageYOffset ? ve.pageYOffset : null != de.documentElement.scrollTop ? de.documentElement.scrollTop : de.body.scrollTop, We.scrollLeft = null != ve.pageXOffset ? ve.pageXOffset : null != de.documentElement.scrollLeft ? de.documentElement.scrollLeft : de.body.scrollLeft; a && !s;) r = (s = Ge(a.parentNode)) ? We : a.parentNode, j && r.scrollTop > r._gsMaxScrollY && (r.scrollTop = r._gsMaxScrollY), U && r.scrollLeft > r._gsMaxScrollX && (r.scrollLeft = r._gsMaxScrollX), a = r;
                q.isThrowing && (i || q.endX > S || q.endX < D || q.endY > A || q.endY < E) && Hi(p.inertia || p.throwProps, i)
            }
            return q
        }, e.update = function (e, t, o) {
            if (t && q.isPressed) {
                var n = getGlobalMatrix(g), i = d.apply({x: q.x - T, y: q.y - M}),
                    a = getGlobalMatrix(g.parentNode, !0);
                a.apply({x: n.e - i.x, y: n.f - i.y}, i), q.x -= i.x - a.e, q.y -= i.y - a.f, Ai(!0), Ji()
            }
            var r = q.x, s = q.y;
            return Ii(!t), e ? q.applyBounds() : (P && o && Ai(!0), Bi(!0)), t && (ge(q.pointerX, q.pointerY), P && Ai(!0)), q.isPressed && !t && (U && .01 < Math.abs(r - q.x) || j && .01 < Math.abs(s - q.y) && !G) && Ji(), q.autoScroll && (La(g.parentNode, q.isDragging), te = q.isDragging, Ai(!0), Ia(g, Qi), Ha(g, Qi)), q
        }, e.enable = function (e) {
            var t, o, n, i = {lazy: !0};
            if (!1 !== p.cursor && (i.cursor = p.cursor || Ae), me.utils.checkPrefix("touchCallout") && (i.touchCallout = "none"), "soft" !== e) {
                for (ta(J, U == j ? "none" : p.allowNativeTouchScrolling && g.scrollHeight === g.clientHeight == (g.scrollWidth === g.clientHeight) || p.allowEventDefault ? "manipulation" : U ? "pan-y" : "pan-x"), o = J.length; -1 < --o;) n = J[o], Ee || za(n, "mousedown", Mi), za(n, "touchstart", Mi), za(n, "click", Ri, !0), me.set(n, i), n.getBBox && n.ownerSVGElement && U != j && me.set(n.ownerSVGElement, {touchAction: p.allowNativeTouchScrolling || p.allowEventDefault ? "manipulation" : U ? "pan-y" : "pan-x"}), p.allowContextMenu || za(n, "contextmenu", zi);
                Wa(J, !1)
            }
            return Ha(g, Qi), u = !0, De && "soft" !== e && De.track(h || g, W ? "x,y" : G ? "rotation" : "top,left"), g._gsDragID = t = "d" + Ie++, He[t] = q, h && (h.enable(), h.element._gsDragID = t), (p.bounds || G) && Ji(), p.bounds && q.applyBounds(), q
        }, e.disable = function (e) {
            for (var t, o = q.isDragging, n = J.length; -1 < --n;) Ma(J[n], "cursor", null);
            if ("soft" !== e) {
                for (ta(J, null), n = J.length; -1 < --n;) t = J[n], Ma(t, "touchCallout", null), Aa(t, "mousedown", Mi), Aa(t, "touchstart", Mi), Aa(t, "click", Ri, !0), Aa(t, "contextmenu", zi);
                Wa(J, !0), b && (Aa(b, "touchcancel", he), Aa(b, "touchend", he), Aa(b, "touchmove", ue)), Aa(de, "mouseup", he), Aa(de, "mousemove", ue)
            }
            return Ia(g, Qi), u = !1, De && "soft" !== e && (De.untrack(h || g, W ? "x,y" : G ? "rotation" : "top,left"), q.tween && q.tween.kill()), h && h.disable(), xa(Ai), q.isDragging = q.isPressed = x = !1, o && Qa(q, "dragend", "onDragEnd"), q
        }, e.enabled = function (e, t) {
            return arguments.length ? e ? q.enable(t) : q.disable(t) : u
        }, e.kill = function () {
            return q.isThrowing = !1, q.tween && q.tween.kill(), q.disable(), me.set(J, {clearProps: "userSelect"}), delete He[g._gsDragID], q
        }, e.revert = function () {
            this.kill(), this.styles && this.styles.revert()
        }, ~o.indexOf("scroll") && (h = e.scrollProxy = new $a(g, function _extend(e, t) {
            for (var o in t) o in e || (e[o] = t[o]);
            return e
        }({
            onKill: function onKill() {
                q.isPressed && he(null)
            }
        }, p)), g.style.overflowY = j && !Te ? "auto" : "hidden", g.style.overflowX = U && !Te ? "auto" : "hidden", g = h.content), G ? n.rotation = 1 : (U && (n[V] = 1), j && (n[Q] = 1)), le.force3D = !("force3D" in p) || p.force3D, Ce(_assertThisInitialized(e)), e.enable(), e
    }

    !function _setDefaults(e, t) {
        for (var o in t) o in e || (e[o] = t[o])
    }(V.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }), V.zIndex = 1e3, V.version = "3.12.5", Y() && me.registerPlugin(V);

    function sb() {
        return "undefined" != typeof window
    }

    function tb() {
        return Q || sb() && (Q = window.gsap) && Q.registerPlugin && Q
    }

    function ub(e) {
        return "string" == typeof e
    }

    function vb(e) {
        return "function" == typeof e
    }

    function xb(e) {
        return void 0 === e
    }

    function Ab() {
        return String.fromCharCode.apply(null, arguments)
    }

    function Lb(e, t, o) {
        var n = j.createElementNS ? j.createElementNS("svg" === e ? de : pe, e) : j.createElement(e);
        return t && (ub(t) && (t = j.querySelector(t)), t.appendChild(n)), "svg" === e && (n.setAttribute("xmlns", de), n.setAttribute("xmlns:xlink", pe)), o && (n.style.cssText = o), n
    }

    function Mb() {
        j.selection ? j.selection.empty() : I.getSelection && I.getSelection().removeAllRanges()
    }

    function Ob(e, t) {
        var o = 0, n = Math.max(0, e._repeat), i = e._first;
        for (i || (o = e.duration()); i;) o = Math.max(o, 999 < i.totalDuration() ? i.endTime(!1) : i._start + i._tDur / i._ts), i = i._next;
        return !t && n ? o * (n + 1) + e._rDelay * n : o
    }

    function Qb(e, t, o, n) {
        var i, a, r;
        return ub(e) && ("=" === e.charAt(1) ? ((i = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))) < 0 && 0 === n && (n = 100), e = n / 100 * t.duration() + i) : isNaN(e) && t.labels && -1 !== t.labels[e] ? e = t.labels[e] : t === q && (0 < (a = e.indexOf("=")) ? (i = parseInt(e.charAt(a - 1) + "1", 10) * parseFloat(e.substr(a + 1)), e = e.substr(0, a - 1)) : i = 0, (r = Q.getById(e)) && (e = function _globalizeTime(e, t) {
            for (var o = e, n = 1 < arguments.length ? +t : o.rawTime(); o;) n = o._start + n / (o._ts || 1), o = o.parent;
            return n
        }(r, o / 100 * r.duration()) + i))), e = isNaN(e) ? o : parseFloat(e), Math.min(100, Math.max(0, e / t.duration() * 100))
    }

    function Ub(t, e, o, n) {
        var i, a;
        if ("mousedown" !== e && "mouseup" !== e || (t.style.cursor = "pointer"), "mousedown" === e && (a = xb(t.onpointerdown) ? xb(t.ontouchstart) ? null : "touchstart" : "pointerdown")) return i = function handler(e) {
            "select" !== e.target.nodeName.toLowerCase() && e.type === a ? (e.stopPropagation(), Ue && (e.preventDefault(), o.call(t, e))) : e.type !== a && o.call(t, e), Ue = !0
        }, t.addEventListener(a, i, n), void ("pointerdown" !== a && t.addEventListener(e, i, n));
        t.addEventListener(e, o, n)
    }

    function Vb(e, t, o) {
        e.removeEventListener(t, o), (t = "mousedown" !== t ? null : xb(e.onpointerdown) ? xb(e.ontouchstart) ? null : "touchstart" : "pointerdown") && e.removeEventListener(t, o)
    }

    function Wb(e, t, o, n) {
        var i, a = e.options, r = a.length;
        for (t += ""; -1 < --r;) if (a[r].innerHTML === t || a[r].value === t) return e.selectedIndex = r, o.innerHTML = a[r].innerHTML, a[r];
        n && ((i = Lb("option", e)).setAttribute("value", t), i.innerHTML = o.innerHTML = ub(n) ? n : t, e.selectedIndex = a.length - 1)
    }

    function Xb(e, t, o) {
        var n = e.options, i = Math.min(n.length - 1, Math.max(0, e.selectedIndex + t));
        return e.selectedIndex = i, o && (o.innerHTML = n[i].innerHTML), n[i].value
    }

    function Yb() {
        var e, t, o, n = O._first;
        if (te) {
            for (e = q._dur; n;) t = n._next, o = n._targets && n._targets[0], vb(o) && o === n.vars.onComplete && !n._dur || o && o._gsIgnore || q.add(n, n._start - n._delay), n = t;
            return e !== q.duration()
        }
    }

    function _b(e) {
        return Q.getById(e) || ne.getById(e) || e === q.vars.id && q
    }

    function ac(e) {
        Q = e || tb(), U || Q && sb() && (j = document, K = j.documentElement, I = window, ae = Q.core.context || function () {
        }, Q.registerPlugin(V), (O = Q.globalTimeline)._sort = !0, O.autoRemoveChildren = !1, J = Q.core.Animation, (ne = Q.timeline({
            data: "indy",
            autoRemoveChildren: !0,
            smoothChildTiming: !0
        })).kill(), ne._dp = 0, ne.to({}, {duration: 1e12}), q = Q.timeline({
            data: "root",
            id: "Global Timeline",
            autoRemoveChildren: !1,
            smoothChildTiming: !0,
            parent: ne
        }, 0), ee = Q.to(q, {
            duration: 1,
            time: 1,
            ease: "none",
            data: "root",
            id: "_rootTween",
            paused: !0,
            immediateRender: !1,
            parent: ne
        }, 0), O.killTweensOf = function (e, t, o) {
            q.killTweensOf(e, t, o), q.killTweensOf.call(O, e, t, o)
        }, ne._start = Q.ticker.time, Q.ticker.add(function (e) {
            return ne.render(e - ne._start)
        }), O._start += O._time, q._start = O._time = O._tTime = 0, (ie = function _delayedCall(e, t, o, n) {
            return Q.to(t, {
                delay: e,
                duration: 0,
                onComplete: t,
                onReverseComplete: t,
                onCompleteParams: o,
                onReverseCompleteParams: o,
                callbackScope: n,
                parent: ne
            }, ne._time)
        })(.01, function () {
            return te ? te.update() : Yb()
        }), ie(2, function () {
            var e, t, o;
            if (!te) for (Yb(), e = q._first, o = q._start; e;) t = e._next, e._tDur !== e._tTime || !e._dur && 1 !== e.progress() ? O.add(e, e._start - e._delay + o) : e.kill(), e = t;
            2 < Ze.globalRecordingTime ? ie(Ze.globalRecordingTime - 2, function () {
                te && te.update(), O.autoRemoveChildren = !0
            }) : O.autoRemoveChildren = !0, se = !1
        }), U = 1)
    }

    function bc(e, t) {
        t.globalSync || e.parent === O || O.add(e, O.time())
    }

    var Q, U, j, K, I, q, J, ee, te, oe, O, ne, ie, ae, re, se = !0, le = 0, F = "GSDevTools",
        W = Ab(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        G = Ab(103, 115, 97, 112, 46, 99, 111, 109), ce = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, de = (function (e) {
            var t = "undefined" != typeof window,
                o = true,
                // o = 0 === (t ? window.location.href : "").indexOf(Ab(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(Ab(108, 111, 99, 97, 108, 104, 111, 115, 116)) || ce.test(e) || (t ? window.location.hostname : "").split(".").pop() === Ab(108, 111, 99, 97, 108),
                n = [W, G, Ab(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), Ab(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), Ab(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), Ab(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), Ab(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), Ab(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), Ab(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), Ab(99, 100, 112, 110, 46, 105, 111), Ab(112, 101, 110, 115, 46, 105, 111), Ab(103, 97, 110, 110, 111, 110, 46, 116, 118), Ab(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), Ab(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), Ab(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), Ab(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), Ab(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), Ab(112, 108, 110, 107, 114, 46, 99, 111), Ab(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), Ab(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), Ab(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), Ab(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), Ab(99, 115, 98, 46, 97, 112, 112), Ab(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), Ab(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), Ab(99, 111, 100, 105, 101, 114, 46, 105, 111), Ab(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), Ab(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), Ab(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), Ab(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), Ab(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), Ab(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
                i = n.length;
            for (setTimeout(function checkWarn() {
                if (t) if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", checkWarn); else {
                    document.removeEventListener("readystatechange", checkWarn);
                    var e = "object" == typeof Q ? Q : t && window.gsap;
                    t && window.console && !window._gsapWarned && "object" == typeof e && !1 !== e.config().trialWarn && false && (console.log(Ab(37, 99, 87, 97, 114, 110, 105, 110, 103), Ab(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(Ab(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + F + Ab(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(Ab(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), Ab(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                }
            }, 50); -1 < --i;) if (-1 !== e.indexOf(n[i])) return;
            o || setTimeout(function () {}, 4e3)
        }("undefined" != typeof window ? window.location.host : ""), "http://www.w3.org/2000/svg"),
        pe = "http://www.w3.org/1999/xhtml", ue = 0, ge = {}, he = function () {
            try {
                return sessionStorage.setItem("gsTest", "1"), sessionStorage.removeItem("gsTest"), !0
            } catch (e) {
                return !1
            }
        }(), Ue = !0, Ze = function GSDevTools(a) {
            U || (ac(), Q || console.warn("Please gsap.registerPlugin(GSDevTools)")), this.vars = a = a || {}, a.animation && (GSDevTools.getByAnimation(a.animation) || {
                kill: function kill() {
                    return 0
                }
            }).kill(), a.id = a.id || (ub(a.animation) ? a.animation : ue++), ge[a.id + ""] = this, "globalSync" in a || (a.globalSync = !a.animation);

            function lo(e) {
                return n.querySelector(e)
            }

            function mo(e, t) {
                return !1 !== a.persist && he && sessionStorage.setItem("gs-dev-" + e + a.id, t), t
            }

            function no(e) {
                var t;
                if (!1 !== a.persist && he) return t = sessionStorage.getItem("gs-dev-" + e + a.id), "animation" === e ? t : "loop" === e ? "true" === t : parseFloat(t)
            }

            function Uo(c, d, p) {
                return function (e) {
                    var t, o = b.getBoundingClientRect(), n = c.getBoundingClientRect(), i = n.width * d,
                        a = Q.getProperty(c, "x"), r = o.left - n.left - i + a, s = o.right - n.right + (n.width - i) + a,
                        l = r;
                    p && (c !== M && (t = M.getBoundingClientRect()).left && (r += t.left + t.width - o.left), c !== k && (t = k.getBoundingClientRect()).left && (s -= o.left + o.width - t.left)), m = C, this.applyBounds({
                        minX: r,
                        maxX: s
                    }), u = v.duration() / o.width, g = -l * u, f ? v.pause() : v.pause(g + u * this.x), this.target === x && (this.activated && (this.allowEventDefault = !1), this.activated = !0), h = !0
                }
            }

            function Wo() {
                S = 0, D = 100, M.style.left = "0%", k.style.left = "100%", mo("in", S), mo("out", D), Y(!0)
            }

            function $o(e) {
                if (!B.isPressed) {
                    var t = e.target.getBoundingClientRect(),
                        o = ((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width * 100;
                    if (o < S) return S = o = Math.max(0, o), M.style.left = S + "%", void N.startDrag(e);
                    if (D < o) return D = o = Math.min(100, o), k.style.left = D + "%", void R.startDrag(e);
                    v.progress(o / 100).pause(), Y(!0), B.startDrag(e)
                }
            }

            function cp() {
                if (!B.isPressed) {
                    bc(v, a);
                    var e = v._targets && v._targets[0];
                    e === i && e.seek(s + (l - s) * S / 100), v.progress(S / 100, !0), C || v.resume()
                }
            }

            function dp(e) {
                if (mo("loop", d = e), d) {
                    if (L.play(), v.progress() >= D / 100) {
                        var t = v._targets && v._targets[0];
                        t === i && t.seek(s + (l - s) * S / 100), i._repeat && !S && 100 === D ? v.totalProgress(0, !0) : v.progress(S / 100, !0), H()
                    }
                } else L.reverse()
            }

            function ep() {
                return dp(!d)
            }

            function fp() {
                var e, t, o = function _getChildrenOf(e, t) {
                    for (var o = [], n = 0, i = Q.core.Tween, a = e._first; a;) a instanceof i ? a.vars.id && (o[n++] = a) : (t && a.vars.id && (o[n++] = a), n = (o = o.concat(_getChildrenOf(a, t))).length), a = a._next;
                    return o
                }(r && !a.globalSync ? r : q, !0), n = A.children, i = 0;
                for (r && !a.globalSync ? o.unshift(r) : a.hideGlobalTimeline || o.unshift(q), t = 0; t < o.length; t++) (e = n[t] || Lb("option", A)).animation = o[t], i = t && o[t].vars.id === o[t - 1].vars.id ? i + 1 : 0, e.setAttribute("value", e.innerHTML = o[t].vars.id + (i ? " [" + i + "]" : o[t + 1] && o[t + 1].vars.id === o[t].vars.id ? " [0]" : ""));
                for (; t < n.length; t++) A.removeChild(n[t])
            }

            function gp(e) {
                var t, o, n = parseFloat(z.options[z.selectedIndex].value) || 1;
                if (!arguments.length) return i;
                if (ub(e) && (e = _b(e)), e instanceof J || console.warn("GSDevTools error: invalid animation."), e.scrollTrigger && console.warn("GSDevTools can't work with ScrollTrigger-based animations; either the scrollbar -OR- the GSDevTools scrubber can control the animation."), e !== i) {
                    if (i && (i._inProgress = S, i._outProgress = D), i = e, v && (n = v.timeScale(), v._targets && v._targets[0] === r && (r.resume(), v.kill())), S = i._inProgress || 0, D = i._outProgress || 100, M.style.left = S + "%", k.style.left = D + "%", c && (mo("animation", i.vars.id), mo("in", S), mo("out", D)), s = 0, o = a.maxDuration || Math.min(1e3, Ob(i)), i === q || a.globalSync) {
                        if (Yb(), v = ee, te && te !== p && console.warn("Error: GSDevTools can only have one instance that's globally synchronized."), te = p, i !== q) for (99999999 < (l = (t = i).totalDuration()) && (l = t.duration()); t.parent;) s = s / t._ts + t._start, l = l / t._ts + t._start, t = t.parent; else l = q.duration();
                        o < l - s && (l = s + o), q.pause(s), ee.vars.time = l, ee.invalidate(), ee.duration(l - s).timeScale(n), C ? ee.progress(1, !0).pause(0, !0) : ie(.01, function () {
                            ee.resume().progress(S / 100), C && H()
                        })
                    } else {
                        if (te === p && (te = null), s = Math.min(S * i.duration(), i.time()), i !== r && r) {
                            for (99999999 < (l = (t = i).totalDuration()) && (l = t.duration()); t.parent.parent && t !== r;) s = s / (t._ts || t._pauseTS) + t._start, l = l / (t._ts || t._pauseTS) + t._start, t = t.parent;
                            o < l - s && (l = s + o), r.pause(s), v = Q.to(r, {
                                duration: l - s,
                                time: l,
                                ease: "none",
                                data: "root",
                                parent: ne
                            }, ne._time)
                        } else v = i, !d && v._repeat && dp(!0);
                        v.timeScale(n), ee.pause(), q.resume(), v.seek(0)
                    }
                    _.innerHTML = v.duration().toFixed(2), Wb(A, i.vars.id, E)
                }
            }

            function ip(e) {
                gp(A.options[A.selectedIndex].animation), e.target && e.target.blur && e.target.blur(), C && H()
            }

            function jp() {
                var e, t = parseFloat(z.options[z.selectedIndex].value) || 1;
                v.timeScale(t), mo("timeScale", t), C || (v.progress() >= D / 100 ? ((e = v._targets && v._targets[0]) === i && e.seek(s + (l - s) * S / 100), v.progress(S / 100, !0).pause()) : v.pause(), ie(.01, function () {
                    return v.resume()
                })), X.innerHTML = t + "x", z.blur && z.blur()
            }

            function mp(e) {
                V.hitTest(e, n) || B.isDragging || N.isDragging || R.isDragging || G.restart(!0)
            }

            function np() {
                W || (F.play(), G.pause(), W = !0)
            }

            function op() {
                G.pause(), W && (F.reverse(), W = !1)
            }

            function rp(e) {
                se && !le && (le = q._start), c = !e, (r = function _parseAnimation(e) {
                    return e instanceof J ? e : e ? Q.getById(e) : null
                }(a.animation)) && !r.vars.id && (r.vars.id = "[no id]"), Yb(), fp();
                var t = _b(no("animation"));
                t && (t._inProgress = no("in") || 0, t._outProgress = no("out") || 100), a.paused && I(), i = null, gp(r || t || q);
                var o = a.timeScale || no("timeScale"), n = t === i;
                o && (Wb(z, o, X, o + "x"), v.timeScale(o)), 100 === (S = ("inTime" in a ? Qb(a.inTime, i, 0, 0) : n ? t._inProgress : 0) || 0) && !a.animation && t && (gp(q), S = Qb(a.inTime, i, 0, 0) || 0), S && (M.style.left = S + "%", M.style.display = k.style.display = "block"), (D = ("outTime" in a ? Qb(a.outTime, i, 100, S) : n ? t._outProgress : 0) || 100) < S && (D = 100), 100 !== D && (k.style.left = D + "%", M.style.display = k.style.display = "block"), (d = "loop" in a ? a.loop : no("loop")) && dp(!0), a.paused && v.progress(S / 100, !0).pause(), se && i === q && le && a.globalSync && !C && v.time(-le, !0), Y(!0)
            }

            var u, g, h, f, m, i, v, r, s, l, c, e, d, p = this, n = function _createRootElement(e, t, o) {
                    re || (Lb("style", K).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", re = !0), ub(e) && (e = j.querySelector(e));
                    var n = Lb("div", e || K.getElementsByTagName("body")[0] || K);
                    return n.setAttribute("class", "gs-dev-tools" + (t ? " minimal" : "")), n.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg><svg class=out-point viewBox="0 0 15 26" xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span><svg class=select-arrow viewBox="0 0 12.05 6.73" xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38" xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg><svg class=play-pause viewBox="0 0 20.97 25.67" xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88" class="gs-btn-white play-1" style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85" class="gs-btn-white play-2" style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38" xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67" xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://gsap.com/docs/v3/Plugins/GSDevTools?source=GSDevTools" target=_blank title=Docs><svg class=logo viewBox="0 0 100 100" xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z" style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z" style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z" style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', e && (n.style.position = "absolute", n.style.top = t ? "calc(100% - 42px)" : "calc(100% - 51px)"), o && (ub(o) ? n.style.cssText = o : function _isObject(e) {
                        return "object" == typeof e
                    }(o) && (o.data = "root", Q.set(n, o).kill()), n.style.top && (n.style.bottom = "auto"), n.style.width && Q.set(n, {
                        xPercent: -50,
                        left: "50%",
                        right: "auto",
                        data: "root"
                    }).kill()), !t && n.offsetWidth < 600 && (n.setAttribute("class", "gs-dev-tools minimal"), e && (n.style.top = "calc(100% - 42px)")), n
                }(a.container, a.minimal, a.css), x = lo(".playhead"), b = lo(".timeline-track"), y = lo(".progress-bar"),
                w = lo(".time"), _ = lo(".duration"), T = 0, M = lo(".in-point"), k = lo(".out-point"), S = 0, D = 100,
                A = lo(".animation-list"), E = lo(".animation-label"), t = lo(".play-pause"),
                o = function _buildPlayPauseMorph(e) {
                    var t = Q.timeline({
                        data: "root", parent: ne, onComplete: function onComplete() {
                            return t.kill()
                        }
                    }, ne._time);
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
                }(t), C = !1, P = lo(".loop"), L = function _buildLoopAnimation(e) {
                    var t = Q.timeline({
                        data: "root", id: "loop", parent: ne, paused: !0, onComplete: function onComplete() {
                            return t.kill()
                        }
                    }, ne._time);
                    return t.to(e, {
                        duration: .5,
                        rotation: 360,
                        ease: "power3.inOut",
                        transformOrigin: "50% 50%"
                    }).to(e.querySelectorAll(".loop-path"), {duration: .5, fill: "#91e600", ease: "none"}, 0), t
                }(P), z = lo(".time-scale select"), X = lo(".time-scale-label"), B = V.create(x, {
                    type: "x",
                    cursor: "ew-resize",
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    onPress: Uo(x, .5, !0),
                    onDrag: function onDrag() {
                        var e = g + u * this.x;
                        e < 0 ? e = 0 : e > v._dur && (e = v._dur), f || v.time(e), y.style.width = Math.min(D - S, Math.max(0, e / v._dur * 100 - S)) + "%", w.innerHTML = e.toFixed(2)
                    },
                    onRelease: function onRelease() {
                        C || v.resume()
                    }
                })[0], N = V.create(M, {
                    type: "x",
                    cursor: "ew-resize",
                    zIndexBoost: !1,
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    onPress: Uo(M, 1, !0),
                    onDoubleClick: Wo,
                    onDrag: function onDrag() {
                        S = (g + u * this.x) / v.duration() * 100, v.progress(S / 100), Y(!0)
                    },
                    onRelease: function onRelease() {
                        S < 0 && (S = 0), Mb(), M.style.left = S + "%", mo("in", S), Q.set(M, {
                            x: 0,
                            data: "root",
                            display: "block"
                        }), C || v.resume()
                    }
                })[0], R = V.create(k, {
                    type: "x",
                    cursor: "ew-resize",
                    allowNativeTouchScrolling: !1,
                    allowEventDefault: !0,
                    zIndexBoost: !1,
                    onPress: Uo(k, 0, !0),
                    onDoubleClick: Wo,
                    onDrag: function onDrag() {
                        D = (g + u * this.x) / v.duration() * 100, v.progress(D / 100), Y(!0)
                    },
                    onRelease: function onRelease() {
                        100 < D && (D = 100), Mb(), k.style.left = D + "%", mo("out", D), Q.set(k, {
                            x: 0,
                            data: "root",
                            display: "block"
                        }), m || (H(), v.resume())
                    }
                })[0], Y = function updateProgress(e) {
                    if (!B.isPressed || !0 === e) {
                        var t, o = d || -1 !== i._repeat ? 100 * v.progress() || 0 : i.totalTime() / i.duration() * 100,
                            n = i._repeat && i._rDelay && i.totalTime() % (i.duration() + i._rDelay) > i.duration();
                        100 < o && (o = 100), D <= o ? !d || v.paused() || B.isDragging ? (o === D && -1 !== i._repeat || (o = D, v.progress(o / 100)), !C && (D < 100 || 1 === i.totalProgress() || -1 === i._repeat) && I()) : n || (o = S, (t = v._targets && v._targets[0]) === i && t.seek(s + (l - s) * S / 100), 0 < i._repeat && !S && 100 === D ? 1 === i.totalProgress() && v.totalProgress(0, !0).resume() : v.progress(o / 100, !0).resume()) : o < S && (o = S, v.progress(o / 100, !0)), o === T && !0 !== e || (y.style.left = S + "%", y.style.width = Math.max(0, o - S) + "%", x.style.left = o + "%", w.innerHTML = v._time.toFixed(2), _.innerHTML = v._dur.toFixed(2), h && (x.style.transform = "translate(-50%,0)", x._gsap.x = "0px", x._gsap.xPercent = -50, h = !1), T = o), v.paused() !== C && O()
                    }
                }, H = function play() {
                    if (v.progress() >= D / 100) {
                        bc(v, a);
                        var e = v._targets && v._targets[0];
                        e === i && e.seek(s + (l - s) * S / 100), v._repeat && !S ? v.totalProgress(0, !0) : v.reversed() || v.progress(S / 100, !0)
                    }
                    o.play(), v.resume(), C && p.update(), C = !1
                }, I = function pause() {
                    o.reverse(), v && v.pause(), C = !0
                }, O = function togglePlayPause() {
                    (C ? H : I)()
                }, F = Q.to([lo(".gs-bottom"), lo(".gs-top")], {
                    duration: .3,
                    autoAlpha: 0,
                    y: 50,
                    ease: "power2.in",
                    data: "root",
                    paused: !0,
                    parent: ne
                }, ne._time), W = !1, G = ie(1.3, np).pause();
            Ub(A, "change", ip), Ub(A, "mousedown", fp), Ub(t, "mousedown", O), Ub(lo(".seek-bar"), "mousedown", $o), Ub(lo(".rewind"), "mousedown", cp), Ub(P, "mousedown", ep), Ub(z, "change", jp), "auto" === a.visibility ? (Ub(n, "mouseout", mp), Ub(n, "mouseover", op)) : "hidden" === a.visibility && (W = !0, F.progress(1)), !1 !== a.keyboard && (oe && a.keyboard ? console.warn("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (oe = p, Ub(K, "keydown", e = function keyboardHandler(e) {
                var t, o = e.keyCode ? e.keyCode : e.which;
                32 === o ? O() : 38 === o ? (t = parseFloat(Xb(z, -1, X)), v.timeScale(t), mo("timeScale", t)) : 40 === o ? (t = parseFloat(Xb(z, 1, X)), v.timeScale(t), mo("timeScale", t)) : 37 === o ? cp() : 39 === o ? v.progress(D / 100) : 76 === o ? ep() : 72 === o ? function toggleHide() {
                    (W ? op : np)()
                }() : 73 === o ? (S = 100 * v.progress(), mo("in", S), M.style.left = S + "%", Y(!0)) : 79 === o && (D = 100 * v.progress(), mo("out", D), k.style.left = D + "%", Y(!0))
            }))), Q.set(x, {xPercent: -50, x: 0, data: "root"}), Q.set(M, {
                xPercent: -100,
                x: 0,
                data: "root"
            }), M._gsIgnore = k._gsIgnore = x._gsIgnore = t._gsIgnore = P._gsIgnore = !0, Q.killTweensOf([M, k, x]), rp(se), se && ie(1e-4, rp, [!1], this), Q.ticker.add(Y), this.update = function (e) {
                te === p && (ee.paused() && !e || Yb(), function updateRootDuration() {
                    var e, t, o;
                    i === q && (e = q._time, q.progress(1, !0).time(e, !0), e = (ee._dp._time - ee._start) * ee._ts, 1e3 === (o = Math.min(1e3, q.duration())) && (o = Math.min(1e3, Ob(q))), 1 != (t = ee.duration() / o) && o && (S *= t, D < 100 && (D *= t), ee.seek(0), ee.vars.time = o, ee.invalidate(), ee.duration(o), ee.time(e), _.innerHTML = o.toFixed(2), M.style.left = S + "%", k.style.left = D + "%", Y(!0)))
                }())
            }, this.kill = this.revert = function () {
                Vb(A, "change", ip), Vb(A, "mousedown", fp), Vb(t, "mousedown", O), Vb(lo(".seek-bar"), "mousedown", $o), Vb(lo(".rewind"), "mousedown", cp), Vb(P, "mousedown", ep), Vb(z, "change", jp), B.disable(), N.disable(), R.disable(), Q.ticker.remove(Y), Vb(n, "mouseout", mp), Vb(n, "mouseover", op), n.parentNode.removeChild(n), te === p && (te = null), oe === p && (oe = null, Vb(K, "keydown", e)), delete ge[a.id + ""]
            }, this.minimal = function (e) {
                var t, o = n.classList.contains("minimal");
                if (!arguments.length || o === e) return o;
                e ? n.classList.add("minimal") : n.classList.remove("minimal"), a.container && (n.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)"), B.isPressed && (f = !0, B.endDrag(B.pointerEvent), f = !1, t = 100 * v.progress(), y.style.width = Math.max(0, t - S) + "%", x.style.left = t + "%", x.style.transform = "translate(-50%,0)", x._gsap.x = "0px", x._gsap.xPercent = -50, B.startDrag(B.pointerEvent, !0))
            }, this.animation = gp, this.updateList = fp, ae(this)
        };
    Ze.version = "3.12.5", Ze.globalRecordingTime = 2, Ze.getById = function (e) {
        return e ? ge[e] : te
    }, Ze.getByAnimation = function (e) {
        for (var t in ub(e) && (e = Q.getById(e)), ge) if (ge[t].animation() === e) return ge[t]
    }, Ze.create = function (e) {
        return new Ze(e)
    }, Ze.register = ac, tb() && Q.registerPlugin(Ze), e.GSDevTools = Ze, e.default = Ze;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    } else {
        delete e.default
    }
});
