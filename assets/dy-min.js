function dyWaitForJQuery() {
    "undefined" == typeof $dy || "undefined" == typeof $dy(window) || "undefined" == typeof $dy.renderSmartTagSlider ? setTimeout(dyWaitForJQuery, 100) : "undefined" != typeof DY.slim && "true" == DY.slim ? DYWork.slim() : DYWork.work()
}
DY.Util = function() {
        function a() {
            return isNaN(A) ? "-1" : A
        }

        function b(a) {
            var b, c = 0;
            if (0 == a.length) return c;
            for (b = 0; b < a.length; b++) {
                var d = a.charCodeAt(b);
                c = (c << 5) - c + d, c &= c
            }
            return c
        }

        function c(a, b) {
            setTimeout(a, b)
        }

        function d() {
            DY.DataCollection.initTimer(), h()
        }

        function e() {
            DY.DataCollection.updateTimer()
        }

        function f() {
            z = !0, i()
        }

        function g() {
            z = !1
        }

        function h() {
            DY.WindowActions.inFocus() && DY.DataCollection.visitSiteTimer(), setTimeout(h, 1e3)
        }

        function i() {
            z && DY.WindowActions.inFocus() && DY.DataCollection.visitAdHoverTimer(), setTimeout(i, 100)
        }

        function j(a, b) {
            DY.DataCollection.visitClick(a, b)
        }

        function k(a) {
            return !0
        }

        function l(a, b, c) {
            return Math.floor((b - a) / (1e3 * c))
        }

        function m() {
            return result = n("", !0), result
        }

        function n(a, b) {
            "undefined" == typeof a && (a = "");
            var c, d = function(a, b) {
                return a = parseInt(a, 10).toString(16), b < a.length ? a.slice(a.length - b) : b > a.length ? Array(1 + (b - a.length)).join("0") + a : a
            };
            return this.php_js || (this.php_js = {}), this.php_js.uniqidSeed || (this.php_js.uniqidSeed = Math.floor(123456789 * Math.random())), this.php_js.uniqidSeed++, c = a, c += d(parseInt((new Date).getTime() / 1e3, 10), 8), c += d(this.php_js.uniqidSeed, 5), b && (c += (10 * Math.random()).toFixed(8).toString()), c
        }

        function o(a) {
            var b = {};
            return a.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(a, c, d, e) {
                b[c] = e
            }), b
        }

        function p(a) {
            if (x) try {} catch (b) {}
        }

        function q(a) {
            return a.substr(a.indexOf("://") + 3)
        }

        function r(a) {
            return null == a || "" == a ? a : a.split("?")[0].split("#")[0]
        }

        function s(a, b) {
            var c = new Date,
                d = c.getTime();
            return d - a > b ? !0 : !1
        }

        function t(a) {
            return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }

        function u(a, b) {
            var c = !1,
                d = document.styleSheets[document.styleSheets.length - 1];
            if (null != d) {
                var e = void 0 != d.cssRules ? d.cssRules : d.rules;
                null != e && (d.insertRule ? (d.insertRule(a + "{" + b + "}", e.length), c = !0) : d.addRule && (d.addRule(a, b, e.length), c = !0))
            }
            if (!c) {
                var f = document.getElementsByTagName("head")[0],
                    g = document.createElement("style");
                g.type = "text/css", g.styleSheet ? g.styleSheet.cssText = a + "{" + b + "}" : g.appendChild(document.createTextNode(a + "{" + b + "}")), f.appendChild(g)
            }
        }

        function v() {
            var a = new Date;
            return a.getHours() + ":" + a.getMinutes()
        }

        function w() {
            var a = "";
            return "undefined" != typeof DY.recommendationContext && (a = DYJSON.stringify(DY.recommendationContext)), a
        }
        var x = !1,
            y = !0,
            z = !1,
            A = "2.12007";
        return {
            prod: y,
            debug: x,
            startSiteTimer: d,
            stopSiteTimer: e,
            startAdHoverTimer: f,
            stopAdHoverTimer: g,
            monitorAdClick: j,
            getFrequency: l,
            hash: b,
            getUID: m,
            retry: c,
            checkCall: k,
            parseQuery: o,
            log: p,
            removeHttp: q,
            verifyInterval: s,
            stripQueryStringAndHashFromPath: r,
            efr: t,
            addCss: u,
            lts: v,
            sop: "dy_smart",
            ver: a,
            getCtx: w
        }
    }(), DY.ExpUtils = function() {
        function a(a, d, e, f, g) {
            try {
                if ("undefined" != typeof e && null != e && e.length > 0 && "undefined" != typeof g && null != g && "undefined" != typeof g.method) {
                    if (g.method == t && a !== x) return;
                    if (g.method == u && a !== y) return;
                    if (g.method == v && a !== z) return;
                    if (g.method == w && a !== z) return;
                    var h = DY.StorageUtils.get(n, ["localStorage"]),
                        i = new Array;
                    "undefined" != typeof h && "" != h && null != h && (i = h.split(o));
                    for (var j = !1, k = 0; k < i.length; k++) {
                        var l = i[k].split(p);
                        if (d == l[0]) {
                            if (g.method == u && e == l[1]) {
                                var m = l[2].split(r),
                                    q = b(m.concat(f));
                                i[k] = c(d, e, q, g)
                            } else i[k] = c(d, e, f, g);
                            j = !0;
                            break
                        }
                    }
                    j || (i.push(c(d, e, f, g)), j = !0), DY.StorageUtils.set(n, i.join(o), ["localStorage"], {
                        domain: DY.StorageUtils.getSecondLevelDomain()
                    })
                }
            } catch (s) {}
        }

        function b(a) {
            for (var b = a.concat(), c = 0; c < b.length; ++c)
                for (var d = c + 1; d < b.length; ++d) b[c] === b[d] && b.splice(d--, 1);
            return b
        }

        function c(a, b, c, e) {
            var f = d(e),
                h = a + p + b + p + c.join(r) + p + g + p + f;
            return h
        }

        function d(a) {
            var b = (new Date).getTime(),
                c = "" + a.sesLoadSeq + q + b;
            return c
        }
        var e = "0",
            f = "1",
            g = "2",
            h = "0",
            i = "1",
            j = "2",
            k = "3",
            l = "4",
            m = "_dyexps",
            n = "_dy_att_exps",
            o = "##",
            p = "|",
            q = ":",
            r = ",",
            s = "-1",
            t = "0",
            u = "1",
            v = "2",
            w = "3",
            x = "get",
            y = "ri",
            z = "c";
        return {
            expSep: o,
            dataSep: p,
            verSep: q,
            variSep: r,
            notInExp: s,
            storageKey: m,
            storageAttKey: n,
            SELECTION_AND_ATTRIBUTION: e,
            SELECTION: f,
            ATTRIBUTION: g,
            SUB_MECHANISM_NA: h,
            SUB_MECHANISM_CG_WITH_PREDICT: i,
            SUB_MECHANISM_CG_WITHOUT_PREDICT: j,
            SUB_MECHANISM_REWEIGHT_EXPLORE: k,
            SUB_MECHANISM_REWEIGHT_KICK_IN: l,
            IMPLICIT_ATTRIBUTION: t,
            ATTRIBUTION_AFTER_RI: u,
            ATTRIBUTION_AFTER_C: v,
            EXPLICIT_ATTRIBUTION: w,
            DECISION_EVENT: x,
            IMPRESSION_EVENT: y,
            CONVERSION_EVENT: z,
            attributeVariationsExplicitly: a
        }
    }(),
    function(a) {
        "use strict";
        var b = function(a, b, c) {
            this.low = 0 | a, this.high = 0 | b, this.unsigned = !!c
        };
        b.isLong = function(a) {
            return (a && a instanceof b) === !0
        };
        var c = {},
            d = {};
        b.fromInt = function(a, e) {
            var f, g;
            return e ? (a >>>= 0, a >= 0 && 256 > a && (g = d[a]) ? g : (f = new b(a, 0 > (0 | a) ? -1 : 0, !0), a >= 0 && 256 > a && (d[a] = f), f)) : (a = 0 | a, a >= -128 && 128 > a && (g = c[a]) ? g : (f = new b(a, 0 > a ? -1 : 0, !1), a >= -128 && 128 > a && (c[a] = f), f))
        }, b.fromNumber = function(a, c) {
            return c = !!c, isNaN(a) || !isFinite(a) ? b.ZERO : !c && -i >= a ? b.MIN_VALUE : !c && a + 1 >= i ? b.MAX_VALUE : c && a >= h ? b.MAX_UNSIGNED_VALUE : 0 > a ? b.fromNumber(-a, c).negate() : new b(a % g | 0, a / g | 0, c)
        }, b.fromBits = function(a, c, d) {
            return new b(a, c, d)
        }, b.fromString = function(a, c, d) {
            if (0 === a.length) throw Error("number format error: empty string");
            if ("NaN" === a || "Infinity" === a || "+Infinity" === a || "-Infinity" === a) return b.ZERO;
            if ("number" == typeof c && (d = c, c = !1), d = d || 10, 2 > d || d > 36) throw Error("radix out of range: " + d);
            var e;
            if ((e = a.indexOf("-")) > 0) throw Error('number format error: interior "-" character: ' + a);
            if (0 === e) return b.fromString(a.substring(1), c, d).negate();
            for (var f = b.fromNumber(Math.pow(d, 8)), g = b.ZERO, h = 0; h < a.length; h += 8) {
                var i = Math.min(8, a.length - h),
                    j = parseInt(a.substring(h, h + i), d);
                if (8 > i) {
                    var k = b.fromNumber(Math.pow(d, i));
                    g = g.multiply(k).add(b.fromNumber(j))
                } else g = g.multiply(f), g = g.add(b.fromNumber(j))
            }
            return g.unsigned = c, g
        }, b.fromValue = function(a) {
            return "number" == typeof a ? b.fromNumber(a) : "string" == typeof a ? b.fromString(a) : b.isLong(a) ? a : new b(a.low, a.high, a.unsigned)
        };
        var e = 65536,
            f = 1 << 24,
            g = e * e,
            h = g * g,
            i = h / 2,
            j = b.fromInt(f);
        b.ZERO = b.fromInt(0), b.UZERO = b.fromInt(0, !0), b.ONE = b.fromInt(1), b.UONE = b.fromInt(1, !0), b.NEG_ONE = b.fromInt(-1), b.MAX_VALUE = b.fromBits(-1, 2147483647, !1), b.MAX_UNSIGNED_VALUE = b.fromBits(-1, -1, !0), b.MIN_VALUE = b.fromBits(0, -2147483648, !1), b.prototype.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low
        }, b.prototype.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * g + (this.low >>> 0) : this.high * g + (this.low >>> 0)
        }, b.prototype.toString = function(a) {
            if (a = a || 10, 2 > a || a > 36) throw RangeError("radix out of range: " + a);
            if (this.isZero()) return "0";
            var c;
            if (this.isNegative()) {
                if (this.equals(b.MIN_VALUE)) {
                    var d = b.fromNumber(a),
                        e = this.div(d);
                    return c = e.multiply(d).subtract(this), e.toString(a) + c.toInt().toString(a)
                }
                return "-" + this.negate().toString(a)
            }
            var f = b.fromNumber(Math.pow(a, 6), this.unsigned);
            c = this;
            for (var g = "";;) {
                var h = c.div(f),
                    i = c.subtract(h.multiply(f)).toInt() >>> 0,
                    j = i.toString(a);
                if (c = h, c.isZero()) return j + g;
                for (; j.length < 6;) j = "0" + j;
                g = "" + j + g
            }
        }, b.prototype.getHighBits = function() {
            return this.high
        }, b.prototype.getHighBitsUnsigned = function() {
            return this.high >>> 0
        }, b.prototype.getLowBits = function() {
            return this.low
        }, b.prototype.getLowBitsUnsigned = function() {
            return this.low >>> 0
        }, b.prototype.getNumBitsAbs = function() {
            if (this.isNegative()) return this.equals(b.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
            for (var a = 0 != this.high ? this.high : this.low, c = 31; c > 0 && 0 == (a & 1 << c); c--);
            return 0 != this.high ? c + 33 : c + 1
        }, b.prototype.isZero = function() {
            return 0 === this.high && 0 === this.low
        }, b.prototype.isNegative = function() {
            return !this.unsigned && this.high < 0
        }, b.prototype.isPositive = function() {
            return this.unsigned || this.high >= 0
        }, b.prototype.isOdd = function() {
            return 1 === (1 & this.low)
        }, b.prototype.isEven = function() {
            return 0 === (1 & this.low)
        }, b.prototype.equals = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), this.unsigned !== a.unsigned && this.high >>> 31 === 1 && a.high >>> 31 === 1 ? !1 : this.high === a.high && this.low === a.low
        }, b.prototype.notEquals = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), !this.equals(a)
        }, b.prototype.lessThan = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), this.compare(a) < 0
        }, b.prototype.lessThanOrEqual = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), this.compare(a) <= 0
        }, b.prototype.greaterThan = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), this.compare(a) > 0
        }, b.prototype.greaterThanOrEqual = function(a) {
            return this.compare(a) >= 0
        }, b.prototype.compare = function(a) {
            if (this.equals(a)) return 0;
            var b = this.isNegative(),
                c = a.isNegative();
            return b && !c ? -1 : !b && c ? 1 : this.unsigned ? a.high >>> 0 > this.high >>> 0 || a.high === this.high && a.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.subtract(a).isNegative() ? -1 : 1
        }, b.prototype.negate = function() {
            return !this.unsigned && this.equals(b.MIN_VALUE) ? b.MIN_VALUE : this.not().add(b.ONE)
        }, b.prototype.add = function(a) {
            b.isLong(a) || (a = b.fromValue(a));
            var c = this.high >>> 16,
                d = 65535 & this.high,
                e = this.low >>> 16,
                f = 65535 & this.low,
                g = a.high >>> 16,
                h = 65535 & a.high,
                i = a.low >>> 16,
                j = 65535 & a.low,
                k = 0,
                l = 0,
                m = 0,
                n = 0;
            return n += f + j, m += n >>> 16, n &= 65535, m += e + i, l += m >>> 16, m &= 65535, l += d + h, k += l >>> 16, l &= 65535, k += c + g, k &= 65535, b.fromBits(m << 16 | n, k << 16 | l, this.unsigned)
        }, b.prototype.subtract = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), this.add(a.negate())
        }, b.prototype.multiply = function(a) {
            if (this.isZero()) return b.ZERO;
            if (b.isLong(a) || (a = b.fromValue(a)), a.isZero()) return b.ZERO;
            if (this.equals(b.MIN_VALUE)) return a.isOdd() ? b.MIN_VALUE : b.ZERO;
            if (a.equals(b.MIN_VALUE)) return this.isOdd() ? b.MIN_VALUE : b.ZERO;
            if (this.isNegative()) return a.isNegative() ? this.negate().multiply(a.negate()) : this.negate().multiply(a).negate();
            if (a.isNegative()) return this.multiply(a.negate()).negate();
            if (this.lessThan(j) && a.lessThan(j)) return b.fromNumber(this.toNumber() * a.toNumber(), this.unsigned);
            var c = this.high >>> 16,
                d = 65535 & this.high,
                e = this.low >>> 16,
                f = 65535 & this.low,
                g = a.high >>> 16,
                h = 65535 & a.high,
                i = a.low >>> 16,
                k = 65535 & a.low,
                l = 0,
                m = 0,
                n = 0,
                o = 0;
            return o += f * k, n += o >>> 16, o &= 65535, n += e * k, m += n >>> 16, n &= 65535, n += f * i, m += n >>> 16, n &= 65535, m += d * k, l += m >>> 16, m &= 65535, m += e * i, l += m >>> 16, m &= 65535, m += f * h, l += m >>> 16, m &= 65535, l += c * k + d * i + e * h + f * g, l &= 65535, b.fromBits(n << 16 | o, l << 16 | m, this.unsigned)
        }, b.prototype.div = function(a) {
            if (b.isLong(a) || (a = b.fromValue(a)), a.isZero()) throw new Error("division by zero");
            if (this.isZero()) return this.unsigned ? b.UZERO : b.ZERO;
            var c, d, e;
            if (this.equals(b.MIN_VALUE)) {
                if (a.equals(b.ONE) || a.equals(b.NEG_ONE)) return b.MIN_VALUE;
                if (a.equals(b.MIN_VALUE)) return b.ONE;
                var f = this.shiftRight(1);
                return c = f.div(a).shiftLeft(1), c.equals(b.ZERO) ? a.isNegative() ? b.ONE : b.NEG_ONE : (d = this.subtract(a.multiply(c)), e = c.add(d.div(a)))
            }
            if (a.equals(b.MIN_VALUE)) return this.unsigned ? b.UZERO : b.ZERO;
            if (this.isNegative()) return a.isNegative() ? this.negate().div(a.negate()) : this.negate().div(a).negate();
            if (a.isNegative()) return this.div(a.negate()).negate();
            for (e = b.ZERO, d = this; d.greaterThanOrEqual(a);) {
                c = Math.max(1, Math.floor(d.toNumber() / a.toNumber()));
                for (var g = Math.ceil(Math.log(c) / Math.LN2), h = 48 >= g ? 1 : Math.pow(2, g - 48), i = b.fromNumber(c), j = i.multiply(a); j.isNegative() || j.greaterThan(d);) c -= h, i = b.fromNumber(c, this.unsigned), j = i.multiply(a);
                i.isZero() && (i = b.ONE), e = e.add(i), d = d.subtract(j)
            }
            return e
        }, b.prototype.modulo = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), this.subtract(this.div(a).multiply(a))
        }, b.prototype.not = function() {
            return b.fromBits(~this.low, ~this.high, this.unsigned)
        }, b.prototype.and = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), b.fromBits(this.low & a.low, this.high & a.high, this.unsigned)
        }, b.prototype.or = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), b.fromBits(this.low | a.low, this.high | a.high, this.unsigned)
        }, b.prototype.xor = function(a) {
            return b.isLong(a) || (a = b.fromValue(a)), b.fromBits(this.low ^ a.low, this.high ^ a.high, this.unsigned)
        }, b.prototype.shiftLeft = function(a) {
            return b.isLong(a) && (a = a.toInt()), 0 === (a &= 63) ? this : 32 > a ? b.fromBits(this.low << a, this.high << a | this.low >>> 32 - a, this.unsigned) : b.fromBits(0, this.low << a - 32, this.unsigned)
        }, b.prototype.shiftRight = function(a) {
            return b.isLong(a) && (a = a.toInt()), 0 === (a &= 63) ? this : 32 > a ? b.fromBits(this.low >>> a | this.high << 32 - a, this.high >> a, this.unsigned) : b.fromBits(this.high >> a - 32, this.high >= 0 ? 0 : -1, this.unsigned)
        }, b.prototype.shiftRightUnsigned = function(a) {
            if (b.isLong(a) && (a = a.toInt()), a &= 63, 0 === a) return this;
            var c = this.high;
            if (32 > a) {
                var d = this.low;
                return b.fromBits(d >>> a | c << 32 - a, c >>> a, this.unsigned)
            }
            return 32 === a ? b.fromBits(c, 0, this.unsigned) : b.fromBits(c >>> a - 32, 0, this.unsigned)
        }, b.prototype.toSigned = function() {
            return this.unsigned ? new b(this.low, this.high, !1) : this
        }, b.prototype.toUnsigned = function() {
            return this.unsigned ? this : new b(this.low, this.high, !0)
        }, a.Long = b
    }(DY), DY.Predict = function() {
        function a(a, b) {
            return a + k + b
        }

        function b(b, c, d) {
            var e = a(c, d);
            if ("undefined" != typeof b && null != b) {
                if (b.hasOwnProperty(e)) {
                    var f = b[e];
                    return f
                }
                return n
            }
            return m
        }

        function c() {
            var b = {};
            if ("undefined" != typeof DY.prd && null != DY.prd) {
                for (var c = 0; c < DY.prd.length; c++) {
                    var d = DY.prd[c],
                        e = a(d.expId, d.verId);
                    b[e] = d.vars
                }
                return b
            }
        }

        function d() {
            var b = {};
            if ("undefined" != typeof DY.prd && null != DY.prd) {
                for (var c = 0; c < DY.prd.length; c++) {
                    var d = DY.prd[c],
                        e = a(d.expId, d.verId),
                        f = o(d.vars, d.smech);
                    b[e] = f
                }
                return b
            }
        }

        function e(a, c) {
            var e = d(),
                f = b(e, a, c);
            return f == m ? void 0 : f == n ? [] : f
        }

        function f(a, c) {
            var d = window.DY.StorageUtils.get(j, ["localStorage"]);
            if ("undefined" != typeof d && null != d && "" != d) {
                var e = window.DY.StringUtils.pkv(d),
                    f = b(e, a, c);
                if (f == m) return null;
                if (f == n) {
                    var g = o([], null);
                    return g
                }
                var h = window.DY.StringUtils.pkv(f),
                    g = o(null, null);
                return "undefined" != typeof h.varIdArr && null != h.varIdArr && h.varIdArr.length > 0 && (g.varIdArr = h.varIdArr.split(l)), "undefined" != typeof h.smechArr && null != h.smechArr && h.smechArr.length > 0 && (g.smechArr = h.smechArr.split(l)), g
            }
            return null
        }

        function g() {
            try {
                var a = d();
                if ("undefined" != typeof a && null != a) {
                    var b = window.DY.StringUtils.skv(a);
                    window.DY.StorageUtils.set(j, b, ["localStorage"])
                } else window.DY.StorageUtils.remove(j, ["localStorage"]);
                var e = c();
                if ("undefined" != typeof e && null != e) {
                    var f = window.DY.StringUtils.skv(e);
                    window.DY.StorageUtils.set(i, f, ["localStorage"])
                } else window.DY.StorageUtils.remove(i, ["localStorage"])
            } catch (g) {}
        }

        function h(a, b) {
            try {
                var c = e(a, b);
                return null == c ? f(a, b) : c
            } catch (d) {}
        }
        var i = "_dyprd",
            j = "_dyprdobj",
            k = "|",
            l = ",",
            m = "NP",
            n = "NE",
            o = function(a, b) {
                var c = new Object;
                return c.varIdArr = "undefined" != typeof a ? a : null, c.smechArr = "undefined" != typeof b ? b : null, c.toString = function() {
                    return DY.StringUtils.skv({
                        varIdArr: this.varIdArr,
                        smechArr: this.smechArr
                    })
                }, c
            };
        return {
            updatePredictStorage: g,
            getPrediction: h
        }
    }(), document.dyQuerySelectorAll || ("function" == typeof document.querySelectorAll ? document.dyQuerySelectorAll = function() {
        return document.querySelectorAll.apply(document, arguments)
    } : function(a, b) {
        a = document, b = a.createStyleSheet(), a.dyQuerySelectorAll = function(c, d, e, f, g) {
            for (g = a.all, d = [], c = c.replace(/\[for\b/gi, "[htmlFor").split(","), e = c.length; e--;) {
                for (b.addRule(c[e], "k:v"), f = g.length; f--;) g[f].currentStyle.k && d.push(g[f]);
                b.removeRule(0)
            }
            return d
        }
    }()), document.dyQuerySelector || ("function" == typeof document.querySelector ? document.dyQuerySelector = function() {
        return document.querySelector.apply(document, arguments)
    } : document.dyQuerySelector = function(a) {
        return document.dyQuerySelectorAll(a)[0] || null
    }), DY.StorageUtils = function(a) {
        function b(a, b) {
            try {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) return !0;
                return !1
            } catch (d) {
                return !1
            }
        }

        function c(b) {
            return b !== a && null !== b
        }

        function d() {
            try {
                var a = document.domain.split(".");
                return a.length <= 2 || /^([0-9]+\.){3}[0-9]+$/.test(document.domain) ? document.domain : /[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(document.domain)[0]
            } catch (b) {
                return document.domain
            }
        }

        function e() {
            return null == q && (q = "undefined" != typeof DY && "undefined" != typeof DY.sst && DY.sst ? !1 : !0), q
        }

        function f(a, d, e) {
            if (!c(d)) return null;
            "string" == typeof d && (d = [d]), (k || !i("localStorage")) && (b(d, "cookieStorage") || b(d, "memoryStorage") || d.push("cookieStorage"));
            for (var f = 0; f < d.length; f++) {
                var g = m[d[f]].getItem(a, e);
                if (c(g)) return g
            }
            return null
        }

        function g(a, d, e, f) {
            if (c(e)) {
                "string" == typeof e && (e = [e]), (k || !i("localStorage")) && (b(e, "cookieStorage") || b(e, "memoryStorage") || e.push("cookieStorage"));
                for (var g = 0; g < e.length; g++) m[e[g]].setItem(a, d, f)
            }
        }

        function h(a, d, e) {
            if (!c(d)) return null;
            "string" == typeof d && (d = [d]), (k || !i("localStorage")) && (b(d, "cookieStorage") || b(d, "memoryStorage") || d.push("cookieStorage"));
            for (var f = 0; f < d.length; f++) m[d[f]].removeItem(a, e)
        }

        function i(a) {
            return n[a]
        }

        function j(a) {
            k = a
        }
        var k = !1,
            l = 30,
            m = {},
            n = {},
            o = {},
            p = function() {
                function a() {}
                return {
                    getItem: a,
                    setItem: a,
                    removeItem: a
                }
            }(),
            q = null;
        return m.localStorage = function() {
            if (!e()) return n.localStorage = !1, p;
            try {
                return window.localStorage.setItem("dy_______test", "1"), window.localStorage.getItem("dy_______test"), window.localStorage.removeItem("dy_______test"), n.localStorage = !0, window.localStorage
            } catch (a) {
                return n.localStorage = !1, p
            }
        }(), m.sessionStorage = function() {
            if (!e()) return n.sessionStorage = !1, p;
            try {
                return window.sessionStorage.setItem("dy_______test", "1"), window.sessionStorage.getItem("dy_______test"), window.sessionStorage.removeItem("dy_______test"), n.sessionStorage = !0, window.sessionStorage
            } catch (a) {
                return n.sessionStorage = !1, p
            }
        }(), m.memoryStorage = function() {
            function a(a) {
                return o[a]
            }

            function b(a, b) {
                return o[a] = b
            }

            function c(a) {
                delete o[a]
            }
            return n.memoryStorage = !0, {
                getItem: function(b, c) {
                    return a(b)
                },
                setItem: function(a, c, d) {
                    return b(a, c)
                },
                removeItem: function(a, b) {
                    return c(a)
                }
            }
        }(), m.cookieStorage = function() {
            function a() {
                try {
                    var a = navigator.cookieEnabled ? !0 : !1;
                    return "undefined" != typeof navigator.cookieEnabled || a || (document.cookie = "testcookie", a = -1 != document.cookie.indexOf("testcookie") ? !0 : !1), a
                } catch (b) {
                    return !1
                }
            }

            function b(a, b) {
                var d = document.cookie.match(f(a));
                return c(d) ? b ? decodeURIComponent(d[1]) : d[1] : void 0
            }

            function d(a, b, c, d, e) {
                var f = new Date;
                f.setDate(f.getDate() + c), document.cookie = g(a, b, f.toGMTString(), d, e)
            }

            function e(a, d, e) {
                c(b(a)) && (document.cookie = g(a, "", "Thu, 01-Jan-1970 00:00:01 GMT", d, e))
            }
            if (!a()) return n.cookieStorage = !1, p;
            n.cookieStorage = !0;
            var f = function(a) {
                    return new RegExp("(?:^|;)\\s?" + a + "=(.*?)(?:;|$)", "i")
                },
                g = function(a, b, c, d, e) {
                    return a + "=" + encodeURIComponent(b) + (c ? ";expires=" + c : "") + (d ? ";path=" + d : "") + (e ? ";domain=" + e : ";domain=" + document.domain)
                };
            return {
                getItem: function(a, d) {
                    return d = d || {}, c(d.unescape) || (d.unescape = !0), b(a, d.unescape)
                },
                setItem: function(a, b, c) {
                    c = c || {};
                    var f = 0 === c.expire ? 0 : c.expire || l,
                        g = c.path || "/",
                        h = c.domain || document.domain;
                    try {
                        c.domain && c.domain !== document.domain && e(a, g, document.domain)
                    } catch (i) {}
                    return d(a, b, f, g, h)
                },
                removeItem: function(a, b) {
                    b = b || {};
                    var c = b.path || "/",
                        d = b.domain || document.domain;
                    try {
                        b.domain && b.domain !== document.domain && e(a, c, document.domain)
                    } catch (f) {}
                    return e(a, c, d)
                }
            }
        }(), {
            get: f,
            set: g,
            remove: h,
            enabled: i,
            getSecondLevelDomain: d,
            forceCookies: j
        }
    }(), DY.StringUtils = function() {
        function a(a) {
            for (var b = a.split("."), c = {}, d = 0; d < b.length; d++) {
                var e = b[d].split("@");
                c[e[0]] = "nu" == e[1] ? null : e[1].replace(/\%1\%/g, "@").replace(/\%0\%/g, ".")
            }
            return c
        }

        function b(a) {
            var b = [];
            for (var c in a) b.push(c + "@" + (null == a[c] ? "nu" : a[c].toString().replace(/\./g, "%0%").replace(/\@/g, "%1%")));
            return b.join(".")
        }

        function c(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }

        function d(a, b) {
            b || (b = location.href), a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var c = new RegExp("[\\?&]" + a + "=([^&#]*)"),
                d = c.exec(b);
            return null === d ? null : d[1]
        }
        return {
            pkv: a,
            skv: b,
            isN: c,
            getUrlParam: d
        }
    }(), DY.AdDetection = function() {
        function a() {
            var a = "";
            return a = "." + V
        }

        function b() {
            M = !1, top.focus()
        }

        function c() {
            DY.WindowActions.onUnHover("onAd"), N = !1
        }

        function d() {
            M = !0
        }

        function e() {
            DY.WindowActions.onHover("onAd"), O = this, N = !0
        }

        function f() {
            M && N && DY.DataCollection.visitClick(O, !1)
        }

        function g(a) {
            try {
                n("Ad >> CLICK " + a.which + "<< detected. "), 1 == a.which ? DY.WindowActions.onClick("onAd", this) : DY.WindowActions.onRightClick("onAd", this), h(this, a.which)
            } catch (b) {}
        }

        function h(b, c) {
            var d = $dy(b).parents(a());
            d.length > 0 && $dy(d).trigger({
                type: "mousedown",
                which: c
            })
        }

        function i(a) {
            var b = "";
            if (null != a && "undefined" != typeof a && "" != a)
                for (var c = a.split(" "), d = 0; d < c.length; d++)
                    if (c[d].length > 3 && ("dy_" == c[d].substring(0, 3) || "dy-" == c[d].substring(0, 3)) && "dy_unit" != c[d]) {
                        b = c[d].substring(3, c[d].length);
                        break
                    }
            return b
        }

        function j(b) {
            var c = !1,
                d = $dy(b).parents();
            if (d.hasClass(V)) {
                var e = $dy(b).parents(a());
                c = l(e[0]) ? !1 : !0
            }
            return c
        }

        function k(b) {
            var c = !1,
                d = a(),
                e = $dy(b).find(d);
            return e.length > 0 && (c = !0), c
        }

        function l(a) {
            var b = !1,
                c = $dy(a).attr("class");
            return "undefined" != typeof c && -1 !== c.indexOf(DY.Util.sop) && (b = !0), b
        }

        function m(a) {
            try {
                var b = $dy(a);
                if (b.position().top < 0) return !1;
                if (b.height() > 10) return !0;
                if (b.height() > 0) return !1;
                var c = !1;
                return b.find("*:visible").each(function() {
                    return $dy(this).height() > 10 ? (c = !0, !1) : void 0
                }), c
            } catch (d) {
                return !1
            }
        }

        function n(a) {}

        function o() {
            p(q)
        }

        function p(a) {
            $dy(document).ready(a)
        }

        function q() {
            r();
            var b = $dy('iframe[class*="dyMonitor"],[class*="dyMonitor"] iframe');
            t(b);
            var c = a(),
                d = $dy(c);
            x(d)
        }

        function r() {
            var a = C(),
                b = $dy(a).find("[data-" + T + "]");
            return u(a, b), DY.Util.log("marked" + a.length + "elements and " + b.length + "articles"), a
        }

        function s() {
            var a = r();
            t($dy(a).filter("iframe")), t($dy(a).find("iframe")), x(a), DY.DataCollection.isDone() && DY.DataCollection.li(DYWork.abd, a)
        }

        function t(a) {
            $dy(a).mouseover(d), $dy(a).mouseout(b), $dy(window).unbind("blur.dyiframe"), $dy(window).bind("blur.dyiframe", f)
        }

        function u(a, b) {
            $dy(b).mousedown(function(a) {
                n("Content >> CLICK " + a.which + "<< detected. ");
                try {
                    var b, c = $dy(a.target).closest("[data-" + T + "]"),
                        d = "",
                        e = "";
                    if (1 === c.length) {
                        if ("A" === c[0].tagName && "" !== c[0].getAttribute("href") && "#" !== c[0].getAttribute("href")) d = c[0].href;
                        else {
                            var f = c[0].getElementsByTagName("a");
                            if (f.length > 0) {
                                for (b = 0; b < f.length; b++)
                                    if ("" !== f[b].getAttribute("href") && "#" !== f[b].getAttribute("href")) {
                                        d = f[b].href;
                                        break
                                    }
                            } else {
                                var g = $dy(c[0]).closest("a");
                                g.length > 0 && "" !== g[0].getAttribute("href") && "#" !== g[0].getAttribute("href") && (d = g[0].href)
                            }
                        }
                        e = c[0].getAttribute("data-" + T), DY.DataCollection.setLink(d), DY.DataCollection.setPos(e)
                    }
                } catch (h) {}
            }), $dy(a).mouseover(e), $dy(a).mouseout(c), $dy(a).mousedown(g)
        }

        function v() {
            return {
                left: void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                top: void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
            }
        }

        function w() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight
            }
        }

        function x(a, b, c) {
            function d() {
                var a = v(),
                    c = w();
                a.bottom = a.top + c.height, a.right = a.left + c.width;
                for (var d = g.length - 1; d >= 0; d--) {
                    var e = g[d];
                    if ((e.elem.offsetWidth || e.elem.offsetHeight) && !(a.right < e.left || a.left > e.right || a.bottom < e.top || a.top > e.bottom)) {
                        var f = {
                            top: Math.min(1, (e.bottom - a.top) / e.height),
                            bottom: Math.min(1, (a.bottom - e.top) / e.height),
                            left: Math.min(1, (e.right - a.left) / e.width),
                            right: Math.min(1, (a.right - e.left) / e.width)
                        };
                        f.left * f.right >= .5 && f.top * f.bottom >= .5 && (b($dy(e.elem)), g.splice(d, 1))
                    }
                }
                0 === g.length && $dy(window).off(k)
            }
            "function" != typeof b && (b = DY.DataCollection.iv), "undefined" == typeof c && (c = !1);
            for (var e, f, g = [], h = v(), i = 0; i < a.length; i++)(a[i].offsetWidth || a[i].offsetHeight || c) && (z(a[i], !0) ? b(a[i]) : (e = a[i].getBoundingClientRect(), f = {
                elem: a[i],
                top: h.top + e.top,
                left: h.left + e.left,
                bottom: h.top + e.bottom,
                right: h.left + e.right
            }, f.height = f.bottom - f.top, f.width = f.right - f.left, g.push(f)));
            var j = null,
                k = "scroll.dy" + Math.random().toString().replace(".", "");
            d(), $dy(window).on(k, function() {
                clearTimeout(j), j = setTimeout(d, 150)
            })
        }

        function y(a, f) {
            f ? ($dy(a).mouseover(d), $dy(a).mouseout(b)) : ($dy(a).mouseover(e), $dy(a).mouseout(c), $dy(a).mousedown(function(a) {
                n("Ad >> CLICK " + a.which + "<< detected. "), 1 == a.which && DY.WindowActions.onClick("onAd", this)
            }))
        }

        function z(a, b) {
            var c = $dy(a).offset(),
                d = $dy(a).height(),
                e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            return c.top + d < e ? b : !b
        }

        function A(b) {
            var c = a(),
                d = $dy(c);
            if (b) {
                var e = document.createElement("div");
                e.id = "dyMarkCont", document.body.appendChild(e);
                for (var f = 0; f < d.length; f++) {
                    var g = document.createElement("div"),
                        h = i(d[f].className);
                    "" != h && (g.className = "MK" + h, g.style.width = $dy(d[f]).width() + "px", g.style.height = $dy(d[f]).height() + "px", g.style.top = $dy(d[f]).offset().top + "px", g.style.left = $dy(d[f]).offset().left + "px", document.getElementById("dyMarkCont").appendChild(g))
                }
            }
            return d
        }

        function B(a) {
            for (var b = 0; b < a.length; b++) try {
                var c = $dy(a[b]);
                if ("undefined" == typeof c || null == c || "" == c) continue;
                var d = $dy(a[b]).attr("data-adid");
                "undefined" == typeof d || "" == d ? $dy(a[b]).attr("data-adid", b + "||" + Math.round($dy(a[b]).offset().top) + "|||") : 1 == d.split("|").length ? $dy(a[b]).attr("data-adid", d + "||" + Math.round($dy(a[b]).offset().top) + "|||") : 2 == d.split("|").length && $dy(a[b]).attr("data-adid", d + "|" + Math.round($dy(a[b]).offset().top) + "|||")
            } catch (e) {}
        }

        function C() {
            var a = [];
            try {
                a = D(!1), B(a), W = !0
            } catch (b) {}
            return a
        }

        function D(a) {
            var b = [];
            try {
                b = G(a, b), b = H(a, b), b = F(a, b), b = E(a, b)
            } catch (c) {}
            return b
        }

        function E(a, b) {
            var c;
            c = $dy("[data-dy-unit]");
            for (var d = 0; d < c.length; d++)
                if (!$dy(c[d]).hasClass(V) && (l(c[d]) || m(c[d]))) {
                    var e = c[d].getAttribute("data-dy-unit");
                    if ("" != e) {
                        $dy(c[d]).attr("data-adid", e);
                        var f = c[d].getAttribute("data-dy-type");
                        if ("content" === f)
                            for (var g = $dy(c[d]).find("[data-dy-subunit]"), h = 0; h < g.length; h++) g[h].setAttribute("data-" + T, h + 1);
                        else("undefined" == typeof f || "" === f || null == f) && (f = "other");
                        $dy(c[d]).addClass("dy_unit dy" + f.toLowerCase() + " " + V), b.push(c[d])
                    }
                }
            return b
        }

        function F(a, b) {
            for (var c = $dy(U), d = 0; d < c.length; d++)
                if (!$dy(c[d]).hasClass(V) && (l(c[d]) || m(c[d]) && !j(c[d]) && !k(c[d]))) {
                    var e = c[d].id;
                    "" == e && (e = i(c[d].className));
                    var f = $dy(c[d]).parent();
                    if ($dy(c[d]).attr("data-adid", e), $dy(c[d]).addClass(Q + " " + V), b.push(c[d]), a) {
                        var g = document.createElement("div");
                        g.className = "MK" + P, g.style.width = $dy(c[d]).width() + "px", g.style.height = $dy(c[d]).height() + "px", "undefined" != typeof $dy(iframes[d]).offset() && (g.style.top = $dy(c[d]).offset().top + "px", g.style.left = $dy(c[d]).offset().left + "px"), f[0].appendChild(g)
                    }
                }
            return b
        }

        function G(a, b) {
            if ("undefined" != typeof DY.adUrlSelectors && DY.adUrlSelectors.length > 0)
                for (var c = DY.adUrlSelectors, d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = DY.Util.removeHttp(DY.Detectors.loc);
                    "start" == e.urlMatchType && f.substring(0, e.url.length) == e.url ? I(e, b, a) : "ex" == e.urlMatchType && f == e.url && I(e, b, a)
                }
            return b
        }

        function H(a, b) {
            if ("undefined" != typeof DY.adSelectors && DY.adSelectors.length > 0)
                for (var c = DY.adSelectors, d = 0; d < c.length; d++) {
                    var e = c[d];
                    I(e, b, a)
                }
            return b
        }

        function I(a, b, c) {
            var d = [];
            try {
                if (d = $dy(a.selector), d.length > 0)
                    for (var e = 0; e < d.length; e++) {
                        var f = $dy(d[e]);
                        if (!f.hasClass(V)) {
                            if (a.type == R) {
                                f.attr("data-" + S, a.slot);
                                var g = [];
                                g = "undefined" != typeof a.aSelector && "" != a.aSelector ? f.find(a.aSelector) : f.find("a");
                                for (var h = 0; h < g.length; h++) g[h].setAttribute("data-" + T, h + 1)
                            }
                            f.addClass(a.type + " " + V), f.attr("data-adid", a.slot), b.push(d[e])
                        }
                    }
            } catch (i) {}
            if (c) {
                var j = document.createElement("div");
                j.className = "MK" + a.type, j.style.width = $dy(d).width() + "px", j.style.height = $dy(d).height() + "px", "undefined" != typeof $dy(d).offset() && (j.style.top = $dy(d).offset().top + "px", j.style.left = $dy(d).offset().left + "px");
                var k = $dy(d).parent();
                k[0].appendChild(j)
            }
            return b
        }

        function J(a) {
            var b = $dy(a),
                c = {};
            b.on("dyexpuclick", function(a, c) {
                var d = b.attr("data-dy-exp-id"),
                    e = b.attr("data-dy-ver-data"),
                    f = b.attr("data-dy-att-method"),
                    g = b.attr("data-dy-att-seq"),
                    h = {
                        method: f,
                        sesLoadSeq: g
                    };
                DY.ServerUtil.logVariation_new("c", d, c, h, e)
            }).on("dyexpurimp", function(a, d) {
                for (var e = [], f = 0; f < d.length; f++) c.hasOwnProperty(d[f].id) || c.hasOwnProperty(d[f]) || e.push(d[f]);
                if (e.length > 0) {
                    var g = b.attr("data-dy-att-method"),
                        h = b.attr("data-dy-att-seq"),
                        i = {
                            method: g,
                            sesLoadSeq: h
                        };
                    DY.ServerUtil.logVariation_new("ri", b.attr("data-dy-exp-id"), e, i, b.attr("data-dy-ver-data"))
                }
                for (var f = 0; f < e.length; f++) c[e[f].id || e[f]] = 1
            })
        }

        function K(a, b, c, d, e, f, g) {
            var h = $dy(a);
            h.attr("data-dy-exp-id", b), h.attr("data-dy-var-id", c), h.attr("data-dy-var-idx", f), h.attr("data-dy-ver-data", e), "undefined" != typeof g && null != g && (h.attr("data-dy-att-method", g.method), h.attr("data-dy-att-seq", g.sesLoadSeq)), d || s()
        }

        function L(a, b, c, d, e, f, g) {
            K(a, b, c, d, f, g)
        }
        var M = !1,
            N = !1,
            O = "",
            P = "dygoogad",
            Q = "dyother",
            R = "dycontent",
            S = "dy-content",
            T = "dy-article",
            U = ".dy_unit,.dy-unit,.dyunit",
            V = "dyMonitor",
            W = !1;
        return {
            is: y,
            mark: C,
            dd: A,
            da: D,
            execute: o,
            dycls: a,
            ne: s,
            monitorExpUnit: J,
            markExpUnit: L,
            markExpUnit_legacy: L,
            markExpUnit_new: K,
            cmark: r,
            monitorInView: x
        }
    }(), DY.ArticleExp = function() {
        function a(d, e, f) {
            if (3 === d.nodeType) b(d, e, f);
            else if (c(d, e, f), d = d.firstChild)
                do a(d, e, f); while (d = d.nextSibling)
        }

        function b(a, b, c) {
            a.textContent || a.innerText;
            if (a.textContent.trim() == b) {
                var d = new RegExp(DY.Util.efr(b), "g");
                a.textContent = a.textContent.replace(d, c)
            }
        }

        function c(a, b, c, d) {
            if (a.attributes)
                for (var e = 0; e < a.attributes.length; e++) a.attributes[e].textContent == b ? a.attributes[e].textContent = c : "" != r.imgRegexp && "img" == d && a.attributes[e].textContent.indexOf(b) > -1 && (a.attributes[e].textContent = a.attributes[e].textContent.replace(b, c))
        }

        function d(a, b, c) {
            if (null != c) {
                var d = b.img.match(c);
                if (null != d && a.outerHTML.indexOf(d[0]) > -1) return !0
            } else if (a.outerHTML.indexOf(b.img) > -1) return !0;
            return !1
        }

        function e() {
            if (s) return r;
            var a = [];
            try {
                if (DY.fpExp.length > 0) {
                    for (var b = 0; b < DY.fpExp.length; b++)
                        if (DY.fpExp[b].fpurl == DY.Detectors.loc) {
                            a = DY.fpExp[b], s = !0;
                            break
                        }
                } else DY.fpExp.fpurl == DY.Detectors.loc && (a = DY.fpExp, s = !0)
            } catch (c) {}
            return a
        }

        function f(a, b, c) {
            return "" === a || 0 === b || 0 === c || r.rawimg || r.imgRegex ? a : "http://images.dynamicyield.com/image/fetch/f_jpg,q_100,c_fill,g_face,e_sharpen,w_" + b + ",h_" + c + "/" + encodeURIComponent(a)
        }

        function g(b, e, g, h, i) {
            for (var j = document.querySelectorAll("[" + u + '="' + b + '"] [' + v + "]"), k = 0; k < j.length; k++) {
                var l = j[k].getAttribute(v);
                if (!(l.split(".").length > 1)) try {
                    var m = !1,
                        n = !1,
                        o = !1,
                        p = [];
                    "A" == j[k].tagName ? p.push(j[k]) : p = j[k].getElementsByTagName("a");
                    for (var q = 0; q < p.length; q++) p[q].innerHTML == g.title ? (i || (p[q].innerHTML = h.title), m = !0) : p[q].innerHTML.indexOf(g.title) > -1 && (i || a(p[q], g.title, h.title), m = !0);
                    var s = !1;
                    if ("" != g.img && g.img != h.img) {
                        var t = j[k].getElementsByTagName("img"),
                            w = "";
                        "" != r.imgRegex && (w = new RegExp(r.imgRegex));
                        for (var x = 0; x < t.length; x++)
                            if (s = d(t[x], g, w)) {
                                if (!i && "" !== h.img) {
                                    var y = t[x].width,
                                        z = t[x].height,
                                        A = h.img;
                                    if (0 != y && 0 != z && (A = f(h.img, y, z)), "" != r.imgRegex) {
                                        var B = g.img.match(w),
                                            C = A.match(w);
                                        null != B && null != C && c(t[x], B[0], C[0], "img")
                                    } else c(t[x], g.img, A)
                                }
                                n = !0
                            }
                    }
                    if ("undefined" != typeof g.catchline && "undefined" != typeof h.catchline && "" !== g.catchline && g.catchline !== h.catchline && j[k].outerHTML.indexOf(g.catchline) > -1 && (a(j[k], g.catchline, h.catchline), o = !0), n || m || o) {
                        var l = j[k].getAttribute(v);
                        return j[k].setAttribute(v, l + "." + r[b][e].expid + "." + h.id), r[b][e].varset = h.id, !0
                    }
                } catch (D) {
                    DY.Util.log("exception when setting up variation")
                }
            }
        }

        function h(a) {
            DY.Util.log("ARTICLE EXP :: " + a)
        }

        function i(a, b) {
            for (var c = "", d = 0; d < r[a][b].variations.length; d++) c += r[a][b].variations[d].title, c += r[a][b].variations[d].img;
            return c += r[a][b].soriginal.title, c += r[a][b].soriginal.img, DY.Util.hash(c)
        }

        function j(a, b, c) {
            var d = null,
                e = DY.StorageUtils.get(a + ":" + b, ["sessionStorage"]);
            if (null != e && "undefined" != typeof e) {
                var f = DY.StorageUtils.get(a + ":" + b + ":hash", ["sessionStorage"]),
                    g = i(a, b);
                if ("undefined" != typeof f && null !== f && f == g) try {
                    "0" === e && (h("returned default variation from storage for " + a + ":" + b), r[a][b].soriginal.lost || (d = c ? r[a][b].soriginal : {
                        id: 0
                    }));
                    for (var j = 0; j < r[a][b].variations.length; j++)
                        if (r[a][b].variations[j].id == e) {
                            d = r[a][b].variations[j], h("got variation " + d.id + " from storage for " + a + ":" + b);
                            break
                        }
                    null === d && (DY.StorageUtils.remove(a + ":" + b, ["sessionStorage"]), DY.StorageUtils.remove(a + ":" + b + ":hash", ["sessionStorage"]), h("removed obsolete position from storage for " + a + ":" + b))
                } catch (k) {
                    h(k)
                } else DY.StorageUtils.remove(a + ":" + b, ["sessionStorage"]), DY.StorageUtils.remove(a + ":" + b + ":hash", ["sessionStorage"]), h("removed obsolete position and hash from storage for " + a + ":" + b)
            }
            return d
        }

        function k(a, b) {
            var c = null,
                d = 1,
                e = r[a][b].soriginal;
            try {
                var f = r[a][b].variations;
                "undefined" != typeof e && "undefined" != typeof e.lost && (d = 0);
                var g = Math.floor(Math.random() * (f.length + d));
                c = f.length > 0 ? 0 == g && 1 == d ? r[a][b].soriginal : r[a][b].variations[g - d] : 1 == d ? r[a][b].soriginal : null
            } catch (i) {
                h(i.message)
            }
            return c
        }

        function l(a, b, c) {
            var d = null;
            if ("undefined" != typeof r[a][b].varset) return h("skipped " + a + ":" + b), r[a][b].varset;
            var e = j(a, b, c);
            if (null === e && (e = k(a, b)), null !== e) {
                if (c) return DY.StorageUtils.set(a + ":" + b, e.id, ["sessionStorage"]),
                    DY.StorageUtils.set(a + ":" + b + ":hash", i(a, b), ["sessionStorage"]), r[a][b].varset = e.id, e;
                var f = !1;
                0 == e.id && (f = !0), d = g(a, b, r[a][b].soriginal, e, f), d ? (h("setup " + a + ":" + b + ":" + e.id), DY.StorageUtils.set(a + ":" + b, e.id, ["sessionStorage"]), DY.StorageUtils.set(a + ":" + b + ":hash", i(a, b), ["sessionStorage"])) : h("original not found for " + a + ":" + b)
            } else h("no variation to set for " + a + ":" + b), DY.StorageUtils.remove(a + ":" + b, ["sessionStorage"]), DY.StorageUtils.remove(a + ":" + b + ":hash", ["sessionStorage"]);
            return d
        }

        function m(a) {
            if (DY.Detectors.ua().crawler || a) {
                if (a) return n()
            } else o()
        }

        function n() {
            try {
                var a = {};
                for (var b in r)
                    if (r.hasOwnProperty(b) && "fpurl" !== b)
                        for (var c in r[b])
                            if (r[b].hasOwnProperty(c)) {
                                var d = b + "|" + r[b][c].href;
                                a[d] = l(b, c, !0)
                            }
                return a
            } catch (e) {}
        }

        function o() {
            try {
                r = e();
                for (var a in r)
                    if (r.hasOwnProperty(a) && "fpurl" !== a)
                        for (var b in r[a]) r[a].hasOwnProperty(b) && l(a, b)
            } catch (c) {}
        }

        function p() {
            try {
                if (r && !t) {
                    for (var a = [], b = document.querySelectorAll("[" + u + "]"), c = 0; c < b.length; c++)
                        for (var d = b[c].getAttribute(u), e = b[c].querySelectorAll("[" + v + "]"), f = 0; f < e.length; f++) {
                            var g = e[f].getAttribute(v).split(".");
                            g.length > 1 && a.push([parseInt(d), parseInt(g[0]), parseInt(g[1]), parseInt(g[2])])
                        }
                    a.length > 0 && (DY.ServerUtil.logArtVariation(r.fpurl, DYJSON.stringify(a)), t = !0)
                }
            } catch (h) {
                DY.Util.log("exception when logging variations")
            }
        }

        function q(a) {
            delete a.unitMap, r = a, s = !0
        }
        var r = [],
            s = !1,
            t = !1,
            u = "data-dy-content",
            v = "data-dy-article";
        return {
            logVariations: p,
            execute: m,
            choose: l,
            exps: e,
            setExps: q
        }
    }(), DY.Audiences = function() {
        function a() {
            y || (DY.StorageUtils.remove("_dyaud_nchc", ["cookieStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            }), DY.StorageUtils.remove("_dyaud_page", ["cookieStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            }), DY.StorageUtils.remove("_dyaud_sess", ["cookieStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            }));
            var a = !1;
            null == x.loadSessionCookies() && (j(), a = !0), null == x.loadPageCookies() || null == x.loadCHCCookies() ? (k(), a = !0) : (a = l() || a, y || (m(), n(), a = !0)), y || (a = b() || a), y = !0, a && q()
        }

        function b() {
            if ("object" == typeof DY.audTCHC && "object" == typeof DY.audYCHC && "object" == typeof DY.audSCHC && "object" == typeof DY.audTAuds && "object" == typeof DY.audYAuds) {
                var a, b, c, d, f;
                if (DY.vu) {
                    var g = x.loadCHCCookies(),
                        h = x.loadSessionCookies();
                    a = g.auds, b = g.tchc, c = g.audCache, d = h.schc, f = h.saudCache
                }
                x.saveSessionCookies({
                    saudCache: {},
                    schc: DY.audSCHC
                });
                var i = DY.audTCHC,
                    j = x.loadPageCookies().ldart.substr(0, 10);
                if (j != e())
                    for (var k in DY.audYCHC) i[k] = (i[k] || 0) + DY.audYCHC[k];
                var l = {},
                    m = x.loadCHCCookies().audCache;
                for (var n in m) null === m[n] && (l[n] = null);
                for (var o = 0; o < DY.audTAuds.length; o++) l[DY.audTAuds[o]] = null;
                if (j != e())
                    for (var o = 0; o < DY.audYAuds.length; o++) l[DY.audYAuds[o]] = null;
                var p = [];
                for (var n in l) null === l[n] && p.push(n);
                return DY.ServerUtil.logVerbose("aud", ["tschc", [a, b, c, d, f],
                    [p, i, l, DY.audSCHC, {}],
                    [DY.audTAuds, DY.audYAuds, j != e()]
                ]), x.saveCHCCookies({
                    auds: p,
                    audCache: l,
                    tchc: i
                }), !0
            }
            return DY.ServerUtil.logVerbose("aud", ["tschc error", [],
                []
            ]), !1
        }

        function c(a) {
            var b, c = 0;
            if (0 == a.length) return c;
            for (b = 0; b < a.length; b++) {
                var d = a.charCodeAt(b);
                c = (c << 5) - c + d, c &= c
            }
            return c
        }

        function d(a) {
            for (var b, d = x.loadPageCookies().audRules, e = {}, f = 0; f < DY.audienceRules.length; f++)
                if ("undefined" != typeof DY.audienceRules[f] && "undefined" != typeof DY.audienceRules[f].audience && "undefined" != typeof DY.audienceRules[f].rule && "undefined" != typeof DY.audienceRules[f].session && "undefined" != typeof DY.audienceRules[f].updatedAt)
                    if ("undefined" == typeof a || DY.audienceRules[f].updatedAt < a) b = [], g(DY.audienceRules[f], function(a, c) {
                        b.push(c.id)
                    }), e[DY.audienceRules[f].audience] = {
                        hash: c(DYJSON.stringify(DY.audienceRules[f].rule) + DY.audienceRules[f].session),
                        session: DY.audienceRules[f].session,
                        conds: b
                    };
                    else {
                        if ("undefined" == typeof d[DY.audienceRules[f].audience]) continue;
                        e[DY.audienceRules[f].audience] = d[DY.audienceRules[f].audience]
                    }
            x.savePageCookies({
                audRules: e
            })
        }

        function e(a) {
            function b(a) {
                return 10 > a ? "0" + a : a
            }
            a |= 0;
            var c = new Date((new Date).getTime() + 864e5 * a - 36e5 * (DY.tzo || 0));
            return c.getUTCFullYear() + "-" + b(c.getUTCMonth() + 1) + "-" + b(c.getUTCDate())
        }

        function f(a, b) {
            if ("undefined" != typeof a && "undefined" != typeof a.rule && "undefined" != typeof a.audience && "undefined" != typeof a.session)
                for (var c = 0; c < a.rule.length; c++) "undefined" != typeof a.rule[c] && "undefined" != typeof a.rule[c].condType && "undefined" != typeof a.rule[c].conds && b(a.rule[c], function(b) {
                    for (var d = 0; d < a.rule[c].conds.length; d++) {
                        var e = a.rule[c].conds[d];
                        "undefined" != typeof e && b(a.rule[c].conds[d])
                    }
                })
        }

        function g(a, b) {
            f(a, function(a, c) {
                c(function(c) {
                    b(a, c)
                })
            })
        }

        function h(a, b) {
            try {
                var c = "." + DY.Colors.getAll();
                switch (a.type) {
                    case "SiteVariable":
                        if ("undefined" == typeof a.data || a.data.id != b.parameter) return !1;
                        switch (b.selectMethod) {
                            case "equals":
                            case "not_equals":
                                return a.data.value == b.selectParameter;
                            case "contains":
                                return -1 != a.data.value.indexOf(b.selectParameter);
                            case "regexp":
                                return new RegExp(b.selectParameter).test(a.data);
                            default:
                                return !1
                        }
                    case "SiteEvent":
                        return a.data == b.selectParameter;
                    case "EventProp":
                        if (a.data.name != b.eventName) return !1;
                        for (var d in a.data.props)
                            if (d == b.selectParameter) {
                                var e = a.data.props[d];
                                switch (b.selectMethod) {
                                    case "pair_equals":
                                        if (e == b.selectParameter2) return !0;
                                        break;
                                    case "pair_contains":
                                        if (-1 != e.toString().indexOf(b.selectParameter2)) return !0;
                                        break;
                                    case "pair_eq_bigger":
                                        if (parseInt(e) >= parseInt(b.selectParameter2)) return !0;
                                        break;
                                    case "pair_smaller":
                                        if (parseInt(e) < parseInt(b.selectParameter2)) return !0;
                                        break;
                                    default:
                                        return !1
                                }
                            }
                        return !1;
                    case "Referrer":
                    case "PageVisited":
                        var f = a.data;
                        switch (f = f.replace(/\#.*/, ""), b.includeUrlParams || "undefined" == typeof b.includeUrlParams || (f = f.replace(/\?.*/, "")), b.selectMethod) {
                            case "equals":
                            case "not_equals":
                                return f == b.selectParameter;
                            case "contains":
                                return -1 != f.indexOf(b.selectParameter);
                            case "regexp":
                                return new RegExp(b.selectParameter).test(f);
                            default:
                                return !1
                        }
                    case "UnitClick":
                    case "Audience":
                        return a.data == b.parameter;
                    case "PageViews":
                        return !0;
                    case "Browser":
                    case "ScreenSize":
                    case "OSDeviceName":
                        return -1 != c.indexOf("." + z[b.parameter] + ".");
                    case "UserAgent":
                        var f = navigator.userAgent.toLowerCase();
                        switch (b.selectMethod) {
                            case "equals":
                            case "not_equals":
                                return f == b.selectParameter.toLowerCase();
                            case "contains":
                                return -1 != f.indexOf(b.selectParameter.toLowerCase());
                            case "regexp":
                                return new RegExp(b.selectParameter, "i").test(f);
                            default:
                                return !1
                        }
                    default:
                        return !1
                }
            } catch (g) {
                return !1
            }
        }

        function i(a, b) {
            function c(a) {
                a.setFullYear(l.getFullYear()), a.setMonth(l.getMonth()), a.setDate(l.getDate())
            }
            try {
                switch (a) {
                    case "_Referrer":
                        var d = document.referrer.toLowerCase();
                        d = d.replace(/\#.*/, ""), b.includeUrlParams || "undefined" == typeof b.includeUrlParams || (d = d.replace(/\?.*/, ""));
                        var e = b.selectParameter.toLowerCase();
                        switch (b.selectMethod) {
                            case "equals":
                                return d == e;
                            case "not_equals":
                                return d != e;
                            case "contains":
                                return -1 != d.indexOf(e);
                            default:
                                return !1
                        }
                    case "_CurrentPage":
                        var f = location.href.toLowerCase();
                        f = f.replace(/\#.*/, ""), b.includeUrlParams || "undefined" == typeof b.includeUrlParams || (f = f.replace(/\?.*/, ""));
                        var e = b.selectParameter.toLowerCase();
                        switch (b.selectMethod) {
                            case "equals":
                                return f == e;
                            case "not_equals":
                                return f != e;
                            case "contains":
                                return -1 != f.indexOf(e);
                            default:
                                return !1
                        }
                    case "Audience":
                        var g = -1 != ("." + (window.DY && window.DY.aud || "") + "." + x.loadCHCCookies().auds.join(".") + "." + x.loadSessionCookies().sauds.join(".") + ".").indexOf("." + b.parameter + ".");
                        switch (b.hitCountMethod) {
                            case ">=":
                                return g;
                            case "<":
                                return !g;
                            default:
                                return !1
                        }
                    case "_Country":
                        return "undefined" != typeof window.DY.geoCode && window.DY.geoCode === b.selectParameter;
                    case "_Continent":
                        return "undefined" != typeof window.DY.geoCont && window.DY.geoCont === b.selectParameter;
                    case "_Browser":
                        var h = navigator.userAgent.toLowerCase(),
                            i = function(a) {
                                return null != /msie ([0-9]{1,}[\.0-9]{0,})/.exec(h) ? parseInt(RegExp.$1) == a : /trident/.test(h) && null != /rv\:([0-9]{1,}[\.0-9]{0,})/.exec(h) ? parseInt(RegExp.$1) == a : !1
                            };
                        switch (b.parameter) {
                            case 12:
                                return /chrome/.test(h);
                            case 13:
                                return i(6);
                            case 14:
                                return i(7);
                            case 15:
                                return i(8);
                            case 16:
                                return i(9);
                            case 17:
                                return i(10);
                            case 18:
                                return /firefox/.test(h);
                            case 33:
                                return window.opera ? !0 : !1;
                            case 34:
                                return /safari/.test(h) && !/chrome/.test(h);
                            case 36:
                                return !/chrome|firefox|safari|msie|trident/.test(h) && !window.opera;
                            case 39:
                                return i(11);
                            default:
                                return !1
                        }
                    case "_ScreenSize":
                        var j = window.innerWidth;
                        switch (b.parameter) {
                            case 26:
                                return j > 1366;
                            case 27:
                                return 1366 >= j && j > 1024;
                            case 28:
                                return 1024 >= j;
                            default:
                                return !1
                        }
                    case "_OSDeviceName":
                        var h = navigator.userAgent.toLowerCase(),
                            k = navigator.platform.toLowerCase();
                        switch (b.parameter) {
                            case 0:
                                return /iphone|ipod|blackberry|android|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|sonyericsson|symbian|treo mini/.test(h) || /silk|ipad|android|kindle/.test(h);
                            case 1:
                                return /iphone|ipod/.text(h);
                            case 2:
                                return /silk|ipad|android|kindle/.test(h) && (!/android/.test(h) || screen.width > 1024);
                            case 3:
                                return /android/.test(h) && screen.width <= 1024;
                            case 4:
                                return /win/.test(k) || /win/.test(h);
                            case 5:
                                return /mac/.test(k) || /mac/.test(h);
                            case 35:
                                return /linux/.test(k) || /linux/.test(h);
                            default:
                                return !1
                        }
                    case "_Date":
                        var l = new Date;
                        switch (b.selectMethod) {
                            case "after":
                                return l >= new Date(1e3 * parseInt(b.selectParameter));
                            case "before":
                                return l <= new Date(1e3 * parseInt(b.selectParameter2));
                            case "between":
                                return l >= new Date(1e3 * parseInt(b.selectParameter)) && l <= new Date(1e3 * parseInt(b.selectParameter2));
                            default:
                                return !1
                        }
                    case "_TimeOfDay":
                        var l = new Date((new Date).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3),
                            m = new Date(1e3 * parseInt(b.selectParameter)),
                            n = new Date(1e3 * parseInt(b.selectParameter2));
                        return c(m), c(n), n >= l && l >= m;
                    case "_Evaluator":
                        var o, e = b.selectParameter;
                        switch (o = DYO.safeEval(b.jsCode), b.selectMethod) {
                            case "equals":
                                return o == e;
                            case "not_equals":
                                return o != e;
                            case "contains":
                                return "string" == typeof o && -1 != o.indexOf(e);
                            default:
                                return !1
                        }
                    default:
                        return !1
                }
            } catch (p) {
                return !1
            }
        }

        function j() {
            return "undefined" == typeof DY.audienceRules ? !1 : void x.saveSessionCookies({
                sauds: [],
                saudCache: {},
                schc: {}
            })
        }

        function k() {
            return "undefined" == typeof DY.audienceRules ? !1 : (x.savePageCookies({
                ld: e(),
                ldart: DY.audLDART || "0"
            }), x.saveCHCCookies({
                auds: [],
                chc: DY.audCHC || {},
                tchc: {},
                audCache: {}
            }), void d())
        }

        function l() {
            var a = !1,
                b = x.loadPageCookies(),
                c = b.ld,
                d = e();
            if (!(c >= d)) {
                var f = b.ldart.substr(0, 10);
                f != d && (a = !0, m());
                var g = x.loadCHCCookies(),
                    h = g.chc,
                    i = g.tchc,
                    j = c == e(-1);
                for (var k in g.tchc) j && (h[k] = (parseInt(h[k]) || 0) + parseInt(i[k] || 0)), delete i[k];
                return x.saveCHCCookies({
                    chc: h,
                    tchc: i
                }), x.savePageCookies({
                    ld: d
                }), a
            }
        }

        function m() {
            if (!("undefined" == typeof DY.audLDART || "undefined" == typeof DY.audCHC || DY.audLDART <= x.loadPageCookies().ldart)) {
                n(DY.audLDART), x.saveCHCCookies({
                    chc: DY.audCHC,
                    audCache: {}
                }), x.savePageCookies({
                    ldart: DY.audLDART
                });
                for (var a = (DY.aud.split("."), 0); a < q.length; a++) q[a] = {
                    type: "Audience",
                    data: parseInt(q[a])
                };
                r(q, !1, !0)
            }
        }

        function n(a) {
            if ("undefined" == typeof DY.audienceRules) return !1;
            var b = x.loadPageCookies().audRules;
            d(a);
            var e = x.loadCHCCookies(),
                f = x.loadSessionCookies(),
                g = e.auds,
                h = e.audCache,
                i = e.chc,
                j = e.tchc,
                k = f.sauds,
                l = f.saudCache,
                m = f.schc;
            for (var n in b) {
                for (var o = !0, p = 0; p < DY.audienceRules.length; p++)
                    if ("undefined" != typeof DY.audienceRules[p] && "undefined" != typeof DY.audienceRules[p].rule && "undefined" != typeof DY.audienceRules[p].audience && "undefined" != typeof DY.audienceRules[p].session && "undefined" != typeof DY.audienceRules[p].updatedAt && n == DY.audienceRules[p].audience) {
                        o = !1, ("undefined" == typeof a || DY.audienceRules[p].updatedAt < a) && b[n].hash != c(DYJSON.stringify(DY.audienceRules[p].rule) + DY.audienceRules[p].session) && (o = !0);
                        break
                    }
                if (o) {
                    if (b[n].session) {
                        for (var q = 0; q < b[n].conds.length; q++) delete m[b[n].conds[q]];
                        delete l[n], k = $dy.map(k, function(a) {
                            return a == n ? null : a
                        })
                    } else {
                        for (var q = 0; q < b[n].conds.length; q++) delete i[b[n].conds[q]], delete j[b[n].conds[q]];
                        delete h[n], g = $dy.map(g, function(a) {
                            return a == n ? null : a
                        })
                    }
                    delete b[n]
                }
            }
            x.saveCHCCookies({
                auds: g,
                audCache: h,
                chc: i,
                tchc: j
            }), x.saveSessionCookies({
                sauds: k,
                saudCache: l,
                schc: m
            })
        }

        function o(a) {
            return !1
        }

        function p(a, b, c, d) {
            if ("undefined" == typeof b || "undefined" == typeof c) {
                var e = x.loadCHCCookies();
                b = e.tchc, c = e.chc
            }
            if ("undefined" == typeof d && (d = x.loadSessionCookies().schc), "number" == typeof a) {
                for (var f = 0; f < DY.audienceRules.length; f++)
                    if ("undefined" != typeof DY.audienceRules[f] && "undefined" != typeof DY.audienceRules[f].audience && DY.audienceRules[f].audience == a) {
                        a = DY.audienceRules[f];
                        break
                    }
                if ("number" == typeof a) return !1
            }
            for (var g = !0, h = 0; h < a.rule.length; h++)
                if ("undefined" != typeof a.rule[h] && "undefined" != typeof a.rule[h].condType && "undefined" != typeof a.rule[h].conds) {
                    for (var j = !1, k = 0; k < a.rule[h].conds.length; k++) {
                        var l = a.rule[h].conds[k];
                        if ("_" === a.rule[h].condType[0] || "Audience" === a.rule[h].condType) j = i(a.rule[h].condType, l);
                        else {
                            if ("undefined" == typeof l || "undefined" == typeof l.id || "undefined" == typeof l.hitCountMethod || "undefined" == typeof l.hitCount) continue;
                            var m = a.session ? d[l.id] || 0 : (parseInt(c[l.id]) || 0) + parseInt(b[l.id] || 0);
                            switch ("Referrer" == a.rule[h].condType && o(l) && m++, l.hitCountMethod) {
                                case "=":
                                    j = m == l.hitCount;
                                    break;
                                case ">=":
                                    j = m >= l.hitCount;
                                    break;
                                case "<=":
                                    j = m <= l.hitCount;
                                    break;
                                case ">":
                                    j = m > l.hitCount;
                                    break;
                                case "<":
                                    j = m < l.hitCount;
                                    break;
                                default:
                                    j = !1
                            }
                        }
                        if (j) break
                    }
                    if (!j) {
                        g = !1;
                        break
                    }
                }
            return g
        }

        function q(a) {
            var b, c, d, e;
            if (DY.vu) {
                var f = x.loadCHCCookies(),
                    g = x.loadSessionCookies();
                b = f.auds, c = f.audCache, d = g.sauds, e = g.saudCache
            }
            var f = x.loadCHCCookies(),
                g = x.loadSessionCookies(),
                h = f.auds,
                i = f.audCache,
                j = f.chc,
                k = f.tchc,
                l = g.sauds,
                m = g.saudCache,
                n = g.schc,
                o = "undefined" == typeof a ? DY.audienceRules.length || 1 : a;
            if (o > 0) {
                h = $dy.map(h, function(a) {
                    return null !== i[a] && (i[a] || 0) <= 0 ? null : a
                }), l = $dy.map(l, function(a) {
                    return (m[a] || 0) <= 0 ? null : a
                });
                for (var s = [], t = 0; t < DY.audienceRules.length; t++)
                    if ("undefined" != typeof DY.audienceRules[t] && "undefined" != typeof DY.audienceRules[t].rule && "undefined" != typeof DY.audienceRules[t].audience && "undefined" != typeof DY.audienceRules[t].session && ("undefined" == typeof DY.audienceRules[t].hidden || !DY.audienceRules[t].hidden)) {
                        var u;
                        if (u = DY.audienceRules[t].session || null !== i[DY.audienceRules[t].audience] ? (DY.audienceRules[t].session ? m[DY.audienceRules[t].audience] : i[DY.audienceRules[t].audience]) || 0 : null, !(null === u || u > 0)) {
                            s.push({
                                type: "Audience",
                                data: DY.audienceRules[t].audience
                            });
                            var v = p(DY.audienceRules[t], k, j, n);
                            v && (DY.audienceRules[t].session ? l.push(DY.audienceRules[t].audience + "") : h.push(DY.audienceRules[t].audience + "")), DY.audienceRules[t].session ? m[DY.audienceRules[t].audience] = 1 : i[DY.audienceRules[t].audience] = v ? null : 1
                        }
                    }
                0 != s.length && (DY.ServerUtil.logVerbose("aud", ["compute", [b, c, d, e],
                    [h, i, l, m]
                ]), x.saveCHCCookies({
                    auds: h,
                    audCache: i
                }), x.saveSessionCookies({
                    sauds: l,
                    saudCache: m
                }), r(s, !0, !0), q(o - 1))
            }
        }

        function r(b, c, d) {
            try {
                if (0 == DY.audienceRules.length) return;
                if (d || a(), "undefined" == typeof b) return;
                var e, g, i, j;
                if (DY.vu) {
                    var k = x.loadCHCCookies(),
                        l = x.loadSessionCookies();
                    e = k.tchc, g = k.audCache, i = l.schc, j = l.saudCache
                }
                for (var k = (DY.audienceRules, x.loadCHCCookies()), l = x.loadSessionCookies(), m = k.audCache, n = k.tchc, o = l.saudCache, p = l.schc, r = !1, s = 0; s < DY.audienceRules.length; s++) f(DY.audienceRules[s], function(a, c) {
                    for (var d = 0; d < b.length; d++) "undefined" != typeof b[d] && "undefined" != typeof b[d].type && b[d].type == a.condType && c(function(a) {
                        "undefined" != typeof a.id && h(b[d], a) && (r = !0, DY.audienceRules[s].session ? (p[a.id] = parseInt(p[a.id] || 0) + 1, "undefined" != typeof DY.audienceRules[s].hidden && DY.audienceRules[s].hidden || (o[DY.audienceRules[s].audience] = (o[DY.audienceRules[s].audience] || 0) - 1)) : (n[a.id] = parseInt(n[a.id] || 0) + 1, "undefined" != typeof DY.audienceRules[s].hidden && DY.audienceRules[s].hidden || null !== m[DY.audienceRules[s].audience] && (m[DY.audienceRules[s].audience] = (m[DY.audienceRules[s].audience] || 0) - 1)))
                    })
                });
                r && DY.ServerUtil.logVerbose("aud", ["report", [e, g, i, j],
                    [n, m, p, o]
                ]), x.saveCHCCookies({
                    audCache: m,
                    tchc: n
                }), x.saveSessionCookies({
                    saudCache: o,
                    schc: p
                }), c || q()
            } catch (t) {}
        }

        function s(a, b, c) {
            r([a], b, c)
        }

        function t(a) {
            try {
                r([{
                    type: "Referrer",
                    data: a.ref
                }, {
                    type: "PageVisited",
                    data: DY.Util.removeHttp(a.url)
                }, {
                    type: "PageViews"
                }, {
                    type: "Browser"
                }, {
                    type: "ScreenSize"
                }, {
                    type: "OSDeviceName"
                }, {
                    type: "UserAgent"
                }])
            } catch (b) {}
        }

        function u() {
            try {
                if (0 == DY.audienceRules.length) return [];
                a();
                var b = x.loadSessionCookies().sauds;
                return x.loadCHCCookies().auds.concat(b)
            } catch (c) {
                return []
            }
        }

        function v(a) {
            try {
                for (var b = "", c = 0; c < DY.audienceRules.length; c++) "undefined" != typeof DY.audienceRules[c] && "undefined" != typeof DY.audienceRules[c].audience && "undefined" != typeof DY.audienceRules[c].rule && "undefined" != typeof DY.audienceRules[c].session && "undefined" != typeof DY.audienceRules[c].updatedAt && g(DY.audienceRules[c], function(c, d) {
                    "SiteEvent" == c.condType && d.parameter == a && (b = d.selectParameter)
                });
                return b
            } catch (d) {
                return ""
            }
        }

        function w() {
            try {
                for (var a = [], b = 0; b < DY.audienceRules.length; b++) "undefined" != typeof DY.audienceRules[b] && "undefined" != typeof DY.audienceRules[b].hidden && DY.audienceRules[b].hidden && p(b) && a.push(b);
                return a
            } catch (c) {
                return null
            }
        }
        var x = function() {
                function a(a) {
                    for (var b = [], c = 0; c < a.length; c++) a[c] && b.push(a[c]);
                    return b
                }

                function b(b) {
                    for (var c = a(b.split(".")), d = {}, e = 0; e < c.length; e++) {
                        var f = c[e].split("@");
                        d[f[0]] = "nu" == f[1] ? null : f[1]
                    }
                    return d
                }

                function c(a) {
                    var b = [];
                    for (var c in a) b.push(c + "@" + (null == a[c] ? "nu" : a[c]));
                    return b.join(".")
                }

                function d() {
                    var b = DY.StorageUtils.get(j, ["localStorage", "memoryStorage"]);
                    if (null == b) return null;
                    b = b.split("*");
                    for (var c = {}, d = a(b[0].split(".")), e = 0; e < d.length; e++) {
                        var f = d[e].split("@");
                        c[f[0]] = {
                            hash: f[1],
                            session: f[2],
                            conds: f[3].split("-")
                        }
                    }
                    return {
                        audRules: c,
                        ld: b[1],
                        ldart: b[2]
                    }
                }

                function e() {
                    var c = DY.StorageUtils.get(k, ["localStorage", "memoryStorage"]);
                    return null == c ? null : (c = c.split("*"), {
                        auds: a(c[0].split(".")),
                        tchc: b(c[1]),
                        chc: b(c[2]),
                        audCache: b(c[3])
                    })
                }

                function f() {
                    var c = DY.StorageUtils.get(l, ["sessionStorage", "memoryStorage"]);
                    return null == c ? null : (c = c.split("*"), {
                        sauds: a(c[0].split(".")),
                        schc: b(c[1]),
                        saudCache: b(c[2])
                    })
                }

                function g(a) {
                    var b = d() || {},
                        c = a.audRules || b.audRules,
                        e = a.ld || b.ld,
                        f = a.ldart || b.ldart,
                        g = [];
                    for (var h in c) g.push(h + "@" + c[h].hash + "@" + c[h].session + "@" + c[h].conds.join("-"));
                    g = g.join(".") + "*" + e + "*" + f, DY.StorageUtils.set(j, g, ["localStorage", "memoryStorage"])
                }

                function h(a) {
                    var b = e() || {},
                        d = $dy.unique(a.auds || b.auds || []),
                        f = a.tchc || b.tchc || {},
                        g = a.chc || b.chc || {},
                        h = a.audCache || b.audCache || {},
                        i = d.join(".") + "*" + c(f) + "*" + c(g) + "*" + c(h);
                    DY.StorageUtils.set(k, i, ["localStorage", "memoryStorage"])
                }

                function i(a) {
                    var b = f() || {},
                        d = $dy.unique(a.sauds || b.sauds || []),
                        e = a.schc || b.schc || {},
                        g = a.saudCache || b.saudCache || {},
                        h = d.join(".") + "*" + c(e) + "*" + c(g);
                    DY.StorageUtils.set(l, h, ["sessionStorage", "memoryStorage"])
                }
                var j = "_dyaud_page",
                    k = "_dyaud_nchc",
                    l = "_dyaud_sess";
                return {
                    loadPageCookies: d,
                    loadCHCCookies: e,
                    loadSessionCookies: f,
                    savePageCookies: g,
                    saveCHCCookies: h,
                    saveSessionCookies: i
                }
            }(),
            y = !1,
            z = {
                12: "c",
                13: "i6",
                14: "i7",
                15: "i8",
                16: "i9",
                17: "i10",
                18: "f",
                33: "o",
                34: "s",
                36: "ob",
                39: "i11",
                26: "ws",
                27: "ms",
                28: "ss",
                0: "d",
                1: "ip",
                2: "tb",
                3: "an",
                4: "w",
                5: "m",
                35: "l"
            };
        return {
            getUserAudiences: u,
            reportItems: r,
            reportItem: s,
            reportUserIdAction: t,
            getEventName: v,
            isInAudience: p,
            getUserHiddenAudiences: w
        }
    }(), DY.Colors = function() {
        function a(a, b) {
            DY.StorageUtils.set(g + a, b, ["cookieStorage", "localStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            })
        }

        function b(a) {
            return DY.StorageUtils.get(g + a, ["cookieStorage", "localStorage"])
        }

        function c() {
            DY.StorageUtils.remove(g + ".*", ["cookieStorage", "localStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            })
        }

        function d() {
            DY.StorageUtils.remove(g + "noabc", ["cookieStorage", "localStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            });
            var b = new Date;
            a("abc", b.getTime()), b = null
        }

        function e() {
            DY.StorageUtils.remove(g + "abc", ["cookieStorage", "localStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            });
            var b = new Date;
            a("noabc", b.getTime()), b = null
        }

        function f(a) {
            if (null !== h && !a) return h;
            var c = "",
                d = b("st"),
                e = b("abc");
            return "" != d && null != d && "undefined" != d && (c += d, "" != e && null != e && "undefined" != e && (c += "ab.")), h = c, c
        }
        var g = "_dyc",
            h = null;
        return {
            noAdBlock: e,
            colorAdBlock: d,
            set: a,
            get: b,
            clear: c,
            getAll: f
        }
    }(), DY.DataCollection = function() {
        function a(a, b) {
            return isNaN(a) || (b += parseInt(a)), b
        }

        function b() {
            u = 0, v = 0, w = 0
        }

        function c() {
            var b = DY.StorageUtils.get(x, ["cookieStorage", "localStorage"]),
                c = null,
                e = null;
            b && (c = b.split(A), e = d(c), e[D.tos] = a(e[D.tos], u), e[D.tosd] = a(e[D.tosd], u), e[D.toa] = a(e[D.toa], v), e[D.toad] = a(e[D.toad], v), e[D.ac] = a(e[D.ac], w), e[D.acd] = a(e[D.acd], w), c[C.vdata] = e.join(B), null != c && DY.StorageUtils.set(x, c.join(A), ["cookieStorage", "localStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            })), b = c = null
        }

        function d(a) {
            var b = a[C.vdata].split(B);
            return (null == b[D.tosd] || "undefined" == typeof b[D.tosd] || "undefined" == b[D.tosd]) && (b[D.tosd] = 0, b[D.toad] = 0, b[D.acd] = 0), b
        }

        function e() {
            u++
        }

        function f() {
            v++
        }

        function g(a, b) {
            if (a != H || DY.Util.verifyInterval(I, J)) {
                var c = new Date;
                I = c.getTime(), H = a, w++;
                var d = "",
                    e = "",
                    f = "";
                if ("" != F && (e = F, f = G, F = "", G = ""), null != a && "undefined" != typeof a && "undefined" != a) {
                    var g = $dy(a),
                        h = g.attr("class");
                    h = t(h), d = g.data("adid") && "" != g.data("adid") ? h + "|" + g.data("adid") : h + "|" + g.width() + "x" + g.height(), DY.ServerUtil.logClick(d, null, e, f, b);
                    try {
                        if (g.attr("data-dy-exp-id") && "" != g.attr("data-dy-exp-id") && g.attr("data-dy-var-id") && "" != g.attr("data-dy-var-id")) {
                            var i = parseInt(g.attr("data-dy-exp-id")),
                                j = g.attr("data-dy-ver-data"),
                                k = parseInt(g.attr("data-dy-var-id"));
                            g.attr("data-dy-var-idx") && "" != g.attr("data-dy-var-idx") && (k = {
                                id: k,
                                idx: parseInt(g.attr("data-dy-var-idx"))
                            });
                            var l = g.attr("data-dy-att-method"),
                                m = g.attr("data-dy-att-seq"),
                                n = {
                                    method: l,
                                    sesLoadSeq: m
                                };
                            DY.ServerUtil.logVariation_new("c", i, [k], n, j)
                        }
                    } catch (o) {}
                } else DY.ServerUtil.logClick("iframe-ad", null, "", "", b)
            }
        }

        function h(a) {
            var b = DY.StorageUtils.get(x, ["cookieStorage", "localStorage"]),
                c = new Array,
                d = new Date;
            null == b || DY.nu ? (c[C.vdata] = "0" + B + "0" + B + "0" + B + "0" + B + "0" + B + "0", c[C.visits] = 1, c[C.firstTime] = d.getTime(), c[C.lastTime] = d.getTime(), c[C.freq] = 0, DY.vd.initA(), DY.vd.visit(d), c[C.data] = DY.vd.toString()) : (c = b.split(A), c[C.visits]++, c[C.lastTime] = d.getTime(), c[C.freq] = DY.Util.getFrequency(c[C.firstTime], c[C.lastTime], c[C.visits]), DY.vd.initS(c[C.data]), DY.vd.visit(d), c[C.data] = DY.vd.toString()), b = c.join(A), DY.StorageUtils.set(x, b, ["cookieStorage", "localStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            });
            var e = {
                d: c,
                id: a,
                dom: escape(document.location),
                sec: DY.section,
                vd: b
            };
            c = b = d = null;
            var f = DY.StorageUtils.get(z, ["cookieStorage", "sessionStorage"]);
            return "undefined" == typeof f || 0 >= f ? f = 1 : f++, DY.StorageUtils.set(z, f, ["cookieStorage", "sessionStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain(),
                expire: 0
            }), e
        }

        function i() {
            var a = DY.StorageUtils.get(z, ["cookieStorage", "sessionStorage"]);
            return a
        }

        function j() {
            E.length > 0 && DY.ServerUtil.logRealImpressions(E), E = []
        }

        function k() {
            var a = DY.StorageUtils.get(y, ["cookieStorage", "localStorage"]);
            if ("undefined" != typeof a && null != a && "" != a) {
                var b = a.split(A);
                b.length > 0 && DY.ServerUtil.logRealImpressions(b), DY.StorageUtils.remove(y, ["cookieStorage", "localStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain()
                })
            }
        }

        function l() {
            var a = E.join(A);
            "" != a && DY.StorageUtils.set(y, a, ["cookieStorage", "localStorage"], {
                domain: DY.StorageUtils.getSecondLevelDomain()
            })
        }

        function m(a) {
            var b = $dy(a),
                c = b.attr("class");
            c = t(c), b.data("adid") && "" != b.data("adid") && E.push(c + "|" + b.data("adid"));
            try {
                if (b.attr("data-dy-exp-id") && "" != b.attr("data-dy-exp-id") && b.attr("data-dy-var-id") && "" != b.attr("data-dy-var-id")) {
                    var d = b.attr("data-dy-ver-data"),
                        e = parseInt(b.attr("data-dy-var-id"));
                    b.attr("data-dy-var-idx") && "" != b.attr("data-dy-var-idx") && (e = {
                        id: e,
                        idx: parseInt(b.attr("data-dy-var-idx"))
                    });
                    var f = b.attr("data-dy-att-method"),
                        g = b.attr("data-dy-att-seq"),
                        h = {
                            method: f,
                            sesLoadSeq: g
                        };
                    DY.ServerUtil.logVariation_new("ri", parseInt(b.attr("data-dy-exp-id")), [e], h, d)
                }
            } catch (i) {}
        }

        function n() {
            var a, b = DY.StorageUtils.get(x, ["cookieStorage", "localStorage"]);
            if (null != b) {
                var c = b.split(A),
                    e = d(c);
                a = e[D.tosd] + A + e[D.toad] + A + c[C.visits], e[D.tosd] = 0, e[D.toad] = 0, e[D.acd] = 0, c[C.visits] = 0, c[C.vdata] = e.join(B), b = c.join(A), DY.StorageUtils.set(x, b, ["cookieStorage", "localStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain()
                })
            } else a = 0 + A + 0 + A + 0;
            return a
        }

        function o(a, b) {
            for (var c = [], d = "", e = 0; b.length > e; e++) {
                var f = !1;
                $dy(b[e]).parents("[id^='dycont']").length > 0 && (f = !0);
                var g = $dy(b[e]).width(),
                    h = $dy(b[e]).height(),
                    i = ($dy(b[e]).is("area"), b[e].className);
                i = t(i), d = $dy(b[e]).data("adid") && "" != $dy(b[e]).data("adid") ? i + "|" + $dy(b[e]).data("adid") : i + "|" + g + "x" + h, c.push(d)
            }
            c.length > 0 && (a ? DY.ServerUtil.logImpressions(c, 1) : DY.ServerUtil.logImpressions(c, 0)), setInterval(j, K), k()
        }

        function p() {
            L = !0
        }

        function q() {
            return L
        }

        function r(a) {
            F = a
        }

        function s(a) {
            G = a
        }

        function t(a) {
            for (var b = a, c = a.split(" "), d = 0; d < c.length; d++) {
                if ("dy_unit" == c[d] || "dy-unit" == c[d] || "dyunit" == c[d]) {
                    b = "dy_unit";
                    break
                }
                if ("dy" == c[d].substring(0, 2) && -1 == c[d].indexOf(DY.Util.sop)) {
                    b = c[d];
                    break
                }
            }
            return b
        }
        var u = 0,
            v = 0,
            w = 0,
            x = "_dyus_" + DY.section,
            y = "_dyri_" + DY.section,
            z = "_dyuss_" + DY.section,
            A = ".",
            B = "|",
            C = {
                vdata: 0,
                visits: 1,
                firstTime: 2,
                lastTime: 3,
                freq: 4,
                data: 5
            },
            D = {
                tos: 0,
                toa: 1,
                ac: 2,
                tosd: 3,
                toad: 4,
                acd: 5
            },
            E = [],
            F = "",
            G = "",
            H = "",
            I = 0,
            J = 3e3,
            K = 1e4;
        "number" == typeof DY.rimpInterval && (K = DY.rimpInterval);
        var L = !1;
        return {
            initTimer: b,
            updateTimer: c,
            visitSiteTimer: e,
            visitAdHoverTimer: f,
            visitClick: g,
            visit: h,
            spv: i,
            sendVDA: n,
            getVDA: d,
            lri: j,
            lric: k,
            sri: l,
            iv: m,
            li: o,
            setLink: r,
            setPos: s,
            done: p,
            isDone: q
        }
    }(), DY.Detectors = function() {
        function getPageLocation() {
            var a = document.location.href;
            try {
                var b = document.querySelector("meta[property='dy:url']");
                if (null !== b && "" != b.content) a = b.content;
                else {
                    var c = document.querySelector("link[rel='canonical']");
                    if (null !== c && "" != c.href) a = c.href;
                    else {
                        var d = document.querySelector("meta[property='og:url']");
                        null !== d && "" != d.content && (a = d.content)
                    }
                }("undefined" == typeof a || "" === a) && (a = document.location.href)
            } catch (e) {}
            return a
        }

        function detectSR() {
            return {
                width: screen.width,
                height: screen.height,
                str: screen.width + "x" + screen.height
            }
        }

        function detectWS() {
            return {
                width: $dy(window).width(),
                height: $dy(window).height(),
                str: $dy(window).width() + "x" + $dy(window).height()
            }
        }

        function detectUA() {
            var a = "undefined" != typeof document.getElementById && "undefined" != typeof document.getElementsByTagName && "undefined" != typeof document.createElement,
                b = navigator.userAgent.toLowerCase(),
                c = navigator.platform.toLowerCase(),
                d = c ? /win/.test(c) : /win/.test(b),
                e = (c ? /mac/.test(c) : /mac/.test(b)) && !/(iphone|ipod|ipad)/.test(b),
                f = c ? /linux/.test(c) : /linux/.test(b),
                g = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                h = /chrome/.test(b) ? parseFloat(b.replace(/^.*chrome\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                i = /firefox/.test(b) ? parseFloat(b.replace(/^.*firefox\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                j = /safari/.test(b) ? parseFloat(b.replace(/^.*safari\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                k = window.opera ? !0 : !1,
                l = /(iphone|ipod|blackberry|android|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|sonyericsson|symbian|treo mini)/.test(b),
                m = /(silk|ipad|android|kindle)/.test(b),
                n = /(iphone|ipod|ipad|blackberry)/.test(b),
                o = /(iphone|ipod)/.test(b),
                p = /(android)/.test(b),
                q = /(specialagent|dybot)/.test(b),
                r = /(msie|trident)/.test(b),
                s = r && function() {
                    try {
                        return "BackCompat" == top.document.compatMode
                    } catch (a) {
                        return "BackComp" == document.compatMode
                    }
                }(),
                t = -1;
            "Microsoft Internet Explorer" == navigator.appName && (r = !0);
            var u = /msie ([0-9]{1,}[\.0-9]{0,})/;
            return null != u.exec(b) ? t = parseFloat(RegExp.$1) : /trident/.test(b) && (u = /rv\:([0-9]{1,}[\.0-9]{0,})/, null != u.exec(b) && (t = parseFloat(RegExp.$1))), u = null, {
                agent: b,
                mobile: l,
                fixedDevice: n,
                w3: a,
                wk: g,
                ie: r,
                ieVer: t,
                win: d,
                mac: e,
                linux: f,
                quirks: s,
                opera: k,
                safari: j,
                chrome: h,
                firefox: i,
                tablet: m,
                iph: o,
                and: p,
                crawler: q
            }
        }

        function detectAB(detected, notDetected) {
            function createAds() {
                null != document.body ? (frame = document.createElement("IFRAME"), image = document.createElement("IMG"), frame.id = "_dyframe", frame.src = location.protocol + "//ads.dynamicyield.com/abadimage/my-ad.html", frame.style.display = "block", frame.style.border = "none", image.id = "_dyimage", image.src = location.protocol + "//ads.dynamicyield.com/abadimage/textlink-ads.jpg", image.style.width = frame.style.width = "1px", image.style.height = frame.style.height = "1px", image.style.top = frame.style.top = "-1000px", image.style.left = frame.style.left = "-1000px", document.body.appendChild(frame), document.body.appendChild(image), setTimeout(checkAds, adLoadInterval), frame = image = null) : setTimeout(createAds, 1e3)
            }

            function checkAds() {
                try {
                    var imageNode = document.getElementById("_dyimage"),
                        frameNode = document.getElementById("_dyframe");
                    null == imageNode || "undefined" == typeof imageNode || imageNode.style.display.indexOf("none") > -1 ? adBlock = !0 : null == frameNode || "undefined" == typeof frameNode || "hidden" == frameNode.style.visibility ? adBlock = !0 : 0 == frameNode.clientHeight && (adBlock = !0), null != frameNode && "undefined" != frameNode && "undefined" != typeof frameNode && frameNode.parentNode.removeChild(frameNode), null != imageNode && "undefined" != imageNode && "undefined" != typeof imageNode && imageNode.parentNode.removeChild(imageNode), imageNode = frameNode = null, 1 == adBlock ? eval(detected + "();") : eval(notDetected + "();")
                } catch (exception) {}
            }
            var adBlock = !1,
                frame = null,
                image = null,
                adLoadInterval = 500;
            createAds()
        }
        var pageLocation = getPageLocation();
        return {
            sr: detectSR,
            ws: detectWS,
            ua: detectUA,
            ab: detectAB,
            loc: pageLocation
        }
    }(), DY.Experiments = function() {
        function a(a) {
            var c = [],
                d = [],
                g = b();
            if ("undefined" != typeof g && null != g && "" != g)
                if (a) try {
                    for (var h = g.split(DY.ExpUtils.expSep), i = 0; i < h.length; i++) {
                        var j = h[i].split(DY.ExpUtils.dataSep),
                            k = j[0],
                            m = j[1].split(DY.ExpUtils.verSep),
                            n = !1,
                            o = !1;
                        if (m.length > 1 && "undefined" != typeof m[1] && "" != m[1] && (n = !0), !(j.length >= 4 && j[3] == DY.ExpUtils.SELECTION))
                            for (var p = j[2].split(DY.ExpUtils.variSep), q = 0; q < p.length; q++) {
                                var r = p[q].split(DY.ExpUtils.verSep);
                                if (r.length > 1 && (o = !0), r[0] != DY.ExpUtils.notInExp) {
                                    d.push(k, m[0], r[0]), n ? (d.push(1, m[1]), o ? d.push(unescape(r[1])) : d.push(null)) : d.push(0, null, null);
                                    var s = l(k, j[1]);
                                    d.push(s), d.push(e(m)), d.push(f(m)), c.push(d), d = []
                                }
                            }
                    }
                } catch (t) {} else d = g;
            return DYJSON.stringify(c)
        }

        function b() {
            var a = c(DY.ExpUtils.storageKey),
                b = c(DY.ExpUtils.storageAttKey),
                e = "undefined" != typeof a && "" != a && null != a,
                f = "undefined" != typeof b && "" != b && null != b;
            return f ? e ? d(a, b) : b : a
        }

        function c(a) {
            var b = DY.StorageUtils.get(a, ["localStorage"]);
            return b
        }

        function d(a, b) {
            var c = a;
            try {
                for (var d = null == a ? [] : a.split(DY.ExpUtils.expSep), e = {}, f = 0; f < d.length; ++f) {
                    var g = d[f].split(DY.ExpUtils.dataSep);
                    if (g.length >= 4 && g[3] == DY.ExpUtils.SELECTION_AND_ATTRIBUTION) {
                        var h = g[0];
                        e[h + ""] = 1
                    }
                }
                for (var i = null == b ? [] : b.split(DY.ExpUtils.expSep), f = 0; f < i.length; ++f) {
                    var g = i[f].split(DY.ExpUtils.dataSep);
                    if (g.length >= 4 && g[3] == DY.ExpUtils.ATTRIBUTION) {
                        var h = g[0];
                        e.hasOwnProperty(h) || (c = c + DYO.ExpUtils.expSep + i[f])
                    }
                }
            } catch (j) {
                return a + DY.ExpUtils.expSep + b
            }
            return c
        }

        function e(a) {
            return null == a || a.length < 7 ? null : a[6]
        }

        function f(a) {
            return null == a || a.length < 8 || a[7] == DY.ExpUtils.SUB_MECHANISM_NA ? null : a[7]
        }

        function g(a) {
            var b = 0;
            return j.hasOwnProperty(a) || (b = 1, j[a] = 1), b
        }

        function h(a) {
            var b = 0;
            return k.hasOwnProperty(a) || (b = 1, k[a] = 1), b
        }

        function i(a, b, c, d, i) {
            var j = new Object;
            j.verId = null, j.expVisitId = null, j.mechanism = null, j.subMechanisms = null, j.expRi = null, j.varIdsArr = null, j.varsToReport = i;
            try {
                if ("undefined" != typeof c && null != c) {
                    var k = c.split(DY.ExpUtils.verSep);
                    k.length > 0 && (j.verId = k[0], j.expVisitId = l(b, c), j.mechanism = e(k), j.subMechanisms = f(k))
                }
                j.expRi = g(b), j.varIdsArr = [], j.varsToReport = "ri" == a ? [] : i;
                for (var m = 0; m < i.length; m++) {
                    var n = i[m].id || i[m];
                    j.varIdsArr.push(n), "ri" == a && h(n) && j.varsToReport.push(i[m])
                }
                "undefined" != typeof d && null != d && "undefined" != typeof d.method && d.method != DY.ExpUtils.IMPLICIT_ATTRIBUTION && "undefined" != typeof c && DY.ExpUtils.attributeVariationsExplicitly(a, b, c, j.varIdsArr, d)
            } catch (o) {}
            return j
        }
        var j = {},
            k = {},
            l = function(a, b) {
                if (9e3 > a) {
                    var c = "undefined" != typeof DY && "undefined" != typeof DY.dyid ? DY.dyid : "",
                        d = "" + c + DY.ExpUtils.dataSep + b;
                    return m(d)
                }
                var e = "undefined" != typeof DY && "undefined" != typeof DY.dyid ? DY.dyid : "",
                    f = 4294967295 & m(e),
                    d = "" + b,
                    g = 4294967295 & m(d);
                return new DY.Long(g, f, !1).toString()
            },
            m = function(a) {
                var b = 0;
                if (0 == a.length) return b;
                for (var c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    b = (b << 5) - b + d, b &= b
                }
                return b
            };
        return {
            getExperiments: a,
            logVariations: i,
            getMergedExperiments: d
        }
    }(), DY.PageStatistics = function(a) {
        function b() {
            A[B] = 0, A[C] = 0, A[D] = 0, A[E] = 0, A[F] = 0
        }

        function c(a) {
            clearTimeout(o);
            var b = a || window.event;
            b = $dy.event.fix(b), r ? (r = !1, k = b.pageX, m = b.pageY) : (l = b.pageX, n = b.pageY), p = Date.now(), o = setTimeout(function() {
                r = !0
            }, s), i()
        }

        function d() {
            A[D]++, i()
        }

        function e() {
            var a = Math.abs(n - m),
                b = Math.abs(n - m),
                c = a + b;
            c > t && !r && (A[B]++, A[C] += Date.now() - p), r = !0, clearTimeout(o), i()
        }

        function f() {
            function a() {
                var d = b.scrollTop(),
                    e = c.height(),
                    f = b.height(),
                    g = d / (e - f);
                g > x && (x = g), x > G && (A[E] = x - G), setTimeout(a, w)
            }
            var b = $dy(window),
                c = $dy(document);
            a()
        }

        function g() {
            f()
        }

        function h() {
            z && (A[F] += Date.now() - y, y = Date.now()), DY.ServerUtil.sendDPS(A), x > G && (G = x), b()
        }

        function i() {
            z || (y = Date.now(), z = !0), clearTimeout(q), q = setTimeout(function() {
                z = !1, A[F] += Date.now() - y
            }, u)
        }

        function j() {
            b(), document.addEventListener("mousemove", c, !0), document.addEventListener("mousedown", e, !0), document.addEventListener("click", d, !0), document.addEventListener("keydown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("touchmove", i, !0), document.addEventListener("scroll", i, !0), g(), window.addEventListener("beforeunload", function() {
                h()
            }), i()
        }
        var k, l, m, n, o, p, q, r = !0,
            s = 1500,
            t = 100,
            u = 1500,
            v = 6e4,
            w = 300,
            x = 0,
            y = Date.now(),
            z = !1;
        DY.timeToFlushDPS !== a && (v = DY.timeToFlushDPS);
        var A = {},
            B = "effcl",
            C = "totcl",
            D = "clicks",
            E = "scroll",
            F = "active",
            G = 0;
        j()
    }, DY.PubSub = function() {
        function a() {
            f || (f = !0, e = $dy({}))
        }

        function b(b) {
            a(), "undefined" != typeof b.on && "function" == typeof b.callback && e.on.apply(e, [b.on, b.callback])
        }

        function c(b) {
            a(), "undefined" != typeof b.on && e.off.apply(e, [b.on])
        }

        function d(b) {
            a(), "undefined" != typeof b.on && e.trigger.apply(e, [b.on])
        }
        var e, f = !1;
        return {
            init: a,
            pub: d,
            sub: b,
            unsub: c
        }
    }(), DY.QManager = function(a) {
        function b(a) {
            function c(a) {
                if ("undefined" != typeof window.DYO && "function" == typeof window.DYO.smartTag) try {
                    DYO.smartTag(a.name, a.selector, a.inline, a.callback)
                } catch (b) {} else setTimeout(function() {
                    c(a)
                }, 100)
            }
            if (e) {
                if ("undefined" != typeof DY.API && "undefined" != typeof DY.API.actions) {
                    for (var d = DY.API.actions.length, f = 0; d > f; f++) try {
                        var g = DY.API.actions[f];
                        switch (g[0]) {
                            case "event":
                                if ("object" == typeof g[1]) {
                                    var h = g[1].name,
                                        i = g[1].properties;
                                    DY.ServerUtil.logEvent(h, i)
                                }
                                break;
                            case "smartTag":
                                if ("object" == typeof g[1]) try {
                                    c(g[1])
                                } catch (j) {}
                                break;
                            case "callback":
                                if ("function" == typeof g[1]) try {
                                    setTimeout(g[1], 0)
                                } catch (j) {}
                                break;
                            case "experiment":
                                if ("object" == typeof g[1]) {
                                    var h = "experiment-" + g[1].name,
                                        i = DYJSON.stringify(g[1].properties);
                                    DY.ServerUtil.logEvent(h, i)
                                }
                                break;
                            case "track_event":
                                if ("object" == typeof g[1]) {
                                    var k = "",
                                        l = "";
                                    "object" == typeof g[1].properties ? (k = g[1].properties.label, l = g[1].properties.value) : (k = g[1].label, l = g[1].value), DY.ServerUtil.logDynamicPixel(g[1].category, g[1].action, k, l)
                                }
                                break;
                            case "track_pageview":
                                "object" == typeof g[1] ? DY.ServerUtil.userIdActions(g[1].url) : DY.ServerUtil.userIdActions(), DY.API("pub", {
                                    on: "dy-pageview"
                                });
                                break;
                            case "identify":
                                "object" == typeof g[1] && DY.ServerUtil.identify(g[1].uid, g[1].type);
                                break;
                            case "siteVar":
                                "object" == typeof g[1] && DY.SiteVariables.addSiteVar(g[1].id, g[1].value);
                                break;
                            case "customUserData":
                                "object" == typeof g[1] && DY.ServerUtil.logCustomUserData(g[1]);
                                break;
                            case "sub":
                                "object" == typeof g[1] && DY.PubSub.sub(g[1]);
                                break;
                            case "unsub":
                                "object" == typeof g[1] && DY.PubSub.unsub(g[1]);
                                break;
                            case "pub":
                                "object" == typeof g[1] && DY.PubSub.pub(g[1]);
                                break;
                            case "context":
                                "object" == typeof g[1] && (DY.recommendationContext = g[1], DY.PubSub.pub("recommendationContextChanged"))
                        }
                    } catch (m) {}
                    DY.API.actions = DY.API.actions.slice(d)
                }
                setTimeout(function() {
                    b(a)
                }, a)
            }
        }

        function c(a) {
            b(a)
        }

        function d() {
            e = !1
        }
        var e = !0;
        return {
            init: c,
            stop: d
        }
    }(), DY.ServerUtil = function() {
        function a(a, c) {
            if (!DY.ignore && !DY.Detectors.ua().crawler) try {
                var d, e = parseInt(1e6 * Math.random());
                window.XDomainRequest ? (d = new XDomainRequest, d.CacheControl = "no-cache", d.onerror = function() {}, d.ontimeout = function() {}, d.onprogress = function() {}, d.onload = function() {
                    delete D[e]
                }) : d = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), D[e] = {
                    address: a,
                    params: c
                }, d.onreadystatechange = function() {
                    2 == d.readyState && delete D[e]
                };
                var f = b(c);
                d.open("GET", a + "?_=" + e + "&" + f, !0), d.send()
            } catch (g) {
                DY.Util.log("exception when sending request : " + g.message())
            }
        }

        function b(a, c) {
            var d = [];
            for (var e in a) {
                var f = c ? c + "[" + e + "]" : e,
                    g = a[e];
                d.push("object" == typeof g && null !== g ? b(g, f) : encodeURIComponent(f) + "=" + encodeURIComponent(g))
            }
            return d.join("&")
        }

        function c(a, b, c) {
            if (!DY.ignore && !DY.Detectors.ua().crawler)
                if ($dy.browser.msie && window.XDomainRequest) {
                    var d = a,
                        e = $dy.param(b);
                    "" != e && (d = d + "?" + e);
                    var f = new XDomainRequest;
                    f.CacheControl = "no-cache", f.open("get", a + "?" + $dy.param(b) + "&r=" + Math.random()), f.onerror = function() {}, f.ontimeout = function() {}, f.onprogress = function() {}, c ? f.onload = function() {
                        c(f.responseText)
                    } : f.onload = function() {}, setTimeout(function() {
                        f.send()
                    }, 0)
                } else c ? $dy.ajax({
                    type: "GET",
                    url: a,
                    data: b,
                    cache: !1,
                    success: function(a, b, d) {
                        c(a)
                    }
                }) : $dy.ajax({
                    type: "GET",
                    url: a,
                    data: b,
                    cache: !1,
                    success: function(a, b, c) {}
                })
        }

        function d(a) {
            var b = r();
            ("undefined" == typeof a || "" == a || null == a) && (a = DY.Detectors.loc);
            var d = s(),
                e = document.title;
            DY.Audiences.reportUserIdAction({
                ref: b,
                url: a
            }), c(B + "/uia", {
                id: DY.dyid,
                se: DY.section,
                us: DY.DataCollection.sendVDA(),
                cl: DY.Colors.getAll(),
                rf: b,
                p: DY.DataCollection.spv(),
                sub: document.location.hostname,
                sd: DY.segdef,
                url: a,
                title: e,
                lay: DY.layout,
                ses: DY.session,
                aud: v(),
                svars: DY.SiteVariables.getSiteVariables(),
                gv: d,
                exps: DY.Experiments.getExperiments(!0),
                lts: DY.Util.lts(),
                ctx: DY.Util.getCtx()
            }, null)
        }

        function e() {
            var b = DY.StorageUtils.get(C, ["cookieStorage", "sessionStorage"]);
            if (null != b && "undefined" != typeof b && "" != b) {
                for (var c = b.split(E), d = 0; d < c.length; d++)
                    if ("" !== c[d]) {
                        var e = c[d].split(F);
                        "" !== e[0] && a(e[0], DY.StringUtils.pkv(e[1]))
                    }
                DY.StorageUtils.remove(C, ["cookieStorage", "sessionStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain()
                })
            }
        }

        function f(b, c, d, e, f) {
            var g = r(),
                h = s(),
                i = DY.Detectors.loc;
            DY.Audiences.reportItem({
                type: "UnitClick",
                data: parseInt(b.split("|")[1])
            });
            var j = {
                id: DY.dyid,
                sec: DY.section,
                elm: b,
                da: c,
                cl: DY.Colors.getAll(),
                l: DY.layout,
                p: DY.DataCollection.spv(),
                sd: DY.segdef,
                sr: DY.Detectors.sr().str,
                url: i,
                ses: DY.session,
                rf: g,
                aud: v(),
                svars: DY.SiteVariables.getSiteVariables(),
                gv: h,
                exps: DY.Experiments.getExperiments(!0),
                aurl: d,
                apos: e,
                right: f ? "true" : ""
            };
            a(B + "/ac", j)
        }

        function g(a, b) {
            var d = r(),
                e = DY.Detectors.loc;
            c(B + "/imp", {
                id: DY.dyid,
                sec: DY.section,
                imps: a,
                cl: DY.Colors.getAll(),
                bl: b,
                l: DY.layout,
                p: DY.DataCollection.spv(),
                sd: DY.segdef,
                rf: d,
                sr: DY.Detectors.sr().str,
                ses: DY.session,
                aud: v(),
                svars: DY.SiteVariables.getSiteVariables(),
                url: e,
                exps: DY.Experiments.getExperiments(!0)
            }, null)
        }

        function h(a) {
            var b = r();
            c(B + "/rimp", {
                id: DY.dyid,
                sec: DY.section,
                rimps: a,
                cl: DY.Colors.getAll(),
                l: DY.layout,
                p: DY.DataCollection.spv(),
                sd: DY.segdef,
                rf: b,
                ses: DY.session,
                aud: v(),
                svars: DY.SiteVariables.getSiteVariables()
            }, null)
        }

        function i(b, c) {
            var d = r(),
                e = DY.Detectors.loc,
                f = DY.Audiences.getEventName(b);
            DY.Audiences.reportItem({
                type: "SiteEvent",
                data: f
            }), "undefined" != typeof c && DY.Audiences.reportItem({
                type: "EventProp",
                data: {
                    name: f,
                    props: {
                        value: c
                    }
                }
            }), a(B + "/px", {
                uid: DY.dyid,
                sec: DY.section,
                id: b,
                cl: DY.Colors.getAll(),
                ses: DY.session,
                l: DY.layout,
                p: DY.DataCollection.spv(),
                sd: DY.segdef,
                rf: d,
                aud: v(),
                svars: DY.SiteVariables.getSiteVariables(),
                gv: c,
                url: e,
                exps: DY.Experiments.getExperiments(!0)
            })
        }

        function j(b, c) {
            var d = r(),
                e = DY.Detectors.loc;
            DY.Audiences.reportItem({
                type: "SiteEvent",
                data: b
            }), DY.Audiences.reportItem({
                type: "EventProp",
                data: {
                    name: b,
                    props: c || {}
                }
            }), DY.API("pub", {
                on: "dy-event-" + b
            }), a(B + "/dpx", {
                name: b,
                props: DYJSON.stringify(c),
                uid: DY.dyid,
                sec: DY.section,
                cl: DY.Colors.getAll(),
                ses: DY.session,
                l: DY.layout,
                p: DY.DataCollection.spv(),
                sd: DY.segdef,
                rf: d,
                aud: v(),
                svars: DY.SiteVariables.getSiteVariables(),
                url: e,
                exps: DY.Experiments.getExperiments(!0)
            })
        }

        function k(b, c, d, e) {
            var f = r(),
                g = DY.Detectors.loc,
                h = b + "-" + c;
            DY.Audiences.reportItem({
                type: "SiteEvent",
                data: h
            }), "undefined" != typeof e && DY.Audiences.reportItem({
                type: "EventProp",
                data: {
                    name: h,
                    props: {
                        value: e
                    }
                }
            }), a(B + "/dpx", {
                ctgr: b,
                act: c,
                lab: d,
                val: e,
                uid: DY.dyid,
                sec: DY.section,
                cl: DY.Colors.getAll(),
                ses: DY.session,
                l: DY.layout,
                p: DY.DataCollection.spv(),
                sd: DY.segdef,
                rf: f,
                aud: v(),
                svars: DY.SiteVariables.getSiteVariables(),
                url: g,
                exps: DY.Experiments.getExperiments(!0)
            })
        }

        function l(a, b, c, d, e, f) {
            var g = "undefined" != typeof e && e ? DY.ExpUtils.ATTRIBUTION_AFTER_C : DY.ExpUtils.IMPLICIT_ATTRIBUTION,
                h = "undefined" != typeof DYO && null != DYO && "undefined" != typeof DYO.Seqs && null != DYO.Seqs ? DYO.Seqs.sesLoadSeq : 1,
                i = {
                    method: g,
                    sesLoadSeq: h
                };
            m(a, b, c, i, f)
        }

        function m(b, c, d, e, f) {
            if ("undefined" == typeof e || null == e || "undefined" == typeof e.method || null == e.method) {
                var g = "c" == b ? DY.ExpUtils.ATTRIBUTION_AFTER_C : DY.ExpUtils.IMPLICIT_ATTRIBUTION,
                    h = "undefined" != typeof DYO && null != DYO && "undefined" != typeof DYO.Seqs && null != DYO.Seqs ? DYO.Seqs.sesLoadSeq : 1;
                e = {
                    method: g,
                    sesLoadSeq: h
                }
            }
            var i = DY.Experiments.logVariations(b, c, f, e, d);
            "undefined" != typeof i.verId && null != i.verId && null != i.varsToReport && i.varsToReport.length > 0 && a(B + "/var", {
                uid: DY.dyid,
                sec: DY.section,
                t: b,
                e: c,
                p: DY.DataCollection.spv(),
                ve: i.verId,
                va: DYJSON.stringify(i.varsToReport),
                ses: DY.session,
                aud: v(),
                expVisitId: i.expVisitId,
                mech: i.mechanism,
                smech: i.subMechanisms,
                eri: i.expRi
            })
        }

        function n(a, b) {
            ("undefined" == typeof b || null == b || "" == b) && (b = "id"), c(B + "/id", {
                uid: DY.dyid,
                sec: DY.section,
                cuid: a,
                cuidType: b
            }, null)
        }

        function o(a, b) {
            try {
                c(B + "/avar", {
                    sec: DY.section,
                    url: a,
                    vars: b
                }, null)
            } catch (d) {}
        }

        function p(a) {
            var b = a.name,
                d = a.action;
            delete a.name, delete a.action, c(B + "/cud", {
                sec: DY.section,
                uid: DY.dyid,
                n: b,
                act: d,
                d: DYJSON.stringify(a)
            })
        }

        function q(a, b) {
            DY.vu && c(B + "/vu", {
                sec: DY.section,
                uid: DY.dyid,
                p: a,
                d: DYJSON.stringify(b)
            })
        }

        function r() {
            var a = document.referrer;
            try {
                if (null != a && "undefined" != typeof a && "" != a)
                    if (smartLinkRef = DY.SmartLinks.getSmartLinkRef(), null != smartLinkRef) a = smartLinkRef.split("//")[1];
                    else {
                        if (a = a.split("/")[2], -1 != a.indexOf("google")) {
                            a = a + "/" + document.referrer.split("/")[3].split("?")[0];
                            try {
                                if (-1 != document.referrer.indexOf("?")) {
                                    query = document.referrer.split("?")[1].split("&");
                                    for (var b = 0; b < query.length; b++)
                                        if (-1 != query[b].indexOf("q=")) {
                                            a = a + "?" + query[b];
                                            break
                                        }
                                }
                            } catch (c) {}
                        }
                        a == document.location.hostname && (a = "internal")
                    }
            } catch (c) {}
            return a
        }

        function s() {
            var a = "";
            try {
                if (8765250 == DY.section) {
                    var b = $dy('.paneContent td:contains("Amount") ~ td').text();
                    a = Number(b.replace(/[^0-9\.]+/g, ""))
                } else if (8765247 == DY.section) a = $dy("tfoot .total:eq(2) nobr").text().substring(1);
                else if (null != DY.goalScripts && DY.goalScripts.length > 0)
                    for (var c = 0; c < DY.goalScripts.length; c++) try {
                        if ("undefined" != typeof DY.goalScripts[c].val && "" != DY.goalScripts[c].val) {
                            a = DY.goalScripts[c].val;
                            break
                        }
                    } catch (d) {
                        DY.Util.log("Error collecting goal: " + d)
                    }
            } catch (d) {
                DY.Util.log("Error collecting goal: " + d)
            }
            return a && "undefined" != a || (a = ""), a
        }

        function t(a) {
            for (var b = [], c = a.length, d = 0; c > d; d++) {
                for (var e = d + 1; c > e; e++) a[d] === a[e] && (e = ++d);
                b.push(a[d])
            }
            return b
        }

        function u(a, b) {
            for (var c = [], d = a.length, e = 0; d > e; e++) {
                var f = b(a[e]);
                null !== f && c.push(f)
            }
            return c
        }

        function v() {
            var a = DY.Audiences.getUserAudiences();
            try {
                return null != DY.aud && "undefined" != typeof DY.aud && (a = a.concat(DY.aud.split(".")), "" != a && a != [] && (a = t(a))), a = u(a, function(a) {
                    return "" == a ? null : a
                }), a = a.join(".")
            } catch (b) {
                return DY.aud
            }
        }

        function w() {
            var a = v();
            if (null == a || "undefined" === a || "" == a) return [];
            for (var b = a.split("."), c = [], d = 0; d < b.length; d++) null != b[d] && "" != b[d] && c.push(parseInt(b[d]));
            return c
        }

        function x() {
            try {
                var a = "";
                for (var b in D) a += D[b].address + F + DY.StringUtils.skv(D[b].params) + E;
                DY.StorageUtils.set(C, a, ["cookieStorage", "localStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain(),
                    expire: 1
                })
            } catch (c) {}
        }

        function y(b) {
            a(B + "/dps", $dy.extend(b, {
                uid: DY.dyid,
                sec: DY.section,
                svars: DY.SiteVariables.getSiteVariables()
            }))
        }

        function z(b) {
            a(B + "/rcomEvent", {
                uid: DY.dyid,
                sec: DY.section,
                aud: v(),
                p: DY.DataCollection.spv(),
                cl: DY.Colors.getAll(),
                ses: DY.session,
                data: DYJSON.stringify(b)
            })
        }
        var A = 0,
            B = "//px." + DY.server,
            C = "_dyrc",
            D = {},
            E = "***",
            F = "**";
        return {
            getRef: r,
            logClick: f,
            logDelayedData: e,
            logImpressions: g,
            logRealImpressions: h,
            logPixel: i,
            logDynamicPixel: k,
            logEvent: j,
            logVariation: l,
            logVariation_legacy: l,
            logVariation_new: m,
            logArtVariation: o,
            logCustomUserData: p,
            logRcom: z,
            logVerbose: q,
            userIdActions: d,
            getUserAudiences: w,
            sdd: x,
            identify: n,
            sendDPS: y,
            INVALID_USER_ID: A
        }
    }(), DY.SiteVariables = function() {
        function calculateSiteVariables() {
            DY.Util.log("At calculateSiteVariables");
            try {
                if (null != DY.svars && DY.svars.length > 0) {
                    var siteVarsMapFromCookie = getSiteVarsFromCookie();
                    DY.Util.log("siteVarsMapFromCookie:"), DY.Util.log(siteVarsMapFromCookie);
                    for (var i = 0; i < DY.svars.length; i++) {
                        var value = "";
                        try {
                            var evalRes = eval(DY.svars[i].script);
                            null != evalRes && "undefined" != typeof evalRes && "undefined" != evalRes && "" != evalRes && (value = $dy.trim(evalRes))
                        } catch (exception) {
                            DY.Util.log("Error collecting site variable: " + exception)
                        }
                        if ((null == value || "" == value || "undefined" == value || "undefined" == typeof evalRes) && null != siteVarsMapFromCookie && "undefined" != typeof siteVarsMapFromCookie) {
                            var valFromCookie = siteVarsMapFromCookie[DY.svars[i].id];
                            DY.Util.log("!! Using value from cookie: " + DY.svars[i].id + " = " + valFromCookie), value = null == valFromCookie ? "" : valFromCookie
                        }
                        addSiteVar(DY.svars[i].id, value)
                    }
                    saveSiteVarCookie()
                }
            } catch (exception) {
                DY.Util.log(exception)
            }
        }

        function addSiteVar(a, b) {
            DY.Util.log("addSiteVar: " + a + ": '" + b + "'"), DY.svarsValues[a] = b, DY.Audiences.reportItem({
                type: "SiteVariable",
                data: {
                    id: a,
                    value: b
                }
            })
        }

        function getSiteVariables() {
            var a = stringifyValues(DY.svarsValues, !1);
            return DY.Util.log("getSiteVariables: " + a), a
        }

        function saveSiteVarCookie() {
            try {
                var a = stringifyValues(DY.svarsValues, !0);
                DY.Util.log("Saving site var cookie: " + a), DY.StorageUtils.set(siteVariablesCookie, a, ["cookieStorage", "sessionStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain(),
                    expire: 0
                })
            } catch (b) {}
        }

        function getSiteVarsFromCookie() {
            try {
                var a = DY.StorageUtils.get(siteVariablesCookie, ["cookieStorage", "sessionStorage"]);
                return DY.Util.log("getSiteVarsFromCookie: read from cookie: " + a), parseValuesFromString(a)
            } catch (b) {
                return null
            }
        }

        function stringifyValues(a, b) {
            var c = [];
            for (var d in a) {
                var e = d + KV_SEPERATOR + a[d];
                b && (e = escape(e)), c.push(e)
            }
            return c.join(VARS_SEPERATOR)
        }

        function parseValuesFromString(a) {
            for (var b = {}, c = a.split(VARS_SEPERATOR), d = 0; d < c.length; d++) {
                var e = c[d];
                if (null != e && "" != e) {
                    e = unescape(e);
                    var f = e.split(KV_SEPERATOR);
                    2 == f.length && (b[f[0]] = f[1])
                }
            }
            return b
        }
        var siteVariablesCookie = "_dysvar_" + DY.section,
            VARS_SEPERATOR = ".@.",
            KV_SEPERATOR = ":@:";
        return DY.svarsValues = {}, {
            addSiteVar: addSiteVar,
            calculateSiteVariables: calculateSiteVariables,
            getSiteVariables: getSiteVariables
        }
    }(), DY.SmartLinks = function() {
        function a() {
            smartLinkCleanRef = null;
            try {
                if ("undefined" !== document.referrer && document.referrer) {
                    var a = DY.Util.stripQueryStringAndHashFromPath(document.referrer),
                        c = a.indexOf(b); - 1 != c && c + b.length < a.length && (smartLinkCleanRef = a)
                }
            } catch (d) {
                DY.Util.log(d)
            }
            return smartLinkCleanRef
        }
        var b = "link." + DY.server + "/";
        return {
            getSmartLinkRef: a
        }
    }(), DY.vd = function(a, b, c) {
        function d() {
            var a = new Date;
            s = j(a), t = i(a), u = a.getMonth(), v = a.getYear(), h(m + 1, m, p), h(n + 1, n, q), h(o + 1, o, r)
        }

        function e(a) {
            var b = a.split(k);
            if (b[0] == l) {
                s = b[1], t = b[2], u = b[3], v = b[4];
                for (var c = 0; m > c; c++) p[c] = b[c + 5];
                for (var c = 0; n > c; c++) q[c] = b[c + 5 + m];
                for (var c = 0; o > c; c++) r[c] = b[c + 5 + m + n]
            } else d()
        }

        function f() {
            return l + k + s + k + t + k + u + k + v + k + p.join(k) + k + q.join(k) + k + r.join(k)
        }

        function g(a) {
            var b = j(a),
                c = i(a),
                d = a.getMonth(),
                e = a.getYear() - v;
            e > 0 && (v += e), b + 365 * e != s && (h(b + 365 * e - s, m, p), s = b, c + 53 * e != t && (h(c + 53 * e - t, n, q), t = c), d + 12 * e != u && (h(d + 12 * e - u, o, r), u = d)), p[0]++, q[0]++, r[0]++
        }

        function h(a, b, c) {
            if (a > 0)
                if (a > b)
                    for (var d = 0; b > d; d++) c[d] = 0;
                else {
                    for (var d = b - 1 - a; d > -1; d--) c[d + a] = c[d];
                    for (var d = 0; a > d; d++) c[d] = 0
                }
        }

        function i(a) {
            var b = new Date;
            b.setFullYear(a.getFullYear(), 0, 1);
            var c = Math.ceil(((a - b) / 864e5 + b.getDay() + 1) / 7);
            return a = b = null, c
        }

        function j(a) {
            var b = new Date;
            b.setFullYear(a.getFullYear(), 0, 1);
            var c = Math.ceil((a - b) / 864e5);
            return a = b = null, c
        }
        var k = "|",
            l = 0,
            m = a,
            n = b,
            o = c,
            p = new Array(m),
            q = new Array(n),
            r = new Array(o),
            s = 0,
            t = 0,
            u = 0,
            v = 0;
        return {
            d: p,
            initS: e,
            initA: d,
            toString: f,
            visit: g
        }
    }(7, 6, 6), DY.WindowActions = function() {
        function a() {
            return o
        }

        function b() {
            o = !1, DY.Util.debug && (document.body.className = "blurred")
        }

        function c() {
            o = !0, DY.Util.debug && (document.body.className = "focused")
        }

        function d() {
            DY.Util.stopSiteTimer();
            try {
                DY.ServerUtil.sdd(), DY.DataCollection.sri(), "undefined" != typeof DY.lri && DY.lri && DY.DataCollection.lri()
            } catch (a) {}
        }

        function e() {
            DY.Util.startSiteTimer()
        }

        function f(a, b) {
            "onAd" == a && DY.Util.monitorAdClick(b, !1)
        }

        function g(a, b) {
            "onAd" == a && DY.Util.monitorAdClick(b, !0)
        }

        function h(a) {
            "onAd" == a && DY.Util.startAdHoverTimer()
        }

        function i(a) {
            "onAd" == a && DY.Util.stopAdHoverTimer()
        }

        function j(a, b) {
            if ("undefined" != typeof $dy.dynotify) {
                var c = {};
                c.style = "dy-notify", b.duration < 0 ? c.autoHide = !1 : c.autoHideDelay = b.duration, 0 == b.position ? c.globalPosition = "bottom right" : 1 == b.position ? c.globalPosition = "bottom left" : 2 == b.position ? c.globalPosition = "top right" : 3 == b.position && (c.globalPosition = "top left"), setTimeout(function() {
                    var b = ("dy-not" + Math.random()).replace("0.", "");
                    $dy.dynotify({
                        title: '<div id="' + b + '"></div>'
                    }, c), $dy("#" + b).append($dy(a.element)), a.callback && a.callback()
                }, b.delay)
            } else setTimeout(function() {
                j(a, b)
            }, 200)
        }

        function k() {
            p || (DY.Util.addCss(".dy-lb-close", 'position:absolute;top:-14px;right:-13px;cursor:pointer;color: #fff;border: 1px solid #918686;border-radius: 30px;background: #575757;font-size: 25px;font-weight: bold;display: inline-block;line-height: 0px;padding: 13px 6px;font-family: "Times Roman", times, serif;'), DY.Util.addCss(".dy-lb-close:before", 'content:"×";'), p = !0)
        }

        function l() {
            for (var a = 0; a < q.length; a++) $dy(q[a].trigger("close"))
        }

        function m(a, b) {
            if ("undefined" != typeof $dy.fn.lightbox_me) {
                var c = document.createElement("div");
                c.setAttribute("class", "dy-act-overlay"), c.setAttribute("style", "-webkit-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2);-moz-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2);box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.2)");
                var d = document.createElement("div");
                d.className = "dy-lb-close", k(), c.appendChild(a.element);
                var e = {};
                m.classPrefix = "dy-", e.destroyOnClose = !0, e.closeSelector = ".dy-lb-close", 0 == b.position ? e.centered = !0 : 1 == b.position ? e.modalCSS = {
                    top: "20px"
                } : 2 == b.position && (e.modalCSS = {
                    bottom: "20px"
                }), 0 == b.closing ? (e.closeClick = !1, c.appendChild(d)) : 1 == b.closing || (2 == b.closing ? c.appendChild(d) : 3 == b.closing && (e.closeEsc = !1, e.closeClick = !1)), 0 == b.background ? e.overlayCSS = {
                    background: "black",
                    opacity: b.opacity
                } : 1 == b.background ? e.overlayCSS = {
                    background: "white",
                    opacity: b.opacity
                } : 2 == b.background && (e.overlayCSS = {
                    background: "transparent"
                }), e.onLoad = function() {
                    a.callback && a.callback()
                }, setTimeout(function() {
                    var a = $dy(c).lightbox_me(e);
                    q.push(a), -1 != b.duration && setTimeout(function() {
                        a.trigger("close")
                    }, b.duration)
                }, b.delay)
            } else setTimeout(function() {
                m(a, b)
            }, 200)
        }

        function n() {
            var a = 0,
                b = 1,
                c = 2,
                d = a;
            $dy(document).mousemove(function(e) {
                e.clientY > 250 ? d = a : e.clientY > 50 ? d = b : d == b && (d = c), d == c && (DY.API("pub", {
                    on: "dy-mouse-leave-doc"
                }), d = a)
            })
        }
        var o = !1,
            p = !1,
            q = [];
        return {
            inFocus: a,
            onLoad: e,
            onUnload: d,
            onClick: f,
            onRightClick: g,
            onHover: h,
            onUnHover: i,
            onBlur: b,
            onFocus: c,
            overlay: m,
            notify: j,
            initMouseLeave: n,
            closeOverlays: l
        }
    }(), DYWork = function() {
        function isAB() {
            return abd
        }

        function initSlim() {
            try {
                if (!initd) {
                    DY.Util.log("DY Slim initializing..."), $dy(window).unload(DY.WindowActions.onUnload), initd = !0;
                    try {
                        DY.ServerUtil.logDelayedData()
                    } catch (a) {}
                    DY.QManager.init(queueSample), $dy(document).ready(function() {
                        try {
                            setTimeout(function() {
                                try {
                                    DY.AdDetection.mark(), DY.AdDetection.execute(), DY.DataCollection.li(abd, $dy(DY.AdDetection.dycls()))
                                } catch (a) {}
                            }, 1e3)
                        } catch (a) {}
                    })
                }
            } catch (b) {}
        }

        function init() {
            function contMark(a) {
                a > 0 ? (DY.AdDetection.cmark(), DY.ArticleExp.execute(), finishedMarking || setTimeout(function() {
                    contMark(a - 1)
                }, markInterval)) : DY.ArticleExp.logVariations()
            }
            try {
                if (!initd) {
                    DY.Util.log("DY initializing..."), $dy(window).focus(DY.WindowActions.onFocus), $dy(window).blur(DY.WindowActions.onBlur), $dy(window).unload(DY.WindowActions.onUnload), $dy(window).ready(DY.WindowActions.onLoad), initd = !0;
                    var ab = DY.Colors.get("abc");
                    if ("" != ab && null != ab && "undefined" != ab && (abd = !0), "undefined" != typeof DY.segdef && "" != DY.segdef) try {
                        DY.segdef = eval(DY.segdef)
                    } catch (exception) {} else DY.segdef = "";
                    DY.SiteVariables.calculateSiteVariables(), calculateGoals(), DY.QManager.init(queueSample);
                    try {
                        DY.ServerUtil.logDelayedData()
                    } catch (ex) {}
                    var uadata = DY.Detectors.ua();
                    (!uadata.ie || uadata.ieVer > 8) && (contMark(markRetry), DY.PageStatistics()), $dy(document).ready(function() {
                        try {
                            finishedMarking = !0, addSegment(), setTimeout(function() {
                                try {
                                    DY.ArticleExp.logVariations(), DY.AdDetection.execute(), DY.DataCollection.li(abd, $dy(DY.AdDetection.dycls())), DY.DataCollection.done()
                                } catch (a) {}
                            }, 1e3)
                        } catch (a) {}
                    })
                }
            } catch (exception) {}
        }

        function addSegment() {
            "undefined" == typeof DY.segdef && "" == DY.segdef;
            var a = DY.Detectors.ua();
            if (a.chrome) {
                var b = document.createElement("div");
                b.id = "dysegdiv", b.setAttribute("data-id", DY.section + ":" + DY.layout + ":" + DY.segdef), document.body.appendChild(b)
            }
        }

        function calculateGoals() {
            try {
                if (null != DY.goalScripts && DY.goalScripts.length > 0)
                    for (var i = 0; i < DY.goalScripts.length; i++) try {
                        var goalJs = eval(DY.goalScripts[i].script);
                        if (null != goalJs && "" != goalJs && ["string", "number"].indexOf(typeof goalJs)) {
                            var value = Number(goalJs);
                            NaN != value && 0 != value && (DY.goalScripts[i].val = value)
                        }
                    } catch (exception) {}
            } catch (exception) {}
        }

        function commonFlow() {
            DY.WindowActions.initMouseLeave(), DY.Predict.updatePredictStorage()
        }

        function slim() {
            setReady();
            userIdentification();
            color(null, !0), initSlim(), DY.Audiences.reportItem({
                type: "Referrer",
                data: DY.ServerUtil.getRef()
            }), commonFlow()
        }

        function work() {
            var a;
            try {
                setReady();
                var b = userIdentification();
                color(null, !0);
                init();
                var c = DY.Detectors.ua();
                if (cookieSupport) {
                    DY.Util.checkCall(100) && !c.ie;
                    var d = collectData(b);
                    color(d.d, !1)
                }
                "undefined" != typeof DY.geoCode && DY.StorageUtils.set("_dy_geo", DY.geoCode + "." + DY.geoCont + "." + DY.geoRegionCode + "." + DY.geoCity, ["cookieStorage", "localStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain()
                }), "undefined" != typeof DY.weather && DY.StorageUtils.set("_dy_weather:" + DY.section, DYJSON.stringify(DY.weather), ["localStorage"], {}), isNaN(parseInt(DY.respTime)) || (a = Math.floor((new Date).valueOf() / 1e3), DY.StorageUtils.set("_dy_toffset", "" + (DY.respTime - a), ["cookieStorage", "localStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain()
                })), DY.Util.checkCall(serverFreq) && DY.ServerUtil.userIdActions(), commonFlow()
            } catch (e) {}
        }

        function userIdentification() {
            if (DY.StorageUtils.enabled("localStorage")) {
                var a = DY.dyid,
                    b = DY.StorageUtils.get(localIdCookie, ["cookieStorage", "localStorage"]);
                if ("undefined" == typeof b || null == b || "null" == b || isNaN(parseInt(b)) || parseInt(b) == DY.ServerUtil.INVALID_USER_ID) DY.StorageUtils.set(localIdCookie, a, ["cookieStorage", "localStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain()
                }), DY.StorageUtils.set(firstSessionCookie, "true", ["cookieStorage", "sessionStorage"], {
                    domain: DY.StorageUtils.getSecondLevelDomain(),
                    expire: 0
                });
                else if (a != b) {
                    DY.dyid = b, DY.nu = !1, a = b, cookieDeleter = !0;
                    var c = DY.StorageUtils.get(mismatchCount, ["cookieStorage", "localStorage"]);
                    DY.StorageUtils.set(mismatchCount, ++c, ["cookieStorage", "localStorage"], {
                        domain: DY.StorageUtils.getSecondLevelDomain()
                    }), c > 5 && (noThird = !0)
                }
                DY.StorageUtils.enabled("cookieStorage") ? (null == a || "undefined" == a) && (a = -2) : (cookieSupport = !1, a = -1)
            } else cookieSupport = !1, a = -1;
            return a
        }

        function collectData(a) {
            var b = DY.DataCollection.visit(a);
            return b
        }

        function colorUA() {
            var a = DY.Detectors.ua(),
                b = DY.Detectors.sr(),
                c = "";
            return (a.mobile || a.tablet) && (c += "d."), a.iph && (c += "ip."), a.tablet && (c += a.and ? b.width > 1024 ? "tb." : "an." : "tb."), a.win && (c += "w."), a.mac && (c += "m."), a.linux && (c += "l."), a.ie ? c += "i" + a.ieVer + "." : a.firefox ? c += "f." : a.safari ? a.chrome ? c += "c." : a.safari && (c += "s.") : c += a.opera ? "o." : "ob.", c
        }

        function colorWindow() {
            var a = (DY.Detectors.sr(), DY.Detectors.ws()),
                b = "";
            return b += a.width > 1366 ? "ws." : a.width > 1024 ? "ms." : "ss."
        }

        function colorUsage(a) {
            if ("undefined" == typeof a) return "";
            var b = "";
            b += DY.vd.d[0] > dfreq[0] ? DY.vd.d[0] > dfreq[1] ? DY.vd.d[0] > dfreq[2] ? DY.vd.d[0] > dfreq[3] ? "frv5." : "frv4." : "frv3." : "frv2." : "frv1.", a[4] < freq && (b += "frs.");
            var c = DY.DataCollection.getVDA(a);
            return c[0] > ltoslim ? b += "ltos." : c[0] > toslim && (b += "tos."), c[1] > toalim && (b += "ah."), c[2] > clklim && (b += "clk."), "undefined" != typeof FB && null != FB && FB.getUserID() > 0 && (b += "fb."), b
        }

        function colorStorage() {
            var a = "";
            cookieSupport || (a += "nc."), cookieDeleter && (a += "cd."), noThird && (a += "nc3.");
            var b = DY.StorageUtils.get(firstSessionCookie, ["cookieStorage", "sessionStorage"]);
            return null != b && "undefined" != typeof b && "" != b && (a += "fst."), a
        }

        function color(a, b) {
            var c = "";
            return c += colorUA() + colorWindow() + colorStorage(), b || (c += colorUsage(a)), DY.Colors.set("st", c), c
        }

        function isReady() {
            return ready
        }

        function setReady() {
            ready = !0
        }
        var serverFreq = 50,
            freq = 600,
            cookieSupport = !0,
            cookieDeleter = !1,
            noThird = !1,
            initd = !1,
            toslim = 40,
            ltoslim = 300,
            toalim = 10,
            clklim = 1,
            abd = !1,
            ready = !1,
            queueSample = 50,
            dfreq = [1, 5, 10, 25],
            localIdCookie = "_dyid",
            mismatchCount = "_dycmc",
            firstSessionCookie = "_dyfs",
            markRetry = 10,
            markInterval = 500,
            finishedMarking = !1;
        return {
            ab: isAB,
            work: work,
            slim: slim,
            isReady: isReady
        }
    }(), dyWaitForJQuery();