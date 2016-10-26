{
    for (var a = 0, b;
        (b = this[a]) != null; a++) {
        b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
        while (b.firstChild) b.removeChild(b.firstChild)
    }
    return this
}, clone: function(a, b) {
a = a == null ? !1 : a, b = b == null ? a : b;
return this.map(function() {
    return f.clone(this, a, b)
})
}, html: function(a) {
if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
    a = a.replace(Y, "<$1></$2>");
    try {
        for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
    } catch (e) {
        this.empty().append(a)
    }
} else f.isFunction(a) ? this.each(function(b) {
    var c = f(this);
    c.html(a.call(this, b, c.html()))
}) : this.empty().append(a);
return this
}, replaceWith: function(a) {
if (this[0] && this[0].parentNode) {
    if (f.isFunction(a)) return this.each(function(b) {
        var c = f(this),
            d = c.html();
        c.replaceWith(a.call(this, b, d))
    });
    typeof a != "string" && (a = f(a).detach());
    return this.each(function() {
        var b = this.nextSibling,
            c = this.parentNode;
        f(this).remove(), b ? f(b).before(a) : f(c).append(a)
    })
}
return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
}, detach: function(a) {
return this.remove(a, !0)
}, domManip: function(a, c, d) {
var e, g, h, i, j = a[0],
    k = [];
if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
    f(this).domManip(a, c, d, !0)
});
if (f.isFunction(j)) return this.each(function(e) {
    var g = f(this);
    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
});
if (this[0]) {
    i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
        fragment: i
    } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
    if (g) {
        c = c && f.nodeName(g, "tr");
        for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
    }
    k.length && f.each(k, bp)
}
return this
}
}), f.buildFragment = function(a, b, d) {
    var e, g, h, i, j = a[0];
    b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
    return {
        fragment: e,
        cacheable: g
    }
}, f.fragments = {}, f.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function(a, b) {
    f.fn[a] = function(c) {
        var d = [],
            e = f(c),
            g = this.length === 1 && this[0].parentNode;
        if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
            e[b](this[0]);
            return this
        }
        for (var h = 0, i = e.length; h < i; h++) {
            var j = (h > 0 ? this.clone(!0) : this).get();
            f(e[h])[b](j), d = d.concat(j)
        }
        return this.pushStack(d, a, e.selector)
    }
}), f.extend({
    clone: function(a, b, c) {
        var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
        if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
            bk(a, h), d = bl(a), e = bl(h);
            for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
        }
        if (b) {
            bj(a, h);
            if (c) {
                d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) bj(d[g], e[g])
            }
        }
        d = e = null;
        return h
    },
    clean: function(a, b, d, e) {
        var g;
        b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
        var h = [],
            i;
        for (var j = 0, k;
            (k = a[j]) != null; j++) {
            typeof k == "number" && (k += "");
            if (!k) continue;
            if (typeof k == "string")
                if (!_.test(k)) k = b.createTextNode(k);
                else {
                    k = k.replace(Y, "<$1></$2>");
                    var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                        m = bg[l] || bg._default,
                        n = m[0],
                        o = b.createElement("div");
                    b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                    while (n--) o = o.lastChild;
                    if (!f.support.tbody) {
                        var p = $.test(k),
                            q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                        for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                    }!f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                }
            var r;
            if (!f.support.appendChecked)
                if (k[0] && typeof(r = k.length) == "number")
                    for (i = 0; i < r; i++) bn(k[i]);
                else bn(k);
            k.nodeType ? h.push(k) : h = f.merge(h, k)
        }
        if (d) {
            g = function(a) {
                return !a.type || be.test(a.type)
            };
            for (j = 0; h[j]; j++)
                if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                else {
                    if (h[j].nodeType === 1) {
                        var s = f.grep(h[j].getElementsByTagName("script"), g);
                        h.splice.apply(h, [j + 1, 0].concat(s))
                    }
                    d.appendChild(h[j])
                }
        }
        return h
    },
    cleanData: function(a) {
        var b, c, d = f.cache,
            e = f.event.special,
            g = f.support.deleteExpando;
        for (var h = 0, i;
            (i = a[h]) != null; h++) {
            if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
            c = i[f.expando];
            if (c) {
                b = d[c];
                if (b && b.events) {
                    for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                    b.handle && (b.handle.elem = null)
                }
                g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
            }
        }
    }
});
var bq = /alpha\([^)]*\)/i,
    br = /opacity=([^)]*)/,
    bs = /([A-Z]|^ms)/g,
    bt = /^-?\d+(?:px)?$/i,
    bu = /^-?\d/,
    bv = /^([\-+])=([\-+.\de]+)/,
    bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    bx = ["Left", "Right"],
    by = ["Top", "Bottom"],
    bz, bA, bB;
