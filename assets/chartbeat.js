(function() {
    var f = void 0,
        h = true,
        i = null,
        j = false,
        k, m = this;

    function ba(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Q = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function ca() {
        for (var a = "", b = 0; b < 16; b++) a += Math.random();
        return a
    }

    function da(a, b) {
        var c = "",
            d = ea(encodeURIComponent(a));
        d.splice(b || 5, d.length);
        n(d, function(a) {
            if (a == 0) a = "A";
            else {
                a >>>= 0;
                for (var b = "", d; a > 0;) d = a % 64, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d) + b, a >>>= 6;
                a = b
            }
            c += a
        });
        return c
    }

    function ea(a) {
        a += String.fromCharCode(128);
        for (var b = [1518500249, 1859775393, 2400959708, 3395469782], c = 1732584193, d = 4023233417, e = 2562383102, g = 271733878, t = 3285377520, s = [], l, x, v, H, I, aa = Math.ceil((a.length / 4 + 2) / 16), S = [aa], z = 0, u; z < aa; z++) {
            S[z] = [];
            for (l = 0; l < 16; l++) S[z][l] = a.charCodeAt(z * 64 + l * 4) << 24 | a.charCodeAt(z * 64 + l * 4 + 1) << 16 | a.charCodeAt(z * 64 + l * 4 + 2) << 8 | a.charCodeAt(z * 64 + l * 4 + 3)
        }
        z = (a.length - 1) * 8;
        a = aa - 1;
        S[a][14] = Math.floor(z / Math.pow(2, 32));
        S[a][15] = z & 4294967295;
        for (z = 0; z < aa; z++) {
            for (u = 0; u < 16; u++) s[u] = S[z][u];
            for (u = 16; u < 80; u++) s[u] = (s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16]) << 1 | (s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16]) >>> 31;
            a = c;
            l = d;
            x = e;
            v = g;
            H = t;
            for (u = 0; u < 80; u++) I = Math.floor(u / 20), I = (a << 5 | a >>> 27) + (I == 0 ? l & x ^ ~l & v : I == 1 ? l ^ x ^ v : I == 2 ? l & x ^ l & v ^ x & v : l ^ x ^ v) + H + b[I] + s[u] & 4294967295, H = v, v = x, x = l << 30 | l >>> 2, l = a, a = I;
            c = c + a & 4294967295;
            d = d + l & 4294967295;
            e = e + x & 4294967295;
            g = g + v & 4294967295;
            t = t + H & 4294967295
        }
        return [c, d, e, g, t]
    }

    function fa(a) {
        var b = m.navigator,
            c = m.window.screen,
            d = [b.userAgent, b.platform, (new Date).getTimezoneOffset(), c.width + c.height + c.colorDepth];
        n(b.plugins, function(a) {
            d.push(a.name + a.description + a.filename + a[0].type)
        });
        b = m.performance;
        d = d.concat([b && b.now ? b.now() : "", document.title, m.location.href, o(), ca()]);
        return d.concat(a || []).join()
    }

    function p(a, b, c) {
        var d = Array.prototype.slice,
            e = d.call(arguments, 2);
        return function() {
            return a.apply(b, e.concat(d.call(arguments)))
        }
    }

    function q(a) {
        return typeof a !== "undefined"
    }

    function ga(a) {
        return a.replace(/^www\./, "")
    }

    function r(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function ha(a, b) {
        var c = m;
        c.removeEventListener ? c.removeEventListener(a, b, j) : c.detachEvent && c.detachEvent("on" + a, b)
    }

    function w(a) {
        return typeof a === "number"
    }

    function y(a) {
        return typeof a === "string"
    }

    function ia(a) {
        a = new Date(+a);
        return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
    }

    function o() {
        return (new Date).getTime()
    }

    function n(a, b) {
        if ((!!a && a.constructor === Object) === h)
            for (var c in a) {
                if (a.hasOwnProperty(c) && b(a[c], c) === j) break
            } else {
                c = 0;
                for (var d = a.length; c < d; c++)
                    if (b(a[c], c) === j) break
            }
    }

    function ja(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            if (b(a[c])) return c;
        return -1
    }

    function ka(a, b) {
        if (a === b) return 0;
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        for (var c = [], d = 0, e = b.length; d <= e; d++) c[d] = [d];
        for (var g = 0, t = a.length; g <= t; g++) c[0][g] = g;
        for (var s, l, x, d = 1; d <= e; d++)
            for (g = 1; g <= t; g++) s = d - 1, l = g - 1, x = c[s][l], b.charAt(s) == a.charAt(l) ? c[d][g] = x : (l = c[d][l] + 1, s = c[s][g] + 1, x += 2, c[d][g] = Math.min(l, s, x));
        return c[b.length][a.length]
    }
    var la, ma = m.setInterval,
        na = m.clearInterval,
        oa = m.setTimeout,
        pa = m.clearTimeout;

    function qa(a) {
        var b, c;
        b = "pageYOffset";
        c = "scrollTop";
        if (a) {
            var d, e;
            d = d || "*";
            e = e || document;
            if ("querySelectorAll" in e) a = e.querySelectorAll(d + "[data-cb-scroll-element]");
            else {
                a = [];
                d = e.getElementsByTagName(d);
                for (e = d.length; e--;) d[e].getAttribute("data-cb-scroll-element") && a.push(d[e])
            }
            if (a && a.length) return a[0][c]
        }
        if (w(m[b])) return m[b];
        else if (document.body && document.body[c]) return document.body[c];
        else if (document.documentElement[c]) return document.documentElement[c];
        return 0
    }

    function ra() {
        var a = document,
            a = a[a.compatMode === "CSS1Compat" ? "documentElement" : "body"].clientHeight || 0;
        window.innerHeight && (a = Math.min(window.innerHeight, a));
        return a
    }

    function A(a) {
        a = "scroll" + a;
        return Math.max(document.body[a], document.documentElement[a]) || 0
    }

    function sa(a, b, c) {
        var d = a.ownerDocument.documentElement,
            e = 0,
            g = q(c) ? c + 1 : -1;
        y(b) ? (b = b.toLowerCase(), c = function(a) {
            return (a = a.nodeName) && a.toLowerCase() === b
        }) : c = b;
        for (; a && a !== d && e !== g;) {
            if (c(a)) return a;
            a = a.parentNode;
            e++
        }
        return i
    }

    function ta(a) {
        return a.nodeName && a.nodeName.toLowerCase() === "a" && (!a.namespaceURI || a.namespaceURI === "http://www.w3.org/1999/xhtml")
    }

    function ua(a) {
        a = a || window.event;
        return !a ? i : sa(a.target || a.srcElement, ta, 10)
    }

    function va(a, b) {
        var c = document.createElement(a);
        n(b, function(a, b) {
            c.setAttribute(b, a)
        });
        return c
    };

    function wa() {
        this.F = {};
        this.Ga = 1
    }

    function B(a, b, c, d) {
        a.Ga++;
        a.F[b] = a.F[b] || {};
        a.F[b][a.Ga] = [c, d];
        return a.Ga
    }

    function C(a, b) {
        if (y(b)) a.F[b] = f, delete a.F[b];
        else if (w(b)) {
            var c = h;
            n(a.F, function(a) {
                n(a, function(e, g) {
                    if (parseInt(g, 10) === b) return a[g] = f, delete a[g], c = j
                });
                return c
            })
        }
    }
    wa.prototype.M = function(a, b) {
        if (this.F[a]) {
            var c = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
            n(this.F[a], function(a) {
                var b;
                a && a.length === 2 && (b = a[0], a = a[1], b.apply(a, c))
            })
        }
    };
    wa.prototype.addEventListener = function(a, b) {
        var c = B(this, a, b);
        b._cbEventId = c
    };
    wa.prototype.removeEventListener = function(a, b) {
        this.F[a] && this.F[a][b._cbEventId] && this.F[a][b._cbEventId][0] === b && C(this, b._cbEventId)
    };
    var D = new wa;
    var E = {};
    E.B = function() {
        E.va ? E.ha("pageload") : (E.ab = [{
            target: m,
            event: "scroll"
        }, {
            target: document.body,
            event: "keydown"
        }, {
            target: document.body,
            event: "mousemove"
        }, {
            target: m,
            event: "resize"
        }, {
            target: document.body,
            event: "mousedown"
        }], E.na = i, E.Fa = j, E.Z = i, E.Qa = {}, E.pa = {}, n(E.ab, function(a) {
            var b = a.event;
            r(a.target, b, function(a) {
                E.ha.call(E, b, a)
            })
        }), B(D, "f", function() {
            E.ha("focus")
        }), E.ha("pageload"), r(document.body, "click", function(a) {
            (a = ua(a)) && D.M("c", a)
        }, h), r(document.body, "contextmenu", function(a) {
            (a = ua(a)) && D.M("r",
                a)
        }), E.va = h)
    };
    E.gb = function() {
        var a, b = E.Qa.keydown;
        if (b === f) return j;
        b = o() - b;
        return b <= (a || 15E3) && b >= 0
    };
    E.X = function(a, b) {
        var c = E.pa[a];
        if (!c) return "";
        var b = b || o(),
            d, e = 0;
        n(c, function(a) {
            d = Math.floor((b - a) / 1E3);
            d >= 0 && d < 16 && (e |= 1 << d)
        });
        c = ("0000" + e.toString(16)).slice(-4);
        return c == "0000" ? "" : c
    };
    E.Cb = function() {
        E.pa = {}
    };
    E.La = 100;
    E.ha = function(a, b) {
        if (!b) b = window.event;
        if (b && a === "keydown") {
            var c = b.keyCode ? b.keyCode : b.which;
            if (c === 32 || c > 36 && c < 41) a = "scroll"
        }
        E.Ib(a);
        E.na === i ? E.Za() : E.Fa = h
    };
    E.Ib = function(a) {
        var b = o();
        E.Qa[a] = b;
        var c = E.pa[a];
        c ? c.length < 2 ? c.push(b) : c[c.length - 2] > b - 1E3 ? c[c.length - 1] = b : c.push(b) : c = [b];
        c.length > 32 && c.shift();
        E.pa[a] = c
    };
    E.Za = function() {
        E.na = oa(E.kb, E.La);
        D.M("a");
        E.Z !== i && pa(E.Z);
        E.Z = oa(function() {
            D.M("i");
            pa(E.Z);
            E.Z = i
        }, 5E3 + E.La)
    };
    E.kb = function() {
        pa(E.na);
        E.na = i;
        if (E.Fa) E.Fa = j, E.Za()
    };
    var xa, ya, F, za, Aa;
    (function() {
        var a, b;
        n(["", "moz", "o", "ms", "webkit"], function(c) {
            a = (c + "Hidden").charAt(0).toLowerCase() + (c + "Hidden").slice(1);
            if (typeof m.document[a] === "boolean") return b = c, j
        });
        b !== f && (za = a, Aa = (b + "VisibilityState").charAt(0).toLowerCase() + (b + "VisibilityState").slice(1), F = b + "visibilitychange")
    })();
    var G = j;

    function Ba() {
        G = Aa && m.document[Aa] === "prerender" ? h : j
    }

    function Ca() {
        ya = h;
        D.M("f")
    }

    function Da() {
        ya = j;
        D.M("b")
    }

    function Ea(a, b, c) {
        m.addEventListener ? m.addEventListener(a, c, j) : m.document.attachEvent && m.document.attachEvent(b, c)
    }

    function Fa() {
        var a = h;
        m.document.hasFocus && (a = m.document.hasFocus());
        var b = j;
        za && (b = m.document[za]);
        return a && !b
    }

    function Ga() {
        Fa() ? Ca() : Da()
    }

    function Ha(a) {
        Ba();
        if (G) {
            var b = j,
                c = function() {
                    b || (Ba(), G || (b = h, a(), m.window.setTimeout(function() {
                        m.document.removeEventListener(F, c, j)
                    }, 100)))
                };
            m.document.addEventListener(F, c, j)
        } else a()
    };

    function J() {
        this.a = m._sf_async_config || {};
        this.mb = p(this.Va, this)
    }
    J.prototype.B = function() {
        this.Wa = 0
    };
    J.prototype.Va = function() {};
    J.prototype.ka = function(a) {
        if (!G) {
            var b = this.mb,
                c;
            c = new Image(1, 1);
            if (b) c.onerror = b;
            c.src = a
        }
    };

    function Ia(a) {
        var b = {};
        a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace("+", " "), n(a.split(/[&;]/g), function(a) {
            a = a.split("=");
            b[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
        }));
        return b
    }

    function Ja(a, b) {
        var c = "",
            d = m.location.href.split("?");
        if (d.length) {
            var d = Ia(d[1]),
                e = b || a;
            d[e] && (c = d[e])
        }
        return c
    }

    function Ka(a, b) {
        return !b ? h : a === "http:" && b === "80" || a === "https:" && b === "443"
    }

    function La(a) {
        var b = [];
        n(Ma, function(c) {
            var d = a[c];
            q(d) && (Object.prototype.toString.call(d) === "[object Array]" ? n(d, function(a) {
                b.push(c + "=" + a)
            }) : d && d.constructor === Object ? n(d, function(a, c) {
                b.push(c + "=" + a)
            }) : ((d + "").length || c == "r") && b.push(c + "=" + d))
        });
        b.push("_");
        return b.join("&")
    }

    function Na(a) {
        var b = {
            hostname: "",
            pathname: "",
            search: "",
            protocol: "",
            port: "",
            hash: ""
        };
        if (!a) return b;
        var c = document.createElement("a"),
            d = m.location;
        if (!/^https?:/.test(a) && a.indexOf("javascript:") !== 0)
            if (a.indexOf("//") === 0) a = d.protocol + a;
            else if (a.indexOf("/") === 0) var e = Ka(d.protocol, d.port) ? "" : d.port,
            a = d.protocol + "//" + d.hostname + (e ? ":" + e : "") + a;
        else {
            var e = document.baseURI || d.href,
                g = e.indexOf("?");
            g === -1 && (g = e.indexOf("#"));
            if (g === -1) g = e.length;
            g = e.lastIndexOf("/", g);
            a = g === -1 ? "/" + a : e.substr(0, g) + "/" +
                a
        }
        c.href = a;
        b.hostname = c.hostname;
        b.pathname = c.pathname;
        b.search = c.search;
        b.protocol = c.protocol;
        b.port = c.port;
        b.hash = c.hash;
        if (b.pathname.charAt(0) !== "/") b.pathname = "/" + b.pathname;
        if (b.hostname === "") b.hostname = d.hostname;
        if (b.protocol === "") b.protocol = d.protocol;
        if (b.protocol === "javascript:") b.pathname = "", b.hostname = "", b.port = "", b.hash = "";
        if (Ka(b.protocol, b.port) || b.port === "0") b.port = "";
        return b
    }

    function Oa(a) {
        var b = a.protocol;
        a.hostname && (b += "//" + a.hostname, a.port && (b += ":" + a.port));
        return b + a.pathname + a.search + a.hash
    };

    function K(a, b, c) {
        a[b] = a[b] || c
    }

    function Pa(a, b) {
        for (var c = m[a] || []; c.length;) b(c.shift());
        m[a] = {
            push: b
        }
    }

    function Qa(a) {
        n(document.getElementsByTagName("script"), function(b) {
            if (b.src.match(/chartbeat.js/)) return b = Ia(b.src.split("?")[1]), K(a, "uid", b.uid), K(a, "domain", b.domain), j
        })
    }

    function L(a, b) {
        return a[b] ? encodeURIComponent(a[b]) : ""
    }

    function Ra(a) {
        var b = {};
        n(a, function(a, d) {
            d.charAt(0) == "_" && (b[d] = a)
        });
        return b
    };
    var M = {};
    M.jb = function() {
        try {
            M.create("_cb_test", "1", 1);
            var a = M.k("_cb_test");
            M.remove("_cb_test");
            return a === "1"
        } catch (b) {
            return j
        }
    };
    M.k = function(a) {
        a += "=";
        var b = "";
        n(document.cookie.split(";"), function(c) {
            for (; c.charAt(0) === " ";) c = c.substring(1, c.length);
            if (c.indexOf(a) === 0) return b = c.substring(a.length, c.length), j
        });
        return b
    };
    M.create = function(a, b, c) {
        var d = m._sf_async_config;
        if (d && d.noCookies) return "";
        d = new Date;
        d.setTime(o() + c * 1E3);
        a = a + "=" + b + ("; expires=" + d.toGMTString()) + "; path=/";
        return document.cookie = a
    };
    M.remove = function(a) {
        return M.k(a) ? M.create(a, "", -86400) : ""
    };
    var N = {};
    N.q = function(a) {
        var b = m._sf_async_config;
        if (!a && b && b.noCookies) return i;
        if (N.q.ra !== f) return N.q.ra;
        var a = o() + "",
            c, d;
        try {
            if ((d = m.localStorage).setItem(a, a), c = d.getItem(a) === a, d.removeItem(a), c) return N.q.ra = d
        } catch (e) {}
        return N.q.ra = i
    };
    N.k = function(a) {
        var b = N.q();
        if (!b) return "";
        var c = b.getItem(a + "_expires");
        return c && (c = +c, !isNaN(c) && o() > c) ? (N.remove(a), "") : b.getItem(a) || ""
    };
    N.create = function(a, b, c) {
        var d = N.q();
        if (d) {
            var e = new Date;
            e.setTime(o() + c * 1E3);
            try {
                d.setItem(a, b), d.setItem(a + "_expires", e.getTime())
            } catch (g) {}
        }
    };
    N.remove = function(a) {
        var b = N.q();
        b && (b.removeItem(a), b.removeItem(a + "_expires"))
    };

    function Sa(a) {
        this.ja = a || "";
        this.lb = N.q() !== i || M.jb();
        this.Ea = j;
        Ta(this)
    }
    k = Sa.prototype;
    k.isSupported = function() {
        return this.lb
    };

    function Ta(a) {
        if (!M.k("_cb_ls")) {
            var b = N.q() !== i,
                c = M.k("_SUPERFLY_nosample");
            c && n(["", "_v_", "_p_"], function(b) {
                a.create(b + "_SUPERFLY_nosample", c, 600, h)
            });
            var d = M.k("_chartbeat3");
            d && (a.create("_v__chartbeat3", d, 2592E3, h), M.remove("_chartbeat3"));
            b && ((b = M.k("_chartbeat2")) && a.create("_chartbeat2", b, 63072E3, h), (b = M.k("_chartbeat_uuniq")) && a.create("_chartbeat_uuniq", b, 63072E3, h), (b = M.k("_chartbeat5")) && a.create("_chartbeat5", b, 60, h));
            M.create("_cb_ls", "1", 2592E3)
        }
    }
    k.create = function(a, b, c, d) {
        a = d ? a : this.ja + a;
        (N.q() ? N : M).create(a, b, c);
        N.q() && M.create(a, b, c)
    };
    k.update = function(a, b, c, d, e, g, t) {
        a = d ? a : this.ja + a;
        e = y(e) ? e : "::";
        d = (d = this.k(a, h)) ? d.split(e) : [];
        if (t && d.length) {
            var s = t(b),
                l = ja(d, function(a) {
                    return t(a) === s
                });
            l !== -1 && d.splice(l, 1)
        }
        w(g) && d.length >= g && d.splice(0, d.length - g + 1);
        d.push(b);
        this.create(a, d.join(e), c, h)
    };
    k.k = function(a, b) {
        var a = b ? a : this.ja + a,
            c = (N.q() ? N : M).k(a);
        if (!c && N.q() && (c = M.k(a)) && M.k("_cb_ls")) {
            this.Ea = h;
            var d;
            switch (a) {
                case "_SUPERFLY_nosample":
                    d = 600;
                    break;
                case "_chartbeat4":
                    d = 3600;
                    break;
                case "_cb_cp":
                    d = 3600;
                    break;
                case "_chartbeat3":
                    d = 2592E3;
                    break;
                default:
                    d = 63072E3
            }
            N.create(a, c, d)
        }
        return c
    };
    k.remove = function(a, b) {
        a = b ? a : this.ja + a;
        (N.q() ? N : M).remove(a);
        N.q() && M.remove(a)
    };

    function Ua(a) {
        var b = i;
        if (a && (b = Va())) return b;
        var c = m.location,
            b = O(c.pathname),
            a = c.search || "",
            a = a.replace(/PHPSESSID=[^&]+/, ""),
            d = /&utm_[^=]+=[^&]+/ig;
        (c = d.exec(c.search)) && (a = a.replace(d, ""));
        d = /\?utm_[^=]+=[^&]+(.*)/i;
        (c = d.exec(a)) && (a = a.replace(d, c[1] != "" ? "?" + c[1] : ""));
        return b + a
    }

    function Va() {
        var a = i;
        n(document.getElementsByTagName("link"), function(b) {
            if (b.rel == "canonical") return b = Na(b.href), a = O(b.pathname) + b.search + b.hash, j
        });
        return a
    }
    for (var Wa = {}, Xa = 0; Xa < 81; Xa++) Wa["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Xa)] = h;

    function Ya(a, b) {
        if (a === "%") return "%25";
        var c = parseInt(b, 16);
        return Wa[c] ? String.fromCharCode(c) : "%" + b.toUpperCase()
    }

    function O(a) {
        if (!y(a)) return a;
        a = a.replace(/%([0-9A-Fa-f]{2})?/g, Ya);
        return a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent)
    };
    var P = {
        cb: {
            IDLE: 0,
            Lb: 1,
            Kb: 2,
            bb: 3
        },
        G: 0
    };
    P.B = function() {
        if (!P.va) B(D, "a", P.pb, P), B(D, "i", P.sb, P), B(D, "f", P.rb, P), B(D, "b", P.qb, P), P.va = h
    };
    P.ob = function() {
        return P.G
    };
    P.pb = function() {
        P.G === 1 ? P.J(3) : P.G === 0 && P.J(2)
    };
    P.sb = function() {
        P.G === 3 ? P.J(1) : P.G === 2 && P.J(0)
    };
    P.rb = function() {
        (P.G === 0 || P.G === 2) && P.J(3)
    };
    P.qb = function() {
        P.G === 3 ? P.J(2) : P.G === 1 && P.J(0)
    };
    P.J = function(a) {
        P.G = a;
        D.M("s", a)
    };

    function Q(a, b) {
        this.Na = a || f;
        this.Ua = b || f;
        this.$ = this.S = 0;
        this.ua = p(this.ua, this)
    }
    Q.prototype.B = function() {
        this.$ = this.S = 0;
        this.da = i;
        this.Eb = B(D, "s", this.Oa, this);
        this.Oa(P.ob())
    };
    Q.prototype.Oa = function(a) {
        na(this.da);
        this.da = i;
        if (a === P.cb.bb) this.da = ma(this.ua, 1E3)
    };
    Q.prototype.ua = function() {
        if (this.Na === f || this.Na()) this.S++, this.$++, this.Ua && this.Ua()
    };
    Q.prototype.terminate = function() {
        na(this.da);
        this.da = i;
        C(D, this.Eb)
    };

    function R() {
        J.call(this);
        this.T = [];
        this.D = new Sa(this.Fb);
        this.H = new Q;
        this.Bb = p(this.ia, this);
        r(m, "unload", this.Bb);
        Ha(p(this.B, this))
    }
    ba(R, J);
    k = R.prototype;
    k.Ba = h;
    k.B = function() {
        R.Q.B.call(this);
        this.fa = this.O = 0;
        this.P = o();
        this.Ya = da(Za(this));
        this.Aa = h;
        this.wa = 72E5;
        if (this.Ba) {
            var a = +this.a.sessionLength;
            if (!isNaN(a)) this.wa = a * 6E4
        }
        a = $a(ab);
        if (!a) {
            var a = [],
                b = this.D.k("_chartbeat2", h);
            b.length > 0 && (a = b.split("."));
            a.length > 4 && (a = []);
            var b = o(),
                c = b - +(a[1] || 0),
                d = b - +(a[2] || 0),
                e = bb,
                c = a[0] && c > 18E5 && d < 2592E6 ? 0 : 1;
            T()[e] = c;
            c = "1";
            d = a && +a[2];
            e = a && a[3];
            if (a && d && e)
                if (c = Math.abs((ia(b) - ia(d)) / 864E5)) {
                    c = Math.min(c, 16) - 1;
                    for (d = ""; c--;) d += 0;
                    c = (e + d + "1").slice(-16)
                } else c = e;
            e =
                c;
            a[0] || (a[0] = this.a.utoken || da(Za(this), 3), a[1] = b);
            a[2] = b;
            a[3] = e;
            this.a.utoken = this.oa;
            this.D.create("_chartbeat2", a.join("."), 63072E3, h);
            b = ab;
            T()[b] = a
        }
        this.Nb = a.join(".");
        var g;
        e = +a[1];
        c = +a[2];
        if ((b = a[3]) && e && c) g = (Math.min((Math.abs((ia(c) - ia(e)) / 864E5) || 0) + 1, 16, b.length) - 1).toString(16), g += ("0000" + parseInt(b, 2).toString(16)).slice(-4);
        this.Ma = g;
        this.xb = $a(bb, 1);
        this.oa = a[0];
        this.H.B();
        P.B();
        E.B();
        xa || (ya = Fa(), F && m.document.addEventListener && m.document.addEventListener(F, Ga, j), Ea("focus", "onfocusin",
            Ca), Ea("blur", "onfocusout", Da), ya && Ca(), xa = h);
        this.aa = 0;
        this.fb = B(D, "a", this.yb, this)
    };

    function cb(a) {
        if (!a.D.k("_SUPERFLY_nosample") && !G) a.wb ? a.la() : (a.wb = h, !m._sf_async_config && !m._cbq ? (a.ya = p(a.la, a), r(m, "load", a.ya)) : a.la())
    }
    k.la = function() {
        var a = m._sf_startpt,
            b = m._sf_endpt;
        if (w(a)) this.za = w(b) ? b - a : o() - a;
        E.B();
        a = p(this.ba, this);
        this.Pa = ma(a, 15E3);
        this.ba()
    };
    k.ba = function() {
        var a = this.H.$,
            a = this.a.reading && +this.a.reading || a > 0;
        if (this.fa < this.O && !a) this.fa++;
        else {
            var b;
            if (la === f) b = m.navigator.userAgent, la = b.indexOf("AppleWebKit") > 0 && b.indexOf("FBIOS") > 0;
            b = la;
            b && !a ? this.fa++ : (a ? this.O = 0 : db(this), this.fa = 0, this.T.push(0), this.T.length > 18 && this.T.shift(), this.Ba && o() - this.P >= this.wa ? this.terminate() : this.ca())
        }
    };
    k.Va = function() {
        this.T.push(1);
        var a = 0;
        n(this.T, function(b) {
            a += b
        });
        a < 3 ? (this.Aa = h, db(this)) : (this.terminate(), this.D.create("_SUPERFLY_nosample", "1", 600))
    };
    k.ia = function() {};
    k.yb = function() {
        var a = eb(this);
        this.aa = Math.max(this.aa, a)
    };

    function eb(a) {
        return qa(!!a.a.scrollElement)
    }

    function db(a) {
        var b = a.O,
            b = b ? Math.min(b * 2, 16) : 1;
        a.O = b
    }
    k.ea = function() {
        this.ia();
        this.terminate()
    };
    k.$a = function() {
        this.B();
        cb(this)
    };

    function fb(a) {
        if (a.a.virtualReferrer) return h;
        a = (document.referrer || "").indexOf("://" + m.location.hostname + "/");
        return a != -1 && a < 9
    }

    function gb(a) {
        a = a.a.virtualReferrer;
        if (!a && (a = document.referrer || "")) {
            var b = Na(a);
            if (b.protocol === "http:" || b.protocol === "https:") b.pathname = O(b.pathname), a = Oa(b)
        }
        return encodeURIComponent(a)
    }

    function hb(a) {
        a = a.a.title.slice(0, 100);
        return encodeURIComponent(a)
    }

    function Za(a) {
        a = [gb(a), A("Width"), A("Height")];
        return fa(a)
    }

    function ib(a) {
        var b = [],
            c = a.D.k("_chartbeat4");
        c && (n(c.split("::"), function(a) {
            b.push(encodeURIComponent(a))
        }), a.D.remove("_chartbeat4"));
        return b
    }
    k.terminate = function() {
        this.H.terminate();
        C(D, this.fb);
        this.ya !== f && ha("load", this.ya);
        na(this.Pa);
        var a = ab;
        T()[a] = f;
        a = bb;
        T()[a] = f
    };
    var ab = "d",
        bb = "n";

    function $a(a, b) {
        var c = T();
        return q(b) && !q(c[a]) ? b : c[a]
    }

    function T() {
        q(m._cb_shared) || (m._cb_shared = {});
        return m._cb_shared
    };

    function jb(a) {
        var b = a.offsetLeft,
            c = a.offsetTop,
            d = kb(a);
        b += d.x;
        c += d.y;
        for (var e = j, d = a.offsetParent; a && a !== f && a !== document.body;) {
            if (a === d) d = kb(a), b += a.offsetLeft + d.x, c += a.offsetTop + d.y, d = a.offsetParent;
            if (lb(a, ["position"]).position === "fixed") {
                e = h;
                break
            }
            a = a.parentElement
        }
        e && (b += 0, c += 0);
        return {
            x: b,
            y: c
        }
    }

    function lb(a, b) {
        var c = {},
            d, e;
        m.getComputedStyle ? d = m.getComputedStyle(a, i) : a.currentStyle ? e = "currentStyle" : a.style && (e = "style");
        n(b, function(b) {
            c[b] = d ? d[b] || d.getPropertyValue(b) : a[e][b]
        });
        return c
    }
    var mb = /matrix(3d)?\((.*)\)/;

    function kb(a) {
        var b = {
                x: 0,
                y: 0
            },
            a = lb(a, ["transform"]).transform;
        if (!y(a)) return b;
        var c = a.match(mb);
        if (!c) return b;
        var a = c[2].split(", "),
            d;
        q(c[1]) ? (c = 12, d = 13) : (c = 4, d = 5);
        b.x = parseInt(a[c], 10);
        b.y = parseInt(a[d], 10);
        return b
    };

    function nb() {
        var a = m.location.href,
            a = a.replace(/-{2,}/g, "-"),
            a = Na(a);
        a.pathname = O(a.pathname);
        return a
    }

    function ob(a) {
        var b = M.k("_chartbeat6");
        if (!b) return i;
        var b = b.split("::"),
            c, d;
        if (b.length === 1) c = b[0].split(","), d = 0;
        else {
            var e, g = nb(),
                t = Oa(g);
            n(b, function(a, b) {
                var g = a.split(","),
                    v = ka(t, decodeURIComponent(g[0]));
                if (v === 0) return c = g, d = b, j;
                if (e === f || v < e) e = v, c = g, d = b
            })
        }
        b.splice(d, 1);
        a = "_chartbeat6=" + b.join("::") + pb(a);
        document.cookie = a;
        return {
            Mb: c[0],
            nb: c[1],
            Jb: c[2],
            origin: c[3]
        }
    }

    function pb(a) {
        var b = "",
            c;
        if (!(a && a.constructor === Object)) return b;
        a.Sa && (c = new Date, c.setTime(c.getTime() + a.Sa), b += "; expires=" + c.toGMTString());
        a.domain && (b += "; domain=" + a.domain);
        a.path && (b += "; path=" + a.path);
        return b
    }

    function qb(a, b) {
        if (a === b) return h;
        for (var c = b.split("."), d = a.split("."); c.length;) {
            if (d.length === 0) return j;
            if (c.pop() !== d.pop()) return j
        }
        return h
    };

    function rb(a, b) {
        for (var c = b || document.documentElement, d = [], e = i, g = a, t, s, l, x, v, H; g && g !== c;) {
            t = g.nodeName.toLowerCase();
            e = g;
            s = e.nodeName;
            if ((g = g.parentNode) && g !== document.documentElement) {
                l = g.children;
                x = 0;
                for (v = 0, H = l.length; v < H; v++) {
                    if (e === l[v]) {
                        t += "[" + (1 + v - x) + "]";
                        break
                    }
                    l[v].nodeName !== s && x++
                }
            }
            d.unshift(t)
        }
        return d.join("/")
    };

    function U() {
        this.Fb = "_t_";
        R.call(this)
    }
    ba(U, R);
    k = U.prototype;
    k.B = function() {
        U.Q.B.call(this);
        Qa(this.a);
        var a = m.location;
        K(this.a, "mabServer", "mabping.chartbeat.net");
        K(this.a, "title", document.title);
        K(this.a, "domain", a.hostname);
        K(this.a, "path", Ua(!!this.a.useCanonical));
        this.Y = ga(a.hostname);
        this.a.domain = ga(this.a.domain);
        var b = this.a,
            a = b.topStorageDomain,
            b = b.domain,
            c = m.location.hostname;
        this.Hb = a ? a : qb(c, b) ? b : c.replace(/^www\./, "");
        this.Ha = this.sa = this.ta = "";
        this.U = this.ga = j;
        a = ob({
            domain: "." + this.Hb,
            Sa: 6E4,
            path: "/"
        });
        if (a !== i) this.ta = a.origin, this.sa = a.nb,
            this.Ha = a.Jb, this.ga = h;
        this.Ta = 0;
        this.ma = i;
        a = p(this.ub, this);
        for (b = $a("m") || []; b.length;) a(b.shift());
        a = {
            push: a
        };
        T().m = a
    };
    k.ca = function() {
        var a = this.H.S,
            b = sb(this),
            c, d, e;
        if (this.ga) c = this.ta, d = this.sa, e = this.Ha, this.ka(b + "&x=" + d + "&v=" + e + "&xo=" + c + "&e=" + a);
        !this.U && this.ma && tb(this, this.ma);
        this.U = h
    };
    k.la = function() {
        var a = m._sf_startpt,
            b = m._sf_endpt;
        if (w(a)) this.za = w(b) ? b - a : o() - a;
        E.B();
        if (this.ga) a = p(this.ba, this), this.Pa = ma(a, 500);
        this.ba()
    };
    k.ba = function() {
        var a, b;
        this.U ? (a = this.H.S, b = this.Ta * 15, a - b >= 15 && (this.ca(), this.Ta += 1), a >= 45 && this.terminate()) : this.ca()
    };

    function sb(a) {
        var b = a.a;
        return (m.location.protocol || "http:") + "//" + b.mabServer + "/ping/mab?h=" + encodeURIComponent(b.domain) + "&p=" + encodeURIComponent(b.path) + "&d=" + encodeURIComponent(a.Y) + "&u=" + a.oa + "&c=" + Math.round((o() - a.P) / 600) / 100
    }
    k.ia = function() {};
    k.Gb = function(a) {
        var b = a.d,
            c = i;
        b !== i && (c = {
            Ca: b.s,
            vb: b.l,
            Ra: b.m
        });
        a = {
            status: a.s,
            data: c,
            code: a.c,
            message: a.m
        };
        this.U ? tb(this, a) : this.ma = a
    };

    function tb(a, b) {
        var c = sb(a),
            d = b.status,
            e = b.data;
        if (d == "s" && e !== i) {
            if (!e.vb) {
                var g = p(a.ka, a);
                e.Ca && e.Ca.constructor === Object && n(e.Ca, function(a, b) {
                    g(c + "&x=" + b + "&v=" + a + "&e=-1")
                });
                Object.prototype.toString.call(e.Ra) === "[object Array]" && n(e.Ra, function(a) {
                    g(c + "&mt=e&me=3&x=" + a)
                })
            }
        } else d == "e" && a.ka(c + "&mt=e&me=" + b.code)
    }
    k.ub = function(a, b) {
        for (var c = 0, d = arguments.length; c < d; c++) {
            var a = arguments[c],
                e = a.shift();
            e === "t" ? this.Gb.apply(this, a) : e === "v" && this.Db.apply(this, a)
        }
    };
    k.ea = function() {
        T().m = [];
        q(this.Ia) && this.Ia();
        U.Q.ea.call(this)
    };
    k.Db = function(a) {
        this.Ia = a
    };
    k.terminate = function() {
        this.Ia = this.U = this.ga = this.Ha = this.sa = this.ta = f;
        this.ma = i;
        U.Q.terminate.call(this)
    };
    if (!m.pSUPERFLY_mab) {
        var V = new U,
            ub = {};
        ub.evps = p(V.ea, V);
        ub.svps = p(V.$a, V);
        m.pSUPERFLY_mab = ub;
        cb(V)
    };
    var vb, wb, W;

    function xb(a) {
        if (a.origin === "https://chartbeat.com" && (a = String(a.data), a.indexOf("_cb_hud_version=") === 0)) {
            var b = a.substr(16);
            yb();
            if (b !== "NONE") b = b.indexOf("HUD2.") === 0 ? b.substr(5) : "OLD", a = "https://static.chartbeat.com/js/inpage.js", b !== "OLD" && (a = "https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-" + b + ".js"), b = q(f) ? f : {}, b.src = a, a = va("script", b), a.setAttribute("type", "text/javascript"), b = document.head || document.getElementsByTagName("head")[0], q(f) ? f.appendChild(a) : b && b.appendChild(a)
        }
    }

    function yb() {
        pa(wb);
        wb = f;
        ha("message", xb);
        W && W.parentNode && W.parentNode.removeChild(W);
        W = f
    };

    function zb() {
        var a = m._sf_async_config && m._sf_async_config.domain;
        if (a && !vb) {
            vb = h;
            a = "https://chartbeat.com/publishing/hud2/versioninfo/?host=" + encodeURIComponent(a);
            r(m, "message", xb);
            wb = oa(yb, 1E4);
            var b = q(f) ? f : {};
            b.src = a;
            a = va("iframe", b);
            a.style.display = "none";
            q(f) ? f.appendChild(a) : document.body && document.body.appendChild(a);
            W = a
        }
    }

    function Ab(a) {
        if (/[\/.]chartbeat\.com$/.test(a.origin)) {
            var b = N.q(h),
                c = String(a.data);
            b && c.indexOf("_cb_ip") == 0 && (b.setItem("_cb_ip", "1"), a.source.postMessage(1, a.origin), zb(), ha("message", Ab))
        }
    };

    function X() {
        "postMessage" in window && r(m, "message", p(this.tb, this));
        R.call(this);
        Pa("_cbq", p(this.Xa, this))
    }
    ba(X, R);
    X.prototype.B = function() {
        X.Q.B.call(this);
        this.qa = i;
        Qa(this.a);
        var a = m.location;
        K(this.a, "pingServer", "ping.chartbeat.net");
        K(this.a, "title", document.title);
        K(this.a, "domain", a.hostname);
        this.a.path = this.a.path ? O(this.a.path) : Ua(!!this.a.useCanonical);
        this.Y = ga(a.hostname);
        this.a.domain = ga(this.a.domain);
        this.hb = B(D, "c", this.zb, this);
        this.ib = B(D, "r", this.Ab, this);
        this.N = i
    };
    X.prototype.eb = function(a) {
        this.qa = a
    };
    X.prototype.ia = function() {
        this.D.update("_chartbeat4", ["t=" + this.Ya, "E=" + this.H.S, "x=" + eb(this), "c=" + Math.round((o() - this.P) / 600) / 100, "y=" + A("Height"), "w=" + ra()].join("&"), 3600, f, f, 1)
    };
    var Ma = "h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,t,V,z,i,L,tz,l,,sn,C,eS,eM,eD,eK,eR".split(",");
    k = X.prototype;
    k.ca = function(a) {
        this.Wa++;
        var b = {};
        b.g = this.a.uid;
        b.g0 = L(this.a, "sections");
        b.g1 = L(this.a, "authors");
        b.g2 = L(this.a, "zone");
        b.g3 = L(this.a, "sponsorName");
        b.g4 = L(this.a, "type");
        !this.a.noCookies && this.D.isSupported() ? b.n = this.xb : b.nc = 1;
        b.c = Math.round((o() - this.P) / 600) / 100;
        b.E = this.H.S;
        var c = eb(this);
        this.aa = Math.max(this.aa, c);
        b.x = c;
        b.m = this.aa;
        b.y = A("Height");
        b.o = A("Width");
        b.w = ra();
        b.b = this.za ? this.za : "";
        if (this.Ma) b.f = this.Ma;
        b[""] = Ra(this.a);
        b.t = this.Ya;
        b.V = 65;
        b.tz = (new Date).getTimezoneOffset();
        b.sn = this.Wa;
        c = this.H.$;
        b.h = encodeURIComponent(this.a.domain);
        b.p = encodeURIComponent(this.a.path);
        b.u = this.oa;
        b.d = encodeURIComponent(this.Y);
        b.j = Math.round((this.O + 2) * 15E3 / 1E3);
        b.R = 0;
        b.W = 0;
        b.I = 0;
        var d = b.c * 6E4 + this.P;
        b.eD = E.X("mousedown", d);
        b.eM = E.X("mousemove", d);
        b.eK = E.X("keydown", d);
        b.eR = E.X("resize", d);
        b.eS = E.X("scroll", d);
        E.Cb();
        E.gb() ? b.W = 1 : this.a.reading && +this.a.reading || c > 0 || b.c < 0.09 ? b.R = 1 : b.I = 1;
        b.e = c;
        c = fb(this);
        if (this.Aa) {
            this.Aa = j;
            if (c) this.N = Bb(this);
            b.i = hb(this);
            d = this.a.hudTrackable;
            d !== f && (b.L = d ? "1" : "0");
            this.a.alias && (b.PA = encodeURIComponent(this.a.alias))
        }
        if (c) {
            if (this.N) {
                if (b.v = encodeURIComponent(this.N.path), b.K = Cb(this.N), this.N.xa > 1) b.l1 = this.N.xa
            } else b.v = gb(this);
            this.a.virtualReferrer && (b.vp = 1)
        } else b.r = gb(this);
        b.A = this.qa ? this.qa : "";
        b._c = Ja("utm_campaign", this.a.campaignTag);
        b._m = Ja("utm_medium", this.a.mediumTag);
        b.z = ib(this);
        b.C = this.a.mobileApp ? 1 : "";
        b.KK = a ? Cb(a) : "";
        a = this.D;
        c = a.Ea;
        a.Ea = j;
        b.l = c ? 1 : "";
        this.H.$ = 0;
        this.ka((m.location.protocol || "http:") + "//" + this.a.pingServer +
            "/ping?" + La(b))
    };
    k.tb = function(a) {
        var b = this.a;
        if (a.origin === "http://" + (b.playerdomain || this.Y)) {
            var c = a.data;
            y(c) && c.indexOf("cbqpush::") === 0 ? (a = c.split("::"), a.length == 3 && (a = a.slice(1), a[0].indexOf("_") === 0 && this.Xa(a))) : c == "cbdata?" && (b = "domain=" + encodeURIComponent(b.domain) + "&uid=" + encodeURIComponent(b.uid) + "&path=" + encodeURIComponent(b.path) + "&title=" + hb(this) + "&referrer=" + gb(this) + "&internal=" + (fb(this) ? "1" : "0") + "&subdomain=" + encodeURIComponent(this.Y) + "&utoken=" + this.oa, a.source.postMessage(b, "*"))
        }
    };
    k.Xa = function(a) {
        a[0] === "_demo" && this.a._demo ? this.a._demo = this.a._demo + "%2C" + a[1] : this.a[a[0]] = a[1];
        this.O = 0
    };

    function Db(a) {
        a = a.replace(/-{2,}/g, "-");
        a = Na(a);
        a.pathname = O(a.pathname);
        return a
    }
    k.zb = function(a) {
        Eb(this, a, "c")
    };
    k.Ab = function(a) {
        Eb(this, a, "r")
    };

    function Eb(a, b, c) {
        if (a.Ba && o() - a.P >= a.wa) a.terminate();
        else {
            var d = b.href || "",
                d = Db(d);
            if (!(d.hostname !== m.location.hostname || d.protocol.indexOf("http") !== 0)) {
                var d = Oa(d),
                    e = sa(b, function(a) {
                        return a.id
                    }),
                    g = rb(b, e);
                e && (g && (g = "/" + g), g = "*[@id='" + e.id + "']" + g);
                e = da(g);
                b = jb(b);
                c = {
                    left: b.x,
                    top: b.y,
                    path: a.a.path,
                    href: d,
                    Ka: e,
                    Ja: g,
                    Da: c,
                    xa: 0
                };
                a.ca(c);
                a.D.update("_chartbeat5", Fb(c), 60, j, f, 5, function(a) {
                    a = a.split(",");
                    return a[2] + "," + a[3]
                })
            }
        }
    }

    function Cb(a) {
        return [a.left, a.top, a.Ka, encodeURIComponent(a.Ja), a.Da, encodeURIComponent(a.href)].join("::")
    }

    function Fb(a) {
        var b = encodeURIComponent(a.Ja),
            b = b.replace(/-/g, "%2D");
        b.length > 512 && (b = "");
        return [a.left, a.top, encodeURIComponent(a.path), encodeURIComponent(a.href), a.Ka, b, a.Da].join(",")
    }

    function Bb(a) {
        var b = a.D.k("_chartbeat5");
        if (!b) return i;
        var c = b.split("::"),
            b = c.length,
            d, e;
        if (b === 1) d = c[0].split(","), e = 0;
        else {
            var g, t = Db(m.location.href),
                s = Oa(t);
            n(c, function(a, b) {
                var c = a.split(","),
                    t = ka(s, decodeURIComponent(c[3]));
                if (t === 0) return d = c, e = b, j;
                if (g === f || t < g) g = t, d = c, e = b
            })
        }
        c.splice(e, 1);
        a.D.create("_chartbeat5", c.join("::"), 60);
        (a = d[5]) ? (a = a.replace(/%2D/g, "-"), a = decodeURIComponent(a)) : a = "";
        return {
            left: d[0],
            top: d[1],
            path: decodeURIComponent(d[2]),
            href: decodeURIComponent(d[3]),
            Ka: d[4] ||
                "",
            Ja: a,
            Da: d.length > 6 ? d[6] : "c",
            xa: b
        }
    }
    k.terminate = function() {
        C(D, this.hb);
        C(D, this.ib);
        X.Q.terminate.call(this)
    };
    if (!m.pSUPERFLY) {
        var Y = new X,
            Z = {};
        m.pSUPERFLY = Z;
        var Gb = m.pSUPERFLY_mab,
            $ = m.pSUPERFLY_pub,
            Hb = [];
        Gb && Hb.push(Gb);
        if ($) Hb.push($), $.addEngagedAdFilter && (Z.addEngagedAdFilter = $.addEngagedAdFilter), $.refreshAd && (Z.refreshAd = $.refreshAd), $.registerGptSlot && (Z.registerGptSlot = $.registerGptSlot), Pa("_cba", function(a) {
            a()
        });
        Z.virtualPage = function(a, b) {
            if (!G) {
                var c = m._sf_async_config;
                c.virtualReferrer = m.location.protocol + "//" + c.domain + c.path;
                c.path = O(a);
                b && (c.title = b);
                Y.ea();
                n(Hb, function(a) {
                    a.evps()
                });
                Y.$a();
                n(Hb, function(a) {
                    a.svps()
                })
            }
        };
        Z.activity = p(Y.eb, Y);
        cb(Y);
        var Ib = N.q(h);
        if (Ib)
            if (Ib.getItem("_cb_ip")) {
                var Jb = m.location;
                (!/^(.+[.])?chartbeat\.com$/.test(Jb.hostname) ? 0 : /^\/publishing\/(overlay|hud|mab)\//.test(Jb.pathname)) || zb()
            } else r(m, "message", Ab)
    };
})();