! function(a, b) {
    function c(a) {
        var b, c, d = L[a] = {};
        for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++) d[a[b]] = !0;
        return d
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(O, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : K.isNumeric(d) ? parseFloat(d) : N.test(d) ? K.parseJSON(d) : d
                } catch (f) {}
                K.data(a, c, d)
            } else d = b
        }
        return d
    }

    function e(a) {
        for (var b in a)
            if (("data" !== b || !K.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function f(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            f = b + "mark",
            g = K._data(a, d);
        !g || "queue" !== c && K._data(a, e) || "mark" !== c && K._data(a, f) || setTimeout(function() {
            K._data(a, e) || K._data(a, f) || (K.removeData(a, d, !0), g.fire())
        }, 0)
    }

    function g() {
        return !1
    }

    function h() {
        return !0
    }

    function i(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function j(a, b, c) {
        if (b = b || 0, K.isFunction(b)) return K.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return K.grep(a, function(a, d) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = K.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (la.test(b)) return K.filter(b, d, !c);
            b = K.filter(b, d)
        }
        return K.grep(a, function(a, d) {
            return K.inArray(a, b) >= 0 === c
        })
    }

    function k(a) {
        var b = pa.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function l(a, b) {
        return K.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function m(a, b) {
        if (1 === b.nodeType && K.hasData(a)) {
            var c, d, e, f = K._data(a),
                g = K._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) K.event.add(b, c + (h[c][d].namespace ? "." : "") + h[c][d].namespace, h[c][d], h[c][d].data)
            }
            g.data && (g.data = K.extend({}, g.data))
        }
    }

    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(K.expando))
    }

    function o(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function p(a) {
        ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
    }

    function q(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? p(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), p)
    }

    function r(a) {
        var b = H.createElement("div");
        return Da.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
    }

    function s(a, b) {
        b.src ? K.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : K.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Ba, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function t(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            e = "width" === b ? Oa : Pa,
            f = 0,
            g = e.length;
        if (d > 0) {
            if ("border" !== c)
                for (; g > f; f++) c || (d -= parseFloat(K.css(a, "padding" + e[f])) || 0), "margin" === c ? d += parseFloat(K.css(a, c + e[f])) || 0 : d -= parseFloat(K.css(a, "border" + e[f] + "Width")) || 0;
            return d + "px"
        }
        if (d = Ea(a, b, b), (0 > d || null == d) && (d = a.style[b] || 0), d = parseFloat(d) || 0, c)
            for (; g > f; f++) d += parseFloat(K.css(a, "padding" + e[f])) || 0, "padding" !== c && (d += parseFloat(K.css(a, "border" + e[f] + "Width")) || 0), "margin" === c && (d += parseFloat(K.css(a, c + e[f])) || 0);
        return d + "px"
    }

    function u(a) {
        return function(b, c) {
            if ("string" != typeof b && (c = b, b = "*"), K.isFunction(c))
                for (var d, e, f, g = b.toLowerCase().split(cb), h = 0, i = g.length; i > h; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function v(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === gb; k > j && (l || !h); j++) h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = v(a, c, d, e, h, g)));
        return !l && h || g["*"] || (h = v(a, c, d, e, "*", g)), h
    }

    function w(a, c) {
        var d, e, f = K.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && K.extend(!0, a, e)
    }

    function x(a, b, c, d) {
        if (K.isArray(b)) K.each(b, function(b, e) {
            c || Ta.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e || K.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (c || null == b || "object" != typeof b) d(a, b);
        else
            for (var e in b) x(a + "[" + e + "]", b[e], c, d)
    }

    function y(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        for (;
            "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function z(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d, e, f, g, h, i, j, k, l = a.dataTypes,
            m = {},
            n = l.length,
            o = l[0];
        for (d = 1; n > d; d++) {
            if (1 === d)
                for (e in a.converters) "string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
            if (g = o, o = l[d], "*" === o) o = g;
            else if ("*" !== g && g !== o) {
                if (h = g + " " + o, i = m[h] || m["* " + o], !i) {
                    k = b;
                    for (j in m)
                        if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) {
                            j = m[j], j === !0 ? i = k : k === !0 && (i = j);
                            break
                        }
                }
                i || k || K.error("No conversion from " + h.replace(" ", " to ")), i !== !0 && (c = i ? i(c) : k(j(c)))
            }
        }
        return c
    }

    function A() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function B() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function C() {
        return setTimeout(D, 0), sb = K.now()
    }

    function D() {
        sb = b
    }

    function E(a, b) {
        var c = {};
        return K.each(wb.concat.apply([], wb.slice(0, b)), function() {
            c[this] = a
        }), c
    }

    function F(a) {
        if (!tb[a]) {
            var b = H.body,
                c = K("<" + a + ">").appendTo(b),
                d = c.css("display");
            c.remove(), ("none" === d || "" === d) && (pb || (pb = H.createElement("iframe"), pb.frameBorder = pb.width = pb.height = 0), b.appendChild(pb), qb && pb.createElement || (qb = (pb.contentWindow || pb.contentDocument).document, qb.write(("CSS1Compat" === H.compatMode ? "<!doctype html>" : "") + "<html><body>"), qb.close()), c = qb.createElement(a), qb.body.appendChild(c), d = K.css(c, "display"), b.removeChild(pb)), tb[a] = d
        }
        return tb[a]
    }

    function G(a) {
        return K.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var H = a.document,
        I = a.navigator,
        J = a.location,
        K = function() {
            function c() {
                if (!h.isReady) {
                    try {
                        H.documentElement.doScroll("left")
                    } catch (a) {
                        return void setTimeout(c, 1)
                    }
                    h.ready()
                }
            }
            var d, e, f, g, h = function(a, b) {
                    return new h.fn.init(a, b, d)
                },
                i = a.$dy,
                j = a.$dy,
                k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                l = /\S/,
                m = /^\s+/,
                n = /\s+$/,
                o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                p = /^[\],:{}\s]*$/,
                q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                s = /(?:^|:|,)(?:\s*\[)+/g,
                t = /(webkit)[ \/]([\w.]+)/,
                u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                v = /(msie) ([\w.]+)/,
                w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                x = /-([a-z]|[0-9])/gi,
                y = /^-ms-/,
                z = function(a, b) {
                    return (b + "").toUpperCase()
                },
                A = I.userAgent,
                B = Object.prototype.toString,
                C = Object.prototype.hasOwnProperty,
                D = Array.prototype.push,
                E = Array.prototype.slice,
                F = String.prototype.trim,
                G = Array.prototype.indexOf,
                J = {};
            return h.fn = h.prototype = {
                constructor: h,
                init: function(a, c, d) {
                    var e, f, g, i;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && H.body) return this.context = H, this[0] = H.body, this.selector = a, this.length = 1, this;
                    if ("string" == typeof a) {
                        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : k.exec(a), !e || !e[1] && c) return !c || c.$dy ? (c || d).find(a) : this.constructor(c).find(a);
                        if (e[1]) return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : H, g = o.exec(a), g ? h.isPlainObject(c) ? (a = [H.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
                        if (f = H.getElementById(e[2]), f && f.parentNode) {
                            if (f.id !== e[2]) return d.find(a);
                            this.length = 1, this[0] = f
                        }
                        return this.context = H, this.selector = a, this
                    }
                    return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
                },
                selector: "",
                $dy: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return E.call(this, 0)
                },
                get: function(a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    return h.isArray(a) ? D.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
                },
                each: function(a, b) {
                    return h.each(this, a, b)
                },
                ready: function(a) {
                    return h.bindReady(), f.add(a), this
                },
                eq: function(a) {
                    return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(h.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: D,
                sort: [].sort,
                splice: [].splice
            }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function() {
                var a, c, d, e, f, g, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" == typeof i || h.isFunction(i) || (i = {}), k === j && (i = this, --j); k > j; j++)
                    if (null != (a = arguments[j]))
                        for (c in a) d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
                return i
            }, h.extend({
                noConflict: function(b) {
                    return a.$dy === h && (a.$dyo = j), b && a.$dy === h && (a.$dy = i), h
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? h.readyWait++ : h.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
                        if (!H.body) return setTimeout(h.ready, 1);
                        if (h.isReady = !0, a !== !0 && --h.readyWait > 0) return;
                        f.fireWith(H, [h]), h.fn.trigger && h(H).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!f) {
                        if (f = h.Callbacks("once memory"), "complete" === H.readyState) return setTimeout(h.ready, 1);
                        if (H.addEventListener) H.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1);
                        else if (H.attachEvent) {
                            H.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
                            var b = !1;
                            try {
                                b = null == a.frameElement
                            } catch (d) {}
                            H.documentElement.doScroll && b && c()
                        }
                    }
                },
                isFunction: function(a) {
                    return "function" === h.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === h.type(a)
                },
                isWindow: function(a) {
                    return a && "object" == typeof a && "setInterval" in a
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return null == a ? String(a) : J[B.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || C.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, "@").replace(r, "]").replace(s, "")) ? new Function("return " + b)() : void h.error("Invalid JSON: " + b)) : null
                },
                parseXML: function(c) {
                    var d, e;
                    try {
                        a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (f) {
                        d = b
                    }
                    return d && d.documentElement && !d.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + c), d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && l.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(y, "ms-").replace(x, z)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var e, f = 0,
                        g = a.length,
                        i = g === b || h.isFunction(a);
                    if (d)
                        if (i) {
                            for (e in a)
                                if (c.apply(a[e], d) === !1) break
                        } else
                            for (; g > f && c.apply(a[f++], d) !== !1;);
                    else if (i) {
                        for (e in a)
                            if (c.call(a[e], e, a[e]) === !1) break
                    } else
                        for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
                    return a
                },
                trim: F ? function(a) {
                    return null == a ? "" : F.call(a)
                } : function(a) {
                    return null == a ? "" : a.toString().replace(m, "").replace(n, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (null != a) {
                        var d = h.type(a);
                        null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (G) return G.call(b, a, c);
                        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if ("number" == typeof c.length)
                        for (var f = c.length; f > e; e++) a[d++] = c[e];
                    else
                        for (; c[e] !== b;) a[d++] = c[e++];
                    return a.length = d, a
                },
                grep: function(a, b, c) {
                    var d, e = [];
                    c = !!c;
                    for (var f = 0, g = a.length; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function(a, c, d) {
                    var e, f, g = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
                    if (k)
                        for (; j > i; i++) e = c(a[i], i, d), null != e && (g[g.length] = e);
                    else
                        for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
                    return g.concat.apply([], g)
                },
                guid: 1,
                proxy: function(a, c) {
                    if ("string" == typeof c) {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!h.isFunction(a)) return b;
                    var e = E.call(arguments, 2),
                        f = function() {
                            return a.apply(c, e.concat(E.call(arguments)))
                        };
                    return f.guid = a.guid = a.guid || f.guid || h.guid++, f
                },
                access: function(a, c, d, e, f, g) {
                    var i = a.length;
                    if ("object" == typeof c) {
                        for (var j in c) h.access(a, j, c[j], e, f, d);
                        return a
                    }
                    if (d !== b) {
                        e = !g && e && h.isFunction(d);
                        for (var k = 0; i > k; k++) f(a[k], c, e ? d.call(a[k], k, f(a[k], c)) : d, g);
                        return a
                    }
                    return i ? f(a[0], c) : b
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && w.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
                        return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(H);
                    return a
                },
                browser: {}
            }), h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), e = h.uaMatch(A), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), l.test(" ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(H), H.addEventListener ? g = function() {
                H.removeEventListener("DOMContentLoaded", g, !1), h.ready()
            } : H.attachEvent && (g = function() {
                "complete" === H.readyState && (H.detachEvent("onreadystatechange", g), h.ready())
            }), h
        }(),
        L = {};
    K.Callbacks = function(a) {
        a = a ? L[a] || c(a) : {};
        var d, e, f, g, h, i = [],
            j = [],
            k = function(b) {
                var c, d, e, f;
                for (c = 0, d = b.length; d > c; c++) e = b[c], f = K.type(e), "array" === f ? k(e) : "function" === f && (a.unique && m.has(e) || i.push(e))
            },
            l = function(b, c) {
                for (c = c || [], d = !a.memory || [b, c], e = !0, h = f || 0, f = 0, g = i.length; i && g > h; h++)
                    if (i[h].apply(b, c) === !1 && a.stopOnFalse) {
                        d = !0;
                        break
                    }
                e = !1, i && (a.once ? d === !0 ? m.disable() : i = [] : j && j.length && (d = j.shift(), m.fireWith(d[0], d[1])))
            },
            m = {
                add: function() {
                    if (i) {
                        var a = i.length;
                        k(arguments), e ? g = i.length : d && d !== !0 && (f = a, l(d[0], d[1]))
                    }
                    return this
                },
                remove: function() {
                    if (i)
                        for (var b = arguments, c = 0, d = b.length; d > c; c++)
                            for (var f = 0; f < i.length && (b[c] !== i[f] || (e && g >= f && (g--, h >= f && h--), i.splice(f--, 1), !a.unique)); f++);
                    return this
                },
                has: function(a) {
                    if (i)
                        for (var b = 0, c = i.length; c > b; b++)
                            if (a === i[b]) return !0;
                    return !1
                },
                empty: function() {
                    return i = [], this
                },
                disable: function() {
                    return i = j = d = b, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = b, d && d !== !0 || m.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(b, c) {
                    return j && (e ? a.once || j.push([b, c]) : a.once && d || l(b, c)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return m
    };
    var M = [].slice;
    K.extend({
        Deferred: function(a) {
            var b, c = K.Callbacks("once memory"),
                d = K.Callbacks("once memory"),
                e = K.Callbacks("memory"),
                f = "pending",
                g = {
                    resolve: c,
                    reject: d,
                    notify: e
                },
                h = {
                    done: c.add,
                    fail: d.add,
                    progress: e.add,
                    state: function() {
                        return f
                    },
                    isResolved: c.fired,
                    isRejected: d.fired,
                    then: function(a, b, c) {
                        return i.done(a).fail(b).progress(c), this
                    },
                    always: function() {
                        return i.done.apply(i, arguments).fail.apply(i, arguments), this
                    },
                    pipe: function(a, b, c) {
                        return K.Deferred(function(d) {
                            K.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c, e = b[0],
                                    f = b[1];
                                K.isFunction(e) ? i[a](function() {
                                    c = e.apply(this, arguments), c && K.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [c])
                                }) : i[a](d[f])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (null == a) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({});
            for (b in g) i[b] = g[b].fire, i[b + "With"] = g[b].fireWith;
            return i.done(function() {
                f = "resolved"
            }, d.disable, e.lock).fail(function() {
                f = "rejected"
            }, c.disable, e.lock), a && a.call(i, i), i
        },
        when: function(a) {
            function b(a) {
                return function(b) {
                    d[a] = arguments.length > 1 ? M.call(arguments, 0) : b, --h || i.resolveWith(i, d)
                }
            }

            function c(a) {
                return function(b) {
                    g[a] = arguments.length > 1 ? M.call(arguments, 0) : b, i.notifyWith(j, g)
                }
            }
            var d = M.call(arguments, 0),
                e = 0,
                f = d.length,
                g = new Array(f),
                h = f,
                i = 1 >= f && a && K.isFunction(a.promise) ? a : K.Deferred(),
                j = i.promise();
            if (f > 1) {
                for (; f > e; e++) d[e] && d[e].promise && K.isFunction(d[e].promise) ? d[e].promise().then(b(e), i.reject, c(e)) : --h;
                h || i.resolveWith(i, d)
            } else i !== a && i.resolveWith(i, f ? [a] : []);
            return j
        }
    }), K.support = function() {
        var b, c, d, e, f, g, h, i, j, k, l, m, n = H.createElement("div");
        H.documentElement;
        if (n.setAttribute("className", "t"), n.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], !c || !c.length || !d) return {};
        e = H.createElement("select"), f = e.appendChild(H.createElement("option")), g = n.getElementsByTagName("input")[0], b = {
            leadingWhitespace: 3 === n.firstChild.nodeType,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.55/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== n.className,
            enctype: !!H.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }
        if (!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }), n.cloneNode(!0).fireEvent("onclick")), g = H.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), n.appendChild(g), i = H.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, i.removeChild(g), i.appendChild(n), n.innerHTML = "", a.getComputedStyle && (h = H.createElement("div"), h.style.width = "0", h.style.marginRight = "0", n.style.width = "2px", n.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), n.attachEvent)
            for (l in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) k = "on" + l, m = k in n, m || (n.setAttribute(k, "return;"), m = "function" == typeof n[k]), b[l + "Bubbles"] = m;
        return i.removeChild(n), i = e = f = h = n = g = null, K(function() {
            var a, c, d, e, f, g, h, i, k, l, o = H.getElementsByTagName("body")[0];
            o && (g = 1, h = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", i = "visibility:hidden;border:0;", k = "style='" + h + "border:5px solid #000;padding:0;'", l = "<div " + k + "><div></div></div><table " + k + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", a = H.createElement("div"), a.style.cssText = i + "width:0;height:0;position:static;top:0;margin-top:" + g + "px", o.insertBefore(a, o.firstChild), n = H.createElement("div"), a.appendChild(n), n.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", j = n.getElementsByTagName("td"), m = 0 === j[0].offsetHeight, j[0].style.display = "", j[1].style.display = "none", b.reliableHiddenOffsets = m && 0 === j[0].offsetHeight, n.innerHTML = "", n.style.width = n.style.paddingLeft = "1px", K.boxModel = b.boxModel = 2 === n.offsetWidth, "undefined" != typeof n.style.zoom && (n.style.display = "inline", n.style.zoom = 1, b.inlineBlockNeedsLayout = 2 === n.offsetWidth, n.style.display = "", n.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = 2 !== n.offsetWidth), n.style.cssText = h + i, n.innerHTML = l, c = n.firstChild, d = c.firstChild, e = c.nextSibling.firstChild.firstChild, f = {
                doesNotAddBorder: 5 !== d.offsetTop,
                doesAddBorderForTableAndCells: 5 === e.offsetTop
            }, d.style.position = "fixed", d.style.top = "20px", f.fixedPosition = 20 === d.offsetTop || 15 === d.offsetTop, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", f.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop, f.doesNotIncludeMarginInBodyOffset = o.offsetTop !== g, o.removeChild(a), n = a = null, K.extend(b, f))
        }), b
    }();
    var N = /^(?:\{.*\}|\[.*\])$/,
        O = /([A-Z])/g;
    K.extend({
        cache: {},
        uuid: 0,
        expando: "$dy" + (K.fn.$dy + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? K.cache[a[K.expando]] : a[K.expando], !!a && !e(a)
        },
        data: function(a, c, d, e) {
            if (K.acceptData(a)) {
                var f, g, h, i = K.expando,
                    j = "string" == typeof c,
                    k = a.nodeType,
                    l = k ? K.cache : a,
                    m = k ? a[i] : a[i] && i,
                    n = "events" === c;
                if (m && l[m] && (n || e || l[m].data) || !j || d !== b) return m || (k ? a[i] = m = ++K.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = K.noop)), ("object" == typeof c || "function" == typeof c) && (e ? l[m] = K.extend(l[m], c) : l[m].data = K.extend(l[m].data, c)), f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[K.camelCase(c)] = d), n && !g[c] ? f.events : (j ? (h = g[c], null == h && (h = g[K.camelCase(c)])) : h = g, h)
            }
        },
        removeData: function(a, b, c) {
            if (K.acceptData(a)) {
                var d, f, g, h = K.expando,
                    i = a.nodeType,
                    j = i ? K.cache : a,
                    k = i ? a[h] : h;
                if (j[k]) {
                    if (b && (d = c ? j[k] : j[k].data)) {
                        K.isArray(b) || (b in d ? b = [b] : (b = K.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; g > f; f++) delete d[b[f]];
                        if (!(c ? e : K.isEmptyObject)(d)) return
                    }(c || (delete j[k].data, e(j[k]))) && (K.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (K.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null))
                }
            }
        },
        _data: function(a, b, c) {
            return K.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = K.noData[a.nodeName.toLowerCase()];
                if (b) return !(b === !0 || a.getAttribute("classid") !== b)
            }
            return !0
        }
    }), K.fn.extend({
        data: function(a, c) {
            var e, f, g, h = null;
            if ("undefined" == typeof a) {
                if (this.length && (h = K.data(this[0]), 1 === this[0].nodeType && !K._data(this[0], "parsedAttrs"))) {
                    f = this[0].attributes;
                    for (var i = 0, j = f.length; j > i; i++) g = f[i].name, 0 === g.indexOf("data-") && (g = K.camelCase(g.substring(5)), d(this[0], g, h[g]));
                    K._data(this[0], "parsedAttrs", !0)
                }
                return h
            }
            return "object" == typeof a ? this.each(function() {
                K.data(this, a)
            }) : (e = a.split("."), e[1] = e[1] ? "." + e[1] : "", c === b ? (h = this.triggerHandler("getData" + e[1] + "!", [e[0]]), h === b && this.length && (h = K.data(this[0], a), h = d(this[0], a, h)), h === b && e[1] ? this.data(e[0]) : h) : this.each(function() {
                var b = K(this),
                    d = [e[0], c];
                b.triggerHandler("setData" + e[1] + "!", d), K.data(this, a, c), b.triggerHandler("changeData" + e[1] + "!", d)
            }))
        },
        removeData: function(a) {
            return this.each(function() {
                K.removeData(this, a)
            })
        }
    }), K.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", K._data(a, b, (K._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            if (a !== !0 && (c = b, b = a, a = !1), b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (K._data(b, d) || 1) - 1;
                e ? K._data(b, d, e) : (K.removeData(b, d, !0), f(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = K._data(a, b), c && (!d || K.isArray(c) ? d = K._data(a, b, K.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = K.queue(a, b),
                d = c.shift(),
                e = {};
            "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), K._data(a, b + ".run", e), d.call(a, function() {
                K.dequeue(a, b)
            }, e)), c.length || (K.removeData(a, b + "queue " + b + ".run", !0), f(a, b, "queue"))
        }
    }), K.fn.extend({
        queue: function(a, c) {
            return "string" != typeof a && (c = a, a = "fx"), c === b ? K.queue(this[0], a) : this.each(function() {
                var b = K.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && K.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                K.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = K.fx ? K.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function d() {
                --i || f.resolveWith(g, [g])
            }
            "string" != typeof a && (c = a, a = b), a = a || "fx";
            for (var e, f = K.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = K.data(g[h], j, b, !0) || (K.data(g[h], k, b, !0) || K.data(g[h], l, b, !0)) && K.data(g[h], j, K.Callbacks("once memory"), !0)) && (i++, e.add(d));
            return d(), f.promise()
        }
    });
    var P, Q, R, S = /[\n\t\r]/g,
        T = /\s+/,
        U = /\r/g,
        V = /^(?:button|input)$/i,
        W = /^(?:button|input|object|select|textarea)$/i,
        X = /^a(?:rea)?$/i,
        Y = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Z = K.support.getSetAttribute;
    K.fn.extend({
        attr: function(a, b) {
            return K.access(this, a, b, !0, K.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                K.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return K.access(this, a, b, !0, K.prop)
        },
        removeProp: function(a) {
            return a = K.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (K.isFunction(a)) return this.each(function(b) {
                K(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)
                for (b = a.split(T), c = 0, d = this.length; d > c; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                            e.className = K.trim(f)
                        } else e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (K.isFunction(a)) return this.each(function(b) {
                K(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(T), d = 0, e = this.length; e > d; d++)
                    if (f = this[d], 1 === f.nodeType && f.className)
                        if (a) {
                            for (g = (" " + f.className + " ").replace(S, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                            f.className = K.trim(g)
                        } else f.className = "";
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return K.isFunction(a) ? this.each(function(c) {
                K(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var e, f = 0, g = K(this), h = b, i = a.split(T); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else("undefined" === c || "boolean" === c) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : K._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(S, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = K.isFunction(a), this.each(function(d) {
                    var f, g = K(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : K.isArray(f) && (f = K.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), c = K.valHooks[this.nodeName.toLowerCase()] || K.valHooks[this.type], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return c = K.valHooks[f.nodeName.toLowerCase()] || K.valHooks[f.type], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(U, "") : null == d ? "" : d)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = "select-one" === a.type;
                    if (0 > f) return null;
                    for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)
                        if (e = h[c], !(!e.selected || (K.support.optDisabled ? e.disabled : null !== e.getAttribute("disabled")) || e.parentNode.disabled && K.nodeName(e.parentNode, "optgroup"))) {
                            if (b = K(e).val(), i) return b;
                            g.push(b)
                        }
                    return i && !g.length && h.length ? K(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = K.makeArray(b);
                    return K(a).find("option").each(function() {
                        this.selected = K.inArray(K(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i) return e && c in K.attrFn ? K(a)[c](d) : "undefined" == typeof a.getAttribute ? K.prop(a, c, d) : (h = 1 !== i || !K.isXMLDoc(a), h && (c = c.toLowerCase(), g = K.attrHooks[c] || (Y.test(c) ? Q : P)), d !== b ? null === d ? void K.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)
                for (d = b.toLowerCase().split(T), f = d.length; f > g; g++) e = d[g], e && (c = K.propFix[e] || e, K.attr(a, e, ""), a.removeAttribute(Z ? e : c), Y.test(e) && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (V.test(a.nodeName) && a.parentNode) K.error("type property can't be changed");
                    else if (!K.support.radioValue && "radio" === b && K.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return P && K.nodeName(a, "button") ? P.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, c) {
                    return P && K.nodeName(a, "button") ? P.set(a, b, c) : void(a.value = b)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !K.isXMLDoc(a), g && (c = K.propFix[c] || c, f = K.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : W.test(a.nodeName) || X.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), K.attrHooks.tabindex = K.propHooks.tabIndex, Q = {
        get: function(a, c) {
            var d, e = K.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? K.removeAttr(a, c) : (d = K.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, Z || (R = {
        name: !0,
        id: !0
    }, P = K.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (R[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = H.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + ""
        }
    }, K.attrHooks.tabindex.set = P.set, K.each(["width", "height"], function(a, b) {
        K.attrHooks[b] = K.extend(K.attrHooks[b], {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), K.attrHooks.contenteditable = {
        get: P.get,
        set: function(a, b, c) {
            "" === b && (b = "false"), P.set(a, b, c)
        }
    }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(a, c) {
        K.attrHooks[c] = K.extend(K.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), K.support.style || (K.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function(a, b) {
                return K.isArray(b) ? a.checked = K.inArray(K(a).val(), b) >= 0 : void 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        _ = /^([^\.]*)?(?:\.(.+))?$/,
        aa = /\bhover(\.\S+)?\b/,
        ba = /^key/,
        ca = /^(?:mouse|contextmenu)|click/,
        da = /^(?:focusinfocus|focusoutblur)$/,
        ea = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        fa = function(a) {
            var b = ea.exec(a);
            return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
        },
        ga = function(a, b) {
            var c = a.attributes || {};
            return !(b[1] && a.nodeName.toLowerCase() !== b[1] || b[2] && (c.id || {}).value !== b[2] || b[3] && !b[3].test((c["class"] || {}).value))
        },
        ha = function(a) {
            return K.event.special.hover ? a : a.replace(aa, "mouseenter$1 mouseleave$1");
        };
    K.event = {
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q;
                if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = K._data(a))) {
                    for (d.handler && (o = d, d = o.handler), d.guid || (d.guid = K.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                            return "undefined" == typeof K || a && K.event.triggered === a.type ? b : K.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = a), c = K.trim(ha(c)).split(" "), j = 0; j < c.length; j++) k = _.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = K.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = K.event.special[l] || {}, n = K.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        quick: fa(f),
                        namespace: m.join(".")
                    }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), K.event.global[l] = !0;
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r = K.hasData(a) && K._data(a);
                if (r && (m = r.events)) {
                    for (b = K.trim(ha(b || "")).split(" "), f = 0; f < b.length; f++)
                        if (g = _.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                            for (n = K.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < p.length; l++) q = p[l], !e && i !== q.origType || c && c.guid !== q.guid || j && !j.test(q.namespace) || d && d !== q.selector && ("**" !== d || !q.selector) || (p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q));
                            0 === p.length && k !== p.length && (n.teardown && n.teardown.call(a, j) !== !1 || K.removeEvent(a, h, r.handle), delete m[h])
                        } else
                            for (h in m) K.event.remove(a, h + b[f], c, d, !0);
                    K.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), K.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, f) {
                if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                    var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                        r = [];
                    if (!da.test(q + K.event.triggered) && (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), e && !K.event.customEvent[q] || K.event.global[q]))
                        if (c = "object" == typeof c ? c[K.expando] ? c : new K.Event(q, c) : new K.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", e) {
                            if (c.result = b, c.target || (c.target = e), d = null != d ? K.makeArray(d) : [], d.unshift(c), m = K.event.special[q] || {}, !m.trigger || m.trigger.apply(e, d) !== !1) {
                                if (o = [
                                        [e, m.bindType || q]
                                    ], !f && !m.noBubble && !K.isWindow(e)) {
                                    for (p = m.delegateType || q, j = da.test(p + q) ? e : e.parentNode, k = null; j; j = j.parentNode) o.push([j, p]), k = j;
                                    k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p])
                                }
                                for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = (K._data(j, "events") || {})[c.type] && K._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && K.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
                                return c.type = q, f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && K.nodeName(e, "a") || !K.acceptData(e) || l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !K.isWindow(e) && (k = e[l], k && (e[l] = null), K.event.triggered = q, e[q](), K.event.triggered = b, k && (e[l] = k)), c.result
                            }
                        } else {
                            g = K.cache;
                            for (i in g) g[i].events && g[i].events[q] && K.event.trigger(c, d, g[i].handle.elem, !0)
                        }
                }
            },
            dispatch: function(c) {
                c = K.event.fix(c || a.event);
                var d, e, f, g, h, i, j, k, l, m, n = (K._data(this, "events") || {})[c.type] || [],
                    o = n.delegateCount,
                    p = [].slice.call(arguments, 0),
                    q = !c.exclusive && !c.namespace,
                    r = [];
                if (p[0] = c, c.delegateTarget = this, o && !c.target.disabled && (!c.button || "click" !== c.type))
                    for (g = K(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this) {
                        for (i = {}, k = [], g[0] = f, d = 0; o > d; d++) l = n[d], m = l.selector, i[m] === b && (i[m] = l.quick ? ga(f, l.quick) : g.is(m)), i[m] && k.push(l);
                        k.length && r.push({
                            elem: f,
                            matches: k
                        })
                    }
                for (n.length > o && r.push({
                        elem: this,
                        matches: n.slice(o)
                    }), d = 0; d < r.length && !c.isPropagationStopped(); d++)
                    for (j = r[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) l = j.matches[e], (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, h = ((K.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation())));
                return c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || H, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[K.expando]) return a;
                var c, d, e = a,
                    f = K.event.fixHooks[a.type] || {},
                    g = f.props ? this.props.concat(f.props) : this.props;
                for (a = K.Event(e), c = g.length; c;) d = g[--c], a[d] = e[d];
                return a.target || (a.target = e.srcElement || H), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
            },
            special: {
                ready: {
                    setup: K.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        K.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = K.extend(new K.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? K.event.trigger(e, null, b) : K.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, K.event.handle = K.event.dispatch, K.removeEvent = H.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, K.Event = function(a, b) {
            return this instanceof K.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? h : g) : this.type = a, b && K.extend(this, b), this.timeStamp = a && a.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(a, b)
        }, K.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = h;
                var a = this.originalEvent;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = h;
                var a = this.originalEvent;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = h, this.stopPropagation()
            },
            isDefaultPrevented: g,
            isPropagationStopped: g,
            isImmediatePropagationStopped: g
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            K.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    f.selector;
                    return (!e || e !== d && !K.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), K.support.submitBubbles || (K.event.special.submit = {
            setup: function() {
                return K.nodeName(this, "form") ? !1 : void K.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = K.nodeName(c, "input") || K.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (K.event.add(d, "submit._submit", function(a) {
                        this.parentNode && !a.isTrigger && K.event.simulate("submit", this.parentNode, a, !0)
                    }), d._submit_attached = !0)
                })
            },
            teardown: function() {
                return K.nodeName(this, "form") ? !1 : void K.event.remove(this, "._submit")
            }
        }), K.support.changeBubbles || (K.event.special.change = {
            setup: function() {
                return $.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), K.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, K.event.simulate("change", this, a, !0))
                })), !1) : void K.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    $.test(b.nodeName) && !b._change_attached && (K.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || K.event.simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return K.event.remove(this, "._change"), $.test(this.nodeName)
            }
        }), K.support.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    K.event.simulate(b, a.target, K.event.fix(a), !0)
                };
            K.event.special[b] = {
                setup: function() {
                    0 === c++ && H.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && H.removeEventListener(a, d, !0)
                }
            }
        }), K.fn.extend({
            on: function(a, c, d, e, f) {
                var h, i;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = c, c = b);
                    for (i in a) this.on(i, c, d, a[i], f);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = g;
                else if (!e) return this;
                return 1 === f && (h = e, e = function(a) {
                    return K().off(a), h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = K.guid++)), this.each(function() {
                    K.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on.call(this, a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    return K(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler), this
                }
                if ("object" == typeof a) {
                    for (var f in a) this.off(f, c, a[f]);
                    return this
                }
                return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = g), this.each(function() {
                    K.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                return K(this.context).on(a, this.selector, b, c), this
            },
            die: function(a, b) {
                return K(this.context).off(a, this.selector || "**", b), this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    K.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                return this[0] ? K.event.trigger(a, b, this[0], !0) : void 0
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || K.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (K._data(this, "lastToggle" + a.guid) || 0) % d;
                        return K._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                    };
                for (e.guid = c; d < b.length;) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            K.fn[b] = function(a, c) {
                return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, K.attrFn && (K.attrFn[b] = !0), ba.test(b) && (K.event.fixHooks[b] = K.event.keyHooks), ca.test(b) && (K.event.fixHooks[b] = K.event.mouseHooks)
        }),
        function() {
            function a(a, b, c, d, f, g) {
                for (var h = 0, i = d.length; i > h; h++) {
                    var j = d[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j;) {
                            if (j[e] === c) {
                                k = d[j.sizset];
                                break
                            }
                            if (1 !== j.nodeType || g || (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        d[h] = k
                    }
                }
            }

            function c(a, b, c, d, f, g) {
                for (var h = 0, i = d.length; i > h; h++) {
                    var j = d[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j;) {
                            if (j[e] === c) {
                                k = d[j.sizset];
                                break
                            }
                            if (1 === j.nodeType)
                                if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        d[h] = k
                    }
                }
            }
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = "sizcache" + (Math.random() + "").replace(".", ""),
                f = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function() {
                return i = !1, 0
            });
            var m = function(a, b, c, e) {
                c = c || [], b = b || H;
                var f = b;
                if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                if (!a || "string" != typeof a) return c;
                var h, i, j, k, l, n, q, r, t = !0,
                    u = m.isXML(b),
                    v = [],
                    x = a;
                do
                    if (d.exec(""), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) {
                        k = h[3];
                        break
                    }
                while (h);
                if (v.length > 1 && p.exec(a))
                    if (2 === v.length && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
                    else
                        for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;) a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e);
                else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b)
                    for (l = e ? {
                            expr: v.pop(),
                            set: s(e)
                        } : m.find(v.pop(), 1 !== v.length || "~" !== v[0] && "+" !== v[0] || !b.parentNode ? b : b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;) n = v.pop(), q = n, o.relative[n] ? q = v.pop() : n = "", null == q && (q = b), o.relative[n](j, q, u);
                else j = v = [];
                if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j))
                    if (t)
                        if (b && 1 === b.nodeType)
                            for (r = 0; null != j[r]; r++) j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
                        else
                            for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
                else c.push.apply(c, j);
                else s(j, c);
                return k && (m(k, f, c, e), m.uniqueSort(c)), c
            };
            m.uniqueSort = function(a) {
                if (u && (h = i, a.sort(u), h))
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a
            }, m.matches = function(a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a) return [];
                for (e = 0, f = o.order.length; f > e; e++)
                    if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c), null != d))) {
                        a = a.replace(o.match[h], "");
                        break
                    }
                return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), {
                    set: d,
                    expr: a
                }
            }, m.filter = function(a, c, d, e) {
                for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
                    for (h in o.filter)
                        if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                            if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                            if (s === r && (r = []), o.preFilter[h])
                                if (f = o.preFilter[h](f, s, d, r, e, t)) {
                                    if (f === !0) continue
                                } else g = i = !0;
                            if (f)
                                for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            if (i !== b) {
                                if (d || (s = r), a = a.replace(o.match[h], ""), !g) return [];
                                break
                            }
                        }
                    if (a === q) {
                        if (null != g) break;
                        m.error(a)
                    }
                    q = a
                }
                return s
            }, m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function(a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (1 === d || 9 === d) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                        } else if (3 === d || 4 === d) return a.nodeValue
                    } else
                        for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = "string" == typeof b,
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f, g = 0, h = a.length; h > g; g++)
                                if (f = a[g]) {
                                    for (;
                                        (f = f.previousSibling) && 1 !== f.nodeType;);
                                    a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                }
                            e && m.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = "string" == typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                for (b = b.toLowerCase(); f > e; e++)
                                    if (c = a[e]) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                            } else {
                                for (; f > e; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function(b, d, e) {
                            var g, h = f++,
                                i = c;
                            "string" != typeof d || l.test(d) || (d = d.toLowerCase(), g = d, i = a), i("parentNode", d, h, b, g, e)
                        },
                        "~": function(b, d, e) {
                            var g, h = f++,
                                i = c;
                            "string" != typeof d || l.test(d) || (d = d.toLowerCase(), g = d, i = a), i("previousSibling", d, h, b, g, e)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if ("undefined" != typeof b.getElementById && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if ("undefined" != typeof b.getElementsByName) {
                                for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return 0 === c.length ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            if (a = " " + a[1].replace(j, "") + " ", f) return a;
                            for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if ("nth" === a[1]) {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            return a[0] = f++, a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                        },
                        PSEUDO: function(a, b, c, e, f) {
                            if ("not" === a[1]) {
                                if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                    var g = m.filter(a[3], b, c, !0 ^ f);
                                    return c || e.push.apply(e, g), !1
                                }
                                a[3] = m(a[3], null, null, b)
                            } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return !0;
                            return a
                        },
                        POS: function(a) {
                            return a.unshift(!0), a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && "hidden" !== a.type
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                        },
                        radio: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                        },
                        file: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type
                        },
                        password: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type
                        },
                        image: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return 0 === b
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                            if ("not" === e) {
                                for (var g = b[3], h = 0, i = g.length; i > h; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c, d, f, g, h, i, j = b[1],
                                k = a;
                            switch (j) {
                                case "only":
                                case "first":
                                    for (; k = k.previousSibling;)
                                        if (1 === k.nodeType) return !1;
                                    if ("first" === j) return !0;
                                    k = a;
                                case "last":
                                    for (; k = k.nextSibling;)
                                        if (1 === k.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (c = b[2], d = b[3], 1 === c && 0 === d) return !0;
                                    if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
                                        for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                        g[e] = f
                                    }
                                    return i = a.nodeIndex - d, 0 === c ? 0 === i : i % c === 0 && i / c >= 0
                            }
                        },
                        ID: function(a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return null == d ? "!=" === f : !f && m.attr ? null != d : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            return f ? f(a, c, b, d) : void 0
                        }
                    }
                },
                p = o.match.POS,
                q = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            var s = function(a, b) {
                return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(H.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                    else if ("number" == typeof a.length)
                        for (var e = a.length; e > c; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var u, v;
            H.documentElement.compareDocumentPosition ? u = function(a, b) {
                    return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : (u = function(a, b) {
                    if (a === b) return h = !0, 0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) return v(a, b);
                    if (!g) return -1;
                    if (!i) return 1;
                    for (; j;) e.unshift(j), j = j.parentNode;
                    for (j = i; j;) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; c > k && d > k; k++)
                        if (e[k] !== f[k]) return v(e[k], f[k]);
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function(a, b, c) {
                    if (a === b) return c;
                    for (var d = a.nextSibling; d;) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }),
                function() {
                    var a = H.createElement("div"),
                        c = "script" + (new Date).getTime(),
                        d = H.documentElement;
                    a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), H.getElementById(c) && (o.find.ID = function(a, c, d) {
                        if ("undefined" != typeof c.getElementById && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function(a, b) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return 1 === a.nodeType && c && c.nodeValue === b
                    }), d.removeChild(a), d = a = null
                }(),
                function() {
                    var a = H.createElement("div");
                    a.appendChild(H.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if ("*" === a[1]) {
                            for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), H.querySelectorAll && ! function() {
                    var a = m,
                        b = H.createElement("div"),
                        c = "__sizzle__";
                    if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                        m = function(b, d, e, f) {
                            if (d = d || H, !f && !m.isXML(d)) {
                                var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                                    if (g[1]) return s(d.getElementsByTagName(b), e);
                                    if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e)
                                }
                                if (9 === d.nodeType) {
                                    if ("body" === b && d.body) return s([d.body], e);
                                    if (g && g[3]) {
                                        var h = d.getElementById(g[3]);
                                        if (!h || !h.parentNode) return s([], e);
                                        if (h.id === g[3]) return s([h], e)
                                    }
                                    try {
                                        return s(d.querySelectorAll(b), e)
                                    } catch (i) {}
                                } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                                    var j = d,
                                        k = d.getAttribute("id"),
                                        l = k || c,
                                        n = d.parentNode,
                                        p = /^\s*[+~]/.test(b);
                                    k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l), p && n && (d = d.parentNode);
                                    try {
                                        if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e)
                                    } catch (q) {} finally {
                                        k || j.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, d, e, f)
                        };
                        for (var d in a) m[d] = a[d];
                        b = null
                    }
                }(),
                function() {
                    var a = H.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var c = !b.call(H.createElement("div"), "div"),
                            d = !1;
                        try {
                            b.call(H.documentElement, "[test!='']:sizzle")
                        } catch (e) {
                            d = !0
                        }
                        m.matchesSelector = function(a, e) {
                            if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a)) try {
                                if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                    var f = b.call(a, e);
                                    if (f || !c || a.document && 11 !== a.document.nodeType) return f
                                }
                            } catch (g) {}
                            return m(e, null, null, [a]).length > 0
                        }
                    }
                }(),
                function() {
                    var a = H.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                        return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
                    }, a = null))
                }(), H.documentElement.contains ? m.contains = function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : H.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                    return !!(16 & a.compareDocumentPosition(b))
                } : m.contains = function() {
                    return !1
                }, m.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                };
            var w = function(a, b, c) {
                for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);) f += d[0], a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; i > h; h++) m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = K.attr, m.selectors.attrMap = {}, K.find = m, K.expr = m.selectors, K.expr[":"] = K.expr.filters, K.unique = m.uniqueSort, K.text = m.getText, K.isXMLDoc = m.isXML, K.contains = m.contains
        }();
    var ia = /Until$/,
        ja = /^(?:parents|prevUntil|prevAll)/,
        ka = /,/,
        la = /^.[^:#\[\.,]*$/,
        ma = Array.prototype.slice,
        na = K.expr.match.POS,
        oa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.fn.extend({
        find: function(a) {
            var b, c, d = this;
            if ("string" != typeof a) return K(a).filter(function() {
                for (b = 0, c = d.length; c > b; b++)
                    if (K.contains(d[b], this)) return !0
            });
            var e, f, g, h = this.pushStack("", "find", a);
            for (b = 0, c = this.length; c > b; b++)
                if (e = h.length, K.find(a, this[b], h), b > 0)
                    for (f = e; f < h.length; f++)
                        for (g = 0; e > g; g++)
                            if (h[g] === h[f]) {
                                h.splice(f--, 1);
                                break
                            }
            return h
        },
        has: function(a) {
            var b = K(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; c > a; a++)
                    if (K.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(j(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? na.test(a) ? K(a, this.context).index(this[0]) >= 0 : K.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d, e = [],
                f = this[0];
            if (K.isArray(a)) {
                for (var g = 1; f && f.ownerDocument && f !== b;) {
                    for (c = 0; c < a.length; c++) K(f).is(a[c]) && e.push({
                        selector: a[c],
                        elem: f,
                        level: g
                    });
                    f = f.parentNode, g++
                }
                return e
            }
            var h = na.test(a) || "string" != typeof a ? K(a, b || this.context) : 0;
            for (c = 0, d = this.length; d > c; c++)
                for (f = this[c]; f;) {
                    if (h ? h.index(f) > -1 : K.find.matchesSelector(f, a)) {
                        e.push(f);
                        break
                    }
                    if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break
                }
            return e = e.length > 1 ? K.unique(e) : e, this.pushStack(e, "closest", a)
        },
        index: function(a) {
            return a ? "string" == typeof a ? K.inArray(this[0], K(a)) : K.inArray(a.$dy ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? K(a, b) : K.makeArray(a && a.nodeType ? [a] : a),
                d = K.merge(this.get(), c);
            return this.pushStack(i(c[0]) || i(d[0]) ? d : K.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), K.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return K.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return K.dir(a, "parentNode", c)
        },
        next: function(a) {
            return K.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return K.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return K.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return K.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return K.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return K.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return K.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return K.sibling(a.firstChild)
        },
        contents: function(a) {
            return K.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : K.makeArray(a.childNodes)
        }
    }, function(a, b) {
        K.fn[a] = function(c, d) {
            var e = K.map(this, b, c);
            return ia.test(a) || (d = c), d && "string" == typeof d && (e = K.filter(d, e)), e = this.length > 1 && !oa[a] ? K.unique(e) : e, (this.length > 1 || ka.test(d)) && ja.test(a) && (e = e.reverse()), this.pushStack(e, a, ma.call(arguments).join(","))
        }
    }), K.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? K.find.matchesSelector(b[0], a) ? [b[0]] : [] : K.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !K(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
            return a
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var pa = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        qa = / $dy\d+="(?:\d+|null)"/g,
        ra = /^\s+/,
        sa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ta = /<([\w:]+)/,
        ua = /<tbody/i,
        va = /<|&#?\w+;/,
        wa = /<(?:script|style)/i,
        xa = /<(?:script|object|embed|option|style)/i,
        ya = new RegExp("<(?:" + pa + ")", "i"),
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /\/(java|ecma)script/i,
        Ba = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Ca = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Da = k(H);
    Ca.optgroup = Ca.option, Ca.tbody = Ca.tfoot = Ca.colgroup = Ca.caption = Ca.thead, Ca.th = Ca.td, K.support.htmlSerialize || (Ca._default = [1, "div<div>", "</div>"]), K.fn.extend({
        text: function(a) {
            return K.isFunction(a) ? this.each(function(b) {
                var c = K(this);
                c.text(a.call(this, b, c.text()))
            }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(a)) : K.text(this)
        },
        wrapAll: function(a) {
            if (K.isFunction(a)) return this.each(function(b) {
                K(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = K(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return K.isFunction(a) ? this.each(function(b) {
                K(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = K(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = K.isFunction(a);
            return this.each(function(c) {
                K(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = K.clean(arguments);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, K.clean(arguments)), a
            }
        },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || K.filter(a, [c]).length) && (b || 1 !== c.nodeType || (K.cleanData(c.getElementsByTagName("*")), K.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                for (1 === a.nodeType && K.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return K.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(qa, "") : null;
            if ("string" != typeof a || wa.test(a) || !K.support.leadingWhitespace && ra.test(a) || Ca[(ta.exec(a) || ["", ""])[1].toLowerCase()]) K.isFunction(a) ? this.each(function(b) {
                var c = K(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            else {
                a = a.replace(sa, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; d > c; c++) 1 === this[c].nodeType && (K.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            }
            return this
        },
        replaceWith: function(a) {
            return this[0] && this[0].parentNode ? K.isFunction(a) ? this.each(function(b) {
                var c = K(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = K(a).detach()), this.each(function() {
                var b = this.nextSibling,
                    c = this.parentNode;
                K(this).remove(), b ? K(b).before(a) : K(c).append(a)
            })) : this.length ? this.pushStack(K(K.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, f, g, h, i = a[0],
                j = [];
            if (!K.support.checkClone && 3 === arguments.length && "string" == typeof i && za.test(i)) return this.each(function() {
                K(this).domManip(a, c, d, !0)
            });
            if (K.isFunction(i)) return this.each(function(e) {
                var f = K(this);
                a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                if (h = i && i.parentNode, e = K.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                        fragment: h
                    } : K.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild) {
                    c = c && K.nodeName(f, "tr");
                    for (var k = 0, m = this.length, n = m - 1; m > k; k++) d.call(c ? l(this[k], f) : this[k], e.cacheable || m > 1 && n > k ? K.clone(g, !0, !0) : g)
                }
                j.length && K.each(j, s)
            }
            return this
        }
    }), K.buildFragment = function(a, b, c) {
        var d, e, f, g, h = a[0];
        return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = H), !(1 === a.length && "string" == typeof h && h.length < 512 && g === H && "<" === h.charAt(0)) || xa.test(h) || !K.support.checkClone && za.test(h) || !K.support.html5Clone && ya.test(h) || (e = !0, f = K.fragments[h], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), K.clean(a, g, d, c)), e && (K.fragments[h] = f ? d : 1), {
            fragment: d,
            cacheable: e
        }
    }, K.fragments = {}, K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        K.fn[a] = function(c) {
            var d = [],
                e = K(c),
                f = 1 === this.length && this[0].parentNode;
            if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
            for (var g = 0, h = e.length; h > g; g++) {
                var i = (g > 0 ? this.clone(!0) : this).get();
                K(e[g])[b](i), d = d.concat(i)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), K.extend({
        clone: function(a, b, c) {
            var d, e, f, g = K.support.html5Clone || !ya.test("<" + a.nodeName) ? a.cloneNode(!0) : r(a);
            if (!(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || K.isXMLDoc(a)))
                for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f) e[f] && n(d[f], e[f]);
            if (b && (m(a, g), c))
                for (d = o(a), e = o(g), f = 0; d[f]; ++f) m(d[f], e[f]);
            return d = e = null, g
        },
        clean: function(a, b, c, d) {
            var e;
            b = b || H, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || H);
            for (var f, g, h = [], i = 0; null != (g = a[i]); i++)
                if ("number" == typeof g && (g += ""), g) {
                    if ("string" == typeof g)
                        if (va.test(g)) {
                            g = g.replace(sa, "<$1></$2>");
                            var j = (ta.exec(g) || ["", ""])[1].toLowerCase(),
                                l = Ca[j] || Ca._default,
                                m = l[0],
                                n = b.createElement("div");
                            for (b === H ? Da.appendChild(n) : k(b).appendChild(n), n.innerHTML = l[1] + g + l[2]; m--;) n = n.lastChild;
                            if (!K.support.tbody) {
                                var o = ua.test(g),
                                    p = "table" !== j || o ? "<table>" !== l[1] || o ? [] : n.childNodes : n.firstChild && n.firstChild.childNodes;
                                for (f = p.length - 1; f >= 0; --f) K.nodeName(p[f], "tbody") && !p[f].childNodes.length && p[f].parentNode.removeChild(p[f])
                            }!K.support.leadingWhitespace && ra.test(g) && n.insertBefore(b.createTextNode(ra.exec(g)[0]), n.firstChild), g = n.childNodes
                        } else g = b.createTextNode(g);
                    var r;
                    if (!K.support.appendChecked)
                        if (g[0] && "number" == typeof(r = g.length))
                            for (f = 0; r > f; f++) q(g[f]);
                        else q(g);
                    g.nodeType ? h.push(g) : h = K.merge(h, g)
                }
            if (c)
                for (e = function(a) {
                        return !a.type || Aa.test(a.type)
                    }, i = 0; h[i]; i++)
                    if (!d || !K.nodeName(h[i], "script") || h[i].type && "text/javascript" !== h[i].type.toLowerCase()) {
                        if (1 === h[i].nodeType) {
                            var s = K.grep(h[i].getElementsByTagName("script"), e);
                            h.splice.apply(h, [i + 1, 0].concat(s))
                        }
                        c.appendChild(h[i])
                    } else d.push(h[i].parentNode ? h[i].parentNode.removeChild(h[i]) : h[i]);
            return h
        },
        cleanData: function(a) {
            for (var b, c, d, e = K.cache, f = K.event.special, g = K.support.deleteExpando, h = 0; null != (d = a[h]); h++)
                if ((!d.nodeName || !K.noData[d.nodeName.toLowerCase()]) && (c = d[K.expando])) {
                    if (b = e[c], b && b.events) {
                        for (var i in b.events) f[i] ? K.event.remove(d, i) : K.removeEvent(d, i, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete d[K.expando] : d.removeAttribute && d.removeAttribute(K.expando), delete e[c]
                }
        }
    });
    var Ea, Fa, Ga, Ha = /alpha\([^)]*\)/i,
        Ia = /opacity=([^)]*)/,
        Ja = /([A-Z]|^ms)/g,
        Ka = /^-?\d+(?:px)?$/i,
        La = /^-?\d/,
        Ma = /^([\-+])=([\-+.\de]+)/,
        Na = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Oa = ["Left", "Right"],
        Pa = ["Top", "Bottom"];
    K.fn.css = function(a, c) {
        return 2 === arguments.length && c === b ? this : K.access(this, a, c, !0, function(a, c, d) {
            return d !== b ? K.style(a, c, d) : K.css(a, c)
        })
    }, K.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ea(a, "opacity", "opacity");
                        return "" === c ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h = K.camelCase(c),
                    i = a.style,
                    j = K.cssHooks[h];
                if (c = K.cssProps[h] || h, d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
                if (g = typeof d, "string" === g && (f = Ma.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(K.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || K.cssNumber[h] || (d += "px"), j && "set" in j && (d = j.set(a, d)) === b))) try {
                    i[c] = d
                } catch (k) {}
            }
        },
        css: function(a, c, d) {
            var e, f;
            return c = K.camelCase(c), f = K.cssHooks[c], c = K.cssProps[c] || c, "cssFloat" === c && (c = "float"), f && "get" in f && (e = f.get(a, !0, d)) !== b ? e : Ea ? Ea(a, c) : void 0
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), K.curCSS = K.css, K.each(["height", "width"], function(a, b) {
        K.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                return c ? 0 !== a.offsetWidth ? t(a, b, d) : (K.swap(a, Na, function() {
                    e = t(a, b, d)
                }), e) : void 0
            },
            set: function(a, b) {
                return Ka.test(b) ? (b = parseFloat(b), b >= 0 ? b + "px" : void 0) : b
            }
        }
    }), K.support.opacity || (K.cssHooks.opacity = {
        get: function(a, b) {
            return Ia.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = K.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === K.trim(f.replace(Ha, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Ha.test(f) ? f.replace(Ha, e) : f + " " + e)
        }
    }), K(function() {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                return K.swap(a, {
                    display: "inline-block"
                }, function() {
                    c = b ? Ea(a, "margin-right", "marginRight") : a.style.marginRight
                }), c
            }
        })
    }), H.defaultView && H.defaultView.getComputedStyle && (Fa = function(a, b) {
        var c, d, e;
        return b = b.replace(Ja, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), "" !== c || K.contains(a.ownerDocument.documentElement, a) || (c = K.style(a, b))), c
    }), H.documentElement.currentStyle && (Ga = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        return null === f && g && (e = g[b]) && (f = e), !Ka.test(f) && La.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), "" === f ? "auto" : f
    }), Ea = Fa || Ga, K.expr && K.expr.filters && (K.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return 0 === b && 0 === c || !K.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || K.css(a, "display"))
    }, K.expr.filters.visible = function(a) {
        return !K.expr.filters.hidden(a)
    });
    var Qa, Ra, Sa = /%20/g,
        Ta = /\[\]$/,
        Ua = /\r?\n/g,
        Va = /#.*$/,
        Wa = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xa = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ya = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Za = /^(?:GET|HEAD)$/,
        $a = /^\/\//,
        _a = /\?/,
        ab = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bb = /^(?:select|textarea)/i,
        cb = /\s+/,
        db = /([?&])_=[^&]*/,
        eb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        fb = K.fn.load,
        gb = {},
        hb = {},
        ib = ["*/"] + ["*"];
    try {
        Qa = J.href
    } catch (jb) {
        Qa = H.createElement("a"), Qa.href = "", Qa = Qa.href
    }
    Ra = eb.exec(Qa.toLowerCase()) || [], K.fn.extend({
        load: function(a, c, d) {
            if ("string" != typeof a && fb) return fb.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var g = "GET";
            c && (K.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = K.param(c, K.ajaxSettings.traditional), g = "POST"));
            var h = this;
            return K.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), h.html(f ? K("<div>").append(c.replace(ab, "")).find(f) : c)), d && h.each(d, [c, b, a])
                }
            }), this
        },
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bb.test(this.nodeName) || Xa.test(this.type))
            }).map(function(a, b) {
                var c = K(this).val();
                return null == c ? null : K.isArray(c) ? K.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(Ua, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ua, "\r\n")
                }
            }).get()
        }
    }), K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        K.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), K.each(["get", "post"], function(a, c) {
        K[c] = function(a, d, e, f) {
            return K.isFunction(d) && (f = f || e, e = d, d = b), K.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), K.extend({
        getScript: function(a, c) {
            return K.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return K.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? w(a, K.ajaxSettings) : (b = a, a = K.ajaxSettings), w(a, b), a
        },
        ajaxSettings: {
            url: Qa,
            isLocal: Ya.test(Ra[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": ib
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: u(gb),
        ajaxTransport: u(hb),
        ajax: function(a, c) {
            function d(a, c, d, g) {
                if (2 !== u) {
                    u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0;
                    var j, l, s, t, v, x = c,
                        A = d ? y(m, w, d) : b;
                    if (a >= 200 && 300 > a || 304 === a)
                        if (m.ifModified && ((t = w.getResponseHeader("Last-Modified")) && (K.lastModified[e] = t), (v = w.getResponseHeader("Etag")) && (K.etag[e] = v)), 304 === a) x = "notmodified", j = !0;
                        else try {
                            l = z(m, A), x = "success", j = !0
                        } catch (B) {
                            x = "parsererror", s = B
                        } else s = x, (!x || a) && (x = "error", 0 > a && (a = 0));
                    w.status = a, w.statusText = "" + (c || x), j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --K.active || K.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = K.ajaxSetup({}, c),
                n = m.context || m,
                o = n !== m && (n.nodeType || n instanceof K) ? K(n) : K.event,
                p = K.Deferred(),
                q = K.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                w = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!u) {
                            var c = a.toLowerCase();
                            a = t[c] = t[c] || a, s[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? f : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === u) {
                            if (!g)
                                for (g = {}; c = Wa.exec(f);) g[c[1].toLowerCase()] = c[2];
                            c = g[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    abort: function(a) {
                        return a = a || "abort", h && h.abort(a), d(0, a), this
                    }
                };
            if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (2 > u)
                            for (b in a) r[b] = [r[b], a[b]];
                        else b = a[w.status], w.then(b, b)
                    }
                    return this
                }, m.url = ((a || m.url) + "").replace(Va, "").replace($a, Ra[1] + "//"), m.dataTypes = K.trim(m.dataType || "*").toLowerCase().split(cb), null == m.crossDomain && (j = eb.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] == Ra[1] && j[2] == Ra[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (Ra[3] || ("http:" === Ra[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = K.param(m.data, m.traditional)), v(gb, m, c, w), 2 === u) return !1;
            if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Za.test(m.type), k && 0 === K.active++ && K.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (_a.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
                var x = K.now(),
                    A = m.url.replace(db, "$1_=" + x);
                m.url = A + (A === m.url ? (_a.test(m.url) ? "&" : "?") + "_=" + x : "")
            }(m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, K.lastModified[e] && w.setRequestHeader("If-Modified-Since", K.lastModified[e]), K.etag[e] && w.setRequestHeader("If-None-Match", K.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ib + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort(), !1;
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](m[l]);
            if (h = v(hb, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, h.send(s, d)
                } catch (B) {
                    if (!(2 > u)) throw B;
                    d(-1, B)
                }
            } else d(-1, "No Transport");
            return w
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = K.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = K.ajaxSettings.traditional), K.isArray(a) || a.$dy && !K.isPlainObject(a)) K.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var f in a) x(f, a[f], c, e);
            return d.join("&").replace(Sa, "+")
        }
    }), K.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var kb = K.now(),
        lb = /(\=)\?(&|$)|\?\?/i;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return K.expando + "_" + kb++
        }
    }), K.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
        if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (lb.test(b.url) || e && lb.test(b.data))) {
            var f, g = b.jsonpCallback = K.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h = a[g],
                i = b.url,
                j = b.data,
                k = "$1" + g + "$2";
            return b.jsonp !== !1 && (i = i.replace(lb, k), b.url === i && (e && (j = j.replace(lb, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function(a) {
                f = [a]
            }, d.always(function() {
                a[g] = h, f && K.isFunction(h) && a[g](f[0])
            }), b.converters["script json"] = function() {
                return f || K.error(g + " was not called"), f[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return K.globalEval(a), a
            }
        }
    }), K.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), K.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
            return {
                send: function(e, f) {
                    c = H.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var mb, nb = a.ActiveXObject ? function() {
            for (var a in mb) mb[a](0, 1)
        } : !1,
        ob = 0;
    K.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && A() || B()
        } : A,
        function(a) {
            K.extend(K.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(c) {
            if (!c.crossDomain || K.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch (j) {}
                        i.send(c.hasContent && c.data || null), d = function(a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || 4 === i.readyState))
                                    if (d = b, g && (i.onreadystatechange = K.noop, nb && delete mb[g]), e) 4 !== i.readyState && i.abort();
                                    else {
                                        h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m), l.text = i.responseText;
                                        try {
                                            j = i.statusText
                                        } catch (n) {
                                            j = ""
                                        }
                                        h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                    }
                            } catch (o) {
                                e || f(-1, o)
                            }
                            l && f(h, j, l, k)
                        }, c.async && 4 !== i.readyState ? (g = ++ob, nb && (mb || (mb = {}, K(a).unload(nb)), mb[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var pb, qb, rb, sb, tb = {},
        ub = /^(?:toggle|show|hide)$/,
        vb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        wb = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    K.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || 0 === a) return this.animate(E("show", 3), a, b, c);
            for (var f = 0, g = this.length; g > f; f++) d = this[f], d.style && (e = d.style.display, K._data(d, "olddisplay") || "none" !== e || (e = d.style.display = ""), "" === e && "none" === K.css(d, "display") && K._data(d, "olddisplay", F(d.nodeName)));
            for (f = 0; g > f; f++) d = this[f], d.style && (e = d.style.display, ("" === e || "none" === e) && (d.style.display = K._data(d, "olddisplay") || ""));
            return this
        },
        hide: function(a, b, c) {
            if (a || 0 === a) return this.animate(E("hide", 3), a, b, c);
            for (var d, e, f = 0, g = this.length; g > f; f++) d = this[f], d.style && (e = K.css(d, "display"), "none" === e || K._data(d, "olddisplay") || K._data(d, "olddisplay", e));
            for (f = 0; g > f; f++) this[f].style && (this[f].style.display = "none");
            return this
        },
        _toggle: K.fn.toggle,
        toggle: function(a, b, c) {
            var d = "boolean" == typeof a;
            return K.isFunction(a) && K.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                var b = d ? a : K(this).is(":hidden");
                K(this)[b ? "show" : "hide"]()
            }) : this.animate(E("toggle", 3), a, b, c), this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function e() {
                f.queue === !1 && K._mark(this);
                var b, c, d, e, g, h, i, j, k, l = K.extend({}, f),
                    m = 1 === this.nodeType,
                    n = m && K(this).is(":hidden");
                l.animatedProperties = {};
                for (d in a) {
                    if (b = K.camelCase(d), d !== b && (a[b] = a[d], delete a[d]), c = a[b], K.isArray(c) ? (l.animatedProperties[b] = c[1], c = a[b] = c[0]) : l.animatedProperties[b] = l.specialEasing && l.specialEasing[b] || l.easing || "swing", "hide" === c && n || "show" === c && !n) return l.complete.call(this);
                    !m || "height" !== b && "width" !== b || (l.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === K.css(this, "display") && "none" === K.css(this, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== F(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != l.overflow && (this.style.overflow = "hidden");
                for (d in a) e = new K.fx(this, l, d), c = a[d], ub.test(c) ? (k = K._data(this, "toggle" + d) || ("toggle" === c ? n ? "show" : "hide" : 0), k ? (K._data(this, "toggle" + d, "show" === k ? "hide" : "show"), e[k]()) : e[c]()) : (g = vb.exec(c), h = e.cur(), g ? (i = parseFloat(g[2]), j = g[3] || (K.cssNumber[d] ? "" : "px"), "px" !== j && (K.style(this, d, (i || 1) + j), h = (i || 1) / e.cur() * h, K.style(this, d, h + j)), g[1] && (i = ("-=" === g[1] ? -1 : 1) * i + h), e.custom(h, i, j)) : e.custom(h, c, ""));
                return !0
            }
            var f = K.speed(b, c, d);
            return K.isEmptyObject(a) ? this.each(f.complete, [!1]) : (a = K.extend({}, a), f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function(a, c, d) {
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                function b(a, b, c) {
                    var e = b[c];
                    K.removeData(a, c, !0), e.stop(d)
                }
                var c, e = !1,
                    f = K.timers,
                    g = K._data(this);
                if (d || K._unmark(!0, this), null == a)
                    for (c in g) g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                else g[c = a + ".run"] && g[c].stop && b(this, g, c);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
                d && e || K.dequeue(this, a)
            })
        }
    }), K.each({
        slideDown: E("show", 1),
        slideUp: E("hide", 1),
        slideToggle: E("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        K.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), K.extend({
        speed: function(a, b, c) {
            var d = a && "object" == typeof a ? K.extend({}, a) : {
                complete: c || !c && b || K.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !K.isFunction(b) && b
            };
            return d.duration = K.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in K.fx.speeds ? K.fx.speeds[d.duration] : K.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function(a) {
                K.isFunction(d.old) && d.old.call(this), d.queue ? K.dequeue(this, d.queue) : a !== !1 && K._unmark(this)
            }, d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), K.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (K.fx.step[this.prop] || K.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, b = K.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
        },
        custom: function(a, c, d) {
            function e(a) {
                return f.step(a)
            }
            var f = this,
                g = K.fx;
            this.startTime = sb || C(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (K.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function() {
                f.options.hide && K._data(f.elem, "fxshow" + f.prop) === b && K._data(f.elem, "fxshow" + f.prop, f.start)
            }, e() && K.timers.push(e) && !rb && (rb = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = K._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || K.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), K(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = K._data(this.elem, "fxshow" + this.prop) || K.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = sb || C(),
                f = !0,
                g = this.elem,
                h = this.options;
            if (a || e >= h.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), h.animatedProperties[this.prop] = !0;
                for (b in h.animatedProperties) h.animatedProperties[b] !== !0 && (f = !1);
                if (f) {
                    if (null == h.overflow || K.support.shrinkWrapBlocks || K.each(["", "X", "Y"], function(a, b) {
                            g.style["overflow" + b] = h.overflow[a]
                        }), h.hide && K(g).hide(), h.hide || h.show)
                        for (b in h.animatedProperties) K.style(g, b, h.orig[b]), K.removeData(g, "fxshow" + b, !0), K.removeData(g, "toggle" + b, !0);
                    d = h.complete, d && (h.complete = !1, d.call(g))
                }
                return !1
            }
            return h.duration == 1 / 0 ? this.now = e : (c = e - this.startTime, this.state = c / h.duration, this.pos = K.easing[h.animatedProperties[this.prop]](this.state, c, 0, 1, h.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, K.extend(K.fx, {
        tick: function() {
            for (var a, b = K.timers, c = 0; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || K.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(rb), rb = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                K.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), K.each(["width", "height"], function(a, b) {
        K.fx.step[b] = function(a) {
            K.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }), K.expr && K.expr.filters && (K.expr.filters.animated = function(a) {
        return K.grep(K.timers, function(b) {
            return a === b.elem
        }).length
    });
    var xb = /^t(?:able|d|h)$/i,
        yb = /^(?:body|html)$/i;
    "getBoundingClientRect" in H.documentElement ? K.fn.offset = function(a) {
        var b, c = this[0];
        if (a) return this.each(function(b) {
            K.offset.setOffset(this, a, b)
        });
        if (!c || !c.ownerDocument) return null;
        if (c === c.ownerDocument.body) return K.offset.bodyOffset(c);
        try {
            b = c.getBoundingClientRect()
        } catch (d) {}
        var e = c.ownerDocument,
            f = e.documentElement;
        if (!b || !K.contains(f, c)) return b ? {
            top: b.top,
            left: b.left
        } : {
            top: 0,
            left: 0
        };
        var g = e.body,
            h = G(e),
            i = f.clientTop || g.clientTop || 0,
            j = f.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || K.support.boxModel && f.scrollTop || g.scrollTop,
            l = h.pageXOffset || K.support.boxModel && f.scrollLeft || g.scrollLeft,
            m = b.top + k - i,
            n = b.left + l - j;
        return {
            top: m,
            left: n
        }
    } : K.fn.offset = function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            K.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return K.offset.bodyOffset(b);
        for (var c, d = b.offsetParent, e = b, f = b.ownerDocument, g = f.documentElement, h = f.body, i = f.defaultView, j = i ? i.getComputedStyle(b, null) : b.currentStyle, k = b.offsetTop, l = b.offsetLeft;
            (b = b.parentNode) && b !== h && b !== g && (!K.support.fixedPosition || "fixed" !== j.position);) c = i ? i.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === d && (k += b.offsetTop, l += b.offsetLeft, !K.support.doesNotAddBorder || K.support.doesAddBorderForTableAndCells && xb.test(b.nodeName) || (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), K.support.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), j = c;
        return ("relative" === j.position || "static" === j.position) && (k += h.offsetTop, l += h.offsetLeft), K.support.fixedPosition && "fixed" === j.position && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft)), {
            top: k,
            left: l
        }
    }, K.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(K.css(a, "marginTop")) || 0, c += parseFloat(K.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = K.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = K(a),
                h = g.offset(),
                i = K.css(a, "top"),
                j = K.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && K.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), K.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, K.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = yb.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(K.css(a, "marginTop")) || 0, c.left -= parseFloat(K.css(a, "marginLeft")) || 0, d.top += parseFloat(K.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(K.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || H.body; a && !yb.test(a.nodeName) && "static" === K.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    }), K.each(["Left", "Top"], function(a, c) {
        var d = "scroll" + c;
        K.fn[d] = function(c) {
            var e, f;
            return c === b ? (e = this[0]) ? (f = G(e), f ? "pageXOffset" in f ? f[a ? "pageYOffset" : "pageXOffset"] : K.support.boxModel && f.document.documentElement[d] || f.document.body[d] : e[d]) : null : this.each(function() {
                f = G(this), f ? f.scrollTo(a ? K(f).scrollLeft() : c, a ? c : K(f).scrollTop()) : this[d] = c
            })
        }
    }), K.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        K.fn["inner" + c] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(K.css(a, d, "padding")) : this[d]() : null
        }, K.fn["outer" + c] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(K.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, K.fn[d] = function(a) {
            var e = this[0];
            if (!e) return null == a ? null : this;
            if (K.isFunction(a)) return this.each(function(b) {
                var c = K(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (K.isWindow(e)) {
                var f = e.document.documentElement["client" + c],
                    g = e.document.body;
                return "CSS1Compat" === e.document.compatMode && f || g && g["client" + c] || f
            }
            if (9 === e.nodeType) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var h = K.css(e, d),
                    i = parseFloat(h);
                return K.isNumeric(i) ? i : h
            }
            return this.css(d, "string" == typeof a ? a : a + "px")
        }
    }), a.$dy = K, "function" == typeof define && define.amd && define.amd.$dy && define("$dy", [], function() {
        return K
    })
}(window),
function(a) {
    a.fn.lightbox_me = function(b) {
        return this.each(function() {
            function c() {
                i[0].style;
                g.destroyOnClose ? i.add(h).remove() : i.add(h).hide(), g.parentLightbox && g.parentLightbox.fadeIn(200), g.preventScroll && a("body").css("overflow", ""), j.remove(), i.undelegate(g.closeSelector, "click"), i.unbind("close", c), i.unbind("repositon", f), a(window).unbind("resize", e), a(window).unbind("resize", f), a(window).unbind("scroll", f), a(window).unbind("keyup.lightbox_me"), g.onClose()
            }

            function d(a) {
                (27 == a.keyCode || 27 == a.DOM_VK_ESCAPE && 0 == a.which) && g.closeEsc && c()
            }

            function e() {
                a(window).height() < a(document).height() ? (h.css({
                    height: a(document).height() + "px"
                }), j.css({
                    height: a(document).height() + "px"
                })) : h.css({
                    height: "100%"
                })
            }

            function f() {
                i[0].style;
                if (i.css({
                        left: "50%",
                        marginLeft: i.outerWidth() / 2 * -1,
                        zIndex: g.zIndex + 3
                    }), i.height() + 80 >= a(window).height() && "absolute" != i.css("position")) {
                    var b = a(document).scrollTop() + 40;
                    i.css({
                        position: "absolute",
                        top: b + "px",
                        marginTop: 0
                    })
                } else i.height() + 80 < a(window).height() && (g.centered ? i.css({
                    position: "fixed",
                    top: "50%",
                    marginTop: i.outerHeight() / 2 * -1
                }) : i.css({
                    position: "fixed"
                }).css(g.modalCSS), g.preventScroll && a("body").css("overflow", "hidden"))
            }
            var g = a.extend({}, a.fn.lightbox_me.defaults, b),
                h = a(),
                i = a(this),
                j = a('<iframe id="foo" style="z-index: ' + (g.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>');
            if (g.showOverlay) {
                var k = a(".js_lb_overlay:visible");
                h = a(k.length > 0 ? '<div class="lb_overlay_clear js_lb_overlay"/>' : '<div class="' + g.classPrefix + '_overlay js_lb_overlay"/>')
            }
            a("body").append(i.hide()).append(h), g.showOverlay && (e(), h.css({
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: g.zIndex + 2,
                display: "none"
            }), h.hasClass("lb_overlay_clear") || h.css(g.overlayCSS)), g.showOverlay ? h.fadeIn(g.overlaySpeed, function() {
                f(), i[g.appearEffect](g.lightboxSpeed, function() {
                    e(), f(), g.onLoad()
                })
            }) : (f(), i[g.appearEffect](g.lightboxSpeed, function() {
                g.onLoad()
            })), g.parentLightbox && g.parentLightbox.fadeOut(200), a(window).resize(e).resize(f).scroll(f), a(window).bind("keyup.lightbox_me", d), g.closeClick && h.click(function(a) {
                c(), a.preventDefault
            }), i.delegate(g.closeSelector, "click", function(a) {
                c(), a.preventDefault()
            }), i.bind("close", c), i.bind("reposition", f)
        })
    }, a.fn.lightbox_me.defaults = {
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 100,
        lightboxSpeed: 150,
        closeSelector: ".close",
        closeClick: !0,
        closeEsc: !0,
        destroyOnClose: !1,
        showOverlay: !0,
        parentLightbox: !1,
        preventScroll: !1,
        onLoad: function() {},
        onClose: function() {},
        classPrefix: "lb",
        zIndex: 99999,
        centered: !1,
        modalCSS: {
            top: "40px"
        },
        overlayCSS: {
            background: "black",
            opacity: .3
        }
    }
}($dy), "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function(a) {
        var b = {
            settings: {
                pagination: !0,
                paginationFadeSpeed: 300,
                speed: 1e3,
                autoScrollSpeed: 6e3,
                firstSlide: 0,
                experimentId: null,
                variationIds: null,
                shadowStyle: {}
            },
            init: function(b, c) {
                this.options = a.extend({}, this.settings, c), this.itemIndex = this.options.firstSlide, this.container = b, this.items = this.container.children(),
                    this.items.hide(), this.items.eq(this.options.firstSlide).show(), this.noOfItems = this.items.length, this.insertPagination(), this.updateBtnStyles(), this.listenToInView(), this.listenToClick(), this.animate(), this.setScroll()
            },
            insertPagination: function() {
                this.shadow = a("<div>"), this.shadow.css("display", "block").css("position", "absolute").css("left", "50%").css("bottom", "0").css("z-index", "1").css("height", "40px").css("text-align", "center").css(this.options.shadowStyle).hide(), this.shadow.appendTo(this.container);
                var b = document.createElement("div");
                if (b.style.cssText = "width:calc(10px);", b.style.length || (this.container.height(this.shadow.css("max-height")), this.shadow.height(this.shadow.css("max-height")), this.shadow.css("top", this.shadow.height() - 70), this.shadow.css("bottom", ""), this.shadow.parents('*[data-dy-exp-id^=""]').height(this.shadow.css("max-height"))), this.noOfItems < 2 && (this.options.pagination = !1), this.options.pagination) {
                    var c, d, e = this,
                        f = !1,
                        g = !1;
                    c = function() {
                        g = !0, f || e.shadow.fadeIn(e.options.paginationFadeSpeed, function() {
                            f = !0, g || d()
                        })
                    }, d = function() {
                        g = !1, f && e.shadow.fadeOut(e.options.paginationFadeSpeed, function() {
                            f = !1, g && c()
                        })
                    }, this.options.autoScrollSpeed > 0 ? (this.container.mouseenter(c), this.container.mouseleave(d)) : c();
                    var h, i = [];
                    for (this.paginationLinks = a("<div>"), this.paginationLinks.css("display", "inline-block").css("position", "relative").css("z-index", "2").css("top", "calc(100% - 32px)").css("margin-left", "-100%").css("direction", "ltr"), $dy.browser.msie && $dy.browser.version <= 8.5 && this.paginationLinks.css("margin-top", "20px"), h = 0; h < this.noOfItems; h++) i[h] = a('<a href="#item-' + h + '"><div></div></a>').css("display", "inline-block").css("box-sizing", "content-box").css("padding", "10px 5px").css("overflow", "hidden"), h == this.noOfItems - 1 && i[h].css("margin-right", "0"), i[h].children("div").css("display", "block").css("width", "10px").css("height", "10px").css("border-radius", "6px").css("border", "1px solid #ffffff").css("background", "#bbbbbb"), this.paginationLinks.append(i[h]);
                    this.paginationLinks.appendTo(this.shadow).find("a").bind("click.carousel", a.proxy(this, "paginationHandler")).bind("mousedown.carousel", function() {
                        return !1
                    })
                }
            },
            paginationHandler: function(a) {
                return this.setItemIndex(parseInt((a.target.hash || a.target.parentElement.hash).substr(1).split("-")[1])), this.animate(), this.setScroll(), !1
            },
            nextItem: function() {
                this.setItemIndex(this.itemIndex + 1), this.animate()
            },
            updateBtnStyles: function() {
                this.options.pagination && this.paginationLinks.children().children().removeClass("current").css("background", "#bbbbbb").css("border", "1px solid #ffffff").eq(this.itemIndex).addClass("current").css("background", "#ffffff").css("border", "1px solid #bbbbbb")
            },
            setItemIndex: function(a) {
                this.prevItemIndex = this.itemIndex, this.itemIndex = a
            },
            normalizeIndex: function(a) {
                for (var b = a; b >= this.noOfItems;) b -= this.noOfItems;
                for (; 0 > b;) b += this.noOfItems;
                return b
            },
            listenToInView: function() {
                this.inView = !1;
                var a = this;
                this.container.parent().bind("inview", function(b, c, d, e) {
                    c && "both" == d && "both" == e && !a.inView ? (a.inView = !0, a.animate()) : a.inView = !1
                })
            },
            reportClick: function() {
                this.container.trigger("dyexpuclick", [
                    [{
                        id: this.items.eq(this.itemIndex).attr("data-dy-var-id"),
                        idx: this.itemIndex
                    }]
                ])
            },
            listenToClick: function() {
                var b = this;
                this.items.mousedown(a.proxy(this, "reportClick")), this.shadow.mousedown(a.proxy(this, "reportClick"));
                var c = !1;
                this.container.find("iframe").mouseenter(function() {
                    c = !0
                }).mouseout(function() {
                    c = !1
                }), $dy(window).blur(function() {
                    c && b.reportClick()
                })
            },
            animate: function() {
                var a, b;
                this.itemIndex = this.normalizeIndex(this.itemIndex), this.prevItemIndex = this.normalizeIndex(this.prevItemIndex), this.inView && this.container.trigger("dyexpurimp", [
                    [{
                        id: this.items.eq(this.itemIndex).attr("data-dy-var-id"),
                        idx: this.itemIndex
                    }]
                ]), this.itemIndex != this.prevItemIndex && (b = this.items.eq(this.prevItemIndex), a = this.items.eq(this.itemIndex), b.fadeOut(this.options.speed, function() {
                    b.hide()
                }), a.fadeIn(this.options.speed), this.updateBtnStyles())
            },
            setScroll: function() {
                if (0 != this.options.autoScrollSpeed) {
                    clearTimeout(this.autoScrollTimeoutHandle), this.autoScrollTimeoutHandle = null;
                    var a = this;
                    this.autoScrollTimeoutHandle = setTimeout(function() {
                        a.autoScrollTimeoutHandle = null, a.nextItem(), a.setScroll()
                    }, this.options.autoScrollSpeed)
                }
            }
        };
        a.fn.dyCarousel = function(c) {
            return this.each(function() {
                var d = Object.create(b);
                d.init(a(this), c), a.data(this, "carousel", d)
            })
        }
    }($dy), $dy.extend({
        renderSmartCarousel: function(a, b, c) {
            try {
                var d = document.createElement("div");
                d.setAttribute("style", "position:relative;max-width:" + b.width + "px;height:0;padding-bottom:calc(" + b.height + "% / " + b.width + " * 100);"), d.setAttribute("data-dy-exp-id", b.expId), "undefined" != typeof b.versionDataStr && d.setAttribute("data-dy-ver-data", b.versionDataStr), "undefined" != typeof b.attributionProps && null != b.attributionProps && "undefined" != typeof b.attributionProps.method && (d.setAttribute("data-dy-att-method", b.attributionProps.method), d.setAttribute("data-dy-att-seq", b.attributionProps.sesLoadSeq)), a.appendChild(d);
                for (var e = 0; e < c.length; e++) {
                    var f = document.createElement("a");
                    f.href = c[e].image_click_url, f.target = c[e].image_click_url_target || "_top", f.setAttribute("style", "display:none;position:absolute;"), f.setAttribute("data-dy-var-id", c[e].id), f.innerHTML = '<img src="' + c[e].image_url + '" style="width:100%;height:100%;max-height:' + b.height + 'px;border:none;" />', d.appendChild(f)
                }
                d.childNodes.length > 0 && ($dy(d).dyCarousel({
                    autoScrollSpeed: b.scrollSpeed,
                    shadowStyle: {
                        "max-height": b.height + "px"
                    }
                }), DY.AdDetection.monitorExpUnit(d))
            } catch (g) {}
        },
        renderSmartTagSlider: function(a, b, c) {
            try {
                var d = document.createElement("div");
                d.setAttribute("style", "position:relative;max-width:" + b.width + "px;height:0;padding-bottom:calc(" + b.height + "% / " + b.width + " * 100);"), a.setAttribute("data-dy-exp-id", b.expId), "undefined" != typeof b.versionDataStr && a.setAttribute("data-dy-ver-data", b.versionDataStr), "undefined" != typeof b.attributionProps && null != b.attributionProps && (a.setAttribute("data-dy-att-method", b.attributionProps.method), a.setAttribute("data-dy-att-seq", b.attributionProps.sesLoadSeq)), a.appendChild(d), a.setAttribute("style", "position:relative;max-width:" + b.width + "px;max-height:" + b.height + "px;");
                for (var e = 0; e < c.length; e++) {
                    var f = document.createElement("div");
                    f.setAttribute("style", "display:none;position:absolute;"), f.setAttribute("data-dy-var-id", c[e].variation), f.appendChild(c[e].element), d.appendChild(f)
                }
                d.childNodes.length > 0 && ($dy(d).dyCarousel({
                    autoScrollSpeed: b.scrollSpeed,
                    shadowStyle: {
                        "max-height": b.height + "px"
                    }
                }), DY.AdDetection.monitorExpUnit(a))
            } catch (g) {}
        }
    }),
    function(a) {
        function b() {
            var b, c, d = {
                height: i.innerHeight,
                width: i.innerWidth
            };
            return d.height || (b = h.compatMode, (b || !a.support.boxModel) && (c = "CSS1Compat" === b ? j : h.body, d = {
                height: c.clientHeight,
                width: c.clientWidth
            })), d
        }

        function c() {
            return {
                top: i.pageYOffset || j.scrollTop || h.body.scrollTop,
                left: i.pageXOffset || j.scrollLeft || h.body.scrollLeft
            }
        }

        function d() {
            var d, h = a(),
                i = 0;
            if (a.each(g, function(a, b) {
                    var c = b.data.selector,
                        d = b.$element;
                    h = h.add(c ? d.find(c) : d)
                }), d = h.length)
                for (e = e || b(), f = f || c(); d > i; i++)
                    if (a.contains(j, h[i])) {
                        var k, l, m, n = a(h[i]),
                            o = {
                                height: n.height(),
                                width: n.width()
                            },
                            p = n.offset(),
                            q = n.data("inview");
                        if (!f || !e) return;
                        p.top + o.height > f.top && p.top < f.top + e.height && p.left + o.width > f.left && p.left < f.left + e.width ? (k = f.left > p.left ? "right" : f.left + e.width < p.left + o.width ? "left" : "both", l = f.top > p.top ? "bottom" : f.top + e.height < p.top + o.height ? "top" : "both", m = k + "-" + l, q && q === m || n.data("inview", m).trigger("inview", [!0, k, l])) : q && n.data("inview", !1).trigger("inview", [!1])
                    }
        }
        var e, f, g = {},
            h = document,
            i = window,
            j = h.documentElement,
            k = a.expando;
        a.event.special.inview = {
            add: function(b) {
                g[b.guid + "-" + this[k]] = {
                    data: b,
                    $element: a(this)
                }
            },
            remove: function(a) {
                try {
                    delete g[a.guid + "-" + this[k]]
                } catch (b) {}
            }
        }, a(i).bind("scroll resize", function() {
            e = f = null
        }), setInterval(d, 1e3)
    }($dy), "object" != typeof DYJSON && (DYJSON = {}),
    function() {
        "use strict";

        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toDYJSON && (i = i.toDYJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toDYJSON && (Date.prototype.toDYJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toDYJSON = Number.prototype.toDYJSON = Boolean.prototype.toDYJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof DYJSON.stringify && (DYJSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
            return str("", {
                "": a
            })
        }), "undefined" != typeof JSON && "function" == typeof JSON.parse && (DYJSON.parse = JSON.parse), "function" != typeof DYJSON.parse && (DYJSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(a, b, c, d) {
        "use strict";
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
        y = "dynotify", x = y + "js", g = y + "!blank", A = {
            t: "top",
            m: "middle",
            b: "bottom",
            l: "left",
            c: "center",
            r: "right"
        }, q = ["l", "c", "r"], E = ["t", "m", "b"], u = ["t", "b", "l", "r"], v = {
            t: "b",
            m: null,
            b: "t",
            l: "r",
            c: null,
            r: "l"
        }, w = function(a) {
            var b;
            return b = [], c.each(a.split(/\W+/), function(a, c) {
                var d;
                return d = c.toLowerCase().charAt(0), A[d] ? b.push(d) : void 0
            }), b
        }, D = {}, h = {
            name: "core",
            html: '<div class="' + x + '-wrapper">\n  <div class="' + x + '-arrow"></div>\n  <div class="' + x + '-container"></div>\n</div>',
            css: "." + x + "-corner {\n  position: fixed;\n  margin: 5px;\n  z-index: 1050;\n}\n\n." + x + "-corner ." + x + "-wrapper,\n." + x + "-corner ." + x + "-container {\n  position: relative;\n  display: block;\n  height: inherit;\n  width: inherit;\n  margin: 3px;\n}\n\n." + x + "-wrapper {\n  z-index: 1;\n  position: absolute;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n." + x + "-container {\n  display: none;\n  z-index: 1;\n  position: absolute;\n  cursor: pointer;\n}\n\n[data-dynotify-text],[data-dynotify-html] {\n  position: relative;\n}\n\n." + x + "-arrow {\n  position: absolute;\n  z-index: 2;\n  width: 0;\n  height: 0;\n}"
        }, C = {
            "border-radius": ["-webkit-", "-moz-"]
        }, o = function(a) {
            return D[a]
        }, f = function(b, d) {
            var e, f, g, h;
            if (!b) throw "Missing Style name";
            if (!d) throw "Missing Style definition";
            if (!d.html) throw "Missing Style HTML";
            return (null != (h = D[b]) ? h.cssElem : void 0) && (a.console, D[b].cssElem.remove()), d.name = b, D[b] = d, e = "", d.classes && c.each(d.classes, function(a, b) {
                return e += "." + x + "-" + d.name + "-" + a + " {\n", c.each(b, function(a, b) {
                    return C[a] && c.each(C[a], function(c, d) {
                        return e += "  " + d + a + ": " + b + ";\n"
                    }), e += "  " + a + ": " + b + ";\n"
                }), e += "}\n"
            }), d.css && (e += "/* styles for " + d.name + " */\n" + d.css), e && (d.cssElem = t(e), d.cssElem.attr("id", "dynotify-" + d.name)), g = {}, f = c(d.html), m("html", f, g), m("text", f, g), d.fields = g
        }, t = function(a) {
            var b;
            b = i("style"), b.attr("type", "text/css"), c("head").append(b);
            try {
                b.html(a)
            } catch (d) {
                try {
                    b[0].styleSheet.cssText = a
                } catch (e) {}
            }
            return b
        }, m = function(a, b, d) {
            var e;
            return "html" !== a && (a = "text"), e = "data-dynotify-" + a, l(b, "[" + e + "]").each(function() {
                var b;
                return b = c(this).attr(e), b || (b = g), d[b] = a
            })
        }, l = function(a, b) {
            return a.is(b) ? a : a.find(b)
        }, z = {
            clickToHide: !0,
            autoHide: !0,
            autoHideDelay: 5e3,
            arrowShow: !0,
            arrowSize: 5,
            breakNewLines: !0,
            elementPosition: "bottom",
            globalPosition: "top right",
            style: "bootstrap",
            className: "error",
            showAnimation: "slideDown",
            showDuration: 400,
            hideAnimation: "slideUp",
            hideDuration: 200,
            gap: 5
        }, s = function(a, b) {
            var d;
            return d = function() {}, d.prototype = a, c.extend(!0, new d, b)
        }, j = function(a) {
            return c.extend(z, a)
        }, i = function(a) {
            return c("<" + a + "></" + a + ">")
        }, p = {}, n = function(a) {
            var b;
            return a.is("[type=radio]") && (b = a.parents("form:first").find("[type=radio]").filter(function(b, d) {
                return c(d).attr("name") === a.attr("name")
            }), a = b.first()), a
        }, r = function(a, b, c) {
            var e, f;
            if ("string" == typeof c) c = parseInt(c, 10);
            else if ("number" != typeof c) return;
            if (!isNaN(c)) return e = A[v[b.charAt(0)]], f = b, a[e] !== d && (b = A[e.charAt(0)], c = -c), a[b] === d ? a[b] = c : a[b] += c, null
        }, B = function(a, b, c) {
            if ("l" === a || "t" === a) return 0;
            if ("c" === a || "m" === a) return c / 2 - b / 2;
            if ("r" === a || "b" === a) return c - b;
            throw "Invalid alignment"
        }, k = function(a) {
            return k.e = k.e || i("div"), k.e.text(a).html()
        }, e = function() {
            function a(a, b, d) {
                "string" == typeof d && (d = {
                    className: d
                }), this.options = s(z, c.isPlainObject(d) ? d : {}), this.loadHTML(), this.wrapper = c(h.html), this.wrapper.data(x, this), this.arrow = this.wrapper.find("." + x + "-arrow"), this.container = this.wrapper.find("." + x + "-container"), this.container.append(this.userContainer), a && a.length && (this.elementType = a.attr("type"), this.originalElement = a, this.elem = n(a), this.elem.data(x, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(b)
            }
            return a.prototype.loadHTML = function() {
                var a;
                return a = this.getStyle(), this.userContainer = c(a.html), this.userFields = a.fields
            }, a.prototype.show = function(a, b) {
                var c, d, e, f, g, h = this;
                if (d = function() {
                        return a || h.elem || h.destroy(), b ? b() : void 0
                    }, g = this.container.parent().parents(":hidden").length > 0, e = this.container.add(this.arrow), c = [], g && a) f = "show";
                else if (g && !a) f = "hide";
                else if (!g && a) f = this.options.showAnimation, c.push(this.options.showDuration);
                else {
                    if (g || a) return d();
                    f = this.options.hideAnimation, c.push(this.options.hideDuration)
                }
                return c.push(d), e[f].apply(e, c)
            }, a.prototype.setGlobalPosition = function() {
                var a, b, d, e, f, g, h, j;
                return j = this.getPosition(), h = j[0], g = j[1], f = A[h], a = A[g], e = h + "|" + g, b = p[e], b || (b = p[e] = i("div"), d = {}, d[f] = 0, "middle" === a ? d.top = "45%" : "center" === a ? d.left = "45%" : d[a] = 0, b.css(d).addClass("" + x + "-corner"), c("body").append(b)), b.prepend(this.wrapper)
            }, a.prototype.setElementPosition = function() {
                var a, b, d, e, f, g, h, i, j, k, l, m, n, o, p, s, t, w, x, y, z, C, D, G, H, I, J, K, L;
                for (D = this.getPosition(), y = D[0], w = D[1], x = D[2], l = this.elem.position(), i = this.elem.outerHeight(), m = this.elem.outerWidth(), j = this.elem.innerHeight(), k = this.elem.innerWidth(), G = this.wrapper.position(), f = this.container.height(), g = this.container.width(), o = A[y], s = v[y], t = A[s], h = {}, h[t] = "b" === y ? i : "r" === y ? m : 0, r(h, "top", l.top - G.top), r(h, "left", l.left - G.left), L = ["top", "left"], H = 0, J = L.length; J > H; H++) z = L[H], p = parseInt(this.elem.css("margin-" + z), 10), p && r(h, z, p);
                if (n = Math.max(0, this.options.gap - (this.options.arrowShow ? d : 0)), r(h, t, n), this.options.arrowShow) {
                    for (d = this.options.arrowSize, b = c.extend({}, h), a = this.userContainer.css("border-color") || this.userContainer.css("background-color") || "white", I = 0, K = u.length; K > I; I++) z = u[I], C = A[z], z !== s && (e = C === o ? a : "transparent", b["border-" + C] = "" + d + "px solid " + e);
                    r(h, A[s], d), F.call(u, w) >= 0 && r(b, A[w], 2 * d)
                } else this.arrow.hide();
                return F.call(E, y) >= 0 ? (r(h, "left", B(w, g, m)), b && r(b, "left", B(w, d, k))) : F.call(q, y) >= 0 && (r(h, "top", B(w, f, i)), b && r(b, "top", B(w, d, j))), this.container.is(":visible") && (h.display = "block"), this.container.removeAttr("style").css(h), b ? this.arrow.removeAttr("style").css(b) : void 0
            }, a.prototype.getPosition = function() {
                var a, b, c, d, e, f, g, h;
                if (b = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), a = w(b), 0 === a.length && (a[0] = "b"), c = a[0], F.call(u, c) < 0) throw "Must be one of [" + u + "]";
                return (1 === a.length || (d = a[0], F.call(E, d) >= 0 && (e = a[1], F.call(q, e) < 0)) || (f = a[0], F.call(q, f) >= 0 && (g = a[1], F.call(E, g) < 0))) && (a[1] = (h = a[0], F.call(q, h) >= 0 ? "m" : "l")), 2 === a.length && (a[2] = a[1]), a
            }, a.prototype.getStyle = function(a) {
                var b;
                if (a || (a = this.options.style), a || (a = "default"), b = D[a], !b) throw "Missing style: " + a;
                return b
            }, a.prototype.updateClasses = function() {
                var a, b;
                return a = ["base"], c.isArray(this.options.className) ? a = a.concat(this.options.className) : this.options.className && a.push(this.options.className), b = this.getStyle(), a = c.map(a, function(a) {
                    return "" + x + "-" + b.name + "-" + a
                }).join(" "), this.userContainer.attr("class", a)
            }, a.prototype.run = function(a, b) {
                var d, e, f, h, i, j = this;
                if (c.isPlainObject(b) ? c.extend(this.options, b) : "string" === c.type(b) && (this.options.color = b), this.container && !a) return void this.show(!1);
                if (this.container || a) {
                    e = {}, c.isPlainObject(a) ? e = a : e[g] = a;
                    for (f in e) d = e[f], h = this.userFields[f], h && ("text" === h && (d = k(d), this.options.breakNewLines && (d = d.replace(/\n/g, "<br/>"))), i = f === g ? "" : "=" + f, l(this.userContainer, "[data-dynotify-" + h + i + "]").html(d));
                    return this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide ? (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(function() {
                        return j.show(!1)
                    }, this.options.autoHideDelay)) : void 0
                }
            }, a.prototype.destroy = function() {
                return this.wrapper.remove()
            }, a
        }(), c[y] = function(a, b, d) {
            return a && a.nodeName || a.jquery ? c(a)[y](b, d) : (d = b, b = a, new e(null, b, d)), a
        }, c.fn[y] = function(a, b) {
            return c(this).each(function() {
                var d;
                return d = n(c(this)).data(x), d ? d.run(a, b) : new e(c(this), a, b)
            }), this
        }, c.extend(c[y], {
            defaults: j,
            addStyle: f,
            pluginOptions: z,
            getStyle: o,
            insertCSS: t
        }), c(function() {
            return t(h.css).attr("id", "dy-core-notify"), c(b).on("click notify-hide", "." + x + "-wrapper", function(a) {
                var b;
                return b = c(this).data(x), b && (b.options.clickToHide || "notify-hide" === a.type) ? b.show(!1) : void 0
            })
        })
    }(window, document, $dy), $dy.dynotify.addStyle("dy-notify", {
        html: "<div style='-webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);-moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);>'<div class='clearfix'><div class='title' data-dynotify-html='title'/></div></div>"
    });