f.fn.css = function(a, c) {
    if (arguments.length === 2 && c === b) return this;
    return f.access(this, a, c, !0, function(a, c, d) {
        return d !== b ? f.style(a, c, d) : f.css(a, c)
    })
}, f.extend({
    cssHooks: {
        opacity: {
            get: function(a, b) {
                if (b) {
                    var c = bz(a, "opacity", "opacity");
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
        "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
            var g, h, i = f.camelCase(c),
                j = a.style,
                k = f.cssHooks[i];
            c = f.cssProps[i] || i;
            if (d === b) {
                if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                return j[c]
            }
            h = typeof d, h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
            if (d == null || h === "number" && isNaN(d)) return;
            h === "number" && !f.cssNumber[i] && (d += "px");
            if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                j[c] = d
            } catch (l) {}
        }
    },
    css: function(a, c, d) {
        var e, g;
        c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
        if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
        if (bz) return bz(a, c)
    },
    swap: function(a, b, c) {
        var d = {};
        for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
        c.call(a);
        for (e in b) a.style[e] = d[e]
    }
}), f.curCSS = f.css, f.each(["height", "width"], function(a, b) {
    f.cssHooks[b] = {
        get: function(a, c, d) {
            var e;
            if (c) {
                if (a.offsetWidth !== 0) return bC(a, b, d);
                f.swap(a, bw, function() {
                    e = bC(a, b, d)
                });
                return e
            }
        },
        set: function(a, b) {
            if (!bt.test(b)) return b;
            b = parseFloat(b);
            if (b >= 0) return b + "px"
        }
    }
}), f.support.opacity || (f.cssHooks.opacity = {
    get: function(a, b) {
        return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
    },
    set: function(a, b) {
        var c = a.style,
            d = a.currentStyle,
            e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
            g = d && d.filter || c.filter || "";
        c.zoom = 1;
        if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
            c.removeAttribute("filter");
            if (d && !d.filter) return
        }
        c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
    }
}), f(function() {
    f.support.reliableMarginRight || (f.cssHooks.marginRight = {
        get: function(a, b) {
            var c;
            f.swap(a, {
                display: "inline-block"
            }, function() {
                b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
            });
            return c
        }
    })
}), c.defaultView && c.defaultView.getComputedStyle && (bA = function(a, b) {
    var c, d, e;
    b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
    return c
}), c.documentElement.currentStyle && (bB = function(a, b) {
    var c, d, e, f = a.currentStyle && a.currentStyle[b],
        g = a.style;
    f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
    return f === "" ? "auto" : f
}), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight;
    return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
}, f.expr.filters.visible = function(a) {
    return !f.expr.filters.hidden(a)
});
var bD = /%20/g,
    bE = /\[\]$/,
    bF = /\r?\n/g,
    bG = /#.*$/,
    bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    bK = /^(?:GET|HEAD)$/,
    bL = /^\/\//,
    bM = /\?/,
    bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bO = /^(?:select|textarea)/i,
    bP = /\s+/,
    bQ = /([?&])_=[^&]*/,
    bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bS = f.fn.load,
    bT = {},
    bU = {},
    bV, bW, bX = ["*/"] + ["*"];
