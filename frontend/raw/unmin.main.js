! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    var t = [],
        S = T.document,
        n = Object.getPrototypeOf,
        o = t.slice,
        m = t.concat,
        l = t.push,
        s = t.indexOf,
        i = {},
        r = i.toString,
        f = i.hasOwnProperty,
        a = f.toString,
        c = a.call(Object),
        v = {};

    function g(e, t) {
        var i = (t = t || S).createElement("script");
        i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
    }
    var u = "3.1.1",
        C = function(e, t) {
            return new C.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        h = /^-ms-/,
        p = /-([a-z])/g,
        y = function(e, t) {
            return t.toUpperCase()
        };

    function b(e) {
        var t = !!e && "length" in e && e.length,
            i = C.type(e);
        return "function" !== i && !C.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: u,
        constructor: C,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(i) {
            return this.pushStack(C.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, i, n, s, r, a = arguments[0] || {},
            o = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[o] || {}, o++), "object" == typeof a || C.isFunction(a) || (a = {}), o === l && (a = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) i = a[t], a !== (n = e[t]) && (c && n && (C.isPlainObject(n) || (s = C.isArray(n))) ? (r = s ? (s = !1, i && C.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {}, a[t] = C.extend(c, r, n)) : void 0 !== n && (a[t] = n));
        return a
    }, C.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === C.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== r.call(e) || (t = n(e)) && ("function" != typeof(i = f.call(t, "constructor") && t.constructor) || a.call(i) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            g(e)
        },
        camelCase: function(e) {
            return e.replace(h, "ms-").replace(p, y)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, n = 0;
            if (b(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (b(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : s.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
            return e.length = s, e
        },
        grep: function(e, t, i) {
            for (var n = [], s = 0, r = e.length, a = !i; s < r; s++) !t(e[s], s) !== a && n.push(e[s]);
            return n
        },
        map: function(e, t, i) {
            var n, s, r = 0,
                a = [];
            if (b(e))
                for (n = e.length; r < n; r++) null != (s = t(e[r], r, i)) && a.push(s);
            else
                for (r in e) null != (s = t(e[r], r, i)) && a.push(s);
            return m.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, s;
            if ("string" == typeof t && (i = e[t], t = e, e = i), C.isFunction(e)) return n = o.call(arguments, 2), (s = function() {
                return e.apply(t || this, n.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, s
        },
        now: Date.now,
        support: v
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var w = function(i) {
        var e, p, w, r, s, f, d, m, _, l, c, x, T, a, S, v, o, u, g, C = "sizzle" + 1 * new Date,
            y = i.document,
            k = 0,
            n = 0,
            h = ae(),
            b = ae(),
            E = ae(),
            A = function(e, t) {
                return e === t && (c = !0), 0
            },
            P = {}.hasOwnProperty,
            t = [],
            M = t.pop,
            O = t.push,
            D = t.push,
            L = t.slice,
            z = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            $ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + N + "*(" + $ + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + N + "*\\]",
            F = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            j = new RegExp(N + "+", "g"),
            B = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            H = new RegExp("^" + N + "*," + N + "*"),
            q = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            X = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
            Y = new RegExp(F),
            V = new RegExp("^" + $ + "$"),
            W = {
                ID: new RegExp("^#(" + $ + ")"),
                CLASS: new RegExp("^\\.(" + $ + ")"),
                TAG: new RegExp("^(" + $ + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            },
            U = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
            ee = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ne = function() {
                x()
            },
            se = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            D.apply(t = L.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            D = {
                apply: t.length ? function(e, t) {
                    O.apply(e, L.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function re(e, t, i, n) {
            var s, r, a, o, l, c, u, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return i;
            if (!n && ((t ? t.ownerDocument || t : y) !== T && x(t), t = t || T, S)) {
                if (11 !== h && (l = Q.exec(e)))
                    if (s = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(s))) return i;
                            if (a.id === s) return i.push(a), i
                        } else if (d && (a = d.getElementById(s)) && g(t, a) && a.id === s) return i.push(a), i
                    } else {
                        if (l[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(s)), i
                    }
                if (p.qsa && !E[e + " "] && (!v || !v.test(e))) {
                    if (1 !== h) d = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(te, ie) : t.setAttribute("id", o = C), r = (c = f(e)).length; r--;) c[r] = "#" + o + " " + ge(c[r]);
                        u = c.join(","), d = J.test(e) && me(t.parentNode) || t
                    }
                    if (u) try {
                        return D.apply(i, d.querySelectorAll(u)), i
                    } catch (e) {} finally {
                        o === C && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(B, "$1"), t, i, n)
        }

        function ae() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
            }
        }

        function oe(e) {
            return e[C] = !0, e
        }

        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function ue(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(i) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }

        function pe(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function fe(a) {
            return oe(function(r) {
                return r = +r, oe(function(e, t) {
                    for (var i, n = a([], e.length, r), s = n.length; s--;) e[i = n[s]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = re.support = {}, s = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, x = re.setDocument = function(e) {
                var t, i, n = e ? e.ownerDocument || e : y;
                return n !== T && 9 === n.nodeType && n.documentElement && (a = (T = n).documentElement, S = !s(T), y !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), p.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = le(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = K.test(T.getElementsByClassName), p.getById = le(function(e) {
                    return a.appendChild(e).id = C, !T.getElementsByName || !T.getElementsByName(C).length
                }), p.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var i = e.replace(Z, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === i
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var i, n, s, r = t.getElementById(e);
                        if (r) {
                            if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                            for (s = t.getElementsByName(e), n = 0; r = s[n++];)
                                if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
                        }
                        return []
                    }
                }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        s = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
                }, o = [], v = [], (p.qsa = K.test(T.querySelectorAll)) && (le(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + N + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + C + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || v.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (p.matchesSelector = K.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function(e) {
                    p.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), o.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), o = o.length && new RegExp(o.join("|")), t = K.test(a.compareDocumentPosition), g = t || K.test(a.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === i ? e === T || e.ownerDocument === y && g(y, e) ? -1 : t === T || t.ownerDocument === y && g(y, t) ? 1 : l ? z(l, e) - z(l, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var i, n = 0,
                        s = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        o = [t];
                    if (!s || !r) return e === T ? -1 : t === T ? 1 : s ? -1 : r ? 1 : l ? z(l, e) - z(l, t) : 0;
                    if (s === r) return ue(e, t);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (; a[n] === o[n];) n++;
                    return n ? ue(a[n], o[n]) : a[n] === y ? -1 : o[n] === y ? 1 : 0
                }), T
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && x(e), t = t.replace(X, "='$1']"), p.matchesSelector && S && !E[t + " "] && (!o || !o.test(t)) && (!v || !v.test(t))) try {
                    var i = u.call(e, t);
                    if (i || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return 0 < re(t, T, null, [e]).length
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && x(e), g(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== T && x(e);
                var i = w.attrHandle[t.toLowerCase()],
                    n = i && P.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !S) : void 0;
                return void 0 !== n ? n : p.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, re.escape = function(e) {
                return (e + "").replace(te, ie)
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, i = [],
                    n = 0,
                    s = 0;
                if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(A), c) {
                    for (; t = e[s++];) t === e[s] && (n = i.push(s));
                    for (; n--;) e.splice(i[n], 1)
                }
                return l = null, e
            }, r = re.getText = function(e) {
                var t, i = "",
                    n = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[n++];) i += r(t);
                return i
            }, (w = re.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return W.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = f(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = h[e + " "];
                        return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && h(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(i, n, s) {
                        return function(e) {
                            var t = re.attr(e, i);
                            return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === s : "!=" === n ? t !== s : "^=" === n ? s && 0 === t.indexOf(s) : "*=" === n ? s && -1 < t.indexOf(s) : "$=" === n ? s && t.slice(-s.length) === s : "~=" === n ? -1 < (" " + t.replace(j, " ") + " ").indexOf(s) : "|=" === n && (t === s || t.slice(0, s.length + 1) === s + "-"))
                        }
                    },
                    CHILD: function(f, e, t, m, v) {
                        var g = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, i) {
                            var n, s, r, a, o, l, c = g !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                h = !i && !b,
                                p = !1;
                            if (u) {
                                if (g) {
                                    for (; c;) {
                                        for (a = e; a = a[c];)
                                            if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                    for (p = (o = (n = (s = (r = (a = u)[C] || (a[C] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[f] || [])[0] === k && n[1]) && n[2], a = o && u.childNodes[o]; a = ++o && a && a[c] || (p = o = 0) || l.pop();)
                                        if (1 === a.nodeType && ++p && a === e) {
                                            s[f] = [k, o, p];
                                            break
                                        }
                                } else if (h && (p = o = (n = (s = (r = (a = e)[C] || (a[C] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[f] || [])[0] === k && n[1]), !1 === p)
                                    for (;
                                        (a = ++o && a && a[c] || (p = o = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (h && ((s = (r = a[C] || (a[C] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[f] = [k, p]), a !== e)););
                                return (p -= v) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return a[C] ? a(r) : 1 < a.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                            for (var i, n = a(e, r), s = n.length; s--;) e[i = z(e, n[s])] = !(t[i] = n[s])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var n = [],
                            s = [],
                            o = d(e.replace(B, "$1"));
                        return o[C] ? oe(function(e, t, i, n) {
                            for (var s, r = o(e, null, n, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                        }) : function(e, t, i) {
                            return n[0] = e, o(n, null, i, s), n[0] = null, !s.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: oe(function(t) {
                        return t = t.replace(Z, ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function(i) {
                        return V.test(i || "") || re.error("unsupported lang: " + i), i = i.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = i.location && i.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return U.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: fe(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: fe(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                        return e
                    }),
                    gt: fe(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = he(e);

        function ve() {}

        function ge(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ye(o, e, t) {
            var l = e.dir,
                c = e.next,
                u = c || l,
                d = t && "parentNode" === u,
                h = n++;
            return e.first ? function(e, t, i) {
                for (; e = e[l];)
                    if (1 === e.nodeType || d) return o(e, t, i);
                return !1
            } : function(e, t, i) {
                var n, s, r, a = [k, h];
                if (i) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || d) && o(e, t, i)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || d)
                            if (s = (r = e[C] || (e[C] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((n = s[u]) && n[0] === k && n[1] === h) return a[2] = n[2];
                                if ((s[u] = a)[2] = o(e, t, i)) return !0
                            } return !1
            }
        }

        function be(s) {
            return 1 < s.length ? function(e, t, i) {
                for (var n = s.length; n--;)
                    if (!s[n](e, t, i)) return !1;
                return !0
            } : s[0]
        }

        function we(e, t, i, n, s) {
            for (var r, a = [], o = 0, l = e.length, c = null != t; o < l; o++)(r = e[o]) && (i && !i(r, n, s) || (a.push(r), c && t.push(o)));
            return a
        }

        function _e(p, f, m, v, g, e) {
            return v && !v[C] && (v = _e(v)), g && !g[C] && (g = _e(g, e)), oe(function(e, t, i, n) {
                var s, r, a, o = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, i) {
                        for (var n = 0, s = t.length; n < s; n++) re(e, t[n], i);
                        return i
                    }(f || "*", i.nodeType ? [i] : i, []),
                    d = !p || !e && f ? u : we(u, o, p, i, n),
                    h = m ? g || (e ? p : c || v) ? [] : t : d;
                if (m && m(d, h, i, n), v)
                    for (s = we(h, l), v(s, [], i, n), r = s.length; r--;)(a = s[r]) && (h[l[r]] = !(d[l[r]] = a));
                if (e) {
                    if (g || p) {
                        if (g) {
                            for (s = [], r = h.length; r--;)(a = h[r]) && s.push(d[r] = a);
                            g(null, h = [], s, n)
                        }
                        for (r = h.length; r--;)(a = h[r]) && -1 < (s = g ? z(e, a) : o[r]) && (e[s] = !(t[s] = a))
                    }
                } else h = we(h === t ? h.splice(c, h.length) : h), g ? g(null, t, h, n) : D.apply(t, h)
            })
        }

        function xe(e) {
            for (var s, t, i, n = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], o = r ? 1 : 0, l = ye(function(e) {
                    return e === s
                }, a, !0), c = ye(function(e) {
                    return -1 < z(s, e)
                }, a, !0), u = [function(e, t, i) {
                    var n = !r && (i || t !== _) || ((s = t).nodeType ? l(e, t, i) : c(e, t, i));
                    return s = null, n
                }]; o < n; o++)
                if (t = w.relative[e[o].type]) u = [ye(be(u), t)];
                else {
                    if ((t = w.filter[e[o].type].apply(null, e[o].matches))[C]) {
                        for (i = ++o; i < n && !w.relative[e[i].type]; i++);
                        return _e(1 < o && be(u), 1 < o && ge(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, o < i && xe(e.slice(o, i)), i < n && xe(e = e.slice(i)), i < n && ge(e))
                    }
                    u.push(t)
                }
            return be(u)
        }
        return ve.prototype = w.filters = w.pseudos, w.setFilters = new ve, f = re.tokenize = function(e, t) {
            var i, n, s, r, a, o, l, c = b[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, o = [], l = w.preFilter; a;) {
                for (r in i && !(n = H.exec(a)) || (n && (a = a.slice(n[0].length) || a), o.push(s = [])), i = !1, (n = q.exec(a)) && (i = n.shift(), s.push({
                        value: i,
                        type: n[0].replace(B, " ")
                    }), a = a.slice(i.length)), w.filter) !(n = W[r].exec(a)) || l[r] && !(n = l[r](n)) || (i = n.shift(), s.push({
                    value: i,
                    type: r,
                    matches: n
                }), a = a.slice(i.length));
                if (!i) break
            }
            return t ? a.length : a ? re.error(e) : b(e, o).slice(0)
        }, d = re.compile = function(e, t) {
            var i, v, g, y, b, n, s = [],
                r = [],
                a = E[e + " "];
            if (!a) {
                for (t || (t = f(e)), i = t.length; i--;)(a = xe(t[i]))[C] ? s.push(a) : r.push(a);
                (a = E(e, (v = r, y = 0 < (g = s).length, b = 0 < v.length, n = function(e, t, i, n, s) {
                    var r, a, o, l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        h = _,
                        p = e || b && w.find.TAG("*", s),
                        f = k += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (s && (_ = t === T || t || s); c !== m && null != (r = p[c]); c++) {
                        if (b && r) {
                            for (a = 0, t || r.ownerDocument === T || (x(r), i = !S); o = v[a++];)
                                if (o(r, t || T, i)) {
                                    n.push(r);
                                    break
                                }
                            s && (k = f)
                        }
                        y && ((r = !o && r) && l--, e && u.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (a = 0; o = g[a++];) o(u, d, t, i);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = M.call(n));
                            d = we(d)
                        }
                        D.apply(n, d), s && !e && 0 < d.length && 1 < l + g.length && re.uniqueSort(n)
                    }
                    return s && (k = f, _ = h), u
                }, y ? oe(n) : n))).selector = e
            }
            return a
        }, m = re.select = function(e, t, i, n) {
            var s, r, a, o, l, c = "function" == typeof e && e,
                u = !n && f(e = c.selector || e);
            if (i = i || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === t.nodeType && S && w.relative[r[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return i;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (s = W.needsContext.test(e) ? 0 : r.length; s-- && (a = r[s], !w.relative[o = a.type]);)
                    if ((l = w.find[o]) && (n = l(a.matches[0].replace(Z, ee), J.test(r[0].type) && me(t.parentNode) || t))) {
                        if (r.splice(s, 1), !(e = n.length && ge(r))) return D.apply(i, n), i;
                        break
                    }
            }
            return (c || d(e, u))(n, t, !S, i, !t || J.test(e) && me(t.parentNode) || t), i
        }, p.sortStable = C.split("").sort(A).join("") === C, p.detectDuplicates = !!c, x(), p.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(R, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), re
    }(T);
    C.find = w, C.expr = w.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = w.uniqueSort, C.text = w.getText, C.isXMLDoc = w.isXML, C.contains = w.contains, C.escapeSelector = w.escape;
    var _ = function(e, t, i) {
            for (var n = [], s = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (s && C(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        x = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        k = C.expr.match.needsContext,
        E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        A = /^.[^:#\[\.,]*$/;

    function P(e, i, n) {
        return C.isFunction(i) ? C.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== n
        }) : i.nodeType ? C.grep(e, function(e) {
            return e === i !== n
        }) : "string" != typeof i ? C.grep(e, function(e) {
            return -1 < s.call(i, e) !== n
        }) : A.test(i) ? C.filter(i, e, n) : (i = C.filter(i, e), C.grep(e, function(e) {
            return -1 < s.call(i, e) !== n && 1 === e.nodeType
        }))
    }
    C.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                s = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (C.contains(s[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) C.find(e, s[t], i);
            return 1 < n ? C.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(P(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(P(this, e || [], !0))
        },
        is: function(e) {
            return !!P(this, "string" == typeof e && k.test(e) ? C(e) : e || [], !1).length
        }
    });
    var M, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, i) {
        var n, s;
        if (!e) return this;
        if (i = i || M, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this);
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), E.test(n[1]) && C.isPlainObject(t))
                for (n in t) C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        return (s = S.getElementById(n[2])) && (this[0] = s, this.length = 1), this
    }).prototype = C.fn, M = C(S);
    var D = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function z(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                s = this.length,
                r = [],
                a = "string" != typeof e && C(e);
            if (!k.test(e))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? -1 < a.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
                            r.push(i);
                            break
                        }
            return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(C(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return _(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return _(e, "parentNode", i)
        },
        next: function(e) {
            return z(e, "nextSibling")
        },
        prev: function(e) {
            return z(e, "previousSibling")
        },
        nextAll: function(e) {
            return _(e, "nextSibling")
        },
        prevAll: function(e) {
            return _(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return _(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return _(e, "previousSibling", i)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || C.merge([], e.childNodes)
        }
    }, function(n, s) {
        C.fn[n] = function(e, t) {
            var i = C.map(this, s, e);
            return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = C.filter(t, i)), 1 < this.length && (L[n] || C.uniqueSort(i), D.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function $(e) {
        throw e
    }

    function I(e, t, i) {
        var n;
        try {
            e && C.isFunction(n = e.promise) ? n.call(e).done(t).fail(i) : e && C.isFunction(n = e.then) ? n.call(e, t, i) : t.call(void 0, e)
        } catch (e) {
            i.call(void 0, e)
        }
    }
    C.Callbacks = function(n) {
        var e, i;
        n = "string" == typeof n ? (e = n, i = {}, C.each(e.match(R) || [], function(e, t) {
            i[t] = !0
        }), i) : C.extend({}, n);
        var s, t, r, a, o = [],
            l = [],
            c = -1,
            u = function() {
                for (a = n.once, r = s = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < o.length;) !1 === o[c].apply(t[0], t[1]) && n.stopOnFalse && (c = o.length, t = !1);
                n.memory || (t = !1), s = !1, a && (o = t ? [] : "")
            },
            d = {
                add: function() {
                    return o && (t && !s && (c = o.length - 1, l.push(t)), function i(e) {
                        C.each(e, function(e, t) {
                            C.isFunction(t) ? n.unique && d.has(t) || o.push(t) : t && t.length && "string" !== C.type(t) && i(t)
                        })
                    }(arguments), t && !s && u()), this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var i; - 1 < (i = C.inArray(t, o, i));) o.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < C.inArray(e, o) : 0 < o.length
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return a = l = [], o = t = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return a = l = [], t || s || (o = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), s || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, C.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                s = "pending",
                a = {
                    state: function() {
                        return s
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var s = arguments;
                        return C.Deferred(function(n) {
                            C.each(r, function(e, t) {
                                var i = C.isFunction(s[t[4]]) && s[t[4]];
                                o[t[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && C.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), s = null
                        }).promise()
                    },
                    then: function(t, i, n) {
                        var l = 0;

                        function c(s, r, a, o) {
                            return function() {
                                var i = this,
                                    n = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(s < l)) {
                                            if ((e = a.apply(i, n)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, C.isFunction(t) ? o ? t.call(e, c(l, r, N, o), c(l, r, $, o)) : (l++, t.call(e, c(l, r, N, o), c(l, r, $, o), c(l, r, N, r.notifyWith))) : (a !== N && (i = void 0, n = [e]), (o || r.resolveWith)(i, n))
                                        }
                                    },
                                    t = o ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= s + 1 && (a !== $ && (i = void 0, n = [e]), r.rejectWith(i, n))
                                        }
                                    };
                                s ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) {
                            r[0][3].add(c(0, e, C.isFunction(n) ? n : N, e.notifyWith)), r[1][3].add(c(0, e, C.isFunction(t) ? t : N)), r[2][3].add(c(0, e, C.isFunction(i) ? i : $))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, a) : a
                    }
                },
                o = {};
            return C.each(r, function(e, t) {
                var i = t[2],
                    n = t[5];
                a[t[1]] = i.add, n && i.add(function() {
                    s = n
                }, r[3 - e][2].disable, r[0][2].lock), i.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = i.fireWith
            }), a.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var i = arguments.length,
                t = i,
                n = Array(t),
                s = o.call(arguments),
                r = C.Deferred(),
                a = function(t) {
                    return function(e) {
                        n[t] = this, s[t] = 1 < arguments.length ? o.call(arguments) : e, --i || r.resolveWith(n, s)
                    }
                };
            if (i <= 1 && (I(e, r.done(a(t)).resolve, r.reject), "pending" === r.state() || C.isFunction(s[t] && s[t].then))) return r.then();
            for (; t--;) I(s[t], a(t), r.reject);
            return r.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && F.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, C.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    };
    var j = C.Deferred();

    function B() {
        S.removeEventListener("DOMContentLoaded", B), T.removeEventListener("load", B), C.ready()
    }
    C.fn.ready = function(e) {
        return j.then(e).catch(function(e) {
            C.readyException(e)
        }), this
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? C.readyWait++ : C.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || j.resolveWith(S, [C]))
        }
    }), C.ready.then = j.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", B), T.addEventListener("load", B));
    var H = function(e, t, i, n, s, r, a) {
            var o = 0,
                l = e.length,
                c = null == i;
            if ("object" === C.type(i))
                for (o in s = !0, i) H(e, t, o, i[o], !0, r, a);
            else if (void 0 !== n && (s = !0, C.isFunction(n) || (a = !0), c && (t = a ? (t.call(e, n), null) : (c = t, function(e, t, i) {
                    return c.call(C(e), i)
                })), t))
                for (; o < l; o++) t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
            return s ? e : c ? t.call(e) : l ? t(e[0], i) : r
        },
        q = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function X() {
        this.expando = C.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, s = this.cache(e);
            if ("string" == typeof t) s[C.camelCase(t)] = i;
            else
                for (n in t) s[C.camelCase(n)] = t[n];
            return s
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][C.camelCase(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = C.isArray(t) ? t.map(C.camelCase) : (t = C.camelCase(t)) in n ? [t] : t.match(R) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || C.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var Y = new X,
        V = new X,
        W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        U = /[A-Z]/g;

    function G(e, t, i) {
        var n, s;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : W.test(s) ? JSON.parse(s) : s)
                } catch (e) {}
                V.set(e, t, i)
            } else i = void 0;
        return i
    }
    C.extend({
        hasData: function(e) {
            return V.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, i) {
            return V.access(e, t, i)
        },
        removeData: function(e, t) {
            V.remove(e, t)
        },
        _data: function(e, t, i) {
            return Y.access(e, t, i)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), C.fn.extend({
        data: function(i, e) {
            var t, n, s, r = this[0],
                a = r && r.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function() {
                V.set(this, i)
            }) : H(this, function(e) {
                var t;
                if (r && void 0 === e) {
                    if (void 0 !== (t = V.get(r, i))) return t;
                    if (void 0 !== (t = G(r, i))) return t
                } else this.each(function() {
                    V.set(this, i, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (s = V.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && (0 === (n = a[t].name).indexOf("data-") && (n = C.camelCase(n.slice(5)), G(r, n, s[n])));
                Y.set(r, "hasDataAttrs", !0)
            }
            return s
        },
        removeData: function(e) {
            return this.each(function() {
                V.remove(this, e)
            })
        }
    }), C.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = Y.get(e, t), i && (!n || C.isArray(i) ? n = Y.access(e, t, C.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = C.queue(e, t),
                n = i.length,
                s = i.shift(),
                r = C._queueHooks(e, t);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete r.stop, s.call(e, function() {
                C.dequeue(e, t)
            }, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return Y.get(e, i) || Y.access(e, i, {
                empty: C.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", i])
                })
            })
        }
    }), C.fn.extend({
        queue: function(t, i) {
            var e = 2;
            return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var e = C.queue(this, t, i);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                s = C.Deferred(),
                r = this,
                a = this.length,
                o = function() {
                    --n || s.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = Y.get(r[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
            return o(), s.promise(t)
        }
    });
    var K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Q = new RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$", "i"),
        J = ["Top", "Right", "Bottom", "Left"],
        Z = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
        },
        ee = function(e, t, i, n) {
            var s, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            for (r in s = i.apply(e, n || []), t) e.style[r] = a[r];
            return s
        };

    function te(e, t, i, n) {
        var s, r = 1,
            a = 20,
            o = n ? function() {
                return n.cur()
            } : function() {
                return C.css(e, t, "")
            },
            l = o(),
            c = i && i[3] || (C.cssNumber[t] ? "" : "px"),
            u = (C.cssNumber[t] || "px" !== c && +l) && Q.exec(C.css(e, t));
        if (u && u[3] !== c)
            for (c = c || u[3], i = i || [], u = +l || 1; u /= r = r || ".5", C.style(e, t, u + c), r !== (r = o() / l) && 1 !== r && --a;);
        return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = s)), s
    }
    var ie = {};

    function ne(e, t) {
        for (var i, n, s = [], r = 0, a = e.length; r < a; r++)(n = e[r]).style && (i = n.style.display, t ? ("none" === i && (s[r] = Y.get(n, "display") || null, s[r] || (n.style.display = "")), "" === n.style.display && Z(n) && (s[r] = (d = c = l = void 0, c = (o = n).ownerDocument, u = o.nodeName, (d = ie[u]) || (l = c.body.appendChild(c.createElement(u)), d = C.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), ie[u] = d)))) : "none" !== i && (s[r] = "none", Y.set(n, "display", i)));
        var o, l, c, u, d;
        for (r = 0; r < a; r++) null != s[r] && (e[r].style.display = s[r]);
        return e
    }
    C.fn.extend({
        show: function() {
            return ne(this, !0)
        },
        hide: function() {
            return ne(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Z(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var se = /^(?:checkbox|radio)$/i,
        re = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ae = /^$|\/(?:java|ecma)script/i,
        oe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function le(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && C.nodeName(e, t) ? C.merge([e], i) : i
    }

    function ce(e, t) {
        for (var i = 0, n = e.length; i < n; i++) Y.set(e[i], "globalEval", !t || Y.get(t[i], "globalEval"))
    }
    oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td;
    var ue, de, he = /<|&#?\w+;/;

    function pe(e, t, i, n, s) {
        for (var r, a, o, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === C.type(r)) C.merge(h, r.nodeType ? [r] : r);
                else if (he.test(r)) {
            for (a = a || d.appendChild(t.createElement("div")), o = (re.exec(r) || ["", ""])[1].toLowerCase(), l = oe[o] || oe._default, a.innerHTML = l[1] + C.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
            C.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(r));
        for (d.textContent = "", p = 0; r = h[p++];)
            if (n && -1 < C.inArray(r, n)) s && s.push(r);
            else if (c = C.contains(r.ownerDocument, r), a = le(d.appendChild(r), "script"), c && ce(a), i)
            for (u = 0; r = a[u++];) ae.test(r.type || "") && i.push(r);
        return d
    }
    ue = S.createDocumentFragment().appendChild(S.createElement("div")), (de = S.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), ue.appendChild(de), v.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue;
    var fe = S.documentElement,
        me = /^key/,
        ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ge = /^([^.]*)(?:\.(.+)|)/;

    function ye() {
        return !0
    }

    function be() {
        return !1
    }

    function we() {
        try {
            return S.activeElement
        } catch (e) {}
    }

    function _e(e, t, i, n, s, r) {
        var a, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), t) _e(e, o, i, n, t[o], r);
            return e
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = be;
        else if (!s) return e;
        return 1 === r && (a = s, (s = function(e) {
            return C().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
            C.event.add(this, t, s, n, i)
        })
    }
    C.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var r, a, o, l, c, u, d, h, p, f, m, v = Y.get(t);
            if (v)
                for (i.handler && (i = (r = i).handler, s = r.selector), s && C.find.matchesSelector(fe, s), i.guid || (i.guid = C.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(R) || [""]).length; c--;) p = m = (o = ge.exec(e[c]) || [])[1], f = (o[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && C.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, f, a) || t.addEventListener && t.addEventListener(p, a)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), C.event.global[p] = !0)
        },
        remove: function(e, t, i, n, s) {
            var r, a, o, l, c, u, d, h, p, f, m, v = Y.hasData(e) && Y.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(R) || [""]).length; c--;)
                    if (p = m = (o = ge.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                        for (d = C.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) u = h[r], !s && m !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, v.handle) || C.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l) C.event.remove(e, p + t[c], i, n, !0);
                C.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, s, r, a, o = C.event.fix(e),
                l = new Array(arguments.length),
                c = (Y.get(this, "events") || {})[o.type] || [],
                u = C.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                for (a = C.event.handlers.call(this, o, c), t = 0;
                    (s = a[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = s.elem, i = 0;
                        (r = s.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r, o.data = r.data, void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var i, n, s, r, a, o = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], a = {}, i = 0; i < l; i++) void 0 === a[s = (n = t[i]).selector + " "] && (a[s] = n.needsContext ? -1 < C(s, this).index(c) : C.find(s, this, null, [c]).length), a[s] && r.push(n);
                        r.length && o.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && o.push({
                elem: c,
                handlers: t.slice(l)
            }), o
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: C.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== we() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === we() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && C.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return C.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, C.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, C.Event = function(e, t) {
        return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), void(this[C.expando] = !0)) : new C.Event(e, t)
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, s) {
        C.event.special[e] = {
            delegateType: s,
            bindType: s,
            handle: function(e) {
                var t, i = e.relatedTarget,
                    n = e.handleObj;
                return i && (i === this || C.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = s), t
            }
        }
    }), C.fn.extend({
        on: function(e, t, i, n) {
            return _e(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return _e(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, s;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = be), this.each(function() {
                C.event.remove(this, e, i, t)
            });
            for (s in e) this.off(s, t, e[s]);
            return this
        }
    });
    var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Te = /<script|<style|<link/i,
        Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ce = /^true\/(.*)/,
        ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ee(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }

    function Ae(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
        var t = Ce.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var i, n, s, r, a, o, l, c;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (r = Y.access(e), a = Y.set(t, r), c = r.events))
                for (s in delete a.handle, a.events = {}, c)
                    for (i = 0, n = c[s].length; i < n; i++) C.event.add(t, s, c[s][i]);
            V.hasData(e) && (o = V.access(e), l = C.extend({}, o), V.set(t, l))
        }
    }

    function Oe(i, n, s, r) {
        n = m.apply([], n);
        var e, t, a, o, l, c, u = 0,
            d = i.length,
            h = d - 1,
            p = n[0],
            f = C.isFunction(p);
        if (f || 1 < d && "string" == typeof p && !v.checkClone && Se.test(p)) return i.each(function(e) {
            var t = i.eq(e);
            f && (n[0] = p.call(this, e, t.html())), Oe(t, n, s, r)
        });
        if (d && (t = (e = pe(n, i[0].ownerDocument, !1, i, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (o = (a = C.map(le(e, "script"), Ae)).length; u < d; u++) l = e, u !== h && (l = C.clone(l, !0, !0), o && C.merge(a, le(l, "script"))), s.call(i[u], l, u);
            if (o)
                for (c = a[a.length - 1].ownerDocument, C.map(a, Pe), u = 0; u < o; u++) l = a[u], ae.test(l.type || "") && !Y.access(l, "globalEval") && C.contains(c, l) && (l.src ? C._evalUrl && C._evalUrl(l.src) : g(l.textContent.replace(ke, ""), c))
        }
        return i
    }

    function De(e, t, i) {
        for (var n, s = t ? C.filter(t, e) : e, r = 0; null != (n = s[r]); r++) i || 1 !== n.nodeType || C.cleanData(le(n)), n.parentNode && (i && C.contains(n.ownerDocument, n) && ce(le(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(xe, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, s, r, a, o, l, c, u = e.cloneNode(!0),
                d = C.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (a = le(u), n = 0, s = (r = le(e)).length; n < s; n++) o = r[n], l = a[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && se.test(o.type) ? l.checked = o.checked : "input" !== c && "textarea" !== c || (l.defaultValue = o.defaultValue);
            if (t)
                if (i)
                    for (r = r || le(e), a = a || le(u), n = 0, s = r.length; n < s; n++) Me(r[n], a[n]);
                else Me(e, u);
            return 0 < (a = le(u, "script")).length && ce(a, !d && le(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, i, n, s = C.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (q(i)) {
                    if (t = i[Y.expando]) {
                        if (t.events)
                            for (n in t.events) s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
                        i[Y.expando] = void 0
                    }
                    i[V.expando] && (i[V.expando] = void 0)
                }
        }
    }), C.fn.extend({
        detach: function(e) {
            return De(this, e, !0)
        },
        remove: function(e) {
            return De(this, e)
        },
        text: function(e) {
            return H(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Oe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Oe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ee(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Oe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(le(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return H(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !oe[(re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (C.cleanData(le(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return Oe(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, i) < 0 && (C.cleanData(le(this)), t && t.replaceChild(e, this))
            }, i)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        C.fn[e] = function(e) {
            for (var t, i = [], n = C(e), s = n.length - 1, r = 0; r <= s; r++) t = r === s ? this : this.clone(!0), C(n[r])[a](t), l.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Le = /^margin/,
        ze = new RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        };

    function Ne(e, t, i) {
        var n, s, r, a, o = e.style;
        return (i = i || Re(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), !v.pixelMarginRight() && ze.test(a) && Le.test(t) && (n = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = s, o.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", fe.appendChild(r);
                var e = T.getComputedStyle(a);
                t = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", n = "4px" === e.marginRight, fe.removeChild(r), a = null
            }
        }
        var t, i, n, s, r = S.createElement("div"),
            a = S.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), C.extend(v, {
            pixelPosition: function() {
                return e(), t
            },
            boxSizingReliable: function() {
                return e(), i
            },
            pixelMarginRight: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            }
        }))
    }();
    var Ie = /^(none|table(?!-c[ea]).+)/,
        Fe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        je = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Be = ["Webkit", "Moz", "ms"],
        He = S.createElement("div").style;

    function qe(e) {
        if (e in He) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = Be.length; i--;)
            if ((e = Be[i] + t) in He) return e
    }

    function Xe(e, t, i) {
        var n = Q.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Ye(e, t, i, n, s) {
        var r, a = 0;
        for (r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === i && (a += C.css(e, i + J[r], !0, s)), n ? ("content" === i && (a -= C.css(e, "padding" + J[r], !0, s)), "margin" !== i && (a -= C.css(e, "border" + J[r] + "Width", !0, s))) : (a += C.css(e, "padding" + J[r], !0, s), "padding" !== i && (a += C.css(e, "border" + J[r] + "Width", !0, s)));
        return a
    }

    function Ve(e, t, i) {
        var n, s = !0,
            r = Re(e),
            a = "border-box" === C.css(e, "boxSizing", !1, r);
        if (e.getClientRects().length && (n = e.getBoundingClientRect()[t]), n <= 0 || null == n) {
            if (((n = Ne(e, t, r)) < 0 || null == n) && (n = e.style[t]), ze.test(n)) return n;
            s = a && (v.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + Ye(e, t, i || (a ? "border" : "content"), s, r) + "px"
    }

    function We(e, t, i, n, s) {
        return new We.prototype.init(e, t, i, n, s)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = Ne(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, r, a, o = C.camelCase(t),
                    l = e.style;
                return t = C.cssProps[o] || (C.cssProps[o] = qe(o) || o), a = C.cssHooks[t] || C.cssHooks[o], void 0 === i ? a && "get" in a && void 0 !== (s = a.get(e, !1, n)) ? s : l[t] : ("string" === (r = typeof i) && (s = Q.exec(i)) && s[1] && (i = te(e, t, s), r = "number"), void(null != i && i == i && ("number" === r && (i += s && s[3] || (C.cssNumber[o] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var s, r, a, o = C.camelCase(t);
            return t = C.cssProps[o] || (C.cssProps[o] = qe(o) || o), (a = C.cssHooks[t] || C.cssHooks[o]) && "get" in a && (s = a.get(e, !0, i)), void 0 === s && (s = Ne(e, t, n)), "normal" === s && t in je && (s = je[t]), "" === i || i ? (r = parseFloat(s), !0 === i || isFinite(r) ? r || 0 : s) : s
        }
    }), C.each(["height", "width"], function(e, a) {
        C.cssHooks[a] = {
            get: function(e, t, i) {
                if (t) return !Ie.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ve(e, a, i) : ee(e, Fe, function() {
                    return Ve(e, a, i)
                })
            },
            set: function(e, t, i) {
                var n, s = i && Re(e),
                    r = i && Ye(e, a, i, "border-box" === C.css(e, "boxSizing", !1, s), s);
                return r && (n = Q.exec(t)) && "px" !== (n[3] || "px") && (e.style[a] = t, t = C.css(e, a)), Xe(0, t, r)
            }
        }
    }), C.cssHooks.marginLeft = $e(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ne(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(s, r) {
        C.cssHooks[s + r] = {
            expand: function(e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[s + J[t] + r] = n[t] || n[t - 2] || n[0];
                return i
            }
        }, Le.test(s) || (C.cssHooks[s + r].set = Xe)
    }), C.fn.extend({
        css: function(e, t) {
            return H(this, function(e, t, i) {
                var n, s, r = {},
                    a = 0;
                if (C.isArray(t)) {
                    for (n = Re(e), s = t.length; a < s; a++) r[t[a]] = C.css(e, t[a], !1, n);
                    return r
                }
                return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = We).prototype = {
        constructor: We,
        init: function(e, t, i, n, s, r) {
            this.elem = e, this.prop = i, this.easing = s || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (C.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = We.propHooks[this.prop];
            return e && e.get ? e.get(this) : We.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = We.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : We.propHooks._default.set(this), this
        }
    }).init.prototype = We.prototype, (We.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = We.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, C.fx = We.prototype.init, C.fx.step = {};
    var Ue, Ge, Ke, Qe, Je = /^(?:toggle|show|hide)$/,
        Ze = /queueHooks$/;

    function et() {
        Ge && (T.requestAnimationFrame(et), C.fx.tick())
    }

    function tt() {
        return T.setTimeout(function() {
            Ue = void 0
        }), Ue = C.now()
    }

    function it(e, t) {
        var i, n = 0,
            s = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = J[n])] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e), s
    }

    function nt(e, t, i) {
        for (var n, s = (st.tweeners[t] || []).concat(st.tweeners["*"]), r = 0, a = s.length; r < a; r++)
            if (n = s[r].call(i, t, e)) return n
    }

    function st(r, e, t) {
        var i, a, n = 0,
            s = st.prefilters.length,
            o = C.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var e = Ue || tt(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, s = c.tweens.length; n < s; n++) c.tweens[n].run(i);
                return o.notifyWith(r, [c, i, t]), i < 1 && s ? t : (o.resolveWith(r, [c]), !1)
            },
            c = o.promise({
                elem: r,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ue || tt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var i = C.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var t = 0,
                        i = e ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < i; t++) c.tweens[t].run(1);
                    return e ? (o.notifyWith(r, [c, 1, 0]), o.resolveWith(r, [c, e])) : o.rejectWith(r, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var i, n, s, r, a;
                for (i in e)
                    if (s = t[n = C.camelCase(i)], r = e[i], C.isArray(r) && (s = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (a = C.cssHooks[n]) && "expand" in a)
                        for (i in r = a.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = s);
                    else t[n] = s
            }(u, c.opts.specialEasing); n < s; n++)
            if (i = st.prefilters[n].call(c, r, u, c.opts)) return C.isFunction(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = C.proxy(i.stop, i)), i;
        return C.map(u, nt, c), C.isFunction(c.opts.start) && c.opts.start.call(r, c), C.fx.timer(C.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    C.Animation = C.extend(st, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return te(i.elem, e, Q.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            for (var i, n = 0, s = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(R)).length; n < s; n++) i = e[n], st.tweeners[i] = st.tweeners[i] || [], st.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, s, r, a, o, l, c, u, d = "width" in t || "height" in t,
                h = this,
                p = {},
                f = e.style,
                m = e.nodeType && Z(e),
                v = Y.get(e, "fxshow");
            for (n in i.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || o()
                }), a.unqueued++, h.always(function() {
                    h.always(function() {
                        a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (s = t[n], Je.test(s)) {
                    if (delete t[n], r = r || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !v || void 0 === v[n]) continue;
                        m = !0
                    }
                    p[n] = v && v[n] || C.style(e, n)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                for (n in d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = Y.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (ne([e], !0), c = e.style.display || c, u = C.css(e, "display"), ne([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (h.done(function() {
                        f.display = c
                    }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    })), l = !1, p) l || (v ? "hidden" in v && (m = v.hidden) : v = Y.access(e, "fxshow", {
                    display: c
                }), r && (v.hidden = !m), m && ne([e], !0), h.done(function() {
                    for (n in m || ne([e]), Y.remove(e, "fxshow"), p) C.style(e, n, p[n])
                })), l = nt(m ? v[n] : 0, n, h), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e)
        }
    }), C.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? C.extend({}, e) : {
            complete: i || !i && t || C.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !C.isFunction(t) && t
        };
        return C.fx.off || S.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            C.isFunction(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
        }, n
    }, C.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(Z).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(t, e, i, n) {
            var s = C.isEmptyObject(t),
                r = C.speed(e, i, n),
                a = function() {
                    var e = st(this, C.extend({}, t), r);
                    (s || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(s, e, r) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof s && (r = e, e = s, s = void 0), e && !1 !== s && this.queue(s || "fx", []), this.each(function() {
                var e = !0,
                    t = null != s && s + "queueHooks",
                    i = C.timers,
                    n = Y.get(this);
                if (t) n[t] && n[t].stop && a(n[t]);
                else
                    for (t in n) n[t] && n[t].stop && Ze.test(t) && a(n[t]);
                for (t = i.length; t--;) i[t].elem !== this || null != s && i[t].queue !== s || (i[t].anim.stop(r), e = !1, i.splice(t, 1));
                !e && r || C.dequeue(this, s)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    i = t[a + "queue"],
                    n = t[a + "queueHooks"],
                    s = C.timers,
                    r = i ? i.length : 0;
                for (t.finish = !0, C.queue(this, a, []), n && n.stop && n.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === a && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, n) {
        var s = C.fn[n];
        C.fn[n] = function(e, t, i) {
            return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(it(n, !0), e, t, i)
        }
    }), C.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, n) {
        C.fn[e] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    }), C.timers = [], C.fx.tick = function() {
        var e, t = 0,
            i = C.timers;
        for (Ue = C.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || C.fx.stop(), Ue = void 0
    }, C.fx.timer = function(e) {
        C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
    }, C.fx.interval = 13, C.fx.start = function() {
        Ge || (Ge = T.requestAnimationFrame ? T.requestAnimationFrame(et) : T.setInterval(C.fx.tick, C.fx.interval))
    }, C.fx.stop = function() {
        T.cancelAnimationFrame ? T.cancelAnimationFrame(Ge) : T.clearInterval(Ge), Ge = null
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(n, e) {
        return n = C.fx && C.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
            var i = T.setTimeout(e, n);
            t.stop = function() {
                T.clearTimeout(i)
            }
        })
    }, Ke = S.createElement("input"), Qe = S.createElement("select").appendChild(S.createElement("option")), Ke.type = "checkbox", v.checkOn = "" !== Ke.value, v.optSelected = Qe.selected, (Ke = S.createElement("input")).value = "t", Ke.type = "radio", v.radioValue = "t" === Ke.value;
    var rt, at = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return H(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function(e, t, i) {
            var n, s, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === r && C.isXMLDoc(e) || (s = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? rt : void 0)), void 0 !== i ? null === i ? void C.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && C.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                s = t && t.match(R);
            if (s && 1 === e.nodeType)
                for (; i = s[n++];) e.removeAttribute(i)
        }
    }), rt = {
        set: function(e, t, i) {
            return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = at[t] || C.find.attr;
        at[t] = function(e, t, i) {
            var n, s, r = t.toLowerCase();
            return i || (s = at[r], at[r] = n, n = null != a(e, t, i) ? r : null, at[r] = s), n
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i,
        lt = /^(?:a|area)$/i;

    function ct(e) {
        return (e.match(R) || []).join(" ")
    }

    function ut(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    C.fn.extend({
        prop: function(e, t) {
            return H(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function(e, t, i) {
            var n, s, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, s = C.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ot.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }), C.fn.extend({
        addClass: function(t) {
            var e, i, n, s, r, a, o, l = 0;
            if (C.isFunction(t)) return this.each(function(e) {
                C(this).addClass(t.call(this, e, ut(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(R) || []; i = this[l++];)
                    if (s = ut(i), n = 1 === i.nodeType && " " + ct(s) + " ") {
                        for (a = 0; r = e[a++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        s !== (o = ct(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, r, a, o, l = 0;
            if (C.isFunction(t)) return this.each(function(e) {
                C(this).removeClass(t.call(this, e, ut(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(R) || []; i = this[l++];)
                    if (s = ut(i), n = 1 === i.nodeType && " " + ct(s) + " ") {
                        for (a = 0; r = e[a++];)
                            for (; - 1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
                        s !== (o = ct(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(s, t) {
            var r = typeof s;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(s) : this.removeClass(s) : C.isFunction(s) ? this.each(function(e) {
                C(this).toggleClass(s.call(this, e, ut(this), t), t)
            }) : this.each(function() {
                var e, t, i, n;
                if ("string" === r)
                    for (t = 0, i = C(this), n = s.match(R) || []; e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else void 0 !== s && "boolean" !== r || ((e = ut(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === s ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + ct(ut(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var dt = /\r/g;
    C.fn.extend({
        val: function(i) {
            var n, e, s, t = this[0];
            return arguments.length ? (s = C.isFunction(i), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = s ? i.call(this, e, C(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(dt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : ct(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, s = e.options,
                        r = e.selectedIndex,
                        a = "select-one" === e.type,
                        o = a ? null : [],
                        l = a ? r + 1 : s.length;
                    for (n = r < 0 ? l : a ? r : 0; n < l; n++)
                        if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !C.nodeName(i.parentNode, "optgroup"))) {
                            if (t = C(i).val(), a) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var i, n, s = e.options, r = C.makeArray(t), a = s.length; a--;)((n = s[a]).selected = -1 < C.inArray(C.valHooks.option.get(n), r)) && (i = !0);
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (C.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        }, v.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ht = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, i, n) {
            var s, r, a, o, l, c, u, d = [i || S],
                h = f.call(e, "type") ? e.type : e,
                p = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = a = i = i || S, 3 !== i.nodeType && 8 !== i.nodeType && !ht.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[h] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                if (!n && !u.noBubble && !C.isWindow(i)) {
                    for (o = u.delegateType || h, ht.test(o + h) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
                    a === (i.ownerDocument || S) && d.push(a.defaultView || a.parentWindow || T)
                }
                for (s = 0;
                    (r = d[s++]) && !e.isPropagationStopped();) e.type = 1 < s ? o : u.bindType || h, (c = (Y.get(r, "events") || {})[e.type] && Y.get(r, "handle")) && c.apply(r, t), (c = l && r[l]) && c.apply && q(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
                return e.type = h, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !q(i) || l && C.isFunction(i[h]) && !C.isWindow(i) && ((a = i[l]) && (i[l] = null), i[C.event.triggered = h](), C.event.triggered = void 0, a && (i[l] = a)), e.result
            }
        },
        simulate: function(e, t, i) {
            var n = C.extend(new C.Event, i, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(n, null, t)
        }
    }), C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return C.event.trigger(e, t, i, !0)
        }
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
        C.fn[i] = function(e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.focusin = "onfocusin" in T, v.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        var s = function(e) {
            C.event.simulate(n, e.target, C.event.fix(e))
        };
        C.event.special[n] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, n);
                t || e.addEventListener(i, s, !0), Y.access(e, n, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, n) - 1;
                t ? Y.access(e, n, t) : (e.removeEventListener(i, s, !0), Y.remove(e, n))
            }
        }
    });
    var pt = T.location,
        ft = C.now(),
        mt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var vt = /\[\]$/,
        gt = /\r?\n/g,
        yt = /^(?:submit|button|image|reset|file)$/i,
        bt = /^(?:input|select|textarea|keygen)/i;

    function wt(i, e, n, s) {
        var t;
        if (C.isArray(e)) C.each(e, function(e, t) {
            n || vt.test(i) ? s(i, t) : wt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, s)
        });
        else if (n || "object" !== C.type(e)) s(i, e);
        else
            for (t in e) wt(i + "[" + t + "]", e[t], n, s)
    }
    C.param = function(e, t) {
        var i, n = [],
            s = function(e, t) {
                var i = C.isFunction(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (i in e) wt(i, e[i], t, s);
        return n.join("&")
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && bt.test(this.nodeName) && !yt.test(e) && (this.checked || !se.test(e))
            }).map(function(e, t) {
                var i = C(this).val();
                return null == i ? null : C.isArray(i) ? C.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(gt, "\r\n")
                }
            }).get()
        }
    });
    var _t = /%20/g,
        xt = /#.*$/,
        Tt = /([?&])_=[^&]*/,
        St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ct = /^(?:GET|HEAD)$/,
        kt = /^\/\//,
        Et = {},
        At = {},
        Pt = "*/".concat("*"),
        Mt = S.createElement("a");

    function Ot(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var i, n = 0,
                s = e.toLowerCase().match(R) || [];
            if (C.isFunction(t))
                for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(t)) : (r[i] = r[i] || []).push(t)
        }
    }

    function Dt(t, s, r, a) {
        var o = {},
            l = t === At;

        function c(e) {
            var n;
            return o[e] = !0, C.each(t[e] || [], function(e, t) {
                var i = t(s, r, a);
                return "string" != typeof i || l || o[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i), c(i), !1)
            }), n
        }
        return c(s.dataTypes[0]) || !o["*"] && c("*")
    }

    function Lt(e, t) {
        var i, n, s = C.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
        return n && C.extend(!0, e, n), e
    }
    Mt.href = pt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Lt(Lt(e, C.ajaxSettings), t) : Lt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Ot(Et),
        ajaxTransport: Ot(At),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, h, i, p, n, f, m, s, r, v = C.ajaxSetup({}, t),
                g = v.context || v,
                y = v.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                b = C.Deferred(),
                w = C.Callbacks("once memory"),
                _ = v.statusCode || {},
                a = {},
                o = {},
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (f) {
                            if (!i)
                                for (i = {}; t = St.exec(h);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return f ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == f && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (f) x.always(e[x.status]);
                            else
                                for (t in e) _[t] = [_[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (b.promise(x), v.url = ((e || v.url || pt.href) + "").replace(kt, pt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
                n = S.createElement("a");
                try {
                    n.href = v.url, n.href = n.href, v.crossDomain = Mt.protocol + "//" + Mt.host != n.protocol + "//" + n.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = C.param(v.data, v.traditional)), Dt(Et, v, t, x), f) return x;
            for (s in (m = C.event && v.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ct.test(v.type), d = v.url.replace(xt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(_t, "+")) : (r = v.url.slice(d.length), v.data && (d += (mt.test(d) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (d = d.replace(Tt, "$1"), r = (mt.test(d) ? "&" : "?") + "_=" + ft++ + r), v.url = d + r), v.ifModified && (C.lastModified[d] && x.setRequestHeader("If-Modified-Since", C.lastModified[d]), C.etag[d] && x.setRequestHeader("If-None-Match", C.etag[d])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && x.setRequestHeader("Content-Type", v.contentType), x.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : v.accepts["*"]), v.headers) x.setRequestHeader(s, v.headers[s]);
            if (v.beforeSend && (!1 === v.beforeSend.call(g, x, v) || f)) return x.abort();
            if (l = "abort", w.add(v.complete), x.done(v.success), x.fail(v.error), u = Dt(At, v, t, x)) {
                if (x.readyState = 1, m && y.trigger("ajaxSend", [x, v]), f) return x;
                v.async && 0 < v.timeout && (p = T.setTimeout(function() {
                    x.abort("timeout")
                }, v.timeout));
                try {
                    f = !1, u.send(a, c)
                } catch (e) {
                    if (f) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, i, n) {
                var s, r, a, o, l, c = t;
                f || (f = !0, p && T.clearTimeout(p), u = void 0, h = n || "", x.readyState = 0 < e ? 4 : 0, s = 200 <= e && e < 300 || 304 === e, i && (o = function(e, t, i) {
                    for (var n, s, r, a, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in o)
                            if (o[s] && o[s].test(n)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in i) r = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            a || (a = s)
                        }
                        r = r || a
                    }
                    if (r) return r !== l[0] && l.unshift(r), i[r]
                }(v, x, i)), o = function(e, t, i, n) {
                    var s, r, a, o, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(a = c[l + " " + r] || c["* " + r]))
                            for (s in c)
                                if ((o = s.split(" "))[1] === r && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                                    !0 === a ? a = c[s] : !0 !== c[s] && (r = o[0], u.unshift(o[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, o, x, s), s ? (v.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (C.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (C.etag[d] = l)), 204 === e || "HEAD" === v.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = o.state, r = o.data, s = !(a = o.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", s ? b.resolveWith(g, [r, c, x]) : b.rejectWith(g, [x, c, a]), x.statusCode(_), _ = void 0, m && y.trigger(s ? "ajaxSuccess" : "ajaxError", [x, v, s ? r : a]), w.fireWith(g, [x, c]), m && (y.trigger("ajaxComplete", [x, v]), --C.active || C.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, i) {
            return C.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function(e, s) {
        C[s] = function(e, t, i, n) {
            return C.isFunction(t) && (n = n || i, i = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: s,
                dataType: n,
                data: t,
                success: i
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (C.isFunction(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(i) {
            return C.isFunction(i) ? this.each(function(e) {
                C(this).wrapInner(i.call(this, e))
            }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        },
        wrap: function(t) {
            var i = C.isFunction(t);
            return this.each(function(e) {
                C(this).wrapAll(i ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }), C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }, C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, C.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var zt = {
            0: 200,
            1223: 204
        },
        Rt = C.ajaxSettings.xhr();
    v.cors = !!Rt && "withCredentials" in Rt, v.ajax = Rt = !!Rt, C.ajaxTransport(function(s) {
        var r, a;
        if (v.cors || Rt && !s.crossDomain) return {
            send: function(e, t) {
                var i, n = s.xhr();
                if (n.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
                    for (i in s.xhrFields) n[i] = s.xhrFields[i];
                for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                r = function(e) {
                    return function() {
                        r && (r = a = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(zt[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = r(), a = n.onerror = r("error"), void 0 !== n.onabort ? n.onabort = a : n.onreadystatechange = function() {
                    4 === n.readyState && T.setTimeout(function() {
                        r && a()
                    })
                }, r = r("abort");
                try {
                    n.send(s.hasContent && s.data || null)
                } catch (e) {
                    if (r) throw e
                }
            },
            abort: function() {
                r && r()
            }
        }
    }), C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script", function(i) {
        var n, s;
        if (i.crossDomain) return {
            send: function(e, t) {
                n = C("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", s = function(e) {
                    n.remove(), s = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(n[0])
            },
            abort: function() {
                s && s()
            }
        }
    });
    var Nt, $t = [],
        It = /(=)\?(?=&|$)|\?\?/;

    function Ft(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || C.expando + "_" + ft++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function(e, t, i) {
        var n, s, r, a = !1 !== e.jsonp && (It.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(It, "$1" + n) : !1 !== e.jsonp && (e.url += (mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
            return r || C.error(n + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = T[n], T[n] = function() {
            r = arguments
        }, i.always(function() {
            void 0 === s ? C(T).removeProp(n) : T[n] = s, e[n] && (e.jsonpCallback = t.jsonpCallback, $t.push(n)), r && C.isFunction(s) && s(r[0]), r = s = void 0
        }), "script"
    }), v.createHTMLDocument = ((Nt = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Nt.childNodes.length), C.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (v.createHTMLDocument ? ((n = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(n)) : t = S), r = !i && [], (s = E.exec(e)) ? [t.createElement(s[1])] : (s = pe([e], t, r), r && r.length && C(r).remove(), C.merge([], s.childNodes)));
        var n, s, r
    }, C.fn.load = function(e, t, i) {
        var n, s, r, a = this,
            o = e.indexOf(" ");
        return -1 < o && (n = ct(e.slice(o)), e = e.slice(0, o)), C.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < a.length && C.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            a.each(function() {
                i.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function(e, t, i) {
            var n, s, r, a, o, l, c = C.css(e, "position"),
                u = C(e),
                d = {};
            "static" === c && (e.style.position = "relative"), o = u.offset(), r = C.css(e, "top"), l = C.css(e, "left"), s = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (a = (n = u.position()).top, n.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), C.isFunction(t) && (t = t.call(e, i, C.extend({}, o))), null != t.top && (d.top = t.top - o.top + a), null != t.left && (d.left = t.left - o.left + s), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, C.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                C.offset.setOffset(this, t, e)
            });
            var e, i, n, s, r = this[0];
            return r ? r.getClientRects().length ? (n = r.getBoundingClientRect()).width || n.height ? (i = Ft(s = r.ownerDocument), e = s.documentElement, {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }) : n : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === C.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0], "html") || (n = e.offset()), n = {
                    top: n.top + C.css(e[0], "borderTopWidth", !0),
                    left: n.left + C.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - n.top - C.css(i, "marginTop", !0),
                    left: t.left - n.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || fe
            })
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, s) {
        var r = "pageYOffset" === s;
        C.fn[t] = function(e) {
            return H(this, function(e, t, i) {
                var n = Ft(e);
                return void 0 === i ? n ? n[s] : e[t] : void(n ? n.scrollTo(r ? n.pageXOffset : i, r ? i : n.pageYOffset) : e[t] = i)
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function(e, i) {
        C.cssHooks[i] = $e(v.pixelPosition, function(e, t) {
            if (t) return t = Ne(e, i), ze.test(t) ? C(e).position()[i] + "px" : t
        })
    }), C.each({
        Height: "height",
        Width: "width"
    }, function(a, o) {
        C.each({
            padding: "inner" + a,
            content: o,
            "": "outer" + a
        }, function(n, r) {
            C.fn[r] = function(e, t) {
                var i = arguments.length && (n || "boolean" != typeof e),
                    s = n || (!0 === e || !0 === t ? "margin" : "border");
                return H(this, function(e, t, i) {
                    var n;
                    return C.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + a], n["scroll" + a], e.body["offset" + a], n["offset" + a], n["client" + a])) : void 0 === i ? C.css(e, t, s) : C.style(e, t, i, s)
                }, o, i ? e : void 0, i)
            }
        })
    }), C.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), C.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var jt = T.jQuery,
        Bt = T.$;
    return C.noConflict = function(e) {
        return T.$ === C && (T.$ = Bt), e && T.jQuery === C && (T.jQuery = jt), C
    }, e || (T.jQuery = T.$ = C), C
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e, l, t, T, _, x, S, g, i, y, C, b, w, p, f, v, n;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, u, v) {
            var g = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                y = function(e, t, i) {
                    var n, s, r = e.cycle;
                    for (n in r) s = r[n], e[n] = "function" == typeof s ? s(i, t[i]) : s[i % s.length];
                    delete e.cycle
                },
                b = function(e, t, i) {
                    v.call(this, e, t, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = b.prototype.render
                },
                w = 1e-10,
                _ = v._internals,
                x = _.isSelector,
                T = _.isArray,
                e = b.prototype = v.to({}, .1, {}),
                S = [];
            b.version = "1.19.0", e.constructor = b, e.kill()._gc = !1, b.killTweensOf = b.killDelayedCallsTo = v.killTweensOf, b.getTweensOf = v.getTweensOf, b.lagSmoothing = v.lagSmoothing, b.ticker = v.ticker, b.render = v.render, e.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), v.prototype.invalidate.call(this)
            }, e.updateTo = function(e, t) {
                var i, n = this.ratio,
                    s = this.vars.immediateRender || e.immediateRender;
                for (i in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[i] = e[i];
                if (this._initted || s)
                    if (t) this._initted = !1, s && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && v._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var r = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || s)
                    for (var a, o = 1 / (1 - n), l = this._firstPT; l;) a = l.s + l.c, l.c *= o, l.s = a - l.c, l = l._next;
                return this
            }, e.render = function(e, t, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, s, r, a, o, l, c, u, d = this._dirty ? this.totalDuration() : this._totalDuration,
                    h = this._time,
                    p = this._totalTime,
                    f = this._cycle,
                    m = this._duration,
                    v = this._rawPrevTime;
                if (d - 1e-7 <= e ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = m, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === m && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (v < 0 || e <= 0 && -1e-7 <= e || v === w && "isPause" !== this.data) && v !== e && (i = !0, w < v && (s = "onReverseComplete")), this._rawPrevTime = u = !t || e || v === e ? e : w)) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === m && 0 < v) && (s = "onReverseComplete", n = this._reversed), e < 0 && (this._active = !1, 0 === m && (this._initted || !this.vars.lazy || i) && (0 <= v && (i = !0), this._rawPrevTime = u = !t || e || v === e ? e : w)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (a = m + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && p <= e && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? this._time = m : this._time < 0 && (this._time = 0)), this._easeType ? (o = this._time / m, (1 === (l = this._easeType) || 3 === l && .5 <= o) && (o = 1 - o), 3 === l && (o *= 2), 1 === (c = this._easePower) ? o *= o : 2 === c ? o *= o * o : 3 === c ? o *= o * o * o : 4 === c && (o *= o * o * o * o), 1 === l ? this.ratio = 1 - o : 2 === l ? this.ratio = o : this._time / m < .5 ? this.ratio = o / 2 : this.ratio = 1 - o / 2) : this.ratio = this._ease.getRatio(this._time / m)), h !== this._time || i || f !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = h, this._totalTime = p, this._rawPrevTime = v, this._cycle = f, _.lazyTweens.push(this), void(this._lazy = [e, t]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / m) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && 0 <= e && (this._active = !0), 0 === p && (2 === this._initted && 0 < e && this._init(), this._startAt && (0 <= e ? this._startAt.render(e, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === m) && (t || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== p || s) && this._callback("onUpdate")), this._cycle !== f && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || i) && (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === m && this._rawPrevTime === w && u !== w && (this._rawPrevTime = 0))
                } else p !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, b.to = function(e, t, i) {
                return new b(e, t, i)
            }, b.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new b(e, t, i)
            }, b.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new b(e, t, n)
            }, b.staggerTo = b.allTo = function(e, t, i, n, s, r, a) {
                n = n || 0;
                var o, l, c, u, d = 0,
                    h = [],
                    p = function() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), s.apply(a || i.callbackScope || this, r || S)
                    },
                    f = i.cycle,
                    m = i.startAt && i.startAt.cycle;
                for (T(e) || ("string" == typeof e && (e = v.selector(e) || e), x(e) && (e = g(e))), e = e || [], n < 0 && ((e = g(e)).reverse(), n *= -1), o = e.length - 1, c = 0; c <= o; c++) {
                    for (u in l = {}, i) l[u] = i[u];
                    if (f && (y(l, e, c), null != l.duration && (t = l.duration, delete l.duration)), m) {
                        for (u in m = l.startAt = {}, i.startAt) m[u] = i.startAt[u];
                        y(l.startAt, e, c)
                    }
                    l.delay = d + (l.delay || 0), c === o && s && (l.onComplete = p), h[c] = new b(e[c], t, l), d += n
                }
                return h
            }, b.staggerFrom = b.allFrom = function(e, t, i, n, s, r, a) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, b.staggerTo(e, t, i, n, s, r, a)
            }, b.staggerFromTo = b.allFromTo = function(e, t, i, n, s, r, a, o) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, b.staggerTo(e, t, n, s, r, a, o)
            }, b.delayedCall = function(e, t, i, n, s) {
                return new b(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, b.set = function(e, t) {
                return new b(e, 0, t)
            }, b.isTweening = function(e) {
                return 0 < v.getTweensOf(e, !0).length
            };
            var r = function(e, t) {
                    for (var i = [], n = 0, s = e._first; s;) s instanceof v ? i[n++] = s : (t && (i[n++] = s), n = (i = i.concat(r(s, t))).length), s = s._next;
                    return i
                },
                d = b.getAllTweens = function(e) {
                    return r(n._rootTimeline, e).concat(r(n._rootFramesTimeline, e))
                };
            b.killAll = function(e, t, i, n) {
                null == t && (t = !0), null == i && (i = !0);
                var s, r, a, o = d(0 != n),
                    l = o.length,
                    c = t && i && n;
                for (a = 0; a < l; a++) r = o[a], (c || r instanceof u || (s = r.target === r.vars.onComplete) && i || t && !s) && (e ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
            }, b.killChildTweensOf = function(e, t) {
                if (null != e) {
                    var i, n, s, r, a, o = _.tweenLookup;
                    if ("string" == typeof e && (e = v.selector(e) || e), x(e) && (e = g(e)), T(e))
                        for (r = e.length; - 1 < --r;) b.killChildTweensOf(e[r], t);
                    else {
                        for (s in i = [], o)
                            for (n = o[s].target.parentNode; n;) n === e && (i = i.concat(o[s].tweens)), n = n.parentNode;
                        for (a = i.length, r = 0; r < a; r++) t && i[r].totalTime(i[r].totalDuration()), i[r]._enabled(!1, !1)
                    }
                }
            };
            var s = function(e, t, i, n) {
                t = !1 !== t, i = !1 !== i;
                for (var s, r, a = d(n = !1 !== n), o = t && i && n, l = a.length; - 1 < --l;) r = a[l], (o || r instanceof u || (s = r.target === r.vars.onComplete) && i || t && !s) && r.paused(e)
            };
            return b.pauseAll = function(e, t, i) {
                s(!0, e, t, i)
            }, b.resumeAll = function(e, t, i) {
                s(!1, e, t, i)
            }, b.globalTimeScale = function(e) {
                var t = n._rootTimeline,
                    i = v.ticker.time;
                return arguments.length ? (e = e || w, t._startTime = i - (i - t._startTime) * t._timeScale / e, t = n._rootFramesTimeline, i = v.ticker.frame, t._startTime = i - (i - t._startTime) * t._timeScale / e, t._timeScale = n._rootTimeline._timeScale = e, e) : t._timeScale
            }, e.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
            }, e.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, e.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, e.duration = function(e) {
                return arguments.length ? n.prototype.duration.call(this, e) : this._duration
            }, e.totalDuration = function(e) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, e.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, e.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, e.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, b
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(u, d, h) {
            var p = function(e) {
                    d.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var t, i, n = this.vars;
                    for (i in n) t = n[i], v(t) && -1 !== t.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(t));
                    v(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                m = 1e-10,
                e = h._internals,
                t = p._internals = {},
                f = e.isSelector,
                v = e.isArray,
                g = e.lazyTweens,
                y = e.lazyRender,
                a = _gsScope._gsDefine.globals,
                b = function(e) {
                    var t, i = {};
                    for (t in e) i[t] = e[t];
                    return i
                },
                w = function(e, t, i) {
                    var n, s, r = e.cycle;
                    for (n in r) s = r[n], e[n] = "function" == typeof s ? s.call(t[i], i) : s[i % s.length];
                    delete e.cycle
                },
                r = t.pauseCallback = function() {},
                _ = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                i = p.prototype = new d;
            return p.version = "1.19.0", i.constructor = p, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function(e, t, i, n) {
                var s = i.repeat && a.TweenMax || h;
                return t ? this.add(new s(e, t, i), n) : this.set(e, i, n)
            }, i.from = function(e, t, i, n) {
                return this.add((i.repeat && a.TweenMax || h).from(e, t, i), n)
            }, i.fromTo = function(e, t, i, n, s) {
                var r = n.repeat && a.TweenMax || h;
                return t ? this.add(r.fromTo(e, t, i, n), s) : this.set(e, n, s)
            }, i.staggerTo = function(e, t, i, n, s, r, a, o) {
                var l, c, u = new p({
                        onComplete: r,
                        onCompleteParams: a,
                        callbackScope: o,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    d = i.cycle;
                for ("string" == typeof e && (e = h.selector(e) || e), f(e = e || []) && (e = _(e)), (n = n || 0) < 0 && ((e = _(e)).reverse(), n *= -1), c = 0; c < e.length; c++)(l = b(i)).startAt && (l.startAt = b(l.startAt), l.startAt.cycle && w(l.startAt, e, c)), d && (w(l, e, c), null != l.duration && (t = l.duration, delete l.duration)), u.to(e[c], t, l, c * n);
                return this.add(u, s)
            }, i.staggerFrom = function(e, t, i, n, s, r, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, s, r, a, o)
            }, i.staggerFromTo = function(e, t, i, n, s, r, a, o, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, s, r, a, o, l)
            }, i.call = function(e, t, i, n) {
                return this.add(h.delayedCall(0, e, t, i), n)
            }, i.set = function(e, t, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused), this.add(new h(e, 0, t), i)
            }, p.exportRoot = function(e, t) {
                null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                var i, n, s = new p(e),
                    r = s._timeline;
                for (null == t && (t = !0), r._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = r._time, i = r._first; i;) n = i._next, t && i instanceof h && i.target === i.vars.onComplete || s.add(i, i._startTime - i._delay), i = n;
                return r.add(s, 0), s
            }, i.add = function(e, t, i, n) {
                var s, r, a, o, l, c;
                if ("number" != typeof t && (t = this._parseTimeOrLabel(t, 0, !0, e)), !(e instanceof u)) {
                    if (e instanceof Array || e && e.push && v(e)) {
                        for (i = i || "normal", n = n || 0, s = t, r = e.length, a = 0; a < r; a++) v(o = e[a]) && (o = new p({
                            tweens: o
                        })), this.add(o, s), "string" != typeof o && "function" != typeof o && ("sequence" === i ? s = o._startTime + o.totalDuration() / o._timeScale : "start" === i && (o._startTime -= o.delay())), s += n;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof e) return this.addLabel(e, t);
                    if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                    e = h.delayedCall(0, e)
                }
                if (d.prototype.add.call(this, e, t), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = (l = this).rawTime() > e._startTime; l._timeline;) c && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return this
            }, i.remove = function(e) {
                if (e instanceof u) {
                    this._remove(e, !1);
                    var t = e._timeline = e.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                }
                if (e instanceof Array || e && e.push && v(e)) {
                    for (var i = e.length; - 1 < --i;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, i._remove = function(e, t) {
                d.prototype._remove.call(this, e, t);
                var i = this._last;
                return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, i.append = function(e, t) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, i.insert = i.insertMultiple = function(e, t, i, n) {
                return this.add(e, t || 0, i, n)
            }, i.appendMultiple = function(e, t, i, n) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
            }, i.addLabel = function(e, t) {
                return this._labels[e] = this._parseTimeOrLabel(t), this
            }, i.addPause = function(e, t, i, n) {
                var s = h.delayedCall(0, r, i, n || this);
                return s.vars.onComplete = s.vars.onReverseComplete = t, s.data = "isPause", this._hasPause = !0, this.add(s, e)
            }, i.removeLabel = function(e) {
                return delete this._labels[e], this
            }, i.getLabelTime = function(e) {
                return null != this._labels[e] ? this._labels[e] : -1
            }, i._parseTimeOrLabel = function(e, t, i, n) {
                var s;
                if (n instanceof u && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && v(n)))
                    for (s = n.length; - 1 < --s;) n[s] instanceof u && n[s].timeline === this && this.remove(n[s]);
                if ("string" == typeof t) return this._parseTimeOrLabel(t, i && "number" == typeof e && null == this._labels[t] ? e - this.duration() : 0, i);
                if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (-1 === (s = e.indexOf("="))) return null == this._labels[e] ? i ? this._labels[e] = this.duration() + t : t : this._labels[e] + t;
                    t = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = 1 < s ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, i) : this.duration()
                }
                return Number(e) + t
            }, i.seek = function(e, t) {
                return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
            }, i.stop = function() {
                return this.paused(!0)
            }, i.gotoAndPlay = function(e, t) {
                return this.play(e, t)
            }, i.gotoAndStop = function(e, t) {
                return this.pause(e, t)
            }, i.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, r, a, o, l, c, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._time,
                    h = this._startTime,
                    p = this._timeScale,
                    f = this._paused;
                if (u - 1e-7 <= e) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", o = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || this._rawPrevTime < 0 || this._rawPrevTime === m) && this._rawPrevTime !== e && this._first && (o = !0, this._rawPrevTime > m && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m, e = u + 1e-4;
                else if (e < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== m && (0 < this._rawPrevTime || e < 0 && 0 <= this._rawPrevTime)) && (a = "onReverseComplete", s = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (o = s = !0, a = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (o = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m, 0 === e && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        e = 0, this._initted || (o = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !t) {
                        if (d <= e)
                            for (n = this._first; n && n._startTime <= e && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= e && !l;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (l = n), n = n._prev;
                        l && (this._time = e = l._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = e
                }
                if (this._time !== d && this._first || i || o || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && 0 < e && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), d <= (c = this._time))
                        for (n = this._first; n && (r = n._next, c === this._time && (!this._paused || f));)(n._active || n._startTime <= c && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r;
                    else
                        for (n = this._last; n && (r = n._prev, c === this._time && (!this._paused || f));) {
                            if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                if (l === n) {
                                    for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (e - l._startTime) * l._timeScale : (e - l._startTime) * l._timeScale, t, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                            }
                            n = r
                        }
                    this._onUpdate && (t || (g.length && y(), this._callback("onUpdate"))), a && (this._gc || (h === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (s && (g.length && y(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this._callback(a)))
                }
            }, i._hasPausedChild = function() {
                for (var e = this._first; e;) {
                    if (e._paused || e instanceof p && e._hasPausedChild()) return !0;
                    e = e._next
                }
                return !1
            }, i.getChildren = function(e, t, i, n) {
                n = n || -9999999999;
                for (var s = [], r = this._first, a = 0; r;) r._startTime < n || (r instanceof h ? !1 !== t && (s[a++] = r) : (!1 !== i && (s[a++] = r), !1 !== e && (a = (s = s.concat(r.getChildren(!0, t, i))).length))), r = r._next;
                return s
            }, i.getTweensOf = function(e, t) {
                var i, n, s = this._gc,
                    r = [],
                    a = 0;
                for (s && this._enabled(!0, !0), n = (i = h.getTweensOf(e)).length; - 1 < --n;)(i[n].timeline === this || t && this._contains(i[n])) && (r[a++] = i[n]);
                return s && this._enabled(!1, !0), r
            }, i.recent = function() {
                return this._recent
            }, i._contains = function(e) {
                for (var t = e.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, i.shiftChildren = function(e, t, i) {
                i = i || 0;
                for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += e), s = s._next;
                if (t)
                    for (n in r) r[n] >= i && (r[n] += e);
                return this._uncache(!0)
            }, i._kill = function(e, t) {
                if (!e && !t) return this._enabled(!1, !1);
                for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, s = !1; - 1 < --n;) i[n]._kill(e, t) && (s = !0);
                return s
            }, i.clear = function(e) {
                var t = this.getChildren(!1, !0, !0),
                    i = t.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) t[i]._enabled(!1, !1);
                return !1 !== e && (this._labels = {}), this._uncache(!0)
            }, i.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return u.prototype.invalidate.call(this)
            }, i._enabled = function(e, t) {
                if (e === this._gc)
                    for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
                return d.prototype._enabled.call(this, e, t)
            }, i.totalTime = function(e, t, i) {
                this._forcingPlayhead = !0;
                var n = u.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, n
            }, i.duration = function(e) {
                return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, i.totalDuration = function(e) {
                if (arguments.length) return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
                if (this._dirty) {
                    for (var t, i, n = 0, s = this._last, r = 999999999999; s;) t = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), n < (i = s._startTime + s._totalDuration / s._timeScale) && (n = i), s = t;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }, i.paused = function(e) {
                if (!e)
                    for (var t = this._first, i = this._time; t;) t._startTime === i && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                return u.prototype.paused.apply(this, arguments)
            }, i.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === u._rootFramesTimeline
            }, i.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, p
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, o, e) {
            var i = function(e) {
                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                k = 1e-10,
                n = o._internals,
                E = n.lazyTweens,
                A = n.lazyRender,
                l = _gsScope._gsDefine.globals,
                c = new e(null, null, 1, 0),
                s = i.prototype = new t;
            return s.constructor = i, s.kill()._gc = !1, i.version = "1.19.0", s.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, s.addCallback = function(e, t, i, n) {
                return this.add(o.delayedCall(0, e, i, n), t)
            }, s.removeCallback = function(e, t) {
                if (e)
                    if (null == t) this._kill(null, e);
                    else
                        for (var i = this.getTweensOf(e, !1), n = i.length, s = this._parseTimeOrLabel(t); - 1 < --n;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                return this
            }, s.removePause = function(e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }, s.tweenTo = function(e, t) {
                t = t || {};
                var i, n, s, r = {
                        ease: c,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    },
                    a = t.repeat && l.TweenMax || o;
                for (n in t) r[n] = t[n];
                return r.time = this._parseTimeOrLabel(e), i = Math.abs(Number(r.time) - this._time) / this._timeScale || .001, s = new a(this, i, r), r.onStart = function() {
                    s.target.paused(!0), s.vars.time !== s.target.time() && i === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), t.onStart && s._callback("onStart")
                }, s
            }, s.tweenFromTo = function(e, t, i) {
                i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [e],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var n = this.tweenTo(t, i);
                return n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
            }, s.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, r, a, o, l, c, u, d = this._dirty ? this.totalDuration() : this._totalDuration,
                    h = this._duration,
                    p = this._time,
                    f = this._totalTime,
                    m = this._startTime,
                    v = this._timeScale,
                    g = this._rawPrevTime,
                    y = this._paused,
                    b = this._cycle;
                if (d - 1e-7 <= e) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", o = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || g < 0 || g === k) && g !== e && this._first && (o = !0, k < g && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : k, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : e = (this._time = h) + 1e-4;
                else if (e < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== p || 0 === h && g !== k && (0 < g || e < 0 && 0 <= g) && !this._locked) && (a = "onReverseComplete", s = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (o = s = !0, a = "onReverseComplete") : 0 <= g && this._first && (o = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = h || !t || e || this._rawPrevTime === e ? e : k, 0 === e && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        e = 0, this._initted || (o = !0)
                    }
                else if (0 === h && g < 0 && (o = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (l = h + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && f <= e && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time), this._time > h ? e = (this._time = h) + 1e-4 : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                    if (p <= (e = this._time))
                        for (n = this._first; n && n._startTime <= e && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= e && !c;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (c = n), n = n._prev;
                    c && (this._time = e = c._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== b && !this._locked) {
                    var w = this._yoyo && 0 != (1 & b),
                        _ = w === (this._yoyo && 0 != (1 & this._cycle)),
                        x = this._totalTime,
                        T = this._cycle,
                        S = this._rawPrevTime,
                        C = this._time;
                    if (this._totalTime = b * h, this._cycle < b ? w = !w : this._totalTime += h, this._time = p, this._rawPrevTime = 0 === h ? g - 1e-4 : g, this._cycle = b, this._locked = !0, p = w ? 0 : h, this.render(p, t, 0 === h), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), p !== this._time) return;
                    if (_ && (p = w ? h + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;
                    this._time = C, this._totalTime = x, this._cycle = T, this._rawPrevTime = S
                }
                if (this._time !== p && this._first || i || o || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < e && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), p <= (u = this._time))
                        for (n = this._first; n && (r = n._next, u === this._time && (!this._paused || y));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r;
                    else
                        for (n = this._last; n && (r = n._prev, u === this._time && (!this._paused || y));) {
                            if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                if (c === n) {
                                    for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, i), c = c._prev;
                                    c = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                            }
                            n = r
                        }
                    this._onUpdate && (t || (E.length && A(), this._callback("onUpdate"))), a && (this._locked || this._gc || (m === this._startTime || v !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (E.length && A(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this._callback(a)))
                } else f !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, s.getActive = function(e, t, i) {
                null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                var n, s, r = [],
                    a = this.getChildren(e, t, i),
                    o = 0,
                    l = a.length;
                for (n = 0; n < l; n++)(s = a[n]).isActive() && (r[o++] = s);
                return r
            }, s.getLabelAfter = function(e) {
                e || 0 !== e && (e = this._time);
                var t, i = this.getLabelsArray(),
                    n = i.length;
                for (t = 0; t < n; t++)
                    if (i[t].time > e) return i[t].name;
                return null
            }, s.getLabelBefore = function(e) {
                null == e && (e = this._time);
                for (var t = this.getLabelsArray(), i = t.length; - 1 < --i;)
                    if (t[i].time < e) return t[i].name;
                return null
            }, s.getLabelsArray = function() {
                var e, t = [],
                    i = 0;
                for (e in this._labels) t[i++] = {
                    time: this._labels[e],
                    name: e
                };
                return t.sort(function(e, t) {
                    return e.time - t.time
                }), t
            }, s.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
            }, s.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, s.totalDuration = function(e) {
                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, s.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, s.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, s.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, s.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, s.currentLabel = function(e) {
                return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
        }, !0), T = 180 / Math.PI, _ = [], x = [], S = [], g = {}, i = _gsScope._gsDefine.globals, y = function(e, t, i, n) {
            i === n && (i = n - (n - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
        }, C = function(e, t, i, n) {
            var s = {
                    a: e
                },
                r = {},
                a = {},
                o = {
                    c: n
                },
                l = (e + t) / 2,
                c = (t + i) / 2,
                u = (i + n) / 2,
                d = (l + c) / 2,
                h = (c + u) / 2,
                p = (h - d) / 8;
            return s.b = l + (e - l) / 4, r.b = d + p, s.c = r.a = (s.b + r.b) / 2, r.c = a.a = (d + h) / 2, a.b = h - p, o.b = u + (n - u) / 4, a.c = o.a = (a.b + o.b) / 2, [s, r, a, o]
        }, b = function(e, t, i, n, s) {
            var r, a, o, l, c, u, d, h, p, f, m, v, g, y = e.length - 1,
                b = 0,
                w = e[0].a;
            for (r = 0; r < y; r++) a = (c = e[b]).a, o = c.d, l = e[b + 1].d, h = s ? (m = _[r], g = ((v = x[r]) + m) * t * .25 / (n ? .5 : S[r] || .5), o - ((u = o - (o - a) * (n ? .5 * t : 0 !== m ? g / m : 0)) + (((d = o + (l - o) * (n ? .5 * t : 0 !== v ? g / v : 0)) - u) * (3 * m / (m + v) + .5) / 4 || 0))) : o - ((u = o - (o - a) * t * .5) + (d = o + (l - o) * t * .5)) / 2, u += h, d += h, c.c = p = u, c.b = 0 !== r ? w : w = c.a + .6 * (c.c - c.a), c.da = o - a, c.ca = p - a, c.ba = w - a, i ? (f = C(a, w, p, o), e.splice(b, 1, f[0], f[1], f[2], f[3]), b += 4) : b++, w = d;
            (c = e[b]).b = w, c.c = w + .4 * (c.d - w), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = w - c.a, i && (f = C(c.a, w, c.c, c.d), e.splice(b, 1, f[0], f[1], f[2], f[3]))
        }, w = function(e, t, i, n) {
            var s, r, a, o, l, c, u = [];
            if (n)
                for (r = (e = [n].concat(e)).length; - 1 < --r;) "string" == typeof(c = e[r][t]) && "=" === c.charAt(1) && (e[r][t] = n[t] + Number(c.charAt(0) + c.substr(2)));
            if ((s = e.length - 2) < 0) return u[0] = new y(e[0][t], 0, 0, e[s < -1 ? 0 : 1][t]), u;
            for (r = 0; r < s; r++) a = e[r][t], o = e[r + 1][t], u[r] = new y(a, 0, 0, o), i && (l = e[r + 2][t], _[r] = (_[r] || 0) + (o - a) * (o - a), x[r] = (x[r] || 0) + (l - o) * (l - o));
            return u[r] = new y(e[r][t], 0, 0, e[r + 1][t]), u
        }, p = function(e, t, i, n, s, r) {
            var a, o, l, c, u, d, h, p, f = {},
                m = [],
                v = r || e[0];
            for (o in s = "string" == typeof s ? "," + s + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) m.push(o);
            if (1 < e.length) {
                for (p = e[e.length - 1], h = !0, a = m.length; - 1 < --a;)
                    if (o = m[a], .05 < Math.abs(v[o] - p[o])) {
                        h = !1;
                        break
                    }
                h && (e = e.concat(), r && e.unshift(r), e.push(e[1]), r = e[e.length - 3])
            }
            for (_.length = x.length = S.length = 0, a = m.length; - 1 < --a;) o = m[a], g[o] = -1 !== s.indexOf("," + o + ","), f[o] = w(e, o, g[o], r);
            for (a = _.length; - 1 < --a;) _[a] = Math.sqrt(_[a]), x[a] = Math.sqrt(x[a]);
            if (!n) {
                for (a = m.length; - 1 < --a;)
                    if (g[o])
                        for (d = (l = f[m[a]]).length - 1, c = 0; c < d; c++) u = l[c + 1].da / x[c] + l[c].da / _[c] || 0, S[c] = (S[c] || 0) + u * u;
                for (a = S.length; - 1 < --a;) S[a] = Math.sqrt(S[a])
            }
            for (a = m.length, c = i ? 4 : 1; - 1 < --a;) l = f[o = m[a]], b(l, t, i, n, g[o]), h && (l.splice(0, c), l.splice(l.length - c, c));
            return f
        }, f = function(e, t, i) {
            for (var n, s, r, a, o, l, c, u, d, h, p, f = 1 / i, m = e.length; - 1 < --m;)
                for (r = (h = e[m]).a, a = h.d - r, o = h.c - r, l = h.b - r, n = s = 0, u = 1; u <= i; u++) n = s - (s = ((c = f * u) * c * a + 3 * (d = 1 - c) * (c * o + d * l)) * c), t[p = m * i + u - 1] = (t[p] || 0) + n * n
        }, v = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.7",
            API: 2,
            global: !0,
            init: function(e, t, i) {
                this._target = e, t instanceof Array && (t = {
                    values: t
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var n, s, r, a, o, l = t.values || [],
                    c = {},
                    u = l[0],
                    d = t.autoRotate || i.vars.orientToBezier;
                for (n in this._autoRotate = d ? d instanceof Array ? d : [
                        ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                    ] : null, u) this._props.push(n);
                for (r = this._props.length; - 1 < --r;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof e[n], c[n] = s ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), o || c[n] !== l[0][n] && (o = c);
                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? p(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : function(e, t, i) {
                        var n, s, r, a, o, l, c, u, d, h, p, f = {},
                            m = "cubic" === (t = t || "soft") ? 3 : 2,
                            v = "soft" === t,
                            g = [];
                        if (v && i && (e = [i].concat(e)), null == e || e.length < m + 1) throw "invalid Bezier data";
                        for (d in e[0]) g.push(d);
                        for (l = g.length; - 1 < --l;) {
                            for (f[d = g[l]] = o = [], h = 0, u = e.length, c = 0; c < u; c++) n = null == i ? e[c][d] : "string" == typeof(p = e[c][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p), v && 1 < c && c < u - 1 && (o[h++] = (n + o[h - 2]) / 2), o[h++] = n;
                            for (u = h - m + 1, c = h = 0; c < u; c += m) n = o[c], s = o[c + 1], r = o[c + 2], a = 2 === m ? 0 : o[c + 3], o[h++] = p = 3 === m ? new y(n, s, r, a) : new y(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                            o.length = h
                        }
                        return f
                    }(l, t.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                    var h = function(e, t) {
                        var i, n, s, r, a = [],
                            o = [],
                            l = 0,
                            c = 0,
                            u = (t = t >> 0 || 6) - 1,
                            d = [],
                            h = [];
                        for (i in e) f(e[i], a, t);
                        for (s = a.length, n = 0; n < s; n++) l += Math.sqrt(a[n]), h[r = n % t] = l, r === u && (c += l, d[r = n / t >> 0] = h, o[r] = c, l = 0, h = []);
                        return {
                            length: c,
                            lengths: o,
                            segments: d
                        }
                    }(this._beziers, this._timeRes);
                    this._length = h.length, this._lengths = h.lengths, this._segments = h.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (d = this._autoRotate)
                    for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), r = d.length; - 1 < --r;) {
                        for (a = 0; a < 3; a++) n = d[r][a], this._func[n] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = d[r][2], this._initialRotations[r] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(e) {
                var t, i, n, s, r, a, o, l, c, u, d = this._segCount,
                    h = this._func,
                    p = this._target,
                    f = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, e *= this._length, n = this._li, e > this._l2 && n < d - 1) {
                        for (l = d - 1; n < l && (this._l2 = c[++n]) <= e;);
                        this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && 0 < n) {
                        for (; 0 < n && (this._l1 = c[--n]) >= e;);
                        0 === n && e < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (t = n, e -= this._l1, n = this._si, e > this._s2 && n < u.length - 1) {
                        for (l = u.length - 1; n < l && (this._s2 = u[++n]) <= e;);
                        this._s1 = u[n - 1], this._si = n
                    } else if (e < this._s1 && 0 < n) {
                        for (; 0 < n && (this._s1 = u[--n]) >= e;);
                        0 === n && e < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
                    }
                    a = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else a = (e - (t = e < 0 ? 0 : 1 <= e ? d - 1 : d * e >> 0) * (1 / d)) * d;
                for (i = 1 - a, n = this._props.length; - 1 < --n;) s = this._props[n], o = (a * a * (r = this._beziers[s][t]).da + 3 * i * (a * r.ca + i * r.ba)) * a + r.a, this._mod[s] && (o = this._mod[s](o, p)), h[s] ? p[s](o) : p[s] = o;
                if (this._autoRotate) {
                    var m, v, g, y, b, w, _, x = this._autoRotate;
                    for (n = x.length; - 1 < --n;) s = x[n][2], w = x[n][3] || 0, _ = !0 === x[n][4] ? 1 : T, r = this._beziers[x[n][0]], m = this._beziers[x[n][1]], r && m && (r = r[t], m = m[t], v = r.a + (r.b - r.a) * a, v += ((y = r.b + (r.c - r.b) * a) - v) * a, y += (r.c + (r.d - r.c) * a - y) * a, g = m.a + (m.b - m.a) * a, g += ((b = m.b + (m.c - m.b) * a) - g) * a, b += (m.c + (m.d - m.c) * a - b) * a, o = f ? Math.atan2(b - g, y - v) * _ + w : this._initialRotations[n], this._mod[s] && (o = this._mod[s](o, p)), h[s] ? p[s](o) : p[s] = o)
                }
            }
        }), n = v.prototype, v.bezierThrough = p, v.cubicToQuadratic = C, v._autoCSS = !0, v.quadraticToCubic = function(e, t, i) {
            return new y(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
        }, v._cssRegister = function() {
            var e = i.CSSPlugin;
            if (e) {
                var t = e._internals,
                    p = t._parseToProxy,
                    f = t._setPluginRatio,
                    m = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function(e, t, i, n, s, r) {
                        t instanceof Array && (t = {
                            values: t
                        }), r = new v;
                        var a, o, l, c = t.values,
                            u = c.length - 1,
                            d = [],
                            h = {};
                        if (u < 0) return s;
                        for (a = 0; a <= u; a++) l = p(e, c[a], n, s, r, u !== a), d[a] = l.end;
                        for (o in t) h[o] = t[o];
                        return h.values = d, (s = new m(e, "bezier", 0, 0, l.pt, 2)).data = l, s.plugin = r, s.setRatio = f, 0 === h.autoRotate && (h.autoRotate = !0), !h.autoRotate || h.autoRotate instanceof Array || (a = !0 === h.autoRotate ? 0 : Number(h.autoRotate), h.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", a, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", a, !1]
                        ]), h.autoRotate && (n._transform || n._enableTransforms(!1), l.autoRotate = n._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, n._overwriteProps.push("rotation")), r._onInitTween(l.proxy, h, n._tween), s
                    }
                })
            }
        }, n._mod = function(e) {
            for (var t, i = this._overwriteProps, n = i.length; - 1 < --n;)(t = e[i[n]]) && "function" == typeof t && (this._mod[i[n]] = t)
        }, n._kill = function(e) {
            var t, i, n = this._props;
            for (t in this._beziers)
                if (t in e)
                    for (delete this._beziers[t], delete this._func[t], i = n.length; - 1 < --i;) n[i] === t && n.splice(i, 1);
            if (n = this._autoRotate)
                for (i = n.length; - 1 < --i;) e[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, e)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(r, j) {
            var f, S, C, m, B = function() {
                    r.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = B.prototype.setRatio
                },
                c = _gsScope._gsDefine.globals,
                v = {},
                e = B.prototype = new r("css");
            (e.constructor = B).version = "1.19.0", B.API = 2, B.defaultTransformPerspective = 0, B.defaultSkewType = "compensated", B.defaultSmoothOrigin = !0, e = "px", B.suffixMap = {
                top: e,
                right: e,
                bottom: e,
                left: e,
                width: e,
                height: e,
                fontSize: e,
                padding: e,
                margin: e,
                perspective: e,
                lineHeight: ""
            };
            var E, g, y, I, b, k, A, P, t, i, M = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                O = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                D = /(?:\d|\-|\+|=|#|\.)*/g,
                L = /opacity *= *([^)]*)/i,
                _ = /opacity:([^;]*)/i,
                a = /alpha\(opacity *=.+?\)/i,
                x = /^(rgb|hsl)/,
                o = /([A-Z])/g,
                l = /-([a-z])/gi,
                T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                d = function(e, t) {
                    return t.toUpperCase()
                },
                p = /(?:Left|Right|Width)/i,
                h = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                R = /,(?=[^\)]*(?:\(|$))/gi,
                N = /[\s,\(]/i,
                F = Math.PI / 180,
                H = 180 / Math.PI,
                $ = {},
                q = document,
                n = function(e) {
                    return q.createElementNS ? q.createElementNS("http://www.w3.org/1999/xhtml", e) : q.createElement(e)
                },
                X = n("div"),
                Y = n("img"),
                s = B._internals = {
                    _specialProps: v
                },
                V = navigator.userAgent,
                W = (t = V.indexOf("Android"), i = n("a"), y = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || 3 < Number(V.substr(t + 8, 1))), b = y && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6, I = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (k = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                U = function(e) {
                    return L.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                G = function(e) {
                    window.console && console.log(e)
                },
                K = "",
                Q = "",
                J = function(e, t) {
                    var i, n, s = (t = t || X).style;
                    if (void 0 !== s[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === s[i[n] + e];);
                    return 0 <= n ? (K = "-" + (Q = 3 === n ? "ms" : i[n]).toLowerCase() + "-", Q + e) : null
                },
                Z = q.defaultView ? q.defaultView.getComputedStyle : function() {},
                ee = B.getStyle = function(e, t, i, n, s) {
                    var r;
                    return W || "opacity" !== t ? (!n && e.style[t] ? r = e.style[t] : (i = i || Z(e)) ? r = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(o, "-$1").toLowerCase()) : e.currentStyle && (r = e.currentStyle[t]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : U(e)
                },
                te = s.convertToPixels = function(e, t, i, n, s) {
                    if ("px" === n || !n) return i;
                    if ("auto" === n || !i) return 0;
                    var r, a, o, l = p.test(t),
                        c = e,
                        u = X.style,
                        d = i < 0,
                        h = 1 === i;
                    if (d && (i = -i), h && (i *= 100), "%" === n && -1 !== t.indexOf("border")) r = i / 100 * (l ? e.clientWidth : e.clientHeight);
                    else {
                        if (u.cssText = "border:0 solid red;position:" + ee(e, "position") + ";line-height:0;", "%" !== n && c.appendChild && "v" !== n.charAt(0) && "rem" !== n) u[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                        else {
                            if (a = (c = e.parentNode || q.body)._gsCache, o = j.ticker.frame, a && l && a.time === o) return a.width * i / 100;
                            u[l ? "width" : "height"] = i + n
                        }
                        c.appendChild(X), r = parseFloat(X[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(X), l && "%" === n && !1 !== B.cacheWidths && ((a = c._gsCache = c._gsCache || {}).time = o, a.width = r / i * 100), 0 !== r || s || (r = te(e, t, i, n, !0))
                    }
                    return h && (r /= 100), d ? -r : r
                },
                ie = s.calculateOffset = function(e, t, i) {
                    if ("absolute" !== ee(e, "position", i)) return 0;
                    var n = "left" === t ? "Left" : "Top",
                        s = ee(e, "margin" + n, i);
                    return e["offset" + n] - (te(e, t, parseFloat(s), s.replace(D, "")) || 0)
                },
                ne = function(e, t) {
                    var i, n, s, r = {};
                    if (t = t || Z(e, null))
                        if (i = t.length)
                            for (; - 1 < --i;)(-1 === (s = t[i]).indexOf("-transform") || ze === s) && (r[s.replace(l, d)] = t.getPropertyValue(s));
                        else
                            for (i in t)(-1 === i.indexOf("Transform") || Le === i) && (r[i] = t[i]);
                    else if (t = e.currentStyle || e.style)
                        for (i in t) "string" == typeof i && void 0 === r[i] && (r[i.replace(l, d)] = t[i]);
                    return W || (r.opacity = U(e)), n = Ve(e, t, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Ne && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                },
                se = function(e, t, i, n, s) {
                    var r, a, o, l = {},
                        c = e.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (r = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof t[a] || "" === t[a].replace(u, "") ? r : 0 : ie(e, a), void 0 !== c[a] && (o = new be(c, a, c[a], o)));
                    if (n)
                        for (a in n) "className" !== a && (l[a] = n[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                re = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                oe = function(e, t, i) {
                    if ("svg" === (e.nodeName + "").toLowerCase()) return (i || Z(e))[t] || 0;
                    if (e.getBBox && qe(e)) return e.getBBox()[t] || 0;
                    var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        s = re[t],
                        r = s.length;
                    for (i = i || Z(e, null); - 1 < --r;) n -= parseFloat(ee(e, "padding" + s[r], i, !0)) || 0, n -= parseFloat(ee(e, "border" + s[r] + "Width", i, !0)) || 0;
                    return n
                },
                le = function(e, t) {
                    if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                    (null == e || "" === e) && (e = "0 0");
                    var i, n = e.split(" "),
                        s = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                        r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                    if (3 < n.length && !t) {
                        for (n = e.split(", ").join(",").split(","), e = [], i = 0; i < n.length; i++) e.push(le(n[i]));
                        return e.join(",")
                    }
                    return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e = s + " " + r + (2 < n.length ? " " + n[2] : ""), t && (t.oxp = -1 !== s.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === s.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(s.replace(u, "")), t.oy = parseFloat(r.replace(u, "")), t.v = e), t || e
                },
                ce = function(e, t) {
                    return "function" == typeof e && (e = e(P, A)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                },
                ue = function(e, t) {
                    return "function" == typeof e && (e = e(P, A)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                },
                de = function(e, t, i, n) {
                    var s, r, a, o, l;
                    return "function" == typeof e && (e = e(P, A)), (o = null == e ? t : "number" == typeof e ? e : (s = 360, r = e.split("_"), a = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === e.indexOf("rad") ? 1 : H) - (l ? 0 : t), r.length && (n && (n[i] = t + a), -1 !== e.indexOf("short") && ((a %= s) !== a % 180 && (a = a < 0 ? a + s : a - s)), -1 !== e.indexOf("_cw") && a < 0 ? a = (a + 3599999999640) % s - (a / s | 0) * s : -1 !== e.indexOf("ccw") && 0 < a && (a = (a - 3599999999640) % s - (a / s | 0) * s)), t + a)) < 1e-6 && -1e-6 < o && (o = 0), o
                },
                he = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                pe = function(e, t, i) {
                    return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                },
                fe = B.parseColor = function(e, t) {
                    var i, n, s, r, a, o, l, c, u, d, h;
                    if (e)
                        if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
                        else {
                            if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), he[e]) i = he[e];
                            else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (n = e.charAt(1)) + n + (s = e.charAt(2)) + s + (r = e.charAt(3)) + r), i = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                            else if ("hsl" === e.substr(0, 3))
                                if (i = h = e.match(M), t) {
                                    if (-1 !== e.indexOf("=")) return e.match(O)
                                } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (s = l <= .5 ? l * (o + 1) : l + o - l * o), 3 < i.length && (i[3] = Number(e[3])), i[0] = pe(a + 1 / 3, n, s), i[1] = pe(a, n, s), i[2] = pe(a - 1 / 3, n, s);
                            else i = e.match(M) || he.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        }
                    else i = he.black;
                    return t && !h && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, l = ((c = Math.max(n, s, r)) + (u = Math.min(n, s, r))) / 2, c === u ? a = o = 0 : (d = c - u, o = .5 < l ? d / (2 - c - u) : d / (c + u), a = c === n ? (s - r) / d + (s < r ? 6 : 0) : c === s ? (r - n) / d + 2 : (n - s) / d + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                me = function(e, t) {
                    var i, n, s, r = e.match(ve) || [],
                        a = 0,
                        o = r.length ? "" : e;
                    for (i = 0; i < r.length; i++) n = r[i], a += (s = e.substr(a, e.indexOf(n, a) - a)).length + n.length, 3 === (n = fe(n, t)).length && n.push(1), o += s + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                    return o + e.substr(a)
                },
                ve = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (e in he) ve += "|" + e + "\\b";
            ve = new RegExp(ve + ")", "gi"), B.colorStringFilter = function(e) {
                var t, i = e[0] + e[1];
                ve.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = me(e[0], t), e[1] = me(e[1], t)), ve.lastIndex = 0
            }, j.defaultStringFilter || (j.defaultStringFilter = B.colorStringFilter);
            var ge = function(e, t, r, a) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var o, l = t ? (e.match(ve) || [""])[0] : "",
                        c = e.split(l).join("").match(w) || [],
                        u = e.substr(0, e.indexOf(c[0])),
                        d = ")" === e.charAt(e.length - 1) ? ")" : "",
                        h = -1 !== e.indexOf(" ") ? " " : ",",
                        p = c.length,
                        f = 0 < p ? c[0].replace(M, "") : "";
                    return p ? o = t ? function(e) {
                        var t, i, n, s;
                        if ("number" == typeof e) e += f;
                        else if (a && R.test(e)) {
                            for (s = e.replace(R, "|").split("|"), n = 0; n < s.length; n++) s[n] = o(s[n]);
                            return s.join(",")
                        }
                        if (t = (e.match(ve) || [l])[0], n = (i = e.split(t).join("").match(w) || []).length, p > n--)
                            for (; ++n < p;) i[n] = r ? i[(n - 1) / 2 | 0] : c[n];
                        return u + i.join(h) + h + t + d + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, i, n;
                        if ("number" == typeof e) e += f;
                        else if (a && R.test(e)) {
                            for (i = e.replace(R, "|").split("|"), n = 0; n < i.length; n++) i[n] = o(i[n]);
                            return i.join(",")
                        }
                        if (n = (t = e.match(w) || []).length, p > n--)
                            for (; ++n < p;) t[n] = r ? t[(n - 1) / 2 | 0] : c[n];
                        return u + t.join(h) + d
                    } : function(e) {
                        return e
                    }
                },
                ye = function(c) {
                    return c = c.split(","),
                        function(e, t, i, n, s, r, a) {
                            var o, l = (t + "").split(" ");
                            for (a = {}, o = 0; o < 4; o++) a[c[o]] = l[o] = l[o] || l[(o - 1) / 2 >> 0];
                            return n.parse(e, a, s, r)
                        }
                },
                be = (s._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, i, n, s, r, a = this.data, o = a.proxy, l = a.firstMPT; l;) t = o[l.v], l.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), l.t[l.p] = t, l = l._next;
                    if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === e || 0 === e)
                        for (l = a.firstMPT, r = 1 === e ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                    i[r] = s
                                }
                            } else i[r] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(e, t, i, n, s) {
                    this.t = e, this.p = t, this.v = i, this.r = s, n && ((n._prev = this)._next = n)
                }),
                we = (s._parseToProxy = function(e, t, i, n, s, r) {
                    var a, o, l, c, u, d = n,
                        h = {},
                        p = {},
                        f = i._transform,
                        m = $;
                    for (i._transform = null, $ = t, n = u = i.parse(e, t, n, s), $ = m, r && (i._transform = f, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                        if (n.type <= 1 && (p[o = n.p] = n.s + n.c, h[o] = n.s, r || (c = new be(n, "s", o, c, n.r), n.c = 0), 1 === n.type))
                            for (a = n.l; 0 < --a;) l = "xn" + a, p[o = n.p + "_" + l] = n.data[l], h[o] = n[l], r || (c = new be(n, l, o, c, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: h,
                        end: p,
                        firstMPT: c,
                        pt: u
                    }
                }, s.CSSPropTween = function(e, t, i, n, s, r, a, o, l, c, u) {
                    this.t = e, this.p = t, this.s = i, this.c = n, this.n = a || t, e instanceof we || m.push(this.n), this.r = o, this.type = r || 0, l && (this.pr = l, f = !0), this.b = void 0 === c ? i : c, this.e = void 0 === u ? i + n : u, s && ((this._next = s)._prev = this)
                }),
                _e = function(e, t, i, n, s, r) {
                    var a = new we(e, t, i, n - i, s, -1, r);
                    return a.b = i, a.e = a.xs0 = n, a
                },
                xe = B.parseComplex = function(e, t, i, n, s, r, a, o, l, c) {
                    i = i || r || "", "function" == typeof n && (n = n(P, A)), a = new we(e, t, 0, 0, a, c ? 2 : 1, null, !1, o, i, n), n += "", s && ve.test(n + i) && (n = [i, n], B.colorStringFilter(n), i = n[0], n = n[1]);
                    var u, d, h, p, f, m, v, g, y, b, w, _, x, T = i.split(", ").join(",").split(" "),
                        S = n.split(", ").join(",").split(" "),
                        C = T.length,
                        k = !1 !== E;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (T = T.join(" ").replace(R, ", ").split(" "), S = S.join(" ").replace(R, ", ").split(" "), C = T.length), C !== S.length && (C = (T = (r || "").split(" ")).length), a.plugin = l, a.setRatio = c, u = ve.lastIndex = 0; u < C; u++)
                        if (p = T[u], f = S[u], (g = parseFloat(p)) || 0 === g) a.appendXtra("", g, ce(f, g), f.replace(O, ""), k && -1 !== f.indexOf("px"), !0);
                        else if (s && ve.test(p)) _ = ")" + ((_ = f.indexOf(")") + 1) ? f.substr(_) : ""), x = -1 !== f.indexOf("hsl") && W, p = fe(p, x), f = fe(f, x), (y = 6 < p.length + f.length) && !W && 0 === f[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(S[u]).join("transparent")) : (W || (y = !1), x ? a.appendXtra(y ? "hsla(" : "hsl(", p[0], ce(f[0], p[0]), ",", !1, !0).appendXtra("", p[1], ce(f[1], p[1]), "%,", !1).appendXtra("", p[2], ce(f[2], p[2]), y ? "%," : "%" + _, !1) : a.appendXtra(y ? "rgba(" : "rgb(", p[0], f[0] - p[0], ",", !0, !0).appendXtra("", p[1], f[1] - p[1], ",", !0).appendXtra("", p[2], f[2] - p[2], y ? "," : _, !0), y && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (f.length < 4 ? 1 : f[3]) - p, _, !1))), ve.lastIndex = 0;
                    else if (m = p.match(M)) {
                        if (!(v = f.match(O)) || v.length !== m.length) return a;
                        for (d = h = 0; d < m.length; d++) w = m[d], b = p.indexOf(w, h), a.appendXtra(p.substr(h, b - h), Number(w), ce(v[d], w), "", k && "px" === p.substr(b + w.length, 2), 0 === d), h = b + w.length;
                        a["xs" + a.l] += p.substr(h)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + f : f;
                    if (-1 !== n.indexOf("=") && a.data) {
                        for (_ = a.xs0 + a.data.s, u = 1; u < a.l; u++) _ += a["xs" + u] + a.data["xn" + u];
                        a.e = _ + a["xs" + u]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                Te = 9;
            for ((e = we.prototype).l = e.pr = 0; 0 < --Te;) e["xn" + Te] = 0, e["xs" + Te] = "";
            e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function(e, t, i, n, s, r) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += r && (o || a["xs" + o]) ? " " + e : e || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", 0 < o ? (a.data["xn" + o] = t + i, a.rxp["xn" + o] = s, a["xn" + o] = t, a.plugin || (a.xfirst = new we(a, "xn" + o, t, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0)) : (a.data = {
                    s: t + i
                }, a.rxp = {}, a.s = t, a.c = i, a.r = s)) : a["xs" + o] += t + (n || ""), a
            };
            var Se = function(e, t) {
                    t = t || {}, this.p = t.prefix && J(e) || e, v[e] = v[this.p] = this, this.format = t.formatter || ge(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                Ce = s._registerComplexSpecialProp = function(e, t, i) {
                    "object" != typeof t && (t = {
                        parser: i
                    });
                    var n, s = e.split(","),
                        r = t.defaultValue;
                    for (i = i || [r], n = 0; n < s.length; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || r, new Se(s[n], t)
                },
                ke = s._registerPluginProp = function(e) {
                    if (!v[e]) {
                        var l = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        Ce(e, {
                            parser: function(e, t, i, n, s, r, a) {
                                var o = c.com.greensock.plugins[l];
                                return o ? (o._cssRegister(), v[i].parse(e, t, i, n, s, r, a)) : (G("Error: " + l + " js file not loaded."), s)
                            }
                        })
                    }
                };
            (e = Se.prototype).parseComplex = function(e, t, i, n, s, r) {
                var a, o, l, c, u, d, h = this.keyword;
                if (this.multi && (R.test(i) || R.test(t) ? (o = t.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : h && (o = [t], l = [i])), l) {
                    for (c = l.length > o.length ? l.length : o.length, a = 0; a < c; a++) t = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, h && ((u = t.indexOf(h)) !== (d = i.indexOf(h)) && (-1 === d ? o[a] = o[a].split(h).join("") : -1 === u && (o[a] += " " + h)));
                    t = o.join(", "), i = l.join(", ")
                }
                return xe(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, s, r)
            }, e.parse = function(e, t, i, n, s, r, a) {
                return this.parseComplex(e.style, this.format(ee(e, this.p, C, !1, this.dflt)), this.format(t), s, r)
            }, B.registerSpecialProp = function(e, l, c) {
                Ce(e, {
                    parser: function(e, t, i, n, s, r, a) {
                        var o = new we(e, i, 0, 0, s, 2, i, !1, c);
                        return o.plugin = r, o.setRatio = l(e, t, n._tween, i), o
                    },
                    priority: c
                })
            }, B.useSVGTransformAttr = y || I;
            var Ee, Ae, Pe, Me, Oe, De = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Le = J("transform"),
                ze = K + "transform",
                Re = J("transformOrigin"),
                Ne = null !== J("perspective"),
                $e = s.Transform = function() {
                    this.perspective = parseFloat(B.defaultTransformPerspective) || 0, this.force3D = !(!1 === B.defaultForce3D || !Ne) && (B.defaultForce3D || "auto")
                },
                Ie = window.SVGElement,
                Fe = function(e, t, i) {
                    var n, s = q.createElementNS("http://www.w3.org/2000/svg", e),
                        r = /([a-z])([A-Z])/g;
                    for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                    return t.appendChild(s), s
                },
                je = q.documentElement,
                Be = (Oe = k || /Android/i.test(V) && !window.chrome, q.createElementNS && !Oe && (Ae = Fe("svg", je), Me = (Pe = Fe("rect", Ae, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Pe.style[Re] = "50% 50%", Pe.style[Le] = "scaleX(0.5)", Oe = Me === Pe.getBoundingClientRect().width && !(I && Ne), je.removeChild(Ae)), Oe),
                He = function(e, t, i, n, s, r) {
                    var a, o, l, c, u, d, h, p, f, m, v, g, y, b, w = e._gsTransform,
                        _ = Ye(e, !0);
                    w && (y = w.xOrigin, b = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (h = e.getBBox(), a = [(-1 !== (t = le(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * h.width : parseFloat(t[0])) + h.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * h.height : parseFloat(t[1])) + h.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), n && _ !== Xe && (d = _[0], h = _[1], p = _[2], f = _[3], m = _[4], o = c * (f / (g = d * f - h * p)) + u * (-p / g) + (p * (v = _[5]) - f * m) / g, l = c * (-h / g) + u * (d / g) - (d * v - h * m) / g, c = i.xOrigin = a[0] = o, u = i.yOrigin = a[1] = l), w && (r && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), s || !1 !== s && !1 !== B.defaultSmoothOrigin ? (o = c - y, l = u - b, w.xOffset += o * _[0] + l * _[2] - o, w.yOffset += o * _[1] + l * _[3] - l) : w.xOffset = w.yOffset = 0), r || e.setAttribute("data-svg-origin", a.join(" "))
                },
                qe = function(e) {
                    return !!(Ie && e.getBBox && e.getCTM && function(e) {
                        try {
                            return e.getBBox()
                        } catch (e) {}
                    }(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                },
                Xe = [1, 0, 0, 1, 0, 0],
                Ye = function(e, t) {
                    var i, n, s, r, a, o, l = e._gsTransform || new $e,
                        c = e.style;
                    if (Le ? n = ee(e, ze, null, !0) : e.currentStyle && (n = (n = e.currentStyle.filter.match(h)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n) && Le && ((o = "none" === Z(e).display) || !e.parentNode) && (o && (r = c.display, c.display = "block"), e.parentNode || (a = 1, je.appendChild(e)), i = !(n = ee(e, ze, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, r ? c.display = r : o && Ke(c, "display"), a && je.removeChild(e)), (l.svg || e.getBBox && qe(e)) && (i && -1 !== (c[Le] + "").indexOf("matrix") && (n = c[Le], i = 0), s = e.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (n = s, i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Xe;
                    for (s = (n || "").match(M) || [], Te = s.length; - 1 < --Te;) r = Number(s[Te]), s[Te] = (a = r - (r |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + r : r;
                    return t && 6 < s.length ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                },
                Ve = s.getTransform = function(e, t, i, n) {
                    if (e._gsTransform && i && !n) return e._gsTransform;
                    var s, r, a, o, l, c, u = i && e._gsTransform || new $e,
                        d = u.scaleX < 0,
                        h = Ne && (parseFloat(ee(e, Re, t, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                        p = parseFloat(B.defaultTransformPerspective) || 0;
                    if (u.svg = !(!e.getBBox || !qe(e)), u.svg && (He(e, ee(e, Re, t, !1, "50% 50%") + "", u, e.getAttribute("data-svg-origin")), Ee = B.useSVGTransformAttr || Be), (s = Ye(e)) !== Xe) {
                        if (16 === s.length) {
                            var f, m, v, g, y, b = s[0],
                                w = s[1],
                                _ = s[2],
                                x = s[3],
                                T = s[4],
                                S = s[5],
                                C = s[6],
                                k = s[7],
                                E = s[8],
                                A = s[9],
                                P = s[10],
                                M = s[12],
                                O = s[13],
                                D = s[14],
                                L = s[11],
                                z = Math.atan2(C, P);
                            u.zOrigin && (M = E * (D = -u.zOrigin) - s[12], O = A * D - s[13], D = P * D + u.zOrigin - s[14]), u.rotationX = z * H, z && (f = T * (g = Math.cos(-z)) + E * (y = Math.sin(-z)), m = S * g + A * y, v = C * g + P * y, E = T * -y + E * g, A = S * -y + A * g, P = C * -y + P * g, L = k * -y + L * g, T = f, S = m, C = v), z = Math.atan2(-_, P), u.rotationY = z * H, z && (m = w * (g = Math.cos(-z)) - A * (y = Math.sin(-z)), v = _ * g - P * y, A = w * y + A * g, P = _ * y + P * g, L = x * y + L * g, b = f = b * g - E * y, w = m, _ = v), z = Math.atan2(w, b), u.rotation = z * H, z && (b = b * (g = Math.cos(-z)) + T * (y = Math.sin(-z)), m = w * g + S * y, S = w * -y + S * g, C = _ * -y + C * g, w = m), u.rotationX && 359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), u.scaleX = (1e5 * Math.sqrt(b * b + w * w) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(S * S + A * A) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(C * C + P * P) + .5 | 0) / 1e5, u.rotationX || u.rotationY ? u.skewX = 0 : (u.skewX = T || S ? Math.atan2(T, S) * H + u.rotation : u.skewX || 0, 90 < Math.abs(u.skewX) && Math.abs(u.skewX) < 270 && (d ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180))), u.perspective = L ? 1 / (L < 0 ? -L : L) : 0, u.x = M, u.y = O, u.z = D, u.svg && (u.x -= u.xOrigin - (u.xOrigin * b - u.yOrigin * T), u.y -= u.yOrigin - (u.yOrigin * w - u.xOrigin * S))
                        } else if (!Ne || n || !s.length || u.x !== s[4] || u.y !== s[5] || !u.rotationX && !u.rotationY) {
                            var R = 6 <= s.length,
                                N = R ? s[0] : 1,
                                $ = s[1] || 0,
                                I = s[2] || 0,
                                F = R ? s[3] : 1;
                            u.x = s[4] || 0, u.y = s[5] || 0, a = Math.sqrt(N * N + $ * $), o = Math.sqrt(F * F + I * I), l = N || $ ? Math.atan2($, N) * H : u.rotation || 0, c = I || F ? Math.atan2(I, F) * H + l : u.skewX || 0, 90 < Math.abs(c) && Math.abs(c) < 270 && (d ? (a *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, c += c <= 0 ? 180 : -180)), u.scaleX = a, u.scaleY = o, u.rotation = l, u.skewX = c, Ne && (u.rotationX = u.rotationY = u.z = 0, u.perspective = p, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * N + u.yOrigin * I), u.y -= u.yOrigin - (u.xOrigin * $ + u.yOrigin * F))
                        }
                        for (r in u.zOrigin = h, u) u[r] < 2e-5 && -2e-5 < u[r] && (u[r] = 0)
                    }
                    return i && ((e._gsTransform = u).svg && (Ee && e.style[Le] ? j.delayedCall(.001, function() {
                        Ke(e.style, Le)
                    }) : !Ee && e.getAttribute("transform") && j.delayedCall(.001, function() {
                        e.removeAttribute("transform")
                    }))), u
                },
                We = function(e) {
                    var t, i, n = this.data,
                        s = -n.rotation * F,
                        r = s + n.skewX * F,
                        a = 1e5,
                        o = (Math.cos(s) * n.scaleX * a | 0) / a,
                        l = (Math.sin(s) * n.scaleX * a | 0) / a,
                        c = (Math.sin(r) * -n.scaleY * a | 0) / a,
                        u = (Math.cos(r) * n.scaleY * a | 0) / a,
                        d = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        i = l, l = -c, c = -i, t = h.filter, d.filter = "";
                        var p, f, m = this.t.offsetWidth,
                            v = this.t.offsetHeight,
                            g = "absolute" !== h.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                            b = n.x + m * n.xPercent / 100,
                            w = n.y + v * n.yPercent / 100;
                        if (null != n.ox && (b += (p = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (p * o + (f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2) * l), w += f - (p * c + f * u)), g ? y += ", Dx=" + ((p = m / 2) - (p * o + (f = v / 2) * l) + b) + ", Dy=" + (f - (p * c + f * u) + w) + ")" : y += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? d.filter = t.replace(z, y) : d.filter = y + " " + t, (0 === e || 1 === e) && 1 === o && 0 === l && 0 === c && 1 === u && (g && -1 === y.indexOf("Dx=0, Dy=0") || L.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && d.removeAttribute("filter")), !g) {
                            var _, x, T, S = k < 8 ? 1 : -1;
                            for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((o < 0 ? -o : o) * m + (l < 0 ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((u < 0 ? -u : u) * v + (c < 0 ? -c : c) * m)) / 2 + w), Te = 0; Te < 4; Te++) T = (i = -1 !== (_ = h[x = ae[Te]]).indexOf("px") ? parseFloat(_) : te(this.t, x, parseFloat(_), _.replace(D, "")) || 0) !== n[x] ? Te < 2 ? -n.ieOffsetX : -n.ieOffsetY : Te < 2 ? p - n.ieOffsetX : f - n.ieOffsetY, d[x] = (n[x] = Math.round(i - T * (0 === Te || 2 === Te ? 1 : S))) + "px"
                        }
                    }
                },
                Ue = s.set3DTransformRatio = s.setTransformRatio = function(e) {
                    var t, i, n, s, r, a, o, l, c, u, d, h, p, f, m, v, g, y, b, w, _, x, T, S = this.data,
                        C = this.t.style,
                        k = S.rotation,
                        E = S.rotationX,
                        A = S.rotationY,
                        P = S.scaleX,
                        M = S.scaleY,
                        O = S.scaleZ,
                        D = S.x,
                        L = S.y,
                        z = S.z,
                        R = S.svg,
                        N = S.perspective,
                        $ = S.force3D;
                    if (!((1 !== e && 0 !== e || "auto" !== $ || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && $ || z || N || A || E || 1 !== O) || Ee && R || !Ne) k || S.skewX || R ? (k *= F, x = S.skewX * F, T = 1e5, t = Math.cos(k) * P, s = Math.sin(k) * P, i = Math.sin(k - x) * -M, r = Math.cos(k - x) * M, x && "simple" === S.skewType && (g = Math.tan(x - S.skewY * F), i *= g = Math.sqrt(1 + g * g), r *= g, S.skewY && (g = Math.tan(S.skewY * F), t *= g = Math.sqrt(1 + g * g), s *= g)), R && (D += S.xOrigin - (S.xOrigin * t + S.yOrigin * i) + S.xOffset, L += S.yOrigin - (S.xOrigin * s + S.yOrigin * r) + S.yOffset, Ee && (S.xPercent || S.yPercent) && (f = this.t.getBBox(), D += .01 * S.xPercent * f.width, L += .01 * S.yPercent * f.height), D < (f = 1e-6) && -f < D && (D = 0), L < f && -f < L && (L = 0)), b = (t * T | 0) / T + "," + (s * T | 0) / T + "," + (i * T | 0) / T + "," + (r * T | 0) / T + "," + D + "," + L + ")", R && Ee ? this.t.setAttribute("transform", "matrix(" + b) : C[Le] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : C[Le] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + M + "," + D + "," + L + ")";
                    else {
                        if (I && (P < (f = 1e-4) && -f < P && (P = O = 2e-5), M < f && -f < M && (M = O = 2e-5), !N || S.z || S.rotationX || S.rotationY || (N = 0)), k || S.skewX) k *= F, m = t = Math.cos(k), v = s = Math.sin(k), S.skewX && (k -= S.skewX * F, m = Math.cos(k), v = Math.sin(k), "simple" === S.skewType && (g = Math.tan((S.skewX - S.skewY) * F), m *= g = Math.sqrt(1 + g * g), v *= g, S.skewY && (g = Math.tan(S.skewY * F), t *= g = Math.sqrt(1 + g * g), s *= g))), i = -v, r = m;
                        else {
                            if (!(A || E || 1 !== O || N || R)) return void(C[Le] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + L + "px," + z + "px)" + (1 !== P || 1 !== M ? " scale(" + P + "," + M + ")" : ""));
                            t = r = 1, i = s = 0
                        }
                        c = 1, n = a = o = l = u = d = 0, h = N ? -1 / N : 0, p = S.zOrigin, f = 1e-6, w = ",", _ = "0", (k = A * F) && (m = Math.cos(k), u = h * (o = -(v = Math.sin(k))), n = t * v, a = s * v, h *= c = m, t *= m, s *= m), (k = E * F) && (g = i * (m = Math.cos(k)) + n * (v = Math.sin(k)), y = r * m + a * v, l = c * v, d = h * v, n = i * -v + n * m, a = r * -v + a * m, c *= m, h *= m, i = g, r = y), 1 !== O && (n *= O, a *= O, c *= O, h *= O), 1 !== M && (i *= M, r *= M, l *= M, d *= M), 1 !== P && (t *= P, s *= P, o *= P, u *= P), (p || R) && (p && (D += n * -p, L += a * -p, z += c * -p + p), R && (D += S.xOrigin - (S.xOrigin * t + S.yOrigin * i) + S.xOffset, L += S.yOrigin - (S.xOrigin * s + S.yOrigin * r) + S.yOffset), D < f && -f < D && (D = _), L < f && -f < L && (L = _), z < f && -f < z && (z = 0)), b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", b += (t < f && -f < t ? _ : t) + w + (s < f && -f < s ? _ : s) + w + (o < f && -f < o ? _ : o), b += w + (u < f && -f < u ? _ : u) + w + (i < f && -f < i ? _ : i) + w + (r < f && -f < r ? _ : r), E || A || 1 !== O ? (b += w + (l < f && -f < l ? _ : l) + w + (d < f && -f < d ? _ : d) + w + (n < f && -f < n ? _ : n), b += w + (a < f && -f < a ? _ : a) + w + (c < f && -f < c ? _ : c) + w + (h < f && -f < h ? _ : h) + w) : b += ",0,0,0,0,1,0,", b += D + w + L + w + z + w + (N ? 1 + -z / N : 1) + ")", C[Le] = b
                    }
                };
            (e = $e.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, Ce("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, i, n, s, r, a) {
                    if (n._lastParsedTransform === a) return s;
                    var o;
                    "function" == typeof(n._lastParsedTransform = a)[i] && (o = a[i], a[i] = t);
                    var l, c, u, d, h, p, f, m, v, g = e._gsTransform,
                        y = e.style,
                        b = De.length,
                        w = a,
                        _ = {},
                        x = "transformOrigin",
                        T = Ve(e, C, !0, w.parseTransform),
                        S = w.transform && ("function" == typeof w.transform ? w.transform(P, A) : w.transform);
                    if (n._transform = T, S && "string" == typeof S && Le)(c = X.style)[Le] = S, c.display = "block", c.position = "absolute", q.body.appendChild(X), l = Ve(X, null, !1), T.svg && (p = T.xOrigin, f = T.yOrigin, l.x -= T.xOffset, l.y -= T.yOffset, (w.transformOrigin || w.svgOrigin) && (S = {}, He(e, le(w.transformOrigin), S, w.svgOrigin, w.smoothOrigin, !0), p = S.xOrigin, f = S.yOrigin, l.x -= S.xOffset - T.xOffset, l.y -= S.yOffset - T.yOffset), (p || f) && (m = Ye(X, !0), l.x -= p - (p * m[0] + f * m[2]), l.y -= f - (p * m[1] + f * m[3]))), q.body.removeChild(X), l.perspective || (l.perspective = T.perspective), null != w.xPercent && (l.xPercent = ue(w.xPercent, T.xPercent)), null != w.yPercent && (l.yPercent = ue(w.yPercent, T.yPercent));
                    else if ("object" == typeof w) {
                        if (l = {
                                scaleX: ue(null != w.scaleX ? w.scaleX : w.scale, T.scaleX),
                                scaleY: ue(null != w.scaleY ? w.scaleY : w.scale, T.scaleY),
                                scaleZ: ue(w.scaleZ, T.scaleZ),
                                x: ue(w.x, T.x),
                                y: ue(w.y, T.y),
                                z: ue(w.z, T.z),
                                xPercent: ue(w.xPercent, T.xPercent),
                                yPercent: ue(w.yPercent, T.yPercent),
                                perspective: ue(w.transformPerspective, T.perspective)
                            }, null != (h = w.directionalRotation))
                            if ("object" == typeof h)
                                for (c in h) w[c] = h[c];
                            else w.rotation = h;
                        "string" == typeof w.x && -1 !== w.x.indexOf("%") && (l.x = 0, l.xPercent = ue(w.x, T.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (l.y = 0, l.yPercent = ue(w.y, T.yPercent)), l.rotation = de("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : T.rotation - T.skewY, T.rotation - T.skewY, "rotation", _), Ne && (l.rotationX = de("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : T.rotationX || 0, T.rotationX, "rotationX", _), l.rotationY = de("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : T.rotationY || 0, T.rotationY, "rotationY", _)), l.skewX = de(w.skewX, T.skewX - T.skewY), (l.skewY = de(w.skewY, T.skewY)) && (l.skewX += l.skewY, l.rotation += l.skewY)
                    }
                    for (Ne && null != w.force3D && (T.force3D = w.force3D, d = !0), T.skewType = w.skewType || T.skewType || B.defaultSkewType, (u = T.force3D || T.z || T.rotationX || T.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == w.scale || (l.scaleZ = 1); - 1 < --b;)(1e-6 < (S = l[v = De[b]] - T[v]) || S < -1e-6 || null != w[v] || null != $[v]) && (d = !0, s = new we(T, v, T[v], S, s), v in _ && (s.e = _[v]), s.xs0 = 0, s.plugin = r, n._overwriteProps.push(s.n));
                    return S = w.transformOrigin, T.svg && (S || w.svgOrigin) && (p = T.xOffset, f = T.yOffset, He(e, le(S), l, w.svgOrigin, w.smoothOrigin), s = _e(T, "xOrigin", (g ? T : l).xOrigin, l.xOrigin, s, x), s = _e(T, "yOrigin", (g ? T : l).yOrigin, l.yOrigin, s, x), (p !== T.xOffset || f !== T.yOffset) && (s = _e(T, "xOffset", g ? p : T.xOffset, T.xOffset, s, x), s = _e(T, "yOffset", g ? f : T.yOffset, T.yOffset, s, x)), S = Ee ? null : "0px 0px"), (S || Ne && u && T.zOrigin) && (Le ? (d = !0, v = Re, S = (S || ee(e, v, C, !1, "50% 50%")) + "", (s = new we(y, v, 0, 0, s, -1, x)).b = y[v], s.plugin = r, s.xs0 = s.e = Ne ? (c = T.zOrigin, S = S.split(" "), T.zOrigin = (2 < S.length && (0 === c || "0px" !== S[2]) ? parseFloat(S[2]) : c) || 0, s.xs0 = s.e = S[0] + " " + (S[1] || "50%") + " 0px", (s = new we(T, "zOrigin", 0, 0, s, -1, s.n)).b = c, T.zOrigin) : S) : le(S + "", T)), d && (n._transformType = T.svg && Ee || !u && 3 !== this._transformType ? 2 : 3), o && (a[i] = o), s
                },
                prefix: !0
            }), Ce("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Ce("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, n, s, r) {
                    t = this.format(t);
                    var a, o, l, c, u, d, h, p, f, m, v, g, y, b, w, _, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        T = e.style;
                    for (f = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), a = t.split(" "), o = 0; o < x.length; o++) this.p.indexOf("border") && (x[o] = J(x[o])), -1 !== (u = c = ee(e, x[o], C, !1, "0px")).indexOf(" ") && (u = (c = u.split(" "))[0], c = c[1]), d = l = a[o], h = parseFloat(u), g = u.substr((h + "").length), "" === (v = (y = "=" === d.charAt(1)) ? (p = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), p *= parseFloat(d), d.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(d), d.substr((p + "").length))) && (v = S[i] || g), v !== g && (b = te(e, "borderLeft", h, g), w = te(e, "borderTop", h, g), c = "%" === v ? (u = b / f * 100 + "%", w / m * 100 + "%") : "em" === v ? (u = b / (_ = te(e, "borderLeft", 1, "em")) + "em", w / _ + "em") : (u = b + "px", w + "px"), y && (d = parseFloat(u) + p + v, l = parseFloat(c) + p + v)), s = xe(T, x[o], u + " " + c, d + " " + l, !1, "0px", s);
                    return s
                },
                prefix: !0,
                formatter: ge("0px 0px 0px 0px", !1, !0)
            }), Ce("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, n, s, r) {
                    return xe(e.style, i, this.format(ee(e, i, C, !1, "0px 0px")), this.format(t), !1, "0px", s)
                },
                prefix: !0,
                formatter: ge("0px 0px", !1, !0)
            }), Ce("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, i, n, s, r) {
                    var a, o, l, c, u, d, h = "background-position",
                        p = C || Z(e, null),
                        f = this.format((p ? k ? p.getPropertyValue(h + "-x") + " " + p.getPropertyValue(h + "-y") : p.getPropertyValue(h) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(t);
                    if (-1 !== f.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((d = ee(e, "backgroundImage").replace(T, "")) && "none" !== d)) {
                        for (a = f.split(" "), o = m.split(" "), Y.setAttribute("src", d), l = 2; - 1 < --l;)(c = -1 !== (f = a[l]).indexOf("%")) !== (-1 !== o[l].indexOf("%")) && (u = 0 === l ? e.offsetWidth - Y.width : e.offsetHeight - Y.height, a[l] = c ? parseFloat(f) / 100 * u + "px" : parseFloat(f) / u * 100 + "%");
                        f = a.join(" ")
                    }
                    return this.parseComplex(e.style, f, m, s, r)
                },
                formatter: le
            }), Ce("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(e) {
                    return le(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
                }
            }), Ce("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Ce("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Ce("transformStyle", {
                prefix: !0
            }), Ce("backfaceVisibility", {
                prefix: !0
            }), Ce("userSelect", {
                prefix: !0
            }), Ce("margin", {
                parser: ye("marginTop,marginRight,marginBottom,marginLeft")
            }), Ce("padding", {
                parser: ye("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Ce("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, i, n, s, r) {
                    var a, o, l;
                    return t = k < 9 ? (o = e.currentStyle, l = k < 8 ? " " : ",", a = "rect(" + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ")", this.format(t).split(",").join(l)) : (a = this.format(ee(e, this.p, C, !1, this.dflt)), this.format(t)), this.parseComplex(e.style, a, t, s, r)
                }
            }), Ce("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Ce("autoRound,strictUnits", {
                parser: function(e, t, i, n, s) {
                    return s
                }
            }), Ce("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, i, n, s, r) {
                    var a = ee(e, "borderTopWidth", C, !1, "0px"),
                        o = this.format(t).split(" "),
                        l = o[0].replace(D, "");
                    return "px" !== l && (a = parseFloat(a) / te(e, "borderTopWidth", 1, l) + l), this.parseComplex(e.style, this.format(a + " " + ee(e, "borderTopStyle", C, !1, "solid") + " " + ee(e, "borderTopColor", C, !1, "#000")), o.join(" "), s, r)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(ve) || ["#000"])[0]
                }
            }), Ce("borderWidth", {
                parser: ye("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Ce("float,cssFloat,styleFloat", {
                parser: function(e, t, i, n, s, r) {
                    var a = e.style,
                        o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                    return new we(a, o, 0, 0, s, -1, i, !1, 0, a[o], t)
                }
            });
            var Ge = function(e) {
                var t, i = this.t,
                    n = i.filter || ee(this.data, "filter") || "",
                    s = this.s + this.c * e | 0;
                100 === s && (t = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), !ee(this.data, "filter")) : (i.filter = n.replace(a, ""), !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(L, "opacity=" + s))
            };
            Ce("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, i, n, s, r) {
                    var a = parseFloat(ee(e, "opacity", C, !1, "1")),
                        o = e.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), l && 1 === a && "hidden" === ee(e, "visibility", C) && 0 !== t && (a = 0), W ? s = new we(o, "opacity", a, t - a, s) : ((s = new we(o, "opacity", 100 * a, 100 * (t - a), s)).xn1 = l ? 1 : 0, o.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = r, s.setRatio = Ge), l && ((s = new we(o, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                }
            });
            var Ke = function(e, t) {
                    t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(o, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                Qe = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ke(i, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Ce("className", {
                parser: function(e, t, i, n, s, r, a) {
                    var o, l, c, u, d, h = e.getAttribute("class") || "",
                        p = e.style.cssText;
                    if ((s = n._classNamePT = new we(e, i, 0, 0, s, 2)).setRatio = Qe, s.pr = -11, f = !0, s.b = h, l = ne(e, C), c = e._gsClassPT) {
                        for (u = {}, d = c.data; d;) u[d.p] = 1, d = d._next;
                        c.setRatio(1)
                    }
                    return (e._gsClassPT = s).e = "=" !== t.charAt(1) ? t : h.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", s.e), o = se(e, l, ne(e), a, u), e.setAttribute("class", h), s.data = o.firstMPT, e.style.cssText = p, s.xfirst = n.parse(e, o.difs, s, r)
                }
            });
            var Je = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, i, n, s, r, a = this.t.style,
                        o = v.transform.parse;
                    if ("all" === this.e) s = !(a.cssText = "");
                    else
                        for (n = (t = this.e.split(" ").join("").split(",")).length; - 1 < --n;) i = t[n], v[i] && (v[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Re : v[i].p), Ke(a, i);
                    s && (Ke(a, Le), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Ce("clearProps", {
                    parser: function(e, t, i, n, s) {
                        return (s = new we(e, i, 0, 0, s, 2)).setRatio = Je, s.e = t, s.pr = -10, s.data = n._tween, f = !0, s
                    }
                }), e = "bezier,throwProps,physicsProps,physics2D".split(","), Te = e.length; Te--;) ke(e[Te]);
            (e = B.prototype)._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function(e, t, i, n) {
                if (!e.nodeType) return !1;
                this._target = A = e, this._tween = i, this._vars = t, P = n, E = t.autoRound, f = !1, S = t.suffixMap || B.suffixMap, C = Z(e, ""), m = this._overwriteProps;
                var s, r, a, o, l, c, u, d, h, p = e.style;
                if (g && "" === p.zIndex && (("auto" === (s = ee(e, "zIndex", C)) || "" === s) && this._addLazySet(p, "zIndex", 0)), "string" == typeof t && (o = p.cssText, s = ne(e, C), p.cssText = o + ";" + t, s = se(e, s, ne(e)).difs, !W && _.test(t) && (s.opacity = parseFloat(RegExp.$1)), t = s, p.cssText = o), t.className ? this._firstPT = r = v.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = r = this.parse(e, t, null), this._transformType) {
                    for (h = 3 === this._transformType, Le ? y && (g = !0, "" === p.zIndex && (("auto" === (u = ee(e, "zIndex", C)) || "" === u) && this._addLazySet(p, "zIndex", 0)), b && this._addLazySet(p, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : p.zoom = 1, a = r; a && a._next;) a = a._next;
                    d = new we(e, "transform", 0, 0, null, 2), this._linkCSSP(d, null, a), d.setRatio = Le ? Ue : We, d.data = this._transform || Ve(e, C, !0), d.tween = i, d.pr = -1, m.pop()
                }
                if (f) {
                    for (; r;) {
                        for (c = r._next, a = o; a && a.pr > r.pr;) a = a._next;
                        (r._prev = a ? a._prev : l) ? r._prev._next = r: o = r, (r._next = a) ? a._prev = r : l = r, r = c
                    }
                    this._firstPT = o
                }
                return !0
            }, e.parse = function(e, t, i, n) {
                var s, r, a, o, l, c, u, d, h, p, f = e.style;
                for (s in t) "function" == typeof(c = t[s]) && (c = c(P, A)), (r = v[s]) ? i = r.parse(e, c, s, this, i, n, t) : (l = ee(e, s, C) + "", h = "string" == typeof c, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || h && x.test(c) ? (h || (c = (3 < (c = fe(c)).length ? "rgba(" : "rgb(") + c.join(",") + ")"), i = xe(f, s, l, c, !0, "transparent", i, 0, n)) : h && N.test(c) ? i = xe(f, s, l, c, !0, null, i, 0, n) : (u = (a = parseFloat(l)) || 0 === a ? l.substr((a + "").length) : "", ("" === l || "auto" === l) && (u = "width" === s || "height" === s ? (a = oe(e, s, C), "px") : "left" === s || "top" === s ? (a = ie(e, s, C), "px") : (a = "opacity" !== s ? 0 : 1, "")), "" === (d = (p = h && "=" === c.charAt(1)) ? (o = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), o *= parseFloat(c), c.replace(D, "")) : (o = parseFloat(c), h ? c.replace(D, "") : "")) && (d = s in S ? S[s] : u), c = o || 0 === o ? (p ? o + a : o) + d : t[s], u !== d && "" !== d && (o || 0 === o) && a && (a = te(e, s, a, u), "%" === d ? (a /= te(e, s, 100, "%") / 100, !0 !== t.strictUnits && (l = a + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? a /= te(e, s, 1, d) : "px" !== d && (o = te(e, s, o, d), d = "px"), p && (o || 0 === o) && (c = o + a + d)), p && (o += a), !a && 0 !== a || !o && 0 !== o ? void 0 !== f[s] && (c || c + "" != "NaN" && null != c) ? (i = new we(f, s, o || a || 0, 0, i, -1, s, !1, 0, l, c)).xs0 = "none" !== c || "display" !== s && -1 === s.indexOf("Style") ? c : l : G("invalid " + s + " tween value: " + t[s]) : (i = new we(f, s, a, o - a, i, 0, s, !1 !== E && ("px" === d || "zIndex" === s), 0, l, c)).xs0 = d)), n && i && !i.plugin && (i.plugin = n);
                return i
            }, e.setRatio = function(e) {
                var t, i, n, s = this._firstPT;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; s;) {
                            if (t = s.c * e + s.s, s.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), s.type)
                                if (1 === s.type)
                                    if (2 === (n = s.l)) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2;
                                    else if (3 === n) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                            else if (4 === n) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                            else if (5 === n) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                            else {
                                for (i = s.xs0 + t + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                s.t[s.p] = i
                            } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(e);
                            else s.t[s.p] = t + s.xs0;
                            s = s._next
                        } else
                            for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(e), s = s._next;
                    else
                        for (; s;) {
                            if (2 !== s.type)
                                if (s.r && -1 !== s.type)
                                    if (t = Math.round(s.s + s.c), s.type) {
                                        if (1 === s.type) {
                                            for (n = s.l, i = s.xs0 + t + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                            s.t[s.p] = i
                                        }
                                    } else s.t[s.p] = t + s.xs0;
                            else s.t[s.p] = s.e;
                            else s.setRatio(e);
                            s = s._next
                        }
            }, e._enableTransforms = function(e) {
                this._transform = this._transform || Ve(this._target, C, !0), this._transformType = this._transform.svg && Ee || !e && 3 !== this._transformType ? 2 : 3
            };
            var Ze = function(e) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            e._addLazySet = function(e, t, i) {
                var n = this._firstPT = new we(e, t, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Ze, n.data = this
            }, e._linkCSSP = function(e, t, i, n) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
            }, e._mod = function(e) {
                for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
            }, e._kill = function(e) {
                var t, i, n, s = e;
                if (e.autoAlpha || e.alpha) {
                    for (i in s = {}, e) s[i] = e[i];
                    s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                }
                for (e.className && (t = this._classNamePT) && ((n = t.xfirst) && n._prev ? this._linkCSSP(n._prev, t._next, n._prev._prev) : n === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, n._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== i && t.plugin._kill && (t.plugin._kill(e), i = t.plugin), t = t._next;
                return r.prototype._kill.call(this, s)
            };
            var et = function(e, t, i) {
                var n, s, r, a;
                if (e.slice)
                    for (s = e.length; - 1 < --s;) et(e[s], t, i);
                else
                    for (s = (n = e.childNodes).length; - 1 < --s;) a = (r = n[s]).type, r.style && (t.push(ne(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || et(r, t, i)
            };
            return B.cascadeTo = function(e, t, i) {
                var n, s, r, a, o = j.to(e, t, i),
                    l = [o],
                    c = [],
                    u = [],
                    d = [],
                    h = j._internals.reservedProps;
                for (e = o._targets || o.target, et(e, c, d), o.render(t, !0, !0), et(e, u), o.render(0, !0, !0), o._enabled(!0), n = d.length; - 1 < --n;)
                    if ((s = se(d[n], c[n], u[n])).firstMPT) {
                        for (r in s = s.difs, i) h[r] && (s[r] = i[r]);
                        for (r in a = {}, s) a[r] = c[n][r];
                        l.push(j.fromTo(d[n], t, a, s))
                    }
                return l
            }, r.activate([B]), B
        }, !0), e = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function(e, t, i) {
                return this._tween = i, !0
            }
        }), l = function(e) {
            for (; e;) e.f || e.blob || (e.m = Math.round), e = e._next
        }, (t = e.prototype)._onInitAllProps = function() {
            for (var e, t, i, n = this._tween, s = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), r = s.length, a = {}, o = n._propLookup.roundProps; - 1 < --r;) a[s[r]] = Math.round;
            for (r = s.length; - 1 < --r;)
                for (e = s[r], t = n._firstPT; t;) i = t._next, t.pg ? t.t._mod(a) : t.n === e && (2 === t.f && t.t ? l(t.t._firstPT) : (this._add(t.t, e, t.s, t.c), i && (i._prev = t._prev), t._prev ? t._prev._next = i : n._firstPT === t && (n._firstPT = i), t._next = t._prev = null, n._propLookup[e] = o)), t = i;
            return !1
        }, t._add = function(e, t, i, n) {
            this._addTween(e, t, i, i + n, t, Math.round), this._overwriteProps.push(t)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.0",
            init: function(e, t, i, n) {
                var s, r;
                if ("function" != typeof e.setAttribute) return !1;
                for (s in t) "function" == typeof(r = t[s]) && (r = r(n, e)), this._addTween(e, "setAttribute", e.getAttribute(s) + "", r + "", s, !1, s), this._overwriteProps.push(s);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.0",
            API: 2,
            init: function(e, t, i, n) {
                "object" != typeof t && (t = {
                    rotation: t
                }), this.finals = {};
                var s, r, a, o, l, c, u = !0 === t.useRadians ? 2 * Math.PI : 360;
                for (s in t) "useRadians" !== s && ("function" == typeof(o = t[s]) && (o = o(n, e)), r = (c = (o + "").split("_"))[0], a = parseFloat("function" != typeof e[s] ? e[s] : e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), l = (o = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? a + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - a, c.length && (-1 !== (r = c.join("_")).indexOf("short") && ((l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u)), -1 !== r.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== r.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (1e-6 < l || l < -1e-6) && (this._addTween(e, s, a, a + l, s), this._overwriteProps.push(s)));
                return !0
            },
            set: function(e) {
                var t;
                if (1 !== e) this._super.setRatio.call(this, e);
                else
                    for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(v) {
            var t, i, e, n = _gsScope.GreenSockGlobals || _gsScope,
                s = n.com.greensock,
                r = 2 * Math.PI,
                a = Math.PI / 2,
                o = s._class,
                l = function(e, t) {
                    var i = o("easing." + e, function() {}, !0),
                        n = i.prototype = new v;
                    return n.constructor = i, n.getRatio = t, i
                },
                c = v.register || function() {},
                u = function(e, t, i, n, s) {
                    var r = o("easing." + e, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return c(r, e), r
                },
                g = function(e, t, i) {
                    this.t = e, this.v = t, i && (((this.next = i).prev = this).c = i.v - t, this.gap = i.t - e)
                },
                d = function(e, t) {
                    var i = o("easing." + e, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = i.prototype = new v;
                    return n.constructor = i, n.getRatio = t, n.config = function(e) {
                        return new i(e)
                    }, i
                },
                h = u("Back", d("BackOut", function(e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), d("BackIn", function(e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), d("BackInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                p = o("easing.SlowMo", function(e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                f = p.prototype = new v;
            return f.constructor = p, f.getRatio = function(e) {
                var t = e + (.5 - e) * this._p;
                return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, p.ease = new p(.7, .7), f.config = p.config = function(e, t, i) {
                return new p(e, t, i)
            }, (f = (t = o("easing.SteppedEase", function(e) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
            }, !0)).prototype = new v).constructor = t, f.getRatio = function(e) {
                return e < 0 ? e = 0 : 1 <= e && (e = .999999999), (this._p2 * e >> 0) * this._p1
            }, f.config = t.config = function(e) {
                return new t(e)
            }, (f = (i = o("easing.RoughEase", function(e) {
                for (var t, i, n, s, r, a, o = (e = e || {}).taper || "none", l = [], c = 0, u = 0 | (e.points || 20), d = u, h = !1 !== e.randomize, p = !0 === e.clamp, f = e.template instanceof v ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; - 1 < --d;) t = h ? Math.random() : 1 / u * d, i = f ? f.getRatio(t) : t, n = "none" === o ? m : "out" === o ? (s = 1 - t) * s * m : "in" === o ? t * t * m : (s = t < .5 ? 2 * t : 2 * (1 - t)) * s * .5 * m, h ? i += Math.random() * n - .5 * n : d % 2 ? i += .5 * n : i -= .5 * n, p && (1 < i ? i = 1 : i < 0 && (i = 0)), l[c++] = {
                    x: t,
                    y: i
                };
                for (l.sort(function(e, t) {
                        return e.x - t.x
                    }), a = new g(1, 1, null), d = u; - 1 < --d;) r = l[d], a = new g(r.x, r.y, a);
                this._prev = new g(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new v).constructor = i, f.getRatio = function(e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && e <= t.t;) t = t.prev;
                return (this._prev = t).v + (e - t.t) / t.gap * t.c
            }, f.config = function(e) {
                return new i(e)
            }, i.ease = new i, u("Bounce", l("BounceOut", function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), l("BounceIn", function(e) {
                return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), l("BounceInOut", function(e) {
                var t = e < .5;
                return e = (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), u("Circ", l("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), l("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), l("CircInOut", function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), u("Elastic", (e = function(e, t, i) {
                var n = o("easing." + e, function(e, t) {
                        this._p1 = 1 <= e ? e : 1, this._p2 = (t || i) / (e < 1 ? e : 1), this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0), this._p2 = r / this._p2
                    }, !0),
                    s = n.prototype = new v;
                return s.constructor = n, s.getRatio = t, s.config = function(e, t) {
                    return new n(e, t)
                }, n
            })("ElasticOut", function(e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), e("ElasticIn", function(e) {
                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
            }, .3), e("ElasticInOut", function(e) {
                return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
            }, .45)), u("Expo", l("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e)
            }), l("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), l("ExpoInOut", function(e) {
                return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), u("Sine", l("SineOut", function(e) {
                return Math.sin(e * a)
            }), l("SineIn", function(e) {
                return 1 - Math.cos(e * a)
            }), l("SineInOut", function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), o("easing.EaseLookup", {
                find: function(e) {
                    return v.map[e]
                }
            }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), h
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(p, f) {
        "use strict";
        var t, i, m = {},
            v = p.GreenSockGlobals = p.GreenSockGlobals || p;
        if (!v.TweenLite) {
            var e, n, s, g, y, b = function(e) {
                    var t, i = e.split("."),
                        n = v;
                    for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
                    return n
                },
                d = b("com.greensock"),
                w = 1e-10,
                l = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                _ = function() {},
                x = (t = Object.prototype.toString, i = t.call([]), function(e) {
                    return null != e && (e instanceof Array || "object" == typeof e && !!e.push && t.call(e) === i)
                }),
                T = {},
                S = function(l, c, u, d) {
                    this.sc = T[l] ? T[l].sc : [], (T[l] = this).gsClass = null, this.func = u;
                    var h = [];
                    this.check = function(e) {
                        for (var t, i, n, s, r, a = c.length, o = a; - 1 < --a;)(t = T[c[a]] || new S(c[a], [])).gsClass ? (h[a] = t.gsClass, o--) : e && t.sc.push(this);
                        if (0 === o && u) {
                            if (n = (i = ("com.greensock." + l).split(".")).pop(), s = b(i.join("."))[n] = this.gsClass = u.apply(u, h), d)
                                if (v[n] = m[n] = s, !(r = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + l.split(".").pop(), [], function() {
                                    return s
                                });
                                else if (r)
                                if (l === f)
                                    for (a in module.exports = m[f] = s, m) s[a] = m[a];
                                else m[f] && (m[f][n] = s);
                            for (a = 0; a < this.sc.length; a++) this.sc[a].check()
                        }
                    }, this.check(!0)
                },
                r = p._gsDefine = function(e, t, i, n) {
                    return new S(e, t, i, n)
                },
                h = d._class = function(e, t, i) {
                    return t = t || function() {}, r(e, [], function() {
                        return t
                    }, i), t
                };
            r.globals = v;
            var a = [0, 0, 1, 1],
                C = h("easing.Ease", function(e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? a.concat(t) : a
                }, !0),
                k = C.map = {},
                o = C.register = function(e, t, i, n) {
                    for (var s, r, a, o, l = t.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --c;)
                        for (r = l[c], s = n ? h("easing." + r, null, !0) : d.easing[r] || {}, a = u.length; - 1 < --a;) o = u[a], k[r + "." + o] = k[o + r] = s[o] = e.getRatio ? e : e[o] || new e
                };
            for ((s = C.prototype)._calcEnd = !1, s.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : e < .5 ? n / 2 : 1 - n / 2
                }, n = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --n;) s = e[n] + ",Power" + n, o(new C(null, null, 1, n), s, "easeOut", !0), o(new C(null, null, 2, n), s, "easeIn" + (0 === n ? ",easeNone" : "")), o(new C(null, null, 3, n), s, "easeInOut");
            k.linear = d.easing.Linear.easeIn, k.swing = d.easing.Quad.easeInOut;
            var E = h("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            (s = E.prototype).addEventListener = function(e, t, i, n, s) {
                s = s || 0;
                var r, a, o = this._listeners[e],
                    l = 0;
                for (this !== g || y || g.wake(), null == o && (this._listeners[e] = o = []), a = o.length; - 1 < --a;)(r = o[a]).c === t && r.s === i ? o.splice(a, 1) : 0 === l && r.pr < s && (l = a + 1);
                o.splice(l, 0, {
                    c: t,
                    s: i,
                    up: n,
                    pr: s
                })
            }, s.removeEventListener = function(e, t) {
                var i, n = this._listeners[e];
                if (n)
                    for (i = n.length; - 1 < --i;)
                        if (n[i].c === t) return void n.splice(i, 1)
            }, s.dispatchEvent = function(e) {
                var t, i, n, s = this._listeners[e];
                if (s)
                    for (1 < (t = s.length) && (s = s.slice(0)), i = this._eventTarget; - 1 < --t;)(n = s[t]) && (n.up ? n.c.call(n.s || i, {
                        type: e,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var A = p.requestAnimationFrame,
                P = p.cancelAnimationFrame,
                M = Date.now || function() {
                    return (new Date).getTime()
                },
                O = M();
            for (n = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --n && !A;) A = p[e[n] + "RequestAnimationFrame"], P = p[e[n] + "CancelAnimationFrame"] || p[e[n] + "CancelRequestAnimationFrame"];
            h("Ticker", function(e, t) {
                var s, r, a, o, l, c = this,
                    u = M(),
                    i = !(!1 === t || !A) && "auto",
                    d = 500,
                    h = 33,
                    p = function(e) {
                        var t, i, n = M() - O;
                        d < n && (u += n - h), O += n, c.time = (O - u) / 1e3, t = c.time - l, (!s || 0 < t || !0 === e) && (c.frame++, l += t + (o <= t ? .004 : o - t), i = !0), !0 !== e && (a = r(p)), i && c.dispatchEvent("tick")
                    };
                E.call(c), c.time = c.frame = 0, c.tick = function() {
                    p(!0)
                }, c.lagSmoothing = function(e, t) {
                    d = e || 1e10, h = Math.min(t, d, 0)
                }, c.sleep = function() {
                    null != a && (i && P ? P(a) : clearTimeout(a), r = _, a = null, c === g && (y = !1))
                }, c.wake = function(e) {
                    null !== a ? c.sleep() : e ? u += -O + (O = M()) : 10 < c.frame && (O = M() - d + 5), r = 0 === s ? _ : i && A ? A : function(e) {
                        return setTimeout(e, 1e3 * (l - c.time) + 1 | 0)
                    }, c === g && (y = !0), p(2)
                }, c.fps = function(e) {
                    return arguments.length ? (o = 1 / ((s = e) || 60), l = this.time + o, void c.wake()) : s
                }, c.useRAF = function(e) {
                    return arguments.length ? (c.sleep(), i = e, void c.fps(s)) : i
                }, c.fps(e), setTimeout(function() {
                    "auto" === i && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
                }, 1500)
            }), (s = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;
            var c = h("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, U) {
                    y || g.wake();
                    var i = this.vars.useFrames ? W : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            g = c.ticker = new d.Ticker, (s = c.prototype)._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var u = function() {
                y && 2e3 < M() - O && g.wake(), setTimeout(u, 2e3)
            };
            u(), s.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, s.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, s.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, s.seek = function(e, t) {
                return this.totalTime(Number(e), !1 !== t)
            }, s.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
            }, s.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, s.render = function(e, t, i) {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() / this._timeScale
            }, s._enabled = function(e, t) {
                return y || g.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function(e, t) {
                return this._enabled(!1, !1)
            }, s.kill = function(e, t) {
                return this._kill(e, t), this
            }, s._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, s._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); - 1 < --t;) "{self}" === e[t] && (i[t] = this);
                return i
            }, s._callback = function(e) {
                var t = this.vars,
                    i = t[e],
                    n = t[e + "Params"],
                    s = t[e + "Scope"] || t.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(s);
                        break;
                    case 1:
                        i.call(s, n[0]);
                        break;
                    case 2:
                        i.call(s, n[0], n[1]);
                        break;
                    default:
                        i.apply(s, n)
                }
            }, s.eventCallback = function(e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[e];
                    null == t ? delete s[e] : (s[e] = t, s[e + "Params"] = x(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, s.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, s.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, s.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, s.totalTime = function(e, t, i) {
                if (y || g.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (e < 0 && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (n < e && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - e : e) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (R.length && K(), this.render(e, t, !1), R.length && K())
                }
                return this
            }, s.progress = s.totalProgress = function(e, t) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
            }, s.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, s.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || w, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, s.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, i, n = this._timeline;
                return e != this._paused && n && (y || e || g.wake(), i = (t = n.rawTime()) - this._pauseTime, !e && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
            };
            var D = h("core.SimpleTimeline", function(e) {
                c.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (s = D.prototype = new c).constructor = D, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(e, t, i, n) {
                var s, r;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), s = this._last, this._sortChildren)
                    for (r = e._startTime; s && s._startTime > r;) s = s._prev;
                return s ? (e._next = s._next, s._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = s, this._recent = e, this._timeline && this._uncache(!0), this
            }, s._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(e, t, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; s;) n = s._next, (s._active || e >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, i) : s.render((e - s._startTime) * s._timeScale, t, i)), s = n
            }, s.rawTime = function() {
                return y || g.wake(), this._totalTime
            };
            var L = h("TweenLite", function(e, t, i) {
                    if (c.call(this, t, i), this.render = L.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : L.selector(e) || e;
                    var n, s, r, a = e.jquery || e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType),
                        o = this.vars.overwrite;
                    if (this._overwrite = o = null == o ? V[L.defaultOverwrite] : "number" == typeof o ? o >> 0 : V[o], (a || e instanceof Array || e.push && x(e)) && "number" != typeof e[0])
                        for (this._targets = r = l(e), this._propLookup = [], this._siblings = [], n = 0; n < r.length; n++)(s = r[n]) ? "string" != typeof s ? s.length && s !== p && s[0] && (s[0] === p || s[0].nodeType && s[0].style && !s.nodeType) ? (r.splice(n--, 1), this._targets = r = r.concat(l(s))) : (this._siblings[n] = Q(s, this, !1), 1 === o && 1 < this._siblings[n].length && Z(s, this, null, 1, this._siblings[n])) : "string" == typeof(s = r[n--] = L.selector(s)) && r.splice(n + 1, 1) : r.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === o && 1 < this._siblings.length && Z(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -w, this.render(Math.min(0, -this._delay)))
                }, !0),
                z = function(e) {
                    return e && e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (s = L.prototype = new c).constructor = L, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, L.version = "1.19.0", L.defaultEase = s._ease = new C(null, null, 1, 1), L.defaultOverwrite = "auto", L.ticker = g, L.autoSleep = 120, L.lagSmoothing = function(e, t) {
                g.lagSmoothing(e, t)
            }, L.selector = p.$ || p.jQuery || function(e) {
                var t = p.$ || p.jQuery;
                return t ? (L.selector = t)(e) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var R = [],
                N = {},
                $ = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                I = function(e) {
                    for (var t, i = this._firstPT; i;) t = i.blob ? e ? this.join("") : this.start : i.c * e + i.s, i.m ? t = i.m(t, this._target || i.t) : t < 1e-6 && -1e-6 < t && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
                },
                F = function(e, t, i, n) {
                    var s, r, a, o, l, c, u, d = [e, t],
                        h = 0,
                        p = "",
                        f = 0;
                    for (d.start = e, i && (i(d), e = d[0], t = d[1]), d.length = 0, s = e.match($) || [], r = t.match($) || [], n && (n._next = null, n.blob = 1, d._firstPT = d._applyPT = n), l = r.length, o = 0; o < l; o++) u = r[o], p += (c = t.substr(h, t.indexOf(u, h) - h)) || !o ? c : ",", h += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), u === s[o] || s.length <= o ? p += u : (p && (d.push(p), p = ""), a = parseFloat(s[o]), d.push(a), d._firstPT = {
                        _next: d._firstPT,
                        t: d,
                        p: d.length - 1,
                        s: a,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                        f: 0,
                        m: f && f < 4 ? Math.round : 0
                    }), h += u.length;
                    return (p += t.substr(h)) && d.push(p), d.setRatio = I, d
                },
                j = function(e, t, i, n, s, r, a, o, l) {
                    "function" == typeof n && (n = n(l || 0, e));
                    var c, u = "get" === i ? e[t] : i,
                        d = typeof e[t],
                        h = "string" == typeof n && "=" === n.charAt(1),
                        p = {
                            t: e,
                            p: t,
                            s: u,
                            f: "function" === d,
                            pg: 0,
                            n: s || t,
                            m: r ? "function" == typeof r ? r : Math.round : 0,
                            pr: 0,
                            c: h ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0
                        };
                    return "number" !== d && ("function" === d && "get" === i && (c = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), p.s = u = a ? e[c](a) : e[c]()), "string" == typeof u && (a || isNaN(u)) ? (p.fp = a, p = {
                        t: F(u, n, o || L.defaultStringFilter, p),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || t,
                        pr: 0,
                        m: 0
                    }) : h || (p.s = parseFloat(u), p.c = parseFloat(n) - p.s || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p) : void 0
                },
                B = L._internals = {
                    isArray: x,
                    isSelector: z,
                    lazyTweens: R,
                    blobDif: F
                },
                H = L._plugins = {},
                q = B.tweenLookup = {},
                X = 0,
                Y = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                V = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                W = c._rootFramesTimeline = new D,
                U = c._rootTimeline = new D,
                G = 30,
                K = B.lazyRender = function() {
                    var e, t = R.length;
                    for (N = {}; - 1 < --t;)(e = R[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    R.length = 0
                };
            U._startTime = g.time, W._startTime = g.frame, U._active = W._active = !0, setTimeout(K, 1), c._updateRoot = L.render = function() {
                var e, t, i;
                if (R.length && K(), U.render((g.time - U._startTime) * U._timeScale, !1, !1), W.render((g.frame - W._startTime) * W._timeScale, !1, !1), R.length && K(), g.frame >= G) {
                    for (i in G = g.frame + (parseInt(L.autoSleep, 10) || 120), q) {
                        for (e = (t = q[i].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete q[i]
                    }
                    if ((!(i = U._first) || i._paused) && L.autoSleep && !W._first && 1 === g._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || g.sleep()
                    }
                }
            }, g.addEventListener("tick", c._updateRoot);
            var Q = function(e, t, i) {
                    var n, s, r = e._gsTweenID;
                    if (q[r || (e._gsTweenID = r = "t" + X++)] || (q[r] = {
                            target: e,
                            tweens: []
                        }), t && ((n = q[r].tweens)[s = n.length] = t, i))
                        for (; - 1 < --s;) n[s] === t && n.splice(s, 1);
                    return q[r].tweens
                },
                J = function(e, t, i, n) {
                    var s, r, a = e.vars.onOverwrite;
                    return a && (s = a(e, t, i, n)), (a = L.onOverwrite) && (r = a(e, t, i, n)), !1 !== s && !1 !== r
                },
                Z = function(e, t, i, n, s) {
                    var r, a, o, l;
                    if (1 === n || 4 <= n) {
                        for (l = s.length, r = 0; r < l; r++)
                            if ((o = s[r]) !== t) o._gc || o._kill(null, e, t) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var c, u = t._startTime + w,
                        d = [],
                        h = 0,
                        p = 0 === t._duration;
                    for (r = s.length; - 1 < --r;)(o = s[r]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (c = c || ee(t, 0, p), 0 === ee(o, c, p) && (d[h++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (d[h++] = o)));
                    for (r = h; - 1 < --r;)
                        if (o = d[r], 2 === n && o._kill(i, e, t) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                            if (2 !== n && !J(o, t)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                ee = function(e, t, i) {
                    for (var n = e._timeline, s = n._timeScale, r = e._startTime; n._timeline;) {
                        if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return t < (r /= s) ? r - t : i && r === t || !e._initted && r - t < 2 * w ? w : (r += e.totalDuration() / e._timeScale / s) > t + w ? 0 : r - t - w
                };
            s._init = function() {
                var e, t, i, n, s, r, a = this.vars,
                    o = this._overwrittenProps,
                    l = this._duration,
                    c = !!a.immediateRender,
                    u = a.ease;
                if (a.startAt) {
                    for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {}, a.startAt) s[n] = a.startAt[n];
                    if (s.overwrite = !1, s.immediateRender = !0, s.lazy = c && !1 !== a.lazy, s.startAt = s.delay = null, this._startAt = L.to(this.target, 0, s), c)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== l) return
                } else if (a.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (n in 0 !== this._time && (c = !1), i = {}, a) Y[n] && "autoCSS" !== n || (i[n] = a[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== a.lazy, i.immediateRender = c, this._startAt = L.to(this.target, 0, i), c) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof C ? u : "function" == typeof u ? new C(u, a.easeParams) : k[u] || L.defaultEase : L.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, e = 0; e < r; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null, e) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                if (t && L._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = a.onUpdate, this._initted = !0
            }, s._initProps = function(e, t, i, n, s) {
                var r, a, o, l, c, u;
                if (null == e) return !1;
                for (r in N[e._gsTweenID] && K(), this.vars.css || e.style && e !== p && e.nodeType && H.css && !1 !== this.vars.autoCSS && function(e, t) {
                        var i, n = {};
                        for (i in e) Y[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                        e.css = n
                    }(this.vars, e), this.vars)
                    if (u = this.vars[r], Y[r]) u && (u instanceof Array || u.push && x(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this));
                    else if (H[r] && (l = new H[r])._onInitTween(e, this.vars[r], this, s)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: r,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        }, a = l._overwriteProps.length; - 1 < --a;) t[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else t[r] = j.call(this, e, r, "get", u, r, 0, null, this.vars.stringFilter, s);
                return n && this._kill(n, e) ? this._initProps(e, t, i, n, s) : 1 < this._overwrite && this._firstPT && 1 < i.length && Z(e, this, t, this._overwrite, i) ? (this._kill(t, e), this._initProps(e, t, i, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0), o)
            }, s.render = function(e, t, i) {
                var n, s, r, a, o = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (l - 1e-7 <= e) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (c < 0 || e <= 0 && -1e-7 <= e || c === w && "isPause" !== this.data) && c !== e && (i = !0, w < c && (s = "onReverseComplete")), this._rawPrevTime = a = !t || e || c === e ? e : w);
                else if (e < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && 0 < c) && (s = "onReverseComplete", n = this._reversed), e < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= c && (c !== w || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !t || e || c === e ? e : w)), this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var u = e / l,
                        d = this._easeType,
                        h = this._easePower;
                    (1 === d || 3 === d && .5 <= u) && (u = 1 - u), 3 === d && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === d ? 1 - u : 2 === d ? u : e / l < .5 ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = c, R.push(this), void(this._lazy = [e, t]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && 0 <= e && (this._active = !0), 0 === o && (this._startAt && (0 <= e ? this._startAt.render(e, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i), t || (this._time !== o || n || i) && this._callback("onUpdate")), s && (!this._gc || i) && (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === w && a !== w && (this._rawPrevTime = 0))
                }
            }, s._kill = function(e, t, i) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : L.selector(t) || t;
                var n, s, r, a, o, l, c, u, d, h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((x(t) || z(t)) && "number" != typeof t[0])
                    for (n = t.length; - 1 < --n;) this._kill(e, t[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; - 1 < --n;)
                            if (t === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        o = this._propLookup, s = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (c = e || o, u = e !== s && "all" !== s && e !== o && ("object" != typeof e || !e._tempKill), i && (L.onOverwrite || this.vars.onOverwrite)) {
                            for (r in c) o[r] && (d || (d = []), d.push(r));
                            if ((d || !e) && !J(this, i, t, d)) return !1
                        }
                        for (r in c)(a = o[r]) && (h && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(c) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), u && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], c.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -w, this.render(Math.min(0, -this._delay))), this
            }, s._enabled = function(e, t) {
                if (y || g.wake(), e && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; - 1 < --i;) this._siblings[i] = Q(n[i], this, !0);
                    else this._siblings = Q(this.target, this, !0)
                }
                return c.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && L._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
            }, L.to = function(e, t, i) {
                return new L(e, t, i)
            }, L.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new L(e, t, i)
            }, L.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new L(e, t, n)
            }, L.delayedCall = function(e, t, i, n, s) {
                return new L(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, L.set = function(e, t) {
                return new L(e, 0, t)
            }, L.getTweensOf = function(e, t) {
                if (null == e) return [];
                var i, n, s, r;
                if (e = "string" != typeof e ? e : L.selector(e) || e, (x(e) || z(e)) && "number" != typeof e[0]) {
                    for (i = e.length, n = []; - 1 < --i;) n = n.concat(L.getTweensOf(e[i], t));
                    for (i = n.length; - 1 < --i;)
                        for (r = n[i], s = i; - 1 < --s;) r === n[s] && n.splice(i, 1)
                } else
                    for (i = (n = Q(e).concat()).length; - 1 < --i;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, L.killTweensOf = L.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var n = L.getTweensOf(e, t), s = n.length; - 1 < --s;) n[s]._kill(i, e)
            };
            var te = h("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = te.prototype
            }, !0);
            if (s = te.prototype, te.version = "1.19.0", te.API = 2, s._firstPT = null, s._addTween = j, s.setRatio = I, s._kill = function(e) {
                    var t, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; - 1 < --t;) null != e[i[t]] && i.splice(t, 1);
                    for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._mod = s._roundProps = function(e) {
                    for (var t, i = this._firstPT; i;)(t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t), i = i._next
                }, L._onPluginEvent = function(e, t) {
                    var i, n, s, r, a, o = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; o;) {
                            for (a = o._next, n = s; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : r) ? o._prev._next = o: s = o, (o._next = n) ? n._prev = o : r = o, o = a
                        }
                        o = t._firstPT = s
                    }
                    for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0), o = o._next;
                    return i
                }, te.activate = function(e) {
                    for (var t = e.length; - 1 < --t;) e[t].API === te.API && (H[(new e[t])._propName] = e[t]);
                    return !0
                }, r.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        n = e.priority || 0,
                        s = e.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        a = h("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            te.call(this, i, n), this._overwriteProps = s || []
                        }, !0 === e.global),
                        o = a.prototype = new te(i);
                    for (t in (o.constructor = a).API = e.API, r) "function" == typeof e[t] && (o[r[t]] = e[t]);
                    return a.version = e.version, te.activate([a]), a
                }, e = p._gsQueue) {
                for (n = 0; n < e.length; n++) e[n]();
                for (s in T) T[s].func || p.console.log("GSAP encountered missing dependency: " + s)
            }
            y = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
    }(this, function() {
        "use strict";
        var D = function() {};
        D.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var L = "data-scrollmagic-pin-spacer";
        D.Controller = function(e) {
            var i, n, t = x.defaults,
                a = this,
                o = R.extend({}, t, e),
                s = [],
                r = !1,
                l = 0,
                c = "PAUSED",
                u = !0,
                d = 0,
                h = !0,
                p = function() {
                    0 < o.refreshInterval && (n = window.setTimeout(w, o.refreshInterval))
                },
                f = function() {
                    return o.vertical ? R.get.scrollTop(o.container) : R.get.scrollLeft(o.container)
                },
                m = function() {
                    return o.vertical ? R.get.height(o.container) : R.get.width(o.container)
                },
                v = this._setScrollPos = function(e) {
                    o.vertical ? u ? window.scrollTo(R.get.scrollLeft(), e) : o.container.scrollTop = e : u ? window.scrollTo(e, R.get.scrollTop()) : o.container.scrollLeft = e
                },
                g = function() {
                    if (h && r) {
                        var e = R.type.Array(r) ? r : s.slice(0);
                        r = !1;
                        var t = l,
                            i = (l = a.scrollPos()) - t;
                        0 !== i && (c = 0 < i ? "FORWARD" : "REVERSE"), "REVERSE" === c && e.reverse(), e.forEach(function(e) {
                            e.update(!0)
                        })
                    }
                },
                y = function() {
                    i = R.rAF(g)
                },
                b = function(e) {
                    "resize" == e.type && (d = m(), c = "PAUSED"), !0 !== r && (r = !0, y())
                },
                w = function() {
                    if (!u && d != m()) {
                        var t;
                        try {
                            t = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (e) {
                            (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                        }
                        o.container.dispatchEvent(t)
                    }
                    s.forEach(function(e) {
                        e.refresh()
                    }), p()
                };
            this._options = o;
            var _ = function(e) {
                if (e.length <= 1) return e;
                var t = e.slice(0);
                return t.sort(function(e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                }), t
            };
            return this.addScene = function(e) {
                    if (R.type.Array(e)) e.forEach(function(e) {
                        a.addScene(e)
                    });
                    else if (e instanceof D.Scene)
                        if (e.controller() !== a) e.addTo(a);
                        else if (s.indexOf(e) < 0)
                        for (var t in s.push(e), s = _(s), e.on("shift.controller_sort", function() {
                                s = _(s)
                            }), o.globalSceneOptions) e[t] && e[t].call(e, o.globalSceneOptions[t]);
                    return a
                }, this.removeScene = function(e) {
                    if (R.type.Array(e)) e.forEach(function(e) {
                        a.removeScene(e)
                    });
                    else {
                        var t = s.indexOf(e); - 1 < t && (e.off("shift.controller_sort"), s.splice(t, 1), e.remove())
                    }
                    return a
                }, this.updateScene = function(e, t) {
                    return R.type.Array(e) ? e.forEach(function(e) {
                        a.updateScene(e, t)
                    }) : t ? e.update(!0) : !0 !== r && e instanceof D.Scene && (-1 == (r = r || []).indexOf(e) && r.push(e), r = _(r), y()), a
                }, this.update = function(e) {
                    return b({
                        type: "resize"
                    }), e && g(), a
                }, this.scrollTo = function(e, t) {
                    if (R.type.Number(e)) v.call(o.container, e, t);
                    else if (e instanceof D.Scene) e.controller() === a && a.scrollTo(e.scrollOffset(), t);
                    else if (R.type.Function(e)) v = e;
                    else {
                        var i = R.get.elements(e)[0];
                        if (i) {
                            for (; i.parentNode.hasAttribute(L);) i = i.parentNode;
                            var n = o.vertical ? "top" : "left",
                                s = R.get.offset(o.container),
                                r = R.get.offset(i);
                            u || (s[n] -= a.scrollPos()), a.scrollTo(r[n] - s[n], t)
                        }
                    }
                    return a
                }, this.scrollPos = function(e) {
                    return arguments.length ? (R.type.Function(e) && (f = e), a) : f.call(a)
                }, this.info = function(e) {
                    var t = {
                        size: d,
                        vertical: o.vertical,
                        scrollPos: l,
                        scrollDirection: c,
                        container: o.container,
                        isDocument: u
                    };
                    return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
                }, this.loglevel = function() {
                    return a
                }, this.enabled = function(e) {
                    return arguments.length ? (h != e && (h = !!e, a.updateScene(s, !0)), a) : h
                }, this.destroy = function(e) {
                    window.clearTimeout(n);
                    for (var t = s.length; t--;) s[t].destroy(e);
                    return o.container.removeEventListener("resize", b), o.container.removeEventListener("scroll", b), R.cAF(i), null
                },
                function() {
                    for (var e in o) t.hasOwnProperty(e) || delete o[e];
                    if (o.container = R.get.elements(o.container)[0], !o.container) throw "ScrollMagic.Controller init failed.";
                    (u = o.container === window || o.container === document.body || !document.body.contains(o.container)) && (o.container = window), d = m(), o.container.addEventListener("resize", b), o.container.addEventListener("scroll", b), o.refreshInterval = parseInt(o.refreshInterval) || t.refreshInterval, p()
                }(), a
        };
        var x = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        D.Controller.addOption = function(e, t) {
            x.defaults[e] = t
        }, D.Controller.extend = function(e) {
            var t = this;
            D.Controller = function() {
                return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this
            }, R.extend(D.Controller, t), D.Controller.prototype = t.prototype, D.Controller.prototype.constructor = D.Controller
        }, D.Scene = function(e) {
            var i, l, c = "BEFORE",
                u = "DURING",
                d = "AFTER",
                n = z.defaults,
                h = this,
                p = R.extend({}, n, e),
                f = c,
                m = 0,
                o = {
                    start: 0,
                    end: 0
                },
                v = 0,
                s = !0,
                a = {};
            this.on = function(e, s) {
                return R.type.Function(s) && (e = e.trim().split(" ")).forEach(function(e) {
                    var t = e.split("."),
                        i = t[0],
                        n = t[1];
                    "*" != i && (a[i] || (a[i] = []), a[i].push({
                        namespace: n || "",
                        callback: s
                    }))
                }), h
            }, this.off = function(e, r) {
                return e && (e = e.trim().split(" ")).forEach(function(e) {
                    var t = e.split("."),
                        i = t[0],
                        s = t[1] || "";
                    ("*" === i ? Object.keys(a) : [i]).forEach(function(e) {
                        for (var t = a[e] || [], i = t.length; i--;) {
                            var n = t[i];
                            !n || s !== n.namespace && "*" !== s || r && r != n.callback || t.splice(i, 1)
                        }
                        t.length || delete a[e]
                    })
                }), h
            }, this.trigger = function(e, t) {
                if (e) {
                    var i = e.trim().split("."),
                        n = i[0],
                        s = i[1],
                        r = a[n];
                    r && r.forEach(function(e) {
                        s && s !== e.namespace || e.callback.call(h, new D.Event(n, e.namespace, h, t))
                    })
                }
                return h
            }, h.on("change.internal", function(e) {
                "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? b() : "reverse" === e.what && h.update())
            }).on("shift.internal", function() {
                t(), h.update()
            }), this.addTo = function(e) {
                return e instanceof D.Controller && l != e && (l && l.removeScene(h), l = e, x(), r(!0), b(!0), t(), l.info("container").addEventListener("resize", w), e.addScene(h), h.trigger("add", {
                    controller: l
                }), h.update()), h
            }, this.enabled = function(e) {
                return arguments.length ? (s != e && (s = !!e, h.update(!0)), h) : s
            }, this.remove = function() {
                if (l) {
                    l.info("container").removeEventListener("resize", w);
                    var e = l;
                    l = void 0, e.removeScene(h), h.trigger("remove")
                }
                return h
            }, this.destroy = function(e) {
                return h.trigger("destroy", {
                    reset: e
                }), h.remove(), h.off("*.*"), null
            }, this.update = function(e) {
                if (l)
                    if (e)
                        if (l.enabled() && s) {
                            var t, i = l.info("scrollPos");
                            t = 0 < p.duration ? (i - o.start) / (o.end - o.start) : i >= o.start ? 1 : 0, h.trigger("update", {
                                startPos: o.start,
                                endPos: o.end,
                                scrollPos: i
                            }), h.progress(t)
                        } else g && f === u && C(!0);
                else l.updateScene(h, !1);
                return h
            }, this.refresh = function() {
                return r(), b(), h
            }, this.progress = function(e) {
                if (arguments.length) {
                    var t = !1,
                        i = f,
                        n = l ? l.info("scrollDirection") : "PAUSED",
                        s = p.reverse || m <= e;
                    if (0 === p.duration ? (t = m != e, f = 0 === (m = e < 1 && s ? 0 : 1) ? c : u) : e < 0 && f !== c && s ? (f = c, t = !(m = 0)) : 0 <= e && e < 1 && s ? (m = e, f = u, t = !0) : 1 <= e && f !== d ? (m = 1, f = d, t = !0) : f !== u || s || C(), t) {
                        var r = {
                                progress: m,
                                state: f,
                                scrollDirection: n
                            },
                            a = f != i,
                            o = function(e) {
                                h.trigger(e, r)
                            };
                        a && i !== u && (o("enter"), o(i === c ? "start" : "end")), o("progress"), a && f !== u && (o(f === c ? "start" : "end"), o("leave"))
                    }
                    return h
                }
                return m
            };
            var g, y, t = function() {
                    o = {
                        start: v + p.offset
                    }, l && p.triggerElement && (o.start -= l.info("size") * p.triggerHook), o.end = o.start + p.duration
                },
                r = function(e) {
                    if (i) {
                        var t = "duration";
                        T(t, i.call(h)) && !e && (h.trigger("change", {
                            what: t,
                            newval: p[t]
                        }), h.trigger("shift", {
                            reason: t
                        }))
                    }
                },
                b = function(e) {
                    var t = 0,
                        i = p.triggerElement;
                    if (l && i) {
                        for (var n = l.info(), s = R.get.offset(n.container), r = n.vertical ? "top" : "left"; i.parentNode.hasAttribute(L);) i = i.parentNode;
                        var a = R.get.offset(i);
                        n.isDocument || (s[r] -= l.scrollPos()), t = a[r] - s[r]
                    }
                    var o = t != v;
                    v = t, o && !e && h.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                w = function() {
                    0 < p.triggerHook && h.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                _ = R.extend(z.validate, {
                    duration: function(t) {
                        if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() {
                                return l ? l.info("size") * e : 0
                            }
                        }
                        if (R.type.Function(t)) {
                            i = t;
                            try {
                                t = parseFloat(i())
                            } catch (e) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw i && (i = void 0), 0;
                        return t
                    }
                }),
                x = function(e) {
                    (e = arguments.length ? [e] : Object.keys(_)).forEach(function(t) {
                        var i;
                        if (_[t]) try {
                            i = _[t](p[t])
                        } catch (e) {
                            i = n[t]
                        } finally {
                            p[t] = i
                        }
                    })
                },
                T = function(e, t) {
                    var i = !1,
                        n = p[e];
                    return p[e] != t && (p[e] = t, x(e), i = n != p[e]), i
                },
                S = function(t) {
                    h[t] || (h[t] = function(e) {
                        return arguments.length ? ("duration" === t && (i = void 0), T(t, e) && (h.trigger("change", {
                            what: t,
                            newval: p[t]
                        }), -1 < z.shifts.indexOf(t) && h.trigger("shift", {
                            reason: t
                        })), h) : p[t]
                    })
                };
            this.controller = function() {
                return l
            }, this.state = function() {
                return f
            }, this.scrollOffset = function() {
                return o.start
            }, this.triggerPosition = function() {
                var e = p.offset;
                return l && (e += p.triggerElement ? v : l.info("size") * h.triggerHook()), e
            }, h.on("shift.internal", function(e) {
                var t = "duration" === e.reason;
                (f === d && t || f === u && 0 === p.duration) && C(), t && k()
            }).on("progress.internal", function() {
                C()
            }).on("add.internal", function() {
                k()
            }).on("destroy.internal", function(e) {
                h.removePin(e.reset)
            });
            var C = function(e) {
                    if (g && l) {
                        var t = l.info(),
                            i = y.spacer.firstChild;
                        if (e || f !== u) {
                            var n = {
                                    position: y.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                s = R.css(i, "position") != n.position;
                            y.pushFollowers ? 0 < p.duration && (f === d && 0 === parseFloat(R.css(y.spacer, "padding-top")) ? s = !0 : f === c && 0 === parseFloat(R.css(y.spacer, "padding-bottom")) && (s = !0)) : n[t.vertical ? "top" : "left"] = p.duration * m, R.css(i, n), s && k()
                        } else {
                            "fixed" != R.css(i, "position") && (R.css(i, {
                                position: "fixed"
                            }), k());
                            var r = R.get.offset(y.spacer, !0),
                                a = p.reverse || 0 === p.duration ? t.scrollPos - o.start : Math.round(m * p.duration * 10) / 10;
                            r[t.vertical ? "top" : "left"] += a, R.css(y.spacer.firstChild, {
                                top: r.top,
                                left: r.left
                            })
                        }
                    }
                },
                k = function() {
                    if (g && l && y.inFlow) {
                        var e = f === u,
                            t = l.info("vertical"),
                            i = y.spacer.firstChild,
                            n = R.isMarginCollapseType(R.css(y.spacer, "display")),
                            s = {};
                        y.relSize.width || y.relSize.autoFullWidth ? e ? R.css(g, {
                            width: R.get.width(y.spacer)
                        }) : R.css(g, {
                            width: "100%"
                        }) : (s["min-width"] = R.get.width(t ? g : i, !0, !0), s.width = e ? s["min-width"] : "auto"), y.relSize.height ? e ? R.css(g, {
                            height: R.get.height(y.spacer) - (y.pushFollowers ? p.duration : 0)
                        }) : R.css(g, {
                            height: "100%"
                        }) : (s["min-height"] = R.get.height(t ? i : g, !0, !n), s.height = e ? s["min-height"] : "auto"), y.pushFollowers && (s["padding" + (t ? "Top" : "Left")] = p.duration * m, s["padding" + (t ? "Bottom" : "Right")] = p.duration * (1 - m)), R.css(y.spacer, s)
                    }
                },
                E = function() {
                    l && g && f === u && !l.info("isDocument") && C()
                },
                A = function() {
                    l && g && f === u && ((y.relSize.width || y.relSize.autoFullWidth) && R.get.width(window) != R.get.width(y.spacer.parentNode) || y.relSize.height && R.get.height(window) != R.get.height(y.spacer.parentNode)) && k()
                },
                P = function(e) {
                    l && g && f === u && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
                };
            this.setPin = function(e, t) {
                if (t = R.extend({}, {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    }, t), !(e = R.get.elements(e)[0])) return h;
                if ("fixed" === R.css(e, "position")) return h;
                if (g) {
                    if (g === e) return h;
                    h.removePin()
                }
                var i = (g = e).parentNode.style.display,
                    n = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                g.parentNode.style.display = "none";
                var s = "absolute" != R.css(g, "position"),
                    r = R.css(g, n.concat(["display"])),
                    a = R.css(g, ["width", "height"]);
                g.parentNode.style.display = i, !s && t.pushFollowers && (t.pushFollowers = !1);
                var o = g.parentNode.insertBefore(document.createElement("div"), g),
                    l = R.extend(r, {
                        position: s ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (s || R.extend(l, R.css(g, ["width", "height"])), R.css(o, l), o.setAttribute(L, ""), R.addClass(o, t.spacerClass), y = {
                        spacer: o,
                        relSize: {
                            width: "%" === a.width.slice(-1),
                            height: "%" === a.height.slice(-1),
                            autoFullWidth: "auto" === a.width && s && R.isMarginCollapseType(r.display)
                        },
                        pushFollowers: t.pushFollowers,
                        inFlow: s
                    }, !g.___origStyle) {
                    g.___origStyle = {};
                    var c = g.style;
                    n.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                        g.___origStyle[e] = c[e] || ""
                    })
                }
                return y.relSize.width && R.css(o, {
                    width: a.width
                }), y.relSize.height && R.css(o, {
                    height: a.height
                }), o.appendChild(g), R.css(g, {
                    position: s ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (y.relSize.width || y.relSize.autoFullWidth) && R.css(g, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", E), window.addEventListener("resize", E), window.addEventListener("resize", A), g.addEventListener("mousewheel", P), g.addEventListener("DOMMouseScroll", P), C(), h
            }, this.removePin = function(e) {
                if (g) {
                    if (f === u && C(!0), e || !l) {
                        var t = y.spacer.firstChild;
                        if (t.hasAttribute(L)) {
                            var i = y.spacer.style;
                            margins = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                                margins[e] = i[e] || ""
                            }), R.css(t, margins)
                        }
                        y.spacer.parentNode.insertBefore(t, y.spacer), y.spacer.parentNode.removeChild(y.spacer), g.parentNode.hasAttribute(L) || (R.css(g, g.___origStyle), delete g.___origStyle)
                    }
                    window.removeEventListener("scroll", E), window.removeEventListener("resize", E), window.removeEventListener("resize", A), g.removeEventListener("mousewheel", P), g.removeEventListener("DOMMouseScroll", P), g = void 0
                }
                return h
            };
            var M, O = [];
            return h.on("destroy.internal", function(e) {
                    h.removeClassToggle(e.reset)
                }), this.setClassToggle = function(e, t) {
                    var i = R.get.elements(e);
                    return 0 !== i.length && R.type.String(t) && (0 < O.length && h.removeClassToggle(), M = t, O = i, h.on("enter.internal_class leave.internal_class", function(e) {
                        var t = "enter" === e.type ? R.addClass : R.removeClass;
                        O.forEach(function(e) {
                            t(e, M)
                        })
                    })), h
                }, this.removeClassToggle = function(e) {
                    return e && O.forEach(function(e) {
                        R.removeClass(e, M)
                    }), h.off("start.internal_class end.internal_class"), M = void 0, O = [], h
                },
                function() {
                    for (var e in p) n.hasOwnProperty(e) || delete p[e];
                    for (var t in n) S(t);
                    x()
                }(), h
        };
        var z = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(e) {
                    if (e = parseFloat(e), !R.type.Number(e)) throw 0;
                    return e
                },
                triggerElement: function(e) {
                    if (e = e || void 0) {
                        var t = R.get.elements(e)[0];
                        if (!t) throw 0;
                        e = t
                    }
                    return e
                },
                triggerHook: function(e) {
                    var t = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                    else {
                        if (!(e in t)) throw 0;
                        e = t[e]
                    }
                    return e
                },
                reverse: function(e) {
                    return !!e
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        D.Scene.addOption = function(e, t, i, n) {
            e in z.defaults || (z.defaults[e] = t, z.validate[e] = i, n && z.shifts.push(e))
        }, D.Scene.extend = function(e) {
            var t = this;
            D.Scene = function() {
                return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this
            }, R.extend(D.Scene, t), D.Scene.prototype = t.prototype, D.Scene.prototype.constructor = D.Scene
        }, D.Event = function(e, t, i, n) {
            for (var s in n = n || {}) this[s] = n[s];
            return this.type = e, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var R = D._util = function(a) {
            var i, e = {},
                o = function(e) {
                    return parseFloat(e) || 0
                },
                l = function(e) {
                    return e.currentStyle ? e.currentStyle : a.getComputedStyle(e)
                },
                n = function(e, t, i, n) {
                    if ((t = t === document ? a : t) === a) n = !1;
                    else if (!d.DomElement(t)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var s = (i ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
                    if (i && n) {
                        var r = l(t);
                        s += "Height" === e ? o(r.marginTop) + o(r.marginBottom) : o(r.marginLeft) + o(r.marginRight)
                    }
                    return s
                },
                c = function(e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                        return e[1].toUpperCase()
                    })
                };
            e.extend = function(e) {
                for (e = e || {}, i = 1; i < arguments.length; i++)
                    if (arguments[i])
                        for (var t in arguments[i]) arguments[i].hasOwnProperty(t) && (e[t] = arguments[i][t]);
                return e
            }, e.isMarginCollapseType = function(e) {
                return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
            };
            var s = 0,
                t = ["ms", "moz", "webkit", "o"],
                r = a.requestAnimationFrame,
                u = a.cancelAnimationFrame;
            for (i = 0; !r && i < t.length; ++i) r = a[t[i] + "RequestAnimationFrame"], u = a[t[i] + "CancelAnimationFrame"] || a[t[i] + "CancelRequestAnimationFrame"];
            r || (r = function(e) {
                var t = (new Date).getTime(),
                    i = Math.max(0, 16 - (t - s)),
                    n = a.setTimeout(function() {
                        e(t + i)
                    }, i);
                return s = t + i, n
            }), u || (u = function(e) {
                a.clearTimeout(e)
            }), e.rAF = r.bind(a), e.cAF = u.bind(a);
            var d = e.type = function(e) {
                return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            d.String = function(e) {
                return "string" === d(e)
            }, d.Function = function(e) {
                return "function" === d(e)
            }, d.Array = function(e) {
                return Array.isArray(e)
            }, d.Number = function(e) {
                return !d.Array(e) && 0 <= e - parseFloat(e) + 1
            }, d.DomElement = function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            };
            var h = e.get = {};
            return h.elements = function(e) {
                var t = [];
                if (d.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (e) {
                    return t
                }
                if ("nodelist" === d(e) || d.Array(e))
                    for (var i = 0, n = t.length = e.length; i < n; i++) {
                        var s = e[i];
                        t[i] = d.DomElement(s) ? s : h.elements(s)
                    } else(d.DomElement(e) || e === document || e === a) && (t = [e]);
                return t
            }, h.scrollTop = function(e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : a.pageYOffset || 0
            }, h.scrollLeft = function(e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : a.pageXOffset || 0
            }, h.width = function(e, t, i) {
                return n("width", e, t, i)
            }, h.height = function(e, t, i) {
                return n("height", e, t, i)
            }, h.offset = function(e, t) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (e && e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect();
                    i.top = n.top, i.left = n.left, t || (i.top += h.scrollTop(), i.left += h.scrollLeft())
                }
                return i
            }, e.addClass = function(e, t) {
                t && (e.classList ? e.classList.add(t) : e.className += " " + t)
            }, e.removeClass = function(e, t) {
                t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, e.css = function(e, t) {
                if (d.String(t)) return l(e)[c(t)];
                if (d.Array(t)) {
                    var i = {},
                        n = l(e);
                    return t.forEach(function(e) {
                        i[e] = n[c(e)]
                    }), i
                }
                for (var s in t) {
                    var r = t[s];
                    r == parseFloat(r) && (r += "px"), e.style[c(s)] = r
                }
            }, e
        }(window || {});
        return D
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var a = document.documentElement,
            o = window,
            r = function(e, t) {
                var i = "x" === t ? "Width" : "Height",
                    n = "scroll" + i,
                    s = "client" + i,
                    r = document.body;
                return e === o || e === a || e === r ? Math.max(a[n], r[n]) - (o["inner" + i] || a[s] || r[s]) : e[n] - e["offset" + i]
            },
            e = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.7.6",
                init: function(e, t, i) {
                    return this._wdw = e === o, this._target = e, this._tween = i, "object" != typeof t && (t = {
                        y: t
                    }), this.vars = t, this._autoKill = !1 !== t.autoKill, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != t.x ? (this._addTween(this, "x", this.x, "max" === t.x ? r(e, "x") : t.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != t.y ? (this._addTween(this, "y", this.y, "max" === t.y ? r(e, "y") : t.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    var t = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        i = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        n = i - this.yPrev,
                        s = t - this.xPrev;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (7 < s || s < -7) && t < r(this._target, "x") && (this.skipX = !0), !this.skipY && (7 < n || n < -7) && i < r(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? o.scrollTo(this.skipX ? t : this.x, this.skipY ? i : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            t = e.prototype;
        e.max = r, t.getX = function() {
            return this._wdw ? null != o.pageXOffset ? o.pageXOffset : null != a.scrollLeft ? a.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
        }, t.getY = function() {
            return this._wdw ? null != o.pageYOffset ? o.pageYOffset : null != a.scrollTop ? a.scrollTop : document.body.scrollTop : this._target.scrollTop
        }, t._kill = function(e) {
            return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
    }(this, function(e, m, v) {
        "use strict";
        var t = "animation.gsap",
            i = window.console || {},
            n = Function.prototype.bind.call(i.error || i.log || function() {}, i);
        e || n("(" + t + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), m || n("(" + t + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), e.Scene.addOption("tweenChanges", !1, function(e) {
            return !!e
        }), e.Scene.extend(function() {
            var d, h = this,
                p = function() {
                    h._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + t + ")", "->"), h._log.apply(this, arguments))
                };
            h.on("progress.plugin_gsap", function() {
                f()
            }), h.on("destroy.plugin_gsap", function(e) {
                h.removeTween(e.reset)
            });
            var f = function() {
                if (d) {
                    var e = h.progress(),
                        t = h.state();
                    d.repeat && -1 === d.repeat() ? "DURING" === t && d.paused() ? d.play() : "DURING" === t || d.paused() || d.pause() : e != d.progress() && (0 === h.duration() ? 0 < e ? d.play() : d.reverse() : h.tweenChanges() && d.tweenTo ? d.tweenTo(e * d.duration()) : d.progress(e).pause())
                }
            };
            h.setTween = function(e, t, i) {
                var n;
                1 < arguments.length && (arguments.length < 3 && (i = t, t = 1), e = m.to(e, t, i));
                try {
                    (n = v ? new v({
                        smoothChildTiming: !0
                    }).add(e) : e).pause()
                } catch (e) {
                    return p(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), h
                }
                if (d && h.removeTween(), d = n, e.repeat && -1 === e.repeat() && (d.repeat(-1), d.yoyo(e.yoyo())), h.tweenChanges() && !d.tweenTo && p(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), d && h.controller() && h.triggerElement() && 2 <= h.loglevel()) {
                    var s = m.getTweensOf(h.triggerElement()),
                        r = h.controller().info("vertical");
                    s.forEach(function(e, t) {
                        var i = e.vars.css || e.vars;
                        if (r ? void 0 !== i.top || void 0 !== i.bottom : void 0 !== i.left || void 0 !== i.right) return p(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1
                    })
                }
                if (1.14 <= parseFloat(TweenLite.version))
                    for (var a, o, l = d.getChildren ? d.getChildren(!0, !0, !1) : [d], c = function() {
                            p(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                        }, u = 0; u < l.length; u++) a = l[u], o !== c && (o = a.vars.onOverwrite, a.vars.onOverwrite = function() {
                        o && o.apply(this, arguments), c.apply(this, arguments)
                    });
                return p(3, "added tween"), f(), h
            }, h.removeTween = function(e) {
                return d && (e && d.progress(0).pause(), d.kill(), d = void 0, p(3, "removed tween (reset: " + (e ? "true" : "false") + ")")), h
            }
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.Blazy = t()
    }(this, function() {
        function n(e) {
            var t = e._util;
            t.elements = function(e) {
                for (var t = [], i = (e = e.root.querySelectorAll(e.selector)).length; i--; t.unshift(e[i]));
                return t
            }(e.options), t.count = t.elements.length, t.destroyed && (t.destroyed = !1, e.options.container && v(e.options.container, function(e) {
                f(e, "scroll", t.validateT)
            }), f(window, "resize", t.saveViewportOffsetT), f(window, "resize", t.validateT), f(window, "scroll", t.validateT)), s(e)
        }

        function s(e) {
            for (var t = e._util, i = 0; i < t.count; i++) {
                var n, s = t.elements[i],
                    r = s;
                n = e.options;
                var a = r.getBoundingClientRect();
                n.container && w && (r = r.closest(n.containerClass)) ? n = !!o(r = r.getBoundingClientRect(), y) && o(a, {
                    top: r.top - n.offset,
                    right: r.right + n.offset,
                    bottom: r.bottom + n.offset,
                    left: r.left - n.offset
                }) : n = o(a, y), (n || h(s, e.options.successClass)) && (e.load(s), t.elements.splice(i, 1), t.count--, i--)
            }
            0 === t.count && e.destroy()
        }

        function o(e, t) {
            return e.right >= t.left && e.bottom >= t.top && e.left <= t.right && e.top <= t.bottom
        }

        function a(e, t, n) {
            if (!h(e, n.successClass) && (t || n.loadInvisible || 0 < e.offsetWidth && 0 < e.offsetHeight))
                if (t = e.getAttribute(g) || e.getAttribute(n.src)) {
                    var i = (t = t.split(n.separator))[b && 1 < t.length ? 1 : 0],
                        s = e.getAttribute(n.srcset),
                        r = "img" === e.nodeName.toLowerCase(),
                        a = (t = e.parentNode) && "picture" === t.nodeName.toLowerCase();
                    if (r || void 0 === e.src) {
                        var o = new Image,
                            l = function() {
                                n.error && n.error(e, "invalid"), p(e, n.errorClass), m(o, "error", l), m(o, "load", c)
                            },
                            c = function() {
                                r ? a || d(e, i, s) : e.style.backgroundImage = 'url("' + i + '")', u(e, n), m(o, "load", c), m(o, "error", l)
                            };
                        a && (o = e, v(t.getElementsByTagName("source"), function(e) {
                            var t = n.srcset,
                                i = e.getAttribute(t);
                            i && (e.setAttribute("srcset", i), e.removeAttribute(t))
                        })), f(o, "error", l), f(o, "load", c), d(o, i, s)
                    } else e.src = i, u(e, n)
                } else "video" === e.nodeName.toLowerCase() ? (v(e.getElementsByTagName("source"), function(e) {
                    var t = n.src,
                        i = e.getAttribute(t);
                    i && (e.setAttribute("src", i), e.removeAttribute(t))
                }), e.load(), u(e, n)) : (n.error && n.error(e, "missing"), p(e, n.errorClass))
        }

        function u(t, e) {
            p(t, e.successClass), e.success && e.success(t), t.removeAttribute(e.src), t.removeAttribute(e.srcset), v(e.breakpoints, function(e) {
                t.removeAttribute(e.src)
            })
        }

        function d(e, t, i) {
            i && e.setAttribute("srcset", i), e.src = t
        }

        function h(e, t) {
            return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        }

        function p(e, t) {
            h(e, t) || (e.className += " " + t)
        }

        function l(e) {
            y.bottom = (window.innerHeight || document.documentElement.clientHeight) + e, y.right = (window.innerWidth || document.documentElement.clientWidth) + e
        }

        function f(e, t, i) {
            e.attachEvent ? e.attachEvent && e.attachEvent("on" + t, i) : e.addEventListener(t, i, {
                capture: !1,
                passive: !0
            })
        }

        function m(e, t, i) {
            e.detachEvent ? e.detachEvent && e.detachEvent("on" + t, i) : e.removeEventListener(t, i, {
                capture: !1,
                passive: !0
            })
        }

        function v(e, t) {
            if (e && t)
                for (var i = e.length, n = 0; n < i && !1 !== t(e[n], n); n++);
        }

        function c(t, i, n) {
            var s = 0;
            return function() {
                var e = +new Date;
                e - s < i || (s = e, t.apply(n, arguments))
            }
        }
        var g, y, b, w;
        return function(e) {
            if (!document.querySelectorAll) {
                var r = document.createStyleSheet();
                document.querySelectorAll = function(e, t, i, n, s) {
                    for (s = document.all, t = [], i = (e = e.replace(/\[for\b/gi, "[htmlFor").split(",")).length; i--;) {
                        for (r.addRule(e[i], "k:v"), n = s.length; n--;) s[n].currentStyle.k && t.push(s[n]);
                        r.removeRule(0)
                    }
                    return t
                }
            }
            var t = this,
                i = t._util = {};
            i.elements = [], i.destroyed = !0, t.options = e || {}, t.options.error = t.options.error || !1, t.options.offset = t.options.offset || 100, t.options.root = t.options.root || document, t.options.success = t.options.success || !1, t.options.selector = t.options.selector || ".b-lazy", t.options.separator = t.options.separator || "|", t.options.containerClass = t.options.container, t.options.container = !!t.options.containerClass && document.querySelectorAll(t.options.containerClass), t.options.errorClass = t.options.errorClass || "b-error", t.options.breakpoints = t.options.breakpoints || !1, t.options.loadInvisible = t.options.loadInvisible || !1, t.options.successClass = t.options.successClass || "b-loaded", t.options.validateDelay = t.options.validateDelay || 25, t.options.saveViewportOffsetDelay = t.options.saveViewportOffsetDelay || 50, t.options.srcset = t.options.srcset || "data-srcset", t.options.src = g = t.options.src || "data-src", w = Element.prototype.closest, b = 1 < window.devicePixelRatio, (y = {}).top = 0 - t.options.offset, y.left = 0 - t.options.offset, t.revalidate = function() {
                n(t)
            }, t.load = function(e, t) {
                var i = this.options;
                void 0 === e.length ? a(e, t, i) : v(e, function(e) {
                    a(e, t, i)
                })
            }, t.destroy = function() {
                var t = this._util;
                this.options.container && v(this.options.container, function(e) {
                    m(e, "scroll", t.validateT)
                }), m(window, "scroll", t.validateT), m(window, "resize", t.validateT), m(window, "resize", t.saveViewportOffsetT), t.count = 0, t.elements.length = 0, t.destroyed = !0
            }, i.validateT = c(function() {
                s(t)
            }, t.options.validateDelay, t), i.saveViewportOffsetT = c(function() {
                l(t.options.offset)
            }, t.options.saveViewportOffsetDelay, t), l(t.options.offset), v(t.options.breakpoints, function(e) {
                if (e.width >= window.screen.width) return g = e.src, !1
            }), setTimeout(function() {
                n(t)
            })
        }
    }),
    function(t, i) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return i(e, t, t.document, t.Math)
        }) : "object" == typeof exports && exports ? module.exports = i(require("jquery"), t, t.document, t.Math) : i(jQuery, t, t.document, t.Math)
    }("undefined" != typeof window ? window : this, function(rt, at, ot, lt, ct) {
        "use strict";
        var ut = "fullpage-wrapper",
            dt = "." + ut,
            ht = "fp-responsive",
            pt = "fp-notransition",
            ft = "fp-destroyed",
            mt = "fp-enabled",
            vt = "fp-viewing",
            gt = "active",
            yt = "." + gt,
            bt = "fp-completely",
            wt = "fp-section",
            _t = "." + wt,
            xt = _t + yt,
            Tt = "fp-tableCell",
            St = "." + Tt,
            Ct = "#fp-nav",
            kt = "fp-tooltip",
            Et = "fp-slide",
            At = "." + Et,
            Pt = At + yt,
            Mt = ".fp-slides",
            Ot = "fp-slidesContainer",
            Dt = "." + Ot,
            Lt = "fp-table",
            zt = "fp-slidesNav",
            Rt = "." + zt,
            Nt = Rt + " a",
            e = "fp-controlArrow",
            $t = "." + e,
            It = "fp-prev",
            Ft = $t + ".fp-prev",
            jt = $t + ".fp-next",
            Bt = rt(at),
            Ht = rt(ot);
        rt.fn.fullpage = function(_) {
            function i(e, t) {
                e || me(0), ye("autoScrolling", e, t);
                var i = rt(xt);
                _.autoScrolling && !_.scrollBar ? (_e.css({
                    overflow: "hidden",
                    height: "100%"
                }), n(Ue.recordHistory, "internal"), Oe.css({
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), i.length && me(i.position().top)) : (_e.css({
                    overflow: "visible",
                    height: "initial"
                }), n(!1, "internal"), Oe.css({
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), i.length && _e.scrollTop(i.position().top))
            }

            function n(e, t) {
                ye("recordHistory", e, t)
            }

            function s(e, t) {
                ye("scrollingSpeed", e, t)
            }

            function r(e, t) {
                ye("fitToSection", e, t)
            }

            function t(e) {
                e ? (function() {
                    var e, t = "";
                    at.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
                    var i = "onwheel" in ot.createElement("div") ? "wheel" : ot.onmousewheel !== ct ? "mousewheel" : "DOMMouseScroll";
                    "DOMMouseScroll" == i ? ot[e](t + "MozMousePixelScroll", C, !1) : ot[e](t + i, C, !1)
                }(), Oe.on("mousedown", H).on("mouseup", q)) : (ot.addEventListener ? (ot.removeEventListener("mousewheel", C, !1), ot.removeEventListener("wheel", C, !1), ot.removeEventListener("MozMousePixelScroll", C, !1)) : ot.detachEvent("onmousewheel", C), Oe.off("mousedown", H).off("mouseup", q))
            }

            function a(i, e) {
                void 0 !== e ? (e = e.replace(/ /g, "").split(","), rt.each(e, function(e, t) {
                    ge(i, t, "m")
                })) : (ge(i, "all", "m"), i ? (t(!0), (Pe || Me) && (_.autoScrolling && xe.off(We.touchmove).on(We.touchmove, y), rt(dt).off(We.touchstart).on(We.touchstart, T).off(We.touchmove).on(We.touchmove, b))) : (t(!1), (Pe || Me) && (_.autoScrolling && xe.off(We.touchmove), rt(dt).off(We.touchstart).off(We.touchmove))))
            }

            function o(i, e) {
                void 0 !== e ? (e = e.replace(/ /g, "").split(","), rt.each(e, function(e, t) {
                    ge(i, t, "k")
                })) : (ge(i, "all", "k"), _.keyboardScrolling = i)
            }

            function l() {
                var e = rt(xt).prev(_t);
                e.length || !_.loopTop && !_.continuousVertical || (e = rt(_t).last()), e.length && A(e, null, !0)
            }

            function c() {
                var e = rt(xt).next(_t);
                e.length || !_.loopBottom && !_.continuousVertical || (e = rt(_t).first()), e.length && A(e, null, !1)
            }

            function u(e, t) {
                s(0, "internal"), d(e, t), s(Ue.scrollingSpeed, "internal")
            }

            function d(e, t) {
                var i = ae(e);
                void 0 !== t ? oe(e, t) : 0 < i.length && A(i)
            }

            function h(e) {
                k("right", e)
            }

            function p(e) {
                k("left", e)
            }

            function f(e) {
                if (!Oe.hasClass(ft)) {
                    Le = !0, De = Bt.height(), rt(_t).each(function() {
                        var e = rt(this).find(Mt),
                            t = rt(this).find(At);
                        _.verticalCentered && rt(this).find(St).css("height", se(rt(this)) + "px"), rt(this).css("height", De + "px"), 1 < t.length && G(e, e.find(Pt))
                    }), _.scrollOverflow && Ie.createScrollBarForAll();
                    var t = rt(xt).index(_t);
                    t && u(t + 1), Le = !1, rt.isFunction(_.afterResize) && e && _.afterResize.call(Oe), rt.isFunction(_.afterReBuild) && !e && _.afterReBuild.call(Oe)
                }
            }

            function m(e) {
                var t = xe.hasClass(ht);
                e ? t || (i(!1, "internal"), r(!1, "internal"), rt(Ct).hide(), xe.addClass(ht), rt.isFunction(_.afterResponsive) && _.afterResponsive.call(Oe, e)) : t && (i(Ue.autoScrolling, "internal"), r(Ue.autoScrolling, "internal"), rt(Ct).show(), xe.removeClass(ht), rt.isFunction(_.afterResponsive) && _.afterResponsive.call(Oe, e))
            }

            function e() {
                var e, t = rt(xt);
                t.addClass(bt), O(t), D(t), _.scrollOverflow && _.scrollOverflowHandler.afterLoad(), (!(e = ae(I().section)).length || e.length && e.index() === Ee.index()) && rt.isFunction(_.afterLoad) && _.afterLoad.call(t, t.data("anchor"), t.index(_t) + 1), rt.isFunction(_.afterRender) && _.afterRender.call(Oe)
            }

            function v() {
                var e, t, i, n, s, r;
                if (!_.autoScrolling || _.scrollBar) {
                    var a = Bt.scrollTop(),
                        o = (r = Ke < (s = a) ? "down" : "up", it = Ke = s, r),
                        l = 0,
                        c = a + Bt.height() / 2,
                        u = xe.height() - Bt.height() === a,
                        d = ot.querySelectorAll(_t);
                    if (u) l = d.length - 1;
                    else if (a)
                        for (var h = 0; h < d.length; ++h) {
                            d[h].offsetTop <= c && (l = h)
                        } else l = 0;
                    if (t = o, i = rt(xt).position().top, n = i + Bt.height(), ("up" == t ? n >= Bt.scrollTop() + Bt.height() : i <= Bt.scrollTop()) && (rt(xt).hasClass(bt) || rt(xt).addClass(bt).siblings().removeClass(bt)), !(e = rt(d).eq(l)).hasClass(gt)) {
                        Ge = !0;
                        var p, f, m = rt(xt),
                            v = m.index(_t) + 1,
                            g = ie(e),
                            y = e.data("anchor"),
                            b = e.index(_t) + 1,
                            w = e.find(Pt);
                        w.length && (f = w.data("anchor"), p = w.index()), Re && (e.addClass(gt).siblings().removeClass(gt), rt.isFunction(_.onLeave) && _.onLeave.call(m, v, b, g), rt.isFunction(_.afterLoad) && _.afterLoad.call(e, y, b), z(m), O(e), D(e), te(y, b - 1), _.anchors.length && (Se = y), ce(p, f, y, b)), clearTimeout(He), He = setTimeout(function() {
                            Ge = !1
                        }, 100)
                    }
                    _.fitToSection && (clearTimeout(qe), qe = setTimeout(function() {
                        _.fitToSection && rt(xt).outerHeight() <= De && x()
                    }, _.fitToSectionDelay))
                }
            }

            function x() {
                Re && (Le = !0, A(rt(xt)), Le = !1)
            }

            function g(e) {
                if ($e.m[e]) {
                    var t = "down" === e ? c : l;
                    if (_.scrollOverflow) {
                        var i = _.scrollOverflowHandler.scrollable(rt(xt)),
                            n = "down" === e ? "bottom" : "top";
                        if (0 < i.length) {
                            if (!_.scrollOverflowHandler.isScrolled(n, i)) return !0;
                            t()
                        } else t()
                    } else t()
                }
            }

            function y(e) {
                var t = e.originalEvent;
                _.autoScrolling && w(t) && e.preventDefault()
            }

            function b(e) {
                var t = e.originalEvent,
                    i = rt(t.target).closest(_t);
                if (w(t)) {
                    _.autoScrolling && e.preventDefault();
                    var n = pe(t);
                    Ze = n.y, et = n.x, i.find(Mt).length && lt.abs(Je - et) > lt.abs(Qe - Ze) ? !Ae && lt.abs(Je - et) > Bt.outerWidth() / 100 * _.touchSensitivity && (et < Je ? $e.m.right && h(i) : $e.m.left && p(i)) : _.autoScrolling && Re && lt.abs(Qe - Ze) > Bt.height() / 100 * _.touchSensitivity && (Ze < Qe ? g("down") : Qe < Ze && g("up"))
                }
            }

            function w(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType
            }

            function T(e) {
                var t = e.originalEvent;
                if (_.fitToSection && _e.stop(), w(t)) {
                    var i = pe(t);
                    Qe = i.y, Je = i.x
                }
            }

            function S(e, t) {
                for (var i = 0, n = e.slice(lt.max(e.length - t, 1)), s = 0; s < n.length; s++) i += n[s];
                return lt.ceil(i / t)
            }

            function C(e) {
                var t = (new Date).getTime(),
                    i = rt(".fp-completely").hasClass("fp-normal-scroll");
                if (_.autoScrolling && !ke && !i) {
                    var n = (e = e || at.event).wheelDelta || -e.deltaY || -e.detail,
                        s = lt.max(-1, lt.min(1, n)),
                        r = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                        a = lt.abs(e.wheelDeltaX) < lt.abs(e.wheelDelta) || lt.abs(e.deltaX) < lt.abs(e.deltaY) || !r;
                    149 < Ne.length && Ne.shift(), Ne.push(lt.abs(n)), _.scrollBar && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
                    var o = t - tt;
                    if (tt = t, 200 < o && (Ne = []), Re) {
                        var l = S(Ne, 10);
                        S(Ne, 70) <= l && a && g(s < 0 ? "down" : "up")
                    }
                    return !1
                }
                _.fitToSection && _e.stop()
            }

            function k(e, t) {
                var i = (void 0 === t ? rt(xt) : t).find(Mt),
                    n = i.find(At).length;
                if (!(!i.length || Ae || n < 2)) {
                    var s = i.find(Pt),
                        r = null;
                    if (!(r = "left" === e ? s.prev(At) : s.next(At)).length) {
                        if (!_.loopHorizontal) return;
                        r = "left" === e ? s.siblings(":last") : s.siblings(":first")
                    }
                    Ae = !0, G(i, r, e)
                }
            }

            function E() {
                rt(Pt).each(function() {
                    fe(rt(this), "internal")
                })
            }

            function A(e, t, i) {
                if (void 0 !== e) {
                    var n, s, r = {
                        element: e,
                        callback: t,
                        isMovementUp: i,
                        dtop: (l = (o = e).position(), c = l.top, u = l.top > it, d = c - De + o.outerHeight(), h = _.bigSectionsDestination, o.outerHeight() > De ? (u || h) && "bottom" !== h || (c = d) : (u || Le && o.is(":last-child")) && (c = d), it = c),
                        yMovement: ie(e),
                        anchorLink: e.data("anchor"),
                        sectionIndex: e.index(_t),
                        activeSlide: e.find(Pt),
                        activeSection: rt(xt),
                        leavingSection: rt(xt).index(_t) + 1,
                        localIsResizing: Le
                    };
                    r.activeSection.is(e) && !Le || _.scrollBar && Bt.scrollTop() === r.dtop && !e.hasClass("fp-auto-height") || (r.activeSlide.length && (n = r.activeSlide.data("anchor"), s = r.activeSlide.index()), rt.isFunction(_.onLeave) && !r.localIsResizing && !1 === _.onLeave.call(r.activeSection, r.leavingSection, r.sectionIndex + 1, r.yMovement) || (_.autoScrolling && _.continuousVertical && void 0 !== r.isMovementUp && (!r.isMovementUp && "up" == r.yMovement || r.isMovementUp && "down" == r.yMovement) && ((a = r).isMovementUp ? rt(xt).before(a.activeSection.nextAll(_t)) : rt(xt).after(a.activeSection.prevAll(_t).get().reverse()), me(rt(xt).position().top), E(), a.wrapAroundElements = a.activeSection, a.dtop = a.element.position().top, a.yMovement = ie(a.element), a.leavingSection = a.activeSection.index(_t) + 1, a.sectionIndex = a.element.index(_t), r = a), r.localIsResizing || z(r.activeSection), _.scrollOverflow && _.scrollOverflowHandler.beforeLeave(), e.addClass(gt).siblings().removeClass(gt), O(e), _.scrollOverflow && _.scrollOverflowHandler.onLeave(), Re = !1, ce(s, n, r.anchorLink, r.sectionIndex), function(e) {
                        if (_.css3 && _.autoScrolling && !_.scrollBar) {
                            var t = "translate3d(0px, -" + lt.round(e.dtop) + "px, 0px)";
                            re(t, !0), _.scrollingSpeed ? (clearTimeout(je), je = setTimeout(function() {
                                P(e)
                            }, _.scrollingSpeed)) : P(e)
                        } else {
                            var i = (n = e, s = {}, _.autoScrolling && !_.scrollBar ? (s.options = {
                                top: -n.dtop
                            }, s.element = dt) : (s.options = {
                                scrollTop: n.dtop
                            }, s.element = "html, body"), s);
                            rt(i.element).animate(i.options, _.scrollingSpeed, _.easing).promise().done(function() {
                                _.scrollBar ? setTimeout(function() {
                                    P(e)
                                }, 30) : P(e)
                            })
                        }
                        var n, s
                    }(r), Se = r.anchorLink, te(r.anchorLink, r.sectionIndex)))
                }
                var a, o, l, c, u, d, h
            }

            function P(e) {
                var t;
                (t = e).wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? rt(".fp-section:first").before(t.wrapAroundElements) : rt(".fp-section:last").after(t.wrapAroundElements), me(rt(xt).position().top), E()), rt.isFunction(_.afterLoad) && !e.localIsResizing && _.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), _.scrollOverflow && _.scrollOverflowHandler.afterLoad(), e.localIsResizing || D(e.element), e.element.addClass(bt).siblings().removeClass(bt), Re = !0, rt.isFunction(e.callback) && e.callback.call(this)
            }

            function M(e, t) {
                e.attr(t, e.data(t)).removeAttr("data-" + t)
            }

            function O(e) {
                var n;
                _.lazyLoading && R(e).find("img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                    if (n = rt(this), rt.each(["src", "srcset"], function(e, t) {
                            var i = n.attr("data-" + t);
                            void 0 !== i && i && M(n, t)
                        }), n.is("source")) {
                        var e = n.closest("video").length ? "video" : "audio";
                        n.closest(e).get(0).load()
                    }
                })
            }

            function D(e) {
                var t = R(e);
                t.find("video, audio").each(function() {
                    var e = rt(this).get(0);
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var e = rt(this).get(0);
                    e.hasAttribute("data-autoplay") && L(e), e.onload = function() {
                        e.hasAttribute("data-autoplay") && L(e)
                    }
                })
            }

            function L(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }

            function z(e) {
                var t = R(e);
                t.find("video, audio").each(function() {
                    var e = rt(this).get(0);
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var e = rt(this).get(0);
                    /youtube\.com\/embed\//.test(rt(this).attr("src")) && !e.hasAttribute("data-keepplaying") && rt(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                })
            }

            function R(e) {
                var t = e.find(Pt);
                return t.length && (e = rt(t)), e
            }

            function N() {
                var e = I(),
                    t = e.section,
                    i = e.slide;
                t && (_.animateAnchor ? oe(t, i) : u(t, i))
            }

            function $() {
                if (!Ge && !_.lockAnchors) {
                    var e = I(),
                        t = e.section,
                        i = e.slide,
                        n = void 0 === Se,
                        s = void 0 === Se && void 0 === i && !Ae;
                    t.length && (t && t !== Se && !n || s || !Ae && Ce != i) && oe(t, i)
                }
            }

            function I() {
                var e = at.location.hash,
                    t = e.replace("#", "").split("/"),
                    i = -1 < e.indexOf("#/");
                return {
                    section: i ? "/" + t[1] : decodeURIComponent(t[0]),
                    slide: i ? decodeURIComponent(t[2]) : decodeURIComponent(t[1])
                }
            }

            function F(e) {
                clearTimeout(Xe);
                var t = rt(":focus");
                if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && _.keyboardScrolling && _.autoScrolling) {
                    var i = e.which; - 1 < rt.inArray(i, [40, 38, 32, 33, 34]) && e.preventDefault(), ke = e.ctrlKey, Xe = setTimeout(function() {
                        ! function(e) {
                            var t = e.shiftKey;
                            if (Re || !([37, 39].indexOf(e.which) < 0)) switch (e.which) {
                                case 38:
                                case 33:
                                    $e.k.up && l();
                                    break;
                                case 32:
                                    if (t && $e.k.up) {
                                        l();
                                        break
                                    }
                                    case 40:
                                    case 34:
                                        $e.k.down && c();
                                        break;
                                    case 36:
                                        $e.k.up && d(1);
                                        break;
                                    case 35:
                                        $e.k.down && d(rt(_t).length);
                                        break;
                                    case 37:
                                        $e.k.left && p();
                                        break;
                                    case 39:
                                        $e.k.right && h();
                                        break;
                                    default:
                                        ;
                            }
                        }(e)
                    }, 150)
                }
            }

            function j() {
                rt(this).prev().trigger("click")
            }

            function B(e) {
                ze && (ke = e.ctrlKey)
            }

            function H(e) {
                2 == e.which && (nt = e.pageY, Oe.on("mousemove", U))
            }

            function q(e) {
                2 == e.which && Oe.off("mousemove")
            }

            function X() {
                var e = rt(this).closest(_t);
                rt(this).hasClass(It) ? $e.m.left && p(e) : $e.m.right && h(e)
            }

            function Y() {
                ke = ze = !1
            }

            function V(e) {
                e.preventDefault();
                var t = rt(this).parent().index();
                A(rt(_t).eq(t))
            }

            function W(e) {
                e.preventDefault();
                var t = rt(this).closest(_t).find(Mt);
                G(t, t.find(At).eq(rt(this).closest("li").index()))
            }

            function U(e) {
                Re && (e.pageY < nt && $e.m.up ? l() : e.pageY > nt && $e.m.down && c()), nt = e.pageY
            }

            function G(e, t, i) {
                var n, s, r = e.closest(_t),
                    a = {
                        slides: e,
                        destiny: t,
                        direction: i,
                        destinyPos: t.position(),
                        slideIndex: t.index(),
                        section: r,
                        sectionIndex: r.index(_t),
                        anchorLink: r.data("anchor"),
                        slidesNav: r.find(Rt),
                        slideAnchor: de(t),
                        prevSlide: r.find(Pt),
                        prevSlideIndex: r.find(Pt).index(),
                        localIsResizing: Le
                    };
                return a.xMovement = (n = a.prevSlideIndex, s = a.slideIndex, n == s ? "none" : s < n ? "left" : "right"), a.localIsResizing || (Re = !1), _.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && rt.isFunction(_.onSlideLeave) && !1 === _.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.direction, a.slideIndex) ? void(Ae = !1) : (t.addClass(gt).siblings().removeClass(gt), a.localIsResizing || (z(a.prevSlide), O(t)), !_.loopHorizontal && _.controlArrows && (r.find(Ft).toggle(0 !== a.slideIndex), r.find(jt).toggle(!t.is(":last-child"))), r.hasClass(gt) && !a.localIsResizing && ce(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), void
                    function(e, t, i) {
                        var n = t.destinyPos;
                        if (_.css3) {
                            var s = "translate3d(-" + lt.round(n.left) + "px, 0px, 0px)";
                            Z(e.find(Dt)).css(ve(s)), Be = setTimeout(function() {
                                i && K(t)
                            }, _.scrollingSpeed, _.easing)
                        } else e.animate({
                            scrollLeft: lt.round(n.left)
                        }, _.scrollingSpeed, _.easing, function() {
                            i && K(t)
                        })
                    }(e, a, !0))
            }

            function K(e) {
                var t, i;
                t = e.slidesNav, i = e.slideIndex, t.find(yt).removeClass(gt), t.find("li").eq(i).find("a").addClass(gt), e.localIsResizing || (rt.isFunction(_.afterSlideLoad) && _.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex), Re = !0, D(e.destiny)), Ae = !1
            }

            function Q() {
                if (J(), Pe) {
                    var e = rt(ot.activeElement);
                    if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
                        var t = Bt.height();
                        lt.abs(t - st) > 20 * lt.max(st, t) / 100 && (f(!0), st = t)
                    }
                } else clearTimeout(Fe), Fe = setTimeout(function() {
                    f(!0)
                }, 350)
            }

            function J() {
                var e = _.responsive || _.responsiveWidth,
                    t = _.responsiveHeight,
                    i = e && Bt.outerWidth() < e,
                    n = t && Bt.height() < t;
                e && t ? m(i || n) : e ? m(i) : t && m(n)
            }

            function Z(e) {
                var t = "all " + _.scrollingSpeed + "ms " + _.easingcss3;
                return e.removeClass(pt), e.css({
                    "-webkit-transition": t,
                    transition: t
                })
            }

            function ee(e) {
                return e.addClass(pt)
            }

            function te(e, t) {
                var i, n, s;
                s = e, _.menu && (rt(_.menu).find(yt).removeClass(gt), rt(_.menu).find('[data-menuanchor="' + s + '"]').addClass(gt)), i = e, n = t, _.navigation && (rt(Ct).find(yt).removeClass(gt), i ? rt(Ct).find('a[href="#' + i + '"]').addClass(gt) : rt(Ct).find("li").eq(n).find("a").addClass(gt))
            }

            function ie(e) {
                var t = rt(xt).index(_t),
                    i = e.index(_t);
                return t == i ? "none" : i < t ? "up" : "down"
            }

            function ne(e) {
                e.hasClass(Lt) || e.addClass(Lt).wrapInner('<div class="' + Tt + '" style="height:' + se(e) + 'px;" />')
            }

            function se(e) {
                var t = De;
                if (_.paddingTop || _.paddingBottom) {
                    var i = e;
                    i.hasClass(wt) || (i = e.closest(_t));
                    var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                    t = De - n
                }
                return t
            }

            function re(e, t) {
                t ? Z(Oe) : ee(Oe), Oe.css(ve(e)), setTimeout(function() {
                    Oe.removeClass(pt)
                }, 10)
            }

            function ae(e) {
                if (!e) return [];
                var t = Oe.find(_t + '[data-anchor="' + e + '"]');
                return t.length || (t = rt(_t).eq(e - 1)), t
            }

            function oe(e, t) {
                var i = ae(e);
                i.length && (void 0 === t && (t = 0), e === Se || i.hasClass(gt) ? le(i, t) : A(i, function() {
                    le(i, t)
                }))
            }

            function le(e, t) {
                if (void 0 !== t) {
                    var i = e.find(Mt),
                        n = (s = t, r = e.find(Mt), (a = r.find(At + '[data-anchor="' + s + '"]')).length || (a = r.find(At).eq(s)), a);
                    n.length && G(i, n)
                }
                var s, r, a
            }

            function ce(e, t, i, n) {
                var s = "";
                _.anchors.length && !_.lockAnchors && (e ? (void 0 !== i && (s = i), void 0 === t && (t = e), ue(s + "/" + (Ce = t))) : (void 0 !== e && (Ce = t), ue(i))), he()
            }

            function ue(e) {
                if (_.recordHistory) location.hash = e;
                else if (Pe || Me) at.history.replaceState(ct, ct, "#" + e);
                else {
                    var t = at.location.href.split("#")[0];
                    at.location.replace(t + "#" + e)
                }
            }

            function de(e) {
                var t = e.data("anchor"),
                    i = e.index();
                return void 0 === t && (t = i), t
            }

            function he() {
                var e = rt(xt),
                    t = e.find(Pt),
                    i = de(e),
                    n = de(t),
                    s = String(i);
                t.length && (s = s + "-" + n), s = s.replace("/", "-").replace("#", "");
                var r = new RegExp("\\b\\s?" + vt + "-[^\\s]+\\b", "g");
                xe[0].className = xe[0].className.replace(r, ""), xe.addClass(vt + "-" + s)
            }

            function pe(e) {
                var t = [];
                return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Me && w(e) && _.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
            }

            function fe(e, t) {
                s(0, "internal"), void 0 !== t && (Le = !0), G(e.closest(Mt), e), void 0 !== t && (Le = !1), s(Ue.scrollingSpeed, "internal")
            }

            function me(e) {
                var t = lt.round(e);
                _.css3 && _.autoScrolling && !_.scrollBar ? re("translate3d(0px, -" + t + "px, 0px)", !1) : _.autoScrolling && !_.scrollBar ? Oe.css("top", -t) : _e.scrollTop(t)
            }

            function ve(e) {
                return {
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    "-ms-transform": e,
                    transform: e
                }
            }

            function ge(i, e, n) {
                "all" !== e ? $e[n][e] = i : rt.each(Object.keys($e[n]), function(e, t) {
                    $e[n][t] = i
                })
            }

            function ye(e, t, i) {
                _[e] = t, "internal" !== i && (Ue[e] = t)
            }

            function be() {
                return rt("html").hasClass(mt) ? void we("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (_.continuousVertical && (_.loopTop || _.loopBottom) && (_.continuousVertical = !1, we("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), _.scrollBar && _.scrollOverflow && we("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !_.continuousVertical || !_.scrollBar && _.autoScrolling || (_.continuousVertical = !1, we("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), _.scrollOverflow && !_.scrollOverflowHandler && (_.scrollOverflow = !1, we("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), rt.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"], function(e, t) {
                    _[t] && we("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
                }), void rt.each(_.anchors, function(e, t) {
                    var i = Ht.find("[name]").filter(function() {
                            return rt(this).attr("name") && rt(this).attr("name").toLowerCase() == t.toLowerCase()
                        }),
                        n = Ht.find("[id]").filter(function() {
                            return rt(this).attr("id") && rt(this).attr("id").toLowerCase() == t.toLowerCase()
                        });
                    (n.length || i.length) && (we("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && we("error", '"' + t + '" is is being used by another element `id` property'), i.length && we("error", '"' + t + '" is is being used by another element `name` property'))
                }))
            }

            function we(e, t) {
                console && console[e] && console[e]("fullPage: " + t)
            }
            if (rt("html").hasClass(mt)) be();
            else {
                var _e = rt("html, body"),
                    xe = rt("body"),
                    Te = rt.fn.fullpage;
                _ = rt.extend({
                    menu: !1,
                    anchors: [],
                    lockAnchors: !1,
                    navigation: !1,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: !1,
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    hybrid: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    fitToSectionDelay: 1e3,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    continuousHorizontal: !1,
                    scrollHorizontally: !1,
                    interlockedSlides: !1,
                    dragAndMove: !1,
                    offsetSections: !1,
                    resetSliders: !1,
                    fadingEffect: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    scrollOverflowReset: !1,
                    scrollOverflowHandler: rt.fn.fp_scrolloverflow ? rt.fn.fp_scrolloverflow.iscrollHandler : null,
                    scrollOverflowOptions: null,
                    touchSensitivity: 5,
                    normalScrollElementTouchThreshold: 5,
                    bigSectionsDestination: null,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    responsiveSlides: !1,
                    parallax: !1,
                    parallaxOptions: {
                        type: "reveal",
                        percentage: 62,
                        property: "translate"
                    },
                    sectionSelector: ".section",
                    slideSelector: ".slide",
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null,
                    afterResponsive: null,
                    lazyLoading: !0
                }, _);
                var Se, Ce, ke, Ee, Ae = !1,
                    Pe = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    Me = "ontouchstart" in at || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                    Oe = rt(this),
                    De = Bt.height(),
                    Le = !1,
                    ze = !0,
                    Re = !0,
                    Ne = [],
                    $e = {
                        m: {
                            up: !0,
                            down: !0,
                            left: !0,
                            right: !0
                        }
                    };
                $e.k = rt.extend(!0, {}, $e.m);
                var Ie, Fe, je, Be, He, qe, Xe, Ye, Ve = at.PointerEvent ? {
                        down: "pointerdown",
                        move: "pointermove"
                    } : {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    },
                    We = {
                        touchmove: "ontouchmove" in at ? "touchmove" : Ve.move,
                        touchstart: "ontouchstart" in at ? "touchstart" : Ve.down
                    },
                    Ue = rt.extend(!0, {}, _);
                be(), rt.extend(rt.easing, {
                    easeInOutCubic: function(e, t, i, n, s) {
                        return (t /= s / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
                    }
                }), rt(this).length && (Te.version = "2.9.5", Te.setAutoScrolling = i, Te.setRecordHistory = n, Te.setScrollingSpeed = s, Te.setFitToSection = r, Te.setLockAnchors = function(e) {
                    _.lockAnchors = e
                }, Te.setMouseWheelScrolling = t, Te.setAllowScrolling = a, Te.setKeyboardScrolling = o, Te.moveSectionUp = l, Te.moveSectionDown = c, Te.silentMoveTo = u, Te.moveTo = d, Te.moveSlideRight = h, Te.moveSlideLeft = p, Te.fitToSection = x, Te.reBuild = f, Te.setResponsive = m, Te.destroy = function(e) {
                    i(!1, "internal"), a(!1), o(!1), Oe.addClass(ft), clearTimeout(Be), clearTimeout(je), clearTimeout(Fe), clearTimeout(He), clearTimeout(qe), Bt.off("scroll", v).off("hashchange", $).off("resize", Q), Ht.off("click touchstart", Ct + " a").off("mouseenter", Ct + " li").off("mouseleave", Ct + " li").off("click touchstart", Nt).off("mouseover", _.normalScrollElements).off("mouseout", _.normalScrollElements), rt(_t).off("click touchstart", $t), clearTimeout(Be), clearTimeout(je), e && function() {
                        me(0), Oe.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                            M(rt(this), "src")
                        }), Oe.find("img[data-srcset]").each(function() {
                            M(rt(this), "srcset")
                        }), rt(Ct + ", " + Rt + ", " + $t).remove(), rt(_t).css({
                            height: "",
                            "background-color": "",
                            padding: ""
                        }), rt(At).css({
                            width: ""
                        }), Oe.css({
                            height: "",
                            position: "",
                            "-ms-touch-action": "",
                            "touch-action": ""
                        }), _e.css({
                            overflow: "",
                            height: ""
                        }), rt("html").removeClass(mt), xe.removeClass(ht), rt.each(xe.get(0).className.split(/\s+/), function(e, t) {
                            0 === t.indexOf(vt) && xe.removeClass(t)
                        }), rt(_t + ", " + At).each(function() {
                            _.scrollOverflowHandler && _.scrollOverflowHandler.remove(rt(this)), rt(this).removeClass(Lt + " " + gt)
                        }), ee(Oe), Oe.find(St + ", " + Dt + ", " + Mt).each(function() {
                            rt(this).replaceWith(this.childNodes)
                        }), Oe.css({
                            "-webkit-transition": "none",
                            transition: "none"
                        }), _e.scrollTop(0);
                        var e = [wt, Et, Ot];
                        rt.each(e, function(e, t) {
                            rt("." + t).removeClass(t)
                        })
                    }()
                }, Te.shared = {
                    afterRenderActions: e
                }, _.css3 && (_.css3 = function() {
                    var e, t = ot.createElement("p"),
                        i = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    for (var n in ot.body.insertBefore(t, null), i) t.style[n] !== ct && (t.style[n] = "translate3d(1px,1px,1px)", e = at.getComputedStyle(t).getPropertyValue(i[n]));
                    return ot.body.removeChild(t), e !== ct && 0 < e.length && "none" !== e
                }()), _.scrollBar = _.scrollBar || _.hybrid, Ye = Oe.find(_.sectionSelector), _.anchors.length || (_.anchors = Ye.filter("[data-anchor]").map(function() {
                    return rt(this).data("anchor").toString()
                }).get()), _.navigationTooltips.length || (_.navigationTooltips = Ye.filter("[data-tooltip]").map(function() {
                    return rt(this).data("tooltip").toString()
                }).get()), Oe.css({
                    height: "100%",
                    position: "relative"
                }), Oe.addClass(ut), rt("html").addClass(mt), De = Bt.height(), Oe.removeClass(ft), Oe.find(_.sectionSelector).addClass(wt), Oe.find(_.slideSelector).addClass(Et), rt(_t).each(function(e) {
                    var t, i, n, s, r = rt(this),
                        a = r.find(At),
                        o = a.length;
                    n = r, (s = e) || 0 !== rt(xt).length || n.addClass(gt), Ee = rt(xt), n.css("height", De + "px"), _.paddingTop && n.css("padding-top", _.paddingTop), _.paddingBottom && n.css("padding-bottom", _.paddingBottom), void 0 !== _.sectionsColor[s] && n.css("background-color", _.sectionsColor[s]), void 0 !== _.anchors[s] && n.attr("data-anchor", _.anchors[s]), t = r, i = e, void 0 !== _.anchors[i] && t.hasClass(gt) && te(_.anchors[i], i), _.menu && _.css3 && rt(_.menu).closest(dt).length && rt(_.menu).appendTo(xe), 0 < o ? function(e, t, i) {
                        var n, s = 100 * i,
                            r = 100 / i;
                        t.wrapAll('<div class="' + Ot + '" />'), t.parent().wrap('<div class="fp-slides" />'), e.find(Dt).css("width", s + "%"), 1 < i && (_.controlArrows && ((n = e).find(Mt).after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != _.controlArrowColor && (n.find(jt).css("border-color", "transparent transparent transparent " + _.controlArrowColor), n.find(Ft).css("border-color", "transparent " + _.controlArrowColor + " transparent transparent")), _.loopHorizontal || n.find(Ft).hide()), _.slidesNavigation && function(e, t) {
                            e.append('<div class="' + zt + '"><ul></ul></div>');
                            var i = e.find(Rt);
                            i.addClass(_.slidesNavPosition);
                            for (var n = 0; n < t; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
                            i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(gt)
                        }(e, i)), t.each(function(e) {
                            rt(this).css("width", r + "%"), _.verticalCentered && ne(rt(this))
                        });
                        var a = e.find(Pt);
                        a.length && (0 !== rt(xt).index(_t) || 0 === rt(xt).index(_t) && 0 !== a.index()) ? fe(a, "internal") : t.eq(0).addClass(gt)
                    }(r, a, o) : _.verticalCentered && ne(r)
                }), _.fixedElements && _.css3 && rt(_.fixedElements).appendTo(xe), _.navigation && function() {
                    xe.append('<div id="fp-nav"><ul></ul></div>');
                    var e = rt(Ct);
                    e.addClass(function() {
                        return _.showActiveTooltip ? "fp-show-active " + _.navigationPosition : _.navigationPosition
                    });
                    for (var t = 0; t < rt(_t).length; t++) {
                        var i = "";
                        _.anchors.length && (i = _.anchors[t]);
                        var n = '<li><a href="#' + i + '"><span></span></a>',
                            s = _.navigationTooltips[t];
                        void 0 !== s && "" !== s && (n += '<div class="' + kt + " " + _.navigationPosition + '">' + s + "</div>"), n += "</li>", e.find("ul").append(n)
                    }
                    rt(Ct).css("margin-top", "-" + rt(Ct).height() / 2 + "px"), rt(Ct).find("li").eq(rt(xt).index(_t)).find("a").addClass(gt)
                }(), Oe.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var e, t, i;
                    e = rt(this), t = "enablejsapi=1", i = e.attr("src"), e.attr("src", i + (/\?/.test(i) ? "&" : "?") + t)
                }), _.scrollOverflow ? Ie = _.scrollOverflowHandler.init(_) : e(), a(!0), i(_.autoScrolling, "internal"), J(), he(), "complete" === ot.readyState && N(), Bt.on("load", N), Bt.on("scroll", v).on("hashchange", $).blur(Y).resize(Q), Ht.keydown(F).keyup(B).on("click touchstart", Ct + " a", V).on("click touchstart", Nt, W).on("click", ".fp-tooltip", j), rt(_t).on("click touchstart", $t, X), _.normalScrollElements && (Ht.on("mouseenter touchstart", _.normalScrollElements, function() {
                    a(!1)
                }), Ht.on("mouseleave touchend", _.normalScrollElements, function() {
                    a(!0)
                })));
                var Ge = !1,
                    Ke = 0,
                    Qe = 0,
                    Je = 0,
                    Ze = 0,
                    et = 0,
                    tt = (new Date).getTime(),
                    it = 0,
                    nt = 0,
                    st = De
            }
        }
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
    }(this, function() {
        "use strict";
        var l = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

        function M(e, t) {
            var i = [],
                n = 0;
            if (e && !t && e instanceof l) return e;
            if (e)
                if ("string" == typeof e) {
                    var s, r, a = e.trim();
                    if (0 <= a.indexOf("<") && 0 <= a.indexOf(">")) {
                        var o = "div";
                        for (0 === a.indexOf("<li") && (o = "ul"), 0 === a.indexOf("<tr") && (o = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (o = "tr"), 0 === a.indexOf("<tbody") && (o = "table"), 0 === a.indexOf("<option") && (o = "select"), (r = document.createElement(o)).innerHTML = a, n = 0; n < r.childNodes.length; n += 1) i.push(r.childNodes[n])
                    } else
                        for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], n = 0; n < s.length; n += 1) s[n] && i.push(s[n])
                } else if (e.nodeType || e === window || e === document) i.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (n = 0; n < e.length; n += 1) i.push(e[n]);
            return new l(i)
        }

        function r(e) {
            for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }
        M.fn = l.prototype, M.Class = l, M.Dom7 = l, "resize scroll".split(" ");
        var t = {
            addClass: function(e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.add(t[i]);
                return this
            },
            removeClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.remove(t[i]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
                return this
            },
            attr: function(e, t) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var n = 0; n < this.length; n += 1)
                    if (2 === i.length) this[n].setAttribute(e, t);
                    else
                        for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                var i;
                if (void 0 !== t) {
                    for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransform = e, i.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = e, i.transitionDuration = e
                }
                return this
            },
            on: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, n = e[0],
                    r = e[1],
                    a = e[2],
                    s = e[3];

                function o(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if (i.unshift(e), M(t).is(r)) a.apply(t, i);
                        else
                            for (var n = M(t).parents(), s = 0; s < n.length; s += 1) M(n[s]).is(r) && a.apply(n[s], i)
                    }
                }

                function l(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.unshift(e), a.apply(this, t)
                }
                "function" == typeof e[1] && (n = (i = e)[0], a = i[1], s = i[2], r = void 0), s || (s = !1);
                for (var c, u = n.split(" "), d = 0; d < this.length; d += 1) {
                    var h = this[d];
                    if (r)
                        for (c = 0; c < u.length; c += 1) h.dom7LiveListeners || (h.dom7LiveListeners = []), h.dom7LiveListeners.push({
                            type: n,
                            listener: a,
                            proxyListener: o
                        }), h.addEventListener(u[c], o, s);
                    else
                        for (c = 0; c < u.length; c += 1) h.dom7Listeners || (h.dom7Listeners = []), h.dom7Listeners.push({
                            type: n,
                            listener: a,
                            proxyListener: l
                        }), h.addEventListener(u[c], l, s)
                }
                return this
            },
            off: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, n = e[0],
                    s = e[1],
                    r = e[2],
                    a = e[3];
                "function" == typeof e[1] && (n = (i = e)[0], r = i[1], a = i[2], s = void 0), a || (a = !1);
                for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                    for (var c = 0; c < this.length; c += 1) {
                        var u = this[c];
                        if (s) {
                            if (u.dom7LiveListeners)
                                for (var d = 0; d < u.dom7LiveListeners.length; d += 1) r ? u.dom7LiveListeners[d].listener === r && u.removeEventListener(o[l], u.dom7LiveListeners[d].proxyListener, a) : u.dom7LiveListeners[d].type === o[l] && u.removeEventListener(o[l], u.dom7LiveListeners[d].proxyListener, a)
                        } else if (u.dom7Listeners)
                            for (var h = 0; h < u.dom7Listeners.length; h += 1) r ? u.dom7Listeners[h].listener === r && u.removeEventListener(o[l], u.dom7Listeners[h].proxyListener, a) : u.dom7Listeners[h].type === o[l] && u.removeEventListener(o[l], u.dom7Listeners[h].proxyListener, a)
                    }
                return this
            },
            trigger: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = e[0].split(" "), n = e[1], s = 0; s < i.length; s += 1)
                    for (var r = 0; r < this.length; r += 1) {
                        var a = void 0;
                        try {
                            a = new window.CustomEvent(i[s], {
                                detail: n,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (e) {
                            (a = document.createEvent("Event")).initEvent(i[s], !0, !0), a.detail = n
                        }
                        this[r].dom7EventData = e.filter(function(e, t) {
                            return 0 < t
                        }), this[r].dispatchEvent(a), this[r].dom7EventData = [], delete this[r].dom7EventData
                    }
                return this
            },
            transitionEnd: function(t) {
                var i, n = ["webkitTransitionEnd", "transitionend"],
                    s = this;

                function r(e) {
                    if (e.target === this)
                        for (t.call(this, e), i = 0; i < n.length; i += 1) s.off(n[i], r)
                }
                if (t)
                    for (i = 0; i < n.length; i += 1) s.on(n[i], r);
                return this
            },
            outerWidth: function(e) {
                if (0 < this.length) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (0 < this.length) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function() {
                if (0 < this.length) {
                    var e = this[0],
                        t = e.getBoundingClientRect(),
                        i = document.body,
                        n = e.clientTop || i.clientTop || 0,
                        s = e.clientLeft || i.clientLeft || 0,
                        r = e === window ? window.scrollY : e.scrollTop,
                        a = e === window ? window.scrollX : e.scrollLeft;
                    return {
                        top: t.top + r - n,
                        left: t.left + a - s
                    }
                }
                return null
            },
            css: function(e, t) {
                var i;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1)
                            for (var n in e) this[i].style[n] = e[n];
                        return this
                    }
                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 !== arguments.length || "string" != typeof e) return this;
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            },
            each: function(e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t])) return this;
                return this
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function(e) {
                var t, i, n = this[0];
                if (!n || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (n.matches) return n.matches(e);
                    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                    for (t = M(e), i = 0; i < t.length; i += 1)
                        if (t[i] === n) return !0;
                    return !1
                }
                if (e === document) return n === document;
                if (e === window) return n === window;
                if (e.nodeType || e instanceof l) {
                    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                        if (t[i] === n) return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                var e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                var t, i = this.length;
                return new l(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
            },
            append: function() {
                for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                for (var n = 0; n < t.length; n += 1) {
                    e = t[n];
                    for (var s = 0; s < this.length; s += 1)
                        if ("string" == typeof e) {
                            var r = document.createElement("div");
                            for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
                        } else if (e instanceof l)
                        for (var a = 0; a < e.length; a += 1) this[s].appendChild(e[a]);
                    else this[s].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                var t, i;
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var n = document.createElement("div");
                        for (n.innerHTML = e, i = n.childNodes.length - 1; 0 <= i; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
                    } else if (e instanceof l)
                    for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(e) {
                return 0 < this.length ? e ? this[0].nextElementSibling && M(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
            },
            nextAll: function(e) {
                var t = [],
                    i = this[0];
                if (!i) return new l([]);
                for (; i.nextElementSibling;) {
                    var n = i.nextElementSibling;
                    e ? M(n).is(e) && t.push(n) : t.push(n), i = n
                }
                return new l(t)
            },
            prev: function(e) {
                if (0 < this.length) {
                    var t = this[0];
                    return e ? t.previousElementSibling && M(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
                }
                return new l([])
            },
            prevAll: function(e) {
                var t = [],
                    i = this[0];
                if (!i) return new l([]);
                for (; i.previousElementSibling;) {
                    var n = i.previousElementSibling;
                    e ? M(n).is(e) && t.push(n) : t.push(n), i = n
                }
                return new l(t)
            },
            parent: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? M(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return M(r(t))
            },
            parents: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var n = this[i].parentNode; n;) e ? M(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
                return M(r(t))
            },
            closest: function(e) {
                var t = this;
                return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var n = this[i].querySelectorAll(e), s = 0; s < n.length; s += 1) t.push(n[s]);
                return new l(t)
            },
            children: function(e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var n = this[i].childNodes, s = 0; s < n.length; s += 1) e ? 1 === n[s].nodeType && M(n[s]).is(e) && t.push(n[s]) : 1 === n[s].nodeType && t.push(n[s]);
                return new l(r(t))
            },
            remove: function() {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, n;
                for (i = 0; i < e.length; i += 1) {
                    var s = M(e[i]);
                    for (n = 0; n < s.length; n += 1) this[this.length] = s[n], this.length += 1
                }
                return this
            },
            styles: function() {
                return this[0] ? window.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(t).forEach(function(e) {
            M.fn[e] = t[e]
        });
        var e, i, n, h = "undefined" == typeof window ? {
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {}
                },
                Image: function() {},
                Date: function() {},
                screen: {}
            } : window,
            D = {
                deleteProps: function(e) {
                    var t = e;
                    Object.keys(t).forEach(function(e) {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    })
                },
                nextTick: function(e, t) {
                    return void 0 === t && (t = 0), setTimeout(e, t)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(e, t) {
                    var i, n, s;
                    void 0 === t && (t = "x");
                    var r = h.getComputedStyle(e, null);
                    return h.WebKitCSSMatrix ? (6 < (n = r.transform || r.webkitTransform).split(",").length && (n = n.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), s = new h.WebKitCSSMatrix("none" === n ? "" : n)) : i = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = h.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = h.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
                },
                parseUrlQuery: function(e) {
                    var t, i, n, s, r = {},
                        a = e || h.location.href;
                    if ("string" == typeof a && a.length)
                        for (s = (i = (a = -1 < a.indexOf("?") ? a.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                                return "" !== e
                            })).length, t = 0; t < s; t += 1) n = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                    return r
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                        var s = e[n];
                        if (null != s)
                            for (var r = Object.keys(Object(s)), a = 0, o = r.length; a < o; a += 1) {
                                var l = r[a],
                                    c = Object.getOwnPropertyDescriptor(s, l);
                                void 0 !== c && c.enumerable && (D.isObject(i[l]) && D.isObject(s[l]) ? D.extend(i[l], s[l]) : !D.isObject(i[l]) && D.isObject(s[l]) ? (i[l] = {}, D.extend(i[l], s[l])) : i[l] = s[l])
                            }
                    }
                    return i
                }
            },
            f = "undefined" == typeof document ? {
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return {}
                },
                querySelectorAll: function() {
                    return []
                },
                createElement: function() {
                    return {
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document,
            L = (n = f.createElement("div"), {
                touch: h.Modernizr && !0 === h.Modernizr.touch || !!("ontouchstart" in h || h.DocumentTouch && f instanceof h.DocumentTouch),
                pointerEvents: !(!h.navigator.pointerEnabled && !h.PointerEvent),
                prefixedPointerEvents: !!h.navigator.msPointerEnabled,
                transition: (i = n.style, "transition" in i || "webkitTransition" in i || "MozTransition" in i),
                transforms3d: h.Modernizr && !0 === h.Modernizr.csstransforms3d || (e = n.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
                flexbox: function() {
                    for (var e = n.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                        if (t[i] in e) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in h || "WebkitMutationObserver" in h,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        h.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in h
            }),
            s = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                    t.on(e, t.params.on[e])
                })
            },
            a = {
                components: {
                    configurable: !0
                }
            };
        s.prototype.on = function(e, t) {
            var i = this;
            return "function" != typeof t || e.split(" ").forEach(function(e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e].push(t)
            }), i
        }, s.prototype.once = function(n, s) {
            var r = this;
            return "function" != typeof s ? r : r.on(n, function e() {
                for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
                s.apply(r, t), r.off(n, e)
            })
        }, s.prototype.off = function(e, n) {
            var s = this;
            return e.split(" ").forEach(function(i) {
                void 0 === n ? s.eventsListeners[i] = [] : s.eventsListeners[i].forEach(function(e, t) {
                    e === n && s.eventsListeners[i].splice(t, 1)
                })
            }), s
        }, s.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n, s, r = this;
            return r.eventsListeners && (s = "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), r) : (i = e[0].events, n = e[0].data, e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
                if (r.eventsListeners[e]) {
                    var t = [];
                    r.eventsListeners[e].forEach(function(e) {
                        t.push(e)
                    }), t.forEach(function(e) {
                        e.apply(s, n)
                    })
                }
            })), r
        }, s.prototype.useModulesParams = function(i) {
            var n = this;
            n.modules && Object.keys(n.modules).forEach(function(e) {
                var t = n.modules[e];
                t.params && D.extend(i, t.params)
            })
        }, s.prototype.useModules = function(n) {
            void 0 === n && (n = {});
            var s = this;
            s.modules && Object.keys(s.modules).forEach(function(e) {
                var i = s.modules[e],
                    t = n[e] || {};
                i.instance && Object.keys(i.instance).forEach(function(e) {
                    var t = i.instance[e];
                    s[e] = "function" == typeof t ? t.bind(s) : t
                }), i.on && s.on && Object.keys(i.on).forEach(function(e) {
                    s.on(e, i.on[e])
                }), i.create && i.create.bind(s)(t)
            })
        }, a.components.set = function(e) {
            this.use && this.use(e)
        }, s.installModule = function(t) {
            for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
            var n = this;
            n.prototype.modules || (n.prototype.modules = {});
            var s = t.name || Object.keys(n.prototype.modules).length + "_" + D.now();
            return (n.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
                n.prototype[e] = t.proto[e]
            }), t.static && Object.keys(t.static).forEach(function(e) {
                n[e] = t.static[e]
            }), t.install && t.install.apply(n, e), n
        }, s.use = function(e) {
            for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
            var n = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return n.installModule(e)
            }), n) : n.installModule.apply(n, [e].concat(t))
        }, Object.defineProperties(s, a);
        var o, c = {
                updateSize: function() {
                    var e, t, i = this.$el;
                    e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), D.extend(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this.params,
                        t = this.$wrapperEl,
                        i = this.size,
                        n = this.rtl,
                        s = this.wrongRTL,
                        r = t.children("." + this.params.slideClass),
                        a = this.virtual && e.virtual.enabled ? this.virtual.slides.length : r.length,
                        o = [],
                        l = [],
                        c = [],
                        u = e.slidesOffsetBefore;
                    "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
                    var d = e.slidesOffsetAfter;
                    "function" == typeof d && (d = e.slidesOffsetAfter.call(this));
                    var h = a,
                        p = this.snapGrid.length,
                        f = this.snapGrid.length,
                        m = e.spaceBetween,
                        v = -u,
                        g = 0,
                        y = 0;
                    if (void 0 !== i) {
                        var b, w;
                        "string" == typeof m && 0 <= m.indexOf("%") && (m = parseFloat(m.replace("%", "")) / 100 * i), this.virtualSize = -m, n ? r.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : r.css({
                            marginRight: "",
                            marginBottom: ""
                        }), 1 < e.slidesPerColumn && (b = Math.floor(a / e.slidesPerColumn) === a / this.params.slidesPerColumn ? a : Math.ceil(a / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (b = Math.max(b, e.slidesPerView * e.slidesPerColumn)));
                        for (var _, x = e.slidesPerColumn, T = b / x, S = T - (e.slidesPerColumn * T - a), C = 0; C < a; C += 1) {
                            w = 0;
                            var k = r.eq(C);
                            if (1 < e.slidesPerColumn) {
                                var E = void 0,
                                    A = void 0,
                                    P = void 0;
                                "column" === e.slidesPerColumnFill ? (P = C - (A = Math.floor(C / x)) * x, (S < A || A === S && P === x - 1) && (P += 1) >= x && (P = 0, A += 1), E = A + P * b / x, k.css({
                                    "-webkit-box-ordinal-group": E,
                                    "-moz-box-ordinal-group": E,
                                    "-ms-flex-order": E,
                                    "-webkit-order": E,
                                    order: E
                                })) : A = C - (P = Math.floor(C / T)) * T, k.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== P && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", P)
                            }
                            "none" !== k.css("display") && ("auto" === e.slidesPerView ? (w = this.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0), e.roundLengths && (w = Math.floor(w))) : (w = (i - (e.slidesPerView - 1) * m) / e.slidesPerView, e.roundLengths && (w = Math.floor(w)), r[C] && (this.isHorizontal() ? r[C].style.width = w + "px" : r[C].style.height = w + "px")), r[C] && (r[C].swiperSlideSize = w), c.push(w), e.centeredSlides ? (v = v + w / 2 + g / 2 + m, 0 === g && 0 !== C && (v = v - i / 2 - m), 0 === C && (v = v - i / 2 - m), Math.abs(v) < .001 && (v = 0), y % e.slidesPerGroup == 0 && o.push(v), l.push(v)) : (y % e.slidesPerGroup == 0 && o.push(v), l.push(v), v = v + w + m), this.virtualSize += w + m, g = w, y += 1)
                        }
                        if (this.virtualSize = Math.max(this.virtualSize, i) + d, n && s && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }), L.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }) : t.css({
                                height: this.virtualSize + e.spaceBetween + "px"
                            })), 1 < e.slidesPerColumn && (this.virtualSize = (w + e.spaceBetween) * b, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }) : t.css({
                                height: this.virtualSize + e.spaceBetween + "px"
                            }), e.centeredSlides)) {
                            _ = [];
                            for (var M = 0; M < o.length; M += 1) o[M] < this.virtualSize + o[0] && _.push(o[M]);
                            o = _
                        }
                        if (!e.centeredSlides) {
                            _ = [];
                            for (var O = 0; O < o.length; O += 1) o[O] <= this.virtualSize - i && _.push(o[O]);
                            o = _, 1 < Math.floor(this.virtualSize - i) - Math.floor(o[o.length - 1]) && o.push(this.virtualSize - i)
                        }
                        0 === o.length && (o = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? n ? r.css({
                            marginLeft: m + "px"
                        }) : r.css({
                            marginRight: m + "px"
                        }) : r.css({
                            marginBottom: m + "px"
                        })), D.extend(this, {
                            slides: r,
                            snapGrid: o,
                            slidesGrid: l,
                            slidesSizesGrid: c
                        }), a !== h && this.emit("slidesLengthChange"), o.length !== p && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), l.length !== f && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function() {
                    var e, t = [],
                        i = 0;
                    if ("auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView)
                        for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                            var n = this.activeIndex + e;
                            if (n > this.slides.length) break;
                            t.push(this.slides.eq(n)[0])
                        } else t.push(this.slides.eq(this.activeIndex)[0]);
                    for (e = 0; e < t.length; e += 1)
                        if (void 0 !== t[e]) {
                            var s = t[e].offsetHeight;
                            i = i < s ? s : i
                        }
                    i && this.$wrapperEl.css("height", i + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this.translate || 0);
                    var t = this.params,
                        i = this.slides,
                        n = this.rtl;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var s = -e;
                        n && (s = e), i.removeClass(t.slideVisibleClass);
                        for (var r = 0; r < i.length; r += 1) {
                            var a = i[r],
                                o = (s + (t.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + t.spaceBetween);
                            if (t.watchSlidesVisibility) {
                                var l = -(s - a.swiperSlideOffset),
                                    c = l + this.slidesSizesGrid[r];
                                (0 <= l && l < this.size || 0 < c && c <= this.size || l <= 0 && c >= this.size) && i.eq(r).addClass(t.slideVisibleClass)
                            }
                            a.progress = n ? -o : o
                        }
                    }
                },
                updateProgress: function(e) {
                    void 0 === e && (e = this.translate || 0);
                    var t = this.params,
                        i = this.maxTranslate() - this.minTranslate(),
                        n = this.progress,
                        s = this.isBeginning,
                        r = this.isEnd,
                        a = s,
                        o = r;
                    r = 0 === i ? s = !(n = 0) : (s = (n = (e - this.minTranslate()) / i) <= 0, 1 <= n), D.extend(this, {
                        progress: n,
                        isBeginning: s,
                        isEnd: r
                    }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), s && !a && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (a && !s || o && !r) && this.emit("fromEdge"), this.emit("progress", n)
                },
                updateSlidesClasses: function() {
                    var e, t = this.slides,
                        i = this.params,
                        n = this.$wrapperEl,
                        s = this.activeIndex,
                        r = this.realIndex,
                        a = this.virtual && i.virtual.enabled;
                    t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = a ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                    var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                    var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, i = this.rtl ? this.translate : -this.translate,
                        n = this.slidesGrid,
                        s = this.snapGrid,
                        r = this.params,
                        a = this.activeIndex,
                        o = this.realIndex,
                        l = this.snapIndex,
                        c = e;
                    if (void 0 === c) {
                        for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? c = u : i >= n[u] && i < n[u + 1] && (c = u + 1) : i >= n[u] && (c = u);
                        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                    }
                    if ((t = 0 <= s.indexOf(i) ? s.indexOf(i) : Math.floor(c / r.slidesPerGroup)) >= s.length && (t = s.length - 1), c !== a) {
                        var d = parseInt(this.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                        D.extend(this, {
                            snapIndex: t,
                            realIndex: d,
                            previousIndex: a,
                            activeIndex: c
                        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== d && this.emit("realIndexChange"), this.emit("slideChange")
                    } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t = this.params,
                        i = M(e.target).closest("." + t.slideClass)[0],
                        n = !1;
                    if (i)
                        for (var s = 0; s < this.slides.length; s += 1) this.slides[s] === i && (n = !0);
                    if (!i || !n) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                    this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(M(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = M(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            u = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        i = this.rtl,
                        n = this.translate,
                        s = this.$wrapperEl;
                    if (t.virtualTranslate) return i ? -n : n;
                    var r = D.getTranslate(s[0], e);
                    return i && (r = -r), r || 0
                },
                setTranslate: function(e, t) {
                    var i = this.rtl,
                        n = this.params,
                        s = this.$wrapperEl,
                        r = this.progress,
                        a = 0,
                        o = 0;
                    this.isHorizontal() ? a = i ? -e : e : o = e, n.roundLengths && (a = Math.floor(a), o = Math.floor(o)), n.virtualTranslate || (L.transforms3d ? s.transform("translate3d(" + a + "px, " + o + "px, 0px)") : s.transform("translate(" + a + "px, " + o + "px)")), this.translate = this.isHorizontal() ? a : o;
                    var l = this.maxTranslate() - this.minTranslate();
                    (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }
            },
            d = {
                slideTo: function(e, t, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var s = this,
                        r = e;
                    r < 0 && (r = 0);
                    var a = s.params,
                        o = s.snapGrid,
                        l = s.slidesGrid,
                        c = s.previousIndex,
                        u = s.activeIndex,
                        d = s.rtl,
                        h = s.$wrapperEl,
                        p = Math.floor(r / a.slidesPerGroup);
                    p >= o.length && (p = o.length - 1), (u || a.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
                    var f = -o[p];
                    if (s.updateProgress(f), a.normalizeSlideIndex)
                        for (var m = 0; m < l.length; m += 1) - Math.floor(100 * f) >= Math.floor(100 * l[m]) && (r = m);
                    if (s.initialized) {
                        if (!s.allowSlideNext && f < s.translate && f < s.minTranslate()) return !1;
                        if (!s.allowSlidePrev && f > s.translate && f > s.maxTranslate() && (u || 0) !== r) return !1
                    }
                    return d && -f === s.translate || !d && f === s.translate ? (s.updateActiveIndex(r), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(f), !1) : (0 !== t && L.transition ? (s.setTransition(t), s.setTranslate(f), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i), s.animating || (s.animating = !0, h.transitionEnd(function() {
                        s && !s.destroyed && s.transitionEnd(i)
                    }))) : (s.setTransition(0), s.setTranslate(f), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i), s.transitionEnd(i)), !0)
                },
                slideNext: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var n = this.params,
                        s = this.animating;
                    return n.loop ? !s && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)
                },
                slidePrev: function(e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var n = this.params,
                        s = this.animating;
                    return n.loop ? !s && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
                },
                slideReset: function(e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        i = t.params,
                        n = t.$wrapperEl,
                        s = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        r = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(M(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), D.nextTick(function() {
                            t.slideTo(r)
                        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), D.nextTick(function() {
                            t.slideTo(r)
                        })) : t.slideTo(r)
                    } else t.slideTo(r)
                }
            },
            p = {
                loopCreate: function() {
                    var n = this,
                        e = n.params,
                        t = n.$wrapperEl;
                    t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
                    var s = t.children("." + e.slideClass);
                    if (e.loopFillGroupWithBlank) {
                        var i = e.slidesPerGroup - s.length % e.slidesPerGroup;
                        if (i !== e.slidesPerGroup) {
                            for (var r = 0; r < i; r += 1) {
                                var a = M(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                                t.append(a)
                            }
                            s = t.children("." + e.slideClass)
                        }
                    }
                    "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), n.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), n.loopedSlides += e.loopAdditionalSlides, n.loopedSlides > s.length && (n.loopedSlides = s.length);
                    var o = [],
                        l = [];
                    s.each(function(e, t) {
                        var i = M(t);
                        e < n.loopedSlides && l.push(t), e < s.length && e >= s.length - n.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e)
                    });
                    for (var c = 0; c < l.length; c += 1) t.append(M(l[c].cloneNode(!0)).addClass(e.slideDuplicateClass));
                    for (var u = o.length - 1; 0 <= u; u -= 1) t.prepend(M(o[u].cloneNode(!0)).addClass(e.slideDuplicateClass))
                },
                loopFix: function() {
                    var e, t = this.params,
                        i = this.activeIndex,
                        n = this.slides,
                        s = this.loopedSlides,
                        r = this.allowSlidePrev,
                        a = this.allowSlideNext;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0, i < s ? (e = n.length - 3 * s + i, e += s, this.slideTo(e, 0, !1, !0)) : ("auto" === t.slidesPerView && 2 * s <= i || i > n.length - 2 * t.slidesPerView) && (e = -n.length + i + s, e += s, this.slideTo(e, 0, !1, !0)), this.allowSlidePrev = r, this.allowSlideNext = a
                },
                loopDestroy: function() {
                    var e = this.$wrapperEl,
                        t = this.params,
                        i = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            m = {
                setGrabCursor: function(e) {
                    if (!L.touch && this.params.simulateTouch) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    L.touch || (this.el.style.cursor = "")
                }
            },
            v = {
                appendSlide: function(e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
                    else t.append(e);
                    i.loop && this.loopCreate(), i.observer && L.observer || this.update()
                },
                prependSlide: function(e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        n = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var s = n + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                        s = n + e.length
                    } else i.prepend(e);
                    t.loop && this.loopCreate(), t.observer && L.observer || this.update(), this.slideTo(s, 0, !1)
                },
                removeSlide: function(e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        n = this.activeIndex;
                    t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                    var s, r = n;
                    if ("object" == typeof e && "length" in e) {
                        for (var a = 0; a < e.length; a += 1) s = e[a], this.slides[s] && this.slides.eq(s).remove(), s < r && (r -= 1);
                        r = Math.max(r, 0)
                    } else s = e, this.slides[s] && this.slides.eq(s).remove(), s < r && (r -= 1), r = Math.max(r, 0);
                    t.loop && this.loopCreate(), t.observer && L.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            g = function() {
                var e = h.navigator.userAgent,
                    t = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: h.cordova || h.phonegap,
                        phonegap: h.cordova || h.phonegap
                    },
                    i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    s = e.match(/(iPad).*OS\s([\d_]+)/),
                    r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    a = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), n && !i && (t.os = "android", t.osVersion = n[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || a || r) && (t.os = "ios", t.ios = !0), a && !r && (t.osVersion = a[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (a || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                    var o = t.osVersion.split("."),
                        l = f.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (r || a) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
                }
                return t.pixelRatio = h.devicePixelRatio || 1, t
            }(),
            y = function() {
                var e = this.params,
                    t = this.el;
                if (!t || 0 !== t.offsetWidth) {
                    e.breakpoints && this.setBreakpoint();
                    var i = this.allowSlideNext,
                        n = this.allowSlidePrev;
                    if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                        var s = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                        this.setTranslate(s), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
                    } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || 1 < e.slidesPerView) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
                    this.allowSlidePrev = n, this.allowSlideNext = i
                }
            },
            b = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            w = {
                update: c,
                translate: u,
                transition: {
                    setTransition: function(e, t) {
                        this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                    },
                    transitionStart: function(e) {
                        void 0 === e && (e = !0);
                        var t = this.activeIndex,
                            i = this.params,
                            n = this.previousIndex;
                        i.autoHeight && this.updateAutoHeight(), this.emit("transitionStart"), e && t !== n && (this.emit("slideChangeTransitionStart"), n < t ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart"))
                    },
                    transitionEnd: function(e) {
                        void 0 === e && (e = !0);
                        var t = this.activeIndex,
                            i = this.previousIndex;
                        this.animating = !1, this.setTransition(0), this.emit("transitionEnd"), e && t !== i && (this.emit("slideChangeTransitionEnd"), i < t ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd"))
                    }
                },
                slide: d,
                loop: p,
                grabCursor: m,
                manipulation: v,
                events: {
                    attachEvents: function() {
                        var e = this.params,
                            t = this.touchEvents,
                            i = this.el,
                            n = this.wrapperEl;
                        this.onTouchStart = function(e) {
                            var t = this.touchEventsData,
                                i = this.params,
                                n = this.touches,
                                s = e;
                            if (s.originalEvent && (s = s.originalEvent), t.isTouchEvent = "touchstart" === s.type, (t.isTouchEvent || !("which" in s) || 3 !== s.which) && (!t.isTouched || !t.isMoved))
                                if (i.noSwiping && M(s.target).closest("." + i.noSwipingClass)[0]) this.allowClick = !0;
                                else if (!i.swipeHandler || M(s).closest(i.swipeHandler)[0]) {
                                n.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX, n.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY;
                                var r = n.currentX,
                                    a = n.currentY;
                                if (!(g.ios && !g.cordova && i.iOSEdgeSwipeDetection && r <= i.iOSEdgeSwipeThreshold && r >= window.screen.width - i.iOSEdgeSwipeThreshold)) {
                                    if (D.extend(t, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: void 0,
                                            startMoving: void 0
                                        }), n.startX = r, n.startY = a, t.touchStartTime = D.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, 0 < i.threshold && (t.allowThresholdMove = !1), "touchstart" !== s.type) {
                                        var o = !0;
                                        M(s.target).is(t.formElements) && (o = !1), f.activeElement && M(f.activeElement).is(t.formElements) && f.activeElement.blur(), o && this.allowTouchMove && s.preventDefault()
                                    }
                                    this.emit("touchStart", s)
                                }
                            }
                        }.bind(this), this.onTouchMove = function(e) {
                            var t = this.touchEventsData,
                                i = this.params,
                                n = this.touches,
                                s = this.rtl,
                                r = e;
                            if (r.originalEvent && (r = r.originalEvent), !t.isTouchEvent || "mousemove" !== r.type) {
                                var a = "touchmove" === r.type ? r.targetTouches[0].pageX : r.pageX,
                                    o = "touchmove" === r.type ? r.targetTouches[0].pageY : r.pageY;
                                if (r.preventedByNestedSwiper) return n.startX = a, void(n.startY = o);
                                if (!this.allowTouchMove) return this.allowClick = !1, void(t.isTouched && (D.extend(n, {
                                    startX: a,
                                    startY: o,
                                    currentX: a,
                                    currentY: o
                                }), t.touchStartTime = D.now()));
                                if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                    if (this.isVertical()) {
                                        if (o < n.startY && this.translate <= this.maxTranslate() || o > n.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void(t.isMoved = !1)
                                    } else if (a < n.startX && this.translate <= this.maxTranslate() || a > n.startX && this.translate >= this.minTranslate()) return;
                                if (t.isTouchEvent && f.activeElement && r.target === f.activeElement && M(r.target).is(t.formElements)) return t.isMoved = !0, void(this.allowClick = !1);
                                if (t.allowTouchCallbacks && this.emit("touchMove", r), !(r.targetTouches && 1 < r.targetTouches.length)) {
                                    n.currentX = a, n.currentY = o;
                                    var l, c = n.currentX - n.startX,
                                        u = n.currentY - n.startY;
                                    if (void 0 === t.isScrolling && (this.isHorizontal() && n.currentY === n.startY || this.isVertical() && n.currentX === n.startX ? t.isScrolling = !1 : 25 <= c * c + u * u && (l = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, t.isScrolling = this.isHorizontal() ? l > i.touchAngle : 90 - l > i.touchAngle)), t.isScrolling && this.emit("touchMoveOpposite", r), "undefined" == typeof startMoving && (n.currentX === n.startX && n.currentY === n.startY || (t.startMoving = !0)), t.isTouched)
                                        if (t.isScrolling) t.isTouched = !1;
                                        else if (t.startMoving) {
                                        this.allowClick = !1, r.preventDefault(), i.touchMoveStopPropagation && !i.nested && r.stopPropagation(), t.isMoved || (i.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", r)), this.emit("sliderMove", r), t.isMoved = !0;
                                        var d = this.isHorizontal() ? c : u;
                                        n.diff = d, d *= i.touchRatio, s && (d = -d), this.swipeDirection = 0 < d ? "prev" : "next", t.currentTranslate = d + t.startTranslate;
                                        var h = !0,
                                            p = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (p = 0), 0 < d && t.currentTranslate > this.minTranslate() ? (h = !1, i.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + d, p))) : d < 0 && t.currentTranslate < this.maxTranslate() && (h = !1, i.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - d, p))), h && (r.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), 0 < i.threshold) {
                                            if (!(Math.abs(d) > i.threshold || t.allowThresholdMove)) return void(t.currentTranslate = t.startTranslate);
                                            if (!t.allowThresholdMove) return t.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, t.currentTranslate = t.startTranslate, void(n.diff = this.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                        }
                                        i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), i.freeMode && (0 === t.velocities.length && t.velocities.push({
                                            position: n[this.isHorizontal() ? "startX" : "startY"],
                                            time: t.touchStartTime
                                        }), t.velocities.push({
                                            position: n[this.isHorizontal() ? "currentX" : "currentY"],
                                            time: D.now()
                                        })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
                                    }
                                }
                            }
                        }.bind(this), this.onTouchEnd = function(e) {
                            var t = this,
                                i = t.touchEventsData,
                                n = t.params,
                                s = t.touches,
                                r = t.rtl,
                                a = t.$wrapperEl,
                                o = t.slidesGrid,
                                l = t.snapGrid,
                                c = e;
                            if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, i.isTouched) {
                                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                                var u, d = D.now(),
                                    h = d - i.touchStartTime;
                                if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), h < 300 && 300 < d - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = D.nextTick(function() {
                                        t && !t.destroyed && t.emit("click", c)
                                    }, 300)), h < 300 && d - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = D.now(), D.nextTick(function() {
                                        t.destroyed || (t.allowClick = !0)
                                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, void(i.isMoved = !1);
                                if (i.isTouched = !1, i.isMoved = !1, u = n.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                                    if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                    if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                                    if (n.freeModeMomentum) {
                                        if (1 < i.velocities.length) {
                                            var p = i.velocities.pop(),
                                                f = i.velocities.pop(),
                                                m = p.position - f.position,
                                                v = p.time - f.time;
                                            t.velocity = m / v, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < v || 300 < D.now() - p.time) && (t.velocity = 0)
                                        } else t.velocity = 0;
                                        t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                        var g = 1e3 * n.freeModeMomentumRatio,
                                            y = t.velocity * g,
                                            b = t.translate + y;
                                        r && (b = -b);
                                        var w, _ = !1,
                                            x = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                                        if (b < t.maxTranslate()) n.freeModeMomentumBounce ? (b + t.maxTranslate() < -x && (b = t.maxTranslate() - x), w = t.maxTranslate(), _ = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate();
                                        else if (b > t.minTranslate()) n.freeModeMomentumBounce ? (b - t.minTranslate() > x && (b = t.minTranslate() + x), w = t.minTranslate(), _ = !0, i.allowMomentumBounce = !0) : b = t.minTranslate();
                                        else if (n.freeModeSticky) {
                                            for (var T, S = 0; S < l.length; S += 1)
                                                if (l[S] > -b) {
                                                    T = S;
                                                    break
                                                }
                                            b = -(b = Math.abs(l[T] - b) < Math.abs(l[T - 1] - b) || "next" === t.swipeDirection ? l[T] : l[T - 1])
                                        }
                                        if (0 !== t.velocity) g = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                                        else if (n.freeModeSticky) return void t.slideReset();
                                        n.freeModeMomentumBounce && _ ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(b), t.transitionStart(), t.animating = !0, a.transitionEnd(function() {
                                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(w), a.transitionEnd(function() {
                                                t && !t.destroyed && t.transitionEnd()
                                            }))
                                        })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(), t.animating || (t.animating = !0, a.transitionEnd(function() {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                                    }(!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                                } else {
                                    for (var C = 0, k = t.slidesSizesGrid[0], E = 0; E < o.length; E += n.slidesPerGroup) void 0 !== o[E + n.slidesPerGroup] ? u >= o[E] && u < o[E + n.slidesPerGroup] && (k = o[(C = E) + n.slidesPerGroup] - o[E]) : u >= o[E] && (C = E, k = o[o.length - 1] - o[o.length - 2]);
                                    var A = (u - o[C]) / k;
                                    if (h > n.longSwipesMs) {
                                        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                        "next" === t.swipeDirection && (A >= n.longSwipesRatio ? t.slideTo(C + n.slidesPerGroup) : t.slideTo(C)), "prev" === t.swipeDirection && (A > 1 - n.longSwipesRatio ? t.slideTo(C + n.slidesPerGroup) : t.slideTo(C))
                                    } else {
                                        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                        "next" === t.swipeDirection && t.slideTo(C + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(C)
                                    }
                                }
                            }
                        }.bind(this), this.onClick = function(e) {
                            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                        }.bind(this);
                        var s = "container" === e.touchEventsTarget ? i : n,
                            r = !!e.nested;
                        if (L.pointerEvents || L.prefixedPointerEvents) s.addEventListener(t.start, this.onTouchStart, !1), (L.touch ? s : f).addEventListener(t.move, this.onTouchMove, r), (L.touch ? s : f).addEventListener(t.end, this.onTouchEnd, !1);
                        else {
                            if (L.touch) {
                                var a = !("touchstart" !== t.start || !L.passiveListener || !e.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                s.addEventListener(t.start, this.onTouchStart, a), s.addEventListener(t.move, this.onTouchMove, L.passiveListener ? {
                                    passive: !1,
                                    capture: r
                                } : r), s.addEventListener(t.end, this.onTouchEnd, a)
                            }(e.simulateTouch && !g.ios && !g.android || e.simulateTouch && !L.touch && g.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), f.addEventListener("mousemove", this.onTouchMove, r), f.addEventListener("mouseup", this.onTouchEnd, !1))
                        }(e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", y)
                    },
                    detachEvents: function() {
                        var e = this.params,
                            t = this.touchEvents,
                            i = this.el,
                            n = this.wrapperEl,
                            s = "container" === e.touchEventsTarget ? i : n,
                            r = !!e.nested;
                        if (L.pointerEvents || L.prefixedPointerEvents) s.removeEventListener(t.start, this.onTouchStart, !1), (L.touch ? s : f).removeEventListener(t.move, this.onTouchMove, r), (L.touch ? s : f).removeEventListener(t.end, this.onTouchEnd, !1);
                        else {
                            if (L.touch) {
                                var a = !("onTouchStart" !== t.start || !L.passiveListener || !e.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                s.removeEventListener(t.start, this.onTouchStart, a), s.removeEventListener(t.move, this.onTouchMove, r), s.removeEventListener(t.end, this.onTouchEnd, a)
                            }(e.simulateTouch && !g.ios && !g.android || e.simulateTouch && !L.touch && g.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), f.removeEventListener("mousemove", this.onTouchMove, r), f.removeEventListener("mouseup", this.onTouchEnd, !1))
                        }(e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", y)
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        var e = this.activeIndex,
                            t = this.loopedSlides;
                        void 0 === t && (t = 0);
                        var i = this.params,
                            n = i.breakpoints;
                        if (n && (!n || 0 !== Object.keys(n).length)) {
                            var s = this.getBreakpoint(n);
                            if (s && this.currentBreakpoint !== s) {
                                var r = s in n ? n[s] : this.originalParams,
                                    a = i.loop && r.slidesPerView !== i.slidesPerView;
                                D.extend(this.params, r), D.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev
                                }), this.currentBreakpoint = s, a && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", r)
                            }
                        }
                    },
                    getBreakpoint: function(e) {
                        if (e) {
                            var t = !1,
                                i = [];
                            Object.keys(e).forEach(function(e) {
                                i.push(e)
                            }), i.sort(function(e, t) {
                                return parseInt(e, 10) - parseInt(t, 10)
                            });
                            for (var n = 0; n < i.length; n += 1) {
                                var s = i[n];
                                s >= h.innerWidth && !t && (t = s)
                            }
                            return t || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        var e = this.isLocked;
                        this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var t = this.classNames,
                            i = this.params,
                            e = this.rtl,
                            n = this.$el,
                            s = [];
                        s.push(i.direction), i.freeMode && s.push("free-mode"), L.flexbox || s.push("no-flexbox"), i.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < i.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (L.pointerEvents || L.prefixedPointerEvents) && s.push("wp8-" + i.direction), s.forEach(function(e) {
                            t.push(i.containerModifierClass + e)
                        }), n.addClass(t.join(" "))
                    },
                    removeClasses: function() {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" "))
                    }
                },
                images: {
                    loadImage: function(e, t, i, n, s, r) {
                        var a;

                        function o() {
                            r && r()
                        }
                        e.complete && s ? o() : t ? ((a = new h.Image).onload = o, a.onerror = o, n && (a.sizes = n), i && (a.srcset = i), t && (a.src = t)) : o()
                    },
                    preloadImages: function() {
                        var e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var n = e.imagesToLoad[i];
                            e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            _ = {},
            x = function(h) {
                function p() {
                    for (var e, s, t, i = [], n = arguments.length; n--;) i[n] = arguments[n];
                    (s = 1 === i.length && i[0].constructor && i[0].constructor === Object ? i[0] : (e = (t = i)[0], t[1])) || (s = {}), s = D.extend({}, s), e && !s.el && (s.el = e), h.call(this, s), Object.keys(w).forEach(function(t) {
                        Object.keys(w[t]).forEach(function(e) {
                            p.prototype[e] || (p.prototype[e] = w[t][e])
                        })
                    });
                    var r = this;
                    void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function(e) {
                        var t = r.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                n = t.params[i];
                            if ("object" != typeof n) return;
                            if (!(i in s && "enabled" in n)) return;
                            !0 === s[i] && (s[i] = {
                                enabled: !0
                            }), "object" != typeof s[i] || "enabled" in s[i] || (s[i].enabled = !0), s[i] || (s[i] = {
                                enabled: !1
                            })
                        }
                    });
                    var a = D.extend({}, b);
                    r.useModulesParams(a), r.params = D.extend({}, a, _, s), r.originalParams = D.extend({}, r.params), r.passedParams = D.extend({}, s);
                    var o = M(r.params.el);
                    if (e = o[0]) {
                        if (1 < o.length) {
                            var l = [];
                            return o.each(function(e, t) {
                                var i = D.extend({}, s, {
                                    el: t
                                });
                                l.push(new p(i))
                            }), l
                        }
                        e.swiper = r, o.data("swiper", r);
                        var c, u, d = o.children("." + r.params.wrapperClass);
                        return D.extend(r, {
                            $el: o,
                            el: e,
                            $wrapperEl: d,
                            wrapperEl: d[0],
                            classNames: [],
                            slides: M(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === r.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === r.params.direction
                            },
                            rtl: "horizontal" === r.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
                            wrongRTL: "-webkit-box" === d.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: r.params.allowSlideNext,
                            allowSlidePrev: r.params.allowSlidePrev,
                            touchEvents: (c = ["touchstart", "touchmove", "touchend"], u = ["mousedown", "mousemove", "mouseup"], L.pointerEvents ? u = ["pointerdown", "pointermove", "pointerup"] : L.prefixedPointerEvents && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), {
                                start: L.touch || !r.params.simulateTouch ? c[0] : u[0],
                                move: L.touch || !r.params.simulateTouch ? c[1] : u[1],
                                end: L.touch || !r.params.simulateTouch ? c[2] : u[2]
                            }),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: D.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: r.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), r.useModules(), r.params.init && r.init(), r
                    }
                }
                h && (p.__proto__ = h);
                var e = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return ((p.prototype = Object.create(h && h.prototype)).constructor = p).prototype.slidesPerViewDynamic = function() {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        n = this.size,
                        s = this.activeIndex,
                        r = 1;
                    if (e.centeredSlides) {
                        for (var a, o = t[s].swiperSlideSize, l = s + 1; l < t.length; l += 1) t[l] && !a && (r += 1, (o += t[l].swiperSlideSize) > n && (a = !0));
                        for (var c = s - 1; 0 <= c; c -= 1) t[c] && !a && (r += 1, (o += t[c].swiperSlideSize) > n && (a = !0))
                    } else
                        for (var u = s + 1; u < t.length; u += 1) i[u] - i[s] < n && (r += 1);
                    return r
                }, p.prototype.update = function() {
                    var i = this;

                    function e() {
                        var e = i.rtl ? -1 * i.translate : i.translate,
                            t = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
                        i.setTranslate(t), i.updateActiveIndex(), i.updateSlidesClasses()
                    }
                    i && !i.destroyed && (i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.params.freeMode ? (e(), i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || e(), i.emit("update"))
                }, p.prototype.init = function() {
                    this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                }, p.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        n = i.params,
                        s = i.$el,
                        r = i.$wrapperEl,
                        a = i.slides;
                    i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                        i.off(e)
                    }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), D.deleteProps(i)), i.destroyed = !0
                }, p.extendDefaults = function(e) {
                    D.extend(_, e)
                }, e.extendedDefaults.get = function() {
                    return _
                }, e.defaults.get = function() {
                    return b
                }, e.Class.get = function() {
                    return h
                }, e.$.get = function() {
                    return M
                }, Object.defineProperties(p, e), p
            }(s),
            T = {
                name: "device",
                proto: {
                    device: g
                },
                static: {
                    device: g
                }
            },
            S = {
                name: "support",
                proto: {
                    support: L
                },
                static: {
                    support: L
                }
            },
            O = {
                isSafari: (o = h.navigator.userAgent.toLowerCase(), 0 <= o.indexOf("safari") && o.indexOf("chrome") < 0 && o.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(h.navigator.userAgent)
            },
            C = {
                name: "browser",
                proto: {
                    browser: O
                },
                static: {
                    browser: O
                }
            },
            k = {
                name: "resize",
                create: function() {
                    var e = this;
                    D.extend(e, {
                        resize: {
                            resizeHandler: function() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        h.addEventListener("resize", this.resize.resizeHandler), h.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        h.removeEventListener("resize", this.resize.resizeHandler), h.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            E = {
                func: h.MutationObserver || h.WebkitMutationObserver,
                attach: function(e, t) {
                    void 0 === t && (t = {});
                    var i = this,
                        n = new E.func(function(e) {
                            e.forEach(function(e) {
                                i.emit("observerUpdate", e)
                            })
                        });
                    n.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), i.observer.observers.push(n)
                },
                init: function() {
                    if (L.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], {
                            childList: !1
                        }), this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    this.observer.observers.forEach(function(e) {
                        e.disconnect()
                    }), this.observer.observers = []
                }
            },
            A = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1
                },
                create: function() {
                    D.extend(this, {
                        observer: {
                            init: E.init.bind(this),
                            attach: E.attach.bind(this),
                            destroy: E.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        this.observer.init()
                    },
                    destroy: function() {
                        this.observer.destroy()
                    }
                }
            },
            P = {
                update: function(e) {
                    var t = this,
                        i = t.params,
                        n = i.slidesPerView,
                        s = i.slidesPerGroup,
                        r = i.centeredSlides,
                        a = t.virtual,
                        o = a.from,
                        l = a.to,
                        c = a.slides,
                        u = a.slidesGrid,
                        d = a.renderSlide,
                        h = a.offset;
                    t.updateActiveIndex();
                    var p, f, m, v = t.activeIndex || 0;
                    p = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top", m = r ? (f = Math.floor(n / 2) + s, Math.floor(n / 2) + s) : (f = n + (s - 1), s);
                    var g = Math.max((v || 0) - m, 0),
                        y = Math.min((v || 0) + f, c.length - 1),
                        b = (t.slidesGrid[g] || 0) - (t.slidesGrid[0] || 0);

                    function w() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (D.extend(t.virtual, {
                            from: g,
                            to: y,
                            offset: b,
                            slidesGrid: t.slidesGrid
                        }), o === g && l === y && !e) return t.slidesGrid !== u && b !== h && t.slides.css(p, b + "px"), void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                        offset: b,
                        from: g,
                        to: y,
                        slides: function() {
                            for (var e = [], t = g; t <= y; t += 1) e.push(c[t]);
                            return e
                        }()
                    }), void w();
                    var _ = [],
                        x = [];
                    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else
                        for (var T = o; T <= l; T += 1)(T < g || y < T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
                    for (var S = 0; S < c.length; S += 1) g <= S && S <= y && (void 0 === l || e ? x.push(S) : (l < S && x.push(S), S < o && _.push(S)));
                    x.forEach(function(e) {
                        t.$wrapperEl.append(d(c[e], e))
                    }), _.sort(function(e, t) {
                        return e < t
                    }).forEach(function(e) {
                        t.$wrapperEl.prepend(d(c[e], e))
                    }), t.$wrapperEl.children(".swiper-slide").css(p, b + "px"), w()
                },
                renderSlide: function(e, t) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                    var n = i.renderSlide ? M(i.renderSlide.call(this, e, t)) : M('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = n), n
                },
                appendSlide: function(e) {
                    this.virtual.slides.push(e), this.virtual.update(!0)
                },
                prependSlide: function(e) {
                    if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                        var t = this.virtual.cache,
                            i = {};
                        Object.keys(t).forEach(function(e) {
                            i[e + 1] = t[e]
                        }), this.virtual.cache = i
                    }
                    this.virtual.update(!0), this.slideNext(0)
                }
            },
            z = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null
                    }
                },
                create: function() {
                    D.extend(this, {
                        virtual: {
                            update: P.update.bind(this),
                            appendSlide: P.appendSlide.bind(this),
                            prependSlide: P.prependSlide.bind(this),
                            renderSlide: P.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var e = {
                                watchSlidesProgress: !0
                            };
                            D.extend(this.params, e), D.extend(this.originalParams, e), this.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            },
            R = {
                handle: function(e) {
                    var t = e;
                    t.originalEvent && (t = t.originalEvent);
                    var i = t.keyCode || t.charCode;
                    if (!this.allowSlideNext && (this.isHorizontal() && 39 === i || this.isVertical() && 40 === i)) return !1;
                    if (!this.allowSlidePrev && (this.isHorizontal() && 37 === i || this.isVertical() && 38 === i)) return !1;
                    if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                        if (this.params.keyboard.onlyInViewport && (37 === i || 39 === i || 38 === i || 40 === i)) {
                            var n = !1;
                            if (0 < this.$el.parents("." + this.params.slideClass).length && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var s = h.pageXOffset,
                                r = h.pageYOffset,
                                a = h.innerWidth,
                                o = h.innerHeight,
                                l = this.$el.offset();
                            this.rtl && (l.left -= this.$el[0].scrollLeft);
                            for (var c = [
                                    [l.left, l.top],
                                    [l.left + this.width, l.top],
                                    [l.left, l.top + this.height],
                                    [l.left + this.width, l.top + this.height]
                                ], u = 0; u < c.length; u += 1) {
                                var d = c[u];
                                d[0] >= s && d[0] <= s + a && d[1] >= r && d[1] <= r + o && (n = !0)
                            }
                            if (!n) return
                        }
                        this.isHorizontal() ? (37 !== i && 39 !== i || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === i && !this.rtl || 37 === i && this.rtl) && this.slideNext(), (37 === i && !this.rtl || 39 === i && this.rtl) && this.slidePrev()) : (38 !== i && 40 !== i || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === i && this.slideNext(), 38 === i && this.slidePrev()), this.emit("keyPress", i)
                    }
                },
                enable: function() {
                    this.keyboard.enabled || (M(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                },
                disable: function() {
                    this.keyboard.enabled && (M(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                }
            },
            N = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function() {
                    D.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: R.enable.bind(this),
                            disable: R.disable.bind(this),
                            handle: R.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function() {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            },
            $ = {
                lastScrollTime: D.now(),
                event: -1 < h.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                    var e = "onwheel" in f;
                    if (!e) {
                        var t = f.createElement("div");
                        t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                    }
                    return !e && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (e = f.implementation.hasFeature("Events.wheel", "3.0")), e
                }() ? "wheel" : "mousewheel",
                normalize: function(e) {
                    var t = 0,
                        i = 0,
                        n = 0,
                        s = 0;
                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: n,
                        pixelY: s
                    }
                },
                handle: function(e) {
                    var t = e,
                        i = this,
                        n = i.params.mousewheel;
                    t.originalEvent && (t = t.originalEvent);
                    var s = 0,
                        r = i.rtl ? -1 : 1,
                        a = $.normalize(t);
                    if (n.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                            s = a.pixelX * r
                        } else {
                            if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                            s = a.pixelY
                        }
                    else s = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * r : -a.pixelY;
                    if (0 === s) return !0;
                    if (n.invert && (s = -s), i.params.freeMode) {
                        var o = i.getTranslate() + s * n.sensitivity,
                            l = i.isBeginning,
                            c = i.isEnd;
                        if (o >= i.minTranslate() && (o = i.minTranslate()), o <= i.maxTranslate() && (o = i.maxTranslate()), i.setTransition(0), i.setTranslate(o), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!l && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = D.nextTick(function() {
                                i.slideReset()
                            }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), 0 === o || o === i.maxTranslate()) return !0
                    } else {
                        if (60 < D.now() - i.mousewheel.lastScrollTime)
                            if (s < 0)
                                if (i.isEnd && !i.params.loop || i.animating) {
                                    if (n.releaseOnEdges) return !0
                                } else i.slideNext(), i.emit("scroll", t);
                        else if (i.isBeginning && !i.params.loop || i.animating) {
                            if (n.releaseOnEdges) return !0
                        } else i.slidePrev(), i.emit("scroll", t);
                        i.mousewheel.lastScrollTime = (new h.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                enable: function() {
                    if (!$.event) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = M(this.params.mousewheel.eventsTarged)), e.on($.event, this.mousewheel.handle), this.mousewheel.enabled = !0
                },
                disable: function() {
                    if (!$.event) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = M(this.params.mousewheel.eventsTarged)), e.off($.event, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
                }
            },
            I = {
                update: function() {
                    var e = this.params.navigation;
                    if (!this.params.loop) {
                        var t = this.navigation,
                            i = t.$nextEl,
                            n = t.$prevEl;
                        n && 0 < n.length && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && 0 < i.length && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                    }
                },
                init: function() {
                    var e, t, i = this,
                        n = i.params.navigation;
                    (n.nextEl || n.prevEl) && (n.nextEl && (e = M(n.nextEl), i.params.uniqueNavElements && "string" == typeof n.nextEl && 1 < e.length && 1 === i.$el.find(n.nextEl).length && (e = i.$el.find(n.nextEl))), n.prevEl && (t = M(n.prevEl), i.params.uniqueNavElements && "string" == typeof n.prevEl && 1 < t.length && 1 === i.$el.find(n.prevEl).length && (t = i.$el.find(n.prevEl))), e && 0 < e.length && e.on("click", function(e) {
                        e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
                    }), t && 0 < t.length && t.on("click", function(e) {
                        e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
                    }), D.extend(i.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0]
                    }))
                },
                destroy: function() {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
                }
            },
            F = {
                update: function() {
                    var e = this.rtl,
                        n = this.params.pagination;
                    if (n.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var s, t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            i = this.pagination.$el,
                            r = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (this.params.loop ? ((s = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > t - 1 - 2 * this.loopedSlides && (s -= t - 2 * this.loopedSlides), r - 1 < s && (s -= r), s < 0 && "bullets" !== this.params.paginationType && (s = r + s)) : s = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === n.type && this.pagination.bullets && 0 < this.pagination.bullets.length) {
                            var a = this.pagination.bullets;
                            if (n.dynamicBullets && (this.pagination.bulletSize = a.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(this.isHorizontal() ? "width" : "height", 5 * this.pagination.bulletSize + "px")), a.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev"), 1 < i.length) a.each(function(e, t) {
                                var i = M(t);
                                i.index() === s && (i.addClass(n.bulletActiveClass), n.dynamicBullets && (i.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), i.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")))
                            });
                            else {
                                var o = a.eq(s);
                                o.addClass(n.bulletActiveClass), n.dynamicBullets && (o.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), o.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                            }
                            if (n.dynamicBullets) {
                                var l = Math.min(a.length, 5),
                                    c = (this.pagination.bulletSize * l - this.pagination.bulletSize) / 2 - s * this.pagination.bulletSize,
                                    u = e ? "right" : "left";
                                a.css(this.isHorizontal() ? u : "top", c + "px")
                            }
                        }
                        if ("fraction" === n.type && (i.find("." + n.currentClass).text(s + 1), i.find("." + n.totalClass).text(r)), "progressbar" === n.type) {
                            var d = (s + 1) / r,
                                h = d,
                                p = 1;
                            this.isHorizontal() || (p = d, h = 1), i.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + p + ")").transition(this.params.speed)
                        }
                        "custom" === n.type && n.renderCustom ? (i.html(n.renderCustom(this, s + 1, r)), this.emit("paginationRender", this, i[0])) : this.emit("paginationUpdate", this, i[0]), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)
                    }
                },
                render: function() {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            i = this.pagination.$el,
                            n = "";
                        if ("bullets" === e.type) {
                            for (var s = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < s; r += 1) e.renderBullet ? n += e.renderBullet.call(this, r, e.bulletClass) : n += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            i.html(n), this.pagination.bullets = i.find("." + e.bulletClass)
                        }
                        "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(n)), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(n)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                    }
                },
                init: function() {
                    var i = this,
                        e = i.params.pagination;
                    if (e.el) {
                        var t = M(e.el);
                        0 !== t.length && (i.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === i.$el.find(e.el).length && (t = i.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && t.addClass("" + e.modifierClass + e.type + "-dynamic"), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                            e.preventDefault();
                            var t = M(this).index() * i.params.slidesPerGroup;
                            i.params.loop && (t += i.loopedSlides), i.slideTo(t)
                        }), D.extend(i.pagination, {
                            $el: t,
                            el: t[0]
                        }))
                    }
                },
                destroy: function() {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                    }
                }
            },
            j = {
                setTranslate: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.rtl,
                            i = this.progress,
                            n = e.dragSize,
                            s = e.trackSize,
                            r = e.$dragEl,
                            a = e.$el,
                            o = this.params.scrollbar,
                            l = n,
                            c = (s - n) * i;
                        t && this.isHorizontal() ? 0 < (c = -c) ? (l = n - c, c = 0) : s < -c + n && (l = s + c) : c < 0 ? (l = n + c, c = 0) : s < c + n && (l = s - c), this.isHorizontal() ? (L.transforms3d ? r.transform("translate3d(" + c + "px, 0, 0)") : r.transform("translateX(" + c + "px)"), r[0].style.width = l + "px") : (L.transforms3d ? r.transform("translate3d(0px, " + c + "px, 0)") : r.transform("translateY(" + c + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), a[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                            a[0].style.opacity = 0, a.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                },
                updateSize: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                            t = e.$dragEl,
                            i = e.$el;
                        t[0].style.width = "", t[0].style.height = "";
                        var n, s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            r = this.size / this.virtualSize,
                            a = r * (s / this.size);
                        n = "auto" === this.params.scrollbar.dragSize ? s * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = n + "px" : t[0].style.height = n + "px", i[0].style.display = 1 <= r ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), D.extend(e, {
                            trackSize: s,
                            divider: r,
                            moveDivider: a,
                            dragSize: n
                        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function(e) {
                    var t, i = this.scrollbar,
                        n = i.$el,
                        s = i.dragSize,
                        r = i.trackSize;
                    t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - n.offset()[this.isHorizontal() ? "left" : "top"] - s / 2) / (r - s), t = Math.max(Math.min(t, 1), 0), this.rtl && (t = 1 - t);
                    var a = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                    this.updateProgress(a), this.setTranslate(a), this.updateActiveIndex(), this.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar,
                        n = this.$wrapperEl,
                        s = i.$el,
                        r = i.$dragEl;
                    this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), t.hide && s.css("opacity", 1), this.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this.scrollbar,
                        i = this.$wrapperEl,
                        n = t.$el,
                        s = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = D.nextTick(function() {
                        i.css("opacity", 0), i.transition(400)
                    }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideReset())
                },
                enableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar.$el,
                            t = L.touch ? e[0] : document;
                        e.on(this.scrollbar.dragEvents.start, this.scrollbar.onDragStart), M(t).on(this.scrollbar.dragEvents.move, this.scrollbar.onDragMove), M(t).on(this.scrollbar.dragEvents.end, this.scrollbar.onDragEnd)
                    }
                },
                disableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar.$el,
                            t = L.touch ? e[0] : document;
                        e.off(this.scrollbar.dragEvents.start), M(t).off(this.scrollbar.dragEvents.move), M(t).off(this.scrollbar.dragEvents.end)
                    }
                },
                init: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.$el,
                            i = this.touchEvents,
                            n = this.params.scrollbar,
                            s = M(n.el);
                        this.params.uniqueNavElements && "string" == typeof n.el && 1 < s.length && 1 === t.find(n.el).length && (s = t.find(n.el));
                        var r = s.find(".swiper-scrollbar-drag");
                        0 === r.length && (r = M('<div class="swiper-scrollbar-drag"></div>'), s.append(r)), this.scrollbar.dragEvents = !1 !== this.params.simulateTouch || L.touch ? i : {
                            start: "mousedown",
                            move: "mousemove",
                            end: "mouseup"
                        }, D.extend(e, {
                            $el: s,
                            el: s[0],
                            $dragEl: r,
                            dragEl: r[0]
                        }), n.draggable && e.enableDraggable()
                    }
                },
                destroy: function() {
                    this.scrollbar.disableDraggable()
                }
            },
            B = {
                setTransform: function(e, t) {
                    var i = this.rtl,
                        n = M(e),
                        s = i ? -1 : 1,
                        r = n.attr("data-swiper-parallax") || "0",
                        a = n.attr("data-swiper-parallax-x"),
                        o = n.attr("data-swiper-parallax-y"),
                        l = n.attr("data-swiper-parallax-scale"),
                        c = n.attr("data-swiper-parallax-opacity");
                    if (a || o ? (a = a || "0", o = o || "0") : this.isHorizontal() ? (a = r, o = "0") : (o = r, a = "0"), a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t * s + "%" : a * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != c) {
                        var u = c - (c - 1) * (1 - Math.abs(t));
                        n[0].style.opacity = u
                    }
                    if (null == l) n.transform("translate3d(" + a + ", " + o + ", 0px)");
                    else {
                        var d = l - (l - 1) * (1 - Math.abs(t));
                        n.transform("translate3d(" + a + ", " + o + ", 0px) scale(" + d + ")")
                    }
                },
                setTranslate: function() {
                    var n = this,
                        e = n.$el,
                        t = n.slides,
                        s = n.progress,
                        r = n.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        n.parallax.setTransform(t, s)
                    }), t.each(function(e, t) {
                        var i = t.progress;
                        1 < n.params.slidesPerGroup && "auto" !== n.params.slidesPerView && (i += Math.ceil(e / 2) - s * (r.length - 1)), i = Math.min(Math.max(i, -1), 1), M(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                            n.parallax.setTransform(t, i)
                        })
                    })
                },
                setTransition: function(s) {
                    void 0 === s && (s = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        var i = M(t),
                            n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || s;
                        0 === s && (n = 0), i.transition(n)
                    })
                }
            },
            H = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        i = e.targetTouches[0].pageY,
                        n = e.targetTouches[1].pageX,
                        s = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
                },
                onGestureStart: function(e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !L.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, n.scaleStart = H.getDistanceBetweenTouches(e)
                    }
                    n.$slideEl && n.$slideEl.length || (n.$slideEl = M(this), 0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0), this.zoom.isScaling = !0) : n.$imageEl = void 0
                },
                onGestureChange: function(e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!L.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, n.scaleMove = H.getDistanceBetweenTouches(e)
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (L.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!L.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this.zoom,
                        i = t.gesture,
                        n = t.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (g.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this.zoom,
                        i = t.gesture,
                        n = t.image,
                        s = t.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                        n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = D.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = D.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX), this.rtl && (n.startY = -n.startY));
                        var r = n.width * t.scale,
                            a = n.height * t.scale;
                        if (!(r < i.slideWidth && a < i.slideHeight)) {
                            if (n.minX = Math.min(i.slideWidth / 2 - r / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - a / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !t.isScaling) {
                                if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this.zoom,
                        t = e.gesture,
                        i = e.image,
                        n = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var s = 300,
                            r = 300,
                            a = n.x * s,
                            o = i.currentX + a,
                            l = n.y * r,
                            c = i.currentY + l;
                        0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (r = Math.abs((c - i.currentY) / n.y));
                        var u = Math.max(s, r);
                        i.currentX = o, i.currentY = c;
                        var d = i.width * e.scale,
                            h = i.height * e.scale;
                        i.minX = Math.min(t.slideWidth / 2 - d / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
                },
                toggle: function(e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in: function(e) {
                    var t, i, n, s, r, a, o, l, c, u, d, h, p, f, m, v, g = this.zoom,
                        y = this.params.zoom,
                        b = g.gesture,
                        w = g.image;
                    b.$slideEl || (b.$slideEl = this.clickedSlide ? M(this.clickedSlide) : this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas"), b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)), b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass("" + y.zoomedSlideClass), i = void 0 === w.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = w.touchesStart.x, w.touchesStart.y), g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (m = b.$slideEl[0].offsetWidth, v = b.$slideEl[0].offsetHeight, n = b.$slideEl.offset().left + m / 2 - t, s = b.$slideEl.offset().top + v / 2 - i, o = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, c = o * g.scale, u = l * g.scale, p = -(d = Math.min(m / 2 - c / 2, 0)), f = -(h = Math.min(v / 2 - u / 2, 0)), (r = n * g.scale) < d && (r = d), p < r && (r = p), (a = s * g.scale) < h && (a = h), f < a && (a = f)) : a = r = 0, b.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + a + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
                },
                out: function() {
                    var e = this.zoom,
                        t = this.params.zoom,
                        i = e.gesture;
                    i.$slideEl || (i.$slideEl = this.clickedSlide ? M(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function() {
                    var n = this,
                        s = n.zoom;
                    if (!s.enabled) {
                        s.enabled = !0;
                        var e = n.slides,
                            t = !("touchstart" !== n.touchEvents.start || !L.passiveListener || !n.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        L.gestures ? (e.on("gesturestart", s.onGestureStart, t), e.on("gesturechange", s.onGestureChange, t), e.on("gestureend", s.onGestureEnd, t)) : "touchstart" === n.touchEvents.start && (e.on(n.touchEvents.start, s.onGestureStart, t), e.on(n.touchEvents.move, s.onGestureChange, t), e.on(n.touchEvents.end, s.onGestureEnd, t)), n.slides.each(function(e, t) {
                            var i = M(t);
                            0 < i.find("." + n.params.zoom.containerClass).length && i.on(n.touchEvents.move, s.onTouchMove)
                        })
                    }
                },
                disable: function() {
                    var n = this,
                        s = n.zoom;
                    if (s.enabled) {
                        n.zoom.enabled = !1;
                        var e = n.slides,
                            t = !("touchstart" !== n.touchEvents.start || !L.passiveListener || !n.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        L.gestures ? (e.off("gesturestart", s.onGestureStart, t), e.off("gesturechange", s.onGestureChange, t), e.off("gestureend", s.onGestureEnd, t)) : "touchstart" === n.touchEvents.start && (e.off(n.touchEvents.start, s.onGestureStart, t), e.off(n.touchEvents.move, s.onGestureChange, t), e.off(n.touchEvents.end, s.onGestureEnd, t)), n.slides.each(function(e, t) {
                            var i = M(t);
                            0 < i.find("." + n.params.zoom.containerClass).length && i.off(n.touchEvents.move, s.onTouchMove)
                        })
                    }
                }
            },
            q = {
                loadInSlide: function(e, l) {
                    void 0 === l && (l = !0);
                    var c = this,
                        u = c.params.lazy;
                    if (void 0 !== e && 0 !== c.slides.length) {
                        var d = c.virtual && c.params.virtual.enabled ? c.$wrapperEl.children("." + c.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : c.slides.eq(e),
                            t = d.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")");
                        !d.hasClass(u.elementClass) || d.hasClass(u.loadedClass) || d.hasClass(u.loadingClass) || (t = t.add(d[0])), 0 !== t.length && t.each(function(e, t) {
                            var n = M(t);
                            n.addClass(u.loadingClass);
                            var s = n.attr("data-background"),
                                r = n.attr("data-src"),
                                a = n.attr("data-srcset"),
                                o = n.attr("data-sizes");
                            c.loadImage(n[0], r || s, a, o, !1, function() {
                                if (null != c && c && (!c || c.params) && !c.destroyed) {
                                    if (s ? (n.css("background-image", 'url("' + s + '")'), n.removeAttr("data-background")) : (a && (n.attr("srcset", a), n.removeAttr("data-srcset")), o && (n.attr("sizes", o), n.removeAttr("data-sizes")), r && (n.attr("src", r), n.removeAttr("data-src"))), n.addClass(u.loadedClass).removeClass(u.loadingClass), d.find("." + u.preloaderClass).remove(), c.params.loop && l) {
                                        var e = d.attr("data-swiper-slide-index");
                                        if (d.hasClass(c.params.slideDuplicateClass)) {
                                            var t = c.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + c.params.slideDuplicateClass + ")");
                                            c.lazy.loadInSlide(t.index(), !1)
                                        } else {
                                            var i = c.$wrapperEl.children("." + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            c.lazy.loadInSlide(i.index(), !1)
                                        }
                                    }
                                    c.emit("lazyImageReady", d[0], n[0])
                                }
                            }), c.emit("lazyImageLoad", d[0], n[0])
                        })
                    }
                },
                load: function() {
                    var n = this,
                        t = n.$wrapperEl,
                        i = n.params,
                        s = n.slides,
                        e = n.activeIndex,
                        r = n.virtual && i.virtual.enabled,
                        a = i.lazy,
                        o = i.slidesPerView;

                    function l(e) {
                        if (r) {
                            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                        } else if (s[e]) return !0;
                        return !1
                    }

                    function c(e) {
                        return r ? M(e).attr("data-swiper-slide-index") : M(e).index()
                    }
                    if ("auto" === o && (o = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(e, t) {
                        var i = r ? M(t).attr("data-swiper-slide-index") : M(t).index();
                        n.lazy.loadInSlide(i)
                    });
                    else if (1 < o)
                        for (var u = e; u < e + o; u += 1) l(u) && n.lazy.loadInSlide(u);
                    else n.lazy.loadInSlide(e);
                    if (a.loadPrevNext)
                        if (1 < o || a.loadPrevNextAmount && 1 < a.loadPrevNextAmount) {
                            for (var d = a.loadPrevNextAmount, h = o, p = Math.min(e + h + Math.max(d, h), s.length), f = Math.max(e - Math.max(h, d), 0), m = e + o; m < p; m += 1) l(m) && n.lazy.loadInSlide(m);
                            for (var v = f; v < e; v += 1) l(v) && n.lazy.loadInSlide(v)
                        } else {
                            var g = t.children("." + i.slideNextClass);
                            0 < g.length && n.lazy.loadInSlide(c(g));
                            var y = t.children("." + i.slidePrevClass);
                            0 < y.length && n.lazy.loadInSlide(c(y))
                        }
                }
            },
            X = {
                LinearSpline: function(e, t) {
                    var i, n, s, r, a;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (a = function(e, t) {
                            for (n = -1, i = e.length; 1 < i - n;) e[s = i + n >> 1] <= t ? n = s : i = s;
                            return i
                        }(this.x, e), r = a - 1, (e - this.x[r]) * (this.y[a] - this.y[r]) / (this.x[a] - this.x[r]) + this.y[r]) : 0
                    }, this
                },
                getInterpolateFunction: function(e) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new X.LinearSpline(this.slidesGrid, e.slidesGrid) : new X.LinearSpline(this.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    var i, n, s = this,
                        r = s.controller.control;

                    function a(e) {
                        var t = e.rtl && "horizontal" === e.params.direction ? -s.translate : s.translate;
                        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * i + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(r))
                        for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof x && a(r[o]);
                    else r instanceof x && t !== r && a(r)
                },
                setTransition: function(t, e) {
                    var i, n = this,
                        s = n.controller.control;

                    function r(e) {
                        e.setTransition(t, n), 0 !== t && (e.transitionStart(), e.$wrapperEl.transitionEnd(function() {
                            s && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(), e.transitionEnd())
                        }))
                    }
                    if (Array.isArray(s))
                        for (i = 0; i < s.length; i += 1) s[i] !== e && s[i] instanceof x && r(s[i]);
                    else s instanceof x && e !== s && r(s)
                }
            },
            Y = {
                makeElFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addElRole: function(e, t) {
                    return e.attr("role", t), e
                },
                addElLabel: function(e, t) {
                    return e.attr("aria-label", t), e
                },
                disableEl: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enableEl: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    var t = this.params.a11y;
                    if (13 === e.keyCode) {
                        var i = M(e.target);
                        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                    }
                },
                notify: function(e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation: function() {
                    if (!this.params.loop) {
                        var e = this.navigation,
                            t = e.$nextEl,
                            i = e.$prevEl;
                        i && 0 < i.length && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && 0 < t.length && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                    }
                },
                updatePagination: function() {
                    var n = this,
                        s = n.params.a11y;
                    n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.bullets.each(function(e, t) {
                        var i = M(t);
                        n.a11y.makeElFocusable(i), n.a11y.addElRole(i, "button"), n.a11y.addElLabel(i, s.paginationBulletMessage.replace(/{{index}}/, i.index() + 1))
                    })
                },
                init: function() {
                    this.$el.append(this.a11y.liveRegion);
                    var e, t, i = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                },
                destroy: function() {
                    var e, t;
                    this.a11y.liveRegion && 0 < this.a11y.liveRegion.length && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                }
            },
            V = {
                init: function() {
                    if (this.params.history) {
                        if (!h.history || !h.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                        var e = this.history;
                        e.initialized = !0, e.paths = V.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || h.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    this.params.history.replaceState || h.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    this.history.paths = V.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = h.location.pathname.slice(1).split("/").filter(function(e) {
                            return "" !== e
                        }),
                        t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory: function(e, t) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var i = this.slides.eq(t),
                            n = V.slugify(i.attr("data-history"));
                        h.location.pathname.includes(e) || (n = e + "/" + n);
                        var s = h.history.state;
                        s && s.value === n || (this.params.history.replaceState ? h.history.replaceState({
                            value: n
                        }, null, n) : h.history.pushState({
                            value: n
                        }, null, n))
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, i) {
                    if (t)
                        for (var n = 0, s = this.slides.length; n < s; n += 1) {
                            var r = this.slides.eq(n);
                            if (V.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                                var a = r.index();
                                this.slideTo(a, e, i)
                            }
                        } else this.slideTo(0, e, i)
                }
            },
            W = {
                onHashCange: function() {
                    var e = f.location.hash.replace("#", "");
                    e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index())
                },
                setHash: function() {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && h.history && h.history.replaceState) h.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                        else {
                            var e = this.slides.eq(this.activeIndex),
                                t = e.attr("data-hash") || e.attr("data-history");
                            f.location.hash = t || ""
                        }
                },
                init: function() {
                    if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                        this.hashNavigation.initialized = !0;
                        var e = f.location.hash.replace("#", "");
                        if (e)
                            for (var t = 0, i = this.slides.length; t < i; t += 1) {
                                var n = this.slides.eq(t);
                                if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(this.params.slideDuplicateClass)) {
                                    var s = n.index();
                                    this.slideTo(s, 0, this.params.runCallbacksOnInit, !0)
                                }
                            }
                        this.params.hashNavigation.watchState && M(h).on("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    this.params.hashNavigation.watchState && M(h).off("hashchange", this.hashNavigation.onHashCange)
                }
            },
            U = {
                run: function() {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = D.nextTick(function() {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                    }, i)
                },
                start: function() {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
                },
                stop: function() {
                    return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
                },
                pause: function(e) {
                    var t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
                        t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            },
            G = {
                setTranslate: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) {
                        var i = this.slides.eq(t),
                            n = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (n -= this.translate);
                        var s = 0;
                        this.isHorizontal() || (s = n, n = 0);
                        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: r
                        }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var i = this,
                        t = i.slides,
                        n = i.$wrapperEl;
                    if (t.transition(e), i.params.virtualTranslate && 0 !== e) {
                        var s = !1;
                        t.transitionEnd(function() {
                            if (!s && i && !i.destroyed) {
                                s = !0, i.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) n.trigger(e[t])
                            }
                        })
                    }
                }
            },
            K = {
                setTranslate: function() {
                    var e, t = this.$el,
                        i = this.$wrapperEl,
                        n = this.slides,
                        s = this.width,
                        r = this.height,
                        a = this.rtl,
                        o = this.size,
                        l = this.params.cubeEffect,
                        c = this.isHorizontal(),
                        u = this.virtual && this.params.virtual.enabled,
                        d = 0;
                    l.shadow && (c ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = M('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                        height: s + "px"
                    })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = M('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                    for (var h = 0; h < n.length; h += 1) {
                        var p = n.eq(h),
                            f = h;
                        u && (f = parseInt(p.attr("data-swiper-slide-index"), 10));
                        var m = 90 * f,
                            v = Math.floor(m / 360);
                        a && (m = -m, v = Math.floor(-m / 360));
                        var g = Math.max(Math.min(p[0].progress, 1), -1),
                            y = 0,
                            b = 0,
                            w = 0;
                        f % 4 == 0 ? (y = 4 * -v * o, w = 0) : (f - 1) % 4 == 0 ? (y = 0, w = 4 * -v * o) : (f - 2) % 4 == 0 ? (y = o + 4 * v * o, w = o) : (f - 3) % 4 == 0 && (y = -o, w = 3 * o + 4 * o * v), a && (y = -y), c || (b = y, y = 0);
                        var _ = "rotateX(" + (c ? 0 : -m) + "deg) rotateY(" + (c ? m : 0) + "deg) translate3d(" + y + "px, " + b + "px, " + w + "px)";
                        if (g <= 1 && -1 < g && (d = 90 * f + 90 * g, a && (d = 90 * -f - 90 * g)), p.transform(_), l.slideShadows) {
                            var x = c ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                                T = c ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                            0 === x.length && (x = M('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), p.append(x)), 0 === T.length && (T = M('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), p.append(T)), x.length && (x[0].style.opacity = Math.max(-g, 0)), T.length && (T[0].style.opacity = Math.max(g, 0))
                        }
                    }
                    if (i.css({
                            "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                            "transform-origin": "50% 50% -" + o / 2 + "px"
                        }), l.shadow)
                        if (c) e.transform("translate3d(0px, " + (s / 2 + l.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + l.shadowScale + ")");
                        else {
                            var S = Math.abs(d) - 90 * Math.floor(Math.abs(d) / 90),
                                C = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                                k = l.shadowScale,
                                E = l.shadowScale / C,
                                A = l.shadowOffset;
                            e.transform("scale3d(" + k + ", 1, " + E + ") translate3d(0px, " + (r / 2 + A) + "px, " + -r / 2 / E + "px) rotateX(-90deg)")
                        }
                    var P = O.isSafari || O.isUiWebView ? -o / 2 : 0;
                    i.transform("translate3d(0px,0," + P + "px) rotateX(" + (this.isHorizontal() ? 0 : d) + "deg) rotateY(" + (this.isHorizontal() ? -d : 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                }
            },
            Q = {
                setTranslate: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) {
                        var i = e.eq(t),
                            n = i[0].progress;
                        this.params.flipEffect.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                        var s = -180 * n,
                            r = 0,
                            a = -i[0].swiperSlideOffset,
                            o = 0;
                        if (this.isHorizontal() ? this.rtl && (s = -s) : (o = a, r = -s, s = a = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + e.length, this.params.flipEffect.slideShadows) {
                            var l = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                c = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                            0 === l.length && (l = M('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(l)), 0 === c.length && (c = M('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(c)), l.length && (l[0].style.opacity = Math.max(-n, 0)), c.length && (c[0].style.opacity = Math.max(n, 0))
                        }
                        i.transform("translate3d(" + a + "px, " + o + "px, 0px) rotateX(" + r + "deg) rotateY(" + s + "deg)")
                    }
                },
                setTransition: function(e) {
                    var i = this,
                        t = i.slides,
                        n = i.activeIndex,
                        s = i.$wrapperEl;
                    if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), i.params.virtualTranslate && 0 !== e) {
                        var r = !1;
                        t.eq(n).transitionEnd(function() {
                            if (!r && i && !i.destroyed) {
                                r = !0, i.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                            }
                        })
                    }
                }
            },
            J = {
                setTranslate: function() {
                    for (var e = this.width, t = this.height, i = this.slides, n = this.$wrapperEl, s = this.slidesSizesGrid, r = this.params.coverflowEffect, a = this.isHorizontal(), o = this.translate, l = a ? e / 2 - o : t / 2 - o, c = a ? r.rotate : -r.rotate, u = r.depth, d = 0, h = i.length; d < h; d += 1) {
                        var p = i.eq(d),
                            f = s[d],
                            m = (l - p[0].swiperSlideOffset - f / 2) / f * r.modifier,
                            v = a ? c * m : 0,
                            g = a ? 0 : c * m,
                            y = -u * Math.abs(m),
                            b = a ? 0 : r.stretch * m,
                            w = a ? r.stretch * m : 0;
                        Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0);
                        var _ = "translate3d(" + w + "px," + b + "px," + y + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg)";
                        if (p.transform(_), p[0].style.zIndex = 1 - Math.abs(Math.round(m)), r.slideShadows) {
                            var x = a ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                                T = a ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                            0 === x.length && (x = M('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), p.append(x)), 0 === T.length && (T = M('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), p.append(T)), x.length && (x[0].style.opacity = 0 < m ? m : 0), T.length && (T[0].style.opacity = 0 < -m ? -m : 0)
                        }
                    }(L.pointerEvents || L.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = l + "px 50%")
                },
                setTransition: function(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            },
            Z = [T, S, C, k, A, z, N, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    D.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: $.enable.bind(this),
                            disable: $.disable.bind(this),
                            handle: $.handle.bind(this),
                            lastScrollTime: D.now()
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function() {
                        this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    D.extend(this, {
                        navigation: {
                            init: I.init.bind(this),
                            update: I.update.bind(this),
                            destroy: I.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge: function() {
                        this.navigation.update()
                    },
                    fromEdge: function() {
                        this.navigation.update()
                    },
                    destroy: function() {
                        this.navigation.destroy()
                    },
                    click: function(e) {
                        var t = this.navigation,
                            i = t.$nextEl,
                            n = t.$prevEl;
                        !this.params.navigation.hideOnClick || M(e.target).is(n) || M(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        type: "bullets",
                        dynamicBullets: !1,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    D.extend(this, {
                        pagination: {
                            init: F.init.bind(this),
                            render: F.render.bind(this),
                            update: F.update.bind(this),
                            destroy: F.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.pagination.init(), this.pagination.render(), this.pagination.update()
                    },
                    activeIndexChange: function() {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                    },
                    snapIndexChange: function() {
                        this.params.loop || this.pagination.update()
                    },
                    slidesLengthChange: function() {
                        this.params.loop && (this.pagination.render(), this.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        this.params.loop || (this.pagination.render(), this.pagination.update())
                    },
                    destroy: function() {
                        this.pagination.destroy()
                    },
                    click: function(e) {
                        this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !M(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock"
                    }
                },
                create: function() {
                    D.extend(this, {
                        scrollbar: {
                            init: j.init.bind(this),
                            destroy: j.destroy.bind(this),
                            updateSize: j.updateSize.bind(this),
                            setTranslate: j.setTranslate.bind(this),
                            setTransition: j.setTransition.bind(this),
                            enableDraggable: j.enableDraggable.bind(this),
                            disableDraggable: j.disableDraggable.bind(this),
                            setDragPosition: j.setDragPosition.bind(this),
                            onDragStart: j.onDragStart.bind(this),
                            onDragMove: j.onDragMove.bind(this),
                            onDragEnd: j.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                    },
                    update: function() {
                        this.scrollbar.updateSize()
                    },
                    resize: function() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function() {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    D.extend(this, {
                        parallax: {
                            setTransform: B.setTransform.bind(this),
                            setTranslate: B.setTranslate.bind(this),
                            setTransition: B.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.watchSlidesProgress = !0
                    },
                    init: function() {
                        this.params.parallax && this.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        this.params.parallax && this.parallax.setTranslate()
                    },
                    setTransition: function(e) {
                        this.params.parallax && this.parallax.setTransition(e)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var t = this,
                        i = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                        i[e] = H[e].bind(t)
                    }), D.extend(t, {
                        zoom: i
                    })
                },
                on: {
                    init: function() {
                        this.params.zoom.enabled && this.zoom.enable()
                    },
                    destroy: function() {
                        this.zoom.disable()
                    },
                    touchStart: function(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd: function(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap: function(e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                    },
                    transitionEnd: function() {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    D.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: q.load.bind(this),
                            loadInSlide: q.loadInSlide.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                    },
                    init: function() {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                    },
                    scroll: function() {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                    },
                    resize: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    transitionStart: function() {
                        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                    },
                    transitionEnd: function() {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    D.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction: X.getInterpolateFunction.bind(this),
                            setTranslate: X.setTranslate.bind(this),
                            setTransition: X.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    update: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    resize: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    observerUpdate: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    setTranslate: function(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t)
                    },
                    setTransition: function(e, t) {
                        this.controller.control && this.controller.setTransition(e, t)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !1,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var t = this;
                    D.extend(t, {
                        a11y: {
                            liveRegion: M('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }), Object.keys(Y).forEach(function(e) {
                        t.a11y[e] = Y[e].bind(t)
                    })
                },
                on: {
                    init: function() {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy: function() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    D.extend(this, {
                        history: {
                            init: V.init.bind(this),
                            setHistory: V.setHistory.bind(this),
                            setHistoryPopState: V.setHistoryPopState.bind(this),
                            scrollToSlide: V.scrollToSlide.bind(this),
                            destroy: V.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.history.enabled && this.history.init()
                    },
                    destroy: function() {
                        this.params.history.enabled && this.history.destroy()
                    },
                    transitionEnd: function() {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    D.extend(this, {
                        hashNavigation: {
                            initialized: !1,
                            init: W.init.bind(this),
                            destroy: W.destroy.bind(this),
                            setHash: W.setHash.bind(this),
                            onHashCange: W.onHashCange.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.init()
                    },
                    destroy: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        this.hashNavigation.initialized && this.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    D.extend(this, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: U.run.bind(this),
                            start: U.start.bind(this),
                            stop: U.stop.bind(this),
                            pause: U.pause.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.autoplay.enabled && this.autoplay.start()
                    },
                    beforeTransitionStart: function(e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                    },
                    destroy: function() {
                        this.autoplay.running && this.autoplay.stop()
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    D.extend(this, {
                        fadeEffect: {
                            setTranslate: G.setTranslate.bind(this),
                            setTransition: G.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "fade");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            D.extend(this.params, e), D.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    D.extend(this, {
                        cubeEffect: {
                            setTranslate: K.setTranslate.bind(this),
                            setTransition: K.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            D.extend(this.params, e), D.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    D.extend(this, {
                        flipEffect: {
                            setTranslate: Q.setTranslate.bind(this),
                            setTransition: Q.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            D.extend(this.params, e), D.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    D.extend(this, {
                        coverflowEffect: {
                            setTranslate: J.setTranslate.bind(this),
                            setTransition: J.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                    }
                }
            }];
        return void 0 === x.use && (x.use = x.Class.use, x.installModule = x.Class.installModule), x.use(Z), x
    }),
    function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function() {
            return t(e, document)
        }) : e.plyr = t(e, document)
    }("undefined" != typeof window ? window : this, function(se, re) {
        "use strict";

        function ae() {
            var e, t, i, n = navigator.userAgent,
                s = navigator.appName,
                r = "" + parseFloat(navigator.appVersion),
                a = parseInt(navigator.appVersion, 10),
                o = !1,
                l = !1,
                c = !1,
                u = !1;
            return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (o = !0, s = "IE", r = "11") : -1 !== (t = n.indexOf("MSIE")) ? (o = !0, s = "IE", r = n.substring(t + 5)) : -1 !== (t = n.indexOf("Chrome")) ? (c = !0, s = "Chrome", r = n.substring(t + 7)) : -1 !== (t = n.indexOf("Safari")) ? (u = !0, s = "Safari", r = n.substring(t + 7), -1 !== (t = n.indexOf("Version")) && (r = n.substring(t + 8))) : -1 !== (t = n.indexOf("Firefox")) ? (l = !0, s = "Firefox", r = n.substring(t + 8)) : (e = n.lastIndexOf(" ") + 1) < (t = n.lastIndexOf("/")) && (s = n.substring(e, t), r = n.substring(t + 1), s.toLowerCase() === s.toUpperCase() && (s = navigator.appName)), -1 !== (i = r.indexOf(";")) && (r = r.substring(0, i)), -1 !== (i = r.indexOf(" ")) && (r = r.substring(0, i)), a = parseInt("" + r, 10), isNaN(a) && (r = "" + parseFloat(navigator.appVersion), a = parseInt(navigator.appVersion, 10)), {
                name: s,
                version: a,
                isIE: o,
                isFirefox: l,
                isChrome: c,
                isSafari: u,
                isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
                isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
                isTouch: "ontouchstart" in re.documentElement
            }
        }

        function oe(e) {
            if (!re.querySelectorAll('script[src="' + e + '"]').length) {
                var t = re.createElement("script");
                t.src = e;
                var i = re.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(t, i)
            }
        }

        function le(e, t) {
            return Array.prototype.indexOf && -1 !== e.indexOf(t)
        }

        function ce(e, t, i) {
            return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), i)
        }

        function ue(e, t) {
            e.length || (e = [e]);
            for (var i = e.length - 1; 0 <= i; i--) {
                var n = 0 < i ? t.cloneNode(!0) : t,
                    s = e[i],
                    r = s.parentNode,
                    a = s.nextSibling;
                return n.appendChild(s), a ? r.insertBefore(n, a) : r.appendChild(n), n
            }
        }

        function de(e) {
            e && e.parentNode.removeChild(e)
        }

        function he(e, t) {
            e.insertBefore(t, e.firstChild)
        }

        function pe(e, t) {
            for (var i in t) e.setAttribute(i, Oe.boolean(t[i]) && t[i] ? "" : t[i])
        }

        function fe(e, t, i) {
            var n = re.createElement(e);
            pe(n, i), he(t, n)
        }

        function me(e, t, i) {
            if (e)
                if (e.classList) e.classList[i ? "add" : "remove"](t);
                else {
                    var n = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                    e.className = n + (i ? " " + t : "")
                }
        }

        function ve(e, t) {
            return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
        }

        function ge(e, t) {
            var i = Element.prototype;
            return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function(e) {
                return -1 !== [].indexOf.call(re.querySelectorAll(e), this)
            }).call(e, t)
        }

        function ye(t, e, i, n, s) {
            i && we(t, e, function(e) {
                i.apply(t, [e])
            }, s), we(t, e, function(e) {
                n.apply(t, [e])
            }, s)
        }

        function be(e, t, i, n, s) {
            var r = t.split(" ");
            if (Oe.boolean(s) || (s = !1), e instanceof NodeList)
                for (var a = 0; a < e.length; a++) e[a] instanceof Node && be(e[a], t, i, n);
            else
                for (var o = 0; o < r.length; o++) e[n ? "addEventListener" : "removeEventListener"](r[o], i, s)
        }

        function we(e, t, i, n) {
            e && be(e, t, i, !0, n)
        }

        function _e(e, t, i, n) {
            if (e && t) {
                Oe.boolean(i) || (i = !1);
                var s = new CustomEvent(t, {
                    bubbles: i,
                    detail: n
                });
                e.dispatchEvent(s)
            }
        }

        function xe(e, t) {
            if (e) return t = Oe.boolean(t) ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t
        }

        function Te(e, t) {
            return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
        }

        function Se() {
            var e = arguments;
            if (e.length) {
                if (1 === e.length) return e[0];
                for (var t = Array.prototype.shift.call(e), i = e.length, n = 0; n < i; n++) {
                    var s = e[n];
                    for (var r in s) s[r] && s[r].constructor && s[r].constructor === Object ? (t[r] = t[r] || {}, Se(t[r], s[r])) : t[r] = s[r]
                }
                return t
            }
        }

        function u(i, u) {
            function d(e, t, i, n) {
                _e(e, t, i, Se({}, n, {
                    plyr: J
                }))
            }

            function e(e, t) {
                u.debug && se.console && (t = Array.prototype.slice.call(t), Oe.string(u.logPrefix) && u.logPrefix.length && t.unshift(u.logPrefix), console[e].apply(console, t))
            }

            function c() {
                return {
                    url: u.iconUrl,
                    absolute: 0 === u.iconUrl.indexOf("http") || Z.browser.isIE && !se.svg4everybody
                }
            }

            function t() {
                if (Z.supported.full && ("audio" !== Z.type || u.fullscreen.allowAudio) && u.fullscreen.enabled) {
                    var e = Ae.supportsFullScreen;
                    e || u.fullscreen.fallback && ! function() {
                        try {
                            return se.self !== se.top
                        } catch (e) {
                            return !0
                        }
                    }() ? (ie((e ? "Native" : "Fallback") + " fullscreen enabled"), e || me(Z.container, u.classes.fullscreen.fallback, !0), me(Z.container, u.classes.fullscreen.enabled, !0)) : ie("Fullscreen not supported and fallback disabled"), Z.buttons && Z.buttons.fullscreen && xe(Z.buttons.fullscreen, !1), r()
                }
            }

            function n() {
                if ("video" === Z.type) {
                    f(u.selectors.captions) || Z.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + u.selectors.captions.replace(".", "") + '"></div>'), Z.usingTextTracks = !1, Z.media.textTracks && (Z.usingTextTracks = !0);
                    for (var e, t = "", i = Z.media.childNodes, n = 0; n < i.length; n++) "track" === i[n].nodeName.toLowerCase() && ("captions" !== (e = i[n].kind) && "subtitles" !== e || (t = i[n].getAttribute("src")));
                    if (Z.captionExists = !0, "" === t ? (Z.captionExists = !1, ie("No caption track found")) : ie("Caption track found; URI: " + t), Z.captionExists) {
                        for (var s = Z.media.textTracks, r = 0; r < s.length; r++) s[r].mode = "hidden";
                        if (function() {
                                if (Z.buttons.captions) {
                                    me(Z.container, u.classes.captions.enabled, !0);
                                    var e = Z.storage.captionsEnabled;
                                    Oe.boolean(e) || (e = u.captions.defaultActive), e && (me(Z.container, u.classes.captions.active, !0), xe(Z.buttons.captions, !0))
                                }
                            }(), (Z.browser.isIE && 10 <= Z.browser.version || Z.browser.isFirefox && 31 <= Z.browser.version) && (ie("Detected browser with known TextTrack issues - using manual fallback"), Z.usingTextTracks = !1), Z.usingTextTracks) {
                            ie("TextTracks supported");
                            for (var a = 0; a < s.length; a++) {
                                var o = s[a];
                                "captions" !== o.kind && "subtitles" !== o.kind || we(o, "cuechange", function() {
                                    this.activeCues[0] && "text" in this.activeCues[0] ? h(this.activeCues[0].getCueAsHTML()) : h()
                                })
                            }
                        } else if (ie("TextTracks not supported so rendering captions manually"), Z.currentCaption = "", Z.captions = [], "" !== t) {
                            var l = new XMLHttpRequest;
                            l.onreadystatechange = function() {
                                if (4 === l.readyState)
                                    if (200 === l.status) {
                                        var e, t, i = l.responseText,
                                            n = "\r\n"; - 1 === i.indexOf(n + n) && (n = -1 !== i.indexOf("\r\r") ? "\r" : "\n"), t = i.split(n + n);
                                        for (var s = 0; s < t.length; s++) {
                                            e = t[s], Z.captions[s] = [];
                                            var r = e.split(n),
                                                a = 0; - 1 === r[a].indexOf(":") && (a = 1), Z.captions[s] = [r[a], r[a + 1]]
                                        }
                                        Z.captions.shift(), ie("Successfully loaded the caption file via AJAX")
                                    } else ne(u.logPrefix + "There was a problem loading the caption file via AJAX")
                            }, l.open("get", t, !0), l.send()
                        }
                    } else me(Z.container, u.classes.captions.enabled)
                }
            }

            function h(e) {
                var t = f(u.selectors.captions),
                    i = re.createElement("span");
                t.innerHTML = "", Oe.undefined(e) && (e = ""), Oe.string(e) ? i.innerHTML = e.trim() : i.appendChild(e), t.appendChild(i), t.offsetHeight
            }

            function s(e) {
                function t(e, t) {
                    var i = [];
                    i = e.split(" --\x3e ");
                    for (var n = 0; n < i.length; n++) i[n] = i[n].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                    return function(e) {
                        if (null == e) return 0;
                        var t = [],
                            i = [];
                        return t = e.split(","), i = t[0].split(":"), Math.floor(60 * i[0] * 60) + Math.floor(60 * i[1]) + Math.floor(i[2])
                    }(i[t])
                }

                function i(e) {
                    return t(e, 1)
                }
                if (!Z.usingTextTracks && "video" === Z.type && Z.supported.full && (Z.subcount = 0, e = Oe.number(e) ? e : Z.media.currentTime, Z.captions[Z.subcount])) {
                    for (; i(Z.captions[Z.subcount][0]) < e.toFixed(1);)
                        if (Z.subcount++, Z.subcount > Z.captions.length - 1) {
                            Z.subcount = Z.captions.length - 1;
                            break
                        }
                    Z.media.currentTime.toFixed(1) >= t(Z.captions[Z.subcount][0], 0) && Z.media.currentTime.toFixed(1) <= i(Z.captions[Z.subcount][0]) ? (Z.currentCaption = Z.captions[Z.subcount][1], h(Z.currentCaption)) : h()
                }
            }

            function p(e) {
                return Z.container.querySelectorAll(e)
            }

            function f(e) {
                return p(e)[0]
            }

            function r() {
                var e = p("input:not([disabled]), button:not([disabled])"),
                    t = e[0],
                    i = e[e.length - 1];
                we(Z.container, "keydown", function(e) {
                    9 === e.which && Z.isFullscreen && (e.target !== i || e.shiftKey ? e.target === t && e.shiftKey && (e.preventDefault(), i.focus()) : (e.preventDefault(), t.focus()))
                })
            }

            function a(e, t) {
                if (Oe.string(t)) fe(e, Z.media, {
                    src: t
                });
                else if (t.constructor === Array)
                    for (var i = t.length - 1; 0 <= i; i--) fe(e, Z.media, t[i])
            }

            function o() {
                if (u.loadSprite) {
                    var e = c();
                    e.absolute ? (ie("AJAX loading absolute SVG sprite" + (Z.browser.isIE ? " (due to IE)" : "")), Ce(e.url, "sprite-plyr")) : ie("Sprite will be used as external resource directly")
                }
                var t, i, n, s, r = u.html;
                if (ie("Injecting custom controls"), r || (t = [], i = c(), n = (i.absolute ? "" : i.url) + "#" + u.iconPrefix, le(u.controls, "play-large") && t.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + u.i18n.play + "</span>", "</button>"), t.push('<div class="plyr__controls">'), le(u.controls, "restart") && t.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + n + '-restart" /></svg>', '<span class="plyr__sr-only">' + u.i18n.restart + "</span>", "</button>"), le(u.controls, "rewind") && t.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + n + '-rewind" /></svg>', '<span class="plyr__sr-only">' + u.i18n.rewind + "</span>", "</button>"), le(u.controls, "play") && t.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + u.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + n + '-pause" /></svg>', '<span class="plyr__sr-only">' + u.i18n.pause + "</span>", "</button>"), le(u.controls, "fast-forward") && t.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + n + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + u.i18n.forward + "</span>", "</button>"), le(u.controls, "progress") && (t.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + u.i18n.buffered, "</progress>"), u.tooltips.seek && t.push('<span class="plyr__tooltip">00:00</span>'), t.push("</span>")), le(u.controls, "current-time") && t.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + u.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), le(u.controls, "duration") && t.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + u.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), le(u.controls, "mute") && t.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + n + '-muted" /></svg>', '<svg><use xlink:href="' + n + '-volume" /></svg>', '<span class="plyr__sr-only">' + u.i18n.toggleMute + "</span>", "</button>"), le(u.controls, "volume") && t.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + u.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + u.volumeMin + '" max="' + u.volumeMax + '" value="' + u.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + u.volumeMax + '" value="' + u.volumeMin + '" role="presentation"></progress>', "</span>"), le(u.controls, "captions") && t.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + n + '-captions-on" /></svg>', '<svg><use xlink:href="' + n + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + u.i18n.toggleCaptions + "</span>", "</button>"), le(u.controls, "fullscreen") && t.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + n + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + n + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + u.i18n.toggleFullscreen + "</span>", "</button>"), t.push("</div>"), r = t.join("")), r = ce(r = ce(r, "{seektime}", u.seekTime), "{id}", Math.floor(1e4 * Math.random())), u.title && (r = ce(r, "{title}", u.title)), Oe.string(u.selectors.controls.container) && (s = re.querySelector(u.selectors.controls.container)), Oe.htmlElement(s) || (s = Z.container), s.insertAdjacentHTML("beforeend", r), u.tooltips.controls)
                    for (var a = p([u.selectors.controls.wrapper, " ", u.selectors.labels, " .", u.classes.hidden].join("")), o = a.length - 1; 0 <= o; o--) {
                        var l = a[o];
                        me(l, u.classes.hidden, !1), me(l, u.classes.tooltip, !0)
                    }
            }

            function l() {
                me(Z.container, u.selectors.container.replace(".", ""), Z.supported.full)
            }

            function m(e) {
                e && le(u.types.html5, Z.type) ? Z.media.setAttribute("controls", "") : Z.media.removeAttribute("controls")
            }

            function v(e) {
                var t = u.i18n.play;
                if (Oe.string(u.title) && u.title.length && (t += ", " + u.title, Z.container.setAttribute("aria-label", u.title)), Z.supported.full && Z.buttons.play)
                    for (var i = Z.buttons.play.length - 1; 0 <= i; i--) Z.buttons.play[i].setAttribute("aria-label", t);
                Oe.htmlElement(e) && e.setAttribute("title", u.i18n.frameTitle.replace("{title}", u.title))
            }

            function g(e) {
                aUa.supported && u.storage.enabled && (Se(Z.storage, e), se.localStorage.setItem(u.storage.key, JSON.stringify(Z.storage)))
            }

            function y() {
                if (Z.media) {
                    if (Z.supported.full && (me(Z.container, u.classes.type.replace("{0}", Z.type), !0), le(u.types.embed, Z.type) && me(Z.container, u.classes.type.replace("{0}", "video"), !0), me(Z.container, u.classes.stopped, u.autoplay), me(Z.container, u.classes.isIos, Z.browser.isIos), me(Z.container, u.classes.isTouch, Z.browser.isTouch), "video" === Z.type)) {
                        var e = re.createElement("div");
                        e.setAttribute("class", u.classes.videoWrapper), ue(Z.media, e), Z.videoContainer = e
                    }
                    le(u.types.embed, Z.type) && function() {
                        var e, t = re.createElement("div"),
                            i = Z.type + "-" + Math.floor(1e4 * Math.random());
                        switch (Z.type) {
                            case "youtube":
                                s = Z.embedId, e = s.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/) ? RegExp.$2 : s;
                                break;
                            case "vimeo":
                                n = Z.embedId, e = n.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : n;
                                break;
                            default:
                                e = Z.embedId
                        }
                        var n;
                        var s;
                        for (var r = p('[id^="' + Z.type + '-"]'), a = r.length - 1; 0 <= a; a--) de(r[a]);
                        if (me(Z.media, u.classes.videoWrapper, !0), me(Z.media, u.classes.embedWrapper, !0), "youtube" === Z.type) Z.media.appendChild(t), t.setAttribute("id", i), Oe.object(se.YT) ? w(e, t) : (oe(u.urls.youtube.api), se.onYouTubeReadyCallbacks = se.onYouTubeReadyCallbacks || [], se.onYouTubeReadyCallbacks.push(function() {
                            w(e, t)
                        }), se.onYouTubeIframeAPIReady = function() {
                            se.onYouTubeReadyCallbacks.forEach(function(e) {
                                e()
                            })
                        });
                        else if ("vimeo" === Z.type)
                            if (Z.supported.full ? Z.media.appendChild(t) : t = Z.media, t.setAttribute("id", i), Oe.object(se.Vimeo)) _(e, t);
                            else {
                                oe(u.urls.vimeo.api);
                                var o = se.setInterval(function() {
                                    Oe.object(se.Vimeo) && (se.clearInterval(o), _(e, t))
                                }, 50)
                            }
                        else if ("soundcloud" === Z.type) {
                            var l = re.createElement("iframe");
                            l.loaded = !1, we(l, "load", function() {
                                l.loaded = !0
                            }), pe(l, {
                                src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + e,
                                id: i
                            }), t.appendChild(l), Z.media.appendChild(t), se.SC || oe(u.urls.soundcloud.api);
                            var c = se.setInterval(function() {
                                se.SC && l.loaded && (se.clearInterval(c), function() {
                                    Z.embed = se.SC.Widget(this), Z.embed.bind(se.SC.Widget.Events.READY, function() {
                                        Z.media.play = function() {
                                            Z.embed.play(), Z.media.paused = !1
                                        }, Z.media.pause = function() {
                                            Z.embed.pause(), Z.media.paused = !0
                                        }, Z.media.stop = function() {
                                            Z.embed.seekTo(0), Z.embed.pause(), Z.media.paused = !0
                                        }, Z.media.paused = !0, Z.media.currentTime = 0, Z.embed.getDuration(function(e) {
                                            Z.media.duration = e / 1e3, b()
                                        }), Z.embed.getPosition(function(e) {
                                            Z.media.currentTime = e, d(Z.media, "timeupdate")
                                        }), Z.embed.bind(se.SC.Widget.Events.PLAY, function() {
                                            Z.media.paused = !1, d(Z.media, "play"), d(Z.media, "playing")
                                        }), Z.embed.bind(se.SC.Widget.Events.PAUSE, function() {
                                            Z.media.paused = !0, d(Z.media, "pause")
                                        }), Z.embed.bind(se.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                                            Z.media.seeking = !1, Z.media.currentTime = e.currentPosition / 1e3, d(Z.media, "timeupdate")
                                        }), Z.embed.bind(se.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                                            Z.media.buffered = e.loadProgress, d(Z.media, "progress"), 1 === parseInt(e.loadProgress) && d(Z.media, "canplaythrough")
                                        }), Z.embed.bind(se.SC.Widget.Events.FINISH, function() {
                                            Z.media.paused = !0, d(Z.media, "ended")
                                        })
                                    })
                                }.call(l))
                            }, 50)
                        }
                    }()
                } else ne("No media element found!")
            }

            function b() {
                Z.supported.full && (K(), Q()), v(f("iframe"))
            }

            function w(e, t) {
                Z.embed = new se.YT.Player(t.id, {
                    videoId: e,
                    playerVars: {
                        autoplay: u.autoplay ? 1 : 0,
                        controls: Z.supported.full ? 0 : 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        cc_load_policy: u.captions.defaultActive ? 1 : 0,
                        cc_lang_pref: "en",
                        wmode: "transparent",
                        modestbranding: 1,
                        disablekb: 1,
                        origin: "*"
                    },
                    events: {
                        onError: function(e) {
                            d(Z.container, "error", !0, {
                                code: e.data,
                                embed: e.target
                            })
                        },
                        onReady: function(e) {
                            var t = e.target;
                            Z.media.play = function() {
                                t.playVideo(), Z.media.paused = !1
                            }, Z.media.pause = function() {
                                t.pauseVideo(), Z.media.paused = !0
                            }, Z.media.stop = function() {
                                t.stopVideo(), Z.media.paused = !0
                            }, Z.media.duration = t.getDuration(), Z.media.paused = !0, Z.media.currentTime = 0, Z.media.muted = t.isMuted(), "function" == typeof t.getVideoData && (u.title = t.getVideoData().title), Z.supported.full && Z.media.querySelector("iframe").setAttribute("tabindex", "-1"), b(), d(Z.media, "timeupdate"), d(Z.media, "durationchange"), se.clearInterval(ee.buffering), ee.buffering = se.setInterval(function() {
                                Z.media.buffered = t.getVideoLoadedFraction(), (null === Z.media.lastBuffered || Z.media.lastBuffered < Z.media.buffered) && d(Z.media, "progress"), Z.media.lastBuffered = Z.media.buffered, 1 === Z.media.buffered && (se.clearInterval(ee.buffering), d(Z.media, "canplaythrough"))
                            }, 200)
                        },
                        onStateChange: function(e) {
                            var t = e.target;
                            switch (se.clearInterval(ee.playing), e.data) {
                                case 0:
                                    Z.media.paused = !0, d(Z.media, "ended");
                                    break;
                                case 1:
                                    Z.media.paused = !1, Z.media.seeking && d(Z.media, "seeked"), Z.media.seeking = !1, d(Z.media, "play"), d(Z.media, "playing"), ee.playing = se.setInterval(function() {
                                        Z.media.currentTime = t.getCurrentTime(), d(Z.media, "timeupdate")
                                    }, 100), Z.media.duration !== t.getDuration() && (Z.media.duration = t.getDuration(), d(Z.media, "durationchange"));
                                    break;
                                case 2:
                                    Z.media.paused = !0, d(Z.media, "pause")
                            }
                            d(Z.container, "statechange", !1, {
                                code: e.data
                            })
                        }
                    }
                })
            }

            function _(e, t) {
                var i, n = (i = {
                        loop: u.loop,
                        autoplay: u.autoplay,
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: 0
                    }, Object.keys(i).map(function(e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(i[e])
                    }).join("&")),
                    s = re.createElement("iframe"),
                    r = "https://player.vimeo.com/video/" + e + "?" + n;
                s.setAttribute("src", r), s.setAttribute("allowfullscreen", ""), t.appendChild(s), Z.embed = new se.Vimeo.Player(s), Z.media.play = function() {
                    Z.embed.play(), Z.media.paused = !1
                }, Z.media.pause = function() {
                    Z.embed.pause(), Z.media.paused = !0
                }, Z.media.stop = function() {
                    Z.embed.stop(), Z.media.paused = !0
                }, Z.media.paused = !0, Z.media.currentTime = 0, b(), Z.embed.getCurrentTime().then(function(e) {
                    Z.media.currentTime = e, d(Z.media, "timeupdate")
                }), Z.embed.getDuration().then(function(e) {
                    Z.media.duration = e, d(Z.media, "durationchange")
                }), Z.embed.on("loaded", function() {
                    Oe.htmlElement(Z.embed.element) && Z.supported.full && Z.embed.element.setAttribute("tabindex", "-1")
                }), Z.embed.on("play", function() {
                    Z.media.paused = !1, d(Z.media, "play"), d(Z.media, "playing")
                }), Z.embed.on("pause", function() {
                    Z.media.paused = !0, d(Z.media, "pause")
                }), Z.embed.on("timeupdate", function(e) {
                    Z.media.seeking = !1, Z.media.currentTime = e.seconds, d(Z.media, "timeupdate")
                }), Z.embed.on("progress", function(e) {
                    Z.media.buffered = e.percent, d(Z.media, "progress"), 1 === parseInt(e.percent) && d(Z.media, "canplaythrough")
                }), Z.embed.on("seeked", function() {
                    Z.media.seeking = !1, d(Z.media, "seeked"), d(Z.media, "play")
                }), Z.embed.on("ended", function() {
                    Z.media.paused = !0, d(Z.media, "ended")
                })
            }

            function x() {
                "play" in Z.media && Z.media.play()
            }

            function T() {
                "pause" in Z.media && Z.media.pause()
            }

            function S(e) {
                return Oe.boolean(e) || (e = Z.media.paused), e ? x() : T(), e
            }

            function C(e) {
                Oe.number(e) || (e = u.seekTime), E(Z.media.currentTime - e)
            }

            function k(e) {
                Oe.number(e) || (e = u.seekTime), E(Z.media.currentTime + e)
            }

            function E(e) {
                var t = 0,
                    i = Z.media.paused,
                    n = A();
                Oe.number(e) ? t = e : Oe.object(e) && le(["input", "change"], e.type) && (t = e.target.value / e.target.max * n), t < 0 ? t = 0 : n < t && (t = n), q(t);
                try {
                    Z.media.currentTime = t.toFixed(4)
                } catch (e) {}
                if (le(u.types.embed, Z.type)) {
                    switch (Z.type) {
                        case "youtube":
                            Z.embed.seekTo(t);
                            break;
                        case "vimeo":
                            Z.embed.setCurrentTime(t.toFixed(0));
                            break;
                        case "soundcloud":
                            Z.embed.seekTo(1e3 * t)
                    }
                    i && T(), d(Z.media, "timeupdate"), Z.media.seeking = !0, d(Z.media, "seeking")
                }
                ie("Seeking to " + Z.media.currentTime + " seconds"), s(t)
            }

            function A() {
                var e = parseInt(u.duration),
                    t = 0;
                return null === Z.media.duration || isNaN(Z.media.duration) || (t = Z.media.duration), isNaN(e) ? t : e
            }

            function P() {
                me(Z.container, u.classes.playing, !Z.media.paused), me(Z.container, u.classes.stopped, Z.media.paused), Y(Z.media.paused)
            }

            function M(e) {
                var t = Ae.supportsFullScreen;
                if (t) {
                    if (!e || e.type !== Ae.fullScreenEventName) return Ae.isFullScreen(Z.container) ? Ae.cancelFullScreen() : (Pe = {
                        x: se.pageXOffset || 0,
                        y: se.pageYOffset || 0
                    }, Ae.requestFullScreen(Z.container)), void(Z.isFullscreen = Ae.isFullScreen(Z.container));
                    Z.isFullscreen = Ae.isFullScreen(Z.container)
                } else Z.isFullscreen = !Z.isFullscreen, re.body.style.overflow = Z.isFullscreen ? "hidden" : "";
                me(Z.container, u.classes.fullscreen.active, Z.isFullscreen), r(Z.isFullscreen), Z.buttons && Z.buttons.fullscreen && xe(Z.buttons.fullscreen, Z.isFullscreen), d(Z.container, Z.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !Z.isFullscreen && t && se.scrollTo(Pe.x, Pe.y)
            }

            function O(e) {
                if (Oe.boolean(e) || (e = !Z.media.muted), xe(Z.buttons.mute, e), Z.media.muted = e, 0 === Z.media.volume && D(u.volume), le(u.types.embed, Z.type)) {
                    switch (Z.type) {
                        case "youtube":
                            Z.embed[Z.media.muted ? "mute" : "unMute"]();
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Z.embed.setVolume(Z.media.muted ? 0 : parseFloat(u.volume / u.volumeMax))
                    }
                    d(Z.media, "volumechange")
                }
            }

            function D(e) {
                var t = u.volumeMax,
                    i = u.volumeMin;
                if (Oe.undefined(e) && (e = Z.storage.volume), (null === e || isNaN(e)) && (e = u.volume), t < e && (e = t), e < i && (e = i), Z.media.volume = parseFloat(e / t), Z.volume.display && (Z.volume.display.value = e), le(u.types.embed, Z.type)) {
                    switch (Z.type) {
                        case "youtube":
                            Z.embed.setVolume(100 * Z.media.volume);
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Z.embed.setVolume(Z.media.volume)
                    }
                    d(Z.media, "volumechange")
                }
                0 === e ? Z.media.muted = !0 : Z.media.muted && 0 < e && O()
            }

            function L(e) {
                var t = Z.media.muted ? 0 : Z.media.volume * u.volumeMax;
                Oe.number(e) || (e = u.volumeStep), D(t + e)
            }

            function z(e) {
                var t = Z.media.muted ? 0 : Z.media.volume * u.volumeMax;
                Oe.number(e) || (e = u.volumeStep), D(t - e)
            }

            function R() {
                var e = Z.media.muted ? 0 : Z.media.volume * u.volumeMax;
                Z.supported.full && (Z.volume.input && (Z.volume.input.value = e), Z.volume.display && (Z.volume.display.value = e)), g({
                    volume: e
                }), me(Z.container, u.classes.muted, 0 === e), Z.supported.full && Z.buttons.mute && xe(Z.buttons.mute, 0 === e)
            }

            function N(e) {
                Z.supported.full && Z.buttons.captions && (Oe.boolean(e) || (e = -1 === Z.container.className.indexOf(u.classes.captions.active)), Z.captionsEnabled = e, xe(Z.buttons.captions, Z.captionsEnabled), me(Z.container, u.classes.captions.active, Z.captionsEnabled), d(Z.container, Z.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0), g({
                    captionsEnabled: Z.captionsEnabled
                }))
            }

            function $(e) {
                var t = "waiting" === e.type;
                clearTimeout(ee.loading), ee.loading = setTimeout(function() {
                    me(Z.container, u.classes.loading, t), Y(t)
                }, t ? 250 : 0)
            }

            function I(e) {
                if (Z.supported.full) {
                    var t = Z.progress.played,
                        i = 0,
                        n = A();
                    if (e) switch (e.type) {
                        case "timeupdate":
                        case "seeking":
                            if (Z.controls.pressed) return;
                            i = Te(Z.media.currentTime, n), "timeupdate" === e.type && Z.buttons.seek && (Z.buttons.seek.value = i);
                            break;
                        case "playing":
                        case "progress":
                            t = Z.progress.buffer, i = (s = Z.media.buffered) && s.length ? Te(s.end(0), n) : Oe.number(s) ? 100 * s : 0
                    }
                    F(t, i)
                }
                var s
            }

            function F(e, t) {
                if (Z.supported.full) {
                    if (Oe.undefined(t) && (t = 0), Oe.undefined(e)) {
                        if (!Z.progress || !Z.progress.buffer) return;
                        e = Z.progress.buffer
                    }
                    Oe.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
                }
            }

            function j(e, t) {
                if (t) {
                    isNaN(e) && (e = 0), Z.secs = parseInt(e % 60), Z.mins = parseInt(e / 60 % 60), Z.hours = parseInt(e / 60 / 60 % 60);
                    var i = 0 < parseInt(A() / 60 / 60 % 60);
                    Z.secs = ("0" + Z.secs).slice(-2), Z.mins = ("0" + Z.mins).slice(-2), t.innerHTML = (i ? Z.hours + ":" : "") + Z.mins + ":" + Z.secs
                }
            }

            function B() {
                if (Z.supported.full) {
                    var e = A() || 0;
                    !Z.duration && u.displayDuration && Z.media.paused && j(e, Z.currentTime), Z.duration && j(e, Z.duration), X()
                }
            }

            function H(e) {
                j(Z.media.currentTime, Z.currentTime), e && "timeupdate" === e.type && Z.media.seeking || I(e)
            }

            function q(e) {
                Oe.number(e) || (e = 0);
                var t = Te(e, A());
                Z.progress && Z.progress.played && (Z.progress.played.value = t), Z.buttons && Z.buttons.seek && (Z.buttons.seek.value = t)
            }

            function X(e) {
                var t = A();
                if (u.tooltips.seek && Z.progress.container && 0 !== t) {
                    var i = Z.progress.container.getBoundingClientRect(),
                        n = 0,
                        s = u.classes.tooltip + "--visible";
                    if (e) n = 100 / i.width * (e.pageX - i.left);
                    else {
                        if (!ve(Z.progress.tooltip, s)) return;
                        n = Z.progress.tooltip.style.left.replace("%", "")
                    }
                    n < 0 ? n = 0 : 100 < n && (n = 100), j(t / 100 * n, Z.progress.tooltip), Z.progress.tooltip.style.left = n + "%", e && le(["mouseenter", "mouseleave"], e.type) && me(Z.progress.tooltip, s, "mouseenter" === e.type)
                }
            }

            function Y(e) {
                if (u.hideControls && "audio" !== Z.type) {
                    var t = 0,
                        i = !1,
                        n = e,
                        s = ve(Z.container, u.classes.loading);
                    if (Oe.boolean(e) || (e && e.type ? (i = "enterfullscreen" === e.type, n = le(["mousemove", "touchstart", "mouseenter", "focus"], e.type), le(["mousemove", "touchmove"], e.type) && (t = 2e3), "focus" === e.type && (t = 3e3)) : n = ve(Z.container, u.classes.hideControls)), se.clearTimeout(ee.hover), n || Z.media.paused || s) {
                        if (me(Z.container, u.classes.hideControls, !1), Z.media.paused || s) return;
                        Z.browser.isTouch && (t = 3e3)
                    }
                    n && Z.media.paused || (ee.hover = se.setTimeout(function() {
                        (!Z.controls.pressed && !Z.controls.hover || i) && me(Z.container, u.classes.hideControls, !0)
                    }, t))
                }
            }

            function V(t) {
                Oe.object(t) && "sources" in t && t.sources.length ? (me(Z.container, u.classes.ready, !1), T(), q(), F(), function() {
                    if (le(u.types.html5, Z.type)) {
                        for (var e = Z.media.querySelectorAll("source"), t = 0; t < e.length; t++) de(e[t]);
                        Z.media.setAttribute("src", u.blankUrl), Z.media.load(), ie("Cancelled network requests")
                    }
                }(), G(function() {
                    if (Z.embed = null, de(Z.media), "video" === Z.type && Z.videoContainer && de(Z.videoContainer), Z.container && Z.container.removeAttribute("class"), "type" in t && (Z.type = t.type, "video" === Z.type)) {
                        var e = t.sources[0];
                        "type" in e && le(u.types.embed, e.type) && (Z.type = e.type)
                    }
                    switch (Z.supported = ke(Z.type), Z.type) {
                        case "video":
                            Z.media = re.createElement("video");
                            break;
                        case "audio":
                            Z.media = re.createElement("audio");
                            break;
                        case "youtube":
                        case "vimeo":
                        case "soundcloud":
                            Z.media = re.createElement("div"), Z.embedId = t.sources[0].src
                    }
                    he(Z.container, Z.media), Oe.boolean(t.autoplay) && (u.autoplay = t.autoplay), le(u.types.html5, Z.type) && (u.crossorigin && Z.media.setAttribute("crossorigin", ""), u.autoplay && Z.media.setAttribute("autoplay", ""), "poster" in t && Z.media.setAttribute("poster", t.poster), u.loop && Z.media.setAttribute("loop", "")), me(Z.container, u.classes.fullscreen.active, Z.isFullscreen), me(Z.container, u.classes.captions.active, Z.captionsEnabled), l(), le(u.types.html5, Z.type) && a("source", t.sources), y(), le(u.types.html5, Z.type) && ("tracks" in t && a("track", t.tracks), Z.media.load()), (le(u.types.html5, Z.type) || le(u.types.embed, Z.type) && !Z.supported.full) && (K(), Q()), u.title = t.title, v()
                }, !1)) : ne("Invalid source format")
            }

            function W() {
                me(f("." + u.classes.tabFocus), u.classes.tabFocus, !1)
            }

            function U() {
                function e() {
                    var e = S(),
                        t = Z.buttons[e ? "play" : "pause"],
                        i = Z.buttons[e ? "pause" : "play"];
                    if (i && (i = 1 < i.length ? i[i.length - 1] : i[0]), i) {
                        var n = ve(t, u.classes.tabFocus);
                        setTimeout(function() {
                            i.focus(), n && (me(t, u.classes.tabFocus, !1), me(i, u.classes.tabFocus, !0))
                        }, 100)
                    }
                }

                function n() {
                    var e = re.activeElement;
                    return e && e !== re.body ? re.querySelector(":focus") : null
                }

                function r(e) {
                    return e.keyCode ? e.keyCode : e.which
                }

                function s(e) {
                    var t, i = r(e),
                        n = "keydown" === e.type,
                        s = n && i === a;
                    if (Oe.number(i))
                        if (n) {
                            switch (le([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67], i) && (e.preventDefault(), e.stopPropagation()), i) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    s || (t = Z.media.duration, Oe.number(t) && E(t / 10 * (i - 48)));
                                    break;
                                case 32:
                                case 75:
                                    s || S();
                                    break;
                                case 38:
                                    L();
                                    break;
                                case 40:
                                    z();
                                    break;
                                case 77:
                                    s || O();
                                    break;
                                case 39:
                                    k();
                                    break;
                                case 37:
                                    C();
                                    break;
                                case 70:
                                    M();
                                    break;
                                case 67:
                                    s || N()
                            }!Ae.supportsFullScreen && Z.isFullscreen && 27 === i && M(), a = i
                        } else a = null
                }
                var t = Z.browser.isIE ? "change" : "input";
                if (u.keyboardShorcuts.focused) {
                    var a = null;
                    u.keyboardShorcuts.global && we(se, "keydown keyup", function(e) {
                        var t = r(e),
                            i = n();
                        1 !== Ee().length || !le([48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67], t) || Oe.htmlElement(i) && ge(i, u.selectors.editable) || s(e)
                    }), we(Z.container, "keydown keyup", s)
                }
                for (var i in we(se, "keyup", function(e) {
                        var t = r(e),
                            i = n();
                        9 === t && function(e) {
                            for (var t in Z.buttons) {
                                var i = Z.buttons[t];
                                if (Oe.nodeList(i))
                                    for (var n = 0; n < i.length; n++) me(i[n], u.classes.tabFocus, i[n] === e);
                                else me(i, u.classes.tabFocus, i === e)
                            }
                        }(i)
                    }), we(re.body, "click", W), Z.buttons) {
                    var o = Z.buttons[i];
                    we(o, "blur", function() {
                        me(o, "tab-focus", !1)
                    })
                }
                ye(Z.buttons.play, "click", u.listeners.play, e), ye(Z.buttons.pause, "click", u.listeners.pause, e), ye(Z.buttons.restart, "click", u.listeners.restart, E), ye(Z.buttons.rewind, "click", u.listeners.rewind, C), ye(Z.buttons.forward, "click", u.listeners.forward, k), ye(Z.buttons.seek, t, u.listeners.seek, E), ye(Z.volume.input, t, u.listeners.volume, function() {
                    D(Z.volume.input.value)
                }), ye(Z.buttons.mute, "click", u.listeners.mute, O), ye(Z.buttons.fullscreen, "click", u.listeners.fullscreen, M), Ae.supportsFullScreen && we(re, Ae.fullScreenEventName, M), ye(Z.buttons.captions, "click", u.listeners.captions, N), we(Z.progress.container, "mouseenter mouseleave mousemove", X), u.hideControls && (we(Z.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Y), we(Z.controls, "mouseenter mouseleave", function(e) {
                    Z.controls.hover = "mouseenter" === e.type
                }), we(Z.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                    Z.controls.pressed = le(["mousedown", "touchstart"], e.type)
                }), we(Z.controls, "focus blur", Y, !0)), we(Z.volume.input, "wheel", function(e) {
                    e.preventDefault();
                    var t = e.webkitDirectionInvertedFromDevice,
                        i = u.volumeStep / 5;
                    (e.deltaY < 0 || 0 < e.deltaX) && (t ? z(i) : L(i)), (0 < e.deltaY || e.deltaX < 0) && (t ? L(i) : z(i))
                })
            }

            function G(s, r) {
                function e() {
                    var e, t, i, n;
                    clearTimeout(ee.cleanUp), Oe.boolean(r) || (r = !0), Oe.function(s) && s.call(te), r && (Z.init = !1, Z.container.parentNode.replaceChild(te, Z.container), Z.container = null, re.body.style.overflow = "", e = re.body, t = "click", i = W, e && be(e, t, i, !1, n), d(te, "destroyed", !0))
                }
                if (!Z.init) return null;
                switch (Z.type) {
                    case "youtube":
                        se.clearInterval(ee.buffering), se.clearInterval(ee.playing), Z.embed.destroy(), e();
                        break;
                    case "vimeo":
                        Z.embed.unload().then(e), ee.cleanUp = se.setTimeout(e, 200);
                        break;
                    case "video":
                    case "audio":
                        m(!0), e()
                }
            }

            function K() {
                if (!Z.supported.full) return ne("Basic support only", Z.type), de(f(u.selectors.controls.wrapper)), de(f(u.selectors.buttons.play)), void m(!0);
                var e = !p(u.selectors.controls.wrapper).length;
                e && o(),
                    function() {
                        try {
                            return Z.controls = f(u.selectors.controls.wrapper), Z.buttons = {}, Z.buttons.seek = f(u.selectors.buttons.seek), Z.buttons.play = p(u.selectors.buttons.play), Z.buttons.pause = f(u.selectors.buttons.pause), Z.buttons.restart = f(u.selectors.buttons.restart), Z.buttons.rewind = f(u.selectors.buttons.rewind), Z.buttons.forward = f(u.selectors.buttons.forward), Z.buttons.fullscreen = f(u.selectors.buttons.fullscreen), Z.buttons.mute = f(u.selectors.buttons.mute), Z.buttons.captions = f(u.selectors.buttons.captions), Z.progress = {}, Z.progress.container = f(u.selectors.progress.container), Z.progress.buffer = {}, Z.progress.buffer.bar = f(u.selectors.progress.buffer), Z.progress.buffer.text = Z.progress.buffer.bar && Z.progress.buffer.bar.getElementsByTagName("span")[0], Z.progress.played = f(u.selectors.progress.played), Z.progress.tooltip = Z.progress.container && Z.progress.container.querySelector("." + u.classes.tooltip), Z.volume = {}, Z.volume.input = f(u.selectors.volume.input), Z.volume.display = f(u.selectors.volume.display), Z.duration = f(u.selectors.duration), Z.currentTime = f(u.selectors.currentTime), Z.seekTime = p(u.selectors.seekTime), !0
                        } catch (e) {
                            return ne("It looks like there is a problem with your controls HTML"), m(!0), !1
                        }
                    }() && (e && U(), function() {
                        if (we(Z.media, "timeupdate seeking", H), we(Z.media, "timeupdate", s), we(Z.media, "durationchange loadedmetadata", B), we(Z.media, "ended", function() {
                                "video" === Z.type && u.showPosterOnEnd && ("video" === Z.type && h(), E(), Z.media.load())
                            }), we(Z.media, "progress playing", I), we(Z.media, "volumechange", R), we(Z.media, "play pause ended", P), we(Z.media, "waiting canplay seeked", $), u.clickToPlay && "audio" !== Z.type) {
                            var e = f("." + u.classes.videoWrapper);
                            if (!e) return;
                            e.style.cursor = "pointer", we(e, "click", function() {
                                u.hideControls && Z.browser.isTouch && !Z.media.paused || (Z.media.paused ? x() : Z.media.ended ? (E(), x()) : T())
                            })
                        }
                        u.disableContextMenu && we(Z.media, "contextmenu", function(e) {
                            e.preventDefault()
                        }), we(Z.media, u.events.concat(["keyup", "keydown"]).join(" "), function(e) {
                            d(Z.container, e.type, !0)
                        })
                    }(), m(), t(), n(), D(), R(), H(), P(), B())
            }

            function Q() {
                se.setTimeout(function() {
                    d(Z.media, "ready")
                }, 0), me(Z.media, Me.classes.setup, !0), me(Z.container, u.classes.ready, !0), Z.media.plyr = J, u.autoplay && x()
            }
            var J, Z = this,
                ee = {},
                te = (Z.media = i).cloneNode(!0),
                ie = function() {
                    e("log", arguments)
                },
                ne = function() {
                    e("warn", arguments)
                };
            return ie("Config", u), J = {
                    getOriginal: function() {
                        return te
                    },
                    getContainer: function() {
                        return Z.container
                    },
                    getEmbed: function() {
                        return Z.embed
                    },
                    getMedia: function() {
                        return Z.media
                    },
                    getType: function() {
                        return Z.type
                    },
                    getDuration: A,
                    getCurrentTime: function() {
                        return Z.media.currentTime
                    },
                    getVolume: function() {
                        return Z.media.volume
                    },
                    isMuted: function() {
                        return Z.media.muted
                    },
                    isReady: function() {
                        return ve(Z.container, u.classes.ready)
                    },
                    isLoading: function() {
                        return ve(Z.container, u.classes.loading)
                    },
                    isPaused: function() {
                        return Z.media.paused
                    },
                    on: function(e, t) {
                        return we(Z.container, e, t), this
                    },
                    play: x,
                    pause: T,
                    stop: function() {
                        T(), E()
                    },
                    restart: E,
                    rewind: C,
                    forward: k,
                    seek: E,
                    source: function(e) {
                        if (Oe.undefined(e)) {
                            var t;
                            switch (Z.type) {
                                case "youtube":
                                    t = Z.embed.getVideoUrl();
                                    break;
                                case "vimeo":
                                    Z.embed.getVideoUrl.then(function(e) {
                                        t = e
                                    });
                                    break;
                                case "soundcloud":
                                    Z.embed.getCurrentSound(function(e) {
                                        t = e.permalink_url
                                    });
                                    break;
                                default:
                                    t = Z.media.currentSrc
                            }
                            return t || ""
                        }
                        V(e)
                    },
                    poster: function(e) {
                        "video" === Z.type && Z.media.setAttribute("poster", e)
                    },
                    setVolume: D,
                    togglePlay: S,
                    toggleMute: O,
                    toggleCaptions: N,
                    toggleFullscreen: M,
                    toggleControls: Y,
                    isFullscreen: function() {
                        return Z.isFullscreen || !1
                    },
                    support: function(e) {
                        return function(e, t) {
                            var i = e.media;
                            if ("video" === e.type) switch (t) {
                                case "video/webm":
                                    return !(!i.canPlayType || !i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                                case "video/mp4":
                                    return !(!i.canPlayType || !i.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                                case "video/ogg":
                                    return !(!i.canPlayType || !i.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
                            } else if ("audio" === e.type) switch (t) {
                                case "audio/mpeg":
                                    return !(!i.canPlayType || !i.canPlayType("audio/mpeg;").replace(/no/, ""));
                                case "audio/ogg":
                                    return !(!i.canPlayType || !i.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                                case "audio/wav":
                                    return !(!i.canPlayType || !i.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
                            }
                            return !1
                        }(Z, e)
                    },
                    destroy: G
                },
                function() {
                    if (Z.init) return;
                    if (Ae = function() {
                            var e = {
                                    supportsFullScreen: !1,
                                    isFullScreen: function() {
                                        return !1
                                    },
                                    requestFullScreen: function() {},
                                    cancelFullScreen: function() {},
                                    fullScreenEventName: "",
                                    element: null,
                                    prefix: ""
                                },
                                t = "webkit o moz ms khtml".split(" ");
                            if (Oe.undefined(re.cancelFullScreen))
                                for (var i = 0, n = t.length; i < n; i++) {
                                    if (e.prefix = t[i], !Oe.undefined(re[e.prefix + "CancelFullScreen"])) {
                                        e.supportsFullScreen = !0;
                                        break
                                    }
                                    if (!Oe.undefined(re.msExitFullscreen) && re.msFullscreenEnabled) {
                                        e.prefix = "ms", e.supportsFullScreen = !0;
                                        break
                                    }
                                } else e.supportsFullScreen = !0;
                            return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
                                switch (Oe.undefined(e) && (e = re.body), this.prefix) {
                                    case "":
                                        return re.fullscreenElement === e;
                                    case "moz":
                                        return re.mozFullScreenElement === e;
                                    default:
                                        return re[this.prefix + "FullscreenElement"] === e
                                }
                            }, e.requestFullScreen = function(e) {
                                return Oe.undefined(e) && (e = re.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
                            }, e.cancelFullScreen = function() {
                                return "" === this.prefix ? re.cancelFullScreen() : re[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
                            }, e.element = function() {
                                return "" === this.prefix ? re.fullscreenElement : re[this.prefix + "FullscreenElement"]
                            }), e
                        }(), Z.browser = ae(), Oe.htmlElement(Z.media)) {
                        t = null, Z.storage = {}, aUa.supported && u.storage.enabled && (se.localStorage.removeItem("plyr-volume"), (t = se.localStorage.getItem(u.storage.key)) && (/^\d+(\.\d+)?$/.test(t) ? g({
                            volume: parseFloat(t)
                        }) : Z.storage = JSON.parse(t)));
                        var e = i.tagName.toLowerCase();
                        "div" === e ? (Z.type = i.getAttribute("data-type"), Z.embedId = i.getAttribute("data-video-id"), i.removeAttribute("data-type"), i.removeAttribute("data-video-id")) : (Z.type = e, u.crossorigin = null !== i.getAttribute("crossorigin"), u.autoplay = u.autoplay || null !== i.getAttribute("autoplay"), u.loop = u.loop || null !== i.getAttribute("loop")), Z.supported = ke(Z.type), Z.supported.basic && (Z.container = ue(i, re.createElement("div")), Z.container.setAttribute("tabindex", 0), l(), ie(Z.browser.name + " " + Z.browser.version), y(), (le(u.types.html5, Z.type) || le(u.types.embed, Z.type) && !Z.supported.full) && (K(), Q(), v()), Z.init = !0)
                    }
                    var t
                }(), Z.init ? J : null
        }

        function Ce(e, t) {
            var i = new XMLHttpRequest;
            if (!Oe.string(t) || !Oe.htmlElement(re.querySelector("#" + t))) {
                var n = re.createElement("div");
                n.setAttribute("hidden", ""), Oe.string(t) && n.setAttribute("id", t), re.body.insertBefore(n, re.body.childNodes[0]), "withCredentials" in i && (i.open("GET", e, !0), i.onload = function() {
                    n.innerHTML = i.responseText
                }, i.send())
            }
        }

        function ke(e) {
            var t = ae(),
                i = t.isIE && t.version <= 9,
                n = t.isIos,
                s = t.isIphone,
                r = !!re.createElement("audio").canPlayType,
                a = !!re.createElement("video").canPlayType,
                o = !1,
                l = !1;
            switch (e) {
                case "video":
                    l = (o = a) && !i && !s;
                    break;
                case "audio":
                    l = (o = r) && !i;
                    break;
                case "vimeo":
                    o = !0, l = !i && !n;
                    break;
                case "youtube":
                    o = !0, l = !i && !n, n && !s && 10 <= t.version && (l = !0);
                    break;
                case "soundcloud":
                    o = !0, l = !i && !s;
                    break;
                default:
                    l = (o = r && a) && !i
            }
            return {
                basic: o,
                full: l
            }
        }

        function Ee(e) {
            if (Oe.string(e) ? e = re.querySelector(e) : Oe.undefined(e) && (e = re.body), Oe.htmlElement(e)) {
                var t = e.querySelectorAll("." + Me.classes.setup),
                    i = [];
                return Array.prototype.slice.call(t).forEach(function(e) {
                    Oe.object(e.plyr) && i.push(e.plyr)
                }), i
            }
            return []
        }
        var Ae, Pe = {
                x: 0,
                y: 0
            },
            Me = {
                enabled: !0,
                debug: !1,
                autoplay: !1,
                loop: !1,
                seekTime: 10,
                volume: 10,
                volumeMin: 0,
                volumeMax: 10,
                volumeStep: 1,
                duration: null,
                displayDuration: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "https://cdn.plyr.io/2.0.17/plyr.svg",
                blankUrl: "https://cdn.plyr.io/static/blank.mp4",
                clickToPlay: !0,
                hideControls: !0,
                showPosterOnEnd: !1,
                disableContextMenu: !0,
                keyboardShorcuts: {
                    focused: !0,
                    global: !1
                },
                tooltips: {
                    controls: !1,
                    seek: !0
                },
                selectors: {
                    html5: "video, audio",
                    embed: "[data-type]",
                    editable: "input, textarea, select, [contenteditable]",
                    container: ".plyr",
                    controls: {
                        container: null,
                        wrapper: ".plyr__controls"
                    },
                    labels: "[data-plyr]",
                    buttons: {
                        seek: '[data-plyr="seek"]',
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        forward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        fullscreen: '[data-plyr="fullscreen"]'
                    },
                    volume: {
                        input: '[data-plyr="volume"]',
                        display: ".plyr__volume--display"
                    },
                    progress: {
                        container: ".plyr__progress",
                        buffer: ".plyr__progress--buffer",
                        played: ".plyr__progress--played"
                    },
                    captions: ".plyr__captions",
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration"
                },
                classes: {
                    setup: "plyr--setup",
                    ready: "plyr--ready",
                    videoWrapper: "plyr__video-wrapper",
                    embedWrapper: "plyr__video-embed",
                    type: "plyr--{0}",
                    stopped: "plyr--stopped",
                    playing: "plyr--playing",
                    muted: "plyr--muted",
                    loading: "plyr--loading",
                    hover: "plyr--hover",
                    tooltip: "plyr__tooltip",
                    hidden: "plyr__sr-only",
                    hideControls: "plyr--hide-controls",
                    isIos: "plyr--is-ios",
                    isTouch: "plyr--is-touch",
                    captions: {
                        enabled: "plyr--captions-enabled",
                        active: "plyr--captions-active"
                    },
                    fullscreen: {
                        enabled: "plyr--fullscreen-enabled",
                        fallback: "plyr--fullscreen-fallback",
                        active: "plyr--fullscreen-active"
                    },
                    tabFocus: "tab-focus"
                },
                captions: {
                    defaultActive: !1
                },
                fullscreen: {
                    enabled: !0,
                    fallback: !0,
                    allowAudio: !1
                },
                storage: {
                    enabled: !0,
                    key: "plyr"
                },
                controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
                i18n: {
                    restart: "Restart",
                    rewind: "Rewind {seektime} secs",
                    play: "Play",
                    pause: "Pause",
                    forward: "Forward {seektime} secs",
                    played: "played",
                    buffered: "buffered",
                    currentTime: "Current time",
                    duration: "Duration",
                    volume: "Volume",
                    toggleMute: "Toggle Mute",
                    toggleCaptions: "Toggle Captions",
                    toggleFullscreen: "Toggle Fullscreen",
                    frameTitle: "Player for {title}"
                },
                types: {
                    embed: ["youtube", "vimeo", "soundcloud"],
                    html5: ["video", "audio"]
                },
                urls: {
                    vimeo: {
                        api: "https://player.vimeo.com/api/player.js"
                    },
                    youtube: {
                        api: "https://www.youtube.com/iframe_api"
                    },
                    soundcloud: {
                        api: "https://w.soundcloud.com/player/api.js"
                    }
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    forward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    fullscreen: null
                },
                events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
                logPrefix: "[Plyr]"
            },
            Oe = {
                object: function(e) {
                    return null !== e && "object" == typeof e
                },
                array: function(e) {
                    return null !== e && "object" == typeof e && e.constructor === Array
                },
                number: function(e) {
                    return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
                },
                string: function(e) {
                    return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
                },
                boolean: function(e) {
                    return null !== e && "boolean" == typeof e
                },
                nodeList: function(e) {
                    return null !== e && e instanceof NodeList
                },
                htmlElement: function(e) {
                    return null !== e && e instanceof HTMLElement
                },
                function: function(e) {
                    return null !== e && "function" == typeof e
                },
                undefined: function(e) {
                    return null !== e && void 0 === e
                }
            };
        ! function() {
            try {
                se.localStorage.setItem("___test", "OK");
                var e = se.localStorage.getItem("___test");
                return se.localStorage.removeItem("___test")
            } catch (e) {
                return
            }
        }();
        return {
            setup: function(e, o) {
                function t(e, t) {
                    ve(t, Me.classes.hook) || i.push({
                        target: e,
                        media: t
                    })
                }
                var i = [],
                    l = [],
                    n = [Me.selectors.html5, Me.selectors.embed].join(",");
                if (Oe.string(e) ? e = re.querySelectorAll(e) : Oe.htmlElement(e) ? e = [e] : Oe.nodeList(e) || Oe.array(e) || Oe.string(e) || (Oe.undefined(o) && Oe.object(e) && (o = e), e = re.querySelectorAll(n)), Oe.nodeList(e) && (e = Array.prototype.slice.call(e)), !ke().basic || !e.length) return !1;
                for (var s = 0; s < e.length; s++) {
                    var r = e[s],
                        a = r.querySelectorAll(n);
                    if (a.length)
                        for (var c = 0; c < a.length; c++) t(r, a[c]);
                    else ge(r, n) && t(r, r)
                }
                return i.forEach(function(e) {
                    var t = e.target,
                        i = e.media,
                        n = {};
                    try {
                        n = JSON.parse(t.getAttribute("data-plyr"))
                    } catch (e) {}
                    var s = Se({}, Me, o, n);
                    if (!s.enabled) return null;
                    var r = new u(i, s);
                    if (Oe.object(r)) {
                        if (s.debug) {
                            var a = s.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                            we(r.getContainer(), a.join(" "), function(e) {
                                console.log([s.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                            })
                        }
                        _e(r.getContainer(), "setup", !0, {
                            plyr: r
                        }), l.push(r)
                    }
                }), l
            },
            supported: ke,
            loadSprite: Ce,
            get: Ee
        }
    }),
    function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(require("jquery")) : t(window.jQuery)
    }(function(e) {
        "use strict";

        function t(e) {
            void 0 === e && (e = window.navigator.userAgent), e = e.toLowerCase();
            var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 <= e.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                i = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [],
                n = {},
                s = {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[2] || t[4] || "0",
                    versionNumber: t[4] || t[2] || "0",
                    platform: i[0] || ""
                };
            if (s.browser && (n[s.browser] = !0, n.version = s.version, n.versionNumber = parseInt(s.versionNumber, 10)), s.platform && (n[s.platform] = !0), (n.android || n.bb || n.blackberry || n.ipad || n.iphone || n.ipod || n.kindle || n.playbook || n.silk || n["windows phone"]) && (n.mobile = !0), (n.cros || n.mac || n.linux || n.win) && (n.desktop = !0), (n.chrome || n.opr || n.safari) && (n.webkit = !0), n.rv || n.iemobile) {
                s.browser = "msie", n.msie = !0
            }
            if (n.edge) {
                delete n.edge;
                s.browser = "msedge", n.msedge = !0
            }
            if (n.safari && n.blackberry) {
                var r = "blackberry";
                n[s.browser = r] = !0
            }
            if (n.safari && n.playbook) {
                s.browser = "playbook", n.playbook = !0
            }
            if (n.bb) {
                var a = "blackberry";
                n[s.browser = a] = !0
            }
            if (n.opr) {
                s.browser = "opera", n.opera = !0
            }
            if (n.safari && n.android) {
                s.browser = "android", n.android = !0
            }
            if (n.safari && n.kindle) {
                s.browser = "kindle", n.kindle = !0
            }
            if (n.safari && n.silk) {
                s.browser = "silk", n.silk = !0
            }
            return n.name = s.browser, n.platform = s.platform, n
        }
        return window.jQBrowser = t(window.navigator.userAgent), window.jQBrowser.uaMatch = t, e && (e.browser = window.jQBrowser), window.jQBrowser
    });
var browser = {};

function getViewportSize() {
    var e, t;
    return t = void 0 !== window.innerWidth ? (e = window.innerWidth, window.innerHeight) : void 0 !== document.documentElement && void 0 !== document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? (e = document.documentElement.clientWidth, document.documentElement.clientHeight) : (e = document.getElementsByTagName("body")[0].clientWidth, document.getElementsByTagName("body")[0].clientHeight), {
        width: e,
        height: t,
        isMobile: !!navigator.userAgent.match(/i(ad|od|phone)|android/) || e <= 1024,
        fit: {
            width: e + "px",
            height: t + "px"
        }
    }
}

function prevent(e, t) {
    return e && "function" == typeof e.preventDefault ? e.preventDefault() : window.event && window.event.returnValue && (window.event.returValue = !1, e = window.event), t && e && "function" == typeof e.stopPropagation && e.stopPropagation(), !1
}

function getScrollTop() {
    if ("undefined" != typeof pageYOffset) return pageYOffset;
    var e = document.body,
        t = document.documentElement;
    return (t = t.clientHeight ? t : e).scrollTop
}

function getDocHeight() {
    var e = document;
    return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
}

function getSupportedTransform() {
    for (var e = "transform WebkitTransform MozTransform OTransform msTransform".split(" "), t = document.createElement("div"), i = 0; i < e.length; i++)
        if (t && void 0 !== t.style[e[i]]) return e[i];
    return !1
}

function backgroundResize(e, t, i) {
    if (e.length) {
        var n = e.parent();
        void 0 === t.viewport && (t.viewport = getViewportSize()), "parent" == t.viewport && (t.viewport = {
            width: n.width(),
            height: n.height()
        }, t.viewport.width);
        var s = t.viewport,
            r = 0,
            a = 0,
            o = void 0 !== t.left ? t.left : "marginLeft",
            l = void 0 !== t.top ? t.left : "marginTop";
        if (a = void 0 !== t.image ? (r = t.image.width, t.image.height) : (r = e.width(), e.height()), !(r * a <= 0)) {
            var c = s.width / r,
                u = s.height / a,
                d = {},
                h = "function" == typeof t.setPx ? t.setPx : function(e) {
                    return Math.floor(e) + "px"
                },
                p = "function" == typeof t.modifier ? t.modifier : function(e, t) {
                    e.css(t)
                },
                f = 1;
            f = c * a < s.height ? ((d = {
                width: h(r * u),
                height: h(s.height)
            })[l] = 0, d[o] = h(.5 * (s.width - r * u)), u) : ((d = {
                width: h(s.width),
                height: h(a * c)
            })[o] = 0, d[l] = h(.5 * (s.height - a * c)), c), p(e, d = 1 == i ? {
                transform: "translate(" + Math.round(.5 * -(s.width - r)) + "px, " + Math.round(.5 * (s.height - a)) + "px) scale(" + f + ")"
            } : {
                transform: "translate(" + Math.round(.5 * (s.width - r)) + "px, " + Math.round(.5 * (s.height - a)) + "px) scale(" + f + ")"
            }, {
                scale: f,
                x: Math.round(.5 * (s.width - r)),
                y: Math.round(.5 * (s.height - a))
            })
        }
    }
}

function setCookie(e, t, i) {
    var n = new Date;
    n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
    var s = "expires=" + n.toGMTString();
    document.cookie = e + "=" + t + "; " + s
}

function getCookie(e) {
    for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
        for (var s = i[n];
            " " == s.charAt(0);) s = s.substring(1);
        if (-1 != s.indexOf(t)) return s.substring(t.length, s.length)
    }
    return ""
}

function preloadimages(e, t) {
    var i = 0,
        n = 0,
        s = e instanceof Array ? [] : {};
    for (var r in e) n++, s[r] = new Image, s[r].src = e[r], s[r].onload = a, s[r].onerror = a, s[r].onabort = a;

    function a() {
        ++i >= n && t(s)
    }
}

function addCss(e, t) {
    var n = document.getElementById(e),
        s = t;
    for (i in s) n.style[i] = s[i]
}

function removeAttr(e, t) {
    document.getElementsByClassName(e).removeAttribute(t)
}
browser.init = function() {
    browser.MOBILE = browser.checkMobile(), browser.TABLET = browser.checkTablet(), browser.BROWSER_NAME = this.searchString(this.dataBrowser) || "An unknown browser", browser.BROWSER_VERSION = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", browser.OS = this.searchString(this.dataOS) || "an unknown OS", browser.DESKTOP = !browser.MOBILE && !browser.TABLET, "Firefox" == browser.BROWSER_NAME && 10 <= browser.BROWSER_VERSION && (browser.TRANSLATE3D_SUPPORT = !0)
}, browser.searchString = function(e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t].string,
            n = e[t].prop;
        if (browser.BROWSER_VERSIONSearchString = e[t].versionSearch || e[t].identity, i) {
            if (-1 != i.indexOf(e[t].subString)) return e[t].identity
        } else if (n) return e[t].identity
    }
}, browser.searchVersion = function(e) {
    var t = e.indexOf(browser.BROWSER_VERSIONSearchString);
    if (-1 != t) return parseFloat(e.substring(t + browser.BROWSER_VERSIONSearchString.length + 1))
}, browser.getOlderSafariVersion = function(e) {
    return e < 100 ? 1 : e < 125.2 ? 1.1 : e < 312.1 ? 1.2 : e < 412 ? 1.3 : e < 523.1 ? 2 : e <= 523.12 ? 3 : void 0
}, browser.dataBrowser = [{
    string: navigator.userAgent,
    subString: "Chrome",
    identity: "Chrome"
}, {
    string: navigator.userAgent,
    subString: "OmniWeb",
    versionSearch: "OmniWeb/",
    identity: "OmniWeb"
}, {
    string: navigator.vendor,
    subString: "Apple",
    identity: "Safari",
    versionSearch: "Version"
}, {
    prop: window.opera,
    identity: "Opera"
}, {
    string: navigator.vendor,
    subString: "iCab",
    identity: "iCab"
}, {
    string: navigator.vendor,
    subString: "KDE",
    identity: "Konqueror"
}, {
    string: navigator.userAgent,
    subString: "Firefox",
    identity: "Firefox"
}, {
    string: navigator.vendor,
    subString: "Camino",
    identity: "Camino"
}, {
    string: navigator.userAgent,
    subString: "Netscape",
    identity: "Netscape"
}, {
    string: navigator.userAgent,
    subString: "MSIE",
    identity: "Explorer",
    versionSearch: "MSIE"
}, {
    string: navigator.userAgent,
    subString: "Gecko",
    identity: "Mozilla",
    versionSearch: "rv"
}, {
    string: navigator.userAgent,
    subString: "Mozilla",
    identity: "Netscape",
    versionSearch: "Mozilla"
}], browser.dataOS = [{
    string: navigator.platform,
    subString: "Win",
    identity: "Windows"
}, {
    string: navigator.platform,
    subString: "Mac",
    identity: "Mac"
}, {
    string: navigator.userAgent,
    subString: "iPhone",
    identity: "iPhone/iPod"
}, {
    string: navigator.userAgent,
    subString: "iPad",
    identity: "iPad"
}, {
    string: navigator.userAgent,
    subString: "Android",
    identity: "Android"
}, {
    string: navigator.userAgent,
    subString: "Windows CE",
    identity: "Windows CE"
}, {
    string: navigator.userAgent,
    subString: "Palm",
    identity: "Palm"
}, {
    string: navigator.userAgent,
    subString: "Blackberry",
    identity: "Blackberry"
}, {
    string: navigator.platform,
    subString: "Linux",
    identity: "Linux"
}], browser.checkMobile = function() {
    var e = /iphone|ipod|kindle|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
    return 1 == e && (browser.TABLET = !1), !0 === e
}, browser.checkTablet = function() {
    var e = /ipad|sch-i800|playbook|xoom|gt-p1000|gt-p7510|sgh-t849|nexus 7|nexus 10|shw-m180s|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase());
    if (!0 === /android/i.test(navigator.userAgent.toLowerCase()) || !0 === e) {
        var t = screen.height,
            i = screen.width;
        i < t && (i = screen.height, t = screen.width), e = 640 <= t && 1024 <= i || !(browser.MOBILE = !0)
    }
    return 1 == e && (browser.MOBILE = !1), !0 === e
}, browser.BROWSER_NAME = null, browser.BROWSER_VERSION = null, browser.OS = null, browser.MOBILE = !1, browser.TABLET = !1, browser.TRANSLATE3D_SUPPORT = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix, browser.init(), String.prototype.eval = function(data) {
    for (var res = "", self = this; res = self.match(/(\{\$([^}]*)\})/);) self = data ? self.replace(res[0], function() {
        return this[res[2]]
    }.call(data)) : self.replace(res[0], eval(res[2]));
    return self
}, PopupUtil = {
    settings: null,
    current: "",
    init: function(e) {
        e || (e = {}), e.modal && "string" == typeof e.modal && (e.modal = $(e.modal)), !e.popups && e.modal && (e.popups = [], e.modal.children().each(function() {
            e.popups.push($(this))
        })), (PopupUtil.settings = e).modal && (e.items || (e.items = [], e.modal.children().each(function() {
            e.items.push({
                selector: $(this)
            })
        })), e.showModal || (PopupUtil.settings.showModal = function() {
            e.modal.show()
        }), e.hideModal || (PopupUtil.settings.hideModal = function() {
            e.modal.hide()
        })), PopupUtil.settings.show || (PopupUtil.settings.show = function(e) {
            e.show()
        }), PopupUtil.settings.hide || (PopupUtil.settings.hide = function(e) {
            e.hide()
        })
    },
    default: function() {},
    show: function(e) {
        if (PopupUtil.settings.popups)
            for (var t = 0, i = PopupUtil.settings.popups.length; t < i; t++) {
                var n = PopupUtil.settings.popups[t];
                n !== PopupUtil.current && PopupUtil.hide($(n))
            }
        PopupUtil.current = e, PopupUtil.settings.show($(e)), PopupUtil.settings.showModal && PopupUtil.settings.showModal()
    },
    hide: function(e) {
        PopupUtil.settings.hide($(e))
    },
    hideAll: function() {
        PopupUtil.hideModal();
        for (var e = 0, t = PopupUtil.settings.popups.length; e < t; e++) PopupUtil.hide($(PopupUtil.settings.popups[e]))
    },
    hideModal: function() {
        PopupUtil.settings.hideModal && PopupUtil.settings.hideModal()
    },
    enableKeyboard: function(e) {
        function t(e) {
            27 == e.keyCode && PopupUtil.hideAll()
        }
        0 == e ? $(document).off("keydown", t) : $(document).on("keydown", t)
    }
}, $.fn.animateOnScroll = function(c) {
    var e = this,
        t = function() {
            var o = $(window).scrollTop(),
                l = $(window).height();
            e.each(function(e) {
                var t = $(this),
                    i = t.offset().top,
                    n = t.find(c.sections),
                    s = App.check(t, "data-view") ? t.attr("data-view") : .8;
                if (i < o + l * s) {
                    var r = App.check(t, "data-stagger-time") ? t.attr("data-stagger-time") : 150,
                        a = Number(r);
                    t.hasClass("anim-block") && n.each(function(e) {
                        $(this).hasClass(c.classDone) || $(this).delay(e * a).queue(function() {
                            $(this).addClass(c.classDone).dequeue()
                        })
                    })
                }
            })
        };
    $(window).on("scroll", t), t()
};
var App = {
    viewport_height: null,
    viewport_width: null,
    mobile_menu_anim: !0,
    init: function() {
        $(window).on("load", App.config)
    },
    config: function() {
        App.resize(), $(window).on("resize", App.resize), App.bind(), App.UI.init(), App.Test.init(), App.Scroll.init(), App.sliderSwipper.init(), App.Animations.init(), App.Login.init(), App.Cv.init(), App.Profile.init(), $("#chatbot-page").length
    },
    bind: function() {
        $("#menu-btn").on("click", App.openMobile), $(".categories-list-item").on("click", App.categoriesChange), $(".arrows-container .up-arrow").on("click", App.categoriesUp), $(".arrows-container .down-arrow").on("click", App.categoriesDown), $("#video-btn").on("click", App.showVideo), $(".job-btn-container").on("click", ".pop-up-job", App.popUpJob), $("#start-chatbot").on("click", App.startChatbot), $(".pop-up-close-btn").on("click", App.popUpJob), $(".logged-user-job-btn").on("click", App.jobOfferForm)
    },
    resize: function() {
        App.viewport_height = $(window).height(), App.viewport_width = $(window).width(), App.mobile = !!(navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i) || App.viewport_width < 1024)
    },
    check: function(e, t) {
        return void 0 !== $(e).attr(t)
    },
    openMobile: function(e) {
        e && e.preventDefault();
        var t = $(this),
            i = $("#header");
        App.mobile_menu_anim && (!t.hasClass("active") && App.mobile_menu_anim ? (App.mobile_menu_anim = !1, $("body").addClass("of-hidden"), $("html").addClass("of-hidden"), t.addClass("active"), setTimeout(function() {
            t.addClass("rotate-lines")
        }, 300), i.addClass("active-mobile-menu"), TweenMax.staggerFromTo(".menu-anim-el", .8, {
            autoAlpha: 0,
            y: 15
        }, {
            autoAlpha: 1,
            y: 0,
            delay: .6,
            ease: Power4.easeOut,
            onComplete: function() {
                App.mobile_menu_anim = !0
            }
        }, .12)) : App.closeMobile())
    },
    closeMobile: function() {
        var e = $("#menu-btn"),
            t = $("#header");
        t.hasClass("active-mobile-menu") && App.mobile_menu_anim && ($("body").removeClass("of-hidden"), $("html").removeClass("of-hidden"), e.removeClass("rotate-lines"), t.removeClass("active-mobile-menu"), setTimeout(function() {
            e.removeClass("active")
        }, 300))
    },
    categoriesChange: function(e) {
        e && e.preventDefault();
        var t = $(this);
        t.hasClass("active") || (t.addClass("active").siblings().removeClass("active"), App.getTabsAjax(t))
    },
    categoriesUp: function(e) {
        e && e.preventDefault();
        var t = $(".categories-list .categories-list-item"),
            i = t.length,
            n = t.filter(".active").index();
        0 == n ? (t.eq(i - 1).addClass("active").siblings().removeClass("active"), App.getTabsAjax(t.eq(i - 1))) : (t.eq(n - 1).addClass("active").siblings().removeClass("active"), App.getTabsAjax(t.eq(n - 1)))
    },
    categoriesDown: function(e) {
        e && e.preventDefault();
        var t = $(".categories-list .categories-list-item"),
            i = t.length,
            n = t.filter(".active").index();
        n < i - 1 ? (t.eq(n + 1).addClass("active").siblings().removeClass("active"), App.getTabsAjax(t.eq(n + 1))) : (t.eq(0).addClass("active").siblings().removeClass("active"), App.getTabsAjax(t.eq(0)))
    },
    getTabsAjax: function(e) {
        var t = e.attr("data-content");
        $.ajax({
            url: t,
            dataType: "html",
            type: "get",
            success: function(e) {
                $("#available-positions-container").html(e).promise().done(function() {
                    App.mobile || TweenMax.staggerFromTo(".available-positions-container .position-row", 1, {
                        y: 15,
                        autoAlpha: 0
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: Expo.easeOut,
                        clearProps: "transform"
                    }, .06)
                })
            }
        })
    },
    showVideo: function(e) {
        if (!App.mobile) {
            e && e.preventDefault();
            var t = $(this),
                i = t.attr("href").match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/),
                n = t.parents(".video-player-inner"),
                s = n.find(".video-frame");
            null != i && (i = i[1]);
            var r = '<iframe class="ytplayer" title="YouTube video player" src="//www.youtube.com/embed/' + i + '?color=white&amp&rel=0&autoplay=1;theme=light&amp&showinfo=0" frameborder="0" allowfullscreen="1"></iframe>';
            n.addClass("play"), s.append(r)
        }
    },
    popUpJob: function(e) {
        e && e.preventDefault();
        var t = $(".pop-up-message"),
            i = $(".pop-up-message-container");
        t.hasClass("active") ? (t.removeClass("active").fadeOut(200), TweenMax.to(i, .2, {
            y: 50,
            autoAlpha: 0
        })) : (t.addClass("active").fadeIn(300), TweenMax.fromTo(i, .3, {
            y: 50,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1
        }))
    },
    startChatbot: function(e) {
        e && e.preventDefault();
        var t = $(this),
            i = $(".robot-text-item"),
            n = $("#chatbot-page"),
            s = t.attr("data-title");
        t.parents(".robot-intro-section").find(".intro-title").html(s), i.empty().remove(), n.addClass("active"), SoGeYoung.start()
    },
    jobOfferForm: function(e) {
        e && e.preventDefault();
        var t = $(this),
            i = $("#job-offer-form"),
            n = i.data(),
            s = i.attr("action"),
            r = $(".job-btn-container .success-message");
        t.hasClass("pop-up-job") || $.ajax({
            url: s,
            dataType: "json",
            type: "post",
            data: n,
            success: function(e) {
                console.log(e), 1 == e.status && (r.addClass("success-active"), t.hasClass("pop-up-job") || t.addClass("pop-up-job"))
            }
        })
    }
};
App.Animations = {
    init: function() {
        $(".anim-block").animateOnScroll({
            sections: ".anim-elem",
            classDone: "done"
        })
    }
}, App.CookieBar = {
    init: function() {
        App.CookieBar.checkCookie("weUseCookies"), App.CookieBar.bind()
    },
    bind: function() {
        $(document).on("click", "#weUseCookies", function() {
            App.CookieBar.setCookie("weUseCookies", weUseCookies, 365), $(".cookie__bar").fadeOut("slow")
        })
    },
    setCookie: function(e, t, i) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
        var s = "expires=" + n.toUTCString();
        document.cookie = e + "=" + t + ";" + s + ";path=/"
    },
    checkCookie: function(e) {
        "" != (e = App.CookieBar.getCookie(e)) ? $(".cookie__bar").hide(): $(".cookie__bar").show()
    },
    getCookie: function(e) {
        for (var t = e + "=", i = decodeURIComponent(document.cookie).split(";"), n = 0; n < i.length; n++) {
            for (var s = i[n];
                " " == s.charAt(0);) s = s.substring(1);
            if (0 == s.indexOf(t)) return console.log(s.substring(t.length, s.length)), s.substring(t.length, s.length)
        }
        return ""
    }
}, App.Cv = {
    init: function() {
        App.Cv.bind()
    },
    bind: function() {
        $("#file-input").on("change", App.Cv.cvName), $(".cv-radio-input").on("change", App.Cv.changeCvName), $(".history-main-item").on("click", App.Cv.cvList), $(".cv-change-btn").on("click", App.Cv.cvItemDelete), $(document).on("keydown", App.Cv.escClose), $("#form-cv-apply").on("submit", App.Cv.sendForm)
    },
    cvName: function(e) {
        e && e.preventDefault();
        var t = $(this).val().split("\\").pop();
        $(".file-name").html(t)
    },
    cvList: function(e) {
        e && e.preventDefault();
        var t = $(this);
        t.hasClass("active") ? App.Cv.cvListClose() : (t.addClass("active"), t.find(".history-list").slideDown(), t.parents(".cv-list-row").siblings().find(".history-main-item").removeClass("active").find(".history-list").slideUp())
    },
    cvListClose: function(e) {
        e && e.preventDefault(), $(".history-main-item").each(function() {
            var e = $(this);
            e.hasClass("active") && (e.removeClass("active"), e.find(".history-list").slideUp())
        })
    },
    escClose: function(e) {
        $(".history-main-item").length && 27 == e.keyCode && App.Cv.cvListClose()
    },
    changeCvName: function(e) {
        e && e.preventDefault();
        var t = $(this).parents(".cv-list-row").find(".name-text").text();
        $(".file-name").html(t)
    },
    cvItemDelete: function(e) {
        e && e.preventDefault();
        var t = $(this).closest(".cv-list-row");
        t.remove(), console.log(t)
    },
    sendForm: function(e) {
        e && e.preventDefault();
        var i = $(this),
            t = i.serialize(),
            n = $(".error-message"),
            s = $(".success-message"),
            r = i.attr("action");

        function a() {
            var e = $("html, body"),
                t = $(".apply-bottom-section").offset().top;
            setTimeout(function() {
                e.animate({
                    scrollTop: t
                }, 600)
            })
        }
        console.log("test"), i.hasClass("loading") || (i.addClass("loading"), n.hasClass("active") && n.removeClass("active"), s.hasClass("active") && s.removeClass("active"), $.ajax({
            url: r,
            dataType: "json",
            type: "post",
            data: t,
            success: function(e) {
                1 == e.status ? function() {
                    i.removeClass("loading"), $(".file-name").html(""), s.addClass("active"), a();
                    for (var e = document.getElementsByName("cv_item"), t = 0; t < e.length; t++) e[t].checked = !1
                }() : (setTimeout(function() {
                    i.removeClass("loading")
                }, 1e3), n.addClass("active"), a())
            }
        }))
    }
}, $(document).on("click", "#fb-login", function(e) {
    function t(e) {
        if (e.authResponse) {
            var t = {};
            FB.api("/me?fields=first_name,last_name,email", function(e) {
                t.fb_id = e.id, t.fb_first_name = e.first_name, t.fb_last_name = e.last_name, t.fb_email = e.email, $.ajax({
                    url: _root + "users/facebook_login",
                    data: t,
                    type: "POST"
                }).done(function(e) {
                    data = JSON.parse(e), data.status ? window.location.replace(data.url) : console.error("There was a problem logging you in.")
                })
            }, {
                scope: "email"
            })
        } else console.error("Could not connect to Facebook.")
    }
    e.preventDefault(), FB.getLoginStatus(function(e) {
        "connected" === e.status ? t(e) : "not_authorized" === e.status ? FB.login(function(e) {
            t(e)
        }, {
            scope: "email"
        }) : FB.login(function(e) {
            t(e)
        }, {
            scope: "email"
        })
    })
}), App.Login = {
    init: function() {
        App.Login.bind()
    },
    bind: function() {
        $(".form-fld").on("focus", App.Login.formItem), $("#login-form").on("submit", App.Login.sendLoginForm), $("#registration-form").on("submit", App.Login.sendRegistrationForm), $("input.form-fld").on("click", App.Login.removeError)
    },
    formItem: function() {
        var e = $(this).parent(".form-row");
        e.hasClass("error-fld") && e.removeClass("error-fld")
    },
    removeError: function() {
        $(this).parent().hasClass("error-fld") && $(this).parent().removeClass("error-fld")
    },
    sendLoginForm: function(e) {
        e && e.preventDefault();
        var i = $(this),
            t = i.serialize(),
            n = i.attr("action");
        i.hasClass("loading") || (i.addClass("loading"), $.ajax({
            url: n,
            dataType: "json",
            type: "post",
            data: t,
            success: function(e) {
                var t;
                1 == e.status ? (i.removeClass("loading"), window.location = i.find($("#submit-btn")).attr("data-href")) : (t = e, setTimeout(function() {
                    i.removeClass("loading")
                }, 1e3), $.each(t.errors, function(e, t) {
                    var i = $("#" + e).parent(),
                        n = $("#" + e).parent().find(".tooltip-div");
                    n.text(t), i.addClass("error-fld")
                }))
            }
        }))
    },
    sendRegistrationForm: function(e) {
        e && e.preventDefault();
        var i = $(this),
            t = i.serialize(),
            n = i.attr("action");
        i.hasClass("loading") || (i.addClass("loading"), $.ajax({
            url: n,
            dataType: "json",
            type: "post",
            data: t,
            success: function(e) {
                var t;
                1 == e.status ? function() {
                    i.removeClass("loading");
                    var e = i.closest(".login-grid");
                    success_box_image = $("#success-registration-box .login-image-item"), success_box_text = $("#success-registration-box .login-content-item"), e.addClass("success-message"), TweenMax.staggerFromTo([success_box_image, success_box_text], .5, {
                        autoAlpha: 0,
                        cycle: {
                            y: [-20, 20]
                        }
                    }, {
                        autoAlpha: 1,
                        y: 0
                    }, .01)
                }() : (t = e, setTimeout(function() {
                    i.removeClass("loading")
                }, 1e3), $.each(t.errors, function(e, t) {
                    var i = $("#" + e).parent(),
                        n = $("#" + e).parent().find(".tooltip-div");
                    n.text(t), i.addClass("error-fld")
                }))
            }
        }))
    }
}, App.Preload = {
    images: function() {
        return ["https://unsplash.it/200/300"]
    },
    init: function() {
        Units.loadImages(this.images(), function() {
            App.pageLoad()
        })
    }
}, App.Profile = {
    init: function() {
        App.Profile.bind()
    },
    bind: function() {
        $(".profile-section").on("focus", ".profile-form-fld", App.Profile.fieldFocus), $(".profile-section").on("focus", ".form-fld", App.Login.formItem), $(".profile-section").on("change", "#file-input", App.Profile.fileFieldFocus), $(".profile-section").on("change", "#file-input", App.Cv.cvName), $(".profile-section").on("blur", ".profile-form-fld", App.Profile.fieldBlur), $(".profile-nav-btn").on("click", App.Profile.profileNavChange), $("#edit_profile_frame").on("load", App.Profile.sendProfileForm), $(".profile-section").on("submit", "#profile-result-form", App.Profile.sendCodeForm), $(".profile-section").on("submit", "#profile-password-form", App.Profile.sendPasswordForm), $(".profile-section").on("submit", "#profile-form-cv", App.Profile.sendProfileCvForm)
    },
    fieldFocus: function(e) {
        e && e.preventDefault();
        var t = $(this),
            i = t.closest(".profile-info-item");
        i.parent().hasClass("person-name-row") ? i.addClass("active").siblings().removeClass("active").parent().siblings().find(".profile-info-item").removeClass("active") : i.addClass("active").parent().siblings().find(".profile-info-item").removeClass("active"), t.parent().hasClass("error-fld") && t.parent().removeClass("error-fld")
    },
    fileFieldFocus: function() {
        $(this).closest(".cv-top-row").removeClass("error-fld")
    },
    fieldBlur: function(e) {
        e && e.preventDefault(), $(".profile-info-item").removeClass("active")
    },
    profileNavChange: function(e) {
        e && e.preventDefault();
        var t = $(this);
        t.hasClass("active") || (t.addClass("active").siblings().removeClass("active"), App.Profile.getNavTabsAjax(t))
    },
    getNavTabsAjax: function(e) {
        var t = e.attr("data-content");
        $.ajax({
            url: t,
            dataType: "html",
            type: "get",
            success: function(e) {
                $("#profile-content-container").html(e).promise().done(function() {
                    App.mobile || TweenMax.fromTo("#profile-content-container", 1, {
                        y: 15,
                        autoAlpha: 0
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: Expo.easeOut,
                        clearProps: "transform"
                    })
                })
            }
        })
    },
    sendProfileForm: function(e) {
        var t, i = JSON.parse(document.getElementById($(this).attr("id")).contentWindow.document.body.innerHTML),
            n = $(".profile-image-item img"),
            s = $(".person-container img"),
            r = $("#profile-info-form");
        if (0 == i.status) return console.log(i, "false"), t = i, setTimeout(function() {
            r.removeClass("loading")
        }, 1e3), void $.each(t.errors, function(e, t) {
            var i = $("#" + e).parent(),
                n = $("#" + e).parent().find(".tooltip-div");
            n.text(t), i.addClass("error-fld")
        });
        n.attr("src", i.avatar), s.attr("src", i.avatar), r.removeClass("loading"), TweenMax.fromTo($(".success-msg"), .7, {
            autoAlpha: 0,
            y: 50
        }, {
            autoAlpha: 1,
            y: 0
        }), setTimeout(function() {
            TweenMax.fromTo($(".success-msg"), .7, {
                autoAlpha: 1,
                y: 0
            }, {
                autoAlpha: 0,
                y: 50
            })
        }, 3e3)
    },
    sendCodeForm: function(e) {
        e && e.preventDefault();
        var n = $(this),
            t = n.serialize(),
            i = n.attr("action");
        n.hasClass("loading") || (n.addClass("loading"), $.ajax({
            url: i,
            dataType: "json",
            type: "post",
            data: t,
            success: function(e) {
                var t, i;
                1 == e.status ? (i = e, n.removeClass("loading"), $("#profile-content-container").html("").append(i.html).promise().done(function() {
                    App.mobile || TweenMax.fromTo("#profile-content-container", 1, {
                        y: 15,
                        autoAlpha: 0
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: Expo.easeOut,
                        clearProps: "transform"
                    })
                })) : (t = e, setTimeout(function() {
                    n.removeClass("loading")
                }, 1e3), $.each(t.errors, function(e, t) {
                    var i = $("#" + e).parent();
                    i.addClass("error-fld")
                }))
            }
        }))
    },
    sendPasswordForm: function(e) {
        e && e.preventDefault();
        var i = $(this),
            t = i.serialize(),
            n = i.attr("action");
        i.hasClass("loading") || (i.addClass("loading"), $.ajax({
            url: n,
            dataType: "json",
            type: "post",
            data: t,
            success: function(e) {
                var t;
                1 == e.status ? (i.removeClass("loading"), TweenMax.fromTo($(".success-msg"), .7, {
                    autoAlpha: 0,
                    y: 50
                }, {
                    autoAlpha: 1,
                    y: 0
                }), setTimeout(function() {
                    TweenMax.fromTo($(".success-msg"), .7, {
                        autoAlpha: 1,
                        y: 0
                    }, {
                        autoAlpha: 0,
                        y: 50
                    })
                }, 3e3), i.find("input").map(function(e, t) {
                    t.value = ""
                })) : (t = e, setTimeout(function() {
                    i.removeClass("loading")
                }, 1e3), $.each(t.errors, function(e, t) {
                    var i = $("#" + e).parent(),
                        n = $("#" + e).parent().find(".tooltip-div");
                    n.text(t), i.addClass("error-fld")
                }))
            }
        }))
    },
    sendProfileCvForm: function(e) {
        e && e.preventDefault();
        var i = $(this),
            t = i.serialize(),
            n = i.attr("action");
        i.hasClass("loading") || (i.addClass("loading"), $.ajax({
            url: n,
            dataType: "json",
            type: "post",
            data: t,
            success: function(e) {
                var t;
                1 == e.status ? function(e) {
                    i.removeClass("loading");
                    var t = $("#profile-form-cv .form-cv-list");
                    $(".profile-cv-success").addClass("active"), t.append(e.html).promise().done(function() {
                        App.mobile || TweenMax.fromTo(t, 1, {
                            y: 15,
                            autoAlpha: 0
                        }, {
                            y: 0,
                            autoAlpha: 1,
                            ease: Expo.easeOut,
                            clearProps: "transform"
                        })
                    })
                }(e) : (t = e, setTimeout(function() {
                    i.removeClass("loading")
                }, 1e3), $.each(t.errors, function(e, t) {
                    var i = $("#" + e).closest(".cv-top-row");
                    i.addClass("error-fld")
                }))
            }
        }))
    }
}, App.Scroll = {
    scroll_drag: !1,
    animated: !1,
    header_height_scroll: 105,
    last_scroll_top: 0,
    scrolled: !0,
    animation_scroll: !1,
    init: function() {
        App.Scroll.bind(), App.Scroll.parallaxInit(), $(window).on("scroll", App.Scroll.headerStatesSwitch)
    },
    bind: function() {
        $(".scroll-top-btn").on("click", App.Scroll.scrollTo)
    },
    initHelpers: function() {
        $(window).scroll(App.Scroll.handler).mousedown(App.Scroll.setDrag).mouseup(App.Scroll.unsetDrag), App.viewport = getViewportSize(), App._dispatcher = $(".parallax-elem").clone()
    },
    setDrag: function() {
        App.Scroll.scroll_drag = !0
    },
    unsetDrag: function() {
        App.Scroll.scroll_drag = !1
    },
    getProgress: function() {
        var e = getScrollTop() / (getDocHeight() - App.viewport.height);
        return e = Math.min(1, Math.max(0, e))
    },
    handler: function(e) {
        _event = App.scroll_drag ? "drag" : "scroll", App._dispatcher.trigger(_event, [e, App.Scroll.getProgress(), getScrollTop()]);
        getScrollTop()
    },
    parallaxAnimation: function(e, t, i, n) {
        var s = new TimelineMax({
                paused: !0
            }),
            r = e.offset(),
            a = App.viewport.height + e.height() - 100,
            o = App._dispatcher,
            l = {},
            c = e.attr("data-val"),
            u = {};
        u[t] = c, u.ease = Linear.easeNone;
        i = e.attr("data-from");
        var d = {};
        if (d[t] = i, 0 == r.top) {
            if (App.mobile) return;
            return s.to(e, .75, u, 0), void o.on("scroll", function() {
                var e = Math.min(1, Math.max(0, getScrollTop() / getViewportSize().height));
                s.progress(e)
            }).on("drag", function() {
                if (!App.mobile) {
                    var e = Math.min(1, Math.max(0, getScrollTop() / getViewportSize().height)),
                        t = s.totalDuration();
                    s.tweenTo(e * t)
                }
            })
        }
        Math.abs(App.viewport.height - 500);
        l = void 0 !== i ? {
            from: d,
            to: u
        } : {
            from: 0,
            to: u
        };
        TweenMax.set(e, l.from, {
            force3D: !0
        }), s.to(e, 1, l.to), o.on("scroll", function(e) {
            if (!App.mobile) {
                var t = getScrollTop() + App.viewport.height - r.top,
                    i = Math.min(1, Math.max(0, t / a));
                r.top < App.viewport.height && (i = getScrollTop() / (r.top + 500)), s.progress(i)
            }
        }).on("drag", function(e) {
            if (!App.mobile) {
                var t = getScrollTop() + App.viewport.height - r.top,
                    i = Math.min(1, Math.max(0, t / a)),
                    n = s.totalDuration();
                r.top < App.viewport.height && (i = getScrollTop() / (r.top + 500)), s.tweenTo(i * n)
            }
        })
    },
    parallaxInit: function() {
        if (!App.mobile && !$.browser.msedge && !$.browser.msie) {
            App.Scroll.initHelpers();
            var e = $(".parallax-elem");
            e.length && e.each(function(e) {
                var t = $(this),
                    i = t.attr("data-move");
                App.Scroll.parallaxAnimation(t, i)
            })
        }
    },
    headerStatesSwitch: function(e) {
        var t = $(window).scrollTop(),
            i = $("#header");
        App.mobile || $.browser.msedge || $.browser.msie || t > App.Scroll.header_height_scroll && (t > App.Scroll.last_scroll_top ? App.Scroll.scrolled && (i.addClass("down-state"), App.Scroll.scrolled = !1) : (i.removeClass("down-state"), App.Scroll.scrolled = !0), App.Scroll.last_scroll_top = t)
    },
    scrollTo: function(e) {
        if (!$("#fullpage").length) {
            e && e.preventDefault();
            var t = $(this),
                i = t.attr("data-scroll"),
                n = $("#" + i).offset().top,
                s = $("#header").height(),
                r = $("html, body");
            t.hasClass("scroll-top-btn") ? setTimeout(function() {
                r.animate({
                    scrollTop: n - s
                }, 600)
            }) : setTimeout(function() {
                r.animate({
                    scrollTop: n
                }, 600)
            })
        }
    }
}, App.sliderSwipper = {
    slider: null,
    init: function(e) {
        App.sliderSwipper.swipperInit()
    },
    bind: function() {},
    swipperInit: function() {
        var swipper = $(".slider-swipper");
        swipper.length && swipper.each(function() {
            var self = $(this),
                slides = self.find(".swiper-slide"),
                swiperOptions = {
                    effect: App.check(self, "data-effect") ? eval(self.attr("data-effect")) : "slide",
                    direction: "horizontal",
                    speed: App.check(self, "data-speed") ? eval(self.attr("data-speed")) : 1e3,
                    slidesPerView: App.check(self, "data-items") ? eval(self.attr("data-items")) : 1,
                    slideActiveClass: "active",
                    spaceBetween: App.check(self, "data-space") ? eval(self.attr("data-space")) : 0,
                    preventClicks: !0,
                    loop: !!App.check(self, "data-loop") && self.attr("data-loop"),
                    navigation: {
                        nextEl: self.parent().find(".swiper-button-next"),
                        prevEl: self.parent().find(".swiper-button-prev")
                    },
                    pagination: {
                        el: self.find(".swiper-pagination"),
                        type: App.check(self, "data-pagination") ? eval(self.attr("data-pagination")) : "bullets",
                        clickable: !0
                    },
                    breakpoints: {
                        1366: {
                            slidesPerView: App.check(self, "data-items-laptop") ? eval(self.attr("data-items-laptop")) : eval(self.attr("data-items"))
                        },
                        1024: {
                            slidesPerView: App.check(self, "data-items-mobile") ? eval(self.attr("data-items-mobile")) : eval(self.attr("data-items"))
                        }
                    }
                },
                swiper = self;
            swiper = new Swiper(swiper, swiperOptions), App.sliderSwipper.slider = swiper
        })
    }
}, App.Test = {
    person: {
        testStats: {
            action: 0,
            process: 0,
            people: 0,
            idea: 0
        },
        testAnswers: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
            16: 0,
            17: 0,
            18: 0,
            19: 0,
            20: 0,
            21: 0,
            22: 0,
            23: 0,
            24: 0,
            25: 0,
            26: 0,
            27: 0,
            28: 0,
            29: 0,
            30: 0,
            31: 0,
            32: 0,
            33: 0,
            34: 0,
            35: 0,
            36: 0,
            37: 0,
            38: 0,
            39: 0,
            40: 0
        }
    },
    init: function() {
        App.Test.bind(), App.Test.setOpacityToAllUnactiveQuestions()
    },
    bind: function() {
        $("#test").on("click", ".question.active .answer input", App.Test.animateAfterClick), $("#test").on("click", ".question.active .answer input", App.Test.countStats), $("#get-results-email.test-form").on("submit", App.Test.submitEmail)
    },
    click: function() {},
    animateAfterClick: function() {
        if (!$("#test").hasClass("animating")) {
            $("#test").addClass("animating");
            var t = $(".question.active"),
                i = $(t).next(),
                e = $(t).find(".answer").eq(0),
                n = $(t).find(".answer").eq(1),
                s = $(i).find(".answer").eq(0),
                r = $(i).find(".answer").eq(1),
                a = new TimelineMax({
                    onComplete: function() {
                        var e = new TimelineMax;
                        $("#test").removeClass("animating"), $(i).length ? ($(t).removeClass("active"), $(t).next().addClass("active"), $(t).remove(), e.fromTo(s, .8, {
                            x: -20,
                            autoAlpha: 0
                        }, {
                            x: 0,
                            autoAlpha: 1
                        }, 0).fromTo(r, .8, {
                            x: 20,
                            autoAlpha: 0
                        }, {
                            x: 0,
                            autoAlpha: 1
                        }, 0)) : App.Test.submit($("#test"))
                    }
                });
            0 != $(i).length && a.to(e, .8, {
                x: -20,
                autoAlpha: 0
            }, .8).to(n, .8, {
                x: 20,
                autoAlpha: 0
            }, .8)
        }
    },
    setOpacityToAllUnactiveQuestions: function() {
        var e = $(".question").not(".active");
        TweenMax.set($(e).find(".answer"), {
            autoAlpha: 0
        })
    },
    testSend: !1,
    submit: function(e) {
        var t = (e = e).attr("action") + "?v=" + Date.now(),
            i = App.Test.person;
        $.ajax({
            url: t,
            method: "POST",
            data: JSON.stringify(i),
            cache: !1,
            contentType: "application/json",
            dataType: "json",
        }).done(function(e) {
            try {
                window.location.href = e.redirect
            } catch (e) {}
        }).fail(function(e) {})
    },
    countStats: function() {
        var t = $(this)[0].value,
            i = App.Test.person.testStats,
            n = App.Test.person.testAnswers,
            s = Number($(this).data("answer")),
            r = Number($(this).data("question"));
        Object.keys(i).forEach(function(e) {
            e === t && (i[e] += 1)
        }), Object.keys(n).forEach(function(e) {
            Number(e) == r && (n[e] = s)
        })
    },
    submitEmail: function(e) {
        e && e.preventDefault();
        var t = $(this),
            i = t.attr("action"),
            n = t.serialize();
        $.ajax({
            url: i,
            data: n,
            method: "POST"
        }).done(function(e) {
            try {
                var t = JSON.parse(e);
                0 == t.status ? $.each(t.errors, function(e, t) {
                    var i = $("#" + e).parent();
                    $("#" + e).parent().find(".tooltip-div").text(t), i.addClass("error-fld")
                }) : ($(".success-text").html(t.success), $("#get-results-email").addClass("sent-email"), TweenMax.fromTo($(".success-msg"), .7, {
                    autoAlpha: 0,
                    y: 50
                }, {
                    autoAlpha: 1,
                    y: 0,
                    delay: .4
                }))
            } catch (e) {}
        }).fail(function(e) {})
    }
}, App.UI_Animations = {
    config: function() {}
}, App.UI = {
    player: null,
    init: function() {
        App.UI.initLazyLoading(), App.UI.initFullPageJS()
    },
    initLazyLoading: function() {
        new Blazy({
            breakpoints: [{
                width: 480,
                src: "data-src-small"
            }, {
                width: 768,
                src: "data-src-mid"
            }, {
                width: 1024,
                src: "data-src-big"
            }]
        })
    },
    initFullPageJS: function() {
        App.mobile || $("#fullpage").length && $("#fullpage").fullpage({
            anchors: ["home", "test", "help", "advice"],
            responsiveWidth: 1024,
            menu: "#myMenu",
            onLeave: function(e, t, i) {
                e < t ? $("#header").addClass("down-state") : $("#header").removeClass("down-state")
            },
            afterLoad: function(e, t) {
                App.Animations.init()
            }
        })
    }
};