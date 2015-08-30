(function() {




    geolocation = {};
    geolocation.requestGeo = function(c) {
        geolocation.cdn3Requested = +new Date;
        var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
            a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = c;
        b.insertBefore(a, b.firstChild)
    };


    var optly = {
        nativity: {}
    };
    optly.nativity.getNativeGetElementsByClassName = function() {
        var a = document.getElementsByClassName;
        if (!optly.nativity.isNativeFunction(a)) var a = (window.optimizely || {}).getElementsByClassName,
            b = (window.optly || {}).getElementsByClassName,
            a = optly.nativity.isNativeFunction(a) ? a : optly.nativity.isNativeFunction(b) ? b : null;
        return a
    };
    optly.nativity.isNativeFunction = function(a) {
        return a && -1 !== String(a).indexOf("[native code]")
    };
    optly.Cleanse = {};
    optly.Cleanse.each = function(a, b, d) {
        var h = !!Object.prototype.__lookupGetter__,
            e = !!Object.prototype.__lookupSetter__,
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var f = h ? a.__lookupGetter__(c) : null,
                    g = e ? a.__lookupSetter__(c) : null;
                try {
                    b.call(d, c, !f ? a[c] : null, f, g)
                } catch (i) {}
            }
    };
    optly.Cleanse.finish = function() {
        if (optly.Cleanse.running) {
            optly.Cleanse.running = !1;
            optly.Cleanse.each(optly.Cleanse.types, function(a, d) {
                Object.prototype.__defineGetter__ && optly.Cleanse.each(optly.Cleanse.getters[a], function(c, b) {
                    d.prototype.__defineGetter__(c, b);
                    optly.Cleanse.log("restored getter", a, c)
                });
                Object.prototype.__defineSetter__ && optly.Cleanse.each(optly.Cleanse.setters[a], function(c, b) {
                    d.prototype.__defineSetter__(c, b);
                    optly.Cleanse.log("restored setter", a, c)
                });
                optly.Cleanse.each(optly.Cleanse.properties[a],
                    function(b, f) {
                        d.prototype[b] = f;
                        optly.Cleanse.log("restored property", a, b)
                    })
            });
            optly.Cleanse.unfixGetElementsByClassName();
            optly.Cleanse.log("finish");
            var a = window.console;
            if ((-1 !== window.location.hash.indexOf("optimizely_log=true") || -1 !== window.location.search.indexOf("optimizely_log=true")) && a && a.log)
                for (var b = optly.Cleanse.logs, d = 0; d < b.length; d++) a.log(b[d])
        }
    };
    optly.Cleanse.log = function(a, b, d) {
        b ? (b = b.replace(/_/g, ""), optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a + ": " + b + "." + d)) : optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a)
    };
    optly.Cleanse.start = function() {
        var a = window.location.hostname;
        if (!(-1 !== a.indexOf("optimizely") && -1 === a.indexOf("edit") && -1 === a.indexOf("preview") && -1 === a.indexOf("test")))
            if (optly.Cleanse.running) optly.Cleanse.log("already running so didn't start");
            else {
                optly.Cleanse.log("start");
                optly.Cleanse.running = !0;
                for (var b in optly.Cleanse.types) optly.Cleanse.types[b] || delete optly.Cleanse.types[b];
                optly.Cleanse.each(optly.Cleanse.types, function(a, b) {
                    optly.Cleanse.getters[a] = {};
                    optly.Cleanse.properties[a] = {};
                    optly.Cleanse.setters[a] = {};
                    optly.Cleanse.each(b.prototype, function(e, c, f, g) {
                        optly.nativity.isNativeFunction(c) || optly.nativity.isNativeFunction(f) || optly.nativity.isNativeFunction(g) ? optly.Cleanse.log("ignore native code", a, e) : (f ? (optly.Cleanse.getters[a][e] = f, optly.Cleanse.log("cleansed getter", a, e)) : (optly.Cleanse.properties[a][e] = c, optly.Cleanse.log("cleansed property", a, e)), g && (optly.Cleanse.setters[a][e] = g, optly.Cleanse.log("cleansed setter", a, e)), delete b.prototype[e])
                    })
                });
                optly.Cleanse.fixGetElementsByClassName();
                optly.Cleanse.hasRunStart = !0
            }
    };
    optly.Cleanse.fixGetElementsByClassName = function() {
        if (!optly.nativity.isNativeFunction(document.getElementsByClassName)) {
            var a = optly.nativity.getNativeGetElementsByClassName();
            a ? (optly.Cleanse.getElementsByClassName = document.getElementsByClassName, document.getElementsByClassName = a) : optly.Cleanse.log("Error: native HTMLElement.prototype.getElementsByClassName missing")
        }
    };
    optly.Cleanse.unfixGetElementsByClassName = function() {
        optly.Cleanse.getElementsByClassName && (document.getElementsByClassName = optly.Cleanse.getElementsByClassName, optly.Cleanse.getElementsByClassName = null)
    };
    optly.Cleanse.getElementsByClassName = null;
    optly.Cleanse.getters = {};
    optly.Cleanse.logs = [];
    optly.Cleanse.properties = {};
    optly.Cleanse.setters = {};
    optly.Cleanse.types = {
        Object_: Object
    };
    window.optly = window.optly || {};
    window.optly.Cleanse = {
        finish: optly.Cleanse.finish,
        logs: optly.Cleanse.logs,
        start: optly.Cleanse.start
    };
    optly.Cleanse.start();
    var $ = function(r, m) {
        function ya(a, b, c) {
            if (c === m && 1 === a.nodeType)
                if (c = "data-" + b.replace(kb, "-$1").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : !d.isNaN(c) ? parseFloat(c) : lb.test(c) ? d.parseJSON(c) : c
                    } catch (g) {}
                    d.data(a, b, c)
                } else c = m;
            return c
        }

        function ha(a) {
            for (var b in a)
                if ("toJSON" !== b) return !1;
            return !0
        }

        function za(a, b, c) {
            var g = b + "defer",
                e = b + "queue",
                f = b + "mark",
                h = d.data(a, g, m, !0);
            h && (("queue" === c || !d.data(a, e, m, !0)) && ("mark" === c || !d.data(a,
                f, m, !0))) && setTimeout(function() {
                !d.data(a, e, m, !0) && !d.data(a, f, m, !0) && (d.removeData(a, g, !0), h.resolve())
            }, 0)
        }

        function w() {
            return !1
        }

        function O() {
            return !0
        }

        function Aa(a, b, c) {
            var g = d.extend({}, c[0]);
            g.type = a;
            g.originalEvent = {};
            g.liveFired = m;
            d.event.handle.call(b, g);
            g.isDefaultPrevented() && c[0].preventDefault()
        }

        function mb(a) {
            var b, c, g, e, f, h, i, j, k, m, l, q = [];
            e = [];
            f = d._data(this, "events");
            if (!(a.liveFired === this || !f || !f.live || a.target.disabled || a.button && "click" === a.type)) {
                a.namespace && (l = RegExp("(^|\\.)" +
                    a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
                a.liveFired = this;
                var n = f.live.slice(0);
                for (i = 0; i < n.length; i++) f = n[i], f.origType.replace(ia, "") === a.type ? e.push(f.selector) : n.splice(i--, 1);
                e = d(a.target).closest(e, a.currentTarget);
                j = 0;
                for (k = e.length; j < k; j++) {
                    m = e[j];
                    for (i = 0; i < n.length; i++)
                        if (f = n[i], m.selector === f.selector && (!l || l.test(f.namespace)) && !m.elem.disabled) {
                            h = m.elem;
                            g = null;
                            if ("mouseenter" === f.preType || "mouseleave" === f.preType) a.type = f.preType, (g = d(a.relatedTarget).closest(f.selector)[0]) &&
                                d.contains(h, g) && (g = h);
                            (!g || g !== h) && q.push({
                                elem: h,
                                handleObj: f,
                                level: m.level
                            })
                        }
                }
                j = 0;
                for (k = q.length; j < k; j++) {
                    e = q[j];
                    if (c && e.level > c) break;
                    a.currentTarget = e.elem;
                    a.data = e.handleObj.data;
                    a.handleObj = e.handleObj;
                    l = e.handleObj.origHandler.apply(e.elem, arguments);
                    if (!1 === l || a.isPropagationStopped())
                        if (c = e.level, !1 === l && (b = !1), a.isImmediatePropagationStopped()) break
                }
                return b
            }
        }

        function P(a, b) {
            return (a && "*" !== a ? a + "." : "") + b.replace(nb, "`").replace(ob, "&")
        }

        function Ba(a, b, c) {
            b = b || 0;
            if (d.isFunction(b)) return d.grep(a,
                function(a, g) {
                    return !!b.call(a, g, a) === c
                });
            if (b.nodeType) return d.grep(a, function(a) {
                return a === b === c
            });
            if ("string" === typeof b) {
                var g = d.grep(a, function(a) {
                    return 1 === a.nodeType
                });
                if (pb.test(b)) return d.filter(b, g, !c);
                b = d.filter(b, g)
            }
            return d.grep(a, function(a) {
                return 0 <= d.inArray(a, b) === c
            })
        }

        function Ca(a, b) {
            if (1 === b.nodeType && d.hasData(a)) {
                var c = d.expando,
                    g = d.data(a),
                    e = d.data(b, g);
                if (g = g[c]) {
                    var f = g.events,
                        e = e[c] = d.extend({}, g);
                    if (f) {
                        delete e.handle;
                        e.events = {};
                        for (var h in f) {
                            c = 0;
                            for (g = f[h].length; c <
                                g; c++) d.event.add(b, h + (f[h][c].namespace ? "." : "") + f[h][c].namespace, f[h][c], f[h][c].data)
                        }
                    }
                }
            }
        }

        function Da(a, b) {
            var c;
            if (1 === b.nodeType) {
                b.clearAttributes && b.clearAttributes();
                b.mergeAttributes && b.mergeAttributes(a);
                c = b.nodeName.toLowerCase();
                if ("object" === c) b.outerHTML = a.outerHTML;
                else if ("input" === c && ("checkbox" === a.type || "radio" === a.type)) {
                    if (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value) b.value = a.value
                } else if ("option" === c) b.selected = a.defaultSelected;
                else if ("input" === c ||
                    "textarea" === c) b.defaultValue = a.defaultValue;
                b.removeAttribute(d.expando)
            }
        }

        function Q(a) {
            return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
        }

        function Ea(a) {
            if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
        }

        function Fa(a) {
            d.nodeName(a, "input") ? Ea(a) : "getElementsByTagName" in a && d.grep(a.getElementsByTagName("input"), Ea)
        }

        function qb(a, b) {
            b.src ? d.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : d.globalEval((b.text || b.textContent ||
                b.innerHTML || "").replace(rb, "/*$0*/"));
            b.parentNode && b.parentNode.removeChild(b)
        }

        function Ga(a, b, c) {
            var g = "width" === b ? a.offsetWidth : a.offsetHeight,
                e = "width" === b ? sb : tb;
            if (0 < g) return "border" !== c && d.each(e, function() {
                c || (g -= parseFloat(d.css(a, "padding" + this)) || 0);
                g = "margin" === c ? g + (parseFloat(d.css(a, c + this)) || 0) : g - (parseFloat(d.css(a, "border" + this + "Width")) || 0)
            }), g + "px";
            g = A(a, b, b);
            if (0 > g || null == g) g = a.style[b] || 0;
            g = parseFloat(g) || 0;
            c && d.each(e, function() {
                g += parseFloat(d.css(a, "padding" + this)) || 0;
                "padding" !==
                c && (g += parseFloat(d.css(a, "border" + this + "Width")) || 0);
                "margin" === c && (g += parseFloat(d.css(a, c + this)) || 0)
            });
            return g + "px"
        }
        var l = r.document,
            d, Ha = function() {
                if (!k.isReady) {
                    try {
                        l.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(Ha, 1);
                        return
                    }
                    k.ready()
                }
            },
            k = function(a, b) {
                return new k.fn.init(a, b, Ia)
            },
            ub = r.jQuery,
            vb = r.$,
            Ia, wb = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            Ja = /\S/,
            Ka = /^\s+/,
            La = /\s+$/,
            xb = /\d/,
            yb = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            zb = /^[\],:{}\s]*$/,
            Ab = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            Bb = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            Cb = /(?:^|:|,)(?:\s*\[)+/g,
            Db = /(webkit)[ \/]([\w.]+)/,
            Eb = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            Fb = /(msie) ([\w.]+)/,
            Gb = /(mozilla)(?:.*? rv:([\w.]+))?/,
            Hb = /-([a-z]|[0-9])/ig,
            Ib = /^-ms-/,
            Jb = function(a, b) {
                return (b + "").toUpperCase()
            },
            Kb = r.navigator.userAgent,
            R, S, B, Lb = Object.prototype.toString,
            ja = Object.prototype.hasOwnProperty,
            ka = Array.prototype.push,
            I = Array.prototype.slice,
            Ma = String.prototype.trim,
            Na = Array.prototype.indexOf,
            Oa = {};
        k.fn = k.prototype = {
            constructor: k,
            init: function(a, b, c) {
                var g;
                if (!a) return this;
                if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                if ("body" === a && !b && l.body) return this.context = l, this[0] = l.body, this.selector = a, this.length = 1, this;
                if ("string" === typeof a) {
                    if ((g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : wb.exec(a)) && (g[1] || !b)) {
                        if (g[1]) return c = (b = b instanceof k ? b[0] : b) ? b.ownerDocument || b : l, (a = yb.exec(a)) ? k.isPlainObject(b) ? (a = [l.createElement(a[1])], k.fn.attr.call(a, b, !0)) : a = [c.createElement(a[1])] : (a = k.buildFragment([g[1]], [c]), a = (a.cacheable ?
                            k.clone(a.fragment) : a.fragment).childNodes), k.merge(this, a);
                        if ((b = l.getElementById(g[2])) && b.parentNode) {
                            if (b.id !== g[2]) return c.find(a);
                            this.length = 1;
                            this[0] = b
                        }
                        this.context = l;
                        this.selector = a;
                        return this
                    }
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
                }
                if (k.isFunction(a)) return c.ready(a);
                a.selector !== m && (this.selector = a.selector, this.context = a.context);
                return k.makeArray(a, this)
            },
            selector: "",
            jquery: "1.6.4",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return I.call(this,
                    0)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var g = this.constructor();
                k.isArray(a) ? ka.apply(g, a) : k.merge(g, a);
                g.prevObject = this;
                g.context = this.context;
                "find" === b ? g.selector = this.selector + (this.selector ? " " : "") + c : b && (g.selector = this.selector + "." + b + "(" + c + ")");
                return g
            },
            each: function(a, b) {
                return k.each(this, a, b)
            },
            ready: function(a) {
                k.bindReady();
                S.done(a);
                return this
            },
            eq: function(a) {
                return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(I.apply(this, arguments), "slice", I.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(k.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ka,
            sort: [].sort,
            splice: [].splice
        };
        k.fn.init.prototype = k.fn;
        k.extend = k.fn.extend = function() {
            var a, b, c, g, d, f = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            "boolean" === typeof f && (j = f, f = arguments[1] || {}, h = 2);
            "object" !==
            typeof f && !k.isFunction(f) && (f = {});
            i === h && (f = this, --h);
            for (; h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = f[b], g = a[b], f !== g && (j && g && (k.isPlainObject(g) || (d = k.isArray(g))) ? (d ? (d = !1, c = c && k.isArray(c) ? c : []) : c = c && k.isPlainObject(c) ? c : {}, f[b] = k.extend(j, c, g)) : g !== m && (f[b] = g));
            return f
        };
        k.extend({
            noConflict: function(a) {
                r.$ === k && (r.$ = vb);
                a && r.jQuery === k && (r.jQuery = ub);
                return k
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? k.readyWait++ : k.ready(!0)
            },
            ready: function(a) {
                if (!0 === a && !--k.readyWait || !0 !== a &&
                    !k.isReady) {
                    if (!l.body) return setTimeout(k.ready, 1);
                    k.isReady = !0;
                    !0 !== a && 0 < --k.readyWait || (S.resolveWith(l, [k]), k.fn.trigger && k(l).trigger("ready").unbind("ready"))
                }
            },
            bindReady: function() {
                if (!S) {
                    S = k._Deferred();
                    if ("complete" === l.readyState) return setTimeout(k.ready, 1);
                    if (l.addEventListener) l.addEventListener("DOMContentLoaded", B, !1), r.addEventListener("load", k.ready, !1);
                    else if (l.attachEvent) {
                        l.attachEvent("onreadystatechange", B);
                        r.attachEvent("onload", k.ready);
                        var a = !1;
                        try {
                            a = null == r.frameElement
                        } catch (b) {}
                        l.documentElement.doScroll &&
                            a && Ha()
                    }
                }
            },
            isFunction: function(a) {
                return "function" === k.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === k.type(a)
            },
            isWindow: function(a) {
                return a && "object" === typeof a && "setInterval" in a
            },
            isNaN: function(a) {
                return null == a || !xb.test(a) || isNaN(a)
            },
            type: function(a) {
                return null == a ? String(a) : Oa[Lb.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || "object" !== k.type(a) || a.nodeType || k.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ja.call(a, "constructor") && !ja.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (b) {
                    return !1
                }
                for (var c in a);
                return c === m || ja.call(a, c)
            },
            isEmptyObject: function(a) {
                for (var b in a) return !1;
                return !0
            },
            error: function(a) {
                throw a;
            },
            parseJSON: function(a) {
                if ("string" !== typeof a || !a) return null;
                a = k.trim(a);
                if (r.JSON && r.JSON.parse) return r.JSON.parse(a);
                if (zb.test(a.replace(Ab, "@").replace(Bb, "]").replace(Cb, ""))) return (new Function("return " + a))();
                k.error("Invalid JSON: " + a)
            },
            parseXML: function(a) {
                var b, c;
                try {
                    r.DOMParser ? (c = new DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async =
                        "false", b.loadXML(a))
                } catch (g) {
                    b = m
                }(!b || !b.documentElement || b.getElementsByTagName("parsererror").length) && k.error("Invalid XML: " + a);
                return b
            },
            noop: function() {},
            globalEval: function(a) {
                a && Ja.test(a) && (r.execScript || function(a) {
                    r.eval.call(r, a)
                })(a)
            },
            camelCase: function(a) {
                return a.replace(Ib, "ms-").replace(Hb, Jb)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, b, c) {
                var g, d = 0,
                    f = a.length,
                    h = f === m || k.isFunction(a);
                if (c)
                    if (h)
                        for (g in a) {
                            if (!1 === b.apply(a[g],
                                    c)) break
                        } else
                            for (; d < f && !1 !== b.apply(a[d++], c););
                    else if (h)
                    for (g in a) {
                        if (!1 === b.call(a[g], g, a[g])) break
                    } else
                        for (; d < f && !1 !== b.call(a[d], d, a[d++]););
                return a
            },
            trim: Ma ? function(a) {
                return null == a ? "" : Ma.call(a)
            } : function(a) {
                return null == a ? "" : a.toString().replace(Ka, "").replace(La, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (null != a) {
                    var g = k.type(a);
                    null == a.length || "string" === g || "function" === g || "regexp" === g || k.isWindow(a) ? ka.call(c, a) : k.merge(c, a)
                }
                return c
            },
            inArray: function(a, b) {
                if (!b) return -1;
                if (Na) return Na.call(b,
                    a);
                for (var c = 0, g = b.length; c < g; c++)
                    if (b[c] === a) return c;
                return -1
            },
            merge: function(a, b) {
                var c = a.length,
                    g = 0;
                if ("number" === typeof b.length)
                    for (var d = b.length; g < d; g++) a[c++] = b[g];
                else
                    for (; b[g] !== m;) a[c++] = b[g++];
                a.length = c;
                return a
            },
            grep: function(a, b, c) {
                for (var g = [], d, c = !!c, f = 0, h = a.length; f < h; f++) d = !!b(a[f], f), c !== d && g.push(a[f]);
                return g
            },
            map: function(a, b, c) {
                var g, d, f = [],
                    h = 0,
                    i = a.length;
                if (a instanceof k || i !== m && "number" === typeof i && (0 < i && a[0] && a[i - 1] || 0 === i || k.isArray(a)))
                    for (; h < i; h++) g = b(a[h], h, c), null !=
                        g && (f[f.length] = g);
                else
                    for (d in a) g = b(a[d], d, c), null != g && (f[f.length] = g);
                return f.concat.apply([], f)
            },
            guid: 1,
            proxy: function(a, b) {
                if ("string" === typeof b) var c = a[b],
                    b = a,
                    a = c;
                if (!k.isFunction(a)) return m;
                var d = I.call(arguments, 2),
                    c = function() {
                        return a.apply(b, d.concat(I.call(arguments)))
                    };
                c.guid = a.guid = a.guid || c.guid || k.guid++;
                return c
            },
            access: function(a, b, c, d, e, f) {
                var h = a.length;
                if ("object" === typeof b) {
                    for (var i in b) k.access(a, i, b[i], d, e, c);
                    return a
                }
                if (c !== m) {
                    d = !f && d && k.isFunction(c);
                    for (i = 0; i < h; i++) e(a[i],
                        b, d ? c.call(a[i], i, e(a[i], b)) : c, f);
                    return a
                }
                return h ? e(a[0], b) : m
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                a = Db.exec(a) || Eb.exec(a) || Fb.exec(a) || 0 > a.indexOf("compatible") && Gb.exec(a) || [];
                return {
                    browser: a[1] || "",
                    version: a[2] || "0"
                }
            },
            sub: function() {
                function a(b, d) {
                    return new a.fn.init(b, d)
                }
                k.extend(!0, a, this);
                a.superclass = this;
                a.fn = a.prototype = this();
                a.fn.constructor = a;
                a.sub = this.sub;
                a.fn.init = function(c, d) {
                    d && (d instanceof k && !(d instanceof a)) && (d = a(d));
                    return k.fn.init.call(this,
                        c, d, b)
                };
                a.fn.init.prototype = a.fn;
                var b = a(l);
                return a
            },
            browser: {}
        });
        k.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            Oa["[object " + b + "]"] = b.toLowerCase()
        });
        R = k.uaMatch(Kb);
        R.browser && (k.browser[R.browser] = !0, k.browser.version = R.version);
        k.browser.webkit && (k.browser.safari = !0);
        Ja.test("\u00a0") && (Ka = /^[\s\xA0]+/, La = /[\s\xA0]+$/);
        Ia = k(l);
        l.addEventListener ? B = function() {
            l.removeEventListener("DOMContentLoaded", B, false);
            k.ready()
        } : l.attachEvent && (B = function() {
            if (l.readyState ===
                "complete") {
                l.detachEvent("onreadystatechange", B);
                k.ready()
            }
        });
        d = k;
        var la = "done fail isResolved isRejected promise then always pipe".split(" "),
            Pa = [].slice;
        d.extend({
            _Deferred: function() {
                var a = [],
                    b, c, g, e = {
                        done: function() {
                            if (!g) {
                                var c = arguments,
                                    h, i, j, k, m;
                                if (b) {
                                    m = b;
                                    b = 0
                                }
                                h = 0;
                                for (i = c.length; h < i; h++) {
                                    j = c[h];
                                    k = d.type(j);
                                    k === "array" ? e.done.apply(e, j) : k === "function" && a.push(j)
                                }
                                m && e.resolveWith(m[0], m[1])
                            }
                            return this
                        },
                        resolveWith: function(d, e) {
                            if (!g && !b && !c) {
                                e = e || [];
                                c = 1;
                                try {
                                    for (; a[0];) a.shift().apply(d, e)
                                } finally {
                                    b = [d, e];
                                    c = 0
                                }
                            }
                            return this
                        },
                        resolve: function() {
                            e.resolveWith(this, arguments);
                            return this
                        },
                        isResolved: function() {
                            return !(!c && !b)
                        },
                        cancel: function() {
                            g = 1;
                            a = [];
                            return this
                        }
                    };
                return e
            },
            Deferred: function(a) {
                var b = d._Deferred(),
                    c = d._Deferred(),
                    g;
                d.extend(b, {
                    then: function(a, c) {
                        b.done(a).fail(c);
                        return this
                    },
                    always: function() {
                        return b.done.apply(b, arguments).fail.apply(this, arguments)
                    },
                    fail: c.done,
                    rejectWith: c.resolveWith,
                    reject: c.resolve,
                    isRejected: c.isResolved,
                    pipe: function(a, c) {
                        return d.Deferred(function(g) {
                            d.each({
                                done: [a,
                                    "resolve"
                                ],
                                fail: [c, "reject"]
                            }, function(a, c) {
                                var f = c[0],
                                    e = c[1],
                                    k;
                                if (d.isFunction(f)) b[a](function() {
                                    if ((k = f.apply(this, arguments)) && d.isFunction(k.promise)) k.promise().then(g.resolve, g.reject);
                                    else g[e + "With"](this === b ? g : this, [k])
                                });
                                else b[a](g[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) {
                            if (g) return g;
                            g = a = {}
                        }
                        for (var c = la.length; c--;) a[la[c]] = b[la[c]];
                        return a
                    }
                });
                b.done(c.cancel).fail(b.cancel);
                delete b.cancel;
                a && a.call(b, b);
                return b
            },
            when: function(a) {
                function b(a) {
                    return function(b) {
                        c[a] = arguments.length >
                            1 ? Pa.call(arguments, 0) : b;
                        --f || h.resolveWith(h, Pa.call(c, 0))
                    }
                }
                var c = arguments,
                    g = 0,
                    e = c.length,
                    f = e,
                    h = e <= 1 && a && d.isFunction(a.promise) ? a : d.Deferred();
                if (e > 1) {
                    for (; g < e; g++) c[g] && d.isFunction(c[g].promise) ? c[g].promise().then(b(g), h.reject) : --f;
                    f || h.resolveWith(h, c)
                } else h !== a && h.resolveWith(h, e ? [a] : []);
                return h.promise()
            }
        });
        var Mb = d,
            ma;
        var o = l.createElement("div"),
            Nb = l.documentElement,
            na, C, T, U, u, D, s, V, J, W, x, X, K, Y, E, F;
        o.setAttribute("className", "t");
        o.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        na = o.getElementsByTagName("*");
        C = o.getElementsByTagName("a")[0];
        if (!na || !na.length || !C) ma = {};
        else {
            T = l.createElement("select");
            U = T.appendChild(l.createElement("option"));
            u = o.getElementsByTagName("input")[0];
            s = {
                leadingWhitespace: 3 === o.firstChild.nodeType,
                tbody: !o.getElementsByTagName("tbody").length,
                htmlSerialize: !!o.getElementsByTagName("link").length,
                style: /top/.test(C.getAttribute("style")),
                hrefNormalized: "/a" === C.getAttribute("href"),
                opacity: /^0.55$/.test(C.style.opacity),
                cssFloat: !!C.style.cssFloat,
                checkOn: "on" === u.value,
                optSelected: U.selected,
                getSetAttribute: "t" !== o.className,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            };
            u.checked = !0;
            s.noCloneChecked = u.cloneNode(!0).checked;
            T.disabled = !0;
            s.optDisabled = !U.disabled;
            try {
                delete o.test
            } catch (jc) {
                s.deleteExpando = !1
            }!o.addEventListener && (o.attachEvent && o.fireEvent) && (o.attachEvent("onclick", function() {
                s.noCloneEvent = false
            }), o.cloneNode(!0).fireEvent("onclick"));
            u = l.createElement("input");
            u.value = "t";
            u.setAttribute("type", "radio");
            s.radioValue = "t" === u.value;
            u.setAttribute("checked", "checked");
            o.appendChild(u);
            V = l.createDocumentFragment();
            V.appendChild(o.firstChild);
            s.checkClone = V.cloneNode(!0).cloneNode(!0).lastChild.checked;
            o.innerHTML = "";
            o.style.width = o.style.paddingLeft = "1px";
            J = l.getElementsByTagName("body")[0];
            x = l.createElement(J ? "div" : "body");
            X = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            J && d.extend(X, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (E in X) x.style[E] = X[E];
            x.appendChild(o);
            W = J || Nb;
            W.insertBefore(x, W.firstChild);
            s.appendChecked = u.checked;
            s.boxModel = 2 === o.offsetWidth;
            "zoom" in o.style && (o.style.display = "inline", o.style.zoom = 1, s.inlineBlockNeedsLayout = 2 === o.offsetWidth, o.style.display = "", o.innerHTML = "<div style='width:4px;'></div>", s.shrinkWrapBlocks = 2 !== o.offsetWidth);
            o.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            K = o.getElementsByTagName("td");
            F = 0 === K[0].offsetHeight;
            K[0].style.display = "";
            K[1].style.display = "none";
            s.reliableHiddenOffsets = F && 0 === K[0].offsetHeight;
            o.innerHTML = "";
            l.defaultView && l.defaultView.getComputedStyle && (D = l.createElement("div"), D.style.width = "0", D.style.marginRight = "0", o.appendChild(D), s.reliableMarginRight = 0 === (parseInt((l.defaultView.getComputedStyle(D, null) || {
                marginRight: 0
            }).marginRight, 10) || 0));
            x.innerHTML = "";
            W.removeChild(x);
            if (o.attachEvent)
                for (E in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) Y = "on" + E, F = Y in o, F || (o.setAttribute(Y,
                    "return;"), F = "function" === typeof o[Y]), s[E + "Bubbles"] = F;
            x = V = T = U = J = D = o = u = null;
            ma = s
        }
        Mb.support = ma;
        d.boxModel = d.support.boxModel;
        var lb = /^(?:\{.*\}|\[.*\])$/,
            kb = /([A-Z])/g;
        d.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
                return !!a && !ha(a)
            },
            data: function(a, b, c, g) {
                if (d.acceptData(a)) {
                    var e = d.expando,
                        f = typeof b === "string",
                        h = a.nodeType,
                        i = h ? d.cache : a,
                        j = h ? a[d.expando] : a[d.expando] && d.expando;
                    if (j && (!g || !j || !i[j] || i[j][e]) || !(f && c === m)) {
                        if (!j) h ? a[d.expando] = j = ++d.uuid : j = d.expando;
                        if (!i[j]) {
                            i[j] = {};
                            if (!h) i[j].toJSON = d.noop
                        }
                        if (typeof b === "object" || typeof b === "function") g ? i[j][e] = d.extend(i[j][e], b) : i[j] = d.extend(i[j], b);
                        a = i[j];
                        if (g) {
                            a[e] || (a[e] = {});
                            a = a[e]
                        }
                        c !== m && (a[d.camelCase(b)] = c);
                        if (b === "events" && !a[b]) return a[e] && a[e].events;
                        if (f) {
                            c = a[b];
                            c == null && (c = a[d.camelCase(b)])
                        } else c = a;
                        return c
                    }
                }
            },
            removeData: function(a, b, c) {
                if (d.acceptData(a)) {
                    var g,
                        e = d.expando,
                        f = a.nodeType,
                        h = f ? d.cache : a,
                        i = f ? a[d.expando] : d.expando;
                    if (h[i]) {
                        if (b)
                            if (g = c ? h[i][e] : h[i]) {
                                g[b] || (b = d.camelCase(b));
                                delete g[b];
                                if (!ha(g)) return
                            }
                        if (c) {
                            delete h[i][e];
                            if (!ha(h[i])) return
                        }
                        b = h[i][e];
                        d.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null;
                        if (b) {
                            h[i] = {};
                            if (!f) h[i].toJSON = d.noop;
                            h[i][e] = b
                        } else f && (d.support.deleteExpando ? delete a[d.expando] : a.removeAttribute ? a.removeAttribute(d.expando) : a[d.expando] = null)
                    }
                }
            },
            _data: function(a, b, c) {
                return d.data(a, b, c, true)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b =
                        d.noData[a.nodeName.toLowerCase()];
                    if (b) return !(b === true || a.getAttribute("classid") !== b)
                }
                return true
            }
        });
        d.fn.extend({
            data: function(a, b) {
                var c = null;
                if (typeof a === "undefined") {
                    if (this.length) {
                        c = d.data(this[0]);
                        if (this[0].nodeType === 1)
                            for (var g = this[0].attributes, e, f = 0, h = g.length; f < h; f++) {
                                e = g[f].name;
                                if (e.indexOf("data-") === 0) {
                                    e = d.camelCase(e.substring(5));
                                    ya(this[0], e, c[e])
                                }
                            }
                    }
                    return c
                }
                if (typeof a === "object") return this.each(function() {
                    d.data(this, a)
                });
                var i = a.split(".");
                i[1] = i[1] ? "." + i[1] : "";
                if (b ===
                    m) {
                    c = this.triggerHandler("getData" + i[1] + "!", [i[0]]);
                    if (c === m && this.length) {
                        c = d.data(this[0], a);
                        c = ya(this[0], a, c)
                    }
                    return c === m && i[1] ? this.data(i[0]) : c
                }
                return this.each(function() {
                    var c = d(this),
                        g = [i[0], b];
                    c.triggerHandler("setData" + i[1] + "!", g);
                    d.data(this, a, b);
                    c.triggerHandler("changeData" + i[1] + "!", g)
                })
            },
            removeData: function(a) {
                return this.each(function() {
                    d.removeData(this, a)
                })
            }
        });
        d.extend({
            _mark: function(a, b) {
                if (a) {
                    b = (b || "fx") + "mark";
                    d.data(a, b, (d.data(a, b, m, true) || 0) + 1, true)
                }
            },
            _unmark: function(a, b,
                c) {
                if (a !== true) {
                    c = b;
                    b = a;
                    a = false
                }
                if (b) {
                    var c = c || "fx",
                        g = c + "mark";
                    if (a = a ? 0 : (d.data(b, g, m, true) || 1) - 1) d.data(b, g, a, true);
                    else {
                        d.removeData(b, g, true);
                        za(b, c, "mark")
                    }
                }
            },
            queue: function(a, b, c) {
                if (a) {
                    var b = (b || "fx") + "queue",
                        g = d.data(a, b, m, true);
                    c && (!g || d.isArray(c) ? g = d.data(a, b, d.makeArray(c), true) : g.push(c));
                    return g || []
                }
            },
            dequeue: function(a, b) {
                var b = b || "fx",
                    c = d.queue(a, b),
                    g = c.shift();
                g === "inprogress" && (g = c.shift());
                if (g) {
                    b === "fx" && c.unshift("inprogress");
                    g.call(a, function() {
                        d.dequeue(a, b)
                    })
                }
                if (!c.length) {
                    d.removeData(a,
                        b + "queue", true);
                    za(a, b, "queue")
                }
            }
        });
        d.fn.extend({
            queue: function(a, b) {
                if (typeof a !== "string") {
                    b = a;
                    a = "fx"
                }
                return b === m ? d.queue(this[0], a) : this.each(function() {
                    var c = d.queue(this, a, b);
                    a === "fx" && c[0] !== "inprogress" && d.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    d.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                a = d.fx ? d.fx.speeds[a] || a : a;
                b = b || "fx";
                return this.queue(b, function() {
                    var c = this;
                    setTimeout(function() {
                        d.dequeue(c, b)
                    }, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a) {
                function b() {
                    --f ||
                        c.resolveWith(g, [g])
                }
                typeof a !== "string" && (a = m);
                for (var a = a || "fx", c = d.Deferred(), g = this, e = g.length, f = 1, h = a + "defer", i = a + "queue", a = a + "mark", j; e--;)
                    if (j = d.data(g[e], h, m, true) || (d.data(g[e], i, m, true) || d.data(g[e], a, m, true)) && d.data(g[e], h, d._Deferred(), true)) {
                        f++;
                        j.done(b)
                    }
                b();
                return c.promise()
            }
        });
        var Qa = /[\n\t\r]/g,
            oa = /\s+/,
            Ob = /\r/g,
            Pb = /^(?:button|input)$/i,
            Qb = /^(?:button|input|object|select|textarea)$/i,
            Rb = /^a(?:rea)?$/i,
            Ra = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            y, Sa;
        d.fn.extend({
            attr: function(a, b) {
                return d.access(this, a, b, true, d.attr)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    d.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return d.access(this, a, b, true, d.prop)
            },
            removeProp: function(a) {
                a = d.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = m;
                        delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function(a) {
                var b, c, g, e, f, h, i;
                if (d.isFunction(a)) return this.each(function(b) {
                    d(this).addClass(a.call(this, b, this.className))
                });
                if (a && typeof a === "string") {
                    b = a.split(oa);
                    c =
                        0;
                    for (g = this.length; c < g; c++) {
                        e = this[c];
                        if (e.nodeType === 1)
                            if (!e.className && b.length === 1) e.className = a;
                            else {
                                f = " " + e.className + " ";
                                h = 0;
                                for (i = b.length; h < i; h++) ~f.indexOf(" " + b[h] + " ") || (f = f + (b[h] + " "));
                                e.className = d.trim(f)
                            }
                    }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, g, e, f, h, i;
                if (d.isFunction(a)) return this.each(function(b) {
                    d(this).removeClass(a.call(this, b, this.className))
                });
                if (a && typeof a === "string" || a === m) {
                    b = (a || "").split(oa);
                    c = 0;
                    for (g = this.length; c < g; c++) {
                        e = this[c];
                        if (e.nodeType === 1 && e.className)
                            if (a) {
                                f =
                                    (" " + e.className + " ").replace(Qa, " ");
                                h = 0;
                                for (i = b.length; h < i; h++) f = f.replace(" " + b[h] + " ", " ");
                                e.className = d.trim(f)
                            } else e.className = ""
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                    g = typeof b === "boolean";
                return d.isFunction(a) ? this.each(function(c) {
                    d(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if (c === "string")
                        for (var e, f = 0, h = d(this), i = b, j = a.split(oa); e = j[f++];) {
                            i = g ? i : !h.hasClass(e);
                            h[i ? "addClass" : "removeClass"](e)
                        } else if (c === "undefined" || c === "boolean") {
                            this.className &&
                                d._data(this, "__className__", this.className);
                            this.className = this.className || a === false ? "" : d._data(this, "__className__") || ""
                        }
                })
            },
            hasClass: function(a) {
                for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++)
                    if (this[b].nodeType === 1 && (" " + this[b].className + " ").replace(Qa, " ").indexOf(a) > -1) return true;
                return false
            },
            val: function(a) {
                var b, c, g = this[0];
                if (!arguments.length) {
                    if (g) {
                        if ((b = d.valHooks[g.nodeName.toLowerCase()] || d.valHooks[g.type]) && "get" in b && (c = b.get(g, "value")) !== m) return c;
                        c = g.value;
                        return typeof c ===
                            "string" ? c.replace(Ob, "") : c == null ? "" : c
                    }
                    return m
                }
                var e = d.isFunction(a);
                return this.each(function(c) {
                    var g = d(this);
                    if (this.nodeType === 1) {
                        c = e ? a.call(this, c, g.val()) : a;
                        c == null ? c = "" : typeof c === "number" ? c = c + "" : d.isArray(c) && (c = d.map(c, function(a) {
                            return a == null ? "" : a + ""
                        }));
                        b = d.valHooks[this.nodeName.toLowerCase()] || d.valHooks[this.type];
                        if (!b || !("set" in b) || b.set(this, c, "value") === m) this.value = c
                    }
                })
            }
        });
        d.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c = a.selectedIndex,
                            g = [],
                            e = a.options,
                            a = a.type === "select-one";
                        if (c < 0) return null;
                        for (var f = a ? c : 0, h = a ? c + 1 : e.length; f < h; f++) {
                            b = e[f];
                            if (b.selected && (d.support.optDisabled ? !b.disabled : b.getAttribute("disabled") === null) && (!b.parentNode.disabled || !d.nodeName(b.parentNode, "optgroup"))) {
                                b = d(b).val();
                                if (a) return b;
                                g.push(b)
                            }
                        }
                        return a && !g.length && e.length ? d(e[c]).val() : g
                    },
                    set: function(a, b) {
                        var c = d.makeArray(b);
                        d(a).find("option").each(function() {
                            this.selected = d.inArray(d(this).val(),
                                c) >= 0
                        });
                        if (!c.length) a.selectedIndex = -1;
                        return c
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
            attrFix: {
                tabindex: "tabIndex"
            },
            attr: function(a, b, c, g) {
                var e = a.nodeType;
                if (!a || e === 3 || e === 8 || e === 2) return m;
                if (g && b in d.attrFn) return d(a)[b](c);
                if (!("getAttribute" in a)) return d.prop(a, b, c);
                var f, h;
                if (g = e !== 1 || !d.isXMLDoc(a)) {
                    b = d.attrFix[b] || b;
                    (h = d.attrHooks[b]) || (Ra.test(b) ? h = Sa : y && (h = y))
                }
                if (c !== m) {
                    if (c === null) {
                        d.removeAttr(a, b);
                        return m
                    }
                    if (h && "set" in h && g && (f = h.set(a, c,
                            b)) !== m) return f;
                    a.setAttribute(b, "" + c);
                    return c
                }
                if (h && "get" in h && g && (f = h.get(a, b)) !== null) return f;
                f = a.getAttribute(b);
                return f === null ? m : f
            },
            removeAttr: function(a, b) {
                var c;
                if (a.nodeType === 1) {
                    b = d.attrFix[b] || b;
                    d.attr(a, b, "");
                    a.removeAttribute(b);
                    if (Ra.test(b) && (c = d.propFix[b] || b) in a) a[c] = false
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (Pb.test(a.nodeName) && a.parentNode) d.error("type property can't be changed");
                        else if (!d.support.radioValue && b === "radio" && d.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type",
                                b);
                            if (c) a.value = c;
                            return b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return y && d.nodeName(a, "button") ? y.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        if (y && d.nodeName(a, "button")) return y.set(a, b, c);
                        a.value = b
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
            prop: function(a, b, c) {
                var g =
                    a.nodeType;
                if (!a || g === 3 || g === 8 || g === 2) return m;
                var e, f;
                if (g !== 1 || !d.isXMLDoc(a)) {
                    b = d.propFix[b] || b;
                    f = d.propHooks[b]
                }
                return c !== m ? f && "set" in f && (e = f.set(a, c, b)) !== m ? e : a[b] = c : f && "get" in f && (e = f.get(a, b)) !== null ? e : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : Qb.test(a.nodeName) || Rb.test(a.nodeName) && a.href ? 0 : m
                    }
                }
            }
        });
        d.attrHooks.tabIndex = d.propHooks.tabIndex;
        Sa = {
            get: function(a, b) {
                var c;
                return d.prop(a, b) === true || (c = a.getAttributeNode(b)) &&
                    c.nodeValue !== false ? b.toLowerCase() : m
            },
            set: function(a, b, c) {
                if (b === false) d.removeAttr(a, c);
                else {
                    b = d.propFix[c] || c;
                    b in a && (a[b] = true);
                    a.setAttribute(c, c.toLowerCase())
                }
                return c
            }
        };
        d.support.getSetAttribute || (y = d.valHooks.button = {
            get: function(a, b) {
                var c;
                return (c = a.getAttributeNode(b)) && c.nodeValue !== "" ? c.nodeValue : m
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                if (!d) {
                    d = l.createAttribute(c);
                    a.setAttributeNode(d)
                }
                return d.nodeValue = b + ""
            }
        }, d.each(["width", "height"], function(a, b) {
            d.attrHooks[b] = d.extend(d.attrHooks[b], {
                set: function(a, d) {
                    if (d === "") {
                        a.setAttribute(b, "auto");
                        return d
                    }
                }
            })
        }));
        d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function(a, b) {
            d.attrHooks[b] = d.extend(d.attrHooks[b], {
                get: function(a) {
                    a = a.getAttribute(b, 2);
                    return a === null ? m : a
                }
            })
        });
        d.support.style || (d.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || m
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        });
        d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {
            get: function(a) {
                if (a = a.parentNode) {
                    a.selectedIndex;
                    a.parentNode && a.parentNode.selectedIndex
                }
                return null
            }
        }));
        d.support.checkOn || d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = {
                get: function(a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        });
        d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = d.extend(d.valHooks[this], {
                set: function(a, b) {
                    if (d.isArray(b)) return a.checked = d.inArray(d(a).val(), b) >= 0
                }
            })
        });
        var ia = /\.(.*)$/,
            pa = /^(?:textarea|input|select)$/i,
            nb = /\./g,
            ob = / /g,
            Sb = /[^\w\s.|`]/g,
            Tb = function(a) {
                return a.replace(Sb, "\\$&")
            };
        d.event = {
            add: function(a, b, c, g) {
                if (!(a.nodeType === 3 || a.nodeType === 8)) {
                    if (c === false) c = w;
                    else if (!c) return;
                    var e, f;
                    if (c.handler) {
                        e = c;
                        c = e.handler
                    }
                    if (!c.guid) c.guid = d.guid++;
                    if (f = d._data(a)) {
                        var h = f.events,
                            i = f.handle;
                        if (!h) f.events = h = {};
                        if (!i) f.handle = i = function(a) {
                            return typeof d !== "undefined" && (!a || d.event.triggered !== a.type) ? d.event.handle.apply(i.elem, arguments) : m
                        };
                        i.elem = a;
                        for (var b = b.split(" "), j, k = 0, l; j = b[k++];) {
                            f = e ? d.extend({}, e) : {
                                handler: c,
                                data: g
                            };
                            if (j.indexOf(".") > -1) {
                                l = j.split(".");
                                j = l.shift();
                                f.namespace =
                                    l.slice(0).sort().join(".")
                            } else {
                                l = [];
                                f.namespace = ""
                            }
                            f.type = j;
                            if (!f.guid) f.guid = c.guid;
                            var n = h[j],
                                q = d.event.special[j] || {};
                            if (!n) {
                                n = h[j] = [];
                                if (!q.setup || q.setup.call(a, g, l, i) === false) a.addEventListener ? a.addEventListener(j, i, false) : a.attachEvent && a.attachEvent("on" + j, i)
                            }
                            if (q.add) {
                                q.add.call(a, f);
                                if (!f.handler.guid) f.handler.guid = c.guid
                            }
                            n.push(f);
                            d.event.global[j] = true
                        }
                        a = null
                    }
                }
            },
            global: {},
            remove: function(a, b, c, g) {
                if (!(a.nodeType === 3 || a.nodeType === 8)) {
                    c === false && (c = w);
                    var e, f, h = 0,
                        i, j, k, l, n, q, p = d.hasData(a) &&
                        d._data(a),
                        o = p && p.events;
                    if (p && o) {
                        if (b && b.type) {
                            c = b.handler;
                            b = b.type
                        }
                        if (!b || typeof b === "string" && b.charAt(0) === ".") {
                            b = b || "";
                            for (e in o) d.event.remove(a, e + b)
                        } else {
                            for (b = b.split(" "); e = b[h++];) {
                                l = e;
                                i = e.indexOf(".") < 0;
                                j = [];
                                if (!i) {
                                    j = e.split(".");
                                    e = j.shift();
                                    k = RegExp("(^|\\.)" + d.map(j.slice(0).sort(), Tb).join("\\.(?:.*\\.)?") + "(\\.|$)")
                                }
                                if (n = o[e])
                                    if (c) {
                                        l = d.event.special[e] || {};
                                        for (f = g || 0; f < n.length; f++) {
                                            q = n[f];
                                            if (c.guid === q.guid) {
                                                if (i || k.test(q.namespace)) {
                                                    g == null && n.splice(f--, 1);
                                                    l.remove && l.remove.call(a,
                                                        q)
                                                }
                                                if (g != null) break
                                            }
                                        }
                                        if (n.length === 0 || g != null && n.length === 1) {
                                            (!l.teardown || l.teardown.call(a, j) === false) && d.removeEvent(a, e, p.handle);
                                            delete o[e]
                                        }
                                    } else
                                        for (f = 0; f < n.length; f++) {
                                            q = n[f];
                                            if (i || k.test(q.namespace)) {
                                                d.event.remove(a, l, q.handler, f);
                                                n.splice(f--, 1)
                                            }
                                        }
                            }
                            if (d.isEmptyObject(o)) {
                                if (b = p.handle) b.elem = null;
                                delete p.events;
                                delete p.handle;
                                d.isEmptyObject(p) && d.removeData(a, m, true)
                            }
                        }
                    }
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(a, b, c, g) {
                var e = a.type || a,
                    f = [],
                    h;
                if (e.indexOf("!") >=
                    0) {
                    e = e.slice(0, -1);
                    h = true
                }
                if (e.indexOf(".") >= 0) {
                    f = e.split(".");
                    e = f.shift();
                    f.sort()
                }
                if (c && !d.event.customEvent[e] || d.event.global[e]) {
                    a = typeof a === "object" ? a[d.expando] ? a : new d.Event(e, a) : new d.Event(e);
                    a.type = e;
                    a.exclusive = h;
                    a.namespace = f.join(".");
                    a.namespace_re = RegExp("(^|\\.)" + f.join("\\.(?:.*\\.)?") + "(\\.|$)");
                    if (g || !c) {
                        a.preventDefault();
                        a.stopPropagation()
                    }
                    if (c) {
                        if (!(c.nodeType === 3 || c.nodeType === 8)) {
                            a.result = m;
                            a.target = c;
                            b = b != null ? d.makeArray(b) : [];
                            b.unshift(a);
                            f = c;
                            g = e.indexOf(":") < 0 ? "on" +
                                e : "";
                            do {
                                h = d._data(f, "handle");
                                a.currentTarget = f;
                                h && h.apply(f, b);
                                if (g && d.acceptData(f) && f[g] && f[g].apply(f, b) === false) {
                                    a.result = false;
                                    a.preventDefault()
                                }
                                f = f.parentNode || f.ownerDocument || f === a.target.ownerDocument && r
                            } while (f && !a.isPropagationStopped());
                            if (!a.isDefaultPrevented()) {
                                var i, f = d.event.special[e] || {};
                                if ((!f._default || f._default.call(c.ownerDocument, a) === false) && !(e === "click" && d.nodeName(c, "a")) && d.acceptData(c)) {
                                    try {
                                        if (g && c[e]) {
                                            (i = c[g]) && (c[g] = null);
                                            d.event.triggered = e;
                                            c[e]()
                                        }
                                    } catch (j) {}
                                    i &&
                                        (c[g] = i);
                                    d.event.triggered = m
                                }
                            }
                            return a.result
                        }
                    } else d.each(d.cache, function() {
                        var c = this[d.expando];
                        c && (c.events && c.events[e]) && d.event.trigger(a, b, c.handle.elem)
                    })
                }
            },
            handle: function(a) {
                var a = d.event.fix(a || r.event),
                    b = ((d._data(this, "events") || {})[a.type] || []).slice(0),
                    c = !a.exclusive && !a.namespace,
                    g = Array.prototype.slice.call(arguments, 0);
                g[0] = a;
                a.currentTarget = this;
                for (var e = 0, f = b.length; e < f; e++) {
                    var h = b[e];
                    if (c || a.namespace_re.test(h.namespace)) {
                        a.handler = h.handler;
                        a.data = h.data;
                        a.handleObj = h;
                        h =
                            h.handler.apply(this, g);
                        if (h !== m) {
                            a.result = h;
                            if (h === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
                return a.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function(a) {
                if (a[d.expando]) return a;
                for (var b = a, a = d.Event(b), c = this.props.length, g; c;) {
                    g = this.props[--c];
                    a[g] = b[g]
                }
                if (!a.target) a.target = a.srcElement || l;
                if (a.target.nodeType === 3) a.target = a.target.parentNode;
                if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
                if (a.pageX == null && a.clientX != null) {
                    c = a.target.ownerDocument || l;
                    b = c.documentElement;
                    c = c.body;
                    a.pageX = a.clientX + (b && b.scrollLeft || c && c.scrollLeft || 0) - (b && b.clientLeft || c && c.clientLeft || 0);
                    a.pageY = a.clientY + (b && b.scrollTop || c && c.scrollTop ||
                        0) - (b && b.clientTop || c && c.clientTop || 0)
                }
                if (a.which == null && (a.charCode != null || a.keyCode != null)) a.which = a.charCode != null ? a.charCode : a.keyCode;
                if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
                if (!a.which && a.button !== m) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
                return a
            },
            guid: 1E8,
            proxy: d.proxy,
            special: {
                ready: {
                    setup: d.bindReady,
                    teardown: d.noop
                },
                live: {
                    add: function(a) {
                        d.event.add(this, P(a.origType, a.selector), d.extend({}, a, {
                            handler: mb,
                            guid: a.handler.guid
                        }))
                    },
                    remove: function(a) {
                        d.event.remove(this, P(a.origType,
                            a.selector), a)
                    }
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        if (d.isWindow(this)) this.onbeforeunload = c
                    },
                    teardown: function(a, b) {
                        if (this.onbeforeunload === b) this.onbeforeunload = null
                    }
                }
            }
        };
        d.removeEvent = l.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, false)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        };
        d.Event = function(a, b) {
            if (!this.preventDefault) return new d.Event(a, b);
            if (a && a.type) {
                this.originalEvent = a;
                this.type = a.type;
                this.isDefaultPrevented = a.defaultPrevented ||
                    a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? O : w
            } else this.type = a;
            b && d.extend(this, b);
            this.timeStamp = d.now();
            this[d.expando] = true
        };
        d.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = O;
                var a = this.originalEvent;
                if (a) a.preventDefault ? a.preventDefault() : a.returnValue = false
            },
            stopPropagation: function() {
                this.isPropagationStopped = O;
                var a = this.originalEvent;
                if (a) {
                    a.stopPropagation && a.stopPropagation();
                    a.cancelBubble = true
                }
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped =
                    O;
                this.stopPropagation()
            },
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w
        };
        var Ta = function(a) {
                var b = a.relatedTarget,
                    c = false,
                    g = a.type;
                a.type = a.data;
                if (b !== this) {
                    b && (c = d.contains(this, b));
                    if (!c) {
                        d.event.handle.apply(this, arguments);
                        a.type = g
                    }
                }
            },
            Ua = function(a) {
                a.type = a.data;
                d.event.handle.apply(this, arguments)
            };
        d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            d.event.special[a] = {
                setup: function(c) {
                    d.event.add(this, b, c && c.selector ? Ua : Ta, a)
                },
                teardown: function(a) {
                    d.event.remove(this,
                        b, a && a.selector ? Ua : Ta)
                }
            }
        });
        d.support.submitBubbles || (d.event.special.submit = {
            setup: function() {
                if (d.nodeName(this, "form")) return false;
                d.event.add(this, "click.specialSubmit", function(a) {
                    var b = a.target,
                        c = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type : "";
                    (c === "submit" || c === "image") && d(b).closest("form").length && Aa("submit", this, arguments)
                });
                d.event.add(this, "keypress.specialSubmit", function(a) {
                    var b = a.target,
                        c = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type : "";
                    (c === "text" || c === "password") &&
                    (d(b).closest("form").length && a.keyCode === 13) && Aa("submit", this, arguments)
                })
            },
            teardown: function() {
                d.event.remove(this, ".specialSubmit")
            }
        });
        if (!d.support.changeBubbles) {
            var L, Va = function(a) {
                    var b = d.nodeName(a, "input") ? a.type : "",
                        c = a.value;
                    if (b === "radio" || b === "checkbox") c = a.checked;
                    else if (b === "select-multiple") c = a.selectedIndex > -1 ? d.map(a.options, function(a) {
                        return a.selected
                    }).join("-") : "";
                    else if (d.nodeName(a, "select")) c = a.selectedIndex;
                    return c
                },
                Z = function(a, b) {
                    var c = a.target,
                        g, e;
                    if (pa.test(c.nodeName) &&
                        !c.readOnly) {
                        g = d._data(c, "_change_data");
                        e = Va(c);
                        (a.type !== "focusout" || c.type !== "radio") && d._data(c, "_change_data", e);
                        if (!(g === m || e === g))
                            if (g != null || e) {
                                a.type = "change";
                                a.liveFired = m;
                                d.event.trigger(a, b, c)
                            }
                    }
                };
            d.event.special.change = {
                filters: {
                    focusout: Z,
                    beforedeactivate: Z,
                    click: function(a) {
                        var b = a.target,
                            c = d.nodeName(b, "input") ? b.type : "";
                        (c === "radio" || c === "checkbox" || d.nodeName(b, "select")) && Z.call(this, a)
                    },
                    keydown: function(a) {
                        var b = a.target,
                            c = d.nodeName(b, "input") ? b.type : "";
                        (a.keyCode === 13 && !d.nodeName(b,
                            "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && Z.call(this, a)
                    },
                    beforeactivate: function(a) {
                        a = a.target;
                        d._data(a, "_change_data", Va(a))
                    }
                },
                setup: function() {
                    if (this.type === "file") return false;
                    for (var a in L) d.event.add(this, a + ".specialChange", L[a]);
                    return pa.test(this.nodeName)
                },
                teardown: function() {
                    d.event.remove(this, ".specialChange");
                    return pa.test(this.nodeName)
                }
            };
            L = d.event.special.change.filters;
            L.focus = L.beforeactivate
        }
        d.support.focusinBubbles || d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            function c(a) {
                var c = d.event.fix(a);
                c.type = b;
                c.originalEvent = {};
                d.event.trigger(c, null, c.target);
                c.isDefaultPrevented() && a.preventDefault()
            }
            var g = 0;
            d.event.special[b] = {
                setup: function() {
                    g++ === 0 && l.addEventListener(a, c, true)
                },
                teardown: function() {
                    --g === 0 && l.removeEventListener(a, c, true)
                }
            }
        });
        d.each(["bind", "one"], function(a, b) {
            d.fn[b] = function(a, g, e) {
                var f;
                if (typeof a === "object") {
                    for (var h in a) this[b](h, g, a[h], e);
                    return this
                }
                if (arguments.length === 2 || g === false) {
                    e = g;
                    g = m
                }
                if (b ===
                    "one") {
                    f = function(a) {
                        d(this).unbind(a, f);
                        return e.apply(this, arguments)
                    };
                    f.guid = e.guid || d.guid++
                } else f = e;
                if (a === "unload" && b !== "one") this.one(a, g, e);
                else {
                    h = 0;
                    for (var i = this.length; h < i; h++) d.event.add(this[h], a, f, g)
                }
                return this
            }
        });
        d.fn.extend({
            unbind: function(a, b) {
                if (typeof a === "object" && !a.preventDefault)
                    for (var c in a) this.unbind(c, a[c]);
                else {
                    c = 0;
                    for (var g = this.length; c < g; c++) d.event.remove(this[c], a, b)
                }
                return this
            },
            delegate: function(a, b, c, d) {
                return this.live(b, c, d, a)
            },
            undelegate: function(a, b, c) {
                return arguments.length ===
                    0 ? this.unbind("live") : this.die(b, null, c, a)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    d.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return d.event.trigger(a, b, this[0], true)
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || d.guid++,
                    g = 0,
                    e = function(c) {
                        var e = (d.data(this, "lastToggle" + a.guid) || 0) % g;
                        d.data(this, "lastToggle" + a.guid, e + 1);
                        c.preventDefault();
                        return b[e].apply(this, arguments) || false
                    };
                for (e.guid = c; g < b.length;) b[g++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b ||
                    a)
            }
        });
        var qa = {
            focus: "focusin",
            blur: "focusout",
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        d.each(["live", "die"], function(a, b) {
            d.fn[b] = function(a, g, e, f) {
                var h = 0,
                    i, j, k = f || this.selector,
                    l = f ? this : d(this.context);
                if (typeof a === "object" && !a.preventDefault) {
                    for (i in a) l[b](i, g, a[i], k);
                    return this
                }
                if (b === "die" && !a && f && f.charAt(0) === ".") {
                    l.unbind(f);
                    return this
                }
                if (g === false || d.isFunction(g)) {
                    e = g || w;
                    g = m
                }
                for (a = (a || "").split(" ");
                    (f = a[h++]) != null;) {
                    i = ia.exec(f);
                    j = "";
                    if (i) {
                        j = i[0];
                        f = f.replace(ia, "")
                    }
                    if (f === "hover") a.push("mouseenter" +
                        j, "mouseleave" + j);
                    else {
                        i = f;
                        if (qa[f]) {
                            a.push(qa[f] + j);
                            f = f + j
                        } else f = (qa[f] || f) + j;
                        if (b === "live") {
                            j = 0;
                            for (var n = l.length; j < n; j++) d.event.add(l[j], "live." + P(f, k), {
                                data: g,
                                selector: k,
                                handler: e,
                                origType: f,
                                origHandler: e,
                                preType: i
                            })
                        } else l.unbind("live." + P(f, k), e)
                    }
                }
                return this
            }
        });
        d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
            d.fn[b] =
                function(a, d) {
                    if (d == null) {
                        d = a;
                        a = null
                    }
                    return arguments.length > 0 ? this.bind(b, a, d) : this.trigger(b)
                };
            d.attrFn && (d.attrFn[b] = true)
        });
        var Wa = function(a, b, c, d, e, f) {
                for (var e = 0, h = d.length; e < h; e++) {
                    var i = d[e];
                    if (i) {
                        for (var j = false, i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            if (i.nodeType === 1 && !f) {
                                i.sizcache = c;
                                i.sizset = e
                            }
                            if (i.nodeName.toLowerCase() === b) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[e] = j
                    }
                }
            },
            Xa = function(a, b, c, d, e, f) {
                for (var e = 0, h = d.length; e < h; e++) {
                    var i = d[e];
                    if (i) {
                        for (var j = false, i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j =
                                    d[i.sizset];
                                break
                            }
                            if (i.nodeType === 1) {
                                if (!f) {
                                    i.sizcache = c;
                                    i.sizset = e
                                }
                                if (typeof b !== "string") {
                                    if (i === b) {
                                        j = true;
                                        break
                                    }
                                } else if (n.filter(b, [i]).length > 0) {
                                    j = i;
                                    break
                                }
                            }
                            i = i[a]
                        }
                        d[e] = j
                    }
                }
            },
            ra = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            sa = 0,
            Ya = Object.prototype.toString,
            aa = !1,
            Za = !0,
            G = /\\/g,
            ba = /\W/;
        [0, 0].sort(function() {
            Za = false;
            return 0
        });
        var n = function(a, b, c, d) {
            var c = c || [],
                e = b = b || l;
            if (b.nodeType !== 1 && b.nodeType !== 9) return [];
            if (!a || typeof a !== "string") return c;
            var f, h, i, j, k, m = true,
                o = n.isXML(b),
                q = [],
                r = a;
            do {
                ra.exec("");
                if (f = ra.exec(r)) {
                    r = f[3];
                    q.push(f[1]);
                    if (f[2]) {
                        j = f[3];
                        break
                    }
                }
            } while (f);
            if (q.length > 1 && Ub.exec(a))
                if (q.length === 2 && p.relative[q[0]]) h = $a(q[0] + q[1], b);
                else
                    for (h = p.relative[q[0]] ? [b] : n(q.shift(), b); q.length;) {
                        a = q.shift();
                        p.relative[a] && (a = a + q.shift());
                        h = $a(a, h)
                    } else {
                        if (!d && q.length > 1 && b.nodeType === 9 && !o && p.match.ID.test(q[0]) && !p.match.ID.test(q[q.length - 1])) {
                            f = n.find(q.shift(), b, o);
                            b = f.expr ? n.filter(f.expr,
                                f.set)[0] : f.set[0]
                        }
                        if (b) {
                            f = d ? {
                                expr: q.pop(),
                                set: v(d)
                            } : n.find(q.pop(), q.length === 1 && (q[0] === "~" || q[0] === "+") && b.parentNode ? b.parentNode : b, o);
                            h = f.expr ? n.filter(f.expr, f.set) : f.set;
                            for (q.length > 0 ? i = v(h) : m = false; q.length;) {
                                f = k = q.pop();
                                p.relative[k] ? f = q.pop() : k = "";
                                f == null && (f = b);
                                p.relative[k](i, f, o)
                            }
                        } else i = []
                    }
                i || (i = h);
            i || n.error(k || a);
            if (Ya.call(i) === "[object Array]")
                if (m)
                    if (b && b.nodeType === 1)
                        for (a = 0; i[a] != null; a++) i[a] && (i[a] === true || i[a].nodeType === 1 && n.contains(b, i[a])) && c.push(h[a]);
                    else
                        for (a = 0; i[a] !=
                            null; a++) i[a] && i[a].nodeType === 1 && c.push(h[a]);
            else c.push.apply(c, i);
            else v(i, c);
            if (j) {
                n(j, e, c, d);
                n.uniqueSort(c)
            }
            return c
        };
        n.uniqueSort = function(a) {
            if (ca) {
                aa = Za;
                a.sort(ca);
                if (aa)
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        };
        n.matches = function(a, b) {
            return n(a, null, null, b)
        };
        n.matchesSelector = function(a, b) {
            return n(b, null, null, [a]).length > 0
        };
        n.find = function(a, b, c) {
            var d;
            if (!a) return [];
            for (var e = 0, f = p.order.length; e < f; e++) {
                var h, i = p.order[e];
                if (h = p.leftMatch[i].exec(a)) {
                    var j =
                        h[1];
                    h.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        h[1] = (h[1] || "").replace(G, "");
                        d = p.find[i](h, b, c);
                        if (d != null) {
                            a = a.replace(p.match[i], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        };
        n.filter = function(a, b, c, d) {
            for (var e, f, h = a, i = [], j = b, k = b && b[0] && n.isXML(b[0]); a && b.length;) {
                for (var l in p.filter)
                    if ((e = p.leftMatch[l].exec(a)) != null && e[2]) {
                        var o, q, r = p.filter[l];
                        q = e[1];
                        f = false;
                        e.splice(1, 1);
                        if (q.substr(q.length - 1) !== "\\") {
                            j === i && (i = []);
                            if (p.preFilter[l])
                                if (e = p.preFilter[l](e, j, c, i, d, k)) {
                                    if (e === true) continue
                                } else f = o = true;
                            if (e)
                                for (var s = 0;
                                    (q = j[s]) != null; s++)
                                    if (q) {
                                        o = r(q, e, s, j);
                                        var t = d ^ !!o;
                                        if (c && o != null) t ? f = true : j[s] = false;
                                        else if (t) {
                                            i.push(q);
                                            f = true
                                        }
                                    }
                            if (o !== m) {
                                c || (j = i);
                                a = a.replace(p.match[l], "");
                                if (!f) return [];
                                break
                            }
                        }
                    }
                if (a === h)
                    if (f == null) n.error(a);
                    else break;
                h = a
            }
            return j
        };
        n.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a;
        };
        var p = n.selectors = {
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
                        var c = typeof b === "string",
                            d = c && !ba.test(b),
                            c = c && !d;
                        d && (b = b.toLowerCase());
                        for (var d = 0, e = a.length, f; d < e; d++)
                            if (f = a[d]) {
                                for (;
                                    (f = f.previousSibling) && f.nodeType !== 1;);
                                a[d] = c || f && f.nodeName.toLowerCase() === b ? f || false : f === b
                            }
                        c && n.filter(b, a, true)
                    },
                    ">": function(a, b) {
                        var c, d = typeof b === "string",
                            e = 0,
                            f = a.length;
                        if (d &&
                            !ba.test(b))
                            for (b = b.toLowerCase(); e < f; e++) {
                                if (c = a[e]) {
                                    c = c.parentNode;
                                    a[e] = c.nodeName.toLowerCase() === b ? c : false
                                }
                            } else {
                                for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && n.filter(b, a, true)
                            }
                    },
                    "": function(a, b, c) {
                        var d, e = sa++,
                            f = Xa;
                        if (typeof b === "string" && !ba.test(b)) {
                            d = b = b.toLowerCase();
                            f = Wa
                        }
                        f("parentNode", b, e, a, d, c)
                    },
                    "~": function(a, b, c) {
                        var d, e = sa++,
                            f = Xa;
                        if (typeof b === "string" && !ba.test(b)) {
                            d = b = b.toLowerCase();
                            f = Wa
                        }
                        f("previousSibling", b, e, a, d, c)
                    }
                },
                find: {
                    ID: function(a, b, c) {
                        if (typeof b.getElementById !==
                            "undefined" && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                    },
                    NAME: function(a, b) {
                        if (typeof b.getElementsByName !== "undefined") {
                            for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function(a, b) {
                        if (typeof b.getElementsByTagName !== "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function(a, b, c, d, e, f) {
                        a = " " + a[1].replace(G, "") + " ";
                        if (f) return a;
                        for (var f = 0, h;
                            (h = b[f]) != null; f++) h && (e ^ (h.className &&
                            (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[f] = false));
                        return false
                    },
                    ID: function(a) {
                        return a[1].replace(G, "")
                    },
                    TAG: function(a) {
                        return a[1].replace(G, "").toLowerCase()
                    },
                    CHILD: function(a) {
                        if (a[1] === "nth") {
                            a[2] || n.error(a[0]);
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0;
                            a[3] = b[3] - 0
                        } else a[2] && n.error(a[0]);
                        a[0] = sa++;
                        return a
                    },
                    ATTR: function(a,
                        b, c, d, e, f) {
                        b = a[1] = a[1].replace(G, "");
                        !f && p.attrMap[b] && (a[1] = p.attrMap[b]);
                        a[4] = (a[4] || a[5] || "").replace(G, "");
                        a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function(a, b, c, d, e) {
                        if (a[1] === "not")
                            if ((ra.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = n(a[3], null, null, b);
                            else {
                                a = n.filter(a[3], b, c, 1 ^ e);
                                c || d.push.apply(d, a);
                                return false
                            } else if (p.match.POS.test(a[0]) || p.match.CHILD.test(a[0])) return true;
                        return a
                    },
                    POS: function(a) {
                        a.unshift(true);
                        return a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return a.disabled ===
                            false && a.type !== "hidden"
                    },
                    disabled: function(a) {
                        return a.disabled === true
                    },
                    checked: function(a) {
                        return a.checked === true
                    },
                    selected: function(a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === true
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, b, c) {
                        return !!n(c[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        return "text" === a.getAttribute("type")
                    },
                    radio: function(a) {
                        return "radio" === a.type
                    },
                    checkbox: function(a) {
                        return "checkbox" ===
                            a.type
                    },
                    file: function(a) {
                        return "file" === a.type
                    },
                    password: function(a) {
                        return "password" === a.type
                    },
                    submit: function(a) {
                        return "submit" === a.type
                    },
                    image: function(a) {
                        return "image" === a.type
                    },
                    reset: function(a) {
                        return "reset" === a.type
                    },
                    button: function(a) {
                        return "button" === a.type || a.nodeName.toLowerCase() === "button"
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    }
                },
                setFilters: {
                    first: function(a, b) {
                        return b === 0
                    },
                    last: function(a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function(a, b) {
                        return b % 2 ===
                            0
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
                            f = p.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n.getText([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            b = b[3];
                            c = 0;
                            for (d = b.length; c < d; c++)
                                if (b[c] === a) return false;
                            return true
                        }
                        n.error(e)
                    },
                    CHILD: function(a, b) {
                        var c = b[1],
                            d = a;
                        switch (c) {
                            case "only":
                            case "first":
                                for (; d =
                                    d.previousSibling;)
                                    if (d.nodeType === 1) return false;
                                if (c === "first") return true;
                                d = a;
                            case "last":
                                for (; d = d.nextSibling;)
                                    if (d.nodeType === 1) return false;
                                return true;
                            case "nth":
                                var c = b[2],
                                    e = b[3];
                                if (c === 1 && e === 0) return true;
                                var f = b[0],
                                    h = a.parentNode;
                                if (h && (h.sizcache !== f || !a.nodeIndex)) {
                                    for (var i = 0, d = h.firstChild; d; d = d.nextSibling)
                                        if (d.nodeType === 1) d.nodeIndex = ++i;
                                    h.sizcache = f
                                }
                                d = a.nodeIndex - e;
                                return c === 0 ? d === 0 : d % c === 0 && d / c >= 0
                        }
                    },
                    ID: function(a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function(a,
                        b) {
                        return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                    },
                    CLASS: function(a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function(a, b) {
                        var c = b[1],
                            c = p.attrHandle[c] ? p.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            d = c + "",
                            e = b[2],
                            f = b[4];
                        return c == null ? e === "!=" : e === "=" ? d === f : e === "*=" ? d.indexOf(f) >= 0 : e === "~=" ? (" " + d + " ").indexOf(f) >= 0 : !f ? d && c !== false : e === "!=" ? d !== f : e === "^=" ? d.indexOf(f) === 0 : e === "$=" ? d.substr(d.length - f.length) === f : e === "|=" ? d === f || d.substr(0, f.length +
                            1) === f + "-" : false
                    },
                    POS: function(a, b, c, d) {
                        var e = p.setFilters[b[2]];
                        if (e) return e(a, c, b, d)
                    }
                }
            },
            Ub = p.match.POS,
            Vb = function(a, b) {
                return "\\" + (b - 0 + 1)
            },
            M;
        for (M in p.match) p.match[M] = RegExp(p.match[M].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[M] = RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[M].source.replace(/\\(\d+)/g, Vb));
        var v = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(l.documentElement.childNodes, 0)[0].nodeType
        } catch (kc) {
            v =
                function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (Ya.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length === "number")
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
        }
        var ca, N;
        l.documentElement.compareDocumentPosition ? ca = function(a, b) {
            if (a === b) {
                aa = true;
                return 0
            }
            return !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (ca = function(a, b) {
            var c, d, e = [],
                f = [];
            c = a.parentNode;
            d = b.parentNode;
            var h = c;
            if (a === b) {
                aa = true;
                return 0
            }
            if (c === d) return N(a, b);
            if (c) {
                if (!d) return 1
            } else return -1;
            for (; h;) {
                e.unshift(h);
                h = h.parentNode
            }
            for (h = d; h;) {
                f.unshift(h);
                h = h.parentNode
            }
            c = e.length;
            d = f.length;
            for (h = 0; h < c && h < d; h++)
                if (e[h] !== f[h]) return N(e[h], f[h]);
            return h === c ? N(a, f[h], -1) : N(e[h], b, 1)
        }, N = function(a, b, c) {
            if (a === b) return c;
            for (a = a.nextSibling; a;) {
                if (a === b) return -1;
                a = a.nextSibling
            }
            return 1
        });
        n.getText = function(a) {
            for (var b = "", c, d = 0; a[d]; d++) {
                c = a[d];
                c.nodeType === 3 || c.nodeType === 4 ? b = b + c.nodeValue : c.nodeType !==
                    8 && (b = b + n.getText(c.childNodes))
            }
            return b
        };
        var da = l.createElement("div"),
            ab = "script" + (new Date).getTime(),
            ea = l.documentElement;
        da.innerHTML = "<a name='" + ab + "'/>";
        ea.insertBefore(da, ea.firstChild);
        l.getElementById(ab) && (p.find.ID = function(a, b, c) {
            if (typeof b.getElementById !== "undefined" && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] : m : []
        }, p.filter.ID = function(a, b) {
            var c = typeof a.getAttributeNode !== "undefined" &&
                a.getAttributeNode("id");
            return a.nodeType === 1 && c && c.nodeValue === b
        });
        ea.removeChild(da);
        var ea = da = null,
            z = l.createElement("div");
        z.appendChild(l.createComment(""));
        0 < z.getElementsByTagName("*").length && (p.find.TAG = function(a, b) {
            var c = b.getElementsByTagName(a[1]);
            if (a[1] === "*") {
                for (var d = [], e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                c = d
            }
            return c
        });
        z.innerHTML = "<a href='#'></a>";
        z.firstChild && ("undefined" !== typeof z.firstChild.getAttribute && "#" !== z.firstChild.getAttribute("href")) && (p.attrHandle.href =
            function(a) {
                return a.getAttribute("href", 2)
            });
        z = null;
        if (l.querySelectorAll) {
            var ta = n,
                fa = l.createElement("div");
            fa.innerHTML = "<p class='TEST'></p>";
            if (!(fa.querySelectorAll && 0 === fa.querySelectorAll(".TEST").length)) {
                var n = function(a, b, c, d) {
                        b = b || l;
                        if (!d && !n.isXML(b)) {
                            var e = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                            if (e && (b.nodeType === 1 || b.nodeType === 9)) {
                                if (e[1]) return v(b.getElementsByTagName(a), c);
                                if (e[2] && p.find.CLASS && b.getElementsByClassName) return v(b.getElementsByClassName(e[2]), c)
                            }
                            if (b.nodeType ===
                                9) {
                                if (a === "body" && b.body) return v([b.body], c);
                                if (e && e[3]) {
                                    var f = b.getElementById(e[3]);
                                    if (f && f.parentNode) {
                                        if (f.id === e[3]) return v([f], c)
                                    } else return v([], c)
                                }
                                try {
                                    return v(b.querySelectorAll(a), c)
                                } catch (h) {}
                            } else if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
                                var e = b,
                                    i = (f = b.getAttribute("id")) || "__sizzle__",
                                    j = b.parentNode,
                                    k = /^\s*[+~]/.test(a);
                                f ? i = i.replace(/'/g, "\\$&") : b.setAttribute("id", i);
                                if (k && j) b = b.parentNode;
                                try {
                                    if (!k || j) return v(b.querySelectorAll("[id='" + i + "'] " + a), c)
                                } catch (m) {} finally {
                                    f ||
                                        e.removeAttribute("id")
                                }
                            }
                        }
                        return ta(a, b, c, d)
                    },
                    ua;
                for (ua in ta) n[ua] = ta[ua];
                fa = null
            }
        }
        var ga = l.documentElement,
            va = ga.matchesSelector || ga.mozMatchesSelector || ga.webkitMatchesSelector || ga.msMatchesSelector,
            bb = !1;
        try {
            va.call(l.documentElement, "[test!='']:sizzle")
        } catch (lc) {
            bb = !0
        }
        va && (n.matchesSelector = function(a, b) {
            b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!n.isXML(a)) try {
                if (bb || !p.match.PSEUDO.test(b) && !/!=/.test(b)) return va.call(a, b)
            } catch (c) {}
            return n(b, null, null, [a]).length > 0
        });
        var H = l.createElement("div");
        H.innerHTML = "<div class='test e'></div><div class='test'></div>";
        H.getElementsByClassName && 0 !== H.getElementsByClassName("e").length && (H.lastChild.className = "e", 1 !== H.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function(a, b, c) {
            if (typeof b.getElementsByClassName !== "undefined" && !c) return b.getElementsByClassName(a[1])
        }, H = null));
        n.contains = l.documentElement.contains ? function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : true)
            } : l.documentElement.compareDocumentPosition ?
            function(a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            } : function() {
                return false
            };
        n.isXML = function(a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : false
        };
        var $a = function(a, b) {
            for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = p.match.PSEUDO.exec(a);) {
                e = e + c[0];
                a = a.replace(p.match.PSEUDO, "")
            }
            a = p.relative[a] ? a + "*" : a;
            c = 0;
            for (var h = f.length; c < h; c++) n(a, f[c], d);
            return n.filter(e, d)
        };
        d.find = n;
        d.expr = n.selectors;
        d.expr[":"] = d.expr.filters;
        d.unique = n.uniqueSort;
        d.text = n.getText;
        d.isXMLDoc =
            n.isXML;
        d.contains = n.contains;
        var Wb = /Until$/,
            Xb = /^(?:parents|prevUntil|prevAll)/,
            Yb = /,/,
            pb = /^.[^:#\[\.,]*$/,
            Zb = Array.prototype.slice,
            cb = d.expr.match.POS,
            $b = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        d.fn.extend({
            find: function(a) {
                var b = this,
                    c, g;
                if (typeof a !== "string") return d(a).filter(function() {
                    c = 0;
                    for (g = b.length; c < g; c++)
                        if (d.contains(b[c], this)) return true
                });
                var e = this.pushStack("", "find", a),
                    f, h, i;
                c = 0;
                for (g = this.length; c < g; c++) {
                    f = e.length;
                    d.find(a, this[c], e);
                    if (c > 0)
                        for (h = f; h < e.length; h++)
                            for (i =
                                0; i < f; i++)
                                if (e[i] === e[h]) {
                                    e.splice(h--, 1);
                                    break
                                }
                }
                return e
            },
            has: function(a) {
                var b = d(a);
                return this.filter(function() {
                    for (var a = 0, g = b.length; a < g; a++)
                        if (d.contains(this, b[a])) return true
                })
            },
            not: function(a) {
                return this.pushStack(Ba(this, a, false), "not", a)
            },
            filter: function(a) {
                return this.pushStack(Ba(this, a, true), "filter", a)
            },
            is: function(a) {
                return !!a && (typeof a === "string" ? d.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                var c = [],
                    g, e, f = this[0];
                if (d.isArray(a)) {
                    var h, i = {},
                        j = 1;
                    if (f &&
                        a.length) {
                        g = 0;
                        for (e = a.length; g < e; g++) {
                            h = a[g];
                            i[h] || (i[h] = cb.test(h) ? d(h, b || this.context) : h)
                        }
                        for (; f && f.ownerDocument && f !== b;) {
                            for (h in i) {
                                g = i[h];
                                (g.jquery ? g.index(f) > -1 : d(f).is(g)) && c.push({
                                    selector: h,
                                    elem: f,
                                    level: j
                                })
                            }
                            f = f.parentNode;
                            j++
                        }
                    }
                    return c
                }
                h = cb.test(a) || typeof a !== "string" ? d(a, b || this.context) : 0;
                g = 0;
                for (e = this.length; g < e; g++)
                    for (f = this[g]; f;)
                        if (h ? h.index(f) > -1 : d.find.matchesSelector(f, a)) {
                            c.push(f);
                            break
                        } else {
                            f = f.parentNode;
                            if (!f || !f.ownerDocument || f === b || f.nodeType === 11) break
                        }
                c = c.length > 1 ?
                    d.unique(c) : c;
                return this.pushStack(c, "closest", a)
            },
            index: function(a) {
                return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof a === "string" ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this)
            },
            add: function(a, b) {
                var c = typeof a === "string" ? d(a, b) : d.makeArray(a && a.nodeType ? [a] : a),
                    g = d.merge(this.get(), c);
                return this.pushStack(!c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 || !g[0] || !g[0].parentNode || g[0].parentNode.nodeType === 11 ? g : d.unique(g))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        });
        d.each({
            parent: function(a) {
                return (a = a.parentNode) && a.nodeType !== 11 ? a : null
            },
            parents: function(a) {
                return d.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return d.dir(a, "parentNode", c)
            },
            next: function(a) {
                return d.nth(a, 2, "nextSibling")
            },
            prev: function(a) {
                return d.nth(a, 2, "previousSibling")
            },
            nextAll: function(a) {
                return d.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return d.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return d.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return d.dir(a, "previousSibling",
                    c)
            },
            siblings: function(a) {
                return d.sibling(a.parentNode.firstChild, a)
            },
            children: function(a) {
                return d.sibling(a.firstChild)
            },
            contents: function(a) {
                return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.makeArray(a.childNodes)
            }
        }, function(a, b) {
            d.fn[a] = function(c, g) {
                var e = d.map(this, b, c),
                    f = Zb.call(arguments);
                Wb.test(a) || (g = c);
                g && typeof g === "string" && (e = d.filter(g, e));
                e = this.length > 1 && !$b[a] ? d.unique(e) : e;
                if ((this.length > 1 || Yb.test(g)) && Xb.test(a)) e = e.reverse();
                return this.pushStack(e,
                    a, f.join(","))
            }
        });
        d.extend({
            filter: function(a, b, c) {
                c && (a = ":not(" + a + ")");
                return b.length === 1 ? d.find.matchesSelector(b[0], a) ? [b[0]] : [] : d.find.matches(a, b)
            },
            dir: function(a, b, c) {
                for (var g = [], a = a[b]; a && a.nodeType !== 9 && (c === m || a.nodeType !== 1 || !d(a).is(c));) {
                    a.nodeType === 1 && g.push(a);
                    a = a[b]
                }
                return g
            },
            nth: function(a, b, c) {
                for (var b = b || 1, d = 0; a; a = a[c])
                    if (a.nodeType === 1 && ++d === b) break;
                return a
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
        var ac = / jQuery\d+="(?:\d+|null)"/g,
            wa = /^\s+/,
            db = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
            eb = /<([\w:]+)/,
            bc = /<tbody/i,
            cc = /<|&#?\w+;/,
            fb = /<(?:script|object|embed|option|style)/i,
            gb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            dc = /\/(java|ecma)script/i,
            rb = /^\s*<!(?:\[CDATA\[|\-\-)/,
            t = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>",
                    "</colgroup></table>"
                ],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            };
        t.optgroup = t.option;
        t.tbody = t.tfoot = t.colgroup = t.caption = t.thead;
        t.th = t.td;
        d.support.htmlSerialize || (t._default = [1, "div<div>", "</div>"]);
        d.fn.extend({
            text: function(a) {
                return d.isFunction(a) ? this.each(function(b) {
                    var c = d(this);
                    c.text(a.call(this, b, c.text()))
                }) : typeof a !== "object" && a !== m ? this.empty().append((this[0] && this[0].ownerDocument || l).createTextNode(a)) : d.text(this)
            },
            wrapAll: function(a) {
                if (d.isFunction(a)) return this.each(function(b) {
                    d(this).wrapAll(a.call(this,
                        b))
                });
                if (this[0]) {
                    var b = d(a, this[0].ownerDocument).eq(0).clone(true);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a = this; a.firstChild && a.firstChild.nodeType === 1;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return d.isFunction(a) ? this.each(function(b) {
                    d(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = d(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                return this.each(function() {
                    d(this).wrapAll(a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    d.nodeName(this,
                        "body") || d(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, true, function(a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, true, function(a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = d(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a,
                        "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, d(arguments[0]).toArray());
                    return a
                }
            },
            remove: function(a, b) {
                for (var c = 0, g;
                    (g = this[c]) != null; c++)
                    if (!a || d.filter(a, [g]).length) {
                        if (!b && g.nodeType === 1) {
                            d.cleanData(g.getElementsByTagName("*"));
                            d.cleanData([g])
                        }
                        g.parentNode && g.parentNode.removeChild(g)
                    }
                return this
            },
            empty: function() {
                for (var a = 0, b;
                    (b = this[a]) != null; a++)
                    for (b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
                return this
            },
            clone: function(a, b) {
                a = a == null ? false : a;
                b = b == null ? a : b;
                return this.map(function() {
                    return d.clone(this, a, b)
                })
            },
            html: function(a) {
                if (a === m) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ac, "") : null;
                if (typeof a === "string" && !fb.test(a) && (d.support.leadingWhitespace || !wa.test(a)) && !t[(eb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a =
                        a.replace(db, "<$1></$2>");
                    try {
                        for (var b = 0, c = this.length; b < c; b++)
                            if (this[b].nodeType === 1) {
                                d.cleanData(this[b].getElementsByTagName("*"));
                                this[b].innerHTML = a
                            }
                    } catch (g) {
                        this.empty().append(a)
                    }
                } else d.isFunction(a) ? this.each(function(b) {
                    var c = d(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a);
                return this
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (d.isFunction(a)) return this.each(function(b) {
                        var c = d(this),
                            g = c.html();
                        c.replaceWith(a.call(this, b, g))
                    });
                    typeof a !== "string" &&
                        (a = d(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling,
                            c = this.parentNode;
                        d(this).remove();
                        b ? d(b).before(a) : d(c).append(a)
                    })
                }
                return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, true)
            },
            domManip: function(a, b, c) {
                var g, e, f, h = a[0],
                    i = [];
                if (!d.support.checkClone && arguments.length === 3 && typeof h === "string" && gb.test(h)) return this.each(function() {
                    d(this).domManip(a, b, c, true)
                });
                if (d.isFunction(h)) return this.each(function(e) {
                    var f =
                        d(this);
                    a[0] = h.call(this, e, b ? f.html() : m);
                    f.domManip(a, b, c)
                });
                if (this[0]) {
                    g = h && h.parentNode;
                    g = d.support.parentNode && g && g.nodeType === 11 && g.childNodes.length === this.length ? {
                        fragment: g
                    } : d.buildFragment(a, this, i);
                    f = g.fragment;
                    if (e = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild) {
                        b = b && d.nodeName(e, "tr");
                        e = 0;
                        for (var j = this.length, k = j - 1; e < j; e++) c.call(b ? d.nodeName(this[e], "table") ? this[e].getElementsByTagName("tbody")[0] || this[e].appendChild(this[e].ownerDocument.createElement("tbody")) : this[e] : this[e],
                            g.cacheable || j > 1 && e < k ? d.clone(f, true, true) : f)
                    }
                    i.length && d.each(i, qb)
                }
                return this
            }
        });
        d.buildFragment = function(a, b, c) {
            var g, e, f, h;
            b && b[0] && (h = b[0].ownerDocument || b[0]);
            h.createDocumentFragment || (h = l);
            if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && h === l && a[0].charAt(0) === "<" && !fb.test(a[0]) && (d.support.checkClone || !gb.test(a[0]))) {
                e = true;
                (f = d.fragments[a[0]]) && f !== 1 && (g = f)
            }
            if (!g) {
                g = h.createDocumentFragment();
                d.clean(a, h, g, c)
            }
            e && (d.fragments[a[0]] = f ? g : 1);
            return {
                fragment: g,
                cacheable: e
            }
        };
        d.fragments = {};
        d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            d.fn[a] = function(c) {
                var g = [],
                    c = d(c),
                    e = this.length === 1 && this[0].parentNode;
                if (e && e.nodeType === 11 && e.childNodes.length === 1 && c.length === 1) {
                    c[b](this[0]);
                    return this
                }
                for (var e = 0, f = c.length; e < f; e++) {
                    var h = (e > 0 ? this.clone(true) : this).get();
                    d(c[e])[b](h);
                    g = g.concat(h)
                }
                return this.pushStack(g, a, c.selector)
            }
        });
        d.extend({
            clone: function(a, b, c) {
                var g = a.cloneNode(true),
                    e, f, h;
                if ((!d.support.noCloneEvent ||
                        !d.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !d.isXMLDoc(a)) {
                    Da(a, g);
                    e = Q(a);
                    f = Q(g);
                    for (h = 0; e[h]; ++h) f[h] && Da(e[h], f[h])
                }
                if (b) {
                    Ca(a, g);
                    if (c) {
                        e = Q(a);
                        f = Q(g);
                        for (h = 0; e[h]; ++h) Ca(e[h], f[h])
                    }
                }
                return g
            },
            clean: function(a, b, c, g) {
                b = b || l;
                typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || l);
                for (var e = [], f, h = 0, i;
                    (i = a[h]) != null; h++) {
                    typeof i === "number" && (i = i + "");
                    if (i) {
                        if (typeof i === "string")
                            if (cc.test(i)) {
                                i = i.replace(db, "<$1></$2>");
                                f = (eb.exec(i) || ["", ""])[1].toLowerCase();
                                var j = t[f] || t._default,
                                    k = j[0],
                                    m = b.createElement("div");
                                for (m.innerHTML = j[1] + i + j[2]; k--;) m = m.lastChild;
                                if (!d.support.tbody) {
                                    k = bc.test(i);
                                    j = f === "table" && !k ? m.firstChild && m.firstChild.childNodes : j[1] === "<table>" && !k ? m.childNodes : [];
                                    for (f = j.length - 1; f >= 0; --f) d.nodeName(j[f], "tbody") && !j[f].childNodes.length && j[f].parentNode.removeChild(j[f])
                                }!d.support.leadingWhitespace && wa.test(i) && m.insertBefore(b.createTextNode(wa.exec(i)[0]), m.firstChild);
                                i = m.childNodes
                            } else i = b.createTextNode(i);
                        var n;
                        if (!d.support.appendChecked)
                            if (i[0] &&
                                typeof(n = i.length) === "number")
                                for (f = 0; f < n; f++) Fa(i[f]);
                            else Fa(i);
                        i.nodeType ? e.push(i) : e = d.merge(e, i)
                    }
                }
                if (c) {
                    a = function(a) {
                        return !a.type || dc.test(a.type)
                    };
                    for (h = 0; e[h]; h++)
                        if (g && d.nodeName(e[h], "script") && (!e[h].type || e[h].type.toLowerCase() === "text/javascript")) g.push(e[h].parentNode ? e[h].parentNode.removeChild(e[h]) : e[h]);
                        else {
                            if (e[h].nodeType === 1) {
                                b = d.grep(e[h].getElementsByTagName("script"), a);
                                e.splice.apply(e, [h + 1, 0].concat(b))
                            }
                            c.appendChild(e[h])
                        }
                }
                return e
            },
            cleanData: function(a) {
                for (var b, c,
                        g = d.cache, e = d.expando, f = d.event.special, h = d.support.deleteExpando, i = 0, j;
                    (j = a[i]) != null; i++)
                    if (!j.nodeName || !d.noData[j.nodeName.toLowerCase()])
                        if (c = j[d.expando]) {
                            if ((b = g[c] && g[c][e]) && b.events) {
                                for (var k in b.events) f[k] ? d.event.remove(j, k) : d.removeEvent(j, k, b.handle);
                                if (b.handle) b.handle.elem = null
                            }
                            h ? delete j[d.expando] : j.removeAttribute && j.removeAttribute(d.expando);
                            delete g[c]
                        }
            }
        });
        var xa = /alpha\([^)]*\)/i,
            ec = /opacity=([^)]*)/,
            fc = /([A-Z]|^ms)/g,
            hb = /^-?\d+(?:px)?$/i,
            gc = /^-?\d/,
            hc = /^([\-+])=([\-+.\de]+)/,
            ic = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            sb = ["Left", "Right"],
            tb = ["Top", "Bottom"],
            A, ib, jb;
        d.fn.css = function(a, b) {
            return arguments.length === 2 && b === m ? this : d.access(this, a, b, true, function(a, b, e) {
                return e !== m ? d.style(a, b, e) : d.css(a, b)
            })
        };
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = A(a, "opacity", "opacity");
                            return c === "" ? "1" : c
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
                "float": d.support.cssFloat ?
                    "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, g) {
                if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                    var e, f = d.camelCase(b),
                        h = a.style,
                        i = d.cssHooks[f],
                        b = d.cssProps[f] || f;
                    if (c !== m) {
                        g = typeof c;
                        if (g === "string" && (e = hc.exec(c))) {
                            c = +(e[1] + 1) * +e[2] + parseFloat(d.css(a, b));
                            g = "number"
                        }
                        if (!(c == null || g === "number" && isNaN(c))) {
                            g === "number" && !d.cssNumber[f] && (c = c + "px");
                            if (!i || !("set" in i) || (c = i.set(a, c)) !== m) try {
                                h[b] = c
                            } catch (j) {}
                        }
                    } else return i && "get" in i && (e = i.get(a, false, g)) !== m ? e : h[b]
                }
            },
            css: function(a, b, c) {
                var g,
                    e, b = d.camelCase(b);
                e = d.cssHooks[b];
                b = d.cssProps[b] || b;
                b === "cssFloat" && (b = "float");
                if (e && "get" in e && (g = e.get(a, true, c)) !== m) return g;
                if (A) return A(a, b)
            },
            swap: function(a, b, c) {
                var d = {},
                    e;
                for (e in b) {
                    d[e] = a.style[e];
                    a.style[e] = b[e]
                }
                c.call(a);
                for (e in b) a.style[e] = d[e]
            }
        });
        d.curCSS = d.css;
        d.each(["height", "width"], function(a, b) {
            d.cssHooks[b] = {
                get: function(a, g, e) {
                    var f;
                    if (g) {
                        if (a.offsetWidth !== 0) return Ga(a, b, e);
                        d.swap(a, ic, function() {
                            f = Ga(a, b, e)
                        });
                        return f
                    }
                },
                set: function(a, b) {
                    if (hb.test(b)) {
                        b = parseFloat(b);
                        if (b >= 0) return b + "px"
                    } else return b
                }
            }
        });
        d.support.opacity || (d.cssHooks.opacity = {
            get: function(a, b) {
                return ec.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    g = a.currentStyle,
                    e = d.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                    f = g && g.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && d.trim(f.replace(xa, "")) === "") {
                    c.removeAttribute("filter");
                    if (g && !g.filter) return
                }
                c.filter = xa.test(f) ? f.replace(xa, e) : f + " " + e
            }
        });
        d(function() {
            if (!d.support.reliableMarginRight) d.cssHooks.marginRight = {
                get: function(a, b) {
                    var c;
                    d.swap(a, {
                        display: "inline-block"
                    }, function() {
                        c = b ? A(a, "margin-right", "marginRight") : a.style.marginRight
                    });
                    return c
                }
            }
        });
        l.defaultView && l.defaultView.getComputedStyle && (ib = function(a, b) {
            var c, g, b = b.replace(fc, "-$1").toLowerCase();
            if (!(g = a.ownerDocument.defaultView)) return m;
            if (g = g.getComputedStyle(a, null)) {
                c = g.getPropertyValue(b);
                c === "" && !d.contains(a.ownerDocument.documentElement, a) && (c = d.style(a, b))
            }
            return c
        });
        l.documentElement.currentStyle && (jb = function(a, b) {
            var c, d = a.currentStyle &&
                a.currentStyle[b],
                e = a.runtimeStyle && a.runtimeStyle[b],
                f = a.style;
            if (!hb.test(d) && gc.test(d)) {
                c = f.left;
                if (e) a.runtimeStyle.left = a.currentStyle.left;
                f.left = b === "fontSize" ? "1em" : d || 0;
                d = f.pixelLeft + "px";
                f.left = c;
                if (e) a.runtimeStyle.left = e
            }
            return d === "" ? "auto" : d
        });
        A = ib || jb;
        d.expr && d.expr.filters && (d.expr.filters.hidden = function(a) {
            var b = a.offsetHeight;
            return a.offsetWidth === 0 && b === 0 || !d.support.reliableHiddenOffsets && (a.style.display || d.css(a, "display")) === "none"
        }, d.expr.filters.visible = function(a) {
            return !d.expr.filters.hidden(a)
        });
        return d
    }(window);


    var optimizelyCode = function() {
        var DATA = {
            "log_host": "log.optimizely.com",
            "goal_expressions": {
                "3227560320": ["^science\\_ht04$"],
                "3231822307": ["^scienceht\\_06$"],
                "3016360200": ["^engagement$"],
                "3272340233": ["^upshot\\_ht01$"],
                "3249620291": ["^science\\_ht07$"],
                "3183450127": ["^science\\_ht03$"],
                "3398710096": ["^science\\_ht09$"],
                "3185870643": ["^business\\_ht01\\_headline$"],
                "3211500372": ["^business\\_ht09$"],
                "3349310115": ["^homepage\\_staging\\_ht01$"],
                "3379740470": ["^science\\_ht10$"],
                "3229110682": ["^science\\_ht05$"],
                "3376130780": ["^science\\_ht11$"],
                "3166401054": ["^uber\\_headline$"],
                "3275470303": ["^science\\_ht08$"]
            },
            "experiments": {
                "3268660227": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'upshot_ht01';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Upshot - HT01] Experiment",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/upshot/"
                    }],
                    "enabled_variation_ids": ["3260360603", "3256070271"],
                    "variation_ids": ["3260360603", "3256070271"]
                },
                "3197990020": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'Failure of One Metal Strut';\nwindow.newHeadline = 'Testing New Headline';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'science_ht02';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/2015/07/21/science/space/failure-of-one-metal-strut-seemed-to-doom-rocket.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = 'Elon Musk, SpaceX\u2019s chief executive,';\nwindow.newSummary = 'Here is a new summary test 123 test 123';\n\n\n\n\n\n\n/*\n * Do not modify below this line\n */\n\n\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT02] SpaceX Headline (Jamie testing)",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3209460011", "3198870017"],
                    "variation_ids": ["3209460011", "3198870017"]
                },
                "3256910214": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'Rosetta\\'s Year';\nwindow.newHeadline = 'A Year in the Life of a Comet';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'science_ht07';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/interactive/2015/03/20/science/space/rosetta-comet-photos.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT07] Comet",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3246600246", "3259840360"],
                    "variation_ids": ["3246600246", "3259840360"]
                },
                "3205530128": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'Scientists Trace an Ancient DNA Link';\nwindow.newHeadline = 'Tracing Routes to America Through DNA, Both Ancient and New';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'science_ht03';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/2015/07/22/science/tracing-routes-to-america-through-ancient-dna.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT03] DNA Americas",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3203200260", "3202140138"],
                    "variation_ids": ["3203200260", "3202140138"]
                },
                "3189160082": {
                    "audiences": [3187180026],
                    "name": "[Headline Test] Why Bernie Sanders's Momentum is Not Built to Last",
                    "ignore": 8000,
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/upshot/"
                    }, {
                        "match": "simple",
                        "value": "http://www.nytimes.com/2015/07/09/upshot/why-bernie-sanderss-momentum-is-not-built-to-last.html"
                    }],
                    "enabled_variation_ids": ["3189610122", "3183620074"],
                    "variation_ids": ["3189610122", "3183620074"]
                },
                "3232880787": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'Chilly at Work?';\nwindow.newHeadline = 'Why You\\'re So Cold in Your Office';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'scienceht_06';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/2015/08/04/science/chilly-at-work-a-decades-old-formula-may-be-to-blame.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT06] Cold",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3213890898", "3233141153"],
                    "variation_ids": ["3213890898", "3233141153"]
                },
                "3208930458": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'Importing Both Salamanders and Their Potential Destruction';\nwindow.newHeadline = 'Salamanders in North America Threatened by Deadly Fungus';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'science_ht05';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/2015/08/04/science/importing-both-salamanders-and-their-potential-destruction.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT05] Salamanders",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3228070314", "3216580149"],
                    "variation_ids": ["3228070314", "3216580149"]
                },
                "3221660326": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = '';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Travel - HT00] Template",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/travel"
                    }],
                    "enabled_variation_ids": ["3201950326", "3230980585"],
                    "variation_ids": ["3201950326", "3230980585"]
                },
                "3181020456": {
                    "name": "[Science - HT01] Yuri Milner Stephen Hawking",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3164540458", "3196620162"],
                    "variation_ids": ["3164540458", "3196620162"]
                },
                "3212280502": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = '';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Dining - HT00] Template",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/pages/dining/index.html"
                    }],
                    "enabled_variation_ids": ["3215000320", "3224870179"],
                    "variation_ids": ["3215000320", "3224870179"]
                },
                "3231520446": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = '';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Magazine - HT00] Template",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/magazine"
                    }],
                    "enabled_variation_ids": ["3226000103", "3232540174"],
                    "variation_ids": ["3226000103", "3232540174"]
                },
                "3203960895": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = '';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Upshot - HT00] Template",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/upshot/"
                    }],
                    "enabled_variation_ids": ["3208800450", "3213441038"],
                    "variation_ids": ["3208800450", "3213441038"]
                },
                "3403310029": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'The Truth Behind a Snake';\nwindow.newHeadline = 'How Boa Constrictors Kill';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'science_ht09';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/2015/08/24/science/the-truth-behind-a-snakes-deadly-embrace.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT09] Boa",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3387170127", "3368820120"],
                    "variation_ids": ["3387170127", "3368820120"]
                },
                "3183611091": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = '';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT00] Template",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3198310147", "3192690291"],
                    "variation_ids": ["3198310147", "3192690291"]
                },
                "3252551395": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'The Roanoke Colonists: Lost, and Found?';\nwindow.newHeadline = '16th-Century Map May Point to Lost Roanoke Colonists';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'science_ht08';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/2015/08/11/science/the-roanoke-colonists-lost-and-found.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT08] Roanoke",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3289410006", "3248660850"],
                    "variation_ids": ["3289410006", "3248660850"]
                },
                "3228730342": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'Dogs Trained in Prison to Protect Lives';\nwindow.newHeadline = 'Puppies Go to Prison to Become Dogs That Save Lives';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'science_ht04';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/2015/07/28/science/dogs-trained-in-prison-to-protect-lives.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT04] Bomb dogs",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3218900414", "3209700778"],
                    "variation_ids": ["3218900414", "3209700778"]
                },
                "3208830675": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = '';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Business - HT00] Template",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/pages/business/index.html"
                    }],
                    "enabled_variation_ids": ["3225280573", "3222040545"],
                    "variation_ids": ["3225280573", "3222040545"]
                },
                "3186500469": {
                    "name": "[Science] Mozart's Piano",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/2015/07/21/science/playing-mozart-piano-pieces-as-mozart-did.html"
                    }],
                    "enabled_variation_ids": ["3189190879", "3190730536"],
                    "variation_ids": ["3189190879", "3190730536"]
                },
                "3220420217": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = '';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[My Space - HT00] Template",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/column/myspace"
                    }],
                    "enabled_variation_ids": ["3235470145", "3229900395"],
                    "variation_ids": ["3235470145", "3229900395"]
                },
                "3393390587": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = 'How a Volcanic Eruption in 1815';\nwindow.newHeadline = 'A Volcanic Eruption That Reverberates 200 Years Later';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = 'science_ht11';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = 'http://www.nytimes.com/2015/08/25/science/mount-tambora-volcano-eruption-1815.html';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Science - HT11] Volcano",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/section/science"
                    }],
                    "enabled_variation_ids": ["3398480061", "3366590381"],
                    "variation_ids": ["3398480061", "3366590381"]
                },
                "3204171132": {
                    "code": "/*_optimizely_evaluate=force */\n\n/*\n * Add a unique substring from the old headline \n * and the new headline below\n */\nwindow.oldHeadline = '';\nwindow.newHeadline = '';\n\n\n/*\n * Create a new goal and place the goal name here\n */\nwindow.goalName = '';\n\n/* \n * Add the article URL, excluding query parameters\n */\nwindow.articleURL = '';\n\n\n/* \n * Summary is optional. If you are modifying the article\n * summary, add a unique substring from the original summary\n * and the complete text of the new summary.\n *\n */\nwindow.oldSummary = '';\nwindow.newSummary = '';\n\n\n\n\n/*\n * Do not modify below this line\n */\nif (window.goalName && window.articleURL) {\n\t$('[href*=\"' + window.articleURL + '\"]').live(\"mousedown\", function() {\n     window.optimizely.push(['trackEvent', window.goalName]);\n\t});\n}\n\n/*_optimizely_evaluate=safe */\n",
                    "name": "[Fashion - HT00] Template",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/pages/fashion/index.html"
                    }],
                    "enabled_variation_ids": ["3220240976", "3206000284"],
                    "variation_ids": ["3220240976", "3206000284"]
                },
                "3179261310": {
                    "name": "[Business - HT01] Greece",
                    "urls": [{
                        "match": "simple",
                        "value": "http://www.nytimes.com/pages/business/index.html"
                    }],
                    "enabled_variation_ids": ["3184360855", "3169470674"],
                    "variation_ids": ["3184360855", "3169470674"]
                }
            },
            "audiences": {
                "3187180026": {
                    "conditions": ["and", ["or", ["or", {
                        "dimension_id": 3159400157,
                        "value": "document.location.href.indexOf('http://www.nytimes.com/upshot/') > -1 || document.referrer.indexOf('http://www.nytimes.com/upshot/') > -1"
                    }]]],
                    "name": "[Headline Test] Bernie Sanders"
                }
            },
            "www_host": "app.optimizely.com",
            "public_suffixes": {
                "nytimes.com": ["www.nytimes.com"]
            },
            "force_variation": true,
            "dimensions": {
                "3159400157": {
                    "condition_type": "code"
                }
            },
            "version": "master-2088.386735774432540766",
            "admin_account_id": 3013110282,
            "blacklisted_experiments": [3345800278, 3203010823, 3216960140, 3330101007, 3174330769, 3189441686, 3329340441, 3342660294, 3215370024, 3162131627, 3176910146, 3212650308, 3376580038, 3191470287, 3202240760, 3372681174, 3189520731, 3226970470, 3350180970, 3354950006, 3387970040, 3315750543, 3202301693, 3385430270, 3350030207],
            "project_id": 3013110282,
            "revision": 216,
            "summary_revenue_goal_id": 3018460257,
            "installation_verified": true,
            "preview_host": "//optimizely.s3.amazonaws.com",
            "api_host": "api.optimizely.com",
            "variations": {
                "3215000320": {
                    "name": "Original"
                },
                "3198870017": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3196620162": {
                    "code": "/*_optimizely_evaluate=force */\nwindow.oldHeadline = 'Yuri Milner, Russian Entrepreneur';\nwindow.newHeadline = 'Stephen Hawking Joins Russian Entrepreneur in Search for Alien Life';\n\nwindow.oldSummary = 'Mr. Milner says that over the next decade he will provide money for new receiving equipment, personnel and observing time at existing facilities.';\nwindow.newSummary = 'Yuri Milner says that over the next decade he will provide money for new receiving equipment, personnel and observing time at existing facilities.';\n/*_optimizely_evaluate=safe */\n\n$('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n$('p:contains(' + window.oldSummary + ')').text(window.newSummary);",
                    "name": "New Headline #1"
                },
                "3198310147": {
                    "name": "Original"
                },
                "3203200260": {
                    "name": "Original"
                },
                "3189610122": {
                    "code": "/* _optimizely_variation_url include=\"http://www.nytimes.com/upshot/\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1436456071737\" */\n\n/* _optimizely_variation_url_end */",
                    "name": "Original"
                },
                "3213441038": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3368820120": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3184360855": {
                    "name": "Original"
                },
                "3228070314": {
                    "name": "Original"
                },
                "3260360603": {
                    "name": "Original"
                },
                "3206000284": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3209700778": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n$(\"ol.container > li:eq(0) > article:eq(0) > div:eq(0) > h2:eq(0) > a:eq(0)\").html(\"Puppies Go to Prison to Become Dogs That Save Lives\");",
                    "name": "New Headline #1"
                },
                "3233141153": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3224870179": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3190730536": {
                    "name": "Variation #1"
                },
                "3164540458": {
                    "name": "Original"
                },
                "3209460011": {
                    "name": "Original"
                },
                "3366590381": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3216580149": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3246600246": {
                    "name": "Original"
                },
                "3225280573": {
                    "name": "Original"
                },
                "3218900414": {
                    "name": "Original"
                },
                "3235470145": {
                    "name": "Original"
                },
                "3208800450": {
                    "name": "Original"
                },
                "3387170127": {
                    "name": "Original"
                },
                "3220240976": {
                    "name": "Original"
                },
                "3169470674": {
                    "code": "/*_optimizely_evaluate=force */\nwindow.oldHeadline = 'As Banks in Greece Reopen, New Sales Taxes Add to Confusion';\nwindow.newHeadline = 'Confusion Among Greeks as Banks Reopen';\n\n//window.oldSummary = 'Mr. Milner says that over the next decade he will provide money for new receiving //equipment, personnel and observing time at existing facilities.';\n//window.newSummary = 'Yuri Milner says that over the next decade he will provide money for new receiving //equipment, personnel and observing time at existing facilities.';\n/*_optimizely_evaluate=safe */\n\n$('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n//$('p:contains(' + window.oldSummary + ')').text(window.newSummary);",
                    "name": "New Headline #1"
                },
                "3232540174": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3289410006": {
                    "name": "Original"
                },
                "3189190879": {
                    "name": "Original"
                },
                "3222040545": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3226000103": {
                    "name": "Original"
                },
                "3259840360": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3230980585": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3183620074": {
                    "code": "/* _optimizely_variation_url include=\"http://www.nytimes.com/upshot/\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1436456071737\" */\n/*_optimizely_evaluate=force */\nwindow.oldHeadline = 'Why Bernie Sanders';\nwindow.newHeadline = 'Bernie Sanders Doesn\u2019t Have Hillary Clinton\u2019s Long-Term Momentum';\n/*_optimizely_evaluate=safe */\n\n$('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http://www.nytimes.com/2015/07/09/upshot/why-bernie-sanderss-momentum-is-not-built-to-last.html\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1436456322744\" */\n/*_optimizely_evaluate=force */\nwindow.oldHeadline = 'Why Bernie Sanders';\nwindow.newHeadline = 'Bernie Sanders Doesn\u2019t Have Hillary Clinton\u2019s Long-Term Momentum';\n/*_optimizely_evaluate=safe */\n\n$('h1:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n/* _optimizely_variation_url_end */",
                    "name": "New Headline #1"
                },
                "3229900395": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3213890898": {
                    "name": "Original"
                },
                "3398480061": {
                    "name": "Original"
                },
                "3248660850": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3192690291": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3201950326": {
                    "name": "Original"
                },
                "3202140138": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                },
                "3256070271": {
                    "code": "/*_optimizely_evaluate=force */\n\nif(window.oldHeadline && window.newHeadline){\n  window.myInterval = setInterval(function() {\n      if ($('a:contains(' + window.oldHeadline + ')').length > 0) {\n      $('a:contains(' + window.oldHeadline + ')').text(window.newHeadline);\n      clearInterval(window.myInterval);\n    }\n\t}, 50); \n}\n\nif(window.oldSummary && window.newSummary) {  \n  window.myInterval = setInterval(function() {\n      if ($('p:contains(' + window.oldSummary + ')').length > 0) {\n      $('p:contains(' + window.oldSummary + ')').text(window.newSummary);\n      clearInterval(window.myInterval);\n    }\n\t}, 50);   \n}\n\n/*_optimizely_evaluate=safe */",
                    "name": "New Headline #1"
                }
            },
            "segments": {
                "3013750536": {
                    "segment_value_type": "mobile",
                    "api_name": "optimizely_mobile",
                    "id": 3013750536,
                    "name": "Mobile Visitors"
                },
                "3028090192": {
                    "segment_value_type": "browser",
                    "api_name": "optimizely_browser",
                    "id": 3028090192,
                    "name": "Browser"
                },
                "3032570147": {
                    "segment_value_type": "campaign",
                    "api_name": "optimizely_campaign",
                    "id": 3032570147,
                    "name": "Campaign"
                },
                "3007620980": {
                    "segment_value_type": "source_type",
                    "api_name": "optimizely_source_type",
                    "id": 3007620980,
                    "name": "Source Type"
                }
            },
            "click_goals": [{
                "event_name": "uber_headline",
                "experiments": {
                    "3179261310": true
                },
                "selector": ".aColumn > div:eq(2) > div:eq(0) > h3:eq(0) > a:eq(0),.aColumn > div:eq(2) > div:eq(1) > h3:eq(0) > a:eq(0)"
            }, {
                "event_name": "business_ht01_headline",
                "experiments": {
                    "3179261310": true
                },
                "selector": "[href*=\"http://www.nytimes.com/2015/07/21/business/international/greece-debt-crisis-banks-reopen.html\"]"
            }]
        };

        function i(a) {
            throw a;
        }
        var j = void 0,
            k = !0,
            l = null,
            o = !1;

        function aa() {
            return function(a) {
                return a
            }
        }

        function ba(a) {
            var b = typeof a;
            return "object" == b && a != l || "function" == b
        }

        function ca(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function da(a, b, c) {
            a || i(Error());
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
        }

        function p(a, b, c) {
            p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
            return p.apply(l, arguments)
        }

        function q(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = Array.prototype.slice.call(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        };
        var u, ea;
        (function() {
            function a(a) {
                d.lastIndex = 0;
                return d.test(a) ? '"' + a.replace(d, function(a) {
                    var b = g[a];
                    return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }

            function b(c, d) {
                var g, t, w, x, F = e,
                    K, G = d[c];
                "function" === typeof h && (G = h.call(d, c, G));
                switch (typeof G) {
                    case "string":
                        return a(G);
                    case "number":
                        return isFinite(G) ? String(G) : "null";
                    case "boolean":
                    case "null":
                        return String(G);
                    case "object":
                        if (!G) return "null";
                        e += f;
                        K = [];
                        if ("[object Array]" === Object.prototype.toString.apply(G)) {
                            x = G.length;
                            for (g = 0; g < x; g += 1) K[g] = b(g, G) || "null";
                            w = 0 === K.length ? "[]" : e ? "[\n" + e + K.join(",\n" + e) + "\n" + F + "]" : "[" + K.join(",") + "]";
                            e = F;
                            return w
                        }
                        if (h && "object" === typeof h) {
                            x = h.length;
                            for (g = 0; g < x; g += 1) "string" === typeof h[g] && (t = h[g], (w = b(t, G)) && K.push(a(t) + (e ? ": " : ":") + w))
                        } else
                            for (t in G) Object.prototype.hasOwnProperty.call(G, t) && (w = b(t, G)) && K.push(a(t) + (e ? ": " : ":") + w);
                        w = 0 === K.length ? "{}" : e ? "{\n" + e + K.join(",\n" + e) + "\n" + F + "}" : "{" + K.join(",") + "}";
                        e = F;
                        return w
                }
            }
            var c = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                e, f, g = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                h;
            u = function(a, c, d) {
                var g;
                f = e = "";
                if ("number" === typeof d)
                    for (g = 0; g < d; g += 1) f += " ";
                else "string" === typeof d && (f = d);
                (h = c) && ("function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) && i(Error("JSON.stringify"));
                return b("", {
                    "": a
                })
            };
            ea = function(a, b) {
                function d(a, c) {
                    var e, f, g = a[c];
                    if (g &&
                        "object" === typeof g)
                        for (e in g) Object.prototype.hasOwnProperty.call(g, e) && (f = d(g, e), f !== j ? g[e] = f : delete g[e]);
                    return b.call(a, c, g)
                }
                var e, a = String(a);
                c.lastIndex = 0;
                c.test(a) && (a = a.replace(c, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }));
                if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof b ?
                    d({
                        "": e
                    }, "") : e;
                i(new SyntaxError("JSON.parse"))
            }
        })();
        var fa = /\s*;\s*/,
            ha = /^([^=]+)=?(.*)$/;

        function v(a) {
            var b = [];
            y(ia(), function(c) {
                a === c.name && b.push(ja(c.value))
            });
            if (0 === b.length) return l;
            1 < b.length && z("Cookie", "Values found for %s: %s", a, b.length);
            return b.pop()
        }
        var ka = o;

        function ia() {
            var a, b = [];
            a = a || "";
            y((document.cookie || "").split(fa), function(c) {
                var d = c.match(ha);
                d && 0 === d[1].indexOf(a) && b.push({
                    name: d[1],
                    value: d[2],
                    N: c
                })
            });
            return b
        }

        function A(a, b, c) {
            if (ka) z("Cookie", "Already initialized.");
            else {
                z("Cookie", "Initializing.");
                var d = document.location.hostname;
                if (la()) {
                    ma = d;
                    for (var d = document.location.hostname.split("."), e = [], f = d.length - 1; 0 <= f; --f) {
                        var g = d.slice(f).join("."),
                            h = "optimizelyDomainTest-" + Math.random().toString(16).replace("0.", ""),
                            m = Math.random().toString(16).replace("0.", "");
                        na(h, m, g, 3);
                        v(h) === m && e.push(g)
                    }
                    oa = e;
                    0 < oa.length ? (ma = oa[0], z("Cookie", "Highest level domain: %s", ma)) : (z("Cookie", "Disabling event tracking because cookies could not be set"),
                        B = o)
                } else e = d.split("."), f = d, g = e[e.length - 1], 2 < e.length && "appspot" === e[e.length - 2] && "com" === g ? f = e[e.length - 3] + ".appspot.com" : 1 < e.length && pa(g, qa) && (f = e[e.length - 2] + "." + g), ra = f, z("Cookie", "Guessed public suffix: %s", ra), sa = ta(d), z("Cookie", "Public suffix (from data): %s", sa);
                ua && z("Cookie", "Domain specified by API: %s", ua);
                ka = k;
                z("Cookie", "Done initializing.")
            }
            b = b || "";
            la() ? (y(oa, function(b) {
                va(a, b)
            }), d = wa(), na(a, b, d, c), c = v(a) === b ? "Succeeded" : "Failed", z("Cookie", "%s setting %s=%s on %s", c, a, b, d)) : (d =
                wa(), e = document.location.hostname, !sa && C("remote_public_suffix") && xa.push({
                    ub: c,
                    name: a,
                    value: b
                }), d && (d === sa && d !== ra) && (va(a, e), va(a, ra)), na(a, b, d, c), f = v(a), f === b) ? z("Cookie", "Successful set %s=%s on %s", a, b, d) : (z("Cookie", "Setting %s on %s apparently failed (%s != %s)", a, d, f, b), z("Cookie", "Setting %s on %s", a, e), na(a, b, e, c), f = v(a), f === b ? (z("Cookie", "Setting %s on %s worked; saving as new public suffix", a, e), ra = e) : (z("Cookie", "Could not set cookie %s, disabling event tracking.", a), B = o))
        }

        function va(a, b) {
            var c = [a, "=", "; ", ya(b), "; path=/", "; expires=", (new Date(0)).toUTCString()];
            document.cookie = c.join("")
        }

        function wa() {
            return la() ? ua || ma : ua || sa || ra
        }

        function ya(a) {
            var b = [];
            b.push("domain=");
            "localhost" !== a && (b.push("."), b.push(a));
            return b.join("")
        }

        function na(a, b, c, d) {
            a = [a, "=", encodeURIComponent(b), "; ", ya(c), "; path=/"];
            d && a.push("; expires=", (new Date(+new Date + 1E3 * d)).toUTCString());
            document.cookie = a.join("")
        }

        function za(a) {
            wa() !== a && (ua = String(a) || "", z("Cookie", "Api public suffix set to: %s", ua))
        }
        var ra = "",
            ua = "",
            ma = "",
            oa = [],
            sa = "",
            xa = [];
        var Aa = window.OPTIMIZELY_TEST_MODULE,
            qa = "com local net org xxx edu es gov biz info fr nl ca de kr it me ly tv mx cn jp il in iq test".split(" "),
            Ba = /\/\*\s*_optimizely_variation_url( +include="([^"]*)")?( +exclude="([^"]*)")?( +match_type="([^"]*)")?( +include_match_types="([^"]*)")?( +exclude_match_types="([^"]*)")?( +id="([^"]*)")?\s*\*\//;
        var Ca, Da = 0,
            Ea = o,
            D = k,
            Fa = o,
            Ga = o,
            Ha = "",
            Ia = o,
            Ja = o,
            Ka = o,
            La = o,
            Ma = o,
            Na = o,
            B = k,
            Oa = 31536E4;

        function Pa() {
            var a = v("optimizelyEndUserId");
            a || (a = "oeu" + +new Date + "r" + Math.random(), A("optimizelyEndUserId", a, Oa));
            return a
        }

        function Qa() {
            return v("optimizelyPPID")
        };

        function Ra(a, b) {
            var c = k;
            y(a, function(a) {
                if (!b(a)) return c = o
            });
            return c
        }

        function E(a, b) {
            var c = o;
            y(a, function(a) {
                if (b(a)) return c = k
            });
            return c
        }

        function H(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b == a[c]) return k;
            return o
        }

        function Sa(a, b) {
            var c = Ta(arguments, 1);
            return function() {
                var b = Ta(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        }

        function y(a, b) {
            var c = l;
            if (I(a))
                for (var d = a.length, e = 0; e < d && !(c = b.call(j, a[e], e), J(c)); ++e);
            else
                for (d in a)
                    if (Object.prototype.hasOwnProperty.call(a, d) && (c = b.call(j, d, a[d]), J(c))) break; return c
        }

        function Ua(a, b) {
            if ("function" === typeof a.map) return a.map(b);
            for (var c = [], d = 0; d < a.length; d++) c.push(b(a[d], d));
            return c
        }

        function L(a, b) {
            y(b, function(b, d) {
                a[b] = d
            });
            return a
        }

        function Va(a, b) {
            if (I(b)) {
                for (var c = a, d = 0; d < b.length; d++) {
                    var e = b[d];
                    if (!ba(c) || !c.hasOwnProperty(e)) return;
                    c = c[e]
                }
                return c
            }
        }

        function Wa(a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                b(f) && c.push(f)
            }
            return c
        }

        function pa(a, b) {
            return y(b, function(b) {
                if (b === a) return k
            }) || o
        }

        function I(a) {
            return !!a && "object" === typeof a && "number" === typeof a.length
        }

        function J(a) {
            return "undefined" !== typeof a
        }

        function Xa(a) {
            return ("number" === typeof a || "string" === typeof a) && Number(a) == a
        }

        function M(a) {
            M = Object.vb || function(a) {
                var c = [];
                y(a, function(a) {
                    c.push(a)
                });
                return c
            };
            return M.call(l, a)
        }

        function Ya(a, b) {
            function c() {
                var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                    c = document.createElement("script");
                c.src = a;
                c.type = "text/javascript";
                b.appendChild(c)
            }
            if (b) try {
                if ("loading" === document.readyState) {
                    var d = "optimizely_synchronous_script_" + Math.floor(1E5 * Math.random()); - 1 !== a.indexOf('"') ? N("loadScript", "Blocked attempt to load unsafe script: " + a) : (document.write('<script id="' + d + '" src="' + a + '"><\/script>'), 1 !== $("#" + d).length && i(Error("Document.write failed to append script")))
                } else i(Error("Not safe to attempt document.write"))
            } catch (e) {
                try {
                    var f =
                        new XMLHttpRequest;
                    f.open("GET", a, o);
                    f.onload = function() {
                        eval(f.responseText)
                    };
                    f.onerror = function() {
                        i(Error())
                    };
                    f.send()
                } catch (g) {
                    z("Common", "Failed to load %s synchronously", a), c()
                }
            } else c()
        }

        function z(a, b, c) {
            var d = window.console;
            if (Ka && d && d.log) {
                var e = Ta(arguments, 1);
                e[0] = "Optimizely / " + a + " / " + b;
                Function.prototype.apply.call(d.log, d, e)
            }
        }

        function ja(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        function Ta(a, b) {
            return Array.prototype.slice.call(a, b || 0, a.length)
        }

        function Za(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        };

        function $a(a) {
            this.B = a;
            this.b = {
                totalGets: 0,
                totalGetLength: 0,
                totalGetTime: 0,
                totalSets: 0,
                totalSetLength: 0,
                totalSetTime: 0
            }
        }
        $a.prototype.get = function(a) {
            try {
                var b = +new Date,
                    c = this.B.getItem([ab, a].join("$$")),
                    d = ea(c);
                this.b.totalGetTime += +new Date - b;
                this.b.totalGets++;
                this.b.totalGetLength += (c || "").length;
                return d
            } catch (e) {
                return l
            }
        };
        $a.prototype.set = function(a, b) {
            try {
                var c = +new Date,
                    d = u(b);
                J(b) ? this.B.setItem([ab, a].join("$$"), d) : this.B.removeItem([ab, a].join("$$"));
                this.b.totalSetTime += +new Date - c;
                this.b.totalSets++;
                this.b.totalSetLength += d.length
            } catch (e) {}
        };
        $a.prototype.pa = function() {
            return this.b
        };
        var bb = {
                get: function() {},
                set: function() {},
                pa: function() {
                    return {}
                }
            },
            ab = "optimizely_data",
            O = bb,
            db = bb;
        try {
            var O = new $a(window.localStorage),
                db = new $a(window.sessionStorage),
                eb = O,
                fb = eb.B.getItem(ab),
                gb = {};
            try {
                gb = ea(fb) || {}
            } catch (hb) {}
            if (0 !== M(gb).length) {
                var ib = Qa() || v("optimizelyEndUserId"),
                    jb = gb[ib] || {},
                    kb;
                for (kb in jb)
                    if (jb.hasOwnProperty(kb)) {
                        var lb = [ib, kb].join("$$");
                        eb.get(lb) === l && eb.set(lb, jb[kb])
                    }
                delete gb[ib];
                for (kb in gb) gb.hasOwnProperty(kb) && (eb.get(kb) === l && eb.set(kb, gb[kb]), delete gb[kb]);
                try {
                    fb = u(gb)
                } catch (mb) {
                    fb = {}
                }
                eb.B.setItem(ab, fb)
            }
        } catch (nb) {};

        function N(a, b, c) {
            ob.push({
                Aa: new Date,
                ya: a,
                message: b,
                oa: c || o
            });
            pb && qb()
        }

        function rb() {
            Ka = k
        }

        function sb() {
            La = Ka = k
        }

        function qb() {
            Ka && (y(ob, function(a) {
                if (!a.Xa && (!a.oa || a.oa === La)) {
                    var b = +a.Aa;
                    z(a.ya, a.message + (" [time " + (tb ? b - tb : 0) + " +" + (ub ? b - ub : 0) + "]"));
                    ub = b;
                    tb || (tb = b);
                    a.Xa = k
                }
            }), pb = k)
        }
        var ub = l,
            tb = l,
            ob = [],
            pb = o;
        var P = {};

        function vb(a, b) {
            P[a] = b
        }

        function wb() {
            var a = (P.odds || l) && (P.odds || l).ip || (P.cdn3 || l) && (P.cdn3 || l).ip;
            return a ? xb(a) : l
        }

        function yb() {
            return !P.odds ? l : (P.odds || l).lists || {}
        }

        function zb() {
            if (!P.cdn3) return l;
            var a = (P.cdn3 || l).location || {};
            return {
                continent: xb(a.continent),
                country: xb(a.country),
                region: xb(a.region),
                city: xb(a.city)
            }
        }

        function Ab() {
            var a = P.dcps || l;
            return !a ? l : a.matchingRules_metadata && a.matchingRules_metadata.uid && a.matchingRules_metadata.uid != Bb() ? (N("Async Info", "Ignoring out-of-date DCP data; will wait for fresh data to arrive."), l) : a.matchingRules || []
        }

        function xb(a) {
            return "string" !== typeof a || "N/A" === a.toUpperCase() ? l : a.toUpperCase()
        };

        function Cb(a) {
            a = a || {};
            if (B) {
                a && a.sVariable && (Db = a.sVariable);
                var b = Db || ("undefined" !== typeof window.s ? window.s : l);
                if (b)
                    if (Eb) {
                        a = Fb;
                        if (a !== l && b) try {
                            z("Integrator", "Fixing SiteCatalyst referrer to %s", a), b.referrer = String(a)
                        } catch (c) {
                            z("Integrator", "Error setting SiteCatalyst referrer: %s", c)
                        }
                        z("Integrator", "Tracking with SiteCatalyst");
                        y(Gb(), function(a) {
                            var c = Q(a),
                                a = R(c, a, 100, 100, 25, k),
                                f = a.key + ": " + a.value,
                                a = [],
                                g = S(c, "site_catalyst_evar") || l,
                                c = S(c, "site_catalyst_prop") || l;
                            g !== l && a.push("eVar" + g);
                            c !== l && a.push("prop" + c);
                            y(a, function(a) {
                                z("Integrator", "Setting SiteCatalyst %s='%s'", a, f);
                                b[a] = f
                            })
                        })
                    } else Hb = k;
                else N("Integrator", "Error with SiteCatalyst integration: 's' variable not defined")
            }
        }

        function Ib(a) {
            a = Xa(a) ? Number(a) : -1;
            if (-1 !== [1, 2, 3].indexOf(a)) Jb = a;
            else return Jb
        }

        function Kb() {
            if (B) {
                var a = Fb;
                if (a !== l) try {
                    z("Integrator", "Fixing _gaq._setReferrerOverride with %s", a), _gaq.push(["_setReferrerOverride", a])
                } catch (b) {
                    z("Integrator", "Error setting Google Analytics referrer: %s", b)
                }
                var c = [];
                y(Gb(), function(a) {
                    var b = Q(a);
                    if (S(b, "chartbeat")) {
                        var d = Lb;
                        Lb = "";
                        var e = R(b, a, 10, 10, 5, o);
                        Lb = d;
                        d = Mb(a);
                        Nb = e.key + ": " + String(d);
                        try {
                            z("Integrator", "Calling _cbq.push"), _cbq.push(["_optlyx", Nb])
                        } catch (r) {
                            N("Integrator", "Error sending Chartbeat data for " + T(b))
                        }
                    }
                    if (Ob(b)) {
                        var e = Ob(b),
                            d = R(b, a, 100, 100, 25, k),
                            n = e + (-1 !== e.indexOf("?") ? "&" : "?") + "optimizely_experiment_id=" + b + "&optimizely_experiment_name=" + encodeURIComponent(d.key) + "&optimizely_variation_id=" + a + "&optimizely_variation_name=" + encodeURIComponent(d.value) + "&ns_m_exp=(" + b + ") " + encodeURIComponent(d.key) + "&ns_m_chs=(" + a + ") " + encodeURIComponent(d.value) + "&type=hidden";
                        try {
                            $(window).load(function() {
                                N("Integrator", "Sending comScore log call");
                                Pb(n, l)
                            })
                        } catch (t) {
                            N("Integrator", "Error sending comScore data for " + T(b))
                        }
                    }
                    if (S(b, "crazyegg")) {
                        e =
                            R(b, a, 100, 100, 15, o);
                        try {
                            z("Integrator", "Defining CE_SNAPSHOT_NAME"), window.CE_SNAPSHOT_NAME = e.key + ": " + e.value
                        } catch (w) {
                            N("Integrator", "Error sending CrazyEgg data for " + T(b))
                        }
                    }
                    if (Qb(b)) {
                        e = Qb(b);
                        d = 0;
                        J(e) && (d = e.slot || d);
                        var e = d,
                            d = Qb(b),
                            x = "";
                        J(d) && (x = d.tracker || x);
                        d = x;
                        x = R(b, a, 28, 24, 5, k);
                        try {
                            var F = "";
                            "" !== d && (F = d + ".");
                            z("Integrator", "Calling _gaq._setCustomVar for slot %d and scope %d", e, Jb);
                            _gaq.push([F + "_setCustomVar", e, x.key, x.value, Jb])
                        } catch (K) {
                            N("Integrator", "Error sending Google Analytics data for " +
                                T(b))
                        }
                    }
                    if (S(b, "inspectlet")) {
                        e = Lb;
                        Lb = "";
                        d = R(b, a, 100, 100, 25, o);
                        Lb = e;
                        try {
                            N("Integrator", "Calling __insp.push for sending data to Inspectlet"), window.__insp = window.__insp || [], window.__insp.push(["tagSession", {
                                "Optimizely Experiment Name": d.key,
                                "Optimizely Variation Name": d.value,
                                "Optimizely Experiment ID": b,
                                "Optimizely Variation ID": a
                            }])
                        } catch (G) {
                            N("Integrator", "Error sending Inspectlet data for " + T(b))
                        }
                    }
                    if (C("kissmetrics")) {
                        e = R(b, a, 100, 100, 15, k);
                        d = {};
                        d[e.key] = e.value;
                        try {
                            z("Integrator", "Calling _kmq.set"),
                                _kmq.push(["set", d])
                        } catch (Wg) {
                            N("Integrator", "Error sending KISSmetrics data for " + T(b))
                        }
                    }
                    if (S(b, "mixpanel")) {
                        e = R(b, a, 100, 100, 15, o);
                        d = {};
                        d[e.key] = e.value;
                        try {
                            z("Integrator", "Calling mixpanel.push"), mixpanel.push(["register", d])
                        } catch (Xg) {
                            N("Integrator", "Error sending Mixpanel data for " + T(b))
                        }
                    }
                    if (S(b, "moat")) {
                        e = R(b, a, 100, 100, 15, o);
                        e = e.key + ": " + e.value;
                        try {
                            z("Integrator", "Calling optimizelyMoat.push"), optimizelyMoat.push(e)
                        } catch (Yg) {
                            N("Integrator", "Error sending Moat data for " + T(b))
                        }
                    }
                    S(b, "sessioncam") &&
                        (c = c.concat(Rb(b, a)));
                    if (Sb(b, "acct_no")) {
                        e = Sb(b, "acct_no");
                        d = Sb(b, "url");
                        x = R(b, a, 28, 24, 5, k);
                        a = d + "/hit.xiti?s=" + e + "&abmvc=" + (b + "[" + encodeURIComponent(x.key) + "]-0-" + a + "[" + encodeURIComponent(x.value) + "]") + "&type=mvt";
                        try {
                            z("Integrator", "Sending AT Internet log call for account %s", e), Pb(a, l)
                        } catch (cb) {
                            N("Integrator", "Error sending AT Internet data for " + T(b))
                        }
                    }
                });
                if (0 < c.length) {
                    a = c;
                    try {
                        N("Integrator", "Calling sessioncamConfiguration object"), window.sessioncamConfiguration = window.sessioncamConfiguration || {}, window.sessioncamConfiguration.customDataObjects = window.sessioncamConfiguration.customDataObjects || [], window.sessioncamConfiguration.customDataObjects = window.sessioncamConfiguration.customDataObjects.concat(a)
                    } catch (d) {
                        N("Integrator", "Error sending sessioncam data " + a)
                    }
                }
                a = v("optimizelyChartbeat") || "";
                try {
                    if (a && Nb != a && (z("Integrator", "Calling _cbq.push for referral"), _cbq.push(["_optlyr", a])), Nb != a) z("Integrator", "Set new Chartbeat referral cookie."), A("optimizelyChartbeat", Nb)
                } catch (e) {
                    N("Integrator",
                        "Error sending Chartbeat referral for " + a)
                }
                Eb = k;
                Tb && (Ub(), Tb = o);
                Hb && (Cb(), Hb = o)
            }
        }

        function Vb() {
            if (window.ClickTaleContext) {
                try {
                    window.ClickTaleContext.getAggregationContextAsync("1", function(a) {
                        a.Location && window.optimizely.push(["overrideUrl", a.Location]);
                        for (var b in a.PageEvents) {
                            var e = a.PageEvents[b][2].match(/x[0-9]+=[0-9_]+/g);
                            z("Integrator", "Playback ClickTale Integration - %s", e);
                            for (b = 0; b < e.length; b++) {
                                z("Integrator", "Playback ClickTale Integration - %s", e[b]);
                                for (var f = e[b].split("=")[0].substr(1), g = e[b].split("=")[1].split("_"), h = 0; h < g.length; h++) Wb(g[h]) ? z("Integrator",
                                    "Skip activation for redirect.") : window.optimizely.push(["activate", f, g[h], {
                                    force: k
                                }])
                            }
                        }
                    })
                } catch (a) {
                    z("Integrator", "Playback ClickTale Aggregation Integration failed.")
                }
                try {
                    window.ClickTaleContext.getRecordingContextAsync("1.1", function(a) {
                        if (a.inSingleRecordingScope) {
                            a.location && window.optimizely.push(["overrideUrl", a.location]);
                            z("Integrator", "Playback ClickTale getRecordingContextAsync callback");
                            for (var b in a.fields) z("Integrator", "Playback ClickTale Integration - %s=%s", b, a.fields[b]), Wb(a.fields[b]) ?
                                z("Integrator", "Skip activation for redirect.") : window.optimizely.push(["activate", b, a.fields[b], {
                                    force: k
                                }])
                        }
                    })
                } catch (b) {
                    z("Integrator", "Playback ClickTale Recording Integration failed.")
                }
            } else z("Integrator", "ClickTaleContext not defined.")
        }

        function Xb() {
            z("Integrator", "Tracking with ClickTale.");
            "function" == typeof window.ClickTaleField ? y(Gb(), function(a) {
                var b = Q(a),
                    c = R(b, a, 100, 100, 15, o),
                    c = c.key + ": " + c.value + " (x" + b + "=" + a + ")";
                z("Integrator", "Setting ClickTale - %s", c);
                window.ClickTaleField(b, a);
                window.ClickTaleEvent(c)
            }) : z("Integrator", "ClickTaleField() not defined.")
        }

        function Yb(a) {
            Lb = a
        }

        function Zb(a) {
            Db = a
        }

        function $b(a, b) {
            return a.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, b)
        }

        function Gb() {
            var a = ac.concat(U),
                b = [];
            y(bc(), function(c) {
                var e = Q(c),
                    f = o;
                if (cc(e)) {
                    var g = dc(c);
                    H(a, e) && (z("Integrator", '"%s" relevant because experiment active', g), f = k);
                    f && b.push(c)
                }
            });
            var c = ec;
            c && b.push(c);
            return b
        }

        function Wb(a) {
            return (a = fc(gc(a))) ? a[1] : l
        }

        function Ub() {
            if (B)
                if (Eb) {
                    var a = window[window.GoogleAnalyticsObject || "ga"];
                    if (a) {
                        var b = Fb;
                        if (b !== l) try {
                            z("Integrator", "Fixing Universal Analytics set referrer with %s", b), (0, window[window.GoogleAnalyticsObject || "ga"])("set", "referrer", b)
                        } catch (c) {
                            z("Integrator", "Error setting Universal Analytics referrer: %s", c)
                        }
                        z("Integrator", "Tracking with Universal Analytics");
                        y(Gb(), function(b) {
                            var c = Q(b);
                            if (hc(c, "slot")) {
                                var f = hc(c, "slot"),
                                    g = hc(c, "tracker"),
                                    h = R(c, b, 100, 100, 25, k),
                                    b = h.key + " (" + c + "): " + h.value;
                                150 < b.length && (b = h.key.substring(0, 80) + " (" + c + "): " + h.value, b = b.substring(0, 149));
                                c = g ? g + "." : "";
                                z("Integrator", "Calling ua set dimension - ga(%sset, dimension%d, %s)", c, f, b);
                                a(c + "set", "dimension" + f, b)
                            }
                        })
                    } else N("Integrator", "Error with Universal Analytics integration: 'GoogleAnalyticsObject' not defined")
                } else Tb = k
        }

        function Rb(a, b) {
            N("Integrator", "Preparing to send data to Sessioncam");
            return [R(a, b, 100, 100, 15, o), {
                key: "Optimizely Exp " + a,
                value: "Optimizely Var " + b
            }]
        }

        function R(a, b, c, d, e, f) {
            a = Lb + ic(a);
            b = jc(b);
            1 < b.length ? (b = $.map(b, function(a) {
                return a.substr(0, e - 1)
            }), b = b.join("~")) : b = b[0];
            f ? (a = $b(a, c), b = $b(b.replace("#", ""), d)) : (a = a.substring(0, c), b = b.substring(0, d));
            return {
                key: a,
                value: b
            }
        }

        function kc(a, b, c) {
            try {
                var d = O.get(lc) || {},
                    e = d[a],
                    f;
                if (c && e) {
                    var c = {},
                        g;
                    if (e)
                        for (g in e) e.hasOwnProperty(g) && (c[g] = e[g]);
                    if (b)
                        for (g in b)
                            if (b.hasOwnProperty(g)) {
                                var e = c,
                                    h = g,
                                    m;
                                if (c[g]) {
                                    var r = c[g],
                                        n = b[g];
                                    I(r) || (r = [r]);
                                    I(n) || (n = [n]);
                                    for (var t = [].concat(r), w = j, w = 0; w < n.length; w++) pa(n[w], t) || t.push(n[w]);
                                    m = t
                                } else m = b[g];
                                e[h] = m
                            }
                    f = c
                } else f = b;
                d[a] = f;
                O.set(lc, d)
            } catch (x) {}
        }
        var Tb = o,
            Hb = o,
            Nb = "",
            Jb = 2,
            Eb = o,
            Lb = "Optimizely ",
            Db = l,
            lc = "thirdParty";

        function mc() {
            return C("admin_account_id")
        }

        function nc(a) {
            return C("audiences", a)
        }

        function oc(a) {
            a = C("audiences", a, "segment_id");
            return !a ? l : a
        }

        function pc() {
            if (!qc) {
                var a = C("click_goals") || [];
                qc = [];
                for (var b = 0, c = a.length; b < c; b++)
                    for (var d = a[b], e = d.selector.split(","), f = 0, g = e.length; f < g; f++) {
                        var h = e[f];
                        h && (h = {
                            event_name: d.event_name,
                            selector: h
                        }, "experiments" in d ? h.experiments = d.experiments : "url_conditions" in d && (h.url_conditions = d.url_conditions), "revenue" in d && (h.revenue = d.revenue), qc.push(h))
                    }
            }
            return qc
        }

        function rc() {
            return C("dcp_keyfield_locators") || []
        }

        function tc(a, b) {
            return C("dimensions", a, b)
        }

        function uc(a) {
            a = tc(a, "condition_type");
            return !a ? l : a
        }

        function vc(a) {
            a = tc(a, "name");
            return !a ? l : a
        }

        function wc() {
            xc || (xc = Wa(yc(), cc));
            return xc
        }

        function zc(a) {
            var b = C("goal_expressions"),
                c = [],
                d;
            for (d in b)
                if (b.hasOwnProperty(d))
                    for (var e = b[d], f = 0; f < e.length; f++) try {
                        if (RegExp(e[f], "i").test(a)) {
                            c.push(d);
                            break
                        }
                    } catch (g) {}
                return c
        }

        function Ac(a) {
            var b = Bc(),
                c;
            for (c in b)
                if (Object.prototype.hasOwnProperty.call(b, c)) {
                    var d = b[c];
                    if (d && d.api_name === a) return String(c)
                }
            return l
        }

        function Cc() {
            return C("experiments") || {}
        }

        function yc() {
            return M(C("experiments") || {})
        }

        function Dc(a) {
            return "manual" === S(a, "activation_mode")
        }

        function Ec(a) {
            return "conditional" === S(a, "activation_mode")
        }

        function ic(a) {
            return S(a, "name") || "Exp " + a
        }

        function T(a) {
            return 'experiment "' + ic(a) + '" (' + a + ")"
        }

        function Fc(a) {
            return S(a, "section_ids") || []
        }

        function Gc(a) {
            return S(a, "variation_ids") || []
        }

        function Hc() {
            return C("project_id")
        }

        function Bc() {
            return C("segments") || {}
        }

        function Ic(a, b) {
            for (var c = Fc(a), d = 0; d < c.length; d++) {
                var e = Jc(c[d]);
                if (H(e, b)) return c[d]
            }
            return ""
        }

        function ta(a) {
            var b = {},
                c = C("public_suffixes") || {};
            y(c, function(a, c) {
                y(c, function(c) {
                    b[c] = a
                })
            });
            ta = function(a) {
                return b[a] || ""
            };
            return ta.call(l, a)
        }

        function Jc(a) {
            return C("sections", a, "variation_ids") || []
        }

        function gc(a) {
            var b = [];
            y(a.split("_"), function(a) {
                (a = C("variations", a, "code")) && b.push(a)
            });
            return b.join("\n")
        }

        function Q(a) {
            if (!Kc) {
                var b = {};
                y(yc(), function(a) {
                    y(Fc(a), function(d) {
                        y(Jc(d), function(d) {
                            b[d] = a
                        })
                    });
                    y(Gc(a), function(d) {
                        b[d] = a
                    })
                });
                Kc = b
            }
            return Kc[a.split("_")[0]] || ""
        }

        function Mb(a) {
            var b = Q(a),
                c = Fc(b);
            if (0 === c.length) {
                c = Gc(b);
                for (b = 0; b < c.length; b++)
                    if (c[b] === a) return b
            } else {
                for (var a = a.split("_"), b = [], d = 0; d < c.length; d++)
                    for (var e = Jc(c[d]), f = 0; f < e.length; f++) e[f] === a[d] && b.push(f);
                if (b !== []) return b
            }
            return -1
        }

        function dc(a) {
            var b;
            return jc(a).join(b || ", ")
        }

        function jc(a) {
            var b = [];
            y(a.split("_"), function(a) {
                b.push(C("variations", a, "name") || "Var " + a)
            });
            return b
        }

        function cc(a) {
            return !!S(a, "enabled")
        }

        function la() {
            return !!C("simple_cookies")
        }

        function S(a, b) {
            return C("experiments", a, b)
        }

        function Ob(a) {
            a = S(a, "comscore");
            return J(a) ? a.url : l
        }

        function Qb(a) {
            return S(a, "google_analytics")
        }

        function hc(a, b) {
            var c = S(a, "universal_analytics");
            return J(c) ? c[b] : l
        }

        function Sb(a, b) {
            var c = S(a, "at_internet");
            return J(c) ? c[b] : l
        }

        function C(a) {
            var b = DATA;
            if (y(arguments, function(a) {
                    a = b[a];
                    if (J(a)) b = a;
                    else return l
                }) !== l) return b
        }

        function Lc(a, b) {
            return C("segments", a, b)
        }

        function Mc() {
            var a = C("rum_sampling_rate");
            return J(a) ? a : 0.001
        }

        function Nc() {
            return !!C("is_behavior_enabled")
        }

        function Oc() {
            return !!C("slave")
        }
        var qc = l,
            xc = l,
            Kc = l;

        function Pc(a, b, c, d) {
            if (!D) return o;
            var e = "number" === typeof c || "string" === typeof c ? String(c) : l,
                f = !!(c === k || c && c.force === k || d && d.force === k),
                d = ("object" === typeof c ? c : d) || {},
                c = d.skip === k,
                g = d.skipPageview === k,
                d = d.enabledStatus;
            if (e) try {
                Qc(b, e, k)
            } catch (h) {
                N("Activator", "Error while activating experiment " + b + " for variation " + e + " -- proceeding without bucketing user.")
            }
            var m = [];
            Xa(b) ? m.push(b) : y(yc(), function(a) {
                Dc(a) && m.push(a)
            });
            Rc(a, m, {
                Ca: f,
                Ya: k,
                Ba: d,
                ab: c,
                ta: g
            })
        }

        function Sc(a, b, c) {
            if (!D) return o;
            if (!("object" === typeof b && "string" === typeof c))
                if ("object" === typeof b && !J(c)) c = b.hasOwnProperty("lists") ? "odds" : "cdn3";
                else if (J(b) || J(c)) {
                N("Activator", "Unrecognized arguments to activateGeoDelayedExperiment: " + arguments);
                return
            }
            if ("object" === typeof b && "string" === typeof c) {
                N("Activator", "Saving async info from '" + c + "'");
                "cdn3" === c && V("geoArrive");
                var d = b;
                J(d.matchingRules) && (J(d.matchingRules_metadata) || (d.matchingRules_metadata = {}), J(d.matchingRules_metadata.uid) ||
                    (d.matchingRules_metadata.uid = Bb()));
                var d = c,
                    e = b,
                    f = O.get("asyncInfo") || {};
                f[d] = e;
                O.set("asyncInfo", f);
                var d = (P[c] = b) && b.lists || {},
                    e = {},
                    g, h, m, r;
                for (r in d) d.hasOwnProperty(r) && (0 === r.indexOf("_") && d[r]) && (g = r.substring(1).split("__"), h = g.shift(), f = g.shift(), g = g.join("__"), h && (f && g) && (m = e, m[h] || (m[h] = {}), m = m[h], m[f] || (m[f] = []), m = m[f], m.push(g)));
                for (h in e) kc(h, e[h], o);
                Tc ? (N("Activator", "Post-timeout; too late to act on new async info."), geolocation.cdn3Requested && V("geoFailed")) : (h = Uc.slice(), N("Activator",
                    "Trying to activate " + h.length + " delayed segments"), Vc(h), h = Wc.slice(), N("Activator", "Trying to activate " + h.length + " experiments"), Rc(a, h, {
                    ta: Na
                }), Xc(), "object" === typeof b && "string" === typeof c && "cdn3" === c && V("geoSuccess"))
            } else N("Activator", "Timeout: will not act on future async info."), V("geoTimeout"), Tc = k
        }

        function Rc(a, b, c) {
            N("Activator", "Triaging " + b.length + " experiments.");
            var d = [],
                e = [],
                f = [];
            y(b, function(b) {
                c.Ca ? (N("Activator", "Force-ignoring conditions for experiment " + b), d.push(b)) : Yc(b) ? Zc(b, {
                    manualActivation: c.Ya,
                    objectType: "experiment",
                    enabledStatus: c.Ba,
                    visitor: a
                }) ? (N("Activator", "Passed conditions for experiment " + b), d.push(b)) : (N("Activator", "Failed conditions for experiment " + b), f.push(b)) : (N("Activator", "Can't test conditions for experiment " + b), e.push(b))
            });
            Wc = [];
            y(e, $c);
            var g = [];
            y(d,
                function(a) {
                    ad(a, c.ab) && g.push(a)
                });
            bd(g, b);
            cd();
            Kb();
            D && !c.ta && dd(document.location.href, "pageview", {
                X: k
            })
        }

        function Vc(a) {
            N("Activator", "Triaging " + a.length + " segments.");
            var b = [],
                c = [],
                d = [],
                e = [];
            y(a, function(a) {
                Lc(a, "is_api_only") ? (N("Activator", "Ignoring API-only segment " + a), e.push(a)) : Yc(a) ? Zc(a, {
                    objectType: "segment"
                }) ? (N("Activator", "Passed conditions for segment " + a), b.push(a)) : (N("Activator", "Failed conditions for segment " + a), d.push(a)) : (N("Activator", "Can't test conditions for segment " + a), c.push(a))
            });
            Uc = [];
            y(c, ed);
            y(b, fd)
        }

        function $c(a) {
            N("Activator", "Deferring test for experiment " + a);
            Wc.push(a)
        }

        function ed(a) {
            N("Activator", "Deferring test for segment " + a);
            Uc.push(a)
        }
        var Wc = [],
            Uc = [],
            Tc = o;

        function gd(a, b) {
            function c(a, b) {
                var c = b & 65535;
                return ((b - c) * a | 0) + (c * a | 0) | 0
            }
            for (var d = a.length, e = b || 0, f = d & -4, g, h = 0; h < f; h += 4) g = a.charCodeAt(h) & 255 | (a.charCodeAt(h + 1) & 255) << 8 | (a.charCodeAt(h + 2) & 255) << 16 | (a.charCodeAt(h + 3) & 255) << 24, g = c(g, 3432918353), g = (g & 131071) << 15 | g >>> 17, g = c(g, 461845907), e ^= g, e = (e & 524287) << 13 | e >>> 19, e = 5 * e + 3864292196 | 0;
            g = 0;
            switch (d % 4) {
                case 3:
                    g = (a.charCodeAt(f + 2) & 255) << 16;
                case 2:
                    g |= (a.charCodeAt(f + 1) & 255) << 8;
                case 1:
                    g |= a.charCodeAt(f) & 255, g = c(g, 3432918353), e ^= c((g & 131071) << 15 | g >>> 17, 461845907)
            }
            e ^=
                d;
            e = c(e ^ e >>> 16, 2246822507);
            e = c(e ^ e >>> 13, 3266489909);
            return e ^ e >>> 16
        };
        var hd = Math.pow(2, 32);
        /*


         UAParser.js v0.7.3
         Lightweight JavaScript-based User-Agent string parser
         https://github.com/faisalman/ua-parser-js

         Copyright ? 2012-2014 Faisal Salman <fyzlman@gmail.com>
         Dual licensed under GPLv2 & MIT
        */
        function id() {}
        var jd = {
            extend: function(a, b) {
                for (var c in b) - 1 !== "browser cpu device engine os".indexOf(c) && 0 === b[c].length % 2 && (a[c] = b[c].concat(a[c]));
                return a
            },
            has: function(a, b) {
                if ("string" === typeof a) return -1 !== b.toLowerCase().indexOf(a.toLowerCase())
            },
            L: function(a) {
                return a.toLowerCase()
            }
        };

        function kd() {
            for (var a, b = 0, c, d, e, f, g, h, m = arguments; b < m.length && !g;) {
                var r = m[b],
                    n = m[b + 1];
                if ("undefined" === typeof a)
                    for (e in a = {}, n) f = n[e], "object" === typeof f ? a[f[0]] = j : a[f] = j;
                for (c = d = 0; c < r.length && !g;)
                    if (g = r[c++].exec(this.ma()))
                        for (e = 0; e < n.length; e++) h = g[++d], f = n[e], "object" === typeof f && 0 < f.length ? 2 == f.length ? a[f[0]] = "function" == typeof f[1] ? f[1].call(this, h) : f[1] : 3 == f.length ? a[f[0]] = "function" === typeof f[1] && (!f[1].exec || !f[1].test) ? h ? f[1].call(this, h, f[2]) : j : h ? h.replace(f[1], f[2]) : j : 4 == f.length &&
                            (a[f[0]] = h ? f[3].call(this, h.replace(f[1], f[2])) : j) : a[f] = h ? h : j;
                b += 2
            }
            return a
        }

        function ld(a, b) {
            for (var c in b)
                if ("object" === typeof b[c] && 0 < b[c].length)
                    for (var d = 0; d < b[c].length; d++) {
                        if (jd.has(b[c][d], a)) return "?" === c ? j : c
                    } else if (jd.has(b[c], a)) return "?" === c ? j : c;
            return a
        }
        var md = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2E3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: "NT 6.4",
                RT: "ARM"
            },
            nd = {
                browser: [
                    [/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i],
                    ["name", "version", "major"],
                    [/\s(opr)\/((\d+)?[\w\.]+)/i],
                    [
                        ["name", "Opera"], "version", "major"
                    ],
                    [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,
                        /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i
                    ],
                    ["name", "version", "major"],
                    [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],
                    [
                        ["name", "IE"], "version", "major"
                    ],
                    [/(yabrowser)\/((\d+)?[\w\.]+)/i],
                    [
                        ["name", "Yandex"], "version", "major"
                    ],
                    [/(comodo_dragon)\/((\d+)?[\w\.]+)/i],
                    [
                        ["name", /_/g, " "], "version", "major"
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i,
                        /(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i
                    ],
                    ["name", "version", "major"],
                    [/(dolfin)\/((\d+)?[\w\.]+)/i],
                    [
                        ["name", "Dolphin"], "version", "major"
                    ],
                    [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],
                    [
                        ["name", "Chrome"], "version", "major"
                    ],
                    [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],
                    ["version", "major", ["name", "Mobile Safari"]],
                    [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],
                    ["version", "major", "name"],
                    [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],
                    ["name", ["major", ld, {
                            1: ["/8", "/1",
                                "/3"
                            ],
                            2: "/4",
                            "?": "/"
                        }],
                        ["version", ld, {
                            "1.0": "/8",
                            "1.2": "/1",
                            "1.3": "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }]
                    ],
                    [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i],
                    ["name", "version", "major"],
                    [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],
                    [
                        ["name", "Netscape"], "version", "major"
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,
                        /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i
                    ],
                    ["name", "version", "major"]
                ],
                Z: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        ["architecture", "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        ["architecture", jd.L]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        ["architecture", "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        ["architecture",
                            "arm"
                        ]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        ["architecture", /ower/, "", jd.L]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        ["architecture", "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        ["architecture", jd.L]
                    ]
                ],
                G: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    ["model", "vendor", ["type", "tablet"]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    ["model", ["vendor", "Apple"],
                        ["type", "tablet"]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        ["model", "Apple TV"],
                        ["vendor", "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    ["vendor", "model", ["type", "tablet"]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    ["model", ["vendor", "Amazon"],
                        ["type", "tablet"]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        ["model", ld, {
                            "Fire Phone": ["SD", "KF"]
                        }],
                        ["vendor", "Amazon"],
                        ["type", "mobile"]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    ["model", "vendor", ["type", "mobile"]],
                    [/\((ip[honed|\s\w*]+);/i],
                    ["model", ["vendor", "Apple"],
                        ["type", "mobile"]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    ["vendor", "model", ["type", "mobile"]],
                    [/\(bb10;\s(\w+)/i],
                    ["model", ["vendor", "BlackBerry"],
                        ["type", "mobile"]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                    ["model", ["vendor", "Asus"],
                        ["type", "tablet"]
                    ],
                    [/(sony)\s(tablet\s[ps])/i],
                    ["vendor", "model", ["type", "tablet"]],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    ["vendor", "model", ["type", "console"]],
                    [/android.+;\s(shield)\sbuild/i],
                    ["model", ["vendor", "Nvidia"],
                        ["type", "console"]
                    ],
                    [/(playstation\s[3portablevi]+)/i],
                    ["model", ["vendor", "Sony"],
                        ["type", "console"]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        ["vendor", ld, {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }],
                        ["model", ld, {
                            "Evo Shift 4G": "7373KT"
                        }],
                        ["type", "mobile"]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    ["vendor", "model", ["type", "tablet"]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i,
                        /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                    ],
                    ["vendor", ["model", /_/g, " "],
                        ["type", "mobile"]
                    ],
                    [/(nexus\s9)/i],
                    ["model", ["vendor", "HTC"],
                        ["type", "tablet"]
                    ],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    ["model", ["vendor", "Microsoft"],
                        ["type", "console"]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        ["model", /\./g, " "],
                        ["vendor", "Microsoft"],
                        ["type", "mobile"]
                    ],
                    [/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i, /(mot)[\s-]?(\w+)*/i],
                    [
                        ["vendor", "Motorola"], "model", ["type", "mobile"]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    ["model", ["vendor", "Motorola"],
                        ["type", "tablet"]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        ["vendor", "Samsung"], "model", ["type", "tablet"]
                    ],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        ["vendor", "Samsung"], "model", ["type", "mobile"]
                    ],
                    [/(samsung);smarttv/i],
                    ["vendor", "model", ["type", "smarttv"]],
                    [/\(dtv[\);].+(aquos)/i],
                    ["model", ["vendor", "Sharp"],
                        ["type", "smarttv"]
                    ],
                    [/sie-(\w+)*/i],
                    ["model", ["vendor", "Siemens"],
                        ["type", "mobile"]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        ["vendor", "Nokia"], "model", ["type", "mobile"]
                    ],
                    [/android\s3\.[\s\w-;]{10}(a\d{3})/i],
                    ["model", ["vendor", "Acer"],
                        ["type", "tablet"]
                    ],
                    [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        ["vendor", "LG"], "model", ["type", "tablet"]
                    ],
                    [/(lg) netcast\.tv/i],
                    ["vendor", "model", ["type", "smarttv"]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    ["model", ["vendor", "LG"],
                        ["type", "mobile"]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    ["model", ["vendor", "Lenovo"],
                        ["type", "tablet"]
                    ],
                    [/linux;.+((jolla));/i],
                    ["vendor", "model", ["type", "mobile"]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    ["vendor", "model", ["type", "wearable"]],
                    [/android.+;\s(glass)\s\d/i],
                    ["model", ["vendor", "Google"],
                        ["type", "wearable"]
                    ],
                    [/(mobile|tablet);.+rv\:.+gecko\//i],
                    [
                        ["type", jd.L], "vendor", "model"
                    ]
                ],
                ba: [
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                        /(icab)[\/\s]([23]\.[\d\.]+)/i
                    ],
                    ["name", "version"],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    ["version", "name"]
                ],
                qa: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    ["name", "version"],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    ["name", ["version", ld, md]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        ["name", "Windows"],
                        ["version", ld, md]
                    ],
                    [/\((bb)(10);/i],
                    [
                        ["name", "BlackBerry"], "version"
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                        /linux;.+(sailfish);/i
                    ],
                    ["name", "version"],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        ["name", "Symbian"], "version"
                    ],
                    [/\((series40);/i],
                    ["name"],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        ["name", "Firefox OS"], "version"
                    ],
                    [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i,
                        /(gnu)\s?([\w\.]+)*/i
                    ],
                    ["name", "version"],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        ["name", "Chromium OS"], "version"
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        ["name", "Solaris"], "version"
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    ["name", "version"],
                    [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        ["name", "iOS"],
                        ["version", /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        ["name", "Mac OS"],
                        ["version", /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i,
                        /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i
                    ],
                    ["name", "version"]
                ]
            };

        function od(a, b) {
            if (!(this instanceof od)) return (new od(a, b)).Oa();
            var c = a || (id && id.navigator && id.navigator.userAgent ? id.navigator.userAgent : ""),
                d = b ? jd.extend(nd, b) : nd;
            this.p = function() {
                return kd.apply(this, d.browser)
            };
            this.Ga = function() {
                return kd.apply(this, d.Z)
            };
            this.J = function() {
                return kd.apply(this, d.G)
            };
            this.Ka = function() {
                return kd.apply(this, d.ba)
            };
            this.ja = function() {
                return kd.apply(this, d.qa)
            };
            this.Oa = function() {
                return {
                    wb: this.ma(),
                    browser: this.p(),
                    ba: this.Ka(),
                    qa: this.ja(),
                    G: this.J(),
                    Z: this.Ga()
                }
            };
            this.ma = function() {
                return c
            };
            this.$a = function(a) {
                c = a
            };
            this.$a(c)
        }
        od.VERSION = "0.7.3";
        od.fb = {
            Y: "name",
            lb: "major",
            VERSION: "version"
        };
        od.hb = {
            cb: "architecture"
        };
        od.ib = {
            nb: "model",
            VENDOR: "vendor",
            rb: "type",
            gb: "console",
            mb: "mobile",
            pb: "smarttv",
            qb: "tablet",
            sb: "wearable",
            jb: "embedded"
        };
        od.kb = {
            Y: "name",
            VERSION: "version"
        };
        od.ob = {
            Y: "name",
            VERSION: "version"
        };
        id.va = od;

        function pd(a) {
            a = (a || "").toLowerCase();
            if (a in qd) return a;
            for (var b in qd)
                if (E(qd[b] || [], function(b) {
                        return b.toLowerCase() === a
                    })) return b;
            return "unknown"
        }
        var qd = {
                gc: ["Chrome", "chromium", "silk", "yandex", "maxthon"],
                ie: ["Internet Explorer", "iemobile"],
                ff: ["Firefox", "iceweasel"],
                opera: ["Opera", "opera mini", "opera tablet"],
                safari: ["Safari", "mobile safari", "webkit"],
                ucbrowser: ["UC Browser"]
            },
            rd = {
                iPhone: "iphone",
                iPad: "ipad"
            };
        var sd, td;

        function ud(a, b, c) {
            kc(a, b, !!c);
            Xc()
        }

        function vd(a, b) {
            var c = Ac(a) || a,
                d = Bc()[c];
            d ? d.audience_id ? W.F(d.audience_id) : d.dimension_id ? W.O(d.dimension_id, b || k, o) : wd(c, b) : N("API", "Unable to find segment: " + c)
        }

        function Qc(a, b, c) {
            Ma = k;
            D && c !== k && dd(document.location.href, "pageview", {
                X: k
            });
            var a = String(a),
                b = String(b),
                d = l,
                e = b.split("_"),
                f = Fc(a),
                b = f && 0 !== f.length;
            if ("-1" === e[0]) {
                c = a;
                xd[c] && delete xd[c];
                yd[c] && delete yd[c];
                for (e = 0; e < X.length; e++) X[e].H === c && X.splice(e, 1);
                zd()
            } else if (b && e.length == f.length) d = [], y(e, function(a, b) {
                256 >= Number(a) ? d.push(Jc(f[b])[a]) : d.push(a)
            }), d = d.join("_");
            else if (!b && 1 == e.length && 256 >= Number(e[0])) {
                var c = String,
                    e = e[0],
                    g = Gc(a),
                    h = l;
                try {
                    h = g[e]
                } catch (m) {}
                d = c(h)
            } else 1 == e.length ? d =
                e[0] : N("API", "Error: could not bucket user. Unknown arguments.");
            d && (b && Ic(a, d) ? (b = d, c = Ic(a, b), Ad[a] = Ad[a] || {}, Ad[a][c] = b, N("Distributor", "Preferring variation partial " + b + " of section " + c + " of experiment " + a), a = Bd(a), 1 === a.length && Cd(a[0], "api.bucketUser", k)) : Cd(d, "api.bucketUser", k));
            cd()
        }

        function Dd(a) {
            a && "tracking" === a || (N("API", "Optimizely disabled"), D = o);
            B = o
        }

        function Ed() {
            N("API", "Finalizing API.");
            Xc();
            sd = k
        }

        function Fd(a, b, c) {
            var d = [],
                e = b,
                c = J(c) ? c : o;
            I(b) && (e = b[0], d = Ta(b, 1));
            (a = a[e]) ? (N("API", 'Called function "' + e + '"'), a.apply(l, d)) : c || N("API", 'Error for unknown function "' + e + '"');
            Oc() && SLAVE_CLIENT.optimizely.push(b);
            qb()
        }

        function Gd(a, b) {
            sd ? N("API", "Error: can't add custom tags after Optimizely loads") : (td = td || {}, 2 == arguments.length ? td[a] = b : 1 == arguments.length && $.extend(k, td, a))
        }

        function Hd(a, b) {
            var c = Ac(a) || a,
                b = J(b) ? b : k,
                d = Bc()[c];
            d ? d.audience_id ? W.W(d.audience_id) : d.dimension_id ? W.O(d.dimension_id, l) : Id(c, b) : N("API", "Unable find segment for: " + c)
        }

        function Jd() {
            var a = M(Bc());
            y(a, function(a) {
                Hd(a, o)
            });
            Kd()
        }

        function Xc() {
            Ld = {};
            Md = {};
            Nd = {};
            y(bc(), function(a) {
                var b = Q(a);
                Ld[b] = a.split("_");
                Md[b] = Mb(a);
                Nd[b] = dc(a)
            });
            Y = {};
            var a = C("audiences");
            a && (Y.audiences = a);
            Y.experiments = {};
            Y.sections = {};
            Y.segments = {};
            Y.state = {};
            Y.variations = {};
            Y.visitor = {};
            Y.customTags = td;
            Y.thirdParty = O.get(lc) || {};
            for (var b = yc(), a = 0; a < b.length; a++) {
                var c = b[a],
                    d = {};
                d.code = S(c, "code") || "";
                d.name = ic(c);
                d.conditional = Ec(c);
                d.manual = Dc(c);
                d.section_ids = Fc(c);
                d.variation_ids = Gc(c);
                Y.experiments[c] = d
            }
            b = M(Bc());
            for (a = 0; a < b.length; a++) c = b[a],
                Y.segments[c] = {
                    name: Lc(c, "name") || "Seg " + c
                };
            b = M(C("sections") || {});
            for (a = 0; a < b.length; a++) c = b[a], d = {}, d.name = C("sections", c, "name") || "Sec " + c, d.variation_ids = Jc(c), Y.sections[c] = d;
            b = M(C("variations") || {});
            for (a = 0; a < b.length; a++) c = b[a], d = {}, d.name = dc(c), d.code = gc(c), Y.variations[c] = d;
            b = {};
            a = Od();
            L(b, {
                browser: qd[a] ? qd[a][0] : a,
                browserVersion: Pd(),
                device: Qd().id,
                deviceType: Qd().type,
                platform: Rd(),
                mobile: Sd(),
                mobileId: Td(),
                os: Rd().id
            });
            b.lists = yb();
            b.location = zb();
            b.ip = wb();
            b.matchingRules = Ab();
            b.params = {};
            c = Ud();
            c.reverse();
            a = 0;
            for (d = c.length; a < d; a++) try {
                b.params[ja(c[a][0])] = ja(c[a][1])
            } catch (e) {
                N("API", "Failed to decode parameter " + c[a][0] + "=" + c[a][1])
            }
            b.referrer = String(document.referrer);
            b.segments = Vd();
            b.dimensions = W.k;
            b.audiences = W.j;
            Y.visitor = b;
            a = {};
            a.activeExperiments = ac || [];
            a.variationIdsMap = Ld;
            a.variationMap = Md;
            a.variationNamesMap = Nd;
            a.enabled = D;
            Y.state = a;
            L(window.optimizely, {
                activeExperiments: ac,
                allExperiments: Cc(),
                all_experiments: Cc(),
                data: Y,
                variationIdsMap: Ld,
                variationMap: Md,
                variationNamesMap: Nd,
                variation_map: Md
            })
        }

        function Wd(a) {
            if (!Xa(a)) return o;
            Da = Number(a)
        }

        function Xd() {
            Ga = k
        }

        function Yd(a) {
            var b = "";
            "number" !== typeof a ? (b = "must be a number.", a = 31536E4) : a = Math.floor(86400 * a);
            7776E3 > a && (b = "less then minimum.", a = 7776E3);
            N("API", (b && "Days argument " + b) + " Cookie expiration set to " + a + " seconds.");
            Oa = a
        }

        function Zd() {
            Na = k
        }

        function $d() {
            v("optimizelyReportableFix") ? N("API", "skipping because cookie is set") : (y(C("audiences"), function(a) {
                oc(a) && (N("API", "Removing from reportable audience: " + a), W.W(a))
            }), A("optimizelyReportableFix", "1", 7776E3))
        }

        function ae(a) {
            var b = Qa();
            a ? A("optimizelyPPID", a, Oa) : va("optimizelyPPID", wa());
            a !== b && (N("Plan", "Resetting visitor buckets"), be = {}, xd = {}, yd = {}, X = [], cd());
            N("API", "Set PPID to " + a)
        }
        var Y = {},
            ce = {},
            Ld = {},
            Md = {},
            Nd = {},
            W = l;

        function de(a, b, c, d) {
            this.n = a;
            this.y = b;
            c && 0 < M(c).length && (this.o = c);
            J(d) && (this.r = d)
        }
        de.prototype.hash = function() {
            if (this.v) return this.v;
            var a;
            a = [];
            a.push(encodeURIComponent("n") + "=" + encodeURIComponent(this.n));
            a.push(encodeURIComponent("y") + "=" + encodeURIComponent(this.y));
            this.r && a.push(encodeURIComponent("r") + "=" + encodeURIComponent(this.r));
            if (this.o)
                for (var b = this.o || {}, c = Wa(M(b), function(a) {
                        return b.hasOwnProperty(a)
                    }), c = c.sort(), d = 0; d < c.length; d++) a.push(encodeURIComponent(c[d]) + "=" + encodeURIComponent(b[c[d]]));
            a = a.join("&");
            var e = String.fromCharCode;
            a = a.replace(/[\S\s]/gi,
                function(a) {
                    var a = a.charCodeAt(0),
                        b = e(a & 255);
                    255 < a && (b = e(a >>> 8 & 255) + b);
                    65535 < a && (b = e(a >>> 16) + b);
                    return b
                });
            a = gd(a, 2716770798);
            return this.v = (a >>> 16).toString(16) + (a & 65535).toString(16)
        };

        function ee(a, b) {
            if (a.hash() !== b.hash() || a.n !== b.n || a.y !== b.y || a.r !== b.r) return o;
            if (!a.o && !b.o) return k;
            var c = a.o || {},
                d = b.o || {},
                e = Wa(M(c), function(a) {
                    return c.hasOwnProperty(a)
                }),
                f = Wa(M(d), function(a) {
                    return d.hasOwnProperty(a)
                });
            if (e.length !== f.length) return o;
            for (f = 0; f < e.length; f++) {
                var g = e[f];
                if (!d.hasOwnProperty(g) || c[g] !== d[g]) return o
            }
            return k
        }
        de.prototype.a = function(a, b) {
            var c = Va(this, a);
            return J(c) ? c : b
        };
        de.prototype.A = function(a, b) {
            if ("n" === a || "y" === a || "r" === a || "o" === a) this[a] = b, this.v = l, this.hash()
        };

        function fe(a, b, c) {
            this.l = a;
            this.t = b;
            J(c) && (this.s = c)
        }
        fe.prototype.a = function(a, b) {
            if (0 === a.length) return this;
            var c = {};
            c.t = this.t;
            c.s = this.s;
            c = Va(c, a);
            return J(c) ? c : this.l.a(a, b)
        };
        fe.prototype.A = function(a, b) {
            "t" === a || "s" === a ? this[a] = b : this.l.A(a, b)
        };

        function ge(a, b) {
            b.A("s", 18E5 > Math.abs(a.a(["t"], 0) - b.a(["t"], 0)) ? a.a(["s"]) : b.a(["t"]))
        };

        function he() {
            var a;
            if (!(a = ie)) {
                var b = new id.va(window.navigator.userAgent);
                a = b.p();
                var c = b.ja(),
                    b = b.J(),
                    d = b.model in rd ? rd[b.model] : "unknown",
                    e = (c.name || "unknown").toLowerCase(),
                    f;
                a: if (H(["mobile", "tablet"], b.type)) f = k;
                    else {
                        if (d && "unknown" !== d)
                            for (f in rd)
                                if (d === rd[f]) {
                                    f = k;
                                    break a
                                }
                        f = H(["android", "blackberry", "ios", "windows phone"], e) ? k : o
                    }
                a = {
                    wa: pd(a.name),
                    xa: a.version,
                    platform: {
                        id: e,
                        version: c.version
                    },
                    G: {
                        id: d,
                        type: b.type || (f ? "mobile" : "desktop"),
                        w: f
                    }
                }
            }
            return ie = a
        }

        function Od() {
            return he().wa
        }

        function Pd() {
            return he().xa
        }

        function Qd() {
            return he().G
        }

        function je(a) {
            if (!a) return "";
            try {
                return a.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]
            } catch (b) {
                return ""
            }
        }

        function Rd() {
            return he().platform
        }

        function ke() {
            return O.get([Qa() || Pa(), "events"].join("$$"))
        }

        function le(a) {
            O.set([Qa() || Pa(), "events"].join("$$"), a)
        }

        function Td() {
            var a = "android;blackberry;ipad;iphone;ipod;windows phone".split(";");
            return H(a, Qd().id) ? Qd().id : H(a, Rd().id) ? Rd().id : Sd() ? "mobile" : "unknown"
        }

        function Sd() {
            return Qd().w
        }

        function me() {
            return ne ? "returning" : "new"
        }
        Rd = function() {
            return he().platform
        };

        function oe(a) {
            z("User", "Setting current URL to %s", a);
            pe = a
        }
        var pe = j,
            ie = j,
            ne = j;
        var qe = {},
            re = [],
            se = [],
            te = l,
            ue = o;

        function ve() {
            if (!Nc()) return we(), [];
            if (0 === re.length)
                if (Nc()) {
                    var a;
                    var b = ke() || [];
                    if (0 === b.length) re = [], a = o;
                    else {
                        a = o;
                        if ("eb" in b[0])
                            for (var c = [], d = 0; d < b.length; d++)
                                for (var e = b[d], f = xe(e.eb, e.h), g = e.tb, e = e.ts, h = 0; h < e.length; h++) {
                                    var m = e[h];
                                    c[m.i] = new fe(f, g + m.d)
                                } else {
                                    a = k;
                                    c = [];
                                    for (d = 0; d < b.length; d++) f = b[d], g = xe(f), c[d] = new fe(g, f.t)
                                }
                        b = re = c;
                        for (c = 0; c < b.length; c++) b[c].l = ye(b[c].l)
                    }
                    a && ze(re);
                    a = re;
                    b = a.length;
                    if (0 !== b) {
                        a[0].A("s", a[0].a(["t"]));
                        for (c = 1; c < b; c++) ge(a[c - 1], a[c])
                    }
                    0 < re.length && (te = re[re.length -
                        1]);
                    0 < se.length && (te = se[se.length - 1])
                } else we();
            return re.concat(se).slice(-Ae)
        }

        function ze(a) {
            if (!Oc()) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c],
                        e = d.l,
                        f;
                    if (e.hasOwnProperty("_idx_")) f = b[e._idx_], e = d.t - (f.tb || 0), d = {}, d.d = e, d.i = c, f.ts.push(d);
                    else {
                        f = {};
                        var g = d,
                            h = {};
                        h.n = g.a(["n"]);
                        h.y = g.a(["y"]);
                        var m = g.a(["r"]);
                        J(m) && (h.r = m);
                        g = g.a(["o"]);
                        J(g) && (h.o = g);
                        f.eb = h;
                        f.h = e.hash();
                        f.tb = d.t;
                        d = {
                            d: 0
                        };
                        d.i = c;
                        f.ts = [d];
                        b.push(f);
                        e._idx_ = b.length - 1
                    }
                }
                for (c = 0; c < a.length; c++) delete a[c].l._idx_;
                le(b)
            }
        }

        function we() {
            !ue && !Oc() && (le([]), re = [], se = [], qe = {}, te = l, ue = k)
        }

        function ye(a) {
            var b = a.hash(),
                c = qe[b];
            if ("undefined" === typeof c) return qe[b] = [a], a;
            for (b = 0; b < c.length; b++)
                if (ee(a, c[b])) return c[b];
            c.push(a);
            return a
        }

        function xe(a, b) {
            var c = new de(a.n, a.y, a.o, a.r);
            J(b) && (c.v = b);
            return c
        }
        var Ae = 1E3;

        function Be() {
            try {
                return ve()
            } catch (a) {
                z("Behavior", "Error " + a.toString() + " getting events")
            }
            return []
        };

        function Ce(a, b) {
            var c;
            a: {
                c = {};
                var d, e = C("custom_revenue_goals");
                e && (a in e && Xa(e[a])) && (d = Number(e[a]));
                if (b)
                    if (Xa(b)) d = Number(b);
                    else if ("object" === typeof b) {
                    if (c = L({}, b), "revenue" in c)
                        if (Xa(c.revenue)) d = Number(c.revenue), delete c.revenue;
                        else {
                            z("tracker", "Revenue field %s not a number.", c.revenue);
                            c = l;
                            break a
                        }
                } else {
                    z("tracker", "Revenue argument %s not a number.", b);
                    c = l;
                    break a
                }
                J(d) && (c.e = d)
            }
            if (c === l) z("tracker", "Bad options. Will not track this event.");
            else {
                d = wc();
                var f = {};
                y(d, function(a) {
                    f[a] =
                        k
                });
                $.extend(c, {
                    q: f
                });
                dd(a, "custom", c)
            }
        }

        function dd(a, b, c) {
            c = c || {};
            if (B) {
                b = {
                    name: a,
                    type: b,
                    aa: +new Date / 1E3,
                    options: c
                };
                De.push(b);
                if (c.X !== k) {
                    var b = L({}, b),
                        d = zc(b.name);
                    0 < d.length && (b.name = d[0]);
                    d = td || {};
                    try {
                        if (!Oc())
                            if (Nc()) {
                                var e = b.name,
                                    f = b.type || "default",
                                    g, h = L({}, b.options || {});
                                h.e && (g = h.e);
                                var h = L(d || {}, h.tags || {}),
                                    m = new de(e, f, h, g),
                                    m = ye(m),
                                    r = new fe(m, +new Date, -1);
                                if (e = te) {
                                    var n = e.a(["t"]),
                                        t = e.a(["s"]),
                                        w = r.a(["t"]),
                                        n = "number" !== typeof n ? w - 36E5 : n,
                                        e = new fe(new de("", ""), n, "number" !== typeof t ? n : t);
                                    ge(e, r)
                                } else r.A("s", r.a(["t"]));
                                te =
                                    r;
                                se.push(r);
                                var x = ve();
                                ze(x);
                                re = x;
                                se = []
                            } else we()
                    } catch (F) {
                        z("Behavior", "Error " + F.toString() + " while adding event")
                    }
                }
                delete c.X;
                Ee ? (Fe(), N("Tracker", "Tracking event '" + a + "'")) : N("Tracker", "Queued tracking event '" + a + "'")
            }
        }

        function Ge() {
            He();
            $("html").bind("mousedown", Ie);
            $("html").bind("touchstart", Je)
        }

        function He() {
            $("html").unbind("touchstart", Je);
            $("html").unbind("mousedown touchend", Ie);
            $("html").unbind("touchmove", Ge)
        }

        function Je() {
            $("html").bind("touchend", Ie);
            $("html").bind("touchmove", Ge)
        }

        function Ke() {
            var a = document.location.href,
                b = C("pageview_revenue_goals");
            b && 0 < M(b) ? y(M(b), function(c) {
                dd(a, "pageview", {
                    e: c,
                    q: b[c]
                })
            }) : dd(a, "pageview")
        }

        function Le() {
            var a = v("optimizelyPendingLogEvents") || "[]",
                b = [];
            try {
                b = ea(a)
            } catch (c) {}
            if (I(b))
                for (var a = 0, d = b.length; a < d; a++) {
                    var e = b[a];
                    if ("string" !== typeof e) {
                        b = [];
                        break
                    } else try {
                        ea(e);
                        b = [];
                        break
                    } catch (f) {}
                } else b = [];
            return b
        }

        function Pb(a, b) {
            if (Ne && -1 !== a.indexOf(Oe)) try {
                var c = new XMLHttpRequest;
                if ("withCredentials" in c) {
                    c.onload = b;
                    c.open("GET", a, k);
                    c.withCredentials = k;
                    c.send();
                    return
                }
                Ne = o;
                N("Tracker", "Found that XHR with credentials is not supported in this browser.")
            } catch (d) {
                N("Tracker", "XHR not supported"), Ne = o
            }
            var c = a,
                e = new Image;
            e.onload = b;
            c = c.replace("&" + Oe, "");
            e.src = c;
            Pe.push(e)
        }

        function Qe(a) {
            var b = (a = a === k || "true" === a) ? "true" : "false";
            a ? (A("optimizelyOptOut", b, Oa), A("optimizelyBuckets", b, Oa), alert("You have successfully opted out of Optimizely for this domain.")) : (A("optimizelyOptOut", b, Oa), alert("You are NOT opted out of Optimizely for this domain."))
        }

        function Ie() {
            He();
            dd("engagement", "engagement")
        }
        var De = [],
            Ee = o;

        function Fe() {
            var a = ["a=" + Hc(), "d=" + mc(), "y=" + !!C("ip_anonymization"), "src=js"];
            Ma && a.push("override=true");
            y(bc(), function(b) {
                var c = Q(b);
                a.push("x" + c + "=" + b)
            });
            y(Vd(), function(b, c) {
                a.push("s" + b + "=" + c)
            });
            a.push("tsent=" + +new Date / 1E3);
            var b = [],
                c = Pa(),
                d = Qa();
            y(De, function(a) {
                var e = [],
                    f = [];
                a.name && (e.push("n=" + encodeURIComponent(a.name)), f = f.concat(zc(a.name)));
                if (a.type && "pageview" === a.type) {
                    var f = f.concat(ac.concat(U)),
                        g = ec;
                    g && (g = Q(g), f.push(g))
                }
                a.options.anonymous !== k && (e.push("u=" + c), d && e.push("p=" +
                    encodeURIComponent(d)));
                Ne && e.push(Oe);
                a.aa && e.push("time=" + a.aa);
                Ga && e.push("dtpc=" + Ga);
                var h = !!a.options && !!a.options.e && a.options.q || {},
                    g = M(h),
                    n = Wa(wc(), function(a) {
                        return !h[a]
                    }),
                    f = [{
                        Q: g,
                        na: f.concat([C("summary_revenue_goal_id") || l]),
                        ca: ["v=" + encodeURIComponent(a.options.e)]
                    }, {
                        Q: n,
                        na: f,
                        ca: []
                    }];
                y(f, function(a) {
                    (a.Q.length || Ea) && b.push(e.concat(a.ca).concat(["f=" + a.Q.join(","), "g=" + a.na.join(",")]).join("&"))
                });
                if ("custom" === a.type) try {
                    var m = a.name,
                        r = Pa(),
                        cb = O.get("customEvents") || {},
                        t = cb[r] || (cb[r] = []),
                        t = I(t) ? t : []; - 1 !== $.inArray(m, t) && t.splice($.inArray(m, t), 1);
                    t.push(m);
                    100 < t.length && t.shift();
                    cb[r] = t;
                    O.set("customEvents", cb);
                    va("optimizelyCustomEvents", wa())
                } catch (Me) {}
            });
            var e = b.concat(Le());
            Re(e);
            var f = a.join("&"),
                e = Se ? b : e;
            Se = k;
            for (var g = 0, h = e.length; g < h; g++) {
                var m = e[g],
                    r = f + "&" + m;
                N("Tracker", "Making a log request.");
                var n = Hc(),
                    t = C("log_host");
                n && (t = n.toString() + "." + t);
                n = document.location.protocol;
                "chrome-extension:" === n && (n = "http:");
                Pb(n + "//" + t + "/event?" + r, function() {
                    for (var a = m, b = Le(),
                            c = 0, d = b.length; c < d; c++)
                        if (b[c] === a) {
                            b.splice(c, 1);
                            break
                        }
                    Re(b);
                    N("Tracker", "Removed a pending log event from the pending events cookie.")
                })
            }
            De = [];
            Ee = k
        }

        function Re(a) {
            for (var b = u(a); 1536 < b.length;) a = a.slice(0, -1), b = u(a);
            A("optimizelyPendingLogEvents", b, 15)
        }
        var Pe = [],
            Se = o,
            Oe = "wxhr=true",
            Ne = k;

        function Te() {
            return (new Date).getTime() - (Ue || 0)
        }
        var Ue = Te();

        function V(a) {
            var b = Ve;
            b.f[a] || (b.f[a] = Te())
        }
        var We;
        try {
            We = !document.getElementsByTagName("body")[0]
        } catch (Xe) {
            We = l
        }
        var Ye = l;
        try {
            window.requestAnimationFrame(function() {
                Ye = Te()
            })
        } catch (Ze) {}
        var $e = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;

        function af() {
            try {
                var a = Wa(window.performance.getEntries(), function(a) {
                    return !!$e.test(a.name)
                })[0];
                if (!a) return l;
                var a = L({}, a),
                    b;
                for (b in a) {
                    var c = a[b];
                    (0 === c || "string" === typeof c) && delete a[b]
                }
                return a
            } catch (d) {
                return l
            }
        }
        var Ve = new function() {
            this.f = {};
            this.Ua = Math.random() < Mc();
            geolocation.cdn3Requested && (this.f.geoRequest = geolocation.cdn3Requested - Ue)
        };

        function ad(a, b) {
            var b = b === k,
                c, d = l;
            y(X, function(b) {
                a == b.H && (d = b.id)
            });
            if ((c = d) && 0 < c.length) return N("Distributor", "Not distributing experiment " + a + " (already in plan)"), k;
            if (b || a in xd) return N("Distributor", "Not distributing experiment " + a + " (is ignored)"), o;
            c = S(a, "enabled_variation_ids") || [];
            if (0 === c.length) return N("Distributor", "Permanently ignoring experiment " + a + " (no enabled variations)"), bf(a), o;
            var e = S(a, "ignore") || 0,
                f = cf();
            if (e > Math.floor(1E4 * ((gd(f + a, 0) >>> 0) / hd))) return N("Distributor",
                "Permanently ignoring experiment " + a + "(" + e / 100 + "% likelihood)"), bf(a), o;
            e = c;
            Ad[a] !== j && (N("Distributor", "Taking into account bucketUser variations for experiment " + a), e = Bd(a));
            var f = e,
                g = [],
                h = S(a, "variation_weights") || {};
            y(f, function(a) {
                g.push(h[a])
            });
            f = df(a, g);
            e = e[f];
            N("Distributor", "Picked variation " + e + " [index " + f + " of " + c.length + "]");
            Cd(e, "distributor");
            return k
        }

        function ef(a, b) {
            b = b || {};
            N("Distributor", "Configuring conditionally-activated experiment: " + a);
            ce[a] ? N("Distributor", "Not configuring conditionally-activated experiment (already done): " + a) : !cc(a) && b.force !== k ? N("Distributor", "Not configuring conditionally-activated experiment (not enabled): " + a) : (ff(a, b), sd && Xc())
        }

        function ff(a, b) {
            function c() {
                Pc(W, a, b);
                m.isActive = H(ac.concat(U), a);
                N("Distributor", "Activating conditionally activated experiment " + a)
            }
            var d = S(a, "conditional_code"),
                e = k,
                f;
            try {
                var g = eval("(function() {return " + ("(" + d + ")") + ";})()");
                "function" === typeof g && (e = o, f = g)
            } catch (h) {}
            var m = {
                isActive: o,
                experimentId: a
            };
            if (e) {
                if (e = {
                        objectType: "experiment",
                        enabledStatus: b.enabledStatus
                    }, b.force || !Yc(a) || Zc(a, e)) {
                    var r = function() {
                        Yc(a) && (gf(0, {
                            value: d
                        }) || g) ? c() : setTimeout(r, 50)
                    };
                    r();
                    N("Distributor", "Set up conditional polling for " +
                        a);
                    ce[a] = k
                }
            } else try {
                f(c, m), N("Distributor", "Set up conditional callback for " + a), ce[a] = k
            } catch (n) {
                N("Distributor", "Error running conditional callback function for " + a)
            }
        }

        function cf() {
            return Qa() || Pa()
        }

        function df(a, b) {
            var c = b.length;
            if (0 === c) return l;
            if (1 === c) return 0;
            for (var d = 0, e = 0; e < c; e++) d += b[e];
            e = cf();
            d *= (gd(e + a, 1) >>> 0) / hd;
            for (e = 0; e < c; e++) {
                if (d < b[e]) return e;
                d -= b[e]
            }
            d = cf();
            return Math.floor((gd(d + a, 2) >>> 0) / hd * c)
        }

        function Bd(a) {
            var b = [];
            y(S(a, "enabled_variation_ids") || [], function(c) {
                var d = k,
                    e;
                for (e in Ad[a]) - 1 === c.indexOf(Ad[a][e]) && (d = o);
                d && b.push(c)
            });
            return b
        }
        var Ad = {};
        var Bb = cf;

        function hf(a) {
            if (-1 === a.key.indexOf("_")) return N("Async Request", "Assuming that this invalid key-value is obsolete: " + u(a)), o;
            var b = a.key.split("_"),
                c = b[0],
                b = b.slice(1).join("_");
            if ("c" === c) {
                if (a.value != Z.u(b)) return N("Async Request", "This key-value is obsolete: " + u(a)), o
            } else if ("q" === c) {
                if (a.value != Z.c(b)) return N("Async Request", "This key-value is obsolete: " + u(a)), o
            } else return N("Async Request", "Assuming that this unrecognized key-value is obsolete: " + u(a)), o;
            return k
        };

        function jf(a) {
            if (0 === $("body").length) setTimeout(function() {
                jf(a)
            }, 20);
            else {
                var b;
                b = '<div id="optimizely-loading" style="position:absolute;top:0;right:0;left:0;bottom:0;background-color:white;opacity:0.9;z-index: 3271000;"><h2 style="color:#9a9a9a;top:40%;position:absolute;font-size:2.25em;text-align:center;width:100%;font-family:\'Lucida Grande\',sans-serif;">' + a + "</h2></div>";
                $("#optimizely-loading").remove();
                $("body").append(b)
            }
        }
        var kf = C("preview_host");

        function Ud() {
            var a = window.location.search || "";
            0 === a.indexOf("?") && (a = a.substring(1));
            for (var a = a.split("&"), b = [], c = 0; c < a.length; c++) {
                var d = "",
                    e = "",
                    f = a[c].split("=");
                0 < f.length && (d = f[0]);
                1 < f.length && (e = f[1]);
                b.push([d, e])
            }
            return b
        }

        function lf() {
            for (var a = window.location.search, b, c = /optimizely_([^=]+)=([^&]*)/g, d = {}; b = c.exec(a);) d[b[1]] = b[2];
            return d
        }
        var mf = /x(\d+)/;

        function nf(a) {
            return a && -1 !== String(a).indexOf("[native code]")
        };

        function fc(a) {
            return a.match(/_optimizely_redirect(?:_no_cookie)?=(\S+)/)
        }

        function of(a) {
            return -1 !== a.indexOf("_optimizely_redirect_no_cookie")
        }

        function pf(a) {
            var a = a || "",
                b = v("optimizelyRedirect");
            return of(a) || !b || b && "true" === b.split("|")[1] ? k : o
        }

        function qf() {
            var a;
            a = J(a) ? a : document.referrer;
            A("optimizelyReferrer", a, 5)
        }
        var Fb = l,
            ec = "",
            rf = /^\/\* _optimizely_redirect.+\*\/[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/,
            sf = /^\/\* _optimizely_redirect.+\*\/[ ]*\nvar[ ]*_optly[ ]*=[ ]*{[ ]*redir:document\.createElement\("a"\)\}[;]?\n_optly\.redir\.href\=.*\n_optly\.cur=.+\nif \(_optly.cur\)[ ]?{.+}[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/,
            tf = /^\/\* _optimizely_redirect.+\*\/[ ]*[\n]+window\.location\.replace\([ ]*redirectFirst.*\)[ ]*[;]?$/;

        function uf(a) {
            var b = a || vf;
            N("Segmenter", "Loading segments cookie.");
            if (a = v("optimizelySegments")) {
                try {
                    a = ea(a)
                } catch (c) {
                    a = {}
                }
                y(a, function(a, c) {
                    var d = Bc()[a];
                    N("Segmenter", "Segments cookie contains segment id: " + a);
                    d && d.audience_id ? b.F(d.audience_id) : d && d.dimension_id ? b.O(d.dimension_id, c, o) : wf[a] = c
                })
            }
            Vc(M(Bc()));
            xf.push(yf);
            Kd();
            N("Integrator", "Loading third-party segments.");
            if (window.bk_results) {
                a = window.bk_results;
                N("Integrator", "Loading BlueKai segments.");
                try {
                    y(a.campaigns, function(a) {
                        a = a.seg_id;
                        Bc()[a] ? wd(a, k) : nc(a) && b.F(a)
                    })
                } catch (d) {
                    N("Integrator", "Error loading BlueKai segments.")
                }
            }
        }

        function yf() {
            var a = {};
            y(wf, function(b, c) {
                c && (a[b] = c)
            });
            A("optimizelySegments", u(a), Oa)
        }

        function wd(a, b) {
            a && !isNaN(parseInt(a, 10)) ? (!b && "" !== b && (b = k), wf[a] = b, Kd()) : N("Segmenter", "Unable to find segment for ID: " + a)
        }

        function Kd() {
            y(xf, function(a) {
                a()
            })
        }

        function fd(a) {
            N("Segmenter", "Evaluating Segment " + a);
            var b = zf(a);
            b !== l && wd(a, b)
        }

        function zf(a) {
            if (Lc(a, "is_api_only")) return l;
            var b = l,
                c = l;
            switch (Lc(a, "segment_value_type") || "") {
                case "browser":
                    b = Z.ea();
                    c = "unknown";
                    break;
                case "campaign":
                    b = Z.Ha();
                    c = "none";
                    break;
                case "country":
                    b = Z.K().country;
                    c = "unknown";
                    break;
                case "language":
                    b = Z.R();
                    c = "none";
                    break;
                case "mobile":
                    b = Z.w();
                    break;
                case "os":
                    b = Z.ka().id;
                    c = "unknown";
                    break;
                case "referrer":
                    b = Z.Na();
                    c = "none";
                    break;
                case "source_type":
                    b = Z.Pa();
                    c = "direct";
                    break;
                default:
                    return "true"
            }
            if (b === l) {
                if (wf.hasOwnProperty(a)) return l;
                b = c
            }
            return Af(b)
        }

        function Bf() {
            var a = Z.T();
            if (Z.c("utm_source") || Z.c("utm_campaign") || Z.c("gclid") || Z.c("otm_source")) return "campaign";
            for (var b = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www\\.)?google\\..*?/$", "http(s)?://www\\.bing\\.\\w{2,3}(\\.\\w{2,3})?/", "r\\.search\\.yahoo\\.\\w{2,3}(\\.\\w{2,3})?/", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    if (a.match(d)) return "search"
                } catch (e) {
                    z("Segmenter", "%s: %s while matching %s", e.name, e.message, d)
                }
            }
            return a && je(a) !== je(Z.I()) ?
                "referral" : l
        }

        function Cf() {
            var a = [];
            y(wf, function(b, c) {
                c && a.push(b)
            });
            return a
        }

        function Vd() {
            var a = {};
            y(wf, function(b, c) {
                c && (a[String(b)] = c)
            });
            return a
        }

        function Ef(a) {
            return y(wf, function(b, c) {
                if ((Lc(b, "segment_value_type") || "") == a) return c
            })
        }

        function Id(a, b) {
            var c = Ac(a) || a;
            wf[c] ? (wf[c] = o, ("undefined" === typeof b || b) && Kd()) : N("Segmenter", "Not removing " + a + ", not found")
        }

        function Af(a, b) {
            var c, b = J(b) ? b : k;
            c = c || Ff;
            a = ja(a);
            a = String(a);
            b && (a = a.toLowerCase());
            a = a.substring(0, c);
            return encodeURIComponent(a)
        }
        var xf = [],
            wf = {},
            Ff = 20;

        function Gf() {}
        L(Gf.prototype, {
            ea: Od,
            Fa: Pd,
            Ma: Td,
            w: Sd,
            p: function() {
                return {
                    id: this.ea(),
                    version: this.Fa(),
                    mobileId: this.Ma()
                }
            },
            Ha: function() {
                return this.c("utm_campaign")
            },
            u: v,
            J: Qd,
            S: wb,
            Ea: Be,
            R: function() {
                var a = "";
                try {
                    a = navigator.userLanguage || window.navigator.language, a = a.toLowerCase()
                } catch (b) {
                    a = ""
                }
                return a
            },
            K: zb,
            I: function() {
                return pe || window.location.href
            },
            ia: me,
            La: function() {
                return !ne ? k : !!db.get("first_session")
            },
            Da: Ud,
            ka: Rd,
            T: function() {
                return v("optimizelyReferrer") || document.referrer || ""
            },
            Qa: function(a) {
                var a =
                    a.split("."),
                    b = a[0];
                a: {
                    for (var a = a.slice(1), b = (O.get(lc) || {})[b], c = 0, d = a.length; c < d; c++)
                        if (ba(b) && b.hasOwnProperty(a[c])) b = b[a[c]];
                        else {
                            a = j;
                            break a
                        }
                    a = b
                }
                return a
            },
            Sa: function() {
                return Qa() !== l
            },
            Na: function() {
                return je(this.T())
            },
            la: Cf,
            Pa: Bf,
            Ja: function() {
                return document.referrer
            },
            c: function(a) {
                a: {
                    for (var b = this.Da(), b = b || Ud(), c = 0; c < b.length; c++) {
                        var d = b[c];
                        if (d[0] === a) {
                            a = d[1];
                            a = a.replace(/\+/g, " ");
                            a = ja(a);
                            break a
                        }
                    }
                    a = l
                }
                return a
            },
            Ia: function() {
                return td
            },
            fa: function(a) {
                return (this.Ia() || {})[a]
            },
            Ra: function() {
                var a =
                    (O.get("customEvents") || {})[Pa()] || [];
                return I(a) ? a : []
            },
            Ta: function(a) {
                var b = this.la();
                return H(b, a)
            },
            ua: function(a) {
                return H(this.Ra(), a)
            },
            getDate: function() {
                return new Date
            },
            ga: function(a) {
                var b = P.odds || l;
                return !b ? l : b.lists_metadata && !Ra(b.lists_metadata[a], hf) ? (N("Async Info", "Ignoring out-of-date LT data; will wait for fresh data to arrive."), l) : !yb() ? l : yb()[a] || o
            },
            ha: Ab
        });
        var Z = new Gf;

        function Hf(a, b, c) {
            if (a.a) return a.a(b, c);
            a = Va(a, b);
            "undefined" === typeof a && (a = c);
            return a
        }
        var If = ["*"],
            Jf = {
                eq: function(a) {
                    a = Ua(a, function(a) {
                        return "string" === typeof a ? Za(a).toLowerCase() : a
                    });
                    return a[0] == a[1]
                },
                is: function(a) {
                    return a[0] === a[1]
                },
                gt: function(a) {
                    return a[0] > a[1]
                },
                lt: function(a) {
                    return a[0] < a[1]
                },
                gte: function(a) {
                    return a[0] >= a[1]
                },
                lte: function(a) {
                    return a[0] <= a[1]
                },
                "in": function(a) {
                    return H(a[1], a[0])
                },
                between: function(a) {
                    return a[1] <= a[0] && a[0] <= a[2]
                },
                contains: function(a) {
                    return -1 !== a[0].toLowerCase().indexOf(a[1].toLowerCase())
                },
                regex: function(a) {
                    try {
                        var b = a[1][0] || "",
                            c =
                            a[1][1] || "";
                        return RegExp(b, c).test(a[0])
                    } catch (d) {
                        return z("Rules", 'In operator "regex", error: ' + (d.message || "invalid RegExp /" + [b, c].join("/"))), o
                    }
                },
                and: function(a) {
                    return Ra(a, aa())
                },
                or: function(a) {
                    return E(a, aa())
                },
                not: function(a) {
                    return !a[0]
                }
            },
            Kf = {
                "+": function(a) {
                    return (a[0] || 0) + (a[1] || 0)
                },
                "-": function(a) {
                    return (a[0] || 0) - (a[1] || 0)
                },
                "/": function(a) {
                    return (a[0] || 0) / (a[1] || 1)
                },
                "%": function(a) {
                    return (a[0] || 0) % (a[1] || 1)
                }
            },
            Lf = {
                sum: function(a, b) {
                    for (var c = a[0] || If, d = 0, e = 0; e < b.length; e++) d += Hf(b[e],
                        c, 0);
                    return d
                },
                avg: function(a, b) {
                    if (0 == b.length) return 0;
                    for (var c = a[0] || If, d = 0, e = 0; e < b.length; e++) d += Hf(b[e], c, 0);
                    return d / b.length
                },
                max: function(a, b) {
                    for (var c = a[0] || If, d = Number.NEGATIVE_INFINITY, e = 0; e < b.length; e++) d = Math.max(d, Hf(b[e], c, Number.NEGATIVE_INFINITY));
                    return d
                },
                min: function(a, b) {
                    for (var c = a[0] || If, d = Number.POSITIVE_INFINITY, e = 0; e < b.length; e++) d = Math.min(d, Hf(b[e], c, Number.POSITIVE_INFINITY));
                    return d
                },
                count: function(a, b) {
                    return b.length
                }
            },
            Mf = {
                now: function() {
                    return +new Date
                }
            };

        function Nf(a, b) {
            if (b.hasOwnProperty("value")) return b.value;
            if (b.hasOwnProperty("field")) return Hf(a, b.field);
            if (b.hasOwnProperty("eval")) {
                if (!(b.eval in Mf)) {
                    z("Rules", "Unknown function: " + b.eval);
                    return
                }
                return Mf[b.eval]()
            }
            if (b.op) {
                var c = b.op in Jf ? Jf[b.op] : b.op in Kf ? Kf[b.op] : l;
                if (c) {
                    var d = q(Nf, a),
                        e = Ua(b.args || [], function(a) {
                            return d(a)
                        });
                    return c(e, a)
                }
                z("Rules", "Unknown operator: " + b.op)
            } else z("Rules", "No operator specified: " + u(b))
        }

        function Of(a) {
            function b(a, e) {
                I(a) && ("and" !== a[0] && ("or" !== a[0] && "not" !== a[0]) && z("Rules", "Unexpected operation " + a[0] + ". Continuing optimistically."), a = {
                    op: a[0],
                    args: a.slice(1)
                });
                if (a.hasOwnProperty("field") || a.hasOwnProperty("value") || a.hasOwnProperty("eval")) return a;
                if (e && a.op in Lf) {
                    var f = "_" + a.op + "_" + ((a.args && a.args[0] || {}).field || If).join(".");
                    f in d || (c.push({
                        op: a.op,
                        args: a.args
                    }), d[f] = k);
                    return {
                        field: [f]
                    }
                }
                for (var f = [], g = a.args || [], t = 0; t < g.length; t++) f[t] = b(g[t], e);
                return {
                    op: a.op,
                    args: f
                }
            }
            var c = [],
                d = {},
                e = {};
            a.hasOwnProperty("where") && (e.where = b(a.where, o));
            a.hasOwnProperty("having") && (e.having = b(a.having, k));
            if (a.hasOwnProperty("aggregate") || 0 < c.length) e.aggregate = (a.aggregate || []).concat(c);
            for (var f = ["groupBy", "orderBy", "select", "limit"], g = 0; g < f.length; g++) a.hasOwnProperty(f[g]) && (e[f[g]] = a[f[g]]);
            a.hasOwnProperty("from") && (e.from = Of(a.from));
            return e
        }

        function Pf(a, b) {
            var b = b || 0,
                c = [];
            a.hasOwnProperty("where") ? a.where.op ? a.where.op in Jf || c.push("Non-boolean WHERE clause operator") : c.push("Missing WHERE clause operator") : c.push("Missing WHERE clause");
            a.hasOwnProperty("having") && (a.having.op ? a.having.op in Jf || c.push("Non-boolean HAVING clause operator") : c.push("Missing HAVING clause operator"));
            a.hasOwnProperty("groupBy") && !a.hasOwnProperty("aggregate") && c.push("No AGGREGATE clause specified with GROUP_BY clause");
            if (a.hasOwnProperty("select")) {
                var d =
                    a.select;
                if (I(d))
                    for (var e = 0; e < d.length; e++) d[e].op && d[e].op in Lf && c.push('In SELECT clause, aggregate operator "' + d[e].op + '" specified in selector at index ' + e);
                else c.push("SELECT clause must be an array")
            }
            a.hasOwnProperty("limit") && (d = a.limit, (!Xa(d) || 0 >= Number(d) || Number(d) != Math.floor(Number(d))) && c.push("LIMIT must be a positive integer"));
            0 < b && (c = Ua(c, function(a) {
                return "Sub-rule " + b + ": " + a
            }));
            a.hasOwnProperty("from") && (c = c.concat(Pf(a.from, b + 1)));
            return c
        }

        function Qf(a, b) {
            var c = b;
            a.hasOwnProperty("from") && (c = Qf(a.from, c));
            c = Wa(c, function(b) {
                return Nf(b, a.where)
            });
            if (a.hasOwnProperty("aggregate")) {
                var d = a.groupBy;
                if ("undefined" === typeof d || !I(d) || 0 === d.length) {
                    var d = {},
                        e = {};
                    e[If] = "_";
                    d[If + "=_"] = {
                        da: e,
                        f: c
                    };
                    c = d
                } else {
                    for (var d = Ua(d, function(a) {
                            return a.field
                        }), e = {}, f = 0; f < c.length; f++) {
                        for (var g = c[f], h = [], m = {}, r = 0; r < d.length; r++) {
                            var n = d[r],
                                t = Hf(g, n, "_"),
                                n = n.join(".");
                            m[n] = t;
                            h.push(encodeURIComponent(n) + "=" + encodeURIComponent(t.toString()))
                        }
                        h = h.join("&");
                        e.hasOwnProperty(h) || (e[h] = {
                            da: m,
                            f: []
                        });
                        e[h].f.push(g)
                    }
                    c = e
                }
                var w = a.aggregate,
                    x = {};
                y(c, function(a, b) {
                    x[a] = {};
                    for (var c = 0; c < w.length; c++) {
                        var d = w[c],
                            e = d.op;
                        if (e in Lf) {
                            var f = (d.args && d.args[0] || {}).field || If,
                                d = "_" + e + "_" + f.join("."),
                                e = Lf[e]([f], b.f);
                            x[a][d] = e
                        } else z("Rules", "Unknown aggregate operator " + e)
                    }
                });
                var F = [];
                y(c, function(a, b) {
                    var c = L({}, b.da);
                    L(c, x[a] || {});
                    F.push(c)
                });
                c = F
            }
            a.hasOwnProperty("having") && (c = Wa(c, function(b) {
                return Nf(b, a.having)
            }));
            if (a.hasOwnProperty("orderBy")) {
                var K = a.orderBy;
                I(K) ? c = 0 == K.length ? c : c.sort(function(a, b) {
                    for (var c = 0; c < K.length; c++) {
                        var d = K[c],
                            e = "ASC" === (d.direction || "ASC") ? 1 : -1,
                            f = d.field,
                            d = Hf(a, f, 0),
                            f = Hf(b, f, 0);
                        if (d < f) return -e;
                        if (d > f) return e
                    }
                    return 0
                }) : z("Rules", "groupBy rule must be an array")
            }
            a.hasOwnProperty("limit") && (c = c.slice(0, Number(a.limit)));
            if (a.hasOwnProperty("select")) var G = a.select,
                c = Ua(c, function(a) {
                    return Ua(G, function(b) {
                        return Nf(a, b)
                    })
                });
            return c
        };

        function Rf() {
            this.j = {};
            this.k = {};
            this.z = {};
            this.sa = {}
        }
        Rf.prototype.Wa = function(a) {
            var b = this.z.hasOwnProperty(a) || this.sa.hasOwnProperty(a);
            if (!this.j.hasOwnProperty(a) || !b) try {
                var c = this.j,
                    d = nc(a);
                d || i(Error("Unable to find audience for id: " + a));
                var e = Sf(this, d.conditions);
                N("Visitor", "Checking if in audience " + a + ": " + e);
                c[a] = e
            } catch (f) {
                N("Visitor", "Error: " + f.message)
            }
            return this.j[a]
        };

        function Tf(a, b, c, d) {
            d = L({
                M: k,
                ra: k,
                C: k
            }, d);
            if (nc(b)) {
                a.j[b] = c;
                var e = oc(b);
                e ? a.sa[b] = c : d.M ? a.z[b] = c : delete a.z[b];
                e && d.C && a.C(e, c);
                if (!e && d.M && d.ra) {
                    var f = [];
                    y(a.z, p(function(a) {
                        this.j[a] && f.push(a)
                    }, a));
                    f.sort();
                    A("optimizelyAudiences", f.join(","), 31536E4)
                }
            } else N("Visitor", "Unable to find audience " + b)
        }
        Rf.prototype.F = function(a) {
            Tf(this, a, k)
        };
        Rf.prototype.W = function(a) {
            Tf(this, a, o)
        };
        Rf.prototype.Za = function() {
            y(this.j, p(function(a) {
                Tf(this, a, o, {
                    M: !!this.z.hasOwnProperty(a)
                })
            }, this))
        };

        function Uf(a, b, c, d) {
            d = !J(d) || d;
            J(c) && c !== l && String(c) ? (d && (c = Af(String(c), o)), a.k[b] = c) : delete a.k[b];
            return a.k[b]
        }
        Rf.prototype.O = function(a, b, c) {
            var d;
            a: {
                for (d in C("dimensions") || {}) {
                    var e = a,
                        f = tc(d, "api_name");
                    if (e === (!f ? l : f)) break a
                }
                d = l
            }
            d = d || a;
            C("dimensions", d) ? "custom_dimension" === uc(d) ? (b = Uf(this, d, b, c), a = tc(d, "segment_id"), (a = !a ? l : a) && this.C(a, b), N("Visitor", 'Set dimension "' + d + '" to "' + b + '"')) : N("Visitor", 'Unknown dimension "' + d + '"') : N("Visitor", "Unable to find dimension " + a)
        };
        Rf.prototype.C = function(a, b) {
            b ? wd(a, b) : Id(a)
        };
        var vf = new Rf;

        function Vf(a) {
            var b = a.split(":");
            2 !== b.length && i(Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + a));
            return 60 * parseInt(b[0], 10) + parseInt(b[1], 10)
        };

        function Zc(a, b) {
            var c = !!b.manualActivation,
                d = b.objectType ? b.objectType : "experiment",
                e = "experiment" === d,
                f = b.enabledStatus,
                g = b.visitor || vf;
            N("Condition", "Testing " + d + " " + a);
            var f = e && (J(f) ? !!f : cc(a)),
                h = e && Dc(a),
                m;
            a: switch (d) {
                case "experiment":
                    m = S(a, "conditions");
                    break a;
                case "segment":
                    m = Lc(a, "add_condition");
                    break a;
                default:
                    m = []
            }
            if (e && !f) return N("Condition", "Failed for " + d + " " + a + " (paused)"), o;
            if (e && !c && h) return N("Condition", " Failed for " + d + " " + a + " (manual activation mode)"), o;
            if (m) {
                var r = "experiment" ===
                    (d || "experiment"),
                    n = k;
                y(m, function(b) {
                    var c = b.type;
                    if (r && b.only_first_time && Wf(a)) N("Condition", c + " condition passed because it only gets checked when bucketing", k);
                    else {
                        var d = !b.not,
                            b = (0, Xf[c])(b),
                            e = b !== d;
                        N("Condition", "Found that " + ("the visitor " + (b ? "passed" : "failed") + " a " + c + " targeting condition  when it needed to " + (d ? "pass" : "fail")), !e);
                        if (e) return n = o
                    }
                });
                if (!n) return N("Condition", "Failed for " + d + " " + a + " (condition failed)"), o
            } else {
                a: {
                    c = [];
                    e = [];
                    if ("experiment" === d) c = S(a, "audiences") || [], e =
                        S(a, "urls") || [];
                    else if ("segment" === d)(f = Lc(a, "audience_id")) && (c = [f]);
                    else {
                        N("Condition", "Not a valid objectType: " + d);
                        d = o;
                        break a
                    }
                    if (0 < c.length && (N("Condition", "Testing audiences for " + d + " " + a + ": " + c), !E(c, p(g.Wa, g)))) {
                        N("Condition", "Failed to match any audiences for " + d + " " + a);
                        d = o;
                        break a
                    }
                    if (0 < e.length) {
                        N("Condition", "Testing URLs for " + d + " " + a);
                        var g = e,
                            t = Z.I(),
                            w = [],
                            x = [];
                        y(g, function(a) {
                            a.negate ? x.push(a) : w.push(a)
                        });
                        g = function(a) {
                            return E(a, function(a) {
                                return Yf(t, a)
                            })
                        };
                        if (g(x) || !(0 === w.length ||
                                g(w))) {
                            N("Condition", "Failed to match any URL for " + d + " " + a);
                            d = o;
                            break a
                        }
                    }
                    d = k
                }
                if (!d) return o
            }
            return k
        }

        function Zf(a, b) {
            if (!b) return 0;
            for (var c = b.toString().split("."), d = a.toString().split("."), e = 0; e < c.length; e++)
                if (J(d[e])) {
                    if (Number(d[e]) < Number(c[e])) return -1;
                    if (Number(d[e]) > Number(c[e])) return 1
                } else return -1;
            return 0
        }

        function $f(a, b) {
            var c = b.value,
                d = a.id,
                e = a.version,
                f = a.mobileId;
            return f && "unknown" !== f ? (N("Condition", f, k), "mobile" === c || c === f) : 0 === c.indexOf(d) ? 0 === Zf(e, c.substr(d.length)) : o
        }

        function gf(a, b) {
            var c = b.value;
            if (c === j) return k;
            try {
                return Boolean(eval(c))
            } catch (d) {
                return o
            }
        }

        function ag(a, b) {
            return bg(b.value, b.match, a)
        }

        function cg(a, b) {
            return bg(b.value, b.match, a)
        }

        function dg(a, b) {
            if (a === l) return o;
            var c = b.value;
            switch (b.match) {
                case "exact":
                    if (a == c && "" != a) return k;
                    break;
                case "prefix":
                    if (0 == a.indexOf(c)) return k;
                    break;
                case "regex":
                    try {
                        var d = RegExp(c)
                    } catch (e) {
                        break
                    }
                    if (d.test(a)) return k;
                    break;
                case "cidr":
                    try {
                        var f;
                        a: {
                            var g = new eg(c),
                                h = fg(a);
                            h === l && i(Error("Invalid ip: " + a));
                            for (c = 0; 4 > c; c++)
                                if ((h[c] & g.U[c]) !== g.V[c]) {
                                    f = o;
                                    break a
                                }
                            f = k
                        }
                        return f
                    } catch (m) {}
            }
            return o
        }

        function gg(a, b) {
            var c = b.value;
            return "any" === c || 0 === a.indexOf(c)
        }

        function hg(a, b) {
            if (a === l) return o;
            var c = b.value.split("|"),
                d = $.trim(c[0]),
                e = $.trim(c[1]),
                f = $.trim(c[2]),
                g = $.trim(c[3]);
            switch (c.length) {
                case 1:
                    if (a.country === d) return k;
                    break;
                case 2:
                    if (a.region === e && a.country === d) return k;
                    break;
                case 3:
                    if (a.city === f && (a.region === e || "" === e) && a.country === d) return k;
                    break;
                case 4:
                    if (a.continent === g) return k
            }
            return o
        }

        function ig(a, b) {
            return bg(b.value, b.match, a)
        }

        function jg(a, b) {
            var c = b.value,
                d = b.match;
            N("Condition", "Testing referrer " + a + " against  " + c + " (" + d + ")", k);
            return kg(a, c, d)
        }

        function lg(a) {
            return !!a
        }

        function mg(a) {
            var b = Z.I();
            return E(a.values, q(Yf, b))
        }

        function Yf(a, b) {
            var c = b.value,
                d = b.match;
            N("Condition", "Testing URL " + a + " against  " + c + " (" + d + ")", k);
            return kg(a, c, d)
        }

        function ng(a, b) {
            switch (b.value) {
                case "new":
                    if ("returning" === a) return o;
                    break;
                case "returning":
                    return "returning" === a
            }
            return k
        }

        function Sf(a, b) {
            var c = {
                and: function(b) {
                    return Ra(b, q(Sf, a))
                },
                or: function(b) {
                    return E(b, q(Sf, a))
                },
                not: function(b) {
                    1 !== b.length && i(Error('"not" argument too long: ' + u(b)));
                    return !Sf(a, b[0])
                }
            };
            if (I(b)) {
                if (b[0] in c) return c[b[0]](b.slice(1));
                i(Error("Not an operator"))
            }
            var c = b.dimension_id,
                d = uc(c),
                e = b.value;
            d || i(Error("No dimension type for dimension: " + c));
            var f = og[d];
            f || i(Error("Unknown dimension type: " + d));
            d = j;
            if (a.k.hasOwnProperty(c)) d = a.k[c];
            else try {
                var g = uc(c) || "",
                    h, m;
                C("dimensions", c) || i(Error("Unable to find dimension for id: " +
                    c));
                "custom_dimension" === g && i(Error("calculateDimensionValue called on custom dimension " + c));
                (h = {
                    browser: p(Z.p, Z),
                    browser_version: p(Z.p, Z),
                    behavior: p(Z.Ea, Z),
                    campaign: q(Ef, "campaign"),
                    cookies: p(Z.u, Z),
                    custom_tag: p(Z.fa, Z),
                    device: p(Z.J, Z),
                    event: p(Z.ua, Z),
                    first_session: p(Z.La, Z),
                    has_ppid: p(Z.Sa, Z),
                    ip: p(Z.S, Z),
                    language: p(Z.R, Z),
                    list: p(Z.ga, Z),
                    location: p(Z.K, Z),
                    query: p(Z.c, Z),
                    platform: p(Z.ka, Z),
                    referrer: p(Z.T, Z),
                    segment: p(Z.Ta, Z),
                    source_type: q(Ef, "source_type"),
                    third_party_dimension: p(Z.Qa, Z),
                    time_and_day: p(Z.getDate,
                        Z),
                    url: p(Z.I, Z),
                    visitor: p(Z.ia, Z),
                    dynamic_customer_profile: p(Z.ha, Z)
                }[g]) && (m = h(vc(c)));
                N("Visitor", "Got dimension (" + g + ") value " + c + ": " + u(m));
                d = m
            } catch (r) {
                N("Visitor", "Error: " + r.message)
            }
            return f(d, {
                value: e,
                match: b.match || "exact"
            })
        }

        function Yc(a) {
            var b = k;
            !S(a, "conditions") && !Lc(a, "add_condition") ? (b = [Lc(a, "audience_id")], b[0] || (b = S(a, "audiences") || []), b = Ra(b, function(a) {
                a = nc(a);
                return !a.conditions ? k : pg(a.conditions)
            })) : (S(a, "uses_geotargeting") || Lc(a, "uses_geotargeting")) && (b = qg.ip(l) || qg.location(l));
            b || N("Condition", "Not ready to test (geotargeting): " + a);
            return b
        }

        function pg(a) {
            if (I(a)) return Ra(a.slice(1), pg);
            var b = uc(a.dimension_id) || "";
            return (b = qg[b]) ? b(a) : k
        }
        var Xf = {
                browser: function(a) {
                    var b = Z.p();
                    return E(a.values, function(a) {
                        return $f(b, {
                            value: a
                        })
                    })
                },
                code: function(a) {
                    return gf(0, a)
                },
                cookies: function(a) {
                    for (var b = a.names || [], a = a.values || [], c, d = 0; d < b.length; d++)
                        if (c = b[d], ag(Z.u(c), {
                                value: a[d] || j
                            })) return k;
                    return o
                },
                custom_tag: function(a) {
                    return E(a.values, function(a) {
                        return cg(Z.fa(a.key), {
                            value: a.value
                        })
                    })
                },
                event: function(a) {
                    return E(a.values, function(a) {
                        return Z.ua(a)
                    })
                },
                ip: function(a) {
                    var b = Z.S();
                    return E(a.values, q(dg, b))
                },
                language: function(a) {
                    var b =
                        Z.R();
                    return E(a.values, function(a) {
                        return gg(b, {
                            value: a
                        })
                    })
                },
                location: function(a) {
                    var b = Z.K();
                    return E(a.values, function(a) {
                        return hg(b, {
                            value: a
                        })
                    })
                },
                query: function(a) {
                    return 0 === a.values.length ? k : E(a.values, function(a) {
                        return ig(Z.c(a.key), {
                            value: a.value
                        })
                    })
                },
                referrer: function(a) {
                    return E(a.values, q(jg, Z.Ja()))
                },
                segment: function(a) {
                    var b = Z.la();
                    return E(a.values, function(a) {
                        return lg(pa(a, b))
                    })
                },
                url: mg,
                visitor: function(a) {
                    var b = Z.ia();
                    return ng(b, a)
                }
            },
            og = {
                browser: $f,
                browser_version: function(a, b) {
                    var c =
                        b.value,
                        d = a.id,
                        e = a.version;
                    return 0 === c.indexOf(d) ? 0 === Zf(e, c.substr(d.length)) : o
                },
                behavior: function(a, b) {
                    try {
                        var c;
                        var d = ea(b.value);
                        try {
                            var e;
                            e = Of(d);
                            var f = Pf(e);
                            0 < f.length && i(Error("Rule " + u(e) + " has violations: " + f.join("\n")));
                            c = 0 < Qf(e, a).length
                        } catch (g) {
                            z("Rules", "Error " + g.toString() + " while evaluating rule " + d.toString()), c = o
                        }
                        return c
                    } catch (h) {}
                    return o
                },
                campaign: function(a, b) {
                    "none" === a && (a = l);
                    return bg(b.value, b.match, a)
                },
                code: gf,
                cookies: ag,
                custom_dimension: function(a, b) {
                    var c = b.value;
                    return !J(c) ?
                        J(a) : c == a
                },
                custom_tag: cg,
                device: function(a, b) {
                    var c = b.value;
                    return "unknown" !== a.id ? a.id === c : "tablet" === c ? "tablet" === a.type : "mobile" === c ? a.w && "tablet" !== a.type : "desktop" === c ? !a.w : o
                },
                event: aa(),
                first_session: aa(),
                ip: dg,
                language: gg,
                list: function(a, b) {
                    if (a === l || !J(a)) return o;
                    var c = b.value;
                    return !J(c) ? "" === a || a !== o : a.toString() === c
                },
                location: hg,
                query: ig,
                platform: function(a, b) {
                    var c = b.value.split("_"),
                        d = c[0],
                        c = c.slice(1);
                    return d === a.id ? 0 === c.length ? k : 1 < c.length ? 0 <= Zf(a.version, c[0]) && 0 >= Zf(a.version,
                        c[1]) : 0 === Zf(a.version, c[0]) : o
                },
                referrer: jg,
                segment: lg,
                source_type: function(a, b) {
                    return b.value === a
                },
                time_and_day: function(a, b) {
                    var c, d, e;
                    c = b.value;
                    e = c.split("_");
                    3 !== e.length && i(Error("Invalid time and day string " + c));
                    c = e[0];
                    d = e[1];
                    e = e[2].split(",");
                    c = Vf(c);
                    d = Vf(d);
                    var f = 60 * a.getHours() + a.getMinutes(),
                        g = "sunday monday tuesday wednesday thursday friday saturday".split(" ")[a.getDay()];
                    return f >= c && f <= d && -1 !== $.inArray(g, e)
                },
                third_party_dimension: function(a, b) {
                    return I(a) ? E(a, q(bg, b.value, b.match)) :
                        bg(b.value, b.match, a)
                },
                url: Yf,
                visitor: ng,
                dynamic_customer_profile: function(a, b) {
                    return a === l ? o : H(a, b.value)
                },
                has_ppid: aa()
            },
            qg = {
                ip: function() {
                    V("checkGeo");
                    return Z.S() !== l
                },
                location: function() {
                    V("checkGeo");
                    return Z.K() !== l
                },
                list: function(a) {
                    return Z.ga(vc(a.dimension_id) || "") !== l
                },
                dynamic_customer_profile: function() {
                    return Z.ha() !== l
                }
            };

        function bg(a, b, c) {
            var d = J(c) && c !== l,
                e = J(a) && a !== l;
            switch (b || (e ? "exact" : "exists")) {
                case "exists":
                    return d;
                case "exact":
                    return d && String(c) === a;
                case "substring":
                    return d && -1 !== String(c).indexOf(a);
                case "regex":
                    try {
                        return e && d ? Boolean(String(c).match(RegExp(a))) : o
                    } catch (f) {
                        return o
                    }
                case "range":
                    return a = a.split(":"), b = parseFloat(a[1]), c = parseFloat(c), c >= parseFloat(a[0]) && c <= b;
                default:
                    return o
            }
        };

        function rg(a, b) {
            var c;
            c = $.trim(b);
            var d = "";
            if (window.optimizely && window.optimizely.data)
                if (d = c.match(sg)) d = window.optimizely.data.visitor.params[d[1]], d === j && (d = "");
                else {
                    for (var d = c.split("."), e = window.optimizely, f = 0, g = d.length; f < g; f++)
                        if (e = e[d[f]], e === j || e === l) {
                            e = "";
                            break
                        }
                    d = "" + e
                }
            N("Template", c + " evaluated to: '" + d + "'");
            return d
        }
        var tg = /\{\{ *optimizely\.([^\n\r{}<>]*)\}\}/g,
            sg = /^data\.visitor\.params\.(.*)$/;

        function Cd(a, b, c) {
            var d;
            d = o === k;
            var c = c === k,
                e = o,
                f = Q(a);
            if (f && (c || !Wf(f))) {
                e = k;
                if (c && Wf(f))
                    for (c = 0; c < X.length; c++) X[c].H === f && X.splice(c, 1);
                X.push({
                    H: f,
                    id: a,
                    source: b
                });
                d && (U = U || [], U.push(f));
                yd[f] = k;
                zd();
                N("Plan", "Added experiment " + f + " and variation id " + a + " to the plan, source is " + b, k)
            }
            return e
        }

        function Wf(a) {
            return a in xd || a in yd
        }

        function bc(a) {
            var b = [],
                c = !J(a),
                a = a || [];
            y(X, function(d) {
                (c || H(a, d.H)) && b.push(d.id)
            });
            return b
        }

        function bf(a) {
            var b;
            if (b === k || !Wf(a)) xd[a] = k, zd()
        }

        function cd() {
            var a = {};
            y(be, function(b, c) {
                a[b] = c
            });
            y(X, function(b) {
                var c = Q(b.id);
                a[c] = b.id
            });
            y(xd, function(b) {
                a[b] = "0"
            });
            y(C("blacklisted_experiments") || {}, function(b) {
                b in a && delete a[b]
            });
            A("optimizelyBuckets", u(a), Oa)
        }

        function zd() {
            y(ug, function(a) {
                a()
            })
        }

        function vg(a, b, c, d) {
            if (-1 !== a.indexOf("_optimizely_redirect")) b.push({
                code: a,
                type: "code forced (redirect)",
                P: d
            });
            else {
                for (var a = a.split("\n"), e = o, f = o, g = [], h = []; 0 < a.length;) {
                    var m = Za(a.shift()),
                        r = 0 < h.length;
                    if (m)
                        if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}force/i))) f = k;
                        else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}safe/i)) || Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_force/i))) f = o;
                    else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}editor_only/i))) e = k;
                    else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_editor_only/i))) e = o;
                    else if (!wg.exec(m) && !e)
                        if (f) g.push(m);
                        else {
                            if (!r) {
                                var n = xg.exec(m),
                                    t = [];
                                n ? (t.push(n[1].replace(/^['"]|['"]$/g, "")), (n = yg.exec(m)) && 4 < n.length && t.push(n[4]), c.push({
                                    code: m,
                                    g: t,
                                    type: "safe jquery",
                                    D: k,
                                    P: d
                                })) : r = k
                            }
                            r && h.push(m)
                        }
                }
                0 < g.length && b.push({
                    code: g.join("\n"),
                    type: "forced evaluation",
                    P: d
                });
                0 < h.length && c.push({
                    code: h.join("\n"),
                    type: "safe non-jquery",
                    bb: k,
                    P: d
                })
            }
        }

        function zg(a, b, c) {
            for (var d = {
                    values: []
                }, e = 0, f = a.length; e < f; e++) d.values.push({
                value: a[e],
                match: b[e] || c
            });
            return d
        }
        var ug = [],
            be = {},
            xd = {},
            yg = /^\$j?\(['"](.+?)['"]\)\.detach\(\)\.(appendTo|insertAfter|insertBefore|prependTo)\(['"](.+?)['"]\);(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
            wg = /^(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
            xg = /^\$j?\((['"].+?['"]|document)\)\..+;(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
            yd = {},
            X = [];

        function Ag(a) {
            wf = {};
            uf(a)
        };

        function Bg(a, b) {
            if (a && b)
                if (Cg) N("Evaluator", "Bound event " + b + " to selector " + a), Dg(a, b);
                else {
                    var c = {
                        m: b,
                        g: a,
                        type: "event '" + b + "' (click goal)",
                        D: k
                    };
                    N("Evaluator", "Add step to bind event " + c.m + " to selector " + c.g);
                    Eg.push(c)
                }
        }

        function bd(a, b) {
            if (D) {
                I(a) ? Fg(a) : (a = [], Fg(b));
                a = a.concat(U);
                U = [];
                for (var c = 0; c < a.length; c++) H(ac, a[c]) || ac.push(a[c]);
                c = a;
                c === j ? c = [] : Xa(c) && (c = [c]);
                for (var d = bc(c), e = [], f = [], g = [], h = [], m = Wa(pc(), function(a) {
                        return a.experiments ? o : mg(a.url_conditions || [])
                    }), r = 0, n = m.length; r < n; r++) {
                    var t = {
                        m: m[r].event_name,
                        g: m[r].selector,
                        type: "event '" + m[r].event_name + "' (click goal)",
                        D: k
                    };
                    "revenue" in m[r] && (t.revenue = m[r].revenue);
                    e.push(t)
                }
                y(c, function(a) {
                    var b = {},
                        c = S(a, "events") || {};
                    y(c, function(a, c) {
                        b[a] = [c]
                    });
                    var c = Wa(pc(), function(b) {
                            return "experiments" in b ? a in b.experiments : o
                        }),
                        d = 0;
                    for (; d < c.length; d++) {
                        var n = c[d];
                        b[n.selector] || (b[n.selector] = []);
                        b[n.selector].push({
                            eventName: n.event_name,
                            revenue: n.revenue,
                            experimentIds: n.experiments
                        })
                    }
                    y(b, function(b, c) {
                        y(c, function(c) {
                            e.push({
                                m: c.eventName,
                                q: c.experimentIds,
                                e: c.revenue,
                                g: b,
                                type: "event '" + c.eventName + "' (experiment " + a + ")",
                                D: k
                            })
                        })
                    });
                    c = S(a, "css") || "";
                    d = S(a, "code") || "";
                    c && g.push({
                        code: '$("body").append("<style>' + c.replace(/([\f\n\r\t\\'"])/g, "\\$1") +
                            '</style>");',
                        g: "body",
                        type: "global css (experiment " + a + ")",
                        D: k
                    });
                    d && vg(d, f, h)
                });
                y(d, function(a) {
                    for (var b = gc(a), b = b.split("\n"), c = [], d = k, e = 0, g = b.length; e < g; e++) {
                        var n = $.trim(b[e]);
                        if (n === "/* _optimizely_variation_url_end */") d = k;
                        else if (n !== "") {
                            var m = Ba.exec(n);
                            if (m && m.length === 13) {
                                var r = m[2] ? m[2].split(" ") : [],
                                    n = m[4] ? m[4].split(" ") : [],
                                    t = m[6] ? m[6] : "substring",
                                    Me = m[8] ? m[8].split(" ") : [],
                                    m = m[10] ? m[10].split(" ") : [];
                                if (r.length > 0) {
                                    d = zg(r, Me, t);
                                    d = mg(d)
                                }
                                if (d && n.length > 0) {
                                    d = zg(n, m, t);
                                    d = !mg(d)
                                }
                            } else d &&
                                c.push(n)
                        }
                    }
                    b = c.join("\n");
                    vg(b, f, h, a)
                });
                c = [];
                c.push.apply(c, f);
                c.push.apply(c, g);
                c.push.apply(c, h);
                c.push.apply(c, e);
                Eg.push.apply(Eg, c);
                Gg()
            }
        }

        function Gg() {
            var a = o;
            Hg = l;
            for (N("Evaluator", Ig + " times waited"); !a && 0 < Eg.length;) {
                N("Evaluator", Eg.length + " steps remaining");
                var b = Eg.shift(),
                    c = b,
                    a = o;
                if (c.bb && !Cg) N("Evaluator", "Document not ready yet"), a = k;
                else if (c.D && !Cg && (c = c.g))
                    for (var c = I(c) ? c : [c], d = 0; d < c.length; d++) {
                        var e = c[d];
                        if (!(e === l || e === j || !e.length))
                            if (0 === ("document" == e ? $(document) : $(e)).length) N("Evaluator", "'" + e + "' not found"), a = k
                    }
                a ? Eg.unshift(b) : b.m ? (Jg(), N("Evaluator", "Bound event " + b.m + " to selector " + b.g), c = {}, b.e && (c = {
                    e: b.e,
                    q: b.q
                }), Dg(b.g, b.m, c)) : b.code && (N("Evaluator", "Run code: " + b.code), Kg(b.code, b.P))
            }
            a ? (Hg = setTimeout(Gg, 0 === Ig ? 10 : 50), Ig++) : (N("Evaluator", Ig + " total times waited"), Jg())
        }

        function Jg() {
            V("flash");
            0 < Wc.length || V("flashGeo")
        }

        function Kg(a, b) {
            a = a.replace(tg, rg);
            if (fc(a))
                if (N("Evaluator", "Redirect detected"), pf(a)) {
                    N("Evaluator", "OK to redirect");
                    var c = of(a);
                    N("Evaluator", "setting a redirect cookie" + (b ? " for variation: " + b : ""));
                    A("optimizelyRedirect", (b || "unknown variation") + "|" + (c ? "true" : "false"), 5);
                    qf()
                } else {
                    N("Evaluator", "NOT OK to redirect");
                    return
                }
            eval("var $j = $;");
            try {
                if (fc(a)) {
                    $("head").append("<style type='text/css'>body{display:none;visibility:hidden;}</style>");
                    N("Evaluator", "Hiding body before redirect");
                    var d =
                        sf.test(a) || rf.test(a) || tf.test(a),
                        e = /_keep_body_hidden=(\S+)/.test(a);
                    d || e ? N("Evaluator", "Standard redirect detected - Will not unhide body.") : setTimeout(function() {
                        document.body && (document.body.style.visibility = "visible", document.body.style.display = "block", N("Evaluator", "Unhiding body -- did not redirect"), V("bodyUnhidden"))
                    }, 1700)
                }
                eval(a)
            } catch (f) {
                c = Ka, Ka = k, N("Evaluator", "Error: " + f.message), N("Evaluator", "Code: " + a), Ka = c, N("Evaluator", "Failed to run code: " + f.message)
            }
        }

        function Dg(a, b, c) {
            c = c || {};
            if (!Lg[a] || !Lg[a][b]) {
                var d = function() {
                        dd(b, "custom", c)
                    },
                    e = $(a);
                if (0 < e.length) {
                    var f = function() {
                            e.unbind("touchend", d);
                            e.unbind("touchmove", f);
                            e.unbind("mousedown", d)
                        },
                        g = function() {
                            f();
                            e.bind("touchmove", f);
                            e.bind("touchend", d)
                        };
                    e.bind("mousedown", d);
                    e.bind("touchstart", g)
                } else e = $("html"), f = function() {
                    e.undelegate(a, "touchend", d);
                    e.undelegate(a, "touchmove", f);
                    e.undelegate(a, "mousedown", d)
                }, e.delegate(a, "touchstart", function() {
                    f();
                    e.delegate(a, "touchend", d);
                    e.delegate(a,
                        "touchmove", f)
                }), e.delegate(a, "mousedown", d);
                Lg[a] || (Lg[a] = {});
                Lg[a][b] = "mousedown touchstart"
            }
        }

        function Mg(a) {
            Ng = a
        }

        function Fg(a) {
            a || (a = yc());
            for (var b = 0; b < a.length; b++) T(a[b])
        }
        var Lg = {},
            ac = [],
            U = U || [],
            Ng = 0,
            Cg = o,
            Eg = [],
            Hg = l,
            Ig = 0;
        $(function() {
            setTimeout(function() {
                V("docReady");
                Cg = k;
                Hg !== l && (N("Evaluator", "Document is ready"), clearTimeout(Hg), 0 < Ng ? setTimeout(Gg, Ng) : Gg())
            }, 50)
        });

        function eg(a) {
            this.za = $.trim(a);
            a = Og(this.za);
            a === l && i(Error("Invalid CIDR specification"));
            this.V = a.V;
            this.U = a.U
        }

        function Og(a) {
            a = a.split("/");
            if (2 != a.length) return l;
            var b = parseInt(a[1], 10);
            if (isNaN(b) || 0 > b || 32 < b) return l;
            a = fg(a[0]);
            if (a === l) return l;
            if (0 > b || 32 < b) b = l;
            else {
                for (var c = [], d = 0; 4 > d; d++) c[d] = 0;
                for (var e = Math.floor(b / 8), d = 0; d < e; d++) c[d] = 255;
                4 > e && (c[e] = Pg[b % 8]);
                b = c
            }
            for (c = 0; 4 > c; c++) a[c] &= b[c];
            return {
                V: a,
                U: b
            }
        }

        function fg(a) {
            a = a.split(".");
            if (4 != a.length) return l;
            for (var b = [], c = 0; 4 > c; c++) {
                var d;
                d = a[c];
                if (3 < d.length) d = l;
                else {
                    var e = parseInt(d, 10);
                    d = isNaN(e) || d !== e.toString() || 0 > e || 255 < e ? l : e
                }
                if (d === l) return l;
                b[c] = d
            }
            return b
        }
        var Pg = [0, 128, 192, 224, 240, 248, 252, 254, 255];

        function kg(a, b, c) {
            var d = a.split("?");
            if (d[1]) {
                var e = [];
                $.each(d[1].split("&"), function() {
                    0 !== this.indexOf(Qg) && e.push(this)
                });
                d[1] = e.join("&");
                a = d.join("?")
            }
            switch (c) {
                case "exact":
                    return a = Rg(a), a === Rg(b);
                case "regex":
                    try {
                        return Boolean(a.match(b))
                    } catch (f) {
                        return o
                    }
                case "simple":
                    return a = Rg(Sg(a)), b = Rg(Sg(b)), a === b;
                case "substring":
                    return a = Rg(a, k), b = Rg(b, k), -1 !== a.indexOf(b);
                default:
                    return o
            }
        }

        function Sg(a) {
            var b = a.indexOf("?"); - 1 !== b && (a = a.substring(0, b));
            b = a.indexOf("#"); - 1 !== b && (a = a.substring(0, b));
            return a
        }

        function Rg(a, b) {
            var a = a.replace("/?", "?"),
                a = a.toLowerCase().replace(/[/&?]+$/, ""),
                c = Tg.slice(0);
            b || (c = c.concat(Ug));
            for (var d = c.length, e = 0; e < d; e++) a = a.replace(RegExp("^" + c[e]), "");
            return a
        }
        var Tg = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"],
            Ug = ["www."],
            Qg = "optimizely_";

        function Vg(a) {
            return function(b) {
                if ("object" === typeof b && Zg()) {
                    var c = l,
                        d;
                    for (d in b) b.hasOwnProperty(d) && (c = a.call(this, d, b[d]));
                    return c
                }
                return a.apply(this, arguments)
            }
        }

        function Zg() {
            for (var a in {}) return k;
            return o
        };

        function $g() {
            if (!Aa) {
                var a = $;
                a.fn.attr = Vg(a.fn.attr);
                a.fn.css = Vg(a.fn.css);
                a.fn.extend = Vg(a.fn.extend);
                var b = a.each;
                a.each = function(c, d, e) {
                    if (!(c.length === j || a.isFunction(c)) || !Zg()) b.apply(this, arguments);
                    else if (e)
                        for (var f in c) {
                            if (c.hasOwnProperty(f) && d.apply(c[f], e) === o) break
                        } else
                            for (f in c)
                                if (c.hasOwnProperty(f) && !d.call(c[f], f, c[f]) === o) break;
                    return c
                };
                var c = a.fn.Va,
                    d = function(a, b, d) {
                        return new c(a, b, d)
                    },
                    e, f = document.getElementsByClassName;
                if (!nf(f)) var f = (window.optimizely || {}).getElementsByClassName,
                    g = (window.optly || {}).getElementsByClassName,
                    f = nf(f) ? f : nf(g) ? g : l;
                e = f;
                a.fn.Va = function(b, c, f) {
                    var g = d,
                        h = document.getElementsByClassName;
                    !nf(h) && e && (g = function(a, b, c) {
                        document.getElementsByClassName = e;
                        a = d(a, b, c);
                        document.getElementsByClassName = h;
                        return a
                    });
                    if (!("string" === typeof b && c && "object" === a.type(c) && Zg())) return g(b, c, f);
                    b = g(b, j, f);
                    b.attr(c);
                    return b
                }
            }
            N("Main", "Started, revision " + C("revision"));
            var f = lf(),
                g = o,
                h;
            for (h in f)
                if (mf.exec(h)) {
                    g = k;
                    break
                }("true" === f.opt_out || "false" === f.opt_out) && Qe("true" ===
                f.opt_out);
            Ea = "true" === f.force_tracking;
            if ("true" === f.disable || "true" === f.opt_out || "true" === v("optimizelyOptOut")) D = o;
            Fa = "true" === f.editor;
            Ja = "true" === f.show_preview;
            h = f.token;
            /^[0-9a-f]{32}$/.test(h) ? Ha = h : N("Query", "Blocked request to load unsafe script: " + h);
            Ka = "true" === f.log;
            La = "true" === f.verbose;
            B = !(Ja || g) || Ea;
            "false" === f.client && (D = o, Ca = "js/" + Hc() + ".js");
            h = window.optimizely;
            if (D && I(h)) {
                var m = {
                    disable: Dd,
                    setCookieDomain: za,
                    setCookieExpiration: Yd,
                    verifyPreviewProject: function(a) {
                        Hc() !== a && N("API",
                            "Preview projectId (" + Hc() + ") does not match expected (" + a + "), disabling.")
                    }
                };
                y(h, function(a) {
                    Fd(m, a, k)
                })
            }
            if (D && (h = C("project_js"))) N("Evaluator", "Running project level javascript."), Kg(h);
            if (Ha) {
                if (!window.optimizelyPreview) {
                    if (!window.optimizely || !window.optimizely.unshift) window.optimizely = [];
                    window.optimizely.unshift(["verifyPreviewProject", Hc()]);
                    Ya([kf, "/js/preview/", Ha, ".js"].join(""), k);
                    Ja && jf('Loading Preview<br /><img alt="loading" src="//' + C("www_host") + '/static/img/loading-32.gif" style="padding-top:20px; width: 32px; margin: 0 auto;" />')
                }
            } else if (Ja &&
                !Ha) jf("This preview link has expired. Please return to Optimizely and preview again to get a new link.");
            else {
                (h = O.get("asyncInfo")) && y(h, vb);
                h = Od();
                f = Pd();
                "ie" === h && ("unknown" !== f && 8 > Number(f)) && (D = o);
                if (D) {
                    h = v("optimizelyEndUserId");
                    ne = h !== j && h !== l;
                    a: {
                        h = "googlebot;yahoo! slurp;bingbot;bingpreview;msnbot;keynote;ktxn;khte;gomezagent;alertsite;yottaamonitor;pingdom.com_bot;aihitbot;baiduspider;adsbot-google;mediapartners-google".split(";");
                        f = navigator.userAgent;
                        f = f.toLowerCase();
                        for (g = 0; g < h.length; g++)
                            if (-1 !==
                                f.indexOf(h[g])) {
                                h = k;
                                break a
                            }
                        h = o
                    }
                    h ? B = o : ne || db.set("first_session", k)
                }
                if (C("uses_list_targeting")) {
                    h = "https://odds.optimizely.com/js/geo2.js";
                    var r = {};
                    y(C("list_targeting_cookie_names"), function(a) {
                        var b = Z.u(a);
                        typeof b === "string" && b.length <= 100 && (r["c_" + a] = b)
                    });
                    r.project = Hc().toString();
                    var f = [],
                        n;
                    for (n in r) r.hasOwnProperty(n) && f.push(encodeURIComponent(n) + "=" + encodeURIComponent(r[n]));
                    f.length && (h += "?" + f.join("&"));
                    Ya(h)
                }
                if (C("uses_dynamic_customer_profile_targeting")) {
                    b: {
                        n = rc();
                        for (h = 0; h < n.length; h++)
                            if (f =
                                n[h], f.is_optimizely) {
                                n = f.dcp_datasource_id || l;
                                break b
                            }
                        n = l
                    }
                    n === l ? (z("DCP", "No Optimizely datasource found in data."), n = l) : (n = Ua([Hc().toString(), n, Bb()], encodeURIComponent), n = ["https://vis.optimizely.com/api/targetingEmbed"].concat(n).join("/"));n !== l && Ya(n)
                }(C("dcp_service_id") || l) !== l && setTimeout(function() {
                    var a, b = C("dcp_service_id") || l;
                    if (b !== l) {
                        a = rc();
                        for (var c = l, d = [], e = 0; e < a.length; e++) {
                            var f = a[e],
                                g = f.dcp_datasource_id || l,
                                h = f.is_optimizely || o,
                                n = f.type,
                                f = f.name || "";
                            if (g === l) z("DCP", "No DCP datasource id specified");
                            else {
                                var m = l;
                                if (n === "cookie") m = Z.u(f);
                                else if (n === "js_variable") try {
                                    m = window[f]
                                } catch (r) {
                                    m = l
                                } else n === "query_param" ? m = Z.c(f) : n === "uid" && (m = Bb());
                                if (Xa(m) || typeof m === "string") {
                                    g = {
                                        datasourceId: g,
                                        id: m
                                    };
                                    h ? c = g : d.push(g)
                                }
                            }
                        }
                        if (a = c)
                            if (d.length === 0) z("DCP", "Must specify at least one non-Optimizely datasource to alias");
                            else {
                                b = ["https://vis.optimizely.com/api/alias"].concat(Ua([b, a.datasourceId, a.id], encodeURIComponent)).join("/");
                                try {
                                    var t = new XMLHttpRequest;
                                    t.open("POST", b);
                                    if ("withCredentials" in t) t.withCredentials =
                                        k;
                                    t.onerror = function() {
                                        z("DCP", "Failed to POST alias request")
                                    };
                                    t.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                    var w = {};
                                    y(d, function(a) {
                                        w[a.datasourceId] = a.id
                                    });
                                    t.send(u({
                                        data: w
                                    }))
                                } catch (x) {
                                    z("DCP", "Exception %s trying to POST alias request", x)
                                }
                            } else z("DCP", "Must specify Optimizely datasource in alias")
                    }
                }, 0);
                if (n = v("optimizelyBuckets")) {
                    try {
                        n = ea(n)
                    } catch (t) {
                        n = {}
                    }
                    var w = {};
                    y(n, function(a, b) {
                        var b = String(b),
                            c = Q(b);
                        if (Fc(c).length > 1 && b.indexOf("_") === -1) {
                            w[c] = w[c] || {};
                            w[c][a] = b
                        } else b !==
                            "0" ? Cd(b, "cookie") || (be[a] = b) : bf(a)
                    });
                    y(w, function(a, b) {
                        var c;
                        a: {
                            c = [];
                            for (var d = Fc(a), e = 0; e < d.length; e++) {
                                var f = b[d[e]];
                                if (f === "0") {
                                    c = "";
                                    break a
                                }
                                c.push(f)
                            }
                            c = c.join("_")
                        }
                        c.length > 0 ? Cd(c, "cookie") : bf(a)
                    })
                }
                uf();
                ec = (v("optimizelyRedirect") || "|").split("|")[0];
                n = v("optimizelyReferrer");
                n !== l && (Fb = 0 == n.length ? "" : n, A("optimizelyReferrer", ""));
                n = vf;
                N("Visitor", "Initializing");
                (h = v("optimizelyAudiences")) && 0 < h.length && y(h.split(","), p(function(a) {
                    Tf(this, a, k, {
                        M: k,
                        ra: o
                    })
                }, n));
                y(Cf(), p(function(a) {
                    N("Visitor",
                        "Found segment " + a);
                    var b = Bc()[a];
                    if (b && b.audience_id) {
                        N("Visitor", "Adding to audience " + b.audience_id);
                        Tf(this, b.audience_id, k, {
                            C: o
                        })
                    } else if (b && b.dimension_id) {
                        N("Visitor", "Setting dimension value " + b.dimension_id);
                        Uf(this, b.dimension_id, wf[a], o)
                    }
                }, n));
                W = vf;
                sd = o;
                xf.push(Xc);
                ug.push(Xc);
                n = {
                    $: $,
                    activeExperiments: ac || [],
                    allExperiments: Cc(),
                    all_experiments: Cc(),
                    allVariations: C("variations") || {},
                    data: Y,
                    getElementsByClassName: document.getElementsByClassName,
                    revision: C("revision"),
                    variationIdsMap: Ld,
                    variation_map: Md,
                    variationMap: Md,
                    variationNamesMap: Nd
                };
                h = {};
                var x = Sa(Fd, h);
                L(h, {
                    activate: q(Pc, W),
                    activateGeoDelayedExperiments: q(Sc, W),
                    activateSiteCatalyst: Cb,
                    activateUniversalAnalytics: Ub,
                    addToAudience: p(W.F, W),
                    addToSegment: vd,
                    bindTrackElement: Bg,
                    bucketUser: Qc,
                    bucketVisitor: Qc,
                    clickTaleRecord: Xb,
                    clickTalePlayback: Vb,
                    customTag: Gd,
                    delayDomReadyEval: Mg,
                    delayPageviewTracking: Wd,
                    disable: Dd,
                    log: rb,
                    getAccountId: mc,
                    getProjectId: Hc,
                    googleAnalyticsCustomVariableScope: Ib,
                    integrationPrefix: Yb,
                    optOut: Qe,
                    overrideUrl: oe,
                    push: x,
                    removeFromAllAudiences: p(W.Za, W),
                    removeFromAllSegments: Jd,
                    removeFromAudience: p(W.W, W),
                    removeFromSegment: Hd,
                    sc_activate: Cb,
                    sc_svar: Zb,
                    skipPageTracking: Zd,
                    optOutThirdPartyCookies: Xd,
                    setDimensionValue: p(W.O, W),
                    setUserId: ae,
                    storeThirdPartyData: ud,
                    timeout: Dd,
                    trackEvent: Ce,
                    verbose: sb
                });
                h.removeFromReportableAudiences = $d;
                L(n, h);
                h = window.optimizely;
                I(h) && y(h, function(a) {
                    x(a)
                });
                window.optimizely = n;
                V("apiInitialize");
                window.optimizely.iapi = {
                    evaluateSegments: q(Ag, j)
                };
                var F = !C("force_variation");
                n = lf();
                y(n, function(a,
                    b) {
                    var c = mf.exec(a);
                    if (c)
                        if (F) {
                            Ia = k;
                            z("Query", "Ignored parameter %s", a)
                        } else {
                            c = c[1];
                            Qc(c, b, k);
                            Ec(c) ? ef(c, {
                                force: k,
                                skipPageviewTracking: k
                            }) : Zc(c, {}) || Pc(W, c, {
                                force: k,
                                skipPageviewTracking: k
                            })
                        }
                });
                Ia ? jf("Force parameters are disabled for this project. See Project Code Settings.") : ($g.log(), Fa && Ya("https://" + C("www_host") + "/js/innie.js?_=" + +new Date), D && (V("distributeExperiments"), y(yc(), function(a) {
                    if (!pa(a, U))
                        if (Ec(a)) ef(a);
                        else if (Yc(a)) {
                        if (Zc(a, {
                                objectType: "experiment"
                            })) {
                            N("Distributor", "Going to distribute " +
                                T(a));
                            if (ad(a)) {
                                U = U || [];
                                U.push(a)
                            }
                        }
                    } else !Dc(a) && !H(ac, a) && $c(a)
                }), cd(), Ge(), Na || (0 < Da ? setTimeout(function() {
                    Ke()
                }, Da) : Ke()), Fe(), Kb()), Ka && (y(xd, function(a) {
                    var b = ic(a);
                    N("Plan", "Ignore experiment '" + b + "' (" + a + ")")
                }), y(X, function(a) {
                    var b = Q(a.id),
                        c = dc(a.id);
                    N("Plan", T(b) + ' in variation "' + c + '" (' + a.id + ")")
                })), Fa ? Ed() : D && (V("beginEvaluate"), bd(), Ed(), qb(), !C("installation_verified") && B && (n = "https://" + C("www_host") + "/account/snippet_installed?project_id=" + Hc() + "&wxhr=true", N("Tracker", "Making snippet verification request."),
                    Pb(n, l))), setTimeout(function() {
                    Sc(W)
                }, 2E3), setTimeout(function() {
                    if (B) {
                        var a = Ve;
                        if (a.Ua) {
                            var b = Be(),
                                c = Pa(),
                                d = Qa(),
                                e = Hc(),
                                f = We,
                                g = Ue,
                                h = Ye,
                                m = Mc(),
                                n = ac.concat(U).length,
                                b = b.length,
                                r;
                            r = ke() || [];
                            r = u(r).length;
                            c = {
                                user: c,
                                ppid: d,
                                project: e,
                                sync: f,
                                timebase: g,
                                render: h,
                                sampleRate: m,
                                numExps: n,
                                numBehaviorEvents: b,
                                behaviorEventsSize: r,
                                codeVersion: C("version"),
                                hasSlave: Oc(),
                                docVisibilityState: document.xb || document.webkitVisibilityState,
                                wxhr: k
                            };
                            L(c, af() || {});
                            L(c, a.f);
                            var t = ["optimizelyAudiences", "optimizelyBuckets",
                                    "optimizelyCustomEvents", "optimizelyPendingLogEvents", "optimizelyReferrer", "optimizelySegments"
                                ],
                                w = {},
                                x = 0,
                                F = 0;
                            y(ia(), function(a) {
                                if (a.name.indexOf("optimizely") === 0) {
                                    if (H(t, a.name)) {
                                        N("RUM", "Cookie size for " + a.name + ": " + a.N.length);
                                        w[a.name + "Len"] = a.N.length
                                    }
                                    x = x + a.N.length
                                }
                                F = F + a.N.length
                            });
                            L(w, {
                                allOptimizelyCookiesLen: x,
                                allCookiesLen: F
                            });
                            L(c, w || {});
                            var Df = {};
                            y(O.pa() || {}, function(a, b) {
                                Df["ls" + a] = b
                            });
                            L(c, Df);
                            var a = [],
                                sc;
                            for (sc in c) Object.prototype.hasOwnProperty.call(c, sc) && a.push(window.encodeURIComponent(sc) +
                                "=" + window.encodeURIComponent(c[sc]));
                            Pb("https://rum.optimizely.com/rum?" + a.join("&"), l)
                        }
                    }
                }, 3E3), N("Main", "End of main"), V("mainEnd"))
            }
        }
        $g.log = function() {
            N("Info", "Is enabled: " + D);
            N("Info", "Diagnostic enabled: false");
            N("Info", "Force variation enabled: " + !!C("force_variation"));
            N("Info", "Script to load: " + (Ca || "none"));
            N("Info", "Browser type: " + Od());
            N("Info", "Browser version: " + Pd());
            var a = Td();
            "unknown" !== a && N("Info", "Mobile browser type: " + a);
            N("Info", "New vs returning: " + me());
            N("Info", "Source type: " + Bf());
            N("Info", "User ID: " + Pa())
        };
        $g();
    };
    var SLAVE_CLIENT = {
        optimizely: []
    };
    optimizelyCode();
    optly.Cleanse.finish();

}());