try {
    bV = e.href
} catch (bY) {
    bV = c.createElement("a"), bV.href = "", bV = bV.href
}
bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({
    load: function(a, c, d) {
        if (typeof a != "string" && bS) return bS.apply(this, arguments);
        if (!this.length) return this;
        var e = a.indexOf(" ");
        if (e >= 0) {
            var g = a.slice(e, a.length);
            a = a.slice(0, e)
        }
        var h = "GET";
        c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
        var i = this;
        f.ajax({
            url: a,
            type: h,
            dataType: "html",
            data: c,
            complete: function(a, b, c) {
                c = a.responseText, a.isResolved() && (a.done(function(a) {
                    c = a
                }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a])
            }
        });
        return this
    },
    serialize: function() {
        return f.param(this.serializeArray())
    },
    serializeArray: function() {
        return this.map(function() {
            return this.elements ? f.makeArray(this.elements) : this
        }).filter(function() {
            return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
        }).map(function(a, b) {
            var c = f(this).val();
            return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                return {
                    name: b.name,
                    value: a.replace(bF, "\r\n")
                }
            }) : {
                name: b.name,
                value: c.replace(bF, "\r\n")
            }
        }).get()
    }
}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
    f.fn[b] = function(a) {
        return this.on(b, a)
    }
}), f.each(["get", "post"], function(a, c) {
    f[c] = function(a, d, e, g) {
        f.isFunction(d) && (g = g || e, e = d, d = b);
        return f.ajax({
            type: c,
            url: a,
            data: d,
            success: e,
            dataType: g
        })
    }
}), f.extend({
    getScript: function(a, c) {
        return f.get(a, b, c, "script")
    },
    getJSON: function(a, b, c) {
        return f.get(a, b, c, "json")
    },
    ajaxSetup: function(a, b) {
        b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
        return a
    },
    ajaxSettings: {
        url: bV,
        isLocal: bJ.test(bW[1]),
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
            "*": bX
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
            "text json": f.parseJSON,
            "text xml": f.parseXML
        },
        flatOptions: {
            context: !0,
            url: !0
        }
    },
    ajaxPrefilter: bZ(bT),
    ajaxTransport: bZ(bU),
    ajax: function(a, c) {
        function w(a, c, l, m) {
            if (s !== 2) {
                s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                var o, r, u, w = c,
                    x = l ? cb(d, v, l) : b,
                    y, z;
                if (a >= 200 && a < 300 || a === 304) {
                    if (d.ifModified) {
                        if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                        if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                    }
                    if (a === 304) w = "notmodified", o = !0;
                    else try {
                        r = cc(d, x), w = "success", o = !0
                    } catch (A) {
                        w = "parsererror", u = A
                    }
                } else {
                    u = w;
                    if (!w || a) w = "error", a < 0 && (a = 0)
                }
                v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
            }
        }
        typeof a == "object" && (c = a, a = b), c = c || {};
        var d = f.ajaxSetup({}, c),
            e = d.context || d,
            g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
            h = f.Deferred(),
            i = f.Callbacks("once memory"),
            j = d.statusCode || {},
            k, l = {},
            m = {},
            n, o, p, q, r, s = 0,
            t, u, v = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a, l[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return s === 2 ? n : null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bH.exec(n)) o[c[1].toLowerCase()] = c[2]
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function(a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort", p && p.abort(a), w(0, a);
                    return this
                }
            };
        h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
            if (a) {
                var b;
                if (s < 2)
                    for (b in a) j[b] = [j[b], a[b]];
                else b = a[v.status], v.then(b, b)
            }
            return this
        }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
        if (s === 2) return !1;
        t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
        if (!d.hasContent) {
            d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
            if (d.cache === !1) {
                var x = f.now(),
                    y = d.url.replace(bQ, "$1_=" + x);
                d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
            }
        }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
        for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
            v.abort();
            return !1
        }
        for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
        p = b$(bU, d, c, v);
        if (!p) w(-1, "No Transport");
        else {
            v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
                v.abort("timeout")
            }, d.timeout));
            try {
                s = 1, p.send(l, w)
            } catch (z) {
                if (s < 2) w(-1, z);
                else throw z
            }
        }
        return v
    },
    param: function(a, c) {
        var d = [],
            e = function(a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (var g in a) ca(g, a[g], c, e);
        return d.join("&").replace(bD, "+")
    }
}), f.extend({
    active: 0,
    lastModified: {},
    etag: {}
});
var cd = f.now(),
    ce = /(\=)\?(&|$)|\?\?/i;
