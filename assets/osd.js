(function() {
    var m = this,
        n = function(a) {
            return void 0 !== a
        },
        aa = function(a, b) {
            var c = a.split("."),
                d = m;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) !c.length && n(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
        },
        ba = function(a) {
            a = a.split(".");
            for (var b = m, c; c = a.shift();)
                if (null != b[c]) b = b[c];
                else return null;
            return b
        },
        ca = function() {},
        da = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" ==
                        c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ea = function(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        q = function(a) {
            return "string" == typeof a
        },
        t = function(a) {
            return "number" == typeof a
        },
        v = function(a) {
            return "function" == da(a)
        },
        fa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
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
                return a.apply(b,
                    arguments)
            }
        },
        x = function(a, b, c) {
            x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
            return x.apply(null, arguments)
        },
        ja = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        ka = Date.now || function() {
            return +new Date
        },
        la = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ue = b.prototype;
            a.prototype = new c;
            a.te = function(a, c, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h -
                    2] = arguments[h];
                return b.prototype[c].apply(a, g)
            }
        };
    var ma = function(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };
    var na = ma("1.0"),
        oa = ma("0.05"),
        pa = ma("0.95"),
        qa = ma("0.02"),
        ra = ma("0.02"),
        ua = ma("0.0");
    var va = /^true$/.test("false") ? !0 : !1;
    var wa;
    var xa = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        Fa = function(a) {
            if (!ya.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(za, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Aa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Da, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ea, "&#0;"));
            return a
        },
        za = /&/g,
        Aa = /</g,
        Ba = />/g,
        Ca = /"/g,
        Da = /'/g,
        Ea = /\x00/g,
        ya = /[\x00&<>"']/,
        Ha = function(a, b) {
            for (var c = 0, d = xa(String(a)).split("."), e = xa(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                var h = d[g] || "",
                    l = e[g] || "",
                    p = RegExp("(\\d*)(\\D*)", "g"),
                    u = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var k = p.exec(h) || ["", "", ""],
                        r = u.exec(l) || ["", "", ""];
                    if (0 == k[0].length && 0 == r[0].length) break;
                    c = Ga(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || Ga(0 == k[2].length, 0 == r[2].length) || Ga(k[2], r[2])
                } while (0 == c)
            }
            return c
        },
        Ga = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Ia =
        function() {
            return "display".replace(/\-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })
        },
        Ja = function(a) {
            var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var Ka = function(a) {
        Ka[" "](a);
        return a
    };
    Ka[" "] = ca;
    var La = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Ka(a.foo);
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
        Ma = function(a, b) {
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
        Na = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Pa = function() {
            var a = Oa;
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        };
    var y = document,
        z = window;
    var Qa = Array.prototype,
        A = Qa.forEach ? function(a, b, c) {
            Qa.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ra = Qa.map ? function(a, b, c) {
            return Qa.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Sa = Qa.some ? function(a, b, c) {
            return Qa.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        Ta = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Ua = function(a) {
            for (var b = [], c = 0; c < a; c++) b[c] = 0;
            return b
        };
    var B = function(a, b) {
        this.x = n(a) ? a : 0;
        this.y = n(b) ? b : 0
    };
    B.prototype.clone = function() {
        return new B(this.x, this.y)
    };
    B.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    B.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    B.prototype.translate = function(a, b) {
        a instanceof B ? (this.x += a.x, this.y += a.y) : (this.x += a, t(b) && (this.y += b));
        return this
    };
    var Va = function(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        Wa = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Xa = function() {
            var a = C,
                b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Za = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ya.length; f++) c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var D = function(a, b) {
        this.width = a;
        this.height = b
    };
    D.prototype.clone = function() {
        return new D(this.width, this.height)
    };
    D.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    D.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var $a;
    a: {
        var ab = m.navigator;
        if (ab) {
            var bb = ab.userAgent;
            if (bb) {
                $a = bb;
                break a
            }
        }
        $a = ""
    }
    var E = function(a) {
        return -1 != $a.indexOf(a)
    };
    var cb = function() {
            return E("Opera") || E("OPR")
        },
        db = function() {
            return (E("Chrome") || E("CriOS")) && !cb() && !E("Edge")
        };
    var eb = function() {
        return E("iPhone") && !E("iPod") && !E("iPad")
    };
    var ib = cb(),
        F = E("Trident") || E("MSIE"),
        jb = E("Edge"),
        kb = E("Gecko") && !(-1 != $a.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        lb = -1 != $a.toLowerCase().indexOf("webkit") && !E("Edge"),
        mb = E("Macintosh"),
        nb = function() {
            var a = $a;
            if (kb) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (jb) return /Edge\/([\d\.]+)/.exec(a);
            if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (lb) return /WebKit\/(\S+)/.exec(a)
        },
        ob = function() {
            var a = m.document;
            return a ? a.documentMode : void 0
        },
        pb = function() {
            if (ib &&
                m.opera) {
                var a = m.opera.version;
                return v(a) ? a() : a
            }
            var a = "",
                b = nb();
            b && (a = b ? b[1] : "");
            return F && (b = ob(), b > parseFloat(a)) ? String(b) : a
        }(),
        qb = {},
        H = function(a) {
            return qb[a] || (qb[a] = 0 <= Ha(pb, a))
        },
        rb = m.document,
        sb = rb && F ? ob() || ("CSS1Compat" == rb.compatMode ? parseInt(pb, 10) : 5) : void 0;
    var tb = !F || 9 <= sb;
    !kb && !F || F && 9 <= sb || kb && H("1.9.1");
    F && H("9");
    var wb = function(a) {
            return a ? new ub(vb(a)) : wa || (wa = new ub)
        },
        yb = function(a, b) {
            Va(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : xb.hasOwnProperty(d) ? a.setAttribute(xb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        xb = {
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
        zb = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : lb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return F && H("10") && a.pageYOffset != b.scrollTop ? new B(b.scrollLeft, b.scrollTop) : new B(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        Ab = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        Cb = function(a, b, c) {
            var d = arguments,
                e = document,
                f = d[0],
                g = d[1];
            if (!tb && g && (g.name || g.type)) {
                f = ["<", f];
                g.name && f.push(' name="',
                    Fa(g.name), '"');
                if (g.type) {
                    f.push(' type="', Fa(g.type), '"');
                    var h = {};
                    Za(h, g);
                    delete h.type;
                    g = h
                }
                f.push(">");
                f = f.join("")
            }
            f = e.createElement(f);
            g && (q(g) ? f.className = g : "array" == da(g) ? f.className = g.join(" ") : yb(f, g));
            2 < d.length && Bb(e, f, d);
            return f
        },
        Bb = function(a, b, c) {
            function d(c) {
                c && b.appendChild(q(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !ea(f) || fa(f) && 0 < f.nodeType ? d(f) : A(Db(f) ? Ta(f) : f, d)
            }
        },
        Eb = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        vb = function(a) {
            return 9 ==
                a.nodeType ? a : a.ownerDocument || a.document
        },
        Fb = function(a) {
            return a.contentWindow || Ab(a.contentDocument || a.contentWindow.document)
        },
        Db = function(a) {
            if (a && "number" == typeof a.length) {
                if (fa(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (v(a)) return "function" == typeof a.item
            }
            return !1
        },
        ub = function(a) {
            this.ya = a || m.document || document
        };
    ub.prototype.createElement = function(a) {
        return this.ya.createElement(a)
    };
    ub.prototype.createTextNode = function(a) {
        return this.ya.createTextNode(String(a))
    };
    ub.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    var I = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    I.prototype.clone = function() {
        return new I(this.top, this.right, this.bottom, this.left)
    };
    I.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    I.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    I.prototype.translate = function(a, b) {
        a instanceof B ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, t(b) && (this.top += b, this.bottom += b));
        return this
    };
    var Gb = {},
        Hb = function(a) {
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
            F && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        Ib = function(a) {
            "number" == typeof a && (a += "px");
            return a
        };
    var Jb = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        Kb = function(a, b) {
            a.google_image_requests || (a.google_image_requests = []);
            var c = a.document.createElement("img");
            c.src = b;
            a.google_image_requests.push(c)
        };
    var Lb = null,
        Mb = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
        };

    function J(a) {
        return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
    }
    var Nb = function(a, b) {
            Na(a, "readystatechange", b)
        },
        Ob = function() {
            var a = K();
            return "complete" == a.document.readyState || !!a.google_onload_fired
        },
        Pb = {};
    var Qb = !!window.google_async_iframe_id,
        Rb = Qb && window.parent || window,
        K = function() {
            if (Qb && !La(Rb)) {
                for (var a = "." + y.domain; 2 < a.split(".").length && !La(Rb);) y.domain = a = a.substr(a.indexOf(".") + 1), Rb = window.parent;
                La(Rb) || (Rb = window)
            }
            return Rb
        };
    var Tb = .01,
        Ub = !0,
        Vb = {},
        Wb = {},
        $b = function(a, b, c, d) {
            var e = Xb,
                f, g = Ub;
            try {
                f = b()
            } catch (h) {
                try {
                    var l = Jb(h);
                    b = "";
                    h.fileName && (b = h.fileName);
                    var p = -1;
                    h.lineNumber && (p = h.lineNumber);
                    g = e(a, l, b, p, c)
                } catch (u) {
                    try {
                        var k = Jb(u);
                        a = "";
                        u.fileName && (a = u.fileName);
                        c = -1;
                        u.lineNumber && (c = u.lineNumber);
                        Xb("pAR", k, a, c, void 0, void 0)
                    } catch (r) {
                        Zb({
                            context: "mRE",
                            msg: r.toString() + "\n" + (r.stack || "")
                        }, void 0)
                    }
                }
                if (!g) throw h;
            } finally {
                if (d) try {
                    d()
                } catch (G) {}
            }
            return f
        },
        Xb = function(a, b, c, d, e, f) {
            var g = {};
            if (e) try {
                e(g)
            } catch (h) {}
            g.context =
                a;
            g.msg = b.substring(0, 512);
            c && (g.file = c);
            0 < d && (g.line = d.toString());
            g.url = y.URL.substring(0, 512);
            g.ref = y.referrer.substring(0, 512);
            ac(g);
            Zb(g, f);
            return Ub
        },
        Zb = function(a, b) {
            try {
                if (Math.random() < (b || Tb)) {
                    var c = "/pagead/gen_204?id=jserror" + bc(a),
                        d = "http" + ("http:" == z.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c,
                        d = d.substring(0, 2E3);
                    Kb(z, d)
                }
            } catch (e) {}
        },
        ac = function(a) {
            var b = a || {};
            Mb(Vb, function(a, d) {
                b[d] = a
            });
            Mb(Wb, function(a, d) {
                null != z[a] && (b[d] = z[a])
            })
        },
        L = function(a, b, c, d, e) {
            return function() {
                var f =
                    arguments;
                return $b(a, function() {
                    return b.apply(c, f)
                }, d, e)
            }
        },
        M = function(a, b) {
            return L(a, b, void 0, void 0, void 0)
        },
        cc = function(a, b) {
            return L(a, b, void 0, void 0, void 0)
        },
        bc = function(a) {
            var b = "";
            Mb(a, function(a, d) {
                if (0 === a || a) b += "&" + d + "=" + J(String(a))
            });
            return b
        };
    var dc = function(a) {
        return (a = /[&\?]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };
    var ec = {
        Id: {
            g: "17415661",
            c: "17415662"
        },
        se: {
            g: "453848100",
            c: "453848101"
        },
        Rd: {
            g: "828064124",
            c: "828064125"
        },
        Qd: {
            g: "828064127",
            c: "828064128"
        },
        Sd: {
            g: "828064170",
            c: "828064171"
        },
        Jd: {
            g: "453848130",
            c: "453848131",
            pe: "453848132",
            qe: "453848133"
        },
        ad: {
            g: "24819312",
            c: "24819313"
        },
        cd: {
            g: "24819310",
            c: "24819311"
        },
        dd: {
            g: "24819308",
            c: "24819309",
            Sc: "24819320"
        },
        Kd: {
            Pd: "828064119"
        },
        Yd: {
            g: "828064162",
            c: "828064163"
        },
        Xd: {
            g: "828064164",
            c: "828064165",
            Ld: "828064166"
        },
        ae: {
            g: "10573501",
            c: "10573502"
        },
        be: {
            g: "10573591",
            c: "10573592"
        },
        ge: {
            g: "10573511",
            c: "10573512"
        },
        he: {
            g: "10573581",
            c: "10573582"
        },
        Nd: {
            g: "10573521",
            c: "10573522"
        },
        Od: {
            g: "10573571",
            c: "10573572"
        },
        ce: {
            g: "10573531",
            c: "10573532"
        },
        ee: {
            g: "10573561",
            c: "10573562"
        },
        de: {
            g: "10573551",
            c: "10573552"
        },
        bd: {
            g: 24819400,
            c: 24819401
        },
        Zd: {
            g: "312815000",
            c: "312815001"
        },
        $d: {
            g: "312815100",
            c: "312815101"
        }
    };
    var fc = /[&\?](?:client|correlator|url|ifk|oid|eid|iu)=[^&]+/g,
        gc = /[&\?](?:slotname|dt|ifi|adx|ady|format|output|flash|impl)=[^&]+/g,
        hc = {
            fd: "ud=1",
            ed: "ts=0",
            fe: "sc=1",
            Md: "gz=1"
        },
        ic = {
            $c: "la="
        },
        jc = {
            Td: 0,
            g: 1,
            Wd: 2,
            Wc: 3,
            Yc: 4,
            Vc: 5,
            Uc: 6
        };
    var kc = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4
            }[a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
        },
        lc = function() {
            var a;
            y.mozVisibilityState ? a = "mozvisibilitychange" : y.webkitVisibilityState ? a = "webkitvisibilitychange" : y.visibilityState && (a = "visibilitychange");
            return a
        };
    var mc = function(a, b, c) {
            if ("array" == da(b))
                for (var d = 0; d < b.length; d++) mc(a, String(b[d]), c);
            else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
        },
        nc = function(a, b, c) {
            for (c = c || 0; c < b.length; c += 2) mc(b[c], b[c + 1], a);
            return a
        },
        oc = function(a, b) {
            var c = 2 == arguments.length ? nc([a], arguments[1], 0) : nc([a], arguments, 1);
            if (c[1]) {
                var d = c[0],
                    e = d.indexOf("#");
                0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
                e = d.indexOf("?");
                0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
            }
            return c.join("")
        };
    var pc = !1,
        qc = "",
        rc = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    if (navigator.plugins && navigator.plugins.length) {
        var sc = navigator.plugins["Shockwave Flash"];
        sc && (pc = !0, sc.description && (qc = rc(sc.description)));
        navigator.plugins["Shockwave Flash 2.0"] && (pc = !0, qc = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var tc = navigator.mimeTypes["application/x-shockwave-flash"];
        (pc = tc && tc.enabledPlugin) && (qc = rc(tc.enabledPlugin.description))
    } else try {
        var uc = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            pc = !0,
            qc = rc(uc.GetVariable("$version"))
    } catch (vc) {
        try {
            uc =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), pc = !0, qc = "6.0.21"
        } catch (wc) {
            try {
                uc = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), pc = !0, qc = rc(uc.GetVariable("$version"))
            } catch (xc) {}
        }
    }
    var yc = qc;
    var zc = E("Firefox"),
        Ac = eb() || E("iPod"),
        Bc = E("iPad"),
        Cc = E("Android") && !(db() || E("Firefox") || cb() || E("Silk")),
        Dc = db(),
        Ec = E("Safari") && !(db() || E("Coast") || cb() || E("Edge") || E("Silk") || E("Android")) && !(eb() || E("iPad") || E("iPod"));
    var Fc = function(a) {
            return (a = a.exec($a)) ? a[1] : ""
        },
        Gc = function() {
            if (zc) return Fc(/Firefox\/([0-9.]+)/);
            if (F || ib) return pb;
            if (Dc) return Fc(/Chrome\/([0-9.]+)/);
            if (Ec && !(eb() || E("iPad") || E("iPod"))) return Fc(/Version\/([0-9.]+)/);
            if (Ac || Bc) {
                var a;
                if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec($a)) return a[1] + "." + a[2]
            } else if (Cc) return (a = Fc(/Android\s+([0-9.]+)/)) ? a : Fc(/Version\/([0-9.]+)/);
            return ""
        }();
    va && (Tb = 1);
    if (y && y.URL) var Oa = y.URL,
        Ub = !(Oa && 0 < Pa().length);
    var N = function(a, b, c, d) {
        c = cc(d || "osd_or_lidar::" + b, c);
        Na(a, b, c);
        return c
    };
    var C = {},
        Hc = null;
    C.le = 0;
    C.nt = 2;
    C.Fr = 3;
    var Ic = function(a, b, c) {
            b = b || z;
            a && b.top != b && (b = b.top);
            try {
                var d;
                if (b.document && !b.document.body) d = new D(-1, -1);
                else {
                    var e;
                    if (c) e = (new D(b.innerWidth, b.innerHeight)).round();
                    else {
                        var f = (b || window).document,
                            g = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        e = (new D(g.clientWidth, g.clientHeight)).round()
                    }
                    d = e
                }
                return d
            } catch (h) {
                return new D(-12245933, -12245933)
            }
        },
        Kc = function(a, b, c) {
            var d = Jc,
                e = z || z;
            a && (e = e.top);
            a = b || Ic(a, e, d);
            c || (e = wb(e.document), c = zb(e.ya));
            e = c;
            return -1 == a.width || -12245933 == a.width ?
                new I(a.width, a.width, a.width, a.width) : new I(e.y, e.x + a.width, e.y + a.height, e.x)
        },
        Lc = function() {
            return z && z.outerWidth ? new D(z.outerWidth, z.outerHeight) : new D(-12245933, -12245933)
        },
        Mc = function(a, b) {
            ("msie" in Pb ? Pb.msie : Pb.msie = -1 != navigator.userAgent.toLowerCase().indexOf("msie")) && !window.opera ? Nb(a, cc("osd::util::rschange", function() {
                "complete" == a.readyState && b(null)
            })) : Na(a, "load", cc("osd::util::load", b))
        },
        Nc = function(a, b) {
            try {
                b.postMessage(a, "*")
            } catch (c) {}
        },
        Oc = function(a, b) {
            if (b) {
                a(b);
                var c = b.frames;
                if (c) {
                    var d = c.length,
                        e;
                    for (e = 0; e < d; ++e) Oc(a, c[e])
                }
            }
        },
        Rc = function(a) {
            var b = 0 <= O ? P() - O : -1,
                c = Pc ? P() - Qc : -1,
                d;
            if (79463068 == a) return 500;
            if (947190538 == a) a = [4E3], d = [250, 1E3];
            else if (947190541 == a) a = [4E3], d = [100, 1E3];
            else {
                if (947190542 == a) return 100;
                if (79463069 == a) return 200;
                a = [2E3, 4E3];
                d = [250, 500, 1E3]
            }
            var e = b; - 1 != c && c < b && (e = c);
            for (var f, b = 0; b < a.length; ++b)
                if (e < a[b]) {
                    f = d[b];
                    break
                }
            void 0 === f && (f = d[a.length]);
            return f
        },
        Sc = (new Date).getTime(),
        O = -1,
        Pc = !1,
        Qc = -1,
        P = function() {
            return (new Date).getTime() - Sc
        },
        Tc = function() {
            var a =
                Cb("div");
            a.style.cssText = "position:relative;left:0px;top:0px;width:0;height:0;";
            return a
        },
        Uc = function(a) {
            for (var b; a && a != a.parentElement;) {
                if (b = a.style) {
                    var c = a;
                    b = c.style[Ia()];
                    if ("undefined" === typeof b) {
                        b = c.style;
                        var d = Gb.display;
                        if (!d) {
                            var e = Ia(),
                                d = e;
                            void 0 === c.style[e] && (e = (lb ? "Webkit" : kb ? "Moz" : F ? "ms" : ib ? "O" : null) + Ja(e), void 0 !== c.style[e] && (d = e));
                            Gb.display = d
                        }
                        b = b[d] || ""
                    }
                    b = "none" == b
                }
                if (b) return !0;
                b = a;
                a = a.parentElement
            }
            if (b && (a = vb(b))) {
                var f, g;
                try {
                    if (f = Ab(a)) g = f.frameElement
                } catch (h) {
                    return !1
                }
                if (f &&
                    g && f != f.parent) return Uc(g)
            }
            return !1
        };
    C.Po = 5;
    C.me = 1;
    C.om = 4;
    var Vc = function(a) {
            C.e = -1;
            C.i = 6;
            C.n = 7;
            C.t = 8;
            if (!Hc) {
                var b = [];
                A(Xa(), function(a) {
                    b[C[a] + 1] = a
                });
                var c = b.join("");
                Hc = (c = a && a[c]) && x(c, a)
            }
            return Hc
        },
        Wc = function(a) {
            a = a && a.document;
            return F && H(8) && v(Vc(a))
        },
        Q = function() {
            var a;
            if (a = mb && Ec) a = 0 <= Ha(Gc, "6.0.1");
            return a && 0 <= Ha(yc, "10.1") ? !0 : !1
        };
    var Xc = function(a, b) {
            this.T = null;
            this.xb = a;
            this.l = b || 1;
            this.f = "u"
        },
        Yc = function(a, b) {
            var c = b.right - b.left,
                d = b.bottom - b.top,
                e = Math.floor(c / 2),
                f = Math.floor(d / 2);
            switch (a.l) {
                case 4:
                    return a.xb ? (e = Math.floor(.3 * c), f = Math.floor(.3 * d), [new B(e, f), new B(c - e, f), new B(e, d - f), new B(c - e, d - f)]) : [new B(e, 0), new B(0, f), new B(e, d - 1), new B(c - 1, f)];
                case 3:
                    return [new B(c - 1, 0), new B(e, f), new B(0, d - 1)];
                default:
                    return [new B(e, f)]
            }
        },
        Zc = function(a, b) {
            var c;
            try {
                c = b || a.T.getBoundingClientRect()
            } catch (d) {
                c = new I(0, 0, 0, 0)
            }
            var e =
                Yc(a, c);
            A(e, function(a) {
                a.x += c.left;
                a.y += c.top
            });
            return e
        },
        $c = function(a, b, c, d) {
            Xc.call(this, a, d);
            this.zd = b || 3E3;
            this.Ad = c || 3E3;
            this.v = [];
            this.Y = !1;
            this.aa = -1;
            this.Pa = this.Bb = 0;
            this.xb = a
        };
    la($c, Xc);
    var ad = function(a, b, c) {
            this.fb = a;
            this.zc = b;
            this.gc = c
        },
        cd = function(a, b, c) {
            if (!(b && b.getBoundingClientRect && 0 <= Ha(yc, "11") && c) || F && 9 > pb || 0 < a.v.length) return !1;
            try {
                var d = b.getBoundingClientRect()
            } catch (e) {
                return !1
            }
            var f = "DIV" == b.tagName || "INS" == b.tagName,
                g = vb(b),
                h = [];
            if (f) {
                var l = Tc(),
                    d = Yc(a, d);
                A(d, function(a, b) {
                    var d = new bd("e", g, c, String(b));
                    this.v.push(d);
                    h.push(x(d.oc, d, l, a))
                }, a);
                b.insertBefore(l, b.childNodes[0] || null)
            } else d = Zc(a, d), A(d, function(a, d) {
                var e = new bd("e", g, c, String(d));
                this.v.push(e);
                h.push(x(e.nc, e, b, a))
            }, a);
            var p = !0;
            A(h, function(a) {
                p = p && a()
            });
            p ? (a.f = "l", a.T = b, a.Y = !f) : (A(a.v, function(a) {
                a.remove()
            }), a.v = []);
            return p
        },
        dd = function(a) {
            if (a.T && a.Y) {
                var b = Zc(a);
                A(b, function(a, b) {
                    this.v[b] && this.v[b].setPosition(a)
                }, a)
            }
        },
        ed = function(a) {
            A(a.v, function(a) {
                a.remove()
            });
            a.v = [];
            a.f = "d"
        },
        kd = function(a) {
            var b = ka(),
                c = a.Bb ? b - a.Bb : 0,
                d = -1,
                e = Ra(a.v, function(a) {
                    return fd(a, b)
                });
            4 == a.v.length ? d = a.xb ? gd(e) : hd(e) : 3 == a.v.length ? d = id(e) : 1 == a.v.length && (d = [-1, 0, 1, 2, 3, 5][fd(a.v[0], b) + 1]);
            a.Pa = d == a.aa ?
                a.Pa + c : 0;
            c = new ad(d, a.aa, c);
            a.aa = d;
            a.Bb = b;
            jd(a, d);
            dd(a);
            return c
        },
        md = function(a) {
            var b = Ua(Wa(ld));
            A(a, function(a) {
                0 <= a && ++b[a]
            });
            return b
        },
        hd = function(a) {
            a = md(a);
            return 4 == a[4] ? 6 : 3 <= a[4] ? 5 : 0 < a[4] ? 4 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
        },
        id = function(a) {
            var b = md(a);
            return 4 == a[0] && 4 == a[2] ? 6 : 4 == a[1] ? 5 : 0 < b[4] ? 4 : 3 == b[2] ? 2 : 3 == b[1] ? 1 : 3 == b[0] ? 0 : 3
        },
        gd = function(a) {
            a = md(a);
            return 3 <= a[4] ? 5 : 2 == a[4] ? 8 : 0 < a[4] ? 7 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
        },
        jd = function(a, b) {
            if (0 == b && nd(a)) a.f = "n";
            else switch (b) {
                case -1:
                    a.f = "d";
                    break;
                case 0:
                    a.f = "l";
                    break;
                case 1:
                    a.f = "f";
                    break;
                case 2:
                    a.f = "c";
                    break;
                case 3:
                case 4:
                case 5:
                case 6:
                    a.f = "r"
            }
        },
        od = function(a) {
            return "f" == a.f && a.Pa >= a.zd
        },
        nd = function(a) {
            return "n" == a.f ? !0 : "l" == a.f && a.Pa >= a.Ad
        },
        bd = function(a, b, c, d) {
            this.s = null;
            this.kb = a;
            this.lc = "e" == a ? String(c) + "~" + String(d) : "";
            this.fa = [];
            this.pa = -1;
            this.Cb = 0;
            this.ab = Ua(Wa(pd));
            this.Dd = Ua(Wa(ld));
            "e" == this.kb && (qd[this.lc] = x(this.ld, this));
            F ? (a = b.createElement("div"), a.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="' +
                rd(this, !0) + '"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>', a = a.firstChild, a.id = String(Math.random())) : a = sd(this, b);
            a.width = 1;
            a.height = 1;
            a.style.zIndex = -999999;
            this.s = a
        },
        ld = {
            re: -1,
            LOADING: 0,
            Xc: 1,
            Tc: 2,
            Zc: 3,
            VISIBLE: 4
        },
        pd = {
            LOADING: 0,
            Xc: 1,
            Tc: 2,
            je: 3,
            Ud: 4,
            ne: 5,
            oe: 6,
            ke: 7,
            Vd: 8,
            ie: 9
        },
        qd = {},
        sd = function(a, b) {
            var c = function(a, c, d) {
                    var e = b.createElement("param");
                    e.name = c;
                    e.value = d;
                    a.appendChild(e)
                },
                d = rd(a),
                e = b.createElement("object");
            e.type = "application/x-shockwave-flash";
            e.data = d;
            c(e, "movie", d);
            c(e, "allowscriptaccess", "always");
            c(e, "wmode", "opaque");
            e.style.visibility = "s" == a.kb ? "" : "hidden";
            e.style.opacity = 0;
            return e
        },
        rd = function(a, b) {
            var c = oc("//pagead2.googlesyndication.com/osd/hbe.swf", "id", a.lc);
            "s" == a.kb && (c = "//pagead2.googlesyndication.com/osd/hbts.swf");
            b && (c = oc(c, "delay", "1"));
            return c
        };
    bd.prototype.oc = function(a, b) {
        if (!this.s) return !1;
        this.s.style.position = "absolute";
        this.setPosition(b);
        var c = !0;
        try {
            a.appendChild(this.s)
        } catch (d) {
            c = !1
        }
        return c
    };
    bd.prototype.nc = function(a, b) {
        if (!this.s || !a.parentNode) return !1;
        this.s.style.position = "fixed";
        this.setPosition(b);
        var c = !0;
        try {
            a.parentNode && a.parentNode.insertBefore(this.s, a.nextSibling)
        } catch (d) {
            c = !1
        }
        return c
    };
    bd.prototype.setPosition = function(a) {
        var b;
        if (b = this.s) b = this.s, b = new B(b.offsetLeft, b.offsetTop), b = !(a == b || a && b && a.x == b.x && a.y == b.y);
        if (b) {
            b = this.s;
            var c;
            a instanceof B ? (c = a.x, a = a.y) : (c = a, a = void 0);
            b.style.left = Ib(c);
            b.style.top = Ib(a)
        }
    };
    bd.prototype.remove = function() {
        if (this.s) try {
            Eb(this.s)
        } catch (a) {}
        this.s = null
    };
    bd.prototype.ld = function(a) {
        this.pa = a ? 3 : 4
    };
    var fd = function(a, b) {
            if ("e" == a.kb) {
                var c = null;
                try {
                    c = a.s.it()
                } catch (d) {}
                null === c ? (c = 0, 0 < a.pa && (c = 2)) : c = c ? 3 : 4;
                ++a.Dd[c + 1];
                a.pa = c
            } else {
                var e = Number(b),
                    f = td(a);
                ud(a, f, e);
                c = a.fa[a.fa.length - 1];
                if (null === f) {
                    if (f = e = 0, 0 < a.pa || t(c.jb)) f = e = 2
                } else null === c.jb || c.Nb >= e ? (e = 10 <= f ? 4 : 0, f = 0) : f > c.jb ? (c = (f - c.jb) / (e - c.Nb) * 1E3, e = 10 <= c ? 4 : 3, c = 0 == c ? 1 : 1 > c ? 3 : 4 > c ? 4 : 23 > c ? 6 : 26 > c ? 8 : 9, 6 == a.Cb && 6 == c && (c = 7), f = c) : f = e = 1;
                6 == a.Cb && (--a.ab[6], 4 == f || 8 == f ? ++a.ab[5] : ++a.ab[7]);
                ++a.ab[f];
                a.pa = e;
                a.Cb = f
            }
            return a.pa
        },
        td = function(a) {
            var b = null;
            try {
                b = a.s.fc()
            } catch (c) {}
            return b
        },
        ud = function(a, b, c) {
            var d = c - 1E3,
                e = a.fa.length;
            A(a.fa, function(a, b) {
                a.Nb <= d && (e = Math.min(e, b + 1))
            });
            var f = a.fa.length - e;
            0 < f && a.fa.splice(e, f);
            a.fa.unshift({
                jb: b,
                Nb: c
            })
        };
    aa("gteh", L("osd_or_lidar::gteh_ex", function(a, b) {
        var c = qd[a];
        v(c) && c(b)
    }));
    var vd = function() {
            this.M = !0;
            this.L = new bd("s", y);
            this.Y = !1;
            this.G = this.$ = this.Za = this.Ib = this.Jb = this.Ga = this.ma = this.T = null;
            this.Eb = 0;
            this.bb = this.Ua = this.ib = null
        },
        wd = {
            Zc: 0,
            VISIBLE: 1
        },
        xd = new B(-99999, 0);
    vd.prototype.eb = function(a, b, c) {
        if (null !== this.Ua) return !1;
        var d = "DIV" == a.tagName || "INS" == a.tagName;
        this.Y = !d;
        this.T = a;
        var e = yd(this);
        if (null != c) {
            e = c;
            c = new B(0, 0);
            if (this.Y) {
                var f = this.T.getBoundingClientRect();
                c.x += f.left;
                c.y += f.top
            }
            this.Ib = new B(e.x - c.x, e.y - c.y)
        }
        this.Ga = b;
        b = !1;
        d ? (this.ma = d = Tc(), a.insertBefore(d, a.childNodes[0] || null), b = this.L.oc(d, e)) : b = this.L.nc(a, e);
        if (!b) return this.L.remove(), this.ma && Eb(this.ma), !1;
        this.Ua = ka();
        this.Jb = e;
        return !0
    };
    var zd = function(a, b) {
            b !== a.G && (a.G = b, a.Ga(b), a.Eb++)
        },
        Ad = function(a) {
            var b = td(a.L);
            null === a.ib && null !== b && null !== a.Ua && (a.ib = ka() - a.Ua);
            return b
        },
        yd = function(a) {
            var b = a.T.getBoundingClientRect(),
                c;
            c = null != a.Ib ? a.Ib.clone() : new B(Math.floor((b.right - b.left) / 2), Math.floor((b.bottom - b.top) / 2));
            a.Y && (c.x += b.left, c.y += b.top);
            return c
        },
        Bd = function(a) {
            a.Y && (a.Jb = yd(a));
            a.L.setPosition(a.Jb);
            a.Za = z.setTimeout(M("osd_or_lidar::sfm_tpto", x(a.yd, a)), 125)
        };
    vd.prototype.yd = function() {
        var a = Ad(this);
        if (null === a) Bd(this);
        else if (null === this.$) this.$ = a, Bd(this);
        else {
            var b = a - this.$;
            this.$ = a;
            0 == (4 <= b ? 1 : 0) ? (Bd(this), zd(this, 0)) : (this.L.setPosition(xd), this.Za = z.setTimeout(M("osd_or_lidar::sfm_cpto", x(this.xd, this)), 125))
        }
    };
    vd.prototype.xd = function() {
        var a = Ad(this),
            b = a - this.$;
        this.$ = a;
        a = 4 <= b ? 1 : 0;
        Bd(this);
        zd(this, 0 == a ? 1 : 0)
    };
    vd.prototype.ga = function() {
        if (this.M) {
            var a = x(function() {
                    1 === kc(y) ? (this.$ = null, Bd(this)) : (z.clearTimeout(this.Za), zd(this, 0))
                }, this),
                b = lc();
            if (b) {
                var c = N(y, b, a, "osd_or_lidar::sfm_pv");
                this.bb = function() {
                    y.removeEventListener ? y.removeEventListener(b, c, !1) : y.detachEvent && y.detachEvent("on" + b, c);
                    this.bb = null
                }
            }
            this.M = !1;
            this.G = null;
            a()
        }
    };
    vd.prototype.ea = function() {
        this.M || (z.clearTimeout(this.Za), null === this.bb || this.bb(), this.M = !0)
    };
    vd.prototype.ha = function() {
        this.ea();
        this.L && (this.L.remove(), this.L = null);
        this.ma && (Eb(this.ma), this.ma = null)
    };
    var Cd = function(a) {
            var b = -1;
            null !== a.ib && (b = a.ib);
            return b
        },
        Dd = function(a, b) {
            Xc.call(this, a, b);
            this.O = [];
            this.Lb = this.Ga = null;
            this.M = !0
        };
    la(Dd, Xc);
    Dd.prototype.eb = function(a, b) {
        if (null !== this.Lb) return !1;
        this.T = a;
        this.Ga = b;
        for (var c = a.getBoundingClientRect(), c = "DIV" == a.tagName || "INS" == a.tagName ? Yc(this, c) : Zc(this, c), d = 0; d < c.length; ++d) {
            var e = c[d],
                f = new vd;
            if (!f.eb(a, x(this.kd, this), e)) return this.ha(), this.f = "c", !1;
            this.O.push(f)
        }
        this.Lb = ka();
        this.f = "l";
        return !0
    };
    var Ed = function(a) {
        var b = Ua(Wa(wd));
        A(a.O, function(a) {
            0 <= a.G && ++b[a.G]
        });
        switch (a.l) {
            case 4:
                return 4 == b[1] ? 3 : 3 == b[1] ? 2 : 0 < b[1] ? 1 : 0;
            case 3:
                return 1 == a.O[0].G && 1 == a.O[2].G ? 3 : 1 == a.O[1].G ? 2 : 0 < b[1] ? 1 : 0;
            default:
                return 1 == b[1] ? 2 : 0
        }
    };
    Dd.prototype.kd = function() {
        var a = Ed(this);
        this.G != a && (this.G = a, this.Ga(a))
    };
    Dd.prototype.ga = function() {
        this.M && null !== this.Lb && "d" != this.f && (A(this.O, function(a) {
            a.ga()
        }), this.f = "r", this.M = !1)
    };
    Dd.prototype.ea = function() {
        this.M || (A(this.O, function(a) {
            a.ea()
        }), this.M = !0)
    };
    Dd.prototype.ha = function() {
        this.ea();
        A(this.O, function(a) {
            a.ha()
        });
        this.O = [];
        this.f = "d"
    };
    var Fd = function(a, b) {
            this.F = a || 0;
            this.D = b || ""
        },
        Gd = function(a, b) {
            a.F && (b[4] = a.F);
            a.D && (b[12] = a.D)
        };
    Fd.prototype.match = function(a) {
        return (this.F || this.D) && (a.F || a.D) ? this.D || a.D ? this.D == a.D : this.F || a.F ? this.F == a.F : !1 : !1
    };
    Fd.prototype.toString = function() {
        var a = "" + this.F;
        this.D && (a += "-" + this.D);
        return a
    };
    var Hd = function(a) {
        var b = [];
        Va(a, function(a, d) {
            var e = J(d),
                f = a;
            q(f) && (f = J(f));
            b.push(e + "=" + f)
        });
        return b.join("\n")
    };
    var Id = function() {
            this.Hc = void 0;
            this.oa = !La(z.top);
            this.ic = this.la = this.C = null
        },
        Jd = null,
        R = function() {
            Jd || (Jd = new Id);
            return Jd
        };
    var S = function(a, b, c, d, e, f) {
            this.a = Kd.clone();
            this.o = this.B = 0;
            this.ja = new I(0, 0, 0, 0);
            this.hb = this.Qb = this.ia = -1;
            this.Ma = [0, 0, 0, 0, 0];
            this.ca = [0, 0, 0, 0, 0];
            this.U = [0, 0, 0, 0, 0];
            this.jc = 0;
            this.Dc = [0, 0, 0, 0, 0];
            this.Cc = [0, 0, 0, 0, 0];
            this.Ha = [0, 0, 0, 0, 0];
            this.Bc = 0;
            this.pb = [0, 0, 0, 0, 0];
            this.wa = "";
            this.j = d;
            this.ba = -1;
            this.Vb = this.Wb = this.Yb = this.Xb = null;
            this.qa = -1;
            this.Ya = 0;
            this.H = b;
            this.I = c && c._adk_ ? c._adk_ : 0;
            this.bc = null;
            this.b = e;
            this.Gd = f || ca;
            this.Fb = function() {};
            this.Kc = function() {};
            this.A = this.element = c;
            this.Ba =
                0;
            this.Aa = -1;
            this.Ja = "";
            this.J = c ? String(c._avi_ || "") : "";
            this.hd = c ? Boolean(c._eos_) : !1;
            this.Wa = 0;
            this.Db = [];
            this.Qc = !1;
            this.Hb = "";
            this.u = null;
            this.l = 1;
            this.Ta = !1;
            this.na = this.m = null;
            this.tb = 0;
            this.X = null;
            this.Da = this.Ca = !1;
            this.Ia = this.Xa = null;
            this.Fc = !1;
            this.h = this.ud = null;
            this.N = this.ra = this.Kb = !1;
            this.V = this.Ka = this.cb = this.P = this.w = null;
            this.Sa = 0;
            this.Na = !1;
            this.W = null;
            this.Z = !1;
            this.va = null;
            this.ob = 0;
            this.Oa = !1;
            this.ka = null;
            this.Hd = 0;
            this.Rc = null;
            this.zb = this.Va = this.Ea = !1;
            this.Cd = .01 > Math.random();
            this.$a = this.da = null;
            this.Qa = c ? String(c._cvu_ || "") : "";
            this.ec = !1;
            this.rb = c ? String(c._cid_ || "") : "";
            this.sa = this.qb = this.sb = !1;
            this.Ub = [];
            this.mb = this.Nc = void 0;
            this.Oc = 0;
            this.Ob = -1;
            this.Ac = this.xa = 0;
            this.yc = void 0;
            this.Fd = !1;
            this.Ra = -1;
            this.tc = void 0;
            this.Zb = this.ac = this.$b = this.Pc = this.Fa = 0;
            this.Gb = !1;
            this.xc = -1;
            this.od = this.mc = !1;
            this.dc = {
                sd: null,
                rd: null
            };
            this.vb = !1;
            this.Ic = this.R = !0;
            this.gb = this.La = this.S = this.ta = -1;
            this.ub = 0;
            this.K = {
                Rb: 0,
                Tb: 0,
                Sb: 0
            };
            this.lb = 0;
            this.za = 3 == this.b ? Ma([1, 2, 3, 4], 0) ||
                0 : 0;
            this.Ab = 0;
            this.vc = this.wc = this.uc = !1;
            Ld(this, c && c._avm_);
            Md(this);
            b = R();
            Nd(this, a, b.oa)
        },
        Kd = new I(0, 0, 0, 0),
        Od = function(a) {
            return new Fd(a.I, a.bc)
        },
        Ld = function(a, b) {
            if (q(b) && 0 != b.length)
                for (var c = b.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = hc,
                        g = ic;
                    e == f.fd ? a.Ic = !1 : e == f.ed ? a.R = !1 : 0 == e.lastIndexOf(g.$c, 0) && (e = e.split("=")[1], "0" == e ? a.Ab = 2 : "1" == e && (a.Ab = 1))
                }
        },
        Md = function(a) {
            if (a.H && q(a.H)) {
                var b = a.H.match(/loeid=([^&;]+)/);
                if (b && 2 == b.length) {
                    var b = b[1],
                        c = ec.cd,
                        d = ec.bd;
                    b.match(ec.ad.c) ? a.uc = !0 : b.match(c.c) ?
                        a.wc = !0 : b.match(d.c) && (a.vc = !0)
                }
            }
        },
        Qd = function(a, b, c, d) {
            var e = Pd,
                f = a.$a,
                g = null,
                g = f && e ? new I(e.y, e.x + f.width, e.y + f.height, e.x) : new I(-12245933, -12245933, -12245933, -12245933);
            d || (a.a = g, f && (a.B = f.width * f.height));
            a.ua(g, b, c, d, !0)
        },
        Rd = function(a, b, c, d, e) {
            if (!(0 > a.j)) {
                var f = z.innerWidth,
                    g = z.innerHeight,
                    h = new I(Math.round(z.mozInnerScreenY), Math.round(z.mozInnerScreenX + f), Math.round(z.mozInnerScreenY + g), Math.round(z.mozInnerScreenX));
                c = new I(z.screenY + d, z.screenX + c.width, z.screenY + c.height, z.screenX);
                e ||
                    (d = new I(h.top - c.top, h.right - c.left, h.bottom - c.top, h.left - c.left), d.top > a.a.top ? a.a = d : (a.a.right = a.a.left + f, a.a.bottom = a.a.top + g), a.B = f * g);
                a.ua(h, c, b, e, !0)
            }
        },
        Td = function(a, b, c) {
            var d = Vc(z && z.document);
            if (d) {
                c || Nd(a, z, !0);
                if (U(a) || a.Fd) d = Sd(a, d);
                else var e = Math.floor((a.a.left + a.a.right) / 2),
                    f = Math.floor((a.a.top + a.a.bottom) / 2),
                    g = zb(document),
                    d = d(e - g.x, f - g.y) ? .5 : 0;
                a.ua(a.a, d, b, c, !0)
            }
        },
        V = function(a, b, c) {
            var d;
            if (c(b)) return b;
            for (;;) {
                d = Math.floor((a + b) / 2);
                if (d == a || d == b) return a;
                c(d) ? a = d : b = d
            }
        },
        Sd = function(a,
            b) {
            var c = zb(document),
                d = function(a, c) {
                    return Boolean(b(a, c))
                },
                e = Math.floor(a.a.left - c.x) + 1,
                f = Math.floor(a.a.top - c.y) + 1,
                g = Math.floor(a.a.right - c.x) - 1,
                h = Math.floor(a.a.bottom - c.y) - 1,
                c = (h - f) * (g - e);
            if (f > h || e > g) return 0;
            var l = d(e, f),
                p = d(g, h);
            if (l && p) return 1;
            var u = d(g, f),
                k = d(e, h);
            if (l) h = V(f, h, function(a) {
                return d(e, a)
            }), g = V(e, g, function(a) {
                return d(a, f)
            });
            else if (u) h = V(f, h, function(a) {
                return d(g, a)
            }), e = V(g, e, function(a) {
                return d(a, f)
            });
            else if (k) f = V(h, f, function(a) {
                return d(e, a)
            }), g = V(e, g, function(a) {
                return d(a,
                    h)
            });
            else if (p) f = V(h, f, function(a) {
                return d(g, a)
            }), e = V(g, e, function(a) {
                return d(a, h)
            });
            else {
                var r = Math.floor((e + g) / 2),
                    G = Math.floor((f + h) / 2);
                if (!d(r, G)) return 0;
                f = V(G, f, function(a) {
                    return d(r, a)
                });
                h = V(G, h, function(a) {
                    return d(r, a)
                });
                e = V(r, e, function(a) {
                    return d(a, G)
                });
                g = V(r, g, function(a) {
                    return d(a, G)
                })
            }
            return (h - f) * (g - e) / c
        };
    S.prototype.update = function(a, b, c, d, e) {
        if (0 > this.j) return null;
        c || Nd(this, d, e);
        Boolean(this.m) && (c ? (this.m && (e = this.m, 3 <= e.aa && (e.aa = 3)), d.clearInterval(this.na), this.na = null) : this.m && !this.na && "d" != this.m.f && Ud(this, d, !0));
        null != this.W && (c ? (d.clearInterval(this.V), this.V = null, this.Na = !1) : this.Z && !this.V && Vd(this, d, !0));
        null !== this.Ia && (c ? this.Da && (d.clearTimeout(this.ud), this.Xa && this.Xa.ea()) : this.Da && this.Xa && this.Xa.ga());
        null !== this.P && (c ? this.N && (Wd(this, d, !1), this.w && this.w.ea()) : this.N && this.w &&
            this.w.ga());
        null != this.ka && "-" != this.ka && (c ? (d.clearInterval(this.va), this.va = null, this.Oa = !1) : this.Ea && !this.va && (this.va = d.setInterval(M("osd_or_lidar::adblock::xdev_int", x(this.Mc, this, d, 1E3)), 1E3), this.Mc(d)));
        return this.ua(this.a, b, a, c, !1)
    };
    var be = function(a, b) {
        if (!a.Gb || 1E3 < b - a.xc) {
            var c = ba("ima.bridge.getNativeViewability");
            v(c) && (c(a.Ja, x(a.jd, a)), a.Gb = !0, a.xc = b)
        }
    };
    S.prototype.jd = function(a) {
        this.Gb = !1;
        ce(this, a)
    };
    var ce = function(a, b) {
        var c = b.opt_nativeViewBounds || {},
            d = b.opt_nativeViewVisibleBounds || {},
            e = b.opt_nativeTime || -1,
            f = b.opt_nativeVolume,
            c = new I(c.top || 0, c.left + c.width || 0, c.top + c.height || 0, c.left || 0),
            d = b.opt_nativeViewHidden ? Kd.clone() : new I(d.top || 0, d.left + d.width || 0, d.top + d.height || 0, d.left || 0),
            g = {};
        g.volume = f;
        a.B = (c.bottom - c.top) * (c.right - c.left);
        a.a = c;
        a.ua(c, d, e, !1, !0, g)
    };
    S.prototype.ua = function(a, b, c, d, e, f) {
        var g = W(this),
            h = this.Ed.apply(this, arguments),
            l = W(this);
        !g && l && this.Gd();
        return h
    };
    S.prototype.Ed = function(a, b, c, d, e, f) {
        var g = c - this.j || 1;
        if (7 == this.b) {
            var h = 1E4; - 1 != this.Ra && (h = Math.max(1E4, this.Ra / 3));
            g = g > h ? 1 : g
        }
        if (!f) {
            h = {};
            if ("as" == this.mb && v(this.element.getVideoMetadata)) try {
                h = this.element.getVideoMetadata()
            } catch (l) {}
            if ("h" == this.mb && (f = ba("ima.common.getVideoMetadata"), v(f))) try {
                h = f(this.Ja)
            } catch (p) {}
            f = h.currentTime;
            n(f) && (h.currentTime = Math.floor(1E3 * f));
            f = h.duration;
            n(f) && (h.duration = Math.floor(1E3 * f));
            n(h.volume) || (h.volume = de(this));
            f = h
        }
        this.Ra = f.duration || this.Ra;
        this.tc =
            f.isVpaid || this.tc;
        h = f.volume;
        f = n(f.currentTime) ? f.currentTime : this.Fa + g;
        f < this.Fa && (f = this.Fa);
        var u = f - this.Fa,
            k = null,
            r;
        t(b) ? r = ee(this, b) : (k = b, r = ee(this, a, k));
        t(b) || (this.Yb = a.top - k.top, this.Xb = a.left - k.left, this.Wb = k.right - k.left, this.Vb = k.bottom - k.top);
        this.Nc || fe(this, r, g, this.ba, e, d, k, h, u);
        this.ba = d ? -1 : r;
        this.j = c;
        this.Fa = f; - 1 != r && (0 > this.ia && (this.ia = c), this.hb = c); - 1 == this.Qb && W(this) && (this.Qb = c);
        this.Fb(this, k || Kd);
        return this.o
    };
    var ee = function(a, b, c) {
            if (a.od) return a.o = 0, ge(a.o);
            if (a.mc && 7 == a.b) return a.o = 1, ge(a.o);
            var d = null;
            if (t(b)) a.o = b;
            else {
                c = new I(Math.max(b.top, c.top), Math.min(b.right, c.right), Math.min(b.bottom, c.bottom), Math.max(b.left, c.left));
                if (0 >= a.B || c.top >= c.bottom || c.left >= c.right) return a.ja = new I(0, 0, 0, 0), a.o = 0, -1;
                a.ja = c.clone().translate(-b.left, -b.top);
                d = (c.bottom - c.top) * (c.right - c.left);
                a.o = d / a.B
            }
            return ge(a.o)
        },
        ge = function(a) {
            var b = -1;
            1 <= a ? b = 0 : .75 <= a ? b = 1 : .5 <= a ? b = 2 : .3 <= a ? b = 3 : 0 < a && (b = 4);
            return b
        },
        U = function(a) {
            return 7 ==
                a.b || !(!R().oa || he && a.uc || ie && a.wc || Boolean(Boolean(a.A && !Q()) && !Q()) && a.vc) || a.Ca || a.Da || a.N || a.Ea || a.Z ? !1 : 1 == a.Ab
        },
        fe = function(a, b, c, d, e, f, g, h, l) {
            e = e && -1 != d && d <= (U(a) ? 3 : 2);
            var p = -1 == d || -1 == b ? -1 : Math.max(d, b);
            d = e ? p : d;
            l = l || 0; - 1 != d && (a.Ma[d] += c, a.Dc[d] += l, d <= (U(a) ? 3 : 2) && (a.jc += c, a.Bc += l));
            e = g || null;
            p = -1 != d && d <= (U(a) ? 3 : 2);
            e ? (p && -1 != a.qa && (a.pb[a.qa] += c), e = 100 * a.B / ((e.bottom - e.top) * (e.right - e.left)), a.qa = 20 <= e ? 0 : 10 <= e ? 1 : 5 <= e ? 2 : 2.5 <= e ? 3 : 4) : a.qa = -1;
            (g = g || null) ? (g = (g.bottom - g.top) * (g.right - g.left), a.Ya =
                0 < g ? a.B * a.o / g : 0) : a.Ya = 0;
            if (7 == a.b) {
                g = -1 != d && 2 >= d;
                e = n(h) && .1 <= h && .1 <= a.yc;
                a.Pc += c;
                e && (a.$b += c, 0 == d && (a.Zb += c), g ? a.ac += c : a.xa += c);
                a.xa > a.Ac && (a.Ac = a.xa);
                if (g || !n(h) || .1 > h) a.xa = 0;
                n(h) && (Number(h) ? (g = Math.pow(10, 3), h = Math.round(h * g) / g) : h = 0);
                a.yc = h
            }
            for (h = d; 0 <= h && 4 >= h; h++) a.U[h] += c, a.Ha[h] += l, a.U[h] > a.ca[h] && (a.ca[h] = a.U[h]), a.Ha[h] >= a.Cc[h] && (a.Cc[h] = a.Ha[h]);
            for (h = 0; h < a.U.length; ++h)
                if (h < b || f || -1 == b) a.U[h] = 0, a.Ha[h] = 0
        },
        je = function(a) {
            a.u && ed(a.u)
        },
        Ud = function(a, b, c) {
            a.na = b.setInterval(M("osd_or_lidar::adblock::flv_int",
                x(a.Jc, a, b)), 1E3);
            c && a.Jc(b)
        };
    S.prototype.Jc = function(a) {
        if (this.m) {
            var b = kd(this.m);
            this.tb = 5 <= b.fb && 5 <= b.zc ? this.tb + b.gc : 0;
            if (1E3 <= this.tb) ke(this, a), this.X = "v";
            else if (2 == b.fb || nd(this.m) || od(this.m)) ke(this, a), this.X = "i"
        }
    };
    var ke = function(a, b) {
            b.clearInterval(a.na);
            a.na = null;
            a.Ca = !1;
            a.m && ed(a.m)
        },
        Vd = function(a, b, c) {
            a.V = b.setInterval(M("osd_or_lidar::adblock::iem_int", x(a.Lc, a, b, 1E3)), 1E3);
            c && a.Lc(b)
        };
    S.prototype.Lc = function(a, b) {
        var c = Vc(a && a.document);
        if (c) {
            Nd(this, a, !0);
            if (U(this)) c = Sd(this, c) >= (U(this) ? .3 : .5);
            else var d = Math.floor((this.a.left + this.a.right) / 2),
                e = Math.floor((this.a.top + this.a.bottom) / 2),
                f = zb(document),
                c = Boolean(c(d - f.x, e - f.y));
            d = b || 0;
            c ? (this.Sa += this.Na ? d : 0, this.Na = !0) : (this.Sa = 0, this.Na = !1);
            1E3 <= this.Sa && (a.clearInterval(this.V), this.V = null, this.Z = !1, this.W = "v");
            Nd(this, a, !1)
        } else a.clearInterval(this.V), this.V = null, this.Z = !1, this.W = "i"
    };
    var me = function(a, b) {
            a.l = 1;
            if (!a.element || !Q()) return !1;
            var c = new Dd(!1, a.l),
                d = c.eb(a.element, x(function(a) {
                    le(this, P(), !1, b, [0, .01, .5, 1][a])
                }, a));
            d ? (a.h = c, c.ga()) : a.Kb = !0;
            return d
        },
        le = function(a, b, c, d, e) {
            0 > a.j || null === a.h || "d" == a.h.f || (c ? a.h && a.h.ea() : (Nd(a, d, !0), a.h && a.h.ga()), d = e || 0, t(e) || -1 == a.ba || (d = [1, .75, .5, .3, .01][a.ba] || 0), a.ua(a.a, d, b, c, !1), !W(a) || 7 == a.b || a.R && a.ra || a.h && a.h.ha())
        },
        ne = function(a, b) {
            if (a.element && null === a.P && null === a.w && Q()) {
                var c = new vd;
                c.eb(a.element, x(function(a) {
                    Wd(this,
                        b, 1 == a)
                }, a)) ? (a.N = !0, a.w = c, a.P = "u", c.ga()) : (a.N = !1, a.P = "-")
            }
        },
        oe = function(a, b, c) {
            b.clearTimeout(a.cb);
            a.cb = b.setTimeout(M("osd_or_lidar::adblock::sfmv_to", x(a.Bd, a, b)), c)
        };
    S.prototype.Bd = function(a) {
        if (null !== this.Ka) {
            var b = P() - this.Ka;
            1E3 <= b ? (this.P = "v", pe(this, a)) : oe(this, a, 1E3 - b)
        }
    };
    var Wd = function(a, b, c) {
            c ? null === a.Ka && (a.Ka = P(), oe(a, b, 1E3)) : (a.Ka = null, b.clearTimeout(a.cb))
        },
        pe = function(a, b) {
            var c = a.N;
            a.N = !1;
            b.clearTimeout(a.cb);
            c && a.w && a.w.ha()
        };
    S.prototype.Mc = function(a, b) {
        if (this.Rc) {
            var c = this.Rc.contentWindow,
                d = this.a.right - this.a.left,
                e = this.a.bottom - this.a.top,
                f = this.Hd,
                g = Lc(),
                h = new I(Math.round(c.mozInnerScreenY), Math.round(c.mozInnerScreenX + d), Math.round(c.mozInnerScreenY + e), Math.round(c.mozInnerScreenX)),
                c = new I(c.screenY + f, c.screenX + g.width, c.screenY + g.height, c.screenX),
                h = new I(Math.max(h.top, c.top), Math.min(h.right, c.right), Math.min(h.bottom, c.bottom), Math.max(h.left, c.left)),
                d = d * e,
                e = 0;
            0 < d && h.top < h.bottom && h.left < h.right && (e = (h.bottom -
                h.top) * (h.right - h.left) / d);
            d = e >= (U(this) ? .3 : .5);
            e = b || 0;
            d ? (this.ob += this.Oa ? e : 0, this.Oa = !0) : (this.ob = 0, this.Oa = !1);
            1E3 <= this.ob && (a.clearInterval(this.va), this.va = null, this.Ea = !1, this.ka = "v")
        }
    };
    var qe = function(a) {
            return a ? a.top + "-" + a.left + "-" + a.bottom + "-" + a.right : "0-0-0-0"
        },
        se = function(a, b, c, d) {
            var e = W(a);
            if (0 == a.Wa) a.K.Rb++;
            else if (1 != a.Wa || e && !a.Qc) {
                a.K.Sb++;
                var f = a.getStats();
                f.unshift("adk=" + a.I);
                d && f.push("r=" + d);
                b = f.concat(b).join("&");
                d = {};
                Gd(Od(a), d);
                d[0] = c;
                d[3] = b;
                d[5] = e;
                d[15] = a.Ca || a.Z || a.Da || a.N || a.Ea;
                d[11] = a.Va || a.zb;
                d[7] = a.o;
                d[9] = qe(a.ja);
                d[13] = a.ca.join(",");
                d[14] = a.Ya;
                d[18] = 0 == a.B;
                null != a.Yb && (d[20] = a.Yb);
                null != a.Xb && (d[21] = a.Xb);
                null != a.Wb && (d[22] = a.Wb);
                null != a.Vb && (d[23] =
                    a.Vb);
                re(a, d, a.Db);
                a.Qc = e
            } else a.K.Tb++
        },
        re = function(a, b, c) {
            try {
                var d = Hd(b);
                if (d && a.element) {
                    var e = c ? c.length : 0;
                    if (0 < e)
                        for (var f = 0; f < e; ++f) {
                            var g = c[f];
                            (g == z.top || g.parent && g.parent != g) && Nc(d, g)
                        } else {
                            b = [];
                            try {
                                var h = Fb(a.element);
                                if (h) b = [h];
                                else {
                                    var l;
                                    var p;
                                    c = document;
                                    var u = a.element || c;
                                    l = u.querySelectorAll && u.querySelector ? u.querySelectorAll("IFRAME") : p = u.getElementsByTagName("IFRAME");
                                    for (f = 0; f < l.length; ++f)(h = Fb(l[f])) && b.push(h)
                                }
                                var k = b.length;
                                if (0 < k)
                                    for (var r = ja(Nc, d), f = 0; f < k; ++f) Oc(r, b[f])
                            } catch (G) {}
                        }
                }
            } catch (sa) {}
        };
    S.prototype.td = function() {
        this.Aa = P()
    };
    S.prototype.Ec = function() {
        this.Ba += P() - this.Aa;
        this.Aa = -1
    };
    var Nd = function(a, b, c) {
            a.lb++;
            b = c ? b : b.top;
            try {
                var d = Kd.clone(),
                    e = new B(0, 0);
                if (a.A) {
                    if (c || 1 != a.b || !Uc(a.A)) d = a.A.getBoundingClientRect();
                    var f = a.A,
                        g = new B(0, 0),
                        h = Ab(vb(f));
                    c = f;
                    do {
                        var l;
                        if (h == b) {
                            var f = c,
                                p = vb(f),
                                u = new B(0, 0),
                                k = void 0,
                                k = p ? vb(p) : document,
                                r;
                            (r = !F || 9 <= sb) || (r = "CSS1Compat" == wb(k).ya.compatMode);
                            if (f != (r ? k.documentElement : k.body)) {
                                var G = Hb(f),
                                    sa, Sb = wb(p);
                                sa = zb(Sb.ya);
                                u.x = G.left + sa.x;
                                u.y = G.top + sa.y
                            }
                            l = u
                        } else {
                            var ta = Hb(c);
                            l = new B(ta.left, ta.top)
                        }
                        f = l;
                        g.x += f.x;
                        g.y += f.y
                    } while (h && h != b && h != h.parent &&
                        (c = h.frameElement) && (h = h.parent));
                    e = g
                }
                var fb = e.x,
                    gb = e.y,
                    Yb = d.right - d.left,
                    hb = d.bottom - d.top;
                a.a = new I(Math.round(gb), Math.round(fb + Yb), Math.round(gb + hb), Math.round(fb))
            } catch (T) {
                a.a = Kd.clone()
            }
            a.B = (a.a.bottom - a.a.top) * (a.a.right - a.a.left);
            2 != a.b && 3 != a.b && 6 != a.b || 0 != a.B ? (a.zb = !1, a.da = null) : 3 == a.b && (2 == a.za && 2 >= a.lb || 3 == a.za && 4 >= a.lb || 4 == a.za && 8 >= a.lb) || (a.zb = !0, a.A && a.A.parentElement && a.Cd && (d = a.A.parentElement.getBoundingClientRect(), a.da = new I(d.top, d.right, d.bottom, d.left)))
        },
        W = function(a) {
            var b =
                U(a) ? 3 : 2;
            return 1E3 <= Math.max(a.U[b], a.ca[b])
        };
    S.prototype.getStats = function() {
        var a = this.a,
            a = ["p=" + a.top + "," + a.left + "," + a.bottom + "," + a.right];
        a.push("tos=" + this.Ma.join(","));
        a.push("mtos=" + this.ca.join(","));
        a.push("rs=" + this.b);
        var b = 5 == this.b || 6 == this.b;
        b || a.push("ht=" + this.Ba);
        0 <= this.ia && (a.push("tfs=" + this.ia), a.push("tls=" + this.hb));
        this.J && a.push("avi=" + this.J);
        this.rb && a.push("cid=" + this.rb);
        this.W && a.push("iemv=" + this.W);
        this.Ia && (a.push("mppv=" + this.Ia), a.push("mppz=" + (this.Fc ? "1" : "0")));
        this.P && a.push("sfmv=" + this.P);
        this.w && (a.push("sfmmc=" +
            this.w.Eb), a.push("sfmtf=" + Cd(this.w)));
        this.h ? (a.push("sfm=" + this.h.f), a.push("px=" + String(this.l)), this.ra && a.push("sfe=1")) : this.Kb && (a.push("sfm=-"), a.push("px=" + String(this.l)), this.ra && a.push("sfe=1"));
        this.ka && a.push("xdev=" + this.ka);
        this.u ? (a.push("swf=" + this.u.f), a.push("px=" + String(this.l))) : this.Ta && (a.push("swf=-"), a.push("px=" + String(this.l)));
        this.X && a.push("swfv=" + (this.m ? this.m.f : "") + this.X);
        this.Hb && a.push("fp=" + J(this.Hb));
        7 == this.b && a.push("qid=" + this.Ja);
        this.wa && a.push("afp=" +
            J(this.wa));
        b && (this.Ub && 0 != this.Ub.length && a.push("qt=" + this.Ub.join(",")), this.H && a.push("req=" + J(this.H).substring(0, 100)));
        this.hd && a.push("eop=1");
        this.vb && a.push("ci=1");
        this.ub && a.push("gte=" + this.ub); - 1 < this.ta && (a.push("tmo=" + this.ta), a.push("tme=" + this.S)); - 1 < this.La && a.push("tdl=" + this.La); - 1 < this.gb && a.push("tcl=" + this.gb);
        0 != this.za && a.push("zae=" + this.za);
        (b = this.K.Rb || this.K.Tb || this.K.Sb ? [this.K.Rb, this.K.Tb, this.K.Sb].join("-") : void 0) && a.push("abd=" + b);
        this.da && a.push("pb=" + this.da.top +
            "," + this.da.left + "," + this.da.bottom + "," + this.da.right);
        U(this) && a.push("la=1");
        return a
    };
    var de = function(a) {
            if ("as" == a.mb && v(a.element.sdkVolume)) try {
                return Number(a.element.sdkVolume())
            } catch (b) {
                return -1
            }
            if ("h" == a.mb) {
                var c = ba("ima.common.sdkVolume");
                if (v(c)) try {
                    return Number(c(a.Ja))
                } catch (d) {
                    return -1
                }
            }
        },
        te = function(a) {
            a.dc.sd = N(a.element, "mouseover", x(a.td, a), "osd_or_lidar::adblock::mouseover");
            a.dc.rd = N(a.element, "mouseout", x(a.Ec, a), "osd_or_lidar::adblock::mouseout")
        };
    var ue = function() {
        this.hc = this.hc;
        this.vd = this.vd
    };
    ue.prototype.hc = !1;
    F && H("9");
    !lb || H("528");
    kb && H("1.9b") || F && H("8") || ib && H("9.5") || lb && H("528");
    kb && !H("8") || F && H("9");
    var ve = function(a, b, c) {
        ue.call(this);
        this.qd = a;
        this.nd = b;
        this.md = c;
        this.gd = x(this.wd, this)
    };
    la(ve, ue);
    ve.prototype.Mb = !1;
    ve.prototype.Gc = 0;
    ve.prototype.Pb = null;
    ve.prototype.kc = function() {
        this.Pb || this.Gc ? this.Mb = !0 : we(this)
    };
    ve.prototype.wd = function() {
        this.Pb = null;
        this.Mb && !this.Gc && (this.Mb = !1, we(this))
    };
    var we = function(a) {
        var b;
        b = a.gd;
        var c = a.nd;
        if (!v(b))
            if (b && "function" == typeof b.handleEvent) b = x(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        b = 2147483647 < c ? -1 : m.setTimeout(b, c || 0);
        a.Pb = b;
        a.qd.call(a.md)
    };
    var xe = function() {
        return E("iPad") || E("Android") && !E("Mobile") || E("Silk")
    };
    var ye = !1,
        ze = null,
        Ae = null,
        Pd = null,
        Be = null,
        Ce = 0,
        De = !1,
        Ee = 0,
        Fe = null,
        Ke = function(a, b, c, d) {
            if (z.top.postMessage)
                if (1 != a.length) b();
                else if (Be = a[0].$a) {
                var e;
                try {
                    e = z.top.frames.google_top_static_frame ? !0 : !1
                } catch (f) {
                    e = !1
                }
                if (e) {
                    if (d) Ce = 2;
                    else if (Ge(), 2 != Ce) {
                        b();
                        return
                    }
                    ye = !0;
                    Fe = c;
                    N(z, "message", He, "osd::periscope::message");
                    Ie()
                } else Je() ? b() : z.setTimeout(M("osd::periscope::mpmtgt_to", function() {
                    Ke(a, b, c, d)
                }), 50)
            } else b();
            else b()
        },
        Ie = function() {
            var a = {};
            Ee = Math.floor(1E6 * Math.random());
            a[0] = "google_loc_request";
            a[1] = Ee;
            var b = [],
                c;
            for (c in a) b.push(c + "=" + a[c]);
            z.top.postMessage(b.join("\n"), "*")
        },
        He = function(a) {
            var b;
            try {
                b = {};
                var c = a.data.split("\n");
                for (a = 0; a < c.length; a++) {
                    var d = c[a].indexOf("="); - 1 != d && (b[c[a].substr(0, d)] = c[a].substr(d + 1))
                }
            } catch (e) {}
            if (b && 1 in b && b[1] == Ee) {
                c = parseInt(b[10], 10);
                d = parseInt(b[11], 10);
                c = 0 < c && 0 < d ? new D(c, d) : new D(-12245933, -12245933); - 12245933 != c.width && -12245933 != c.height && (Ae = c);
                c = parseInt(b[12], 10);
                d = parseInt(b[13], 10);
                c = 0 <= c && 0 <= d ? new B(c, d) : new B(-12245933, -12245933); - 12245933 != c.x && -12245933 != c.y && (ze = c);
                c = Be;
                if (null != c && 0 < c.width && 0 < c.height) {
                    d = parseInt(b[6], 10);
                    a = parseInt(b[7], 10);
                    var f = parseInt(b[8], 10);
                    b = parseInt(b[9], 10);
                    b = 0 < d && 0 < a && 0 < f && 0 < b && 10 >= Math.abs(f - c.width) + Math.abs(b - c.height) ? new B(d, a) : new B(-12245933, -12245933); - 12245933 != b.x && -12245933 != b.y && (Pd = b)
                }
                De = !0;
                Fe && (b = Fe, Fe = null, b());
                z.setTimeout(M("osd::periscope::pmtgt_to", Ie), Rc())
            }
        },
        Je = function() {
            var a = 0 <= O ? P() - O : -1;
            return -1 != a && 500 < a
        },
        Ge = function() {
            var a = Ma([2], pa);
            Ce = a ? a : 1
        },
        Le = function() {
            var a =
                null != Ae && null != ze && null != Pd && null != Be;
            return De && a
        };
    var Me = null,
        Ne = null,
        Oe = null,
        Pe = null,
        Qe = null,
        Re = !1,
        We = function(a, b) {
            if (!Re) {
                Re = !0;
                var c = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
                if (!Me) {
                    var d;
                    if (c) {
                        var e = L("osd_or_lidar::throttled_scroll_raf_callback", Se);
                        d = function() {
                            c(function() {
                                a.setTimeout(e, 0)
                            })
                        }
                    } else d = Se;
                    Ne = new ve(L("osd_or_lidar::throttled_scroll_timeout", d), 100);
                    d = x(Ne.kc, Ne);
                    Me = N(a, "scroll", d, "osd_or_lidar::throttled_scroll")
                }
                if (!Oe) {
                    if (c) {
                        var f =
                            L("osd_or_lidar::throttled_resize_raf_callback", Te);
                        d = function() {
                            c(function() {
                                a.setTimeout(f, 0)
                            })
                        }
                    } else d = Te;
                    Pe = new ve(L("osd_or_lidar::throttled_resize_timeout", d), 100);
                    d = x(Pe.kc, Pe);
                    Oe = N(a, "resize", d, "osd_or_lidar::throttled_resize")
                }
                if (b)
                    for (var g = 0; g < X.length; ++g) d = X[g], d.element && te(d);
                Ue();
                Ve()
            }
        },
        Te = function() {
            Xe(!1);
            Se()
        },
        Se = function() {
            Ye(X, !1)
        },
        cf = function() {
            var a, b = R();
            Jc && (b.C = Ic(!0, z, Jc));
            var b = b.C,
                c = Ze,
                d = he;
            if (ie) return a = c, Xe(!1), b = R(), c = b.la, d = c.height - a, 0 >= d && (d = c.height, a = 0), b.C = new D(c.width,
                d), d = new $e, d.qc = !0, d.C = b.C, d.la = c, d.cc = a, d;
            if (d) return a = new $e, a.pc = !0, a;
            if (ye) return a = new $e, a.yb = !1, b = Ae, a.C = b, null != b && -12245933 != b.height && -12245933 != b.width && (R().C = b, c = ze, null != c && -12245933 != c.x && -12245933 != c.y && (b = Kc(!1, b, c), a.nb = b, a.yb = !0)), a;
            if (af) return a = new $e, a.rc = !0, a;
            if (bf) return a = new $e, a.sc = !0, a;
            a: {
                c = new $e;
                c.C = b;
                c.wb = !1;
                if (null != b && -1 != b.width && -1 != b.height && -12245933 != b.width && -12245933 != b.height) {
                    try {
                        a = Kc(!0, b)
                    } catch (e) {
                        a = c;
                        break a
                    }
                    c.nb = a;
                    c.wb = !0
                }
                a = c
            }
            return a
        },
        Ye = function(a,
            b) {
            if (!df)
                if (window.clearTimeout(ef), ef = null, 0 == a.length) b || ff();
                else {
                    gf = null;
                    var c = cf();
                    try {
                        var d = P();
                        if (c.pd)
                            for (var e = 0; e < a.length; e++) n(void 0) ? ce(a[e], void 0) : be(a[e], d);
                        else if (c.qc)
                            for (e = 0; e < a.length; e++) Rd(a[e], d, c.la, c.cc, b);
                        else if (c.pc)
                            for (e = 0; e < a.length; e++) Td(a[e], d, b);
                        else if (c.yb) {
                            var f = Le();
                            De = !1;
                            for (e = 0; e < a.length; e++) Qd(a[e], c.nb, d, b || !f)
                        } else if (c.rc) A(a, function(a) {
                            if (b) {
                                if (a.u) {
                                    var c = a.u;
                                    3 <= c.aa && (c.aa = 3);
                                    a.ba = -1
                                }
                            } else if (a.u && "d" != a.u.f) {
                                var c = kd(a.u),
                                    d = [-1, -1, -1, -1, -1, 4, 2, 0],
                                    e = d[c.fb + 1];
                                fe(a, e, c.gc, d[c.zc + 1], !0, !1);
                                a.ba = e;
                                a.Fb(a, Kd);
                                !W(a) || 7 == a.b || a.R || je(a);
                                if (2 == c.fb || nd(a.u) || od(a.u)) a.Kc(a), a.R = !1, je(a)
                            }
                        });
                        else if (c.sc)
                            for (e = 0; e < a.length; e++) le(a[e], d, b, z);
                        else if (c.wb)
                            for (var g = R(), e = 0; e < a.length; e++) a[e].update(d, c.nb, b, z, g.oa);
                        hf += P() - d;
                        ++jf;
                        kf()
                    } finally {
                        b ? A(a, function(a) {
                            a.o = 0;
                            a.ja = new I(0, 0, 0, 0)
                        }) : ff()
                    }
                }
        },
        Ue = function() {
            var a = Ve,
                b = lc();
            b && (Qe = Qe || N(y, b, a, "osd_or_lidar::visibility"))
        },
        Ve = function() {
            var a = lf();
            if (a) {
                if (!Pc) {
                    var b = P();
                    Qc = b;
                    A(X, function(a) {
                        var d =
                            a.Oc;
                        Pc || a.Nc || -1 == a.Ob || (d += b - a.Ob);
                        a.Oc = d
                    })
                }
                Pc = !0;
                Xe(!0)
            } else b = P(), mf = nf(b), Pc = !1, A(X, function(a) {
                0 <= a.j && (a.Ob = b)
            });
            Ye(X, !a)
        },
        lf = function() {
            if (of()) return !0;
            var a = kc(z.document);
            return 1 == a || 0 == a
        },
        ff = function() {
            z && (ef = z.setTimeout(M("osd_or_lidar::psamp_to", function() {
                Ye(X, !1)
            }), Rc(R().Hc)))
        },
        X = [],
        df = !1,
        ef = null,
        pf = "",
        gf = null,
        Ze = 0,
        ie = !1,
        he = !1,
        af = !1,
        bf = !1,
        Jc = xe() || !xe() && (E("iPod") || E("iPhone") || E("Android") || E("IEMobile")),
        mf = 0,
        qf = 0,
        rf = 0,
        hf = 0,
        jf = 0,
        sf = -1,
        Xe = function(a) {
            var b = R();
            b.C = Ic(!0, z, Jc);
            if (!a) {
                b.la = Lc();
                var c;
                a = z;
                a.top != a && (a = a.top);
                var d = 0,
                    e = 0,
                    f = R().C;
                try {
                    var g = a.document,
                        h = g.body,
                        l = g.documentElement;
                    if ("CSS1Compat" == g.compatMode && l.scrollHeight) d = l.scrollHeight != f.height ? l.scrollHeight : l.offsetHeight, e = l.scrollWidth != f.width ? l.scrollWidth : l.offsetWidth;
                    else {
                        var p = l.scrollHeight,
                            u = l.scrollWidth,
                            k = l.offsetHeight,
                            r = l.offsetWidth;
                        l.clientHeight != k && (p = h.scrollHeight, u = h.scrollWidth, k = h.offsetHeight, r = h.offsetWidth);
                        p > f.height ? p > k ? (d = p, e = u) : (d = k, e = r) : p < k ? (d = p, e = u) : (d = k, e = r)
                    }
                    c = new D(e,
                        d)
                } catch (G) {
                    c = new D(-12245933, -12245933)
                }
                b.ic = c
            }
        },
        tf = function(a, b) {
            if (gf && !b) return Ta(gf);
            var c = a.document,
                d = 0 <= O ? P() - O : -1,
                e = P(); - 1 == sf && (d = e);
            var f = [],
                g = X;
            try {
                if (0 < g.length) {
                    var h = R(),
                        l = h.C;
                    l && f.push("bs=" + l.width + "," + l.height);
                    var p = h.la;
                    p && f.push("bos=" + p.width + "," + p.height);
                    var u = h.ic;
                    u && f.push("ps=" + u.width + "," + u.height);
                    a.screen && f.push("ss=" + a.screen.width + "," + a.screen.height)
                } else f.push("url=" + J(a.location.href.substring(0, 1024))), c.referrer && f.push("referrer=" + J(c.referrer.substring(0,
                    512)));
                f.push("tt=" + d);
                f.push("pt=" + O);
                ie && f.push("xde=1");
                he && f.push("iem=1");
                Ce && f.push("pei=" + Ce);
                f.push("deb=" + J([1, qf, rf, hf, jf, sf].join("-")));
                f.push("tvt=" + nf(e));
                if (a.top != a) {
                    0 < g.length && f.push("iframe_loc=" + J(a.location.href.substring(0, 512)));
                    var k = Ic(!1, a, Jc);
                    f.push("is=" + k.width + "," + k.height)
                }
            } catch (r) {
                f.push("error")
            }
            gf = f;
            return Ta(gf)
        },
        uf = function(a) {
            var b;
            var c = a.indexOf("Firefox/");
            b = -1;
            if (0 <= c) {
                b = Math.floor(a.substr(c + 8)) || -1;
                var d = a.indexOf("Mac OS X 10."),
                    c = -1;
                0 <= d && (c = Number(a.substr(d +
                    12, 1)) || -1);
                var e = 0 < c ? -1 : a.indexOf("Windows NT "),
                    d = -1;
                0 <= e && (d = {
                    "6.0": 0,
                    "6.1": 1,
                    "6.2": 2
                }[a.substr(e + 11, 3)] || -1);
                a = 148;
                5 <= c ? a = 4 <= b ? 108 : 3 <= b ? 127 : 108 : 0 <= d && (16 == b || 17 == b || 18 == b) && (a = [
                    [146, 146, 146],
                    [148, 147, 148],
                    [131, 130, 136]
                ][d][b - 16]);
                b = a
            } else b = null;
            null !== b && (Ze = b, ie = !0)
        },
        vf = function(a) {
            var b = Cb("iframe", {
                id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
                name: "google_osd_static_frame"
            });
            b.style.display = "none";
            b.style.width = "0px";
            b.style.height = "0px";
            a.document.body.appendChild(b)
        },
        wf =
        function(a, b) {
            var c = b.match(a);
            return c ? c.join("") : ""
        },
        xf = function(a, b) {
            var c = !1;
            A(X, function(b) {
                var e;
                a: {
                    if (b.H) {
                        var f = b.H.match(/loeid=([^&;]+)/);
                        if (f && 2 == f.length) {
                            f = f[1];
                            e = ec.dd;
                            if (f.match(e.g) || f.match(e.Sc)) {
                                e = 1;
                                break a
                            }
                            if (f.match(e.c)) {
                                e = 2;
                                break a
                            }
                        }
                    }
                    e = 0
                }
                if ((f = 2 == e) || 0 == e && .05 > Math.random()) e = me(b, a), c = c || e, f || 1 != b.b || (b.ra = !0)
            });
            (bf = c) && A(X, function(a) {
                null !== a.h && "d" != a.h.f || b(a)
            });
            return c
        },
        yf = function(a) {
            var b = !1;
            A(X, function(c, d) {
                var e;
                var f = n(void 0) && void 0 > Math.random() ? 3 : 1;
                e = String(d);
                var g = U(c);
                c.l = f;
                g && (c.l = 4);
                Boolean(Boolean(c.A && !Q()) && !Q()) ? (f = new $c(g, void 0, void 0, c.l), (e = cd(f, c.A, e)) ? (c.Kc = a, c.u = f) : c.Ta = !0) : (c.Ta = !0, e = !1);
                b = b || e
            });
            (af = b) && A(X, function(b) {
                Boolean(b.u) || a(b)
            });
            return b
        },
        kf = function() {
            if ("osd" == pf)
                for (var a = X, b = 0; b < a.length; b++) {
                    var c = tf(z);
                    se(a[b], c, "goog_update_data", "u")
                }
        },
        nf = function(a) {
            var b = mf;
            Pc && (b += a - Qc);
            return b
        },
        of = function() {
            return Sa(X, function(a) {
                return a.mc
            })
        },
        $e = function() {
            this.la = this.C = null;
            this.cc = 0;
            this.nb = null;
            this.wb = this.sc = this.rc =
                this.yb = this.pc = this.qc = this.pd = !1
        };
    var Y, zf = null,
        Af = "",
        Bf = !1,
        Z = null,
        Ef = function() {
            if (!(0 < O)) {
                try {
                    if (!Cf()) return;
                    Xe(!1);
                    Df(!1)
                } catch (a) {}
                zf = window.setTimeout(M("osd::nppls_to", Ef), 250)
            }
        },
        Df = function(a) {
            Ff || (N(z, "message", Gf, "osd::message"), Bf && N(K(), "message", Gf, "osd::message"), Ff = !0);
            Y.getNewBlocks(function(b, c, d, e, f, k, r, G, sa, Sb, ta, fb, gb, Yb) {
                if (window && Date) {
                    ta = -1;
                    var hb = !1;
                    if (null == Z) {
                        var T = Ma([1, 2, 3, 4, 5, 6], .04);
                        Z = T ? T : 0
                    }
                    var T = Z,
                        ga = 3 == d,
                        Xd = ga && 2 == T,
                        Yd = ga && 3 == T,
                        Zd = ga && 4 == T,
                        $d = ga && 5 == T,
                        ga = ga && 6 == T,
                        ae = e && !a,
                        Lf = a && !Zd && !Yd && !$d && !ga;
                    ae || Lf || Xd ? ta = P() : ae || (hb = !0);
                    var w = new S(window, c, b, ta, d, Yb);
                    w.Fb = Hf;
                    w.wa = wf(gc, c);
                    w.I = If(c);
                    w.bc = dc(c);
                    Jf(w);
                    f && (w.J = f, Kf = !0);
                    w.Qa = r;
                    w.qb = G;
                    w.sa = sa;
                    Sb && (w.vb = !0);
                    w.rb = fb;
                    Ld(w, gb);
                    k && k.width && k.height ? (k = new D(k.width, k.height), 0 < k.width && 0 < k.height && (w.$a = k)) : w.$a = k || null;
                    3 == w.b && (w.ta = P(), T && (w.ub = T));
                    X.push(w);
                    ++rf;
                    hb && b.contentWindow ? Mc(b, function() {
                        var a = P();
                        w.j = a;
                        3 == w.b && -1 == w.S && (w.S = a);
                        Mf(w);
                        Ve()
                    }) : (Mf(w), w.S = w.ta);
                    !a && (Xd || e && (Zd || Yd || $d || ga)) && Ve()
                }
            }, a);
            if (a)
                for (var b = P(), c = X.length, d =
                        0; d < c; ++d) {
                    var e = X[d],
                        f = jc,
                        f = 3 == e.b && (Z == f.Wc || Z == f.Yc || Z == f.Vc || Z == f.Uc);
                    0 >= e.j && !f && (e.j = b);
                    3 == e.b && (-1 == e.ta && (e.ta = b), f || -1 != e.S || (e.S = b))
                }
        },
        Qf = function() {
            try {
                var a = K();
                O = P();
                window.clearTimeout(zf);
                zf = null;
                Xe(!1);
                Cf() ? (qf = Y.numBlocks(), Df(!0), 0 == rf ? Nf("n") : R().oa ? Of(a) : (kb && t(a.screenX) && t(a.mozInnerScreenX) && t(a.outerWidth) || A(X, function(b, d) {
                    var e = Math.random();
                    if (0 > (e -= qa)) {
                        var e = String(d),
                            f = new $c(U(b));
                        Boolean(b.A && !Q()) && cd(f, b.A, e) ? (b.X = "u", b.m = f, b.Ca = !0, Ud(b, a)) : b.X = "-"
                    } else 0 > (e -= ra) ?
                        Q() && ne(b, a) : 0 > e - ua && Wc(a) && (b.Z = !0, Vd(b, a), b.W = "u")
                }), Pf())) : Nf("c")
            } catch (b) {
                throw X = [], Nf("x"), b;
            }
        },
        Of = function(a, b) {
            var c = b || 0;
            if (1 > c && kb && t(a.screenX) && t(a.mozInnerScreenX) && t(a.outerWidth)) uf(a.navigator.userAgent), Pf();
            else if (2 > c && Wc(a)) he = !0, Pf();
            else if (3 > c) Ke(X, ja(Of, a, 3), function() {
                Pf();
                Ve()
            }, Y.shouldForcePeriscope());
            else {
                var d = function(b) {
                    b.Va = !0;
                    se(b, tf(a), "goog_update_data", "i");
                    b.sa && Rf(b, "i", !0)
                };
                if (4 > c)
                    if (Q()) {
                        if (xf(a, d)) {
                            Pf();
                            return
                        }
                    } else if (yf(d)) {
                    Pf();
                    return
                }
                for (c = 0; c < X.length; c++) d(X[c]);
                Pf()
            }
        },
        Pf = function() {
            if (-1 == sf) {
                var a = K(),
                    b = 2 == Y.getOseId();
                We(a, b);
                window.setTimeout(M("osd::hd_to", function() {
                    Nf("t")
                }), 36E5);
                Math.random() < na && (Math.random() < oa ? (vf(K()), Bf = !0) : vf(z));
                sf = P() - O
            }
        },
        Nf = function(a) {
            window.clearTimeout(ef);
            ef = null;
            Y || (Y = Goog_AdSense_getAdAdapterInstance());
            if (!df) {
                var b = Y.getOseId();
                if (2 == b || Kf) {
                    -1 == sf && (X = []);
                    var c = K(),
                        d = ["//pagead2.googlesyndication.com/pagead/gen_204?id=osd"],
                        e = X;
                    if (0 < e.length) {
                        Ye(e, !0);
                        for (var f = 0; f < e.length; f++)
                            if (0 < e[f].I) {
                                0 < e[f].Aa && e[f].Ec();
                                var g = e[f],
                                    h = g.a,
                                    h = ["p:", h.top, h.left, h.bottom, h.right];
                                h.push("tos:", g.Ma.join(","));
                                h.push("mtos:", g.ca.join(","));
                                h.push("rs:", g.b);
                                5 !== g.b && 6 !== g.b && (h.push("zoom:", g.pb.join(",")), h.push("ht:", g.Ba));
                                0 <= g.ia && h.push("tfs:", g.ia, "tls:", g.hb);
                                h.push("vt:", g.Qb);
                                g.wa && h.push("fp:", g.wa);
                                7 == g.b && h.push("qid:", g.Ja);
                                g.J && h.push("avi:", g.J);
                                g.W && h.push("iemv:", g.W);
                                g.Ia && (h.push("mppv:", g.Ia), h.push("mppz:", g.Fc ? "1" : "0"));
                                g.P && h.push("sfmv:", g.P);
                                g.w && (h.push("sfmmc:", g.w.Eb), h.push("sfmtf:", Cd(g.w)));
                                g.h ? (h.push("sfm:", g.h.f), h.push("px:", String(g.l)), g.ra && h.push("sfe:,1")) : g.Kb && (h.push("sfm:", "-"), h.push("px:", String(g.l)), g.ra && h.push("sfe:,1"));
                                g.ka && h.push("xdev:", g.ka);
                                g.u ? (h.push("swf:", g.u.f), h.push("px:", String(g.l))) : g.Ta && (h.push("swf:", "-"), h.push("px:", String(g.l)));
                                g.X && h.push("swfv:", (g.m ? g.m.f : "") + g.X);
                                g.vb && h.push("ci:", "1");
                                U(g) && h.push("la:", "1");
                                d.splice(1, 0, "adk" + e[f].I + "=" + J(h.join(",")))
                            }
                    }
                    d.push("r=" + a);
                    f = tf(c, !1);
                    d.push(f.join("&"));
                    0 == e.length && (d.push("correlator=" +
                        Y.getCorrelator()), d.push("oid=" + b));
                    2 == b && (b = d.join("&"), Af && (b += "&fp=" + J(Af)), Kb(c, b));
                    c = X;
                    for (b = 0; b < c.length; b++) d = c[b], Rf(d, a), d.J && d.I && d.sa && Rf(d, a, !0)
                }
                df = !0
            }
        },
        Kf = !1,
        Ff = !1,
        Cf = function() {
            var a = K().document;
            if (!a.body || !a.body.getBoundingClientRect || "function" != typeof Goog_AdSense_getAdAdapterInstance) return !1;
            Y = Goog_AdSense_getAdAdapterInstance();
            return !0
        },
        Hf = function(a) {
            if (a) {
                var b = W(a),
                    c;
                if (c = b) c = null != a.Qa && null != a.Qa.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.ec;
                if (c) {
                    c = a.Qa;
                    var d;
                    y.body ?
                        (Lb || (d = y.createElement("iframe"), d.style.display = "none", d.id = "anonIframe", Lb = d, y.body.appendChild(d)), d = !0) : d = !1;
                    d && Kb(Lb.contentWindow, c);
                    a.ec = !0
                }
                b && a.sa && !(a.Ca || a.Z || a.Da || a.N || a.Ea) && Rf(a, "v", !0)
            }
        },
        If = function(a) {
            return (a = a.match(/[&\?](?:adk)=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
        },
        Gf = function(a) {
            if (a.data) {
                var b;
                b = a.data;
                if (q(b)) {
                    var c = {};
                    b = b.split("\n");
                    for (var d = 0; d < b.length; d++) {
                        var e = b[d].indexOf("=");
                        if (!(0 >= e)) {
                            var f = Number(b[d].substr(0, e)),
                                e = b[d].substr(e + 1);
                            switch (f) {
                                case 5:
                                case 8:
                                case 11:
                                case 15:
                                case 16:
                                case 18:
                                    e =
                                        "true" == e;
                                    break;
                                case 4:
                                case 7:
                                case 6:
                                case 14:
                                case 20:
                                case 21:
                                case 22:
                                case 23:
                                    e = Number(e);
                                    break;
                                case 3:
                                case 19:
                                    if (v(decodeURIComponent)) try {
                                        e = decodeURIComponent(e)
                                    } catch (g) {
                                        throw Error("Error: URI malformed: " + e);
                                    }
                                    break;
                                case 17:
                                    e = Ra(decodeURIComponent(e).split(","), Number)
                            }
                            c[f] = e
                        }
                    }
                    b = c[0] ? c : null
                } else b = null;
                if (b && (d = b[0], "goog_provide_mode" == d || "goog_request_monitoring" == d || "goog_dom_content_loaded" == d || "goog_creative_loaded" == d)) {
                    a: {
                        c = new Fd(b[4], b[12]);
                        f = X;
                        for (e = 0; e < f.length; ++e)
                            if (c.match(Od(f[e]))) {
                                c =
                                    f[e];
                                break a
                            }
                        c = null
                    }
                    if (c)
                        if ("goog_dom_content_loaded" == d) - 1 == c.La && (a = P(), c.La = a, b = 3 == Z || 6 == Z, 3 == c.b && b && -1 == c.j && (c.j = a, c.S = a, Ve()));
                        else if ("goog_creative_loaded" == d) - 1 == c.gb && (a = P(), c.gb = a, b = (5 == Z || 6 == Z) && -1 == c.j, d = 6 == Z && -1 != c.j && -1 != c.La, 3 == c.b && (b || d) && (d && (b = c, b.Ma = [0, 0, 0, 0, 0], b.ca = [0, 0, 0, 0, 0], b.U = [0, 0, 0, 0, 0], b.pb = [0, 0, 0, 0, 0], b.j = -1, b.ia = -1, b.hb = -1, b.Ba = 0, b.Aa = -1, b.ba = -1, b.qa = -1, b.o = 0, b.Ya = 0, b.ja = new I(0, 0, 0, 0)), c.j = a, c.S = a, Ve()));
                    else {
                        f = b[6];
                        e = c.Wa;
                        c.Wa = 2 == f || 2 == e ? 2 : 3 == f || 3 == e ? 3 : 1 == f || 1 == e ?
                            1 : 0;
                        c.Db.push(a.source);
                        c.R = b[16] ? !0 : !1;
                        if (b[17])
                            for (a = b[17], e = 0; e < a.length; ++e) switch (a[e]) {
                                case 947190538:
                                case 947190541:
                                case 947190542:
                                    R().Hc = a[e]
                            }
                        b[19] && Ld(c, b[19]);
                        "goog_request_monitoring" == d && (a = c, b = {}, Gd(Od(a), b), b[0] = "goog_acknowledge_monitoring", b[7] = a.o, b[9] = qe(a.ja), b[8] = R().oa, re(a, b, a.Db));
                        f && 0 != f && (Kf = !0); - 1 == c.j && (a = P(), c.j = a, Ve(), 3 == c.b && (c.S = a))
                    }
                }
            }
        },
        Mf = function(a) {
            var b;
            if (b = a) b = Od(a), b = !!b.F || !!b.D;
            b && (b = {}, Gd(Od(a), b), b[0] = "goog_get_mode", b[7] = a.o, b[9] = qe(a.ja), b[8] = R().oa, re(a,
                b))
        },
        Jf = function(a) {
            if (!Af) {
                if (!a.H) return;
                var b = wf(fc, a.H);
                !b || "&" != b.charAt(0) && "?" != b.charAt(0) || (b = b.slice(1));
                Af = b
            }
            a.Hb = Af
        },
        Sf = function() {
            N(K(), "unload", function() {
                Nf("u")
            }, "osd::unload")
        },
        Rf = function(a, b, c) {
            var d = c && (!a.J || a.sa),
                e = !c && (a.sb || !a.qb) && W(a),
                f = e && a.R,
                g = !a.sb && (!a.J || a.qb);
            if (a && a.I && (d || g || f)) {
                d = a.getStats();
                f = K();
                g = tf(f, !1);
                if (a.J) {
                    var h;
                    h = c ? "osdim" : e ? "osdtos" : "osd2";
                    var l = a.Va || 0 >= a.B ? 2 : W(a) ? 4 : 3;
                    if ("osdim" != h || 3 != l || a.Ic) {
                        var p = "//pagead2.googlesyndication.com/activeview?id=" +
                            h;
                        "osd2" == h && a.R && 4 == l && (p += "&ts=1");
                        Kb(f, [p, "adk=" + a.I + "&" + d.join("&") + "&js=1", "r=" + b, g.join("&")].join("&"))
                    }
                    c && (a.sa = !1)
                } else se(a, g, "goog_image_request", b);
                c || e || (a.sb = !0);
                if (e || !c && a.R) a.R = !1
            }
        };
    aa("Goog_Osd_UnloadAdBlock", L("osd::unload_ex", function(a, b) {
        var c;
        if (a) {
            c = X;
            for (var d = -1, e = 0; e < c.length; ++e)
                if (c[e].element == a) {
                    d = e;
                    break
                }
            c = 0 <= d ? X.splice(d, 1)[0] : null
        } else c = null;
        d = K();
        c && (e = c, je(e), ke(e, d), e.h && e.h.ha(), pe(e, d));
        if (c && c.element.contentWindow && 3 == c.b) {
            e = c.getStats();
            e.unshift("adk=" + c.I);
            e.push("r=u");
            var f = tf(d, !1);
            e.push(f.join("&"));
            if (b) Rf(c, "u");
            else try {
                d.google_image_requests || (d.google_image_requests = []), c.element.contentWindow.osdsir(d, e.join("&"), c.Va || 0 >= c.B ? 2 : W(c) ? 4 :
                    3)
            } catch (g) {}
        }
    }));
    aa("Goog_Osd_UpdateElementToMeasure", L("osd::update_elem_ex", function(a, b) {
        if (a && b && fa(a) && 1 == a.nodeType && fa(b) && 1 == b.nodeType) {
            for (var c, d = X, e = 0; e < d.length; ++e) d[e].element == a && (c = d[e]);
            c && (d = K(), c.A = b, je(c), ke(c, d), c.h && c.h.ha(), pe(c, d))
        }
    }));
    $b("osd::main", function() {
        pf = "osd";
        Sf();
        Ob() ? Qf() : (Ef(), N(K(), "load", function() {
            window.setTimeout(M("osd::main::hi_to", Qf), 100)
        }, "osd::main::onload"))
    });
}).call(this);