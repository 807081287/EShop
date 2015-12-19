/*

     (c) 2012 by C?dric Mesnil. All rights reserved.

     Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

     - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
     - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

 Counter block mode compatible with  Dr Brian Gladman fileenc.c
 derived from CryptoJS.mode.CTR
 Jan Hruby jhruby.web@gmail.com
*/
(function(a, d) {
    function c(b) {
        return e.isWindow(b) ? b: 9 === b.nodeType ? b.defaultView || b.parentWindow: !1
    }
    function g(b) {
        if (!Tb[b]) {
            var h = y.body,
            n = e("<" + b + ">").appendTo(h),
            s = n.css("display");
            n.remove();
            if ("none" === s || "" === s) {
                ca || (ca = y.createElement("iframe"), ca.frameBorder = ca.width = ca.height = 0);
                h.appendChild(ca);
                if (!Oa || !ca.createElement) Oa = (ca.contentWindow || ca.contentDocument).document,
                Oa.write((e.support.boxModel ? "<!doctype html>": "") + "<html><body>"),
                Oa.close();
                n = Oa.createElement(b);
                Oa.body.appendChild(n);
                s = e.css(n, "display");
                h.removeChild(ca)
            }
            Tb[b] = s
        }
        return Tb[b]
    }
    function j(b, h) {
        var n = {};
        e.each(yb.concat.apply([], yb.slice(0, h)),
        function() {
            n[this] = b
        });
        return n
    }
    function f() {
        Za = d
    }
    function k() {
        setTimeout(f, 0);
        return Za = e.now()
    }
    function m() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function o(b, h, n, s) {
        if (e.isArray(h)) e.each(h,
        function(h, a) {
            n || xc.test(b) ? s(b, a) : o(b + "[" + ("object" == typeof a ? h: "") + "]", a, n, s)
        });
        else if (!n && "object" === e.type(h)) for (var a in h) o(b + "[" + a + "]", h[a], n, s);
        else s(b, h)
    }
    function q(b, h) {
        var n, s, a = e.ajaxSettings.flatOptions || {};
        for (n in h) h[n] !== d && ((a[n] ? b: s || (s = {}))[n] = h[n]);
        s && e.extend(!0, b, s)
    }
    function z(b, h, n, a, e, wa) {
        e = e || h.dataTypes[0];
        wa = wa || {};
        wa[e] = !0;
        for (var e = b[e], c = 0, f = e ? e.length: 0, g = b === zb, j; c < f && (g || !j); c++) j = e[c](h, n, a),
        "string" == typeof j && (!g || wa[j] ? j = d: (h.dataTypes.unshift(j), j = z(b, h, n, a, j, wa))); (g || !j) && !wa["*"] && (j = z(b, h, n, a, "*", wa));
        return j
    }
    function F(b) {
        return function(h, n) {
            "string" != typeof h && (n = h, h = "*");
            if (e.isFunction(n)) for (var a = h.toLowerCase().split(Z), I = 0, d = a.length, c, f; I < d; I++) c = a[I],
            (f = /^\+/.test(c)) && (c = c.substr(1) || "*"),
            c = b[c] = b[c] || [],
            c[f ? "unshift": "push"](n)
        }
    }
    function L(b, h, n) {
        var a = "width" === h ? b.offsetWidth: b.offsetHeight,
        I = "width" === h ? 1 : 0;
        if (0 < a) {
            if ("border" !== n) for (; 4 > I; I += 2) n || (a -= parseFloat(e.css(b, "padding" + ia[I])) || 0),
            "margin" === n ? a += parseFloat(e.css(b, n + ia[I])) || 0 : a -= parseFloat(e.css(b, "border" + ia[I] + "Width")) || 0;
            return a + "px"
        }
        a = xa(b, h);
        if (0 > a || null == a) a = b.style[h];
        if (Ub.test(a)) return a;
        a = parseFloat(a) || 0;
        if (n) for (; 4 > I; I += 2) a += parseFloat(e.css(b, "padding" + ia[I])) || 0,
        "padding" !== n && (a += parseFloat(e.css(b, "border" + ia[I] + "Width")) || 0),
        "margin" === n && (a += parseFloat(e.css(b, n + ia[I])) || 0);
        return a + "px"
    }
    function l(b) {
        var h = (b.nodeName || "").toLowerCase();
        "input" === h ? u(b) : "script" !== h && "undefined" != typeof b.getElementsByTagName && e.grep(b.getElementsByTagName("input"), u)
    }
    function u(b) {
        if ("checkbox" === b.type || "radio" === b.type) b.defaultChecked = b.checked
    }
    function t(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }
    function B(b, h) {
        var n;
        1 === h.nodeType && (h.clearAttributes && h.clearAttributes(), h.mergeAttributes && h.mergeAttributes(b), n = h.nodeName.toLowerCase(), "object" === n ? h.outerHTML = b.outerHTML: "input" !== n || "checkbox" !== b.type && "radio" !== b.type ? "option" === n ? h.selected = b.defaultSelected: "input" === n || "textarea" === n ? h.defaultValue = b.defaultValue: "script" === n && h.text !== b.text && (h.text = b.text) : (b.checked && (h.defaultChecked = h.checked = b.checked), h.value !== b.value && (h.value = b.value)), h.removeAttribute(e.expando), h.removeAttribute("_submit_attached"), h.removeAttribute("_change_attached"))
    }
    function A(b, h) {
        if (1 === h.nodeType && e.hasData(b)) {
            var n, a, I;
            a = e._data(b);
            var d = e._data(h, a),
            c = a.events;
            if (c) for (n in delete d.handle, d.events = {},
            c) {
                a = 0;
                for (I = c[n].length; a < I; a++) e.event.add(h, n, c[n][a])
            }
            d.data && (d.data = e.extend({},
            d.data))
        }
    }
    function K(b) {
        var h = yc.split("|"),
        b = b.createDocumentFragment();
        if (b.createElement) for (; h.length;) b.createElement(h.pop());
        return b
    }
    function M(b, h, n) {
        h = h || 0;
        if (e.isFunction(h)) return e.grep(b,
        function(b, a) {
            return !! h.call(b, a, b) === n
        });
        if (h.nodeType) return e.grep(b,
        function(b) {
            return b === h === n
        });
        if ("string" == typeof h) {
            var a = e.grep(b,
            function(b) {
                return 1 === b.nodeType
            });
            if ($a.test(h)) return e.filter(h, a, !n);
            h = e.filter(h, a)
        }
        return e.grep(b,
        function(b) {
            return 0 <= e.inArray(b, h) === n
        })
    }
    function C() {
        return ! 0
    }
    function R() {
        return ! 1
    }
    function S(b, h, n) {
        var a = h + "defer",
        I = h + "queue",
        d = h + "mark",
        c = e._data(b, a);
        c && ("queue" === n || !e._data(b, I)) && ("mark" === n || !e._data(b, d)) && setTimeout(function() { ! e._data(b, I) && !e._data(b, d) && (e.removeData(b, a, !0), c.fire())
        },
        0)
    }
    function ra(b) {
        for (var h in b) if (! ("data" === h && e.isEmptyObject(b[h])) && "toJSON" !== h) return ! 1;
        return ! 0
    }
    function ab(b, h, n) {
        if (n === d && 1 === b.nodeType) if (n = "data-" + h.replace(Vb, "-$1").toLowerCase(), n = b.getAttribute(n), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: e.isNumeric(n) ? +n: Yc.test(n) ? e.parseJSON(n) : n
            } catch(a) {}
            e.data(b, h, n)
        } else n = d;
        return n
    }
    var y = a.document,
    x = a.location,
    e, Wb = function() {
        if (!p.isReady) {
            try {
                y.documentElement.doScroll("left")
            } catch(b) {
                setTimeout(Wb, 1);
                return
            }
            p.ready()
        }
    },
    p = function(b, h) {
        return new p.fn.init(b, h, bb)
    },
    zc = a.jQuery,
    Zc = a.$,
    bb,
    ya = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    Xb = /\S/,
    cb = /^\s+/,
    db = /\s+$/,
    Ac = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
    $c = /^[\],:{}\s]*$/,
    Ab = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
    ad = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Bc = /(?:^|:|,)(?:\s*\[)+/g,
    Cc = /(webkit)[ \/]([\w.]+)/,
    Dc = /(opera)(?:.*version)?[ \/]([\w.]+)/,
    Bb = /(msie) ([\w.]+)/,
    eb = /(mozilla)(?:.*? rv:([\w.]+))?/,
    Yb = /-([a-z]|[0-9])/ig,
    Ec = /^-ms-/,
    bd = function(b, h) {
        return (h + "").toUpperCase()
    },
    Zb = a.navigator.userAgent,
    da,
    fb,
    za,
    Fc = Object.prototype.toString,
    gb = Object.prototype.hasOwnProperty,
    hb = Array.prototype.push,
    Pa = Array.prototype.slice,
    ib = String.prototype.trim,
    $b = Array.prototype.indexOf,
    sa = {};
    p.fn = p.prototype = {
        constructor: p,
        init: function(b, h, n) {
            var a, e;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b,
            this.length = 1,
            this;
            if ("body" === b && !h && y.body) return this.context = y,
            this[0] = y.body,
            this.selector = b,
            this.length = 1,
            this;
            if ("string" == typeof b) {
                "<" !== b.charAt(0) || ">" !== b.charAt(b.length - 1) || 3 > b.length ? a = ya.exec(b) : a = [null, b, null];
                if (a && (a[1] || !h)) {
                    if (a[1]) return e = (h = h instanceof p ? h[0] : h) ? h.ownerDocument || h: y,
                    (n = Ac.exec(b)) ? p.isPlainObject(h) ? (b = [y.createElement(n[1])], p.fn.attr.call(b, h, !0)) : b = [e.createElement(n[1])] : (n = p.buildFragment([a[1]], [e]), b = (n.cacheable ? p.clone(n.fragment) : n.fragment).childNodes),
                    p.merge(this, b);
                    if ((h = y.getElementById(a[2])) && h.parentNode) {
                        if (h.id !== a[2]) return n.find(b);
                        this.length = 1;
                        this[0] = h
                    }
                    this.context = y;
                    this.selector = b;
                    return this
                }
                return ! h || h.jquery ? (h || n).find(b) : this.constructor(h).find(b)
            }
            if (p.isFunction(b)) return n.ready(b);
            b.selector !== d && (this.selector = b.selector, this.context = b.context);
            return p.makeArray(b, this)
        },
        selector: "",
        jquery: "1.7.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Pa.call(this, 0)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, h, n) {
            var a = this.constructor();
            p.isArray(b) ? hb.apply(a, b) : p.merge(a, b);
            a.prevObject = this;
            a.context = this.context;
            "find" === h ? a.selector = this.selector + (this.selector ? " ": "") + n: h && (a.selector = this.selector + "." + h + "(" + n + ")");
            return a
        },
        each: function(b, h) {
            return p.each(this, b, h)
        },
        ready: function(b) {
            p.bindReady();
            fb.add(b);
            return this
        },
        eq: function(b) {
            b = +b;
            return - 1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        slice: function() {
            return this.pushStack(Pa.apply(this, arguments), "slice", Pa.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(p.map(this,
            function(h, n) {
                return b.call(h, n, h)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: hb,
        sort: [].sort,
        splice: [].splice
    };
    p.fn.init.prototype = p.fn;
    p.extend = p.fn.extend = function() {
        var b, h, n, a, e, c, f = arguments[0] || {},
        g = 1,
        j = arguments.length,
        k = !1;
        "boolean" == typeof f && (k = f, f = arguments[1] || {},
        g = 2);
        "object" != typeof f && !p.isFunction(f) && (f = {});
        for (j === g && (f = this, --g); g < j; g++) if (null != (b = arguments[g])) for (h in b) n = f[h],
        a = b[h],
        f !== a && (k && a && (p.isPlainObject(a) || (e = p.isArray(a))) ? (e ? (e = !1, c = n && p.isArray(n) ? n: []) : c = n && p.isPlainObject(n) ? n: {},
        f[h] = p.extend(k, c, a)) : a !== d && (f[h] = a));
        return f
    };
    p.extend({
        noConflict: function(b) {
            a.$ === p && (a.$ = Zc);
            b && a.jQuery === p && (a.jQuery = zc);
            return p
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? p.readyWait++:p.ready(!0)
        },
        ready: function(b) {
            if (!0 === b && !--p.readyWait || !0 !== b && !p.isReady) {
                if (!y.body) return setTimeout(p.ready, 1);
                p.isReady = !0; ! 0 !== b && 0 < --p.readyWait || (fb.fireWith(y, [p]), p.fn.trigger && p(y).trigger("ready").off("ready"))
            }
        },
        bindReady: function() {
            if (!fb) {
                fb = p.Callbacks("once memory");
                if ("complete" === y.readyState) return setTimeout(p.ready, 1);
                if (y.addEventListener) y.addEventListener("DOMContentLoaded", za, !1),
                a.addEventListener("load", p.ready, !1);
                else if (y.attachEvent) {
                    y.attachEvent("onreadystatechange", za);
                    a.attachEvent("onload", p.ready);
                    var b = !1;
                    try {
                        b = null == a.frameElement
                    } catch(h) {}
                    y.documentElement.doScroll && b && Wb()
                }
            }
        },
        isFunction: function(b) {
            return "function" === p.type(b)
        },
        isArray: Array.isArray ||
        function(b) {
            return "array" === p.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return ! isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : sa[Fc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== p.type(b) || b.nodeType || p.isWindow(b)) return ! 1;
            try {
                if (b.constructor && !gb.call(b, "constructor") && !gb.call(b.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(h) {
                return ! 1
            }
            for (var n in b);
            return n === d || gb.call(b, n)
        },
        isEmptyObject: function(b) {
            for (var h in b) return ! 1;
            return ! 0
        },
        error: function(b) {
            throw Error(b);
        },
        parseJSON: function(b) {
            if ("string" != typeof b || !b) return null;
            b = p.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if ($c.test(b.replace(Ab, "@").replace(ad, "]").replace(Bc, ""))) return (new Function("return " + b))();
            p.error("Invalid JSON: " + b)
        },
        parseXML: function(b) {
            if ("string" != typeof b || !b) return null;
            var h, n;
            try {
                a.DOMParser ? (n = new DOMParser, h = n.parseFromString(b, "text/xml")) : (h = new ActiveXObject("Microsoft.XMLDOM"), h.async = "false", h.loadXML(b))
            } catch(e) {
                h = d
            } (!h || !h.documentElement || h.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + b);
            return h
        },
        noop: function() {},
        globalEval: function(b) {
            b && Xb.test(b) && (a.execScript ||
            function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(b) {
            return b.replace(Ec, "ms-").replace(Yb, bd)
        },
        nodeName: function(b, h) {
            return b.nodeName && b.nodeName.toUpperCase() === h.toUpperCase()
        },
        each: function(b, h, n) {
            var a, e = 0,
            c = b.length,
            f = c === d || p.isFunction(b);
            if (n) if (f) for (a in b) {
                if (!1 === h.apply(b[a], n)) break
            } else for (; e < c && !1 !== h.apply(b[e++], n););
            else if (f) for (a in b) {
                if (!1 === h.call(b[a], a, b[a])) break
            } else for (; e < c && !1 !== h.call(b[e], e, b[e++]););
            return b
        },
        trim: ib ?
        function(b) {
            return null == b ? "": ib.call(b)
        }: function(b) {
            return null == b ? "": (b + "").replace(cb, "").replace(db, "")
        },
        makeArray: function(b, h) {
            var n = h || [];
            if (null != b) {
                var a = p.type(b);
                null == b.length || "string" === a || "function" === a || "regexp" === a || p.isWindow(b) ? hb.call(n, b) : p.merge(n, b)
            }
            return n
        },
        inArray: function(b, h, a) {
            var e;
            if (h) {
                if ($b) return $b.call(h, b, a);
                e = h.length;
                for (a = a ? 0 > a ? Math.max(0, e + a) : a: 0; a < e; a++) if (a in h && h[a] === b) return a
            }
            return - 1
        },
        merge: function(b, h) {
            var a = b.length,
            e = 0;
            if ("number" == typeof h.length) for (var I = h.length; e < I; e++) b[a++] = h[e];
            else for (; h[e] !== d;) b[a++] = h[e++];
            b.length = a;
            return b
        },
        grep: function(b, h, a) {
            for (var e = [], d, a = !!a, c = 0, f = b.length; c < f; c++) d = !!h(b[c], c),
            a !== d && e.push(b[c]);
            return e
        },
        map: function(b, h, a) {
            var e, I, c = [],
            f = 0,
            g = b.length;
            if (b instanceof p || g !== d && "number" == typeof g && (0 < g && b[0] && b[g - 1] || 0 === g || p.isArray(b))) for (; f < g; f++) e = h(b[f], f, a),
            null != e && (c[c.length] = e);
            else for (I in b) e = h(b[I], I, a),
            null != e && (c[c.length] = e);
            return c.concat.apply([], c)
        },
        guid: 1,
        proxy: function(b, h) {
            if ("string" == typeof h) var a = b[h],
            h = b,
            b = a;
            if (!p.isFunction(b)) return d;
            var e = Pa.call(arguments, 2),
            a = function() {
                return b.apply(h, e.concat(Pa.call(arguments)))
            };
            a.guid = b.guid = b.guid || a.guid || p.guid++;
            return a
        },
        access: function(b, h, a, e, I, c, f) {
            var g, j = null == a,
            k = 0,
            l = b.length;
            if (a && "object" == typeof a) {
                for (k in a) p.access(b, h, k, a[k], 1, c, e);
                I = 1
            } else if (e !== d) {
                g = f === d && p.isFunction(e);
                j && (g ? (g = h, h = function(b, h, a) {
                    return g.call(p(b), a)
                }) : (h.call(b, e), h = null));
                if (h) for (; k < l; k++) h(b[k], a, g ? e.call(b[k], k, h(b[k], a)) : e, f);
                I = 1
            }
            return I ? b: j ? h.call(b) : l ? h(b[0], a) : c
        },
        now: function() {
            return (new Date).getTime()
        },
        uaMatch: function(b) {
            b = b.toLowerCase();
            b = Cc.exec(b) || Dc.exec(b) || Bb.exec(b) || 0 > b.indexOf("compatible") && eb.exec(b) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        },
        sub: function() {
            function b(h, a) {
                return new b.fn.init(h, a)
            }
            p.extend(!0, b, this);
            b.superclass = this;
            b.fn = b.prototype = this();
            b.fn.constructor = b;
            b.sub = this.sub;
            b.fn.init = function(a, e) {
                e && e instanceof p && !(e instanceof b) && (e = b(e));
                return p.fn.init.call(this, a, e, h)
            };
            b.fn.init.prototype = b.fn;
            var h = b(y);
            return b
        },
        browser: {}
    });
    p.each("Boolean Number String Function Array Date RegExp Object".split(" "),
    function(b, h) {
        sa["[object " + h + "]"] = h.toLowerCase()
    });
    da = p.uaMatch(Zb);
    da.browser && (p.browser[da.browser] = !0, p.browser.version = da.version);
    p.browser.webkit && (p.browser.safari = !0);
    Xb.test("\u00a0") && (cb = /^[\s\xA0]+/, db = /[\s\xA0]+$/);
    bb = p(y);
    y.addEventListener ? za = function() {
        y.removeEventListener("DOMContentLoaded", za, !1);
        p.ready()
    }: y.attachEvent && (za = function() {
        "complete" === y.readyState && (y.detachEvent("onreadystatechange", za), p.ready())
    });
    e = p;
    var jb = {};
    e.Callbacks = function(b) {
        var h;
        if (b) {
            if (! (h = jb[b])) {
                h = b;
                var a = jb[h] = {},
                s,
                I;
                h = h.split(/\s+/);
                s = 0;
                for (I = h.length; s < I; s++) a[h[s]] = !0;
                h = a
            }
        } else h = {};
        var b = h,
        c = [],
        f = [],
        g,
        j,
        k,
        l,
        B,
        t,
        u = function(h) {
            var a, n, s, d;
            a = 0;
            for (n = h.length; a < n; a++) s = h[a],
            d = e.type(s),
            "array" === d ? u(s) : "function" === d && (!b.unique || !m.has(s)) && c.push(s)
        },
        A = function(h, a) {
            a = a || [];
            g = !b.memory || [h, a];
            k = j = !0;
            t = l || 0;
            l = 0;
            for (B = c.length; c && t < B; t++) if (!1 === c[t].apply(h, a) && b.stopOnFalse) {
                g = !0;
                break
            }
            k = !1;
            c && (b.once ? !0 === g ? m.disable() : c = [] : f && f.length && (g = f.shift(), m.fireWith(g[0], g[1])))
        },
        m = {
            add: function() {
                if (c) {
                    var b = c.length;
                    u(arguments);
                    k ? B = c.length: g && !0 !== g && (l = b, A(g[0], g[1]))
                }
                return this
            },
            remove: function() {
                if (c) for (var h = arguments,
                a = 0,
                n = h.length; a < n; a++) for (var e = 0; e < c.length && !(h[a] === c[e] && (k && e <= B && (B--, e <= t && t--), c.splice(e--, 1), b.unique)); e++);
                return this
            },
            has: function(b) {
                if (c) for (var h = 0,
                a = c.length; h < a; h++) if (b === c[h]) return ! 0;
                return ! 1
            },
            empty: function() {
                c = [];
                return this
            },
            disable: function() {
                c = f = g = d;
                return this
            },
            disabled: function() {
                return ! c
            },
            lock: function() {
                f = d; (!g || !0 === g) && m.disable();
                return this
            },
            locked: function() {
                return ! f
            },
            fireWith: function(h, a) {
                f && (k ? b.once || f.push([h, a]) : (!b.once || !g) && A(h, a));
                return this
            },
            fire: function() {
                m.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !! j
            }
        };
        return m
    };
    var ac = [].slice;
    e.extend({
        Deferred: function(b) {
            var h = e.Callbacks("once memory"),
            a = e.Callbacks("once memory"),
            s = e.Callbacks("memory"),
            d = "pending",
            c = {
                resolve: h,
                reject: a,
                notify: s
            },
            f = {
                done: h.add,
                fail: a.add,
                progress: s.add,
                state: function() {
                    return d
                },
                isResolved: h.fired,
                isRejected: a.fired,
                then: function(b, h, a) {
                    g.done(b).fail(h).progress(a);
                    return this
                },
                always: function() {
                    g.done.apply(g, arguments).fail.apply(g, arguments);
                    return this
                },
                pipe: function(b, h, a) {
                    return e.Deferred(function(n) {
                        e.each({
                            done: [b, "resolve"],
                            fail: [h, "reject"],
                            progress: [a, "notify"]
                        },
                        function(b, h) {
                            var a = h[0],
                            s = h[1],
                            d;
                            e.isFunction(a) ? g[b](function() { (d = a.apply(this, arguments)) && e.isFunction(d.promise) ? d.promise().then(n.resolve, n.reject, n.notify) : n[s + "With"](this === g ? n: this, [d])
                            }) : g[b](n[s])
                        })
                    }).promise()
                },
                promise: function(b) {
                    if (null == b) b = f;
                    else for (var h in f) b[h] = f[h];
                    return b
                }
            },
            g = f.promise({}),
            j;
            for (j in c) g[j] = c[j].fire,
            g[j + "With"] = c[j].fireWith;
            g.done(function() {
                d = "resolved"
            },
            a.disable, s.lock).fail(function() {
                d = "rejected"
            },
            h.disable, s.lock);
            b && b.call(g, g);
            return g
        },
        when: function(b) {
            function h(b) {
                return function(h) {
                    f[b] = 1 < arguments.length ? ac.call(arguments, 0) : h;
                    j.notifyWith(k, f)
                }
            }
            function a(b) {
                return function(h) {
                    s[b] = 1 < arguments.length ? ac.call(arguments, 0) : h; --g || j.resolveWith(j, s)
                }
            }
            var s = ac.call(arguments, 0),
            d = 0,
            c = s.length,
            f = Array(c),
            g = c,
            j = 1 >= c && b && e.isFunction(b.promise) ? b: e.Deferred(),
            k = j.promise();
            if (1 < c) {
                for (; d < c; d++) s[d] && s[d].promise && e.isFunction(s[d].promise) ? s[d].promise().then(a(d), j.reject, h(d)) : --g;
                g || j.resolveWith(j, s)
            } else j !== b && j.resolveWith(j, c ? [b] : []);
            return k
        }
    });
    var ed = e,
    bc;
    var T, cc, Qa, Cb, kb, X, Ba, Ca, lb, Db, Ra, E = y.createElement("div");
    E.setAttribute("className", "t");
    E.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    cc = E.getElementsByTagName("*");
    Qa = E.getElementsByTagName("a")[0];
    if (!cc || !cc.length || !Qa) bc = {};
    else {
        Cb = y.createElement("select");
        kb = Cb.appendChild(y.createElement("option"));
        X = E.getElementsByTagName("input")[0];
        T = {
            leadingWhitespace: 3 === E.firstChild.nodeType,
            tbody: !E.getElementsByTagName("tbody").length,
            htmlSerialize: !!E.getElementsByTagName("link").length,
            style: /top/.test(Qa.getAttribute("style")),
            hrefNormalized: "/a" === Qa.getAttribute("href"),
            opacity: /^0.55/.test(Qa.style.opacity),
            cssFloat: !!Qa.style.cssFloat,
            checkOn: "on" === X.value,
            optSelected: kb.selected,
            getSetAttribute: "t" !== E.className,
            enctype: !!y.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        };
        e.boxModel = T.boxModel = "CSS1Compat" === y.compatMode;
        X.checked = !0;
        T.noCloneChecked = X.cloneNode(!0).checked;
        Cb.disabled = !0;
        T.optDisabled = !kb.disabled;
        try {
            delete E.test
        } catch(ud) {
            T.deleteExpando = !1
        } ! E.addEventListener && E.attachEvent && E.fireEvent && (E.attachEvent("onclick",
        function() {
            T.noCloneEvent = !1
        }), E.cloneNode(!0).fireEvent("onclick"));
        X = y.createElement("input");
        X.value = "t";
        X.setAttribute("type", "radio");
        T.radioValue = "t" === X.value;
        X.setAttribute("checked", "checked");
        X.setAttribute("name", "t");
        E.appendChild(X);
        Ba = y.createDocumentFragment();
        Ba.appendChild(E.lastChild);
        T.checkClone = Ba.cloneNode(!0).cloneNode(!0).lastChild.checked;
        T.appendChecked = X.checked;
        Ba.removeChild(X);
        Ba.appendChild(E);
        if (E.attachEvent) for (Db in {
            submit: 1,
            change: 1,
            focusin: 1
        }) lb = "on" + Db,
        (Ra = lb in E) || (E.setAttribute(lb, "return;"), Ra = "function" == typeof E[lb]),
        T[Db + "Bubbles"] = Ra;
        Ba.removeChild(E);
        Ba = Cb = kb = E = X = null;
        e(function() {
            var b, h, n, s, d, c, f = y.getElementsByTagName("body")[0]; ! f || (b = y.createElement("div"), b.style.cssText = "padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(b, f.firstChild), E = y.createElement("div"), b.appendChild(E), E.innerHTML = "<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>", Ca = E.getElementsByTagName("td"), Ra = 0 === Ca[0].offsetHeight, Ca[0].style.display = "", Ca[1].style.display = "none", T.reliableHiddenOffsets = Ra && 0 === Ca[0].offsetHeight, a.getComputedStyle && (E.innerHTML = "", c = y.createElement("div"), c.style.width = "0", c.style.marginRight = "0", E.style.width = "2px", E.appendChild(c), T.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(c, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), "undefined" != typeof E.style.zoom && (E.innerHTML = "", E.style.width = E.style.padding = "1px", E.style.border = 0, E.style.overflow = "hidden", E.style.display = "inline", E.style.zoom = 1, T.inlineBlockNeedsLayout = 3 === E.offsetWidth, E.style.display = "block", E.style.overflow = "visible", E.innerHTML = "<div style='width:5px;'></div>", T.shrinkWrapBlocks = 3 !== E.offsetWidth), E.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;", E.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", h = E.firstChild, n = h.firstChild, s = h.nextSibling.firstChild.firstChild, d = {
                doesNotAddBorder: 5 !== n.offsetTop,
                doesAddBorderForTableAndCells: 5 === s.offsetTop
            },
            n.style.position = "fixed", n.style.top = "20px", d.fixedPosition = 20 === n.offsetTop || 15 === n.offsetTop, n.style.position = n.style.top = "", h.style.overflow = "hidden", h.style.position = "relative", d.subtractsBorderForOverflowNotVisible = -5 === n.offsetTop, d.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, a.getComputedStyle && (E.style.marginTop = "1%", T.pixelMargin = "1%" !== (a.getComputedStyle(E, null) || {
                marginTop: 0
            }).marginTop), "undefined" != typeof b.style.zoom && (b.style.zoom = 1), f.removeChild(b), E = null, e.extend(T, d))
        });
        bc = T
    }
    ed.support = bc;
    var Yc = /^(?:\{.*\}|\[.*\])$/,
    Vb = /([A-Z])/g;
    e.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando];
            return !! b && !ra(b)
        },
        data: function(b, h, a, s) {
            if (e.acceptData(b)) {
                var c, f;
                c = e.expando;
                var g = "string" == typeof h,
                j = b.nodeType,
                k = j ? e.cache: b,
                l = j ? b[c] : b[c] && c,
                B = "events" === h;
                if (l && k[l] && (B || s || k[l].data) || !(g && a === d)) {
                    l || (j ? b[c] = l = ++e.uuid: l = c);
                    k[l] || (k[l] = {},
                    j || (k[l].toJSON = e.noop));
                    if ("object" == typeof h || "function" == typeof h) s ? k[l] = e.extend(k[l], h) : k[l].data = e.extend(k[l].data, h);
                    b = c = k[l];
                    s || (c.data || (c.data = {}), c = c.data);
                    a !== d && (c[e.camelCase(h)] = a);
                    if (B && !c[h]) return b.events;
                    g ? (f = c[h], null == f && (f = c[e.camelCase(h)])) : f = c;
                    return f
                }
            }
        },
        removeData: function(b, h, a) {
            if (e.acceptData(b)) {
                var s, d, c, f = e.expando,
                g = b.nodeType,
                j = g ? e.cache: b,
                k = g ? b[f] : f;
                if (j[k]) {
                    if (h && (s = a ? j[k] : j[k].data)) {
                        e.isArray(h) || (h in s ? h = [h] : (h = e.camelCase(h), h in s ? h = [h] : h = h.split(" ")));
                        d = 0;
                        for (c = h.length; d < c; d++) delete s[h[d]];
                        if (! (a ? ra: e.isEmptyObject)(s)) return
                    }
                    if (!a && (delete j[k].data, !ra(j[k]))) return;
                    e.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null;
                    g && (e.support.deleteExpando ? delete b[f] : b.removeAttribute ? b.removeAttribute(f) : b[f] = null)
                }
            }
        },
        _data: function(b, h, a) {
            return e.data(b, h, a, !0)
        },
        acceptData: function(b) {
            if (b.nodeName) {
                var h = e.noData[b.nodeName.toLowerCase()];
                if (h) return ! 0 !== h && b.getAttribute("classid") === h
            }
            return ! 0
        }
    });
    e.fn.extend({
        data: function(b, h) {
            var a, s, c, f, g, j = this[0],
            k = 0,
            l = null;
            if (b === d) {
                if (this.length && (l = e.data(j), 1 === j.nodeType && !e._data(j, "parsedAttrs"))) {
                    c = j.attributes;
                    for (g = c.length; k < g; k++) f = c[k].name,
                    0 === f.indexOf("data-") && (f = e.camelCase(f.substring(5)), ab(j, f, l[f]));
                    e._data(j, "parsedAttrs", !0)
                }
                return l
            }
            if ("object" == typeof b) return this.each(function() {
                e.data(this, b)
            });
            a = b.split(".", 2);
            a[1] = a[1] ? "." + a[1] : "";
            s = a[1] + "!";
            return e.access(this,
            function(h) {
                if (h === d) return l = this.triggerHandler("getData" + s, [a[0]]),
                l === d && j && (l = e.data(j, b), l = ab(j, b, l)),
                l === d && a[1] ? this.data(a[0]) : l;
                a[1] = h;
                this.each(function() {
                    var d = e(this);
                    d.triggerHandler("setData" + s, a);
                    e.data(this, b, h);
                    d.triggerHandler("changeData" + s, a)
                })
            },
            null, h, 1 < arguments.length, null, !1)
        },
        removeData: function(b) {
            return this.each(function() {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        _mark: function(b, h) {
            b && (h = (h || "fx") + "mark", e._data(b, h, (e._data(b, h) || 0) + 1))
        },
        _unmark: function(b, h, a) { ! 0 !== b && (a = h, h = b, b = !1);
            if (h) {
                var a = a || "fx",
                s = a + "mark"; (b = b ? 0 : (e._data(h, s) || 1) - 1) ? e._data(h, s, b) : (e.removeData(h, s, !0), S(h, a, "mark"))
            }
        },
        queue: function(b, h, a) {
            var s;
            if (b) return h = (h || "fx") + "queue",
            s = e._data(b, h),
            a && (!s || e.isArray(a) ? s = e._data(b, h, e.makeArray(a)) : s.push(a)),
            s || []
        },
        dequeue: function(b, h) {
            var h = h || "fx",
            a = e.queue(b, h),
            s = a.shift(),
            d = {};
            "inprogress" === s && (s = a.shift());
            s && ("fx" === h && a.unshift("inprogress"), e._data(b, h + ".run", d), s.call(b,
            function() {
                e.dequeue(b, h)
            },
            d));
            a.length || (e.removeData(b, h + "queue " + h + ".run", !0), S(b, h, "queue"))
        }
    });
    e.fn.extend({
        queue: function(b, h) {
            var a = 2;
            "string" != typeof b && (h = b, b = "fx", a--);
            return arguments.length < a ? e.queue(this[0], b) : h === d ? this: this.each(function() {
                var a = e.queue(this, b, h);
                "fx" === b && "inprogress" !== a[0] && e.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                e.dequeue(this, b)
            })
        },
        delay: function(b, h) {
            b = e.fx ? e.fx.speeds[b] || b: b;
            return this.queue(h || "fx",
            function(h, a) {
                var e = setTimeout(h, b);
                a.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, h) {
            function a() {--g || s.resolveWith(c, [c])
            }
            "string" != typeof b && (h = b, b = d);
            for (var b = b || "fx",
            s = e.Deferred(), c = this, f = c.length, g = 1, j = b + "defer", k = b + "queue", l = b + "mark", B; f--;) if (B = e.data(c[f], j, d, !0) || (e.data(c[f], k, d, !0) || e.data(c[f], l, d, !0)) && e.data(c[f], j, e.Callbacks("once memory"), !0)) g++,
            B.add(a);
            a();
            return s.promise(h)
        }
    });
    var dc = /[\n\t\r]/g,
    mb = /\s+/,
    fd = /\r/g,
    Hc = /^(?:button|input)$/i,
    gd = /^(?:button|input|object|select|textarea)$/i,
    Eb = /^a(?:rea)?$/i,
    Ic = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    ec = e.support.getSetAttribute,
    ba, fc, gc;
    e.fn.extend({
        attr: function(b, h) {
            return e.access(this, e.attr, b, h, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                e.removeAttr(this, b)
            })
        },
        prop: function(b, h) {
            return e.access(this, e.prop, b, h, 1 < arguments.length)
        },
        removeProp: function(b) {
            b = e.propFix[b] || b;
            return this.each(function() {
                try {
                    this[b] = d,
                    delete this[b]
                } catch(h) {}
            })
        },
        addClass: function(b) {
            var h, a, s, d, c, f, g;
            if (e.isFunction(b)) return this.each(function(h) {
                e(this).addClass(b.call(this, h, this.className))
            });
            if (b && "string" == typeof b) {
                h = b.split(mb);
                a = 0;
                for (s = this.length; a < s; a++) if (d = this[a], 1 === d.nodeType) if (!d.className && 1 === h.length) d.className = b;
                else {
                    c = " " + d.className + " ";
                    f = 0;
                    for (g = h.length; f < g; f++)~c.indexOf(" " + h[f] + " ") || (c += h[f] + " ");
                    d.className = e.trim(c)
                }
            }
            return this
        },
        removeClass: function(b) {
            var h, a, s, c, f, g, j;
            if (e.isFunction(b)) return this.each(function(h) {
                e(this).removeClass(b.call(this, h, this.className))
            });
            if (b && "string" == typeof b || b === d) {
                h = (b || "").split(mb);
                a = 0;
                for (s = this.length; a < s; a++) if (c = this[a], 1 === c.nodeType && c.className) if (b) {
                    f = (" " + c.className + " ").replace(dc, " ");
                    g = 0;
                    for (j = h.length; g < j; g++) f = f.replace(" " + h[g] + " ", " ");
                    c.className = e.trim(f)
                } else c.className = ""
            }
            return this
        },
        toggleClass: function(b, h) {
            var a = typeof b,
            s = "boolean" == typeof h;
            return e.isFunction(b) ? this.each(function(a) {
                e(this).toggleClass(b.call(this, a, this.className, h), h)
            }) : this.each(function() {
                if ("string" === a) for (var d, c = 0,
                f = e(this), g = h, j = b.split(mb); d = j[c++];) g = s ? g: !f.hasClass(d),
                f[g ? "addClass": "removeClass"](d);
                else if ("undefined" === a || "boolean" === a) this.className && e._data(this, "__className__", this.className),
                this.className = this.className || !1 === b ? "": e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            for (var b = " " + b + " ",
            h = 0,
            a = this.length; h < a; h++) if (1 === this[h].nodeType && -1 < (" " + this[h].className + " ").replace(dc, " ").indexOf(b)) return ! 0;
            return ! 1
        },
        val: function(b) {
            var h, a, s, c = this[0];
            if (arguments.length) return s = e.isFunction(b),
            this.each(function(a) {
                var n = e(this),
                c;
                if (1 === this.nodeType && (s ? c = b.call(this, a, n.val()) : c = b, null == c ? c = "": "number" == typeof c ? c += "": e.isArray(c) && (c = e.map(c,
                function(b) {
                    return b == null ? "": b + ""
                })), h = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !h || !("set" in h) || h.set(this, c, "value") === d)) this.value = c
            });
            if (c) {
                if ((h = e.valHooks[c.type] || e.valHooks[c.nodeName.toLowerCase()]) && "get" in h && (a = h.get(c, "value")) !== d) return a;
                a = c.value;
                return "string" == typeof a ? a.replace(fd, "") : null == a ? "": a
            }
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var h = b.attributes.value;
                    return ! h || h.specified ? b.value: b.text
                }
            },
            select: {
                get: function(b) {
                    var h, a, s = b.selectedIndex,
                    d = [],
                    c = b.options,
                    f = "select-one" === b.type;
                    if (0 > s) return null;
                    b = f ? s: 0;
                    for (a = f ? s + 1 : c.length; b < a; b++) if (h = c[b], h.selected && (e.support.optDisabled ? !h.disabled: null === h.getAttribute("disabled")) && (!h.parentNode.disabled || !e.nodeName(h.parentNode, "optgroup"))) {
                        h = e(h).val();
                        if (f) return h;
                        d.push(h)
                    }
                    return f && !d.length && c.length ? e(c[s]).val() : d
                },
                set: function(b, h) {
                    var a = e.makeArray(h);
                    e(b).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), a)
                    });
                    a.length || (b.selectedIndex = -1);
                    return a
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
        attr: function(b, h, a, s) {
            var c, f, g = b.nodeType;
            if (b && 3 !== g && 8 !== g && 2 !== g) {
                if (s && h in e.attrFn) return e(b)[h](a);
                if ("undefined" == typeof b.getAttribute) return e.prop(b, h, a); (s = 1 !== g || !e.isXMLDoc(b)) && (h = h.toLowerCase(), f = e.attrHooks[h] || (Ic.test(h) ? fc: ba));
                if (a !== d) {
                    if (null === a) {
                        e.removeAttr(b, h);
                        return
                    }
                    if (f && "set" in f && s && (c = f.set(b, a, h)) !== d) return c;
                    b.setAttribute(h, "" + a);
                    return a
                }
                if (f && "get" in f && s && null !== (c = f.get(b, h))) return c;
                c = b.getAttribute(h);
                return null === c ? d: c
            }
        },
        removeAttr: function(b, h) {
            var a, s, d, c, f, g = 0;
            if (h && 1 === b.nodeType) {
                s = h.toLowerCase().split(mb);
                for (c = s.length; g < c; g++)(d = s[g]) && (a = e.propFix[d] || d, f = Ic.test(d), f || e.attr(b, d, ""), b.removeAttribute(ec ? d: a), f && a in b && (b[a] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(b, h) {
                    if (Hc.test(b.nodeName) && b.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === h && e.nodeName(b, "input")) {
                        var a = b.value;
                        b.setAttribute("type", h);
                        a && (b.value = a);
                        return h
                    }
                }
            },
            value: {
                get: function(b, h) {
                    return ba && e.nodeName(b, "button") ? ba.get(b, h) : h in b ? b.value: null
                },
                set: function(b, h, a) {
                    if (ba && e.nodeName(b, "button")) return ba.set(b, h, a);
                    b.value = h
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
        prop: function(b, h, a) {
            var s, c, f;
            f = b.nodeType;
            if (b && 3 !== f && 8 !== f && 2 !== f) return (f = 1 !== f || !e.isXMLDoc(b)) && (h = e.propFix[h] || h, c = e.propHooks[h]),
            a !== d ? c && "set" in c && (s = c.set(b, a, h)) !== d ? s: b[h] = a: c && "get" in c && null !== (s = c.get(b, h)) ? s: b[h]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var h = b.getAttributeNode("tabindex");
                    return h && h.specified ? parseInt(h.value, 10) : gd.test(b.nodeName) || Eb.test(b.nodeName) && b.href ? 0 : d
                }
            }
        }
    });
    e.attrHooks.tabindex = e.propHooks.tabIndex;
    fc = {
        get: function(b, h) {
            var a, s = e.prop(b, h);
            return ! 0 === s || "boolean" != typeof s && (a = b.getAttributeNode(h)) && !1 !== a.nodeValue ? h.toLowerCase() : d
        },
        set: function(b, h, a) {
            var s; ! 1 === h ? e.removeAttr(b, a) : (s = e.propFix[a] || a, s in b && (b[s] = !0), b.setAttribute(a, a.toLowerCase()));
            return a
        }
    };
    ec || (gc = {
        name: !0,
        id: !0,
        coords: !0
    },
    ba = e.valHooks.button = {
        get: function(b, h) {
            var a;
            return (a = b.getAttributeNode(h)) && (gc[h] ? "" !== a.nodeValue: a.specified) ? a.nodeValue: d
        },
        set: function(b, h, a) {
            var e = b.getAttributeNode(a);
            e || (e = y.createAttribute(a), b.setAttributeNode(e));
            return e.nodeValue = h + ""
        }
    },
    e.attrHooks.tabindex.set = ba.set, e.each(["width", "height"],
    function(b, h) {
        e.attrHooks[h] = e.extend(e.attrHooks[h], {
            set: function(b, a) {
                if ("" === a) return b.setAttribute(h, "auto"),
                a
            }
        })
    }), e.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, h, a) {
            "" === h && (h = "false");
            ba.set(b, h, a)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"],
    function(b, h) {
        e.attrHooks[h] = e.extend(e.attrHooks[h], {
            get: function(b) {
                b = b.getAttribute(h, 2);
                return null === b ? d: b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || d
        },
        set: function(b, h) {
            return b.style.cssText = "" + h
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"],
    function() {
        e.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on": b.value
            }
        }
    });
    e.each(["radio", "checkbox"],
    function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(b, h) {
                if (e.isArray(h)) return b.checked = 0 <= e.inArray(e(b).val(), h)
            }
        })
    });
    var Fb = /^(?:textarea|input|select)$/i,
    Gb = /^([^\.]*)?(?:\.(.+))?$/,
    hd = /(?:^|\s)hover(\.\S+)?\b/,
    Jc = /^key/,
    id = /^(?:mouse|contextmenu)|click/,
    Sa = /^(?:focusinfocus|focusoutblur)$/,
    Kc = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    jd = function(b) { (b = Kc.exec(b)) && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    },
    Ta = function(b) {
        return e.event.special.hover ? b: b.replace(hd, "mouseenter$1 mouseleave$1")
    };
    e.event = {
        add: function(b, h, a, s, c) {
            var f, g, j, k, l, B, t, u, A;
            if (! (3 === b.nodeType || 8 === b.nodeType || !h || !a || !(f = e._data(b)))) {
                a.handler && (t = a, a = t.handler, c = t.selector);
                a.guid || (a.guid = e.guid++); (j = f.events) || (f.events = j = {}); (g = f.handle) || (f.handle = g = function(b) {
                    return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(g.elem, arguments) : d
                },
                g.elem = b);
                h = e.trim(Ta(h)).split(" ");
                for (f = 0; f < h.length; f++) {
                    k = Gb.exec(h[f]) || [];
                    l = k[1];
                    B = (k[2] || "").split(".").sort();
                    A = e.event.special[l] || {};
                    l = (c ? A.delegateType: A.bindType) || l;
                    A = e.event.special[l] || {};
                    k = e.extend({
                        type: l,
                        origType: k[1],
                        data: s,
                        handler: a,
                        guid: a.guid,
                        selector: c,
                        quick: c && jd(c),
                        namespace: B.join(".")
                    },
                    t);
                    u = j[l];
                    if (!u && (u = j[l] = [], u.delegateCount = 0, !A.setup || !1 === A.setup.call(b, s, B, g))) b.addEventListener ? b.addEventListener(l, g, !1) : b.attachEvent && b.attachEvent("on" + l, g);
                    A.add && (A.add.call(b, k), k.handler.guid || (k.handler.guid = a.guid));
                    c ? u.splice(u.delegateCount++, 0, k) : u.push(k);
                    e.event.global[l] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, h, a, s, c) {
            var d = e.hasData(b) && e._data(b),
            f,
            g,
            j,
            k,
            l,
            B,
            t,
            u,
            A,
            m,
            o;
            if (d && (t = d.events)) {
                h = e.trim(Ta(h || "")).split(" ");
                for (f = 0; f < h.length; f++) if (g = Gb.exec(h[f]) || [], j = k = g[1], g = g[2], j) {
                    u = e.event.special[j] || {};
                    j = (s ? u.delegateType: u.bindType) || j;
                    m = t[j] || [];
                    l = m.length;
                    g = g ? RegExp("(^|\\.)" + g.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (B = 0; B < m.length; B++) o = m[B],
                    (c || k === o.origType) && (!a || a.guid === o.guid) && (!g || g.test(o.namespace)) && (!s || s === o.selector || "**" === s && o.selector) && (m.splice(B--, 1), o.selector && m.delegateCount--, u.remove && u.remove.call(b, o));
                    0 === m.length && l !== m.length && ((!u.teardown || !1 === u.teardown.call(b, g)) && e.removeEvent(b, j, d.handle), delete t[j])
                } else for (j in t) e.event.remove(b, j + h[f], a, s, !0);
                e.isEmptyObject(t) && (A = d.handle, A && (A.elem = null), e.removeData(b, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(b, h, n, s) {
            if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                var c = b.type || b,
                f = [],
                g,
                j,
                k,
                l,
                B,
                t;
                if (!Sa.test(c + e.event.triggered) && (0 <= c.indexOf("!") && (c = c.slice(0, -1), g = !0), 0 <= c.indexOf(".") && (f = c.split("."), c = f.shift(), f.sort()), n && !e.event.customEvent[c] || e.event.global[c])) if (b = "object" == typeof b ? b[e.expando] ? b: new e.Event(c, b) : new e.Event(c), b.type = c, b.isTrigger = !0, b.exclusive = g, b.namespace = f.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, g = 0 > c.indexOf(":") ? "on" + c: "", n) {
                    if (b.result = d, b.target || (b.target = n), h = null != h ? e.makeArray(h) : [], h.unshift(b), l = e.event.special[c] || {},
                    !(l.trigger && !1 === l.trigger.apply(n, h))) {
                        t = [[n, l.bindType || c]];
                        if (!s && !l.noBubble && !e.isWindow(n)) {
                            j = l.delegateType || c;
                            f = Sa.test(j + c) ? n: n.parentNode;
                            for (k = null; f; f = f.parentNode) t.push([f, j]),
                            k = f;
                            k && k === n.ownerDocument && t.push([k.defaultView || k.parentWindow || a, j])
                        }
                        for (j = 0; j < t.length && !b.isPropagationStopped(); j++) f = t[j][0],
                        b.type = t[j][1],
                        (B = (e._data(f, "events") || {})[b.type] && e._data(f, "handle")) && B.apply(f, h),
                        (B = g && f[g]) && e.acceptData(f) && !1 === B.apply(f, h) && b.preventDefault();
                        b.type = c; ! s && !b.isDefaultPrevented() && (!l._default || !1 === l._default.apply(n.ownerDocument, h)) && ("click" !== c || !e.nodeName(n, "a")) && e.acceptData(n) && g && n[c] && ("focus" !== c && "blur" !== c || 0 !== b.target.offsetWidth) && !e.isWindow(n) && (k = n[g], k && (n[g] = null), e.event.triggered = c, n[c](), e.event.triggered = d, k && (n[g] = k));
                        return b.result
                    }
                } else for (j in n = e.cache, n) n[j].events && n[j].events[c] && e.event.trigger(b, h, n[j].handle.elem, !0)
            }
        },
        dispatch: function(b) {
            var b = e.event.fix(b || a.event),
            h = (e._data(this, "events") || {})[b.type] || [],
            n = h.delegateCount,
            c = [].slice.call(arguments, 0),
            f = !b.exclusive && !b.namespace,
            g = e.event.special[b.type] || {},
            j = [],
            k,
            l,
            B,
            t,
            u,
            A,
            m;
            c[0] = b;
            b.delegateTarget = this;
            if (!g.preDispatch || !1 !== g.preDispatch.call(this, b)) {
                if (n && (!b.button || "click" !== b.type)) {
                    B = e(this);
                    B.context = this.ownerDocument || this;
                    for (l = b.target; l != this; l = l.parentNode || this) if (!0 !== l.disabled) {
                        u = {};
                        A = [];
                        B[0] = l;
                        for (k = 0; k < n; k++) {
                            t = h[k];
                            m = t.selector;
                            if (u[m] === d) {
                                var o = u,
                                K = m,
                                C;
                                if (t.quick) {
                                    C = t.quick;
                                    var y = l.attributes || {};
                                    C = (!C[1] || l.nodeName.toLowerCase() === C[1]) && (!C[2] || (y.id || {}).value === C[2]) && (!C[3] || C[3].test((y["class"] || {}).value))
                                } else C = B.is(m);
                                o[K] = C
                            }
                            u[m] && A.push(t)
                        }
                        A.length && j.push({
                            elem: l,
                            matches: A
                        })
                    }
                }
                h.length > n && j.push({
                    elem: this,
                    matches: h.slice(n)
                });
                for (k = 0; k < j.length && !b.isPropagationStopped(); k++) {
                    n = j[k];
                    b.currentTarget = n.elem;
                    for (h = 0; h < n.matches.length && !b.isImmediatePropagationStopped(); h++) if (t = n.matches[h], f || !b.namespace && !t.namespace || b.namespace_re && b.namespace_re.test(t.namespace)) b.data = t.data,
                    b.handleObj = t,
                    t = ((e.event.special[t.origType] || {}).handle || t.handler).apply(n.elem, c),
                    t !== d && (b.result = t, !1 === t && (b.preventDefault(), b.stopPropagation()))
                }
                g.postDispatch && g.postDispatch.call(this, b);
                return b.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, h) {
                null == b.which && (b.which = null != h.charCode ? h.charCode: h.keyCode);
                return b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, h) {
                var a, e, c, f = h.button,
                g = h.fromElement;
                null == b.pageX && null != h.clientX && (a = b.target.ownerDocument || y, e = a.documentElement, c = a.body, b.pageX = h.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), b.pageY = h.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)); ! b.relatedTarget && g && (b.relatedTarget = g === b.target ? h.toElement: g); ! b.which && f !== d && (b.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0);
                return b
            }
        },
        fix: function(b) {
            if (b[e.expando]) return b;
            var h, a, c = b,
            f = e.event.fixHooks[b.type] || {},
            g = f.props ? this.props.concat(f.props) : this.props,
            b = e.Event(c);
            for (h = g.length; h;) a = g[--h],
            b[a] = c[a];
            b.target || (b.target = c.srcElement || y);
            3 === b.target.nodeType && (b.target = b.target.parentNode);
            b.metaKey === d && (b.metaKey = b.ctrlKey);
            return f.filter ? f.filter(b, c) : b
        },
        special: {
            ready: {
                setup: e.bindReady
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
                setup: function(b, h, a) {
                    e.isWindow(this) && (this.onbeforeunload = a)
                },
                teardown: function(b, h) {
                    this.onbeforeunload === h && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, h, a, c) {
            b = e.extend(new e.Event, a, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            c ? e.event.trigger(b, null, h) : e.event.dispatch.call(h, b);
            b.isDefaultPrevented() && a.preventDefault()
        }
    };
    e.event.handle = e.event.dispatch;
    e.removeEvent = y.removeEventListener ?
    function(b, h, a) {
        b.removeEventListener && b.removeEventListener(h, a, !1)
    }: function(b, h, a) {
        b.detachEvent && b.detachEvent("on" + h, a)
    };
    e.Event = function(b, h) {
        if (! (this instanceof e.Event)) return new e.Event(b, h);
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? C: R) : this.type = b;
        h && e.extend(this, h);
        this.timeStamp = b && b.timeStamp || e.now();
        this[e.expando] = !0
    };
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = C;
            var b = this.originalEvent; ! b || (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = C;
            var b = this.originalEvent; ! b || (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = C;
            this.stopPropagation()
        },
        isDefaultPrevented: R,
        isPropagationStopped: R,
        isImmediatePropagationStopped: R
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(b, h) {
        e.event.special[b] = {
            delegateType: h,
            bindType: h,
            handle: function(b) {
                var a = b.relatedTarget,
                c = b.handleObj,
                d;
                if (!a || a !== this && !e.contains(this, a)) b.type = c.origType,
                d = c.handler.apply(this, arguments),
                b.type = h;
                return d
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form")) return ! 1;
            e.event.add(this, "click._submit keypress._submit",
            function(b) {
                b = b.target; (b = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form: d) && !b._submit_attached && (e.event.add(b, "submit._submit",
                function(b) {
                    b._submit_bubble = !0
                }), b._submit_attached = !0)
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form")) return ! 1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (Fb.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) e.event.add(this, "propertychange._change",
                function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }),
                e.event.add(this, "click._change",
                function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1, e.event.simulate("change", this, b, !0))
                });
                return ! 1
            }
            e.event.add(this, "beforeactivate._change",
            function(b) {
                b = b.target;
                Fb.test(b.nodeName) && !b._change_attached && (e.event.add(b, "change._change",
                function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && e.event.simulate("change", this.parentNode, b, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function(b) {
            var h = b.target;
            if (this !== h || b.isSimulated || b.isTrigger || "radio" !== h.type && "checkbox" !== h.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            e.event.remove(this, "._change");
            return Fb.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(b, h) {
        var a = 0,
        c = function(b) {
            e.event.simulate(h, b.target, e.event.fix(b), !0)
        };
        e.event.special[h] = {
            setup: function() {
                0 === a++&&y.addEventListener(b, c, !0)
            },
            teardown: function() {
                0 === --a && y.removeEventListener(b, c, !0)
            }
        }
    });
    e.fn.extend({
        on: function(b, h, a, c, f) {
            var g, j;
            if ("object" == typeof b) {
                "string" != typeof h && (a = a || h, h = d);
                for (j in b) this.on(j, h, a, b[j], f);
                return this
            }
            null == a && null == c ? (c = h, a = h = d) : null == c && ("string" == typeof h ? (c = a, a = d) : (c = a, a = h, h = d));
            if (!1 === c) c = R;
            else if (!c) return this;
            1 === f && (g = c, c = function(b) {
                e().off(b);
                return g.apply(this, arguments)
            },
            c.guid = g.guid || (g.guid = e.guid++));
            return this.each(function() {
                e.event.add(this, b, c, a, h)
            })
        },
        one: function(b, h, a, e) {
            return this.on(b, h, a, e, 1)
        },
        off: function(b, h, a) {
            if (b && b.preventDefault && b.handleObj) {
                var c = b.handleObj;
                e(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace: c.origType, c.selector, c.handler);
                return this
            }
            if ("object" == typeof b) {
                for (c in b) this.off(c, h, b[c]);
                return this
            }
            if (!1 === h || "function" == typeof h) a = h,
            h = d; ! 1 === a && (a = R);
            return this.each(function() {
                e.event.remove(this, b, a, h)
            })
        },
        bind: function(b, h, a) {
            return this.on(b, null, h, a)
        },
        unbind: function(b, h) {
            return this.off(b, null, h)
        },
        live: function(b, h, a) {
            e(this.context).on(b, this.selector, h, a);
            return this
        },
        die: function(b, h) {
            e(this.context).off(b, this.selector || "**", h);
            return this
        },
        delegate: function(b, h, a, e) {
            return this.on(h, b, a, e)
        },
        undelegate: function(b, h, a) {
            return 1 == arguments.length ? this.off(b, "**") : this.off(h, b, a)
        },
        trigger: function(b, h) {
            return this.each(function() {
                e.event.trigger(b, h, this)
            })
        },
        triggerHandler: function(b, h) {
            if (this[0]) return e.event.trigger(b, h, this[0], !0)
        },
        toggle: function(b) {
            var h = arguments,
            a = b.guid || e.guid++,
            c = 0,
            d = function(a) {
                var d = (e._data(this, "lastToggle" + b.guid) || 0) % c;
                e._data(this, "lastToggle" + b.guid, d + 1);
                a.preventDefault();
                return h[d].apply(this, arguments) || !1
            };
            for (d.guid = a; c < h.length;) h[c++].guid = a;
            return this.click(d)
        },
        hover: function(b, h) {
            return this.mouseenter(b).mouseleave(h || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(b, h) {
        e.fn[h] = function(b, a) {
            a == null && (a = b, b = null);
            return arguments.length > 0 ? this.on(h, null, b, a) : this.trigger(h)
        };
        e.attrFn && (e.attrFn[h] = true);
        Jc.test(h) && (e.event.fixHooks[h] = e.event.keyHooks);
        id.test(h) && (e.event.fixHooks[h] = e.event.mouseHooks)
    });
    var Hb = function(b, h, a, e, c, d) {
        for (var c = 0,
        f = e.length; c < f; c++) {
            var g = e[c];
            if (g) {
                for (var j = !1,
                g = g[b]; g;) {
                    if (g[Da] === a) {
                        j = e[g.sizset];
                        break
                    }
                    if (1 === g.nodeType) if (d || (g[Da] = a, g.sizset = c), "string" != typeof h) {
                        if (g === h) {
                            j = !0;
                            break
                        }
                    } else if (0 < D.filter(h, [g]).length) {
                        j = g;
                        break
                    }
                    g = g[b]
                }
                e[c] = j
            }
        }
    },
    Lc = function(b, h, a, e, c, d) {
        for (var c = 0,
        f = e.length; c < f; c++) {
            var g = e[c];
            if (g) {
                for (var j = !1,
                g = g[b]; g;) {
                    if (g[Da] === a) {
                        j = e[g.sizset];
                        break
                    }
                    1 === g.nodeType && !d && (g[Da] = a, g.sizset = c);
                    if (g.nodeName.toLowerCase() === h) {
                        j = g;
                        break
                    }
                    g = g[b]
                }
                e[c] = j
            }
        }
    },
    Ib = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
    Da = "sizcache" + (Math.random() + "").replace(".", ""),
    Jb = 0,
    ja = Object.prototype.toString,
    Q = !1,
    nb = !0,
    Ua = /\\/g,
    ob = /\r\n/g,
    Va = /\W/; [0, 0].sort(function() {
        nb = !1;
        return 0
    });
    var D = function(b, h, a, e) {
        var a = a || [],
        c = h = h || y;
        if (1 !== h.nodeType && 9 !== h.nodeType) return [];
        if (!b || "string" != typeof b) return a;
        var d, f, g, j, k, l, t = !0,
        B = D.isXML(h),
        u = [],
        A = b;
        do
        if (Ib.exec(""), d = Ib.exec(A)) if (A = d[3], u.push(d[1]), d[2]) {
            j = d[3];
            break
        }
        while (d);
        if (1 < u.length && Kb.exec(b)) if (2 === u.length && H.relative[u[0]]) f = pb(u[0] + u[1], h, e);
        else for (f = H.relative[u[0]] ? [h] : D(u.shift(), h); u.length;) b = u.shift(),
        H.relative[b] && (b += u.shift()),
        f = pb(b, f, e);
        else if (!e && 1 < u.length && 9 === h.nodeType && !B && H.match.ID.test(u[0]) && !H.match.ID.test(u[u.length - 1]) && (k = D.find(u.shift(), h, B), h = k.expr ? D.filter(k.expr, k.set)[0] : k.set[0]), h) {
            k = e ? {
                expr: u.pop(),
                set: Y(e)
            }: D.find(u.pop(), 1 === u.length && ("~" === u[0] || "+" === u[0]) && h.parentNode ? h.parentNode: h, B);
            f = k.expr ? D.filter(k.expr, k.set) : k.set;
            for (0 < u.length ? g = Y(f) : t = !1; u.length;) d = l = u.pop(),
            H.relative[l] ? d = u.pop() : l = "",
            null == d && (d = h),
            H.relative[l](g, d, B)
        } else g = [];
        g || (g = f);
        g || D.error(l || b);
        if ("[object Array]" === ja.call(g)) if (t) if (h && 1 === h.nodeType) for (b = 0; null != g[b]; b++) g[b] && (!0 === g[b] || 1 === g[b].nodeType && D.contains(h, g[b])) && a.push(f[b]);
        else for (b = 0; null != g[b]; b++) g[b] && 1 === g[b].nodeType && a.push(f[b]);
        else a.push.apply(a, g);
        else Y(g, a);
        j && (D(j, c, a, e), D.uniqueSort(a));
        return a
    };
    D.uniqueSort = function(b) {
        if (ua && (Q = nb, b.sort(ua), Q)) for (var h = 1; h < b.length; h++) b[h] === b[h - 1] && b.splice(h--, 1);
        return b
    };
    D.matches = function(b, h) {
        return D(b, null, null, h)
    };
    D.matchesSelector = function(b, h) {
        return 0 < D(h, null, null, [b]).length
    };
    D.find = function(b, h, a) {
        var e, c, d, f, g, j;
        if (!b) return [];
        c = 0;
        for (d = H.order.length; c < d; c++) if (g = H.order[c], f = H.leftMatch[g].exec(b)) if (j = f[1], f.splice(1, 1), "\\" !== j.substr(j.length - 1) && (f[1] = (f[1] || "").replace(Ua, ""), e = H.find[g](f, h, a), null != e)) {
            b = b.replace(H.match[g], "");
            break
        }
        e || (e = "undefined" != typeof h.getElementsByTagName ? h.getElementsByTagName("*") : []);
        return {
            set: e,
            expr: b
        }
    };
    D.filter = function(b, h, a, e) {
        for (var c, f, g, j, k, l, t, B, u = b,
        A = [], m = h, o = h && h[0] && D.isXML(h[0]); b && h.length;) {
            for (g in H.filter) if (null != (c = H.leftMatch[g].exec(b)) && c[2]) if (l = H.filter[g], k = c[1], f = !1, c.splice(1, 1), "\\" !== k.substr(k.length - 1)) {
                m === A && (A = []);
                if (H.preFilter[g]) if (c = H.preFilter[g](c, m, a, A, e, o)) {
                    if (!0 === c) continue
                } else f = j = !0;
                if (c) for (t = 0; null != (k = m[t]); t++) k && (j = l(k, c, t, m), B = e ^ j, a && null != j ? B ? f = !0 : m[t] = !1 : B && (A.push(k), f = !0));
                if (j !== d) {
                    a || (m = A);
                    b = b.replace(H.match[g], "");
                    if (!f) return [];
                    break
                }
            }
            if (b === u) if (null == f) D.error(b);
            else break;
            u = b
        }
        return m
    };
    D.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    var qb = D.getText = function(b) {
        var h, a;
        h = b.nodeType;
        var e = "";
        if (h) if (1 === h || 9 === h || 11 === h) {
            if ("string" == typeof b.textContent) return b.textContent;
            if ("string" == typeof b.innerText) return b.innerText.replace(ob, "");
            for (b = b.firstChild; b; b = b.nextSibling) e += qb(b)
        } else {
            if (3 === h || 4 === h) return b.nodeValue
        } else for (h = 0; a = b[h]; h++) 8 !== a.nodeType && (e += qb(a));
        return e
    },
    H = D.selectors = {
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
            href: function(b) {
                return b.getAttribute("href")
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        relative: {
            "+": function(b, h) {
                var a = "string" == typeof h,
                e = a && !Va.test(h),
                a = a && !e;
                e && (h = h.toLowerCase());
                for (var e = 0,
                c = b.length,
                d; e < c; e++) if (d = b[e]) {
                    for (; (d = d.previousSibling) && 1 !== d.nodeType;);
                    b[e] = a || d && d.nodeName.toLowerCase() === h ? d || !1 : d === h
                }
                a && D.filter(h, b, !0)
            },
            ">": function(b, h) {
                var a, e = "string" == typeof h,
                c = 0,
                d = b.length;
                if (e && !Va.test(h)) for (h = h.toLowerCase(); c < d; c++) {
                    if (a = b[c]) a = a.parentNode,
                    b[c] = a.nodeName.toLowerCase() === h ? a: !1
                } else {
                    for (; c < d; c++)(a = b[c]) && (b[c] = e ? a.parentNode: a.parentNode === h);
                    e && D.filter(h, b, !0)
                }
            },
            "": function(b, h, a) {
                var e, c = Jb++,
                d = Hb;
                "string" == typeof h && !Va.test(h) && (h = h.toLowerCase(), e = h, d = Lc);
                d("parentNode", h, c, b, e, a)
            },
            "~": function(b, h, a) {
                var e, c = Jb++,
                d = Hb;
                "string" == typeof h && !Va.test(h) && (h = h.toLowerCase(), e = h, d = Lc);
                d("previousSibling", h, c, b, e, a)
            }
        },
        find: {
            ID: function(b, h, a) {
                if ("undefined" != typeof h.getElementById && !a) return (b = h.getElementById(b[1])) && b.parentNode ? [b] : []
            },
            NAME: function(b, h) {
                if ("undefined" != typeof h.getElementsByName) {
                    for (var a = [], e = h.getElementsByName(b[1]), c = 0, d = e.length; c < d; c++) e[c].getAttribute("name") === b[1] && a.push(e[c]);
                    return 0 === a.length ? null: a
                }
            },
            TAG: function(b, h) {
                if ("undefined" != typeof h.getElementsByTagName) return h.getElementsByTagName(b[1])
            }
        },
        preFilter: {
            CLASS: function(b, h, a, e, c, d) {
                b = " " + b[1].replace(Ua, "") + " ";
                if (d) return b;
                for (var d = 0,
                f; null != (f = h[d]); d++) f && (c ^ (f.className && 0 <= (" " + f.className + " ").replace(/[\t\n\r]/g, " ").indexOf(b)) ? a || e.push(f) : a && (h[d] = !1));
                return ! 1
            },
            ID: function(b) {
                return b[1].replace(Ua, "")
            },
            TAG: function(b) {
                return b[1].replace(Ua, "").toLowerCase()
            },
            CHILD: function(b) {
                if ("nth" === b[1]) {
                    b[2] || D.error(b[0]);
                    b[2] = b[2].replace(/^\+|\s*/g, "");
                    var h = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === b[2] && "2n" || "odd" === b[2] && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2]);
                    b[2] = h[1] + (h[2] || 1) - 0;
                    b[3] = h[3] - 0
                } else b[2] && D.error(b[0]);
                b[0] = Jb++;
                return b
            },
            ATTR: function(b, h, a, e, c, d) {
                h = b[1] = b[1].replace(Ua, ""); ! d && H.attrMap[h] && (b[1] = H.attrMap[h]);
                b[4] = (b[4] || b[5] || "").replace(Ua, "");
                "~=" === b[2] && (b[4] = " " + b[4] + " ");
                return b
            },
            PSEUDO: function(b, h, a, e, c) {
                if ("not" === b[1]) if (1 < (Ib.exec(b[3]) || "").length || /^\w/.test(b[3])) b[3] = D(b[3], null, null, h);
                else return b = D.filter(b[3], h, a, 1 ^ c),
                a || e.push.apply(e, b),
                !1;
                else if (H.match.POS.test(b[0]) || H.match.CHILD.test(b[0])) return ! 0;
                return b
            },
            POS: function(b) {
                b.unshift(!0);
                return b
            }
        },
        filters: {
            enabled: function(b) {
                return ! 1 === b.disabled && "hidden" !== b.type
            },
            disabled: function(b) {
                return ! 0 === b.disabled
            },
            checked: function(b) {
                return ! 0 === b.checked
            },
            selected: function(b) {
                b.parentNode && b.parentNode.selectedIndex;
                return ! 0 === b.selected
            },
            parent: function(b) {
                return !! b.firstChild
            },
            empty: function(b) {
                return ! b.firstChild
            },
            has: function(b, a, e) {
                return !! D(e[3], b).length
            },
            header: function(b) {
                return /h\d/i.test(b.nodeName)
            },
            text: function(b) {
                var a = b.getAttribute("type"),
                e = b.type;
                return "input" === b.nodeName.toLowerCase() && "text" === e && (a === e || null === a)
            },
            radio: function(b) {
                return "input" === b.nodeName.toLowerCase() && "radio" === b.type
            },
            checkbox: function(b) {
                return "input" === b.nodeName.toLowerCase() && "checkbox" === b.type
            },
            file: function(b) {
                return "input" === b.nodeName.toLowerCase() && "file" === b.type
            },
            password: function(b) {
                return "input" === b.nodeName.toLowerCase() && "password" === b.type
            },
            submit: function(b) {
                var a = b.nodeName.toLowerCase();
                return ("input" === a || "button" === a) && "submit" === b.type
            },
            image: function(b) {
                return "input" === b.nodeName.toLowerCase() && "image" === b.type
            },
            reset: function(b) {
                var a = b.nodeName.toLowerCase();
                return ("input" === a || "button" === a) && "reset" === b.type
            },
            button: function(b) {
                var a = b.nodeName.toLowerCase();
                return "input" === a && "button" === b.type || "button" === a
            },
            input: function(b) {
                return /input|select|textarea|button/i.test(b.nodeName)
            },
            focus: function(b) {
                return b === b.ownerDocument.activeElement
            }
        },
        setFilters: {
            first: function(b, a) {
                return 0 === a
            },
            last: function(b, a, e, c) {
                return a === c.length - 1
            },
            even: function(b, a) {
                return 0 === a % 2
            },
            odd: function(b, a) {
                return 1 === a % 2
            },
            lt: function(b, a, e) {
                return a < e[3] - 0
            },
            gt: function(b, a, e) {
                return a > e[3] - 0
            },
            nth: function(b, a, e) {
                return e[3] - 0 === a
            },
            eq: function(b, a, e) {
                return e[3] - 0 === a
            }
        },
        filter: {
            PSEUDO: function(b, a, e, c) {
                var d = a[1],
                f = H.filters[d];
                if (f) return f(b, e, a, c);
                if ("contains" === d) return 0 <= (b.textContent || b.innerText || qb([b]) || "").indexOf(a[3]);
                if ("not" === d) {
                    a = a[3];
                    e = 0;
                    for (c = a.length; e < c; e++) if (a[e] === b) return ! 1;
                    return ! 0
                }
                D.error(d)
            },
            CHILD: function(b, a) {
                var e, c, d, f, g, j;
                e = a[1];
                j = b;
                switch (e) {
                case "only":
                case "first":
                    for (; j = j.previousSibling;) if (1 === j.nodeType) return ! 1;
                    if ("first" === e) return ! 0;
                    j = b;
                case "last":
                    for (; j = j.nextSibling;) if (1 === j.nodeType) return ! 1;
                    return ! 0;
                case "nth":
                    e = a[2];
                    c = a[3];
                    if (1 === e && 0 === c) return ! 0;
                    d = a[0];
                    if ((f = b.parentNode) && (f[Da] !== d || !b.nodeIndex)) {
                        g = 0;
                        for (j = f.firstChild; j; j = j.nextSibling) 1 === j.nodeType && (j.nodeIndex = ++g);
                        f[Da] = d
                    }
                    j = b.nodeIndex - c;
                    return 0 === e ? 0 === j: 0 === j % e && 0 <= j / e
                }
            },
            ID: function(b, a) {
                return 1 === b.nodeType && b.getAttribute("id") === a
            },
            TAG: function(b, a) {
                return "*" === a && 1 === b.nodeType || !!b.nodeName && b.nodeName.toLowerCase() === a
            },
            CLASS: function(b, a) {
                return - 1 < (" " + (b.className || b.getAttribute("class")) + " ").indexOf(a)
            },
            ATTR: function(b, a) {
                var e = a[1],
                e = D.attr ? D.attr(b, e) : H.attrHandle[e] ? H.attrHandle[e](b) : null != b[e] ? b[e] : b.getAttribute(e),
                c = e + "",
                d = a[2],
                f = a[4];
                return null == e ? "!=" === d: !d && D.attr ? null != e: "=" === d ? c === f: "*=" === d ? 0 <= c.indexOf(f) : "~=" === d ? 0 <= (" " + c + " ").indexOf(f) : f ? "!=" === d ? c !== f: "^=" === d ? 0 === c.indexOf(f) : "$=" === d ? c.substr(c.length - f.length) === f: "|=" === d ? c === f || c.substr(0, f.length + 1) === f + "-": !1 : c && !1 !== e
            },
            POS: function(b, a, e, c) {
                var d = H.setFilters[a[2]];
                if (d) return d(b, e, a, c)
            }
        }
    },
    Kb = H.match.POS,
    ka = function(b, a) {
        return "\\" + (a - 0 + 1)
    },
    Ea;
    for (Ea in H.match) H.match[Ea] = RegExp(H.match[Ea].source + /(?![^\[]*\])(?![^\(]*\))/.source),
    H.leftMatch[Ea] = RegExp(/(^(?:.|\r|\n)*?)/.source + H.match[Ea].source.replace(/\\(\d+)/g, ka));
    H.match.globalPOS = Kb;
    var Y = function(b, a) {
        b = Array.prototype.slice.call(b, 0);
        return a ? (a.push.apply(a, b), a) : b
    };
    try {
        Array.prototype.slice.call(y.documentElement.childNodes, 0)[0].nodeType
    } catch(r) {
        Y = function(b, a) {
            var e = 0,
            c = a || [];
            if ("[object Array]" === ja.call(b)) Array.prototype.push.apply(c, b);
            else if ("number" == typeof b.length) for (var d = b.length; e < d; e++) c.push(b[e]);
            else for (; b[e]; e++) c.push(b[e]);
            return c
        }
    }
    var ua, va;
    y.documentElement.compareDocumentPosition ? ua = function(b, a) {
        return b === a ? (Q = !0, 0) : !b.compareDocumentPosition || !a.compareDocumentPosition ? b.compareDocumentPosition ? -1 : 1 : b.compareDocumentPosition(a) & 4 ? -1 : 1
    }: (ua = function(b, a) {
        if (b === a) return Q = !0,
        0;
        if (b.sourceIndex && a.sourceIndex) return b.sourceIndex - a.sourceIndex;
        var e, c, d = [],
        f = [];
        e = b.parentNode;
        c = a.parentNode;
        var g = e;
        if (e === c) return va(b, a);
        if (!e) return - 1;
        if (!c) return 1;
        for (; g;) d.unshift(g),
        g = g.parentNode;
        for (g = c; g;) f.unshift(g),
        g = g.parentNode;
        e = d.length;
        c = f.length;
        for (g = 0; g < e && g < c; g++) if (d[g] !== f[g]) return va(d[g], f[g]);
        return g === e ? va(b, f[g], -1) : va(d[g], a, 1)
    },
    va = function(b, a, e) {
        if (b === a) return e;
        for (b = b.nextSibling; b;) {
            if (b === a) return - 1;
            b = b.nextSibling
        }
        return 1
    });
    var rb = y.createElement("div"),
    ea = "script" + (new Date).getTime(),
    Lb = y.documentElement;
    rb.innerHTML = "<a name='" + ea + "'/>";
    Lb.insertBefore(rb, Lb.firstChild);
    y.getElementById(ea) && (H.find.ID = function(b, a, e) {
        if ("undefined" != typeof a.getElementById && !e) return (a = a.getElementById(b[1])) ? a.id === b[1] || "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id").nodeValue === b[1] ? [a] : d: []
    },
    H.filter.ID = function(b, a) {
        var e = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id");
        return 1 === b.nodeType && e && e.nodeValue === a
    });
    Lb.removeChild(rb);
    var Lb = rb = null,
    Fa = y.createElement("div");
    Fa.appendChild(y.createComment(""));
    0 < Fa.getElementsByTagName("*").length && (H.find.TAG = function(b, a) {
        var e = a.getElementsByTagName(b[1]);
        if ("*" === b[1]) {
            for (var c = [], d = 0; e[d]; d++) 1 === e[d].nodeType && c.push(e[d]);
            e = c
        }
        return e
    });
    Fa.innerHTML = "<a href='#'></a>";
    Fa.firstChild && "undefined" != typeof Fa.firstChild.getAttribute && "#" !== Fa.firstChild.getAttribute("href") && (H.attrHandle.href = function(b) {
        return b.getAttribute("href", 2)
    });
    Fa = null;
    if (y.querySelectorAll) {
        var hc = D,
        la = y.createElement("div");
        la.innerHTML = "<p class='TEST'></p>";
        if (!la.querySelectorAll || 0 !== la.querySelectorAll(".TEST").length) {
            var D = function(b, a, e, c) {
                a = a || y;
                if (!c && !D.isXML(a)) {
                    var d = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                    if (d && (1 === a.nodeType || 9 === a.nodeType)) {
                        if (d[1]) return Y(a.getElementsByTagName(b), e);
                        if (d[2] && H.find.CLASS && a.getElementsByClassName) return Y(a.getElementsByClassName(d[2]), e)
                    }
                    if (9 === a.nodeType) {
                        if ("body" === b && a.body) return Y([a.body], e);
                        if (d && d[3]) {
                            var f = a.getElementById(d[3]);
                            if (!f || !f.parentNode) return Y([], e);
                            if (f.id === d[3]) return Y([f], e)
                        }
                        try {
                            return Y(a.querySelectorAll(b), e)
                        } catch(g) {}
                    } else if (1 === a.nodeType && "object" !== a.nodeName.toLowerCase()) {
                        var d = a,
                        j = (f = a.getAttribute("id")) || "__sizzle__",
                        k = a.parentNode,
                        l = /^\s*[+~]/.test(b);
                        f ? j = j.replace(/'/g, "\\$&") : a.setAttribute("id", j);
                        l && k && (a = a.parentNode);
                        try {
                            if (!l || k) return Y(a.querySelectorAll("[id='" + j + "'] " + b), e)
                        } catch(t) {} finally {
                            f || d.removeAttribute("id")
                        }
                    }
                }
                return hc(b, a, e, c)
            },
            sb;
            for (sb in hc) D[sb] = hc[sb];
            la = null
        }
    }
    var tb = y.documentElement,
    Ga = tb.matchesSelector || tb.mozMatchesSelector || tb.webkitMatchesSelector || tb.msMatchesSelector;
    if (Ga) {
        var Mc = !Ga.call(y.createElement("div"), "div"),
        ma = !1;
        try {
            Ga.call(y.documentElement, "[test!='']:sizzle")
        } catch(vd) {
            ma = !0
        }
        D.matchesSelector = function(b, a) {
            a = a.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!D.isXML(b)) try {
                if (ma || !H.match.PSEUDO.test(a) && !/!=/.test(a)) {
                    var e = Ga.call(b, a);
                    if (e || !Mc || b.document && 11 !== b.document.nodeType) return e
                }
            } catch(c) {}
            return 0 < D(a, null, null, [b]).length
        }
    }
    var Ha = y.createElement("div");
    Ha.innerHTML = "<div class='test e'></div><div class='test'></div>";
    Ha.getElementsByClassName && 0 !== Ha.getElementsByClassName("e").length && (Ha.lastChild.className = "e", 1 !== Ha.getElementsByClassName("e").length && (H.order.splice(1, 0, "CLASS"), H.find.CLASS = function(b, a, e) {
        if ("undefined" != typeof a.getElementsByClassName && !e) return a.getElementsByClassName(b[1])
    },
    Ha = null));
    y.documentElement.contains ? D.contains = function(b, a) {
        return b !== a && (b.contains ? b.contains(a) : true)
    }: y.documentElement.compareDocumentPosition ? D.contains = function(b, a) {
        return !! (b.compareDocumentPosition(a) & 16)
    }: D.contains = function() {
        return false
    };
    D.isXML = function(b) {
        return (b = (b ? b.ownerDocument || b: 0).documentElement) ? b.nodeName !== "HTML": false
    };
    var pb = function(b, a, e) {
        for (var c, d = [], f = "", a = a.nodeType ? [a] : a; c = H.match.PSEUDO.exec(b);) {
            f = f + c[0];
            b = b.replace(H.match.PSEUDO, "")
        }
        b = H.relative[b] ? b + "*": b;
        c = 0;
        for (var g = a.length; c < g; c++) D(b, a[c], d, e);
        return D.filter(f, d)
    };
    D.attr = e.attr;
    D.selectors.attrMap = {};
    e.find = D;
    e.expr = D.selectors;
    e.expr[":"] = e.expr.filters;
    e.unique = D.uniqueSort;
    e.text = D.getText;
    e.isXMLDoc = D.isXML;
    e.contains = D.contains;
    var Nc = /Until$/,
    Ia = /^(?:parents|prevUntil|prevAll)/,
    fa = /,/,
    $a = /^.[^:#\[\.,]*$/,
    ub = Array.prototype.slice,
    ic = e.expr.match.globalPOS,
    Oc = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    e.fn.extend({
        find: function(b) {
            var a = this,
            c, d;
            if (typeof b != "string") return e(b).filter(function() {
                c = 0;
                for (d = a.length; c < d; c++) if (e.contains(a[c], this)) return true
            });
            var f = this.pushStack("", "find", b),
            g,
            j,
            k;
            c = 0;
            for (d = this.length; c < d; c++) {
                g = f.length;
                e.find(b, this[c], f);
                if (c > 0) for (j = g; j < f.length; j++) for (k = 0; k < g; k++) if (f[k] === f[j]) {
                    f.splice(j--, 1);
                    break
                }
            }
            return f
        },
        has: function(b) {
            var a = e(b);
            return this.filter(function() {
                for (var b = 0,
                c = a.length; b < c; b++) if (e.contains(this, a[b])) return true
            })
        },
        not: function(b) {
            return this.pushStack(M(this, b, false), "not", b)
        },
        filter: function(b) {
            return this.pushStack(M(this, b, true), "filter", b)
        },
        is: function(b) {
            return !! b && (typeof b == "string" ? ic.test(b) ? e(b, this.context).index(this[0]) >= 0 : e.filter(b, this).length > 0 : this.filter(b).length > 0)
        },
        closest: function(b, a) {
            var c = [],
            d,
            f,
            g = this[0];
            if (e.isArray(b)) {
                for (f = 1; g && g.ownerDocument && g !== a;) {
                    for (d = 0; d < b.length; d++) e(g).is(b[d]) && c.push({
                        selector: b[d],
                        elem: g,
                        level: f
                    });
                    g = g.parentNode;
                    f++
                }
                return c
            }
            var j = ic.test(b) || typeof b != "string" ? e(b, a || this.context) : 0;
            d = 0;
            for (f = this.length; d < f; d++) for (g = this[d]; g;) {
                if (j ? j.index(g) > -1 : e.find.matchesSelector(g, b)) {
                    c.push(g);
                    break
                }
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === a || g.nodeType === 11) break
            }
            c = c.length > 1 ? e.unique(c) : c;
            return this.pushStack(c, "closest", b)
        },
        index: function(b) {
            return ! b ? this[0] && this[0].parentNode ? this.prevAll().length: -1 : typeof b == "string" ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this)
        },
        add: function(b, a) {
            var c = typeof b == "string" ? e(b, a) : e.makeArray(b && b.nodeType ? [b] : b),
            d = e.merge(this.get(), c);
            return this.pushStack(!c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 || !d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 ? d: e.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    e.each({
        parent: function(b) {
            return (b = b.parentNode) && b.nodeType !== 11 ? b: null
        },
        parents: function(b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function(b, a, c) {
            return e.dir(b, "parentNode", c)
        },
        next: function(b) {
            return e.nth(b, 2, "nextSibling")
        },
        prev: function(b) {
            return e.nth(b, 2, "previousSibling")
        },
        nextAll: function(b) {
            return e.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function(b, a, c) {
            return e.dir(b, "nextSibling", c)
        },
        prevUntil: function(b, a, c) {
            return e.dir(b, "previousSibling", c)
        },
        siblings: function(b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return e.sibling(b.firstChild)
        },
        contents: function(b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document: e.makeArray(b.childNodes)
        }
    },
    function(b, a) {
        e.fn[b] = function(c, d) {
            var f = e.map(this, a, c);
            Nc.test(b) || (d = c);
            d && typeof d == "string" && (f = e.filter(d, f));
            f = this.length > 1 && !Oc[b] ? e.unique(f) : f; (this.length > 1 || fa.test(d)) && Ia.test(b) && (f = f.reverse());
            return this.pushStack(f, b, ub.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(b, a, c) {
            c && (b = ":not(" + b + ")");
            return a.length === 1 ? e.find.matchesSelector(a[0], b) ? [a[0]] : [] : e.find.matches(b, a)
        },
        dir: function(b, a, c) {
            for (var f = [], b = b[a]; b && b.nodeType !== 9 && (c === d || b.nodeType !== 1 || !e(b).is(c));) {
                b.nodeType === 1 && f.push(b);
                b = b[a]
            }
            return f
        },
        nth: function(b, a, e) {
            for (var a = a || 1,
            c = 0; b; b = b[e]) if (b.nodeType === 1 && ++c === a) break;
            return b
        },
        sibling: function(b, a) {
            for (var e = []; b; b = b.nextSibling) b.nodeType === 1 && b !== a && e.push(b);
            return e
        }
    });
    var yc = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Mb = / jQuery\d+="(?:\d+|null)"/g,
    jc = /^\s+/,
    kc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    Wa = /<([\w:]+)/,
    kd = /<tbody/i,
    ld = /<|&#?\w+;/,
    lc = /<(?:script|style)/i,
    md = /<(?:script|object|embed|option|style)/i,
    Ja = RegExp("<(?:" + yc + ")[\\s/>]", "i"),
    Pc = /checked\s*(?:[^=]|=\s*.checked.)/i,
    mc = /\/(java|ecma)script/i,
    nd = /^\s*<!(?:\[CDATA\[|\-\-)/,
    U = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    Ka = K(y);
    U.optgroup = U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    e.support.htmlSerialize || (U._default = [1, "div<div>", "</div>"]);
    e.fn.extend({
        text: function(b) {
            return e.access(this,
            function(b) {
                return b === d ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(b))
            },
            null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (e.isFunction(b)) return this.each(function(a) {
                e(this).wrapAll(b.call(this, a))
            });
            if (this[0]) {
                var a = e(b, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && a.insertBefore(this[0]);
                a.map(function() {
                    for (var b = this; b.firstChild && b.firstChild.nodeType === 1;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(a) {
                e(this).wrapInner(b.call(this, a))
            }) : this.each(function() {
                var a = e(this),
                c = a.contents();
                c.length ? c.wrapAll(b) : a.append(b)
            })
        },
        wrap: function(b) {
            var a = e.isFunction(b);
            return this.each(function(c) {
                e(this).wrapAll(a ? b.call(this, c) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true,
            function(b) {
                this.nodeType === 1 && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, true,
            function(b) {
                this.nodeType === 1 && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false,
            function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                b.push.apply(b, this.toArray());
                return this.pushStack(b, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false,
            function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = this.pushStack(this, "after", arguments);
                b.push.apply(b, e.clean(arguments));
                return b
            }
        },
        remove: function(b, a) {
            for (var c = 0,
            d; (d = this[c]) != null; c++) if (!b || e.filter(b, [d]).length) { ! a && d.nodeType === 1 && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d]));
                d.parentNode && d.parentNode.removeChild(d)
            }
            return this
        },
        empty: function() {
            for (var b = 0,
            a; (a = this[b]) != null; b++) for (a.nodeType === 1 && e.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(b, a) {
            b = b == null ? false: b;
            a = a == null ? b: a;
            return this.map(function() {
                return e.clone(this, b, a)
            })
        },
        html: function(b) {
            return e.access(this,
            function(b) {
                var a = this[0] || {},
                c = 0,
                f = this.length;
                if (b === d) return a.nodeType === 1 ? a.innerHTML.replace(Mb, "") : null;
                if (typeof b == "string" && !lc.test(b) && (e.support.leadingWhitespace || !jc.test(b)) && !U[(Wa.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(kc, "<$1></$2>");
                    try {
                        for (; c < f; c++) {
                            a = this[c] || {};
                            a.nodeType === 1 && (e.cleanData(a.getElementsByTagName("*")), a.innerHTML = b)
                        }
                        a = 0
                    } catch(g) {}
                }
                a && this.empty().append(b)
            },
            null, b, arguments.length)
        },
        replaceWith: function(b) {
            if (this[0] && this[0].parentNode) {
                if (e.isFunction(b)) return this.each(function(a) {
                    var c = e(this),
                    d = c.html();
                    c.replaceWith(b.call(this, a, d))
                });
                typeof b != "string" && (b = e(b).detach());
                return this.each(function() {
                    var a = this.nextSibling,
                    c = this.parentNode;
                    e(this).remove();
                    a ? e(a).before(b) : e(c).append(b)
                })
            }
            return this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this
        },
        detach: function(b) {
            return this.remove(b, true)
        },
        domManip: function(b, a, c) {
            var f, g, j, k = b[0],
            l = [];
            if (!e.support.checkClone && arguments.length === 3 && typeof k == "string" && Pc.test(k)) return this.each(function() {
                e(this).domManip(b, a, c, true)
            });
            if (e.isFunction(k)) return this.each(function(f) {
                var g = e(this);
                b[0] = k.call(this, f, a ? g.html() : d);
                g.domManip(b, a, c)
            });
            if (this[0]) {
                j = k && k.parentNode;
                e.support.parentNode && j && j.nodeType === 11 && j.childNodes.length === this.length ? f = {
                    fragment: j
                }: f = e.buildFragment(b, this, l);
                j = f.fragment;
                j.childNodes.length === 1 ? g = j = j.firstChild: g = j.firstChild;
                if (g) {
                    a = a && e.nodeName(g, "tr");
                    g = 0;
                    for (var t = this.length,
                    B = t - 1; g < t; g++) c.call(a ? e.nodeName(this[g], "table") ? this[g].getElementsByTagName("tbody")[0] || this[g].appendChild(this[g].ownerDocument.createElement("tbody")) : this[g] : this[g], f.cacheable || t > 1 && g < B ? e.clone(j, true, true) : j)
                }
                l.length && e.each(l,
                function(b, a) {
                    a.src ? e.ajax({
                        type: "GET",
                        global: false,
                        url: a.src,
                        async: false,
                        dataType: "script"
                    }) : e.globalEval((a.text || a.textContent || a.innerHTML || "").replace(nd, "/*$0*/"));
                    a.parentNode && a.parentNode.removeChild(a)
                })
            }
            return this
        }
    });
    e.buildFragment = function(b, a, c) {
        var d, f, g, j, k = b[0];
        a && a[0] && (j = a[0].ownerDocument || a[0]);
        j.createDocumentFragment || (j = y);
        b.length === 1 && typeof k == "string" && k.length < 512 && j === y && k.charAt(0) === "<" && !md.test(k) && (e.support.checkClone || !Pc.test(k)) && (e.support.html5Clone || !Ja.test(k)) && (f = true, g = e.fragments[k], g && g !== 1 && (d = g));
        d || (d = j.createDocumentFragment(), e.clean(b, j, d, c));
        f && (e.fragments[k] = g ? d: 1);
        return {
            fragment: d,
            cacheable: f
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(b, a) {
        e.fn[b] = function(c) {
            var d = [],
            c = e(c),
            f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && c.length === 1) {
                c[a](this[0]);
                return this
            }
            for (var f = 0,
            g = c.length; f < g; f++) {
                var j = (f > 0 ? this.clone(true) : this).get();
                e(c[f])[a](j);
                d = d.concat(j)
            }
            return this.pushStack(d, b, c.selector)
        }
    });
    e.extend({
        clone: function(b, a, c) {
            var d, f, g;
            if (e.support.html5Clone || e.isXMLDoc(b) || !Ja.test("<" + b.nodeName + ">")) d = b.cloneNode(true);
            else {
                d = y.createElement("div");
                Ka.appendChild(d);
                d.innerHTML = b.outerHTML;
                d = d.firstChild
            }
            var j = d;
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !e.isXMLDoc(b)) {
                B(b, j);
                d = t(b);
                f = t(j);
                for (g = 0; d[g]; ++g) f[g] && B(d[g], f[g])
            }
            if (a) {
                A(b, j);
                if (c) {
                    d = t(b);
                    f = t(j);
                    for (g = 0; d[g]; ++g) A(d[g], f[g])
                }
            }
            return j
        },
        clean: function(b, a, c, d) {
            var f, g = [],
            a = a || y;
            typeof a.createElement == "undefined" && (a = a.ownerDocument || a[0] && a[0].ownerDocument || y);
            for (var j = 0,
            k; (k = b[j]) != null; j++) {
                typeof k == "number" && (k = k + "");
                if (k) {
                    if (typeof k == "string") if (ld.test(k)) {
                        k = k.replace(kc, "<$1></$2>");
                        f = (Wa.exec(k) || ["", ""])[1].toLowerCase();
                        var t = U[f] || U._default,
                        B = t[0],
                        u = a.createElement("div"),
                        A = Ka.childNodes,
                        m;
                        a === y ? Ka.appendChild(u) : K(a).appendChild(u);
                        for (u.innerHTML = t[1] + k + t[2]; B--;) u = u.lastChild;
                        if (!e.support.tbody) {
                            B = kd.test(k);
                            t = f === "table" && !B ? u.firstChild && u.firstChild.childNodes: t[1] === "<table>" && !B ? u.childNodes: [];
                            for (f = t.length - 1; f >= 0; --f) e.nodeName(t[f], "tbody") && !t[f].childNodes.length && t[f].parentNode.removeChild(t[f])
                        } ! e.support.leadingWhitespace && jc.test(k) && u.insertBefore(a.createTextNode(jc.exec(k)[0]), u.firstChild);
                        k = u.childNodes;
                        u && (u.parentNode.removeChild(u), A.length > 0 && (m = A[A.length - 1], m && m.parentNode && m.parentNode.removeChild(m)))
                    } else k = a.createTextNode(k);
                    var o;
                    if (!e.support.appendChecked) if (k[0] && typeof(o = k.length) == "number") for (f = 0; f < o; f++) l(k[f]);
                    else l(k);
                    k.nodeType ? g.push(k) : g = e.merge(g, k)
                }
            }
            if (c) {
                b = function(b) {
                    return ! b.type || mc.test(b.type)
                };
                for (j = 0; g[j]; j++) {
                    a = g[j];
                    if (d && e.nodeName(a, "script") && (!a.type || mc.test(a.type))) d.push(a.parentNode ? a.parentNode.removeChild(a) : a);
                    else {
                        if (a.nodeType === 1) {
                            k = e.grep(a.getElementsByTagName("script"), b);
                            g.splice.apply(g, [j + 1, 0].concat(k))
                        }
                        c.appendChild(a)
                    }
                }
            }
            return g
        },
        cleanData: function(b) {
            for (var a, c, d = e.cache,
            f = e.event.special,
            g = e.support.deleteExpando,
            j = 0,
            k; (k = b[j]) != null; j++) if (!k.nodeName || !e.noData[k.nodeName.toLowerCase()]) if (c = k[e.expando]) {
                if ((a = d[c]) && a.events) {
                    for (var l in a.events) f[l] ? e.event.remove(k, l) : e.removeEvent(k, l, a.handle);
                    a.handle && (a.handle.elem = null)
                }
                g ? delete k[e.expando] : k.removeAttribute && k.removeAttribute(e.expando);
                delete d[c]
            }
        }
    });
    var nc = /alpha\([^)]*\)/i,
    vb = /opacity=([^)]*)/,
    od = /([A-Z]|^ms)/g,
    Nb = /^[\-+]?(?:\d*\.)?\d+$/i,
    Ub = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    oc = /^([\-+])=([\-+.\de]+)/,
    pd = /^margin/,
    Qc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    ia = ["Top", "Right", "Bottom", "Left"],
    xa,
    Rc,
    P;
    e.fn.css = function(b, a) {
        return e.access(this,
        function(b, a, h) {
            return h !== d ? e.style(b, a, h) : e.css(b, a)
        },
        b, a, arguments.length > 1)
    };
    e.extend({
        cssHooks: {
            opacity: {
                get: function(b, a) {
                    if (a) {
                        var e = xa(b, "opacity");
                        return e === "" ? "1": e
                    }
                    return b.style.opacity
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
            "float": e.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(b, a, c, f) {
            if (b && b.nodeType !== 3 && b.nodeType !== 8 && b.style) {
                var g, j = e.camelCase(a),
                k = b.style,
                l = e.cssHooks[j],
                a = e.cssProps[j] || j;
                if (c === d) return l && "get" in l && (g = l.get(b, false, f)) !== d ? g: k[a];
                f = typeof c;
                f === "string" && (g = oc.exec(c)) && (c = +(g[1] + 1) * +g[2] + parseFloat(e.css(b, a)), f = "number");
                if (! (c == null || f === "number" && isNaN(c))) {
                    f === "number" && !e.cssNumber[j] && (c = c + "px");
                    if (!l || !("set" in l) || (c = l.set(b, c)) !== d) try {
                        k[a] = c
                    } catch(t) {}
                }
            }
        },
        css: function(b, a, c) {
            var f, g, a = e.camelCase(a);
            g = e.cssHooks[a];
            a = e.cssProps[a] || a;
            a === "cssFloat" && (a = "float");
            if (g && "get" in g && (f = g.get(b, true, c)) !== d) return f;
            if (xa) return xa(b, a)
        },
        swap: function(b, a, e) {
            var c = {},
            d;
            for (d in a) {
                c[d] = b.style[d];
                b.style[d] = a[d]
            }
            e = e.call(b);
            for (d in a) b.style[d] = c[d];
            return e
        }
    });
    e.curCSS = e.css;
    y.defaultView && y.defaultView.getComputedStyle && (Rc = function(b, a) {
        var c, d, f, g, j = b.style,
        a = a.replace(od, "-$1").toLowerCase(); (d = b.ownerDocument.defaultView) && (f = d.getComputedStyle(b, null)) && (c = f.getPropertyValue(a), c === "" && !e.contains(b.ownerDocument.documentElement, b) && (c = e.style(b, a))); ! e.support.pixelMargin && f && pd.test(a) && Ub.test(c) && (g = j.width, j.width = c, c = f.width, j.width = g);
        return c
    });
    y.documentElement.currentStyle && (P = function(b, a) {
        var e, c, d, f = b.currentStyle && b.currentStyle[a],
        g = b.style;
        f == null && g && (d = g[a]) && (f = d);
        Ub.test(f) && (e = g.left, c = b.runtimeStyle && b.runtimeStyle.left, c && (b.runtimeStyle.left = b.currentStyle.left), g.left = a === "fontSize" ? "1em": f, f = g.pixelLeft + "px", g.left = e, c && (b.runtimeStyle.left = c));
        return f === "" ? "auto": f
    });
    xa = Rc || P;
    e.each(["height", "width"],
    function(b, a) {
        e.cssHooks[a] = {
            get: function(b, c, d) {
                if (c) return b.offsetWidth !== 0 ? L(b, a, d) : e.swap(b, Qc,
                function() {
                    return L(b, a, d)
                })
            },
            set: function(b, a) {
                return Nb.test(a) ? a + "px": a
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, a) {
            return vb.test((a && b.currentStyle ? b.currentStyle.filter: b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": a ? "1": ""
        },
        set: function(b, a) {
            var c = b.style,
            d = b.currentStyle,
            f = e.isNumeric(a) ? "alpha(opacity=" + a * 100 + ")": "",
            g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (a >= 1 && e.trim(g.replace(nc, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = nc.test(g) ? g.replace(nc, f) : g + " " + f
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(b, a) {
                return e.swap(b, {
                    display: "inline-block"
                },
                function() {
                    return a ? xa(b, "margin-right") : b.style.marginRight
                })
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) {
        var a = b.offsetHeight;
        return b.offsetWidth === 0 && a === 0 || !e.support.reliableHiddenOffsets && (b.style && b.style.display || e.css(b, "display")) === "none"
    },
    e.expr.filters.visible = function(b) {
        return ! e.expr.filters.hidden(b)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(b, a) {
        e.cssHooks[b + a] = {
            expand: function(e) {
                for (var c = typeof e == "string" ? e.split(" ") : [e], d = {},
                e = 0; e < 4; e++) d[b + ia[e] + a] = c[e] || c[e - 2] || c[0];
                return d
            }
        }
    });
    var Sc = /%20/g,
    xc = /\[\]$/,
    pc = /\r?\n/g,
    Tc = /#.*$/,
    Uc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    qc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    rc = /^(?:GET|HEAD)$/,
    sc = /^\/\//,
    Ob = /\?/,
    ga = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    na = /^(?:select|textarea)/i,
    Z = /\s+/,
    oa = /([?&])_=[^&]*/,
    V = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    wb = e.fn.load,
    zb = {},
    tc = {},
    N, La, Vc = ["*/"] + ["*"];
    try {
        N = x.href
    } catch(xb) {
        N = y.createElement("a"),
        N.href = "",
        N = N.href
    }
    La = V.exec(N.toLowerCase()) || [];
    e.fn.extend({
        load: function(b, a, c) {
            if (typeof b != "string" && wb) return wb.apply(this, arguments);
            if (!this.length) return this;
            var f = b.indexOf(" ");
            if (f >= 0) var g = b.slice(f, b.length),
            b = b.slice(0, f);
            f = "GET";
            a && (e.isFunction(a) ? (c = a, a = d) : typeof a == "object" && (a = e.param(a, e.ajaxSettings.traditional), f = "POST"));
            var j = this;
            e.ajax({
                url: b,
                type: f,
                dataType: "html",
                data: a,
                complete: function(b, a, h) {
                    h = b.responseText;
                    b.isResolved() && (b.done(function(b) {
                        h = b
                    }), j.html(g ? e("<div>").append(h.replace(ga, "")).find(g) : h));
                    c && j.each(c, [h, a, b])
                }
            });
            return this
        },
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || na.test(this.nodeName) || qc.test(this.type))
            }).map(function(b, a) {
                var c = e(this).val();
                return c == null ? null: e.isArray(c) ? e.map(c,
                function(b) {
                    return {
                        name: a.name,
                        value: b.replace(pc, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: c.replace(pc, "\r\n")
                }
            }).get()
        }
    });
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(b, a) {
        e.fn[a] = function(b) {
            return this.on(a, b)
        }
    });
    e.each(["get", "post"],
    function(b, a) {
        e[a] = function(b, c, f, g) {
            e.isFunction(c) && (g = g || f, f = c, c = d);
            return e.ajax({
                type: a,
                url: b,
                data: c,
                success: f,
                dataType: g
            })
        }
    });
    e.extend({
        getScript: function(b, a) {
            return e.get(b, d, a, "script")
        },
        getJSON: function(b, a, c) {
            return e.get(b, a, c, "json")
        },
        ajaxSetup: function(b, a) {
            a ? q(b, e.ajaxSettings) : (a = b, b = e.ajaxSettings);
            q(b, a);
            return b
        },
        ajaxSettings: {
            url: N,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(La[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Vc
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
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: F(zb),
        ajaxTransport: F(tc),
        ajax: function(b, a) {
            function c(b, a, h, ha) {
                if (p !== 2) {
                    p = 2;
                    C && clearTimeout(C);
                    K = d;
                    m = ha || "";
                    x.readyState = b > 0 ? 4 : 0;
                    var n, B, A, ha = a;
                    if (h) {
                        var o = f,
                        y = x,
                        M = o.contents,
                        r = o.dataTypes,
                        z = o.responseFields,
                        F, G, R, D;
                        for (G in z) G in h && (y[z[G]] = h[G]);
                        for (; r[0] === "*";) {
                            r.shift();
                            F === d && (F = o.mimeType || y.getResponseHeader("content-type"))
                        }
                        if (F) for (G in M) if (M[G] && M[G].test(F)) {
                            r.unshift(G);
                            break
                        }
                        if (r[0] in h) R = r[0];
                        else {
                            for (G in h) {
                                if (!r[0] || o.converters[G + " " + r[0]]) {
                                    R = G;
                                    break
                                }
                                D || (D = G)
                            }
                            R = R || D
                        }
                        if (R) {
                            R !== r[0] && r.unshift(R);
                            h = h[R]
                        } else h = void 0
                    } else h = d;
                    if (b >= 200 && b < 300 || b === 304) {
                        if (f.ifModified) {
                            if (F = x.getResponseHeader("Last-Modified")) e.lastModified[u] = F;
                            if (F = x.getResponseHeader("Etag")) e.etag[u] = F
                        }
                        if (b === 304) {
                            ha = "notmodified";
                            n = true
                        } else try {
                            F = f;
                            F.dataFilter && (h = F.dataFilter(h, F.dataType));
                            var L = F.dataTypes;
                            G = {};
                            var E, ra, zd = L.length,
                            w, Xa = L[0],
                            Pb,
                            H,
                            aa,
                            J,
                            S;
                            for (E = 1; E < zd; E++) {
                                if (E === 1) for (ra in F.converters) typeof ra == "string" && (G[ra.toLowerCase()] = F.converters[ra]);
                                Pb = Xa;
                                Xa = L[E];
                                if (Xa === "*") Xa = Pb;
                                else if (Pb !== "*" && Pb !== Xa) {
                                    H = Pb + " " + Xa;
                                    aa = G[H] || G["* " + Xa];
                                    if (!aa) {
                                        S = d;
                                        for (J in G) {
                                            w = J.split(" ");
                                            if (w[0] === Pb || w[0] === "*") if (S = G[w[1] + " " + Xa]) {
                                                J = G[J];
                                                J === true ? aa = S: S === true && (aa = J);
                                                break
                                            }
                                        }
                                    } ! aa && !S && e.error("No conversion from " + H.replace(" ", " to "));
                                    aa !== true && (h = aa ? aa(h) : S(J(h)))
                                }
                            }
                            B = h;
                            ha = "success";
                            n = true
                        } catch(N) {
                            ha = "parsererror";
                            A = N
                        }
                    } else {
                        A = ha;
                        if (!ha || b) {
                            ha = "error";
                            b < 0 && (b = 0)
                        }
                    }
                    x.status = b;
                    x.statusText = "" + (a || ha);
                    n ? k.resolveWith(g, [B, ha, x]) : k.rejectWith(g, [x, ha, A]);
                    x.statusCode(t);
                    t = d;
                    q && j.trigger("ajax" + (n ? "Success": "Error"), [x, f, n ? B: A]);
                    l.fireWith(g, [x, ha]);
                    q && (j.trigger("ajaxComplete", [x, f]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            typeof b == "object" && (a = b, b = d);
            var a = a || {},
            f = e.ajaxSetup({},
            a),
            g = f.context || f,
            j = g !== f && (g.nodeType || g instanceof e) ? e(g) : e.event,
            k = e.Deferred(),
            l = e.Callbacks("once memory"),
            t = f.statusCode || {},
            u,
            B = {},
            A = {},
            m,
            o,
            K,
            C,
            y,
            p = 0,
            q,
            M,
            x = {
                readyState: 0,
                setRequestHeader: function(b, a) {
                    if (!p) {
                        var e = b.toLowerCase(),
                        b = A[e] = A[e] || b;
                        B[b] = a
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return p === 2 ? m: null
                },
                getResponseHeader: function(b) {
                    var a;
                    if (p === 2) {
                        if (!o) for (o = {}; a = Uc.exec(m);) o[a[1].toLowerCase()] = a[2];
                        a = o[b.toLowerCase()]
                    }
                    return a === d ? null: a
                },
                overrideMimeType: function(b) {
                    p || (f.mimeType = b);
                    return this
                },
                abort: function(b) {
                    b = b || "abort";
                    K && K.abort(b);
                    c(0, b);
                    return this
                }
            };
            k.promise(x);
            x.success = x.done;
            x.error = x.fail;
            x.complete = l.add;
            x.statusCode = function(b) {
                if (b) {
                    var a;
                    if (p < 2) for (a in b) t[a] = [t[a], b[a]];
                    else {
                        a = b[x.status];
                        x.then(a, a)
                    }
                }
                return this
            };
            f.url = ((b || f.url) + "").replace(Tc, "").replace(sc, La[1] + "//");
            f.dataTypes = e.trim(f.dataType || "*").toLowerCase().split(Z);
            f.crossDomain == null && (y = V.exec(f.url.toLowerCase()), f.crossDomain = !(!y || y[1] == La[1] && y[2] == La[2] && (y[3] || (y[1] === "http:" ? 80 : 443)) == (La[3] || (La[1] === "http:" ? 80 : 443))));
            f.data && f.processData && typeof f.data != "string" && (f.data = e.param(f.data, f.traditional));
            z(zb, f, a, x);
            if (p === 2) return false;
            q = f.global;
            f.type = f.type.toUpperCase();
            f.hasContent = !rc.test(f.type);
            q && e.active++===0 && e.event.trigger("ajaxStart");
            if (!f.hasContent) {
                f.data && (f.url = f.url + ((Ob.test(f.url) ? "&": "?") + f.data), delete f.data);
                u = f.url;
                if (f.cache === false) {
                    y = e.now();
                    var r = f.url.replace(oa, "$1_=" + y);
                    f.url = r + (r === f.url ? (Ob.test(f.url) ? "&": "?") + "_=" + y: "")
                }
            } (f.data && f.hasContent && f.contentType !== false || a.contentType) && x.setRequestHeader("Content-Type", f.contentType);
            f.ifModified && (u = u || f.url, e.lastModified[u] && x.setRequestHeader("If-Modified-Since", e.lastModified[u]), e.etag[u] && x.setRequestHeader("If-None-Match", e.etag[u]));
            x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + Vc + "; q=0.01": "") : f.accepts["*"]);
            for (M in f.headers) x.setRequestHeader(M, f.headers[M]);
            if (f.beforeSend && (f.beforeSend.call(g, x, f) === false || p === 2)) {
                x.abort();
                return false
            }
            for (M in {
                success: 1,
                error: 1,
                complete: 1
            }) x[M](f[M]);
            if (K = z(tc, f, a, x)) {
                x.readyState = 1;
                q && j.trigger("ajaxSend", [x, f]);
                f.async && f.timeout > 0 && (C = setTimeout(function() {
                    x.abort("timeout")
                },
                f.timeout));
                try {
                    p = 1;
                    K.send(B, c)
                } catch(F) {
                    if (p < 2) c( - 1, F);
                    else throw F;
                }
            } else c( - 1, "No Transport");
            return x
        },
        param: function(b, a) {
            var c = [],
            f = function(b, a) {
                a = e.isFunction(a) ? a() : a;
                c[c.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
            };
            a === d && (a = e.ajaxSettings.traditional);
            if (e.isArray(b) || b.jquery && !e.isPlainObject(b)) e.each(b,
            function() {
                f(this.name, this.value)
            });
            else for (var g in b) o(g, b[g], a, f);
            return c.join("&").replace(Sc, "+")
        }
    });
    e.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Qb = e.now(),
    Ma = /(\=)\?(&|$)|\?\?/i;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return e.expando + "_" + Qb++
        }
    });
    e.ajaxPrefilter("json jsonp",
    function(b, c, f) {
        c = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== false && (Ma.test(b.url) || c && Ma.test(b.data))) {
            var d, g = b.jsonpCallback = e.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            j = a[g],
            k = b.url,
            l = b.data,
            t = "$1" + g + "$2";
            b.jsonp !== false && (k = k.replace(Ma, t), b.url === k && (c && (l = l.replace(Ma, t)), b.data === l && (k = k + ((/\?/.test(k) ? "&": "?") + b.jsonp + "=" + g))));
            b.url = k;
            b.data = l;
            a[g] = function(b) {
                d = [b]
            };
            f.always(function() {
                a[g] = j;
                d && e.isFunction(j) && a[g](d[0])
            });
            b.converters["script json"] = function() {
                d || e.error(g + " was not called");
                return d[0]
            };
            b.dataTypes[0] = "json";
            return "script"
        }
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                e.globalEval(b);
                return b
            }
        }
    });
    e.ajaxPrefilter("script",
    function(b) {
        b.cache === d && (b.cache = false);
        b.crossDomain && (b.type = "GET", b.global = false)
    });
    e.ajaxTransport("script",
    function(b) {
        if (b.crossDomain) {
            var a, e = y.head || y.getElementsByTagName("head")[0] || y.documentElement;
            return {
                send: function(c, f) {
                    a = y.createElement("script");
                    a.async = "async";
                    b.scriptCharset && (a.charset = b.scriptCharset);
                    a.src = b.url;
                    a.onload = a.onreadystatechange = function(b, c) {
                        if (c || !a.readyState || /loaded|complete/.test(a.readyState)) {
                            a.onload = a.onreadystatechange = null;
                            e && a.parentNode && e.removeChild(a);
                            a = d;
                            c || f(200, "success")
                        }
                    };
                    e.insertBefore(a, e.firstChild)
                },
                abort: function() {
                    a && a.onload(0, 1)
                }
            }
        }
    });
    var Rb = a.ActiveXObject ?
    function() {
        for (var b in pa) pa[b](0, 1)
    }: !1,
    uc = 0,
    pa;
    e.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        var b;
        if (! (b = !this.isLocal && m())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch(e) {}
            b = void 0
        }
        return b
    }: m;
    var Sb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!Sb,
        cors: !!Sb && "withCredentials" in Sb
    });
    e.support.ajax && e.ajaxTransport(function(b) {
        if (!b.crossDomain || e.support.cors) {
            var c;
            return {
                send: function(f, g) {
                    var j = b.xhr(),
                    k,
                    l;
                    b.username ? j.open(b.type, b.url, b.async, b.username, b.password) : j.open(b.type, b.url, b.async);
                    if (b.xhrFields) for (l in b.xhrFields) j[l] = b.xhrFields[l];
                    b.mimeType && j.overrideMimeType && j.overrideMimeType(b.mimeType); ! b.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (l in f) j.setRequestHeader(l, f[l])
                    } catch(t) {}
                    j.send(b.hasContent && b.data || null);
                    c = function(a, f) {
                        var l, t, u, B, n;
                        try {
                            if (c && (f || j.readyState === 4)) {
                                c = d;
                                k && (j.onreadystatechange = e.noop, Rb && delete pa[k]);
                                if (f) j.readyState !== 4 && j.abort();
                                else {
                                    l = j.status;
                                    u = j.getAllResponseHeaders();
                                    B = {}; (n = j.responseXML) && n.documentElement && (B.xml = n);
                                    try {
                                        B.text = j.responseText
                                    } catch(A) {}
                                    try {
                                        t = j.statusText
                                    } catch(m) {
                                        t = ""
                                    } ! l && b.isLocal && !b.crossDomain ? l = B.text ? 200 : 404 : l === 1223 && (l = 204)
                                }
                            }
                        } catch(o) {
                            f || g( - 1, o)
                        }
                        B && g(l, t, B, u)
                    }; ! b.async || j.readyState === 4 ? c() : (k = ++uc, Rb && (pa || (pa = {},
                    e(a).unload(Rb)), pa[k] = c), j.onreadystatechange = c)
                },
                abort: function() {
                    c && c(0, 1)
                }
            }
        }
    });
    var Tb = {},
    ca, Oa, qd = /^(?:toggle|show|hide)$/,
    rd = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    Na, yb = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    Za;
    e.fn.extend({
        show: function(b, a, c) {
            var f;
            if (b || b === 0) return this.animate(j("show", 3), b, a, c);
            a = 0;
            for (c = this.length; a < c; a++) {
                b = this[a];
                b.style && (f = b.style.display, !e._data(b, "olddisplay") && f === "none" && (f = b.style.display = ""), (f === "" && e.css(b, "display") === "none" || !e.contains(b.ownerDocument.documentElement, b)) && e._data(b, "olddisplay", g(b.nodeName)))
            }
            for (a = 0; a < c; a++) {
                b = this[a];
                if (b.style) {
                    f = b.style.display;
                    if (f === "" || f === "none") b.style.display = e._data(b, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(b, a, c) {
            if (b || b === 0) return this.animate(j("hide", 3), b, a, c);
            for (var f, a = 0,
            c = this.length; a < c; a++) {
                b = this[a];
                b.style && (f = e.css(b, "display"), f !== "none" && !e._data(b, "olddisplay") && e._data(b, "olddisplay", f))
            }
            for (a = 0; a < c; a++) this[a].style && (this[a].style.display = "none");
            return this
        },
        _toggle: e.fn.toggle,
        toggle: function(b, a, c) {
            var f = typeof b == "boolean";
            e.isFunction(b) && e.isFunction(a) ? this._toggle.apply(this, arguments) : b == null || f ? this.each(function() {
                var a = f ? b: e(this).is(":hidden");
                e(this)[a ? "show": "hide"]()
            }) : this.animate(j("toggle", 3), b, a, c);
            return this
        },
        fadeTo: function(b, a, e, c) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: a
            },
            b, e, c)
        },
        animate: function(b, a, c, f) {
            function d() {
                j.queue === false && e._mark(this);
                var a = e.extend({},
                j),
                c = this.nodeType === 1,
                f = c && e(this).is(":hidden"),
                h,
                k,
                l,
                t,
                u,
                B,
                n,
                s,
                A;
                a.animatedProperties = {};
                for (l in b) {
                    h = e.camelCase(l);
                    l !== h && (b[h] = b[l], delete b[l]);
                    if ((k = e.cssHooks[h]) && "expand" in k) {
                        t = k.expand(b[h]);
                        delete b[h];
                        for (l in t) l in b || (b[l] = t[l])
                    }
                }
                for (h in b) {
                    k = b[h];
                    e.isArray(k) ? (a.animatedProperties[h] = k[1], k = b[h] = k[0]) : a.animatedProperties[h] = a.specialEasing && a.specialEasing[h] || a.easing || "swing";
                    if (k === "hide" && f || k === "show" && !f) return a.complete.call(this);
                    c && (h === "height" || h === "width") && (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], e.css(this, "display") === "inline" && e.css(this, "float") === "none" && (!e.support.inlineBlockNeedsLayout || g(this.nodeName) === "inline" ? this.style.display = "inline-block": this.style.zoom = 1))
                }
                a.overflow != null && (this.style.overflow = "hidden");
                for (l in b) {
                    c = new e.fx(this, a, l);
                    k = b[l];
                    qd.test(k) ? (A = e._data(this, "toggle" + l) || (k === "toggle" ? f ? "show": "hide": 0), A ? (e._data(this, "toggle" + l, A === "show" ? "hide": "show"), c[A]()) : c[k]()) : (u = rd.exec(k), B = c.cur(), u ? (n = parseFloat(u[2]), s = u[3] || (e.cssNumber[l] ? "": "px"), s !== "px" && (e.style(this, l, (n || 1) + s), B = (n || 1) / c.cur() * B, e.style(this, l, B + s)), u[1] && (n = (u[1] === "-=" ? -1 : 1) * n + B), c.custom(B, n, s)) : c.custom(B, k, ""))
                }
                return true
            }
            var j = e.speed(a, c, f);
            if (e.isEmptyObject(b)) return this.each(j.complete, [false]);
            b = e.extend({},
            b);
            return j.queue === false ? this.each(d) : this.queue(j.queue, d)
        },
        stop: function(b, a, c) {
            typeof b != "string" && (c = a, a = b, b = d);
            a && b !== false && this.queue(b || "fx", []);
            return this.each(function() {
                var a, f = false,
                d = e.timers,
                h = e._data(this);
                c || e._unmark(true, this);
                if (b == null) for (a in h) {
                    if (h[a] && h[a].stop && a.indexOf(".run") === a.length - 4) {
                        var g = h[a];
                        e.removeData(this, a, true);
                        g.stop(c)
                    }
                } else if (h[a = b + ".run"] && h[a].stop) {
                    h = h[a];
                    e.removeData(this, a, true);
                    h.stop(c)
                }
                for (a = d.length; a--;) d[a].elem === this && (b == null || d[a].queue === b) && (c ? d[a](true) : d[a].saveState(), f = true, d.splice(a, 1)); (!c || !f) && e.dequeue(this, b)
            })
        }
    });
    e.each({
        slideDown: j("show", 1),
        slideUp: j("hide", 1),
        slideToggle: j("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(b, a) {
        e.fn[b] = function(b, c, e) {
            return this.animate(a, b, c, e)
        }
    });
    e.extend({
        speed: function(b, a, c) {
            var f = b && typeof b == "object" ? e.extend({},
            b) : {
                complete: c || !c && a || e.isFunction(b) && b,
                duration: b,
                easing: c && a || a && !e.isFunction(a) && a
            };
            f.duration = e.fx.off ? 0 : typeof f.duration == "number" ? f.duration: f.duration in e.fx.speeds ? e.fx.speeds[f.duration] : e.fx.speeds._default;
            if (f.queue == null || f.queue === true) f.queue = "fx";
            f.old = f.complete;
            f.complete = function(b) {
                e.isFunction(f.old) && f.old.call(this);
                f.queue ? e.dequeue(this, f.queue) : b !== false && e._unmark(this)
            };
            return f
        },
        easing: {
            linear: function(b) {
                return b
            },
            swing: function(b) {
                return - Math.cos(b * Math.PI) / 2 + 0.5
            }
        },
        timers: [],
        fx: function(b, a, c) {
            this.options = a;
            this.elem = b;
            this.prop = c;
            a.orig = a.orig || {}
        }
    });
    e.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this); (e.fx.step[this.prop] || e.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var b, a = e.css(this.elem, this.prop);
            return isNaN(b = parseFloat(a)) ? !a || a === "auto" ? 0 : a: b
        },
        custom: function(b, a, c) {
            function f(b) {
                return g.step(b)
            }
            var g = this,
            j = e.fx;
            this.startTime = Za || k();
            this.end = a;
            this.now = this.start = b;
            this.pos = this.state = 0;
            this.unit = c || this.unit || (e.cssNumber[this.prop] ? "": "px");
            f.queue = this.options.queue;
            f.elem = this.elem;
            f.saveState = function() {
                e._data(g.elem, "fxshow" + g.prop) === d && (g.options.hide ? e._data(g.elem, "fxshow" + g.prop, g.start) : g.options.show && e._data(g.elem, "fxshow" + g.prop, g.end))
            };
            f() && e.timers.push(f) && !Na && (Na = setInterval(j.tick, j.interval))
        },
        show: function() {
            var b = e._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = b || e.style(this.elem, this.prop);
            this.options.show = true;
            b !== d ? this.custom(this.cur(), b) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            e(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = e._data(this.elem, "fxshow" + this.prop) || e.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(b) {
            var a, c, f = Za || k(),
            d = true,
            g = this.elem,
            j = this.options;
            if (b || f >= j.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                j.animatedProperties[this.prop] = true;
                for (a in j.animatedProperties) j.animatedProperties[a] !== true && (d = false);
                if (d) {
                    j.overflow != null && !e.support.shrinkWrapBlocks && e.each(["", "X", "Y"],
                    function(b, a) {
                        g.style["overflow" + a] = j.overflow[b]
                    });
                    j.hide && e(g).hide();
                    if (j.hide || j.show) for (a in j.animatedProperties) {
                        e.style(g, a, j.orig[a]);
                        e.removeData(g, "fxshow" + a, true);
                        e.removeData(g, "toggle" + a, true)
                    } (b = j.complete) && (j.complete = false, b.call(g))
                }
                return false
            }
            j.duration == Infinity ? this.now = f: (c = f - this.startTime, this.state = c / j.duration, this.pos = e.easing[j.animatedProperties[this.prop]](this.state, c, 0, 1, j.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return true
        }
    };
    e.extend(e.fx, {
        tick: function() {
            for (var b, a = e.timers,
            c = 0; c < a.length; c++) {
                b = a[c]; ! b() && a[c] === b && a.splice(c--, 1)
            }
            a.length || e.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(Na);
            Na = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(b) {
                e.style(b.elem, "opacity", b.now)
            },
            _default: function(b) {
                b.elem.style && b.elem.style[b.prop] != null ? b.elem.style[b.prop] = b.now + b.unit: b.elem[b.prop] = b.now
            }
        }
    });
    e.each(yb.concat.apply([], yb),
    function(b, a) {
        a.indexOf("margin") && (e.fx.step[a] = function(b) {
            e.style(b.elem, a, Math.max(0, b.now) + b.unit)
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) {
        return e.grep(e.timers,
        function(a) {
            return b === a.elem
        }).length
    });
    var Ya, vc = /^t(?:able|d|h)$/i,
    wc = /^(?:body|html)$/i;
    "getBoundingClientRect" in y.documentElement ? Ya = function(b, a, f, d) {
        try {
            d = b.getBoundingClientRect()
        } catch(g) {}
        if (!d || !e.contains(f, b)) return d ? {
            top: d.top,
            left: d.left
        }: {
            top: 0,
            left: 0
        };
        b = a.body;
        a = c(a);
        return {
            top: d.top + (a.pageYOffset || e.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
            left: d.left + (a.pageXOffset || e.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
        }
    }: Ya = function(b, a, c) {
        var f, d = b.offsetParent,
        g = a.body;
        f = (a = a.defaultView) ? a.getComputedStyle(b, null) : b.currentStyle;
        for (var j = b.offsetTop,
        k = b.offsetLeft; (b = b.parentNode) && b !== g && b !== c;) {
            if (e.support.fixedPosition && f.position === "fixed") break;
            f = a ? a.getComputedStyle(b, null) : b.currentStyle;
            j = j - b.scrollTop;
            k = k - b.scrollLeft;
            b === d && (j = j + b.offsetTop, k = k + b.offsetLeft, e.support.doesNotAddBorder && (!e.support.doesAddBorderForTableAndCells || !vc.test(b.nodeName)) && (j = j + (parseFloat(f.borderTopWidth) || 0), k = k + (parseFloat(f.borderLeftWidth) || 0)), d = b.offsetParent);
            e.support.subtractsBorderForOverflowNotVisible && f.overflow !== "visible" && (j = j + (parseFloat(f.borderTopWidth) || 0), k = k + (parseFloat(f.borderLeftWidth) || 0))
        }
        if (f.position === "relative" || f.position === "static") {
            j = j + g.offsetTop;
            k = k + g.offsetLeft
        }
        e.support.fixedPosition && f.position === "fixed" && (j = j + Math.max(c.scrollTop, g.scrollTop), k = k + Math.max(c.scrollLeft, g.scrollLeft));
        return {
            top: j,
            left: k
        }
    };
    e.fn.offset = function(b) {
        if (arguments.length) return b === d ? this: this.each(function(a) {
            e.offset.setOffset(this, b, a)
        });
        var a = this[0],
        c = a && a.ownerDocument;
        return ! c ? null: a === c.body ? e.offset.bodyOffset(a) : Ya(a, c, c.documentElement)
    };
    e.offset = {
        bodyOffset: function(b) {
            var a = b.offsetTop,
            c = b.offsetLeft;
            e.support.doesNotIncludeMarginInBodyOffset && (a = a + (parseFloat(e.css(b, "marginTop")) || 0), c = c + (parseFloat(e.css(b, "marginLeft")) || 0));
            return {
                top: a,
                left: c
            }
        },
        setOffset: function(b, a, c) {
            var f = e.css(b, "position");
            f === "static" && (b.style.position = "relative");
            var d = e(b),
            g = d.offset(),
            j = e.css(b, "top"),
            k = e.css(b, "left"),
            l = {},
            t = {},
            u,
            B; (f === "absolute" || f === "fixed") && e.inArray("auto", [j, k]) > -1 ? (t = d.position(), u = t.top, B = t.left) : (u = parseFloat(j) || 0, B = parseFloat(k) || 0);
            e.isFunction(a) && (a = a.call(b, c, g));
            a.top != null && (l.top = a.top - g.top + u);
            a.left != null && (l.left = a.left - g.left + B);
            "using" in a ? a.using.call(b, l) : d.css(l)
        }
    };
    e.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var b = this[0],
            a = this.offsetParent(),
            c = this.offset(),
            f = wc.test(a[0].nodeName) ? {
                top: 0,
                left: 0
            }: a.offset();
            c.top = c.top - (parseFloat(e.css(b, "marginTop")) || 0);
            c.left = c.left - (parseFloat(e.css(b, "marginLeft")) || 0);
            f.top = f.top + (parseFloat(e.css(a[0], "borderTopWidth")) || 0);
            f.left = f.left + (parseFloat(e.css(a[0], "borderLeftWidth")) || 0);
            return {
                top: c.top - f.top,
                left: c.left - f.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || y.body; b && !wc.test(b.nodeName) && e.css(b, "position") === "static";) b = b.offsetParent;
                return b
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(b, a) {
        var f = /Y/.test(a);
        e.fn[b] = function(g) {
            return e.access(this,
            function(b, g, j) {
                var k = c(b);
                if (j === d) return k ? a in k ? k[a] : e.support.boxModel && k.document.documentElement[g] || k.document.body[g] : b[g];
                k ? k.scrollTo(f ? e(k).scrollLeft() : j, f ? j: e(k).scrollTop()) : b[g] = j
            },
            b, g, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    },
    function(b, a) {
        var c = "client" + b,
        f = "scroll" + b,
        g = "offset" + b;
        e.fn["inner" + b] = function() {
            var b = this[0];
            return b ? b.style ? parseFloat(e.css(b, a, "padding")) : this[a]() : null
        };
        e.fn["outer" + b] = function(b) {
            var c = this[0];
            return c ? c.style ? parseFloat(e.css(c, a, b ? "margin": "border")) : this[a]() : null
        };
        e.fn[a] = function(b) {
            return e.access(this,
            function(b, a, h) {
                if (e.isWindow(b)) {
                    a = b.document;
                    b = a.documentElement[c];
                    return e.support.boxModel && b || a.body && a.body[c] || b
                }
                if (b.nodeType === 9) {
                    a = b.documentElement;
                    return a[c] >= a[f] ? a[c] : Math.max(b.body[f], a[f], b.body[g], a[g])
                }
                if (h === d) {
                    b = e.css(b, a);
                    a = parseFloat(b);
                    return e.isNumeric(a) ? a: b
                }
                e(b).css(a, h)
            },
            a, b, arguments.length, null)
        }
    });
    a.jQuery = a.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return e
    })
})(window); (function(a) {
    a.browserTest = function(d, c) {
        var g = function(a, c) {
            for (var d = 0; d < c.length; d += 1) a = a.replace(c[d][0], c[d][1]);
            return a
        },
        j = function(c, d, j, o) {
            d = {
                name: g((d.exec(c) || ["unknown", "unknown"])[1], j)
            };
            d[d.name] = !0;
            d.version = (o.exec(c) || ["X", "X", "X", "X"])[3];
            d.name.match(/safari/) && 400 < d.version && (d.version = "2.0");
            "presto" === d.name && (d.version = 9.27 < a.browser.version ? "futhark": "linear_b");
            d.versionNumber = parseFloat(d.version, 10) || 0;
            d.versionX = "X" !== d.version ? (d.version + "").substr(0, 1) : "X";
            d.className = d.name + d.versionX;
            return d
        },
        d = (d.match(/Opera|Navigator|Minefield|KHTML|Chrome/) ? g(d, [[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ""], ["Chrome Safari", "Chrome"], ["KHTML", "Konqueror"], ["Minefield", "Firefox"], ["Navigator", "Netscape"]]) : d).toLowerCase();
        a.browser = a.extend(!c ? a.browser: {},
        j(d, /(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/, [], /(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));
        a.layout = j(d, /(gecko|konqueror|msie|opera|webkit)/, [["konqueror", "khtml"], ["msie", "trident"], ["opera", "presto"]], /(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);
        a.os = {
            name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || ["unknown"])[0].replace("sunos", "solaris")
        };
        c || a("html").addClass([a.os.name, a.browser.name, a.browser.className, a.layout.name, a.layout.className].join(" "))
    };
    a.browserTest(navigator.userAgent)
})(jQuery);
jQuery.cookie = function(a, d, c) {
    if ("undefined" != typeof d) {
        c = c || {};
        null === d && (d = "", c.expires = -1);
        var g = "";
        if (c.expires && ("number" == typeof c.expires || c.expires.toUTCString))"number" == typeof c.expires ? (g = new Date, g.setTime(g.getTime() + 864E5 * c.expires)) : g = c.expires,
        g = "; expires=" + g.toUTCString();
        var j = c.path ? "; path=" + c.path: "",
        f = c.domain ? "; domain=" + c.domain: "",
        c = c.secure ? "; secure": "";
        document.cookie = [a, "=", encodeURIComponent(d), g, j, f, c].join("")
    } else {
        d = null;
        if (document.cookie && "" != document.cookie) {
            c = document.cookie.split(";");
            for (g = 0; g < c.length; g++) if (j = jQuery.trim(c[g]), j.substring(0, a.length + 1) == a + "=") {
                d = decodeURIComponent(j.substring(a.length + 1));
                break
            }
        }
        return d
    }
}; (function(a) {
    var d = a.browser.msie && 6 === parseInt(a.browser.version) && "object" !== typeof window.XMLHttpRequest,
    c = a.browser.msie && 7 === parseInt(a.browser.version),
    g = null,
    j = [];
    a.modal = function(c, d) {
        return a.modal.impl.init(c, d)
    };
    a.modal.close = function() {
        a.modal.impl.close()
    };
    a.modal.focus = function(c) {
        a.modal.impl.focus(c)
    };
    a.modal.setContainerDimensions = function() {
        a.modal.impl.setContainerDimensions()
    };
    a.modal.setPosition = function() {
        a.modal.impl.setPosition()
    };
    a.modal.update = function(c, d) {
        a.modal.impl.update(c, d)
    };
    a.fn.modal = function(c) {
        return a.modal.impl.init(this, c)
    };
    a.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1E3,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null
    };
    a.modal.impl = {
        d: {},
        init: function(c, d) {
            if (this.d.data) return ! 1;
            g = a.browser.msie && !a.boxModel;
            this.o = a.extend({},
            a.modal.defaults, d);
            this.zIndex = this.o.zIndex;
            this.occb = !1;
            if ("object" === typeof c) c = c instanceof jQuery ? c: a(c),
            this.d.placeholder = !1,
            0 < c.parent().parent().size() && (c.before(a("<span></span>").attr("id", "simplemodal-placeholder").css({
                display: "none"
            })), this.d.placeholder = !0, this.display = c.css("display"), this.o.persist || (this.d.orig = c.clone(!0)));
            else if ("string" === typeof c || "number" === typeof c) c = a("<div></div>").html(c);
            else return alert("SimpleModal Error: Unsupported data type: " + typeof c),
            this;
            this.create(c);
            this.open();
            a.isFunction(this.o.onShow) && this.o.onShow.apply(this, [this.d]);
            return this
        },
        create: function(c) {
            j = this.getDimensions();
            this.o.modal && d && (this.d.iframe = a('<iframe src="javascript:false;"></iframe>').css(a.extend(this.o.iframeCss, {
                display: "none",
                opacity: 0,
                position: "fixed",
                height: j[0],
                width: j[1],
                zIndex: this.o.zIndex,
                top: 0,
                left: 0
            })).appendTo(this.o.appendTo));
            this.d.overlay = a("<div></div>").attr("id", this.o.overlayId).addClass("simplemodal-overlay").css(a.extend(this.o.overlayCss, {
                display: "none",
                opacity: this.o.opacity / 100,
                height: this.o.modal ? j[0] : 0,
                width: this.o.modal ? j[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: this.o.zIndex + 1
            })).appendTo(this.o.appendTo);
            this.d.container = a("<div></div>").attr("id", this.o.containerId).addClass("simplemodal-container").css(a.extend(this.o.containerCss, {
                display: "none",
                position: "fixed",
                zIndex: this.o.zIndex + 2
            })).append(this.o.close && this.o.closeHTML ? a(this.o.closeHTML).addClass(this.o.closeClass) : "").appendTo(this.o.appendTo);
            this.d.wrap = a("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(this.d.container);
            this.d.data = c.attr("id", c.attr("id") || this.o.dataId).addClass("simplemodal-data").css(a.extend(this.o.dataCss, {
                display: "none"
            })).appendTo("body");
            this.setContainerDimensions();
            this.d.data.appendTo(this.d.wrap); (d || g) && this.fixIE()
        },
        bindEvents: function() {
            var c = this;
            a("." + c.o.closeClass).bind("click.simplemodal",
            function(a) {
                a.preventDefault();
                c.close()
            });
            c.o.modal && c.o.close && c.o.overlayClose && c.d.overlay.bind("click.simplemodal",
            function(a) {
                a.preventDefault();
                c.close()
            });
            a(document).bind("keydown.simplemodal",
            function(a) {
                c.o.modal && 9 === a.keyCode ? c.watchTab(a) : c.o.close && (c.o.escClose && 27 === a.keyCode) && (a.preventDefault(), c.close())
            });
            a(window).bind("resize.simplemodal",
            function() {
                j = c.getDimensions();
                c.o.autoResize ? c.setContainerDimensions() : c.o.autoPosition && c.setPosition();
                d || g ? c.fixIE() : c.o.modal && (c.d.iframe && c.d.iframe.css({
                    height: j[0],
                    width: j[1]
                }), c.d.overlay.css({
                    height: j[0],
                    width: j[1]
                }))
            })
        },
        unbindEvents: function() {
            a("." + this.o.closeClass).unbind("click.simplemodal");
            a(document).unbind("keydown.simplemodal");
            a(window).unbind("resize.simplemodal");
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function() {
            var c = this.o.position;
            a.each([this.d.iframe || null, !this.o.modal ? null: this.d.overlay, this.d.container],
            function(a, d) {
                if (d) {
                    var g = d[0].style;
                    g.position = "absolute";
                    if (2 > a) g.removeExpression("height"),
                    g.removeExpression("width"),
                    g.setExpression("height", 'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),
                    g.setExpression("width", 'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');
                    else {
                        var j;
                        c && c.constructor === Array ? (a = c[0] ? "number" === typeof c[0] ? c[0].toString() : c[0].replace(/px/, "") : d.css("top").replace(/px/, ""), a = -1 === a.indexOf("%") ? a + ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"': parseInt(a.replace(/%/, "")) + ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"', c[1] && (j = "number" === typeof c[1] ? c[1].toString() : c[1].replace(/px/, ""), j = -1 === j.indexOf("%") ? j + ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"': parseInt(j.replace(/%/, "")) + ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')) : (a = '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"', j = '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');
                        g.removeExpression("top");
                        g.removeExpression("left");
                        g.setExpression("top", a);
                        g.setExpression("left", j)
                    }
                }
            })
        },
        focus: function(c) {
            var d = this,
            c = c && -1 !== a.inArray(c, ["first", "last"]) ? c: "first",
            g = a(":input:enabled:visible:" + c, d.d.wrap);
            setTimeout(function() {
                0 < g.length ? g.focus() : d.d.wrap.focus()
            },
            10)
        },
        getDimensions: function() {
            var c = a(window);
            return [a.browser.opera && "9.5" < a.browser.version && "1.3" > a.fn.jquery || a.browser.opera && "9.5" > a.browser.version && "1.2.6" < a.fn.jquery ? c[0].innerHeight: c.height(), c.width()]
        },
        getVal: function(a, c) {
            return a ? "number" === typeof a ? a: "auto" === a ? 0 : 0 < a.indexOf("%") ? parseInt(a.replace(/%/, "")) / 100 * ("h" === c ? j[0] : j[1]) : parseInt(a.replace(/px/, "")) : null
        },
        update: function(a, c) {
            if (!this.d.data) return ! 1;
            this.d.origHeight = this.getVal(a, "h");
            this.d.origWidth = this.getVal(c, "w");
            this.d.data.hide();
            a && this.d.container.css("height", a);
            c && this.d.container.css("width", c);
            this.setContainerDimensions();
            this.d.data.show();
            this.o.focus && this.focus();
            this.unbindEvents();
            this.bindEvents()
        },
        setContainerDimensions: function() {
            var f = d || c,
            g = this.d.origHeight ? this.d.origHeight: a.browser.opera ? this.d.container.height() : this.getVal(f ? this.d.container[0].currentStyle.height: this.d.container.css("height"), "h"),
            f = this.d.origWidth ? this.d.origWidth: a.browser.opera ? this.d.container.width() : this.getVal(f ? this.d.container[0].currentStyle.width: this.d.container.css("width"), "w"),
            m = this.d.data.outerHeight(!0),
            o = this.d.data.outerWidth(!0);
            this.d.origHeight = this.d.origHeight || g;
            this.d.origWidth = this.d.origWidth || f;
            var q = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null,
            z = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null,
            q = q && q < j[0] ? q: j[0],
            z = z && z < j[1] ? z: j[1],
            F = this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto",
            g = g ? this.o.autoResize && g > q ? q: g < F ? F: g: m ? m > q ? q: this.o.minHeight && "auto" !== F && m < F ? F: m: F,
            q = this.o.minWidth ? this.getVal(this.o.minWidth, "w") : "auto",
            f = f ? this.o.autoResize && f > z ? z: f < q ? q: f: o ? o > z ? z: this.o.minWidth && "auto" !== q && o < q ? q: o: q;
            this.d.container.css({
                height: g,
                width: f
            });
            this.d.wrap.css({
                overflow: m > g || o > f ? "auto": "visible"
            });
            this.o.autoPosition && this.setPosition()
        },
        setPosition: function() {
            var a, c;
            a = j[0] / 2 - this.d.container.outerHeight(!0) / 2;
            c = j[1] / 2 - this.d.container.outerWidth(!0) / 2;
            this.o.position && "[object Array]" === Object.prototype.toString.call(this.o.position) && (a = this.o.position[0] || a, c = this.o.position[1] || c);
            this.d.container.css({
                left: c,
                top: a
            })
        },
        watchTab: function(c) {
            if (0 < a(c.target).parents(".simplemodal-container").length) {
                if (this.inputs = a(":input:enabled:visible:first, :input:enabled:visible:last", this.d.data[0]), !c.shiftKey && c.target === this.inputs[this.inputs.length - 1] || c.shiftKey && c.target === this.inputs[0] || 0 === this.inputs.length) c.preventDefault(),
                this.focus(c.shiftKey ? "last": "first")
            } else c.preventDefault(),
            this.focus()
        },
        open: function() {
            this.d.iframe && this.d.iframe.show();
            a.isFunction(this.o.onOpen) ? this.o.onOpen.apply(this, [this.d]) : (this.d.overlay.show(), this.d.container.show(), this.d.data.show());
            this.o.focus && this.focus();
            this.bindEvents()
        },
        close: function() {
            var c = this;
            if (!c.d.data) return ! 1;
            c.unbindEvents();
            if (a.isFunction(c.o.onClose) && !c.occb) c.occb = !0,
            c.o.onClose.apply(c, [c.d]);
            else {
                if (c.d.placeholder) {
                    var d = a("#simplemodal-placeholder");
                    c.o.persist ? d.replaceWith(c.d.data.removeClass("simplemodal-data").css("display", c.display)) : (c.d.data.hide().remove(), d.replaceWith(c.d.orig))
                } else c.d.data.hide().remove();
                c.d.container.hide().remove();
                c.d.overlay && c.d.overlay.hide();
                c.d.iframe && c.d.iframe.hide().remove();
                setTimeout(function() {
                    c.d.overlay && c.d.overlay.remove();
                    c.d = {}
                },
                10)
            }
        }
    }
})(jQuery);
var QRCode; (function() {
    function a(a) {
        this.mode = k.MODE_8BIT_BYTE;
        this.data = a;
        this.parsedData = [];
        for (var a = 0,
        c = this.data.length; a < c; a++) {
            var d = [],
            g = this.data.charCodeAt(a);
            65536 < g ? (d[0] = 240 | (g & 1835008) >>> 18, d[1] = 128 | (g & 258048) >>> 12, d[2] = 128 | (g & 4032) >>> 6, d[3] = 128 | g & 63) : 2048 < g ? (d[0] = 224 | (g & 61440) >>> 12, d[1] = 128 | (g & 4032) >>> 6, d[2] = 128 | g & 63) : 128 < g ? (d[0] = 192 | (g & 1984) >>> 6, d[1] = 128 | g & 63) : d[0] = g;
            this.parsedData.push(d)
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData);
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }
    function d(a, c) {
        this.typeNumber = a;
        this.errorCorrectLevel = c;
        this.modules = null;
        this.moduleCount = 0;
        this.dataCache = null;
        this.dataList = []
    }
    function c(a, c) {
        if (void 0 == a.length) throw Error(a.length + "/" + c);
        for (var d = 0; d < a.length && 0 == a[d];) d++;
        this.num = Array(a.length - d + c);
        for (var g = 0; g < a.length - d; g++) this.num[g] = a[g + d]
    }
    function g(a, c) {
        this.totalCount = a;
        this.dataCount = c
    }
    function j() {
        this.buffer = [];
        this.length = 0
    }
    function f() {
        var a = !1,
        c = navigator.userAgent;
        /android/i.test(c) && (a = !0, (aMat = c.toString().match(/android ([0-9]\.[0-9])/i)) && aMat[1] && (a = parseFloat(aMat[1])));
        return a
    }
    a.prototype = {
        getLength: function() {
            return this.parsedData.length
        },
        write: function(a) {
            for (var c = 0,
            d = this.parsedData.length; c < d; c++) a.put(this.parsedData[c], 8)
        }
    };
    d.prototype = {
        addData: function(c) {
            c = new a(c);
            this.dataList.push(c);
            this.dataCache = null
        },
        isDark: function(a, c) {
            if (0 > a || this.moduleCount <= a || 0 > c || this.moduleCount <= c) throw Error(a + "," + c);
            return this.modules[a][c]
        },
        getModuleCount: function() {
            return this.moduleCount
        },
        make: function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function(a, c) {
            this.moduleCount = 4 * this.typeNumber + 17;
            this.modules = Array(this.moduleCount);
            for (var g = 0; g < this.moduleCount; g++) {
                this.modules[g] = Array(this.moduleCount);
                for (var f = 0; f < this.moduleCount; f++) this.modules[g][f] = null
            }
            this.setupPositionProbePattern(0, 0);
            this.setupPositionProbePattern(this.moduleCount - 7, 0);
            this.setupPositionProbePattern(0, this.moduleCount - 7);
            this.setupPositionAdjustPattern();
            this.setupTimingPattern();
            this.setupTypeInfo(a, c);
            7 <= this.typeNumber && this.setupTypeNumber(a);
            null == this.dataCache && (this.dataCache = d.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
            this.mapData(this.dataCache, c)
        },
        setupPositionProbePattern: function(a, c) {
            for (var d = -1; 7 >= d; d++) if (! ( - 1 >= a + d || this.moduleCount <= a + d)) for (var g = -1; 7 >= g; g++) - 1 >= c + g || this.moduleCount <= c + g || (this.modules[a + d][c + g] = 0 <= d && 6 >= d && (0 == g || 6 == g) || 0 <= g && 6 >= g && (0 == d || 6 == d) || 2 <= d && 4 >= d && 2 <= g && 4 >= g ? !0 : !1)
        },
        getBestMaskPattern: function() {
            for (var a = 0,
            c = 0,
            d = 0; 8 > d; d++) {
                this.makeImpl(!0, d);
                var g = o.getLostPoint(this);
                if (0 == d || a > g) a = g,
                c = d
            }
            return c
        },
        createMovieClip: function(a, c, d) {
            a = a.createEmptyMovieClip(c, d);
            this.make();
            for (c = 0; c < this.modules.length; c++) for (var d = 1 * c,
            g = 0; g < this.modules[c].length; g++) {
                var f = 1 * g;
                this.modules[c][g] && (a.beginFill(0, 100), a.moveTo(f, d), a.lineTo(f + 1, d), a.lineTo(f + 1, d + 1), a.lineTo(f, d + 1), a.endFill())
            }
            return a
        },
        setupTimingPattern: function() {
            for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
            for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
        },
        setupPositionAdjustPattern: function() {
            for (var a = o.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++) for (var d = 0; d < a.length; d++) {
                var g = a[c],
                f = a[d];
                if (null == this.modules[g][f]) for (var j = -2; 2 >= j; j++) for (var k = -2; 2 >= k; k++) this.modules[g + j][f + k] = -2 == j || 2 == j || -2 == k || 2 == k || 0 == j && 0 == k ? !0 : !1
            }
        },
        setupTypeNumber: function(a) {
            for (var c = o.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
                var g = !a && 1 == (c >> d & 1);
                this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = g
            }
            for (d = 0; 18 > d; d++) g = !a && 1 == (c >> d & 1),
            this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = g
        },
        setupTypeInfo: function(a, c) {
            for (var d = o.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), g = 0; 15 > g; g++) {
                var f = !a && 1 == (d >> g & 1);
                6 > g ? this.modules[g][8] = f: 8 > g ? this.modules[g + 1][8] = f: this.modules[this.moduleCount - 15 + g][8] = f
            }
            for (g = 0; 15 > g; g++) f = !a && 1 == (d >> g & 1),
            8 > g ? this.modules[8][this.moduleCount - g - 1] = f: 9 > g ? this.modules[8][15 - g - 1 + 1] = f: this.modules[8][15 - g - 1] = f;
            this.modules[this.moduleCount - 8][8] = !a
        },
        mapData: function(a, c) {
            for (var d = -1,
            g = this.moduleCount - 1,
            f = 7,
            j = 0,
            k = this.moduleCount - 1; 0 < k; k -= 2) for (6 == k && k--;;) {
                for (var m = 0; 2 > m; m++) if (null == this.modules[g][k - m]) {
                    var q = !1;
                    j < a.length && (q = 1 == (a[j] >>> f & 1));
                    o.getMask(c, g, k - m) && (q = !q);
                    this.modules[g][k - m] = q;
                    f--; - 1 == f && (j++, f = 7)
                }
                g += d;
                if (0 > g || this.moduleCount <= g) {
                    g -= d;
                    d = -d;
                    break
                }
            }
        }
    };
    d.PAD0 = 236;
    d.PAD1 = 17;
    d.createData = function(a, c, f) {
        for (var c = g.getRSBlocks(a, c), k = new j, A = 0; A < f.length; A++) {
            var m = f[A];
            k.put(m.mode, 4);
            k.put(m.getLength(), o.getLengthInBits(m.mode, a));
            m.write(k)
        }
        for (A = a = 0; A < c.length; A++) a += c[A].dataCount;
        if (k.getLengthInBits() > 8 * a) throw Error("code length overflow. (" + k.getLengthInBits() + ">" + 8 * a + ")");
        for (k.getLengthInBits() + 4 <= 8 * a && k.put(0, 4); 0 != k.getLengthInBits() % 8;) k.putBit(!1);
        for (; ! (k.getLengthInBits() >= 8 * a);) {
            k.put(d.PAD0, 8);
            if (k.getLengthInBits() >= 8 * a) break;
            k.put(d.PAD1, 8)
        }
        return d.createBytes(k, c)
    };
    d.createBytes = function(a, d) {
        for (var g = 0,
        f = 0,
        j = 0,
        k = Array(d.length), m = Array(d.length), C = 0; C < d.length; C++) {
            var q = d[C].dataCount,
            F = d[C].totalCount - q,
            f = Math.max(f, q),
            j = Math.max(j, F);
            k[C] = Array(q);
            for (var z = 0; z < k[C].length; z++) k[C][z] = 255 & a.buffer[z + g];
            g += q;
            z = o.getErrorCorrectPolynomial(F);
            q = (new c(k[C], z.getLength() - 1)).mod(z);
            m[C] = Array(z.getLength() - 1);
            for (z = 0; z < m[C].length; z++) F = z + q.getLength() - m[C].length,
            m[C][z] = 0 <= F ? q.get(F) : 0
        }
        for (z = C = 0; z < d.length; z++) C += d[z].totalCount;
        g = Array(C);
        for (z = q = 0; z < f; z++) for (C = 0; C < d.length; C++) z < k[C].length && (g[q++] = k[C][z]);
        for (z = 0; z < j; z++) for (C = 0; C < d.length; C++) z < m[C].length && (g[q++] = m[C][z]);
        return g
    };
    for (var k = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    },
    m = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    },
    o = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(a) {
            for (var c = a << 10; 0 <= o.getBCHDigit(c) - o.getBCHDigit(o.G15);) c ^= o.G15 << o.getBCHDigit(c) - o.getBCHDigit(o.G15);
            return (a << 10 | c) ^ o.G15_MASK
        },
        getBCHTypeNumber: function(a) {
            for (var c = a << 12; 0 <= o.getBCHDigit(c) - o.getBCHDigit(o.G18);) c ^= o.G18 << o.getBCHDigit(c) - o.getBCHDigit(o.G18);
            return a << 12 | c
        },
        getBCHDigit: function(a) {
            for (var c = 0; 0 != a;) c++,
            a >>>= 1;
            return c
        },
        getPatternPosition: function(a) {
            return o.PATTERN_POSITION_TABLE[a - 1]
        },
        getMask: function(a, c, d) {
            switch (a) {
            case 0:
                return 0 == (c + d) % 2;
            case 1:
                return 0 == c % 2;
            case 2:
                return 0 == d % 3;
            case 3:
                return 0 == (c + d) % 3;
            case 4:
                return 0 == (Math.floor(c / 2) + Math.floor(d / 3)) % 2;
            case 5:
                return 0 == c * d % 2 + c * d % 3;
            case 6:
                return 0 == (c * d % 2 + c * d % 3) % 2;
            case 7:
                return 0 == (c * d % 3 + (c + d) % 2) % 2;
            default:
                throw Error("bad maskPattern:" + a);
            }
        },
        getErrorCorrectPolynomial: function(a) {
            for (var d = new c([1], 0), g = 0; g < a; g++) d = d.multiply(new c([1, q.gexp(g)], 0));
            return d
        },
        getLengthInBits: function(a, c) {
            if (1 <= c && 10 > c) switch (a) {
            case k.MODE_NUMBER:
                return 10;
            case k.MODE_ALPHA_NUM:
                return 9;
            case k.MODE_8BIT_BYTE:
                return 8;
            case k.MODE_KANJI:
                return 8;
            default:
                throw Error("mode:" + a);
            } else if (27 > c) switch (a) {
            case k.MODE_NUMBER:
                return 12;
            case k.MODE_ALPHA_NUM:
                return 11;
            case k.MODE_8BIT_BYTE:
                return 16;
            case k.MODE_KANJI:
                return 10;
            default:
                throw Error("mode:" + a);
            } else if (41 > c) switch (a) {
            case k.MODE_NUMBER:
                return 14;
            case k.MODE_ALPHA_NUM:
                return 13;
            case k.MODE_8BIT_BYTE:
                return 16;
            case k.MODE_KANJI:
                return 12;
            default:
                throw Error("mode:" + a);
            } else throw Error("type:" + c);
        },
        getLostPoint: function(a) {
            for (var c = a.getModuleCount(), d = 0, g = 0; g < c; g++) for (var f = 0; f < c; f++) {
                for (var j = 0,
                k = a.isDark(g, f), m = -1; 1 >= m; m++) if (! (0 > g + m || c <= g + m)) for (var o = -1; 1 >= o; o++) 0 > f + o || c <= f + o || 0 == m && 0 == o || k == a.isDark(g + m, f + o) && j++;
                5 < j && (d += 3 + j - 5)
            }
            for (g = 0; g < c - 1; g++) for (f = 0; f < c - 1; f++) if (j = 0, a.isDark(g, f) && j++, a.isDark(g + 1, f) && j++, a.isDark(g, f + 1) && j++, a.isDark(g + 1, f + 1) && j++, 0 == j || 4 == j) d += 3;
            for (g = 0; g < c; g++) for (f = 0; f < c - 6; f++) a.isDark(g, f) && (!a.isDark(g, f + 1) && a.isDark(g, f + 2) && a.isDark(g, f + 3) && a.isDark(g, f + 4) && !a.isDark(g, f + 5) && a.isDark(g, f + 6)) && (d += 40);
            for (f = 0; f < c; f++) for (g = 0; g < c - 6; g++) a.isDark(g, f) && (!a.isDark(g + 1, f) && a.isDark(g + 2, f) && a.isDark(g + 3, f) && a.isDark(g + 4, f) && !a.isDark(g + 5, f) && a.isDark(g + 6, f)) && (d += 40);
            for (f = j = 0; f < c; f++) for (g = 0; g < c; g++) a.isDark(g, f) && j++;
            a = Math.abs(100 * j / c / c - 50) / 5;
            return d + 10 * a
        }
    },
    q = {
        glog: function(a) {
            if (1 > a) throw Error("glog(" + a + ")");
            return q.LOG_TABLE[a]
        },
        gexp: function(a) {
            for (; 0 > a;) a += 255;
            for (; 256 <= a;) a -= 255;
            return q.EXP_TABLE[a]
        },
        EXP_TABLE: Array(256),
        LOG_TABLE: Array(256)
    },
    z = 0; 8 > z; z++) q.EXP_TABLE[z] = 1 << z;
    for (z = 8; 256 > z; z++) q.EXP_TABLE[z] = q.EXP_TABLE[z - 4] ^ q.EXP_TABLE[z - 5] ^ q.EXP_TABLE[z - 6] ^ q.EXP_TABLE[z - 8];
    for (z = 0; 255 > z; z++) q.LOG_TABLE[q.EXP_TABLE[z]] = z;
    c.prototype = {
        get: function(a) {
            return this.num[a]
        },
        getLength: function() {
            return this.num.length
        },
        multiply: function(a) {
            for (var d = Array(this.getLength() + a.getLength() - 1), g = 0; g < this.getLength(); g++) for (var f = 0; f < a.getLength(); f++) d[g + f] ^= q.gexp(q.glog(this.get(g)) + q.glog(a.get(f)));
            return new c(d, 0)
        },
        mod: function(a) {
            if (0 > this.getLength() - a.getLength()) return this;
            for (var d = q.glog(this.get(0)) - q.glog(a.get(0)), g = Array(this.getLength()), f = 0; f < this.getLength(); f++) g[f] = this.get(f);
            for (f = 0; f < a.getLength(); f++) g[f] ^= q.gexp(q.glog(a.get(f)) + d);
            return (new c(g, 0)).mod(a)
        }
    };
    g.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
    g.getRSBlocks = function(a, c) {
        var d = g.getRsBlockTable(a, c);
        if (void 0 == d) throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + c);
        for (var f = d.length / 3,
        j = [], k = 0; k < f; k++) for (var m = d[3 * k + 0], o = d[3 * k + 1], z = d[3 * k + 2], q = 0; q < m; q++) j.push(new g(o, z));
        return j
    };
    g.getRsBlockTable = function(a, c) {
        switch (c) {
        case m.L:
            return g.RS_BLOCK_TABLE[4 * (a - 1) + 0];
        case m.M:
            return g.RS_BLOCK_TABLE[4 * (a - 1) + 1];
        case m.Q:
            return g.RS_BLOCK_TABLE[4 * (a - 1) + 2];
        case m.H:
            return g.RS_BLOCK_TABLE[4 * (a - 1) + 3]
        }
    };
    j.prototype = {
        get: function(a) {
            return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
        },
        put: function(a, c) {
            for (var d = 0; d < c; d++) this.putBit(1 == (a >>> c - d - 1 & 1))
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(a) {
            var c = Math.floor(this.length / 8);
            this.buffer.length <= c && this.buffer.push(0);
            a && (this.buffer[c] |= 128 >>> this.length % 8);
            this.length++
        }
    };
    var F = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
    z = function(a, c) {
        this._el = a;
        this._htOption = c
    };
    z.prototype.draw = function(a) {
        function c(a, d) {
            var g = document.createElementNS("http://www.w3.org/2000/svg", a),
            f;
            for (f in d) d.hasOwnProperty(f) && g.setAttribute(f, d[f]);
            return g
        }
        var d = this._htOption,
        g = this._el,
        f = a.getModuleCount();
        this.clear();
        var j = c("svg", {
            viewBox: "0 0 " + String(f) + " " + String(f),
            width: "100%",
            height: "100%",
            fill: d.colorLight
        });
        j.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        g.appendChild(j);
        j.appendChild(c("rect", {
            fill: d.colorDark,
            width: "1",
            height: "1",
            id: "template"
        }));
        for (d = 0; d < f; d++) for (g = 0; g < f; g++) if (a.isDark(d, g)) {
            var k = c("use", {
                x: String(d),
                y: String(g)
            });
            k.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");
            j.appendChild(k)
        }
    };
    z.prototype.clear = function() {
        for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
    };
    "svg" !== document.documentElement.tagName.toLowerCase() && ("undefined" == typeof CanvasRenderingContext2D ? (z = function(a, c) {
        this._el = a;
        this._htOption = c
    },
    z.prototype.draw = function(a) {
        for (var c = this._htOption,
        d = this._el,
        g = a.getModuleCount(), f = Math.floor(c.width / g), j = Math.floor(c.height / g), k = ['<table style="border:0;border-collapse:collapse;">'], m = 0; m < g; m++) {
            k.push("<tr>");
            for (var o = 0; o < g; o++) k.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + f + "px;height:" + j + "px;background-color:" + (a.isDark(m, o) ? c.colorDark: c.colorLight) + ';"></td>');
            k.push("</tr>")
        }
        k.push("</table>");
        d.innerHTML = k.join("");
        a = d.childNodes[0];
        d = (c.width - a.offsetWidth) / 2;
        c = (c.height - a.offsetHeight) / 2;
        0 < d && 0 < c && (a.style.margin = c + "px " + d + "px")
    },
    z.prototype.clear = function() {
        this._el.innerHTML = ""
    }) : z = function() {
        function a() {
            this._elImage.src = this._elCanvas.toDataURL("image/png");
            this._elImage.style.display = "block";
            this._elCanvas.style.display = "none"
        }
        if (this._android && 2.1 >= this._android) {
            var c = 1 / window.devicePixelRatio,
            d = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function(a, g, f, j, k, l, m, o, B) {
                if ("nodeName" in a && /img/i.test(a.nodeName)) for (var x = arguments.length - 1; 1 <= x; x--) arguments[x] *= c;
                else "undefined" == typeof o && (arguments[1] *= c, arguments[2] *= c, arguments[3] *= c, arguments[4] *= c);
                d.apply(this, arguments)
            }
        }
        var g = function(a, c) {
            this._bIsPainted = !1;
            this._android = f();
            this._htOption = c;
            this._elCanvas = document.createElement("canvas");
            this._elCanvas.width = c.width;
            this._elCanvas.height = c.height;
            a.appendChild(this._elCanvas);
            this._el = a;
            this._oContext = this._elCanvas.getContext("2d");
            this._bIsPainted = !1;
            this._elImage = document.createElement("img");
            this._elImage.alt = "Scan me!";
            this._elImage.style.display = "none";
            this._el.appendChild(this._elImage);
            this._bSupportDataURI = null
        };
        g.prototype.draw = function(a) {
            var c = this._elImage,
            d = this._oContext,
            g = this._htOption,
            f = a.getModuleCount(),
            j = g.width / f,
            k = g.height / f,
            l = Math.round(j),
            m = Math.round(k);
            c.style.display = "none";
            this.clear();
            for (c = 0; c < f; c++) for (var o = 0; o < f; o++) {
                var e = a.isDark(c, o),
                t = o * j,
                u = c * k;
                d.strokeStyle = e ? g.colorDark: g.colorLight;
                d.lineWidth = 1;
                d.fillStyle = e ? g.colorDark: g.colorLight;
                d.fillRect(t, u, j, k);
                d.strokeRect(Math.floor(t) + 0.5, Math.floor(u) + 0.5, l, m);
                d.strokeRect(Math.ceil(t) - 0.5, Math.ceil(u) - 0.5, l, m)
            }
            this._bIsPainted = !0
        };
        g.prototype.makeImage = function() {
            if (this._bIsPainted) {
                var c = this;
                c._fFail = void 0;
                c._fSuccess = a;
                if (null === c._bSupportDataURI) {
                    var d = document.createElement("img"),
                    g = function() {
                        c._bSupportDataURI = !1;
                        c._fFail && _fFail.call(c)
                    };
                    d.onabort = g;
                    d.onerror = g;
                    d.onload = function() {
                        c._bSupportDataURI = !0;
                        c._fSuccess && c._fSuccess.call(c)
                    };
                    d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
                } else ! 0 === c._bSupportDataURI && c._fSuccess ? c._fSuccess.call(c) : !1 === c._bSupportDataURI && c._fFail && c._fFail.call(c)
            }
        };
        g.prototype.isPainted = function() {
            return this._bIsPainted
        };
        g.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
            this._bIsPainted = !1
        };
        g.prototype.round = function(a) {
            return ! a ? a: Math.floor(1E3 * a) / 1E3
        };
        return g
    } ());
    var L = z;
    QRCode = function(a, c) {
        this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: m.H
        };
        typeof c === "string" && (c = {
            text: c
        });
        if (c) for (var d in c) this._htOption[d] = c[d];
        typeof a == "string" && (a = document.getElementById(a));
        this._android = f();
        this._el = a;
        this._oQRCode = null;
        this._oDrawing = new L(this._el, this._htOption);
        this._htOption.text && this.makeCode(this._htOption.text)
    };
    QRCode.prototype.makeCode = function(a) {
        var c = this._htOption.correctLevel,
        g = 1,
        f;
        f = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        f = f.length + (f.length != a ? 3 : 0);
        for (var j = 0,
        k = F.length; j <= k; j++) {
            var o = 0;
            switch (c) {
            case m.L:
                o = F[j][0];
                break;
            case m.M:
                o = F[j][1];
                break;
            case m.Q:
                o = F[j][2];
                break;
            case m.H:
                o = F[j][3]
            }
            if (f <= o) break;
            else g++
        }
        if (g > F.length) throw Error("Too long data");
        this._oQRCode = new d(g, this._htOption.correctLevel);
        this._oQRCode.addData(a);
        this._oQRCode.make();
        this._el.title = a;
        this._oDrawing.draw(this._oQRCode);
        this.makeImage()
    };
    QRCode.prototype.makeImage = function() {
        typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    };
    QRCode.prototype.clear = function() {
        this._oDrawing.clear()
    };
    QRCode.CorrectLevel = m
})();
function UPOP() {}
function importUP(a, d, c, g) {
    if ("object" == typeof a) try {
        d = a.UP_ROOT_NOI18,
        c = a.UP_ROOT_URL,
        g = a.TYPE,
        a = a.UP_ROOT
    } catch(j) {}
    UPOP.PATH_STATIC_I18 = a;
    UPOP.PATH_STATIC = d;
    UPOP.PATH_URL = c;
    UPOP.TYPE = g;
    d = a.split("/");
    UPOP.localeStr = d.pop();
    importICO(a + "/images/global/favicon.ico");
    importLib(a + "/js/up/up.i18.js" + UPOP.version);
    UPOP.showUPEditor = function() {
        0 < $("#_ocx_password").length && 0 < $("#mockLoginPassword").length && ($("#_ocx_password").show(), $("#mockLoginPassword").addClass("dn"));
        0 < $("#_ocx_cvn2").length && 0 < $("#mockCVN2").length && ($("#_ocx_cvn2").show(), $("#mockCVN2").addClass("dn"))
    };
    UPOP.hideUPEditor = function() {
        0 < $("#_ocx_password").length && 0 < $("#mockLoginPassword").length && ($("#_ocx_password").hide(), $("#mockLoginPassword").removeClass("dn"));
        0 < $("#_ocx_cvn2").length && 0 < $("#mockCVN2").length && ($("#_ocx_cvn2").hide(), $("#mockCVN2").removeClass("dn"))
    }
}
function importUPWithTest(a) {
    importPOR(a);
    importLib(a + "/js/xbDebug.js");
    importLib(a + "/js/jsUnitCore.js");
    importLib(a + "/js/jsUnitTestSuite.js")
}
importLib = function(a) {
    document.write('<script charset="utf-8" type="text/javascript" src="' + a + '"><\/script>')
};
importCSS = function(a) {
    document.write('<link href="' + a + '" rel="stylesheet"  charset="utf-8" type="text/css"/>')
};
importICO = function(a) {
    document.write('<link href="' + a + '" rel="shortcut icon" charset="utf-8" type="image/x-icon"/>')
};
function UPOPUtils() {}
UPOPUtils.KEY_CODE = {
    Backspace: 8,
    Tab: 9,
    Shift: 16,
    Space: 32,
    Del: 46,
    "0": 48,
    9 : 57,
    zero: 96,
    nine: 105,
    ";": 59,
    "=": 61,
    A: 65,
    C: 67,
    F: 70,
    V: 86,
    Z: 90,
    "-": 109,
    ",": 188,
    ".": 190,
    dot: 110,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
};
UPOPUtils.isNull = function(a) {
    return void 0 === a || null === a
};
UPOPUtils.isInputKey = function(a) {
    var d = UPOPUtils.KEY_CODE;
    return "17" == a || a >= d["0"] && a <= d["9"] || a >= d.zero && a <= d.nine
};
UPOPUtils.isValidKey = function(a) {
    var d = UPOPUtils.KEY_CODE;
    return a >= d["0"] && a <= d["9"] || a >= d.zero && a <= d.nine || a == d.Backspace ? !0 : !1
};
UPOPUtils.setCursor = function(a, d, c) {
    a.setSelectionRange ? (a.focus(), a.setSelectionRange(d, c)) : a.createTextRange && (range = a.createTextRange(), range.collapse(!0), range.moveEnd("character", c), range.moveStart("character", d), range.select())
};
UPOPUtils.getCursorPosition = function(a) {
    var d = 0;
    if (document.selection) a.focus(),
    d = document.selection.createRange(),
    d.moveStart("character", -a.value.length),
    d = d.text.length;
    else if (a.selectionStart || "0" == a.selectionStart) d = a.selectionStart;
    return d
};
UPOPUtils.isSMSCode = function(a) {
    a = a.replace(/[ ]/g, "");
    return UPOPUtils.isValidSmsCode(a)
};
UPOPUtils.isMobilePhone = function(a) {
    a = a.replace(/[ ]/g, "");
    return UPOPUtils.isValidCellPhone(a)
};
UPOPUtils.isNull = function(a) {
    return void 0 === a || null === a
};
UPOPUtils.display = function(a, d) {
    if (null == a.value || 0 == a.value.length) {
        var c = $(a).parent("td").children("span");
        c.attr("class", "hintshow");
        c.html(d)
    }
};
UPOPUtils.isNumber = function(a) {
    return $.browser.msie ? 47 < event.keyCode && 58 > event.keyCode || 8 == event.keyCode ? !0 : !1 : 47 < a.which && 58 > a.which || 8 == a.which ? !0 : !1
};
UPOPUtils.isValidLoginName = function(a) {
    return /(^[\w]{6,20}$)|(^(?=.{0,64})\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(a) ? !0 : !1
};
UPOPUtils.isValidCustomLoginName = function(a) {
    var d = /(^[\d]{6,20}$)/;
    return /(^[\w]{6,20}$)/.test(a) && !d.test(a) ? !0 : !1
};
UPOPUtils.isValidCardNumber = function(a) {
    return /^\d{13,19}$/.test(a) ? !0 : !1
};
UPOPUtils.isValidCellPhone = function(a) {
    return RegExp(/^1[34578]\d{9}$/).test(a) ? !0 : !1
};
UPOPUtils.isValidEmail = function(a) {
    return RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(a) && 64 >= a.length ? !0 : !1
};
UPOPUtils.isValidSecurityInfo = function(a) {
    return RegExp(/^[^!$%\^&*?<>\s]{2,16}$/).test(a) ? !0 : !1
};
UPOPUtils.isValidProblems = function(a) {
    return RegExp(/^[^!$%\^&*?<>\s]{2,16}$/).test(a) ? !0 : !1
};
UPOPUtils.isValidAnswer = function(a) {
    return RegExp(/^[^!$%\^&*?<>\s]{2,16}$/).test(a) ? !0 : !1
};
UPOPUtils.isValidCaptcha = function(a) {
    return RegExp(/^[\da-zA-Z]{4}$/).test(a) ? !0 : !1
};
UPOPUtils.isValidSmsCode = function(a) {
    return RegExp(/^\d{6}$/).test(a) ? !0 : !1
};
UPOPUtils.menuLocate = function(a) {
    $("#imenus0 li a").removeClass("selected");
    $("#imenus0_" + a + " a").addClass("selected current")
};
UPOPUtils.leftMenuLocate = function(a) {
    $(".menu_lf li").removeClass("m_focus");
    $(".menu_lf #" + a).addClass("m_focus")
};
UPOPUtils.doSmsCountingBack = function(a, d, c, g, j) {
    0 <= a ? (d.val("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001"), g && "true" != g.attr("onClickFlag") && (j || (j = "hintright"), g.attr("className", j).html("\u5982\u679c" + a + "\u79d2\u540e\u4ecd\u672a\u6536\u5230\u77ed\u4fe1\uff0c\u8bf7\u91cd\u65b0\u83b7\u53d6")), --a, setTimeout(function() {
        doSmsCountingBack(a, d, c, g, j)
    },
    1E3)) : (d.removeClass("mes_loading").removeAttr("disabled", "disabled"), d.val("\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801"), g && $("#smsCodeTip").attr("onClickFlag", "false"))
};
UPOPUtils.cardnumberFormat = function(a) {
    return a.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
};
UPOPUtils.removeSpace = function(a) {
    return a.replace(/\s/g, "")
};
UPOPUtils.sendMsgCallBack = function(a, d, c, g) {
    function j(a, c, g, o) {
        0 < a ? (d.find("span").html(a), d.find("span").html(a), --a, UPOPUtils.trySend = setTimeout(function() {
            j(a, c, g, o)
        },
        1E3)) : (c.removeClass(o).removeAttr("disabled"), c.val($.getI18Text("smsCode_Retrieves")), d.find("div").removeClass("txt_success").show("fast").html($.getI18Text("smsCode_if_failed")), UPOPUtils.trySend = null)
    }
    UPOPUtils.trySend = null;
    a.addClass("yzm_btn_dis");
    a.val($.getI18Text("smsCode_alreadySend")).attr("disabled", "disabled");
    d.show();
    c ? d.find("div").removeClass().addClass(c) : d.find("div").removeClass().addClass("text_c CardSmsText txt_success");
    null != g ? d.find("div").html(g + $.getI18Text("smsCode_get_SMS_60").replace("{60}", "<span>60</span>")) : d.find("div").html($.getI18Text("smsCode_get_SMS_60").replace("{60}", "<span>60</span>"));
    j(60, a, $.getI18Text("smsCode_get_SMS"), "yzm_btn_dis")
};
UPOPUtils.getWinHeight = function() {
    return $.browser.msie ? "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight: document.body.clientHeight: self.innerHeight
};
UPOPUtils.getWinWidth = function() {
    return $.browser.msie ? "CSS1Compat" == document.compatMode ? document.documentElement.clientWidth: document.body.clientWidth: self.innerWidth
};
UPOPUtils.getTopWinHeight = function() {
    return $.browser.msie ? "CSS1Compat" == window.top.document.compatMode ? window.top.document.documentElement.clientHeight: window.top.document.body.clientHeight: window.top.innerHeight
};
UPOPUtils.getTopWinWidth = function() {
    return $.browser.msie ? "CSS1Compat" == window.top.document.compatMode ? window.top.document.documentElement.clientWidth: window.top.document.body.clientWidth: window.top.innerWidth
};
UPOPUtils.getExpireYearStr = function() {
    var a = (new Date).getFullYear(),
    d = [];
    for (i = 0; 12 > i; i++) d.push((a + "").substring(2)),
    a++;
    return d.join(",")
};
UPOPUtils.getExpireYearSplitStr = function() {
    return "," + UPOPUtils.getExpireYearStr() + ","
};
UPOPUtils.showUPEditInstall = function() {};
UPOPUtils.strto8 = function(a) {
    var d, c, g, j;
    d = "";
    g = a.length;
    for (c = 0; c < g; c++) j = a.charCodeAt(c),
    1 <= j && 127 >= j ? d += a.charAt(c) : (2047 < j ? (d += String.fromCharCode(224 | j >> 12 & 15), d += String.fromCharCode(128 | j >> 6 & 63)) : d += String.fromCharCode(192 | j >> 6 & 31), d += String.fromCharCode(128 | j >> 0 & 63));
    return d
};
UPOPUtils.checkIDCard = function(a) {
    var d = [],
    d = a.split("");
    if (null == {
        11 : "\u5317\u4eac",
        12 : "\u5929\u6d25",
        13 : "\u6cb3\u5317",
        14 : "\u5c71\u897f",
        15 : "\u5185\u8499\u53e4",
        21 : "\u8fbd\u5b81",
        22 : "\u5409\u6797",
        23 : "\u9ed1\u9f99\u6c5f",
        31 : "\u4e0a\u6d77",
        32 : "\u6c5f\u82cf",
        33 : "\u6d59\u6c5f",
        34 : "\u5b89\u5fbd",
        35 : "\u798f\u5efa",
        36 : "\u6c5f\u897f",
        37 : "\u5c71\u4e1c",
        41 : "\u6cb3\u5357",
        42 : "\u6e56\u5317",
        43 : "\u6e56\u5357",
        44 : "\u5e7f\u4e1c",
        45 : "\u5e7f\u897f",
        46 : "\u6d77\u5357",
        50 : "\u91cd\u5e86",
        51 : "\u56db\u5ddd",
        52 : "\u8d35\u5dde",
        53 : "\u4e91\u5357",
        54 : "\u897f\u85cf",
        61 : "\u9655\u897f",
        62 : "\u7518\u8083",
        63 : "\u9752\u6d77",
        64 : "\u5b81\u590f",
        65 : "\u65b0\u7586",
        71 : "\u53f0\u6e7e",
        81 : "\u9999\u6e2f",
        82 : "\u6fb3\u95e8",
        91 : "\u56fd\u5916"
    } [parseInt(a.substr(0, 2))]) return ! 1;
    switch (a.length) {
    case 15:
        return ereg = 0 == (parseInt(a.substr(6, 2)) + 1900) % 4 || 0 == (parseInt(a.substr(6, 2)) + 1900) % 100 && 0 == (parseInt(a.substr(6, 2)) + 1900) % 4 ? /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/: /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/,
        ereg.test(a) ? !0 : !1;
    case 18:
        return ereg = 0 == parseInt(a.substr(6, 4)) % 4 || 0 == parseInt(a.substr(6, 4)) % 100 && 0 == parseInt(a.substr(6, 4)) % 4 ? /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/: /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/,
        ereg.test(a) ? (a = 7 * (parseInt(d[0]) + parseInt(d[10])) + 9 * (parseInt(d[1]) + parseInt(d[11])) + 10 * (parseInt(d[2]) + parseInt(d[12])) + 5 * (parseInt(d[3]) + parseInt(d[13])) + 8 * (parseInt(d[4]) + parseInt(d[14])) + 4 * (parseInt(d[5]) + parseInt(d[15])) + 2 * (parseInt(d[6]) + parseInt(d[16])) + 1 * parseInt(d[7]) + 6 * parseInt(d[8]) + 3 * parseInt(d[9]), a = "10X98765432".substr(a % 11, 1), a == d[17].toUpperCase() ? !0 : !1) : !1;
    default:
        return ! 1
    }
};
UPOPUtils.isValidZipCode = function(a) {
    a = a.replace(/[ ]/g, "");
    return RegExp(/^\d{6}$/).test(a)
};
UPOPUtils.leftMenuLocate_new = function(a) {
    $("a", ".up_app_menu").removeClass("selected");
    $("#" + a).addClass("selected")
};
UPOPUtils.menuLocate_new = function(a) {
    $("li", "#imenus0").removeClass("up_selected");
    $("#imenus0_" + a).addClass("up_selected")
};
UPOPUtils.phoneNumberFormat = function(a) {
    if (5 >= parseInt(a.length)) a = a.replace(/\s/g, "").replace(/(\d{3})(?=\d)/g, "$1 ");
    else var d = a.substring(0, 3),
    a = a.substring(3),
    a = a.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "),
    a = d + " " + a;
    return a
};
UPOPUtils.checkBankCard = function(a) {
    try {
        if (!a) return ! 1;
        for (var d = a.split(""), a = 0, c = d.length - 2, g = 0; 0 <= c; c--, g++) {
            var j = d[c] - 0;
            0 == g % 2 && (j *= 2, j = Math.floor(j / 10) + j % 10);
            a += j
        }
        return (0 == a % 10 ? 0 : 10 - a % 10) == d[d.length - 1] ? !0 : !1
    } catch(f) {
        return ! 1
    }
};
UPOPUtils.tplParse = function(a, d) {
    return a.replace(/\{([^}]+)\}/ig,
    function(a, g) {
        return null != d[g] && void 0 != d[g] ? d[g] : a
    })
};
var UPService = {
    send: function(a, d, c, g, j) { ! 0 != j && (j = !1);
        $.ajax({
            type: "POST",
            async: j,
            url: a,
            data: c,
            dataType: d,
            success: function(a) {
                if ("object" == typeof g && null != g && "function" == typeof g.onSuccess) g.onSuccess(a)
            },
            error: function(a, c, d) {
                if ("object" == typeof g && "function" == typeof g.onFail) g.onFail(a, c, d)
            },
            complete: function() {
                if ("object" == typeof g && "function" == typeof g.onComplete) g.onComplete()
            }
        })
    },
    $send: function(a, d, c) {
        $.ajax({
            type: "POST",
            async: !1,
            url: a,
            data: d,
            dataType: "json",
            success: function(a) {
                c.onSuccess(a)
            },
            error: function(a, d, f) {
                c.onFail(a, d, f)
            }
        })
    }
}; (function(a) {
    a.fn.upfloatable = function() {
        return a(this).each(function() {
            a(this).bind("keypress",
            function(a) {
                var c = a.which;
                return 0 == c || 8 == c || (46 == c || 48 <= c && 57 >= c) || a.ctrlKey && (99 == c || 97 == c || 118 == c || 120 == c) ? !0 : !1
            });
            a(this).bind("paste",
            function() {
                var d = a(this);
                setTimeout(function() {
                    var c = a(d).val();
                    /[^\d]/.test(c) && (alert(a.getI18Text("up_component_tips")), a(d).val(""))
                },
                100)
            });
            a(this).bind("dragenter",
            function() {
                return ! 1
            })
        })
    };
    a.fn.upnumeral = function() {
        return a(this).each(function() {
            a(this).bind("keypress",
            function(a) {
                var c = a.which;
                return 0 == c || 8 == c || (46 == c || 48 <= c && 57 >= c) || a.ctrlKey && (99 == c || 97 == c || 118 == c || 120 == c) ? !0 : !1
            });
            a(this).bind("paste",
            function() {
                var d = a(this);
                setTimeout(function() {
                    var c = a(d).val();
                    /[^\d]/.test(c) && (alert(a.getI18Text("up_component_tips")), a(d).val(""))
                },
                100)
            });
            a(this).bind("dragenter",
            function() {
                return ! 1
            })
        })
    }
})(jQuery); (function(a) {
    a.fn.upbankcard = function() {
        return a(this).each(function() {
            var d = a(this).val();
            a(this).val(d.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "));
            a(this).bind("keypress",
            function(a) {
                var d = a.which;
                return 0 == d || 8 == d || (46 == d || 48 <= d && 57 >= d) || a.ctrlKey && (99 == d || 97 == d || 118 == d || 120 == d) ? !0 : !1
            });
            a(this).bind("keyup",
            function(c) {
                c = c.which;
                if (46 == c || 48 <= c && 57 >= c || 96 <= c && 105 >= c) {
                    var c = UPOPUtils.getCursorPosition(a(this)[0]),
                    d = 0,
                    j = a(this).val(),
                    d = j.split(" ").length,
                    j = j.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "),
                    d = j.split(" ").length - d;
                    a(this).val(j);
                    UPOPUtils.setCursor(a(this)[0], c + d, c + d);
                    return ! 0
                }
                return ! 1
            });
            a(this).change(function() {
                var c = a(this).val().replace(/[ ]/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
                a(this).val(c)
            });
            a(this).bind("paste",
            function() {
                var c = a(this);
                setTimeout(function() {
                    var d = a(c).val().replace(/[ ]/g, "");
                    /[^\d]/.test(d) ? (alert(a.getI18Text("up_component_tips")), a(c).val("")) : (d = a(c).val().replace(/[ ]/g, "").replace(/(\d{4})(?=\d)/g, "$1 "), a(c).val(d))
                },
                100)
            });
            a(this).bind("dragenter",
            function() {
                return ! 1
            })
        })
    }
})(jQuery); (function(a) {
    a.fn.uptelephone = function() {
        return a(this).each(function() {
            var d = a(this),
            c = function() {
                var a = d.val().replace(/[ ]/g, "");
                if (5 >= parseInt(a.length)) a = a.replace(/\s/g, "").replace(/(\d{3})(?=\d)/g, "$1 ");
                else var c = a.substring(0, 3),
                a = a.substring(3),
                a = a.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "),
                a = c + " " + a;
                d.val(a)
            };
            c();
            a(this).bind("keypress",
            function(a) {
                var c = a.which;
                return 0 == c || 8 == c || (46 == c || 48 <= c && 57 >= c) || a.ctrlKey && (99 == c || 97 == c || 118 == c || 120 == c) ? 11 < d.val().replace(/[ ]/g, "").length && 8 != c ? !1 : !0 : !1
            });
            a(this).bind("keyup",
            function(c) {
                c = c.which;
                if (46 == c || 48 <= c && 57 >= c || 96 <= c && 105 >= c) {
                    var c = UPOPUtils.getCursorPosition(a(this)[0]),
                    d = 0,
                    f = a(this).val(),
                    d = f.split(" ").length;
                    if (5 >= parseInt(f.length)) f = f.replace(/\s/g, "").replace(/(\d{3})(?=\d)/g, "$1 ");
                    else {
                        var k = f.substring(0, 3),
                        f = f.substring(3),
                        f = f.replace(/\s/g, "");
                        8 < f.length && (f = f.substring(0, 8));
                        f = f.replace(/(\d{4})(?=\d)/g, "$1 ");
                        f = k + " " + f
                    }
                    d = f.split(" ").length - d;
                    a(this).val(f);
                    UPOPUtils.setCursor(a(this)[0], c + d, c + d);
                    return ! 0
                }
                return ! 1
            });
            a(this).change(function() {
                c()
            });
            a(this).bind("paste",
            function() {
                var d = a(this);
                setTimeout(function() {
                    var j = a(d).val().replace(/[ ]/g, "");
                    /[^\d]/.test(j) ? (alert(a.getI18Text("up_component_tips")), a(d).val("")) : (j = a(d).val().replace(/[ ]/g, ""), 11 < j.length && (j = j.substring(0, 11), a(d).val(j)), c())
                },
                100)
            });
            a(this).bind("dragenter",
            function() {
                return ! 1
            })
        })
    }
})(jQuery); (function(a) {
    a.fn.upselectlist = function(d) {
        var c = a(this),
        d = a.extend({},
        {
            boxClass: "upselect_out_box",
            listClass: "upselect_list_box",
            focusClass: "upselect_focus_box",
            markCalss: "upselect_hlight",
            zIndex: 200,
            data: "",
            textHint: !1,
            hintText: "",
            focusColor: "#333",
            blurColor: "#999"
        },
        d || {}),
        g = d.listClass,
        j = d.focusClass;
        data = d.data.split(",");
        var f = a(this).get(0);
        void 0 == f.upselectsettings && (f.upselectsettings = d);
        a.createHtml = function(d, f, k, m) {
            var l = "upSelect_" + m.attr("id") + "_",
            o = "";
            c.val();
            a.isArray(f) && a.each(f,
            function(a) {
                o = a === k ? o + ('<div class="mailHover ' + j + '" id="' + l + a + '">' + f[a] + "</div>") : o + ('<div class="mailHover ' + g + '" id="' + l + a + '">' + f[a] + "</div>")
            });
            return o
        };
        var k = 0,
        m, o = '<iframe src="https://static.95516.com/static/cms/img/30/6460cf5d-dd11-43fe-bebc-ac3b7d2adaf1.gif" frameborder="0" scrolling="no" style="border:none;position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:1; filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";"></iframe>';
        UPOP && "pad" == UPOP.acpAgent && (o = "");
        return a(this).each(function() {
            var c = a(this).get(0).upselectsettings,
            d = c.boxClass,
            g = c.zIndex;
            data = c.data.split(",");
            var f = a(this),
            c = a(".upselectbox").size(),
            j = f.outerWidth() - 2,
            u = f.outerHeight();
            f.wrap('<div style="display:inline-block;position:relative;z-index:2;"></div>').before('<div id="upSelectBox_' + c + '" class="upselectbox ' + d + '" style="min-width:' + j + "px;_width:" + j + "px;position:absolute;left:-6000px;top:" + u + "px;z-index:" + g + ';"></div>');
            var t = a("#upSelectBox_" + c),
            B;
            t.show();
            f.focus(function() {
                var c = a(this).get(0).upselectsettings,
                d = c.listClass,
                g = c.focusClass,
                f = c.zIndex,
                j = data = c.data.split(","),
                l = c.textHint,
                u = c.hintText,
                c = c.focusColor;
                a(this).css("color", c).parent().css("z-index", f);
                l && u && a.trim(a(this).val()) === u && a(this).val("");
                m = v = a.trim(a(this).val());
                for (var f = RegExp(m), z = c = 0; z < data.length; z++) if (f.test(data[z])) {
                    c = z;
                    break
                }
                t.show();
                t.html(o + '<div style="position:relative;z-index:10;">' + a.createHtml(m, data, c, a(this)) + "</div>").css("left", 0);
                t.find("iframe").width(t.width());
                t.find("iframe").height(t.height());
                a(this).keyup(function(c) {
                    t.show();
                    m = v = a.trim(a(this).val());
                    if (c.keyCode === 38) {
                        if (k <= 0) k = j.length;
                        k--
                    } else if (c.keyCode === 40) {
                        k >= j.length - 1 && (k = -1);
                        k++
                    } else if (c.keyCode === 13) k > -1 && k < j.length && a(this).val(a("#upSelect_" + a(this).attr("id") + "_" + k).text());
                    else {
                        k = 0;
                        var d = v;
                        j = a.map(data,
                        function(a) {
                            if (RegExp(d).test(a)) return a
                        })
                    }
                    t.html(o + '<div style="position:relative;z-index:10">' + a.createHtml(m, j, k, a(this)) + "</div>").css("left", 0);
                    j.length == 0 && t.hide();
                    t.find("iframe").width(t.width());
                    t.find("iframe").height(t.height());
                    c.keyCode === 13 && k > -1 && k < j.length && t.css("left", "-6000px")
                }).blur(function() {
                    l && u && a.trim(a(this).val()) === "" && a(this).val(u);
                    a(this).unbind("keyup").parent().css("z-index", 200);
                    t.css("left", "-6000px")
                });
                var y = this;
                a(".mailHover").live("mouseover",
                function() {
                    k = Number(a(this).attr("id").split("_")[2]);
                    B = a("#upSelect_" + y.id + "_" + k).text();
                    t.find("div").children("." + g).removeClass(g).addClass(d);
                    a(this).addClass(g).removeClass(d)
                })
            });
            t.bind("mousedown",
            function() {
                f.val(B)
            })
        })
    }
})(jQuery); (function(a) {
    a.fn.extend({
        Scroll: function(a) {
            a || (a = {});
            var c = this.eq(0).find("ul:first"),
            g = c.find("li:first").height(),
            j = a.line ? parseInt(a.line, 10) : parseInt(this.height() / g, 10),
            f = a.speed ? parseInt(a.speed, 10) : 500,
            k = a.timer ? parseInt(a.timer, 10) : 3E3;
            0 == j && (j = 1);
            var m = 0 - j * g;
            scrollUp = function() {
                c.animate({
                    marginTop: m
                },
                f,
                function() {
                    for (i = 1; i <= j; i++) c.find("li:first").appendTo(c);
                    c.css({
                        marginTop: 0
                    })
                })
            };
            c.hover(function() {
                clearInterval(timerID)
            },
            function() {
                timerID = setInterval("scrollUp()", k)
            }).mouseout()
        }
    })
})(jQuery);
function UPWidget() {}
function UPComponent() {
    UPWidget.apply(this, arguments)
}
UPComponent.prototype = new UPWidget;
UPComponent.prototype.id = function(a) {
    this._id = a;
    return this
};
UPOP.VALIDATOR = {
    REGEX: {
        number: /^[0-9]*$/,
        username: /(^[\w]{6,20}$)|(^(?=.{0,64})\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,
        customUserName: /(^[\w]{6,20}$)/,
        captcha: /^[\da-zA-Z]{4}$/,
        emailandphone: /(^1[34578]\d{9}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,
        smsCode: /^\d{6}$/,
        areaCode: /^\d{2,4}$/,
        foreignPhone: /^\d{4,15}$/,
        secureInfo: /^[^!$%\^&*?<>\s]{1,1}[^!$%\^&*?<>]{0,14}[^!$%\^&*?<>\s]{1,1}$/,
        realname: /^[^!$%\\^&*?<>]{2,10}$/,
        email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        mobilephone: /^1[34578]\d{9}$/,
        address: /^[^!$%\\^&*?<>]*$/,
        postcode: /^\d{6}$/,
        certid: /^(\d{15}|\d{17}[xX\d])$/,
        othercertid: /^[^!$%\^&*?<>]{5,18}$/,
        cardNumber: /^\d{13,19}$/,
        expireDate: /^\d{2}$/
    },
    TIP_MODE: {
        FixTip: "FixTip",
        AlertTip: "AlertTip"
    },
    TIP_CSS: {
        onShowTextClass: "txt_show_ipt act_element",
        onErrorShowTextClass: "txt_show_ipt act_element ipt_error",
        onShowClass: "txt_ipt act_element",
        onFocusClass: "txt_ipt act_element reg_ipt_click",
        onErrorClass: "txt_ipt act_element ipt_error",
        onCorrectClass: "txt_ipt act_element"
    },
    TIP_HTML: {
        onShowHtml: "<div class='note_info'>$data$</div>",
        onFocusHtml: "<div class='note_info'>$data$</div>",
        onErrorHtml: "<div class='note_info write_error'>$data$</div>",
        onCorrectHtml: "<div class='note_info write_success'>$data$</div>"
    },
    validatorGroup_setting: [],
    functionValidator_setting: {
        isValid: !0,
        fun: function() {
            this.isValid = !0
        },
        validateType: "functionValidator",
        onError: "\u8f93\u5165\u9519\u8bef"
    },
    regexValidator_setting: {
        isValid: !1,
        regExp: "",
        param: "i",
        dataType: "string",
        onError: "\u8f93\u5165\u7684\u683c\u5f0f\u4e0d\u6b63\u786e",
        validateType: "regexValidator"
    },
    inputValidator_setting: {
        isValid: !1,
        type: "size",
        min: 0,
        max: 99999,
        onError: "\u8f93\u5165\u9519\u8bef",
        validateType: "inputValidator",
        empty: {
            leftEmpty: !0,
            rightEmpty: !0,
            leftEmptyError: null,
            rightEmptyError: null
        }
    },
    formValidator_setting: {
        validatorGroup: "1",
        onShowText: "",
        onShowTextColor: {
            mouseOnColor: "#000000",
            mouseOutColor: "#999999",
            fontSize: "12px"
        },
        onShowFixText: "",
        onShow: "",
        onFocus: "",
        onCorrect: "",
        onEmpty: "",
        empty: !1,
        validate: !0,
        autoModify: !1,
        defaultValue: null,
        bind: !0,
        ajax: !1,
        validateType: "formValidator",
        tipCss: {
            left: 10,
            top: -4,
            height: 20,
            width: 280
        },
        triggerEvent: "blur",
        forceValid: !1,
        tipID: null,
        pwdTipID: null,
        fixTipID: null,
        relativeID: null,
        index: 0,
        leftTrim: !1,
        rightTrim: !1
    },
    initConfig_setting: {
        style: "unionpay",
        theme: "Default",
        validatorGroup: "1",
        formID: "",
        submitOnce: !1,
        mode: "FixTip",
        errorFocus: !1,
        wideWord: !0,
        forceValid: !1,
        debug: !1,
        inIframe: !1,
        preSubmit: function() {
            return ! 0
        },
        onSuccess: function() {
            return ! 0
        },
        onError: $.noop,
        status: "",
        validCount: 0,
        validObjects: [],
        showTextObjects: "",
        validateType: "initConfig"
    }
}; (function(a) {
    var d = UPOP.VALIDATOR;
    a.formValidator = {
        initConfig: function(c) {
            var g = {};
            a.extend(!0, g, d.initConfig_setting, c || {});
            "" != g.formID && a("#" + g.formID).submit(function() {
                return g.preSubmit() ? a.formValidator.bindSubmit(g) : !1
            });
            d.validatorGroup_setting.push(g)
        },
        bindSubmit: function(c) {
            return a.formValidator.pageIsValid(c.validatorGroup)
        },
        sustainType: function(a, d) {
            var j = a.tagName,
            f = a.type;
            switch (d) {
            case "formValidator":
                return ! 0;
            case "inputValidator":
                return "INPUT" == j || "TEXTAREA" == j || "SELECT" == j;
            case "regexValidator":
                return "INPUT" == j || "TEXTAREA" == j ? "checkbox" != f && "radio" != f: !1;
            case "functionValidator":
                return ! 0
            }
        },
        appendValid: function(c, d) {
            var j = a("#" + c).get(0),
            f = d.validateType;
            if (!a.formValidator.sustainType(j, f)) return - 1;
            if ("formValidator" == f || void 0 == j.settings) j.settings = [];
            f = j.settings.push(d);
            j.settings[f - 1].index = f - 1;
            return f - 1
        },
        getInitConfig: function(c) {
            var g = null;
            a.each(d.validatorGroup_setting,
            function(a) {
                if (d.validatorGroup_setting[a].validatorGroup == c) return g = d.validatorGroup_setting[a],
                !1
            });
            return g
        },
        setTipMsg: function(c, g, j) {
            c = a(c);
            if (null == j || "" == j) c.hide();
            else {
                var f = "onShow" == g ? d.TIP_HTML.onShowHtml: "onFocus" == g ? d.TIP_HTML.onFocusHtml: "onCorrect" == g ? d.TIP_HTML.onCorrectHtml: d.TIP_HTML.onErrorHtml; (f.length = "" == j) ? c.hide() : (f = f.replace(/\$class\$/g, g).replace(/\$data\$/g, j), c.html(f).show())
            }
        },
        setTipState: function(c, g, j) {
            a.formValidator.getInitConfig(c.validatorGroup);
            var f = a("#" + c.settings[0].tipID);
            if (null == j || "" == j) f.hide();
            else {
                var k = "onShow" == g ? d.TIP_HTML.onShowHtml: "onFocus" == g ? d.TIP_HTML.onFocusHtml: "onCorrect" == g ? d.TIP_HTML.onCorrectHtml: d.TIP_HTML.onErrorHtml;
                if (k.length = "" == j) f.hide();
                else if ("onFocus" == g) {
                    if (c.settings[0].onFocusCallBack && c.settings[0].onFocusCallBack() || !c.settings[0].onFocusCallBack) k = k.replace(/\$class\$/g, g).replace(/\$data\$/g, j),
                    f.html(k).show()
                } else if ("onShow" == g) {
                    if (c.settings[0].onShowCallBack && c.settings[0].onShowCallBack() || !c.settings[0].onShowCallBack) k = k.replace(/\$class\$/g, g).replace(/\$data\$/g, j),
                    f.html(k).show()
                } else if ("onError" == g) {
                    if (c.settings[0].onErrorCallBack && c.settings[0].onErrorCallBack() || !c.settings[0].onErrorCallBack) k = k.replace(/\$class\$/g, g).replace(/\$data\$/g, j),
                    f.html(k).show()
                } else k = k.replace(/\$class\$/g, g).replace(/\$data\$/g, j),
                f.html(k).show();
                j = c.type;
                if ("password" == j || "text" == j || "file" == j || "select" == c.tagname) jqobj = a(c),
                "" != d.TIP_CSS.onShowClass && "onShow" == g && ("" != c.settings[0].onShowText && c.value == c.settings[0].onShowText && d.TIP_CSS.onShowTextClass ? jqobj.removeClass().addClass(d.TIP_CSS.onShowTextClass) : jqobj.removeClass().addClass(d.TIP_CSS.onShowClass)),
                "" != d.TIP_CSS.onFocusClass && "onFocus" == g && jqobj.removeClass().addClass(d.TIP_CSS.onFocusClass),
                "" != d.TIP_CSS.onCorrectClass && "onCorrect" == g && jqobj.removeClass().addClass(d.TIP_CSS.onCorrectClass),
                "" != d.TIP_CSS.onErrorClass && "onError" == g && ("" != c.settings[0].onShowText && c.value == c.settings[0].onShowText && d.TIP_CSS.onErrorShowTextClass ? jqobj.removeClass().addClass(d.TIP_CSS.onErrorShowTextClass) : jqobj.removeClass().addClass(d.TIP_CSS.onErrorClass))
            }
        },
        resetTipState: function(c) {
            void 0 == c && (c = "1");
            c = a.formValidator.getInitConfig(c);
            a.each(c.validObjects,
            function() {
                var c = this.settings[0],
                d = c.defaultPassed;
                a.formValidator.setTipState(this, d ? "onCorrect": "onShow", d ? a.formValidator.getStatusText(this, c.onCorrect) : c.onShow)
            })
        },
        setFailState: function(c, d) {
            a.formValidator.setTipState(a("#" + c).get(0), "onError", d)
        },
        showMessage: function(c) {
            var d = c.id,
            j = a("#" + d).get(0),
            f = c.isValid,
            k = c.setting,
            m = "",
            o = "",
            q = a.formValidator.getInitConfig(j.validatorGroup);
            f ? (m = a.formValidator.isEmpty(d) ? k.onEmpty: a.formValidator.getStatusText(j, k.onCorrect), a.formValidator.setTipState(j, "onCorrect", m)) : (o = "onError", m = "" == c.errormsg ? a.formValidator.getStatusText(j, k.onError) : c.errormsg, "AlertTip" == q.mode ? j.validValueOld != a(j).val() && alert(m) : a.formValidator.setTipState(j, o, m));
            return m
        },
        getLength: function(c) {
            var d = a("#" + c),
            j = d.get(0),
            f = j.type,
            c = 0;
            switch (f) {
            case "text":
            case "hidden":
            case "password":
            case "textarea":
            case "file":
                d = d.val();
                f = j.settings[0];
                j.isInputControl && j.value == f.onShowText && (d = "");
                if (a.formValidator.getInitConfig(j.validatorGroup).wideWord) for (j = 0; j < d.length; j++) c += 19968 <= d.charCodeAt(j) && 40869 >= d.charCodeAt(j) ? 2 : 1;
                else c = d.length;
                break;
            case "checkbox":
            case "radio":
                c = a("input[type='" + f + "'][name='" + d.attr("name") + "']:checked").length;
                break;
            case "select-one":
                c = j.options ? j.options.selectedIndex: -1;
                break;
            case "select-multiple":
                c = a("select[name=" + j.name + "] option:selected").length
            }
            return c
        },
        isEmpty: function(c) {
            return a("#" + c).get(0).settings[0].empty && 0 == a.formValidator.getLength(c)
        },
        isOneValid: function(c) {
            return a.formValidator.oneIsValid(c).isValid
        },
        oneIsValid: function(c) {
            var d = {},
            j = a("#" + c).get(0),
            f = a.formValidator.getInitConfig(j.validatorGroup);
            d.initConfig = f;
            d.id = c;
            d.errormsg = "";
            var k = j.settings,
            m = k.length,
            o;
            1 == m && (k[0].bind = !1);
            if (!k[0].bind) return null;
            a.formValidator.resetInputValue(!0, f, c);
            for (var q = 0; q < m; q++) if (0 == q) {
                if (a.formValidator.isEmpty(c)) {
                    d.isValid = !0;
                    d.setting = k[0];
                    break
                }
            } else {
                d.setting = k[q];
                o = k[q].validateType;
                switch (o) {
                case "inputValidator":
                    a.formValidator.inputValid(d);
                    break;
                case "regexValidator":
                    a.formValidator.regexValid(d);
                    break;
                case "functionValidator":
                    a.formValidator.functionValid(d)
                }
                j.onceValided = !0;
                if (k[q].isValid) d.isValid = !0,
                d.setting = k[0];
                else {
                    d.isValid = !1;
                    d.setting = k[q];
                    break
                }
            }
            a.formValidator.resetInputValue(!1, f, c);
            return d
        },
        pageIsValid: function(c) {
            var d = a.formValidator.getInitConfig(c);
            return a.formValidator.areaIsValid(c, d.validObjects, !0)
        },
        areaIsValid: function(c, d, j) {
            var f = a.formValidator.getInitConfig(c);
            d || (d = f.validObjects);
            j || (j = !1);
            void 0 == c && (c = "1");
            var k = !0,
            m, o = "",
            q, z = "^",
            F, L, l = "^",
            u = [];
            f.status = "sumbiting";
            a.each(d,
            function() {
                if (a(this).length == 0) return true;
                if (this.settings[0].bind) {
                    L = this.name;
                    if (l.indexOf("^" + L + "^") == -1) {
                        onceValided = this.onceValided == void 0 ? false: this.onceValided;
                        L && (l = l + L + "^");
                        if (m = a.formValidator.oneIsValid(this.id)) {
                            if (!m.isValid) {
                                k = false;
                                q = m.errormsg == "" ? m.setting.onError: m.errormsg;
                                u[u.length] = q;
                                if (F == null) F = m.id;
                                o == "" && (o = q)
                            }
                            if (f.mode != "AlertTip") {
                                var c = this.settings[0].tipID;
                                if (z.indexOf("^" + c + "^") == -1) {
                                    m.isValid || (z = z + c + "^");
                                    a.formValidator.showMessage(m)
                                }
                            }
                        }
                    }
                }
            });
            if (j) if (k) if (f.pageUPEditor && 0 < f.pageUPEditor.length) k = !1,
            1 == f.pageUPEditor.length ? f.pageUPEditor[0].result(f.pageUPEditor[0].keyName,
            function() {
                f.pageUPEditor[0].machineInfo(f.pageUPEditor[0].keyName,
                function() {
                    f.pageUPEditor[0].callback();
                    if (!f.onSuccess()) return false;
                    f.submitOnce && a(":submit,:button,:reset").attr("disabled", true)
                })
            }) : 2 == f.pageUPEditor.length && f.pageUPEditor[0].result(f.pageUPEditor[0].keyName,
            function() {
                f.pageUPEditor[0].machineInfo(f.pageUPEditor[0].keyName,
                function() {
                    f.pageUPEditor[1].result(f.pageUPEditor[1].keyName,
                    function() {
                        f.pageUPEditor[1].machineInfo(f.pageUPEditor[1].keyName,
                        function() {
                            f.pageUPEditor[0].callback();
                            f.pageUPEditor[1].callback();
                            if (!f.onSuccess()) return false;
                            f.submitOnce && a(":submit,:button,:reset").attr("disabled", true)
                        })
                    })
                })
            });
            else {
                if (!f.onSuccess()) return ! 1;
                f.submitOnce && a(":submit,:button,:reset").attr("disabled", !0)
            } else f.pageUPEditor && 0 < f.pageUPEditor.length ? 1 == f.pageUPEditor.length ? f.pageUPEditor[0].result(f.pageUPEditor[0].keyName,
            function() {
                f.pageUPEditor[0].callback();
                f.onError(o, a("#" + F).get(0), u);
                F && f.errorFocus && a("#" + F).focus()
            }) : 2 == f.pageUPEditor.length && f.pageUPEditor[0].result(f.pageUPEditor[0].keyName,
            function() {
                f.pageUPEditor[1].result(f.pageUPEditor[1].keyName,
                function() {
                    f.pageUPEditor[0].callback();
                    f.pageUPEditor[1].callback();
                    f.onError(o, a("#" + F).get(0), u);
                    F && f.errorFocus && a("#" + F).focus()
                })
            }) : (f.onError(o, a("#" + F).get(0), u), F && f.errorFocus && a("#" + F).focus());
            f.status = "init";
            k && f.debug && alert("\u73b0\u5728\u6b63\u5904\u4e8e\u8c03\u8bd5\u6a21\u5f0f(debug:true)\uff0c\u4e0d\u80fd\u63d0\u4ea4");
            return ! f.debug && k
        },
        regexValid: function(c) {
            var d = c.id,
            c = c.setting;
            a("#" + d).get(0);
            var j = a("#" + d).get(0),
            f;
            j.settings[0].empty && "" == j.value ? c.isValid = !0 : (d = [], d.push(c.regExp), c.isValid = !1, a.each(d,
            function() {
                f = RegExp(this).test(a(j).val())
            }), c.isValid || (c.isValid = f))
        },
        functionValid: function(c) {
            var d = c.setting,
            j = a("#" + c.id),
            j = d.fun(j.val(), j.get(0));
            void 0 != j ? "string" === typeof j ? (d.isValid = !1, c.errormsg = j) : d.isValid = j: d.isValid = !0
        },
        inputValid: function(c) {
            var d = c.id,
            j = c.setting,
            f = a("#" + d),
            k = f.get(0),
            f = f.val(),
            k = k.type,
            d = a.formValidator.getLength(d),
            m = j.empty,
            o = !1;
            switch (k) {
            case "text":
            case "hidden":
            case "password":
            case "textarea":
            case "file":
                "size" == j.type && (m = j.empty, m.leftEmpty || (o = f.replace(/^[ \s]+/, "").length != f.length), !o && !m.rightEmpty && (o = f.replace(/[ \s]+$/, "").length != f.length), o && m.emptyError && (c.errormsg = m.emptyError));
            case "checkbox":
            case "select-one":
            case "select-multiple":
            case "radio":
                m = !1;
                if ("select-one" == k || "select-multiple" == k) j.type = "size";
                k = j.type;
                "size" == k ? (o || (m = !0), m && (f = d)) : "date" == k || "datetime" == k ? ("date" == k && (m = isDate(f)), "datetime" == k && (m = isDate(f)), m && (f = new Date(f), j.min = new Date(j.min), j.max = new Date(j.max))) : (stype = typeof j.min, "number" == stype && (f = (new Number(f)).valueOf(), isNaN(f) || (m = !0)), "string" == stype && (m = !0));
                j.isValid = !1;
                if (m) if (f < j.min || f > j.max) {
                    if (f < j.min && j.onErrorMin && (c.errormsg = j.onErrorMin), f > j.min && j.onErrorMax) c.errormsg = j.onErrorMax
                } else j.isValid = !0
            }
        },
        getStatusText: function(c, d) {
            return a.isFunction(d) ? d(a(c).val()) : d
        },
        resetInputValue: function(c, d, j) { (j ? a("#" + j) : a(d.showTextObjects)).each(function(a, d) {
                if (d.isInputControl) {
                    var g = d.settings[0].onShowText;
                    c && g == d.value && (d.value = ""); ! c && ("" != g && "" == d.value) && (d.value = g)
                }
            })
        }
    };
    a.fn.removeFormValidator = function(c) {
        var d = UPOP.VALIDATOR,
        c = c || {};
        void 0 == c.validatorGroup && (c.validatorGroup = "1");
        a.extend(!0, {},
        d.formValidator_setting);
        c = a.formValidator.getInitConfig(c.validatorGroup);
        c.validCount -= 1;
        c.validObjects;
        for (var j in c.validObjects) c.validObjects[j].id == this.attr("id") && c.validObjects.splice(j, 1);
        for (j in c.validObjects) c.validObjects[j].validatorIndex = j;
        return this
    };
    a.fn.formValidator = function(c) {
        var d = UPOP.VALIDATOR,
        c = c || {},
        j = {};
        void 0 == c.validatorGroup && (c.validatorGroup = "1");
        a.extend(!0, j, d.formValidator_setting);
        var f = a.formValidator.getInitConfig(c.validatorGroup);
        f.validCount += 1;
        "AlertTip" == f.mode && (j.autoModify = !0);
        a.extend(!0, j, c || {});
        return this.each(function() {
            this.validatorIndex = f.validCount - 1;
            this.validatorGroup = c.validatorGroup;
            var k = a(this),
            m = {};
            a.extend(true, m, j);
            var o = k.attr("id");
            if (!o) {
                o = Math.ceil(Math.random() * 5E7);
                k.attr("id", o)
            }
            var q = m.tipID ? m.tipID: o + "Tip";
            f.mode == "FixTip" && a("#" + q).css("margin", "0px").css("padding", "0px").css("background", "transparent");
            j.tipID = q;
            j.pwdTipID = m.pwdTipID ? m.pwdTipID: j.tipID;
            j.fixTipID = m.fixTipID ? m.fixTipID: o + "FixTip";
            a.formValidator.appendValid(o, j);
            m = a.inArray(k, f.validObjects);
            m == -1 ? f.validObjects.push(this) : f.validObjects[m] = this;
            a.formValidator.setTipState(this, "onShow", j.onShow);
            var m = this.tagName.toLowerCase(),
            z = this.type,
            F = j.defaultValue,
            L = z == "password" || z == "text" || z == "textarea";
            this.isInputControl = L;
            F && k.val(F);
            var l = a("#" + j.fixTipID),
            u = j.onShowFixText;
            if (l.length == 1 && onMouseOutFixTextHtml != "" && onMouseOnFixTextHtml != "" && u != "") {
                k.hover(function() {
                    l.html(onMouseOnFixTextHtml.replace(/\$data\$/g, u))
                },
                function() {
                    l.html(onMouseOutFixTextHtml.replace(/\$data\$/g, u))
                });
                l.css("padding", "0px 0px 0px 0px").css("margin", "0px 0px 0px 0px").html(onMouseOutFixTextHtml.replace(/\$data\$/g, j.onShowFixText))
            }
            var t = j.onShowText;
            if (m == "input" || m == "textarea") {
                if (L && t != "" && k.val() == "") {
                    showObjs = f.showTextObjects;
                    f.showTextObjects = showObjs + (showObjs != "" ? ",#": "#") + o;
                    k.val(t);
                    k.css("color", j.onShowTextColor.mouseOutColor);
                    d.TIP_CSS.onShowTextClass && k.removeClass().addClass(d.TIP_CSS.onShowTextClass)
                }
                k.focus(function() {
                    if (L) {
                        var c = k.val();
                        this.validValueOld = c;
                        if (t == c) {
                            this.value = "";
                            k.css("color", j.onShowTextColor.mouseOnColor)
                        }
                    }
                    c = a("#" + q);
                    this.lastshowclass = c.attr("class");
                    this.lastshowmsg = c.text();
                    a.formValidator.setTipState(this, "onFocus", j.onFocus)
                });
                k.bind("keyup",
                function() {});
                k.bind(j.triggerEvent,
                function() {
                    var c = this.settings;
                    if (c[0].leftTrim) this.value = this.replace(/^\s*/g, "");
                    if (c[0].rightTrim) this.value = this.replace(/\s*$/g, "");
                    if (L) {
                        if (this.value == "" && t != "") this.value = t;
                        this.value == t && k.css("color", j.onShowTextColor.mouseOutColor)
                    }
                    if (c[0].validate != false && f.mode != "AlertTip") {
                        var m = a.formValidator.oneIsValid(o);
                        if (m != null) {
                            var l = a.formValidator.showMessage(m);
                            if (m.isValid) c[0].empty && a("#" + o).get(0).value == "" && a.formValidator.setTipState(this, "onShow", a.formValidator.getStatusText(this, c[0].onShow));
                            else {
                                if (j.autoModify && L) {
                                    a(this).val(this.validValueOld);
                                    a.formValidator.setTipState(this, "onShow", a.formValidator.getStatusText(this, j.onCorrect))
                                } else if (f.forceValid || j.forceValid) {
                                    alert(l);
                                    this.focus()
                                }
                                if (d.initConfig_setting.style == "unionpay") {
                                    l = m.id; (a("#" + l).get(0).value == "" || a("#" + l).get(0).value == c[0].onShowText) && a.formValidator.setTipState(this, "onShow", a.formValidator.getStatusText(this, c[0].onShow))
                                }
                            }
                            c[0].valiCallback && c[0].valiCallback(this, m)
                        }
                    } else f.mode == "AlertTip" && a.formValidator.setTipState(this, "onShow", c[0].onShow)
                })
            } else m == "select" && k.bind({
                focus: function() {
                    a.formValidator.setTipState(this, "onFocus", j.onFocus)
                },
                blur: function() { (this.validValueOld == void 0 || this.validValueOld == k.val()) && a(this).trigger("change")
                },
                change: function() {
                    var c = a.formValidator.oneIsValid(o);
                    c != null && a.formValidator.showMessage(c)
                }
            })
        })
    };
    a.fn.inputValidator = function(c) {
        var g = {};
        a.extend(!0, g, d.inputValidator_setting, c || {});
        return this.each(function() {
            a.formValidator.appendValid(this.id, g)
        })
    };
    a.fn.regexValidator = function(c) {
        var g = {};
        a.extend(!0, g, d.regexValidator_setting, c || {});
        return this.each(function() {
            a.formValidator.appendValid(this.id, g)
        })
    };
    a.fn.functionValidator = function(c) {
        var g = {};
        a.extend(!0, g, d.functionValidator_setting, c || {});
        return this.each(function() {
            a.formValidator.appendValid(this.id, g)
        })
    };
    a.fn.upsmsCodeValidate = function() {
        return this.each(function() {
            a(this).formValidator({
                onShowText: "",
                onShow: "&nbsp;",
                onFocus: "&nbsp;",
                onCorrect: "&nbsp;",
                validatorGroup: "1"
            }).functionValidator({
                fun: function(c, d) {
                    if ("" == c) return d.settings[1].onError = a.getI18Text("smsCode_must_tips"),
                    !1;
                    var j = c.replace(/[ ]/g, "");
                    if (6 > j.length) return d.settings[1].onError = "" != j.replace(/[\d]/g, "") ? a.getI18Text("smsCode_error_tips") : a.getI18Text("smsCode_error_limit"),
                    !1;
                    if (UPOP.VALIDATOR.REGEX.smsCode.test(c.replace(/[ ]/g, ""))) return ! 0;
                    d.settings[1].onError = a.getI18Text("smsCode_error_tips");
                    return ! 1
                },
                onError: a.getI18Text("smsCode_error_tips")
            })
        })
    };
    a.fn.upcaptchaValidate = function() {
        return this.each(function() {
            a(this).formValidator({
                onShow: "&nbsp;",
                onFocus: "&nbsp;",
                onError: a.getI18Text("captcha_error_tips"),
                onCorrect: "&nbsp;",
                validatorGroup: "1"
            }).functionValidator({
                fun: function(a) {
                    return "" == a ? !1 : !0
                },
                onError: a.getI18Text("captcha_error_must")
            }).inputValidator({
                min: 4,
                max: 4,
                onError: a.getI18Text("captcha_error_limit")
            }).regexValidator({
                regExp: UPOP.VALIDATOR.REGEX.captcha,
                onError: a.getI18Text("captcha_error_tips")
            })
        })
    };
    a.fn.upcardTelephoneValidate = function() {
        return this.each(function() {
            a(this).formValidator({
                onShowText: "",
                onShow: a.getI18Text("mobilephone_onFocus_tips"),
                onFocus: a.getI18Text("mobilephone_onFocus_tips"),
                onError: a.getI18Text("mobilephone_error_limit"),
                onCorrect: a.getI18Text("mobilephone_onFocus_tips"),
                validatorGroup: "1"
            }).functionValidator({
                fun: function(c, d) {
                    if ("" == c) return d.settings[1].onError = a.getI18Text("mobilephone_onFocus_tips"),
                    !1;
                    var j = c.replace(/[ ]/g, "");
                    if (11 > j.length) return d.settings[1].onError = "" != j.replace(/[\d]/g, "") ? a.getI18Text("mobilephone_error_tips") : a.getI18Text("mobilephone_error_limit"),
                    !1;
                    if (UPOP.VALIDATOR.REGEX.mobilephone.test(c.replace(/[ ]/g, ""))) {
                        try {
                            if (0 < a("#bankActivatePhoneNumberDisplay").length && "" != a("#bankActivatePhoneNumberDisplay").val()) {
                                var f = c.replace(/[ ]/g, "").substring(0, 3);
                                if (a("#bankActivatePhoneNumberDisplay").val().substring(0, 3) != f) return d.settings[1].onError = a.getI18Text("mobilephone_error_tips34"),
                                !1;
                                f = c.replace(/[ ]/g, "").substring(7, 11);
                                if (a("#bankActivatePhoneNumberDisplay").val().substring(7, 11) != f) return d.settings[1].onError = a.getI18Text("mobilephone_error_tips34"),
                                !1
                            }
                        } catch(k) {
                            return d.settings[1].onError = a.getI18Text("mobilephone_error_tips"),
                            !1
                        }
                        return ! 0
                    }
                    d.settings[1].onError = a.getI18Text("mobilephone_error_tips");
                    return ! 1
                },
                onError: a.getI18Text("mobilephone_error_tips")
            })
        })
    }
})(jQuery); (function(a, d) {
    "object" === typeof exports ? module.exports = exports = d() : "function" === typeof define && define.amd ? define([], d) : a.CryptoJS = d()
})(this,
function() {
    var a;
    if (! (a = l)) {
        var d = Math,
        c = {},
        g = c.lib = {},
        j = function() {},
        f = g.Base = {
            extend: function(a) {
                j.prototype = this;
                var b = new j;
                a && b.mixIn(a);
                b.hasOwnProperty("init") || (b.init = function() {
                    b.$super.init.apply(this, arguments)
                });
                b.init.prototype = b;
                b.$super = this;
                return b
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        k = g.WordArray = f.extend({
            init: function(a, b) {
                a = this.words = a || [];
                this.sigBytes = void 0 != b ? b: 4 * a.length
            },
            toString: function(a) {
                return (a || o).stringify(this)
            },
            concat: function(a) {
                var b = this.words,
                c = a.words,
                d = this.sigBytes,
                a = a.sigBytes;
                this.clamp();
                if (d % 4) for (var e = 0; e < a; e++) b[d + e >>> 2] |= (c[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((d + e) % 4);
                else for (e = 0; e < a; e += 4) b[d + e >>> 2] = c[e >>> 2];
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                b = this.sigBytes;
                a[b >>> 2] &= 4294967295 << 32 - 8 * (b % 4);
                a.length = d.ceil(b / 4)
            },
            clone: function() {
                var a = f.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var b = [], c = function(a) {
                    var b = 987654321;
                    return function() {
                        b = 36969 * (b & 65535) + (b >> 16) & 4294967295;
                        a = 18E3 * (a & 65535) + (a >> 16) & 4294967295;
                        var c = (b << 16) + a & 4294967295;
                        return (c / 4294967296 + 0.5) * (0.5 < d.random() ? 1 : -1)
                    }
                },
                e = 0, f; e < a; e += 4) {
                    var g = c(4294967296 * (f || d.random()));
                    f = 987654071 * g();
                    b.push(4294967296 * g() | 0)
                }
                return new k.init(b, a)
            }
        }),
        m = c.enc = {},
        o = m.Hex = {
            stringify: function(a) {
                for (var b = a.words,
                a = a.sigBytes,
                c = [], d = 0; d < a; d++) {
                    var e = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                    c.push((e >>> 4).toString(16));
                    c.push((e & 15).toString(16))
                }
                return c.join("")
            },
            parse: function(a) {
                for (var b = a.length,
                c = [], d = 0; d < b; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
                return new k.init(c, b / 2)
            }
        },
        q = m.Latin1 = {
            stringify: function(a) {
                for (var b = a.words,
                a = a.sigBytes,
                c = [], d = 0; d < a; d++) c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
                return c.join("")
            },
            parse: function(a) {
                for (var b = a.length,
                c = [], d = 0; d < b; d++) c[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4);
                return new k.init(c, b)
            }
        },
        z = m.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(q.stringify(a)))
                } catch(b) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return q.parse(unescape(encodeURIComponent(a)))
            }
        },
        F = g.BufferedBlockAlgorithm = f.extend({
            reset: function() {
                this._data = new k.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = z.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var b = this._data,
                c = b.words,
                e = b.sigBytes,
                f = this.blockSize,
                g = e / (4 * f),
                g = a ? d.ceil(g) : d.max((g | 0) - this._minBufferSize, 0),
                a = g * f,
                e = d.min(4 * a, e);
                if (a) {
                    for (var h = 0; h < a; h += f) this._doProcessBlock(c, h);
                    h = c.splice(0, a);
                    b.sigBytes -= e
                }
                return new k.init(h, e)
            },
            clone: function() {
                var a = f.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
        g.Hasher = F.extend({
            cfg: f.extend(),
            init: function(a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            },
            reset: function() {
                F.reset.call(this);
                this._doReset()
            },
            update: function(a) {
                this._append(a);
                this._process();
                return this
            },
            finalize: function(a) {
                a && this._append(a);
                return this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(a) {
                return function(b, c) {
                    return (new a.init(c)).finalize(b)
                }
            },
            _createHmacHelper: function(a) {
                return function(b, c) {
                    return (new L.HMAC.init(a, c)).finalize(b)
                }
            }
        });
        var L = c.algo = {};
        a = c
    }
    var l = a,
    u = l,
    t = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(a) {
            var b = a.words,
            c = a.sigBytes,
            d = this._map;
            a.clamp();
            for (var a = [], e = 0; e < c; e += 3) for (var f = (b[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 16 | (b[e + 1 >>> 2] >>> 24 - 8 * ((e + 1) % 4) & 255) << 8 | b[e + 2 >>> 2] >>> 24 - 8 * ((e + 2) % 4) & 255, g = 0; 4 > g && e + 0.75 * g < c; g++) a.push(d.charAt(f >>> 6 * (3 - g) & 63));
            if (b = d.charAt(64)) for (; a.length % 4;) a.push(b);
            return a.join("")
        },
        parse: function(a) {
            var b = a.length,
            c = this._map,
            d = c.charAt(64);
            d && (d = a.indexOf(d), -1 != d && (b = d));
            for (var d = [], e = 0, f = 0; f < b; f++) if (f % 4) {
                var g = c.indexOf(a.charAt(f - 1)) << 2 * (f % 4),
                h = c.indexOf(a.charAt(f)) >>> 6 - 2 * (f % 4);
                d[e >>> 2] |= (g | h) << 24 - 8 * (e % 4);
                e++
            }
            return t.create(d, e)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    for (var B = Math,
    A = function(a, b, c, d, e, f, g) {
        a = a + (b & c | ~b & d) + e + g;
        return (a << f | a >>> 32 - f) + b
    },
    K = function(a, b, c, d, e, f, g) {
        a = a + (b & d | c & ~d) + e + g;
        return (a << f | a >>> 32 - f) + b
    },
    M = function(a, b, c, d, e, f, g) {
        a = a + (b ^ c ^ d) + e + g;
        return (a << f | a >>> 32 - f) + b
    },
    C = function(a, b, c, d, e, f, g) {
        a = a + (c ^ (b | ~d)) + e + g;
        return (a << f | a >>> 32 - f) + b
    },
    R = l, S = R.lib, ra = S.WordArray, ab = S.Hasher, y = R.algo, x = [], e = 0; 64 > e; e++) x[e] = 4294967296 * B.abs(B.sin(e + 1)) | 0;
    var Wb = y.MD5 = ab.extend({
        _doReset: function() {
            this._hash = new ra.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(a, b) {
            for (var c = 0; 16 > c; c++) {
                var d = b + c,
                e = a[d];
                a[d] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var c = this._hash.words,
            d = a[b + 0],
            e = a[b + 1],
            f = a[b + 2],
            g = a[b + 3],
            h = a[b + 4],
            j = a[b + 5],
            k = a[b + 6],
            m = a[b + 7],
            l = a[b + 8],
            n = a[b + 9],
            o = a[b + 10],
            s = a[b + 11],
            t = a[b + 12],
            u = a[b + 13],
            z = a[b + 14],
            y = a[b + 15],
            p = c[0],
            w = c[1],
            r = c[2],
            q = c[3],
            p = A(p, w, r, q, d, 7, x[0]),
            q = A(q, p, w, r, e, 12, x[1]),
            r = A(r, q, p, w, f, 17, x[2]),
            w = A(w, r, q, p, g, 22, x[3]),
            p = A(p, w, r, q, h, 7, x[4]),
            q = A(q, p, w, r, j, 12, x[5]),
            r = A(r, q, p, w, k, 17, x[6]),
            w = A(w, r, q, p, m, 22, x[7]),
            p = A(p, w, r, q, l, 7, x[8]),
            q = A(q, p, w, r, n, 12, x[9]),
            r = A(r, q, p, w, o, 17, x[10]),
            w = A(w, r, q, p, s, 22, x[11]),
            p = A(p, w, r, q, t, 7, x[12]),
            q = A(q, p, w, r, u, 12, x[13]),
            r = A(r, q, p, w, z, 17, x[14]),
            w = A(w, r, q, p, y, 22, x[15]),
            p = K(p, w, r, q, e, 5, x[16]),
            q = K(q, p, w, r, k, 9, x[17]),
            r = K(r, q, p, w, s, 14, x[18]),
            w = K(w, r, q, p, d, 20, x[19]),
            p = K(p, w, r, q, j, 5, x[20]),
            q = K(q, p, w, r, o, 9, x[21]),
            r = K(r, q, p, w, y, 14, x[22]),
            w = K(w, r, q, p, h, 20, x[23]),
            p = K(p, w, r, q, n, 5, x[24]),
            q = K(q, p, w, r, z, 9, x[25]),
            r = K(r, q, p, w, g, 14, x[26]),
            w = K(w, r, q, p, l, 20, x[27]),
            p = K(p, w, r, q, u, 5, x[28]),
            q = K(q, p, w, r, f, 9, x[29]),
            r = K(r, q, p, w, m, 14, x[30]),
            w = K(w, r, q, p, t, 20, x[31]),
            p = M(p, w, r, q, j, 4, x[32]),
            q = M(q, p, w, r, l, 11, x[33]),
            r = M(r, q, p, w, s, 16, x[34]),
            w = M(w, r, q, p, z, 23, x[35]),
            p = M(p, w, r, q, e, 4, x[36]),
            q = M(q, p, w, r, h, 11, x[37]),
            r = M(r, q, p, w, m, 16, x[38]),
            w = M(w, r, q, p, o, 23, x[39]),
            p = M(p, w, r, q, u, 4, x[40]),
            q = M(q, p, w, r, d, 11, x[41]),
            r = M(r, q, p, w, g, 16, x[42]),
            w = M(w, r, q, p, k, 23, x[43]),
            p = M(p, w, r, q, n, 4, x[44]),
            q = M(q, p, w, r, t, 11, x[45]),
            r = M(r, q, p, w, y, 16, x[46]),
            w = M(w, r, q, p, f, 23, x[47]),
            p = C(p, w, r, q, d, 6, x[48]),
            q = C(q, p, w, r, m, 10, x[49]),
            r = C(r, q, p, w, z, 15, x[50]),
            w = C(w, r, q, p, j, 21, x[51]),
            p = C(p, w, r, q, t, 6, x[52]),
            q = C(q, p, w, r, g, 10, x[53]),
            r = C(r, q, p, w, o, 15, x[54]),
            w = C(w, r, q, p, e, 21, x[55]),
            p = C(p, w, r, q, l, 6, x[56]),
            q = C(q, p, w, r, y, 10, x[57]),
            r = C(r, q, p, w, k, 15, x[58]),
            w = C(w, r, q, p, u, 21, x[59]),
            p = C(p, w, r, q, h, 6, x[60]),
            q = C(q, p, w, r, s, 10, x[61]),
            r = C(r, q, p, w, f, 15, x[62]),
            w = C(w, r, q, p, n, 21, x[63]);
            c[0] = c[0] + p | 0;
            c[1] = c[1] + w | 0;
            c[2] = c[2] + r | 0;
            c[3] = c[3] + q | 0
        },
        _doFinalize: function() {
            var a = this._data,
            b = a.words,
            c = 8 * this._nDataBytes,
            d = 8 * a.sigBytes;
            b[d >>> 5] |= 128 << 24 - d % 32;
            var e = B.floor(c / 4294967296);
            b[(d + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            b[(d + 64 >>> 9 << 4) + 14] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            a.sigBytes = 4 * (b.length + 1);
            this._process();
            a = this._hash;
            b = a.words;
            for (c = 0; 4 > c; c++) d = b[c],
            b[c] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
            return a
        },
        clone: function() {
            var a = ab.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    R.MD5 = ab._createHelper(Wb);
    R.HmacMD5 = ab._createHmacHelper(Wb);
    var p = l,
    zc = p.lib,
    Zc = zc.WordArray,
    bb = zc.Hasher,
    ya = [],
    Xb = p.algo.SHA1 = bb.extend({
        _doReset: function() {
            this._hash = new Zc.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(a, b) {
            for (var c = this._hash.words,
            d = c[0], e = c[1], f = c[2], g = c[3], h = c[4], j = 0; 80 > j; j++) {
                if (16 > j) ya[j] = a[b + j] | 0;
                else {
                    var k = ya[j - 3] ^ ya[j - 8] ^ ya[j - 14] ^ ya[j - 16];
                    ya[j] = k << 1 | k >>> 31
                }
                k = (d << 5 | d >>> 27) + h + ya[j];
                k = 20 > j ? k + ((e & f | ~e & g) + 1518500249) : 40 > j ? k + ((e ^ f ^ g) + 1859775393) : 60 > j ? k + ((e & f | e & g | f & g) - 1894007588) : k + ((e ^ f ^ g) - 899497514);
                h = g;
                g = f;
                f = e << 30 | e >>> 2;
                e = d;
                d = k
            }
            c[0] = c[0] + d | 0;
            c[1] = c[1] + e | 0;
            c[2] = c[2] + f | 0;
            c[3] = c[3] + g | 0;
            c[4] = c[4] + h | 0
        },
        _doFinalize: function() {
            var a = this._data,
            b = a.words,
            c = 8 * this._nDataBytes,
            d = 8 * a.sigBytes;
            b[d >>> 5] |= 128 << 24 - d % 32;
            b[(d + 64 >>> 9 << 4) + 14] = Math.floor(c / 4294967296);
            b[(d + 64 >>> 9 << 4) + 15] = c;
            a.sigBytes = 4 * b.length;
            this._process();
            return this._hash
        },
        clone: function() {
            var a = bb.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    p.SHA1 = bb._createHelper(Xb);
    p.HmacSHA1 = bb._createHmacHelper(Xb);
    for (var cb = Math,
    db = l,
    Ac = db.lib,
    $c = Ac.WordArray,
    Ab = Ac.Hasher,
    ad = db.algo,
    Bc = [], Cc = [], Dc = function(a) {
        return 4294967296 * (a - (a | 0)) | 0
    },
    Bb = 2, eb = 0; 64 > eb;) {
        var Yb;
        a: {
            for (var Ec = Bb,
            bd = cb.sqrt(Ec), Zb = 2; Zb <= bd; Zb++) if (! (Ec % Zb)) {
                Yb = !1;
                break a
            }
            Yb = !0
        }
        Yb && (8 > eb && (Bc[eb] = Dc(cb.pow(Bb, 0.5))), Cc[eb] = Dc(cb.pow(Bb, 1 / 3)), eb++);
        Bb++
    }
    var da = [],
    fb = ad.SHA256 = Ab.extend({
        _doReset: function() {
            this._hash = new $c.init(Bc.slice(0))
        },
        _doProcessBlock: function(a, b) {
            for (var c = this._hash.words,
            d = c[0], e = c[1], f = c[2], g = c[3], h = c[4], j = c[5], k = c[6], m = c[7], l = 0; 64 > l; l++) {
                if (16 > l) da[l] = a[b + l] | 0;
                else {
                    var n = da[l - 15],
                    o = da[l - 2];
                    da[l] = ((n << 25 | n >>> 7) ^ (n << 14 | n >>> 18) ^ n >>> 3) + da[l - 7] + ((o << 15 | o >>> 17) ^ (o << 13 | o >>> 19) ^ o >>> 10) + da[l - 16]
                }
                n = m + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & j ^ ~h & k) + Cc[l] + da[l];
                o = ((d << 30 | d >>> 2) ^ (d << 19 | d >>> 13) ^ (d << 10 | d >>> 22)) + (d & e ^ d & f ^ e & f);
                m = k;
                k = j;
                j = h;
                h = g + n | 0;
                g = f;
                f = e;
                e = d;
                d = n + o | 0
            }
            c[0] = c[0] + d | 0;
            c[1] = c[1] + e | 0;
            c[2] = c[2] + f | 0;
            c[3] = c[3] + g | 0;
            c[4] = c[4] + h | 0;
            c[5] = c[5] + j | 0;
            c[6] = c[6] + k | 0;
            c[7] = c[7] + m | 0
        },
        _doFinalize: function() {
            var a = this._data,
            b = a.words,
            c = 8 * this._nDataBytes,
            d = 8 * a.sigBytes;
            b[d >>> 5] |= 128 << 24 - d % 32;
            b[(d + 64 >>> 9 << 4) + 14] = cb.floor(c / 4294967296);
            b[(d + 64 >>> 9 << 4) + 15] = c;
            a.sigBytes = 4 * b.length;
            this._process();
            return this._hash
        },
        clone: function() {
            var a = Ab.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    db.SHA256 = Ab._createHelper(fb);
    db.HmacSHA256 = Ab._createHmacHelper(fb);
    var za = l,
    Fc = za.lib.WordArray,
    gb = za.enc;
    gb.Utf16 = gb.Utf16BE = {
        stringify: function(a) {
            for (var b = a.words,
            a = a.sigBytes,
            c = [], d = 0; d < a; d += 2) c.push(String.fromCharCode(b[d >>> 2] >>> 16 - 8 * (d % 4) & 65535));
            return c.join("")
        },
        parse: function(a) {
            for (var b = a.length,
            c = [], d = 0; d < b; d++) c[d >>> 1] |= a.charCodeAt(d) << 16 - 16 * (d % 2);
            return Fc.create(c, 2 * b)
        }
    };
    gb.Utf16LE = {
        stringify: function(a) {
            for (var b = a.words,
            a = a.sigBytes,
            c = [], d = 0; d < a; d += 2) c.push(String.fromCharCode((b[d >>> 2] >>> 16 - 8 * (d % 4) & 65535) << 8 & 4278255360 | (b[d >>> 2] >>> 16 - 8 * (d % 4) & 65535) >>> 8 & 16711935));
            return c.join("")
        },
        parse: function(a) {
            for (var b = a.length,
            c = [], d = 0; d < b; d++) {
                var e = c,
                f = d >>> 1,
                g = e[f],
                h = a.charCodeAt(d) << 16 - 16 * (d % 2);
                e[f] = g | h << 8 & 4278255360 | h >>> 8 & 16711935
            }
            return Fc.create(c, 2 * b)
        }
    };
    if ("function" == typeof ArrayBuffer) {
        var hb = l.lib.WordArray,
        Pa = hb.init; (hb.init = function(a) {
            a instanceof ArrayBuffer && (a = new Uint8Array(a));
            if (a instanceof Int8Array || "undefined" !== typeof Uint8ClampedArray && a instanceof Uint8ClampedArray || a instanceof Int16Array || a instanceof Uint16Array || a instanceof Int32Array || a instanceof Uint32Array || a instanceof Float32Array || a instanceof Float64Array) a = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
            if (a instanceof Uint8Array) {
                for (var b = a.byteLength,
                c = [], d = 0; d < b; d++) c[d >>> 2] |= a[d] << 24 - 8 * (d % 4);
                Pa.call(this, c, b)
            } else Pa.apply(this, arguments)
        }).prototype = hb
    }
    var ib = l,
    $b = ib.lib,
    sa = $b.WordArray,
    jb = $b.Hasher,
    ac = ib.algo,
    ed = sa.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
    bc = sa.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
    T = sa.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
    cc = sa.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
    Qa = sa.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
    Cb = sa.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
    kb = ac.RIPEMD160 = jb.extend({
        _doReset: function() {
            this._hash = sa.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(a, b) {
            for (var c = 0; 16 > c; c++) {
                var d = b + c,
                e = a[d];
                a[d] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var d = this._hash.words,
            e = Qa.words,
            f = Cb.words,
            g = ed.words,
            h = bc.words,
            j = T.words,
            k = cc.words,
            l, m, n, o, p, r, q, s, t, u;
            r = l = d[0];
            q = m = d[1];
            s = n = d[2];
            t = o = d[3];
            u = p = d[4];
            for (var w, c = 0; 80 > c; c += 1) w = l + a[b + g[c]] | 0,
            w = 16 > c ? w + ((m ^ n ^ o) + e[0]) : 32 > c ? w + ((m & n | ~m & o) + e[1]) : 48 > c ? w + (((m | ~n) ^ o) + e[2]) : 64 > c ? w + ((m & o | n & ~o) + e[3]) : w + ((m ^ (n | ~o)) + e[4]),
            w |= 0,
            w = w << j[c] | w >>> 32 - j[c],
            w = w + p | 0,
            l = p,
            p = o,
            o = n << 10 | n >>> 22,
            n = m,
            m = w,
            w = r + a[b + h[c]] | 0,
            w = 16 > c ? w + ((q ^ (s | ~t)) + f[0]) : 32 > c ? w + ((q & t | s & ~t) + f[1]) : 48 > c ? w + (((q | ~s) ^ t) + f[2]) : 64 > c ? w + ((q & s | ~q & t) + f[3]) : w + ((q ^ s ^ t) + f[4]),
            w |= 0,
            w = w << k[c] | w >>> 32 - k[c],
            w = w + u | 0,
            r = u,
            u = t,
            t = s << 10 | s >>> 22,
            s = q,
            q = w;
            w = d[1] + n + t | 0;
            d[1] = d[2] + o + u | 0;
            d[2] = d[3] + p + r | 0;
            d[3] = d[4] + l + q | 0;
            d[4] = d[0] + m + s | 0;
            d[0] = w
        },
        _doFinalize: function() {
            var a = this._data,
            b = a.words,
            c = 8 * this._nDataBytes,
            d = 8 * a.sigBytes;
            b[d >>> 5] |= 128 << 24 - d % 32;
            b[(d + 64 >>> 9 << 4) + 14] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            a.sigBytes = 4 * (b.length + 1);
            this._process();
            a = this._hash;
            b = a.words;
            for (c = 0; 5 > c; c++) d = b[c],
            b[c] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
            return a
        },
        clone: function() {
            var a = jb.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    ib.RIPEMD160 = jb._createHelper(kb);
    ib.HmacRIPEMD160 = jb._createHmacHelper(kb);
    var X = l,
    Ba = X.enc.Utf8;
    X.algo.HMAC = X.lib.Base.extend({
        init: function(a, b) {
            a = this._hasher = new a.init;
            "string" == typeof b && (b = Ba.parse(b));
            var c = a.blockSize,
            d = 4 * c;
            b.sigBytes > d && (b = a.finalize(b));
            b.clamp();
            for (var e = this._oKey = b.clone(), f = this._iKey = b.clone(), g = e.words, h = f.words, j = 0; j < c; j++) g[j] ^= 1549556828,
            h[j] ^= 909522486;
            e.sigBytes = f.sigBytes = d;
            this.reset()
        },
        reset: function() {
            var a = this._hasher;
            a.reset();
            a.update(this._iKey)
        },
        update: function(a) {
            this._hasher.update(a);
            return this
        },
        finalize: function(a) {
            var b = this._hasher,
            a = b.finalize(a);
            b.reset();
            return b.finalize(this._oKey.clone().concat(a))
        }
    });
    var Ca = l,
    lb = Ca.lib,
    Db = lb.Base,
    Ra = lb.WordArray,
    E = Ca.algo,
    ud = E.HMAC,
    Yc = E.PBKDF2 = Db.extend({
        cfg: Db.extend({
            keySize: 4,
            hasher: E.SHA1,
            iterations: 1
        }),
        init: function(a) {
            this.cfg = this.cfg.extend(a)
        },
        compute: function(a, b) {
            for (var c = this.cfg,
            d = ud.create(c.hasher, a), e = Ra.create(), f = Ra.create([1]), g = e.words, h = f.words, j = c.keySize, c = c.iterations; g.length < j;) {
                var k = d.update(b).finalize(f);
                d.reset();
                for (var m = k.words,
                l = m.length,
                n = k,
                o = 1; o < c; o++) {
                    n = d.finalize(n);
                    d.reset();
                    for (var q = n.words,
                    p = 0; p < l; p++) m[p] ^= q[p]
                }
                e.concat(k);
                h[0]++
            }
            e.sigBytes = 4 * j;
            return e
        }
    });
    Ca.PBKDF2 = function(a, b, c) {
        return Yc.create(c).compute(a, b)
    };
    var Vb = l,
    dc = Vb.lib,
    mb = dc.Base,
    fd = dc.WordArray,
    Hc = Vb.algo,
    gd = Hc.EvpKDF = mb.extend({
        cfg: mb.extend({
            keySize: 4,
            hasher: Hc.MD5,
            iterations: 1
        }),
        init: function(a) {
            this.cfg = this.cfg.extend(a)
        },
        compute: function(a, b) {
            for (var c = this.cfg,
            d = c.hasher.create(), e = fd.create(), f = e.words, g = c.keySize, c = c.iterations; f.length < g;) {
                h && d.update(h);
                var h = d.update(a).finalize(b);
                d.reset();
                for (var j = 1; j < c; j++) h = d.finalize(h),
                d.reset();
                e.concat(h)
            }
            e.sigBytes = 4 * g;
            return e
        }
    });
    Vb.EvpKDF = function(a, b, c) {
        return gd.create(c).compute(a, b)
    };
    var Eb = l,
    Ic = Eb.lib.WordArray,
    ec = Eb.algo,
    ba = ec.SHA256,
    fc = ec.SHA224 = ba.extend({
        _doReset: function() {
            this._hash = new Ic.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
        },
        _doFinalize: function() {
            var a = ba._doFinalize.call(this);
            a.sigBytes -= 4;
            return a
        }
    });
    Eb.SHA224 = ba._createHelper(fc);
    Eb.HmacSHA224 = ba._createHmacHelper(fc);
    var gc = l,
    Fb = gc.lib,
    Gb = Fb.Base,
    hd = Fb.WordArray,
    Jc = gc.x64 = {};
    Jc.Word = Gb.extend({
        init: function(a, b) {
            this.high = a;
            this.low = b
        }
    });
    Jc.WordArray = Gb.extend({
        init: function(a, b) {
            a = this.words = a || [];
            this.sigBytes = void 0 != b ? b: 8 * a.length
        },
        toX32: function() {
            for (var a = this.words,
            b = a.length,
            c = [], d = 0; d < b; d++) {
                var e = a[d];
                c.push(e.high);
                c.push(e.low)
            }
            return hd.create(c, this.sigBytes)
        },
        clone: function() {
            for (var a = Gb.clone.call(this), b = a.words = this.words.slice(0), c = b.length, d = 0; d < c; d++) b[d] = b[d].clone();
            return a
        }
    });
    for (var id = Math,
    Sa = l,
    Kc = Sa.lib,
    jd = Kc.WordArray,
    Ta = Kc.Hasher,
    Hb = Sa.x64.Word,
    Lc = Sa.algo,
    Ib = [], Da = [], Jb = [], ja = 1, Q = 0, nb = 0; 24 > nb; nb++) {
        Ib[ja + 5 * Q] = (nb + 1) * (nb + 2) / 2 % 64;
        var Ua = (2 * ja + 3 * Q) % 5,
        ja = Q % 5,
        Q = Ua
    }
    for (ja = 0; 5 > ja; ja++) for (Q = 0; 5 > Q; Q++) Da[ja + 5 * Q] = Q + 5 * ((2 * ja + 3 * Q) % 5);
    for (var ob = 1,
    Va = 0; 24 > Va; Va++) {
        for (var D = 0,
        qb = 0,
        H = 0; 7 > H; H++) {
            if (ob & 1) {
                var Kb = (1 << H) - 1;
                32 > Kb ? qb ^= 1 << Kb: D ^= 1 << Kb - 32
            }
            ob = ob & 128 ? ob << 1 ^ 113 : ob << 1
        }
        Jb[Va] = Hb.create(D, qb)
    }
    for (var ka = [], Ea = 0; 25 > Ea; Ea++) ka[Ea] = Hb.create();
    var Y = Lc.SHA3 = Ta.extend({
        cfg: Ta.cfg.extend({
            outputLength: 512
        }),
        _doReset: function() {
            for (var a = this._state = [], b = 0; 25 > b; b++) a[b] = new Hb.init;
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
        },
        _doProcessBlock: function(a, b) {
            for (var c = this._state,
            d = this.blockSize / 2,
            e = 0; e < d; e++) {
                var f = a[b + 2 * e],
                g = a[b + 2 * e + 1],
                f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360,
                g = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360,
                h = c[e];
                h.high ^= g;
                h.low ^= f
            }
            for (d = 0; 24 > d; d++) {
                for (e = 0; 5 > e; e++) {
                    for (var j = f = 0,
                    k = 0; 5 > k; k++) h = c[e + 5 * k],
                    f ^= h.high,
                    j ^= h.low;
                    h = ka[e];
                    h.high = f;
                    h.low = j
                }
                for (e = 0; 5 > e; e++) {
                    h = ka[(e + 4) % 5];
                    f = ka[(e + 1) % 5];
                    g = f.high;
                    k = f.low;
                    f = h.high ^ (g << 1 | k >>> 31);
                    j = h.low ^ (k << 1 | g >>> 31);
                    for (k = 0; 5 > k; k++) h = c[e + 5 * k],
                    h.high ^= f,
                    h.low ^= j
                }
                for (g = 1; 25 > g; g++) h = c[g],
                e = h.high,
                h = h.low,
                k = Ib[g],
                32 > k ? (f = e << k | h >>> 32 - k, j = h << k | e >>> 32 - k) : (f = h << k - 32 | e >>> 64 - k, j = e << k - 32 | h >>> 64 - k),
                h = ka[Da[g]],
                h.high = f,
                h.low = j;
                h = ka[0];
                e = c[0];
                h.high = e.high;
                h.low = e.low;
                for (e = 0; 5 > e; e++) for (k = 0; 5 > k; k++) g = e + 5 * k,
                h = c[g],
                f = ka[g],
                g = ka[(e + 1) % 5 + 5 * k],
                j = ka[(e + 2) % 5 + 5 * k],
                h.high = f.high ^ ~g.high & j.high,
                h.low = f.low ^ ~g.low & j.low;
                h = c[0];
                e = Jb[d];
                h.high ^= e.high;
                h.low ^= e.low
            }
        },
        _doFinalize: function() {
            var a = this._data,
            b = a.words,
            c = 8 * a.sigBytes,
            d = 32 * this.blockSize;
            b[c >>> 5] |= 1 << 24 - c % 32;
            b[(id.ceil((c + 1) / d) * d >>> 5) - 1] |= 128;
            a.sigBytes = 4 * b.length;
            this._process();
            for (var a = this._state,
            b = this.cfg.outputLength / 8,
            c = b / 8,
            d = [], e = 0; e < c; e++) {
                var f = a[e],
                g = f.high,
                f = f.low,
                g = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360,
                f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360;
                d.push(f);
                d.push(g)
            }
            return new jd.init(d, b)
        },
        clone: function() {
            for (var a = Ta.clone.call(this), b = a._state = this._state.slice(0), c = 0; 25 > c; c++) b[c] = b[c].clone();
            return a
        }
    });
    Sa.SHA3 = Ta._createHelper(Y);
    Sa.HmacSHA3 = Ta._createHmacHelper(Y);
    for (var r = function() {
        return ea.create.apply(ea, arguments)
    },
    ua = l, va = ua.lib.Hasher, rb = ua.x64, ea = rb.Word, Lb = rb.WordArray, Fa = ua.algo, hc = [r(1116352408, 3609767458), r(1899447441, 602891725), r(3049323471, 3964484399), r(3921009573, 2173295548), r(961987163, 4081628472), r(1508970993, 3053834265), r(2453635748, 2937671579), r(2870763221, 3664609560), r(3624381080, 2734883394), r(310598401, 1164996542), r(607225278, 1323610764), r(1426881987, 3590304994), r(1925078388, 4068182383), r(2162078206, 991336113), r(2614888103, 633803317), r(3248222580, 3479774868), r(3835390401, 2666613458), r(4022224774, 944711139), r(264347078, 2341262773), r(604807628, 2007800933), r(770255983, 1495990901), r(1249150122, 1856431235), r(1555081692, 3175218132), r(1996064986, 2198950837), r(2554220882, 3999719339), r(2821834349, 766784016), r(2952996808, 2566594879), r(3210313671, 3203337956), r(3336571891, 1034457026), r(3584528711, 2466948901), r(113926993, 3758326383), r(338241895, 168717936), r(666307205, 1188179964), r(773529912, 1546045734), r(1294757372, 1522805485), r(1396182291, 2643833823), r(1695183700, 2343527390), r(1986661051, 1014477480), r(2177026350, 1206759142), r(2456956037, 344077627), r(2730485921, 1290863460), r(2820302411, 3158454273), r(3259730800, 3505952657), r(3345764771, 106217008), r(3516065817, 3606008344), r(3600352804, 1432725776), r(4094571909, 1467031594), r(275423344, 851169720), r(430227734, 3100823752), r(506948616, 1363258195), r(659060556, 3750685593), r(883997877, 3785050280), r(958139571, 3318307427), r(1322822218, 3812723403), r(1537002063, 2003034995), r(1747873779, 3602036899), r(1955562222, 1575990012), r(2024104815, 1125592928), r(2227730452, 2716904306), r(2361852424, 442776044), r(2428436474, 593698344), r(2756734187, 3733110249), r(3204031479, 2999351573), r(3329325298, 3815920427), r(3391569614, 3928383900), r(3515267271, 566280711), r(3940187606, 3454069534), r(4118630271, 4000239992), r(116418474, 1914138554), r(174292421, 2731055270), r(289380356, 3203993006), r(460393269, 320620315), r(685471733, 587496836), r(852142971, 1086792851), r(1017036298, 365543100), r(1126000580, 2618297676), r(1288033470, 3409855158), r(1501505948, 4234509866), r(1607167915, 987167468), r(1816402316, 1246189591)], la = [], sb = 0; 80 > sb; sb++) la[sb] = r();
    var tb = Fa.SHA512 = va.extend({
        _doReset: function() {
            this._hash = new Lb.init([new ea.init(1779033703, 4089235720), new ea.init(3144134277, 2227873595), new ea.init(1013904242, 4271175723), new ea.init(2773480762, 1595750129), new ea.init(1359893119, 2917565137), new ea.init(2600822924, 725511199), new ea.init(528734635, 4215389547), new ea.init(1541459225, 327033209)])
        },
        _doProcessBlock: function(a, b) {
            for (var c = this._hash.words,
            d = c[0], e = c[1], f = c[2], g = c[3], h = c[4], j = c[5], k = c[6], c = c[7], m = d.high, l = d.low, n = e.high, o = e.low, q = f.high, p = f.low, r = g.high, s = g.low, t = h.high, u = h.low, w = j.high, z = j.low, x = k.high, y = k.low, B = c.high, F = c.low, A = m, C = l, D = n, E = o, G = q, H = p, L = r, J = s, K = t, I = u, M = w, N = z, R = x, T = y, aa = B, X = F, P = 0; 80 > P; P++) {
                var U = la[P];
                if (16 > P) var S = U.high = a[b + 2 * P] | 0,
                O = U.low = a[b + 2 * P + 1] | 0;
                else {
                    var S = la[P - 15],
                    O = S.high,
                    Q = S.low,
                    S = (O >>> 1 | Q << 31) ^ (O >>> 8 | Q << 24) ^ O >>> 7,
                    Q = (Q >>> 1 | O << 31) ^ (Q >>> 8 | O << 24) ^ (Q >>> 7 | O << 25),
                    Z = la[P - 2],
                    O = Z.high,
                    W = Z.low,
                    Z = (O >>> 19 | W << 13) ^ (O << 3 | W >>> 29) ^ O >>> 6,
                    W = (W >>> 19 | O << 13) ^ (W << 3 | O >>> 29) ^ (W >>> 6 | O << 26),
                    O = la[P - 7],
                    ba = O.high,
                    Y = la[P - 16],
                    V = Y.high,
                    Y = Y.low,
                    O = Q + O.low,
                    S = S + ba + (O >>> 0 < Q >>> 0 ? 1 : 0),
                    O = O + W,
                    S = S + Z + (O >>> 0 < W >>> 0 ? 1 : 0),
                    O = O + Y,
                    S = S + V + (O >>> 0 < Y >>> 0 ? 1 : 0);
                    U.high = S;
                    U.low = O
                }
                var ba = K & M ^ ~K & R,
                Y = I & N ^ ~I & T,
                U = A & D ^ A & G ^ D & G,
                ca = C & E ^ C & H ^ E & H,
                Q = (A >>> 28 | C << 4) ^ (A << 30 | C >>> 2) ^ (A << 25 | C >>> 7),
                Z = (C >>> 28 | A << 4) ^ (C << 30 | A >>> 2) ^ (C << 25 | A >>> 7),
                W = hc[P],
                ea = W.high,
                da = W.low,
                W = X + ((I >>> 14 | K << 18) ^ (I >>> 18 | K << 14) ^ (I << 23 | K >>> 9)),
                V = aa + ((K >>> 14 | I << 18) ^ (K >>> 18 | I << 14) ^ (K << 23 | I >>> 9)) + (W >>> 0 < X >>> 0 ? 1 : 0),
                W = W + Y,
                V = V + ba + (W >>> 0 < Y >>> 0 ? 1 : 0),
                W = W + da,
                V = V + ea + (W >>> 0 < da >>> 0 ? 1 : 0),
                W = W + O,
                V = V + S + (W >>> 0 < O >>> 0 ? 1 : 0),
                O = Z + ca,
                U = Q + U + (O >>> 0 < Z >>> 0 ? 1 : 0),
                aa = R,
                X = T,
                R = M,
                T = N,
                M = K,
                N = I,
                I = J + W | 0,
                K = L + V + (I >>> 0 < J >>> 0 ? 1 : 0) | 0,
                L = G,
                J = H,
                G = D,
                H = E,
                D = A,
                E = C,
                C = W + O | 0,
                A = V + U + (C >>> 0 < W >>> 0 ? 1 : 0) | 0
            }
            l = d.low = l + C;
            d.high = m + A + (l >>> 0 < C >>> 0 ? 1 : 0);
            o = e.low = o + E;
            e.high = n + D + (o >>> 0 < E >>> 0 ? 1 : 0);
            p = f.low = p + H;
            f.high = q + G + (p >>> 0 < H >>> 0 ? 1 : 0);
            s = g.low = s + J;
            g.high = r + L + (s >>> 0 < J >>> 0 ? 1 : 0);
            u = h.low = u + I;
            h.high = t + K + (u >>> 0 < I >>> 0 ? 1 : 0);
            z = j.low = z + N;
            j.high = w + M + (z >>> 0 < N >>> 0 ? 1 : 0);
            y = k.low = y + T;
            k.high = x + R + (y >>> 0 < T >>> 0 ? 1 : 0);
            F = c.low = F + X;
            c.high = B + aa + (F >>> 0 < X >>> 0 ? 1 : 0)
        },
        _doFinalize: function() {
            var a = this._data,
            b = a.words,
            c = 8 * this._nDataBytes,
            d = 8 * a.sigBytes;
            b[d >>> 5] |= 128 << 24 - d % 32;
            b[(d + 128 >>> 10 << 5) + 30] = Math.floor(c / 4294967296);
            b[(d + 128 >>> 10 << 5) + 31] = c;
            a.sigBytes = 4 * b.length;
            this._process();
            return this._hash.toX32()
        },
        clone: function() {
            var a = va.clone.call(this);
            a._hash = this._hash.clone();
            return a
        },
        blockSize: 32
    });
    ua.SHA512 = va._createHelper(tb);
    ua.HmacSHA512 = va._createHmacHelper(tb);
    var Ga = l,
    Mc = Ga.x64,
    ma = Mc.Word,
    vd = Mc.WordArray,
    Ha = Ga.algo,
    pb = Ha.SHA512,
    Nc = Ha.SHA384 = pb.extend({
        _doReset: function() {
            this._hash = new vd.init([new ma.init(3418070365, 3238371032), new ma.init(1654270250, 914150663), new ma.init(2438529370, 812702999), new ma.init(355462360, 4144912697), new ma.init(1731405415, 4290775857), new ma.init(2394180231, 1750603025), new ma.init(3675008525, 1694076839), new ma.init(1203062813, 3204075428)])
        },
        _doFinalize: function() {
            var a = pb._doFinalize.call(this);
            a.sigBytes -= 16;
            return a
        }
    });
    Ga.SHA384 = pb._createHelper(Nc);
    Ga.HmacSHA384 = pb._createHmacHelper(Nc);
    if (!l.lib.Cipher) {
        var Ia = l,
        fa = Ia.lib,
        $a = fa.Base,
        ub = fa.WordArray,
        ic = fa.BufferedBlockAlgorithm,
        Oc = Ia.enc.Base64,
        yc = Ia.algo.EvpKDF,
        Mb = fa.Cipher = ic.extend({
            cfg: $a.extend(),
            createEncryptor: function(a, b) {
                return this.create(this._ENC_XFORM_MODE, a, b)
            },
            createDecryptor: function(a, b) {
                return this.create(this._DEC_XFORM_MODE, a, b)
            },
            init: function(a, b, c) {
                this.cfg = this.cfg.extend(c);
                this._xformMode = a;
                this._key = b;
                this.reset()
            },
            reset: function() {
                ic.reset.call(this);
                this._doReset()
            },
            process: function(a) {
                this._append(a);
                return this._process()
            },
            finalize: function(a) {
                a && this._append(a);
                return this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function(a) {
                return {
                    encrypt: function(b, c, d) {
                        return ("string" == typeof c ? mc: Ja).encrypt(a, b, c, d)
                    },
                    decrypt: function(b, c, d) {
                        return ("string" == typeof c ? mc: Ja).decrypt(a, b, c, d)
                    }
                }
            }
        });
        fa.StreamCipher = Mb.extend({
            _doFinalize: function() {
                return this._process(!0)
            },
            blockSize: 1
        });
        var jc = Ia.mode = {},
        kc = function(a, b, c) {
            var d = this._iv;
            d ? this._iv = void 0 : d = this._prevBlock;
            for (var e = 0; e < c; e++) a[b + e] ^= d[e]
        },
        Wa = (fa.BlockCipherMode = $a.extend({
            createEncryptor: function(a, b) {
                return this.Encryptor.create(a, b)
            },
            createDecryptor: function(a, b) {
                return this.Decryptor.create(a, b)
            },
            init: function(a, b) {
                this._cipher = a;
                this._iv = b
            }
        })).extend();
        Wa.Encryptor = Wa.extend({
            processBlock: function(a, b) {
                var c = this._cipher,
                d = c.blockSize;
                kc.call(this, a, b, d);
                c.encryptBlock(a, b);
                this._prevBlock = a.slice(b, b + d)
            }
        });
        Wa.Decryptor = Wa.extend({
            processBlock: function(a, b) {
                var c = this._cipher,
                d = c.blockSize,
                e = a.slice(b, b + d);
                c.decryptBlock(a, b);
                kc.call(this, a, b, d);
                this._prevBlock = e
            }
        });
        var kd = jc.CBC = Wa,
        ld = (Ia.pad = {}).Pkcs7 = {
            pad: function(a, b) {
                for (var c = 4 * b,
                c = c - a.sigBytes % c,
                d = c << 24 | c << 16 | c << 8 | c,
                e = [], f = 0; f < c; f += 4) e.push(d);
                c = ub.create(e, c);
                a.concat(c)
            },
            unpad: function(a) {
                a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
            }
        };
        fa.BlockCipher = Mb.extend({
            cfg: Mb.cfg.extend({
                mode: kd,
                padding: ld
            }),
            reset: function() {
                Mb.reset.call(this);
                var a = this.cfg,
                b = a.iv,
                a = a.mode;
                if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;
                else c = a.createDecryptor,
                this._minBufferSize = 1;
                this._mode = c.call(a, this, b && b.words)
            },
            _doProcessBlock: function(a, b) {
                this._mode.processBlock(a, b)
            },
            _doFinalize: function() {
                var a = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    a.pad(this._data, this.blockSize);
                    var b = this._process(!0)
                } else b = this._process(!0),
                a.unpad(b);
                return b
            },
            blockSize: 4
        });
        var lc = fa.CipherParams = $a.extend({
            init: function(a) {
                this.mixIn(a)
            },
            toString: function(a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        md = (Ia.format = {}).OpenSSL = {
            stringify: function(a) {
                var b = a.ciphertext,
                a = a.salt;
                return (a ? ub.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(Oc)
            },
            parse: function(a) {
                var a = Oc.parse(a),
                b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = ub.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return lc.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        Ja = fa.SerializableCipher = $a.extend({
            cfg: $a.extend({
                format: md
            }),
            encrypt: function(a, b, c, d) {
                var d = this.cfg.extend(d),
                e = a.createEncryptor(c, d),
                b = e.finalize(b),
                e = e.cfg;
                return lc.create({
                    ciphertext: b,
                    key: c,
                    iv: e.iv,
                    algorithm: a,
                    mode: e.mode,
                    padding: e.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this._parse(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            _parse: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        Pc = (Ia.kdf = {}).OpenSSL = {
            execute: function(a, b, c, d) {
                d || (d = ub.random(8));
                a = yc.create({
                    keySize: b + c
                }).compute(a, d);
                c = ub.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return lc.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        mc = fa.PasswordBasedCipher = Ja.extend({
            cfg: Ja.cfg.extend({
                kdf: Pc
            }),
            encrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                c = d.kdf.execute(c, a.keySize, a.ivSize);
                d.iv = c.iv;
                a = Ja.encrypt.call(this, a, b, c.key, d);
                a.mixIn(c);
                return a
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this._parse(b, d.format);
                c = d.kdf.execute(c, a.keySize, a.ivSize, b.salt);
                d.iv = c.iv;
                return Ja.decrypt.call(this, a, b, c.key, d)
            }
        })
    }
    var nd = l.mode,
    U = function(a, b, c, d) {
        var e = this._iv;
        e ? (e = e.slice(0), this._iv = void 0) : e = this._prevBlock;
        d.encryptBlock(e, 0);
        for (d = 0; d < c; d++) a[b + d] ^= e[d]
    },
    Ka = l.lib.BlockCipherMode.extend();
    Ka.Encryptor = Ka.extend({
        processBlock: function(a, b) {
            var c = this._cipher,
            d = c.blockSize;
            U.call(this, a, b, d, c);
            this._prevBlock = a.slice(b, b + d)
        }
    });
    Ka.Decryptor = Ka.extend({
        processBlock: function(a, b) {
            var c = this._cipher,
            d = c.blockSize,
            e = a.slice(b, b + d);
            U.call(this, a, b, d, c);
            this._prevBlock = e
        }
    });
    nd.CFB = Ka;
    var nc = l.mode,
    vb = l.lib.BlockCipherMode.extend();
    vb.Encryptor = vb.extend({
        processBlock: function(a, b) {
            this._cipher.encryptBlock(a, b)
        }
    });
    vb.Decryptor = vb.extend({
        processBlock: function(a, b) {
            this._cipher.decryptBlock(a, b)
        }
    });
    nc.ECB = vb;
    l.pad.AnsiX923 = {
        pad: function(a, b) {
            var c = a.sigBytes,
            d = 4 * b,
            d = d - c % d,
            c = c + d - 1;
            a.clamp();
            a.words[c >>> 2] |= d << 24 - 8 * (c % 4);
            a.sigBytes += d
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    l.pad.Iso10126 = {
        pad: function(a, b) {
            var c = 4 * b,
            c = c - a.sigBytes % c;
            a.concat(l.lib.WordArray.random(c - 1)).concat(l.lib.WordArray.create([c << 24], 1))
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    l.pad.Iso97971 = {
        pad: function(a, b) {
            a.concat(l.lib.WordArray.create([2147483648], 1));
            l.pad.ZeroPadding.pad(a, b)
        },
        unpad: function(a) {
            l.pad.ZeroPadding.unpad(a);
            a.sigBytes--
        }
    };
    var od = l.mode,
    Nb = l.lib.BlockCipherMode.extend(),
    Ub = Nb.Encryptor = Nb.extend({
        processBlock: function(a, b) {
            var c = this._cipher,
            d = c.blockSize,
            e = this._iv,
            f = this._keystream;
            e && (f = this._keystream = e.slice(0), this._iv = void 0);
            c.encryptBlock(f, 0);
            for (c = 0; c < d; c++) a[b + c] ^= f[c]
        }
    });
    Nb.Decryptor = Ub;
    od.OFB = Nb;
    l.pad.NoPadding = {
        pad: function() {},
        unpad: function() {}
    };
    var oc = l,
    pd = oc.lib.CipherParams,
    Qc = oc.enc.Hex;
    oc.format.Hex = {
        stringify: function(a) {
            return a.ciphertext.toString(Qc)
        },
        parse: function(a) {
            a = Qc.parse(a);
            return pd.create({
                ciphertext: a
            })
        }
    };
    for (var ia = l,
    xa = ia.lib.BlockCipher,
    Rc = ia.algo,
    P = [], Sc = [], xc = [], pc = [], Tc = [], Uc = [], qc = [], rc = [], sc = [], Ob = [], ga = [], na = 0; 256 > na; na++) ga[na] = 128 > na ? na << 1 : na << 1 ^ 283;
    for (var Z = 0,
    oa = 0,
    na = 0; 256 > na; na++) {
        var V = oa ^ oa << 1 ^ oa << 2 ^ oa << 3 ^ oa << 4,
        V = V >>> 8 ^ V & 255 ^ 99;
        P[Z] = V;
        Sc[V] = Z;
        var wb = ga[Z],
        zb = ga[wb],
        tc = ga[zb],
        N = 257 * ga[V] ^ 16843008 * V;
        xc[Z] = N << 24 | N >>> 8;
        pc[Z] = N << 16 | N >>> 16;
        Tc[Z] = N << 8 | N >>> 24;
        Uc[Z] = N;
        N = 16843009 * tc ^ 65537 * zb ^ 257 * wb ^ 16843008 * Z;
        qc[V] = N << 24 | N >>> 8;
        rc[V] = N << 16 | N >>> 16;
        sc[V] = N << 8 | N >>> 24;
        Ob[V] = N;
        Z ? (Z = wb ^ ga[ga[ga[tc ^ wb]]], oa ^= ga[ga[oa]]) : Z = oa = 1
    }
    var La = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    Vc = Rc.AES = xa.extend({
        _doReset: function() {
            for (var a = this._key,
            b = a.words,
            c = a.sigBytes / 4,
            a = 4 * ((this._nRounds = c + 6) + 1), d = this._keySchedule = [], e = 0; e < a; e++) if (e < c) d[e] = b[e];
            else {
                var f = d[e - 1];
                e % c ? 6 < c && 4 == e % c && (f = P[f >>> 24] << 24 | P[f >>> 16 & 255] << 16 | P[f >>> 8 & 255] << 8 | P[f & 255]) : (f = f << 8 | f >>> 24, f = P[f >>> 24] << 24 | P[f >>> 16 & 255] << 16 | P[f >>> 8 & 255] << 8 | P[f & 255], f ^= La[e / c | 0] << 24);
                d[e] = d[e - c] ^ f
            }
            b = this._invKeySchedule = [];
            for (c = 0; c < a; c++) e = a - c,
            f = c % 4 ? d[e] : d[e - 4],
            b[c] = 4 > c || 4 >= e ? f: qc[P[f >>> 24]] ^ rc[P[f >>> 16 & 255]] ^ sc[P[f >>> 8 & 255]] ^ Ob[P[f & 255]]
        },
        encryptBlock: function(a, b) {
            this._doCryptBlock(a, b, this._keySchedule, xc, pc, Tc, Uc, P)
        },
        decryptBlock: function(a, b) {
            var c = a[b + 1];
            a[b + 1] = a[b + 3];
            a[b + 3] = c;
            this._doCryptBlock(a, b, this._invKeySchedule, qc, rc, sc, Ob, Sc);
            c = a[b + 1];
            a[b + 1] = a[b + 3];
            a[b + 3] = c
        },
        _doCryptBlock: function(a, b, c, d, e, f, g, h) {
            for (var j = this._nRounds,
            k = a[b] ^ c[0], m = a[b + 1] ^ c[1], l = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], o = 4, p = 1; p < j; p++) var q = d[k >>> 24] ^ e[m >>> 16 & 255] ^ f[l >>> 8 & 255] ^ g[n & 255] ^ c[o++],
            r = d[m >>> 24] ^ e[l >>> 16 & 255] ^ f[n >>> 8 & 255] ^ g[k & 255] ^ c[o++],
            s = d[l >>> 24] ^ e[n >>> 16 & 255] ^ f[k >>> 8 & 255] ^ g[m & 255] ^ c[o++],
            n = d[n >>> 24] ^ e[k >>> 16 & 255] ^ f[m >>> 8 & 255] ^ g[l & 255] ^ c[o++],
            k = q,
            m = r,
            l = s;
            q = (h[k >>> 24] << 24 | h[m >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[n & 255]) ^ c[o++];
            r = (h[m >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[n >>> 8 & 255] << 8 | h[k & 255]) ^ c[o++];
            s = (h[l >>> 24] << 24 | h[n >>> 16 & 255] << 16 | h[k >>> 8 & 255] << 8 | h[m & 255]) ^ c[o++];
            n = (h[n >>> 24] << 24 | h[k >>> 16 & 255] << 16 | h[m >>> 8 & 255] << 8 | h[l & 255]) ^ c[o++];
            a[b] = q;
            a[b + 1] = r;
            a[b + 2] = s;
            a[b + 3] = n
        },
        keySize: 8
    });
    ia.AES = xa._createHelper(Vc);
    var xb = function(a, b) {
        var c = (this._lBlock >>> a ^ this._rBlock) & b;
        this._rBlock ^= c;
        this._lBlock ^= c << a
    },
    Qb = function(a, b) {
        var c = (this._rBlock >>> a ^ this._lBlock) & b;
        this._lBlock ^= c;
        this._rBlock ^= c << a
    },
    Ma = l,
    Rb = Ma.lib,
    uc = Rb.WordArray,
    pa = Rb.BlockCipher,
    Sb = Ma.algo,
    Tb = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
    ca = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
    Oa = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
    qd = [{
        "0": 8421888,
        268435456 : 32768,
        536870912 : 8421378,
        805306368 : 2,
        1073741824 : 512,
        1342177280 : 8421890,
        1610612736 : 8389122,
        1879048192 : 8388608,
        2147483648 : 514,
        2415919104 : 8389120,
        2684354560 : 33280,
        2952790016 : 8421376,
        3221225472 : 32770,
        3489660928 : 8388610,
        3758096384 : 0,
        4026531840 : 33282,
        134217728 : 0,
        402653184 : 8421890,
        671088640 : 33282,
        939524096 : 32768,
        1207959552 : 8421888,
        1476395008 : 512,
        1744830464 : 8421378,
        2013265920 : 2,
        2281701376 : 8389120,
        2550136832 : 33280,
        2818572288 : 8421376,
        3087007744 : 8389122,
        3355443200 : 8388610,
        3623878656 : 32770,
        3892314112 : 514,
        4160749568 : 8388608,
        1 : 32768,
        268435457 : 2,
        536870913 : 8421888,
        805306369 : 8388608,
        1073741825 : 8421378,
        1342177281 : 33280,
        1610612737 : 512,
        1879048193 : 8389122,
        2147483649 : 8421890,
        2415919105 : 8421376,
        2684354561 : 8388610,
        2952790017 : 33282,
        3221225473 : 514,
        3489660929 : 8389120,
        3758096385 : 32770,
        4026531841 : 0,
        134217729 : 8421890,
        402653185 : 8421376,
        671088641 : 8388608,
        939524097 : 512,
        1207959553 : 32768,
        1476395009 : 8388610,
        1744830465 : 2,
        2013265921 : 33282,
        2281701377 : 32770,
        2550136833 : 8389122,
        2818572289 : 514,
        3087007745 : 8421888,
        3355443201 : 8389120,
        3623878657 : 0,
        3892314113 : 33280,
        4160749569 : 8421378
    },
    {
        "0": 1074282512,
        16777216 : 16384,
        33554432 : 524288,
        50331648 : 1074266128,
        67108864 : 1073741840,
        83886080 : 1074282496,
        100663296 : 1073758208,
        117440512 : 16,
        134217728 : 540672,
        150994944 : 1073758224,
        167772160 : 1073741824,
        184549376 : 540688,
        201326592 : 524304,
        218103808 : 0,
        234881024 : 16400,
        251658240 : 1074266112,
        8388608 : 1073758208,
        25165824 : 540688,
        41943040 : 16,
        58720256 : 1073758224,
        75497472 : 1074282512,
        92274688 : 1073741824,
        109051904 : 524288,
        125829120 : 1074266128,
        142606336 : 524304,
        159383552 : 0,
        176160768 : 16384,
        192937984 : 1074266112,
        209715200 : 1073741840,
        226492416 : 540672,
        243269632 : 1074282496,
        260046848 : 16400,
        268435456 : 0,
        285212672 : 1074266128,
        301989888 : 1073758224,
        318767104 : 1074282496,
        335544320 : 1074266112,
        352321536 : 16,
        369098752 : 540688,
        385875968 : 16384,
        402653184 : 16400,
        419430400 : 524288,
        436207616 : 524304,
        452984832 : 1073741840,
        469762048 : 540672,
        486539264 : 1073758208,
        503316480 : 1073741824,
        520093696 : 1074282512,
        276824064 : 540688,
        293601280 : 524288,
        310378496 : 1074266112,
        327155712 : 16384,
        343932928 : 1073758208,
        360710144 : 1074282512,
        377487360 : 16,
        394264576 : 1073741824,
        411041792 : 1074282496,
        427819008 : 1073741840,
        444596224 : 1073758224,
        461373440 : 524304,
        478150656 : 0,
        494927872 : 16400,
        511705088 : 1074266128,
        528482304 : 540672
    },
    {
        "0": 260,
        1048576 : 0,
        2097152 : 67109120,
        3145728 : 65796,
        4194304 : 65540,
        5242880 : 67108868,
        6291456 : 67174660,
        7340032 : 67174400,
        8388608 : 67108864,
        9437184 : 67174656,
        10485760 : 65792,
        11534336 : 67174404,
        12582912 : 67109124,
        13631488 : 65536,
        14680064 : 4,
        15728640 : 256,
        524288 : 67174656,
        1572864 : 67174404,
        2621440 : 0,
        3670016 : 67109120,
        4718592 : 67108868,
        5767168 : 65536,
        6815744 : 65540,
        7864320 : 260,
        8912896 : 4,
        9961472 : 256,
        11010048 : 67174400,
        12058624 : 65796,
        13107200 : 65792,
        14155776 : 67109124,
        15204352 : 67174660,
        16252928 : 67108864,
        16777216 : 67174656,
        17825792 : 65540,
        18874368 : 65536,
        19922944 : 67109120,
        20971520 : 256,
        22020096 : 67174660,
        23068672 : 67108868,
        24117248 : 0,
        25165824 : 67109124,
        26214400 : 67108864,
        27262976 : 4,
        28311552 : 65792,
        29360128 : 67174400,
        30408704 : 260,
        31457280 : 65796,
        32505856 : 67174404,
        17301504 : 67108864,
        18350080 : 260,
        19398656 : 67174656,
        20447232 : 0,
        21495808 : 65540,
        22544384 : 67109120,
        23592960 : 256,
        24641536 : 67174404,
        25690112 : 65536,
        26738688 : 67174660,
        27787264 : 65796,
        28835840 : 67108868,
        29884416 : 67109124,
        30932992 : 67174400,
        31981568 : 4,
        33030144 : 65792
    },
    {
        "0": 2151682048,
        65536 : 2147487808,
        131072 : 4198464,
        196608 : 2151677952,
        262144 : 0,
        327680 : 4198400,
        393216 : 2147483712,
        458752 : 4194368,
        524288 : 2147483648,
        589824 : 4194304,
        655360 : 64,
        720896 : 2147487744,
        786432 : 2151678016,
        851968 : 4160,
        917504 : 4096,
        983040 : 2151682112,
        32768 : 2147487808,
        98304 : 64,
        163840 : 2151678016,
        229376 : 2147487744,
        294912 : 4198400,
        360448 : 2151682112,
        425984 : 0,
        491520 : 2151677952,
        557056 : 4096,
        622592 : 2151682048,
        688128 : 4194304,
        753664 : 4160,
        819200 : 2147483648,
        884736 : 4194368,
        950272 : 4198464,
        1015808 : 2147483712,
        1048576 : 4194368,
        1114112 : 4198400,
        1179648 : 2147483712,
        1245184 : 0,
        1310720 : 4160,
        1376256 : 2151678016,
        1441792 : 2151682048,
        1507328 : 2147487808,
        1572864 : 2151682112,
        1638400 : 2147483648,
        1703936 : 2151677952,
        1769472 : 4198464,
        1835008 : 2147487744,
        1900544 : 4194304,
        1966080 : 64,
        2031616 : 4096,
        1081344 : 2151677952,
        1146880 : 2151682112,
        1212416 : 0,
        1277952 : 4198400,
        1343488 : 4194368,
        1409024 : 2147483648,
        1474560 : 2147487808,
        1540096 : 64,
        1605632 : 2147483712,
        1671168 : 4096,
        1736704 : 2147487744,
        1802240 : 2151678016,
        1867776 : 4160,
        1933312 : 2151682048,
        1998848 : 4194304,
        2064384 : 4198464
    },
    {
        "0": 128,
        4096 : 17039360,
        8192 : 262144,
        12288 : 536870912,
        16384 : 537133184,
        20480 : 16777344,
        24576 : 553648256,
        28672 : 262272,
        32768 : 16777216,
        36864 : 537133056,
        40960 : 536871040,
        45056 : 553910400,
        49152 : 553910272,
        53248 : 0,
        57344 : 17039488,
        61440 : 553648128,
        2048 : 17039488,
        6144 : 553648256,
        10240 : 128,
        14336 : 17039360,
        18432 : 262144,
        22528 : 537133184,
        26624 : 553910272,
        30720 : 536870912,
        34816 : 537133056,
        38912 : 0,
        43008 : 553910400,
        47104 : 16777344,
        51200 : 536871040,
        55296 : 553648128,
        59392 : 16777216,
        63488 : 262272,
        65536 : 262144,
        69632 : 128,
        73728 : 536870912,
        77824 : 553648256,
        81920 : 16777344,
        86016 : 553910272,
        90112 : 537133184,
        94208 : 16777216,
        98304 : 553910400,
        102400 : 553648128,
        106496 : 17039360,
        110592 : 537133056,
        114688 : 262272,
        118784 : 536871040,
        122880 : 0,
        126976 : 17039488,
        67584 : 553648256,
        71680 : 16777216,
        75776 : 17039360,
        79872 : 537133184,
        83968 : 536870912,
        88064 : 17039488,
        92160 : 128,
        96256 : 553910272,
        100352 : 262272,
        104448 : 553910400,
        108544 : 0,
        112640 : 553648128,
        116736 : 16777344,
        120832 : 262144,
        124928 : 537133056,
        129024 : 536871040
    },
    {
        "0": 268435464,
        256 : 8192,
        512 : 270532608,
        768 : 270540808,
        1024 : 268443648,
        1280 : 2097152,
        1536 : 2097160,
        1792 : 268435456,
        2048 : 0,
        2304 : 268443656,
        2560 : 2105344,
        2816 : 8,
        3072 : 270532616,
        3328 : 2105352,
        3584 : 8200,
        3840 : 270540800,
        128 : 270532608,
        384 : 270540808,
        640 : 8,
        896 : 2097152,
        1152 : 2105352,
        1408 : 268435464,
        1664 : 268443648,
        1920 : 8200,
        2176 : 2097160,
        2432 : 8192,
        2688 : 268443656,
        2944 : 270532616,
        3200 : 0,
        3456 : 270540800,
        3712 : 2105344,
        3968 : 268435456,
        4096 : 268443648,
        4352 : 270532616,
        4608 : 270540808,
        4864 : 8200,
        5120 : 2097152,
        5376 : 268435456,
        5632 : 268435464,
        5888 : 2105344,
        6144 : 2105352,
        6400 : 0,
        6656 : 8,
        6912 : 270532608,
        7168 : 8192,
        7424 : 268443656,
        7680 : 270540800,
        7936 : 2097160,
        4224 : 8,
        4480 : 2105344,
        4736 : 2097152,
        4992 : 268435464,
        5248 : 268443648,
        5504 : 8200,
        5760 : 270540808,
        6016 : 270532608,
        6272 : 270540800,
        6528 : 270532616,
        6784 : 8192,
        7040 : 2105352,
        7296 : 2097160,
        7552 : 0,
        7808 : 268435456,
        8064 : 268443656
    },
    {
        "0": 1048576,
        16 : 33555457,
        32 : 1024,
        48 : 1049601,
        64 : 34604033,
        80 : 0,
        96 : 1,
        112 : 34603009,
        128 : 33555456,
        144 : 1048577,
        160 : 33554433,
        176 : 34604032,
        192 : 34603008,
        208 : 1025,
        224 : 1049600,
        240 : 33554432,
        8 : 34603009,
        24 : 0,
        40 : 33555457,
        56 : 34604032,
        72 : 1048576,
        88 : 33554433,
        104 : 33554432,
        120 : 1025,
        136 : 1049601,
        152 : 33555456,
        168 : 34603008,
        184 : 1048577,
        200 : 1024,
        216 : 34604033,
        232 : 1,
        248 : 1049600,
        256 : 33554432,
        272 : 1048576,
        288 : 33555457,
        304 : 34603009,
        320 : 1048577,
        336 : 33555456,
        352 : 34604032,
        368 : 1049601,
        384 : 1025,
        400 : 34604033,
        416 : 1049600,
        432 : 1,
        448 : 0,
        464 : 34603008,
        480 : 33554433,
        496 : 1024,
        264 : 1049600,
        280 : 33555457,
        296 : 34603009,
        312 : 1,
        328 : 33554432,
        344 : 1048576,
        360 : 1025,
        376 : 34604032,
        392 : 33554433,
        408 : 34603008,
        424 : 0,
        440 : 34604033,
        456 : 1049601,
        472 : 1024,
        488 : 33555456,
        504 : 1048577
    },
    {
        "0": 134219808,
        1 : 131072,
        2 : 134217728,
        3 : 32,
        4 : 131104,
        5 : 134350880,
        6 : 134350848,
        7 : 2048,
        8 : 134348800,
        9 : 134219776,
        10 : 133120,
        11 : 134348832,
        12 : 2080,
        13 : 0,
        14 : 134217760,
        15 : 133152,
        2147483648 : 2048,
        2147483649 : 134350880,
        2147483650 : 134219808,
        2147483651 : 134217728,
        2147483652 : 134348800,
        2147483653 : 133120,
        2147483654 : 133152,
        2147483655 : 32,
        2147483656 : 134217760,
        2147483657 : 2080,
        2147483658 : 131104,
        2147483659 : 134350848,
        2147483660 : 0,
        2147483661 : 134348832,
        2147483662 : 134219776,
        2147483663 : 131072,
        16 : 133152,
        17 : 134350848,
        18 : 32,
        19 : 2048,
        20 : 134219776,
        21 : 134217760,
        22 : 134348832,
        23 : 131072,
        24 : 0,
        25 : 131104,
        26 : 134348800,
        27 : 134219808,
        28 : 134350880,
        29 : 133120,
        30 : 2080,
        31 : 134217728,
        2147483664 : 131072,
        2147483665 : 2048,
        2147483666 : 134348832,
        2147483667 : 133152,
        2147483668 : 32,
        2147483669 : 134348800,
        2147483670 : 134217728,
        2147483671 : 134219808,
        2147483672 : 134350880,
        2147483673 : 134217760,
        2147483674 : 134219776,
        2147483675 : 0,
        2147483676 : 133120,
        2147483677 : 2080,
        2147483678 : 131104,
        2147483679 : 134350848
    }],
    rd = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
    Na = Sb.DES = pa.extend({
        _doReset: function() {
            for (var a = this._key.words,
            b = [], c = 0; 56 > c; c++) {
                var d = Tb[c] - 1;
                b[c] = a[d >>> 5] >>> 31 - d % 32 & 1
            }
            a = this._subKeys = [];
            for (d = 0; 16 > d; d++) {
                for (var e = a[d] = [], f = Oa[d], c = 0; 24 > c; c++) e[c / 6 | 0] |= b[(ca[c] - 1 + f) % 28] << 31 - c % 6,
                e[4 + (c / 6 | 0)] |= b[28 + (ca[c + 24] - 1 + f) % 28] << 31 - c % 6;
                e[0] = e[0] << 1 | e[0] >>> 31;
                for (c = 1; 7 > c; c++) e[c] >>>= 4 * (c - 1) + 3;
                e[7] = e[7] << 5 | e[7] >>> 27
            }
            b = this._invSubKeys = [];
            for (c = 0; 16 > c; c++) b[c] = a[15 - c]
        },
        encryptBlock: function(a, b) {
            this._doCryptBlock(a, b, this._subKeys)
        },
        decryptBlock: function(a, b) {
            this._doCryptBlock(a, b, this._invSubKeys)
        },
        _doCryptBlock: function(a, b, c) {
            this._lBlock = a[b];
            this._rBlock = a[b + 1];
            xb.call(this, 4, 252645135);
            xb.call(this, 16, 65535);
            Qb.call(this, 2, 858993459);
            Qb.call(this, 8, 16711935);
            xb.call(this, 1, 1431655765);
            for (var d = 0; 16 > d; d++) {
                for (var e = c[d], f = this._lBlock, g = this._rBlock, h = 0, j = 0; 8 > j; j++) h |= qd[j][((g ^ e[j]) & rd[j]) >>> 0];
                this._lBlock = g;
                this._rBlock = f ^ h
            }
            c = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = c;
            xb.call(this, 1, 1431655765);
            Qb.call(this, 8, 16711935);
            Qb.call(this, 2, 858993459);
            xb.call(this, 16, 65535);
            xb.call(this, 4, 252645135);
            a[b] = this._lBlock;
            a[b + 1] = this._rBlock
        },
        keySize: 2,
        ivSize: 2,
        blockSize: 2
    });
    Ma.DES = pa._createHelper(Na);
    var yb = Sb.TripleDES = pa.extend({
        _doReset: function() {
            var a = this._key.words;
            this._des1 = Na.createEncryptor(uc.create(a.slice(0, 2)));
            this._des2 = Na.createEncryptor(uc.create(a.slice(2, 4)));
            this._des3 = Na.createEncryptor(uc.create(a.slice(4, 6)))
        },
        encryptBlock: function(a, b) {
            this._des1.encryptBlock(a, b);
            this._des2.decryptBlock(a, b);
            this._des3.encryptBlock(a, b)
        },
        decryptBlock: function(a, b) {
            this._des3.decryptBlock(a, b);
            this._des2.encryptBlock(a, b);
            this._des1.decryptBlock(a, b)
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2
    });
    Ma.TripleDES = pa._createHelper(yb);
    var Za = function() {
        for (var a = this._S,
        b = this._i,
        c = this._j,
        d = 0,
        e = 0; 4 > e; e++) {
            var b = (b + 1) % 256,
            c = (c + a[b]) % 256,
            f = a[b];
            a[b] = a[c];
            a[c] = f;
            d |= a[(a[b] + a[c]) % 256] << 24 - 8 * e
        }
        this._i = b;
        this._j = c;
        return d
    },
    Ya = l,
    vc = Ya.lib.StreamCipher,
    wc = Ya.algo,
    b = wc.RC4 = vc.extend({
        _doReset: function() {
            for (var a = this._key,
            b = a.words,
            a = a.sigBytes,
            c = this._S = [], d = 0; 256 > d; d++) c[d] = d;
            for (var e = d = 0; 256 > d; d++) {
                var f = d % a,
                e = (e + c[d] + (b[f >>> 2] >>> 24 - 8 * (f % 4) & 255)) % 256,
                f = c[d];
                c[d] = c[e];
                c[e] = f
            }
            this._i = this._j = 0
        },
        _doProcessBlock: function(a, b) {
            a[b] ^= Za.call(this)
        },
        keySize: 8,
        ivSize: 0
    });
    Ya.RC4 = vc._createHelper(b);
    var h = wc.RC4Drop = b.extend({
        cfg: b.cfg.extend({
            drop: 192
        }),
        _doReset: function() {
            b._doReset.call(this);
            for (var a = this.cfg.drop; 0 < a; a--) Za.call(this)
        }
    });
    Ya.RC4Drop = vc._createHelper(h);
    var n = l.mode,
    s = function(a) {
        if (255 === (a >> 24 & 255)) {
            var b = a >> 16 & 255,
            c = a >> 8 & 255,
            a = a & 255;
            255 === b ? (b = 0, 255 === c ? (c = 0, 255 === a ? a = 0 : ++a) : ++c) : ++b;
            a = 0 + (b << 16) + (c << 8) + a
        } else a += 16777216;
        return a
    },
    I = l.lib.BlockCipherMode.extend(),
    wa = I.Encryptor = I.extend({
        processBlock: function(a, b) {
            var c = this._cipher,
            d = c.blockSize,
            e = this._iv,
            f = this._counter;
            e && (f = this._counter = e.slice(0), this._iv = void 0);
            e = f;
            if (0 === (e[0] = s(e[0]))) e[1] = s(e[1]);
            f = f.slice(0);
            c.encryptBlock(f, 0);
            for (c = 0; c < d; c++) a[b + c] ^= f[c]
        }
    });
    I.Decryptor = wa;
    n.CTRGladman = I;
    var Wc = function() {
        for (var a = this._X,
        b = this._C,
        c = 0; 8 > c; c++) aa[c] = b[c];
        b[0] = b[0] + 1295307597 + this._b | 0;
        b[1] = b[1] + 3545052371 + (b[0] >>> 0 < aa[0] >>> 0 ? 1 : 0) | 0;
        b[2] = b[2] + 886263092 + (b[1] >>> 0 < aa[1] >>> 0 ? 1 : 0) | 0;
        b[3] = b[3] + 1295307597 + (b[2] >>> 0 < aa[2] >>> 0 ? 1 : 0) | 0;
        b[4] = b[4] + 3545052371 + (b[3] >>> 0 < aa[3] >>> 0 ? 1 : 0) | 0;
        b[5] = b[5] + 886263092 + (b[4] >>> 0 < aa[4] >>> 0 ? 1 : 0) | 0;
        b[6] = b[6] + 1295307597 + (b[5] >>> 0 < aa[5] >>> 0 ? 1 : 0) | 0;
        b[7] = b[7] + 3545052371 + (b[6] >>> 0 < aa[6] >>> 0 ? 1 : 0) | 0;
        this._b = b[7] >>> 0 < aa[7] >>> 0 ? 1 : 0;
        for (c = 0; 8 > c; c++) {
            var d = a[c] + b[c],
            e = d & 65535,
            f = d >>> 16;
            G[c] = ((e * e >>> 17) + e * f >>> 15) + f * f ^ ((d & 4294901760) * d | 0) + ((d & 65535) * d | 0)
        }
        a[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
        a[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
        a[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
        a[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
        a[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
        a[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
        a[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
        a[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0
    },
    Xc = l,
    sd = Xc.lib.StreamCipher,
    qa = [],
    aa = [],
    G = [],
    wd = Xc.algo.Rabbit = sd.extend({
        _doReset: function() {
            for (var a = this._key.words,
            b = this.cfg.iv,
            c = 0; 4 > c; c++) a[c] = (a[c] << 8 | a[c] >>> 24) & 16711935 | (a[c] << 24 | a[c] >>> 8) & 4278255360;
            for (var d = this._X = [a[0], a[3] << 16 | a[2] >>> 16, a[1], a[0] << 16 | a[3] >>> 16, a[2], a[1] << 16 | a[0] >>> 16, a[3], a[2] << 16 | a[1] >>> 16], a = this._C = [a[2] << 16 | a[2] >>> 16, a[0] & 4294901760 | a[1] & 65535, a[3] << 16 | a[3] >>> 16, a[1] & 4294901760 | a[2] & 65535, a[0] << 16 | a[0] >>> 16, a[2] & 4294901760 | a[3] & 65535, a[1] << 16 | a[1] >>> 16, a[3] & 4294901760 | a[0] & 65535], c = this._b = 0; 4 > c; c++) Wc.call(this);
            for (c = 0; 8 > c; c++) a[c] ^= d[c + 4 & 7];
            if (b) {
                var c = b.words,
                b = c[0],
                c = c[1],
                b = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360,
                c = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360,
                d = b >>> 16 | c & 4294901760,
                e = c << 16 | b & 65535;
                a[0] ^= b;
                a[1] ^= d;
                a[2] ^= c;
                a[3] ^= e;
                a[4] ^= b;
                a[5] ^= d;
                a[6] ^= c;
                a[7] ^= e;
                for (c = 0; 4 > c; c++) Wc.call(this)
            }
        },
        _doProcessBlock: function(a, b) {
            var c = this._X;
            Wc.call(this);
            qa[0] = c[0] ^ c[5] >>> 16 ^ c[3] << 16;
            qa[1] = c[2] ^ c[7] >>> 16 ^ c[5] << 16;
            qa[2] = c[4] ^ c[1] >>> 16 ^ c[7] << 16;
            qa[3] = c[6] ^ c[3] >>> 16 ^ c[1] << 16;
            for (c = 0; 4 > c; c++) qa[c] = (qa[c] << 8 | qa[c] >>> 24) & 16711935 | (qa[c] << 24 | qa[c] >>> 8) & 4278255360,
            a[b + c] ^= qa[c]
        },
        blockSize: 4,
        ivSize: 2
    });
    Xc.Rabbit = sd._createHelper(wd);
    var xd = l.mode,
    Gc = l.lib.BlockCipherMode.extend(),
    yd = Gc.Encryptor = Gc.extend({
        processBlock: function(a, b) {
            var c = this._cipher,
            d = c.blockSize,
            e = this._iv,
            f = this._counter;
            e && (f = this._counter = e.slice(0), this._iv = void 0);
            e = f.slice(0);
            c.encryptBlock(e, 0);
            f[d - 1] = f[d - 1] + 1 | 0;
            for (c = 0; c < d; c++) a[b + c] ^= e[c]
        }
    });
    Gc.Decryptor = yd;
    xd.CTR = Gc;
    var cd = function() {
        for (var a = this._X,
        b = this._C,
        c = 0; 8 > c; c++) Aa[c] = b[c];
        b[0] = b[0] + 1295307597 + this._b | 0;
        b[1] = b[1] + 3545052371 + (b[0] >>> 0 < Aa[0] >>> 0 ? 1 : 0) | 0;
        b[2] = b[2] + 886263092 + (b[1] >>> 0 < Aa[1] >>> 0 ? 1 : 0) | 0;
        b[3] = b[3] + 1295307597 + (b[2] >>> 0 < Aa[2] >>> 0 ? 1 : 0) | 0;
        b[4] = b[4] + 3545052371 + (b[3] >>> 0 < Aa[3] >>> 0 ? 1 : 0) | 0;
        b[5] = b[5] + 886263092 + (b[4] >>> 0 < Aa[4] >>> 0 ? 1 : 0) | 0;
        b[6] = b[6] + 1295307597 + (b[5] >>> 0 < Aa[5] >>> 0 ? 1 : 0) | 0;
        b[7] = b[7] + 3545052371 + (b[6] >>> 0 < Aa[6] >>> 0 ? 1 : 0) | 0;
        this._b = b[7] >>> 0 < Aa[7] >>> 0 ? 1 : 0;
        for (c = 0; 8 > c; c++) {
            var d = a[c] + b[c],
            e = d & 65535,
            f = d >>> 16;
            J[c] = ((e * e >>> 17) + e * f >>> 15) + f * f ^ ((d & 4294901760) * d | 0) + ((d & 65535) * d | 0)
        }
        a[0] = J[0] + (J[7] << 16 | J[7] >>> 16) + (J[6] << 16 | J[6] >>> 16) | 0;
        a[1] = J[1] + (J[0] << 8 | J[0] >>> 24) + J[7] | 0;
        a[2] = J[2] + (J[1] << 16 | J[1] >>> 16) + (J[0] << 16 | J[0] >>> 16) | 0;
        a[3] = J[3] + (J[2] << 8 | J[2] >>> 24) + J[1] | 0;
        a[4] = J[4] + (J[3] << 16 | J[3] >>> 16) + (J[2] << 16 | J[2] >>> 16) | 0;
        a[5] = J[5] + (J[4] << 8 | J[4] >>> 24) + J[3] | 0;
        a[6] = J[6] + (J[5] << 16 | J[5] >>> 16) + (J[4] << 16 | J[4] >>> 16) | 0;
        a[7] = J[7] + (J[6] << 8 | J[6] >>> 24) + J[5] | 0
    },
    dd = l,
    td = dd.lib.StreamCipher,
    ta = [],
    Aa = [],
    J = [],
    Ad = dd.algo.RabbitLegacy = td.extend({
        _doReset: function() {
            for (var a = this._key.words,
            b = this.cfg.iv,
            c = this._X = [a[0], a[3] << 16 | a[2] >>> 16, a[1], a[0] << 16 | a[3] >>> 16, a[2], a[1] << 16 | a[0] >>> 16, a[3], a[2] << 16 | a[1] >>> 16], a = this._C = [a[2] << 16 | a[2] >>> 16, a[0] & 4294901760 | a[1] & 65535, a[3] << 16 | a[3] >>> 16, a[1] & 4294901760 | a[2] & 65535, a[0] << 16 | a[0] >>> 16, a[2] & 4294901760 | a[3] & 65535, a[1] << 16 | a[1] >>> 16, a[3] & 4294901760 | a[0] & 65535], d = this._b = 0; 4 > d; d++) cd.call(this);
            for (d = 0; 8 > d; d++) a[d] ^= c[d + 4 & 7];
            if (b) {
                var c = b.words,
                b = c[0],
                c = c[1],
                b = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360,
                c = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360,
                d = b >>> 16 | c & 4294901760,
                e = c << 16 | b & 65535;
                a[0] ^= b;
                a[1] ^= d;
                a[2] ^= c;
                a[3] ^= e;
                a[4] ^= b;
                a[5] ^= d;
                a[6] ^= c;
                a[7] ^= e;
                for (d = 0; 4 > d; d++) cd.call(this)
            }
        },
        _doProcessBlock: function(a, b) {
            var c = this._X;
            cd.call(this);
            ta[0] = c[0] ^ c[5] >>> 16 ^ c[3] << 16;
            ta[1] = c[2] ^ c[7] >>> 16 ^ c[5] << 16;
            ta[2] = c[4] ^ c[1] >>> 16 ^ c[7] << 16;
            ta[3] = c[6] ^ c[3] >>> 16 ^ c[1] << 16;
            for (c = 0; 4 > c; c++) ta[c] = (ta[c] << 8 | ta[c] >>> 24) & 16711935 | (ta[c] << 24 | ta[c] >>> 8) & 4278255360,
            a[b + c] ^= ta[c]
        },
        blockSize: 4,
        ivSize: 2
    });
    dd.RabbitLegacy = td._createHelper(Ad);
    l.pad.ZeroPadding = {
        pad: function(a, b) {
            var c = 4 * b;
            a.clamp();
            a.sigBytes += c - (a.sigBytes % c || c)
        },
        unpad: function(a) {
            for (var b = a.words,
            c = a.sigBytes - 1; ! (b[c >>> 2] >>> 24 - 8 * (c % 4) & 255);) c--;
            a.sigBytes = c + 1
        }
    };
    return l
});
function getEnStr(a, d) {
    for (var c = [17, 34, 51, 68, 85, 102, 119, 26, 42, 43, 44, 45, 46, 47, 58, 59, 17, 34, 51, 68, 85, 102, 119, 26, 42, 43, 44, 45, 46, 47, 58, 59], g = "", j = "", f = 0; f < a.length; f++) j = String.fromCharCode(a[f].charCodeAt(0) ^ c[f]),
    g += j;
    c = CryptoJS.enc.Utf8.parse(g);
    return CryptoJS.AES.encrypt(JSON.stringify(d), c, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}
var UPEdit_IE32_CLASSID = "3B572171-6456-481A-9F95-AA17B7A4FE93",
UPEdit_IE32_CAB = "",
UPEdit_IE32_EXE = "UPEditorIE_3.exe",
UPEdit_IE32_VERSION = "1.0.0.7",
UPEdit_IE64_CLASSID = "49563FF9-F619-4E83-AFE2-CAFF36EF395B",
UPEdit_IE64_CAB = "",
UPEdit_IE64_EXE = "UPEditorx64_3.exe",
UPEdit_IE64_VERSION = "1.0.0.6",
UPEdit_FF = "UPEditorFF_2.exe",
UPEdit_Linux32 = "UPEditorLinux_2.tar.gz",
UPEdit_Linux64 = "UPEditorLinux64_2.tar.gz",
UPEdit_FF_VERSION = "3.0.0.2",
UPEdit_Edge = "UPEditorEdge.exe",
UPEdit_Edge_VERSION = "1.0.0.1",
UPEdit_Edge_Mac = "UPEditorEdgeMac.pkg",
UPEdit_Edge_Mac_VERSION = "1.0.0.1",
urls = "",
CIJSON = {
    interfacetype: 0,
    data: {
        "switch": 3
    }
},
ICJSON = {
    interfacetype: 0,
    data: {
        "switch": 2
    }
},
INCJSON = {
    interfacetype: 1,
    data: {}
},
OPJSON = {
    interfacetype: 0,
    data: {
        "switch": 0
    }
},
XTJSON = {
    interfacetype: 0,
    data: {
        "switch": 5
    }
},
CPJSON = {
    interfacetype: 0,
    data: {
        "switch": 1
    }
},
OUTJSON = {
    interfacetype: 2,
    data: {}
},
CLPJSON = {
    interfacetype: 0,
    data: {
        "switch": 4
    }
},
interv,
onceInterv = {},
iterArray = [],
outs = {},
inFlag = {},
isInit = {},
UPEdit_Linux_VERSION = "1.0.0.6",
UPEdit_MacOs = "",
UPEdit_MacOs_VERSION = "",
UPEdit_MacOs_Safari = "UPEditor_2.dmg",
UPEdit_MacOs_Safari_VERSION = "1.0.0.2",
UPEdit_Update = "1";
$.extend({
    upeDefaultKeyDown: function(a, d) {
        $.isFunction(a) ? a() : setTimeout(function() {
            document.getElementById(d).focus()
        },
        100)
    }
}); (function(a) {
    a.upe = function(d) {
        this.settings = a.extend(!0, {},
        a.upe.defaults, d);
        this.init()
    };
    a.extend(a.upe, {
        defaults: {
            upePath: "./upe/",
            upeId: "",
            upeSk: "",
            upeEdittype: 0,
            upeMode: "1111",
            upeMinlength: 6,
            upeMaxlength: 12,
            upePwdMode: 2,
            upeTabindex: 2,
            upeNextElementId: "",
            upeFontName: "",
            upeFontSize: "",
            upeClass: "",
            upeObjClass: "upeObj",
            upeInstallClass: "upeInstall",
            resp: "80",
            upeOnkeydown: "",
            errMappingArr: "",
            errMapping: {
                "00": "\u6b63\u5e38",
                "01": "\u63a7\u4ef6\u672a\u5b89\u88c5",
                "02": "\u914d\u7f6e\u9519\u8bef",
                "03": "\u521d\u59cb\u5316\u9519\u8bef",
                "04": "seed\u9519\u8bef",
                "05": "\u8f93\u5165\u4e3a\u7a7a",
                "06": "\u8f93\u5165\u8fc7\u77ed",
                "07": "\u8f93\u5165\u8fc7\u957f",
                "08": "\u975e\u6cd5\u5b57\u7b26",
                "09": "\u52a0\u5bc6\u51fa\u9519",
                10 : "\u8c03\u7528\u51fa\u9519"
            },
            upeCertIndex: 1,
            upeSafeDown: "",
            upeOnBlur: "",
            upeOnFocus: "",
            enterCallback: null,
            tabCallback: null,
            pgeUrls: "https://windows10.microdone.cn",
            pgePort: 5091,
            pgeWindowID: "password" + (new Date).getTime()
        },
        prototype: {
            init: function() {
                outs[this.settings.pgeWindowID] = {
                    version: 0,
                    hardinfo: "",
                    enstr: "",
                    streng: ""
                };
                this.upeDownText = "\u8bf7\u70b9\u51fb\u5b89\u88c5\u63a7\u4ef6";
                this.osBrowser = this.checkOsBrowser();
                this.upeVersion = this.getVersion();
                this.isInstalled = this.checkInstall();
                this.upeditIECab = "";
                this.upeditFileEXE = "" != this.settings.upeSafeDown ? "javascript:" + this.settings.upeSafeDown + ";": this.upeditEXE
            },
            checkOsBrowser: function() {
                var a, c = /chrome\/[\d.]+/gi;
                "Win32" == navigator.platform || "Windows" == navigator.platform ? 0 < navigator.userAgent.indexOf("MSIE") || 0 < navigator.userAgent.indexOf("msie") || 0 < navigator.userAgent.indexOf("Trident") || 0 < navigator.userAgent.indexOf("trident") ? 0 < navigator.userAgent.indexOf("ARM") ? (a = 9, this.upeditEXE = "") : (a = 1, this.upeditIEClassid = UPEdit_IE32_CLASSID, "" != UPEdit_IE32_CAB && (this.upeditIECab = 'codebase="' + this.settings.upePath + UPEdit_IE32_CAB + '"'), this.upeditEXE = this.settings.upePath + UPEdit_IE32_EXE) : 0 < navigator.userAgent.indexOf("Edge") ? a = 15 : 0 < navigator.userAgent.indexOf("Chrome") ? (c = navigator.userAgent.match(c).toString(), c = parseInt(c.replace(/[^0-9.]/gi, "")), 41 >= c ? (a = 2, this.upeditEXE = this.settings.upePath + UPEdit_FF) : 42 <= c && 44 >= c ? (this.osBrowser = 2, (a = this.checkInstall()) ? (a = 2, this.upeditEXE = this.settings.upePath + UPEdit_FF) : (a = 10, this.upeditEXE = this.settings.upePath + UPEdit_Edge)) : 45 <= c && (a = 10, this.upeditEXE = this.settings.upePath + UPEdit_Edge)) : (a = 2, this.upeditEXE = this.settings.upePath + UPEdit_FF) : "Win64" == navigator.platform ? 0 < navigator.userAgent.indexOf("Windows NT 6.2") || 0 < navigator.userAgent.indexOf("windows nt 6.2") ? (a = 1, this.upeditIEClassid = UPEdit_IE32_CLASSID, "" != UPEdit_IE32_CAB && (this.upeditIECab = 'codebase="' + this.settings.upePath + UPEdit_IE32_CAB + '"'), this.upeditEXE = this.settings.upePath + UPEdit_IE32_EXE) : 0 < navigator.userAgent.indexOf("MSIE") || 0 < navigator.userAgent.indexOf("msie") || 0 < navigator.userAgent.indexOf("Trident") || 0 < navigator.userAgent.indexOf("trident") ? (a = 3, this.upeditIEClassid = UPEdit_IE64_CLASSID, "" != UPEdit_IE64_CAB && (this.upeditIECab = 'codebase="' + this.settings.upePath + UPEdit_IE64_CAB + '"'), this.upeditEXE = this.settings.upePath + UPEdit_IE64_EXE) : 0 < navigator.userAgent.indexOf("Edge") ? a = 15 : 0 < navigator.userAgent.indexOf("Chrome") ? (c = navigator.userAgent.match(c).toString(), c = parseInt(c.replace(/[^0-9.]/gi, "")), 41 >= c ? (a = 2, this.upeditEXE = this.settings.upePath + UPEdit_FF) : 42 <= c && 44 >= c ? (this.osBrowser = 2, (a = this.checkInstall()) ? (a = 2, this.upeditEXE = this.settings.upePath + UPEdit_FF) : (a = 10, this.upeditEXE = this.settings.upePath + UPEdit_Edge)) : 45 <= c && (a = 10, this.upeditEXE = this.settings.upePath + UPEdit_Edge)) : (a = 2, this.upeditEXE = this.settings.upePath + UPEdit_FF) : 0 < navigator.userAgent.indexOf("Linux") ? (0 < navigator.userAgent.indexOf("_64") ? (a = 4, this.upeditEXE = this.settings.upePath + UPEdit_Linux64) : (a = 5, this.upeditEXE = this.settings.upePath + UPEdit_Linux32), 0 < navigator.userAgent.indexOf("Android") && (a = 7)) : 0 < navigator.userAgent.indexOf("Macintosh") && (0 < navigator.userAgent.indexOf("Safari") || 0 < navigator.userAgent.indexOf("Firefox") || 0 < navigator.userAgent.indexOf("Chrome") || 0 <= navigator.userAgent.indexOf("Opera") ? (c = navigator.userAgent.match(c), null != c ? (c = c.toString(), c = parseInt(c.replace(/[^0-9.]/gi, "")), 41 >= c ? (a = 8, this.upeditEXE = this.settings.upePath + UPEdit_MacOs_Safari) : 42 <= c && 44 >= c ? (this.osBrowser = 2, (a = this.checkInstall()) ? (a = 2, this.upeditEXE = this.settings.upePath + UPEdit_MacOs_Safari) : (a = 11, this.upeditEXE = this.settings.upePath + UPEdit_Edge_Mac)) : 45 <= c && (a = 11, this.upeditEXE = this.settings.upePath + UPEdit_Edge_Mac)) : (a = 8, this.upeditEXE = this.settings.upePath + UPEdit_MacOs_Safari)) : (a = 0, this.upeditEXE = ""));
                return a
            },
            getupeHtml: function() {
                if (1 == this.osBrowser || 3 == this.osBrowser) return '<span id="' + this.settings.upeId + '_upe" style="display:none;"><OBJECT ID="' + this.settings.upeId + '" CLASSID="CLSID:' + this.upeditIEClassid + '" ' + this.upeditIECab + ' onblur="' + this.settings.upeOnBlur + '" onfocus="' + this.settings.upeOnFocus + '" onkeydown="if(13==event.keyCode || 27==event.keyCode)' + this.settings.upeOnkeydown + ';" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '"><param name="edittype" value="' + this.settings.upeEdittype + '"><param name="minlength" value="' + this.settings.upeMinlength + '"><param name="maxlength" value="' + this.settings.upeMaxlength + '"><param name="input10" value="' + this.settings.upeMode + '"><param name="input9" value="' + this.settings.upeCertIndex + '"></OBJECT></span><div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;display:none;"><a href="' + this.upeditFileEXE + '">' + this.upeDownText + "</a></div>";
                if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser) return '<embed ID="' + this.settings.upeId + '" onblur="' + this.settings.upeOnBlur + '" onfocus="' + this.settings.upeOnFocus + '" input_1009="$.upeDefaultKeyDown(' + this.settings.tabCallback + ", '" + this.settings.upeNextElementId + '\')" input_1013="$.upeDefaultKeyDown(' + this.settings.enterCallback + ", '" + this.settings.upeNextElementId + '\');" input_900="' + this.settings.upeCertIndex + '" init="' + this.settings.upeMode + '" minlength="' + this.settings.upeMinlength + '" maxlength="' + this.settings.upeMaxlength + '" edittype="' + this.settings.upeEdittype + '" type="application/UPEditor-2" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '" >';
                if (6 == this.osBrowser) return '<embed ID="' + this.settings.upeId + '" onblur="' + this.settings.upeOnBlur + '" onfocus="' + this.settings.upeOnFocus + '" input5="' + this.settings.upeCertIndex + '" input6="' + this.settings.upeMode + '" input7="' + Number(this.settings.upeMinlength) + '" input4="' + Number(this.settings.upeMaxlength) + '" input0="' + Number(this.settings.upeEdittype) + '" type="application/UnionPay-SecurityEdit-plugin" version="' + UPEdit_MacOs_VERSION + '" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '">';
                if (8 == this.osBrowser) return '<embed ID="' + this.settings.upeId + '" onblur="' + this.settings.upeOnBlur + '" onfocus="' + this.settings.upeOnFocus + '" input5="' + this.settings.upeCertIndex + '" input6="' + this.settings.upeMode + '" input7="' + Number(this.settings.upeMinlength) + '" input4="' + Number(this.settings.upeMaxlength) + '" input0="' + Number(this.settings.upeEdittype) + '" type="application/UnionPay-SecurityEdit-Safari-plugin" version="' + UPEdit_MacOs_Safari_VERSION + '" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '">';
                if (10 == this.osBrowser || 11 == this.osBrowser) {
                    var d = this;
                    d.upeDownText = "\u6b63\u5728\u68c0\u6d4b....";
                    var c = d.upeditEXE,
                    g = '<div id="' + d.settings.upeId + '_down" class="' + d.settings.upeInstallClass + '" style="text-align:center;"><a class="winA" href="javascript:void(0);">' + d.upeDownText + "</a></div>";
                    this.checkInstall(function(g) {
                        if (0 == g.code) {
                            CIJSON.id = d.settings.pgeWindowID;
                            outs[d.settings.pgeWindowID] = {
                                version: 0,
                                hardinfo: "",
                                enstr: "",
                                streng: ""
                            };
                            getEnStr(d.settings.pgeRZRandNum, CIJSON);
                            var f = d.settings.upeId,
                            k = d.settings.pgeWindowID;
                            a("#" + f + "_down").parent().html('<input type="password"\tonfocus="pgeCtrl.openProt(\'' + k + '\',this.id);pgeCtrl.setCX(this);" autocomplete="off" onkeydown="pgeCtrl.setSX(event,\'' + d.settings.upeOnkeydown + '\',this);"  onclick="pgeCtrl.setCX(this)"  onblur="pgeCtrl.closeProt(\'' + k + '\',this.id)" id="' + f + '" style="ime-mode:disabled" tabindex="2" class="ocx_style" value="" />');
                            g = document.getElementById(f);
                            if (null != g) {
                                if (11 == d.osBrowser) {
                                    document.getElementById(f).type = "text";
                                    var f = d.settings.upeMode,
                                    m = 0,
                                    o = "";
                                    4 == f.length && (o = "", "1" == f.charAt(0) && (m |= 8), "1" == f.charAt(1) && (m |= 4), "1" == f.charAt(2) && (m |= 2), "1" == f.charAt(3) && (m |= 1), m & 1 ? (o = "[^", 0 == (m & 8) && (o += "A-Z"), 0 == (m & 4) && (o += "a-z"), 0 == (m & 2) && (o += "0-9")) : (o = "[", m & 8 && (o += "A-Z"), m & 4 && (o += "a-z"), m & 2 && (o += "0-9")), o += "]");
                                    var q = RegExp(o);
                                    g.onkeypress = function(a) {
                                        var c = 0,
                                        c = (a ? a: event).which,
                                        a = String.fromCharCode(c),
                                        f = parseInt(d.settings.upeMaxlength);
                                        if (this.value.length > f - 1) return false;
                                        if (c >= 32 && c <= 126) {
                                            if (q.test(a)) this.value = this.value + "*";
                                            return false
                                        }
                                        return true
                                    };
                                    g.onkeydown = function(a) {
                                        var c = 0,
                                        c = (a ? a: event).which;
                                        String.fromCharCode(c);
                                        a = parseInt(d.settings.upeMaxlength);
                                        if (this.value.length > a - 1) return false;
                                        if (c == 13) {
                                            this.blur();
                                            eval("(" + d.settings.upeOnkeydown + ")")
                                        } else return c >= 37 && c <= 40 ? false: true
                                    }
                                }
                                10 == d.osBrowser && (g.onkeypress = function() {
                                    return inFlag[k].flag
                                })
                            }
                            d.instControl(k)
                        } else 6 == g.code ? a(".winA").html("\u6587\u4ef6\u88ab\u7834\u574f,\u70b9\u6b64\u91cd\u65b0\u5b89\u88c5") : a(".winA").html("\u8bf7\u70b9\u6b64\u5b89\u88c5"),
                        a(".winA").attr("href", c)
                    });
                    return g
                }
                return '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;">\u6682\u4e0d\u652f\u6301\u6b64\u6d4f\u89c8\u5668</div>'
            },
            getupeHtmlspan: function() {
                return 1 == this.osBrowser || 3 == this.osBrowser ? '<span id="' + this.settings.upeId + '_upe" style="display:none;"><OBJECT ID="' + this.settings.upeId + '" CLASSID="CLSID:' + this.upeditIEClassid + '" ' + this.upeditIECab + ' onkeydown="if(13==event.keyCode || 27==event.keyCode)' + this.settings.upeOnkeydown + ';" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '"><param name="edittype" value="' + this.settings.upeEdittype + '"><param name="minlength" value="' + this.settings.upeMinlength + '"><param name="maxlength" value="' + this.settings.upeMaxlength + '"><param name="input10" value="' + this.settings.upeMode + '"><param name="input9" value="' + this.settings.upeCertIndex + '"></OBJECT></span><span id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;display:none;"><a href="' + this.upeditFileEXE + '">' + this.upeDownText + "</a></span>": 2 == this.osBrowser ? '<embed ID="' + this.settings.upeId + '" input_1009="$.upeDefaultKeyDown(' + this.settings.tabCallback + ", '" + this.settings.upeNextElementId + '\')" input_1013="$.upeDefaultKeyDown(' + this.settings.enterCallback + ", '" + this.settings.upeNextElementId + '\');" input_900="' + this.settings.upeCertIndex + '" init="' + this.settings.upeMode + '" minlength="' + this.settings.upeMinlength + '" maxlength="' + this.settings.upeMaxlength + '" edittype="' + this.settings.upeEdittype + '" type="application/UPEditor" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '" >': 4 == this.osBrowser || 5 == this.osBrowser ? '<embed ID="' + this.settings.upeId + '" input_1009="$.upeDefaultKeyDown(' + this.settings.tabCallback + ", '" + this.settings.upeNextElementId + '\')" input_1013="$.upeDefaultKeyDown(' + this.settings.enterCallback + ", '" + this.settings.upeNextElementId + '\');" input_900="' + this.settings.upeCertIndex + '" init="' + this.settings.upeMode + '" minlength="' + this.settings.upeMinlength + '" maxlength="' + this.settings.upeMaxlength + '" edittype="' + this.settings.upeEdittype + '" type="application/upeditor" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '" >': 6 == this.osBrowser ? '<embed ID="' + this.settings.upeId + '" input5="' + this.settings.upeCertIndex + '" input6="' + this.settings.upeMode + '" input7="' + Number(this.settings.upeMinlength) + '" input4="' + Number(this.settings.upeMaxlength) + '" input0="' + Number(this.settings.upeEdittype) + '" type="application/UnionPay-SecurityEdit-plugin" version="' + UPEdit_MacOs_VERSION + '" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '">': 8 == this.osBrowser ? '<embed ID="' + this.settings.upeId + '" input5="' + this.settings.upeCertIndex + '" input6="' + this.settings.upeMode + '" input7="' + Number(this.settings.upeMinlength) + '" input4="' + Number(this.settings.upeMaxlength) + '" input0="' + Number(this.settings.upeEdittype) + '" type="application/UnionPay-SecurityEdit-Safari-plugin" version="' + UPEdit_MacOs_Safari_VERSION + '" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '">': '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;">\u6682\u4e0d\u652f\u6301\u6b64\u6d4f\u89c8\u5668</div>'
            },
            getDownHtml: function() {
                return 1 == this.osBrowser || 3 == this.osBrowser || 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser ? '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;"><a href="' + this.upeditFileEXE + '">' + this.upeDownText + "</a></div>": 10 == this.osBrowser || 11 == this.osBrowser ? (this.upeDownText = "\u6b63\u5728\u68c0\u6d4b....", '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;"><a class="winA" href="javascript:void(0);">' + this.upeDownText + "</a></div>") : '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;">\u6682\u4e0d\u652f\u6301\u6b64\u6d4f\u89c8\u5668</div>'
            },
            getDownHtmlspan: function() {
                return 1 == this.osBrowser || 3 == this.osBrowser ? '<span id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;"><a href="' + this.upeditFileEXE + '">' + this.upeDownText + "</a></span>": 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser ? '<span id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;"><a href="' + this.upeditFileEXE + '">' + this.upeDownText + "</a></span>": '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;">\u6682\u4e0d\u652f\u6301\u6b64\u6d4f\u89c8\u5668</div>'
            },
            load: function() {
                if (this.checkInstall()) {
                    if (1 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE32_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                        this.getDownHtml()
                    } else if (3 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE64_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                        this.getDownHtml()
                    } else if (2 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_FF_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                        this.getDownHtml()
                    } else if (4 == this.osBrowser || 5 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_Linux_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                        this.getDownHtml()
                    } else if (6 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                        this.getDownHtml()
                    } else if (8 == this.osBrowser && this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_Safari_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    this.getDownHtml();
                    return this.getupeHtml()
                }
                this.setDownText();
                return this.getDownHtml()
            },
            generate: function() {
                if (1 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE32_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtml())
                } else if (3 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE64_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtml())
                } else if (2 == this.osBrowser) {
                    if (!1 == this.isInstalled) return document.write(this.getDownHtml());
                    if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_FF_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtml())
                } else if (4 == this.osBrowser || 5 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_Linux_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtml())
                } else if (6 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtml())
                } else if (8 == this.osBrowser && (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_Safari_VERSION) && 1 == UPEdit_Update)) return this.setDownText(),
                document.write(this.getDownHtml());
                return document.write(this.getupeHtml())
            },
            generatespan: function() {
                if (1 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE32_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtmlspan())
                } else if (3 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE64_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtmlspan())
                } else if (2 == this.osBrowser) {
                    if (!1 == this.isInstalled) return document.write(this.getDownHtmlspan());
                    if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_FF_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtmlspan())
                } else if (4 == this.osBrowser || 5 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_Linux_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtmlspan())
                } else if (6 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_VERSION) && 1 == UPEdit_Update) return this.setDownText(),
                    document.write(this.getDownHtmlspan())
                } else if (8 == this.osBrowser && (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_Safari_VERSION) && 1 == UPEdit_Update)) return this.setDownText(),
                document.write(this.getDownHtmlspan());
                return document.write(this.getupeHtmlspan())
            },
            pwdclear: function() {
                if (10 == this.osBrowser || 11 == this.osBrowser) {
                    var d = this.settings.pgeWindowID;
                    a("#" + this.settings.upeId).val("");
                    CLPJSON.id = d;
                    d = getEnStr(this.settings.pgeRZRandNum, CLPJSON);
                    jQuery.ajax({
                        url: urls,
                        dataType: "jsonp",
                        data: {
                            str: JSON.stringify({
                                rankey: this.settings.pgeRZRandNum,
                                datab: this.settings.pgeRZDataB,
                                datac: d
                            })
                        },
                        contentType: "application/json;utf-8",
                        jsonp: "jsoncallback",
                        success: function() {}
                    })
                } else this.checkInstall() && document.getElementById(this.settings.upeId).ClearSeCtrl()
            },
            result: function(d, c) {
                var g = "";
                if (this.isInstalled) try {
                    var j = document.getElementById(this.settings.upeId);
                    if (1 == this.settings.upePwdMode) if (1 == this.osBrowser || 3 == this.osBrowser) g = j.GetOutputEx(0, this.settings.upeSk, d);
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser) j.input(901, d),
                    j.input(902, this.settings.upeSk),
                    g = j.output(900);
                    else if (6 == this.osBrowser || 8 == this.osBrowser) g = j.get_output6(0, this.settings.upeSk, d);
                    else {
                        if (10 == this.osBrowser || 11 == this.osBrowser) {
                            var f = {
                                interfacetype: 1,
                                data: {}
                            },
                            k = this.settings.pgeWindowID;
                            f.data.oem_901 = d;
                            f.id = k;
                            var m = this,
                            o = getEnStr(this.settings.pgeRZRandNum, f),
                            q = {
                                rankey: this.settings.pgeRZRandNum,
                                datab: this.settings.pgeRZDataB,
                                datac: o
                            };
                            jQuery.ajax({
                                url: urls,
                                dataType: "jsonp",
                                data: {
                                    str: JSON.stringify(q)
                                },
                                contentType: "application/json;utf-8",
                                jsonp: "jsoncallback",
                                success: function(a) {
                                    0 == a.code && (OUTJSON.id = k, OUTJSON.data.datatype = 900, a = getEnStr(m.settings.pgeRZRandNum, OUTJSON), jQuery.ajax({
                                        url: urls,
                                        dataType: "jsonp",
                                        data: {
                                            str: JSON.stringify({
                                                rankey: m.settings.pgeRZRandNum,
                                                datab: m.settings.pgeRZDataB,
                                                datac: a
                                            })
                                        },
                                        contentType: "application/json;utf-8",
                                        jsonp: "jsoncallback",
                                        success: function(a) {
                                            outs[k].enstr = a.data;
                                            console.log("\u5bc6\u6587\uff1a" + a.data);
                                            c && c(a)
                                        }
                                    }))
                                }
                            })
                        }
                    } else if (2 == this.settings.upePwdMode) if (1 == this.osBrowser || 3 == this.osBrowser) g = j.GetOutputEx(1, this.settings.upeSk, d);
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser) j.input(901, d),
                    j.input(902, this.settings.upeSk),
                    g = j.output(901);
                    else if (6 == this.osBrowser || 8 == this.osBrowser) g = j.get_output6(1, this.settings.upeSk, d);
                    else {
                        if (10 == this.osBrowser || 11 == this.osBrowser) f = {
                            interfacetype: 1,
                            data: {}
                        },
                        k = this.settings.pgeWindowID,
                        f.data.oem_901 = d,
                        f.id = k,
                        m = this,
                        o = getEnStr(this.settings.pgeRZRandNum, f),
                        q = {
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: o
                        },
                        jQuery.ajax({
                            url: urls,
                            dataType: "jsonp",
                            data: {
                                str: JSON.stringify(q)
                            },
                            contentType: "application/json;utf-8",
                            jsonp: "jsoncallback",
                            success: function(a) {
                                0 == a.code && (OUTJSON.id = k, OUTJSON.data.datatype = 901, a = getEnStr(m.settings.pgeRZRandNum, OUTJSON), jQuery.ajax({
                                    url: urls,
                                    dataType: "jsonp",
                                    data: {
                                        str: JSON.stringify({
                                            rankey: m.settings.pgeRZRandNum,
                                            datab: m.settings.pgeRZDataB,
                                            datac: a
                                        })
                                    },
                                    contentType: "application/json;utf-8",
                                    jsonp: "jsoncallback",
                                    success: function(a) {
                                        outs[k].enstr = a.data;
                                        c && c(a)
                                    }
                                }))
                            }
                        })
                    } else if (3 == this.settings.upePwdMode) if (1 == this.osBrowser || 3 == this.osBrowser) g = j.GetOutputEx(2, this.settings.upeSk, d);
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser) j.input(901, d),
                    j.input(902, this.settings.upeSk),
                    g = j.output(902);
                    else if (6 == this.osBrowser || 8 == this.osBrowser) g = j.get_output6(2, this.settings.upeSk, d);
                    else if (10 == this.osBrowser || 11 == this.osBrowser) f = {
                        interfacetype: 1,
                        data: {}
                    },
                    k = this.settings.pgeWindowID,
                    f.data.oem_901 = d,
                    f.id = k,
                    m = this,
                    o = getEnStr(this.settings.pgeRZRandNum, f),
                    q = {
                        rankey: this.settings.pgeRZRandNum,
                        datab: this.settings.pgeRZDataB,
                        datac: o
                    },
                    jQuery.ajax({
                        url: urls,
                        dataType: "jsonp",
                        data: {
                            str: JSON.stringify(q)
                        },
                        contentType: "application/json;utf-8",
                        jsonp: "jsoncallback",
                        success: function(a) {
                            0 == a.code && (OUTJSON.id = k, OUTJSON.data.datatype = 902, a = getEnStr(m.settings.pgeRZRandNum, OUTJSON), jQuery.ajax({
                                url: urls,
                                dataType: "jsonp",
                                data: {
                                    str: JSON.stringify({
                                        rankey: m.settings.pgeRZRandNum,
                                        datab: m.settings.pgeRZDataB,
                                        datac: a
                                    })
                                },
                                contentType: "application/json;utf-8",
                                jsonp: "jsoncallback",
                                success: function(a) {
                                    outs[k].enstr = a.data;
                                    console.log(a.data);
                                    c && c(a)
                                }
                            }))
                        }
                    })
                } catch(z) {
                    g = "03"
                } else g = "01";
                return new a.upeResult(g, this.settings.errMapping)
            },
            machineInfo: function(d, c) {
                var g = "";
                if (this.isInstalled) try {
                    var j = document.getElementById(this.settings.upeId);
                    if (1 == this.osBrowser || 3 == this.osBrowser) g = j.GetOutput(this.settings.upeSk, d);
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser) j.input(901, d),
                    j.input(902, this.settings.upeSk),
                    g = j.output(903);
                    else if (6 == this.osBrowser || 8 == this.osBrowser) g = j.get_output7(this.settings.upeSk, d);
                    else if (10 == this.osBrowser || 11 == this.osBrowser) {
                        var f = this.settings.pgeWindowID;
                        OUTJSON.id = f;
                        OUTJSON.data.datatype = 903;
                        var k = getEnStr(this.settings.pgeRZRandNum, OUTJSON);
                        jQuery.ajax({
                            url: urls,
                            dataType: "jsonp",
                            data: {
                                str: JSON.stringify({
                                    rankey: this.settings.pgeRZRandNum,
                                    datab: this.settings.pgeRZDataB,
                                    datac: k
                                })
                            },
                            contentType: "application/json;utf-8",
                            jsonp: "jsoncallback",
                            success: function(a) {
                                outs[f].mac = a.data;
                                c && c(a)
                            }
                        })
                    }
                } catch(m) {
                    g = "03"
                } else g = "01";
                return new a.upeResult(g, this.settings.errMapping)
            },
            pwdStrength: function() {
                var a = "0";
                if (this.isInstalled) try {
                    var c = document.getElementById(this.settings.upeId);
                    if (1 == this.osBrowser || 3 == this.osBrowser) a = c.output4;
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser) a = c.output(4);
                    else if (6 == this.osBrowser || 8 == this.osBrowser) a = c.get_output4();
                    else if (10 == this.osBrowser || 11 == this.osBrowser) {
                        var g = this.settings.pgeWindowID;
                        OUTJSON.id = g;
                        OUTJSON.data.datatype = 904;
                        OUTJSON.data.encrypttype = 0;
                        var j = getEnStr(this.settings.pgeRZRandNum, OUTJSON);
                        jQuery.ajax({
                            url: urls,
                            dataType: "jsonp",
                            data: {
                                str: JSON.stringify({
                                    rankey: this.settings.pgeRZRandNum,
                                    datab: this.settings.pgeRZDataB,
                                    datac: j
                                })
                            },
                            contentType: "application/json;utf-8",
                            jsonp: "jsoncallback",
                            success: function(a) {
                                outs[g].streng = a.data;
                                console.log("-----" + outs[g].streng)
                            }
                        })
                    }
                } catch(f) {
                    a = "0"
                } else a = "01";
                return a
            },
            checkInstall: function(a) {
                try {
                    if (1 == this.osBrowser) new ActiveXObject("UPEditor.UPEditorCtrl.3");
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser) {
                        var c = 8 == this.osBrowser ? navigator.plugins["UPEditor Safari"].description: navigator.plugins.UPEditor.description;
                        0 < c.indexOf(":") && c.split(":")
                    } else if (3 == this.osBrowser) new ActiveXObject("UPEditorX64.UPEditorCtrl.3");
                    else if (10 == this.osBrowser || 11 == this.osBrowser) {
                        ICJSON.id = (new Date).getTime().toString();
                        urls = this.settings.pgeUrls + ":" + this.settings.pgePort + "/";
                        var g = getEnStr(this.settings.pgeRZRandNum, ICJSON),
                        j = jQuery.ajax({
                            timeout: 1E3,
                            url: urls,
                            dataType: "jsonp",
                            data: {
                                str: JSON.stringify({
                                    rankey: this.settings.pgeRZRandNum,
                                    datab: this.settings.pgeRZDataB,
                                    datac: g
                                })
                            },
                            contentType: "application/json;utf-8",
                            jsonp: "jsoncallback",
                            success: function(c) {
                                a && a(c)
                            },
                            error: function() {
                                a && a(!1)
                            },
                            complete: function(c, f) {
                                "timeout" == f && (j.abort(), a && a(!1))
                            }
                        })
                    }
                } catch(f) {
                    return ! 1
                }
                return ! 0
            },
            checkInstallOld: function() {
                try {
                    if (1 == this.osBrowser) new ActiveXObject("UPEditor.UPEditorCtrl.2");
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser) {
                        var a = navigator.plugins.UPEditor.description;
                        0 < a.indexOf(":") && a.split(":")
                    } else 3 == this.osBrowser && new ActiveXObject("UPEditorX64.UPEditorCtrl.2")
                } catch(c) {
                    return ! 1
                }
                return ! 0
            },
            getVersion: function() {
                try {
                    if (1 == this.osBrowser) var a = new ActiveXObject("UPEditor.UPEditorCtrl.3"),
                    c = a.output29,
                    g = c.replace(RegExp(",", "g"), ".");
                    else if (3 == this.osBrowser) a = new ActiveXObject("UPEditorX64.UPEditorCtrl.3"),
                    c = a.output29,
                    g = c.replace(RegExp(",", "g"), ".");
                    else if (10 == this.osBrowser || 11 == this.osBrowser) {
                        var j = this.settings.pgeWindowID;
                        OUTJSON.id = j;
                        OUTJSON.data.datatype = 12;
                        var f = getEnStr(this.settings.pgeRZRandNum, OUTJSON);
                        jQuery.ajax({
                            url: urls,
                            dataType: "jsonp",
                            data: {
                                str: JSON.stringify({
                                    rankey: this.settings.pgeRZRandNum,
                                    datab: this.settings.pgeRZDataB,
                                    datac: f
                                })
                            },
                            contentType: "application/json;utf-8",
                            jsonp: "jsoncallback",
                            success: function(a) {
                                void 0 != j && (outs[j].version = a.data)
                            }
                        })
                    } else {
                        var a = [],
                        k = 8 == this.osBrowser ? navigator.plugins["UPEditor Safari"].description: navigator.plugins.UPEditor.description;
                        0 < k.indexOf(":") ? (a = k.split(":"), g = a[1]) : g = ""
                    }
                    return g
                } catch(m) {
                    return ""
                }
            },
            convertVersion: function(a) {
                return "" != a ? (a = a.split("."), parseInt(1E3 * a[0]) + parseInt(100 * a[1]) + parseInt(10 * a[2]) + parseInt(a[3])) : ""
            },
            setDownText: function() {
                if (void 0 != this.upeVersion && !0 == this.isInstalled || !0 == this.checkInstallOld()) this.upeDownText = "\u8bf7\u70b9\u6b64\u5347\u7ea7\u63a7\u4ef6"
            },
            refresh4IE: function() {
                this.isInstalled ? (1 == this.osBrowser || 3 == this.osBrowser) && a("#" + this.settings.upeId + "_upe").show() : (1 == this.osBrowser || 3 == this.osBrowser) && a("#" + this.settings.upeId + "_down").show()
            },
            setSX: function(a, c, g) {
                var j;
                window.event ? j = a.keyCode: a.which && (j = a.which);
                13 == j && (g.blur(), eval("(" + c + ")"))
            },
            setCX: function(a) {
                var c = 0;
                if (document.selection) c = document.selection.createRange(),
                c.moveStart("character", -a.value.length),
                c = c.text.length;
                else if (a.selectionStart || "0" == a.selectionStart) c = a.selectionStart;
                var g = a.value.length;
                c <= g && (a.setSelectionRange ? setTimeout(function() {
                    a.setSelectionRange(g, g)
                },
                1) : a.createTextRange && (c = a.createTextRange(), c.collapse(!0), c.moveEnd("character", g), c.moveStart("character", g), c.select()))
            },
            instControl: function(a) {
                ICJSON.id = a;
                var c = this,
                g = getEnStr(this.settings.pgeRZRandNum, ICJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: g
                        })
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(g) {
                        console.log("id:" + a);
                        console.log("x.data:" + g.data + ",x.code:" + g.code);
                        0 == g.code ? (console.info("\u5b9e\u4f8b\u5316\u6210\u529f"), c.initControl(a), c.getVersion()) : console.info("\u5b9e\u4f8b\u5316\u5931\u8d25")
                    },
                    error: function(a, c, d) {
                        console.log(d)
                    }
                });
                inFlag[a] = {
                    flag: !1
                }
            },
            initControl: function(a) {
                INCJSON.id = a;
                INCJSON.data.edittype = this.settings.upeEdittype;
                INCJSON.data.maxlength = this.settings.upeMaxlength;
                INCJSON.data.minlength = this.settings.upeMinlength;
                INCJSON.data.oem_902 = this.settings.upeSk;
                INCJSON.data.oem_900 = this.settings.upeCertIndex.toString();
                INCJSON.data.oem_903 = this.settings.upeMode.toString();
                var c = getEnStr(this.settings.pgeRZRandNum, INCJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: c
                        })
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(c) {
                        console.log("id:" + a);
                        console.log("x.data:" + c.data + ",x.code:" + c.code);
                        isInit[a] = !0;
                        0 == c.code ? console.info("\u8bbe\u7f6e\u53c2\u6570\u6210\u529f") : console.info("\u8bbe\u7f6e\u53c2\u6570\u5931\u8d25")
                    },
                    error: function(a, c, d) {
                        console.log(d)
                    }
                });
                onceInterv[a] = ""
            },
            openProt: function(a, c) {
                inFlag[a].flag = !1;
                OPJSON.id = a;
                var g = getEnStr(this.settings.pgeRZRandNum, OPJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: g
                        })
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(c) {
                        console.log("x.data:" + c.data + ",x.code:" + c.code);
                        0 == c.code ? (inFlag[a].flag = !0, console.log("\u6210\u529f\u5f00\u542f\u4fdd\u62a4:" + a)) : console.log("\u65e0\u6cd5\u6253\u5f00\u4fdd\u62a4:" + a)
                    },
                    error: function(a, c, d) {
                        console.log(d)
                    }
                });
                if ("string" == typeof onceInterv[a]) {
                    for (g = 0; g < iterArray.length; g++) window.clearInterval(iterArray[g]);
                    onceInterv[a] = window.setInterval('pgeCtrl.intervlOut("' + a + '","' + c + '")', 800);
                    iterArray.push(onceInterv[a])
                }
                this.ajaxOnce(a)
            },
            intervlOut: function(a, c) {
                XTJSON.id = a;
                var g = getEnStr(this.settings.pgeRZRandNum, XTJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: g
                        })
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(g) {
                        var f = document.getElementById(c),
                        k = f.value.length;
                        console.log(a + "\u7684\u957f\u5ea6\uff1a" + k);
                        console.log("x.data(\u957f\u5ea6)\uff1a" + g.data + ",x.code:" + g.code);
                        var m = "";
                        if (k != g.data) {
                            for (k = 0; k < g.data; k++) m += "*";
                            f.value = m
                        }
                    },
                    error: function(a, c, d) {
                        console.log(d)
                    }
                })
            },
            closeProt: function(a) {
                CPJSON.id = a;
                var c = getEnStr(this.settings.pgeRZRandNum, CPJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: c
                        })
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(c) {
                        0 == c.code ? (inFlag[a].flag = !1, console.log("\u5173\u95ed\u5bc6\u7801\u63a7\u4ef6\u4fdd\u62a4\u6210\u529f:" + a)) : console.log("\u5173\u95ed\u4fdd\u62a4\u5931\u8d25:" + a);
                        console.log("x.data:" + c.data + ",x.code:" + c.code)
                    },
                    error: function(a, c, d) {
                        console.log(d)
                    }
                });
                if ("number" == typeof onceInterv[a]) {
                    for (c = 0; c < iterArray.length; c++) window.clearInterval(iterArray[c]);
                    onceInterv[a] = ""
                }
                this.ajaxOnce(a)
            },
            ajaxOnce: function(a) {
                a = "012345" + (new Date).getTime() + a;
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: a
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function() {},
                    error: function(a, d, j) {
                        console.log(j)
                    }
                })
            }
        }
    });
    a.upeResult = function(d, c) {
        this.settings = a.extend(!0, {},
        d, c);
        this.init(d, c)
    };
    a.extend(a.upeResult, {
        prototype: {
            init: function(a, c) {
                this.errMappingArr = c;
                var g = [];
                0 < a.indexOf(":") ? (g = a.split(":"), this.resp = g[0], this.cypher = g[1]) : (this.resp = a, this.cypher = "");
                this.error = null == this.resp || void 0 == this.resp || 2 != this.resp.length || "00" != this.resp
            },
            isError: function() {
                return this.error
            },
            errMsg: function() {
                return "" != this.resp ? this.errMappingArr[this.resp] : "\u672a\u77e5\u9519\u8bef:" + this.resp
            }
        }
    })
})(jQuery);
var pgeCtrl = new $.upe;
function _$(a) {
    return document.getElementById(a)
}
0 > navigator.userAgent.indexOf("MSIE") && navigator.plugins.refresh();
function UPEdit() {}
UPEdit.isValidate = !1;
UPEdit.clearLevel = function() {
    $("#_ocx_password1").parents().next(".note_info").removeClass("write_error")
};
UPEdit.getLevel = function() {
    var a = upeditor.pwdStrength();
    if (10 == upeditor.osBrowser || 11 == upeditor.osBrowser) a = outs[upeditor.settings.pgeWindowID].streng;
    0 <= a ? UPEdit.setPWDStrength(a) : UPEdit.clearLevel()
}; (function(a, d) {
    var c = function(a) {
        a = "<up.UPEditInstall> [ERROR]: " + a;
        d.console ? d.console.error(a) : d.alert(a)
    };
    if (d.undefined == a) c("jquery\u672a\u5b58\u5728\uff01");
    else {
        d.undefined == d.up && (d.up = {});
        var g = function(c) {
            a.extend(this, c);
            this._popHeight = 300;
            this._popWidth = 570;
            this._safeIconCSS = "margin:30px 0 0 65px;width:360px;height:60px;";
            this._safe_btnCSS = "padding:30px 0 40px 121px;";
            this._safe_freshCSS = "margin-left:120px;";
            if (this.type == "inside") {
                this._popHeight = 200;
                this._popWidth = 380;
                this._safeIconCSS = "margin:10px 0 0 45px;width:260px;height:50px;";
                this._safe_btnCSS = "padding:15px 0 0px 61px;";
                this._safe_freshCSS = "margin-left:100px;"
            }
            image_pah = c.imagePath;
            c = '<style type="text/css">.safe_title{ text-align:left; background:#ebebeb; height:36px; line-height:36px; text-indent:10px; color:#444;}.safe_icon{ padding:5px 0 0 55px;background:url(' + image_pah + "safe.png) no-repeat 0 0; " + this._safeIconCSS + " color:#666;}.safe_fresh{ font-size:14px; color:#f60; " + this._safe_freshCSS + " font-weight:bold;}.safe_fresh span{ font-size:18px; padding:0 1px;}.safe_btn{ " + this._safe_btnCSS + " color:#999;}.safe_btn a{ color:#4B7CAF; margin:0 5px;}.btn_blue{ width:92px; height:34px; line-height:34px; cursor:pointer; font-size:14px; font-weight:bold; text-align:center; color:#fff; border:none; margin-right:10px;background:url(" + image_pah + "login_btn.png) no-repeat 0 0;padding:0 10px 3px;}.btn_blue:hover{ background-position:0 -34px;}.user_icon{ background:url(" + image_pah + "study.gif) no-repeat 72px 0; height:20px; display:inline-block; padding-right:15px}.safe_install_second_titlemsg{ font-size:14px; padding:0 1px;color:black;font-weight:bold;}#simplemodal-overlay { background:#666; margin:0;}#simplemodal-container-upeditor-install { width:" + this._popWidth + "px; overflow-y:auto; border:4px solid #999; background:#FFF; height:" + this._popHeight + "px; }#simplemodal-container-upeditor-install a.modalCloseImg { background: url(" + image_pah + 'pop_close_p.gif) no-repeat scroll 0 0 transparent;cursor: pointer;display: inline;height: 16px;position: absolute;right: 8px;top: 8px;width: 16px;z-index: 3200;}#simplemodal-container-upeditor-install a.closeImg {background-position: 0 -562px; width:10px; height:10px;}#simplemodal-container-upeditor-install a.closeImgBlack {background-position: 0 -543px; width:16px; height:16px;}</style><p class="safe_title" id="safe_install_title">' + a.getI18Text("upop_upedit_install_title") + '</p><div class="safe_icon safe_install_frist">' + a.getI18Text("upop_upedit_install_main") + '</div><div class="safe_fresh safe_install_frist">' + a.getI18Text("upop_upedit_install_sub") + '</div><div class="safe_btn safe_install_frist">    <input id="safe_install_down_frist" type="button" class="btn_blue" value="' + a.getI18Text("upop_upedit_install_button") + '"/> <a id="upedit-install-help-id" href="http://static.95516.com/static/help/detail_41.html" target="_blank">' + a.getI18Text("upop_upedit_install_help") + '</a> | <a href="#" id="upedit-install-demo-id" target="_blank" class="user_icon upedit_install_demo">' + a.getI18Text("upop_upedit_install_demo") + "</a></div>";
            this.el = a(c);
            c = "";
            c = a.browser.msie ? "http://static.95516.com/static/start/detail_143.html": navigator.userAgent.indexOf("Macintosh") > 0 ? "http://static.95516.com/static/start/detail_145.html": "http://static.95516.com/static/start/detail_144.html";
            this.el.find(".upedit_install_demo").attr("href", c)
        };
        g.prototype.show = function() {
            var f = this;
            if (this.beforeShow()) {
                f = this;
                if (d.undefined == a.modal) c("simpleModal\u672a\u5b58\u5728\uff01");
                else {
                    var g = this.el.modal({
                        containerId: "simplemodal-container-upeditor-install",
                        minHeight: f._popHeight,
                        minWidth: f._popWidth,
                        onShow: this.afterShow,
                        onClose: function() {
                            if (f.beforeClose()) {
                                g.close();
                                f.afterClose()
                            }
                        }
                    });
                    if (this.type == "inside") {
                        a("#simplemodal-overlay").css("opacity", "0");
                        a("#PageEname").length > 0 && a("#PageEname").val() == "cardPayInside" && a("#safe_install_down_frist").removeClass().addClass("btn_blue139p")
                    }
                    this.el.find("input").unbind("click").click(function() {
                        d.location = f.upe.upeditEXE;
                        a(this).attr("upeURL", f.upe.upeditEXE);
                        f.download()
                    })
                }
            }
        };
        var j = function() {
            return true
        },
        f = function() {
            var c = '<div class="safe_icon safe_install_second"><span class="safe_install_second_titlemsg">' + a.getI18Text("safe_install_second_titlemsg") + "</span><div>" + a.getI18Text("safe_install_second_longtime") + '<a style="color:#4B7CAF" id="upedit-install-down-id-second"  target="_blank">' + a.getI18Text("upedit_install_down_id_second") + '</a> | <a style="color:#4B7CAF" id="upedit-install-help-id-second" href="http://static.95516.com/static/help/detail_41.html" target="_blank">' + a.getI18Text("upedit_install_help_id_second") + "</a></div><div>" + a.getI18Text("safe_install_second_howtoinstall") + '<a style="color:#4B7CAF" id="upedit-install-help-demo" target="_blank">' + a.getI18Text("upedit_install_help_demo") + '</a></div></div><div class="safe_btn safe_install_second"><span class="safe_install_second_titlemsg">' + a.getI18Text("safe_install_second_refreshmsg") + '</span><a style="font-size: 14px;" id="upedit-install-refresh-page"  target="_blank">' + a.getI18Text("safe_install_second_refresh") + "</a></div>";
            a(".safe_install_frist").hide();
            a(".safe_title").after(c);
            a("#upedit-install-help-demo").attr("href", a(".upedit_install_demo").attr("href"));
            a("#upedit-install-down-id-second").click(function(c) {
                c.preventDefault();
                d.location = a("#safe_install_down_frist").attr("upeURL")
            });
            a("#upedit-install-refresh-page").click(function(a) {
                a.preventDefault();
                window.location.reload()
            });
            return true
        };
        d.up.UPEditInstall = {
            _arg: null,
            bind: function(c, m) {
                var m = m || {},
                m = a.extend({
                    upe: c,
                    enviroment: "portal",
                    beforeShow: j,
                    afterShow: j,
                    beforeClose: j,
                    afterClose: j,
                    download: f,
                    imagePath: "resources/images/global/"
                },
                m),
                o = "uid" + parseInt(Math.random().toString().split(".")[1], 10).toString(16);
                d[o] = new g(m);
                c.upeditFileEXE = "javascript: " + o + ".show()"
            },
            show: function(k) {
                UPOP == d.undefined && c("UPOP\u672a\u5b58\u5728"); (new g({
                    upe: new a.upe({
                        upePath: UPOP.PATH_URL
                    }),
                    enviroment: "portal",
                    beforeShow: j,
                    afterShow: j,
                    beforeClose: j,
                    afterClose: j,
                    download: f,
                    imagePath: k
                })).show()
            }
        }
    }
})(jQuery, window); (function() {
    function a() {
        return this._init.apply(this, arguments)
    }
    var d = function() {
        $.modal.close()
    },
    c = {
        title: !1,
        undestory: !0,
        width: 500,
        height: "auto",
        closeClass: "common-modal-close"
    };
    a.prototype = {
        settings: null,
        $html: null,
        m: null,
        _init: function(a, j) {
            this.settings = $.extend({},
            c, j || {});
            this.$html = $('<div class="common-modal">\t        <div class="modal-hd"><h3></h3></div>\t        <div class="modal-bd">    \t\t</div>        </div>');
            $(document.body).append(this.$html.hide());
            var f = this.$html.find(".modal-hd h3"),
            k = this.$html.find(".modal-bd"); ! 1 !== this.settings.title ? f.html(this.settings.title) : f.parent().hide();
            k.append(a);
            this.$html.delegate("." + c.closeClass, "click",
            function(a) {
                a.preventDefault();
                d()
            })
        },
        show: function() {
            var a = this,
            c = this.settings.onClose,
            d = this.settings.onShow;
            this.m = this.$html.modal($.extend(this.settings, {
                containerId: "common-modal-container",
                containerCss: {
                    width: this.settings.width,
                    height: this.settings.height
                },
                onShow: function(a) {
                    a.container.height(a.data.outerHeight(!0)).addClass("common-modal-container");
                    this.setContainerDimensions();
                    this.setPosition();
                    d && d.apply(this, arguments)
                },
                onClose: function(d) {
                    c && c.apply(this, arguments);
                    $.modal.close();
                    setTimeout(function() {
                        a.settings.afterClose && a.settings.afterClose.call()
                    },
                    20)
                }
            }));
            return this
        },
        close: d,
        reRect: function(a, c) {
            a.width && (a.left = ($(window).width() - a.width - 8) / 2);
            a.height && (a.top = ($(window).height() - a.height - 8) / 2);
            this.getContainer().animate(a, "normal", "swing", c);
            return this
        },
        autoReRect: function(a) {
            var c = {
                width: this.m.d.data.outerWidth(!0),
                height: this.m.d.data.outerHeight(!0)
            };
            this.reRect(c, a)
        },
        getContainer: function() {
            return this.m.d.container
        },
        delegate: function(a, c, d) {
            this.getContainer().delegate(a, c, d);
            return this
        },
        find: function(a) {
            return this.getContainer().find(a)
        }
    };
    a.alert = function(c, d, f) {
        d = {
            undestory: !1,
            title: d ? d: !1,
            afterClose: f ||
            function() {}
        };
        return (new a('\t    \t<div class="alert-body clearfix">\t    \t\t<div class="icon"></div>\t    \t\t<div class="text">\t    \t\t\t<p>{text}</p>\t    \t\t</div>\t    \t</div>\t    \t<div class="buttons-set">\t\t\t\t<button class="btn btn-db common-modal-close"><b class="w"><b>\u786e\u5b9a</b></b></button>\t\t\t</div>'.replace("{text}", c), d)).show()
    };
    a.confirm = function(c, d, f, k) {
        d = {
            undestory: !1,
            title: d ? d: !1,
            afterClose: k ||
            function() {}
        };
        c = (new a('        \t<div class="confirm-body clearfix">        \t\t<div class="icon"></div>        \t\t<div class="text">        \t\t\t<p>{text}</p>        \t\t</div>        \t</div>        \t<div class="buttons-set">    \t\t\t<button class="btn btn-db common-modal-confirm"><b class="w"><b>\u786e\u5b9a</b></b></button>    \t\t\t<button class="btn btn-gr common-modal-close"><b class="w"><b>\u53d6\u6d88</b></b></button>    \t\t</div>'.replace("{text}", c), d)).show();
        c.delegate(".common-modal-confirm", "click",
        function(a) {
            a.preventDefault();
            f && f.call()
        });
        return c
    };
    window.CommonModal = a
})(); (function(a) {
    a.fn.upmaillist = function(d) {
        var c = a(this),
        d = a.extend({},
        {
            boxClass: "mailListBox",
            listClass: "mailListDefault",
            focusClass: "mailListFocus",
            markCalss: "mailListHlignt",
            zIndex: 200,
            autoClass: !0,
            mailArr: "qq.com gmail.com 126.com 163.com hotmail.com yahoo.com yahoo.com.cn live.com sohu.com sina.com".split(" "),
            textHint: !1,
            hintText: "",
            focusColor: "#333",
            blurColor: "#999"
        },
        d || {});
        d.autoClass && 0 === a("#mailListAppendCss").size() && a('<style id="mailListAppendCss" type="text/css">.mailListBox{border:1px solid #369; background:#fff; font:12px/20px Arial;}.mailListDefault{padding:0 5px;cursor:pointer;white-space:nowrap;}.mailListFocus{padding:0 5px;cursor:pointer;white-space:nowrap;background:#369;color:white;}.mailListHlignt{color:red;}.mailListFocus .mailListHlignt{color:#fff;}</style>').appendTo(a("head"));
        var g = d.boxClass,
        j = d.listClass,
        f = d.focusClass,
        k = d.markCalss,
        m = d.zIndex,
        o = mailArr = d.mailArr,
        q = d.textHint,
        z = d.hintText,
        F = d.focusColor;
        a.createHtml = function(d, g, l) {
            var m = '<div class="mail_title">\u60a8\u53ef\u9009\u62e9\u4ee5\u4e0b\u90ae\u7bb1\u5730\u5740</div>',
            o = c.val(),
            o = o.replace(/<[^>]*?>(.*?)/gi, "$1"),
            m = m + ('<div class="mailHover ' + j + '" id="mailList_12">' + o + "</div>");
            a.isArray(g) && a.each(g,
            function(a) {
                m = a === l ? m + ('<div class="mailHover ' + f + '" id="mailList_' + a + '"><span class="' + k + '">' + d + "</span>@" + g[a] + "</div>") : m + ('<div class="mailHover ' + j + '" id="mailList_' + a + '"><span class="' + k + '">' + d + "</span>@" + g[a] + "</div>")
            });
            return m
        };
        var L = -1,
        l;
        a(this).each(function() {
            a(this).bind("keypress",
            function(a) {
                a = a.which;
                if (118 != a && 8 != a && 0 != a) return 46 == a || 46 <= a && 256 >= a ? !0 : !1
            });
            var c = a(this),
            d = a(".justForJs").size();
            if (! (0 < d)) {
                var k = c.outerWidth() - 2,
                A = c.outerHeight();
                c.wrap('<span style="display:inline-block;position:relative;"></span>').before('<div id="mailListBox_' + d + '" class="justForJs ' + g + '" style="min-width:' + k + "px;_width:" + k + "px;position:absolute;left:-6000px;top:" + A + "px;z-index:" + m + ';"></div>');
                var K = a("#mailListBox_" + d),
                M;
                c.focus(function() {
                    a(this).css("color", F).parent().css("z-index", m);
                    q && z && a.trim(a(this).val()) === z && a(this).val("");
                    a(this).keyup(function(c) {
                        l = v = a.trim(a(this).val());
                        l = l.replace(/<[^>]*?>(.*?)/gi, "$1");
                        /@/.test(v) && (l = v.replace(/@.*/, ""));
                        if (0 < v.length) {
                            if (38 === c.keyCode) 0 >= L && (L = o.length),
                            L--;
                            else if (40 === c.keyCode) L >= o.length - 1 && (L = -1),
                            L++;
                            else if (13 === c.keyCode) - 1 < L && L < o.length && a(this).val(a("#mailList_" + L).text());
                            else if (/@/.test(v)) {
                                L = -1;
                                var d = v.replace(/.*@/, "");
                                o = a.map(mailArr,
                                function(a) {
                                    if (RegExp(d).test(a)) return a
                                })
                            } else o = mailArr;
                            K.html('<iframe src="" frameborder="0" style="border:none;position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:1; filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";"></iframe><div style="position:relative;z-index:300">' + a.createHtml(l, o, L) + "</div>").css("left", 0);
                            K.find("iframe").width(K.width());
                            K.find("iframe").height(K.height());
                            13 === c.keyCode && -1 < L && L < o.length && K.css("left", "-6000px")
                        } else K.css("left", "-6000px")
                    }).blur(function() {
                        q && z && "" === a.trim(a(this).val()) && a(this).val(z);
                        a(this).unbind("keyup").parent().css("z-index", 0);
                        K.css("left", "-6000px")
                    });
                    a(".mailHover").live("mouseover",
                    function() {
                        L = Number(a(this).attr("id").split("_")[1]);
                        M = a("#mailList_" + L).text();
                        K.find("div").children("." + f).removeClass(f).addClass(j);
                        a(this).addClass(f).removeClass(j)
                    })
                });
                K.bind("mousedown",
                function() {
                    c.val(M)
                })
            }
        })
    }
})(jQuery); (function(a) {
    a.upmailadress = function(a) {
        var c = null,
        g = [["@163.com", "http://mail.163.com/", "\u7f51\u6613163\u90ae\u7bb1"], ["@126.com", "http://www.126.com/", "\u7f51\u6613126\u90ae\u7bb1"], ["@qq.com", "https://mail.qq.com/", "QQ\u90ae\u7bb1"], ["@yeah.net", "http://www.yeah.net/", "\u7f51\u6613Yeah.net\u90ae\u7bb1"], ["@139.com", "http://mail.10086.cn/", "139\u624b\u673a\u90ae\u7bb1"], ["@gmail.com", "http://gmail.google.com/", "Gmail"], ["@yahoo.com.cn", "http://mail.cn.yahoo.com/", "\u96c5\u864e\u90ae\u7bb1"], ["@yahoo.cn", "http://mail.cn.yahoo.com/", "\u96c5\u864e\u90ae\u7bb1"], ["@foxmail.com", "http://www.foxmail.com/", "foxmail"], ["@sohu.com", "http://mail.sohu.com/", "\u641c\u72d0\u90ae\u7bb1"], ["@sina.cn", "http://mail.sina.com.cn/", "\u65b0\u6d6a\u90ae\u7bb1"], ["@eyou.com", "http://www.eyou.com/", "\u4ebf\u90ae"], ["@wo.com.cn", "http://mail.wo.com.cn/", "\u8054\u901a\u624b\u673a\u90ae\u7bb1"], ["@tom.com", "http://mail.tom.com/", "TOM\u90ae\u7bb1"], ["@hotmail.com", "http://www.hotmail.com/", "Hotmail"], ["@live.cn", "http://www.hotmail.com/", "Hotmail"], ["@21cn.com", "http://mail.21cn.com/", "21CN\u90ae\u7bb1"], ["@263.net", "http://www.263.net/", "263\u90ae\u7bb1"], ["@263.net.cn", "http://www.263.net/", "263\u90ae\u7bb1"], ["@189.cn", "http://mail.189.cn/", "189\u90ae\u7bb1"], ["@sogou.com", "http://mail.sogou.com/", "\u641c\u72d7\u90ae\u7bb1"], ["@188.com", "http://www.188.com/", "188\u8d22\u5bcc\u90ae"], ["@unionpay.com", "https://mail.unionpay.com/", "\u94f6\u8054\u5b98\u7f51\u90ae\u7bb1"]];
        try {
            var j = a.split("@");
            if (j[1]) for (a = 0; a < g.length; a++) {
                var f = g[a];
                if (f[0] == "@" + j[1]) {
                    c = f;
                    break
                }
            }
        } catch(k) {
            c = null
        }
        return c
    }
})(jQuery); (function(a) {
    a.fn.extend({
        upssoLogin: function(d) {
            d = a.extend({},
            a.ssoLogin.defaults, d);
            return a(this).each(function() {
                window._ssoOptions = d;
                new a.ssoLogin(this, d)
            })
        }
    });
    a.uppopLogin = function(d) {
        d = a.extend({},
        a.ssoLogin.defaults, d);
        window._ssoOptions = d;
        a.getJSON(d.loginStatusUrl, {},
        function(c) {
            "n" == c ? (d.userName = c, a.ssoLogin.fn.popupLoginIframe(d)) : "function" == typeof d.callBackFun && d.callBackFun(c)
        })
    };
    a.ssoLogin = function(d, c) {
        a(d).each(function() {
            a(this).click(function() {
                a.getJSON(c.loginStatusUrl, {},
                function(d) {
                    "n" == d ? (c.userName = d, a.ssoLogin.fn.popupLoginIframe(c)) : "function" == typeof c.callBackFun && c.callBackFun(d)
                })
            })
        })
    };
    a.ssoLogin.defaults = {
        title: "\u767b\u5f55\u94f6\u8054\u5728\u7ebf\u652f\u4ed8\uff0c\u8f7b\u677e\u4ed8\u6b3e",
        popupUrl: "https://www.95516.com/portal/login.do?style=sso",
        loginStatusUrl: "https://www.95516.com/portal/ajax/obtainLoginName!obtain.do?callback=?",
        proxyUrl: "https://www.95516.com/portal/pages/user/login/ssoProxy.html",
        callBackFun: null,
        userName: "n"
    };
    a.ssoLogin.fn = {
        init: function() {},
        initCSS: function() {
            document.write('<style type="text/css">#simplemodal-overlay { background:#666; margin:0;}#simplemodal-container { width:630px; overflow-y:auto; border:4px solid #999; background:#FFF; height:350px;}#simplemodal-container a.modalCloseImg { background-position: 0 -560px; width:8px; height:10px; no-repeat;  display:inline; z-index:3200; position:absolute; top:8px; right:8px; cursor:pointer;}</style>')
        },
        popupLoginIframe: function(d) {
            a("#ssoLoginPopup").remove();
            var c = encodeURIComponent(d.title),
            g = encodeURIComponent(d.proxyUrl),
            d = d.popupUrl,
            d = d + "&ssoTitle=" + c + "&ssoProxyUrl=" + g + "&r=" + Math.random(),
            c = [];
            c.push('<div id="ssoLoginPopup" class="login_pop dn">');
            c.push('<iframe src="');
            c.push(d);
            c.push('" frameborder="0" scrolling="no" width="630" height="350"></iframe>');
            c.push("</div>");
            a(c.join("")).appendTo("body");
            _hide = function() {
                a.modal.close();
                0 < a("#_ocx_password").length && 0 < a("#mockLoginPassword").length && (a("#_ocx_password").show(), a("#mockLoginPassword").addClass("dn"));
                0 < a("#_ocx_cvn2").length && 0 < a("#mockCVN2").length && (a("#_ocx_cvn2").show(), a("#mockCVN2").addClass("dn"))
            };
            try {
                0 < a("#_ocx_password").length && 0 < a("#mockLoginPassword").length && (a("#_ocx_password").hide(), a("#mockLoginPassword").removeClass("dn")),
                0 < a("#_ocx_cvn2").length && 0 < a("#mockCVN2").length && (a("#_ocx_cvn2").hide(), a("#mockCVN2").removeClass("dn")),
                window._ssoOptions.modal = a("#ssoLoginPopup").modal({
                    onClose: _hide
                })
            } catch(j) {
                jQuery.getScript("https://static.95516.com/static/portal/js/jquery/jquery.simplemodal.js",
                function() {
                    a("#ssoLoginPopup").modal({
                        onClose: _hide
                    })
                })
            }
        }
    };
    a.ssoLogin.fn.init();
    a.ssoLogin.fn.initCSS()
})(jQuery); (function(a) {
    a.fn.extend({
        upssoUnionLogin: function(c) {
            a.ssoUnionLogin.fn.initCSS();
            c = a.extend({},
            a.ssoUnionLogin.defaults, c);
            return a(this).each(function() {
                new a.ssoUnionLogin(this, c)
            })
        }
    });
    a.uppopUnionLogin = function(c) {
        a.ssoUnionLogin.fn.initCSS();
        c = a.extend({},
        a.ssoUnionLogin.defaults, c);
        window._ssoOptions = c;
        a.getJSON(c.loginStatusUrl, {},
        function(d) {
            "n" == d ? (c.userName = d, a.ssoUnionLogin.fn.popupLoginIframe(c)) : "function" == typeof c.callBackFun && c.callBackFun(d)
        })
    };
    a.ssoUnionLogin = function(c, d) {
        a(c).each(function() {
            a(this).click(function(c) {
                window._ssoOptions = d;
                a.getJSON(d.loginStatusUrl, {},
                function(c) {
                    "n" == c ? (d.userName = c, a.ssoUnionLogin.fn.popupLoginIframe(d)) : "function" == typeof d.callBackFun && d.callBackFun(c)
                });
                c.preventDefault()
            })
        })
    };
    a.ssoUnionLogin.defaults = {
        title: "\u767b\u5f55\u94f6\u8054\u5728\u7ebf\u652f\u4ed8\uff0c\u8f7b\u677e\u4ed8\u6b3e",
        popupUrl: "https://www.95516.com/portal/login.do?style=sso",
        loginStatusUrl: "https://www.95516.com/portal/ajax/obtainLoginName!obtain.do?callback=?",
        proxyUrl: "https://www.95516.com/portal/pages/user/login/ssoProxy.html",
        callBackFun: null,
        userName: "n"
    };
    var d = a.ssoUnionLogin;
    a.ssoUnionLogin.initAble = !1;
    d.fn = {
        init: function() {},
        initCSS: function() {
            if (!a.ssoUnionLogin.initAble) {
                var c = a('<style type="text/css">#simplemodal-overlay { background:#666; margin:0;}#simplemodal-container-unionLogin { width:400px; overflow-y:auto; border:4px solid #999; background:#FFF; height:330px;}#simplemodal-container-unionLogin a.modalCloseImg { background: url(' + UPOP.PATH_STATIC_I18 + "/images/global/icon.png) left 50% no-repeat;background-position: 0 -560px; width:8px; height:10px; no-repeat;  display:inline; z-index:3200; position:absolute; top:12px; right:12px; cursor:pointer;}.pop_title{ background:url(" + UPOP.PATH_STATIC_I18 + "/images/global/repeat.png) repeat-x left -295px; height:40px; }.pop_title h2{ font-weight:normal; font-size:14px; color:#fff;line-height:40px;  margin-left:15px; height:40px;}</style>");
                a("head").eq(0).append(c)
            }
            a.ssoUnionLogin.initAble = !0
        },
        popupLoginIframe: function(c) {
            a("#ssoUnionLoginPopup").remove();
            var d = c.title,
            j = encodeURIComponent(c.proxyUrl),
            f = c.popupUrl,
            f = f + "&service=" + j + "&registerUrl=" + encodeURIComponent(c.registerUrl + "&sourceName=&service="),
            f = f + "&parentRedirect=0&style=1",
            j = [];
            j.push('<div id="ssoUnionLoginPopup" class="login_pop dn"><div class="pop_title"><h2 id="sso_title">' + d + "</h2></div>");
            j.push('<iframe src="');
            j.push(f);
            j.push('" frameborder="0" scrolling="no" width="400" height="300"></iframe>');
            j.push("</div>");
            a(j.join("")).appendTo("body");
            _hide = function() {
                a.modal.close();
                0 < a("#_ocx_password").length && 0 < a("#mockLoginPassword").length && (a("#_ocx_password").show(), a("#mockLoginPassword").addClass("dn"));
                0 < a("#_ocx_cvn2").length && 0 < a("#mockCVN2").length && (a("#_ocx_cvn2").show(), a("#mockCVN2").addClass("dn"));
                if (c.onClose && "function" == typeof c.onClose) c.onClose()
            };
            try {
                0 < a("#_ocx_password").length && 0 < a("#mockLoginPassword").length && (a("#_ocx_password").hide(), a("#mockLoginPassword").removeClass("dn")),
                0 < a("#_ocx_cvn2").length && 0 < a("#mockCVN2").length && (a("#_ocx_cvn2").hide(), a("#mockCVN2").removeClass("dn")),
                window._ssoOptions.modal = a("#ssoUnionLoginPopup").modal({
                    containerId: "simplemodal-container-unionLogin",
                    onClose: _hide
                }),
                a("#simplemodal-container-unionLogin .simplemodal-wrap").css({
                    overflow: "hidden"
                })
            } catch(k) {
                jQuery.getScript("https://static.95516.com/static/portal/js/jquery/jquery.simplemodal.js",
                function() {
                    a("#ssoUnionLoginPopup").modal({
                        containerId: "simplemodal-container-unionLogin",
                        onClose: _hide
                    })
                })
            }
        }
    }
})(jQuery); (function(a, d) {
    var c = function(a) {
        a = "<up.floatCS> [ERROR]: " + a;
        d.console ? d.console.error(a) : d.alert(a)
    };
    if (d.undefined == a) c("jquery\u672a\u5b58\u5728\uff01");
    else {
        d.undefined == d.up && (d.up = {});
        var g = !1,
        j = new Date,
        f = d.screen.width;
        d.up.floatCS = {
            _el: null,
            _arg: null,
            _icon: null,
            _insertHTML: function() {
                var c = "https://static.95516.com/static/cms/img/21/d11fda13-3bb9-45c3-aa47-d85e67e5fe47.gif";
                this._arg.localeStr && (this._arg.localeStr == "zh_TW" ? c = "https://static.95516.com/static/cms/img/20/73ad739c-f1b7-4a10-8175-608bb19ce869.png": this._arg.localeStr == "en_US" && (c = "https://static.95516.com/static/cms/img/24/38950bb9-dc3c-4bf5-848a-ecfdee755d0f.png"));
                c = "<style type='text/css'>.rightservice{ position:fixed; right:" + this._arg.right + "px; top:" + this._arg.top + "px; width:" + this._arg.width + "px;z-index:500;}*html,*html body{background-image:url(https://static.95516.com/static/cms/img/30/6460cf5d-dd11-43fe-bebc-ac3b7d2adaf1.gif);background-attachment:fixed}*html .rightservice{position:absolute;right:15px;top:expression(eval(document.documentElement.scrollTop)+180); width:53px;}.rightservice a.service,a.unservice{ width:53px; height:85px; background:url(" + c + ") no-repeat 0 0; display:inline-block; margin-bottom:15px;}.rightservice a.service:hover{ background-position:0 -85px;}.rightservice a.unservice{ background-position:0 -170px;}.rightservice a.service_small,a.unservice_small{ width:38px; height:120px; background:url(" + c + ") no-repeat 0 -260px; display:inline-block; margin-bottom:15px;}.rightservice a.service_small:hover{ background-position:0 -380px;}.rightservice a.unservice_small{ background-position:0 -500px;}</style>";
                a(c).appendTo(a("head"));
                c = "<div class='rightservice'><a href='https://95516.unionpay.com/web/icc/chat/chat?c=1&s=4&st=1&depid=ff8080813daaa230013de380641900ec&' target='_blank' class='" + this._arg._class + "' id='rightservice_img'></a>";
                this._el = a(c);
                this._el.appendTo(d.document.body);
                this._icon = this._el.find("#rightservice_img")
            },
            init: function(k) {
                if (!g) {
                    g = true;
                    k = k || {};
                    if (k.currentTime && !/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/.test(k.currentTime)) c("\u53c2\u6570\u9519\u8bef\uff01currentTime \u683c\u5f0f\u4e3a[yyyy/MM/dd hh:mm:ss]");
                    else if (k.startTime && !/^\d{2}:\d{2}$/.test(k.startTime)) c("\u53c2\u6570\u9519\u8bef\uff01starttTime \u683c\u5f0f\u4e3a[mm:ss]");
                    else if (k.endTime && !/^\d{2}:\d{2}$/.test(k.endTime)) c("\u53c2\u6570\u9519\u8bef\uff01endTime \u683c\u5f0f\u4e3a[mm:ss]");
                    else {
                        k = a.extend({
                            currentTime: j,
                            startTime: "08:30",
                            endTime: "22:30",
                            consultUrl: "https://95516.unionpay.com/web/icc/chat/chat?c=1&s=4&st=1&depid=ff8080813daaa230013de380641900ec&",
                            messageUrl: "https://95516.unionpay.com/web/icc/chat/chat?c=1&s=4&st=1&depid=ff8080813daaa230013de380641900ec&",
                            right: f > 1024 ? 10 : 2,
                            width: f > 1024 ? 53 : 38,
                            top: 152,
                            zIndex: 500,
                            _class: "service" + (f <= 1024 ? "_small": "")
                        },
                        k);
                        k.currentTime = new Date(k.currentTime);
                        k.startTime = parseInt(k.startTime.replace(":", ""), 10);
                        k.endTime = parseInt(k.endTime.replace(":", ""), 10);
                        this._arg = k;
                        this._insertHTML();
                        this.checkTime();
                        d.setInterval(function() {
                            d.up.floatCS.checkTime()
                        },
                        3E4);
                        if (a.browser.msie && a.browser.version == "6.0") {
                            this._el.css("position", "absolute");
                            var m = this;
                            a(d).bind("scroll",
                            function() {
                                m._el.css("top", d.document.documentElement.scrollTop + m._arg.top)
                            })
                        }
                    }
                }
            },
            checkTime: function() {
                var a = new Date - j,
                a = new Date(this._arg.currentTime.getTime() + a),
                a = a.getHours() * 100 + a.getMinutes();
                a >= this._arg.startTime && a <= this._arg.endTime ? this._icon.removeClass("un" + this._arg._class).addClass(this._arg._class) : this._icon.removeClass(this._arg._class).addClass("un" + this._arg._class)
            }
        }
    }
})(jQuery, window);