f.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        return f.expando + "_" + cd++
    }
}), f.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
    if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
        var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            i = a[h],
            j = b.url,
            k = b.data,
            l = "$1" + h + "$2";
        b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
            g = [a]
        }, d.always(function() {
            a[h] = i, g && f.isFunction(i) && a[h](g[0])
        }), b.converters["script json"] = function() {
            g || f.error(h + " was not called");
            return g[0]
        }, b.dataTypes[0] = "json";
        return "script"
    }
}), f.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /javascript|ecmascript/
    },
    converters: {
        "text script": function(a) {
            f.globalEval(a);
            return a
        }
    }
}), f.ajaxPrefilter("script", function(a) {
    a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
}), f.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
        var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
        return {
            send: function(f, g) {
                d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
                    if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                }, e.insertBefore(d, e.firstChild)
            },
            abort: function() {
                d && d.onload(0, 1)
            }
        }
    }
});
var cf = a.ActiveXObject ? function() {
        for (var a in ch) ch[a](0, 1)
    } : !1,
    cg = 0,
    ch;
f.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && ci() || cj()
    } : ci,
    function(a) {
        f.extend(f.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function(e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null), d = function(a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
var ck = {},
    cl, cm, cn = /^(?:toggle|show|hide)$/,
    co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    cp, cq = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ],
    cr;
f.fn.extend({
    show: function(a, b, c) {
        var d, e;
        if (a || a === 0) return this.animate(cu("show", 3), a, b, c);
        for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)));
        for (g = 0; g < h; g++) {
            d = this[g];
            if (d.style) {
                e = d.style.display;
                if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
            }
        }
        return this
    },
    hide: function(a, b, c) {
        if (a || a === 0) return this.animate(cu("hide", 3), a, b, c);
        var d, e, g = 0,
            h = this.length;
        for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
        for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
        return this
    },
    _toggle: f.fn.toggle,
    toggle: function(a, b, c) {
        var d = typeof a == "boolean";
        f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
            var b = d ? a : f(this).is(":hidden");
            f(this)[b ? "show" : "hide"]()
        }) : this.animate(cu("toggle", 3), a, b, c);
        return this
    },
    fadeTo: function(a, b, c, d) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({
            opacity: b
        }, a, c, d)
    },
    animate: function(a, b, c, d) {
        function g() {
            e.queue === !1 && f._mark(this);
            var b = f.extend({}, e),
                c = this.nodeType === 1,
                d = c && f(this).is(":hidden"),
                g, h, i, j, k, l, m, n, o;
            b.animatedProperties = {};
            for (i in a) {
                g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
            }
            b.overflow != null && (this.style.overflow = "hidden");
            for (i in a) j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
            return !0
        }
        var e = f.speed(b, c, d);
        if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
        a = f.extend({}, a);
        return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
    },
    stop: function(a, c, d) {
        typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
        return this.each(function() {
            function h(a, b, c) {
                var e = b[c];
                f.removeData(a, c, !0), e.stop(d)
            }
            var b, c = !1,
                e = f.timers,
                g = f._data(this);
            d || f._unmark(!0, this);
            if (a == null)
                for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
            else g[b = a + ".run"] && g[b].stop && h(this, g, b);
            for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
            (!d || !c) && f.dequeue(this, a)
        })
    }
}), f.each({
    slideDown: cu("show", 1),
    slideUp: cu("hide", 1),
    slideToggle: cu("toggle", 1),
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
    f.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
    }
}), f.extend({
    speed: function(a, b, c) {
        var d = a && typeof a == "object" ? f.extend({}, a) : {
            complete: c || !c && b || f.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !f.isFunction(b) && b
        };
        d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = "fx";
        d.old = d.complete, d.complete = function(a) {
            f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
        };
        return d
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
}), f.fx.prototype = {
    update: function() {
        this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
    },
    cur: function() {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
        var a, b = f.css(this.elem, this.prop);
        return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
    },
    custom: function(a, c, d) {
        function h(a) {
            return e.step(a)
        }
        var e = this,
            g = f.fx;
        this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
            e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
        }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
    },
    show: function() {
        var a = f._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
    },
    hide: function() {
        this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
    },
    step: function(a) {
        var b, c, d, e = cr || cs(),
            g = !0,
            h = this.elem,
            i = this.options;
        if (a || e >= i.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
            for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
            if (g) {
                i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                    h.style["overflow" + b] = i.overflow[a]
                }), i.hide && f(h).hide();
                if (i.hide || i.show)
                    for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                d = i.complete, d && (i.complete = !1, d.call(h))
            }
            return !1
        }
        i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
        return !0
    }
}, f.extend(f.fx, {
    tick: function() {
        var a, b = f.timers,
            c = 0;
        for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || f.fx.stop()
    },
    interval: 13,
    stop: function() {
        clearInterval(cp), cp = null
    },
    speeds: {
        slow: 600,
        fast: 200,
        _default: 400
    },
    step: {
        opacity: function(a) {
            f.style(a.elem, "opacity", a.now)
        },
        _default: function(a) {
            a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
        }
    }
}), f.each(["width", "height"], function(a, b) {
    f.fx.step[b] = function(a) {
        f.style(a.elem, b, Math.max(0, a.now) + a.unit)
    }
}), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
    return f.grep(f.timers, function(b) {
        return a === b.elem
    }).length
});
var cw = /^t(?:able|d|h)$/i,
    cx = /^(?:body|html)$/i;
