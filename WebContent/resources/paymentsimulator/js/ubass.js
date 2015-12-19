(function() {
    function s() {
        return this._init.apply(this, arguments)
    }
    var m;
    m || (m = {}); (function() {
        function b(a) {
            return 10 > a ? "0" + a: a
        }
        function c(a) {
            f.lastIndex = 0;
            return f.test(a) ? '"' + a.replace(f,
            function(a) {
                var b = p[a];
                return "string" === typeof b ? b: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"': '"' + a + '"'
        }
        function a(b, e) {
            var f, l, x, p, m = k,
            y, n = e[b];
            n && "object" === typeof n && "function" === typeof n.toJSON && (n = n.toJSON(b));
            "function" === typeof z && (n = z.call(e, b, n));
            switch (typeof n) {
            case "string":
                return c(n);
            case "number":
                return isFinite(n) ? String(n) : "null";
            case "boolean":
            case "null":
                return String(n);
            case "object":
                if (!n) return "null";
                k += v;
                y = [];
                if ("[object Array]" === Object.prototype.toString.apply(n)) {
                    p = n.length;
                    for (f = 0; f < p; f += 1) y[f] = a(f, n) || "null";
                    x = 0 === y.length ? "[]": k ? "[\n" + k + y.join(",\n" + k) + "\n" + m + "]": "[" + y.join(",") + "]";
                    k = m;
                    return x
                }
                if (z && "object" === typeof z) for (p = z.length, f = 0; f < p; f += 1)"string" === typeof z[f] && (l = z[f], (x = a(l, n)) && y.push(c(l) + (k ? ": ": ":") + x));
                else for (l in n) Object.prototype.hasOwnProperty.call(n, l) && (x = a(l, n)) && y.push(c(l) + (k ? ": ": ":") + x);
                x = 0 === y.length ? "{}": k ? "{\n" + k + y.join(",\n" + k) + "\n" + m + "}": "{" + y.join(",") + "}";
                k = m;
                return x
            }
        }
        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z": null
        },
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        k, v, p = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        z;
        "function" !== typeof m.stringify && (m.stringify = function(b, c, f) {
            var e;
            v = k = "";
            if ("number" === typeof f) for (e = 0; e < f; e += 1) v += " ";
            else "string" === typeof f && (v = f);
            if ((z = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) throw Error("JSON.stringify");
            return a("", {
                "": b
            })
        });
        "function" !== typeof m.parse && (m.parse = function(a, b) {
            function c(a, f) {
                var e, l, k = a[f];
                if (k && "object" === typeof k) for (e in k) Object.prototype.hasOwnProperty.call(k, e) && (l = c(k, e), void 0 !== l ? k[e] = l: delete k[e]);
                return b.call(a, f, k)
            }
            var f;
            a = String(a);
            e.lastIndex = 0;
            e.test(a) && (a = a.replace(e,
            function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return f = eval("(" + a + ")"),
            "function" === typeof b ? c({
                "": f
            },
            "") : f;
            throw new SyntaxError("JSON.parse");
        })
    })();
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b, c) {
        for (var a = c || 0,
        e = this.length; a < e; a++) if (this[a] === b) return a;
        return - 1
    });
    var w = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    Math.uuid = function(b, c) {
        var a = [],
        e;
        c = c || w.length;
        if (b) for (e = 0; e < b; e++) a[e] = w[0 | Math.random() * c];
        else {
            var f;
            a[8] = a[13] = a[18] = a[23] = "-";
            a[14] = "4";
            for (e = 0; 36 > e; e++) a[e] || (f = 0 | 16 * Math.random(), a[e] = w[19 == e ? f & 3 | 8 : f])
        }
        return a.join("")
    };
    Math.uuidFast = function() {
        for (var b = Array(36), c = 0, a, e = 0; 36 > e; e++) 8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-": 14 == e ? b[e] = "4": (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), a = c & 15, c >>= 4, b[e] = w[19 == e ? a & 3 | 8 : a]);
        return b.join("")
    };
    Math.uuidCompact = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
        function(b) {
            var c = 16 * Math.random() | 0;
            return ("x" == b ? c: c & 3 | 8).toString(16)
        })
    };
    var b = function() {
        function b(a, c, f, k, l) {
            null != c ? (a = encodeURIComponent(a) + "\x3d" + encodeURIComponent(c), null != f && (a = 0 == f ? a + (";expires\x3d" + (new Date((new Date).getTime() + 31536E7)).toUTCString()) : a + (";expires\x3d" + (new Date((new Date).getTime() + f)).toUTCString()))) : a = encodeURIComponent(a) + "\x3d0;expires\x3d" + (new Date).toUTCString();
            null != k && (a += ";path\x3d" + k);
            null != l && (a += ";domain\x3d" + l);
            document.cookie = a
        }
        function c(a) {
            var b = document.cookie.indexOf(encodeURIComponent(a) + "\x3d");
            if ( - 1 != b) {
                var c = document.cookie.indexOf(";", b); - 1 == c && (c = document.cookie.length);
                return decodeURIComponent(document.cookie.substring(b + encodeURIComponent(a).length + 1, c))
            }
            return null
        }
        return function() {
            switch (arguments.length) {
            case 0:
                return document.cookies;
            case 1:
                return c.apply(null, arguments);
            default:
                return b.apply(null, arguments)
            }
        }
    } ();
    s.prototype = function() {
        var b = /^([^:]+):\/\/([^\/:]+)(:(\d+))?(\/[^?#]+)(\?([^#]*))?(#(.*))?$/;
        return {
            protocol: "",
            host: "",
            port: "",
            pathname: "",
            search: "",
            hash: "",
            origin: "",
            searchstr: "",
            hashstr: "",
            params: {},
            _init: function(c) {
                if (c = c.match(b)) {
                    var a = (c[7] || "").split("\x26"),
                    e = {};
                    if (a) for (var f = 0,
                    k = a.length; f < k; f++) {
                        var v = a[f].split("\x3d");
                        e[decodeURIComponent(v[0])] = decodeURIComponent(v[1])
                    }
                    this.protocol = c[1];
                    this.host = c[2];
                    this.port = c[4] || "";
                    this.pathname = c[5];
                    this.params = e;
                    c[7] && (this.searchstr = c[7], this.search = "?" + c[7]);
                    c[9] && (this.hashstr = c[9], this.hash = "#" + c[9]);
                    this.origin = this.protocol + "://" + this.host + (this.port ? ":" + this.port: "")
                }
                return this
            }
        }
    } ();
    var p = function() {
        function l() {
            jQuery(function() {
                var g = (new Date).getTime() - q.page_enter_time,
                d = null,
                d = a(d),
                d = e(d),
                d = v(d);
                q.extend_domReady_attach && (d = q.extend_domReady_attach.call(p, d));
                u("dom.ready", g, d); !
                function(d, g, a) {
                    var r, b, c, f = {
                        minHeight: 0,
                        elements: [],
                        percentage: !0,
                        userTiming: !0,
                        pixelDepth: !0,
                        nonInteraction: !0
                    },
                    e = d(g),
                    k = [],
                    l = 0;
                    d.scrollDepth = function(h) {
                        function n(d) {
                            c ? c({
                                event: "ScrollDistance",
                                eventCategory: "Scroll Depth",
                                eventAction: d,
                                eventLabel: "Baseline",
                                eventValue: 1,
                                eventNonInteraction: !0
                            }) : (r && ga("send", "event", "Scroll Depth", d, "Baseline", 1, {
                                nonInteraction: !0
                            }), b && _gaq.push(["_trackEvent", "Scroll Depth", d, "Baseline", 1, !0]))
                        }
                        function v(d, g, a, C) {
                            c ? (c({
                                event: "ScrollDistance",
                                eventCategory: "Scroll Depth",
                                eventAction: d,
                                eventLabel: g,
                                eventValue: 1,
                                eventNonInteraction: h.nonInteraction
                            }), h.pixelDepth && 2 < arguments.length && a > l && (l = a, c({
                                event: "ScrollDistance",
                                eventCategory: "Scroll Depth",
                                eventAction: "Pixel Depth",
                                eventLabel: (250 * Math.floor(a / 250)).toString(),
                                eventValue: 1,
                                eventNonInteraction: h.nonInteraction
                            })), h.userTiming && 3 < arguments.length && c({
                                event: "ScrollTiming",
                                eventCategory: "Scroll Depth",
                                eventAction: d,
                                eventLabel: g,
                                eventTiming: C
                            })) : (r && (ga("send", "event", "Scroll Depth", d, g, 1, {
                                nonInteraction: h.nonInteraction
                            }), h.pixelDepth && 2 < arguments.length && a > l && (l = a, ga("send", "event", "Scroll Depth", "Pixel Depth", (250 * Math.floor(a / 250)).toString(), 1, {
                                nonInteraction: h.nonInteraction
                            })), h.userTiming && 3 < arguments.length && ga("send", "timing", "Scroll Depth", d, C, g)), b && (_gaq.push(["_trackEvent", "Scroll Depth", d, g, 1, h.nonInteraction]), h.pixelDepth && 2 < arguments.length && a > l && (l = a, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", (250 * Math.floor(a / 250)).toString(), 1, h.nonInteraction])), h.userTiming && 3 < arguments.length && _gaq.push(["_trackTiming", "Scroll Depth", d, C, g, 100])))
                        }
                        function p(g, a, r) {
                            d.each(g,
                            function(g, b) { - 1 === d.inArray(g, k) && a >= b && (v("Percentage", g, a, r), k.push(g))
                            })
                        }
                        function m(g, a, r) {
                            d.each(g,
                            function(g, b) { - 1 === d.inArray(b, k) && d(b).length && a >= d(b).offset().top && (v("Elements", b, a, r), k.push(b))
                            })
                        }
                        function q(d, g) {
                            var a, b, r, c = null,
                            C = 0,
                            f = function() {
                                C = new Date;
                                c = null;
                                r = d.apply(a, b)
                            };
                            return function() {
                                var e = new Date;
                                C || (C = e);
                                var k = g - (e - C);
                                return a = this,
                                b = arguments,
                                0 >= k ? (clearTimeout(c), c = null, C = e, r = d.apply(a, b)) : c || (c = setTimeout(f, k)),
                                r
                            }
                        }
                        var z = +new Date;
                        h = d.extend({},
                        f, h);
                        d(a).height() < h.minHeight || ("function" == typeof ga && (r = !0), "undefined" != typeof _gaq && "function" == typeof _gaq.push && (b = !0), "function" == typeof h.eventHandler ? c = h.eventHandler: "undefined" != typeof dataLayer && "function" == typeof dataLayer.push && (c = dataLayer.push), h.percentage ? n("Percentage") : h.elements && n("Elements"), e.on("scroll.scrollDepth", q(function() {
                            var b = d(a).height(),
                            r = g.innerHeight ? g.innerHeight: e.height(),
                            r = e.scrollTop() + r,
                            b = {
                                "25%": parseInt(0.25 * b, 10),
                                "50%": parseInt(0.5 * b, 10),
                                "75%": parseInt(0.75 * b, 10),
                                "100%": b - 5
                            },
                            c = +new Date - z;
                            return k.length >= 4 + h.elements.length ? void e.off("scroll.scrollDepth") : (h.elements && m(h.elements, r, c), void(h.percentage && p(b, r, c)))
                        },
                        500)))
                    }
                } (jQuery, window, document);
                var r = 0;
                jQuery.scrollDepth({
                    minHeight: 2 * U(),
                    pixelDepth: !1,
                    nonInteraction: !1,
                    eventHandler: function(g) {
                        null != g.eventTiming && (r = Math.round((g.eventTiming - r) / 1E3), d = {
                            depth: g.eventLabel,
                            duration: r
                        },
                        r = g.eventTiming, u("scrolldepth", null, d))
                    }
                });
                setInterval(F, 5E3)
            })
        }
        function c() {
            jQuery(window).bind("load",
            function() {
                var g = (new Date).getTime() - q.page_enter_time,
                d = {};
                q.extend_onload_attach && (d = q.extend_onload_attach.call(p, d));
                u("window.load", g, d)
            })
        }
        function a(g) {
            var d = window.navigator,
            a = window.screen;
            g = a ? a.width + "x" + a.height: "-";
            var a = a ? a.colorDepth + "-bit": "-",
            b = (d && (d.language || d.browserLanguage) || "-").toLowerCase(),
            d = d && d.javaEnabled() ? 1 : 0,
            c = document.characterSet || document.charset || "-",
            e = (new Date).getTimezoneOffset();
            return g = {
                width_height: g,
                color_depth: a,
                language: b,
                javaenabled: d,
                charset: c,
                time_zone: e
            }
        }
        function e(g) {
            var d = A(h.SESSION_ID),
            a = b(h.SESSION_ID),
            c = null;
            A(h.JSESSION_LAST_VISIT) && (c = new Date(A(h.JSESSION_LAST_VISIT)));
            d != a && (null != a && null == d ? g = k(g, a, c) : null == a && null != d ? g = f(g, d, c) : (g = f(g, d, c), g = k(g, a, c)));
            return g
        }
        function f(g, d, a) {
            var b = A(h.JSESSION_FIRST_VISIT),
            c = null;
            b && (c = new Date(b));
            null != c && null != a && (O = Math.floor((a.getTime() - c.getTime()) / 1E3), g.osess_id = d, g.sess_stay = O);
            return g
        }
        function k(g, d, a) {
            g.new_sess = !0;
            null != a && (P = Math.floor(((new Date).getTime() - a.getTime()) / 1E3), g.sess_gap = P);
            t(h.SESSION_ID, d, 0, "/");
            t(h.JSESSION_FIRST_VISIT, (new Date).toUTCString(), 0, "/");
            return g
        }
        function v(g) {
            var d = A(h.PAGE_URL);
            if (null == d) return t(h.PAGE_URL, D.lcn, 0, "/"),
            t(h.PAGE_FIRST_VISIT, (new Date).toUTCString(), 0, "/"),
            g;
            if (d == D.lcn) return g;
            var d = null,
            a = A(h.PAGE_FIRST_VISIT);
            a && (d = new Date(a));
            var a = null,
            b = A(h.PAGE_LAST_VISIT);
            b && (a = new Date(b));
            null != d && null != a && (d = a.getTime() - d.getTime(), g.page_stay = Math.floor(d / 1E3));
            t(h.PAGE_URL, D.lcn, 0, "/");
            t(h.PAGE_FIRST_VISIT, (new Date).toUTCString(), 0, "/");
            return g
        }
        function w() {
            var a = {};
            jQuery(document).ajaxSend(function(d, b, c) {
                a[c.url] = (new Date).getTime()
            });
            jQuery(document).ajaxComplete(function(d, b, c) {
                var e = b.responseText;
                e && e.length > q.ajax_resp_limit && (e = e.substr(0, q.ajax_resp_limit));
                d = c.url;
                b = c.data;
                c = (new Date).getTime() - a[c.url];
                var f = null,
                f = {
                    ax_url: d,
                    ax_rqt: b,
                    ax_rsp: e
                };
                q.extend_ajax_attach && (f = q.extend_ajax_attach.call(p, f));
                u("ajax", c, f)
            })
        }
        function z(a, d, b) {
            d = S(d);
            E("log", "REQUEST", a + "?" + d);
            if (B.params[V]) return ! 1;
            var c = document.createElement("img"),
            e = document.getElementsByTagName("head")[0],
            f = !1;
            c.onerror = c.onload = c.onreadystatechange = function() {
                f || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (f = !0, e.removeChild(c))
            };
            e.appendChild(c);
            c.src = a + "?" + d;
            T(!0 === b ? 100 : b)
        }
        function S(a) {
            var d = [],
            b;
            for (b in a) d.push(encodeURIComponent(b) + "\x3d" + encodeURIComponent(a[b]));
            return d.join("\x26")
        }
        function T(a) {
            a = a || 100;
            for (var d = new Date; new Date - d < a;);
        }
        function u(a, d, b) {
            F();
            a = W[a] || a;
            d = d || "";
            var c = b ? m.stringify(b) : "",
            c = $.extend({},
            D, {
                tp: a,
                rst: d,
                ath: c,
                jst: (new Date).getTime()
            });
            z(q.log_url, c, !0);
            E("eventLog", "TYPE", "", a);
            E("eventLog", "RESULT", "", d);
            E("eventLog", "ATTACH", "", b)
        }
        function F() {
            null != b(h.SESSION_ID) && t(h.JSESSION_LAST_VISIT, (new Date).toUTCString(), 0, "/");
            t(h.PAGE_LAST_VISIT, (new Date).toUTCString(), 0, "/")
        }
        function x() {
            var a = A(h.CLIENT_ID);
            a || (a = (a = b(h.SESSION_ID)) ? a + ((new Date).getTime() + "").substr(9) : (new Date).getTime() + "" + Math.round(1E4 * Math.random()), t(h.CLIENT_ID, a, 0, "/"));
            return a
        }
        function G() {
            var a = new Date,
            d = a.getFullYear(),
            b = a.getMonth() + 1,
            a = a.getDate();
            10 > b && (b = "0" + b);
            10 > a && (a = "0" + a);
            return d + "" + b + a + Math.uuid(16)
        }
        function K(a) {
            t(h.UCID, a, 0, "/");
            D.fpt = a
        }
        function y() {
            var a = h.UCID,
            d = A(a),
            b = d ? new SwfStore({
                namespace: "up_crsdm_ucid",
                swf_url: "https://upa.unionpaysecure.com/sampler/js/common/storage.swf",
                onready: function() {
                    var c = b.get(a);
                    c ? d != c && (H("ucid !\x3d swfUci", "SwfStoreElse", c, ""), d = c, K(d)) : (H("no swfUci", "SwfStoreElse", "", ""), b.set(a, d))
                },
                onerror: function() {
                    H("getUcid", "SwfStoreElse", "", "")
                }
            }) : new SwfStore({
                namespace: "up_crsdm_ucid",
                swf_url: "https://upa.unionpaysecure.com/sampler/js/common/storage.swf",
                onready: function() {
                    var c = b.get(a);
                    c ? d = c: (d = c = G(), b.set(a, c));
                    K(d)
                },
                onerror: function() {
                    H("getUcid", "SwfStore", "", "");
                    d = G();
                    K(d + "_ck")
                }
            });
            return d
        }
        function n() {
            var a = A(h.CURRENT_VISITS, !0);
            a || (a = (a = A(h.VISIT_TIME)) ? Number(a) + 1 : 1, t(h.CURRENT_VISITS, a, null, "/"), t(h.VISIT_TIME, a, 0, "/"));
            return a
        }
        function A(a, d) {
            var c = null,
            e = "ub_smpl_ln";
            d && (e = "ub_smpl_tp");
            null != b(e) && 0 < b(e).length && (c = m.parse(b(e))[a]);
            c || (c = b(a)) && (d ? t(a, c, null, "/") : t(a, c, 0, "/"));
            return c
        }
        function t(a, d, c, e) {
            var f = {},
            k = "ub_smpl_ln";
            null == c && (k = "ub_smpl_tp");
            null != b(k) && 0 < b(k).length && (f = m.parse(b(k)));
            f[a] = d;
            b(k, m.stringify(f), c, e)
        }
        function I(a, d) {
            d = d || [];
            if (a == document || a.tagName && "HTML" == a.tagName.toUpperCase()) return d;
            if (a.getAttribute && "" != a.getAttribute("id") && null != a.getAttribute("id")) return d.push(a.nodeName.toLowerCase() + "." + a.getAttribute("id")),
            d;
            a.parentNode && (d = I(a.parentNode, d));
            if (a.previousSibling) {
                var b = 1,
                c = a.previousSibling;
                do 1 == c.nodeType && c.nodeName == a.nodeName && b++,
                c = c.previousSibling;
                while (c)
            }
            1 == a.nodeType && d.push((1 < b ? b: 1) + a.nodeName.toLowerCase());
            return d
        }
        function L(a) {
            var d = M[B.origin + B.pathname] || M[B.origin + B.pathname + "/"];
            if (d && d.white_list) {
                for (var b = 0,
                c = d.white_list.length; b < c; b++) if (d.white_list[b] == a) return ! 0;
                return ! 1
            }
            return ! 0
        }
        function N(a, d, b) {
            return q.extend_event_attach[d] ? q.extend_event_attach[d].call(p, "click", b) : b
        }
        function X(a) {
            a = a.toLowerCase();
            var d = "Other";
            0 <= a.indexOf("tencenttraveler") || 0 <= a.indexOf("qqbrowser") ? d = "TT": a.indexOf("se") && 0 <= a.indexOf("metasr") ? d = "Sougou": 0 <= a.indexOf("360ee") || 0 <= a.indexOf("360se") ? d = "360SE": 0 <= a.indexOf("maxthon") ? d = "Maxthon": 0 <= a.indexOf("theworld") ? d = "TheWorld": 0 <= a.indexOf("msie") ? d = "MSIE": 0 <= a.indexOf("firefox") ? d = "Firefox": 0 <= a.indexOf("opera") ? d = "Opera": 0 <= a.indexOf("chrome") ? d = "Chrome": 0 <= a.indexOf("safari") && (d = "Safari");
            return d
        }
        function U() {
            var a = 0;
            return a = "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight: document.body.clientHeight
        }
        var V = "upa_req_ban",
        H = function(a, d, b, c) {
            "undefined" != typeof console && console && console.warn && console.warn("[ERROR]", "{" + a + "}", "\x3c" + d + "\x3e", '"' + (b || "") + '"', c || "")
        },
        E = function(a, d, b, c) { / [ ? &] upa_debug( = |&|$) / .test(location.href) && "undefined" != typeof console && console && console.log && console.log("[DEBUG]", "{" + a + "}", "\x3c" + d + "\x3e", '"' + (b || "") + '"', c || "")
        },
        Y = {
            page_enter_time: (new Date).getTime(),
            ajax_logging: !0,
            ajax_resp_limit: 128,
            click_hm_stat: [],
            log_url: "https://upa.unionpaysecure.com/sampler/s.do",
            extend_basicInfo: {},
            extend_domReady_attach: function(a) {
                return a
            },
            extend_onload_attach: function(a) {
                return a
            },
            extend_ajax_attach: function(a) {
                return a
            },
            extend_event_attach: {}
        },
        q,
        h = {
            CLIENT_ID: "st_ci",
            VISIT_TIME: "st_hvt",
            CURRENT_VISITS: "st_sct",
            SESSION_ID: "JSESSIONID",
            JSESSION_FIRST_VISIT: "s_fst_vt",
            JSESSION_LAST_VISIT: "s_lst_vt",
            PAGE_URL: "pageUrl",
            PAGE_FIRST_VISIT: "p_fst_vt",
            PAGE_LAST_VISIT: "p_lst_vt",
            UCID: "ucid"
        },
        P = 0,
        O = 0,
        W = {
            "dom.ready": "dr",
            "window.load": "wl",
            click: "ck",
            focus: "fs",
            blur: "bl",
            change: "cg",
            mousedown: "md",
            scrolldepth: "sd",
            ajax: "ax"
        },
        B,
        J,
        M,
        Q = 0,
        R = 0,
        D;
        return {
            init: function(a) {
                Q || (Q = !0, q = $.extend({},
                Y, a), B = new s(location.href), E("init", "LOCATION_INFO", "", B), J = new s(document.referrer), E("init", "REFERRER_INFO", "", J), D = $.extend({},
                {
                    cid: x(),
                    fpt: y(),
                    sid: b(h.SESSION_ID),
                    lcn: location.href,
                    jsr: J.origin + J.pathname,
                    vt: n()
                },
                q.extend_basicInfo), E("collectInfo", "BASIC_INFO", "", D), l(), c(), q.ajax_logging && w())
            },
            inspect: function(a) {
                R || (R = !0, M = a || {},
                jQuery(document.body).delegate("a,button,input[type\x3dradio],input[type\x3dcheckbox],input[type\x3dbutton],input[type\x3dsubmit],object", "mousedown",
                function(a) {
                    var b = I(a.target).join("~");
                    if (!L(b)) return ! 1;
                    var c = null;
                    "INPUT" == a.target.tagName.toUpperCase() ? c = {
                        name: a.target.name,
                        value: a.target.value
                    }: "A" == a.target.tagName.toUpperCase() && (c = {
                        href: a.target.href
                    });
                    c = N("click", b, c);
                    "Firefox" == X(window.navigator.userAgent) && "INPUT" == a.target.tagName.toUpperCase() && "SUBMIT" == a.target.type.toUpperCase() ? trackInterval = setInterval(function() {
                        u("click", b, c);
                        clearInterval(trackInterval)
                    },
                    100) : u("click", b, c)
                }).delegate("input", "blur",
                function(a) {
                    var b = a.target.getAttribute("type");
                    if (!b || "TEXT" == b.toUpperCase() || "TEL" == b.toUpperCase()) {
                        b = I(a.target).join("~");
                        if (!L(b)) return ! 1;
                        a = {
                            name: a.target.name,
                            value: a.target.value
                        };
                        a = N("blur", b, a);
                        u("blur", b, a)
                    }
                }).delegate("select", "change",
                function(a) {
                    var b = I(a.target).join("~");
                    if (!L(b)) return ! 1;
                    a = {
                        name: a.target.name,
                        value: a.target.value
                    };
                    a = N("change", b, a);
                    u("change", b, a)
                }), q.click_hm_stat && 0 < q.click_hm_stat.length && ( - 1 < q.click_hm_stat.indexOf(B.host + !!B.port ? ":" + B.port: "/" + B.pathname) || -1 < q.click_hm_stat.indexOf("*")) && jQuery(document).delegate("", "mousedown",
                function(a) {
                    var b;
                    a = a || window.event;
                    a.pageX || a.pageY ? (b = a.pageX, a = a.pageY) : (b = a.clientX + document.body.scrollLeft - document.body.clientLeft, a = a.clientY + document.body.scrollTop - document.body.clientTop);
                    b = {
                        mx: Math.round(b),
                        my: Math.round(a)
                    };
                    u("mousedown", "", b)
                }))
            },
            log: u
        }
    } ();
    window.__MYUPA = {
        __UPA: p,
        __cookie: b,
        __URL: s,
        getScript: function(b) {
            function c() {
                a.parentNode.removeChild(a);
                e || b.callBack() && b.callBack()
            }
            var a, e, f = document,
            k = ("-1" == b.url.indexOf("?") ? b.url + "?": b.url) + (b.cache ? "": "\x26call\x3d" + new Date); (a = f.createElement("script")).setAttribute("type", "text/javascript");
            f.getElementsByTagName("head")[0].appendChild(a).src = k;
            a.onload = function() {
                a.readyState || c()
            };
            a.onreadystatechange = function() {
                "complete" != a.readyState.toLowerCase() && "loaded" != a.readyState.toLowerCase() || "function" != typeof jQuery || c()
            }
        },
        execScript: function(b) {
            var c = this;
            c._callBack = function() {
                jQuery.extend(jQuery, {
                    __UPA: window.__MYUPA.__UPA,
                    __cookie: window.__MYUPA.__cookie,
                    __URL: window.__MYUPA.__URL
                });
                b.callBack && b.callBack.apply(this, b.arg)
            };
            window.__zeptoCallback ? window.__zeptoCallback(c) : "function" == typeof jQuery ? c._callBack() : this.getScript({
                url: "https://static.95516.com/static/v3_i18/up/js/jquery/jquery-1.7.2.min.js",
                callBack: function() {
                    c._callBack()
                },
                cache: !0
            })
        }
    }
})(); (function() {
    function s(b) {
        if ("function" === typeof b) throw "SwfStore Error: Functions cannot be used as keys or values.";
    }
    var m = 0,
    w = /[^a-z0-9_]/ig;
    window.SwfStore = function(b) {
        function p(a) {
            var c = document.createElement("div");
            document.body.appendChild(c);
            c.id = "SwfStore_" + b.namespace + "_" + m++;
            a || (c.style.position = "absolute", c.style.top = "-2000px", c.style.left = "-2000px");
            return c
        }
        b = b || {};
        var l = {
            swf_url: "storage.swf",
            namespace: "swfstore",
            path: null,
            debug: !1,
            timeout: 10,
            onready: null,
            onerror: null
        },
        c;
        for (c in l) l.hasOwnProperty(c) && (b.hasOwnProperty(c) || (b[c] = l[c]));
        b.namespace = b.namespace.replace(w, "_");
        if (window.SwfStore[b.namespace]) throw "There is already an instance of SwfStore using the '" + b.namespace + "' namespace. Use that instance or specify an alternate namespace in the config.";
        this.config = b;
        if (b.debug) {
            if ("undefined" === typeof console) {
                var a = p(!0);
                window.console = {
                    log: function(b) {
                        var c = p(!0);
                        c.innerHTML = b;
                        a.appendChild(c)
                    }
                }
            }
            this.log = function(a, c, e) {
                c = "swfStore" === c ? "swf": c;
                if ("undefined" !== typeof console[a]) console[a]("SwfStore - " + b.namespace + " (" + c + "): " + e);
                else console.log("SwfStore - " + b.namespace + ": " + a + " (" + c + "): " + e)
            }
        } else this.log = function() {};
        this.log("info", "js", "Initializing...");
        SwfStore[b.namespace] = this;
        l = p(b.debug);
        c = "SwfStore_" + b.namespace + "_" + m++;
        var e = "namespace\x3d" + b.namespace + "\x26amp;" + (b.path ? "LSOPath\x3d" + b.path + "\x26amp;": "") + "LSOName\x3d" + b.namespace;
        l.innerHTML = '\x3cobject style\x3d"position:absolute;left:-10000px;top:-10000px;" height\x3d"100" width\x3d"500" codebase\x3d"https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id\x3d"' + c + '" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"\x3e\t\x3cparam value\x3d"' + b.swf_url + '" name\x3d"movie"\x3e\t\x3cparam value\x3d"' + e + '" name\x3d"FlashVars"\x3e\t\x3cparam value\x3d"always" name\x3d"allowScriptAccess"\x3e\t\x3cembed height\x3d"375" align\x3d"middle" width\x3d"500" pluginspage\x3d"https://www.macromedia.com/go/getflashplayer" flashvars\x3d"' + e + '" type\x3d"application/x-shockwave-flash" allowscriptaccess\x3d"always" quality\x3d"high" loop\x3d"false" play\x3d"true" name\x3d"' + c + '" bgcolor\x3d"#ffffff" src\x3d"' + b.swf_url + '"\x3e\x3c/object\x3e';
        this.swf = document[c] || window[c];
        this._timeout = setTimeout(function() {
            SwfStore[b.namespace].log("error", "js", "Timeout reached, assuming " + b.swf_url + " failed to load and firing the onerror callback.");
            if (b.onerror) b.onerror()
        },
        1E3 * b.timeout)
    };
    SwfStore.prototype = {
        version: "1.9.1",
        ready: !1,
        set: function(b, p) {
            this._checkReady();
            s(b);
            s(p);
            this.swf.set(b, p)
        },
        get: function(b) {
            this._checkReady();
            s(b);
            return this.swf.get(b)
        },
        getAll: function() {
            this._checkReady();
            var b = this.swf.getAll();
            b.__flashBugFix && delete b.__flashBugFix;
            return b
        },
        clear: function(b) {
            this._checkReady();
            s(b);
            this.swf.clear(b)
        },
        _checkReady: function() {
            if (!this.ready) throw "SwfStore is not yet finished initializing. Pass a config.onready callback or wait until this.ready is true before trying to use a SwfStore instance.";
        },
        onload: function() {
            var b = this;
            setTimeout(function() {
                clearTimeout(b._timeout);
                b.ready = !0;
                b.set("__flashBugFix", "1");
                if (b.config.onready) b.config.onready()
            },
            0)
        },
        onerror: function() {
            clearTimeout(this._timeout);
            if (this.config.onerror) this.config.onerror()
        }
    }
})(); (function() {
    function s() {
        var a = $("#loginName");
        return a.length ? $.trim(a.val()) || "": $.__cookie("username") || $.__cookie("loginName") || ""
    }
    function m() {
        var a = (new $.__URL(location.href)).params.transNumber;
        a ? $.__cookie("st_tn", a, null, "/") : a = $.__cookie("st_tn");
        return a
    }
    function w() {
        var a = $("#merCode");
        a.length || (a = $("#merId"));
        return a.length ? (a = $.trim(a.val()), $.__cookie("st_mc", a, null, "/"), a) : $.__cookie("st_mc")
    }
    function b() {
        var a = $("p.order_num").attr("title");
        return a ? ($.__cookie("st_mon", a, null, "/"), a) : $.__cookie("st_mon")
    }
    function p() {
        var a = $("em.order_money");
        return a.length ? (a = a.html(), $.__cookie("st_moa", a, null, "/"), a) : $.__cookie("st_moa")
    }
    function l() {
        var a = $("p.order_date").html();
        return a ? (a = a.substring(a.length - 10, a.length), $.__cookie("st_mod", a, null, "/"), a) : $.__cookie("st_mod")
    }
    var c = {};
    window.__MYUPA && window.__MYUPA.execScript && window.__MYUPA.execScript({
        callBack: function() {
            try {
                window.jQuery.__UPA.init({
                    page_enter_time: window._UPOP_ENTER_TIME || (new Date).getTime(),
                    ajax_logging: !1,
                    extend_basicInfo: {
                        sysId: "uniform_br_pc",
                        sid: $.__cookie("up_session_id") || "",
                        un: s(),
                        tn: m(),
                        m_cd: w(),
                        m_on: b(),
                        m_oa: p(),
                        m_od: l()
                    },
                    extend_domReady_attach: function(a) {
                        var b = {};
                        try {
                            var c, l = "error";
                            try {
                                l = (new $.upe).checkInstall()
                            } catch(p) {
                                l = p.message
                            }
                            c = l;
                            var m;
                            var s = $("div.order_name");
                            if (s.length) {
                                var w = s.html();
                                $.__cookie("st_mcn", w, null, "/");
                                m = w
                            } else m = $.__cookie("st_mcn");
                            l = {};
                            if ( - 1 < location.href.indexOf("loginSubmit.action")) {
                                var u = $(".notice_box \x3e ul \x3e li").text();
                                null != u && $.extend(l, {
                                    notice_box: $.trim(u)
                                })
                            } else if ( - 1 < location.href.indexOf("payResult.action")) {
                                var F = 0 < $(".icon_success").size(),
                                x = 0 < $(".icon_fail").size();
                                F ? $.extend(l, {
                                    icon_success: !0
                                }) : x && $.extend(l, {
                                    icon_fail: $.trim($(".sub_word").text())
                                })
                            }
                            b = {
                                upe: c,
                                m_cn: m,
                                msg: l
                            }
                        } catch(G) {
                            b = {
                                jsErr: G.message
                            }
                        }
                        return $.extend(a, b)
                    }
                }),
                $.__UPA.inspect(c)
            } catch(a) {}
        },
        arg: []
    })
})();