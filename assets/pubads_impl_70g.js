(function() {
    var m, p = this,
        r = function(a) {
            return void 0 !== a
        },
        aa = function() {},
        ba = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" !=
                        typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ca = function(a) {
            return "array" == ba(a)
        },
        da = function(a) {
            var b = ba(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = function(a) {
            return "string" == typeof a
        },
        v = function(a) {
            return "number" == typeof a
        },
        ea = function(a) {
            return "function" == ba(a)
        },
        w = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        fa = "closure_uid_" +
        (1E9 * Math.random() >>> 0),
        ga = 0,
        ha = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ia = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        x = function(a, b, c) {
            x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
            return x.apply(null, arguments)
        },
        y = function(a, b) {
            var c = a.split("."),
                d = p;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) !c.length && r(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
        },
        z = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.la = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Oa = function(a, c, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[c].apply(a, g)
            }
        };
    var ja = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ja);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    z(ja, Error);
    ja.prototype.name = "CustomError";
    var ka;
    var la = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        ma = function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ua = function(a) {
            if (!na.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(oa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(pa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(qa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ra, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(sa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ta, "&#0;"));
            return a
        },
        oa = /&/g,
        pa = /</g,
        qa = />/g,
        ra = /"/g,
        sa = /'/g,
        ta = /\x00/g,
        na = /[\x00&<>"']/,
        xa = function(a) {
            return -1 != a.indexOf("&") ? "document" in p ? va(a) : wa(a) : a
        },
        va = function(a) {
            var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                c;
            c = p.document.createElement("div");
            return a.replace(ya, function(a, e) {
                var f = b[a];
                if (f) return f;
                if ("#" == e.charAt(0)) {
                    var g = Number("0" + e.substr(1));
                    isNaN(g) || (f = String.fromCharCode(g))
                }
                f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
                return b[a] = f
            })
        },
        wa = function(a) {
            return a.replace(/&([^;]+);/g, function(a, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        if ("#" == c.charAt(0)) {
                            var d = Number("0" + c.substr(1));
                            if (!isNaN(d)) return String.fromCharCode(d)
                        }
                        return a
                }
            })
        },
        ya = /&([^;\s<&]+);?/g,
        za = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\"
        },
        Aa = {
            "'": "\\'"
        },
        Ba = function(a) {
            a = String(a);
            if (a.quote) return a.quote();
            for (var b = ['"'], c = 0; c < a.length; c++) {
                var d = a.charAt(c),
                    e = d.charCodeAt(0),
                    f = b,
                    g = c + 1,
                    h;
                if (!(h = za[d])) {
                    if (!(31 < e && 127 > e))
                        if (d in Aa) d = Aa[d];
                        else if (d in
                        za) d = Aa[d] = za[d];
                    else {
                        e = d;
                        h = d.charCodeAt(0);
                        if (31 < h && 127 > h) e = d;
                        else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        d = Aa[d] = e
                    }
                    h = d
                }
                f[g] = h
            }
            b.push('"');
            return b.join("")
        },
        Ca = function(a) {
            return null == a ? "" : String(a)
        },
        Da = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ea = Array.prototype,
        Fa = function(a, b) {
            if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ga = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ha = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = u(a) ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Ia = function(a, b) {
            for (var c = a.length, d = Array(c), e = u(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0,
                e[f], f, a));
            return d
        },
        Ja = function(a, b) {
            for (var c = a.length, d = u(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        Ka = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        La = function(a, b) {
            var c = Ka(a, b, void 0);
            0 <= c && Ea.splice.call(a, c, 1)
        },
        Ma = function(a) {
            return Ea.concat.apply(Ea, arguments)
        },
        Na = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Oa = function(a, b, c) {
            return 2 >=
                arguments.length ? Ea.slice.call(a, b) : Ea.slice.call(a, b, c)
        },
        Qa = function(a) {
            for (var b = {}, c = 0, d = 0; d < a.length;) {
                var e = a[d++],
                    f;
                f = e;
                f = w(f) ? "o" + (f[fa] || (f[fa] = ++ga)) : (typeof f).charAt(0) + f;
                Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
            }
            a.length = c
        },
        Ra = function(a, b) {
            for (var c = {}, d = 0; d < a.length; d++) {
                var e = a[d],
                    f = b.call(void 0, e, d, a);
                r(f) && (c[f] || (c[f] = [])).push(e)
            }
            return c
        };
    var Sa = function(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ua = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ta.length; f++) c = Ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var A = function(a, b) {
        this.x = r(a) ? a : 0;
        this.y = r(b) ? b : 0
    };
    A.prototype.clone = function() {
        return new A(this.x, this.y)
    };
    A.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    A.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    A.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var B = function(a, b) {
        this.width = a;
        this.height = b
    };
    m = B.prototype;
    m.clone = function() {
        return new B(this.width, this.height)
    };
    m.ma = function() {
        return this.width * this.height
    };
    m.isEmpty = function() {
        return !this.ma()
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Va;
    a: {
        var Wa = p.navigator;
        if (Wa) {
            var Xa = Wa.userAgent;
            if (Xa) {
                Va = Xa;
                break a
            }
        }
        Va = ""
    }
    var C = function(a) {
        return -1 != Va.indexOf(a)
    };
    var Ya = function() {
            return C("Opera") || C("OPR")
        },
        Za = function() {
            return (C("Chrome") || C("CriOS")) && !Ya() && !C("Edge")
        };
    var $a = function() {
        return C("iPhone") && !C("iPod") && !C("iPad")
    };
    var ab = Ya(),
        D = C("Trident") || C("MSIE"),
        bb = C("Edge"),
        cb = C("Gecko") && !(-1 != Va.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        db = -1 != Va.toLowerCase().indexOf("webkit") && !C("Edge"),
        eb = function() {
            var a = Va;
            if (cb) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (bb) return /Edge\/([\d\.]+)/.exec(a);
            if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (db) return /WebKit\/(\S+)/.exec(a)
        },
        fb = function() {
            var a = p.document;
            return a ? a.documentMode : void 0
        },
        gb = function() {
            if (ab && p.opera) {
                var a =
                    p.opera.version;
                return ea(a) ? a() : a
            }
            var a = "",
                b = eb();
            b && (a = b ? b[1] : "");
            return D && (b = fb(), b > parseFloat(a)) ? String(b) : a
        }(),
        hb = {},
        ib = function(a) {
            var b;
            if (!(b = hb[a])) {
                b = 0;
                for (var c = ma(String(gb)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "",
                        k = RegExp("(\\d*)(\\D*)", "g"),
                        n = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var l = k.exec(g) || ["", "", ""],
                            t = n.exec(h) || ["", "", ""];
                        if (0 == l[0].length && 0 == t[0].length) break;
                        b = Da(0 == l[1].length ? 0 : parseInt(l[1], 10), 0 == t[1].length ?
                            0 : parseInt(t[1], 10)) || Da(0 == l[2].length, 0 == t[2].length) || Da(l[2], t[2])
                    } while (0 == b)
                }
                b = hb[a] = 0 <= b
            }
            return b
        },
        jb = p.document,
        kb = jb && D ? fb() || ("CSS1Compat" == jb.compatMode ? parseInt(gb, 10) : 5) : void 0;
    var lb = !D || 9 <= kb,
        mb = !cb && !D || D && 9 <= kb || cb && ib("1.9.1");
    D && ib("9");
    var nb = D || ab || db;
    var qb = function(a) {
            return a ? new ob(pb(a)) : ka || (ka = new ob)
        },
        rb = function(a) {
            var b = document;
            return u(a) ? b.getElementById(a) : a
        },
        tb = function(a, b) {
            Sa(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : sb.hasOwnProperty(d) ? a.setAttribute(sb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        sb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        ub = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new B(a.clientWidth, a.clientHeight)
        },
        vb = function(a) {
            return a.scrollingElement ? a.scrollingElement : db || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
        },
        wb = function(a) {
            return a.parentWindow || a.defaultView
        },
        yb = function(a, b, c) {
            function d(c) {
                c && b.appendChild(u(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f =
                    c[e];
                !da(f) || w(f) && 0 < f.nodeType ? d(f) : Ga(xb(f) ? Na(f) : f, d)
            }
        },
        zb = function(a) {
            return mb && void 0 != a.children ? a.children : Ha(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        },
        Ab = function(a) {
            var b;
            if (nb && !(D && ib("9") && !ib("10") && p.SVGElement && a instanceof p.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return w(b) && 1 == b.nodeType ? b : null
        },
        pb = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        xb = function(a) {
            if (a && "number" == typeof a.length) {
                if (w(a)) return "function" == typeof a.item || "string" ==
                    typeof a.item;
                if (ea(a)) return "function" == typeof a.item
            }
            return !1
        },
        ob = function(a) {
            this.j = a || p.document || document
        };
    ob.prototype.l = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[0],
            g = e[1];
        if (!lb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ua(g.name), '"');
            if (g.type) {
                f.push(' type="', ua(g.type), '"');
                var h = {};
                Ua(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (u(g) ? f.className = g : ca(g) ? f.className = g.join(" ") : tb(f, g));
        2 < e.length && yb(d, f, e);
        return f
    };
    ob.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    ob.prototype.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Bb = function(a) {
        Bb[" "](a);
        return a
    };
    Bb[" "] = aa;
    var Cb = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Bb(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (d) {
                return !1
            }
        },
        Db = function(a, b) {
            if (!(1E-4 > Math.random())) {
                var c = Math.random();
                if (c < b) {
                    var d = window;
                    try {
                        var e = new Uint32Array(1);
                        d.crypto.getRandomValues(e);
                        c = e[0] / 65536 / 65536
                    } catch (f) {
                        c = Math.random()
                    }
                    return a[Math.floor(c * a.length)]
                }
            }
            return null
        },
        E = function(a, b, c) {
            for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
        },
        Eb = function(a, b, c, d) {
            a.addEventListener ?
                a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Fb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        Gb = function(a) {
            try {
                for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "http:":
                    case "file:":
                        return !1
                }
            } catch (c) {}
            return !0
        };
    var Hb = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    m = Hb.prototype;
    m.getWidth = function() {
        return this.right - this.left
    };
    m.getHeight = function() {
        return this.bottom - this.top
    };
    m.clone = function() {
        return new Hb(this.top, this.right, this.bottom, this.left)
    };
    m.contains = function(a) {
        return this && a ? a instanceof Hb ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var F = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    F.prototype.clone = function() {
        return new F(this.left, this.top, this.width, this.height)
    };
    var Ib = function(a) {
        return new Hb(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    F.prototype.contains = function(a) {
        return a instanceof F ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    F.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    F.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    F.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Jb = function(a, b) {
            var c;
            a: {
                c = pb(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c[b] || c.getPropertyValue(b) || "";
                    break a
                }
                c = ""
            }
            return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        Kb = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            D && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        Lb = function(a) {
            if (D && !(8 <= kb)) return a.offsetParent;
            var b = pb(a),
                c = Jb(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = Jb(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        Mb = function(a) {
            var b = pb(a),
                c = new A(0, 0),
                d;
            d = b ? pb(b) : document;
            var e;
            (e = !D) || (e = 9 <= kb);
            e || (e = "CSS1Compat" ==
                qb(d).j.compatMode);
            if (a == (e ? d.documentElement : d.body)) return c;
            a = Kb(a);
            d = qb(b).j;
            b = vb(d);
            d = wb(d);
            b = D && ib("10") && d.pageYOffset != b.scrollTop ? new A(b.scrollLeft, b.scrollTop) : new A(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        Nb = function(a) {
            "number" == typeof a && (a = Math.round(a) + "px");
            return a
        },
        Ob = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = db && !b && !c;
            return r(b) && !d || !a.getBoundingClientRect ? new B(b, c) : (a = Kb(a), new B(a.right - a.left, a.bottom - a.top))
        };
    var Pb = function() {
            this.j = []
        },
        Rb = function(a, b, c, d, e) {
            a.j.push(new Qb(b, c, d, e))
        },
        Qb = function(a, b, c, d) {
            this.m = a;
            this.j = (this.l = r(d) && a.style && a.style.getPropertyPriority) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.u = this.l ? a.style.getPropertyPriority(this.j) : null;
            this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, c, d)) : a.style[this.j] = c
        };
    var Sb = function(a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        G = function(a) {
            var b = [];
            Tb(new Ub, a, b);
            return b.join("")
        },
        Ub = function() {},
        Tb = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (ca(b)) {
                        var d =
                            b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), Tb(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Vb(d, c), c.push(":"), Tb(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Vb(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? b : "null");
                        break;
                    case "boolean":
                        c.push(b);
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        Wb = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Xb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        Vb = function(a, b) {
            b.push('"', a.replace(Xb, function(a) {
                var b = Wb[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Wb[a] = b);
                return b
            }), '"')
        };
    var Yb = function(a, b, c, d) {
        this.o = a;
        this.j = 1;
        this.m = b;
        this.v = c;
        this.F = d;
        this.u = Math.random();
        this.w = {};
        this.l = null;
        this.B = x(this.D, this)
    };
    Yb.prototype.D = function(a) {
        if (a.origin == this.v && a.source == this.m) {
            var b = null;
            try {
                b = Sb(a.data)
            } catch (c) {}
            if (w(b) && (a = b.i, b.c === this.o && a != this.u && (2 != this.j && (this.j = 2, Zb(this), this.l && (this.l(), this.l = null)), a = b.s, b = b.p, u(a) && (u(b) || w(b)) && this.w.hasOwnProperty(a)))) this.w[a](b)
        }
    };
    var Zb = function(a) {
        var b = {};
        b.c = a.o;
        b.i = a.u;
        a.m.postMessage(G(b), a.v)
    };
    Yb.prototype.C = function() {
        if (1 == this.j) {
            try {
                this.m.postMessage && Zb(this)
            } catch (a) {}
            window.setTimeout(x(this.C, this), 50)
        }
    };
    Yb.prototype.connect = function(a) {
        a && (this.l = a);
        Eb(window, "message", this.B);
        this.F && this.C()
    };
    var $b = function(a, b, c) {
            a.w[b] = c
        },
        ac = function(a, b, c) {
            var d = {};
            d.c = a.o;
            d.i = a.u;
            d.s = b;
            d.p = c;
            a.m.postMessage(G(d), a.v)
        };
    Yb.prototype.close = function() {
        3 != this.j && (this.j = 3, Fb(window, "message", this.B))
    };
    cb || db || D && ib(11);
    var bc = function(a) {
        this.o = a;
        this.u = null;
        this.D = this.m = 0;
        this.l = null;
        this.L = "sfchannel" + a
    };
    var cc = function(a, b, c, d, e, f) {
            this.m = a.clone();
            this.l = b.clone();
            this.o = c;
            this.j = d.clone();
            this.u = e;
            this.v = f
        },
        dc = function(a) {
            return G({
                windowCoords_t: a.m.top,
                windowCoords_r: a.m.right,
                windowCoords_b: a.m.bottom,
                windowCoords_l: a.m.left,
                frameCoords_t: a.l.top,
                frameCoords_r: a.l.right,
                frameCoords_b: a.l.bottom,
                frameCoords_l: a.l.left,
                styleZIndex: a.o,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.u,
                yInView: a.v
            })
        },
        ec = function(a) {
            var b =
                window.screenX || window.screenLeft || 0,
                c = window.screenY || window.screenTop || 0,
                b = new Hb(c, (window.outerWidth || document.documentElement.clientWidth || 0) - b, (window.outerHeight || document.documentElement.clientHeight || 0) - c, b),
                c = Mb(a),
                d;
            if ("none" != Jb(a, "display")) d = Ob(a);
            else {
                d = a.style;
                var e = d.display,
                    f = d.visibility,
                    g = d.position;
                d.visibility = "hidden";
                d.position = "absolute";
                d.display = "inline";
                var h = Ob(a);
                d.display = e;
                d.position = g;
                d.visibility = f;
                d = h
            }
            c = new F(c.x, c.y, d.width, d.height);
            d = Ib(c);
            for (var e = String(Jb(a,
                    "zIndex")), f = new Hb(0, Infinity, Infinity, 0), g = qb(a), k = g.j.body, n = g.j.documentElement, h = vb(g.j); a = Lb(a);)
                if (!(D && 0 == a.clientWidth || db && 0 == a.clientHeight && a == k) && a != k && a != n && "visible" != Jb(a, "overflow")) {
                    var l = Mb(a),
                        t = new A(a.clientLeft, a.clientTop);
                    l.x += t.x;
                    l.y += t.y;
                    f.top = Math.max(f.top, l.y);
                    f.right = Math.min(f.right, l.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, l.y + a.clientHeight);
                    f.left = Math.max(f.left, l.x)
                }
            a = h.scrollLeft;
            h = h.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, h);
            g = ub(wb(g.j) ||
                window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, h + g.height);
            a = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null;
            var q;
            if (null != a) a: {
                h = new F(a.left, a.top, a.right - a.left, a.bottom - a.top);
                q = Math.max(h.left, c.left);
                f = Math.min(h.left + h.width, c.left + c.width);
                if (q <= f && (g = Math.max(h.top, c.top), h = Math.min(h.top + h.height, c.top + c.height), g <= h)) {
                    q = new F(q, g, f - q, h - g);
                    break a
                }
                q = null
            }
            a = (f = (f = null != q && (0 != q.width || q.left + q.width != a.left && q.left != a.right)) && (0 != q.height || q.top + q.height !=
                a.top && q.top != a.bottom)) ? new Hb(Math.max(d.top - a.top, 0), Math.max(a.right - d.right, 0), Math.max(a.bottom - d.bottom, 0), Math.max(d.left - a.left, 0)) : new Hb(0, 0, 0, 0);
            g = f = 0;
            q && !(new B(q.width, q.height)).isEmpty() && (f = q.width / c.width, g = q.height / c.height);
            return new cc(b, d, e, a, f, g)
        };
    var fc = !1,
        gc = "",
        hc = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    if (navigator.plugins && navigator.plugins.length) {
        var ic = navigator.plugins["Shockwave Flash"];
        ic && (fc = !0, ic.description && (gc = hc(ic.description)));
        navigator.plugins["Shockwave Flash 2.0"] && (fc = !0, gc = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var jc = navigator.mimeTypes["application/x-shockwave-flash"];
        (fc = jc && jc.enabledPlugin) && (gc = hc(jc.enabledPlugin.description))
    } else try {
        var kc = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            fc = !0,
            gc = hc(kc.GetVariable("$version"))
    } catch (lc) {
        try {
            kc =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), fc = !0, gc = "6.0.21"
        } catch (mc) {
            try {
                kc = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), fc = !0, gc = hc(kc.GetVariable("$version"))
            } catch (nc) {}
        }
    }
    var oc = fc,
        pc = gc;
    var qc = function() {
        this.j = {
            shared: {
                sf_ver: "1-0-2",
                ck_on: navigator.cookieEnabled ? 1 : 0,
                flash_ver: oc ? pc : "0"
            }
        }
    };
    var rc = function() {
        this.j = !0;
        this.l = !1
    };
    var sc = function(a, b, c, d) {
        var e = new rc,
            f = new qc;
        this.v = a;
        this.j = b;
        this.l = c;
        this.o = e;
        this.m = f;
        this.u = d
    };
    var tc = function(a) {
            this.j = a
        },
        uc = function(a, b) {
            this.j = a;
            this.version = b
        };
    z(uc, tc);
    uc.prototype.m = function() {
        return G({
            uid: this.j,
            version: this.version
        })
    };
    var vc = function(a, b, c) {
        this.j = a;
        this.o = b;
        this.l = c
    };
    z(vc, tc);
    vc.prototype.m = function() {
        return G({
            uid: this.j,
            initialWidth: this.o,
            initialHeight: this.l
        })
    };
    var wc = function(a, b) {
        this.j = a;
        this.description = b
    };
    z(wc, tc);
    wc.prototype.m = function() {
        return G({
            uid: this.j,
            description: this.description
        })
    };
    var xc = function(a, b) {
        this.j = a;
        this.l = b
    };
    z(xc, tc);
    xc.prototype.m = function() {
        return G({
            uid: this.j,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left
        })
    };
    var yc = function(a) {
        this.j = a
    };
    z(yc, tc);
    yc.prototype.m = function() {
        return G({
            uid: this.j
        })
    };
    var zc = function(a, b) {
        this.j = a;
        this.o = b
    };
    z(zc, tc);
    zc.prototype.m = function() {
        var a = {
            uid: this.j,
            newGeometry: dc(this.o)
        };
        return G(a)
    };
    var Ac = function(a, b, c, d) {
        zc.call(this, a, c);
        this.u = b;
        this.l = d
    };
    z(Ac, zc);
    Ac.prototype.m = function() {
        var a = {
            uid: this.j,
            success: this.u,
            newGeometry: dc(this.o),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left
        };
        return G(a)
    };
    var Bc = function(a, b, c) {
        this.j = a;
        this.width = b;
        this.height = c
    };
    z(Bc, tc);
    Bc.prototype.m = function() {
        return G({
            uid: this.j,
            width: this.width,
            height: this.height
        })
    };
    var Fc = function(a) {
        bc.call(this, Cc++);
        this.B = a.Da;
        this.C = a.V;
        this.R = window.location.protocol + "//" + window.location.host;
        this.O = window.location.protocol + "//tpc.googlesyndication.com";
        this.I = Boolean(a.sa);
        this.F = 1 == a.size;
        this.T = a.sandbox || !1;
        this.v = new Pb;
        Dc(this, a.V, a.size);
        this.u = this.K = ec(a.V);
        this.j = Ec(this, a.xa, a.content, a.size);
        this.G = x(this.P, this);
        this.H = -1;
        this.w = 0;
        this.l = new Yb(this.L, this.j.contentWindow, this.O, !1);
        $b(this.l, "init_done", x(this.Aa, this));
        $b(this.l, "register_done", x(this.Ha,
            this));
        $b(this.l, "report_error", x(this.Ia, this));
        $b(this.l, "expand_request", x(this.ta, this));
        $b(this.l, "collapse_request", x(this.qa, this));
        $b(this.l, "creative_geometry_update", x(this.N, this));
        this.l.connect(x(this.Fa, this));
        if (a.ka) {
            var b = x(function() {
                var c;
                a: {
                    try {
                        if (this.j.contentWindow.frames.google_pubads_beacon_iframe) {
                            c = !0;
                            break a
                        }
                    } catch (d) {}
                    c = !1
                }
                c || (a.ka(), Fb(this.j, "load", b))
            }, this);
            Eb(this.j, "load", b)
        }
    };
    z(Fc, bc);
    var Cc = 1,
        Dc = function(a, b, c) {
            a.F ? (b.style.width = Nb("100%"), b.style.height = Nb("auto")) : (b.style.width = Nb(c.width), b.style.height = Nb(c.height))
        },
        Ec = function(a, b, c, d) {
            var e = qb(a.C);
            c = "1-0-2;" + c.length + ";" + c;
            var f;
            f = new sc(a.o, a.R, a.K, a.F);
            var g = f.v,
                h = f.j,
                k = dc(f.l),
                n;
            n = f.o;
            n = G({
                expandByOverlay: n.j,
                expandByPush: n.l,
                readCookie: !1,
                writeCookie: !1
            });
            f = {
                uid: g,
                hostPeerName: h,
                initialGeometry: k,
                permissions: n,
                metadata: G(f.m.j),
                reportCreativeGeometry: f.u
            };
            f = G(f);
            c = c + f;
            a.I && d instanceof B && (f = qb(a.C), Gc || (g = f.l("script", {
                src: "//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"
            }), Ab(f.j.getElementsByTagName("script")[0]).appendChild(g), Gc = !0), f = wb(f.j), f.google_eas_queue = f.google_eas_queue || [], f.google_eas_queue.push({
                a: b,
                b: f.location.protocol + "//tpc.googlesyndication.com",
                c: d.width,
                d: d.height,
                e: "sf-gdn-exp-" + a.o,
                f: void 0,
                g: void 0,
                h: void 0
            }));
            a.F ? (f = "100%", d = 0) : (f = d.width, d = d.height);
            g = wb(e.j);
            h = "//tpc.googlesyndication.com/safeframe/1-0-2/html/container.html";
            k = g;
            for (n = 0; k != k.parent;) n++,
                k = k.parent;
            (k = n) && (h += "?n=" + k);
            h = (Gb(g) ? "https:" : "http:") + h;
            if (a.I) {
                var l;
                a: {
                    if (g = g.location.href) {
                        k = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
                        try {
                            var t = k.exec(decodeURIComponent(g));
                            if (t) {
                                l = t[1] && 1 < t[1].length ? t[1].substring(1) : "true";
                                break a
                            }
                        } catch (q) {}
                    }
                    l = ""
                }
                h += "#" + [0 < l.length ? "google_debug" + (l ? "=" + l : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.o, "&p=", encodeURIComponent(p.document.location.protocol), "//", encodeURIComponent(p.document.location.host)].join("")
            }
            b = {
                id: b,
                name: c,
                src: h,
                scrolling: "no",
                marginWidth: "0",
                marginHeight: "0",
                width: String(f),
                height: String(d),
                "data-is-safeframe": "true"
            };
            l = {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                allowTransparency: "true",
                src: D && !ib(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank"
            };
            b && Ua(l, b);
            e = e.l("iframe", l);
            a.T && (e.sandbox = "allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock");
            a.C.appendChild(e);
            return e
        };
    m = Fc.prototype;
    m.Fa = function() {
        Eb(window, "resize", this.G);
        Eb(window, "scroll", this.G)
    };
    m.Aa = function(a) {
        try {
            if (0 != this.m) throw Error("Container already initialized");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = Sb(a);
            if (!(w(c) && v(c.uid) && u(c.version))) throw Error("Cannot parse JSON message");
            b = new uc(c.uid, c.version);
            if (this.o != b.j || "1-0-2" != b.version) throw Error("Wrong source container");
            this.m = 1
        } catch (d) {
            this.B.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
        }
    };
    m.Ha = function(a) {
        try {
            if (1 != this.m) throw Error("Container not initialized");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b = Sb(a);
            if (!(w(b) && v(b.uid) && v(b.initialWidth) && v(b.initialHeight))) throw Error("Cannot parse JSON message");
            if (this.o != (new vc(b.uid, b.initialWidth, b.initialHeight)).j) throw Error("Wrong source container");
            this.m = 2
        } catch (c) {
            this.B.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    m.Ia = function(a) {
        try {
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = Sb(a);
            if (!(w(c) && v(c.uid) && u(c.description))) throw Error("Cannot parse JSON message");
            b = new wc(c.uid, c.description);
            if (this.o != b.j) throw Error("Wrong source container");
            this.B.info("Ext reported an error. Description: " + b.description)
        } catch (d) {
            this.B.error("Invalid REPORT_ERROR message. Reason: " + d.message)
        }
    };
    m.ta = function(a) {
        try {
            if (2 != this.m) throw Error("Container is not registered");
            if (0 != this.D) throw Error("Container is not collapsed");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = Sb(a);
            if (!(w(c) && v(c.uid) && v(c.expand_t) && v(c.expand_r) && v(c.expand_b) && v(c.expand_l))) throw Error("Cannot parse JSON message");
            b = new xc(c.uid, new Hb(c.expand_t, c.expand_r, c.expand_b, c.expand_l));
            if (this.o != b.j) throw Error("Wrong source container");
            if (!(0 <= b.l.top && 0 <= b.l.left && 0 <= b.l.bottom && 0 <= b.l.right)) throw Error("Invalid expansion amounts");
            var d;
            var e = b.l,
                f = this.u = ec(this.j);
            if (e.top <= f.j.top && e.right <= f.j.right && e.bottom <= f.j.bottom && e.left <= f.j.left) {
                for (var g = this.j.parentNode; g && g.style; g = g.parentNode) Rb(this.v, g, "overflowX", "visible", "important"), Rb(this.v, g, "overflowY", "visible", "important");
                var h = Ib(new F(0, 0, this.u.l.getWidth(), this.u.l.getHeight()));
                w(e) ? (h.top -= e.top, h.right += e.right, h.bottom += e.bottom, h.left -= e.left) : (h.top -= e, h.right += void 0, h.bottom += void 0, h.left -= NaN);
                Rb(this.v, this.C, "position", "relative");
                Rb(this.v,
                    this.j, "zIndex", "10000");
                Rb(this.v, this.j, "position", "absolute");
                var k = h.getWidth();
                Rb(this.v, this.j, "width", k + "px", void 0);
                var n = h.getHeight();
                Rb(this.v, this.j, "height", n + "px", void 0);
                Rb(this.v, this.j, "left", h.left + "px", void 0);
                Rb(this.v, this.j, "top", h.top + "px", void 0);
                this.D = 2;
                this.u = ec(this.j);
                d = !0
            } else d = !1;
            ac(this.l, "expand_response", (new Ac(this.o, d, this.u, b.l)).m())
        } catch (l) {
            this.B.error("Invalid EXPAND_REQUEST message. Reason: " + l.message)
        }
    };
    m.qa = function(a) {
        try {
            if (2 != this.m) throw Error("Container is not registered");
            if (2 != this.D) throw Error("Container is not expanded");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b = Sb(a);
            if (!w(b) || !v(b.uid)) throw Error("Cannot parse JSON message");
            if (this.o != (new yc(b.uid)).j) throw Error("Wrong source container");
            Hc(this);
            ac(this.l, "collapse_response", (new zc(this.o, this.u)).m())
        } catch (c) {
            this.B.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    var Hc = function(a) {
        for (var b = a.v, c = b.j.length - 1; 0 <= c; c--) {
            var d = b.j[c];
            d.l ? (d.m.style.removeProperty(d.j), d.m.style.setProperty(d.j, d.o, d.u)) : d.m.style[d.j] = d.o
        }
        b.j.length = 0;
        a.D = 0;
        a.j && (a.u = ec(a.j))
    };
    Fc.prototype.P = function() {
        if (1 == this.m || 2 == this.m) switch (this.w) {
            case 0:
                Ic(this);
                this.H = setTimeout(x(this.J, this), 1E3);
                this.w = 1;
                break;
            case 1:
                this.w = 2;
                break;
            case 2:
                this.w = 2
        }
    };
    Fc.prototype.N = function(a) {
        try {
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = Sb(a);
            if (!(w(c) && v(c.uid) && v(c.width) && v(c.height))) throw Error("Cannot parse JSON message");
            b = new Bc(c.uid, c.width, c.height);
            if (this.o != b.j) throw Error("Wrong source container");
            this.F ? this.j.height = String(b.height) : this.B.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        } catch (d) {
            this.B.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + d.message)
        }
    };
    Fc.prototype.J = function() {
        if (1 == this.m || 2 == this.m) switch (this.w) {
            case 1:
                this.w = 0;
                break;
            case 2:
                Ic(this), this.H = setTimeout(x(this.J, this), 1E3), this.w = 1
        }
    };
    var Ic = function(a) {
            a.u = ec(a.j);
            ac(a.l, "geometry_update", (new zc(a.o, a.u)).m())
        },
        Jc = function(a) {
            100 != a.m && (2 == a.D && Hc(a), clearTimeout(a.H), a.H = -1, a.w = 3, a.l && (a.l.close(), a.l = null), Fb(window, "resize", a.G), Fb(window, "scroll", a.G), a.j && a.C == Ab(a.j) && a.C.removeChild(a.j), a.j = null, a.C = null, a.m = 100)
        },
        Gc = !1;
    var Kc = function(a, b, c, d, e) {
        this.slot = a;
        this.isEmpty = b;
        this.size = c;
        this.creativeId = d;
        this.lineItemId = e;
        this.serviceName = "publisher_ads";
        this.slotContentChanged = !0
    };
    var Lc = function(a, b) {
        this.j = a;
        this.l = b;
        this.B = this.j.getAdUnitPath();
        this.F = this.j.getSlotId().getInstance();
        var c = this.B,
            d = c.split("/");
        this.G = "/" == c.charAt(0) && 2 <= d.length ? d[1] : "/" != c.charAt(0) && 1 <= d.length ? d[0] : "";
        this.H = "";
        this.I = 0;
        this.o = null;
        this.u = 0;
        this.m = null
    };
    Lc.prototype.K = 0;
    Lc.prototype.C = !1;
    var Mc = 0,
        Nc = function(a) {
            a.K = 0;
            a.C = !1;
            a.v = null;
            a.D = null;
            a.w = null;
            a.J = null;
            a.m = null
        };
    Lc.prototype.getAdUnitPath = function() {
        return this.B
    };
    Lc.prototype.getInstance = function() {
        return this.F
    };
    var H = function(a) {
            return a.B + "_" + a.F
        },
        I = function(a) {
            return a.j.getSlotId().getDomId()
        },
        J = function(a) {
            return "google_ads_iframe_" + H(a)
        };
    Lc.prototype.toString = function() {
        var a = this.j.getSlotId().toString();
        return "[gam.gut.AdSlot: nwid=" + this.G + ", adUnitPath=" + this.B + ", instance=" + this.F + ", iframeLoaded=" + this.C + ", tries=" + this.K + ", GUT slot id=" + a + "]"
    };
    var Oc = function(a, b) {
            a.v || (a.v = (new Date).getTime());
            a.j.fetchStarted(b || "")
        },
        Pc = function(a) {
            a.w || (a.w = (new Date).getTime());
            a.j.renderStarted()
        },
        K = function(a, b) {
            a.J || (a.J = (new Date).getTime());
            a.j.renderEnded(b)
        };
    Lc.prototype.L = function() {
        this.j.impressionViewable()
    };
    Lc.prototype.getSizes = function(a) {
        var b = a || window;
        a = null;
        b.top == b && (a = ub(window), a = this.j.getSizes(a.width, a.height));
        null == a && (a = this.j.getSizes());
        for (var b = [], c = 0; c < a.length; ++c) b.push([a[c].getWidth(), a[c].getHeight()]);
        return b
    };
    var Qc = function(a) {
            a = a.getSizes();
            for (var b = [], c = 0; c < a.length; ++c) b.push(a[c].join("x"));
            return b.join("|")
        },
        Rc = function(a) {
            var b = [],
                c = a.j.getTargetingMap();
            E(c, function(a, c) {
                for (var d = [], h = 0; h < a.length; ++h) d.push(encodeURIComponent(a[h]));
                b.push(encodeURIComponent(c) + "=" + d.join(","))
            });
            if (ea(a.j.getCategoryExclusions) && (a = a.j.getCategoryExclusions(), 0 < a.length && !("excl_cat" in c))) {
                for (var c = [], d = 0; d < a.length; ++d) c.push(encodeURIComponent(a[d]));
                b.push(encodeURIComponent("excl_cat") + "=" + c.join(","))
            }
            return b.join("&")
        };
    m = Lc.prototype;
    m.getContentUrl = function() {
        return this.j.getContentUrl()
    };
    m.setClickUrl = function(a) {
        this.j.setClickUrl(a)
    };
    m.getClickUrl = function() {
        return this.j.getClickUrl()
    };
    m.getOutOfPage = function() {
        return this.j.getOutOfPage()
    };
    m.getAudExtId = function() {
        return this.j.getAudExtId()
    };
    m.getCollapseEmptyDiv = function() {
        return this.j.getCollapseEmptyDiv()
    };
    m.getDivStartsCollapsed = function() {
        return this.j.getDivStartsCollapsed()
    };
    m.getFirstLook = function() {
        return this.j.getFirstLook()
    };
    var Sc = function(a, b) {
            var c = null,
                d = !0,
                e = null,
                f = null;
            w(b) && (d = b._empty_, d || (c = [b._width_, b._height_], 0 == b._is_afc_ && b._creative_ids_ && b._adgroup2_ids_ && (e = b._creative_ids_[0], f = b._adgroup2_ids_[0])));
            return new Kc(a.j, d, c, e, f)
        },
        Tc = function(a) {
            return new Kc(a.j, !0, null, null, null)
        },
        Uc = function(a) {
            a.u = ++Mc;
            return a.u
        };
    var Vc = {
            google_ad_channel: "channel",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_ad_section: "region",
            google_ad_type: "ad_type",
            google_adtest: "adtest",
            google_available_width: "avail_w",
            google_allow_expandable_ads: "ea",
            google_alternate_ad_url: "alternate_ad_url",
            google_alternate_color: "alt_color",
            google_city: "gcs",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_line: "color_line",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_contents: "contents",
            google_country: "gl",
            google_cpm: "cpm",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_id: "cust_id",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_ed: "ed",
            google_ember_w: "em_w",
            google_ember_h: "em_h",
            google_encoding: "oe",
            google_flash_version: "flash",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_kw: "kw",
            google_kw_type: "kw_type",
            google_language: "hl",
            google_page_url: "url",
            google_pgb_reactive: "pra",
            google_region: "gr",
            google_reuse_colors: "reuse_colors",
            google_responsive_formats: "resp_fmts",
            google_safe: "adsafe",
            google_tag_info: "gut",
            google_targeting: "targeting",
            google_ui_features: "ui",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl"
        },
        Wc = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_format: "format",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_unit_key_2: "adk2",
            google_ad_width: "w",
            google_analytics_url_parameters: "aup",
            google_captcha_token: "captok",
            google_content_recommendation_ui_type: "crui",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_nofo: "nofo",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_only_ads_with_video: "only_ads_with_video",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_source_type: "src_type",
            google_sui: "sui",
            google_skip: "skip",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_origin: "to",
            google_tdsma: "tdsma",
            google_tfs: "tfs",
            google_tl: "tl"
        },
        Xc = {
            google_core_dbp: "dbp",
            google_lact: "lact",
            google_only_pyv_ads: "pyv",
            google_only_userchoice_ads: "uc",
            google_scs: "scs",
            google_with_pyv_ads: "withpyv",
            google_previous_watch: "p_w",
            google_previous_searches: "p_s",
            google_video_url_to_fetch: "durl",
            google_yt_pt: "yt_pt",
            google_yt_up: "yt_up"
        };
    var Yc = document,
        L = window;
    var $c = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            a.stack && (b = Zc(a.stack, b));
            return b
        },
        ad = function(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(a) {
                    c(a);
                    Fb(d, "load", e);
                    Fb(d, "error", e)
                };
                Eb(d, "load", e);
                Eb(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        },
        Zc = function(a, b) {
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,
                    "$1");
                return a.replace(/\n */g, "\n")
            } catch (d) {
                return b
            }
        };
    var bd = function(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
    };

    function M(a) {
        return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
    }

    function cd() {
        var a = dd,
            b = document,
            c = b.createElement("script");
        c.type = "text/javascript";
        c.src = a;
        var d = b.getElementsByTagName("head")[0];
        if (d) try {
            window.setTimeout(function() {
                d.appendChild(c)
            }, 0)
        } catch (e) {}
    }
    var fd = function(a, b) {
            ed(a, "load", b)
        },
        ed = function(a, b, c) {
            Eb(a, b, c, void 0)
        },
        hd = function() {
            var a = gd();
            "google_onload_fired" in a || (a.google_onload_fired = !1, fd(a, function() {
                a.google_onload_fired = !0
            }))
        };

    function id() {
        return "msie" in jd ? jd.msie : jd.msie = -1 != navigator.userAgent.toLowerCase().indexOf("msie")
    }
    var jd = {};

    function kd() {
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                for (var a = 3, b = 1; b;) try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a + 1)), a++
                } catch (c) {
                    b = null
                }
                return a.toString()
            }
            if (id() && !window.opera) {
                b = null;
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    a = 0;
                    try {
                        b =
                            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = 6, b.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 == a) return a.toString()
                    }
                    try {
                        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (f) {}
                }
                if (b) return a = b.GetVariable("$version").split(" ")[1], a.replace(/,/g, ".")
            }
        }
        return "0"
    }
    var ld = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    var md = !!window.google_async_iframe_id,
        nd = md && window.parent || window,
        gd = function() {
            if (md && !Cb(nd)) {
                for (var a = "." + Yc.domain; 2 < a.split(".").length && !Cb(nd);) Yc.domain = a = a.substr(a.indexOf(".") + 1), nd = window.parent;
                Cb(nd) || (nd = window)
            }
            return nd
        };
    var od = !1,
        pd = function(a, b, c) {
            "" != b && (c ? a.j.hasOwnProperty(c) && (a.j[c] = b) : a.l.push(b))
        },
        rd = function() {
            var a = qd,
                b = a.l.concat([]);
            E(a.j, function(a) {
                "" != a && b.push(a)
            });
            return b
        };
    od = !1;
    var sd = {},
        td = {},
        wd = function(a, b, c, d) {
            var e = ud,
                f, g = !0;
            try {
                f = b()
            } catch (h) {
                try {
                    var k = $c(h);
                    b = "";
                    h.fileName && (b = h.fileName);
                    var n = -1;
                    h.lineNumber && (n = h.lineNumber);
                    g = e(a, k, b, n, c)
                } catch (l) {
                    try {
                        var t = $c(l);
                        a = "";
                        l.fileName && (a = l.fileName);
                        c = -1;
                        l.lineNumber && (c = l.lineNumber);
                        ud("pAR", t, a, c, void 0, void 0)
                    } catch (q) {
                        vd({
                            context: "mRE",
                            msg: q.toString() + "\n" + (q.stack || "")
                        }, void 0)
                    }
                }
                if (!g) throw h;
            } finally {
                if (d) try {
                    d()
                } catch (Y) {}
            }
            return f
        },
        ud = function(a, b, c, d, e, f) {
            var g = {};
            if (e) try {
                e(g)
            } catch (h) {}
            g.context = a;
            g.msg =
                b.substring(0, 512);
            c && (g.file = c);
            0 < d && (g.line = d.toString());
            g.url = Yc.URL.substring(0, 512);
            g.ref = Yc.referrer.substring(0, 512);
            xd(g);
            vd(g, f);
            return !0
        },
        vd = function(a, b) {
            try {
                if (Math.random() < (b || .01)) {
                    var c = "/pagead/gen_204?id=jserror" + yd(a),
                        d = "http" + ("http:" == L.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c,
                        d = d.substring(0, 2E3);
                    ad(L, d, void 0)
                }
            } catch (e) {}
        },
        xd = function(a) {
            var b = a || {};
            bd(sd, function(a, d) {
                b[d] = a
            });
            bd(td, function(a, d) {
                null != L[a] && (b[d] = L[a])
            })
        },
        zd = function(a, b) {
            return function() {
                var c =
                    arguments;
                return wd(a, function() {
                    return b.apply(void 0, c)
                }, void 0, void 0)
            }
        },
        Ad = function(a) {
            return zd("osd::util::rschange", a)
        },
        yd = function(a) {
            var b = "";
            bd(a, function(a, d) {
                if (0 === a || a) b += "&" + d + "=" + M(String(a))
            });
            return b
        };
    var Bd = function(a, b) {
            for (var c = 0, d = a, e = 0; a && a != a.parent;)
                if (a = a.parent, e++, Cb(a)) d = a, c = e;
                else if (b) break;
            return {
                U: d,
                level: c
            }
        },
        Cd = null;
    var Dd = function(a) {
            this.S = a;
            N(this, 3, null);
            N(this, 4, 0);
            N(this, 5, 0);
            N(this, 6, 0);
            N(this, 15, 0);
            a = gd();
            a = Bd(a, !1).U;
            var b = a.google_global_correlator;
            b || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            N(this, 7, b);
            N(this, 8, {});
            N(this, 9, {});
            N(this, 10, {});
            N(this, 11, []);
            N(this, 12, 0);
            N(this, 16, null);
            N(this, 14, {});
            N(this, 17, !1)
        },
        Ed = {
            google_persistent_state: !0,
            google_persistent_state_async: !0
        },
        Fd = {},
        Gd = function(a) {
            var b = gd();
            a = a && Ed[a] ? a : md ? "google_persistent_state_async" : "google_persistent_state";
            if (Fd[a]) return Fd[a];
            var c = "google_persistent_state_async" == a ? {} : b,
                d = b[a];
            return null != d && "object" == typeof d && null != d.S && "object" == typeof d.S ? Fd[a] = d : b[a] = Fd[a] = new Dd(c)
        },
        Hd = function(a) {
            switch (a) {
                case 3:
                    return "google_exp_persistent";
                case 4:
                    return "google_num_sdo_slots";
                case 5:
                    return "google_num_0ad_slots";
                case 6:
                    return "google_num_ad_slots";
                case 7:
                    return "google_correlator";
                case 8:
                    return "google_prev_ad_formats_by_region";
                case 9:
                    return "google_prev_ad_slotnames_by_region";
                case 10:
                    return "google_num_slots_by_channel";
                case 11:
                    return "google_viewed_host_channels";
                case 12:
                    return "google_num_slot_to_show";
                case 14:
                    return "gaGlobal";
                case 15:
                    return "google_num_reactive_ad_slots";
                case 16:
                    return "google_persistent_language";
                case 17:
                    return "google_ose_setup_performed"
            }
            throw Error("unexpected state");
        },
        Id = function(a) {
            var b = Hd(14);
            return a.S[b]
        },
        N = function(a, b, c) {
            a = a.S;
            b = Hd(b);
            void 0 === a[b] && (a[b] = c)
        };
    var Jd = function(a) {
            return function() {
                return a
            }
        },
        Kd = function(a) {
            var b = arguments,
                c = b.length;
            return function() {
                for (var a = 0; a < c; a++)
                    if (!b[a].apply(this, arguments)) return !1;
                return !0
            }
        };
    var Ld = function(a, b, c, d, e, f) {
            var g = "";
            a && (g += a + ":");
            c && (g += "//", b && (g += b + "@"), g += c, d && (g += ":" + d));
            e && (g += e);
            f && (g += "?" + f);
            return g
        },
        Md = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        Pd = function(a) {
            if (Nd) {
                Nd = !1;
                var b = p.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = Od(c)) && c != b.hostname) throw Nd = !0, Error();
                }
            }
            return a.match(Md)
        },
        Nd = db,
        Od = function(a) {
            return (a = Pd(a)[3] || null) ? decodeURI(a) : a
        };

    function Qd(a, b, c, d) {
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (a.top == a) return !1;
        var e = b.documentElement;
        if (c && d) {
            var f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c) return !1
        }
        return !0
    }

    function Rd(a, b) {
        var c = {};
        c.Ka = Bd(window, !1).U;
        var d;
        var e = c.Ka;
        d = e.location.href;
        if (e == e.top) d = {
            url: d,
            ja: !0
        };
        else {
            var f = !1,
                g = e.document;
            g && g.referrer && (d = g.referrer, e.parent == e.top && (f = !0));
            (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == d.indexOf(e) && (f = !1, d = e);
            d = {
                url: d,
                ja: f
            }
        }
        c.La = d;
        c.za = Qd(gd(), b, a.google_ad_width, a.google_ad_height);
        d = c.za;
        f = c.La.ja;
        e = gd();
        e = e.top == e ? 0 : Cb(e.top) ? 1 : 2;
        g = 4;
        d || 1 != e ? d || 2 != e ? d && 1 == e ? g = 7 : d && 2 == e && (g = 8) : g = 6 : g = 5;
        f && (g |= 16);
        c.ya = "" + g;
        return c
    };
    var Sd = function(a) {
            this.j = {};
            this.l = a
        },
        Td = function(a, b, c, d) {
            b && (c || (c = ""), "google_gl" == b ? b = "google_country" : "google_region" == b && (b = "google_section"), b in a.l && ("undefined" == typeof d || d || !a.j[b]) && (a.j[b] = c))
        },
        Ud = function(a, b) {
            E(b.j, function(a, b) {
                this.j[b] || (this.j[b] = a)
            }, a)
        },
        Vd = function(a) {
            var b = new Sd(a.l);
            a = a.j;
            var c = {},
                d;
            for (d in a) c[d] = a[d];
            b.j = c;
            delete b.j.google_page_url;
            return b
        },
        Wd = function(a) {
            return a.j.google_page_url
        };
    Sd.prototype.M = function() {
        var a = [];
        E(this.j, function(b, c) {
            var d = Vc[c] || Wc[c] || Xc[c] || null;
            d && b && a.push(d + "=" + M(b))
        });
        return a.join("&")
    };
    var Yd = function(a, b, c, d) {
            var e = Xd(a, Vd(b), c, d);
            a = Xd(a, b, c, d);
            b = [];
            e[0] && 0 < e[0].length && b.push(e[0].join("&"));
            a[1] && 0 < a[1].length && b.push("sps=" + a[1].join("|"));
            return b.join("&")
        },
        Xd = function(a, b, c, d) {
            var e = [],
                f = [],
                g = b.j;
            E(d, function(b, d) {
                if (b) {
                    var n = "";
                    null != g[d] && (n = M(g[d]));
                    for (var l = [], t = -1, q = -1, Y = 0; Y < a.length; ++Y) {
                        var Pa = H(a[Y]);
                        ++t;
                        null == c[Pa] ? l.push("") : (Pa = c[Pa].j, null != Pa[d] ? (l.push(M(M(Pa[d]))), q = t) : l.push(""))
                    }
                    if (0 <= q) {
                        t = [];
                        t.push(M(n));
                        for (Y = 0; Y <= q; ++Y) t.push(l[Y]);
                        f.push(b + "," + t.join(","))
                    } else n &&
                        e.push(b + "=" + n)
                }
            });
            b = [];
            b.push(e);
            b.push(f);
            return b
        },
        Zd = function(a, b) {
            var c;
            a: {
                c = a.navigator;
                var d = c.userAgent,
                    e = c.platform,
                    f = /WebKit\/(\d+)/,
                    g = /rv\:(\d+\.\d+)/,
                    h = /rv\:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(d) && (f = (f.exec(d) || [0, 0])[1], g = (g.exec(d) || [0, 0])[1], /Win/.test(e) && /Trident/.test(d) && 11 <= b.documentMode || !f && "Gecko" == c.product && 27 <= g && !h.test(d) || 536 <= f)) {
                    c = !0;
                    break a
                }
                c = !1
            }
            d = Qd(a, a.document, 500, 300);
            e = {};
            if (!c || d) e.ea = "0";
            return e
        };
    var $d = C("Firefox"),
        ae = $a() || C("iPod"),
        be = C("iPad"),
        ce = C("Android") && !(Za() || C("Firefox") || Ya() || C("Silk")),
        de = Za(),
        ee = C("Safari") && !(Za() || C("Coast") || Ya() || C("Edge") || C("Silk") || C("Android")) && !($a() || C("iPad") || C("iPod"));
    var fe = function(a) {
        return (a = a.exec(Va)) ? a[1] : ""
    };
    (function() {
        if ($d) return fe(/Firefox\/([0-9.]+)/);
        if (D || ab) return gb;
        if (de) return fe(/Chrome\/([0-9.]+)/);
        if (ee && !($a() || C("iPad") || C("iPod"))) return fe(/Version\/([0-9.]+)/);
        if (ae || be) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Va)) return a[1] + "." + a[2]
        } else if (ce) return (a = fe(/Android\s+([0-9.]+)/)) ? a : fe(/Version\/([0-9.]+)/);
        return ""
    })();
    var ge = function(a, b, c) {
            b = b || L;
            a && b.top != b && (b = b.top);
            try {
                return b.document && !b.document.body ? new B(-1, -1) : c ? (new B(b.innerWidth, b.innerHeight)).round() : ub(b || window).round()
            } catch (d) {
                return new B(-12245933, -12245933)
            }
        },
        he = function(a, b) {
            id() && !window.opera ? ed(a, "readystatechange", Ad(function() {
                "complete" == a.readyState && b(null)
            })) : ed(a, "load", zd("osd::util::load", b))
        },
        ie = function() {
            var a = 0;
            !r(L.postMessage) && (a |= 1);
            return a
        };
    var O = function(a, b) {
            this.o = a;
            this.l = b && b.l ? b.l : [];
            this.w = b ? b.w : !1;
            this.m = b && b.m ? b.m : 0;
            this.v = b ? b.v : "";
            this.j = b && b.j ? b.j : [];
            this.u = null;
            this.B = !1;
            if (b) {
                var c;
                for (c = 0; c < this.l.length; ++c) this.l[c].push("true");
                for (c = 0; c < this.j.length; ++c) this.j[c].ia = !0
            }
        },
        dd = "",
        je = 0,
        ke = 0,
        le = function(a, b) {
            var c = a.l,
                d = a.o.google_ad_request_done;
            d && (d = d.orig_callback || d, a.o.google_ad_request_done = function(a) {
                if (a && 0 < a.length) {
                    var f = 1 < a.length ? a[1].url : null,
                        g = a[0].log_info || null,
                        h = a[0].activeview_url || null,
                        k = a[0].activeview_js_enabled ||
                        null,
                        n = a[0].activeview_js_immediate_enabled || null,
                        l = a[0].activeview_js_tos_enabled || null,
                        t = a[0].activeview_cid || null,
                        q = a[0].activeview_metadata || null;
                    c.push([b, xa(a[0].url), f, g, null, h, k, n, l, t, q])
                }
                d(a)
            }, a.o.google_ad_request_done.orig_callback = d)
        },
        me = function(a, b, c, d) {
            var e = a.l;
            if (0 < e.length)
                for (var f = b.document.getElementsByTagName("a"), g = 0; g < f.length; g++)
                    for (var h = 0; h < e.length; h++)
                        if (0 <= f[g].href.indexOf(e[h][1])) {
                            var k = f[g].parentNode;
                            if (e[h][2])
                                for (var n = k, l = 0; 4 > l; l++) {
                                    if (0 <= n.innerHTML.indexOf(e[h][2])) {
                                        k =
                                            n;
                                        break
                                    }
                                    n = n.parentNode
                                }
                            c(k, e[h][0], d || 0, !0, e[h][3], void 0, e[h][5], "true" == e[h][6], "true" == e[h][7], "true" == e[h][11], "true" == e[h][8], e[h][9], e[h][10]);
                            e.splice(h, 1);
                            break
                        }
            if (g = 0 < e.length) Cd || (Cd = Bd(window, !0).U), g = b != Cd;
            if (g) try {
                me(a, b.parent, c, d)
            } catch (t) {}
            for (g = 0; g < e.length; ++g) a = e[g], "true" == a[6] && ne("osd2", a[3]), "true" == a[7] && ne("osdim", a[3])
        },
        ne = function(a, b) {
            if (a && b) {
                var c = ["//"];
                c.push("pagead2.googlesyndication.com");
                c.push("/activeview");
                c.push("?id=" + a);
                c.push("&r=j");
                c.push("&avi=" + b);
                ad(L,
                    c.join(""), void 0)
            }
        };
    m = O.prototype;
    m.getNewBlocks = function(a, b) {
        b && me(this, this.o, a, 1);
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.o && e.j && (a(e.j, e.m, e.v, e.l, "", e.u, "", !1, !1, e.ia, !1, "", "", e.w), e.o = !0)
        }
        b && (this.u = a)
    };
    m.getRegisteredAdblockUrls = function() {
        for (var a = [], b = this.j.length, c = 0; c < b; c++) a.push(this.j[c].m);
        return a
    };
    m.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = window.google_enable_ose,
            c;
        !0 === b ? c = 2 : !1 !== b && (c = Db([0], ke), null == c && ((c = Db([2], je)) || (c = 3)));
        if (!c) return 0;
        this.m = c;
        this.v = String(a || 0);
        return this.getOseId()
    };
    m.getOseId = function() {
        return window && Math.random ? this.m : -1
    };
    m.getCorrelator = function() {
        return this.v
    };
    m.numBlocks = function() {
        return this.l.length + this.j.length
    };
    m.registerAdBlock = function(a, b, c, d, e, f, g) {
        var h = null;
        e && f && (h = {
            width: e,
            height: f
        });
        if (this.u && d) this.u(d, a, b, !0, "", h, "", !1, !1, !1, !1, "", "", g);
        else {
            if ("js" == c) le(this, a);
            else {
                var k = new oe(a, b, d, h, g);
                this.j.push(k);
                d && he(d, function() {
                    k.l = !0
                })
            }
            this.w || (hd(), cd(), this.w = !0)
        }
    };
    m.unloadAdBlock = function(a, b) {
        r(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, b)
    };
    m.setUpForcePeriscope = function() {
        window.google_enable_ose_periscope && (this.B = !0)
    };
    m.shouldForcePeriscope = function() {
        return this.B
    };
    var pe = function() {
            var a = gd(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new O(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            return a.__google_ad_urls = new O(a, b)
        },
        oe = function(a, b, c, d, e) {
            this.m = a;
            this.v = b;
            this.j = c;
            this.o = this.l = !1;
            this.u = d;
            this.ia = !1;
            this.w = e || aa
        };
    y("Goog_AdSense_getAdAdapterInstance", pe);
    y("Goog_AdSense_OsdAdapter", O);
    y("Goog_AdSense_OsdAdapter.prototype.numBlocks", O.prototype.numBlocks);
    y("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", O.prototype.getNewBlocks);
    y("Goog_AdSense_OsdAdapter.prototype.getOseId", O.prototype.getOseId);
    y("Goog_AdSense_OsdAdapter.prototype.getCorrelator", O.prototype.getCorrelator);
    y("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", O.prototype.getRegisteredAdblockUrls);
    y("Goog_AdSense_OsdAdapter.prototype.setupOse", O.prototype.setupOse);
    y("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", O.prototype.registerAdBlock);
    y("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", O.prototype.setUpForcePeriscope);
    y("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", O.prototype.shouldForcePeriscope);
    y("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", O.prototype.unloadAdBlock);
    var P = p.googletag._vars_,
        qe = P["#7#"],
        re = P["#20#"],
        dd = function(a, b) {
            wd("files::getSrc", function() {
                if ("https:" == L.location.protocol && "http" == b) throw b = "https", Error("Requested url " + a + "/pagead/osd.js");
            });
            return [b, "://", a, "/pagead/osd.js"].join("")
        }(P["#1#"], P["#6#"] ? "https" : "http"),
        je = qe,
        ke = re;
    var se = function(a, b) {
            var c = b[H(a)];
            return null != c ? Wd(c) : null
        },
        te = function(a, b, c) {
            if (null != Wd(b)) return !0;
            b = !1;
            for (var d = 0; d < a.length && !b; d++) b = null != se(a[d], c);
            return b
        },
        ue = function(a) {
            var b = a;
            "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
            return b
        },
        ve = /\+/g,
        we = function(a) {
            var b = P["#6#"];
            return a || b ? "https://" + P["#3#"] : "http://" + P["#2#"]
        },
        xe = function() {
            var a = navigator.userAgent,
                b = a.indexOf("MSIE ");
            return -1 ==
                b ? 0 : parseFloat(a.substring(b + 5, a.indexOf(";", b)))
        },
        ye = function() {
            var a = Va;
            return null != a && -1 != a.indexOf("MSIE ") && -1 == a.indexOf("IEMobile")
        },
        ze = function(a, b) {
            var c = 0,
                d = [];
            a && (d.push(a.getAdUnitPath()), d.push(Qc(a)), d.push(I(a)));
            if (b) {
                var e;
                e = [];
                for (var f = 0, g = b; g && 25 > f; g = g.parentNode, ++f) e.push(9 != g.nodeType && g.id || "");
                (e = e.join()) && d.push(e)
            }
            0 < d.length && (c = ld(d.join(":")));
            return c.toString()
        },
        Ae = function(a, b) {
            if (null == b) return a;
            var c = a.indexOf("google_preview=", a.lastIndexOf("?")),
                d = a.indexOf("&",
                    c); - 1 == d && (d = a.length - 1, --c);
            return a.substring(0, c) + a.substring(d + 1, a.length)
        },
        Be = {
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PRERENDER: "prerender",
            Na: "other"
        },
        Ce = function(a) {
            a = a || document;
            a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "visible";
            var b;
            a: {
                for (b in Be)
                    if (Be[b] == a) {
                        b = !0;
                        break a
                    }
                b = !1
            }
            return b ? a : "other"
        };
    var De = function() {
            this.j = {};
            var a = Yc.URL;
            null == Q(this, "target_platform") && (this.j.target_platform = "DESKTOP");
            for (var b = this.j, a = a.split("?"), a = a[a.length - 1].split("&"), c = 0; c < a.length; c++) {
                var d = a[c].split("=");
                if (d[0]) {
                    var e = d[0].toLowerCase();
                    if ("google_domain_reset_url" != e) try {
                        var f;
                        if (1 < d.length) {
                            var g = d[1];
                            f = window.decodeURIComponent ? decodeURIComponent(g.replace(ve, " ")) : unescape(g)
                        } else f = "";
                        b[e] = f
                    } catch (h) {}
                }
            }
        },
        Q = function(a, b) {
            return null == b ? null : a.j[b]
        };
    var Ee = function(a) {
            this.j = {};
            this.F = {};
            this.m = [];
            this.w = {};
            this.D = [];
            this.K = a;
            this.l = new Sd(a);
            this.u = {};
            this.G = {};
            this.B = {};
            this.o = {};
            this.J = this.C = "";
            this.v = !1;
            this.H = -1;
            this.I = 0
        },
        Fe = function(a, b, c) {
            b = new Lc(b, c || !1);
            if (!b.getAdUnitPath()) return null;
            c = H(b);
            var d = a.j[c];
            if (d) return d;
            a.j[c] = b;
            a.F[b.getAdUnitPath()] || (a.F[b.getAdUnitPath()] = []);
            return a.F[b.getAdUnitPath()][b.getInstance()] = b
        },
        He = function(a) {
            return Ha(Ge(a), function(a) {
                return !a.v
            })
        },
        Ie = function(a, b) {
            -1 == Ka(a.m, function(a) {
                return H(b) ==
                    H(a)
            }) && a.m.push(b)
        },
        Je = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = H(d);
                e in a.j && (Nc(d), La(a.m, function(a) {
                    return H(a) == e
                }))
            }
        },
        Ke = function(a) {
            a = Ha(Ge(a), function(a) {
                return !!a.v && !(a.v && a.D)
            });
            return Ia(a, function(a) {
                return [a.getAdUnitPath(), a.getInstance()]
            })
        },
        Le = function(a) {
            var b = 0;
            E(a.j, function() {
                b++
            });
            return b
        };
    Ee.prototype.toString = function() {
        var a = "[AdData:",
            b = [];
        E(this.j, function(a) {
            b.push(a.toString())
        });
        E(this.w, function(a, d) {
            b.push("[" + d + "," + a + "]")
        });
        a += b.join();
        return a + "]"
    };
    var Me = function(a, b) {
            if (b) {
                var c = b.getAdUnitPath(),
                    d = b.getSlotId().getInstance();
                return a.j[c + "_" + d] || null
            }
            return null
        },
        Ge = function(a) {
            var b = [];
            E(a.j, function(a) {
                b.push(a)
            });
            return b
        },
        Ne = function(a, b) {
            var c = b || Ge(a),
                c = Ia(c, function(a) {
                    return a.G
                });
            Qa(c);
            return c
        },
        Oe = function(a) {
            var b = [];
            E(a.w, function(a, d) {
                b.push(M(d) + "=" + M(a))
            });
            0 < a.D.length && ("excl_cat" in a.w || b.push(M("excl_cat") + "=" + M(a.D.join(","))));
            return b.join("&")
        },
        Pe = function(a, b) {
            var c = a.B[H(b)],
                d;
            if (c)
                if (c) try {
                    var e = window.top,
                        f = new A(0,
                            0),
                        g, h = pb(c);
                    g = h ? wb(h) : window;
                    do {
                        var k;
                        if (g == e) k = Mb(c);
                        else {
                            var n = Kb(c);
                            k = new A(n.left, n.top)
                        }
                        h = k;
                        f.x += h.x;
                        f.y += h.y
                    } while (g && g != e && g != g.parent && (c = g.frameElement) && (g = g.parent));
                    d = f
                } catch (l) {
                    d = new A(-12245933, -12245933)
                } else d = null;
                else d = null;
            return d
        };
    var Qe = function() {
        this.j = [];
        this.w = "";
        this.G = "json_html";
        this.m = "fif";
        this.u = 1;
        this.F = !1;
        this.v = "";
        this.l = [];
        this.persistentRoadblocksOnly = !1;
        this.videoPodNumber = this.videoPodPosition = NaN;
        this.C = this.D = "";
        this.B = !1;
        this.videoStreamCorrelator = NaN;
        this.o = 0
    };
    var Re = function(a, b) {
            this.url = a;
            this.U = b;
            this.Ba = !1;
            this.depth = v(void 0) ? void 0 : null
        },
        Se = function() {
            this.l = p.top == p ? 1 : Cb(p.top) ? 2 : 3;
            3 != this.l && Date.parse(p.top.document.lastModified);
            var a = p,
                b = [],
                c = null,
                d = null;
            do {
                var e = a;
                Cb(e) ? (c = e.location.href, d = e.document.referrer || null) : (c = d, d = null);
                b.push(new Re(c, e));
                try {
                    a = e.parent
                } catch (f) {
                    a = null
                }
            } while (a && e != a);
            e = 0;
            for (a = b.length - 1; e <= a; ++e) b[e].depth = a - e;
            e = p;
            if ((a = e.location.ancestorOrigins) && a.length == b.length - 1)
                for (e = 1; e < b.length; ++e) c = b[e], c.url || (c.url =
                    a[e - 1], c.Ba = !0);
            this.j = b
        },
        Te = function(a, b) {
            for (var c = "", d = a.j[a.j.length - 1].url || "", e = 0; e < b.length && 26 > e; e++) {
                var f;
                null != b[e] && (f = Od(b[e]));
                if ("" != d && f && f == Od(d)) c = c + "11";
                else {
                    var g;
                    if (g = f) {
                        g = b[e];
                        var h = /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                            k = /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                            n = /^https?:\/\/(tpc|pagead2).googlesyndication\.com(\:\d+)?($|(\/.*))/i,
                            l = /^https?:\/\/www.googletagservices\.com(\:\d+)?($|(\/.*))/i;
                        g = /^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i.test(g) ||
                            h.test(g) || k.test(g) || n.test(g) || l.test(g)
                    }
                    if (g) c = c + "10";
                    else {
                        if (g = f) a: if (g = f.toLowerCase().split("."), 2 > g.length) g = !1;
                            else {
                                g = g[g.length - 2] + "." + g[g.length - 1];
                                for (k = h = 0; k < g.length; ++k) h = 31 * h + g.charCodeAt(k), h %= 4294967296;
                                switch (h) {
                                    case 1967261364:
                                    case 3147493546:
                                    case 1567346461:
                                    case 2183041838:
                                    case 763236279:
                                    case 1342279801:
                                    case 526831769:
                                    case 352806002:
                                    case 2755048925:
                                    case 3306848407:
                                    case 2207000920:
                                    case 484037040:
                                    case 3506871055:
                                    case 672143848:
                                    case 2528751226:
                                    case 2744854768:
                                    case 3703278665:
                                    case 2014749173:
                                    case 133063824:
                                    case 2749334602:
                                    case 3131239845:
                                    case 2074086763:
                                    case 795772493:
                                    case 290857819:
                                    case 3035947606:
                                    case 2983138003:
                                    case 2197138676:
                                    case 4216016165:
                                    case 239803524:
                                    case 975993579:
                                    case 1794940339:
                                    case 1314429186:
                                    case 1643618937:
                                    case 497159982:
                                        g = !0;
                                        break a;
                                    default:
                                        g = !1
                                }
                            }
                        c = g ? c + "01" : c + "00"
                    }
                }
            }
            return "" == c ? 0 : parseInt(c, 2)
        };
    var We = function(a) {
            this.u = document;
            this.j = a || 0;
            this.l = Ue(this, "__gads=");
            this.v = this.o = !1;
            Ve(this)
        },
        Xe = function(a, b) {
            if (b._cookies_ && b._cookies_.length && (a.m = b._cookies_[0], null != a.m && (a.l = a.m._value_, null != a.m && a.l))) {
                var c = new Date;
                c.setTime(1E3 * a.m._expires_);
                a.u.cookie = "__gads=" + a.l + "; expires=" + c.toGMTString() + "; path=" + a.m._path_ + "; domain=." + a.m._domain_
            }
        },
        Ve = function(a) {
            if (!a.l && !a.v && 1 != a.j) {
                a.u.cookie = "GoogleAdServingTest=Good";
                var b = "Good" == Ue(a, "GoogleAdServingTest=");
                if (b) {
                    var c = new Date;
                    c.setTime((new Date).valueOf() + -1);
                    a.u.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
                }
                a.o = b;
                a.v = !0
            }
        },
        Ue = function(a, b) {
            var c = a.u.cookie,
                d = c.indexOf(b),
                e = ""; - 1 != d && (d += b.length, e = c.indexOf(";", d), -1 == e && (e = c.length), e = c.substring(d, e));
            return e
        },
        Ye = null,
        Ze = function(a) {
            null == Ye && (Ye = new We(a));
            return Ye
        };
    var $e = function() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var qd = new function(a) {
            this.l = [];
            this.j = {};
            for (var b = 0, c = arguments.length; b < c; ++b) this.j[arguments[b]] = ""
        },
        af = [],
        cf = function(a, b, c) {
            c = c || [];
            a = new bf(a);
            if (Kd.apply(a, c)()) {
                var d = a.j;
                c = [];
                var e = 0,
                    f;
                for (f in d) c[e++] = d[f];
                f = a.l;
                if ((d = a.m) ? f.j.hasOwnProperty(d) && "" == f.j[d] : 1) {
                    var g;
                    b = b * c.length;
                    a: {
                        try {
                            var h = window.top.location.hash;
                            if (h) {
                                var k = h.match(/\bdeid=([\d,]+)/);
                                g = k && k[1] || "";
                                break a
                            }
                        } catch (n) {}
                        g = ""
                    }(g = (g = (g = g.match(new RegExp("\\b(" + c.join("|") + ")\\b"))) && g[0] || null) ? g : od ? null : Db(c, b)) && pd(f,
                        g, d)
                }
            }
            af.push(a);
            return a
        },
        bf = function(a) {
            var b = qd;
            this.j = a;
            this.l = b;
            this.m = "exp" + (this[fa] || (this[fa] = ++ga));
            this.l.j[this.m] = ""
        },
        df = function(a, b) {
            var c;
            if (b in a.j) {
                c = a.l;
                var d = a.m;
                c = a.j[b] == (c.j.hasOwnProperty(d) ? c.j[d] : "")
            } else c = !1;
            return c
        },
        ef = function(a) {
            for (var b = 0; b < af.length; ++b) {
                var c = af[b],
                    d = c.j,
                    e = {},
                    f = void 0;
                for (f in d) e[d[f]] = f;
                d = e[a];
                if (null != d) {
                    d in c.j && pd(c.l, c.j[d], c.m);
                    return
                }
            }
            0 <= Fa(qd.l, a) || pd(qd, a)
        },
        ff = P["#18#"],
        gf;
    gf = 0 <= Fa(["prerender"], Ce(void 0));
    cf({
        control: "108809009",
        experiment: "108809010"
    }, ff, [Jd(gf)]);
    cf({
        branch_1: "108809028",
        branch_2: "108809029"
    }, P["#27#"]);
    var hf = cf({
        control: "108809030",
        experiment: "108809031"
    }, P["#28#"]);
    df(hf, "experiment") || df(hf, "control") || ef("108809080");
    var jf = cf({
        control: "108809034",
        experiment: "108809035"
    }, P["#31#"]);
    P["#39#"] && ef(P["#39#"]);
    cf({
        control: "108809045",
        experiment: "108809046"
    }, P["#41#"]);
    var kf = cf({
        control: "108809075",
        experiment: "108809076"
    }, P["#50#"]);
    cf({
        control: "108809049",
        experiment: "108809050"
    }, P["#44#"]);
    var lf = cf({
            control: "108809051",
            experiment: "108809052"
        }, P["#45#"]),
        mf = cf({
            control: "108809085",
            experiment: "108809086"
        }, P["#51#"], [Jd(!$e() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile")) || $e())]);
    var nf = function() {
        var a = p.googletag;
        return null != a && ea(a.getVersion) ? a.getVersion() : null
    };
    var of = function(a, b) {
            var c;
            c = P["#6#"] ? "https://" + P["#33#"] : "http://" + P["#33#"];
            if (!b || 0 > b || 1 < b) b = 0;
            this.m = Math.random() < b;
            this.l = a;
            this.j = c + "/pagead/gen_204?id=" + M(a)
        },
        R = function(a, b, c) {
            b && b.match(/^\w+$/) && c && (a.j += "&" + b + "=" + M(c))
        },
        pf = function(a, b) {
            var c = nf();
            null != c && R(a, "vrg", "" + c);
            R(a, "vrp", "70g");
            var c = document,
                d = window,
                e = Ne(b);
            0 < e.length && (R(a, "pub_id", e[0]), 3 >= e.length || (e = Oa(e, 0, 3), e.push("__extra__")), R(a, "nw_id", e.join(",")));
            R(a, "nslots", Le(b).toString());
            e = rd();
            0 < e.length && R(a, "eid", e.join());
            R(a, "pub_url", c.URL);
            null != Wd(b.l) && d.top != d || R(a, "pub_ref", c.referrer)
        },
        qf = function(a) {
            a.m && a.l && a.j && ad(window, a.j)
        };
    var S = function(a, b, c, d, e) {
        this.j = b;
        this.u = c;
        this.m = d;
        this.v = a;
        this.l = e;
        this.o = "";
        this.G = Vc;
        this.w = [];
        this.F = []
    };
    S.prototype.M = function(a) {
        if (!ca(a)) return "";
        if ("sra" == this.v) 0 == a.length && (a = Ge(this.j));
        else {
            if (0 == a.length) return "";
            1 < a.length && (a = [a[0]])
        }
        this.C();
        this.D(a);
        return this.o
    };
    S.prototype.D = function(a) {
        try {
            var b, c = "",
                d = 0;
            "prerender" == Ce(document) ? (c = "108809008", d = P["#17#"]) : (c = "108809007", d = P["#16#"]);
            b = Db([c], d);
            T(this, "eid", (b ? Ma(this.l.l, b) : this.l.l).join())
        } catch (e) {}
        this.m && 0 !== this.m.j && T(this, "co", this.m.j);
        b = this.j.H; - 1 !== b && T(this, "tfcd", b);
        1 === this.j.I && T(this, "kfa", 1);
        T(this, "sc", P["#6#"] ? 1 : 0);
        Boolean(window.postMessage) && T(this, "sfv", "1-0-2");
        if ("sra" == this.v) {
            b = a.length;
            for (c = 0; c < b; c++) {
                var d = a[c].getAdUnitPath(),
                    f = "";
                if ("" != d) {
                    d = d.split("/");
                    for (f = 0; f < d.length; f++)
                        if ("" !=
                            d[f]) {
                            for (var g = !1, h = 0; h < this.w.length; h++)
                                if (d[f] == this.w[h]) {
                                    g = !0;
                                    break
                                }
                            g || this.w.push(d[f])
                        }
                    f = "";
                    for (g = 0; g < d.length; g++) {
                        if (0 < g) f += "/";
                        else if ("" == d[0]) continue;
                        for (h = 0; h < this.w.length; h++)
                            if (d[g] == this.w[h]) {
                                f += h;
                                break
                            }
                    }
                }
                this.F.push(f)
            }
            T(this, "iu_parts", this.w.join());
            T(this, "enc_prev_ius", this.F.join());
            b = [];
            for (c = 0; c < a.length; ++c) b.push(Qc(a[c]));
            T(this, "prev_iu_szs", b.join());
            b = [];
            c = !1;
            for (d = 0; d < a.length; ++d) f = a[d].getFirstLook(), 0 != f && (c = !0), b.push(f);
            (b = c ? b.join() : void 0) && T(this, "fla", b);
            if (a.length) {
                b = "";
                for (c = 0; c < a.length; ++c) b += a[c].getOutOfPage() ? "1" : "0";
                b = parseInt(b, 2)
            } else b = 0;
            b && T(this, "ists", b);
            rf(this);
            c = null;
            b = [];
            for (c = 0; c < a.length; ++c) b.push(Rc(a[c]));
            c = b.join("|");
            c.length == b.length - 1 && (c = null);
            T(this, "prev_scp", c)
        } else b = a[0].j.gtfcd(), -1 !== b && T(this, "tfcd", b), b = a[0], T(this, "iu", b.getAdUnitPath()), T(this, "sz", Qc(b)), (c = b.getFirstLook()) && T(this, "fl", c), b.getClickUrl() && T(this, "click", b.getClickUrl()), b.getOutOfPage() && T(this, "ists", "1"), b in this.j.o && T(this, "logonly",
            "1"), rf(this), b = a[0], c = Rc(b), T(this, "scp", c), b = b.getAudExtId(), 0 < b && T(this, "audextid", b);
        b = a[0].l;
        c = te(a, this.j.l, this.j.u);
        d = this.l.F;
        f = 3 == this.l.u;
        g = P["#46#"];
        h = 0;
        1 != this.l.u && (h |= 1);
        b && (h |= 2);
        c && (h |= 4);
        d && (h |= 8);
        f && (h |= 16);
        g && (h |= 32);
        b = h;
        0 < b && T(this, "eri", b);
        "prerender" == Ce() && T(this, "d_imp", 1);
        b = window;
        c = document;
        T(this, "cust_params", Oe(this.j));
        this.m && 1 != this.m.j && (T(this, "cookie", this.m.l), this.m.o && T(this, "cookie_enabled", "1"));
        (d = this.j.C) && T(this, "uule", d);
        this.m && 1 != this.m.j && (b = (Wd(this.j.l) ||
            (b.top == b ? c.URL : c.referrer)) != c.URL ? c.domain : "") && T(this, "cdm", b);
        null != Q(this.u, "google_preview") && T(this, "gct", Q(this.u, "google_preview"));
        this.B(new Date, a, window);
        b = {};
        b.u_tz = -(new Date).getTimezoneOffset();
        var k;
        try {
            k = L.history.length
        } catch (n) {
            k = 0
        }
        b.u_his = k;
        b.u_java = !!L.navigator && "unknown" != typeof L.navigator.javaEnabled && !!L.navigator.javaEnabled && L.navigator.javaEnabled();
        L.screen && (b.u_h = L.screen.height, b.u_w = L.screen.width, b.u_ah = L.screen.availHeight, b.u_aw = L.screen.availWidth, b.u_cd = L.screen.colorDepth);
        L.navigator && L.navigator.plugins && (b.u_nplug = L.navigator.plugins.length);
        L.navigator && L.navigator.mimeTypes && (b.u_nmime = L.navigator.mimeTypes.length);
        sf(this, b);
        p.devicePixelRatio && U(this, "u_sd", Number(p.devicePixelRatio.toFixed(3)));
        var l;
        try {
            l = kd()
        } catch (t) {
            l = "0"
        }
        U(this, "flash", l);
        c = window;
        l = c.document;
        k = "sra" == this.v ? Wd(this.j.l) : se(a[0], this.j.u) || Wd(this.j.l);
        if (df(kf, "experiment")) null != k || (k = Ae(Wd(this.j.l) || (c.top == c ? l.URL : l.referrer), Q(this.u, "google_preview"))), T(this, "url", k), te(a, this.j.l,
            this.j.u) && c.top != c || T(this, "ref", l.referrer);
        else {
            f = Ae(l.URL, Q(this.u, "google_preview"));
            a = Ae(l.referrer, Q(this.u, "google_preview"));
            d = new Se;
            l = d.j[d.j.length - 1].url;
            b = d.j[0].depth;
            var q;
            null != k ? (q = f, c.top != c && (a = "", l && (l = Od(l)))) : k = f;
            if (null != b && 0 < b && (T(this, "nhd", b), c.location.ancestorOrigins)) {
                c = [];
                for (f = 1; f < d.j.length && 27 > f; f++) d.j[f] && d.j[f].url && (c[f - 1] = d.j[f].url);
                c = Te(d, c.reverse());
                T(this, "iag", c)
            }
            T(this, "url", k);
            null != q && q != k && T(this, "loc", q);
            T(this, "ref", a);
            null != b && 0 < b && T(this, "top",
                l)
        }
        q = window.document;
        T(this, "dssz", q.scripts.length);
        a = new Se;
        k = p.document.scripts;
        l = [];
        for (b = k.length - 1; 0 <= b && 26 > l.length;) k[b].src && l.unshift(k[b].src), b--;
        a = Te(a, l);
        T(this, "icsg", a);
        a = Error();
        a.stack && (k = a.stack, l = k.split(/\r\n|\r|\n/).length, "Error" == k.slice(0, 5) && l--, k = l - 10, 0 > k && (k = 0, l = new of("gpt_negative_stack_trace", P["#23#"]), pf(l, this.j), R(l, "stackTrace", a.stack), qf(l)), T(this, "std", k));
        q.currentScript && q.currentScript.text && T(this, "csl", q.currentScript.text.length);
        T(this, "vrg", nf());
        T(this,
            "vrp", "70g")
    };
    var tf = function(a, b) {
            for (var c = b.length, d = [], e = 0; e < c; e++) {
                var f = ze(b[e]);
                b[e].H = f;
                d.push(f)
            }
            T(a, "adks", d.join(","))
        },
        sf = function(a, b) {
            E(b, function(a, b) {
                U(this, b, a)
            }, a)
        },
        rf = function(a) {
            a.m && 1 == a.m.j || T(a, "ppid", a.j.J)
        };
    S.prototype.B = function(a, b, c) {
        var d = c.document;
        T(this, "lmt", (Date.parse(d.lastModified) / 1E3).toString());
        U(this, "dt", a.getTime());
        if (d.body) {
            a = d.body.scrollHeight;
            var e = d.body.clientHeight;
            e && a && T(this, "cc", Math.round(100 * e / a).toString())
        }
        a = Q(this.u, "deb");
        null != a && T(this, "deb", a);
        a = Q(this.u, "haonly");
        null != a && T(this, "haonly", a);
        a = Zd(c, d);
        bd(a, x(function(a, b) {
            T(this, b, a)
        }, this));
        d = Rd(c, d).ya || null;
        null != d && T(this, "frm", d);
        if (d = ge(!0, c)) T(this, "biw", d.width), T(this, "bih", d.height);
        c.top != c && (c = ge(!1,
            c)) && (T(this, "isw", c.width), T(this, "ish", c.height));
        this.l.o && T(this, "oid", this.l.o);
        if ("sra" == this.v) tf(this, b);
        else {
            if (c = Pe(this.j, b[0])) T(this, "adx", Math.round(c.x)), T(this, "ady", Math.round(c.y));
            c = b[0].H || ze(b[0], this.j.G[H(b[0])]);
            T(this, "adk", c)
        }
        c = ie();
        0 < c && T(this, "osd", c);
        c = this.j.l;
        d = "";
        "sra" == this.v ? d = Yd(b, c, this.j.u, this.G) : (b = this.j.u[H(b[0])], null == b ? b = c : Ud(b, c), b = Vd(b), d = b.M());
        d && (this.o += "&" + d)
    };
    S.prototype.C = function() {
        var a = !1;
        Boolean(this.j.C) ? a = !1 : a = P["#46#"] || df(hf, "control");
        this.o = we(!a) + "/gampad/ads?";
        U(this, "gdfp_req", 1);
        T(this, "correlator", this.l.w);
        U(this, "output", this.l.G);
        U(this, "callback", this.l.v);
        U(this, "impl", this.l.m);
        this.l.persistentRoadblocksOnly && T(this, "per_only", 1);
        "sra" == this.v && T(this, "json_a", 1)
    };
    var T = function(a, b, c) {
            null != c && U(a, b, M("" + c))
        },
        U = function(a, b, c) {
            null != c && "" != c && (a.o = "?" != a.o.charAt(a.o.length - 1) ? a.o + ("&" + b + "=" + c) : a.o + (b + "=" + c))
        },
        uf = function(a, b) {
            var c = b - 8;
            if (a.length > b) {
                var d = a.lastIndexOf("&", c); - 1 != d ? a = a.substring(0, d) : (a = a.substring(0, c), a = a.replace(/%\w?$/, ""));
                a += "&trunc=1"
            }
            return a
        };
    var vf = navigator;

    function wf() {
        try {
            return vf.javaEnabled()
        } catch (a) {
            return !1
        }
    }

    function xf(a) {
        var b = 1,
            c = 0,
            d;
        if (void 0 != a && "" != a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    }

    function yf(a, b) {
        if (!a || "none" == a) return 1;
        a = String(a);
        "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return xf(a.toLowerCase())
    }
    var zf = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Af = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
    var Bf = function(a, b, c, d, e) {
        S.call(this, a, b, c, d, e)
    };
    z(Bf, S);
    Bf.prototype.B = function(a, b, c) {
        0 < navigator.userAgent.indexOf("MSIE ") && Td(this.j.l, "google_encoding", document.charset, !1);
        S.prototype.B.call(this, a, b, c);
        T(this, "ifi", b[0].I);
        c == c.top ? c = 0 : (a = [], a.push(c.document.URL), c.name && a.push(c.name), c = ge(!1, c, !1), a.push(c.width.toString()), a.push(c.height.toString()), c = ld(a.join("")));
        0 != c && T(this, "ifk", c.toString())
    };
    Bf.prototype.D = function(a) {
        var b = a[0],
            c = window;
        c.google_unique_id ? ++c.google_unique_id : c.google_unique_id = 1;
        b.I = c.google_unique_id;
        this.l.B ? (U(this, "hxva", 1), T(this, "cmsid", this.l.C), T(this, "vid", this.l.D)) : window.google_test_extended_pageview && U(this, "hxva", 1);
        isNaN(this.l.videoPodNumber) || U(this, "pod", this.l.videoPodNumber);
        isNaN(this.l.videoPodPosition) || U(this, "ppos", this.l.videoPodPosition);
        isNaN(this.l.videoStreamCorrelator) || U(this, "scor", this.l.videoStreamCorrelator);
        S.prototype.D.call(this,
            a);
        a = window;
        var b = a.document.domain,
            c = a.document.cookie,
            d = a.history.length,
            e = a.screen,
            f = a.document.referrer,
            g = Math.round((new Date).getTime() / 1E3),
            h = window.google_analytics_domain_name,
            b = "undefined" == typeof h ? yf("auto", b) : yf(h, b),
            k = -1 < c.indexOf("__utma=" + b + "."),
            n = -1 < c.indexOf("__utmb=" + b),
            h = Gd("google_persistent_state"),
            l;
        (l = Id(h)) || (l = h.S[Hd(14)] = {});
        h = l;
        l = !1;
        if (k) f = c.split("__utma=" + b + ".")[1].split(";")[0].split("."), n ? h.sid = f[3] + "" : h.sid || (h.sid = g + ""), h.vid = f[0] + "." + f[1], h.from_cookie = !0;
        else {
            h.sid ||
                (h.sid = g + "");
            if (!h.vid) {
                l = !0;
                n = Math.round(2147483647 * Math.random());
                k = [vf.appName, vf.version, vf.language ? vf.language : vf.browserLanguage, vf.platform, vf.userAgent, wf() ? 1 : 0].join("");
                e ? k += e.width + "x" + e.height + e.colorDepth : window.java && (e = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), k += e.screen.width + "x" + e.screen.height);
                k = k + c + (f || "");
                for (f = k.length; 0 < d;) k += d-- ^ f++;
                h.vid = (n ^ xf(k) & 2147483647) + "." + g
            }
            h.from_cookie = !1
        }
        if (!h.cid) {
            var t;
            a: {
                g = 999;
                if (f = window.google_analytics_domain_name) f = 0 == f.indexOf(".") ?
                    f.substr(1) : f, g = ("" + f).split(".").length;
                f = 999;
                c = c.split(";");
                for (e = 0; e < c.length; e++)
                    if (d = zf.exec(c[e]) || Af.exec(c[e])) {
                        if (d[1] == g) {
                            t = d[2];
                            break a
                        }
                        d[1] < f && (f = d[1], t = d[2])
                    }
            }
            l && t && -1 != t.search(/^\d+\.\d+$/) ? h.vid = t : t != h.vid && (h.cid = t)
        }
        h.dh = b;
        h.hid || (h.hid = Math.round(2147483647 * Math.random()));
        t = Gd();
        t = Id(t);
        U(this, "ga_vid", t.vid);
        U(this, "ga_sid", t.sid);
        U(this, "ga_hid", t.hid);
        U(this, "ga_fc", t.from_cookie);
        T(this, "ga_wpids", a.google_analytics_uacct)
    };
    var Cf = function() {};
    var Df, Ef = function() {};
    z(Ef, Cf);
    Ef.prototype.j = function() {
        var a;
        a: {
            if (!this.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        new ActiveXObject(d);
                        a = this.l = d;
                        break a
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            a = this.l
        }
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Df = new Ef;
    var Ff = function(a, b) {
            this.m = a;
            this.o = b;
            this.l = 0;
            this.j = null
        },
        Gf = function(a) {
            var b;
            0 < a.l ? (a.l--, b = a.j, a.j = b.next, b.next = null) : b = a.m();
            return b
        },
        Hf = function(a, b) {
            a.o(b);
            100 > a.l && (a.l++, b.next = a.j, a.j = b)
        };
    var If = function(a) {
            p.setTimeout(function() {
                throw a;
            }, 0)
        },
        Jf, Kf = function() {
            var a = p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = x(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !C("Trident") && !C("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (r(c.next)) {
                        c = c.next;
                        var a = c.ga;
                        c.ga = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        ga: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    p.setTimeout(a, 0)
                }
        };
    var Mf = new Ff(function() {
            return new Lf
        }, function(a) {
            a.reset()
        }),
        Of = function() {
            var a = Nf,
                b = null;
            a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
            return b
        },
        Lf = function() {
            this.next = this.l = this.j = null
        };
    Lf.prototype.reset = function() {
        this.next = this.l = this.j = null
    };
    var Sf = function(a, b) {
            Pf || Qf();
            Rf || (Pf(), Rf = !0);
            var c = Nf,
                d = Gf(Mf);
            d.j = a;
            d.l = b;
            d.next = null;
            c.l ? c.l.next = d : c.j = d;
            c.l = d
        },
        Pf, Qf = function() {
            if (p.Promise && p.Promise.resolve) {
                var a = p.Promise.resolve(void 0);
                Pf = function() {
                    a.then(Tf)
                }
            } else Pf = function() {
                var a = Tf;
                !ea(p.setImmediate) || p.Window && p.Window.prototype && p.Window.prototype.setImmediate == p.setImmediate ? (Jf || (Jf = Kf()), Jf(a)) : p.setImmediate(a)
            }
        },
        Rf = !1,
        Nf = new function() {
            this.l = this.j = null
        },
        Tf = function() {
            for (var a = null; a = Of();) {
                try {
                    a.j.call(a.l)
                } catch (b) {
                    If(b)
                }
                Hf(Mf,
                    a)
            }
            Rf = !1
        };
    var Vf = function(a, b) {
            this.j = 0;
            this.w = void 0;
            this.m = this.l = this.u = null;
            this.o = this.v = !1;
            if (a != aa) try {
                var c = this;
                a.call(b, function(a) {
                    Uf(c, 2, a)
                }, function(a) {
                    Uf(c, 3, a)
                })
            } catch (d) {
                Uf(this, 3, d)
            }
        },
        Wf = function() {
            this.next = this.m = this.l = this.o = this.j = null;
            this.u = !1
        };
    Wf.prototype.reset = function() {
        this.m = this.l = this.o = this.j = null;
        this.u = !1
    };
    var Xf = new Ff(function() {
            return new Wf
        }, function(a) {
            a.reset()
        }),
        Yf = function(a, b, c) {
            var d = Gf(Xf);
            d.o = a;
            d.l = b;
            d.m = c;
            return d
        };
    Vf.prototype.then = function(a, b, c) {
        return Zf(this, ea(a) ? a : null, ea(b) ? b : null, c)
    };
    Vf.prototype.then = Vf.prototype.then;
    Vf.prototype.$goog_Thenable = !0;
    var ag = function(a, b) {
            a.l || 2 != a.j && 3 != a.j || $f(a);
            a.m ? a.m.next = b : a.l = b;
            a.m = b
        },
        Zf = function(a, b, c, d) {
            var e = Yf(null, null, null);
            e.j = new Vf(function(a, g) {
                e.o = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (n) {
                        g(n)
                    }
                } : a;
                e.l = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        a(e)
                    } catch (n) {
                        g(n)
                    }
                } : g
            });
            e.j.u = a;
            ag(a, e);
            return e.j
        };
    Vf.prototype.C = function(a) {
        this.j = 0;
        Uf(this, 2, a)
    };
    Vf.prototype.D = function(a) {
        this.j = 0;
        Uf(this, 3, a)
    };
    var Uf = function(a, b, c) {
            if (0 == a.j) {
                a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.j = 1;
                var d;
                a: {
                    var e = c,
                        f = a.C,
                        g = a.D;
                    if (e instanceof Vf) ag(e, Yf(f || aa, g || null, a)), d = !0;
                    else {
                        var h;
                        if (e) try {
                            h = !!e.$goog_Thenable
                        } catch (k) {
                            h = !1
                        } else h = !1;
                        if (h) e.then(f, g, a), d = !0;
                        else {
                            if (w(e)) try {
                                var n = e.then;
                                if (ea(n)) {
                                    bg(e, n, f, g, a);
                                    d = !0;
                                    break a
                                }
                            } catch (l) {
                                g.call(a, l);
                                d = !0;
                                break a
                            }
                            d = !1
                        }
                    }
                }
                d || (a.w = c, a.j = b, a.u = null, $f(a), 3 != b || cg(a, c))
            }
        },
        bg = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                h = function(a) {
                    f ||
                        (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        $f = function(a) {
            a.v || (a.v = !0, Sf(a.B, a))
        },
        dg = function(a) {
            var b = null;
            a.l && (b = a.l, a.l = b.next, b.next = null);
            a.l || (a.m = null);
            return b
        };
    Vf.prototype.B = function() {
        for (var a = null; a = dg(this);) {
            var b = this.j,
                c = this.w;
            if (3 == b && a.l && !a.u)
                for (var d = void 0, d = this; d && d.o; d = d.u) d.o = !1;
            if (a.j) a.j.u = null, eg(a, b, c);
            else try {
                a.u ? a.o.call(a.m) : eg(a, b, c)
            } catch (e) {
                fg.call(null, e)
            }
            Hf(Xf, a)
        }
        this.v = !1
    };
    var eg = function(a, b, c) {
            2 == b ? a.o.call(a.m, c) : a.l && a.l.call(a.m, c)
        },
        cg = function(a, b) {
            a.o = !0;
            Sf(function() {
                a.o && fg.call(null, b)
            })
        },
        fg = If;
    var jg = function(a, b) {
            var c = {
                timeoutMs: 0,
                withCredentials: !0
            };
            return new Vf(function(d, e) {
                var f = c || {},
                    g, h = f.Ma ? f.Ma.j() : Df.j();
                try {
                    h.open("POST", a, !0)
                } catch (k) {
                    e(new gg("Error opening XHR: " + k.message, a))
                }
                h.onreadystatechange = function() {
                    if (4 == h.readyState) {
                        p.clearTimeout(g);
                        var b;
                        a: switch (h.status) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                b = !0;
                                break a;
                            default:
                                b = !1
                        }!b && (b = 0 === h.status) && (b = Pd(a)[1] || null, !b && p.self && p.self.location && (b = p.self.location.protocol, b = b.substr(0, b.length -
                            1)), b = b ? b.toLowerCase() : "", b = !("http" == b || "https" == b || "" == b));
                        b ? d(h) : e(new hg(h.status, a))
                    }
                };
                h.onerror = function() {
                    e(new gg("Network error", a))
                };
                var n;
                if (f.headers) {
                    for (var l in f.headers) n = f.headers[l], null != n && h.setRequestHeader(l, n);
                    n = f.headers["Content-Type"]
                }
                l = p.FormData && b instanceof p.FormData;
                void 0 !== n || l || h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                f.withCredentials && (h.withCredentials = f.withCredentials);
                f.responseType && (h.responseType = f.responseType);
                f.Ea && h.overrideMimeType(f.Ea);
                0 < f.Ja && (g = p.setTimeout(function() {
                    h.onreadystatechange = aa;
                    h.abort();
                    e(new ig(a))
                }, f.Ja));
                try {
                    h.send(b)
                } catch (t) {
                    h.onreadystatechange = aa, p.clearTimeout(g), e(new gg("Error sending XHR: " + t.message, a))
                }
            })
        },
        gg = function(a, b) {
            ja.call(this, a + ", url=" + b);
            this.url = b
        };
    z(gg, ja);
    gg.prototype.name = "XhrError";
    var hg = function(a, b) {
        gg.call(this, "Request Failed, status=" + a, b)
    };
    z(hg, gg);
    hg.prototype.name = "XhrHttpError";
    var ig = function(a) {
        gg.call(this, "Request timed out", a)
    };
    z(ig, gg);
    ig.prototype.name = "XhrTimeoutError";
    var kg = function() {};
    z(kg, Cf);
    kg.prototype.j = function() {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a) return a;
        if ("undefined" != typeof XDomainRequest) return new lg;
        throw Error("Unsupported browser");
    };
    var lg = function() {
        this.j = new XDomainRequest;
        this.readyState = 0;
        this.responseText = this.onreadystatechange = null;
        this.status = -1;
        this.j.onload = x(this.ua, this);
        this.j.onerror = x(this.ha, this);
        this.j.onprogress = x(this.va, this);
        this.j.ontimeout = x(this.wa, this)
    };
    m = lg.prototype;
    m.open = function(a, b, c) {
        if (null != c && !c) throw Error("Only async requests are supported.");
        this.j.open(a, b)
    };
    m.send = function(a) {
        if (a)
            if ("string" == typeof a) this.j.send(a);
            else throw Error("Only string data is supported");
        else this.j.send()
    };
    m.abort = function() {
        this.j.abort()
    };
    m.setRequestHeader = function() {};
    m.ua = function() {
        this.status = 200;
        this.responseText = this.j.responseText;
        mg(this, 4)
    };
    m.ha = function() {
        this.status = 500;
        this.responseText = null;
        mg(this, 4)
    };
    m.wa = function() {
        this.ha()
    };
    m.va = function() {
        this.status = 200;
        mg(this, 1)
    };
    var mg = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    var ng = function(a) {
            if (a = rb(a)) a.innerHTML = ""
        },
        og = function(a, b) {
            var c = rb(a);
            c && (c.style.display = b ? "" : "none")
        },
        pg = function(a, b, c, d, e) {
            e = (e || document).createElement("iframe");
            e.id = b;
            e.name = b;
            null != d[0] && null != d[1] && (e.width = String(d[0]), e.height = String(d[1]));
            e.vspace = "0";
            e.hspace = "0";
            e.allowTransparency = "true";
            e.scrolling = "no";
            e.marginWidth = "0";
            e.marginHeight = "0";
            e.frameBorder = "0";
            e.style.border = "0";
            e.style.verticalAlign = "bottom";
            c && (e.style.visibility = "hidden", e.style.display = "none");
            e.src = "javascript:\"<html><body style='background:transparent'></body></html>\"";
            a.appendChild(e);
            return e
        },
        qg = function(a, b) {
            if (0 != xe()) {
                var c = a.getElementById(b);
                c && "hidden" == c.style.visibility && "none" == c.style.display && c.parentNode.removeChild(c)
            }
        },
        sg = function(a, b, c, d, e) {
            return new Fc({
                V: a,
                xa: b,
                content: rg(c),
                size: new B(d[0], d[1]),
                Da: {
                    info: function() {},
                    j: function() {},
                    error: function() {}
                },
                sa: !0,
                ka: e,
                sandbox: df(mf, "experiment")
            })
        },
        vg = function(a, b, c) {
            c && (b = rg(b));
            if (0 != xe()) {
                var d;
                try {
                    d = !!a.contentWindow.document
                } catch (e) {
                    d = !1
                }
                if (d) {
                    var f = b,
                        g = tg();
                    try {
                        var h = window.frames[a.name];
                        if (6 < parseInt(xe(), 10) || 0 > f.indexOf("http://" + P["#1#"] + "/pagead/inject_object_div.js")) {
                            var k;
                            b: {
                                a = f;
                                b = document;
                                var n = xe(),
                                    l;
                                if (!(l = 0 == n || isNaN(n) || 7 > n || 9 < n || b.documentMode && 10 <= b.documentMode)) {
                                    var t = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                                    l = 6 <= (t ? parseFloat(t[1]) : 0)
                                }
                                if (!l)
                                    for (n = 0; n < a.length; ++n)
                                        if (127 < a.charCodeAt(n)) {
                                            k = !0;
                                            break b
                                        }
                                k = !1
                            }
                            if (k) {
                                var q = unescape(encodeURIComponent(f)),
                                    Y = Math.floor(q.length / 2);
                                a = [];
                                for (k = 0; k < Y; ++k) a[k] = String.fromCharCode(256 * q.charCodeAt(2 * k + 1) + q.charCodeAt(2 *
                                    k));
                                1 == q.length % 2 && (a[Y] = q.charAt(q.length - 1));
                                f = a.join("")
                            }
                            h.contents = f;
                            h.location.replace("javascript:window.contents")
                        } else h.contents = f, h.location.replace("javascript:document.write(window.contents);document.close();")
                    } catch (Pa) {} finally {
                        ug(g)
                    }
                } else {
                    q = b;
                    h = tg();
                    try {
                        f = "google-ad-content-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ +new Date).toString(36)), window[f] = q, q = 'var adContent = window.parent["' + f + '"];window.parent["' + f + '"] = null;document.write(adContent);',
                            q = 6 == xe() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" + document.domain + '";' + q + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + document.domain + '";' + q + "document.close();", a.src = 'javascript:\'<script type="text/javascript">' + q + "\x3c/script>'"
                    } catch (Oh) {
                        window[f] = null
                    } finally {
                        ug(h)
                    }
                }
            } else {
                h = b;
                try {
                    g = a.contentWindow ? a.contentWindow.document : a.contentDocument, -1 != navigator.userAgent.indexOf("Firefox") && g.open("text/html",
                        "replace"), g.write(h), g.close()
                } catch (Ph) {}
            }
        },
        rg = function(a) {
            if (!Boolean(a)) return a;
            var b = a.toLowerCase();
            return -1 < b.indexOf("<!doctype") || -1 < b.indexOf("<html") ? a : "<html>\n<head>\n<script>var inDapIF=true;\x3c/script>\n</head><body>" + a + "</body></html>\n"
        },
        wg = function(a, b) {
            var c = (b || document).getElementById(a);
            if (c && c.style.height && c.style.width) {
                for (var c = [c.style.width, c.style.height], d = 0; d < c.length; ++d)
                    if (2 < c[d].length && "px" == c[d].substring(c[d].length - 2)) c[d] = parseInt(c[d], 10);
                    else return null;
                return c
            }
            return null
        },
        tg = function() {
            var a = [],
                b = document.getElementsByTagName("base");
            if (b)
                for (var c = 0, d = b.length; c < d; ++c) {
                    var e = b[c],
                        f = e.getAttribute("target");
                    f && (a.push({
                        oa: e,
                        Ga: f
                    }), e.removeAttribute("target"))
                }
            return a
        },
        ug = function(a) {
            if (a)
                for (var b = 0, c = a.length; b < c; ++b) {
                    var d = a[b];
                    d.oa.setAttribute("target", d.Ga)
                }
        };
    var xg = function(a, b, c, d) {
        var e = Q(c, "api_experiment");
        la(Ca(e)) || Ga(Ia(e.split(","), ma), ef);
        Ga(rd(), function(a) {
            googletag._tmanager_.addFeature(a)
        });
        this.A = b;
        this.l = c;
        this.v = d;
        this.m = Math.floor(4503599627370496 * Math.random());
        this.aa = !1;
        this.j = a;
        D && ib(9) && (Df = new kg)
    };
    xg.prototype.F = function() {
        return "lean"
    };
    var yg = function(a, b) {
        b && window.top != window ? a.aa = !0 : b = Math.floor(4503599627370496 * Math.random());
        a.m = Math.floor(b)
    };
    xg.prototype.Z = function() {
        return null
    };
    xg.prototype.N = function() {
        return !1
    };
    xg.prototype.$ = function() {};
    var zg = function(a, b, c, d) {
        var e = new Qe;
        e.G = "json_html";
        e.m = a.D(a.j);
        e.u = c;
        e.v = d;
        e.j = b;
        return e
    };
    xg.prototype.u = function(a) {
        a.w = this.m + "";
        a.l = rd();
        a.F = this.aa
    };
    xg.prototype.M = function(a) {
        this.u(a);
        return Ag(this, this.j ? "sra" : "single", a).M(a.j)
    };
    var Bg = function(a, b) {
            return b ? uf(a, 8192) : uf(a, 2048)
        },
        Dg = function(a, b, c, d) {
            b = Pd(b);
            jg(Ld(b[1], b[2], b[3], b[4], b[5], "nwids=" + M(d)), b[6]).then(function(a) {
                var b;
                a = a.responseText;
                a = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).replace(/\\x/g, "\\u00");
                var d = p.JSON.parse;
                try {
                    b = d(a)
                } catch (h) {
                    b = null
                }
                b && (Cg(b), c(b))
            }, function(a) {
                var b = new of("gpt_post_error", P["#23#"]);
                a.name && R(b, "name", a.name);
                a.status && R(b, "status", a.status);
                a.message && R(b, "message", a.message);
                pf(b, this.A);
                qf(b)
            }, a)
        },
        Cg = function(a) {
            ca(a) ?
                Ga(a, Cg) : E(a, function(a) {
                    a._cookies_ && delete a._cookies_
                })
        },
        Eg = function(a, b, c, d) {
            var e = d || !1;
            Ga(b, function(a) {
                var b = zg(this, [a], 1, c);
                this.u(b);
                b.m = this.D(!1);
                b = Bg(Ag(this, "single", b).M([a]), e);
                Oc(a, b)
            }, a)
        },
        Fg = function(a, b, c) {
            b in a.A.o || (c && a.N([b]), c = b.getCollapseEmptyDiv(), null == c && (c = "true" === Q(a.l, "google_collapse_empty_div")), c && og(I(b), !1))
        },
        Jg = function(a, b, c) {
            var d = [];
            if (a.j)
                if (ca(b)) {
                    d = c || Ge(a.A);
                    c = [];
                    for (var e = {}, f = 0; f < d.length; ++f) {
                        for (var g = d[f], h = null, k = Math.min(b.length, f + 1), n = 0; n < k; n++)
                            if (null ==
                                e[n] && (h = b[n][g.getAdUnitPath()])) {
                                e[n] = !0;
                                break
                            }
                        h && (Gg(a, g, h), c.push(g))
                    }
                    d = c
                } else d = Hg(a, b);
            else {
                e = [];
                f = 0;
                for (g in b) e[f++] = g;
                1 < e.length || 0 == e.length ? a = null : (e = e[0], b = b[e], (c = (c ? c[0] : void 0) || Ig(a, e)) ? (Gg(a, c, b), a = c) : a = null);
                a && d.push(a)
            }
            return d
        },
        Hg = function(a, b) {
            var c = [];
            E(b, function(a, b) {
                var f = Ig(this, b);
                f && (Gg(this, f, a), c.push(f))
            }, a);
            return c
        },
        Gg = function(a, b, c) {
            b.m = c;
            b.D || (b.D = (new Date).getTime());
            b.j.fetchEnded();
            null != c._cookies_ && Xe(a.v, c);
            c._persistent_for_stream_ && (a.A.o[b] = null)
        },
        Ig =
        function(a, b) {
            if (!a.j)
                for (var c = a.A.m, d = c.length - 1; 0 <= d; --d)
                    if (c[d].getAdUnitPath() == b) {
                        var e = c[d];
                        if (!e.m) return e
                    }
            d = [];
            if (e = a.A.F[b])
                for (c = 0; c < e.length; ++c) e[c] && d.push(c);
            if (c = d.length ? d : null)
                for (d = 0; d < c.length; ++d)
                    if ((e = a.A.j[b + "_" + c[d]]) && !e.m) return e;
            return null
        },
        Kg = function() {
            p.googletag._getcook_ = 1
        };
    var Lg = function(a, b, c, d, e) {
        S.call(this, a, b, c, d, e)
    };
    z(Lg, S);
    Lg.prototype.C = function() {
        S.prototype.C.call(this);
        U(this, "m_ast", "js");
        U(this, "markup", "html");
        U(this, "js", "afmc")
    };
    var Mg = function(a, b, c, d) {
        xg.call(this, a, b, c, d);
        this.X = this.G = this.C = this.w = !1;
        this.J = this.K = "";
        this.videoStreamCorrelator = NaN;
        this.I = 0
    };
    z(Mg, xg);
    Mg.prototype.F = function() {
        return "unknown"
    };
    Mg.prototype.u = function(a) {
        Mg.la.u.call(this, a);
        a.B = this.X;
        a.C = this.J;
        a.D = this.K;
        a.o = this.I
    };
    var Ng = function(a) {
        var b = Ke(a.A);
        if (0 < b.length) {
            for (var c = {}, d = [], e = 0; e < b.length; ++e) c[b[e][0]] = !0;
            E(c, function(a, b) {
                d.push(b)
            });
            b = new of("gpt_missing_cb", P["#10#"]);
            R(b, "pending", d.join());
            R(b, "correlator", a.m.toString());
            R(b, "impl", a.F());
            pf(b, a.A);
            qf(b)
        }
    };
    Mg.prototype.pa = function() {
        Ng(this);
        if (this.j && !this.C) {
            var a = Le(this.A),
                b = this.A.m.length;
            a != b && (a = new of("gpt_sra_mismatch", P["#11#"]), R(a, "correlator", this.m.toString()), R(a, "fslots", b.toString()), pf(a, this.A), qf(a))
        }
    };
    Mg.prototype.ra = function() {
        var a = new of("gpt_req_disp_mismatch", P["#23#"]);
        R(a, "fslots", this.A.m.length.toString());
        R(a, "impl", this.D(this.j));
        R(a, "sra", this.j ? "1" : "0");
        R(a, "correlator", this.m.toString());
        pf(a, this.A);
        qf(a)
    };
    var Ag = function(a, b, c) {
            switch (Q(a.l, "target_platform")) {
                case "MOBILE":
                    return new Lg(b, a.A, a.l, a.v, c);
                default:
                    return new Bf(b, a.A, a.l, a.v, c)
            }
        },
        Og = function(a, b, c) {
            a.I && b && (a = a.A.j[c], c = "", a && (c = a.getContentUrl()), pe().registerAdBlock(c, 3, "json_html", b, void 0, void 0, x(a.L, a)))
        };
    var V = function(a, b, c, d) {
        Mg.call(this, a, b, c, d);
        this.o = [];
        this.B = {};
        this.L = 0;
        this.da = {};
        this.fa = this.W = NaN;
        this.H = !1;
        this.P = NaN;
        this.ca = !1
    };
    z(V, Mg);
    V.prototype.F = function() {
        return this.j ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
    };
    V.prototype.D = function(a) {
        return a ? "fifs" : "fif"
    };
    V.prototype.u = function(a) {
        V.la.u.call(this, a);
        a.persistentRoadblocksOnly = this.ca;
        a.videoPodNumber = this.W;
        a.videoPodPosition = this.fa;
        a.videoStreamCorrelator = this.videoStreamCorrelator
    };
    var Sg = function(a, b, c) {
            for (var d = b.j, e = 0; e < d.length; e++) Ie(a.A, d[e]);
            b = a.M(b);
            Boolean(p.JSON && p.JSON.parse) && (!D || ib(10)) && (!ab || ib(12)) && 2048 < b.length ? (Pg(a, b, d), c = d[c], a.v && 1 != p.googletag._getcook_ && (b = a.v, 1 == b.j || !b.l && !b.o ? b = null : (e = we(Boolean(a.A.C)) + "/gampad/cookie.js?", e += "domain=" + M(document.domain), e = e + "&callback=window.parent.googletag.impl.pubads.setCookieInfo" + ("&iu=" + c.G), b.l && (e += "&cookie=" + M(b.l)), b.o && (e += "&cookie_enabled=1"), b = e), b && (b = '<script src = "' + ue(b) + '">\x3c/script>', Qg(c,
                b)))) : Rg(a, b, d, c);
            Kg();
            a.j || (a.da[H(d[0])] = setTimeout(x(a.na, a), P["#13#"]))
        },
        Tg = function(a, b, c) {
            var d = "";
            c && (d += '<script type="text/javascript">function callbackProxy(adContents) { ', d += "window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, " + a + ");}", d += "\x3c/script>");
            return d += '<script src = "' + b + '">\x3c/script>'
        },
        Rg = function(a, b, c, d) {
            b = Bg(b, !1);
            var e = ue(b);
            a.j ? Eg(a, c, "callbackProxy") : Oc(c[0], e);
            Ug(a, c, d);
            b = ++a.L;
            a.B[b] = c;
            a = Tg(b, e, a.j || !(c[0] in a.A.o));
            googletag._tmanager_.tickRepeated("start_ad_fetch_period",
                b, c[0].l);
            if (df(jf, "experiment") && null == document.getElementById(I(c[d])) && (d = Ka(c, function(a) {
                    return null != document.getElementById(I(a))
                }), -1 == d)) return;
            Qg(c[d], a)
        },
        Pg = function(a, b, c) {
            b = Bg(b, !0);
            var d = ue(b);
            a.j ? Eg(a, c, "callbackProxy", !0) : Oc(c[0], d);
            var e = ++a.L;
            a.B[e] = c;
            d = x(function(a) {
                !this.j && c[0] in this.A.o || Vg(this, a, e)
            }, a);
            Dg(a, b, d, Ne(a.A, c).join(","));
            googletag._tmanager_.tickRepeated("start_ad_fetch_period", e, c[0].l)
        },
        Qg = function(a, b) {
            var c = document,
                d = J(a) + "__hidden__",
                e = c.getElementById(d);
            if (!e) {
                e = I(a);
                e = c.getElementById(e);
                if (null == e) return;
                e = pg(e, d, !0, [0, 0], c)
            }
            vg(e, b, !1)
        },
        Wg = function(a) {
            return J(a) + "__container__"
        },
        Zg = function(a, b) {
            var c = document;
            if (!(b in a.A.o)) {
                var d = I(b),
                    e = c.getElementById(d);
                if (e) {
                    for (var d = Wg(b), f = J(b) + "__hidden__", e = e.childNodes, g = !1, h = 0; h < e.length; ++h)
                        if (1 == e[h].nodeType) {
                            var k = e[h];
                            if (k.id != d && k.id != f) {
                                g = !0;
                                break
                            }
                        }(g = g || Xg(c, b)) && Yg(b)
                }
            }
        },
        Xg = function(a, b) {
            var c = a.getElementById(Wg(b));
            return Boolean(c) && Ja(zb(c), function(a) {
                return a.id != J(b)
            })
        };
    V.prototype.$ = function(a, b) {
        var c = Ra(a, function(a) {
            return 0 != a.getSizes().length
        });
        c[!1] && Ga(c[!1], function(a) {
            Fg(this, a, !0)
        }, this);
        if (a = c[!0]) {
            r(b.videoStreamCorrelator) ? this.videoStreamCorrelator = b.videoStreamCorrelator : (c = !0, r(b.changeCorrelator) && (c = b.changeCorrelator), c && yg(this));
            this.W = b.videoPodNumber || NaN;
            this.fa = b.videoPodPosition || NaN;
            this.ca = b.persistentRoadblocksOnly || !1;
            this.H = b.clearUnfilledSlots || !1;
            Je(this.A, a);
            this.P = a.length;
            for (c = 0; c < a.length; ++c) Zg(this, a[c]);
            if (!this.w) {
                var d =
                    x(function(a) {
                        return zg(this, a, b.isVideoRefresh ? 3 : 2, "callbackProxy")
                    }, this);
                if (this.j) $g(this, d(a), 0);
                else
                    for (c = 0; c < a.length; ++c) $g(this, d([a[c]]), 0)
            }
        }
    };
    V.prototype.N = function(a) {
        for (var b = 0; b < a.length; ++b) Yg(a[b]), ah(this, a[b]), Nc(a[b]);
        return !0
    };
    var Yg = function(a) {
            var b = !!a.o;
            bh(a);
            var c = I(a);
            if (b) {
                var d = document.getElementById(c);
                if (d) {
                    var e = Wg(a) + "__to_be_removed__";
                    a = Na(d.childNodes);
                    Ga(a, function(a) {
                        1 == a.nodeType && a.id == e || d.removeChild(a)
                    })
                }
            } else ng(c)
        },
        ch = function(a, b) {
            var c = document,
                d = b.getSizes();
            if (0 != d.length) {
                var e = d[0];
                1 < d.length && (e = wg(I(b), c) || e);
                var d = J(b),
                    f = c.getElementById(d);
                if (!f) {
                    f = I(b);
                    f = c.getElementById(f);
                    if (null == f) return;
                    var g = c.createElement("div");
                    g.id = Wg(b);
                    g.name = g.id;
                    g.style.border = "0pt none";
                    a.A.v && (g.style.margin =
                        "auto", g.style.textAlign = "center");
                    f.appendChild(g);
                    f = pg(g, d, !1, e, c);
                    Eb(f, "load", function() {
                        b.w && googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
                    })
                }
                a.A.B[H(b)] = f
            }
        },
        Vg = function(a, b, c) {
            var d = a.B[c];
            b = Jg(a, b, d);
            googletag._tmanager_.tickRepeated("ad_fetch_period", c, b[0].l);
            delete a.B[c];
            Ga(b, a.Y, a);
            a.j || c != a.L || (clearTimeout(a.da[H(d[0])]), dh(a))
        };
    V.prototype.na = function() {
        var a = new of("gpt_request_timeout", P["#23#"]);
        pf(a, this.A);
        qf(a);
        dh(this)
    };
    var dh = function(a) {
            0 < a.o.length && (a.o.shift(), 0 < a.o.length && Sg(a, a.o[0], 0))
        },
        eh = function(a, b) {
            Ie(a.A, b);
            ch(a, b);
            null != b.m && a.Y(b)
        },
        $g = function(a, b, c) {
            for (var d = 0; d < b.j.length; d++) ch(a, b.j[d]);
            a.j ? Sg(a, b, c) : (a.o.push(b), 1 == a.o.length && Sg(a, b, c))
        };
    V.prototype.T = function(a) {
        if (!this.j) {
            var b = document.getElementById(I(a));
            b && (this.A.G[H(a)] = b)
        }
    };
    V.prototype.ba = function() {};
    V.prototype.R = function() {};
    V.prototype.O = function(a) {
        ah(this, a);
        var b = null,
            c = -1;
        if (this.j) {
            eh(this, a);
            b = He(this.A);
            if (0 == b.length) return;
            c = Ra(b, function(a) {
                return 0 != a.getSizes().length
            });
            c[!1] && Ga(c[!1], function(a) {
                Fg(this, a, !0)
            }, this);
            b = c[!0];
            if (!b) return;
            c = !a.v && 0 <= Fa(b, a) ? Ka(b, function(b) {
                return H(a) == H(b)
            }) : 0
        } else {
            if (0 == a.getSizes().length) {
                Fg(this, a, !0);
                return
            }
            b = [a];
            c = 0
        }
        this.w || this.C || (b = zg(this, b, 1, "callbackProxy"), $g(this, b, c))
    };
    var ah = function(a, b) {
        var c = b.getDivStartsCollapsed();
        null == c && (c = "true" === Q(a.l, "google_divs_start_collapsed"));
        c && og(I(b), !1)
    };
    V.prototype.Y = function(a) {
        try {
            fh(this, a)
        } catch (b) {}
    };
    var fh = function(a, b) {
            var c = document,
                d = b.m;
            googletag._tmanager_.tickRepeated("start_ad_render_period", Uc(b), b.l);
            Pc(b);
            if (null == d || d._empty_) Fg(a, b, a.H), d = Tc(b), d.slotContentChanged = a.H, K(b, d);
            else if (a.G) K(b, Tc(b));
            else {
                var e = d._html_;
                if (!u(e)) {
                    bh(b);
                    return
                }
                og(I(b), !0);
                gh(a, b);
                var f = [d._width_, d._height_];
                d._use_safe_frame_ ? hh(a, c, b, f, e, function() {
                    googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
                }) : ih(a, c, b, f, e);
                K(b, Sc(b, d))
            }
            qg(c, J(b) + "__hidden__")
        },
        bh = function(a) {
            var b = document.getElementById(Wg(a)),
                c = a.o;
            if (b) {
                var d = document.getElementById(J(a)),
                    e = pe();
                e.unloadAdBlock && e.unloadAdBlock(d, !!a.o);
                a.o ? (b.style.display = "none", b.id += "__to_be_removed__", d.id = d.id + "__to_be_removed__", window.setTimeout(function() {
                    c && Jc(c);
                    b.parentNode && b.parentNode.removeChild(b)
                }, P["#24#"])) : b.parentNode.removeChild(b)
            } else c && Jc(c);
            a.o = null
        },
        gh = function(a, b) {
            if (b.o) bh(b), ch(a, b);
            else {
                var c = document.getElementById(J(b)),
                    d = pe();
                d.unloadAdBlock && d.unloadAdBlock(c, !!b.o)
            }
        },
        ih = function(a, b, c, d, e) {
            b = b.getElementById(J(c));
            null != b && (b.width = String(d[0]), b.height = String(d[1]), vg(b, e, !0), Og(a, b, H(c)))
        },
        hh = function(a, b, c, d, e, f) {
            var g = b.getElementById(Wg(c));
            if (null != g) {
                for (var h; h = g.firstChild;) g.removeChild(h);
                a.A.v || (g.style.display = "inline-block");
                d = sg(g, J(c), e, d, f);
                c.o = d;
                Og(a, b.getElementById(J(c)), H(c))
            }
        };
    V.prototype.Z = function() {
        return isNaN(this.P) || this.j ? 0 == He(this.A).length : He(this.A).length == Le(this.A) - this.P
    };
    var Ug = function(a, b, c) {
            null == document.getElementById(I(b[c])) && jh(a);
            a.j && (Ja(b, function(a) {
                return null != document.getElementById(I(a))
            }) || kh(a))
        },
        jh = function(a) {
            var b = new of("gpt_target_slot_has_no_div", P["#29#"]);
            R(b, "sra", a.j ? "1" : "0");
            pf(b, a.A);
            qf(b)
        },
        kh = function(a) {
            var b = new of("gpt_request_slots_have_no_divs", P["#29#"]);
            pf(b, a.A);
            qf(b)
        };
    var lh = function(a, b, c, d) {
        Mg.call(this, a, b, c, d);
        this.B = -1;
        this.o = null
    };
    z(lh, Mg);
    lh.prototype.F = function() {
        return this.j ? "gut_sync_sra" : "gut_sync"
    };
    lh.prototype.D = function(a) {
        return a ? "ss" : "s"
    };
    var mh = function(a, b) {
            if (!a.w) {
                a.o = b.j;
                var c = a.M(b),
                    c = ue(Bg(c, !1)),
                    d = ++a.B;
                googletag._tmanager_.tickRepeated("start_ad_fetch_period", d, b.j[0].l);
                a.j ? Eg(a, b.j, "googletag.impl.pubads.setAdContentsBySlotForSync") : Oc(b.j[0], c);
                Kg();
                document.write('<script type="text/javascript" src="' + c + '">\x3c/script>')
            }
        },
        oh = function(a, b) {
            var c = Jg(a, b, df(lf, "experiment") ? a.o : void 0);
            a.o = null;
            googletag._tmanager_.tickRepeated("ad_fetch_period", a.B, c[0].l);
            if (a.j) c = a.A.m, 1 == c.length && nh(a, c[0]);
            else
                for (var d = 0; d < c.length; ++d) nh(a,
                    c[d])
        };
    lh.prototype.T = function(a) {
        if (!this.j) {
            var b;
            b = null;
            var c = Yc.getElementsByTagName("script");
            c && c.length && (b = c[c.length - 1]);
            (b = b && b.parentElement) && (this.A.G[H(a)] = b)
        }
    };
    lh.prototype.ba = function(a) {
        var b = "google_temp_div_" + H(a),
            c = '<div id="' + ua(b) + '"></div>';
        document.write(c);
        (b = rb(b)) && (this.A.B[H(a)] = b)
    };
    lh.prototype.R = function(a) {
        var b = this.A;
        a = H(a);
        var c = b.B[a];
        c && (c && c.parentNode && c.parentNode.removeChild(c), delete b.B[a])
    };
    lh.prototype.O = function(a) {
        Ie(this.A, a);
        var b = this.A.m.length;
        this.j ? 1 == b ? (b = Ha(Ge(this.A), function(a) {
            return 0 != a.getSizes().length
        }), 0 <= Fa(b, a) || Fg(this, a, !1), b.length && mh(this, zg(this, b, 1, "googletag.impl.pubads.setAdContentsBySlotForSync"))) : nh(this, a) : 0 == a.getSizes().length ? Fg(this, a, !1) : mh(this, zg(this, [a], 1, a.l ? "googletag.impl.pubads.setPassbackAdContents" : "googletag.impl.pubads.setAdContentsBySlotForSync"))
    };
    var nh = function(a, b) {
            var c = document,
                d = b.m;
            Pc(b);
            googletag._tmanager_.tickRepeated("start_ad_render_period", Uc(b), b.l);
            if (null == d || d._empty_) Fg(a, b, !1), K(b, Tc(b));
            else if (a.G) K(b, Tc(b));
            else if (d._use_safe_frame_) {
                var e = function() {
                        googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
                    },
                    f = d._html_;
                if (f) {
                    var g = [d._width_, d._height_];
                    ph(a, c, b, g, f, e);
                    K(b, Sc(b, d))
                } else K(b, Tc(b))
            } else if (d._snippet_ && !d._is_afc_) qh(a, b, c);
            else if (ye()) {
                c = "googletag.impl.pubads.syncAdSlotLoaded(this, '" + H(b) + "'," +
                    b.l + ");";
                e = "about:blank";
                if (g = Q(a.l, "google_domain_reset_url"))
                    if (f = Od(g), null === f || 0 <= f.indexOf(document.domain)) e = g;
                g = [d._width_, d._height_];
                rh(a, b, e, c, g, a.A.v)
            } else d = sh(a, b, c), c.write("<script>googletag.impl.pubads.createDomIframe(" + Ba(d) + " ," + Ba(H(b)) + "," + a.A.v + "," + b.l + ");\x3c/script>")
        },
        ph = function(a, b, c, d, e, f) {
            th(c, b);
            var g = J(c) + "__container__",
                h = '<div id="' + ua(g) + '"></div>';
            b.write(h);
            g = b.getElementById(g);
            null != g && (a.A.v ? g.style.margin = "auto" : g.style.display = "inline-block", d = sg(g, J(c), e,
                d, f), c.o = d, Og(a, b.getElementById(J(c)), H(c)))
        },
        uh = function(a, b) {
            var c = b.m,
                d = a.parentNode,
                e = c && c._html_;
            e ? (!c._expandable_ || c._is_afc_ && c._is_3pas_ ? (Eb(a, "load", function() {
                b.w && googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
            }), vg(a, e, !0)) : d.innerHTML = e, K(b, Sc(b, c))) : (d.removeChild(a), K(b, Tc(b)))
        },
        vh = function(a, b, c, d) {
            b = I(b) + "_ad_container";
            var e = '<div id="' + ua(b) + '"';
            a.A.v && d ? (e += ' style="width:' + d._width_, e += 'px;margin:auto;">') : e += ">";
            d && (e += d._html_);
            c.write(e + "\n</div>\n");
            return b
        },
        th = function(a, b) {
            var c = b.getElementById(I(a));
            c && c.parentNode && "" === c.innerHTML && c.parentNode.removeChild(c)
        },
        qh = function(a, b, c) {
            th(b, c);
            var d = b.m;
            if (null != d) {
                var e = vh(a, b, c, d);
                K(b, Sc(b, d));
                (c = c.getElementById(e)) && Og(a, c, H(b))
            }
        },
        rh = function(a, b, c, d, e, f) {
            th(b, document);
            var g = J(b),
                h = [],
                k = e[0];
            e = e[1];
            c = ue(c);
            h.push('<iframe id="', ua(g), '" name="', ua(g), '" width="', k, '" height="', e, '" vspace="0" hspace="0" allowtransparency="true" ', "scrolling=", a.H ? '"auto"' : '"no"', ' marginwidth="0" marginheight="0" frameborder="0" style=',
                '"border:0px;left:0;position:absolute;top:0;"', ' src="', c, '"');
            null != d && h.push(' onload="', d, '"');
            h.push("></iframe>");
            d = [];
            c = I(b) + "_ad_container";
            d.push('<div id="', ua(c), '"');
            f && d.push(' style="text-align:center" ');
            d.push(">");
            d.push('<ins style="position:relative;width:' + k + "px;height:" + e + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + k + "px;height:" + e + 'px;border:none;display:block;">' + h.join("") + "</ins>") + "</ins>");
            d.push("</div>");
            document.write(d.join(""));
            (f = document.getElementById(g)) && Og(a, f, H(b))
        },
        sh = function(a, b, c) {
            th(b, c || document);
            return vh(a, b, c || document)
        },
        wh = function(a, b, c, d, e, f, g) {
            a = a.createElement(b);
            a.style.width = d + "px";
            e && (a.style.height = e + "px");
            a.style.display = f;
            a.style.position = "relative";
            g && (a.style.margin = g);
            a.style.border = 0;
            c && a.appendChild(c);
            return a
        },
        xh = function(a, b, c, d, e, f) {
            e = wh(a, "ins", e, c, d, "block");
            d = wh(a, "ins", e, c, d, "inline-table");
            d.style.verticalAlign = "bottom";
            b = a.getElementById(b);
            f ? (a = wh(a, "div", d, c, null, "block", "auto"),
                b.appendChild(a)) : b.appendChild(d)
        },
        yh = function(a, b, c) {
            var d = document,
                e = b.m,
                f = e._width_,
                g = e._height_,
                h = e._html_,
                k = d.createElement("iframe"),
                n = J(b);
            k.id = n;
            k.name = n;
            k.width = f;
            k.height = g;
            k.vspace = 0;
            k.hspace = 0;
            k.allowTransparency = "true";
            k.scrolling = "no";
            k.marginWidth = 0;
            k.marginHeight = 0;
            k.frameBorder = 0;
            k.style.border = 0;
            k.style.position = "absolute";
            k.style.top = 0;
            k.style.left = 0;
            Eb(k, "load", function() {
                b.w && googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
            });
            xh(d, a, f, g, k, c);
            k.contentWindow.document.write(h);
            k.contentWindow.document.write("<script>document.close();\x3c/script>");
            K(b, Sc(b, e))
        };
    var zh = function() {
            this.m = this.j = this.l = null
        },
        W = function(a) {
            null == a.l && (a.l = new Ee(Vc));
            return a.l
        },
        X = function(a) {
            if (null != a.j) return a.j;
            switch (Q(Ah(a), "google_ad_impl")) {
                case "gut_sync_sra":
                    googletag._tmanager_.setSraMode(!0);
                    a.j = new lh(!0, W(a), Ah(a), Ze(void 0));
                    googletag._tmanager_.addFeature("sync");
                    break;
                case "gut_friendly_iframe":
                    googletag._tmanager_.setSraMode(!1);
                    a.j = new V(!1, W(a), Ah(a), Ze(void 0));
                    googletag._tmanager_.addFeature("fif");
                    break;
                case "gut_friendly_iframe_sra":
                    googletag._tmanager_.setSraMode(!0);
                    a.j = new V(!0, W(a), Ah(a), Ze(void 0));
                    googletag._tmanager_.addFeature("fif");
                    break;
                default:
                    googletag._tmanager_.setSraMode(!1), a.j = new lh(!1, W(a), Ah(a), Ze(void 0)), googletag._tmanager_.addFeature("sync")
            }
            var b = a.j;
            b.w = null != Q(b.l, "google_nofetch") || Boolean(window.google_noFetch) || b.w;
            b.C = null != Q(b.l, "google_disable_initial_load") || Boolean(window.google_DisableInitialLoad) || b.C;
            b.G = null != Q(b.l, "google_norender") || b.G;
            var c = x(b.pa, b),
                d = window;
            d.attachEvent ? d.attachEvent("onload", c) : d.addEventListener &&
                d.addEventListener("load", c, !1);
            c = x(b.ra, b);
            d = window;
            d.attachEvent ? d.attachEvent("onunload", c) : d.addEventListener && d.addEventListener("unload", c, !1);
            b.I = pe().setupOse(b.m);
            return a.j
        },
        Ah = function(a) {
            null == a.m && (a.m = new De);
            return a.m
        },
        Bh = null,
        Z = function() {
            Bh || (Bh = new zh);
            return Bh
        },
        Ch = null,
        Dh = function() {
            Ch || (Ch = new zh);
            return Ch
        };
    var Eh = P["#38#"],
        Fh = function(a, b) {
            var c = {
                methodId: a
            };
            b.name && (c.name = b.name);
            b.message && (c.message = b.message.substring(0, 512));
            b.fileName && (c.fileName = b.fileName);
            b.lineNumber && (c.lineNumber = b.lineNumber);
            b.stack && (c.stack = Zc(b.stack, ""));
            return c
        },
        Hh = function(a, b) {
            Gh(a, b, void 0);
            throw b;
        },
        Gh = function(a, b, c) {
            if (!b.Ca) try {
                b.Ca = !0;
                var d = Eh;
                r(c) && 0 <= c && 1 >= c && (d = c);
                var e = Fh(a, b),
                    f = new of("gpt_exception", d);
                try {
                    pf(f, W(Z()))
                } catch (g) {}
                E(e, function(a, b) {
                    R(f, b, a)
                });
                qf(f)
            } catch (h) {}
        };
    var Ih = function() {};
    m = Ih.prototype;
    m.addSlot = function(a) {
        if (!a) return null;
        var b = a.getAdUnitPath();
        return b && b.length ? Fe(W(Z()), a) : null
    };
    m.fillSlot = function(a) {
        var b = Z(),
            c = X(b);
        (a = Me(W(b), a)) && (null == a.m || c.j) && (c.T(a), c.ba(a), c.O(a), c.R(a))
    };
    m.setCookieOptions = function(a) {
        Z();
        var b = Ze(a);
        b.j = a;
        Ve(b)
    };
    m.setTagForChildDirectedTreatment = function(a) {
        W(Z()).H = a
    };
    m.setKidsFriendlyAds = function(a) {
        W(Z()).I = a
    };
    m.passback = function(a) {
        if (a) {
            var b = a.getAdUnitPath();
            b && b.length && (b = Dh(), a = Fe(W(b), a, !0), X(b).O(a))
        }
    };
    m.disableInitialLoad = function() {
        window.google_DisableInitialLoad = !0
    };
    m.addAttribute = function(a, b) {
        var c = W(Z()),
            d = b;
        if (!la(Ca(a))) {
            la(Ca(d)) && (d = "");
            var e = c.w[a];
            c.w[a] = e ? e + "," + d : d
        }
    };
    m.clearAttribute = function(a) {
        var b = W(Z());
        la(Ca(a)) || b.w[a] && delete b.w[a]
    };
    m.addPageCategoryExclusion = function(a) {
        var b = W(Z());
        la(Ca(a)) || (b = b.D, 0 <= Fa(b, a) || b.push(a))
    };
    m.clearPageCategoryExclusions = function() {
        W(Z()).D = []
    };
    m.addAdSensePageAttribute = function(a, b) {
        var c = W(Z());
        Td(c.l, a, b)
    };
    m.addAdSenseSlotAttribute = function(a, b, c) {
        var d = W(Z());
        a && (a = Me(d, a)) && (a = H(a), null == d.u[a] && (d.u[a] = new Sd(d.K)), Td(d.u[a], b, c))
    };
    m.enableSingleRequest = function() {
        var a = Ah(Z());
        null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_sync_sra")
    };
    m.collapseEmptyDivs = function(a) {
        var b = Ah(Z());
        b.j.google_collapse_empty_div = "true";
        a && (b.j.google_divs_start_collapsed = "true")
    };
    m.enableAsyncRendering = function() {
        var a = Ah(Z());
        null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe")
    };
    m.enableAsyncSingleRequest = function() {
        var a = Ah(Z());
        null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe_sra")
    };
    m.setVideoContentInformation = function(a, b) {
        var c = X(Z());
        c.X = !0;
        c.K = a;
        c.J = b;
        c.videoStreamCorrelator = Math.floor(4503599627370496 * Math.random())
    };
    m.getVideoContentInformation = function() {
        var a = X(Z());
        return {
            cmsid: a.J,
            vid: a.K
        }
    };
    m.getVideoStreamCorrelator = function() {
        return X(Z()).videoStreamCorrelator
    };
    m.refresh = function(a, b) {
        var c = Z(),
            d = X(c),
            c = W(c),
            e = null,
            e = null != a ? Jh(a) : Ge(c);
        0 == e.length || d.$(e, b)
    };
    m.getCorrelator = function() {
        return X(Z()).m + ""
    };
    m.setCorrelator = function(a) {
        yg(X(Z()), a)
    };
    m.setMobilePlatform = function() {
        Ah(Z()).j.target_platform = "MOBILE"
    };
    m.setApiExperiment = function(a) {
        ef(a)
    };
    m.isAdRequestFinished = function() {
        return X(Z()).Z()
    };
    m.isSlotAPersistentRoadblock = function(a) {
        if (!a) return !1;
        var b = W(Z());
        return !!(new Lc(a, !1) in b.o)
    };
    m.clearNoRefreshState = function() {
        W(Z()).o = {}
    };
    m.clearSlotContents = function(a) {
        var b = Z(),
            c = X(b),
            b = W(b),
            d = null,
            d = a ? Jh(a) : Ge(b);
        return c.N(d)
    };
    m.setLocation = function(a) {
        W(Z()).C = a
    };
    m.setPublisherProvidedId = function(a) {
        W(Z()).J = a
    };
    m.getVersion = function() {
        return "70g"
    };
    m.setCenterAds = function(a) {
        W(Z()).v = a
    };
    var Jh = function(a) {
            for (var b = [], c = W(Z()), d = 0; d < a.length; ++d) {
                var e = Me(c, a[d]);
                e && b.push(e)
            }
            return b
        },
        Kh = function(a, b) {
            var c;
            c = p.googletag || (p.googletag = {});
            c = c.impl || (c.impl = {});
            c = c.pubads || (c.pubads = {});
            c[a] || (c[a] = b)
        };
    Kh("createDomIframe", function(a, b, c, d) {
        try {
            var e;
            e = d ? Dh() : Z();
            var f = X(e),
                g;
            if (g = W(e).j[b]) {
                yh(a, g, c);
                var h = document.getElementById(J(g));
                h && Og(f, h, b)
            }
        } catch (k) {
            Hh(2401, k)
        }
    });
    Kh("setAdContentsBySlotForSync", function(a) {
        try {
            oh(X(Z()), a)
        } catch (b) {
            Hh(2403, b)
        }
    });
    Kh("setPassbackAdContents", function(a) {
        try {
            oh(X(Dh()), a)
        } catch (b) {
            Hh(2404, b)
        }
    });
    Kh("setAdContentsBySlotForAsync", function(a, b) {
        try {
            Vg(X(Z()), a, b)
        } catch (c) {
            Hh(2405, c)
        }
    });
    Kh("syncAdSlotLoaded", function(a, b, c) {
        try {
            var d = X(c ? Dh() : Z());
            if (b) {
                var e = d.A.j[b];
                e && !e.C && (e.C = !0, uh(a, e))
            }
        } catch (f) {
            Hh(2407, f)
        }
    });
    Kh("setCookieInfo", function(a) {
        try {
            var b;
            Z();
            b = Ze(void 0);
            Xe(b, a)
        } catch (c) {
            Hh(2408, c)
        }
    });
    try {
        googletag._tmanager_.tick("pubads_load_period");
        window.google_noFetch = !1;
        window.google_DisableInitialLoad = !1;
        try {
            var Lh = p.googletag.pubads;
            if (ea(Lh)) Lh().onGoogleAdsJsLoad(new Ih)
        } catch (Mh) {
            Gh(3002, Mh)
        }
    } catch (Nh) {
        Hh(3001, Nh)
    };
}).call(this);