"getBoundingClientRect" in c.documentElement ? f.fn.offset = function(a) {
var b = this[0],
    c;
if (a) return this.each(function(b) {
    f.offset.setOffset(this, a, b)
});
if (!b || !b.ownerDocument) return null;
if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
try {
    c = b.getBoundingClientRect()
} catch (d) {}
var e = b.ownerDocument,
    g = e.documentElement;
if (!c || !f.contains(g, b)) return c ? {
    top: c.top,
    left: c.left
} : {
    top: 0,
    left: 0
};
var h = e.body,
    i = cy(e),
    j = g.clientTop || h.clientTop || 0,
    k = g.clientLeft || h.clientLeft || 0,
    l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
    m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
    n = c.top + l - j,
    o = c.left + m - k;
return {
    top: n,
    left: o
}
} : f.fn.offset = function(a) {
var b = this[0];
if (a) return this.each(function(b) {
    f.offset.setOffset(this, a, b)
});
if (!b || !b.ownerDocument) return null;
if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
var c, d = b.offsetParent,
    e = b,
    g = b.ownerDocument,
    h = g.documentElement,
    i = g.body,
    j = g.defaultView,
    k = j ? j.getComputedStyle(b, null) : b.currentStyle,
    l = b.offsetTop,
    m = b.offsetLeft;
while ((b = b.parentNode) && b !== i && b !== h) {
    if (f.support.fixedPosition && k.position === "fixed") break;
    c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
}
if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
return {
    top: l,
    left: m
}
}, f.offset = {
bodyOffset: function(a) {
    var b = a.offsetTop,
        c = a.offsetLeft;
    f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
    return {
        top: b,
        left: c
    }
},
setOffset: function(a, b, c) {
    var d = f.css(a, "position");
    d === "static" && (a.style.position = "relative");
    var e = f(a),
        g = e.offset(),
        h = f.css(a, "top"),
        i = f.css(a, "left"),
        j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
        k = {},
        l = {},
        m, n;
    j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
}
}, f.fn.extend({
position: function() {
    if (!this[0]) return null;
    var a = this[0],
        b = this.offsetParent(),
        c = this.offset(),
        d = cx.test(b[0].nodeName) ? {
            top: 0,
            left: 0
        } : b.offset();
    c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
    return {
        top: c.top - d.top,
        left: c.left - d.left
    }
},
offsetParent: function() {
    return this.map(function() {
        var a = this.offsetParent || c.body;
        while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
        return a
    })
}
}), f.each(["Left", "Top"], function(a, c) {
var d = "scroll" + c;
f.fn[d] = function(c) {
    var e, g;
    if (c === b) {
        e = this[0];
        if (!e) return null;
        g = cy(e);
        return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
    }
    return this.each(function() {
        g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
    })
}
}), f.each(["Height", "Width"], function(a, c) {
var d = c.toLowerCase();
f.fn["inner" + c] = function() {
    var a = this[0];
    return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
}, f.fn["outer" + c] = function(a) {
    var b = this[0];
    return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
}, f.fn[d] = function(a) {
    var e = this[0];
    if (!e) return a == null ? null : this;
    if (f.isFunction(a)) return this.each(function(b) {
        var c = f(this);
        c[d](a.call(this, b, c[d]()))
    });
    if (f.isWindow(e)) {
        var g = e.document.documentElement["client" + c],
            h = e.document.body;
        return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
    }
    if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
    if (a === b) {
        var i = f.css(e, d),
            j = parseFloat(i);
        return f.isNumeric(j) ? j : i
    }
    return this.css(d, typeof a == "string" ? a : a + "px")
}
}), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
return f
})
})(window);
