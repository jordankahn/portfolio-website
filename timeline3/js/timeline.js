var TL = function(t) {
  var e = {};

  function i(n) {
    if (e[n]) return e[n].exports;
    var r = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
  }
  return i.m = t, i.c = e, i.d = function(t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, i.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, i.t = function(t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var r in t) i.d(n, r, function(e) {
        return t[e]
      }.bind(null, r));
    return n
  }, i.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "", i(i.s = 5)
}([function(t, e, i) {
  /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
  t.exports = function() {
    "use strict";
    var t = Object.hasOwnProperty,
      e = Object.setPrototypeOf,
      i = Object.isFrozen,
      n = Object.keys,
      r = Object.freeze,
      a = Object.seal,
      o = "undefined" != typeof Reflect && Reflect,
      s = o.apply,
      l = o.construct;
    s || (s = function(t, e, i) {
      return t.apply(e, i)
    }), r || (r = function(t) {
      return t
    }), a || (a = function(t) {
      return t
    }), l || (l = function(t, e) {
      return new(Function.prototype.bind.apply(t, [null].concat(function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
          return i
        }
        return Array.from(t)
      }(e))))
    });
    var h = k(Array.prototype.forEach),
      c = k(Array.prototype.indexOf),
      u = k(Array.prototype.join),
      d = k(Array.prototype.pop),
      f = k(Array.prototype.push),
      p = k(Array.prototype.slice),
      _ = k(String.prototype.toLowerCase),
      m = k(String.prototype.match),
      g = k(String.prototype.replace),
      v = k(String.prototype.indexOf),
      y = k(String.prototype.trim),
      w = k(RegExp.prototype.test),
      b = T(RegExp),
      x = T(TypeError);

    function k(t) {
      return function(e) {
        for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
        return s(t, e, n)
      }
    }

    function T(t) {
      return function() {
        for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
        return l(t, i)
      }
    }

    function M(t, n) {
      e && e(t, null);
      for (var r = n.length; r--;) {
        var a = n[r];
        if ("string" == typeof a) {
          var o = _(a);
          o !== a && (i(n) || (n[r] = o), a = o)
        }
        t[a] = !0
      }
      return t
    }

    function L(e) {
      var i = {},
        n = void 0;
      for (n in e) s(t, e, [n]) && (i[n] = e[n]);
      return i
    }
    var E = r(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
      S = r(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]),
      D = r(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
      A = r(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
      j = r(["#text"]),
      C = r(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
      N = r(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
      O = r(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
      I = r(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
      z = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
      R = a(/<%[\s\S]*|[\s\S]*%>/gm),
      P = a(/^data-[\-\w.\u00B7-\uFFFF]/),
      H = a(/^aria-[\-\w]+$/),
      q = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
      F = a(/^(?:\w+script|data):/i),
      B = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
      W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      };

    function U(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i
      }
      return Array.from(t)
    }
    var $ = function() {
        return "undefined" == typeof window ? null : window
      },
      Z = function(t, e) {
        if ("object" !== (void 0 === t ? "undefined" : W(t)) || "function" != typeof t.createPolicy) return null;
        var i = null;
        e.currentScript && e.currentScript.hasAttribute("data-tt-policy-suffix") && (i = e.currentScript.getAttribute("data-tt-policy-suffix"));
        var n = "dompurify" + (i ? "#" + i : "");
        try {
          return t.createPolicy(n, {
            createHTML: function(t) {
              return t
            }
          })
        } catch (t) {
          return console.warn("TrustedTypes policy " + n + " could not be created."), null
        }
      };
    return function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $(),
        i = function(e) {
          return t(e)
        };
      if (i.version = "2.0.11", i.removed = [], !e || !e.document || 9 !== e.document.nodeType) return i.isSupported = !1, i;
      var a = e.document,
        o = !1,
        s = e.document,
        l = e.DocumentFragment,
        k = e.HTMLTemplateElement,
        T = e.Node,
        G = e.NodeFilter,
        Y = e.NamedNodeMap,
        V = void 0 === Y ? e.NamedNodeMap || e.MozNamedAttrMap : Y,
        J = e.Text,
        X = e.Comment,
        K = e.DOMParser,
        Q = e.trustedTypes;
      if ("function" == typeof k) {
        var tt = s.createElement("template");
        tt.content && tt.content.ownerDocument && (s = tt.content.ownerDocument)
      }
      var et = Z(Q, a),
        it = et ? et.createHTML("") : "",
        nt = s,
        rt = nt.implementation,
        at = nt.createNodeIterator,
        ot = nt.getElementsByTagName,
        st = nt.createDocumentFragment,
        lt = a.importNode,
        ht = {};
      i.isSupported = rt && void 0 !== rt.createHTMLDocument && 9 !== s.documentMode;
      var ct = z,
        ut = R,
        dt = P,
        ft = H,
        pt = F,
        _t = B,
        mt = q,
        gt = null,
        vt = M({}, [].concat(U(E), U(S), U(D), U(A), U(j))),
        yt = null,
        wt = M({}, [].concat(U(C), U(N), U(O), U(I))),
        bt = null,
        xt = null,
        kt = !0,
        Tt = !0,
        Mt = !1,
        Lt = !1,
        Et = !1,
        St = !1,
        Dt = !1,
        At = !1,
        jt = !1,
        Ct = !1,
        Nt = !1,
        Ot = !1,
        It = !0,
        zt = !0,
        Rt = !1,
        Pt = {},
        Ht = M({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
        qt = null,
        Ft = M({}, ["audio", "video", "img", "source", "image", "track"]),
        Bt = null,
        Wt = M({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
        Ut = null,
        $t = s.createElement("form"),
        Zt = function(t) {
          Ut && Ut === t || (t && "object" === (void 0 === t ? "undefined" : W(t)) || (t = {}), gt = "ALLOWED_TAGS" in t ? M({}, t.ALLOWED_TAGS) : vt, yt = "ALLOWED_ATTR" in t ? M({}, t.ALLOWED_ATTR) : wt, Bt = "ADD_URI_SAFE_ATTR" in t ? M(L(Wt), t.ADD_URI_SAFE_ATTR) : Wt, qt = "ADD_DATA_URI_TAGS" in t ? M(L(Ft), t.ADD_DATA_URI_TAGS) : Ft, bt = "FORBID_TAGS" in t ? M({}, t.FORBID_TAGS) : {}, xt = "FORBID_ATTR" in t ? M({}, t.FORBID_ATTR) : {}, Pt = "USE_PROFILES" in t && t.USE_PROFILES, kt = !1 !== t.ALLOW_ARIA_ATTR, Tt = !1 !== t.ALLOW_DATA_ATTR, Mt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Lt = t.SAFE_FOR_JQUERY || !1, Et = t.SAFE_FOR_TEMPLATES || !1, St = t.WHOLE_DOCUMENT || !1, jt = t.RETURN_DOM || !1, Ct = t.RETURN_DOM_FRAGMENT || !1, Nt = t.RETURN_DOM_IMPORT || !1, Ot = t.RETURN_TRUSTED_TYPE || !1, At = t.FORCE_BODY || !1, It = !1 !== t.SANITIZE_DOM, zt = !1 !== t.KEEP_CONTENT, Rt = t.IN_PLACE || !1, mt = t.ALLOWED_URI_REGEXP || mt, Et && (Tt = !1), Ct && (jt = !0), Pt && (gt = M({}, [].concat(U(j))), yt = [], !0 === Pt.html && (M(gt, E), M(yt, C)), !0 === Pt.svg && (M(gt, S), M(yt, N), M(yt, I)), !0 === Pt.svgFilters && (M(gt, D), M(yt, N), M(yt, I)), !0 === Pt.mathMl && (M(gt, A), M(yt, O), M(yt, I))), t.ADD_TAGS && (gt === vt && (gt = L(gt)), M(gt, t.ADD_TAGS)), t.ADD_ATTR && (yt === wt && (yt = L(yt)), M(yt, t.ADD_ATTR)), t.ADD_URI_SAFE_ATTR && M(Bt, t.ADD_URI_SAFE_ATTR), zt && (gt["#text"] = !0), St && M(gt, ["html", "head", "body"]), gt.table && (M(gt, ["tbody"]), delete bt.tbody), r && r(t), Ut = t)
        },
        Gt = function(t) {
          f(i.removed, {
            element: t
          });
          try {
            t.parentNode.removeChild(t)
          } catch (e) {
            t.outerHTML = it
          }
        },
        Yt = function(t, e) {
          try {
            f(i.removed, {
              attribute: e.getAttributeNode(t),
              from: e
            })
          } catch (t) {
            f(i.removed, {
              attribute: null,
              from: e
            })
          }
          e.removeAttribute(t)
        },
        Vt = function(t) {
          var e = void 0,
            i = void 0;
          if (At) t = "<remove></remove>" + t;
          else {
            var n = m(t, /^[\r\n\t ]+/);
            i = n && n[0]
          }
          var r = et ? et.createHTML(t) : t;
          try {
            e = (new K).parseFromString(r, "text/html")
          } catch (t) {}
          if (o && M(bt, ["title"]), !e || !e.documentElement) {
            var a = (e = rt.createHTMLDocument("")).body;
            a.parentNode.removeChild(a.parentNode.firstElementChild), a.outerHTML = r
          }
          return t && i && e.body.insertBefore(s.createTextNode(i), e.body.childNodes[0] || null), ot.call(e, St ? "html" : "body")[0]
        };
      i.isSupported && function() {
        try {
          var t = Vt("<x/><title>&lt;/title&gt;&lt;img&gt;");
          w(/<\/title/, t.querySelector("title").innerHTML) && (o = !0)
        } catch (t) {}
      }();
      var Jt = function(t) {
          return at.call(t.ownerDocument || t, t, G.SHOW_ELEMENT | G.SHOW_COMMENT | G.SHOW_TEXT, (function() {
            return G.FILTER_ACCEPT
          }), !1)
        },
        Xt = function(t) {
          return !(t instanceof J || t instanceof X || "string" == typeof t.nodeName && "string" == typeof t.textContent && "function" == typeof t.removeChild && t.attributes instanceof V && "function" == typeof t.removeAttribute && "function" == typeof t.setAttribute && "string" == typeof t.namespaceURI)
        },
        Kt = function(t) {
          return "object" === (void 0 === T ? "undefined" : W(T)) ? t instanceof T : t && "object" === (void 0 === t ? "undefined" : W(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
        },
        Qt = function(t, e, n) {
          ht[t] && h(ht[t], (function(t) {
            t.call(i, e, n, Ut)
          }))
        },
        te = function(t) {
          var e = void 0;
          if (Qt("beforeSanitizeElements", t, null), Xt(t)) return Gt(t), !0;
          var n = _(t.nodeName);
          if (Qt("uponSanitizeElement", t, {
              tagName: n,
              allowedTags: gt
            }), ("svg" === n || "math" === n) && 0 !== t.querySelectorAll("p, br").length) return Gt(t), !0;
          if (!gt[n] || bt[n]) {
            if (zt && !Ht[n] && "function" == typeof t.insertAdjacentHTML) try {
              var r = t.innerHTML;
              t.insertAdjacentHTML("AfterEnd", et ? et.createHTML(r) : r)
            } catch (t) {}
            return Gt(t), !0
          }
          return "noscript" === n && w(/<\/noscript/i, t.innerHTML) || "noembed" === n && w(/<\/noembed/i, t.innerHTML) ? (Gt(t), !0) : (!Lt || t.firstElementChild || t.content && t.content.firstElementChild || !w(/</g, t.textContent) || (f(i.removed, {
            element: t.cloneNode()
          }), t.innerHTML ? t.innerHTML = g(t.innerHTML, /</g, "&lt;") : t.innerHTML = g(t.textContent, /</g, "&lt;")), Et && 3 === t.nodeType && (e = t.textContent, e = g(e, ct, " "), e = g(e, ut, " "), t.textContent !== e && (f(i.removed, {
            element: t.cloneNode()
          }), t.textContent = e)), Qt("afterSanitizeElements", t, null), !1)
        },
        ee = function(t, e, i) {
          if (It && ("id" === e || "name" === e) && (i in s || i in $t)) return !1;
          if (Tt && w(dt, e));
          else if (kt && w(ft, e));
          else {
            if (!yt[e] || xt[e]) return !1;
            if (Bt[e]);
            else if (w(mt, g(i, _t, "")));
            else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== v(i, "data:") || !qt[t])
              if (Mt && !w(pt, g(i, _t, "")));
              else if (i) return !1
          }
          return !0
        },
        ie = function(t) {
          var e = void 0,
            r = void 0,
            a = void 0,
            o = void 0,
            s = void 0;
          Qt("beforeSanitizeAttributes", t, null);
          var l = t.attributes;
          if (l) {
            var h = {
              attrName: "",
              attrValue: "",
              keepAttr: !0,
              allowedAttributes: yt
            };
            for (s = l.length; s--;) {
              var f = e = l[s],
                m = f.name,
                v = f.namespaceURI;
              if (r = y(e.value), a = _(m), h.attrName = a, h.attrValue = r, h.keepAttr = !0, h.forceKeepAttr = void 0, Qt("uponSanitizeAttribute", t, h), r = h.attrValue, !h.forceKeepAttr) {
                if ("name" === a && "IMG" === t.nodeName && l.id) o = l.id, l = p(l, []), Yt("id", t), Yt(m, t), c(l, o) > s && t.setAttribute("id", o.value);
                else {
                  if ("INPUT" === t.nodeName && "type" === a && "file" === r && h.keepAttr && (yt[a] || !xt[a])) continue;
                  "id" === m && t.setAttribute(m, ""), Yt(m, t)
                }
                if (h.keepAttr)
                  if (Lt && w(/\/>/i, r)) Yt(m, t);
                  else if (w(/svg|math/i, t.namespaceURI) && w(b("</(" + u(n(Ht), "|") + ")", "i"), r)) Yt(m, t);
                else {
                  Et && (r = g(r, ct, " "), r = g(r, ut, " "));
                  var x = t.nodeName.toLowerCase();
                  if (ee(x, a, r)) try {
                    v ? t.setAttributeNS(v, m, r) : t.setAttribute(m, r), d(i.removed)
                  } catch (t) {}
                }
              }
            }
            Qt("afterSanitizeAttributes", t, null)
          }
        },
        ne = function t(e) {
          var i = void 0,
            n = Jt(e);
          for (Qt("beforeSanitizeShadowDOM", e, null); i = n.nextNode();) Qt("uponSanitizeShadowNode", i, null), te(i) || (i.content instanceof l && t(i.content), ie(i));
          Qt("afterSanitizeShadowDOM", e, null)
        };
      return i.sanitize = function(t, n) {
        var r = void 0,
          o = void 0,
          s = void 0,
          h = void 0,
          c = void 0;
        if (t || (t = "\x3c!--\x3e"), "string" != typeof t && !Kt(t)) {
          if ("function" != typeof t.toString) throw x("toString is not a function");
          if ("string" != typeof(t = t.toString())) throw x("dirty is not a string, aborting")
        }
        if (!i.isSupported) {
          if ("object" === W(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
            if ("string" == typeof t) return e.toStaticHTML(t);
            if (Kt(t)) return e.toStaticHTML(t.outerHTML)
          }
          return t
        }
        if (Dt || Zt(n), i.removed = [], "string" == typeof t && (Rt = !1), Rt);
        else if (t instanceof T) 1 === (o = (r = Vt("\x3c!--\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === o.nodeName || "HTML" === o.nodeName ? r = o : r.appendChild(o);
        else {
          if (!jt && !Et && !St && Ot && -1 === t.indexOf("<")) return et ? et.createHTML(t) : t;
          if (!(r = Vt(t))) return jt ? null : it
        }
        r && At && Gt(r.firstChild);
        for (var u = Jt(Rt ? t : r); s = u.nextNode();) 3 === s.nodeType && s === h || te(s) || (s.content instanceof l && ne(s.content), ie(s), h = s);
        if (h = null, Rt) return t;
        if (jt) {
          if (Ct)
            for (c = st.call(r.ownerDocument); r.firstChild;) c.appendChild(r.firstChild);
          else c = r;
          return Nt && (c = lt.call(a, c, !0)), c
        }
        var d = St ? r.outerHTML : r.innerHTML;
        return Et && (d = g(d, ct, " "), d = g(d, ut, " ")), et && Ot ? et.createHTML(d) : d
      }, i.setConfig = function(t) {
        Zt(t), Dt = !0
      }, i.clearConfig = function() {
        Ut = null, Dt = !1
      }, i.isValidAttribute = function(t, e, i) {
        Ut || Zt({});
        var n = _(t),
          r = _(e);
        return ee(n, r, i)
      }, i.addHook = function(t, e) {
        "function" == typeof e && (ht[t] = ht[t] || [], f(ht[t], e))
      }, i.removeHook = function(t) {
        ht[t] && d(ht[t])
      }, i.removeHooks = function(t) {
        ht[t] && (ht[t] = [])
      }, i.removeAllHooks = function() {
        ht = {}
      }, i
    }()
  }()
}, function(t, e, i) {}, function(t, e, i) {
  (function(t, n) {
    var r;
    /**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
    (function() {
      var a = "Expected a function",
        o = "__lodash_placeholder__",
        s = [
          ["ary", 128],
          ["bind", 1],
          ["bindKey", 2],
          ["curry", 8],
          ["curryRight", 16],
          ["flip", 512],
          ["partial", 32],
          ["partialRight", 64],
          ["rearg", 256]
        ],
        l = "[object Arguments]",
        h = "[object Array]",
        c = "[object Boolean]",
        u = "[object Date]",
        d = "[object Error]",
        f = "[object Function]",
        p = "[object GeneratorFunction]",
        _ = "[object Map]",
        m = "[object Number]",
        g = "[object Object]",
        v = "[object RegExp]",
        y = "[object Set]",
        w = "[object String]",
        b = "[object Symbol]",
        x = "[object WeakMap]",
        k = "[object ArrayBuffer]",
        T = "[object DataView]",
        M = "[object Float32Array]",
        L = "[object Float64Array]",
        E = "[object Int8Array]",
        S = "[object Int16Array]",
        D = "[object Int32Array]",
        A = "[object Uint8Array]",
        j = "[object Uint16Array]",
        C = "[object Uint32Array]",
        N = /\b__p \+= '';/g,
        O = /\b(__p \+=) '' \+/g,
        I = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        z = /&(?:amp|lt|gt|quot|#39);/g,
        R = /[&<>"']/g,
        P = RegExp(z.source),
        H = RegExp(R.source),
        q = /<%-([\s\S]+?)%>/g,
        F = /<%([\s\S]+?)%>/g,
        B = /<%=([\s\S]+?)%>/g,
        W = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        U = /^\w*$/,
        $ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Z = /[\\^$.*+?()[\]{}|]/g,
        G = RegExp(Z.source),
        Y = /^\s+|\s+$/g,
        V = /^\s+/,
        J = /\s+$/,
        X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        K = /\{\n\/\* \[wrapped with (.+)\] \*/,
        Q = /,? & /,
        tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        et = /\\(\\)?/g,
        it = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        nt = /\w*$/,
        rt = /^[-+]0x[0-9a-f]+$/i,
        at = /^0b[01]+$/i,
        ot = /^\[object .+?Constructor\]$/,
        st = /^0o[0-7]+$/i,
        lt = /^(?:0|[1-9]\d*)$/,
        ht = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        ct = /($^)/,
        ut = /['\n\r\u2028\u2029\\]/g,
        dt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
        ft = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        pt = "[\\ud800-\\udfff]",
        _t = "[" + ft + "]",
        mt = "[" + dt + "]",
        gt = "\\d+",
        vt = "[\\u2700-\\u27bf]",
        yt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
        wt = "[^\\ud800-\\udfff" + ft + gt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
        bt = "\\ud83c[\\udffb-\\udfff]",
        xt = "[^\\ud800-\\udfff]",
        kt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Tt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        Mt = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
        Lt = "(?:" + yt + "|" + wt + ")",
        Et = "(?:" + Mt + "|" + wt + ")",
        St = "(?:" + mt + "|" + bt + ")" + "?",
        Dt = "[\\ufe0e\\ufe0f]?" + St + ("(?:\\u200d(?:" + [xt, kt, Tt].join("|") + ")[\\ufe0e\\ufe0f]?" + St + ")*"),
        At = "(?:" + [vt, kt, Tt].join("|") + ")" + Dt,
        jt = "(?:" + [xt + mt + "?", mt, kt, Tt, pt].join("|") + ")",
        Ct = RegExp("['’]", "g"),
        Nt = RegExp(mt, "g"),
        Ot = RegExp(bt + "(?=" + bt + ")|" + jt + Dt, "g"),
        It = RegExp([Mt + "?" + yt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [_t, Mt, "$"].join("|") + ")", Et + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [_t, Mt + Lt, "$"].join("|") + ")", Mt + "?" + Lt + "+(?:['’](?:d|ll|m|re|s|t|ve))?", Mt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", gt, At].join("|"), "g"),
        zt = RegExp("[\\u200d\\ud800-\\udfff" + dt + "\\ufe0e\\ufe0f]"),
        Rt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        Pt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
        Ht = -1,
        qt = {};
      qt[M] = qt[L] = qt[E] = qt[S] = qt[D] = qt[A] = qt["[object Uint8ClampedArray]"] = qt[j] = qt[C] = !0, qt[l] = qt[h] = qt[k] = qt[c] = qt[T] = qt[u] = qt[d] = qt[f] = qt[_] = qt[m] = qt[g] = qt[v] = qt[y] = qt[w] = qt[x] = !1;
      var Ft = {};
      Ft[l] = Ft[h] = Ft[k] = Ft[T] = Ft[c] = Ft[u] = Ft[M] = Ft[L] = Ft[E] = Ft[S] = Ft[D] = Ft[_] = Ft[m] = Ft[g] = Ft[v] = Ft[y] = Ft[w] = Ft[b] = Ft[A] = Ft["[object Uint8ClampedArray]"] = Ft[j] = Ft[C] = !0, Ft[d] = Ft[f] = Ft[x] = !1;
      var Bt = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        Wt = parseFloat,
        Ut = parseInt,
        $t = "object" == typeof t && t && t.Object === Object && t,
        Zt = "object" == typeof self && self && self.Object === Object && self,
        Gt = $t || Zt || Function("return this")(),
        Yt = e && !e.nodeType && e,
        Vt = Yt && "object" == typeof n && n && !n.nodeType && n,
        Jt = Vt && Vt.exports === Yt,
        Xt = Jt && $t.process,
        Kt = function() {
          try {
            var t = Vt && Vt.require && Vt.require("util").types;
            return t || Xt && Xt.binding && Xt.binding("util")
          } catch (t) {}
        }(),
        Qt = Kt && Kt.isArrayBuffer,
        te = Kt && Kt.isDate,
        ee = Kt && Kt.isMap,
        ie = Kt && Kt.isRegExp,
        ne = Kt && Kt.isSet,
        re = Kt && Kt.isTypedArray;

      function ae(t, e, i) {
        switch (i.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, i[0]);
          case 2:
            return t.call(e, i[0], i[1]);
          case 3:
            return t.call(e, i[0], i[1], i[2])
        }
        return t.apply(e, i)
      }

      function oe(t, e, i, n) {
        for (var r = -1, a = null == t ? 0 : t.length; ++r < a;) {
          var o = t[r];
          e(n, o, i(o), t)
        }
        return n
      }

      function se(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length; ++i < n && !1 !== e(t[i], i, t););
        return t
      }

      function le(t, e) {
        for (var i = null == t ? 0 : t.length; i-- && !1 !== e(t[i], i, t););
        return t
      }

      function he(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length; ++i < n;)
          if (!e(t[i], i, t)) return !1;
        return !0
      }

      function ce(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length, r = 0, a = []; ++i < n;) {
          var o = t[i];
          e(o, i, t) && (a[r++] = o)
        }
        return a
      }

      function ue(t, e) {
        return !!(null == t ? 0 : t.length) && be(t, e, 0) > -1
      }

      function de(t, e, i) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
          if (i(e, t[n])) return !0;
        return !1
      }

      function fe(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length, r = Array(n); ++i < n;) r[i] = e(t[i], i, t);
        return r
      }

      function pe(t, e) {
        for (var i = -1, n = e.length, r = t.length; ++i < n;) t[r + i] = e[i];
        return t
      }

      function _e(t, e, i, n) {
        var r = -1,
          a = null == t ? 0 : t.length;
        for (n && a && (i = t[++r]); ++r < a;) i = e(i, t[r], r, t);
        return i
      }

      function me(t, e, i, n) {
        var r = null == t ? 0 : t.length;
        for (n && r && (i = t[--r]); r--;) i = e(i, t[r], r, t);
        return i
      }

      function ge(t, e) {
        for (var i = -1, n = null == t ? 0 : t.length; ++i < n;)
          if (e(t[i], i, t)) return !0;
        return !1
      }
      var ve = Me("length");

      function ye(t, e, i) {
        var n;
        return i(t, (function(t, i, r) {
          if (e(t, i, r)) return n = i, !1
        })), n
      }

      function we(t, e, i, n) {
        for (var r = t.length, a = i + (n ? 1 : -1); n ? a-- : ++a < r;)
          if (e(t[a], a, t)) return a;
        return -1
      }

      function be(t, e, i) {
        return e == e ? function(t, e, i) {
          var n = i - 1,
            r = t.length;
          for (; ++n < r;)
            if (t[n] === e) return n;
          return -1
        }(t, e, i) : we(t, ke, i)
      }

      function xe(t, e, i, n) {
        for (var r = i - 1, a = t.length; ++r < a;)
          if (n(t[r], e)) return r;
        return -1
      }

      function ke(t) {
        return t != t
      }

      function Te(t, e) {
        var i = null == t ? 0 : t.length;
        return i ? Se(t, e) / i : NaN
      }

      function Me(t) {
        return function(e) {
          return null == e ? void 0 : e[t]
        }
      }

      function Le(t) {
        return function(e) {
          return null == t ? void 0 : t[e]
        }
      }

      function Ee(t, e, i, n, r) {
        return r(t, (function(t, r, a) {
          i = n ? (n = !1, t) : e(i, t, r, a)
        })), i
      }

      function Se(t, e) {
        for (var i, n = -1, r = t.length; ++n < r;) {
          var a = e(t[n]);
          void 0 !== a && (i = void 0 === i ? a : i + a)
        }
        return i
      }

      function De(t, e) {
        for (var i = -1, n = Array(t); ++i < t;) n[i] = e(i);
        return n
      }

      function Ae(t) {
        return function(e) {
          return t(e)
        }
      }

      function je(t, e) {
        return fe(e, (function(e) {
          return t[e]
        }))
      }

      function Ce(t, e) {
        return t.has(e)
      }

      function Ne(t, e) {
        for (var i = -1, n = t.length; ++i < n && be(e, t[i], 0) > -1;);
        return i
      }

      function Oe(t, e) {
        for (var i = t.length; i-- && be(e, t[i], 0) > -1;);
        return i
      }

      function Ie(t, e) {
        for (var i = t.length, n = 0; i--;) t[i] === e && ++n;
        return n
      }
      var ze = Le({
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ã": "A",
          "Ä": "A",
          "Å": "A",
          "à": "a",
          "á": "a",
          "â": "a",
          "ã": "a",
          "ä": "a",
          "å": "a",
          "Ç": "C",
          "ç": "c",
          "Ð": "D",
          "ð": "d",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ë": "E",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ë": "e",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ï": "I",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ï": "i",
          "Ñ": "N",
          "ñ": "n",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Õ": "O",
          "Ö": "O",
          "Ø": "O",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "õ": "o",
          "ö": "o",
          "ø": "o",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ü": "U",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ü": "u",
          "Ý": "Y",
          "ý": "y",
          "ÿ": "y",
          "Æ": "Ae",
          "æ": "ae",
          "Þ": "Th",
          "þ": "th",
          "ß": "ss",
          "Ā": "A",
          "Ă": "A",
          "Ą": "A",
          "ā": "a",
          "ă": "a",
          "ą": "a",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "Ď": "D",
          "Đ": "D",
          "ď": "d",
          "đ": "d",
          "Ē": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ę": "E",
          "Ě": "E",
          "ē": "e",
          "ĕ": "e",
          "ė": "e",
          "ę": "e",
          "ě": "e",
          "Ĝ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ģ": "G",
          "ĝ": "g",
          "ğ": "g",
          "ġ": "g",
          "ģ": "g",
          "Ĥ": "H",
          "Ħ": "H",
          "ĥ": "h",
          "ħ": "h",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "Į": "I",
          "İ": "I",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "į": "i",
          "ı": "i",
          "Ĵ": "J",
          "ĵ": "j",
          "Ķ": "K",
          "ķ": "k",
          "ĸ": "k",
          "Ĺ": "L",
          "Ļ": "L",
          "Ľ": "L",
          "Ŀ": "L",
          "Ł": "L",
          "ĺ": "l",
          "ļ": "l",
          "ľ": "l",
          "ŀ": "l",
          "ł": "l",
          "Ń": "N",
          "Ņ": "N",
          "Ň": "N",
          "Ŋ": "N",
          "ń": "n",
          "ņ": "n",
          "ň": "n",
          "ŋ": "n",
          "Ō": "O",
          "Ŏ": "O",
          "Ő": "O",
          "ō": "o",
          "ŏ": "o",
          "ő": "o",
          "Ŕ": "R",
          "Ŗ": "R",
          "Ř": "R",
          "ŕ": "r",
          "ŗ": "r",
          "ř": "r",
          "Ś": "S",
          "Ŝ": "S",
          "Ş": "S",
          "Š": "S",
          "ś": "s",
          "ŝ": "s",
          "ş": "s",
          "š": "s",
          "Ţ": "T",
          "Ť": "T",
          "Ŧ": "T",
          "ţ": "t",
          "ť": "t",
          "ŧ": "t",
          "Ũ": "U",
          "Ū": "U",
          "Ŭ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ų": "U",
          "ũ": "u",
          "ū": "u",
          "ŭ": "u",
          "ů": "u",
          "ű": "u",
          "ų": "u",
          "Ŵ": "W",
          "ŵ": "w",
          "Ŷ": "Y",
          "ŷ": "y",
          "Ÿ": "Y",
          "Ź": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "ź": "z",
          "ż": "z",
          "ž": "z",
          "Ĳ": "IJ",
          "ĳ": "ij",
          "Œ": "Oe",
          "œ": "oe",
          "ŉ": "'n",
          "ſ": "s"
        }),
        Re = Le({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        });

      function Pe(t) {
        return "\\" + Bt[t]
      }

      function He(t) {
        return zt.test(t)
      }

      function qe(t) {
        var e = -1,
          i = Array(t.size);
        return t.forEach((function(t, n) {
          i[++e] = [n, t]
        })), i
      }

      function Fe(t, e) {
        return function(i) {
          return t(e(i))
        }
      }

      function Be(t, e) {
        for (var i = -1, n = t.length, r = 0, a = []; ++i < n;) {
          var s = t[i];
          s !== e && s !== o || (t[i] = o, a[r++] = i)
        }
        return a
      }

      function We(t) {
        var e = -1,
          i = Array(t.size);
        return t.forEach((function(t) {
          i[++e] = t
        })), i
      }

      function Ue(t) {
        var e = -1,
          i = Array(t.size);
        return t.forEach((function(t) {
          i[++e] = [t, t]
        })), i
      }

      function $e(t) {
        return He(t) ? function(t) {
          var e = Ot.lastIndex = 0;
          for (; Ot.test(t);) ++e;
          return e
        }(t) : ve(t)
      }

      function Ze(t) {
        return He(t) ? function(t) {
          return t.match(Ot) || []
        }(t) : function(t) {
          return t.split("")
        }(t)
      }
      var Ge = Le({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      });
      var Ye = function t(e) {
        var i, n = (e = null == e ? Gt : Ye.defaults(Gt.Object(), e, Ye.pick(Gt, Pt))).Array,
          r = e.Date,
          dt = e.Error,
          ft = e.Function,
          pt = e.Math,
          _t = e.Object,
          mt = e.RegExp,
          gt = e.String,
          vt = e.TypeError,
          yt = n.prototype,
          wt = ft.prototype,
          bt = _t.prototype,
          xt = e["__core-js_shared__"],
          kt = wt.toString,
          Tt = bt.hasOwnProperty,
          Mt = 0,
          Lt = (i = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
          Et = bt.toString,
          St = kt.call(_t),
          Dt = Gt._,
          At = mt("^" + kt.call(Tt).replace(Z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          jt = Jt ? e.Buffer : void 0,
          Ot = e.Symbol,
          zt = e.Uint8Array,
          Bt = jt ? jt.allocUnsafe : void 0,
          $t = Fe(_t.getPrototypeOf, _t),
          Zt = _t.create,
          Yt = bt.propertyIsEnumerable,
          Vt = yt.splice,
          Xt = Ot ? Ot.isConcatSpreadable : void 0,
          Kt = Ot ? Ot.iterator : void 0,
          ve = Ot ? Ot.toStringTag : void 0,
          Le = function() {
            try {
              var t = Qr(_t, "defineProperty");
              return t({}, "", {}), t
            } catch (t) {}
          }(),
          Ve = e.clearTimeout !== Gt.clearTimeout && e.clearTimeout,
          Je = r && r.now !== Gt.Date.now && r.now,
          Xe = e.setTimeout !== Gt.setTimeout && e.setTimeout,
          Ke = pt.ceil,
          Qe = pt.floor,
          ti = _t.getOwnPropertySymbols,
          ei = jt ? jt.isBuffer : void 0,
          ii = e.isFinite,
          ni = yt.join,
          ri = Fe(_t.keys, _t),
          ai = pt.max,
          oi = pt.min,
          si = r.now,
          li = e.parseInt,
          hi = pt.random,
          ci = yt.reverse,
          ui = Qr(e, "DataView"),
          di = Qr(e, "Map"),
          fi = Qr(e, "Promise"),
          pi = Qr(e, "Set"),
          _i = Qr(e, "WeakMap"),
          mi = Qr(_t, "create"),
          gi = _i && new _i,
          vi = {},
          yi = La(ui),
          wi = La(di),
          bi = La(fi),
          xi = La(pi),
          ki = La(_i),
          Ti = Ot ? Ot.prototype : void 0,
          Mi = Ti ? Ti.valueOf : void 0,
          Li = Ti ? Ti.toString : void 0;

        function Ei(t) {
          if (Uo(t) && !No(t) && !(t instanceof ji)) {
            if (t instanceof Ai) return t;
            if (Tt.call(t, "__wrapped__")) return Ea(t)
          }
          return new Ai(t)
        }
        var Si = function() {
          function t() {}
          return function(e) {
            if (!Wo(e)) return {};
            if (Zt) return Zt(e);
            t.prototype = e;
            var i = new t;
            return t.prototype = void 0, i
          }
        }();

        function Di() {}

        function Ai(t, e) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
        }

        function ji(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
        }

        function Ci(t) {
          var e = -1,
            i = null == t ? 0 : t.length;
          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
          }
        }

        function Ni(t) {
          var e = -1,
            i = null == t ? 0 : t.length;
          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
          }
        }

        function Oi(t) {
          var e = -1,
            i = null == t ? 0 : t.length;
          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
          }
        }

        function Ii(t) {
          var e = -1,
            i = null == t ? 0 : t.length;
          for (this.__data__ = new Oi; ++e < i;) this.add(t[e])
        }

        function zi(t) {
          var e = this.__data__ = new Ni(t);
          this.size = e.size
        }

        function Ri(t, e) {
          var i = No(t),
            n = !i && Co(t),
            r = !i && !n && Ro(t),
            a = !i && !n && !r && Ko(t),
            o = i || n || r || a,
            s = o ? De(t.length, gt) : [],
            l = s.length;
          for (var h in t) !e && !Tt.call(t, h) || o && ("length" == h || r && ("offset" == h || "parent" == h) || a && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || oa(h, l)) || s.push(h);
          return s
        }

        function Pi(t) {
          var e = t.length;
          return e ? t[zn(0, e - 1)] : void 0
        }

        function Hi(t, e) {
          return ka(gr(t), Yi(e, 0, t.length))
        }

        function qi(t) {
          return ka(gr(t))
        }

        function Fi(t, e, i) {
          (void 0 === i || Do(t[e], i)) && (void 0 !== i || e in t) || Zi(t, e, i)
        }

        function Bi(t, e, i) {
          var n = t[e];
          Tt.call(t, e) && Do(n, i) && (void 0 !== i || e in t) || Zi(t, e, i)
        }

        function Wi(t, e) {
          for (var i = t.length; i--;)
            if (Do(t[i][0], e)) return i;
          return -1
        }

        function Ui(t, e, i, n) {
          return Qi(t, (function(t, r, a) {
            e(n, t, i(t), a)
          })), n
        }

        function $i(t, e) {
          return t && vr(e, ws(e), t)
        }

        function Zi(t, e, i) {
          "__proto__" == e && Le ? Le(t, e, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : t[e] = i
        }

        function Gi(t, e) {
          for (var i = -1, r = e.length, a = n(r), o = null == t; ++i < r;) a[i] = o ? void 0 : _s(t, e[i]);
          return a
        }

        function Yi(t, e, i) {
          return t == t && (void 0 !== i && (t = t <= i ? t : i), void 0 !== e && (t = t >= e ? t : e)), t
        }

        function Vi(t, e, i, n, r, a) {
          var o, s = 1 & e,
            h = 2 & e,
            d = 4 & e;
          if (i && (o = r ? i(t, n, r, a) : i(t)), void 0 !== o) return o;
          if (!Wo(t)) return t;
          var x = No(t);
          if (x) {
            if (o = function(t) {
                var e = t.length,
                  i = new t.constructor(e);
                e && "string" == typeof t[0] && Tt.call(t, "index") && (i.index = t.index, i.input = t.input);
                return i
              }(t), !s) return gr(t, o)
          } else {
            var N = ia(t),
              O = N == f || N == p;
            if (Ro(t)) return ur(t, s);
            if (N == g || N == l || O && !r) {
              if (o = h || O ? {} : ra(t), !s) return h ? function(t, e) {
                return vr(t, ea(t), e)
              }(t, function(t, e) {
                return t && vr(e, bs(e), t)
              }(o, t)) : function(t, e) {
                return vr(t, ta(t), e)
              }(t, $i(o, t))
            } else {
              if (!Ft[N]) return r ? t : {};
              o = function(t, e, i) {
                var n = t.constructor;
                switch (e) {
                  case k:
                    return dr(t);
                  case c:
                  case u:
                    return new n(+t);
                  case T:
                    return function(t, e) {
                      var i = e ? dr(t.buffer) : t.buffer;
                      return new t.constructor(i, t.byteOffset, t.byteLength)
                    }(t, i);
                  case M:
                  case L:
                  case E:
                  case S:
                  case D:
                  case A:
                  case "[object Uint8ClampedArray]":
                  case j:
                  case C:
                    return fr(t, i);
                  case _:
                    return new n;
                  case m:
                  case w:
                    return new n(t);
                  case v:
                    return function(t) {
                      var e = new t.constructor(t.source, nt.exec(t));
                      return e.lastIndex = t.lastIndex, e
                    }(t);
                  case y:
                    return new n;
                  case b:
                    return r = t, Mi ? _t(Mi.call(r)) : {}
                }
                var r
              }(t, N, s)
            }
          }
          a || (a = new zi);
          var I = a.get(t);
          if (I) return I;
          a.set(t, o), Vo(t) ? t.forEach((function(n) {
            o.add(Vi(n, e, i, n, t, a))
          })) : $o(t) && t.forEach((function(n, r) {
            o.set(r, Vi(n, e, i, r, t, a))
          }));
          var z = x ? void 0 : (d ? h ? Zr : $r : h ? bs : ws)(t);
          return se(z || t, (function(n, r) {
            z && (n = t[r = n]), Bi(o, r, Vi(n, e, i, r, t, a))
          })), o
        }

        function Ji(t, e, i) {
          var n = i.length;
          if (null == t) return !n;
          for (t = _t(t); n--;) {
            var r = i[n],
              a = e[r],
              o = t[r];
            if (void 0 === o && !(r in t) || !a(o)) return !1
          }
          return !0
        }

        function Xi(t, e, i) {
          if ("function" != typeof t) throw new vt(a);
          return ya((function() {
            t.apply(void 0, i)
          }), e)
        }

        function Ki(t, e, i, n) {
          var r = -1,
            a = ue,
            o = !0,
            s = t.length,
            l = [],
            h = e.length;
          if (!s) return l;
          i && (e = fe(e, Ae(i))), n ? (a = de, o = !1) : e.length >= 200 && (a = Ce, o = !1, e = new Ii(e));
          t: for (; ++r < s;) {
            var c = t[r],
              u = null == i ? c : i(c);
            if (c = n || 0 !== c ? c : 0, o && u == u) {
              for (var d = h; d--;)
                if (e[d] === u) continue t;
              l.push(c)
            } else a(e, u, n) || l.push(c)
          }
          return l
        }
        Ei.templateSettings = {
          escape: q,
          evaluate: F,
          interpolate: B,
          variable: "",
          imports: {
            _: Ei
          }
        }, Ei.prototype = Di.prototype, Ei.prototype.constructor = Ei, Ai.prototype = Si(Di.prototype), Ai.prototype.constructor = Ai, ji.prototype = Si(Di.prototype), ji.prototype.constructor = ji, Ci.prototype.clear = function() {
          this.__data__ = mi ? mi(null) : {}, this.size = 0
        }, Ci.prototype.delete = function(t) {
          var e = this.has(t) && delete this.__data__[t];
          return this.size -= e ? 1 : 0, e
        }, Ci.prototype.get = function(t) {
          var e = this.__data__;
          if (mi) {
            var i = e[t];
            return "__lodash_hash_undefined__" === i ? void 0 : i
          }
          return Tt.call(e, t) ? e[t] : void 0
        }, Ci.prototype.has = function(t) {
          var e = this.__data__;
          return mi ? void 0 !== e[t] : Tt.call(e, t)
        }, Ci.prototype.set = function(t, e) {
          var i = this.__data__;
          return this.size += this.has(t) ? 0 : 1, i[t] = mi && void 0 === e ? "__lodash_hash_undefined__" : e, this
        }, Ni.prototype.clear = function() {
          this.__data__ = [], this.size = 0
        }, Ni.prototype.delete = function(t) {
          var e = this.__data__,
            i = Wi(e, t);
          return !(i < 0) && (i == e.length - 1 ? e.pop() : Vt.call(e, i, 1), --this.size, !0)
        }, Ni.prototype.get = function(t) {
          var e = this.__data__,
            i = Wi(e, t);
          return i < 0 ? void 0 : e[i][1]
        }, Ni.prototype.has = function(t) {
          return Wi(this.__data__, t) > -1
        }, Ni.prototype.set = function(t, e) {
          var i = this.__data__,
            n = Wi(i, t);
          return n < 0 ? (++this.size, i.push([t, e])) : i[n][1] = e, this
        }, Oi.prototype.clear = function() {
          this.size = 0, this.__data__ = {
            hash: new Ci,
            map: new(di || Ni),
            string: new Ci
          }
        }, Oi.prototype.delete = function(t) {
          var e = Xr(this, t).delete(t);
          return this.size -= e ? 1 : 0, e
        }, Oi.prototype.get = function(t) {
          return Xr(this, t).get(t)
        }, Oi.prototype.has = function(t) {
          return Xr(this, t).has(t)
        }, Oi.prototype.set = function(t, e) {
          var i = Xr(this, t),
            n = i.size;
          return i.set(t, e), this.size += i.size == n ? 0 : 1, this
        }, Ii.prototype.add = Ii.prototype.push = function(t) {
          return this.__data__.set(t, "__lodash_hash_undefined__"), this
        }, Ii.prototype.has = function(t) {
          return this.__data__.has(t)
        }, zi.prototype.clear = function() {
          this.__data__ = new Ni, this.size = 0
        }, zi.prototype.delete = function(t) {
          var e = this.__data__,
            i = e.delete(t);
          return this.size = e.size, i
        }, zi.prototype.get = function(t) {
          return this.__data__.get(t)
        }, zi.prototype.has = function(t) {
          return this.__data__.has(t)
        }, zi.prototype.set = function(t, e) {
          var i = this.__data__;
          if (i instanceof Ni) {
            var n = i.__data__;
            if (!di || n.length < 199) return n.push([t, e]), this.size = ++i.size, this;
            i = this.__data__ = new Oi(n)
          }
          return i.set(t, e), this.size = i.size, this
        };
        var Qi = br(ln),
          tn = br(hn, !0);

        function en(t, e) {
          var i = !0;
          return Qi(t, (function(t, n, r) {
            return i = !!e(t, n, r)
          })), i
        }

        function nn(t, e, i) {
          for (var n = -1, r = t.length; ++n < r;) {
            var a = t[n],
              o = e(a);
            if (null != o && (void 0 === s ? o == o && !Xo(o) : i(o, s))) var s = o,
              l = a
          }
          return l
        }

        function rn(t, e) {
          var i = [];
          return Qi(t, (function(t, n, r) {
            e(t, n, r) && i.push(t)
          })), i
        }

        function an(t, e, i, n, r) {
          var a = -1,
            o = t.length;
          for (i || (i = aa), r || (r = []); ++a < o;) {
            var s = t[a];
            e > 0 && i(s) ? e > 1 ? an(s, e - 1, i, n, r) : pe(r, s) : n || (r[r.length] = s)
          }
          return r
        }
        var on = xr(),
          sn = xr(!0);

        function ln(t, e) {
          return t && on(t, e, ws)
        }

        function hn(t, e) {
          return t && sn(t, e, ws)
        }

        function cn(t, e) {
          return ce(e, (function(e) {
            return qo(t[e])
          }))
        }

        function un(t, e) {
          for (var i = 0, n = (e = sr(e, t)).length; null != t && i < n;) t = t[Ma(e[i++])];
          return i && i == n ? t : void 0
        }

        function dn(t, e, i) {
          var n = e(t);
          return No(t) ? n : pe(n, i(t))
        }

        function fn(t) {
          return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : ve && ve in _t(t) ? function(t) {
            var e = Tt.call(t, ve),
              i = t[ve];
            try {
              t[ve] = void 0;
              var n = !0
            } catch (t) {}
            var r = Et.call(t);
            n && (e ? t[ve] = i : delete t[ve]);
            return r
          }(t) : function(t) {
            return Et.call(t)
          }(t)
        }

        function pn(t, e) {
          return t > e
        }

        function _n(t, e) {
          return null != t && Tt.call(t, e)
        }

        function mn(t, e) {
          return null != t && e in _t(t)
        }

        function gn(t, e, i) {
          for (var r = i ? de : ue, a = t[0].length, o = t.length, s = o, l = n(o), h = 1 / 0, c = []; s--;) {
            var u = t[s];
            s && e && (u = fe(u, Ae(e))), h = oi(u.length, h), l[s] = !i && (e || a >= 120 && u.length >= 120) ? new Ii(s && u) : void 0
          }
          u = t[0];
          var d = -1,
            f = l[0];
          t: for (; ++d < a && c.length < h;) {
            var p = u[d],
              _ = e ? e(p) : p;
            if (p = i || 0 !== p ? p : 0, !(f ? Ce(f, _) : r(c, _, i))) {
              for (s = o; --s;) {
                var m = l[s];
                if (!(m ? Ce(m, _) : r(t[s], _, i))) continue t
              }
              f && f.push(_), c.push(p)
            }
          }
          return c
        }

        function vn(t, e, i) {
          var n = null == (t = _a(t, e = sr(e, t))) ? t : t[Ma(Pa(e))];
          return null == n ? void 0 : ae(n, t, i)
        }

        function yn(t) {
          return Uo(t) && fn(t) == l
        }

        function wn(t, e, i, n, r) {
          return t === e || (null == t || null == e || !Uo(t) && !Uo(e) ? t != t && e != e : function(t, e, i, n, r, a) {
            var o = No(t),
              s = No(e),
              f = o ? h : ia(t),
              p = s ? h : ia(e),
              x = (f = f == l ? g : f) == g,
              M = (p = p == l ? g : p) == g,
              L = f == p;
            if (L && Ro(t)) {
              if (!Ro(e)) return !1;
              o = !0, x = !1
            }
            if (L && !x) return a || (a = new zi), o || Ko(t) ? Wr(t, e, i, n, r, a) : function(t, e, i, n, r, a, o) {
              switch (i) {
                case T:
                  if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                  t = t.buffer, e = e.buffer;
                case k:
                  return !(t.byteLength != e.byteLength || !a(new zt(t), new zt(e)));
                case c:
                case u:
                case m:
                  return Do(+t, +e);
                case d:
                  return t.name == e.name && t.message == e.message;
                case v:
                case w:
                  return t == e + "";
                case _:
                  var s = qe;
                case y:
                  var l = 1 & n;
                  if (s || (s = We), t.size != e.size && !l) return !1;
                  var h = o.get(t);
                  if (h) return h == e;
                  n |= 2, o.set(t, e);
                  var f = Wr(s(t), s(e), n, r, a, o);
                  return o.delete(t), f;
                case b:
                  if (Mi) return Mi.call(t) == Mi.call(e)
              }
              return !1
            }(t, e, f, i, n, r, a);
            if (!(1 & i)) {
              var E = x && Tt.call(t, "__wrapped__"),
                S = M && Tt.call(e, "__wrapped__");
              if (E || S) {
                var D = E ? t.value() : t,
                  A = S ? e.value() : e;
                return a || (a = new zi), r(D, A, i, n, a)
              }
            }
            if (!L) return !1;
            return a || (a = new zi),
              function(t, e, i, n, r, a) {
                var o = 1 & i,
                  s = $r(t),
                  l = s.length,
                  h = $r(e).length;
                if (l != h && !o) return !1;
                var c = l;
                for (; c--;) {
                  var u = s[c];
                  if (!(o ? u in e : Tt.call(e, u))) return !1
                }
                var d = a.get(t);
                if (d && a.get(e)) return d == e;
                var f = !0;
                a.set(t, e), a.set(e, t);
                var p = o;
                for (; ++c < l;) {
                  u = s[c];
                  var _ = t[u],
                    m = e[u];
                  if (n) var g = o ? n(m, _, u, e, t, a) : n(_, m, u, t, e, a);
                  if (!(void 0 === g ? _ === m || r(_, m, i, n, a) : g)) {
                    f = !1;
                    break
                  }
                  p || (p = "constructor" == u)
                }
                if (f && !p) {
                  var v = t.constructor,
                    y = e.constructor;
                  v != y && "constructor" in t && "constructor" in e && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y) && (f = !1)
                }
                return a.delete(t), a.delete(e), f
              }(t, e, i, n, r, a)
          }(t, e, i, n, wn, r))
        }

        function bn(t, e, i, n) {
          var r = i.length,
            a = r,
            o = !n;
          if (null == t) return !a;
          for (t = _t(t); r--;) {
            var s = i[r];
            if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
          }
          for (; ++r < a;) {
            var l = (s = i[r])[0],
              h = t[l],
              c = s[1];
            if (o && s[2]) {
              if (void 0 === h && !(l in t)) return !1
            } else {
              var u = new zi;
              if (n) var d = n(h, c, l, t, e, u);
              if (!(void 0 === d ? wn(c, h, 3, n, u) : d)) return !1
            }
          }
          return !0
        }

        function xn(t) {
          return !(!Wo(t) || (e = t, Lt && Lt in e)) && (qo(t) ? At : ot).test(La(t));
          var e
        }

        function kn(t) {
          return "function" == typeof t ? t : null == t ? Zs : "object" == typeof t ? No(t) ? Dn(t[0], t[1]) : Sn(t) : el(t)
        }

        function Tn(t) {
          if (!ua(t)) return ri(t);
          var e = [];
          for (var i in _t(t)) Tt.call(t, i) && "constructor" != i && e.push(i);
          return e
        }

        function Mn(t) {
          if (!Wo(t)) return function(t) {
            var e = [];
            if (null != t)
              for (var i in _t(t)) e.push(i);
            return e
          }(t);
          var e = ua(t),
            i = [];
          for (var n in t)("constructor" != n || !e && Tt.call(t, n)) && i.push(n);
          return i
        }

        function Ln(t, e) {
          return t < e
        }

        function En(t, e) {
          var i = -1,
            r = Io(t) ? n(t.length) : [];
          return Qi(t, (function(t, n, a) {
            r[++i] = e(t, n, a)
          })), r
        }

        function Sn(t) {
          var e = Kr(t);
          return 1 == e.length && e[0][2] ? fa(e[0][0], e[0][1]) : function(i) {
            return i === t || bn(i, t, e)
          }
        }

        function Dn(t, e) {
          return la(t) && da(e) ? fa(Ma(t), e) : function(i) {
            var n = _s(i, t);
            return void 0 === n && n === e ? ms(i, t) : wn(e, n, 3)
          }
        }

        function An(t, e, i, n, r) {
          t !== e && on(e, (function(a, o) {
            if (r || (r = new zi), Wo(a)) ! function(t, e, i, n, r, a, o) {
              var s = ga(t, i),
                l = ga(e, i),
                h = o.get(l);
              if (h) return void Fi(t, i, h);
              var c = a ? a(s, l, i + "", t, e, o) : void 0,
                u = void 0 === c;
              if (u) {
                var d = No(l),
                  f = !d && Ro(l),
                  p = !d && !f && Ko(l);
                c = l, d || f || p ? No(s) ? c = s : zo(s) ? c = gr(s) : f ? (u = !1, c = ur(l, !0)) : p ? (u = !1, c = fr(l, !0)) : c = [] : Go(l) || Co(l) ? (c = s, Co(s) ? c = os(s) : Wo(s) && !qo(s) || (c = ra(l))) : u = !1
              }
              u && (o.set(l, c), r(c, l, n, a, o), o.delete(l));
              Fi(t, i, c)
            }(t, e, o, i, An, n, r);
            else {
              var s = n ? n(ga(t, o), a, o + "", t, e, r) : void 0;
              void 0 === s && (s = a), Fi(t, o, s)
            }
          }), bs)
        }

        function jn(t, e) {
          var i = t.length;
          if (i) return oa(e += e < 0 ? i : 0, i) ? t[e] : void 0
        }

        function Cn(t, e, i) {
          var n = -1;
          return e = fe(e.length ? e : [Zs], Ae(Jr())),
            function(t, e) {
              var i = t.length;
              for (t.sort(e); i--;) t[i] = t[i].value;
              return t
            }(En(t, (function(t, i, r) {
              return {
                criteria: fe(e, (function(e) {
                  return e(t)
                })),
                index: ++n,
                value: t
              }
            })), (function(t, e) {
              return function(t, e, i) {
                var n = -1,
                  r = t.criteria,
                  a = e.criteria,
                  o = r.length,
                  s = i.length;
                for (; ++n < o;) {
                  var l = pr(r[n], a[n]);
                  if (l) {
                    if (n >= s) return l;
                    var h = i[n];
                    return l * ("desc" == h ? -1 : 1)
                  }
                }
                return t.index - e.index
              }(t, e, i)
            }))
        }

        function Nn(t, e, i) {
          for (var n = -1, r = e.length, a = {}; ++n < r;) {
            var o = e[n],
              s = un(t, o);
            i(s, o) && Fn(a, sr(o, t), s)
          }
          return a
        }

        function On(t, e, i, n) {
          var r = n ? xe : be,
            a = -1,
            o = e.length,
            s = t;
          for (t === e && (e = gr(e)), i && (s = fe(t, Ae(i))); ++a < o;)
            for (var l = 0, h = e[a], c = i ? i(h) : h;
              (l = r(s, c, l, n)) > -1;) s !== t && Vt.call(s, l, 1), Vt.call(t, l, 1);
          return t
        }

        function In(t, e) {
          for (var i = t ? e.length : 0, n = i - 1; i--;) {
            var r = e[i];
            if (i == n || r !== a) {
              var a = r;
              oa(r) ? Vt.call(t, r, 1) : Qn(t, r)
            }
          }
          return t
        }

        function zn(t, e) {
          return t + Qe(hi() * (e - t + 1))
        }

        function Rn(t, e) {
          var i = "";
          if (!t || e < 1 || e > 9007199254740991) return i;
          do {
            e % 2 && (i += t), (e = Qe(e / 2)) && (t += t)
          } while (e);
          return i
        }

        function Pn(t, e) {
          return wa(pa(t, e, Zs), t + "")
        }

        function Hn(t) {
          return Pi(Ds(t))
        }

        function qn(t, e) {
          var i = Ds(t);
          return ka(i, Yi(e, 0, i.length))
        }

        function Fn(t, e, i, n) {
          if (!Wo(t)) return t;
          for (var r = -1, a = (e = sr(e, t)).length, o = a - 1, s = t; null != s && ++r < a;) {
            var l = Ma(e[r]),
              h = i;
            if (r != o) {
              var c = s[l];
              void 0 === (h = n ? n(c, l, s) : void 0) && (h = Wo(c) ? c : oa(e[r + 1]) ? [] : {})
            }
            Bi(s, l, h), s = s[l]
          }
          return t
        }
        var Bn = gi ? function(t, e) {
            return gi.set(t, e), t
          } : Zs,
          Wn = Le ? function(t, e) {
            return Le(t, "toString", {
              configurable: !0,
              enumerable: !1,
              value: Ws(e),
              writable: !0
            })
          } : Zs;

        function Un(t) {
          return ka(Ds(t))
        }

        function $n(t, e, i) {
          var r = -1,
            a = t.length;
          e < 0 && (e = -e > a ? 0 : a + e), (i = i > a ? a : i) < 0 && (i += a), a = e > i ? 0 : i - e >>> 0, e >>>= 0;
          for (var o = n(a); ++r < a;) o[r] = t[r + e];
          return o
        }

        function Zn(t, e) {
          var i;
          return Qi(t, (function(t, n, r) {
            return !(i = e(t, n, r))
          })), !!i
        }

        function Gn(t, e, i) {
          var n = 0,
            r = null == t ? n : t.length;
          if ("number" == typeof e && e == e && r <= 2147483647) {
            for (; n < r;) {
              var a = n + r >>> 1,
                o = t[a];
              null !== o && !Xo(o) && (i ? o <= e : o < e) ? n = a + 1 : r = a
            }
            return r
          }
          return Yn(t, e, Zs, i)
        }

        function Yn(t, e, i, n) {
          e = i(e);
          for (var r = 0, a = null == t ? 0 : t.length, o = e != e, s = null === e, l = Xo(e), h = void 0 === e; r < a;) {
            var c = Qe((r + a) / 2),
              u = i(t[c]),
              d = void 0 !== u,
              f = null === u,
              p = u == u,
              _ = Xo(u);
            if (o) var m = n || p;
            else m = h ? p && (n || d) : s ? p && d && (n || !f) : l ? p && d && !f && (n || !_) : !f && !_ && (n ? u <= e : u < e);
            m ? r = c + 1 : a = c
          }
          return oi(a, 4294967294)
        }

        function Vn(t, e) {
          for (var i = -1, n = t.length, r = 0, a = []; ++i < n;) {
            var o = t[i],
              s = e ? e(o) : o;
            if (!i || !Do(s, l)) {
              var l = s;
              a[r++] = 0 === o ? 0 : o
            }
          }
          return a
        }

        function Jn(t) {
          return "number" == typeof t ? t : Xo(t) ? NaN : +t
        }

        function Xn(t) {
          if ("string" == typeof t) return t;
          if (No(t)) return fe(t, Xn) + "";
          if (Xo(t)) return Li ? Li.call(t) : "";
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e
        }

        function Kn(t, e, i) {
          var n = -1,
            r = ue,
            a = t.length,
            o = !0,
            s = [],
            l = s;
          if (i) o = !1, r = de;
          else if (a >= 200) {
            var h = e ? null : Rr(t);
            if (h) return We(h);
            o = !1, r = Ce, l = new Ii
          } else l = e ? [] : s;
          t: for (; ++n < a;) {
            var c = t[n],
              u = e ? e(c) : c;
            if (c = i || 0 !== c ? c : 0, o && u == u) {
              for (var d = l.length; d--;)
                if (l[d] === u) continue t;
              e && l.push(u), s.push(c)
            } else r(l, u, i) || (l !== s && l.push(u), s.push(c))
          }
          return s
        }

        function Qn(t, e) {
          return null == (t = _a(t, e = sr(e, t))) || delete t[Ma(Pa(e))]
        }

        function tr(t, e, i, n) {
          return Fn(t, e, i(un(t, e)), n)
        }

        function er(t, e, i, n) {
          for (var r = t.length, a = n ? r : -1;
            (n ? a-- : ++a < r) && e(t[a], a, t););
          return i ? $n(t, n ? 0 : a, n ? a + 1 : r) : $n(t, n ? a + 1 : 0, n ? r : a)
        }

        function ir(t, e) {
          var i = t;
          return i instanceof ji && (i = i.value()), _e(e, (function(t, e) {
            return e.func.apply(e.thisArg, pe([t], e.args))
          }), i)
        }

        function nr(t, e, i) {
          var r = t.length;
          if (r < 2) return r ? Kn(t[0]) : [];
          for (var a = -1, o = n(r); ++a < r;)
            for (var s = t[a], l = -1; ++l < r;) l != a && (o[a] = Ki(o[a] || s, t[l], e, i));
          return Kn(an(o, 1), e, i)
        }

        function rr(t, e, i) {
          for (var n = -1, r = t.length, a = e.length, o = {}; ++n < r;) {
            var s = n < a ? e[n] : void 0;
            i(o, t[n], s)
          }
          return o
        }

        function ar(t) {
          return zo(t) ? t : []
        }

        function or(t) {
          return "function" == typeof t ? t : Zs
        }

        function sr(t, e) {
          return No(t) ? t : la(t, e) ? [t] : Ta(ss(t))
        }
        var lr = Pn;

        function hr(t, e, i) {
          var n = t.length;
          return i = void 0 === i ? n : i, !e && i >= n ? t : $n(t, e, i)
        }
        var cr = Ve || function(t) {
          return Gt.clearTimeout(t)
        };

        function ur(t, e) {
          if (e) return t.slice();
          var i = t.length,
            n = Bt ? Bt(i) : new t.constructor(i);
          return t.copy(n), n
        }

        function dr(t) {
          var e = new t.constructor(t.byteLength);
          return new zt(e).set(new zt(t)), e
        }

        function fr(t, e) {
          var i = e ? dr(t.buffer) : t.buffer;
          return new t.constructor(i, t.byteOffset, t.length)
        }

        function pr(t, e) {
          if (t !== e) {
            var i = void 0 !== t,
              n = null === t,
              r = t == t,
              a = Xo(t),
              o = void 0 !== e,
              s = null === e,
              l = e == e,
              h = Xo(e);
            if (!s && !h && !a && t > e || a && o && l && !s && !h || n && o && l || !i && l || !r) return 1;
            if (!n && !a && !h && t < e || h && i && r && !n && !a || s && i && r || !o && r || !l) return -1
          }
          return 0
        }

        function _r(t, e, i, r) {
          for (var a = -1, o = t.length, s = i.length, l = -1, h = e.length, c = ai(o - s, 0), u = n(h + c), d = !r; ++l < h;) u[l] = e[l];
          for (; ++a < s;)(d || a < o) && (u[i[a]] = t[a]);
          for (; c--;) u[l++] = t[a++];
          return u
        }

        function mr(t, e, i, r) {
          for (var a = -1, o = t.length, s = -1, l = i.length, h = -1, c = e.length, u = ai(o - l, 0), d = n(u + c), f = !r; ++a < u;) d[a] = t[a];
          for (var p = a; ++h < c;) d[p + h] = e[h];
          for (; ++s < l;)(f || a < o) && (d[p + i[s]] = t[a++]);
          return d
        }

        function gr(t, e) {
          var i = -1,
            r = t.length;
          for (e || (e = n(r)); ++i < r;) e[i] = t[i];
          return e
        }

        function vr(t, e, i, n) {
          var r = !i;
          i || (i = {});
          for (var a = -1, o = e.length; ++a < o;) {
            var s = e[a],
              l = n ? n(i[s], t[s], s, i, t) : void 0;
            void 0 === l && (l = t[s]), r ? Zi(i, s, l) : Bi(i, s, l)
          }
          return i
        }

        function yr(t, e) {
          return function(i, n) {
            var r = No(i) ? oe : Ui,
              a = e ? e() : {};
            return r(i, t, Jr(n, 2), a)
          }
        }

        function wr(t) {
          return Pn((function(e, i) {
            var n = -1,
              r = i.length,
              a = r > 1 ? i[r - 1] : void 0,
              o = r > 2 ? i[2] : void 0;
            for (a = t.length > 3 && "function" == typeof a ? (r--, a) : void 0, o && sa(i[0], i[1], o) && (a = r < 3 ? void 0 : a, r = 1), e = _t(e); ++n < r;) {
              var s = i[n];
              s && t(e, s, n, a)
            }
            return e
          }))
        }

        function br(t, e) {
          return function(i, n) {
            if (null == i) return i;
            if (!Io(i)) return t(i, n);
            for (var r = i.length, a = e ? r : -1, o = _t(i);
              (e ? a-- : ++a < r) && !1 !== n(o[a], a, o););
            return i
          }
        }

        function xr(t) {
          return function(e, i, n) {
            for (var r = -1, a = _t(e), o = n(e), s = o.length; s--;) {
              var l = o[t ? s : ++r];
              if (!1 === i(a[l], l, a)) break
            }
            return e
          }
        }

        function kr(t) {
          return function(e) {
            var i = He(e = ss(e)) ? Ze(e) : void 0,
              n = i ? i[0] : e.charAt(0),
              r = i ? hr(i, 1).join("") : e.slice(1);
            return n[t]() + r
          }
        }

        function Tr(t) {
          return function(e) {
            return _e(qs(Cs(e).replace(Ct, "")), t, "")
          }
        }

        function Mr(t) {
          return function() {
            var e = arguments;
            switch (e.length) {
              case 0:
                return new t;
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
              case 5:
                return new t(e[0], e[1], e[2], e[3], e[4]);
              case 6:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
              case 7:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
            }
            var i = Si(t.prototype),
              n = t.apply(i, e);
            return Wo(n) ? n : i
          }
        }

        function Lr(t) {
          return function(e, i, n) {
            var r = _t(e);
            if (!Io(e)) {
              var a = Jr(i, 3);
              e = ws(e), i = function(t) {
                return a(r[t], t, r)
              }
            }
            var o = t(e, i, n);
            return o > -1 ? r[a ? e[o] : o] : void 0
          }
        }

        function Er(t) {
          return Ur((function(e) {
            var i = e.length,
              n = i,
              r = Ai.prototype.thru;
            for (t && e.reverse(); n--;) {
              var o = e[n];
              if ("function" != typeof o) throw new vt(a);
              if (r && !s && "wrapper" == Yr(o)) var s = new Ai([], !0)
            }
            for (n = s ? n : i; ++n < i;) {
              var l = Yr(o = e[n]),
                h = "wrapper" == l ? Gr(o) : void 0;
              s = h && ha(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? s[Yr(h[0])].apply(s, h[3]) : 1 == o.length && ha(o) ? s[l]() : s.thru(o)
            }
            return function() {
              var t = arguments,
                n = t[0];
              if (s && 1 == t.length && No(n)) return s.plant(n).value();
              for (var r = 0, a = i ? e[r].apply(this, t) : n; ++r < i;) a = e[r].call(this, a);
              return a
            }
          }))
        }

        function Sr(t, e, i, r, a, o, s, l, h, c) {
          var u = 128 & e,
            d = 1 & e,
            f = 2 & e,
            p = 24 & e,
            _ = 512 & e,
            m = f ? void 0 : Mr(t);
          return function g() {
            for (var v = arguments.length, y = n(v), w = v; w--;) y[w] = arguments[w];
            if (p) var b = Vr(g),
              x = Ie(y, b);
            if (r && (y = _r(y, r, a, p)), o && (y = mr(y, o, s, p)), v -= x, p && v < c) {
              var k = Be(y, b);
              return Ir(t, e, Sr, g.placeholder, i, y, k, l, h, c - v)
            }
            var T = d ? i : this,
              M = f ? T[t] : t;
            return v = y.length, l ? y = ma(y, l) : _ && v > 1 && y.reverse(), u && h < v && (y.length = h), this && this !== Gt && this instanceof g && (M = m || Mr(M)), M.apply(T, y)
          }
        }

        function Dr(t, e) {
          return function(i, n) {
            return function(t, e, i, n) {
              return ln(t, (function(t, r, a) {
                e(n, i(t), r, a)
              })), n
            }(i, t, e(n), {})
          }
        }

        function Ar(t, e) {
          return function(i, n) {
            var r;
            if (void 0 === i && void 0 === n) return e;
            if (void 0 !== i && (r = i), void 0 !== n) {
              if (void 0 === r) return n;
              "string" == typeof i || "string" == typeof n ? (i = Xn(i), n = Xn(n)) : (i = Jn(i), n = Jn(n)), r = t(i, n)
            }
            return r
          }
        }

        function jr(t) {
          return Ur((function(e) {
            return e = fe(e, Ae(Jr())), Pn((function(i) {
              var n = this;
              return t(e, (function(t) {
                return ae(t, n, i)
              }))
            }))
          }))
        }

        function Cr(t, e) {
          var i = (e = void 0 === e ? " " : Xn(e)).length;
          if (i < 2) return i ? Rn(e, t) : e;
          var n = Rn(e, Ke(t / $e(e)));
          return He(e) ? hr(Ze(n), 0, t).join("") : n.slice(0, t)
        }

        function Nr(t) {
          return function(e, i, r) {
            return r && "number" != typeof r && sa(e, i, r) && (i = r = void 0), e = is(e), void 0 === i ? (i = e, e = 0) : i = is(i),
              function(t, e, i, r) {
                for (var a = -1, o = ai(Ke((e - t) / (i || 1)), 0), s = n(o); o--;) s[r ? o : ++a] = t, t += i;
                return s
              }(e, i, r = void 0 === r ? e < i ? 1 : -1 : is(r), t)
          }
        }

        function Or(t) {
          return function(e, i) {
            return "string" == typeof e && "string" == typeof i || (e = as(e), i = as(i)), t(e, i)
          }
        }

        function Ir(t, e, i, n, r, a, o, s, l, h) {
          var c = 8 & e;
          e |= c ? 32 : 64, 4 & (e &= ~(c ? 64 : 32)) || (e &= -4);
          var u = [t, e, r, c ? a : void 0, c ? o : void 0, c ? void 0 : a, c ? void 0 : o, s, l, h],
            d = i.apply(void 0, u);
          return ha(t) && va(d, u), d.placeholder = n, ba(d, t, e)
        }

        function zr(t) {
          var e = pt[t];
          return function(t, i) {
            if (t = as(t), (i = null == i ? 0 : oi(ns(i), 292)) && ii(t)) {
              var n = (ss(t) + "e").split("e");
              return +((n = (ss(e(n[0] + "e" + (+n[1] + i))) + "e").split("e"))[0] + "e" + (+n[1] - i))
            }
            return e(t)
          }
        }
        var Rr = pi && 1 / We(new pi([, -0]))[1] == 1 / 0 ? function(t) {
          return new pi(t)
        } : Xs;

        function Pr(t) {
          return function(e) {
            var i = ia(e);
            return i == _ ? qe(e) : i == y ? Ue(e) : function(t, e) {
              return fe(e, (function(e) {
                return [e, t[e]]
              }))
            }(e, t(e))
          }
        }

        function Hr(t, e, i, r, s, l, h, c) {
          var u = 2 & e;
          if (!u && "function" != typeof t) throw new vt(a);
          var d = r ? r.length : 0;
          if (d || (e &= -97, r = s = void 0), h = void 0 === h ? h : ai(ns(h), 0), c = void 0 === c ? c : ns(c), d -= s ? s.length : 0, 64 & e) {
            var f = r,
              p = s;
            r = s = void 0
          }
          var _ = u ? void 0 : Gr(t),
            m = [t, e, i, r, s, f, p, l, h, c];
          if (_ && function(t, e) {
              var i = t[1],
                n = e[1],
                r = i | n,
                a = r < 131,
                s = 128 == n && 8 == i || 128 == n && 256 == i && t[7].length <= e[8] || 384 == n && e[7].length <= e[8] && 8 == i;
              if (!a && !s) return t;
              1 & n && (t[2] = e[2], r |= 1 & i ? 0 : 4);
              var l = e[3];
              if (l) {
                var h = t[3];
                t[3] = h ? _r(h, l, e[4]) : l, t[4] = h ? Be(t[3], o) : e[4]
              }(l = e[5]) && (h = t[5], t[5] = h ? mr(h, l, e[6]) : l, t[6] = h ? Be(t[5], o) : e[6]);
              (l = e[7]) && (t[7] = l);
              128 & n && (t[8] = null == t[8] ? e[8] : oi(t[8], e[8]));
              null == t[9] && (t[9] = e[9]);
              t[0] = e[0], t[1] = r
            }(m, _), t = m[0], e = m[1], i = m[2], r = m[3], s = m[4], !(c = m[9] = void 0 === m[9] ? u ? 0 : t.length : ai(m[9] - d, 0)) && 24 & e && (e &= -25), e && 1 != e) g = 8 == e || 16 == e ? function(t, e, i) {
            var r = Mr(t);
            return function a() {
              for (var o = arguments.length, s = n(o), l = o, h = Vr(a); l--;) s[l] = arguments[l];
              var c = o < 3 && s[0] !== h && s[o - 1] !== h ? [] : Be(s, h);
              if ((o -= c.length) < i) return Ir(t, e, Sr, a.placeholder, void 0, s, c, void 0, void 0, i - o);
              var u = this && this !== Gt && this instanceof a ? r : t;
              return ae(u, this, s)
            }
          }(t, e, c) : 32 != e && 33 != e || s.length ? Sr.apply(void 0, m) : function(t, e, i, r) {
            var a = 1 & e,
              o = Mr(t);
            return function e() {
              for (var s = -1, l = arguments.length, h = -1, c = r.length, u = n(c + l), d = this && this !== Gt && this instanceof e ? o : t; ++h < c;) u[h] = r[h];
              for (; l--;) u[h++] = arguments[++s];
              return ae(d, a ? i : this, u)
            }
          }(t, e, i, r);
          else var g = function(t, e, i) {
            var n = 1 & e,
              r = Mr(t);
            return function e() {
              var a = this && this !== Gt && this instanceof e ? r : t;
              return a.apply(n ? i : this, arguments)
            }
          }(t, e, i);
          return ba((_ ? Bn : va)(g, m), t, e)
        }

        function qr(t, e, i, n) {
          return void 0 === t || Do(t, bt[i]) && !Tt.call(n, i) ? e : t
        }

        function Fr(t, e, i, n, r, a) {
          return Wo(t) && Wo(e) && (a.set(e, t), An(t, e, void 0, Fr, a), a.delete(e)), t
        }

        function Br(t) {
          return Go(t) ? void 0 : t
        }

        function Wr(t, e, i, n, r, a) {
          var o = 1 & i,
            s = t.length,
            l = e.length;
          if (s != l && !(o && l > s)) return !1;
          var h = a.get(t);
          if (h && a.get(e)) return h == e;
          var c = -1,
            u = !0,
            d = 2 & i ? new Ii : void 0;
          for (a.set(t, e), a.set(e, t); ++c < s;) {
            var f = t[c],
              p = e[c];
            if (n) var _ = o ? n(p, f, c, e, t, a) : n(f, p, c, t, e, a);
            if (void 0 !== _) {
              if (_) continue;
              u = !1;
              break
            }
            if (d) {
              if (!ge(e, (function(t, e) {
                  if (!Ce(d, e) && (f === t || r(f, t, i, n, a))) return d.push(e)
                }))) {
                u = !1;
                break
              }
            } else if (f !== p && !r(f, p, i, n, a)) {
              u = !1;
              break
            }
          }
          return a.delete(t), a.delete(e), u
        }

        function Ur(t) {
          return wa(pa(t, void 0, Na), t + "")
        }

        function $r(t) {
          return dn(t, ws, ta)
        }

        function Zr(t) {
          return dn(t, bs, ea)
        }
        var Gr = gi ? function(t) {
          return gi.get(t)
        } : Xs;

        function Yr(t) {
          for (var e = t.name + "", i = vi[e], n = Tt.call(vi, e) ? i.length : 0; n--;) {
            var r = i[n],
              a = r.func;
            if (null == a || a == t) return r.name
          }
          return e
        }

        function Vr(t) {
          return (Tt.call(Ei, "placeholder") ? Ei : t).placeholder
        }

        function Jr() {
          var t = Ei.iteratee || Gs;
          return t = t === Gs ? kn : t, arguments.length ? t(arguments[0], arguments[1]) : t
        }

        function Xr(t, e) {
          var i, n, r = t.__data__;
          return ("string" == (n = typeof(i = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof e ? "string" : "hash"] : r.map
        }

        function Kr(t) {
          for (var e = ws(t), i = e.length; i--;) {
            var n = e[i],
              r = t[n];
            e[i] = [n, r, da(r)]
          }
          return e
        }

        function Qr(t, e) {
          var i = function(t, e) {
            return null == t ? void 0 : t[e]
          }(t, e);
          return xn(i) ? i : void 0
        }
        var ta = ti ? function(t) {
            return null == t ? [] : (t = _t(t), ce(ti(t), (function(e) {
              return Yt.call(t, e)
            })))
          } : rl,
          ea = ti ? function(t) {
            for (var e = []; t;) pe(e, ta(t)), t = $t(t);
            return e
          } : rl,
          ia = fn;

        function na(t, e, i) {
          for (var n = -1, r = (e = sr(e, t)).length, a = !1; ++n < r;) {
            var o = Ma(e[n]);
            if (!(a = null != t && i(t, o))) break;
            t = t[o]
          }
          return a || ++n != r ? a : !!(r = null == t ? 0 : t.length) && Bo(r) && oa(o, r) && (No(t) || Co(t))
        }

        function ra(t) {
          return "function" != typeof t.constructor || ua(t) ? {} : Si($t(t))
        }

        function aa(t) {
          return No(t) || Co(t) || !!(Xt && t && t[Xt])
        }

        function oa(t, e) {
          var i = typeof t;
          return !!(e = null == e ? 9007199254740991 : e) && ("number" == i || "symbol" != i && lt.test(t)) && t > -1 && t % 1 == 0 && t < e
        }

        function sa(t, e, i) {
          if (!Wo(i)) return !1;
          var n = typeof e;
          return !!("number" == n ? Io(i) && oa(e, i.length) : "string" == n && e in i) && Do(i[e], t)
        }

        function la(t, e) {
          if (No(t)) return !1;
          var i = typeof t;
          return !("number" != i && "symbol" != i && "boolean" != i && null != t && !Xo(t)) || (U.test(t) || !W.test(t) || null != e && t in _t(e))
        }

        function ha(t) {
          var e = Yr(t),
            i = Ei[e];
          if ("function" != typeof i || !(e in ji.prototype)) return !1;
          if (t === i) return !0;
          var n = Gr(i);
          return !!n && t === n[0]
        }(ui && ia(new ui(new ArrayBuffer(1))) != T || di && ia(new di) != _ || fi && "[object Promise]" != ia(fi.resolve()) || pi && ia(new pi) != y || _i && ia(new _i) != x) && (ia = function(t) {
          var e = fn(t),
            i = e == g ? t.constructor : void 0,
            n = i ? La(i) : "";
          if (n) switch (n) {
            case yi:
              return T;
            case wi:
              return _;
            case bi:
              return "[object Promise]";
            case xi:
              return y;
            case ki:
              return x
          }
          return e
        });
        var ca = xt ? qo : al;

        function ua(t) {
          var e = t && t.constructor;
          return t === ("function" == typeof e && e.prototype || bt)
        }

        function da(t) {
          return t == t && !Wo(t)
        }

        function fa(t, e) {
          return function(i) {
            return null != i && (i[t] === e && (void 0 !== e || t in _t(i)))
          }
        }

        function pa(t, e, i) {
          return e = ai(void 0 === e ? t.length - 1 : e, 0),
            function() {
              for (var r = arguments, a = -1, o = ai(r.length - e, 0), s = n(o); ++a < o;) s[a] = r[e + a];
              a = -1;
              for (var l = n(e + 1); ++a < e;) l[a] = r[a];
              return l[e] = i(s), ae(t, this, l)
            }
        }

        function _a(t, e) {
          return e.length < 2 ? t : un(t, $n(e, 0, -1))
        }

        function ma(t, e) {
          for (var i = t.length, n = oi(e.length, i), r = gr(t); n--;) {
            var a = e[n];
            t[n] = oa(a, i) ? r[a] : void 0
          }
          return t
        }

        function ga(t, e) {
          if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
        }
        var va = xa(Bn),
          ya = Xe || function(t, e) {
            return Gt.setTimeout(t, e)
          },
          wa = xa(Wn);

        function ba(t, e, i) {
          var n = e + "";
          return wa(t, function(t, e) {
            var i = e.length;
            if (!i) return t;
            var n = i - 1;
            return e[n] = (i > 1 ? "& " : "") + e[n], e = e.join(i > 2 ? ", " : " "), t.replace(X, "{\n/* [wrapped with " + e + "] */\n")
          }(n, function(t, e) {
            return se(s, (function(i) {
              var n = "_." + i[0];
              e & i[1] && !ue(t, n) && t.push(n)
            })), t.sort()
          }(function(t) {
            var e = t.match(K);
            return e ? e[1].split(Q) : []
          }(n), i)))
        }

        function xa(t) {
          var e = 0,
            i = 0;
          return function() {
            var n = si(),
              r = 16 - (n - i);
            if (i = n, r > 0) {
              if (++e >= 800) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
          }
        }

        function ka(t, e) {
          var i = -1,
            n = t.length,
            r = n - 1;
          for (e = void 0 === e ? n : e; ++i < e;) {
            var a = zn(i, r),
              o = t[a];
            t[a] = t[i], t[i] = o
          }
          return t.length = e, t
        }
        var Ta = function(t) {
          var e = ko(t, (function(t) {
              return 500 === i.size && i.clear(), t
            })),
            i = e.cache;
          return e
        }((function(t) {
          var e = [];
          return 46 === t.charCodeAt(0) && e.push(""), t.replace($, (function(t, i, n, r) {
            e.push(n ? r.replace(et, "$1") : i || t)
          })), e
        }));

        function Ma(t) {
          if ("string" == typeof t || Xo(t)) return t;
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e
        }

        function La(t) {
          if (null != t) {
            try {
              return kt.call(t)
            } catch (t) {}
            try {
              return t + ""
            } catch (t) {}
          }
          return ""
        }

        function Ea(t) {
          if (t instanceof ji) return t.clone();
          var e = new Ai(t.__wrapped__, t.__chain__);
          return e.__actions__ = gr(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
        }
        var Sa = Pn((function(t, e) {
            return zo(t) ? Ki(t, an(e, 1, zo, !0)) : []
          })),
          Da = Pn((function(t, e) {
            var i = Pa(e);
            return zo(i) && (i = void 0), zo(t) ? Ki(t, an(e, 1, zo, !0), Jr(i, 2)) : []
          })),
          Aa = Pn((function(t, e) {
            var i = Pa(e);
            return zo(i) && (i = void 0), zo(t) ? Ki(t, an(e, 1, zo, !0), void 0, i) : []
          }));

        function ja(t, e, i) {
          var n = null == t ? 0 : t.length;
          if (!n) return -1;
          var r = null == i ? 0 : ns(i);
          return r < 0 && (r = ai(n + r, 0)), we(t, Jr(e, 3), r)
        }

        function Ca(t, e, i) {
          var n = null == t ? 0 : t.length;
          if (!n) return -1;
          var r = n - 1;
          return void 0 !== i && (r = ns(i), r = i < 0 ? ai(n + r, 0) : oi(r, n - 1)), we(t, Jr(e, 3), r, !0)
        }

        function Na(t) {
          return (null == t ? 0 : t.length) ? an(t, 1) : []
        }

        function Oa(t) {
          return t && t.length ? t[0] : void 0
        }
        var Ia = Pn((function(t) {
            var e = fe(t, ar);
            return e.length && e[0] === t[0] ? gn(e) : []
          })),
          za = Pn((function(t) {
            var e = Pa(t),
              i = fe(t, ar);
            return e === Pa(i) ? e = void 0 : i.pop(), i.length && i[0] === t[0] ? gn(i, Jr(e, 2)) : []
          })),
          Ra = Pn((function(t) {
            var e = Pa(t),
              i = fe(t, ar);
            return (e = "function" == typeof e ? e : void 0) && i.pop(), i.length && i[0] === t[0] ? gn(i, void 0, e) : []
          }));

        function Pa(t) {
          var e = null == t ? 0 : t.length;
          return e ? t[e - 1] : void 0
        }
        var Ha = Pn(qa);

        function qa(t, e) {
          return t && t.length && e && e.length ? On(t, e) : t
        }
        var Fa = Ur((function(t, e) {
          var i = null == t ? 0 : t.length,
            n = Gi(t, e);
          return In(t, fe(e, (function(t) {
            return oa(t, i) ? +t : t
          })).sort(pr)), n
        }));

        function Ba(t) {
          return null == t ? t : ci.call(t)
        }
        var Wa = Pn((function(t) {
            return Kn(an(t, 1, zo, !0))
          })),
          Ua = Pn((function(t) {
            var e = Pa(t);
            return zo(e) && (e = void 0), Kn(an(t, 1, zo, !0), Jr(e, 2))
          })),
          $a = Pn((function(t) {
            var e = Pa(t);
            return e = "function" == typeof e ? e : void 0, Kn(an(t, 1, zo, !0), void 0, e)
          }));

        function Za(t) {
          if (!t || !t.length) return [];
          var e = 0;
          return t = ce(t, (function(t) {
            if (zo(t)) return e = ai(t.length, e), !0
          })), De(e, (function(e) {
            return fe(t, Me(e))
          }))
        }

        function Ga(t, e) {
          if (!t || !t.length) return [];
          var i = Za(t);
          return null == e ? i : fe(i, (function(t) {
            return ae(e, void 0, t)
          }))
        }
        var Ya = Pn((function(t, e) {
            return zo(t) ? Ki(t, e) : []
          })),
          Va = Pn((function(t) {
            return nr(ce(t, zo))
          })),
          Ja = Pn((function(t) {
            var e = Pa(t);
            return zo(e) && (e = void 0), nr(ce(t, zo), Jr(e, 2))
          })),
          Xa = Pn((function(t) {
            var e = Pa(t);
            return e = "function" == typeof e ? e : void 0, nr(ce(t, zo), void 0, e)
          })),
          Ka = Pn(Za);
        var Qa = Pn((function(t) {
          var e = t.length,
            i = e > 1 ? t[e - 1] : void 0;
          return i = "function" == typeof i ? (t.pop(), i) : void 0, Ga(t, i)
        }));

        function to(t) {
          var e = Ei(t);
          return e.__chain__ = !0, e
        }

        function eo(t, e) {
          return e(t)
        }
        var io = Ur((function(t) {
          var e = t.length,
            i = e ? t[0] : 0,
            n = this.__wrapped__,
            r = function(e) {
              return Gi(e, t)
            };
          return !(e > 1 || this.__actions__.length) && n instanceof ji && oa(i) ? ((n = n.slice(i, +i + (e ? 1 : 0))).__actions__.push({
            func: eo,
            args: [r],
            thisArg: void 0
          }), new Ai(n, this.__chain__).thru((function(t) {
            return e && !t.length && t.push(void 0), t
          }))) : this.thru(r)
        }));
        var no = yr((function(t, e, i) {
          Tt.call(t, i) ? ++t[i] : Zi(t, i, 1)
        }));
        var ro = Lr(ja),
          ao = Lr(Ca);

        function oo(t, e) {
          return (No(t) ? se : Qi)(t, Jr(e, 3))
        }

        function so(t, e) {
          return (No(t) ? le : tn)(t, Jr(e, 3))
        }
        var lo = yr((function(t, e, i) {
          Tt.call(t, i) ? t[i].push(e) : Zi(t, i, [e])
        }));
        var ho = Pn((function(t, e, i) {
            var r = -1,
              a = "function" == typeof e,
              o = Io(t) ? n(t.length) : [];
            return Qi(t, (function(t) {
              o[++r] = a ? ae(e, t, i) : vn(t, e, i)
            })), o
          })),
          co = yr((function(t, e, i) {
            Zi(t, i, e)
          }));

        function uo(t, e) {
          return (No(t) ? fe : En)(t, Jr(e, 3))
        }
        var fo = yr((function(t, e, i) {
          t[i ? 0 : 1].push(e)
        }), (function() {
          return [
            [],
            []
          ]
        }));
        var po = Pn((function(t, e) {
            if (null == t) return [];
            var i = e.length;
            return i > 1 && sa(t, e[0], e[1]) ? e = [] : i > 2 && sa(e[0], e[1], e[2]) && (e = [e[0]]), Cn(t, an(e, 1), [])
          })),
          _o = Je || function() {
            return Gt.Date.now()
          };

        function mo(t, e, i) {
          return e = i ? void 0 : e, Hr(t, 128, void 0, void 0, void 0, void 0, e = t && null == e ? t.length : e)
        }

        function go(t, e) {
          var i;
          if ("function" != typeof e) throw new vt(a);
          return t = ns(t),
            function() {
              return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = void 0), i
            }
        }
        var vo = Pn((function(t, e, i) {
            var n = 1;
            if (i.length) {
              var r = Be(i, Vr(vo));
              n |= 32
            }
            return Hr(t, n, e, i, r)
          })),
          yo = Pn((function(t, e, i) {
            var n = 3;
            if (i.length) {
              var r = Be(i, Vr(yo));
              n |= 32
            }
            return Hr(e, n, t, i, r)
          }));

        function wo(t, e, i) {
          var n, r, o, s, l, h, c = 0,
            u = !1,
            d = !1,
            f = !0;
          if ("function" != typeof t) throw new vt(a);

          function p(e) {
            var i = n,
              a = r;
            return n = r = void 0, c = e, s = t.apply(a, i)
          }

          function _(t) {
            return c = t, l = ya(g, e), u ? p(t) : s
          }

          function m(t) {
            var i = t - h;
            return void 0 === h || i >= e || i < 0 || d && t - c >= o
          }

          function g() {
            var t = _o();
            if (m(t)) return v(t);
            l = ya(g, function(t) {
              var i = e - (t - h);
              return d ? oi(i, o - (t - c)) : i
            }(t))
          }

          function v(t) {
            return l = void 0, f && n ? p(t) : (n = r = void 0, s)
          }

          function y() {
            var t = _o(),
              i = m(t);
            if (n = arguments, r = this, h = t, i) {
              if (void 0 === l) return _(h);
              if (d) return cr(l), l = ya(g, e), p(h)
            }
            return void 0 === l && (l = ya(g, e)), s
          }
          return e = as(e) || 0, Wo(i) && (u = !!i.leading, o = (d = "maxWait" in i) ? ai(as(i.maxWait) || 0, e) : o, f = "trailing" in i ? !!i.trailing : f), y.cancel = function() {
            void 0 !== l && cr(l), c = 0, n = h = r = l = void 0
          }, y.flush = function() {
            return void 0 === l ? s : v(_o())
          }, y
        }
        var bo = Pn((function(t, e) {
            return Xi(t, 1, e)
          })),
          xo = Pn((function(t, e, i) {
            return Xi(t, as(e) || 0, i)
          }));

        function ko(t, e) {
          if ("function" != typeof t || null != e && "function" != typeof e) throw new vt(a);
          var i = function() {
            var n = arguments,
              r = e ? e.apply(this, n) : n[0],
              a = i.cache;
            if (a.has(r)) return a.get(r);
            var o = t.apply(this, n);
            return i.cache = a.set(r, o) || a, o
          };
          return i.cache = new(ko.Cache || Oi), i
        }

        function To(t) {
          if ("function" != typeof t) throw new vt(a);
          return function() {
            var e = arguments;
            switch (e.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, e[0]);
              case 2:
                return !t.call(this, e[0], e[1]);
              case 3:
                return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
          }
        }
        ko.Cache = Oi;
        var Mo = lr((function(t, e) {
            var i = (e = 1 == e.length && No(e[0]) ? fe(e[0], Ae(Jr())) : fe(an(e, 1), Ae(Jr()))).length;
            return Pn((function(n) {
              for (var r = -1, a = oi(n.length, i); ++r < a;) n[r] = e[r].call(this, n[r]);
              return ae(t, this, n)
            }))
          })),
          Lo = Pn((function(t, e) {
            return Hr(t, 32, void 0, e, Be(e, Vr(Lo)))
          })),
          Eo = Pn((function(t, e) {
            return Hr(t, 64, void 0, e, Be(e, Vr(Eo)))
          })),
          So = Ur((function(t, e) {
            return Hr(t, 256, void 0, void 0, void 0, e)
          }));

        function Do(t, e) {
          return t === e || t != t && e != e
        }
        var Ao = Or(pn),
          jo = Or((function(t, e) {
            return t >= e
          })),
          Co = yn(function() {
            return arguments
          }()) ? yn : function(t) {
            return Uo(t) && Tt.call(t, "callee") && !Yt.call(t, "callee")
          },
          No = n.isArray,
          Oo = Qt ? Ae(Qt) : function(t) {
            return Uo(t) && fn(t) == k
          };

        function Io(t) {
          return null != t && Bo(t.length) && !qo(t)
        }

        function zo(t) {
          return Uo(t) && Io(t)
        }
        var Ro = ei || al,
          Po = te ? Ae(te) : function(t) {
            return Uo(t) && fn(t) == u
          };

        function Ho(t) {
          if (!Uo(t)) return !1;
          var e = fn(t);
          return e == d || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !Go(t)
        }

        function qo(t) {
          if (!Wo(t)) return !1;
          var e = fn(t);
          return e == f || e == p || "[object AsyncFunction]" == e || "[object Proxy]" == e
        }

        function Fo(t) {
          return "number" == typeof t && t == ns(t)
        }

        function Bo(t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        }

        function Wo(t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e)
        }

        function Uo(t) {
          return null != t && "object" == typeof t
        }
        var $o = ee ? Ae(ee) : function(t) {
          return Uo(t) && ia(t) == _
        };

        function Zo(t) {
          return "number" == typeof t || Uo(t) && fn(t) == m
        }

        function Go(t) {
          if (!Uo(t) || fn(t) != g) return !1;
          var e = $t(t);
          if (null === e) return !0;
          var i = Tt.call(e, "constructor") && e.constructor;
          return "function" == typeof i && i instanceof i && kt.call(i) == St
        }
        var Yo = ie ? Ae(ie) : function(t) {
          return Uo(t) && fn(t) == v
        };
        var Vo = ne ? Ae(ne) : function(t) {
          return Uo(t) && ia(t) == y
        };

        function Jo(t) {
          return "string" == typeof t || !No(t) && Uo(t) && fn(t) == w
        }

        function Xo(t) {
          return "symbol" == typeof t || Uo(t) && fn(t) == b
        }
        var Ko = re ? Ae(re) : function(t) {
          return Uo(t) && Bo(t.length) && !!qt[fn(t)]
        };
        var Qo = Or(Ln),
          ts = Or((function(t, e) {
            return t <= e
          }));

        function es(t) {
          if (!t) return [];
          if (Io(t)) return Jo(t) ? Ze(t) : gr(t);
          if (Kt && t[Kt]) return function(t) {
            for (var e, i = []; !(e = t.next()).done;) i.push(e.value);
            return i
          }(t[Kt]());
          var e = ia(t);
          return (e == _ ? qe : e == y ? We : Ds)(t)
        }

        function is(t) {
          return t ? (t = as(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
        }

        function ns(t) {
          var e = is(t),
            i = e % 1;
          return e == e ? i ? e - i : e : 0
        }

        function rs(t) {
          return t ? Yi(ns(t), 0, 4294967295) : 0
        }

        function as(t) {
          if ("number" == typeof t) return t;
          if (Xo(t)) return NaN;
          if (Wo(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Wo(e) ? e + "" : e
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(Y, "");
          var i = at.test(t);
          return i || st.test(t) ? Ut(t.slice(2), i ? 2 : 8) : rt.test(t) ? NaN : +t
        }

        function os(t) {
          return vr(t, bs(t))
        }

        function ss(t) {
          return null == t ? "" : Xn(t)
        }
        var ls = wr((function(t, e) {
            if (ua(e) || Io(e)) vr(e, ws(e), t);
            else
              for (var i in e) Tt.call(e, i) && Bi(t, i, e[i])
          })),
          hs = wr((function(t, e) {
            vr(e, bs(e), t)
          })),
          cs = wr((function(t, e, i, n) {
            vr(e, bs(e), t, n)
          })),
          us = wr((function(t, e, i, n) {
            vr(e, ws(e), t, n)
          })),
          ds = Ur(Gi);
        var fs = Pn((function(t, e) {
            t = _t(t);
            var i = -1,
              n = e.length,
              r = n > 2 ? e[2] : void 0;
            for (r && sa(e[0], e[1], r) && (n = 1); ++i < n;)
              for (var a = e[i], o = bs(a), s = -1, l = o.length; ++s < l;) {
                var h = o[s],
                  c = t[h];
                (void 0 === c || Do(c, bt[h]) && !Tt.call(t, h)) && (t[h] = a[h])
              }
            return t
          })),
          ps = Pn((function(t) {
            return t.push(void 0, Fr), ae(ks, void 0, t)
          }));

        function _s(t, e, i) {
          var n = null == t ? void 0 : un(t, e);
          return void 0 === n ? i : n
        }

        function ms(t, e) {
          return null != t && na(t, e, mn)
        }
        var gs = Dr((function(t, e, i) {
            null != e && "function" != typeof e.toString && (e = Et.call(e)), t[e] = i
          }), Ws(Zs)),
          vs = Dr((function(t, e, i) {
            null != e && "function" != typeof e.toString && (e = Et.call(e)), Tt.call(t, e) ? t[e].push(i) : t[e] = [i]
          }), Jr),
          ys = Pn(vn);

        function ws(t) {
          return Io(t) ? Ri(t) : Tn(t)
        }

        function bs(t) {
          return Io(t) ? Ri(t, !0) : Mn(t)
        }
        var xs = wr((function(t, e, i) {
            An(t, e, i)
          })),
          ks = wr((function(t, e, i, n) {
            An(t, e, i, n)
          })),
          Ts = Ur((function(t, e) {
            var i = {};
            if (null == t) return i;
            var n = !1;
            e = fe(e, (function(e) {
              return e = sr(e, t), n || (n = e.length > 1), e
            })), vr(t, Zr(t), i), n && (i = Vi(i, 7, Br));
            for (var r = e.length; r--;) Qn(i, e[r]);
            return i
          }));
        var Ms = Ur((function(t, e) {
          return null == t ? {} : function(t, e) {
            return Nn(t, e, (function(e, i) {
              return ms(t, i)
            }))
          }(t, e)
        }));

        function Ls(t, e) {
          if (null == t) return {};
          var i = fe(Zr(t), (function(t) {
            return [t]
          }));
          return e = Jr(e), Nn(t, i, (function(t, i) {
            return e(t, i[0])
          }))
        }
        var Es = Pr(ws),
          Ss = Pr(bs);

        function Ds(t) {
          return null == t ? [] : je(t, ws(t))
        }
        var As = Tr((function(t, e, i) {
          return e = e.toLowerCase(), t + (i ? js(e) : e)
        }));

        function js(t) {
          return Hs(ss(t).toLowerCase())
        }

        function Cs(t) {
          return (t = ss(t)) && t.replace(ht, ze).replace(Nt, "")
        }
        var Ns = Tr((function(t, e, i) {
            return t + (i ? "-" : "") + e.toLowerCase()
          })),
          Os = Tr((function(t, e, i) {
            return t + (i ? " " : "") + e.toLowerCase()
          })),
          Is = kr("toLowerCase");
        var zs = Tr((function(t, e, i) {
          return t + (i ? "_" : "") + e.toLowerCase()
        }));
        var Rs = Tr((function(t, e, i) {
          return t + (i ? " " : "") + Hs(e)
        }));
        var Ps = Tr((function(t, e, i) {
            return t + (i ? " " : "") + e.toUpperCase()
          })),
          Hs = kr("toUpperCase");

        function qs(t, e, i) {
          return t = ss(t), void 0 === (e = i ? void 0 : e) ? function(t) {
            return Rt.test(t)
          }(t) ? function(t) {
            return t.match(It) || []
          }(t) : function(t) {
            return t.match(tt) || []
          }(t) : t.match(e) || []
        }
        var Fs = Pn((function(t, e) {
            try {
              return ae(t, void 0, e)
            } catch (t) {
              return Ho(t) ? t : new dt(t)
            }
          })),
          Bs = Ur((function(t, e) {
            return se(e, (function(e) {
              e = Ma(e), Zi(t, e, vo(t[e], t))
            })), t
          }));

        function Ws(t) {
          return function() {
            return t
          }
        }
        var Us = Er(),
          $s = Er(!0);

        function Zs(t) {
          return t
        }

        function Gs(t) {
          return kn("function" == typeof t ? t : Vi(t, 1))
        }
        var Ys = Pn((function(t, e) {
            return function(i) {
              return vn(i, t, e)
            }
          })),
          Vs = Pn((function(t, e) {
            return function(i) {
              return vn(t, i, e)
            }
          }));

        function Js(t, e, i) {
          var n = ws(e),
            r = cn(e, n);
          null != i || Wo(e) && (r.length || !n.length) || (i = e, e = t, t = this, r = cn(e, ws(e)));
          var a = !(Wo(i) && "chain" in i && !i.chain),
            o = qo(t);
          return se(r, (function(i) {
            var n = e[i];
            t[i] = n, o && (t.prototype[i] = function() {
              var e = this.__chain__;
              if (a || e) {
                var i = t(this.__wrapped__),
                  r = i.__actions__ = gr(this.__actions__);
                return r.push({
                  func: n,
                  args: arguments,
                  thisArg: t
                }), i.__chain__ = e, i
              }
              return n.apply(t, pe([this.value()], arguments))
            })
          })), t
        }

        function Xs() {}
        var Ks = jr(fe),
          Qs = jr(he),
          tl = jr(ge);

        function el(t) {
          return la(t) ? Me(Ma(t)) : function(t) {
            return function(e) {
              return un(e, t)
            }
          }(t)
        }
        var il = Nr(),
          nl = Nr(!0);

        function rl() {
          return []
        }

        function al() {
          return !1
        }
        var ol = Ar((function(t, e) {
            return t + e
          }), 0),
          sl = zr("ceil"),
          ll = Ar((function(t, e) {
            return t / e
          }), 1),
          hl = zr("floor");
        var cl, ul = Ar((function(t, e) {
            return t * e
          }), 1),
          dl = zr("round"),
          fl = Ar((function(t, e) {
            return t - e
          }), 0);
        return Ei.after = function(t, e) {
          if ("function" != typeof e) throw new vt(a);
          return t = ns(t),
            function() {
              if (--t < 1) return e.apply(this, arguments)
            }
        }, Ei.ary = mo, Ei.assign = ls, Ei.assignIn = hs, Ei.assignInWith = cs, Ei.assignWith = us, Ei.at = ds, Ei.before = go, Ei.bind = vo, Ei.bindAll = Bs, Ei.bindKey = yo, Ei.castArray = function() {
          if (!arguments.length) return [];
          var t = arguments[0];
          return No(t) ? t : [t]
        }, Ei.chain = to, Ei.chunk = function(t, e, i) {
          e = (i ? sa(t, e, i) : void 0 === e) ? 1 : ai(ns(e), 0);
          var r = null == t ? 0 : t.length;
          if (!r || e < 1) return [];
          for (var a = 0, o = 0, s = n(Ke(r / e)); a < r;) s[o++] = $n(t, a, a += e);
          return s
        }, Ei.compact = function(t) {
          for (var e = -1, i = null == t ? 0 : t.length, n = 0, r = []; ++e < i;) {
            var a = t[e];
            a && (r[n++] = a)
          }
          return r
        }, Ei.concat = function() {
          var t = arguments.length;
          if (!t) return [];
          for (var e = n(t - 1), i = arguments[0], r = t; r--;) e[r - 1] = arguments[r];
          return pe(No(i) ? gr(i) : [i], an(e, 1))
        }, Ei.cond = function(t) {
          var e = null == t ? 0 : t.length,
            i = Jr();
          return t = e ? fe(t, (function(t) {
            if ("function" != typeof t[1]) throw new vt(a);
            return [i(t[0]), t[1]]
          })) : [], Pn((function(i) {
            for (var n = -1; ++n < e;) {
              var r = t[n];
              if (ae(r[0], this, i)) return ae(r[1], this, i)
            }
          }))
        }, Ei.conforms = function(t) {
          return function(t) {
            var e = ws(t);
            return function(i) {
              return Ji(i, t, e)
            }
          }(Vi(t, 1))
        }, Ei.constant = Ws, Ei.countBy = no, Ei.create = function(t, e) {
          var i = Si(t);
          return null == e ? i : $i(i, e)
        }, Ei.curry = function t(e, i, n) {
          var r = Hr(e, 8, void 0, void 0, void 0, void 0, void 0, i = n ? void 0 : i);
          return r.placeholder = t.placeholder, r
        }, Ei.curryRight = function t(e, i, n) {
          var r = Hr(e, 16, void 0, void 0, void 0, void 0, void 0, i = n ? void 0 : i);
          return r.placeholder = t.placeholder, r
        }, Ei.debounce = wo, Ei.defaults = fs, Ei.defaultsDeep = ps, Ei.defer = bo, Ei.delay = xo, Ei.difference = Sa, Ei.differenceBy = Da, Ei.differenceWith = Aa, Ei.drop = function(t, e, i) {
          var n = null == t ? 0 : t.length;
          return n ? $n(t, (e = i || void 0 === e ? 1 : ns(e)) < 0 ? 0 : e, n) : []
        }, Ei.dropRight = function(t, e, i) {
          var n = null == t ? 0 : t.length;
          return n ? $n(t, 0, (e = n - (e = i || void 0 === e ? 1 : ns(e))) < 0 ? 0 : e) : []
        }, Ei.dropRightWhile = function(t, e) {
          return t && t.length ? er(t, Jr(e, 3), !0, !0) : []
        }, Ei.dropWhile = function(t, e) {
          return t && t.length ? er(t, Jr(e, 3), !0) : []
        }, Ei.fill = function(t, e, i, n) {
          var r = null == t ? 0 : t.length;
          return r ? (i && "number" != typeof i && sa(t, e, i) && (i = 0, n = r), function(t, e, i, n) {
            var r = t.length;
            for ((i = ns(i)) < 0 && (i = -i > r ? 0 : r + i), (n = void 0 === n || n > r ? r : ns(n)) < 0 && (n += r), n = i > n ? 0 : rs(n); i < n;) t[i++] = e;
            return t
          }(t, e, i, n)) : []
        }, Ei.filter = function(t, e) {
          return (No(t) ? ce : rn)(t, Jr(e, 3))
        }, Ei.flatMap = function(t, e) {
          return an(uo(t, e), 1)
        }, Ei.flatMapDeep = function(t, e) {
          return an(uo(t, e), 1 / 0)
        }, Ei.flatMapDepth = function(t, e, i) {
          return i = void 0 === i ? 1 : ns(i), an(uo(t, e), i)
        }, Ei.flatten = Na, Ei.flattenDeep = function(t) {
          return (null == t ? 0 : t.length) ? an(t, 1 / 0) : []
        }, Ei.flattenDepth = function(t, e) {
          return (null == t ? 0 : t.length) ? an(t, e = void 0 === e ? 1 : ns(e)) : []
        }, Ei.flip = function(t) {
          return Hr(t, 512)
        }, Ei.flow = Us, Ei.flowRight = $s, Ei.fromPairs = function(t) {
          for (var e = -1, i = null == t ? 0 : t.length, n = {}; ++e < i;) {
            var r = t[e];
            n[r[0]] = r[1]
          }
          return n
        }, Ei.functions = function(t) {
          return null == t ? [] : cn(t, ws(t))
        }, Ei.functionsIn = function(t) {
          return null == t ? [] : cn(t, bs(t))
        }, Ei.groupBy = lo, Ei.initial = function(t) {
          return (null == t ? 0 : t.length) ? $n(t, 0, -1) : []
        }, Ei.intersection = Ia, Ei.intersectionBy = za, Ei.intersectionWith = Ra, Ei.invert = gs, Ei.invertBy = vs, Ei.invokeMap = ho, Ei.iteratee = Gs, Ei.keyBy = co, Ei.keys = ws, Ei.keysIn = bs, Ei.map = uo, Ei.mapKeys = function(t, e) {
          var i = {};
          return e = Jr(e, 3), ln(t, (function(t, n, r) {
            Zi(i, e(t, n, r), t)
          })), i
        }, Ei.mapValues = function(t, e) {
          var i = {};
          return e = Jr(e, 3), ln(t, (function(t, n, r) {
            Zi(i, n, e(t, n, r))
          })), i
        }, Ei.matches = function(t) {
          return Sn(Vi(t, 1))
        }, Ei.matchesProperty = function(t, e) {
          return Dn(t, Vi(e, 1))
        }, Ei.memoize = ko, Ei.merge = xs, Ei.mergeWith = ks, Ei.method = Ys, Ei.methodOf = Vs, Ei.mixin = Js, Ei.negate = To, Ei.nthArg = function(t) {
          return t = ns(t), Pn((function(e) {
            return jn(e, t)
          }))
        }, Ei.omit = Ts, Ei.omitBy = function(t, e) {
          return Ls(t, To(Jr(e)))
        }, Ei.once = function(t) {
          return go(2, t)
        }, Ei.orderBy = function(t, e, i, n) {
          return null == t ? [] : (No(e) || (e = null == e ? [] : [e]), No(i = n ? void 0 : i) || (i = null == i ? [] : [i]), Cn(t, e, i))
        }, Ei.over = Ks, Ei.overArgs = Mo, Ei.overEvery = Qs, Ei.overSome = tl, Ei.partial = Lo, Ei.partialRight = Eo, Ei.partition = fo, Ei.pick = Ms, Ei.pickBy = Ls, Ei.property = el, Ei.propertyOf = function(t) {
          return function(e) {
            return null == t ? void 0 : un(t, e)
          }
        }, Ei.pull = Ha, Ei.pullAll = qa, Ei.pullAllBy = function(t, e, i) {
          return t && t.length && e && e.length ? On(t, e, Jr(i, 2)) : t
        }, Ei.pullAllWith = function(t, e, i) {
          return t && t.length && e && e.length ? On(t, e, void 0, i) : t
        }, Ei.pullAt = Fa, Ei.range = il, Ei.rangeRight = nl, Ei.rearg = So, Ei.reject = function(t, e) {
          return (No(t) ? ce : rn)(t, To(Jr(e, 3)))
        }, Ei.remove = function(t, e) {
          var i = [];
          if (!t || !t.length) return i;
          var n = -1,
            r = [],
            a = t.length;
          for (e = Jr(e, 3); ++n < a;) {
            var o = t[n];
            e(o, n, t) && (i.push(o), r.push(n))
          }
          return In(t, r), i
        }, Ei.rest = function(t, e) {
          if ("function" != typeof t) throw new vt(a);
          return Pn(t, e = void 0 === e ? e : ns(e))
        }, Ei.reverse = Ba, Ei.sampleSize = function(t, e, i) {
          return e = (i ? sa(t, e, i) : void 0 === e) ? 1 : ns(e), (No(t) ? Hi : qn)(t, e)
        }, Ei.set = function(t, e, i) {
          return null == t ? t : Fn(t, e, i)
        }, Ei.setWith = function(t, e, i, n) {
          return n = "function" == typeof n ? n : void 0, null == t ? t : Fn(t, e, i, n)
        }, Ei.shuffle = function(t) {
          return (No(t) ? qi : Un)(t)
        }, Ei.slice = function(t, e, i) {
          var n = null == t ? 0 : t.length;
          return n ? (i && "number" != typeof i && sa(t, e, i) ? (e = 0, i = n) : (e = null == e ? 0 : ns(e), i = void 0 === i ? n : ns(i)), $n(t, e, i)) : []
        }, Ei.sortBy = po, Ei.sortedUniq = function(t) {
          return t && t.length ? Vn(t) : []
        }, Ei.sortedUniqBy = function(t, e) {
          return t && t.length ? Vn(t, Jr(e, 2)) : []
        }, Ei.split = function(t, e, i) {
          return i && "number" != typeof i && sa(t, e, i) && (e = i = void 0), (i = void 0 === i ? 4294967295 : i >>> 0) ? (t = ss(t)) && ("string" == typeof e || null != e && !Yo(e)) && !(e = Xn(e)) && He(t) ? hr(Ze(t), 0, i) : t.split(e, i) : []
        }, Ei.spread = function(t, e) {
          if ("function" != typeof t) throw new vt(a);
          return e = null == e ? 0 : ai(ns(e), 0), Pn((function(i) {
            var n = i[e],
              r = hr(i, 0, e);
            return n && pe(r, n), ae(t, this, r)
          }))
        }, Ei.tail = function(t) {
          var e = null == t ? 0 : t.length;
          return e ? $n(t, 1, e) : []
        }, Ei.take = function(t, e, i) {
          return t && t.length ? $n(t, 0, (e = i || void 0 === e ? 1 : ns(e)) < 0 ? 0 : e) : []
        }, Ei.takeRight = function(t, e, i) {
          var n = null == t ? 0 : t.length;
          return n ? $n(t, (e = n - (e = i || void 0 === e ? 1 : ns(e))) < 0 ? 0 : e, n) : []
        }, Ei.takeRightWhile = function(t, e) {
          return t && t.length ? er(t, Jr(e, 3), !1, !0) : []
        }, Ei.takeWhile = function(t, e) {
          return t && t.length ? er(t, Jr(e, 3)) : []
        }, Ei.tap = function(t, e) {
          return e(t), t
        }, Ei.throttle = function(t, e, i) {
          var n = !0,
            r = !0;
          if ("function" != typeof t) throw new vt(a);
          return Wo(i) && (n = "leading" in i ? !!i.leading : n, r = "trailing" in i ? !!i.trailing : r), wo(t, e, {
            leading: n,
            maxWait: e,
            trailing: r
          })
        }, Ei.thru = eo, Ei.toArray = es, Ei.toPairs = Es, Ei.toPairsIn = Ss, Ei.toPath = function(t) {
          return No(t) ? fe(t, Ma) : Xo(t) ? [t] : gr(Ta(ss(t)))
        }, Ei.toPlainObject = os, Ei.transform = function(t, e, i) {
          var n = No(t),
            r = n || Ro(t) || Ko(t);
          if (e = Jr(e, 4), null == i) {
            var a = t && t.constructor;
            i = r ? n ? new a : [] : Wo(t) && qo(a) ? Si($t(t)) : {}
          }
          return (r ? se : ln)(t, (function(t, n, r) {
            return e(i, t, n, r)
          })), i
        }, Ei.unary = function(t) {
          return mo(t, 1)
        }, Ei.union = Wa, Ei.unionBy = Ua, Ei.unionWith = $a, Ei.uniq = function(t) {
          return t && t.length ? Kn(t) : []
        }, Ei.uniqBy = function(t, e) {
          return t && t.length ? Kn(t, Jr(e, 2)) : []
        }, Ei.uniqWith = function(t, e) {
          return e = "function" == typeof e ? e : void 0, t && t.length ? Kn(t, void 0, e) : []
        }, Ei.unset = function(t, e) {
          return null == t || Qn(t, e)
        }, Ei.unzip = Za, Ei.unzipWith = Ga, Ei.update = function(t, e, i) {
          return null == t ? t : tr(t, e, or(i))
        }, Ei.updateWith = function(t, e, i, n) {
          return n = "function" == typeof n ? n : void 0, null == t ? t : tr(t, e, or(i), n)
        }, Ei.values = Ds, Ei.valuesIn = function(t) {
          return null == t ? [] : je(t, bs(t))
        }, Ei.without = Ya, Ei.words = qs, Ei.wrap = function(t, e) {
          return Lo(or(e), t)
        }, Ei.xor = Va, Ei.xorBy = Ja, Ei.xorWith = Xa, Ei.zip = Ka, Ei.zipObject = function(t, e) {
          return rr(t || [], e || [], Bi)
        }, Ei.zipObjectDeep = function(t, e) {
          return rr(t || [], e || [], Fn)
        }, Ei.zipWith = Qa, Ei.entries = Es, Ei.entriesIn = Ss, Ei.extend = hs, Ei.extendWith = cs, Js(Ei, Ei), Ei.add = ol, Ei.attempt = Fs, Ei.camelCase = As, Ei.capitalize = js, Ei.ceil = sl, Ei.clamp = function(t, e, i) {
          return void 0 === i && (i = e, e = void 0), void 0 !== i && (i = (i = as(i)) == i ? i : 0), void 0 !== e && (e = (e = as(e)) == e ? e : 0), Yi(as(t), e, i)
        }, Ei.clone = function(t) {
          return Vi(t, 4)
        }, Ei.cloneDeep = function(t) {
          return Vi(t, 5)
        }, Ei.cloneDeepWith = function(t, e) {
          return Vi(t, 5, e = "function" == typeof e ? e : void 0)
        }, Ei.cloneWith = function(t, e) {
          return Vi(t, 4, e = "function" == typeof e ? e : void 0)
        }, Ei.conformsTo = function(t, e) {
          return null == e || Ji(t, e, ws(e))
        }, Ei.deburr = Cs, Ei.defaultTo = function(t, e) {
          return null == t || t != t ? e : t
        }, Ei.divide = ll, Ei.endsWith = function(t, e, i) {
          t = ss(t), e = Xn(e);
          var n = t.length,
            r = i = void 0 === i ? n : Yi(ns(i), 0, n);
          return (i -= e.length) >= 0 && t.slice(i, r) == e
        }, Ei.eq = Do, Ei.escape = function(t) {
          return (t = ss(t)) && H.test(t) ? t.replace(R, Re) : t
        }, Ei.escapeRegExp = function(t) {
          return (t = ss(t)) && G.test(t) ? t.replace(Z, "\\$&") : t
        }, Ei.every = function(t, e, i) {
          var n = No(t) ? he : en;
          return i && sa(t, e, i) && (e = void 0), n(t, Jr(e, 3))
        }, Ei.find = ro, Ei.findIndex = ja, Ei.findKey = function(t, e) {
          return ye(t, Jr(e, 3), ln)
        }, Ei.findLast = ao, Ei.findLastIndex = Ca, Ei.findLastKey = function(t, e) {
          return ye(t, Jr(e, 3), hn)
        }, Ei.floor = hl, Ei.forEach = oo, Ei.forEachRight = so, Ei.forIn = function(t, e) {
          return null == t ? t : on(t, Jr(e, 3), bs)
        }, Ei.forInRight = function(t, e) {
          return null == t ? t : sn(t, Jr(e, 3), bs)
        }, Ei.forOwn = function(t, e) {
          return t && ln(t, Jr(e, 3))
        }, Ei.forOwnRight = function(t, e) {
          return t && hn(t, Jr(e, 3))
        }, Ei.get = _s, Ei.gt = Ao, Ei.gte = jo, Ei.has = function(t, e) {
          return null != t && na(t, e, _n)
        }, Ei.hasIn = ms, Ei.head = Oa, Ei.identity = Zs, Ei.includes = function(t, e, i, n) {
          t = Io(t) ? t : Ds(t), i = i && !n ? ns(i) : 0;
          var r = t.length;
          return i < 0 && (i = ai(r + i, 0)), Jo(t) ? i <= r && t.indexOf(e, i) > -1 : !!r && be(t, e, i) > -1
        }, Ei.indexOf = function(t, e, i) {
          var n = null == t ? 0 : t.length;
          if (!n) return -1;
          var r = null == i ? 0 : ns(i);
          return r < 0 && (r = ai(n + r, 0)), be(t, e, r)
        }, Ei.inRange = function(t, e, i) {
          return e = is(e), void 0 === i ? (i = e, e = 0) : i = is(i),
            function(t, e, i) {
              return t >= oi(e, i) && t < ai(e, i)
            }(t = as(t), e, i)
        }, Ei.invoke = ys, Ei.isArguments = Co, Ei.isArray = No, Ei.isArrayBuffer = Oo, Ei.isArrayLike = Io, Ei.isArrayLikeObject = zo, Ei.isBoolean = function(t) {
          return !0 === t || !1 === t || Uo(t) && fn(t) == c
        }, Ei.isBuffer = Ro, Ei.isDate = Po, Ei.isElement = function(t) {
          return Uo(t) && 1 === t.nodeType && !Go(t)
        }, Ei.isEmpty = function(t) {
          if (null == t) return !0;
          if (Io(t) && (No(t) || "string" == typeof t || "function" == typeof t.splice || Ro(t) || Ko(t) || Co(t))) return !t.length;
          var e = ia(t);
          if (e == _ || e == y) return !t.size;
          if (ua(t)) return !Tn(t).length;
          for (var i in t)
            if (Tt.call(t, i)) return !1;
          return !0
        }, Ei.isEqual = function(t, e) {
          return wn(t, e)
        }, Ei.isEqualWith = function(t, e, i) {
          var n = (i = "function" == typeof i ? i : void 0) ? i(t, e) : void 0;
          return void 0 === n ? wn(t, e, void 0, i) : !!n
        }, Ei.isError = Ho, Ei.isFinite = function(t) {
          return "number" == typeof t && ii(t)
        }, Ei.isFunction = qo, Ei.isInteger = Fo, Ei.isLength = Bo, Ei.isMap = $o, Ei.isMatch = function(t, e) {
          return t === e || bn(t, e, Kr(e))
        }, Ei.isMatchWith = function(t, e, i) {
          return i = "function" == typeof i ? i : void 0, bn(t, e, Kr(e), i)
        }, Ei.isNaN = function(t) {
          return Zo(t) && t != +t
        }, Ei.isNative = function(t) {
          if (ca(t)) throw new dt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
          return xn(t)
        }, Ei.isNil = function(t) {
          return null == t
        }, Ei.isNull = function(t) {
          return null === t
        }, Ei.isNumber = Zo, Ei.isObject = Wo, Ei.isObjectLike = Uo, Ei.isPlainObject = Go, Ei.isRegExp = Yo, Ei.isSafeInteger = function(t) {
          return Fo(t) && t >= -9007199254740991 && t <= 9007199254740991
        }, Ei.isSet = Vo, Ei.isString = Jo, Ei.isSymbol = Xo, Ei.isTypedArray = Ko, Ei.isUndefined = function(t) {
          return void 0 === t
        }, Ei.isWeakMap = function(t) {
          return Uo(t) && ia(t) == x
        }, Ei.isWeakSet = function(t) {
          return Uo(t) && "[object WeakSet]" == fn(t)
        }, Ei.join = function(t, e) {
          return null == t ? "" : ni.call(t, e)
        }, Ei.kebabCase = Ns, Ei.last = Pa, Ei.lastIndexOf = function(t, e, i) {
          var n = null == t ? 0 : t.length;
          if (!n) return -1;
          var r = n;
          return void 0 !== i && (r = (r = ns(i)) < 0 ? ai(n + r, 0) : oi(r, n - 1)), e == e ? function(t, e, i) {
            for (var n = i + 1; n--;)
              if (t[n] === e) return n;
            return n
          }(t, e, r) : we(t, ke, r, !0)
        }, Ei.lowerCase = Os, Ei.lowerFirst = Is, Ei.lt = Qo, Ei.lte = ts, Ei.max = function(t) {
          return t && t.length ? nn(t, Zs, pn) : void 0
        }, Ei.maxBy = function(t, e) {
          return t && t.length ? nn(t, Jr(e, 2), pn) : void 0
        }, Ei.mean = function(t) {
          return Te(t, Zs)
        }, Ei.meanBy = function(t, e) {
          return Te(t, Jr(e, 2))
        }, Ei.min = function(t) {
          return t && t.length ? nn(t, Zs, Ln) : void 0
        }, Ei.minBy = function(t, e) {
          return t && t.length ? nn(t, Jr(e, 2), Ln) : void 0
        }, Ei.stubArray = rl, Ei.stubFalse = al, Ei.stubObject = function() {
          return {}
        }, Ei.stubString = function() {
          return ""
        }, Ei.stubTrue = function() {
          return !0
        }, Ei.multiply = ul, Ei.nth = function(t, e) {
          return t && t.length ? jn(t, ns(e)) : void 0
        }, Ei.noConflict = function() {
          return Gt._ === this && (Gt._ = Dt), this
        }, Ei.noop = Xs, Ei.now = _o, Ei.pad = function(t, e, i) {
          t = ss(t);
          var n = (e = ns(e)) ? $e(t) : 0;
          if (!e || n >= e) return t;
          var r = (e - n) / 2;
          return Cr(Qe(r), i) + t + Cr(Ke(r), i)
        }, Ei.padEnd = function(t, e, i) {
          t = ss(t);
          var n = (e = ns(e)) ? $e(t) : 0;
          return e && n < e ? t + Cr(e - n, i) : t
        }, Ei.padStart = function(t, e, i) {
          t = ss(t);
          var n = (e = ns(e)) ? $e(t) : 0;
          return e && n < e ? Cr(e - n, i) + t : t
        }, Ei.parseInt = function(t, e, i) {
          return i || null == e ? e = 0 : e && (e = +e), li(ss(t).replace(V, ""), e || 0)
        }, Ei.random = function(t, e, i) {
          if (i && "boolean" != typeof i && sa(t, e, i) && (e = i = void 0), void 0 === i && ("boolean" == typeof e ? (i = e, e = void 0) : "boolean" == typeof t && (i = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = is(t), void 0 === e ? (e = t, t = 0) : e = is(e)), t > e) {
            var n = t;
            t = e, e = n
          }
          if (i || t % 1 || e % 1) {
            var r = hi();
            return oi(t + r * (e - t + Wt("1e-" + ((r + "").length - 1))), e)
          }
          return zn(t, e)
        }, Ei.reduce = function(t, e, i) {
          var n = No(t) ? _e : Ee,
            r = arguments.length < 3;
          return n(t, Jr(e, 4), i, r, Qi)
        }, Ei.reduceRight = function(t, e, i) {
          var n = No(t) ? me : Ee,
            r = arguments.length < 3;
          return n(t, Jr(e, 4), i, r, tn)
        }, Ei.repeat = function(t, e, i) {
          return e = (i ? sa(t, e, i) : void 0 === e) ? 1 : ns(e), Rn(ss(t), e)
        }, Ei.replace = function() {
          var t = arguments,
            e = ss(t[0]);
          return t.length < 3 ? e : e.replace(t[1], t[2])
        }, Ei.result = function(t, e, i) {
          var n = -1,
            r = (e = sr(e, t)).length;
          for (r || (r = 1, t = void 0); ++n < r;) {
            var a = null == t ? void 0 : t[Ma(e[n])];
            void 0 === a && (n = r, a = i), t = qo(a) ? a.call(t) : a
          }
          return t
        }, Ei.round = dl, Ei.runInContext = t, Ei.sample = function(t) {
          return (No(t) ? Pi : Hn)(t)
        }, Ei.size = function(t) {
          if (null == t) return 0;
          if (Io(t)) return Jo(t) ? $e(t) : t.length;
          var e = ia(t);
          return e == _ || e == y ? t.size : Tn(t).length
        }, Ei.snakeCase = zs, Ei.some = function(t, e, i) {
          var n = No(t) ? ge : Zn;
          return i && sa(t, e, i) && (e = void 0), n(t, Jr(e, 3))
        }, Ei.sortedIndex = function(t, e) {
          return Gn(t, e)
        }, Ei.sortedIndexBy = function(t, e, i) {
          return Yn(t, e, Jr(i, 2))
        }, Ei.sortedIndexOf = function(t, e) {
          var i = null == t ? 0 : t.length;
          if (i) {
            var n = Gn(t, e);
            if (n < i && Do(t[n], e)) return n
          }
          return -1
        }, Ei.sortedLastIndex = function(t, e) {
          return Gn(t, e, !0)
        }, Ei.sortedLastIndexBy = function(t, e, i) {
          return Yn(t, e, Jr(i, 2), !0)
        }, Ei.sortedLastIndexOf = function(t, e) {
          if (null == t ? 0 : t.length) {
            var i = Gn(t, e, !0) - 1;
            if (Do(t[i], e)) return i
          }
          return -1
        }, Ei.startCase = Rs, Ei.startsWith = function(t, e, i) {
          return t = ss(t), i = null == i ? 0 : Yi(ns(i), 0, t.length), e = Xn(e), t.slice(i, i + e.length) == e
        }, Ei.subtract = fl, Ei.sum = function(t) {
          return t && t.length ? Se(t, Zs) : 0
        }, Ei.sumBy = function(t, e) {
          return t && t.length ? Se(t, Jr(e, 2)) : 0
        }, Ei.template = function(t, e, i) {
          var n = Ei.templateSettings;
          i && sa(t, e, i) && (e = void 0), t = ss(t), e = cs({}, e, n, qr);
          var r, a, o = cs({}, e.imports, n.imports, qr),
            s = ws(o),
            l = je(o, s),
            h = 0,
            c = e.interpolate || ct,
            u = "__p += '",
            d = mt((e.escape || ct).source + "|" + c.source + "|" + (c === B ? it : ct).source + "|" + (e.evaluate || ct).source + "|$", "g"),
            f = "//# sourceURL=" + (Tt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++Ht + "]") + "\n";
          t.replace(d, (function(e, i, n, o, s, l) {
            return n || (n = o), u += t.slice(h, l).replace(ut, Pe), i && (r = !0, u += "' +\n__e(" + i + ") +\n'"), s && (a = !0, u += "';\n" + s + ";\n__p += '"), n && (u += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), h = l + e.length, e
          })), u += "';\n";
          var p = Tt.call(e, "variable") && e.variable;
          p || (u = "with (obj) {\n" + u + "\n}\n"), u = (a ? u.replace(N, "") : u).replace(O, "$1").replace(I, "$1;"), u = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + u + "return __p\n}";
          var _ = Fs((function() {
            return ft(s, f + "return " + u).apply(void 0, l)
          }));
          if (_.source = u, Ho(_)) throw _;
          return _
        }, Ei.times = function(t, e) {
          if ((t = ns(t)) < 1 || t > 9007199254740991) return [];
          var i = 4294967295,
            n = oi(t, 4294967295);
          t -= 4294967295;
          for (var r = De(n, e = Jr(e)); ++i < t;) e(i);
          return r
        }, Ei.toFinite = is, Ei.toInteger = ns, Ei.toLength = rs, Ei.toLower = function(t) {
          return ss(t).toLowerCase()
        }, Ei.toNumber = as, Ei.toSafeInteger = function(t) {
          return t ? Yi(ns(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0
        }, Ei.toString = ss, Ei.toUpper = function(t) {
          return ss(t).toUpperCase()
        }, Ei.trim = function(t, e, i) {
          if ((t = ss(t)) && (i || void 0 === e)) return t.replace(Y, "");
          if (!t || !(e = Xn(e))) return t;
          var n = Ze(t),
            r = Ze(e);
          return hr(n, Ne(n, r), Oe(n, r) + 1).join("")
        }, Ei.trimEnd = function(t, e, i) {
          if ((t = ss(t)) && (i || void 0 === e)) return t.replace(J, "");
          if (!t || !(e = Xn(e))) return t;
          var n = Ze(t);
          return hr(n, 0, Oe(n, Ze(e)) + 1).join("")
        }, Ei.trimStart = function(t, e, i) {
          if ((t = ss(t)) && (i || void 0 === e)) return t.replace(V, "");
          if (!t || !(e = Xn(e))) return t;
          var n = Ze(t);
          return hr(n, Ne(n, Ze(e))).join("")
        }, Ei.truncate = function(t, e) {
          var i = 30,
            n = "...";
          if (Wo(e)) {
            var r = "separator" in e ? e.separator : r;
            i = "length" in e ? ns(e.length) : i, n = "omission" in e ? Xn(e.omission) : n
          }
          var a = (t = ss(t)).length;
          if (He(t)) {
            var o = Ze(t);
            a = o.length
          }
          if (i >= a) return t;
          var s = i - $e(n);
          if (s < 1) return n;
          var l = o ? hr(o, 0, s).join("") : t.slice(0, s);
          if (void 0 === r) return l + n;
          if (o && (s += l.length - s), Yo(r)) {
            if (t.slice(s).search(r)) {
              var h, c = l;
              for (r.global || (r = mt(r.source, ss(nt.exec(r)) + "g")), r.lastIndex = 0; h = r.exec(c);) var u = h.index;
              l = l.slice(0, void 0 === u ? s : u)
            }
          } else if (t.indexOf(Xn(r), s) != s) {
            var d = l.lastIndexOf(r);
            d > -1 && (l = l.slice(0, d))
          }
          return l + n
        }, Ei.unescape = function(t) {
          return (t = ss(t)) && P.test(t) ? t.replace(z, Ge) : t
        }, Ei.uniqueId = function(t) {
          var e = ++Mt;
          return ss(t) + e
        }, Ei.upperCase = Ps, Ei.upperFirst = Hs, Ei.each = oo, Ei.eachRight = so, Ei.first = Oa, Js(Ei, (cl = {}, ln(Ei, (function(t, e) {
          Tt.call(Ei.prototype, e) || (cl[e] = t)
        })), cl), {
          chain: !1
        }), Ei.VERSION = "4.17.15", se(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
          Ei[t].placeholder = Ei
        })), se(["drop", "take"], (function(t, e) {
          ji.prototype[t] = function(i) {
            i = void 0 === i ? 1 : ai(ns(i), 0);
            var n = this.__filtered__ && !e ? new ji(this) : this.clone();
            return n.__filtered__ ? n.__takeCount__ = oi(i, n.__takeCount__) : n.__views__.push({
              size: oi(i, 4294967295),
              type: t + (n.__dir__ < 0 ? "Right" : "")
            }), n
          }, ji.prototype[t + "Right"] = function(e) {
            return this.reverse()[t](e).reverse()
          }
        })), se(["filter", "map", "takeWhile"], (function(t, e) {
          var i = e + 1,
            n = 1 == i || 3 == i;
          ji.prototype[t] = function(t) {
            var e = this.clone();
            return e.__iteratees__.push({
              iteratee: Jr(t, 3),
              type: i
            }), e.__filtered__ = e.__filtered__ || n, e
          }
        })), se(["head", "last"], (function(t, e) {
          var i = "take" + (e ? "Right" : "");
          ji.prototype[t] = function() {
            return this[i](1).value()[0]
          }
        })), se(["initial", "tail"], (function(t, e) {
          var i = "drop" + (e ? "" : "Right");
          ji.prototype[t] = function() {
            return this.__filtered__ ? new ji(this) : this[i](1)
          }
        })), ji.prototype.compact = function() {
          return this.filter(Zs)
        }, ji.prototype.find = function(t) {
          return this.filter(t).head()
        }, ji.prototype.findLast = function(t) {
          return this.reverse().find(t)
        }, ji.prototype.invokeMap = Pn((function(t, e) {
          return "function" == typeof t ? new ji(this) : this.map((function(i) {
            return vn(i, t, e)
          }))
        })), ji.prototype.reject = function(t) {
          return this.filter(To(Jr(t)))
        }, ji.prototype.slice = function(t, e) {
          t = ns(t);
          var i = this;
          return i.__filtered__ && (t > 0 || e < 0) ? new ji(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), void 0 !== e && (i = (e = ns(e)) < 0 ? i.dropRight(-e) : i.take(e - t)), i)
        }, ji.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse()
        }, ji.prototype.toArray = function() {
          return this.take(4294967295)
        }, ln(ji.prototype, (function(t, e) {
          var i = /^(?:filter|find|map|reject)|While$/.test(e),
            n = /^(?:head|last)$/.test(e),
            r = Ei[n ? "take" + ("last" == e ? "Right" : "") : e],
            a = n || /^find/.test(e);
          r && (Ei.prototype[e] = function() {
            var e = this.__wrapped__,
              o = n ? [1] : arguments,
              s = e instanceof ji,
              l = o[0],
              h = s || No(e),
              c = function(t) {
                var e = r.apply(Ei, pe([t], o));
                return n && u ? e[0] : e
              };
            h && i && "function" == typeof l && 1 != l.length && (s = h = !1);
            var u = this.__chain__,
              d = !!this.__actions__.length,
              f = a && !u,
              p = s && !d;
            if (!a && h) {
              e = p ? e : new ji(this);
              var _ = t.apply(e, o);
              return _.__actions__.push({
                func: eo,
                args: [c],
                thisArg: void 0
              }), new Ai(_, u)
            }
            return f && p ? t.apply(this, o) : (_ = this.thru(c), f ? n ? _.value()[0] : _.value() : _)
          })
        })), se(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
          var e = yt[t],
            i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
            n = /^(?:pop|shift)$/.test(t);
          Ei.prototype[t] = function() {
            var t = arguments;
            if (n && !this.__chain__) {
              var r = this.value();
              return e.apply(No(r) ? r : [], t)
            }
            return this[i]((function(i) {
              return e.apply(No(i) ? i : [], t)
            }))
          }
        })), ln(ji.prototype, (function(t, e) {
          var i = Ei[e];
          if (i) {
            var n = i.name + "";
            Tt.call(vi, n) || (vi[n] = []), vi[n].push({
              name: e,
              func: i
            })
          }
        })), vi[Sr(void 0, 2).name] = [{
          name: "wrapper",
          func: void 0
        }], ji.prototype.clone = function() {
          var t = new ji(this.__wrapped__);
          return t.__actions__ = gr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = gr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = gr(this.__views__), t
        }, ji.prototype.reverse = function() {
          if (this.__filtered__) {
            var t = new ji(this);
            t.__dir__ = -1, t.__filtered__ = !0
          } else(t = this.clone()).__dir__ *= -1;
          return t
        }, ji.prototype.value = function() {
          var t = this.__wrapped__.value(),
            e = this.__dir__,
            i = No(t),
            n = e < 0,
            r = i ? t.length : 0,
            a = function(t, e, i) {
              var n = -1,
                r = i.length;
              for (; ++n < r;) {
                var a = i[n],
                  o = a.size;
                switch (a.type) {
                  case "drop":
                    t += o;
                    break;
                  case "dropRight":
                    e -= o;
                    break;
                  case "take":
                    e = oi(e, t + o);
                    break;
                  case "takeRight":
                    t = ai(t, e - o)
                }
              }
              return {
                start: t,
                end: e
              }
            }(0, r, this.__views__),
            o = a.start,
            s = a.end,
            l = s - o,
            h = n ? s : o - 1,
            c = this.__iteratees__,
            u = c.length,
            d = 0,
            f = oi(l, this.__takeCount__);
          if (!i || !n && r == l && f == l) return ir(t, this.__actions__);
          var p = [];
          t: for (; l-- && d < f;) {
            for (var _ = -1, m = t[h += e]; ++_ < u;) {
              var g = c[_],
                v = g.iteratee,
                y = g.type,
                w = v(m);
              if (2 == y) m = w;
              else if (!w) {
                if (1 == y) continue t;
                break t
              }
            }
            p[d++] = m
          }
          return p
        }, Ei.prototype.at = io, Ei.prototype.chain = function() {
          return to(this)
        }, Ei.prototype.commit = function() {
          return new Ai(this.value(), this.__chain__)
        }, Ei.prototype.next = function() {
          void 0 === this.__values__ && (this.__values__ = es(this.value()));
          var t = this.__index__ >= this.__values__.length;
          return {
            done: t,
            value: t ? void 0 : this.__values__[this.__index__++]
          }
        }, Ei.prototype.plant = function(t) {
          for (var e, i = this; i instanceof Di;) {
            var n = Ea(i);
            n.__index__ = 0, n.__values__ = void 0, e ? r.__wrapped__ = n : e = n;
            var r = n;
            i = i.__wrapped__
          }
          return r.__wrapped__ = t, e
        }, Ei.prototype.reverse = function() {
          var t = this.__wrapped__;
          if (t instanceof ji) {
            var e = t;
            return this.__actions__.length && (e = new ji(this)), (e = e.reverse()).__actions__.push({
              func: eo,
              args: [Ba],
              thisArg: void 0
            }), new Ai(e, this.__chain__)
          }
          return this.thru(Ba)
        }, Ei.prototype.toJSON = Ei.prototype.valueOf = Ei.prototype.value = function() {
          return ir(this.__wrapped__, this.__actions__)
        }, Ei.prototype.first = Ei.prototype.head, Kt && (Ei.prototype[Kt] = function() {
          return this
        }), Ei
      }();
      Gt._ = Ye, void 0 === (r = function() {
        return Ye
      }.call(e, i, e, n)) || (n.exports = r)
    }).call(this)
  }).call(this, i(3), i(4)(t))
}, function(t, e) {
  var i;
  i = function() {
    return this
  }();
  try {
    i = i || new Function("return this")()
  } catch (t) {
    "object" == typeof window && (i = window)
  }
  t.exports = i
}, function(t, e) {
  t.exports = function(t) {
    return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function() {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function() {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function(t, e, i) {
  "use strict";
  i.r(e), i.d(e, "Timeline", (function() {
    return $e
  })), i.d(e, "parseGoogleSpreadsheetURL", (function() {
    return Yt
  }));
  const r = navigator ? navigator.userAgent.toLowerCase() : "no-user-agent-specified",
    a = document ? document.documentElement : null,
    o = !!r && -1 !== r.indexOf("phantom"),
    s = window && "ActiveXObject" in window,
    l = (Boolean(s && r.match(/MSIE 9/i)), s && document && document.addEventListener, -1 !== r.indexOf("webkit")),
    h = (r.indexOf("android"), -1 !== r.search("android [23]")),
    c = !!window && void 0 !== window.orientation,
    u = !(!navigator || !window) && (navigator.msPointerEnabled && navigator.msMaxTouchPoints && !window.PointerEvent),
    d = navigator && window ? window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints : u,
    f = !!window && window.opera,
    p = (r.indexOf("gecko"), -1 !== r.indexOf("gecko") && !l && !f && !s),
    _ = (r.indexOf("chrome"), -1 !== r.indexOf("edge/")),
    m = !!a && (s && "transition" in a.style),
    g = !!window && ("WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !h),
    v = !!a && "MozPerspective" in a.style,
    y = !!a && "OTransition" in a.style;
  window && window.L_DISABLE_3D, c && window.opera;
  let w = !!window && ("devicePixelRatio" in window && window.devicePixelRatio > 1);
  if (!w && window && "matchMedia" in window) {
    var b = window.matchMedia("(min-resolution:144dpi)");
    w = b && b.matches
  }
  const x = window && !window.L_NO_TOUCH && !o && (d || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch);

  function T(t) {
    return "string" == typeof t ? document.getElementById(t) : t
  }

  function M(t, e, i) {
    var n = document.createElement(t);
    return n.className = e, i && i.appendChild(n), n
  }

  function L(t) {
    for (var e = {
        x: 0,
        y: 0
      }; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e.x += t.offsetLeft, e.y += t.offsetTop, t = t.offsetParent;
    return e
  }

  function E(t) {
    for (var e = document.documentElement.style, i = 0; i < t.length; i++)
      if (t[i] in e) return t[i];
    return !1
  }
  E(["transition", "webkitTransition", "OTransition", "MozTransition", "msTransition"]), E(["transformProperty", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);

  function S(t, e) {
    (function(t, e) {
      return t.className.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
    })(t, e) || (t.className += (t.className ? " " : "") + e)
  }

  function D(t, e) {
    t.className = t.className.replace(/(\S+)\s*/g, (function(t, i) {
      return i === e ? "" : t
    })).replace(/^\s+/, "")
  }
  class A extends Error {
    constructor(t, e) {
      super(), this.name = "TLError", this.message = t || "error", this.message_key = this.message, this.detail = e || ""
    }
  }
  const j = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };

  function C(t) {
    j[t.toLowerCase()] && (t = j[t.toLowerCase()]);
    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, i, n) {
      return e + e + i + i + n + n
    }));
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e ? {
      r: parseInt(e[1], 16),
      g: parseInt(e[2], 16),
      b: parseInt(e[3], 16)
    } : null
  }

  function N(t, e) {
    var i;
    for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t
  }

  function O(t) {
    for (var e = Array.prototype.slice.call(arguments, 1), i = 0, n = e.length; i < n; i++) N(t, e[i] || {});
    return t
  }
  const I = [];

  function z(t) {
    I.forEach(e => {
      try {
        e(t)
      } catch (t) {
        console && console.log && console.log("Error handling trace", t)
      }
    })
  }

  function R(t, e) {
    for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
    return t
  }
  const P = (H = 0, q = "_tl_id", function(t) {
    return t[q] = t[q] || ++H, t[q]
  });
  var H, q;

  function F(t) {
    return t && "function" == typeof t.replace ? t.replace(/^\s+|\s+$/g, "") : ""
  }

  function B(t, ...e) {
    for (let n of e)
      for (var i of Object.getOwnPropertyNames(n.prototype)) t.prototype[i] = n.prototype[i]
  }

  function W(t) {
    var e = [];
    if (Object.keys) e = Object.keys(t);
    else
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      if (null != t[r] && "string" != typeof t[r]) return !1;
      if (0 != F(t[r]).length) return !1
    }
    return !0
  }

  function U(t) {
    t = (t = F(t)).toLowerCase();
    for (var e = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;", i = 0, n = e.length; i < n; i++) t = t.replace(new RegExp(e.charAt(i), "g"), "aaaaaeeeeeiiiiooooouuuunc------".charAt(i));
    return t = (t = t.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")).replace(/^([0-9])/, "_$1")
  }

  function $(t, e) {
    var i = function() {
        var t;
        return "abcdefghijklmnopqurstuvwxyz".substr((t = 32, Math.floor(Math.random() * t)), 1)
      },
      n = function(t) {
        for (var e = "", n = 0; n < t; n++) e += i();
        return e
      };
    return e ? e + "-" + n(t) : "tl-" + n(t)
  }

  function Z(t) {
    return t == parseFloat(t) ? !(t % 2) : void 0
  }

  function G(t, e, i, n) {
    for (var r = n || 0, a = 0; a < e.length; a++) e[a].data[i] == t && (r = a);
    return r
  }

  function Y(t) {
    return t ? t = (t = t.replace(/<a\b[^>]*>/i, "")).replace(/<\/a>/i, "") : t
  }

  function V(t) {
    return (t = t.replace(/(<[^>]*>)+/g, "")).replace('"', "'")
  }

  function J(t, e, i) {
    var n = function(t, e, i) {
      i || (i = "");
      return e && e.length > 30 && (e = e.substring(0, 30) + "…"), i + "<a class='tl-makelink' href='" + t + "' onclick='void(0)'>" + e + "</a>"
    };
    return t.replace(/\b(?:https?|ftp):\/\/([a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|])/gim, (function(t, e, i, r) {
      if (i > 0) {
        var a = r[i - 1];
        if ('"' == a || "'" == a || "=" == a) return t
      }
      return n(t, e)
    })).replace(/(^|[^\/>])(www\.[\S]+(\b|$))/gim, (function(t, e, i, r, a) {
      return n("http://" + i, i, e)
    })).replace(/([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gim, (function(t, e, i, r) {
      return n("mailto:" + e, e)
    }))
  }

  function X(t) {
    return t.replace(/(.*)www.dropbox.com\/(.*)/, "$1dl.dropboxusercontent.com/$2")
  }
  const K = t => {
      var e = {
        w: 0,
        h: 0
      };
      return t.w > t.h && t.h > 0 ? (e.h = t.h, e.w = t.h) : (e.w = t.w, e.h = t.w), e
    },
    Q = t => null !== t.w && "" !== t.w ? Math.round(t.w / 16 * 9) : null !== t.h && "" !== t.h ? Math.round(t.h / 9 * 16) : 0;
  let tt = (it = (et = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ").length, {
    encode: function(t) {
      if ("number" != typeof t || t !== parseInt(t)) throw '"encode" only accepts integers.';
      for (var e = ""; t;) {
        var i = t % it;
        t = Math.floor(t / it), e = et[i].toString() + e
      }
      return e
    },
    decode: function(t) {
      if ("string" != typeof t) throw '"decode" only accepts strings.';
      for (var e = 0; t;) {
        var i = et.indexOf(t[0]);
        if (i < 0) throw '"decode" can\'t find "' + t[0] + '" in the alphabet: "' + et + '"';
        var n = t.length - 1;
        e += i * Math.pow(it, n), t = t.substring(1)
      }
      return e
    }
  });
  var et, it;

  function nt(t) {
    if ("string" == typeof t) {
      let n = t.match(/^\s*(\d+h)?(\d+m)?(\d+s)?\s*/i);
      if (n) {
        var e = parseInt(n[1]) || 0,
          i = parseInt(n[2]) || 0;
        return (parseInt(n[3]) || 0) + 60 * i + 60 * e * 60
      }
    } else if ("number" == typeof t) return t;
    return 0
  }

  function rt(t) {
    return (new DOMParser).parseFromString(t, "text/html").body.textContent || ""
  }
  const at = [.42, 0, 1, 1];

  function ot(t) {}

  function st(t) {
    return new ot(at).get(t)
  }

  function lt(t) {
    return 1 == t ? 1 : 1 - Math.pow(2, -10 * t)
  }

  function ht(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
  }
  let ct = function() {};
  ct.extend = function(t) {
    var e = function() {
        this.initialize && this.initialize.apply(this, arguments)
      },
      i = function() {};
    i.prototype = this.prototype;
    var n = new i;
    for (var r in n.constructor = e, e.prototype = n, e.superclass = this.prototype, this) this.hasOwnProperty(r) && "prototype" !== r && "superclass" !== r && (e[r] = this[r]);
    return t.statics && (O(e, t.statics), delete t.statics), t.includes && (O.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = O({}, n.options, t.options)), O(n, t), e.extend = ct.extend, e.include = function(t) {
      O(this.prototype, t)
    }, e
  };
  class ut {
    on(t, e, i) {
      if (!e) throw new A("No callback function provided");
      var n = this._tl_events = this._tl_events || {};
      return n[t] = n[t] || [], n[t].push({
        action: e,
        context: i || this
      }), this
    }
    addEventListener(t, e, i) {
      return this.on(t, e, i)
    }
    hasEventListeners(t) {
      var e = "_tl_events";
      return e in this && t in this[e] && this[e][t].length > 0
    }
    removeEventListener(t, e, i) {
      if (!this.hasEventListeners(t)) return this;
      for (var n = 0, r = this._tl_events, a = r[t].length; n < a; n++)
        if (r[t][n].action === e && (!i || r[t][n].context === i)) return r[t].splice(n, 1), this;
      return this
    }
    off(t, e, i) {
      return this.removeEventListener(t, e, i)
    }
    fire(t, e) {
      if (!this.hasEventListeners(t)) return this;
      for (var i = N({
          type: t,
          target: this
        }, e), n = this._tl_events[t].slice(), r = 0, a = n.length; r < a; r++) n[r].action ? n[r].action.call(n[r].context || this, i) : console.log("no action defined for listener");
      return this
    }
    fireEvent(t, e) {
      return this.fire(t, e)
    }
  }

  function dt(t, e) {
    return ft(t, e)
  }
  const ft = function() {
    var t = document,
      e = window,
      i = e.performance,
      n = i && (i.now || i.webkitNow || i.msNow || i.mozNow),
      r = n ? function() {
        return n.call(i)
      } : function() {
        return +new Date
      },
      a = t.documentElement,
      o = !1,
      s = /^rgb\(|#/,
      l = /^([+\-])=([\d\.]+)/,
      h = /^(?:[\+\-]=?)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/,
      c = /rotate\(((?:[+\-]=)?([\-\d\.]+))deg\)/,
      u = /scale\(((?:[+\-]=)?([\d\.]+))\)/,
      d = /skew\(((?:[+\-]=)?([\-\d\.]+))deg, ?((?:[+\-]=)?([\-\d\.]+))deg\)/,
      f = /translate\(((?:[+\-]=)?([\-\d\.]+))px, ?((?:[+\-]=)?([\-\d\.]+))px\)/,
      p = {
        lineHeight: 1,
        zoom: 7,
        zIndex: 1,
        opacity: 1,
        transform: 1
      },
      _ = function() {
        var e, i = t.createElement("a").style,
          n = ["webkitTransform", "MozTransform", "OTransform", "msTransform", "Transform"];
        for (e = 0; e < n.length; e++)
          if (n[e] in i) return n[e]
      }(),
      m = void 0 !== t.createElement("a").style.opacity,
      g = t.defaultView && t.defaultView.getComputedStyle ? function(e, i) {
        i = M(i = "transform" == i ? _ : i);
        var n = null,
          r = t.defaultView.getComputedStyle(e, "");
        return r && (n = r[i]), e.style[i] || n
      } : a.currentStyle ? function(t, e) {
        if ("opacity" == (e = M(e))) {
          var i = 100;
          try {
            i = t.filters["DXImageTransform.Microsoft.Alpha"].opacity
          } catch (e) {
            try {
              i = t.filters("alpha").opacity
            } catch (t) {}
          }
          return i / 100
        }
        var n = t.currentStyle ? t.currentStyle[e] : null;
        return t.style[e] || n
      } : function(t, e) {
        return t.style[M(e)]
      },
      v = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
        e.setTimeout((function() {
          t(+new Date)
        }), 17)
      },
      y = [];

    function w(t) {
      var e, i = y.length;
      for (n && t > 1e12 && (t = r()), o && (t = r()), e = i; e--;) y[e](t);
      y.length && v(w)
    }

    function b(t) {
      var e, i = function(t, e, i) {
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (i = 0; i < t.length; ++i)
          if (t[i] === e) return i
      }(y, t);
      i >= 0 && (e = y.slice(i + 1), y.length = i, y = y.concat(e))
    }

    function x(t, e) {
      var i, n = {};
      return (i = t.match(c)) && (n.rotate = j(i[1], e ? e.rotate : null)), (i = t.match(u)) && (n.scale = j(i[1], e ? e.scale : null)), (i = t.match(d)) && (n.skewx = j(i[1], e ? e.skewx : null), n.skewy = j(i[3], e ? e.skewy : null)), (i = t.match(f)) && (n.translatex = j(i[1], e ? e.translatex : null), n.translatey = j(i[3], e ? e.translatey : null)), n
    }

    function k(t) {
      var e = "";
      return "rotate" in t && (e += "rotate(" + t.rotate + "deg) "), "scale" in t && (e += "scale(" + t.scale + ") "), "translatex" in t && (e += "translate(" + t.translatex + "px," + t.translatey + "px) "), "skewx" in t && (e += "skew(" + t.skewx + "deg," + t.skewy + "deg)"), e
    }

    function T(t) {
      var e, i, n, r = t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      return (r ? (e = r[1], i = r[2], n = r[3], "#" + (1 << 24 | e << 16 | i << 8 | n).toString(16).slice(1)) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
    }

    function M(t) {
      return t.replace(/-(.)/g, (function(t, e) {
        return e.toUpperCase()
      }))
    }

    function L(t) {
      return "function" == typeof t
    }

    function E(t) {
      return Math.sin(t * Math.PI / 2)
    }

    function S(t, e, i, n, a, o) {
      n = L(n) ? n : C.easings[n] || E;
      var s, l = t || 1e3,
        h = this,
        c = o - a,
        u = r(),
        d = 0,
        f = 0;
      return s = function t(r) {
        var s = r - u;
        if (s > l || d) return o = isFinite(o) ? o : 1, d ? f && e(o) : e(o), b(t), i && i.apply(h);
        isFinite(o) ? e(c * n(s / l) + a) : e(n(s / l))
      }, 1 === y.push(s) && v(w), {
        stop: function(t) {
          d = 1, f = t, t || (i = null)
        }
      }
    }

    function D(t, e) {
      var i, n, r = t.length,
        a = [];
      for (i = 0; i < r; ++i) a[i] = [t[i][0], t[i][1]];
      for (n = 1; n < r; ++n)
        for (i = 0; i < r - n; ++i) a[i][0] = (1 - e) * a[i][0] + e * a[parseInt(i + 1, 10)][0], a[i][1] = (1 - e) * a[i][1] + e * a[parseInt(i + 1, 10)][1];
      return [a[0][0], a[0][1]]
    }

    function A(t, e, i, n, r, a, o) {
      if ("transform" == r) {
        for (var s in o = {}, i[a][r]) o[s] = s in n[a][r] ? Math.round(1e3 * ((n[a][r][s] - i[a][r][s]) * t + i[a][r][s])) / 1e3 : i[a][r][s];
        return o
      }
      return "string" == typeof i[a][r] ? function(t, e, i) {
        var n, r, a, o, s = [];
        for (n = 0; n < 6; n++) a = Math.min(15, parseInt(e.charAt(n), 16)), o = Math.min(15, parseInt(i.charAt(n), 16)), r = (r = Math.floor((o - a) * t + a)) > 15 ? 15 : r < 0 ? 0 : r, s[n] = r.toString(16);
        return "#" + s.join("")
      }(t, i[a][r], n[a][r]) : (o = Math.round(1e3 * ((n[a][r] - i[a][r]) * t + i[a][r])) / 1e3, r in p || (o += e[a][r] || "px"), o)
    }

    function j(t, e, i, n, r) {
      return (i = l.exec(t)) ? (r = parseFloat(i[2])) && e + ("+" == i[1] ? 1 : -1) * r : parseFloat(t)
    }

    function C(t, e) {
      var i, n, r, a = t ? a = isFinite(t.length) ? t : [t] : [],
        o = e.complete,
        l = e.duration,
        c = e.easing,
        u = e.bezier,
        d = [],
        f = [],
        p = [],
        v = [];
      for (u && (n = e.left, r = e.top, delete e.right, delete e.bottom, delete e.left, delete e.top), i = a.length; i--;) {
        if (d[i] = {}, f[i] = {}, p[i] = {}, u) {
          var y = g(a[i], "left"),
            w = g(a[i], "top"),
            b = [j(L(n) ? n(a[i]) : n || 0, parseFloat(y)), j(L(r) ? r(a[i]) : r || 0, parseFloat(w))];
          v[i] = L(u) ? u(a[i], b) : u, v[i].push(b), v[i].unshift([parseInt(y, 10), parseInt(w, 10)])
        }
        for (var E in e) {
          switch (E) {
            case "complete":
            case "duration":
            case "easing":
            case "bezier":
              continue
          }
          var C, N = g(a[i], E),
            O = L(e[E]) ? e[E](a[i]) : e[E];
          "string" != typeof O || !s.test(O) || s.test(N) ? (d[i][E] = "transform" == E ? x(N) : "string" == typeof O && s.test(O) ? T(N).slice(1) : parseFloat(N), f[i][E] = "transform" == E ? x(O, d[i][E]) : "string" == typeof O && "#" == O.charAt(0) ? T(O).slice(1) : j(O, parseFloat(N)), "string" == typeof O && (C = O.match(h)) && (p[i][E] = C[1])) : delete e[E]
        }
      }
      return S.apply(a, [l, function(t, n, r) {
        for (i = a.length; i--;)
          for (var o in u && (r = D(v[i], t), a[i].style.left = r[0] + "px", a[i].style.top = r[1] + "px"), e) n = A(t, p, d, f, o, i), "transform" == o ? a[i].style[_] = k(n) : "opacity" != o || m ? a[i].style[M(o)] = n : a[i].style.filter = "alpha(opacity=" + 100 * n + ")"
      }, o, c])
    }
    return v((function(t) {
      o = t > 1e12 != r() > 1e12
    })), C.tween = S, C.getStyle = g, C.bezier = D, C.transform = _, C.parseTransform = x, C.formatTransform = k, C.easings = {}, C
  }();
  class pt {
    show(t) {
      t || (this._el.container.style.display = "block")
    }
    hide(t) {
      this._el.container.style.display = "none"
    }
    addTo(t) {
      t.appendChild(this._el.container), this.onAdd()
    }
    removeFrom(t) {
      t.removeChild(this._el.container), this.onRemove()
    }
    animatePosition(t, e) {
      var i = {
        duration: this.options.duration,
        easing: this.options.ease
      };
      for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n] + "px");
      this.animator && this.animator.stop(), this.animator = dt(e, i)
    }
    onLoaded() {
      this.fire("loaded", this.data)
    }
    onAdd() {
      this.fire("added", this.data)
    }
    onRemove() {
      this.fire("removed", this.data)
    }
    setPosition(t, e) {
      for (var i in t) t.hasOwnProperty(i) && (e ? e.style[i] = t[i] + "px" : this._el.container.style[i] = t[i] + "px")
    }
    getPosition() {
      return L(this._el.container)
    }
  }
  class _t {
    constructor(t, e, i) {
      this._el = {
        drag: t,
        move: t
      }, this.mousedrag = {
        down: "mousedown",
        up: "mouseup",
        leave: "mouseleave",
        move: "mousemove"
      }, this.touchdrag = {
        down: "touchstart",
        up: "touchend",
        leave: "mouseleave",
        move: "touchmove"
      }, i && (this._el.move = i), this.options = {
        enable: {
          x: !0,
          y: !0
        },
        constraint: {
          top: !1,
          bottom: !1,
          left: !1,
          right: !1
        },
        momentum_multiplier: 2e3,
        duration: 1e3,
        ease: ht
      }, this.animator = null, this.dragevent = this.mousedrag, x && (this.dragevent = this.touchdrag), this.data = {
        sliding: !1,
        direction: "none",
        pagex: {
          start: 0,
          end: 0
        },
        pagey: {
          start: 0,
          end: 0
        },
        pos: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        },
        new_pos: {
          x: 0,
          y: 0
        },
        new_pos_parent: {
          x: 0,
          y: 0
        },
        time: {
          start: 0,
          end: 0
        },
        touch: !1
      }, N(this.options, e)
    }
    enable(t) {
      this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute"
    }
    disable() {
      gt.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), gt.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this)
    }
    stopMomentum() {
      this.animator && this.animator.stop()
    }
    updateConstraint(t) {
      this.options.constraint = t
    }
    _onDragStart(t) {
      x ? t.originalEvent ? (this.data.pagex.start = t.originalEvent.touches[0].screenX, this.data.pagey.start = t.originalEvent.touches[0].screenY) : (this.data.pagex.start = t.targetTouches[0].screenX, this.data.pagey.start = t.targetTouches[0].screenY) : (this.data.pagex.start = t.pageX, this.data.pagey.start = t.pageY), this.options.enable.x && (this._el.move.style.left = this.data.pagex.start - this._el.move.offsetWidth / 2 + "px"), this.options.enable.y && (this._el.move.style.top = this.data.pagey.start - this._el.move.offsetHeight / 2 + "px"), this.data.pos.start = L(this._el.drag), this.data.time.start = (new Date).getTime(), this.fire("dragstart", this.data), gt.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), gt.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this)
    }
    _onDragEnd(t) {
      this.data.sliding = !1, gt.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), gt.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum()
    }
    _onDragMove(t) {
      t.preventDefault(), this.data.sliding = !0, x ? t.originalEvent ? (this.data.pagex.end = t.originalEvent.touches[0].screenX, this.data.pagey.end = t.originalEvent.touches[0].screenY) : (this.data.pagex.end = t.targetTouches[0].screenX, this.data.pagey.end = t.targetTouches[0].screenY) : (this.data.pagex.end = t.pageX, this.data.pagey.end = t.pageY), this.data.pos.end = L(this._el.drag), this.data.new_pos.x = -(this.data.pagex.start - this.data.pagex.end - this.data.pos.start.x), this.data.new_pos.y = -(this.data.pagey.start - this.data.pagey.end - this.data.pos.start.y), this.options.enable.x && (this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && (this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data)
    }
    _momentum() {
      var t = {
          x: 0,
          y: 0,
          time: 0
        },
        e = {
          x: 0,
          y: 0,
          time: 0
        },
        i = !1;
      t.time = 10 * ((new Date).getTime() - this.data.time.start), e.time = 10 * ((new Date).getTime() - this.data.time.start), e.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), e.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), t.x = Math.round(e.x / e.time), t.y = Math.round(e.y / e.time), this.data.new_pos.x = Math.min(this.data.pos.end.x + t.x), this.data.new_pos.y = Math.min(this.data.pos.end.y + t.y), this.options.enable.x ? this.data.new_pos.x < 0 && (this.data.new_pos.x = 0) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, e.time < 3e3 && (i = !0), Math.abs(e.x) > 1e4 && (this.data.direction = "left", e.x > 0 && (this.data.direction = "right")), Math.abs(e.y) > 1e4 && (this.data.direction = "up", e.y > 0 && (this.data.direction = "down")), this._animateMomentum(), i && this.fire("swipe_" + this.data.direction, this.data)
    }
    _animateMomentum() {
      var t = {
          x: this.data.new_pos.x,
          y: this.data.new_pos.y
        },
        e = {
          duration: this.options.duration,
          easing: lt
        };
      this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (t.y > this.options.constraint.bottom ? t.y = this.options.constraint.bottom : t.y < this.options.constraint.top && (t.y = this.options.constraint.top)), e.top = Math.floor(t.y) + "px"), this.options.enable.x && ((this.options.constraint.left || this.options.constraint.right) && (t.x > this.options.constraint.left ? t.x = this.options.constraint.left : t.x < this.options.constraint.right && (t.x = this.options.constraint.right)), e.left = Math.floor(t.x) + "px"), this.animator = dt(this._el.move, e), this.fire("momentum", this.data)
    }
  }
  B(ut);
  var mt, gt = {
      addListener: function(t, e, i, n) {
        var r = P(i),
          a = "_tl_" + e + r;
        if (!t[a]) {
          var o = function(e) {
            return i.call(n || t, e || gt._getEvent())
          };
          if (x && "dblclick" === e && this.addDoubleTapListener) this.addDoubleTapListener(t, o, r);
          else if ("addEventListener" in t)
            if ("mousewheel" === e) t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1);
            else if ("mouseenter" === e || "mouseleave" === e) {
            var s = o,
              l = "mouseenter" === e ? "mouseover" : "mouseout";
            o = function(e) {
              if (gt._checkMouse(t, e)) return s(e)
            }, t.addEventListener(l, o, !1)
          } else t.addEventListener(e, o, !1);
          else "attachEvent" in t && t.attachEvent("on" + e, o);
          t[a] = o
        }
      },
      removeListener: function(t, e, i) {
        var n = P(i),
          r = "_tl_" + e + n,
          a = t[r];
        a && (x && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[r] = null)
      },
      _checkMouse: function(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;
        try {
          for (; i && i !== t;) i = i.parentNode
        } catch (t) {
          return !1
        }
        return i !== t
      },
      _getEvent: function() {
        var t = window.event;
        if (!t)
          for (var e = arguments.callee.caller; e && (!(t = e.arguments[0]) || window.Event !== t.constructor);) e = e.caller;
        return t
      },
      stopPropagation: function(t) {
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
      },
      disableClickPropagation: function(t) {
        gt.addListener(t, _t.START, gt.stopPropagation), gt.addListener(t, "click", gt.stopPropagation), gt.addListener(t, "dblclick", gt.stopPropagation)
      },
      preventDefault: function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
      },
      stop: function(t) {
        gt.preventDefault(t), gt.stopPropagation(t)
      },
      getWheelDelta: function(t) {
        var e = 0;
        return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
      }
    },
    vt = function() {
      var t, e, i, n, r, a = [],
        o = a.slice,
        s = a.filter,
        l = window.document,
        h = {},
        c = {},
        u = {
          "column-count": 1,
          columns: 1,
          "font-weight": 1,
          "line-height": 1,
          opacity: 1,
          "z-index": 1,
          zoom: 7
        },
        d = /^\s*<(\w+|!)[^>]*>/,
        f = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        _ = /^(?:body|html)$/i,
        m = /([A-Z])/g,
        g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        v = l.createElement("table"),
        y = l.createElement("tr"),
        w = {
          tr: l.createElement("tbody"),
          tbody: v,
          thead: v,
          tfoot: v,
          td: y,
          th: y,
          "*": l.createElement("div")
        },
        b = /complete|loaded|interactive/,
        x = /^[\w-]*$/,
        k = {},
        T = k.toString,
        M = {},
        L = l.createElement("div"),
        E = {
          tabindex: "tabIndex",
          readonly: "readOnly",
          for: "htmlFor",
          class: "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable"
        },
        S = Array.isArray || function(t) {
          return t instanceof Array
        };

      function D(t) {
        return null == t ? String(t) : k[T.call(t)] || "object"
      }

      function A(t) {
        return "function" == D(t)
      }

      function j(t) {
        return null != t && t == t.window
      }

      function C(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
      }

      function N(t) {
        return "object" == D(t)
      }

      function O(t) {
        return N(t) && !j(t) && Object.getPrototypeOf(t) == Object.prototype
      }

      function I(t) {
        return "number" == typeof t.length
      }

      function z(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
      }

      function R(t) {
        return t in c ? c[t] : c[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
      }

      function P(t, e) {
        return "number" != typeof e || u[z(t)] ? e : e + "px"
      }

      function H(t) {
        return "children" in t ? o.call(t.children) : e.map(t.childNodes, (function(t) {
          if (1 == t.nodeType) return t
        }))
      }

      function q(e, i, n) {
        for (t in i) n && (O(i[t]) || S(i[t])) ? (O(i[t]) && !O(e[t]) && (e[t] = {}), S(i[t]) && !S(e[t]) && (e[t] = []), q(e[t], i[t], n)) : void 0 !== i[t] && (e[t] = i[t])
      }

      function F(t, i) {
        return null == i ? e(t) : e(t).filter(i)
      }

      function B(t, e, i, n) {
        return A(e) ? e.call(t, i, n) : e
      }

      function W(t, e, i) {
        null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
      }

      function U(t, e) {
        var i = t.className,
          n = i && void 0 !== i.baseVal;
        if (void 0 === e) return n ? i.baseVal : i;
        n ? i.baseVal = e : t.className = e
      }

      function $(t) {
        var i;
        try {
          return t ? "true" == t || "false" != t && ("null" == t ? null : /^0/.test(t) || isNaN(i = Number(t)) ? /^[\[\{]/.test(t) ? e.parseJSON(t) : t : i) : t
        } catch (e) {
          return t
        }
      }

      function Z(t, e) {
        for (var i in e(t), t.childNodes) Z(t.childNodes[i], e)
      }
      return M.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (i) return i.call(t, e);
        var n, r = t.parentNode,
          a = !r;
        return a && (r = L).appendChild(t), n = ~M.qsa(r, e).indexOf(t), a && L.removeChild(t), n
      }, n = function(t) {
        return t.replace(/-+(.)?/g, (function(t, e) {
          return e ? e.toUpperCase() : ""
        }))
      }, r = function(t) {
        return s.call(t, (function(e, i) {
          return t.indexOf(e) == i
        }))
      }, M.fragment = function(t, i, n) {
        var r, a, s;
        return f.test(t) && (r = e(l.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(p, "<$1></$2>")), void 0 === i && (i = d.test(t) && RegExp.$1), i in w || (i = "*"), (s = w[i]).innerHTML = "" + t, r = e.each(o.call(s.childNodes), (function() {
          s.removeChild(this)
        }))), O(n) && (a = e(r), e.each(n, (function(t, e) {
          g.indexOf(t) > -1 ? a[t](e) : a.attr(t, e)
        }))), r
      }, M.Z = function(t, i) {
        return (t = t || []).__proto__ = e.fn, t.selector = i || "", t
      }, M.isZ = function(t) {
        return t instanceof M.Z
      }, M.init = function(t, i) {
        var n, r;
        if (!t) return M.Z();
        if ("string" == typeof t)
          if ("<" == (t = t.trim())[0] && d.test(t)) n = M.fragment(t, RegExp.$1, i), t = null;
          else {
            if (void 0 !== i) return e(i).find(t);
            n = M.qsa(l, t)
          }
        else {
          if (A(t)) return e(l).ready(t);
          if (M.isZ(t)) return t;
          if (S(t)) r = t, n = s.call(r, (function(t) {
            return null != t
          }));
          else if (N(t)) n = [t], t = null;
          else if (d.test(t)) n = M.fragment(t.trim(), RegExp.$1, i), t = null;
          else {
            if (void 0 !== i) return e(i).find(t);
            n = M.qsa(l, t)
          }
        }
        return M.Z(n, t)
      }, (e = function(t, e) {
        return M.init(t, e)
      }).extend = function(t) {
        var e, i = o.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach((function(i) {
          q(t, i, e)
        })), t
      }, M.qsa = function(t, e) {
        var i, n = "#" == e[0],
          r = !n && "." == e[0],
          a = n || r ? e.slice(1) : e,
          s = x.test(a);
        return C(t) && s && n ? (i = t.getElementById(a)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(s && !n ? r ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
      }, e.contains = function(t, e) {
        return t !== e && t.contains(e)
      }, e.type = D, e.isFunction = A, e.isWindow = j, e.isArray = S, e.isPlainObject = O, e.isEmptyObject = function(t) {
        var e;
        for (e in t) return !1;
        return !0
      }, e.inArray = function(t, e, i) {
        return a.indexOf.call(e, t, i)
      }, e.camelCase = n, e.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
      }, e.uuid = 0, e.support = {}, e.expr = {}, e.map = function(t, i) {
        var n, r, a, o, s = [];
        if (I(t))
          for (r = 0; r < t.length; r++) null != (n = i(t[r], r)) && s.push(n);
        else
          for (a in t) null != (n = i(t[a], a)) && s.push(n);
        return (o = s).length > 0 ? e.fn.concat.apply([], o) : o
      }, e.each = function(t, e) {
        var i, n;
        if (I(t)) {
          for (i = 0; i < t.length; i++)
            if (!1 === e.call(t[i], i, t[i])) return t
        } else
          for (n in t)
            if (!1 === e.call(t[n], n, t[n])) return t;
        return t
      }, e.grep = function(t, e) {
        return s.call(t, e)
      }, window.JSON && (e.parseJSON = JSON.parse), e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(t, e) {
        k["[object " + e + "]"] = e.toLowerCase()
      })), e.fn = {
        forEach: a.forEach,
        reduce: a.reduce,
        push: a.push,
        sort: a.sort,
        indexOf: a.indexOf,
        concat: a.concat,
        map: function(t) {
          return e(e.map(this, (function(e, i) {
            return t.call(e, i, e)
          })))
        },
        slice: function() {
          return e(o.apply(this, arguments))
        },
        ready: function(t) {
          return b.test(l.readyState) && l.body ? t(e) : l.addEventListener("DOMContentLoaded", (function() {
            t(e)
          }), !1), this
        },
        get: function(t) {
          return void 0 === t ? o.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function() {
          return this.get()
        },
        size: function() {
          return this.length
        },
        remove: function() {
          return this.each((function() {
            null != this.parentNode && this.parentNode.removeChild(this)
          }))
        },
        each: function(t) {
          return a.every.call(this, (function(e, i) {
            return !1 !== t.call(e, i, e)
          })), this
        },
        filter: function(t) {
          return A(t) ? this.not(this.not(t)) : e(s.call(this, (function(e) {
            return M.matches(e, t)
          })))
        },
        add: function(t, i) {
          return e(r(this.concat(e(t, i))))
        },
        is: function(t) {
          return this.length > 0 && M.matches(this[0], t)
        },
        not: function(t) {
          var i = [];
          if (A(t) && void 0 !== t.call) this.each((function(e) {
            t.call(this, e) || i.push(this)
          }));
          else {
            var n = "string" == typeof t ? this.filter(t) : I(t) && A(t.item) ? o.call(t) : e(t);
            this.forEach((function(t) {
              n.indexOf(t) < 0 && i.push(t)
            }))
          }
          return e(i)
        },
        has: function(t) {
          return this.filter((function() {
            return N(t) ? e.contains(this, t) : e(this).find(t).size()
          }))
        },
        eq: function(t) {
          return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
          var t = this[0];
          return t && !N(t) ? t : e(t)
        },
        last: function() {
          var t = this[this.length - 1];
          return t && !N(t) ? t : e(t)
        },
        find: function(t) {
          var i = this;
          return "object" == typeof t ? e(t).filter((function() {
            var t = this;
            return a.some.call(i, (function(i) {
              return e.contains(i, t)
            }))
          })) : 1 == this.length ? e(M.qsa(this[0], t)) : this.map((function() {
            return M.qsa(this, t)
          }))
        },
        closest: function(t, i) {
          var n = this[0],
            r = !1;
          for ("object" == typeof t && (r = e(t)); n && !(r ? r.indexOf(n) >= 0 : M.matches(n, t));) n = n !== i && !C(n) && n.parentNode;
          return e(n)
        },
        parents: function(t) {
          for (var i = [], n = this; n.length > 0;) n = e.map(n, (function(t) {
            if ((t = t.parentNode) && !C(t) && i.indexOf(t) < 0) return i.push(t), t
          }));
          return F(i, t)
        },
        parent: function(t) {
          return F(r(this.pluck("parentNode")), t)
        },
        children: function(t) {
          return F(this.map((function() {
            return H(this)
          })), t)
        },
        contents: function() {
          return this.map((function() {
            return o.call(this.childNodes)
          }))
        },
        siblings: function(t) {
          return F(this.map((function(t, e) {
            return s.call(H(e.parentNode), (function(t) {
              return t !== e
            }))
          })), t)
        },
        empty: function() {
          return this.each((function() {
            this.innerHTML = ""
          }))
        },
        pluck: function(t) {
          return e.map(this, (function(e) {
            return e[t]
          }))
        },
        show: function() {
          return this.each((function() {
            var t, e, i;
            "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, h[t] || (e = l.createElement(t), l.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), h[t] = i), h[t]))
          }))
        },
        replaceWith: function(t) {
          return this.before(t).remove()
        },
        wrap: function(t) {
          var i = A(t);
          if (this[0] && !i) var n = e(t).get(0),
            r = n.parentNode || this.length > 1;
          return this.each((function(a) {
            e(this).wrapAll(i ? t.call(this, a) : r ? n.cloneNode(!0) : n)
          }))
        },
        wrapAll: function(t) {
          if (this[0]) {
            var i;
            for (e(this[0]).before(t = e(t));
              (i = t.children()).length;) t = i.first();
            e(t).append(this)
          }
          return this
        },
        wrapInner: function(t) {
          var i = A(t);
          return this.each((function(n) {
            var r = e(this),
              a = r.contents(),
              o = i ? t.call(this, n) : t;
            a.length ? a.wrapAll(o) : r.append(o)
          }))
        },
        unwrap: function() {
          return this.parent().each((function() {
            e(this).replaceWith(e(this).children())
          })), this
        },
        clone: function() {
          return this.map((function() {
            return this.cloneNode(!0)
          }))
        },
        hide: function() {
          return this.css("display", "none")
        },
        toggle: function(t) {
          return this.each((function() {
            var i = e(this);
            (void 0 === t ? "none" == i.css("display") : t) ? i.show(): i.hide()
          }))
        },
        prev: function(t) {
          return e(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
          return e(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
          return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each((function(i) {
            var n = this.innerHTML;
            e(this).empty().append(B(this, t, i, n))
          }))
        },
        text: function(t) {
          return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each((function() {
            this.textContent = void 0 === t ? "" : "" + t
          }))
        },
        attr: function(e, i) {
          var n;
          return "string" == typeof e && void 0 === i ? 0 == this.length || 1 !== this[0].nodeType ? void 0 : "value" == e && "INPUT" == this[0].nodeName ? this.val() : !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : this.each((function(n) {
            if (1 === this.nodeType)
              if (N(e))
                for (t in e) W(this, t, e[t]);
              else W(this, e, B(this, i, n, this.getAttribute(e)))
          }))
        },
        removeAttr: function(t) {
          return this.each((function() {
            1 === this.nodeType && W(this, t)
          }))
        },
        prop: function(t, e) {
          return t = E[t] || t, void 0 === e ? this[0] && this[0][t] : this.each((function(i) {
            this[t] = B(this, e, i, this[t])
          }))
        },
        data: function(t, e) {
          var i = this.attr("data-" + t.replace(m, "-$1").toLowerCase(), e);
          return null !== i ? $(i) : void 0
        },
        val: function(t) {
          return 0 === arguments.length ? this[0] && (this[0].multiple ? e(this[0]).find("option").filter((function() {
            return this.selected
          })).pluck("value") : this[0].value) : this.each((function(e) {
            this.value = B(this, t, e, this.value)
          }))
        },
        offset: function(t) {
          if (t) return this.each((function(i) {
            var n = e(this),
              r = B(this, t, i, n.offset()),
              a = n.offsetParent().offset(),
              o = {
                top: r.top - a.top,
                left: r.left - a.left
              };
            "static" == n.css("position") && (o.position = "relative"), n.css(o)
          }));
          if (0 == this.length) return null;
          var i = this[0].getBoundingClientRect();
          return {
            left: i.left + window.pageXOffset,
            top: i.top + window.pageYOffset,
            width: Math.round(i.width),
            height: Math.round(i.height)
          }
        },
        css: function(i, r) {
          if (arguments.length < 2) {
            var a = this[0],
              o = getComputedStyle(a, "");
            if (!a) return;
            if ("string" == typeof i) return a.style[n(i)] || o.getPropertyValue(i);
            if (S(i)) {
              var s = {};
              return e.each(S(i) ? i : [i], (function(t, e) {
                s[e] = a.style[n(e)] || o.getPropertyValue(e)
              })), s
            }
          }
          var l = "";
          if ("string" == D(i)) r || 0 === r ? l = z(i) + ":" + P(i, r) : this.each((function() {
            this.style.removeProperty(z(i))
          }));
          else
            for (t in i) i[t] || 0 === i[t] ? l += z(t) + ":" + P(t, i[t]) + ";" : this.each((function() {
              this.style.removeProperty(z(t))
            }));
          return this.each((function() {
            this.style.cssText += ";" + l
          }))
        },
        index: function(t) {
          return t ? this.indexOf(e(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
          return !!t && a.some.call(this, (function(t) {
            return this.test(U(t))
          }), R(t))
        },
        addClass: function(t) {
          return t ? this.each((function(n) {
            i = [];
            var r = U(this);
            B(this, t, n, r).split(/\s+/g).forEach((function(t) {
              e(this).hasClass(t) || i.push(t)
            }), this), i.length && U(this, r + (r ? " " : "") + i.join(" "))
          })) : this
        },
        removeClass: function(t) {
          return this.each((function(e) {
            if (void 0 === t) return U(this, "");
            i = U(this), B(this, t, e, i).split(/\s+/g).forEach((function(t) {
              i = i.replace(R(t), " ")
            })), U(this, i.trim())
          }))
        },
        toggleClass: function(t, i) {
          return t ? this.each((function(n) {
            var r = e(this);
            B(this, t, n, U(this)).split(/\s+/g).forEach((function(t) {
              (void 0 === i ? !r.hasClass(t) : i) ? r.addClass(t): r.removeClass(t)
            }))
          })) : this
        },
        scrollTop: function(t) {
          if (this.length) {
            var e = "scrollTop" in this[0];
            return void 0 === t ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
              this.scrollTop = t
            } : function() {
              this.scrollTo(this.scrollX, t)
            })
          }
        },
        scrollLeft: function(t) {
          if (this.length) {
            var e = "scrollLeft" in this[0];
            return void 0 === t ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
              this.scrollLeft = t
            } : function() {
              this.scrollTo(t, this.scrollY)
            })
          }
        },
        position: function() {
          if (this.length) {
            var t = this[0],
              i = this.offsetParent(),
              n = this.offset(),
              r = _.test(i[0].nodeName) ? {
                top: 0,
                left: 0
              } : i.offset();
            return n.top -= parseFloat(e(t).css("margin-top")) || 0, n.left -= parseFloat(e(t).css("margin-left")) || 0, r.top += parseFloat(e(i[0]).css("border-top-width")) || 0, r.left += parseFloat(e(i[0]).css("border-left-width")) || 0, {
              top: n.top - r.top,
              left: n.left - r.left
            }
          }
        },
        offsetParent: function() {
          return this.map((function() {
            for (var t = this.offsetParent || l.body; t && !_.test(t.nodeName) && "static" == e(t).css("position");) t = t.offsetParent;
            return t
          }))
        }
      }, e.fn.detach = e.fn.remove, ["width", "height"].forEach((function(t) {
        var i = t.replace(/./, (function(t) {
          return t[0].toUpperCase()
        }));
        e.fn[t] = function(n) {
          var r, a = this[0];
          return void 0 === n ? j(a) ? a["inner" + i] : C(a) ? a.documentElement["scroll" + i] : (r = this.offset()) && r[t] : this.each((function(i) {
            (a = e(this)).css(t, B(this, n, i, a[t]()))
          }))
        }
      })), ["after", "prepend", "before", "append"].forEach((function(t, i) {
        var n = i % 2;
        e.fn[t] = function() {
          var t, r, a = e.map(arguments, (function(e) {
              return "object" == (t = D(e)) || "array" == t || null == e ? e : M.fragment(e)
            })),
            o = this.length > 1;
          return a.length < 1 ? this : this.each((function(t, s) {
            r = n ? s : s.parentNode, s = 0 == i ? s.nextSibling : 1 == i ? s.firstChild : 2 == i ? s : null, a.forEach((function(t) {
              if (o) t = t.cloneNode(!0);
              else if (!r) return e(t).remove();
              Z(r.insertBefore(t, s), (function(t) {
                null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
              }))
            }))
          }))
        }, e.fn[n ? t + "To" : "insert" + (i ? "Before" : "After")] = function(i) {
          return e(i)[t](this), this
        }
      })), M.Z.prototype = e.fn, M.uniq = r, M.deserializeValue = $, e.zepto = M, e
    }();
  window.Zepto = vt, void 0 === window.$ && (window.$ = vt),
    function(t) {
      t.zepto.qsa;
      var e = 1,
        i = Array.prototype.slice,
        n = t.isFunction,
        r = function(t) {
          return "string" == typeof t
        },
        a = {},
        o = {},
        s = "onfocusin" in window,
        l = {
          focus: "focusin",
          blur: "focusout"
        },
        h = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };

      function c(t) {
        return t._zid || (t._zid = e++)
      }

      function u(t, e, i, n) {
        if ((e = d(e)).ns) var r = (o = e.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
        var o;
        return (a[c(t)] || []).filter((function(t) {
          return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!i || c(t.fn) === c(i)) && (!n || t.sel == n)
        }))
      }

      function d(t) {
        var e = ("" + t).split(".");
        return {
          e: e[0],
          ns: e.slice(1).sort().join(" ")
        }
      }

      function f(t, e) {
        return t.del && !s && t.e in l || !!e
      }

      function p(t) {
        return h[t] || s && l[t] || t
      }

      function _(e, i, n, r, o, s, l) {
        var u = c(e),
          _ = a[u] || (a[u] = []);
        i.split(/\s/).forEach((function(i) {
          if ("ready" == i) return t(document).ready(n);
          var a = d(i);
          a.fn = n, a.sel = o, a.e in h && (n = function(e) {
            var i = e.relatedTarget;
            if (!i || i !== this && !t.contains(this, i)) return a.fn.apply(this, arguments)
          }), a.del = s;
          var c = s || n;
          a.proxy = function(t) {
            if (!(t = b(t)).isImmediatePropagationStopped()) {
              t.data = r;
              var i = c.apply(e, null == t._args ? [t] : [t].concat(t._args));
              return !1 === i && (t.preventDefault(), t.stopPropagation()), i
            }
          }, a.i = _.length, _.push(a), "addEventListener" in e && e.addEventListener(p(a.e), a.proxy, f(a, l))
        }))
      }

      function m(t, e, i, n, r) {
        var o = c(t);
        (e || "").split(/\s/).forEach((function(e) {
          u(t, e, i, n).forEach((function(e) {
            delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(p(e.e), e.proxy, f(e, r))
          }))
        }))
      }
      o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", t.event = {
        add: _,
        remove: m
      }, t.proxy = function(e, i) {
        if (n(e)) {
          var a = function() {
            return e.apply(i, arguments)
          };
          return a._zid = c(e), a
        }
        if (r(i)) return t.proxy(e[i], e);
        throw new TypeError("expected function")
      }, t.fn.bind = function(t, e, i) {
        return this.on(t, e, i)
      }, t.fn.unbind = function(t, e) {
        return this.off(t, e)
      }, t.fn.one = function(t, e, i, n) {
        return this.on(t, e, i, n, 1)
      };
      var g = function() {
          return !0
        },
        v = function() {
          return !1
        },
        y = /^([A-Z]|returnValue$|layer[XY]$)/,
        w = {
          preventDefault: "isDefaultPrevented",
          stopImmediatePropagation: "isImmediatePropagationStopped",
          stopPropagation: "isPropagationStopped"
        };

      function b(e, i) {
        return !i && e.isDefaultPrevented || (i || (i = e), t.each(w, (function(t, n) {
          var r = i[t];
          e[t] = function() {
            return this[n] = g, r && r.apply(i, arguments)
          }, e[n] = v
        })), (void 0 !== i.defaultPrevented ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = g)), e
      }

      function x(t) {
        var e, i = {
          originalEvent: t
        };
        for (e in t) y.test(e) || void 0 === t[e] || (i[e] = t[e]);
        return b(i, t)
      }
      t.fn.delegate = function(t, e, i) {
        return this.on(e, t, i)
      }, t.fn.undelegate = function(t, e, i) {
        return this.off(e, t, i)
      }, t.fn.live = function(e, i) {
        return t(document.body).delegate(this.selector, e, i), this
      }, t.fn.die = function(e, i) {
        return t(document.body).undelegate(this.selector, e, i), this
      }, t.fn.on = function(e, a, o, s, l) {
        var h, c, u = this;
        return e && !r(e) ? (t.each(e, (function(t, e) {
          u.on(t, a, o, e, l)
        })), u) : (r(a) || n(s) || !1 === s || (s = o, o = a, a = void 0), (n(o) || !1 === o) && (s = o, o = void 0), !1 === s && (s = v), u.each((function(n, r) {
          l && (h = function(t) {
            return m(r, t.type, s), s.apply(this, arguments)
          }), a && (c = function(e) {
            var n, o = t(e.target).closest(a, r).get(0);
            if (o && o !== r) return n = t.extend(x(e), {
              currentTarget: o,
              liveFired: r
            }), (h || s).apply(o, [n].concat(i.call(arguments, 1)))
          }), _(r, e, s, o, a, c || h)
        })))
      }, t.fn.off = function(e, i, a) {
        var o = this;
        return e && !r(e) ? (t.each(e, (function(t, e) {
          o.off(t, i, e)
        })), o) : (r(i) || n(a) || !1 === a || (a = i, i = void 0), !1 === a && (a = v), o.each((function() {
          m(this, e, a, i)
        })))
      }, t.fn.trigger = function(e, i) {
        return (e = r(e) || t.isPlainObject(e) ? t.Event(e) : b(e))._args = i, this.each((function() {
          "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i)
        }))
      }, t.fn.triggerHandler = function(e, i) {
        var n, a;
        return this.each((function(o, s) {
          (n = x(r(e) ? t.Event(e) : e))._args = i, n.target = s, t.each(u(s, e.type || e), (function(t, e) {
            if (a = e.proxy(n), n.isImmediatePropagationStopped()) return !1
          }))
        })), a
      }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach((function(e) {
        t.fn[e] = function(t) {
          return t ? this.bind(e, t) : this.trigger(e)
        }
      })), ["focus", "blur"].forEach((function(e) {
        t.fn[e] = function(t) {
          return t ? this.bind(e, t) : this.each((function() {
            try {
              this[e]()
            } catch (t) {}
          })), this
        }
      })), t.Event = function(t, e) {
        r(t) || (t = (e = t).type);
        var i = document.createEvent(o[t] || "Events"),
          n = !0;
        if (e)
          for (var a in e) "bubbles" == a ? n = !!e[a] : i[a] = e[a];
        return i.initEvent(t, n, !0), b(i)
      }
    }(vt),
    function(t) {
      var e, i, n = 0,
        r = window.document,
        a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        o = /^(?:text|application)\/javascript/i,
        s = /^(?:text|application)\/xml/i,
        l = /^\s*$/;

      function h(e, i, n, a) {
        if (e.global) return function(e, i, n) {
          var r = t.Event(i);
          return t(e).trigger(r, n), !r.isDefaultPrevented()
        }(i || r, n, a)
      }

      function c(t, e) {
        var i = e.context;
        if (!1 === e.beforeSend.call(i, t, e) || !1 === h(e, i, "ajaxBeforeSend", [t, e])) return !1;
        h(e, i, "ajaxSend", [t, e])
      }

      function u(t, e, i, n) {
        var r = i.context;
        i.success.call(r, t, "success", e), n && n.resolveWith(r, [t, "success", e]), h(i, r, "ajaxSuccess", [e, i, t]), f("success", e, i)
      }

      function d(t, e, i, n, r) {
        var a = n.context;
        n.error.call(a, i, e, t), r && r.rejectWith(a, [i, e, t]), h(n, a, "ajaxError", [i, n, t || e]), f(e, i, n)
      }

      function f(e, i, n) {
        var r = n.context;
        n.complete.call(r, i, e), h(n, r, "ajaxComplete", [i, n]),
          function(e) {
            e.global && !--t.active && h(e, null, "ajaxStop")
          }(n)
      }

      function p() {}

      function _(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
      }

      function m(e, i, n, r) {
        var a = !t.isFunction(i);
        return {
          url: e,
          data: a ? i : void 0,
          success: a ? t.isFunction(n) ? n : void 0 : i,
          dataType: a && r || n
        }
      }
      t.active = 0, t.ajaxJSONP = function(e, i) {
        if (!("type" in e)) return t.ajax(e);
        var a, o, s = e.jsonpCallback,
          l = (t.isFunction(s) ? s() : s) || "jsonp" + ++n,
          h = r.createElement("script"),
          f = window[l],
          p = function(e) {
            t(h).triggerHandler("error", e || "abort")
          },
          _ = {
            abort: p
          };
        return i && i.promise(_), t(h).on("load error", (function(n, r) {
          clearTimeout(o), t(h).off().remove(), "error" != n.type && a ? u(a[0], _, e, i) : d(null, r || "error", _, e, i), window[l] = f, a && t.isFunction(f) && f(a[0]), f = a = void 0
        })), !1 === c(_, e) ? (p("abort"), _) : (window[l] = function() {
          a = arguments
        }, h.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l), r.head.appendChild(h), e.timeout > 0 && (o = setTimeout((function() {
          p("timeout")
        }), e.timeout)), _)
      }, t.ajaxSettings = {
        type: "GET",
        beforeSend: p,
        success: p,
        error: p,
        complete: p,
        context: null,
        global: !0,
        xhr: function() {
          return new window.XMLHttpRequest
        },
        accepts: {
          script: "text/javascript, application/javascript, application/x-javascript",
          json: "application/json",
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
      }, t.ajax = function(n) {
        var r = t.extend({}, n || {}),
          a = t.Deferred && t.Deferred();
        for (e in t.ajaxSettings) void 0 === r[e] && (r[e] = t.ajaxSettings[e]);
        ! function(e) {
          e.global && 0 == t.active++ && h(e, null, "ajaxStart")
        }(r), r.crossDomain || (r.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(r.url) && RegExp.$2 != window.location.host), r.url || (r.url = window.location.toString()),
          function(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = _(e.url, e.data), e.data = void 0)
          }(r), !1 === r.cache && (r.url = _(r.url, "_=" + Date.now()));
        var f = r.dataType,
          m = /\?.+=\?/.test(r.url);
        if ("jsonp" == f || m) return m || (r.url = _(r.url, r.jsonp ? r.jsonp + "=?" : !1 === r.jsonp ? "" : "callback=?")), t.ajaxJSONP(r, a);
        var g, v = r.accepts[f],
          y = {},
          w = function(t, e) {
            y[t.toLowerCase()] = [t, e]
          },
          b = /^([\w-]+:)\/\//.test(r.url) ? RegExp.$1 : window.location.protocol,
          x = r.xhr(),
          k = x.setRequestHeader;
        if (a && a.promise(x), r.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", v || "*/*"), (v = r.mimeType || v) && (v.indexOf(",") > -1 && (v = v.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(v)), (r.contentType || !1 !== r.contentType && r.data && "GET" != r.type.toUpperCase()) && w("Content-Type", r.contentType || "application/x-www-form-urlencoded"), r.headers)
          for (i in r.headers) w(i, r.headers[i]);
        if (x.setRequestHeader = w, x.onreadystatechange = function() {
            if (4 == x.readyState) {
              x.onreadystatechange = p, clearTimeout(g);
              var e, i = !1;
              if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == b) {
                f = f || function(t) {
                  return t && (t = t.split(";", 2)[0]), t && ("text/html" == t ? "html" : "application/json" == t ? "json" : o.test(t) ? "script" : s.test(t) && "xml") || "text"
                }(r.mimeType || x.getResponseHeader("content-type")), e = x.responseText;
                try {
                  "script" == f ? (0, eval)(e) : "xml" == f ? e = x.responseXML : "json" == f && (e = l.test(e) ? null : t.parseJSON(e))
                } catch (t) {
                  i = t
                }
                i ? d(i, "parsererror", x, r, a) : u(e, x, r, a)
              } else d(x.statusText || null, x.status ? "error" : "abort", x, r, a)
            }
          }, !1 === c(x, r)) return x.abort(), d(null, "abort", x, r, a), x;
        if (r.xhrFields)
          for (i in r.xhrFields) x[i] = r.xhrFields[i];
        var T = !("async" in r) || r.async;
        for (i in x.open(r.type, r.url, T, r.username, r.password), y) k.apply(x, y[i]);
        return r.timeout > 0 && (g = setTimeout((function() {
          x.onreadystatechange = p, x.abort(), d(null, "timeout", x, r, a)
        }), r.timeout)), x.send(r.data ? r.data : null), x
      }, t.get = function(e, i, n, r) {
        return t.ajax(m.apply(null, arguments))
      }, t.post = function(e, i, n, r) {
        var a = m.apply(null, arguments);
        return a.type = "POST", t.ajax(a)
      }, t.getJSON = function(e, i, n) {
        var r = m.apply(null, arguments);
        return r.dataType = "json", t.ajax(r)
      }, t.fn.load = function(e, i, n) {
        if (!this.length) return this;
        var r, o = this,
          s = e.split(/\s/),
          l = m(e, i, n),
          h = l.success;
        return s.length > 1 && (l.url = s[0], r = s[1]), l.success = function(e) {
          o.html(r ? t("<div>").html(e.replace(a, "")).find(r) : e), h && h.apply(o, arguments)
        }, t.ajax(l), this
      };
      var g = encodeURIComponent;
      t.param = function(e, i) {
        var n = [];
        return n.add = function(t, e) {
            this.push(g(t) + "=" + g(e))
          },
          function e(i, n, r, a) {
            var o, s = t.isArray(n),
              l = t.isPlainObject(n);
            t.each(n, (function(n, h) {
              o = t.type(h), a && (n = r ? a : a + "[" + (l || "object" == o || "array" == o ? n : "") + "]"), !a && s ? i.add(h.name, h.value) : "array" == o || !r && "object" == o ? e(i, h, r, n) : i.add(n, h)
            }))
          }(n, e, i), n.join("&").replace(/%20/g, "+")
      }
    }(vt), (mt = vt).fn.serializeArray = function() {
      var t, e = [];
      return mt([].slice.call(this.get(0).elements)).each((function() {
        var i = (t = mt(this)).attr("type");
        "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
          name: t.attr("name"),
          value: t.val()
        })
      })), e
    }, mt.fn.serialize = function() {
      var t = [];
      return this.serializeArray().forEach((function(e) {
        t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
      })), t.join("&")
    }, mt.fn.submit = function(t) {
      if (t) this.bind("submit", t);
      else if (this.length) {
        var e = mt.Event("submit");
        this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit()
      }
      return this
    },
    function(t) {
      "__proto__" in {} || t.extend(t.zepto, {
        Z: function(e, i) {
          return e = e || [], t.extend(e, t.fn), e.selector = i || "", e.__Z = !0, e
        },
        isZ: function(e) {
          return "array" === t.type(e) && "__Z" in e
        }
      });
      try {
        getComputedStyle(void 0)
      } catch (t) {
        var e = getComputedStyle;
        window.getComputedStyle = function(t, i) {
          try {
            return e(t, i)
          } catch (t) {
            return null
          }
        }
      }
    }(vt);
  const yt = vt.getJSON,
    wt = vt.ajax,
    bt = [
      ["millisecond", 1, function(t) {}],
      ["second", 1e3, function(t) {
        t.setMilliseconds(0)
      }],
      ["minute", 6e4, function(t) {
        t.setSeconds(0)
      }],
      ["hour", 36e5, function(t) {
        t.setMinutes(0)
      }],
      ["day", 864e5, function(t) {
        t.setHours(0)
      }],
      ["month", 2592e6, function(t) {
        t.setDate(1)
      }],
      ["year", 31536e6, function(t) {
        t.setMonth(0)
      }],
      ["decade", 31536e7, function(t) {
        var e = t.getFullYear();
        t.setFullYear(e - e % 10)
      }],
      ["century", 31536e8, function(t) {
        var e = t.getFullYear();
        t.setFullYear(e - e % 100)
      }],
      ["millennium", 31536e9, function(t) {
        var e = t.getFullYear();
        t.setFullYear(e - e % 1e3)
      }]
    ],
    xt = ["millisecond", "second", "minute", "hour", "day", "month", "year"],
    kt = /^([\+-]?\d+?)(-\d{2}?)?(-\d{2}?)?$/,
    Tt = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
  const Mt = {
      base: {
        millisecond: "time_short",
        second: "time",
        minute: "time_no_seconds_small_date",
        hour: "time_no_seconds_small_date",
        day: "full",
        month: "month",
        year: "year",
        decade: "year",
        century: "year",
        millennium: "year",
        age: "fallback",
        epoch: "fallback",
        era: "fallback",
        eon: "fallback",
        eon2: "fallback"
      },
      short: {
        millisecond: "time_short",
        second: "time_short",
        minute: "time_no_seconds_short",
        hour: "time_no_minutes_short",
        day: "full_short",
        month: "month_short",
        year: "year",
        decade: "year",
        century: "year",
        millennium: "year",
        age: "fallback",
        epoch: "fallback",
        era: "fallback",
        eon: "fallback",
        eon2: "fallback"
      }
    },
    Lt = ct.extend({
      initialize: function(t, e, i) {
        "number" == typeof t ? this.data = {
          format: "yyyy mmmm",
          date_obj: new Date(t)
        } : Date == t.constructor ? this.data = {
          format: "yyyy mmmm",
          date_obj: t
        } : (this.data = JSON.parse(JSON.stringify(t)), this._createDateObj()), this._setFormat(e, i)
      },
      setDateFormat: function(t) {
        this.data.format = t
      },
      getDisplayDate: function(t, e) {
        if (this.data.display_date) return this.data.display_date;
        t || (t = Ct.fallback), t.constructor != Ct && (z("First argument to getDisplayDate must be type Language"), t = Ct.fallback);
        var i = e || this.data.format;
        return t.formatDate(this.data.date_obj, i)
      },
      getMillisecond: function() {
        return this.getTime()
      },
      getTime: function() {
        return this.data.date_obj.getTime()
      },
      isBefore: function(t) {
        if (!this.data.date_obj.constructor == t.data.date_obj.constructor) throw new A("date_compare_err");
        return "isBefore" in this.data.date_obj ? this.data.date_obj.isBefore(t.data.date_obj) : this.data.date_obj < t.data.date_obj
      },
      isAfter: function(t) {
        if (!this.data.date_obj.constructor == t.data.date_obj.constructor) throw new A("date_compare_err");
        return "isAfter" in this.data.date_obj ? this.data.date_obj.isAfter(t.data.date_obj) : this.data.date_obj > t.data.date_obj
      },
      floor: function(t) {
        for (var e = new Date(this.data.date_obj.getTime()), i = 0; i < bt.length; i++)
          if (bt[i][2](e), bt[i][0] == t) return new Lt(e);
        throw new A("invalid_scale_err", t)
      },
      _getDateData: function() {
        var t = {
          year: 0,
          month: 1,
          day: 1,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        };
        for (var e in N(t, this.data), xt) {
          if (!F(t[xt[e]]).match(/^-?\d*$/)) throw new A("invalid_date_err", xt[e] + " = '" + t[xt[e]] + "'");
          var i = parseInt(t[xt[e]]);
          isNaN(i) && (i = 4 == e || 5 == e ? 1 : 0), t[xt[e]] = i
        }
        return t.month > 0 && t.month <= 12 && (t.month = t.month - 1), t
      },
      _createDateObj: function() {
        var t = this._getDateData();
        this.data.date_obj = new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond), this.data.date_obj.getFullYear() != t.year && this.data.date_obj.setFullYear(t.year)
      },
      findBestFormat: function(t) {
        for (var e = xt, i = 0; i < e.length; i++)
          if (this.data[e[i]]) return t ? t in Mt || (t = "short") : t = "base", Mt[t][e[i]];
        return ""
      },
      _setFormat: function(t, e) {
        t ? this.data.format = t : this.data.format || (this.data.format = this.findBestFormat()), e ? this.data.format_short = e : this.data.format_short || (this.data.format_short = this.findBestFormat(!0))
      }
    });

  function Et(t) {
    if (t.match(kt)) {
      var e = t.match(kt).slice(1),
        i = {
          year: e[0].replace("+", "")
        };
      return e[1] && (i.month = e[1].replace("-", "")), e[2] && (i.day = e[2].replace("-", "")), i
    }
    if (t.match(Tt)) return cls.parseISODate(t);
    if (t.match(/^\-?\d+$/)) return {
      year: t
    };
    var n = {};
    if (t.match(/\d+\/\d+\/\d+/)) {
      var r = t.match(/\d+\/\d+\/\d+/)[0];
      t = F(t.replace(r, ""));
      var a = r.split("/");
      n.month = a[0], n.day = a[1], n.year = a[2]
    }
    if (t.match(/\d+\/\d+/)) {
      r = t.match(/\d+\/\d+/)[0];
      t = F(t.replace(r, ""));
      a = r.split("/");
      n.month = a[0], n.year = a[1]
    }
    if (t.match(":")) {
      var o = t.split(":");
      if (n.hour = o[0], n.minute = o[1], o[2]) {
        let t = o[2].split(".");
        n.second = t[0], n.millisecond = t[1]
      }
    }
    return n
  }
  const St = ct.extend({
    initialize: function(t) {
      if (this.year = parseInt(t), isNaN(this.year)) throw new A("invalid_year_err", t)
    },
    isBefore: function(t) {
      return this.year < t.year
    },
    isAfter: function(t) {
      return this.year > t.year
    },
    getTime: function() {
      return this.year
    }
  });

  function Dt(t) {
    return function(e) {
      var i = e.getTime();
      return new St(Math.floor(i / t) * t)
    }
  }
  const At = [
      ["year", 1, new Dt(1)],
      ["decade", 10, new Dt(10)],
      ["century", 100, new Dt(100)],
      ["millennium", 1e3, new Dt(1e3)],
      ["age", 1e6, new Dt(1e6)],
      ["epoch", 1e7, new Dt(1e7)],
      ["era", 1e8, new Dt(1e8)],
      ["eon", 1e9, new Dt(1e9)]
    ],
    jt = Lt.extend({
      initialize: function(t, e, i) {
        St == t.constructor ? this.data = {
          date_obj: t
        } : (this.data = JSON.parse(JSON.stringify(t)), this._createDateObj()), this._setFormat(e, i)
      },
      _createDateObj: function() {
        var t = this._getDateData();
        this.data.date_obj = new St(t.year)
      },
      floor: function(t) {
        for (var e = 0; e < At.length; e++)
          if (At[e][0] == t) {
            var i = At[e][2](this.data.date_obj);
            return new jt(i)
          } throw new A("invalid_scale_err", t)
      }
    });
  class Ct {
    constructor(t, e) {
      for (let t in Ot.en) this[t] = Ot.en[t];
      if (t && "string" == typeof t && "en" != t) {
        var i = t;
        if (!(i in Ot)) {
          if (/\.json$/.test(i)) var n = i;
          else {
            var r = "/locale/" + i + ".json";
            /\/$/.test(e = e) && (r = r.substr(1));
            n = e + r
          }
          var a = wt({
            url: n,
            async: !1
          });
          if (200 != a.status) throw "Could not load language [" + i + "]: " + a.statusText;
          Ot[i] = JSON.parse(a.responseText)
        }
        N(this, Ot[i])
      }
    }
    mergeData(t) {
      for (k in Ot.en) t[k] && ("object" == typeof this[k] ? N(t[k], this[k]) : this[k] = t[k])
    }
    formatBigYear(t, e) {
      var i = t.year,
        n = this.bigdateformats[e] || this.bigdateformats.fallback;
      if (n) {
        for (var r = 0; r < n.length; r++) {
          var a = n[r];
          if (Math.abs(i / a[0]) > 1) return Nt(Math.abs(i / a[0]), a[1])
        }
        return i.toString()
      }
      return z("Language file dateformats missing cosmological. Falling back."), Nt(i, e)
    }
    _(t) {
      return this.messages[t] || Ct.fallback.messages[t] || t
    }
    formatDate(t, e) {
      return t.constructor == Date ? this.formatJSDate(t, e) : t.constructor == St ? this.formatBigYear(t, e) : t.data && t.data.date_obj ? this.formatDate(t.data.date_obj, e) : (z("Unfamiliar date presented for formatting"), t.toString())
    }
    formatJSDate(t, e) {
      var i = this,
        n = function(t, e) {
          var n = i.period_labels[t];
          if (n) t = e < 12 ? n[0] : n[1];
          return "<span class='tl-timeaxis-timesuffix'>" + t + "</span>"
        };
      e || (e = "full");
      var r = this.dateformats[e] || Ct.fallback.dateformats[e];
      r || (r = e);
      var a = t.getDate(),
        o = t.getDay(),
        s = t.getMonth(),
        l = t.getFullYear(),
        h = t.getHours(),
        c = t.getMinutes(),
        u = t.getSeconds(),
        d = t.getMilliseconds(),
        f = t.getTimezoneOffset(),
        p = {
          d: a,
          dd: R(a),
          ddd: this.date.day_abbr[o],
          dddd: this.date.day[o],
          m: s + 1,
          mm: R(s + 1),
          mmm: this.date.month_abbr[s],
          mmmm: this.date.month[s],
          yy: String(l).slice(2),
          yyyy: l < 0 && this.has_negative_year_modifier() ? Math.abs(l) : l,
          h: h % 12 || 12,
          hh: R(h % 12 || 12),
          H: h,
          HH: R(h),
          M: c,
          MM: R(c),
          s: u,
          ss: R(u),
          l: R(d, 3),
          L: R(d > 99 ? Math.round(d / 10) : d),
          t: n("t", h),
          tt: n("tt", h),
          T: n("T", h),
          TT: n("TT", h),
          Z: (String(t).match(/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g) || [""]).pop().replace(/[^-+\dA-Z]/g, ""),
          o: (f > 0 ? "-" : "+") + R(100 * Math.floor(Math.abs(f) / 60) + Math.abs(f) % 60, 4),
          S: ["th", "st", "nd", "rd"][a % 10 > 3 ? 0 : (a % 100 - a % 10 != 10) * a % 10]
        },
        _ = r.replace(Ct.DATE_FORMAT_TOKENS, (function(t) {
          return t in p ? p[t] : t.slice(1, t.length - 1)
        }));
      return this._applyEra(_, l)
    }
    has_negative_year_modifier() {
      return Boolean(this.era_labels.negative_year.prefix || this.era_labels.negative_year.suffix)
    }
    _applyEra(t, e) {
      var i = e < 0 ? this.era_labels.negative_year : this.era_labels.positive_year,
        n = "";
      return i.prefix && (n += "<span>" + i.prefix + "</span> "), n += t, i.suffix && (n += " <span>" + i.suffix + "</span>"), n
    }
  }

  function Nt(t, e) {
    if (e.match(/%(\.(\d+))?f/)) {
      var i = e.match(/%(\.(\d+))?f/),
        n = i[0];
      return i[2] && (t = t.toFixed(i[2])), e.replace(n, t)
    }
    return e
  }
  Ct.fallback = {
    messages: {}
  }, Ct.DATE_FORMAT_TOKENS = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
  var Ot = {
    en: {
      name: "English",
      lang: "en",
      api: {
        wikipedia: "en"
      },
      messages: {
        loading: "Loading",
        wikipedia: "From Wikipedia, the free encyclopedia",
        error: "Error",
        contract_timeline: "Contract Timeline",
        return_to_title: "Return to Title",
        loading_content: "Loading Content",
        expand_timeline: "Expand Timeline",
        loading_timeline: "Loading Timeline... ",
        swipe_to_navigate: "Swipe to Navigate<br><span class='tl-button'>OK</span>",
        unknown_read_err: "An unexpected error occurred trying to read your spreadsheet data",
        invalid_url_err: "Unable to read Timeline data. Make sure your URL is for a Google Spreadsheet or a Timeline JSON file.",
        invalid_url_share_required: "Because of unexpected changes to Google's data access API, the creator of this timeline must enable 'anyone with the url can read' access for this spreadsheet. See timeline.knightlab.com for more information.",
        network_err: "Unable to read your Google Spreadsheet. Make sure you have published it to the web.",
        empty_feed_err: "No data entries found",
        missing_start_date_err: "Missing start_date",
        invalid_data_format_err: "Header row has been modified.",
        date_compare_err: "Can't compare timeline date objects on different scales",
        invalid_scale_err: "Invalid scale",
        invalid_date_err: "Invalid date: month, day and year must be numbers.",
        invalid_separator_error: "Invalid time: misuse of : or . as separator.",
        invalid_hour_err: "Invalid time (hour)",
        invalid_minute_err: "Invalid time (minute)",
        invalid_second_err: "Invalid time (second)",
        invalid_fractional_err: "Invalid time (fractional seconds)",
        invalid_second_fractional_err: "Invalid time (seconds and fractional seconds)",
        invalid_year_err: "Invalid year",
        flickr_notfound_err: "Photo not found or private",
        flickr_invalidurl_err: "Invalid Flickr URL",
        imgur_invalidurl_err: "Invalid Imgur URL",
        twitter_invalidurl_err: "Invalid Twitter URL",
        twitter_load_err: "Unable to load Tweet",
        twitterembed_invalidurl_err: "Invalid Twitter Embed url",
        wikipedia_load_err: "Unable to load Wikipedia entry",
        youtube_invalidurl_err: "Invalid YouTube URL",
        spotify_invalid_url: "Invalid Spotify URL",
        template_value_err: "No value provided for variable",
        invalid_rgb_err: "Invalid RGB argument",
        time_scale_scale_err: "Don't know how to get date from time for scale",
        axis_helper_no_options_err: "Axis helper must be configured with options",
        axis_helper_scale_err: "No AxisHelper available for scale",
        invalid_integer_option: "Invalid option value—must be a whole number."
      },
      date: {
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        month_abbr: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
        day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        day_abbr: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."]
      },
      era_labels: {
        positive_year: {
          prefix: "",
          suffix: ""
        },
        negative_year: {
          prefix: "",
          suffix: "BCE"
        }
      },
      period_labels: {
        t: ["a", "p"],
        tt: ["am", "pm"],
        T: ["A", "P"],
        TT: ["AM", "PM"]
      },
      dateformats: {
        year: "yyyy",
        month_short: "mmm",
        month: "mmmm yyyy",
        full_short: "mmm d",
        full: "mmmm d',' yyyy",
        time: "h:MM:ss TT' <small>'mmmm d',' yyyy'</small>'",
        time_short: "h:MM:ss TT",
        time_no_seconds_short: "h:MM TT",
        time_no_minutes_short: "h TT",
        time_no_seconds_small_date: "h:MM TT' <small>'mmmm d',' yyyy'</small>'",
        time_milliseconds: "l",
        full_long: "mmm d',' yyyy 'at' h:MM TT",
        full_long_small_date: "h:MM TT' <small>mmm d',' yyyy'</small>'"
      },
      bigdateformats: {
        fallback: [
          [1e9, "%.2f billion years ago"],
          [1e6, "%.1f million years ago"],
          [1e3, "%.1f thousand years ago"],
          [1, "%f years ago"]
        ],
        compact: [
          [1e9, "%.2f bya"],
          [1e6, "%.1f mya"],
          [1e3, "%.1f kya"],
          [1, "%f years ago"]
        ],
        verbose: [
          [1e9, "%.2f billion years ago"],
          [1e6, "%.1f million years ago"],
          [1e3, "%.1f thousand years ago"],
          [1, "%f years ago"]
        ]
      }
    }
  };
  let It = new Ct;
  Ct.fallback = It;
  class zt {
    setLanguage(t) {
      this.language = t
    }
    getLanguage() {
      if (this.language) {
        if ("object" == typeof this.language) return this.language;
        z(`I18NMixins.getLanguage: this.language should be object, but is ${typeof this.language}`)
      }
      return It
    }
    _(t) {
      return this.getLanguage()._(t)
    }
  }
  class Rt {
    constructor(t, e, i) {
      i && this.setLanguage(i), this._el = {
        parent: {},
        container: {},
        message_container: {},
        loading_icon: {},
        message: {}
      }, this.options = {
        width: 600,
        height: 600,
        message_class: "tl-message",
        message_icon_class: "tl-loading-icon"
      }, this.container = t, N(this.options, e), this._el.container = M("div", this.options.message_class), t && (t.appendChild(this._el.container), this._el.parent = t), this.animator = {}, this._initLayout(), this._initEvents()
    }
    updateMessage(t) {
      this._el.message.innerHTML = t || this._("loading"), !this._el.parent.atributes && this.container.attributes && (this.container.appendChild(this._el.container), this._el.parent = this.container)
    }
    updateDisplay(t, e) {}
    _onMouseClick() {
      this.fire("clicked", this.options)
    }
    _onRemove() {
      this._el.parent = {}
    }
    _initLayout() {
      this._el.message_container = M("div", "tl-message-container", this._el.container), this._el.loading_icon = M("div", this.options.message_icon_class, this._el.message_container), this._el.message = M("div", "tl-message-content", this._el.message_container), this.updateMessage()
    }
    _initEvents() {
      gt.addListener(this._el.container, "click", this._onMouseClick, this), gt.addListener(this, "removed", this._onRemove, this)
    }
  }

  function Pt(t, e) {
    e = e || "start_date";
    t.sort((function(t, i) {
      return t[e].isBefore(i[e]) ? -1 : t[e].isAfter(i[e]) ? 1 : 0
    }))
  }

  function Ht(t) {
    var e = {
        hour: null,
        minute: null,
        second: null,
        millisecond: null
      },
      i = null,
      n = t.match(/(\s*[AaPp]\.?[Mm]\.?\s*)$/);
    n && (i = F(n[0]), t = F(t.substring(0, t.lastIndexOf(i))));
    var r = [],
      a = t.match(/^\s*(\d{1,2})(\d{2})\s*$/);
    if (a ? r = a.slice(1) : 1 == (r = t.split(":")).length && (r = t.split(".")), r.length > 4) throw new A("invalid_separator_error");
    if (e.hour = parseInt(r[0]), i && "p" == i.toLowerCase()[0] && 12 != e.hour ? e.hour += 12 : i && "a" == i.toLowerCase()[0] && 12 == e.hour && (e.hour = 0), isNaN(e.hour) || e.hour < 0 || e.hour > 23) throw new A("invalid_hour_err", e.hour);
    if (r.length > 1 && (e.minute = parseInt(r[1]), isNaN(e.minute))) throw new A("invalid_minute_err", e.minute);
    if (r.length > 2) {
      var o = r[2].split(/[\.,]/);
      if ((r = o.concat(r.slice(3))).length > 2) throw new A("invalid_second_fractional_err");
      if (e.second = parseInt(r[0]), isNaN(e.second)) throw new A("invalid_second_err");
      if (2 == r.length) {
        var s = parseInt(r[1]);
        if (isNaN(s)) throw new A("invalid_fractional_err");
        e.millisecond = 100 * s
      }
    }
    return e
  }
  B(Rt, zt, ut, pt);
  const qt = {
    human: Lt,
    cosmological: jt
  };
  var Ft = i(0),
    Bt = i.n(Ft);
  const Wt = {
      text: ["headline", "text"],
      media: ["caption", "credit", "url"]
    },
    Ut = {
      start_date: ["display_date"],
      end_date: ["display_date"],
      slide: ["display_date", "group"],
      date: ["display_date"]
    };

  function $t(t, e, i) {
    Object.keys(i).forEach(n => {
      var r = "slide" == n ? t : t[n];
      r && i[n].forEach(t => {
        void 0 !== r[t] && (r[t] = e(r[t]))
      })
    })
  }

  function Zt(t) {
    return Bt.a.sanitize(t, {
      ADD_TAGS: ["iframe"],
      ADD_ATTR: ["frameborder"]
    })
  }
  class Gt {
    constructor(t) {
      if (this.title = "", this.scale = "", this.events = [], this.eras = [], this.event_dict = {}, this.messages = {
          errors: [],
          warnings: []
        }, "object" == typeof t && t.events) {
        if (this.scale = t.scale, this.events = [], this._ensureValidScale(t.events), t.title) {
          var e = this._assignID(t.title);
          this._tidyFields(t.title), this.title = t.title, this.event_dict[e] = this.title
        }
        for (var i = 0; i < t.events.length; i++) try {
          this.addEvent(t.events[i], !0)
        } catch (t) {
          this.logError(t)
        }
        t.eras && t.eras.forEach((t, e) => {
          try {
            this.addEra(t)
          } catch (t) {
            this.logError("Era " + idx + ": " + t)
          }
        }), Pt(this.events), Pt(this.eras)
      }
    }
    logError(t) {
      z(t), this.messages.errors.push(t)
    }
    getErrors(t) {
      return t ? this.messages.errors.join(t) : this.messages.errors
    }
    validate() {
      void 0 !== this.events && void 0 !== this.events.length && 0 != this.events.length || this.logError("Timeline configuration has no events.");
      for (var t = 0; t < this.eras.length; t++) {
        var e;
        if (void 0 === this.eras[t].start_date || void 0 === this.eras[t].end_date) e = this.eras[t].text && this.eras[t].text.headline ? this.eras[t].text.headline : "era " + (t + 1), this.logError("All eras must have start and end dates. [" + e + "]")
      }
    }
    isValid() {
      return 0 == this.messages.errors.length
    }
    addEvent(t, e) {
      var i = this._assignID(t);
      if (void 0 === t.start_date) throw new A("missing_start_date_err", i);
      return this._processDates(t), this._tidyFields(t), this.events.push(t), this.event_dict[i] = t, e || Pt(this.events), i
    }
    addEra(t) {
      var e = this._assignID(t);
      if (void 0 === t.start_date) throw new A("missing_start_date_err", e);
      this._processDates(t), this._tidyFields(t), this.eras.push({
        start_date: t.start_date,
        end_date: t.end_date,
        headline: t.text.headline
      })
    }
    _assignID(t) {
      var e = t.unique_id;
      return F(e) || (e = t.text ? U(t.text.headline) : null), t.unique_id = function(t, e) {
        if (e || (e = $(6)), !(e in t)) return e;
        var i = e.match(/^(.+)(-\d+)?$/)[1],
          n = [];
        for (let e in t) e.match(/^(.+?)(-\d+)?$/)[1] == i && n.push(e);
        e = i + "-" + (n.length + 1);
        for (var r = n.length; - 1 != n.indexOf(e); r++) e = i + "-" + r;
        return e
      }(this.event_dict, e), t.unique_id
    }
    _makeUniqueIdentifiers(t, e) {
      for (var i = [t], n = 0; n < e.length; n++) F(e[n].unique_id) && (e[n].unique_id = U(e[n].unique_id), -1 == i.indexOf(e[n].unique_id) ? i.push(e[n].unique_id) : e[n].unique_id = "");
      if (i.length != e.length + 1)
        for (n = 0; n < e.length; n++)
          if (!e[n].unique_id) {
            var r = e[n].text ? U(e[n].text.headline) : null;
            r || (r = $(6)), -1 != i.indexOf(r) && (r = r + "-" + n), i.push(r), e[n].unique_id = r
          }
    }
    _ensureValidScale(t) {
      if (!this.scale) {
        z("Determining scale dynamically"), this.scale = "human";
        for (var e = 0; e < t.length; e++) {
          if ("cosmological" == t[e].scale) {
            this.scale = "cosmological";
            break
          }
          if (t[e].start_date && void 0 !== t[e].start_date.year) {
            var i = new jt(t[e].start_date).data.date_obj.year;
            if (i < -271820 || i > 275759) {
              this.scale = "cosmological";
              break
            }
          }
        }
      }
      qt[this.scale] || this.logError("Don't know how to process dates on scale " + this.scale)
    }
    _processDates(t) {
      var e = qt[this.scale];
      if (!(t.start_date instanceof e)) {
        var i = t.start_date;
        if (t.start_date = new e(i), void 0 !== t.end_date && !(t.end_date instanceof e)) {
          var n = t.end_date,
            r = !0;
          for (let t in i) r = r && i[t] == n[t];
          r ? (z("End date same as start date is redundant; dropping end date"), delete t.end_date) : t.end_date = new e(n)
        }
      }
    }
    getEarliestDate() {
      var t = this.events[0].start_date;
      return this.eras && this.eras.length > 0 && this.eras[0].start_date.isBefore(t) ? this.eras[0].start_date : t
    }
    getLatestDate() {
      for (var t = [], e = 0; e < this.events.length; e++) this.events[e].end_date ? t.push({
        date: this.events[e].end_date
      }) : t.push({
        date: this.events[e].start_date
      });
      for (e = 0; e < this.eras.length; e++) this.eras[e].end_date ? t.push({
        date: this.eras[e].end_date
      }) : t.push({
        date: this.eras[e].start_date
      });
      return Pt(t, "date"), t.slice(-1)[0].date
    }
    _tidyFields(t) {
      function e(t, e, i) {
        i || (i = ""), t.hasOwnProperty(e) || (t[e] = i)
      }
      t.group && (t.group = F(t.group)), t.text || (t.text = {}), e(t.text, "text"), e(t.text, "headline"), $t(t, Zt, Wt), $t(t, rt, Ut)
    }
  }

  function Yt(t) {
    let e = {
      key: null,
      worksheet: 0
    };
    var i = /\bkey=([-_A-Za-z0-9]+)&?/i,
      n = /docs.google.com\/spreadsheets(.*?)\/d\//;
    if (t.match(i)) e.key = t.match(i)[1];
    else if (t.match(n)) {
      var r = t.search(n) + t.match(n)[0].length,
        a = t.substr(r);
      e.key = a.split("/")[0], t.match(/\?gid=(\d+)/) && (e.worksheet = t.match(/\?gid=(\d+)/)[1])
    } else t.match(/^\b[-_A-Za-z0-9]+$/) && (e.key = t);
    return e.key ? e : null
  }

  function Vt(t) {
    var e = {};
    for (let i in t) 0 == i.indexOf("gsx$") && (e[i.substr(4)] = t[i].$t);
    if (W(e)) return null;
    var i = {
      media: {
        caption: e.mediacaption || "",
        credit: e.mediacredit || "",
        url: e.media || "",
        thumbnail: e.mediathumbnail || ""
      },
      text: {
        headline: e.headline || "",
        text: e.text || ""
      },
      group: e.tag || "",
      type: e.type || ""
    };
    return e.startdate && (i.start_date = Et(e.startdate)), e.enddate && (i.end_date = Et(e.enddate)), i
  }

  function Jt(t) {
    function e(t) {
      if (t) return t.replace(/[\s,]+/g, "")
    }
    var i = {};
    for (let e in t) 0 == e.indexOf("gsx$") && (i[e.substr(4)] = F(t[e].$t));
    if (W(i)) return null;
    var n = {
      media: {
        caption: i.mediacaption || "",
        credit: i.mediacredit || "",
        url: i.media || "",
        thumbnail: i.mediathumbnail || ""
      },
      text: {
        headline: i.headline || "",
        text: i.text || ""
      },
      start_date: {
        year: e(i.year),
        month: e(i.month) || "",
        day: e(i.day) || ""
      },
      end_date: {
        year: e(i.endyear) || "",
        month: e(i.endmonth) || "",
        day: e(i.endday) || ""
      },
      display_date: i.displaydate || "",
      type: i.type || ""
    };
    if (i.time && N(n.start_date, Ht(i.time)), i.endtime && N(n.end_date, Ht(i.endtime)), i.group && (n.group = i.group), "" == n.end_date.year) {
      var r = n.end_date;
      if (delete n.end_date, "" != r.month || "" != r.day || "" != r.time) n.text.headline || z("Invalid end date for spreadsheet row. Must have a year if any other date fields are specified.")
    }
    return i.background && (i.background.match(/^(https?:)?\/\/?/) ? n.background = {
      url: i.background
    } : n.background = {
      color: i.background
    }), n
  }
  var Xt = function(t, e) {
    return "v4" == e ? "https://sheets.googleapis.com/v4/spreadsheets/" + t + "/values/A1:R1000?key=AIzaSyCInR0kjJJ2Co6aQAXjLBQ14CEHam3K0xg" : "https://spreadsheets.google.com/feeds/list/" + t + "/1/public/values?alt=json"
  };

  function Kt(t, e) {
    function i(t) {
      if (t) return t.replace(/[\s,]+/g, "")
    }
    for (var n = {}, r = 1; r < e.length; r++) {
      if (t.length >= r) n[t[r].toLowerCase().replace(" ", "")] = e[r]
    }
    var a = {
      media: {
        caption: n.mediacaption || "",
        credit: n.mediacredit || "",
        url: n.media || "",
        thumbnail: n.mediathumbnail || ""
      },
      text: {
        headline: n.headline || "",
        text: n.text || ""
      },
      start_date: {
        year: i(e[0]),
        month: i(e[1]) || "",
        day: i(e[2]) || ""
      },
      end_date: {
        year: i(n.endyear) || "",
        month: i(n.endmonth) || "",
        day: i(n.endday) || ""
      },
      display_date: n.displaydate || "",
      type: n.type || ""
    };
    if (n.time && N(a.start_date, Ht(e[3])), n.endtime && N(a.end_date, Ht(n.endtime)), n.group && (a.group = n.group), "" == a.end_date.year) {
      var o = a.end_date;
      if (delete a.end_date, "" != o.month || "" != o.day || "" != o.time) a.text.headline || z("Invalid end date for spreadsheet row. Must have a year if any other date fields are specified.")
    }
    return n.background && (n.background.match(/^(https?:)?\/\/?/) ? a.background = {
      url: n.background
    } : a.background = {
      color: n.background
    }), a
  }
  var Qt = function(t) {
    var e = {
      events: [],
      errors: [],
      warnings: [],
      eras: []
    };
    if (t.values)
      for (var i = 1; i < t.values.length; i++) {
        if (a = Kt(t.values[0], t.values[i])) {
          var n = "event";
          void 0 !== a.type && (n = a.type, delete a.type), "title" == n ? e.title ? (e.warnings.push("Multiple title slides detected."), e.events.push(a)) : e.title = a : "era" == n ? e.eras.push(a) : e.events.push(a)
        }
      } else {
        var r = function(t) {
          if (void 0 === t.feed.entry || 0 == t.feed.entry.length) throw new A("empty_feed_err");
          var e = t.feed.entry[0];
          if (void 0 !== e.gsx$startdate) return Vt;
          if (void 0 !== e.gsx$year) {
            return Jt
          }
          throw new A("invalid_data_format_err")
        }(t);
        for (i = 0; i < t.feed.entry.length; i++) try {
          var a;
          if (a = r(t.feed.entry[i])) {
            n = "event";
            void 0 !== a.type && (n = a.type, delete a.type), "title" == n ? e.title ? (e.warnings.push("Multiple title slides detected."), e.events.push(a)) : e.title = a : "era" == n ? e.eras.push(a) : e.events.push(a)
          }
        } catch (t) {
          t.message && (t = t.message), e.errors.push(t + " [" + i + "]")
        }
      }
    return e
  };

  function te(t, e) {
    var i;
    if (Yt(t)) {
      try {
        var n = function(t) {
          var e = "v3",
            i = Yt(t);
          if (!i || !i.key) throw new A("invalid_url_err", t);
          var n = i.key,
            r = Xt(n, e);
          if (200 != (a = wt({
              url: r,
              async: !1
            })).status) {
            console.log("Error fetching data " + e + ": " + a.status + " - " + a.statusText);
            var a;
            r = Xt(n, e = "v4");
            if (console.log("trying v4 - " + t), 403 == (a = wt({
                url: r,
                async: !1
              })).status) throw new A("invalid_url_share_required");
            if (200 != a.status) {
              var o = "Error fetching data " + e + ": " + a.status + " - " + a.statusText;
              throw console.log(o), new A("google_error", o)
            }
          }
          var s = JSON.parse(a.responseText);
          if (s.error) {
            o = "Error fetching data " + e + ": " + a.status + " - " + a.statusText;
            throw console.log(o), console.log(s.error), new A("google_error", o)
          }
          return Qt(s)
        }(t)
      } catch (t) {
        return i = new Gt, "NetworkError" == t.name ? i.logError(new A("network_err")) : "TLError" == t.name ? i.logError(t) : i.logError(new A("unknown_read_err", t.name)), void e(i)
      }
      if (i = new Gt(n), n.errors)
        for (var r = 0; r < n.errors.length; r++) i.logError(n.errors[r]);
      e(i)
    } else wt({
      url: t,
      dataType: "json",
      success: function(t) {
        try {
          i = new Gt(t)
        } catch (t) {
          (i = new Gt).logError(t)
        }
        e(i)
      },
      error: function(t, n, r) {
        if (i = new Gt, "parsererror" == n) r = new A("invalid_url_err");
        else r = new A("unknown_read_err", n);
        i.logError(r), e(i)
      }
    })
  }
  class ee {
    constructor(t) {
      if (!t) throw new A("axis_helper_no_options_err");
      this.scale = t.scale, this.minor = t.minor, this.major = t.major
    }
    getPixelsPerTick(t) {
      return t * this.minor.factor
    }
    getMajorTicks(t) {
      return this._getTicks(t, this.major)
    }
    getMinorTicks(t) {
      return this._getTicks(t, this.minor)
    }
    _getTicks(t, e) {
      for (var i = t._scaled_padding * e.factor, n = t._earliest - i, r = t._latest + i, a = [], o = n; o < r; o += e.factor) a.push(t.getDateFromTime(o).floor(e.name));
      return {
        name: e.name,
        ticks: a
      }
    }
  }
  var ie = {},
    ne = function(t, e) {
      ie[t] = [];
      for (var i = 0; i < e.length - 1; i++) {
        var n = e[i],
          r = e[i + 1];
        ie[t].push(new ee({
          scale: n[3],
          minor: {
            name: n[0],
            factor: n[1]
          },
          major: {
            name: r[0],
            factor: r[1]
          }
        }))
      }
    };
  ne("human", bt), ne("cosmological", At);
  class re {
    constructor(t, e) {
      var i = t.events;
      this._scale = t.scale, e = N({
        display_width: 500,
        screen_multiplier: 3,
        max_rows: null
      }, e), this._display_width = e.display_width, this._screen_multiplier = e.screen_multiplier, this._pixel_width = this._screen_multiplier * this._display_width, this._group_labels = void 0, this._positions = [], this._pixels_per_milli = 0, this._earliest = t.getEarliestDate().getTime(), this._latest = t.getLatestDate().getTime(), this._span_in_millis = this._latest - this._earliest, this._span_in_millis <= 0 && (this._span_in_millis = this._computeDefaultSpan(t)), this._average = this._span_in_millis / i.length, this._pixels_per_milli = this.getPixelWidth() / this._span_in_millis, this._axis_helper = function(t, e) {
        "number" != typeof e && (e = 100);
        var i = t.getScale(),
          n = ie[i];
        if (!n) throw new A("axis_helper_scale_err", i);
        for (var r = null, a = 0; a < n.length; a++) {
          var o = n[a],
            s = o.getPixelsPerTick(t._pixels_per_milli);
          if (s > e) return null == r || Math.abs(e - s) < Math.abs(e - s) ? o : r;
          r = o
        }
        return n[n.length - 1]
      }(this), this._scaled_padding = 1 / this.getPixelsPerTick() * (this._display_width / 2), this._computePositionInfo(i, e.max_rows)
    }
    _computeDefaultSpan(t) {
      if ("human" == t.scale) {
        for (var e = {}, i = 0; i < t.events.length; i++) {
          var n = t.events[i].start_date.findBestFormat();
          e[n] = e[n] ? e[n] + 1 : 1
        }
        for (i = bt.length - 1; i >= 0; i--)
          if (e.hasOwnProperty(bt[i][0])) {
            var r = bt[bt.length - 1];
            return bt[i + 1] && (r = bt[i + 1]), r[1]
          } return 31536e6
      }
      return 2e5
    }
    getGroupLabels() {
      return this._group_labels || []
    }
    getScale() {
      return this._scale
    }
    getNumberOfRows() {
      return this._number_of_rows
    }
    getPixelWidth() {
      return this._pixel_width
    }
    getPosition(t) {
      return (t - this._earliest) * this._pixels_per_milli
    }
    getPositionInfo(t) {
      return this._positions[t]
    }
    getPixelsPerTick() {
      return this._axis_helper.getPixelsPerTick(this._pixels_per_milli)
    }
    getTicks() {
      return {
        major: this._axis_helper.getMajorTicks(this),
        minor: this._axis_helper.getMinorTicks(this)
      }
    }
    getDateFromTime(t) {
      if ("human" == this._scale) return new Lt(t);
      if ("cosmological" == this._scale) return new jt(new St(t));
      throw new A("time_scale_scale_err", this._scale)
    }
    getMajorScale() {
      return this._axis_helper.major.name
    }
    getMinorScale() {
      return this._axis_helper.minor.name
    }
    _assessGroups(t) {
      for (var e = [], i = !1, n = 0; n < t.length; n++) t[n].group && (e.indexOf(t[n].group) < 0 ? e.push(t[n].group) : i = !0);
      return e.length && i && e.push(""), e
    }
    _computeRowInfo(t, e) {
      for (var i = [], n = 0, r = 0; r < t.length; r++) {
        var a = t[r],
          o = [];
        delete a.row;
        for (var s = 0; s < i.length; s++)
          if (o.push(i[s].end - a.start), o[s] <= 0) {
            a.row = s, i[s] = a;
            break
          } if (void 0 === a.row)
          if (null === e) a.row = i.length, i.push(a);
          else if (e > 0) a.row = i.length, i.push(a), e--;
        else {
          var l = Math.min.apply(null, o),
            h = o.indexOf(l);
          a.row = h, a.end > i[h].end && (i[h] = a), n++
        }
      }
      return {
        n_rows: i.length,
        n_overlaps: n
      }
    }
    _computePositionInfo(t, e, i) {
      i = i || 100;
      for (var n = [], r = !1, a = 0; a < t.length; a++) {
        var o = {
          start: this.getPosition(t[a].start_date.getTime())
        };
        if (this._positions.push(o), void 0 !== t[a].end_date) {
          var s = this.getPosition(t[a].end_date.getTime());
          o.width = s - o.start, o.width > i ? o.end = o.start + o.width : o.end = o.start + i
        } else o.width = i, o.end = o.start + i;
        t[a].group ? n.indexOf(t[a].group) < 0 && n.push(t[a].group) : r = !0
      }
      if (n.length) {
        r && n.push("");
        var l = [];
        for (a = 0; a < n.length; a++) l[a] = {
          label: n[a],
          idx: a,
          positions: [],
          n_rows: 1,
          n_overlaps: 0
        };
        for (a = 0; a < this._positions.length; a++) {
          (o = this._positions[a]).group = n.indexOf(t[a].group || ""), o.row = 0;
          for (var h = (d = l[o.group]).positions.length - 1; h >= 0; h--) d.positions[h].end > o.start && d.n_overlaps++;
          d.positions.push(o)
        }
        for (var c = n.length;;) {
          var u = Math.max(0, e - c);
          if (!u) break;
          if (l.sort((function(t, e) {
              return t.n_overlaps > e.n_overlaps ? -1 : t.n_overlaps < e.n_overlaps ? 1 : t.idx - e.idx
            })), !l[0].n_overlaps) break;
          for (c = 0, a = 0; a < l.length; a++) {
            var d;
            if ((d = l[a]).n_overlaps && u) {
              var f = this._computeRowInfo(d.positions, d.n_rows + 1);
              d.n_rows = f.n_rows, d.n_overlaps = f.n_overlaps, u--
            }
            c += d.n_rows
          }
        }
        this._number_of_rows = c, this._group_labels = [], l.sort((function(t, e) {
          return t.idx - e.idx
        }));
        a = 0;
        for (var p = 0; a < l.length; a++) {
          this._group_labels.push({
            label: l[a].label,
            rows: l[a].n_rows
          });
          for (h = 0; h < l[a].positions.length; h++) {
            (o = l[a].positions[h]).row += p
          }
          p += l[a].n_rows
        }
      } else {
        var _ = this._computeRowInfo(this._positions, e);
        this._number_of_rows = _.n_rows
      }
    }
  }
  class ae {
    constructor(t) {
      this._el = {
        parent: {},
        container: {},
        message: {}
      }, this.options = {
        width: 600,
        height: 600
      }, this.data = {
        label: "",
        rows: 1
      }, this._el.container = M("div", "tl-timegroup"), N(this.data, t), this.animator = {}, this._initLayout(), this._initEvents()
    }
    updateDisplay(t, e) {}
    setRowPosition(t, e) {
      this.options.height = e * this.data.rows, this.setPosition({
        top: t
      }), this._el.container.style.height = this.options.height + "px"
    }
    setAlternateRowColor(t, e) {
      var i = "tl-timegroup";
      t && (i += " tl-timegroup-alternate"), e && (i += " tl-timegroup-hidden"), this._el.container.className = i
    }
    _onMouseClick() {
      this.fire("clicked", this.options)
    }
    _initLayout() {
      this._el.message = M("div", "tl-timegroup-message", this._el.container), this._el.message.innerHTML = this.data.label
    }
    _initEvents() {
      gt.addListener(this._el.container, "click", this._onMouseClick, this)
    }
    _updateDisplay(t, e, i) {}
  }
  B(ae, ut, pt);
  i(2);
  class oe {
    constructor(t, e, i, n) {
      this.start_date = t, this.end_date = e, this.headline = i, this._el = {
        container: {},
        background: {},
        content_container: {},
        content: {},
        text: {}
      }, this._text = {}, this._state = {
        loaded: !1
      }, this.options = {
        duration: 1e3,
        ease: st,
        width: 600,
        height: 600,
        marker_width_min: 100
      }, this.active = !1, this.animator = {}, this.has_end_date = !1, N(this.options, n), this._initLayout(), this._initEvents()
    }
    show() {}
    hide() {}
    setActive(t) {}
    addTo(t) {
      t.appendChild(this._el.container)
    }
    removeFrom(t) {
      t.removeChild(this._el.container)
    }
    updateDisplay(t, e) {
      this._updateDisplay(t, e)
    }
    getLeft() {
      return this._el.container.style.left.slice(0, -2)
    }
    getTime() {
      return this.start_date.getTime()
    }
    getEndTime() {
      return !!this.end_date && this.end_date.getTime()
    }
    setHeight(t) {
      var e = 1;
      this._el.content_container.style.height = t + "px", this._el.content.className = "tl-timeera-content", l ? ((e = Math.floor(t / 14)) < 1 && (e = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = e) : (e = t / 12, this._text.className = e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = 12 * e + "px")
    }
    setWidth(t) {
      this.end_date && (this._el.container.style.width = t + "px", t > this.options.marker_width_min ? (this._el.content_container.style.width = t + "px", this._el.content_container.className = "tl-timeera-content-container tl-timeera-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timeera-content-container"))
    }
    setClass(t) {
      this._el.container.className = t
    }
    setRowPosition(t, e) {
      this.setPosition({
        top: t
      }), e < 56 && D(this._el.content_container, "tl-timeera-content-container-small")
    }
    setColor(t) {
      this._el.container.className = "tl-timeera tl-timeera-color" + t
    }
    _initLayout() {
      this._el.container = M("div", "tl-timeera"), this.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timeera tl-timeera-with-end"), this._el.content_container = M("div", "tl-timeera-content-container", this._el.container), this._el.background = M("div", "tl-timeera-background", this._el.content_container), this._el.content = M("div", "tl-timeera-content", this._el.content_container), this._el.text = M("div", "tl-timeera-text", this._el.content), this._text = M("h2", "tl-headline", this._el.text), this.headline && "" != this.headline && (this._text.innerHTML = Y(this.headline)), this.onLoaded()
    }
    _initEvents() {}
    _updateDisplay(t, e, i) {
      t && (this.options.width = t), e && (this.options.height = e)
    }
  }
  B(oe, ut, pt);
  class se {
    constructor(t, e, i) {
      i && this.setLanguage(i), this._el = {
        container: {},
        content_container: {},
        major: {},
        minor: {}
      }, this._text = {}, this._state = {
        loaded: !1
      }, this.data = {}, this.options = {
        duration: 1e3,
        ease: st,
        width: 600,
        height: 600
      }, this.active = !1, this.animator = {}, this.axis_helper = {}, this.minor_ticks = [], this.major_ticks = [], this.dateformat_lookup = {
        millisecond: "time_milliseconds",
        second: "time_short",
        minute: "time_no_seconds_short",
        hour: "time_no_minutes_short",
        day: "full_short",
        month: "month_short",
        year: "year",
        decade: "year",
        century: "year",
        millennium: "year",
        age: "compact",
        epoch: "compact",
        era: "compact",
        eon: "compact",
        eon2: "compact"
      }, this._el.container = "object" == typeof t ? t : T(t), N(this.options, e), this._initLayout(), this._initEvents()
    }
    show() {}
    hide() {}
    addTo(t) {
      t.appendChild(this._el.container)
    }
    removeFrom(t) {
      t.removeChild(this._el.container)
    }
    updateDisplay(t, e) {
      this._updateDisplay(t, e)
    }
    getLeft() {
      return this._el.container.style.left.slice(0, -2)
    }
    drawTicks(t, e) {
      var i = t.getTicks();
      this._el.minor, this.dateformat_lookup[i.minor.name], i.minor.ticks, this.minor_ticks, this._el.major, this.dateformat_lookup[i.major.name], i.major.ticks, this.major_ticks;
      this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor", this._el.major.style.opacity = 0, this._el.minor.style.opacity = 0, this.major_ticks = this._createTickElements(i.major.ticks, this._el.major, this.dateformat_lookup[i.major.name]), this.minor_ticks = this._createTickElements(i.minor.ticks, this._el.minor, this.dateformat_lookup[i.minor.name], i.major.ticks), this.positionTicks(t, e, !0), this._el.major.className = "tl-timeaxis-major tl-animate-opacity tl-timeaxis-animate-opacity", this._el.minor.className = "tl-timeaxis-minor tl-animate-opacity tl-timeaxis-animate-opacity", this._el.major.style.opacity = 1, this._el.minor.style.opacity = 1
    }
    _createTickElements(t, e, i, n) {
      e.innerHTML = "";
      var r = {};
      if (r[new Date(-1, 13, -30).getTime()] = !0, n)
        for (var a = 0; a < n.length; a++) r[n[a].getTime()] = !0;
      var o = [];
      for (a = 0; a < t.length; a++) {
        var s = t[a];
        if (!(s.getTime() in r)) {
          var l = M("div", "tl-timeaxis-tick", e),
            h = M("span", "tl-timeaxis-tick-text tl-animate-opacity", l);
          h.innerHTML = s.getDisplayDate(this.getLanguage(), i), o.push({
            tick: l,
            tick_text: h,
            display_date: s.getDisplayDate(this.getLanguage(), i),
            date: s
          })
        }
      }
      return o
    }
    positionTicks(t, e, i) {
      i ? (this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor") : (this._el.major.className = "tl-timeaxis-major tl-timeaxis-animate", this._el.minor.className = "tl-timeaxis-minor tl-timeaxis-animate"), this._positionTickArray(this.major_ticks, t, e), this._positionTickArray(this.minor_ticks, t, e)
    }
    _positionTickArray(t, e, i) {
      if (t[1] && t[0]) {
        var n = 1;
        e.getPosition(t[1].date.getMillisecond()) - e.getPosition(t[0].date.getMillisecond()) < i && (n = Math.round(i / e.getPixelsPerTick()));
        for (var r = 1, a = 0; a < t.length; a++) {
          var o = t[a];
          o.tick.style.left = e.getPosition(o.date.getMillisecond()) + "px", o.tick_text.innerHTML = o.display_date, n > 1 ? r >= n ? (r = 1, o.tick_text.style.opacity = 1, o.tick.className = "tl-timeaxis-tick") : (r++, o.tick_text.style.opacity = 0, o.tick.className = "tl-timeaxis-tick tl-timeaxis-tick-hidden") : (o.tick_text.style.opacity = 1, o.tick.className = "tl-timeaxis-tick")
        }
      }
    }
    _initLayout() {
      this._el.content_container = M("div", "tl-timeaxis-content-container", this._el.container), this._el.major = M("div", "tl-timeaxis-major", this._el.content_container), this._el.minor = M("div", "tl-timeaxis-minor", this._el.content_container), this.onLoaded()
    }
    _initEvents() {}
    _updateDisplay(t, e, i) {
      t && (this.options.width = t), e && (this.options.height = e)
    }
  }
  B(se, ut, pt, zt);
  class le {
    constructor(t, e, i) {
      this._el = {
          container: {},
          content_container: {},
          content: {},
          headline: {},
          date: {}
        }, this.options = {
          title: !1
        }, this.data = {
          unique_id: "",
          headline: "headline",
          text: "text"
        },
        function(t, e) {
          t.data = O({}, t.data, e), "" === t.data.unique_id && (t.data.unique_id = $(6))
        }(this, t), N(this.options, e), this._el.container = M("div", "tl-text"), this._el.container.id = this.data.unique_id, this._initLayout(), i && i.appendChild(this._el.container)
    }
    show() {}
    hide() {}
    addTo(t) {
      t.appendChild(this._el.container)
    }
    removeFrom(t) {
      t.removeChild(this._el.container)
    }
    headlineHeight() {
      return this._el.headline.offsetHeight + 40
    }
    addDateText(t) {
      this._el.date.innerHTML = t
    }
    onLoaded() {
      this.fire("loaded", this.data)
    }
    onAdd() {
      this.fire("added", this.data)
    }
    onRemove() {
      this.fire("removed", this.data)
    }
    _initLayout() {
      if (this._el.content_container = M("div", "tl-text-content-container", this._el.container), this._el.date = M("h3", "tl-headline-date", this._el.content_container), "" != this.data.headline) {
        var t = "tl-headline";
        this.options.title && (t = "tl-headline tl-headline-title"), this._el.headline = M("h2", t, this._el.content_container), this._el.headline.innerHTML = this.data.headline
      }
      if ("" != this.data.text) {
        var e = "";
        e += (i = 1 == this.options.autolink ? J(this.data.text) : this.data.text).match(/<p>[\s\S]*?<\/p>/) ? i : "<p>" + i + "</p>", this._el.content = M("div", "tl-text-content", this._el.content_container), this._el.content.innerHTML = e
      }
      var i;
      this.onLoaded()
    }
  }
  B(le, ut);
  class he {
    constructor(t, e, i) {
      i && this.setLanguage(i), this._el = {
        container: {},
        content_container: {},
        content: {},
        content_item: {},
        content_link: {},
        caption: null,
        credit: null,
        parent: {},
        link: null
      }, this.player = null, this.timer = null, this.load_timer = null, this.message = null, this.media_id = null, this._state = {
        loaded: !1,
        show_meta: !1,
        media_loaded: !1
      }, this.data = {
        unique_id: null,
        url: null,
        credit: null,
        caption: null,
        credit_alternate: null,
        caption_alternate: null,
        link: null,
        link_target: null
      }, this.options = {
        api_key_flickr: "bd3a7c45ddd52f3101825d41563a6125",
        api_key_googlemaps: "AIzaSyB9dW8e_iRrATFa8g24qB6BDBGdkrLDZYI",
        api_key_embedly: "",
        credit_height: 0,
        caption_height: 0,
        background: 0
      }, this.animator = {}, N(this.options, e), N(this.data, t), this.options.background || (this._el.container = M("div", "tl-media"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._initLayout())
    }
    loadMedia() {
      var t = this;
      if (!this._state.loaded) try {
        this.load_timer = setTimeout((function() {
          t.loadingMessage(), t._loadMedia(), t._updateDisplay()
        }), 1200)
      } catch (t) {
        trace("Error loading media for ", this._media), trace(t)
      }
    }
    _updateMessage(t) {
      this.message && this.message.updateMessage(t)
    }
    loadingMessage() {
      this._updateMessage(this._("loading") + " " + this.options.media_name)
    }
    errorMessage(t) {
      t = t ? this._("error") + ": " + t : this._("error"), this._updateMessage(t)
    }
    updateMediaDisplay(t) {
      this._state.loaded && !this.options.background && (this._el.content_item.style.maxHeight = c ? this.options.height / 2 + "px" : this.options.height - this.options.credit_height - this.options.caption_height - 30 + "px", this._el.container.style.maxWidth = this.options.width + "px", p && (this._el.content_item.offsetWidth, this._el.content_item.offsetHeight), this._updateMediaDisplay(t), this._state.media_loaded && (this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")))
    }
    _loadMedia() {
      this.onLoaded()
    }
    _updateMediaDisplay(t) {
      p && (this._el.content_item.style.maxWidth = this.options.width + "px", this._el.content_item.style.width = "auto")
    }
    _getMeta() {}
    _getImageURL(t, e) {
      return ""
    }
    show() {}
    hide() {}
    addTo(t) {
      t.appendChild(this._el.container), this.onAdd()
    }
    removeFrom(t) {
      t.removeChild(this._el.container), this.onRemove()
    }
    getImageURL(t, e) {
      return this._getImageURL(t, e)
    }
    updateDisplay(t, e, i) {
      this._updateDisplay(t, e, i)
    }
    stopMedia() {
      this._stopMedia()
    }
    loadErrorDisplay(t) {
      try {
        this._el.content.removeChild(this._el.content_item)
      } catch (t) {}
      this._el.content_item = M("div", "tl-media-item tl-media-loaderror", this._el.content), this._el.content_item.innerHTML = "<div class='tl-icon-" + this.options.media_type + "'></div><p>" + t + "</p>", this.onLoaded(!0)
    }
    onLoaded(t) {
      this._state.loaded = !0, this.fire("loaded", this.data), this.message && this.message.hide(), t || this.options.background || this.showMeta(), this.updateDisplay()
    }
    onMediaLoaded(t) {
      this._state.media_loaded = !0, this.fire("media_loaded", this.data), this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")
    }
    showMeta(t, e) {
      this._state.show_meta = !0, this.data.credit && "" != this.data.credit && (this._el.credit = M("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = 1 == this.options.autolink ? J(this.data.credit) : this.data.credit, this.options.credit_height = this._el.credit.offsetHeight), this.data.caption && "" != this.data.caption && (this._el.caption = M("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = 1 == this.options.autolink ? J(this.data.caption) : this.data.caption, this.options.caption_height = this._el.caption.offsetHeight), this.data.caption && this.data.credit || this.getMeta()
    }
    getMeta() {
      this._getMeta()
    }
    updateMeta() {
      !this.data.credit && this.data.credit_alternate && (this._el.credit = M("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = this.data.credit_alternate, this.options.credit_height = this._el.credit.offsetHeight), !this.data.caption && this.data.caption_alternate && (this._el.caption = M("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = this.data.caption_alternate, this.options.caption_height = this._el.caption.offsetHeight), this.updateDisplay()
    }
    onAdd() {
      this.fire("added", this.data)
    }
    onRemove() {
      this.fire("removed", this.data)
    }
    _initLayout() {
      this.message = new Rt(this._el.container, this.options, this.getLanguage()), this._el.content_container = M("div", "tl-media-content-container", this._el.container), this.data.link && "" != this.data.link ? (this._el.link = M("a", "tl-media-link", this._el.content_container), this._el.link.href = this.data.link, this.data.link_target && "" != this.data.link_target ? this._el.link.target = this.data.link_target : this._el.link.target = "_blank", this._el.content = M("div", "tl-media-content", this._el.link)) : this._el.content = M("div", "tl-media-content", this._el.content_container)
    }
    _updateDisplay(t, e, i) {
      t && (this.options.width = t), e && (this.options.height = e), i && (this.options.layout = i), this._el.credit && (this.options.credit_height = this._el.credit.offsetHeight), this._el.caption && (this.options.caption_height = this._el.caption.offsetHeight + 5), this.updateMediaDisplay(this.options.layout)
    }
    domCreate(...t) {
      return M(...t)
    }
    _stopMedia() {}
  }
  B(he, ut, zt);
  class ce extends he {
    _loadMedia() {
      this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
    }
    createMedia() {
      var t = this,
        e = "tl-media-item tl-media-image tl-media-shadow";
      (this.data.url.match(/.png(\?.*)?$/) || this.data.url.match(/.svg(\?.*)?$/)) && (e = "tl-media-item tl-media-image"), this.data.link ? (this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_item = this.domCreate("img", e, this._el.content_link)) : this._el.content_item = this.domCreate("img", e, this._el.content), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = V(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = V(this.data.caption)), this._el.content_item.addEventListener("load", (function(e) {
        t.onMediaLoaded()
      })), this._el.content_item.src = this.getImageURL()
    }
    getImageURL(t, e) {
      return X(this.data.url)
    }
    _updateMediaDisplay(t) {
      p && (this._el.content_item.style.width = "auto")
    }
  }

  function ue(t, e, i, n) {
    fe.js(t, e, i, n)
  }

  function de(t, e, i, n) {
    fe.css(t, e, i, n)
  }
  let fe = new class {
    constructor(t) {
      this.doc = t, this.pending = {}, this.queue = {
        css: [],
        js: []
      }, this.styleSheets = t.styleSheets, this.env = this.getEnv(), this.head = this.doc.head || this.doc.getElementsByTagName("head")[0], this.pollCount = 0
    }
    createNode(t, e) {
      var i, n = this.doc.createElement(t);
      for (i in e) e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
      return n
    }
    finish(t) {
      var e, i, n = this.pending[t];
      n && (e = n.callback, (i = n.urls).shift(), this.pollCount = 0, i.length || (e && e.call(n.context, n.obj), this.pending[t] = null, this.queue[t].length && this.load(t)))
    }
    getEnv() {
      var t = navigator.userAgent,
        e = {
          async: !0 === this.doc.createElement("script").async
        };
      return (e.webkit = /AppleWebKit\//.test(t)) || (e.ie = /MSIE/.test(t)) || (e.opera = /Opera/.test(t)) || (e.gecko = /Gecko\//.test(t)) || (e.unknown = !0), e
    }
    load(t, e, i, n, r) {
      var a, o, s, l, h, c, u = function() {
          this.finish(t)
        }.bind(this),
        d = "css" === t,
        f = [];
      if (e)
        if (e = "string" == typeof e ? [e] : e.concat(), d || this.env.async || this.env.gecko || this.env.opera) this.queue[t].push({
          urls: e,
          callback: i,
          obj: n,
          context: r
        });
        else
          for (a = 0, o = e.length; a < o; ++a) this.queue[t].push({
            urls: [e[a]],
            callback: a === o - 1 ? i : null,
            obj: n,
            context: r
          });
      if (!this.pending[t] && (l = this.pending[t] = this.queue[t].shift())) {
        for (a = 0, o = (h = l.urls).length; a < o; ++a) c = h[a], d ? s = this.env.gecko ? this.createNode("style") : this.createNode("link", {
          href: c,
          rel: "stylesheet"
        }) : (s = this.createNode("script", {
          src: c
        })).async = !1, s.className = "lazyload", s.setAttribute("charset", "utf-8"), this.env.ie && !d ? s.onreadystatechange = function() {
          /loaded|complete/.test(s.readyState) && (s.onreadystatechange = null, u())
        } : d && (this.env.gecko || this.env.webkit) ? this.env.webkit ? (l.urls[a] = s.href, this.pollWebKit()) : (s.innerHTML = '@import "' + c + '";', this.pollGecko(s)) : s.onload = s.onerror = u, f.push(s);
        for (a = 0, o = f.length; a < o; ++a) this.head.appendChild(f[a])
      }
    }
    pollGecko(t) {
      var e;
      try {
        e = !!t.sheet.cssRules
      } catch (n) {
        if (this.pollCount += 1, this.pollCount < 200) {
          var i = this;
          setTimeout((function() {
            i.pollGecko(t)
          }), 50)
        } else e && this.finish("css");
        return
      }
      this.finish("css")
    }
    pollWebKit() {
      var t, e = this.pending.css;
      if (e) {
        for (t = this.styleSheets.length; --t >= 0;)
          if (this.styleSheets[t].href === e.urls[0]) {
            this.finish("css");
            break
          } this.pollCount += 1, e && (this.pollCount < 200 ? setTimeout(this.pollWebKit.bind(this), 50) : this.finish("css"))
      }
    }
    css(t, e, i, n) {
      this.load("css", t, e, i, n)
    }
    js(t, e, i, n) {
      this.load("js", t, e, i, n)
    }
  }(document);
  class pe extends he {
    _loadMedia() {
      var t, e = this;
      this.youtube_loaded = !1, this._el.content_item = this.domCreate("div", "tl-media-item tl-media-youtube tl-media-shadow", this._el.content), this._el.content_item.id = $(7), t = function(t) {
        var e, i, n, r = [];
        (e = t.toString()).match("&#038;") ? e = e.replace("&#038;", "&") : e.match("&#38;") ? e = e.replace("&#38;", "&") : e.match("&amp;") && (e = e.replace("&amp;", "&")), n = e.slice(e.indexOf("?") + 1).split("&");
        for (var a = 0; a < n.length; a++) i = n[a].split("="), r.push(i[0]), r[i[0]] = i[1];
        return r
      }(this.data.url), this.media_id = {}, this.data.url.match("v=") ? this.media_id.id = t.v : this.data.url.match("/embed/") ? this.media_id.id = this.data.url.split("embed/")[1].split(/[?&]/)[0] : this.data.url.match(/v\/|v=|youtu\.be\//) ? this.media_id.id = this.data.url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0] : z("YOUTUBE IN URL BUT NOT A VALID VIDEO"), this.data.url.match("start=") ? this.media_id.start = nt(this.data.url.split("start=")[1]) : this.data.url.match("t=") && (this.media_id.start = nt(this.data.url.split("t=")[1])), this.data.url.match("end=") && (this.media_id.end = nt(this.data.url.split("end=")[1])), this.media_id.hd = Boolean(void 0 !== t.hd), ue("https://www.youtube.com/iframe_api", (function() {
        e.createMedia()
      }))
    }
    _updateMediaDisplay() {
      this._el.content_item.style.height = Q({
        w: this.options.width
      }) + "px", this._el.content_item.style.width = this.options.width + "px"
    }
    _stopMedia() {
      if (this.youtube_loaded) try {
        this.player.getPlayerState() == YT.PlayerState.PLAYING && this.player.pauseVideo()
      } catch (t) {
        z(t)
      }
    }
    createMedia() {
      var t = this;
      clearTimeout(this.timer), "undefined" != typeof YT && void 0 !== YT.Player ? this.player = new YT.Player(this._el.content_item.id, {
        playerVars: {
          enablejsapi: 1,
          color: "white",
          controls: 1,
          start: this.media_id.start,
          end: this.media_id.end,
          fs: 1
        },
        videoId: this.media_id.id,
        events: {
          onReady: function() {
            t.onPlayerReady(), t.onLoaded()
          },
          onStateChange: t.onStateChange
        }
      }) : this.timer = setTimeout((function() {
        t.createMedia()
      }), 1e3)
    }
    onPlayerReady(t) {
      this.youtube_loaded = !0, this._el.content_item = document.getElementById(this._el.content_item.id), this.onMediaLoaded()
    }
    onStateChange(t) {
      t.data == YT.PlayerState.ENDED && (t.target.seekTo(0), t.target.pauseVideo())
    }
  }
  class _e extends he {
    _loadMedia() {
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-map tl-media-shadow", this._el.content), this.media_id = this.data.url, this.mapframe = this.domCreate("iframe", "", this._el.content_item), window.stash = this, this.mapframe.width = "100%", this.mapframe.height = "100%", this.mapframe.frameBorder = "0", this.mapframe.src = this.makeGoogleMapsEmbedURL(this.media_id, this.options.api_key_googlemaps), this.onLoaded()
    }
    _updateMediaDisplay() {
      if (this._state.loaded) {
        var t = K({
          w: this._el.content_item.offsetWidth
        });
        this._el.content_item.style.height = t.h + "px"
      }
    }
    makeGoogleMapsEmbedURL(t, e) {
      var i = !1;
      var n = {
          view: ["center"],
          place: ["q", "center"],
          directions: ["origin", "destination", "center"],
          search: ["q", "center"],
          streetview: ["fov", "heading", "pitch"]
        },
        r = /(https:\/\/.+google.+?\/maps)/,
        a = /@([-\d.]+),([-\d.]+)/,
        o = /([\w\W]+)/,
        s = /,((?:[-\d.]+[zmayht],?)*)/,
        l = {
          view: new RegExp(r.source + "/" + a.source + s.source),
          place: new RegExp(r.source + "/place/" + o.source + "/" + a.source + s.source),
          directions: new RegExp(r.source + "/dir/" + o.source + "/" + o.source + "/" + a.source + s.source),
          search: new RegExp(r.source + "/search/" + o.source + "/" + a.source + s.source)
        };
      return function(t) {
        function r(e, r) {
          if ("z" == e.slice(-1)) r.zoom = e;
          else if ("m" == e.slice(-1)) r.zoom = 14, r.maptype = "satellite";
          else if ("t" == e.slice(-1)) {
            if (i = !0, "place" == a) var o = t.match(l.place)[3] + "," + t.match(l.place)[4];
            else {
              o = r.center;
              delete r.center
            }(r = {}).location = o, streetview_params = e.split(",");
            for (let t in n.streetview) {
              var s = parseInt(t) + 1;
              "pitch" == n.streetview[t] && "90t" == streetview_params[s] ? r[n.streetview[t]] = 0 : r[n.streetview[t]] = streetview_params[s].slice(0, -1)
            }
          }
          return r
        }
        let a = "view";
        return t.match(l.place) ? a = "place" : t.match(l.directions) ? a = "directions" : t.match(l.search) && (a = "search"),
          function(t, a) {
            var o = {},
              s = a[1],
              l = a[a.length - 1];
            for (let e in n[t]) {
              var h = parseInt(e) + 2;
              "center" == n[t][e] ? o[n[t][e]] = a[h] + "," + a[++h] : o[n[t][e]] = a[h]
            }
            return (o = r(l, o)).key = e, 1 == i && (t = "streetview"), s + "/embed/v1/" + t + function(t) {
              var e = [];
              for (var i in t) t.hasOwnProperty(i) && e.push(i + "=" + t[i]);
              return "?" + e.join("&")
            }(o)
          }(a, t.match(l[a]))
      }(t)
    }
  }
  class me extends he {
    _loadMedia() {
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-blockquote", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.media_id = this.data.url, this._el.content_item.innerHTML = this.media_id, this.onLoaded()
    }
    updateMediaDisplay() {}
  }
  class ge extends he {
    _loadMedia() {
      var t, e = this;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-wikipedia", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.media_id = this.data.url.split("wiki/")[1].split("#")[0].replace("_", " "), this.media_id = this.media_id.replace(" ", "%20"), t = "https://" + this.data.url.split("//")[1].split(".wikipedia")[0] + ".wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&redirects=&titles=" + this.media_id + "&exintro=1&format=json&callback=?", wt({
        type: "GET",
        url: t,
        dataType: "json",
        success: function(t) {
          e.createMedia(t)
        },
        error: function(t, i) {
          var n = "";
          n += e._("wikipedia_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(n)
        }
      })
    }
    createMedia(t) {
      var e = "";
      if (t.query) {
        var i = "";
        (e = {
          entry: {},
          title: "",
          text: "",
          extract: "",
          paragraphs: 1,
          page_image: "",
          text_array: []
        }).entry = function(t, e) {
          if (void 0 !== t) {
            var i = 0;
            for (var n in t) {
              if (e === i) return t[n];
              i++
            }
            return ""
          }
          return ""
        }(t.query.pages, 0), e.extract = e.entry.extract, e.title = e.entry.title, e.page_image = e.entry.thumbnail, e.extract.match("<p>") ? e.text_array = e.extract.split("<p>") : e.text_array.push(e.extract);
        for (var n = 0; n < e.text_array.length; n++) n + 1 <= e.paragraphs && n + 1 < e.text_array.length && (e.text += "<p>" + e.text_array[n + 1]);
        i += "<span class='tl-icon-wikipedia'></span>", i += "<div class='tl-wikipedia-title'><h4><a href='" + this.data.url + "' target='_blank'>" + e.title + "</a></h4>", i += "<span class='tl-wikipedia-source'>" + this._("wikipedia") + "</span></div>", e.page_image, i += e.text, e.extract.match("REDIRECT") || (this._el.content_item.innerHTML = i, this.onLoaded())
      }
    }
    updateMediaDisplay() {}
  }
  class ve extends he {
    _loadMedia() {
      var t, e = this;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-soundcloud tl-media-shadow", this._el.content), this.media_id = this.data.url, t = "https://soundcloud.com/oembed?url=" + this.media_id + "&format=js&callback=?", yt(t, (function(t) {
        ue("https://w.soundcloud.com/player/api.js", (function() {
          e.createMedia(t)
        }))
      }))
    }
    createMedia(t) {
      this._el.content_item.innerHTML = t.html, self.widget = SC.Widget(this._el.content_item.querySelector("iframe")), this.soundCloudCreated = !0, this.onLoaded()
    }
    _stopMedia() {
      this.soundCloudCreated && self.widget.pause()
    }
  }
  class ye extends he {
    _loadMedia() {
      var t, e = this;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-vimeo tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/video\/|\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
      var i = null;
      this.data.url.match(/#t=([^&]+).*/) && (i = this.data.url.match(/#t=([^&]+).*/)[1]), t = "https://player.vimeo.com/video/" + this.media_id + "?api=1&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff", i && (t = t += "&amp;#t=" + i), this.player = this.domCreate("iframe", "", this._el.content_item), this.player.addEventListener("load", (function(t) {
        e.onMediaLoaded()
      })), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded()
    }
    _updateMediaDisplay() {
      this._el.content_item.style.height = Q({
        w: this._el.content_item.offsetWidth
      }) + "px"
    }
    _stopMedia() {
      try {
        this.player.contentWindow.postMessage(JSON.stringify({
          method: "pause"
        }), "https://player.vimeo.com")
      } catch (t) {
        z(t)
      }
    }
  }
  class we extends he {
    _loadMedia() {
      var t;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-dailymotion", this._el.content), this.data.url.match("video") ? this.media_id = this.data.url.split("video/")[1].split(/[?&]/)[0] : this.media_id = this.data.url.split("embed/")[1].split(/[?&]/)[0], t = "https://www.dailymotion.com/embed/video/" + this.media_id + "?api=postMessage", this._el.content_item.innerHTML = "<iframe autostart='false' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this.onLoaded()
    }
    _updateMediaDisplay() {
      this._state.loaded && (this._el.content_item.style.height = Q({
        w: this._el.content_item.offsetWidth
      }) + "px")
    }
    _stopMedia() {
      this._state.loaded && this._el.content_item.querySelector("iframe").contentWindow.postMessage('{"command":"pause","parameters":[]}', "*")
    }
  }
  class be extends he {
    _loadMedia() {
      var t;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-vine tl-media-shadow", this._el.content), this.media_id = this.data.url.split("vine.co/v/")[1], t = "https://vine.co/v/" + this.media_id + "/embed/simple", this._el.content_item.innerHTML = "<iframe frameborder='0' width='100%' height='100%' src='" + t + "'></iframe><script async src='https://platform.vine.co/static/scripts/embed.js' charset='utf-8'><\/script>", this.onLoaded()
    }
    _updateMediaDisplay() {
      var t = K({
        w: this._el.content_item.offsetWidth,
        h: this.options.height
      });
      this._el.content_item.style.height = t.h + "px"
    }
    _stopMedia() {
      this._el.content_item.querySelector("iframe").contentWindow.postMessage("pause", "*")
    }
  }
  class xe extends he {
    _loadMedia() {
      var t, e = this;
      if (this._el.content_item = this.domCreate("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.data.url.match("^(https?:)?/*(www.)?twitter.com")) this.data.url.match("status/") ? this.media_id = this.data.url.split("status/")[1] : this.data.url.match("statuses/") ? this.media_id = this.data.url.split("statuses/")[1] : this.media_id = "";
      else if (this.data.url.match("<blockquote class=['\"]twitter-tweet['\"]")) {
        var i = this.data.url.match(/(status|statuses)\/(\d+)/);
        if (!(i && i.length > 2)) return void e.loadErrorDisplay(e._("twitterembed_invalidurl_err"));
        this.media_id = i[2]
      }
      t = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", wt({
        type: "GET",
        url: t,
        dataType: "json",
        success: function(t) {
          e.createMedia(t)
        },
        error: function(t, i) {
          var n = "";
          n += e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(n)
        }
      })
    }
    createMedia(t) {
      var e, i, n, r = "",
        a = "",
        o = "",
        s = this;
      a = t.html.split("</p>&mdash;")[0] + "</p></blockquote>", e = t.author_url.split("twitter.com/")[1], i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split('">')[0], n = o.split('">')[1].split("</a>")[0], (a = a.replace(/<a href/gi, '<a target="_blank" href')).includes("pic.twitter.com") ? (ue("https://platform.twitter.com/widgets.js", (function() {
        twttr.widgets.createTweet(s.media_id, s._el.content_item, {
          conversation: "none",
          linkColor: "#cc0000",
          theme: "light"
        })
      })), this.onLoaded()) : (r += a, r += "<div class='vcard'>", r += "<a href='" + i + "' class='twitter-date' target='_blank'>" + n + "</a>", r += "<img src='' class='tl-media-item tl-media-image' target='_blank'></a>", r += "<div class='author'>", r += "<a class='screen-name url' href='" + t.author_url + "' target='_blank'>", r += "<span class='avatar'></span>", r += "<span class='fn'>" + t.author_name + " <span class='tl-icon-twitter'></span></span>", r += "<span class='nickname'>@" + e + "<span class='thumbnail-inline'></span></span>", r += "</a>", r += "</div>", r += "</div>", this._el.content_item.innerHTML = r, this.onLoaded())
    }
    updateMediaDisplay() {}
    _updateMediaDisplay() {}
  }
  class ke extends he {
    _loadMedia() {
      var t, e = this;
      this._el.content_item = this.domCreate("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text";
      var i, n, r, a, o, s, l = this.data.url.match(/(status|statuses)\/(\d+)/);
      l && l.length > 2 ? (this.media_id = l[2], t = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", window.twttr = (i = document, n = "script", r = "twitter-wjs", o = i.getElementsByTagName(n)[0], s = window.twttr || {}, i.getElementById(r) || ((a = i.createElement(n)).id = r, a.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(a, o), s._e = [], s.ready = function(t) {
        s._e.push(t)
      }), s), wt({
        type: "GET",
        url: t,
        dataType: "json",
        success(t) {
          e.createMedia(t)
        },
        error: function(t, i) {
          var n = "";
          n += e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(n)
        }
      })) : e.loadErrorDisplay(e._("twitterembed_invalidurl_err"))
    }
    createMedia(t) {
      var e, i, n, r = "",
        a = "",
        o = "";
      a = t.html.split("</p>&mdash;")[0] + "</p></blockquote>", e = t.author_url.split("twitter.com/")[1], i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split('">')[0], n = o.split('">')[1].split("</a>")[0], a = a.replace(/<a href/gi, '<a target="_blank" href');
      let s = this.media_id;
      a.includes("pic.twitter.com") ? (twttr.ready((function(t) {
        r = document.getElementsByClassName("tl-media-twitter")[0];
        var e = String(s);
        twttr.widgets.createTweet(e, r, {
          conversation: "none",
          linkColor: "#cc0000",
          theme: "light"
        }).then((function(t) {
          this.onLoaded()
        }))
      })), this._el.content_item.innerHTML = r, this.onLoaded()) : (r += a, r += "<div class='vcard'>", r += "<a href='" + i + "' class='twitter-date' target='_blank'>" + n + "</a>", r += "<div class='author'>", r += "<a class='screen-name url' href='" + t.author_url + "' target='_blank'>", r += "<span class='avatar'></span>", r += "<span class='fn'>" + t.author_name + " <span class='tl-icon-twitter'></span></span>", r += "<span class='nickname'>@" + e + "<span class='thumbnail-inline'></span></span>", r += "</a>", r += "</div>", r += "</div>", this._el.content_item.innerHTML = r, this.onLoaded())
    }
    updateMediaDisplay() {}
    _updateMediaDisplay() {}
  }
  class Te extends he {
    _loadMedia() {
      var t, e = this;
      try {
        this.establishMediaID(), t = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", yt(t, (function(t) {
          "ok" == t.stat ? (e.sizes = t.sizes.size, e.options.background || e.createMedia(), e.onLoaded()) : e.loadErrorDisplay(e._("flickr_notfound_err"))
        }))
      } catch (t) {
        e.loadErrorDisplay(e._(t.message_key))
      }
    }
    establishMediaID() {
      if (this.data.url.match(/flic.kr\/.+/i)) {
        var t = this.data.url.split("/").slice(-1)[0];
        this.media_id = tt.decode(t)
      } else {
        var e = this.data.url.indexOf("flickr.com/photos/");
        if (-1 == e) throw new A("flickr_invalidurl_err");
        var i = e + "flickr.com/photos/".length;
        this.media_id = this.data.url.substr(i).split("/")[1]
      }
    }
    createMedia() {
      var t = this;
      this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-flickr tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = V(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = V(this.data.caption)), this._el.content_item.addEventListener("load", (function(e) {
        t.onMediaLoaded()
      })), this._el.content_item.src = this.getImageURL(this.options.width, this.options.height)
    }
    getImageURL(t, e) {
      for (var i = this.size_label(e), n = this.sizes[this.sizes.length - 2].source, r = 0; r < this.sizes.length; r++) this.sizes[r].label == i && (n = this.sizes[r].source);
      return n
    }
    _getMeta() {
      var t, e = this;
      t = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", yt(t, (function(t) {
        e.data.credit_alternate = "<a href='" + e.data.url + "' target='_blank'>" + t.photo.owner.realname + "</a>", e.data.caption_alternate = t.photo.title._content + " " + t.photo.description._content, e.updateMeta()
      }))
    }
    size_label(t) {
      return t <= 75 ? t <= 0 ? "Large" : "Thumbnail" : t <= 180 ? "Small" : t <= 240 ? "Small 320" : t <= 375 ? "Medium" : t <= 480 ? "Medium 640" : "Large"
    }
  }
  class Me extends he {
    _loadMedia() {
      var t = this;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-documentcloud tl-media-shadow", this._el.content), this._el.content_item.id = $(7), this.data.url.match(/\.html$/) ? this.data.url = this._transformURL(this.data.url) : this.data.url.match(/.(json|js)$/) || z("DOCUMENT CLOUD IN URL BUT INVALID SUFFIX"), ue(["https://assets.documentcloud.org/viewer/loader.js", "https://assets.documentcloud.org/viewer/viewer.js"], (function() {
        t.createMedia()
      }))
    }
    _transformURL(t) {
      return t.replace(/(.*)\.html$/, "$1.js")
    }
    _updateMediaDisplay() {
      this._el.content_item.style.height = this.options.height + "px"
    }
    createMedia() {
      DV.load(this.data.url, {
        container: "#" + this._el.content_item.id,
        showSidebar: !1
      }), this.onLoaded()
    }
  }
  class Le extends he {
    _loadMedia() {
      this.media_id = this.data.url.split("/p/")[1].split("/")[0], this.options.background || this.createMedia(), this.onLoaded()
    }
    createMedia() {
      var t = this;
      this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-instagram tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = V(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = V(this.data.caption)), this._el.content_item.addEventListener("load", (function(e) {
        t.onMediaLoaded()
      })), this._el.content_item.src = this.getImageURL(this._el.content.offsetWidth)
    }
    getImageURL(t, e) {
      let i = "https://instagram.com/p/" + this.media_id + "/media/?size=" + this.sizes(t);
      return console.log("insta URL", i), i
    }
    _getMeta() {
      var t, e = this;
      t = "https://api.instagram.com/oembed?url=https://instagr.am/p/" + this.media_id + "&callback=?", yt(t, (function(t) {
        e.data.credit_alternate = "<a href='" + t.author_url + "' target='_blank'>" + t.author_name + "</a>", e.data.caption_alternate = t.title, e.updateMeta()
      }))
    }
    sizes(t) {
      return t <= 150 ? "t" : t <= 306 ? "m" : "l"
    }
  }
  class Ee extends he {
    _loadMedia() {
      this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-profile tl-media-shadow", this._el.content), this._el.content_item.src = this.data.url, this.onLoaded()
    }
    _updateMediaDisplay(t) {
      p && (this._el.content_item.style.maxWidth = this.options.width / 2 - 40 + "px")
    }
  }
  class Se extends he {
    _loadMedia() {
      var t;
      if (this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content), this.data.url.match("open?id=")) this.media_id = this.data.url.split("open?id=")[1], this.data.url.match("&authuser=0") && (t = this.media_id.match("&authuser=0")[0]);
      else if (this.data.url.match(/file\/d\/([^/]*)\/?/)) {
        t = "https://drive.google.com/file/d/" + this.data.url.match(/file\/d\/([^/]*)\/?/)[1] + "/preview"
      } else t = this.data.url;
      this._el.content_item.innerHTML = "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this.onLoaded()
    }
    _updateMediaDisplay() {
      this._el.content_item.style.height = this.options.height + "px"
    }
  }
  class De extends he {
    _loadMedia() {
      var t;
      if (this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-spotify", this._el.content), (this.data.url.match(/^spotify:track/) || this.data.url.match(/^spotify:album/) || this.data.url.match(/^spotify:user:.+:playlist:/)) && (this.media_id = this.data.url), this.data.url.match(/spotify\.com\/track\/(.+)/)) this.media_id = "spotify:track:" + this.data.url.match(/spotify\.com\/track\/(.+)/)[1];
      else if (this.data.url.match(/spotify\.com\/album\/(.+)/)) this.media_id = "spotify:album:" + this.data.url.match(/spotify\.com\/album\/(.+)/)[1];
      else if (this.data.url.match(/spotify\.com\/user\/(.+?)\/playlist\/(.+)/)) {
        var e = this.data.url.match(/spotify\.com\/user\/(.+?)\/playlist\/(.+)/)[1],
          i = this.data.url.match(/spotify\.com\/user\/(.+?)\/playlist\/(.+)/)[2];
        this.media_id = "spotify:user:" + e + ":playlist:" + i
      } else if (this.data.url.match(/spotify\.com\/artist\/(.+)/)) {
        var n = this.data.url.match(/spotify\.com\/artist\/(.+)/)[1];
        this.media_id = "spotify:artist:" + n
      }
      this.media_id ? (t = "https://embed.spotify.com/?uri=" + this.media_id + "&theme=white&view=coverart", this.player = this.domCreate("iframe", "tl-media-shadow", this._el.content_item), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.onLoaded()) : this.loadErrorDisplay(this._("spotify_invalid_url"))
    }
    _updateMediaDisplay(t) {
      var e = this.options.height,
        i = 0,
        n = 0;
      e = c ? this.options.height / 2 : this.options.height - this.options.credit_height - this.options.caption_height - 30, this._el.content_item.style.maxHeight = "none", z(e), z(this.options.width), e > this.options.width ? (z("height is greater"), i = this.options.width + 80 + "px", n = this.options.width + "px") : (z("width is greater"), z(this.options.width), i = e + "px", n = e - 80 + "px"), this.player.style.width = n, this.player.style.height = i, this._el.credit && (this._el.credit.style.width = n), this._el.caption && (this._el.caption.style.width = n)
    }
    _stopMedia() {}
  }
  class Ae extends he {
    _loadMedia() {
      var t;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content), this.media_id = this.data.url, t = this.media_id, this._el.content_item.innerHTML = t, this.onLoaded()
    }
    _updateMediaDisplay() {
      this._el.content_item.style.height = this.options.height + "px"
    }
  }
  class je extends he {
    _loadMedia() {
      try {
        var t = this;
        if (this.data.url.match("<blockquote class=['\"]imgur-embed-pub['\"]")) {
          var e = this.data.url.match(/(imgur\.com)\/(\w+)/);
          this.media_id = e[2], this.data.url = "http://imgur.com/gallery/" + this.media_id
        } else this.data.url && (this.media_id = this.data.url.split("/").slice(-1)[0]);
        ue(["https://s.imgur.com/min/embed.js"], (function() {
          t.createMedia()
        }))
      } catch (t) {
        this.loadErrorDisplay(this._("imgur_invalidurl_err"))
      }
    }
    createMedia() {
      var t = this,
        e = "https://api.imgur.com/oembed.json?url=" + this.data.url;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-image tl-media-imgur", this._el.content), wt({
        type: "GET",
        url: e,
        dataType: "json",
        success: function(e) {
          try {
            t._el.content_item.innerHTML = e.html, setInterval((function() {
              null == document.querySelector("blockquote.imgur-embed-pub") ? clearInterval() : (imgurEmbed.createIframe(), document.getElementById("imageElement").removeAttribute("style"), document.getElementById("image").removeAttribute("style"))
            }), 2e3)
          } catch (t) {
            console.log("Error processing imgur ajax response", t)
          }
        },
        error: function(e, i, n) {
          if ("parsererror" == i) new A("invalid_url_err");
          else new A("unknown_read_err", i);
          t.loadErrorDisplay(t._("imgur_invalidurl_err"))
        }
      }), this.onLoaded()
    }
    _updateMediaDisplay() {
      this._el.content_item.style.width = this.options.width + "px", this._el.content_item.style.height = Q({
        w: this.options.width
      }) + "px"
    }
  }
  class Ce extends he {
    _loadMedia() {
      var t = X(this.data.url);
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content);
      var e = "";
      e = s || _ || t.match(/dl.dropboxusercontent.com/) ? "<iframe class='doc' frameborder='0' width='100%' height='100%' src='//docs.google.com/viewer?url=" + t + "&amp;embedded=true'></iframe>" : "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this._el.content_item.innerHTML = e, this.onLoaded()
    }
    _updateMediaDisplay() {
      this._el.content_item.style.height = this.options.height + "px"
    }
  }
  class Ne extends he {
    _loadMedia() {
      this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
    }
    createMedia() {
      var t = this,
        e = "tl-media-item tl-media-audio tl-media-shadow";
      this.data.link ? (this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_item = this.domCreate("audio", e, this._el.content_link)) : this._el.content_item = this.domCreate("audio", e, this._el.content), this._el.content_item.controls = !0, this._el.source_item = this.domCreate("source", "", this._el.content_item), this._el.content_item.addEventListener("load", (function(e) {
        t.onMediaLoaded()
      })), this._el.source_item.src = this.data.url, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 audio with " + this._el.source_item.type
    }
    _updateMediaDisplay(t) {
      p && (this._el.content_item.style.width = "auto")
    }
    _getType(t, e) {
      var i = "audio/";
      switch (t.match(e)[1]) {
        case "mp3":
          i += "mpeg";
          break;
        case "wav":
          i += "wav";
          break;
        case "m4a":
          i += "mp4";
          break;
        default:
          i = "audio"
      }
      return i
    }
  }
  class Oe extends he {
    _loadMedia() {
      this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
    }
    createMedia() {
      var t = this,
        e = "tl-media-item tl-media-video tl-media-shadow";
      this.data.link ? (this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.link, this._el.content_link.target = "_blank", this._el.content_item = this.domCreate("video", e, this._el.content_link)) : this._el.content_item = this.domCreate("video", e, this._el.content), this._el.content_item.controls = !0, this._el.source_item = this.domCreate("source", "", this._el.content_item), this._el.content_item.addEventListener("load", (function(e) {
        t.onMediaLoaded()
      })), this._el.source_item.src = this.data.url, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 video with " + this._el.source_item.type
    }
    _updateMediaDisplay(t) {
      p && (this._el.content_item.style.width = "auto")
    }
    _getType(t, e) {
      var i = "video/";
      switch (t.match(e)[1]) {
        case "mp4":
          i += "mp4";
          break;
        default:
          i = "video"
      }
      return i
    }
  }
  class Ie extends he {
    _loadMedia() {
      var t, e = this;
      this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-wistia tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/medias\/(.*)/)[3], console.log(`Wistia: media_id: ${this.media_id}`), t = "https://fast.wistia.com/embed/iframe/" + this.media_id + "?version=v1&controlsVisibleOnLoad=true&playerColor=aae3d8", this.player = this.domCreate("iframe", "", this._el.content_item), this.player.addEventListener("load", (function(t) {
        e.onMediaLoaded()
      })), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded()
    }
    _updateMediaDisplay() {
      this._el.content_item.style.height = Q({
        w: this._el.content_item.offsetWidth
      }) + "px"
    }
    _stopMedia() {
      try {
        this.player.contentWindow.postMessage(JSON.stringify({
          method: "pause"
        }), "https://player.vimeo.com")
      } catch (t) {
        trace(t)
      }
    }
  }

  function ze(t, e) {
    var i = [{
      type: "youtube",
      name: "YouTube",
      match_str: "^(https?:)?/*(www.)?youtube|youtu.be",
      cls: pe
    }, {
      type: "vimeo",
      name: "Vimeo",
      match_str: "^(https?:)?/*(player.)?vimeo.com",
      cls: ye
    }, {
      type: "dailymotion",
      name: "DailyMotion",
      match_str: "^(https?:)?/*(www.)?dailymotion.com",
      cls: we
    }, {
      type: "vine",
      name: "Vine",
      match_str: "^(https?:)?/*(www.)?vine.co",
      cls: be
    }, {
      type: "soundcloud",
      name: "SoundCloud",
      match_str: "^(https?:)?/*(player.)?soundcloud.com",
      cls: ve
    }, {
      type: "twitter",
      name: "Twitter",
      match_str: "^(https?:)?/*(www.)?twitter.com",
      cls: xe
    }, {
      type: "twitterembed",
      name: "TwitterEmbed",
      match_str: "<blockquote class=['\"]twitter-tweet['\"]",
      cls: ke
    }, {
      type: "googlemaps",
      name: "Google Map",
      match_str: /google.+?\/maps\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/search\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/place\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/dir\/([\w\W]+)\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)/,
      cls: _e
    }, {
      type: "flickr",
      name: "Flickr",
      match_str: "^(https?:)?/*(www.)?flickr.com/photos",
      cls: Te
    }, {
      type: "flickr",
      name: "Flickr",
      match_str: "^(https?://)?flic.kr/.*",
      cls: Te
    }, {
      type: "instagram",
      name: "Instagram",
      match_str: /^(https?:)?\/*(www.)?(instagr.am|^(https?:)?\/*(www.)?instagram.com)\/p\//,
      cls: Le
    }, {
      type: "profile",
      name: "Profile",
      match_str: /^(https?:)?\/*(www.)?instagr.am\/[a-zA-Z0-9]{2,}|^(https?:)?\/*(www.)?instagram.com\/[a-zA-Z0-9]{2,}/,
      cls: Ee
    }, {
      type: "documentcloud",
      name: "Document Cloud",
      match_str: /documentcloud.org\//,
      cls: Me
    }, {
      type: "image",
      name: "Image",
      match_str: /(jpg|jpeg|png|gif|svg)(\?.*)?$/i,
      cls: ce
    }, {
      type: "imgur",
      name: "Imgur",
      match_str: /^.*imgur.com\/.+$|<blockquote class=['\"]imgur-embed-pub['\"]/i,
      cls: je
    }, {
      type: "googledocs",
      name: "Google Doc",
      match_str: "^(https?:)?/*[^.]*.google.com/[^/]*/d/[^/]*/[^/]*?usp=sharing|^(https?:)?/*drive.google.com/open?id=[^&]*&authuser=0|^(https?:)?/*drive.google.com/open?id=[^&]*|^(https?:)?/*[^.]*.googledrive.com/host/[^/]*/",
      cls: Se
    }, {
      type: "pdf",
      name: "PDF",
      match_str: /^.*\.pdf(\?.*)?(\#.*)?/,
      cls: Ce
    }, {
      type: "wikipedia",
      name: "Wikipedia",
      match_str: "^(https?:)?/*(www.)?wikipedia.org|^(https?:)?/*([a-z][a-z].)?wikipedia.org",
      cls: ge
    }, {
      type: "spotify",
      name: "spotify",
      match_str: "spotify",
      cls: De
    }, {
      type: "iframe",
      name: "iFrame",
      match_str: "iframe",
      cls: Ae
    }, {
      type: "blockquote",
      name: "Quote",
      match_str: "blockquote",
      cls: me
    }, {
      type: "video",
      name: "Video",
      match_str: /(mp4)(\?.*)?$/i,
      cls: Oe
    }, {
      type: "wistia",
      name: "Wistia",
      match_str: /https?:\/\/(.+)?(wistia\.com|wi\.st)\/.*/i,
      cls: Ie
    }, {
      type: "audio",
      name: "Audio",
      match_str: /(mp3|wav|m4a)(\?.*)?$/i,
      cls: Ne
    }, {
      type: "imageblank",
      name: "Imageblank",
      match_str: "",
      cls: ce
    }];
    if (e) {
      if (t instanceof Array) return !1;
      for (var n = 0; n < i.length; n++) switch (i[n].type) {
        case "flickr":
        case "image":
        case "instagram":
          if (t.url.match(i[n].match_str)) return i[n]
      }
    } else
      for (n = 0; n < i.length; n++)
        if (t.url.match(i[n].match_str)) return i[n];
    return !1
  }
  class Re {
    constructor(t, e) {
      this._el = {
        container: {},
        content_container: {},
        media_container: {},
        timespan: {},
        line_left: {},
        line_right: {},
        content: {},
        text: {},
        media: {}
      }, this._text = {}, this._state = {
        loaded: !1
      }, this.data = {
        unique_id: "",
        background: null,
        date: {
          year: 0,
          month: 0,
          day: 0,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
          thumbnail: "",
          format: ""
        },
        text: {
          headline: "",
          text: ""
        },
        media: null
      }, this.options = {
        duration: 1e3,
        ease: st,
        width: 600,
        height: 600,
        marker_width_min: 100
      }, this.active = !1, this.animator = {}, this.has_end_date = !1, N(this.options, e), N(this.data, t), this._initLayout(), this._initEvents()
    }
    show() {}
    hide() {}
    setActive(t) {
      this.active = t, this.active && this.has_end_date ? this._el.container.className = "tl-timemarker tl-timemarker-with-end tl-timemarker-active" : this.active ? this._el.container.className = "tl-timemarker tl-timemarker-active" : this.has_end_date ? this._el.container.className = "tl-timemarker tl-timemarker-with-end" : this._el.container.className = "tl-timemarker"
    }
    addTo(t) {
      t.appendChild(this._el.container)
    }
    removeFrom(t) {
      t.removeChild(this._el.container)
    }
    updateDisplay(t, e) {
      this._updateDisplay(t, e)
    }
    loadMedia() {
      this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0)
    }
    stopMedia() {
      this._media && this._state.loaded && this._media.stopMedia()
    }
    getLeft() {
      return this._el.container.style.left.slice(0, -2)
    }
    getTime() {
      return this.data.start_date.getTime()
    }
    getEndTime() {
      return !!this.data.end_date && this.data.end_date.getTime()
    }
    setHeight(t) {
      var e = 1;
      this._el.content_container.style.height = t + "px", this._el.timespan_content.style.height = t + "px", this._el.content.className = t <= 30 ? "tl-timemarker-content tl-timemarker-content-small" : "tl-timemarker-content", t <= 56 ? S(this._el.content_container, "tl-timemarker-content-container-small") : D(this._el.content_container, "tl-timemarker-content-container-small"), l ? ((e = Math.floor(t / 14)) < 1 && (e = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = e) : (e = t / 12, this._text.className = e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = 12 * e + "px")
    }
    setWidth(t) {
      this.data.end_date && (this._el.container.style.width = t + "px", t > this.options.marker_width_min ? (this._el.content_container.style.width = t + "px", this._el.content_container.className = "tl-timemarker-content-container tl-timemarker-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timemarker-content-container"))
    }
    setClass(t) {
      this._el.container.className = t
    }
    setRowPosition(t, e) {
      this.setPosition({
        top: t
      }), this._el.timespan.style.height = e + "px"
    }
    _onMarkerClick(t) {
      this.fire("markerclick", {
        unique_id: this.data.unique_id
      })
    }
    _initLayout() {
      if (this._el.container = M("div", "tl-timemarker"), this.data.unique_id && (this._el.container.id = this.data.unique_id + "-marker"), this.data.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timemarker tl-timemarker-with-end"), this._el.timespan = M("div", "tl-timemarker-timespan", this._el.container), this._el.timespan_content = M("div", "tl-timemarker-timespan-content", this._el.timespan), this._el.content_container = M("div", "tl-timemarker-content-container", this._el.container), this._el.content = M("div", "tl-timemarker-content", this._el.content_container), this._el.line_left = M("div", "tl-timemarker-line-left", this._el.timespan), this._el.line_right = M("div", "tl-timemarker-line-right", this._el.timespan), this.data.media) {
        this._el.media_container = M("div", "tl-timemarker-media-container", this._el.content);
        var t = {
            url: this.data.media.thumbnail
          },
          e = this.data.media.thumbnail ? ze(t, !0) : null;
        if (e) {
          var i = new e.cls(t);
          i.on("loaded", function() {
            this._el.media = M("img", "tl-timemarker-media", this._el.media_container), this._el.media.src = i.getImageURL()
          }.bind(this)), i.loadMedia()
        } else {
          var n = ze(this.data.media).type;
          this._el.media = M("span", "tl-icon-" + n, this._el.media_container)
        }
      }
      this._el.text = M("div", "tl-timemarker-text", this._el.content), this._text = M("h2", "tl-headline", this._el.text), this.data.text.headline && "" != this.data.text.headline ? this._text.innerHTML = Y(this.data.text.headline) : this.data.text.text && "" != this.data.text.text ? this._text.innerHTML = Y(this.data.text.text) : this.data.media && this.data.media.caption && "" != this.data.media.caption && (this._text.innerHTML = Y(this.data.media.caption)), this.onLoaded()
    }
    _initEvents() {
      gt.addListener(this._el.container, "click", this._onMarkerClick, this)
    }
    _updateDisplay(t, e, i) {
      t && (this.options.width = t), e && (this.options.height = e)
    }
  }
  B(Re, ut, pt);
  class Pe {
    constructor(t, e, i) {
      this._el = {
        drag: t,
        move: t
      }, this.mousedrag = {
        down: "mousedown",
        up: "mouseup",
        leave: "mouseleave",
        move: "mousemove"
      }, this.touchdrag = {
        down: "touchstart",
        up: "touchend",
        leave: "mouseleave",
        move: "touchmove"
      }, e && (this._el.move = e), this.options = {
        snap: !1,
        enable: {
          x: !0,
          y: !0
        },
        constraint: {
          top: !1,
          bottom: !1,
          left: 0,
          right: !1
        },
        momentum_multiplier: 2e3,
        duration: 1e3,
        ease: ht
      }, this.animator = null, this.dragevent = this.mousedrag, x && (this.dragevent = this.touchdrag), this.data = {
        sliding: !1,
        direction: "none",
        pagex: {
          start: 0,
          end: 0
        },
        pagey: {
          start: 0,
          end: 0
        },
        pos: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        },
        new_pos: {
          x: 0,
          y: 0
        },
        new_pos_parent: {
          x: 0,
          y: 0
        },
        time: {
          start: 0,
          end: 0
        },
        touch: !1
      }, N(this.options, i)
    }
    enable(t) {
      gt.addListener(this._el.drag, this.dragevent.down, this._onDragStart, this), gt.addListener(this._el.drag, this.dragevent.up, this._onDragEnd, this), this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute"
    }
    disable() {
      gt.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), gt.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this)
    }
    stopMomentum() {
      this.animator && this.animator.stop()
    }
    updateConstraint(t) {
      this.options.constraint = t
    }
    _onDragStart(t) {
      this.animator && this.animator.stop(), x ? t.originalEvent ? (this.data.pagex.start = t.originalEvent.touches[0].screenX, this.data.pagey.start = t.originalEvent.touches[0].screenY) : (this.data.pagex.start = t.targetTouches[0].screenX, this.data.pagey.start = t.targetTouches[0].screenY) : (this.data.pagex.start = t.pageX, this.data.pagey.start = t.pageY), this.options.enable.x, this.options.enable.y, this.data.pos.start = {
        x: this._el.move.offsetLeft,
        y: this._el.move.offsetTop
      }, this.data.time.start = (new Date).getTime(), this.fire("dragstart", this.data), gt.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), gt.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this)
    }
    _onDragEnd(t) {
      this.data.sliding = !1, gt.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), gt.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum()
    }
    _onDragMove(t) {
      var e = {
        x: 0,
        y: 0
      };
      this.data.sliding = !0, x ? t.originalEvent ? (this.data.pagex.end = t.originalEvent.touches[0].screenX, this.data.pagey.end = t.originalEvent.touches[0].screenY) : (this.data.pagex.end = t.targetTouches[0].screenX, this.data.pagey.end = t.targetTouches[0].screenY) : (this.data.pagex.end = t.pageX, this.data.pagey.end = t.pageY), e.x = this.data.pagex.start - this.data.pagex.end, e.y = this.data.pagey.start - this.data.pagey.end, this.data.pos.end = {
        x: this._el.drag.offsetLeft,
        y: this._el.drag.offsetTop
      }, this.data.new_pos.x = -(e.x - this.data.pos.start.x), this.data.new_pos.y = -(e.y - this.data.pos.start.y), this.options.enable.x && Math.abs(e.x) > Math.abs(e.y) && (t.preventDefault(), this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && Math.abs(e.y) > Math.abs(e.y) && (t.preventDefault(), this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data)
    }
    _momentum() {
      var t = {
          x: 0,
          y: 0,
          time: 0
        },
        e = {
          x: 0,
          y: 0,
          time: 0
        },
        i = {
          x: !1,
          y: !1
        },
        n = !1;
      this.data.direction = null, t.time = 10 * ((new Date).getTime() - this.data.time.start), e.time = 10 * ((new Date).getTime() - this.data.time.start), e.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), e.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), t.x = Math.round(e.x / e.time), t.y = Math.round(e.y / e.time), this.data.new_pos.x = Math.min(this.data.new_pos.x + t.x), this.data.new_pos.y = Math.min(this.data.new_pos.y + t.y), this.options.enable.x ? this.options.constraint.left && this.data.new_pos.x > this.options.constraint.left && (this.data.new_pos.x = this.options.constraint.left) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, e.time < 2e3 && (n = !0), this.options.enable.x && this.options.enable.y ? Math.abs(e.x) > Math.abs(e.y) ? i.x = !0 : i.y = !0 : this.options.enable.x ? Math.abs(e.x) > Math.abs(e.y) && (i.x = !0) : Math.abs(e.y) > Math.abs(e.x) && (i.y = !0), i.x && (Math.abs(e.x) > this._el.drag.offsetWidth / 2 && (n = !0), Math.abs(e.x) > 1e4 && (this.data.direction = "left", e.x > 0 && (this.data.direction = "right"))), i.y && (Math.abs(e.y) > this._el.drag.offsetHeight / 2 && (n = !0), Math.abs(e.y) > 1e4 && (this.data.direction = "up", e.y > 0 && (this.data.direction = "down"))), e.time < 1e3 || this._animateMomentum(), n && this.data.direction ? this.fire("swipe_" + this.data.direction, this.data) : this.data.direction ? this.fire("swipe_nodirection", this.data) : this.options.snap && (this.animator.stop(), this.animator = dt(this._el.move, {
        top: this.data.pos.start.y,
        left: this.data.pos.start.x,
        duration: this.options.duration,
        easing: lt
      }))
    }
    _animateMomentum() {
      var t = {
          x: this.data.new_pos.x,
          y: this.data.new_pos.y
        },
        e = {
          duration: this.options.duration,
          easing: lt
        };
      this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (t.y > this.options.constraint.bottom ? t.y = this.options.constraint.bottom : t.y < this.options.constraint.top && (t.y = this.options.constraint.top)), e.top = Math.floor(t.y) + "px"), this.options.enable.x && (this.options.constraint.left && t.x >= this.options.constraint.left && (t.x = this.options.constraint.left), this.options.constraint.right && t.x < this.options.constraint.right && (t.x = this.options.constraint.right), e.left = Math.floor(t.x) + "px"), this.animator = dt(this._el.move, e), this.fire("momentum", this.data)
    }
  }
  B(Pe, ut);
  class He {
    constructor(t, e, i, n) {
      this.language = n, this._el = {
        parent: {},
        container: {},
        slider: {},
        slider_background: {},
        line: {},
        marker_container_mask: {},
        marker_container: {},
        marker_item_container: {},
        timeaxis: {},
        timeaxis_background: {},
        attribution: {}
      }, this.collapsed = !1, this._el.container = "object" == typeof t ? t : T(t), this.config = e, this.options = {
        width: 600,
        height: 600,
        duration: 1e3,
        ease: ht,
        has_groups: !1,
        optimal_tick_width: 50,
        scale_factor: 2,
        marker_padding: 5,
        timenav_height_min: 150,
        marker_height_min: 30,
        marker_width_min: 100,
        zoom_sequence: [.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
      }, this.animator = null, this.ready = !1, this._markers = [], this._eras = [], this.has_eras = !1, this._groups = [], this._calculated_row_height = 100, this.current_id = "", this.timescale = {}, this.timeaxis = {}, this.max_rows = 6, this.animate_css = !1, this._swipable, N(this.options, i)
    }
    init() {
      this._initLayout(), this._initEvents(), this._initData(), this._updateDisplay(), this._onLoaded()
    }
    positionMarkers() {
      this._positionMarkers()
    }
    updateDisplay(t, e, i, n) {
      this._updateDisplay(t, e, i, n)
    }
    _getTimeScale() {
      var t = 0;
      try {
        t = parseInt(this.options.marker_height_min)
      } catch (e) {
        z("Invalid value for marker_height_min option."), t = 30
      }
      return 0 == t && (z("marker_height_min option must not be zero."), t = 30), this.max_rows = Math.round((this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding) / t), this.max_rows < 1 && (this.max_rows = 1), new re(this.config, {
        display_width: this._el.container.offsetWidth,
        screen_multiplier: this.options.scale_factor,
        max_rows: this.max_rows
      })
    }
    _updateTimeScale(t) {
      this.options.scale_factor = t, this._updateDrawTimeline()
    }
    zoomIn() {
      var t = function(t, e, i) {
        for (var n = 0; n < t.length; n++)
          if (e < t[n]) return t[n];
        return i || e
      }(this.options.zoom_sequence, this.options.scale_factor);
      this.setZoomFactor(t)
    }
    zoomOut() {
      var t = function(t, e, i) {
        for (var n = t.length - 1; n >= 0; n--)
          if (e > t[n]) return t[n];
        return i || e
      }(this.options.zoom_sequence, this.options.scale_factor);
      this.setZoomFactor(t)
    }
    setZoom(t) {
      var e = this.options.zoom_sequence[t];
      "number" == typeof e ? this.setZoomFactor(e) : console.warn("Invalid zoom level. Please use an index number between 0 and " + (this.options.zoom_sequence.length - 1))
    }
    setZoomFactor(t) {
      t <= this.options.zoom_sequence[0] ? this.fire("zoomtoggle", {
        zoom: "out",
        show: !1
      }) : this.fire("zoomtoggle", {
        zoom: "out",
        show: !0
      }), t >= this.options.zoom_sequence[this.options.zoom_sequence.length - 1] ? this.fire("zoomtoggle", {
        zoom: "in",
        show: !1
      }) : this.fire("zoomtoggle", {
        zoom: "in",
        show: !0
      }), 0 == t && (console.warn("Zoom factor must be greater than zero. Using 0.1"), t = .1), this.options.scale_factor = t, this.goToId(this.current_id, !this._updateDrawTimeline(!0), !0)
    }
    _createGroups() {
      this._groups = [];
      var t = this.timescale.getGroupLabels();
      if (t) {
        this.options.has_groups = !0;
        for (var e = 0; e < t.length; e++) this._createGroup(t[e])
      }
    }
    _createGroup(t) {
      var e = new ae(t);
      this._addGroup(e), this._groups.push(e)
    }
    _addGroup(t) {
      t.addTo(this._el.container)
    }
    _positionGroups() {
      if (this.options.has_groups)
        for (var t = this.options.height - this._el.timeaxis_background.offsetHeight, e = Math.floor(t / this.timescale.getNumberOfRows() - this.options.marker_padding), i = (this.timescale.getGroupLabels(), 0), n = 0; i < this._groups.length; i++) {
          var r = Math.floor(n * (e + this.options.marker_padding)),
            a = !1;
          r > t - this.options.marker_padding && (a = !0), this._groups[i].setRowPosition(r, this._calculated_row_height + this.options.marker_padding / 2), this._groups[i].setAlternateRowColor(Z(i), a), n += this._groups[i].data.rows
        }
    }
    _addMarker(t) {
      t.addTo(this._el.marker_item_container), t.on("markerclick", this._onMarkerClick, this), t.on("added", this._onMarkerAdded, this)
    }
    _createMarker(t, e) {
      var i = new Re(t, this.options);
      this._addMarker(i), e < 0 ? this._markers.push(i) : this._markers.splice(e, 0, i)
    }
    _createMarkers(t) {
      for (var e = 0; e < t.length; e++) this._createMarker(t[e], -1)
    }
    _removeMarker(t) {
      t.removeFrom(this._el.marker_item_container)
    }
    _destroyMarker(t) {
      this._removeMarker(this._markers[t]), this._markers.splice(t, 1)
    }
    _positionMarkers(t) {
      for (var e = 0; e < this._markers.length; e++) {
        var i = this.timescale.getPositionInfo(e);
        t ? this._markers[e].setClass("tl-timemarker tl-timemarker-fast") : this._markers[e].setClass("tl-timemarker"), this._markers[e].setPosition({
          left: i.start
        }), this._markers[e].setWidth(i.width)
      }
    }
    _calculateMarkerHeight(t) {
      return t / this.timescale.getNumberOfRows() - this.options.marker_padding
    }
    _calculateRowHeight(t) {
      return t / this.timescale.getNumberOfRows()
    }
    _calculateAvailableHeight() {
      return this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding
    }
    _calculateMinimumTimeNavHeight() {
      return this.timescale.getNumberOfRows() * this.options.marker_height_min + this._el.timeaxis_background.offsetHeight + this.options.marker_padding
    }
    getMinimumHeight() {
      return this._calculateMinimumTimeNavHeight()
    }
    _assignRowsToMarkers() {
      var t = this._calculateAvailableHeight(),
        e = this._calculateMarkerHeight(t);
      this._positionGroups(), this._calculated_row_height = this._calculateRowHeight(t);
      for (var i = 0; i < this._markers.length; i++) {
        this._markers[i].setHeight(e);
        var n = this.timescale.getPositionInfo(i).row,
          r = Math.floor(n * (e + this.options.marker_padding)) + this.options.marker_padding,
          a = t - r + this.options.marker_padding;
        this._markers[i].setRowPosition(r, a)
      }
    }
    _resetMarkersActive() {
      for (var t = 0; t < this._markers.length; t++) this._markers[t].setActive(!1)
    }
    _findMarkerIndex(t) {
      var e = -1;
      return ("string" == typeof t || t instanceof String) && (e = G(t, this._markers, "unique_id", e)), e
    }
    _createEras(t) {
      for (var e = 0; e < t.length; e++) {
        var i = t[e],
          n = new oe(i.start_date, i.end_date, i.headline, this.options);
        this._eras.push(n), n.addTo(this._el.marker_item_container), n.on("added", this._onEraAdded, this)
      }
    }
    _positionEras(t) {
      for (var e = 0, i = 0; i < this._eras.length; i++) {
        var n = {
          start: 0,
          end: 0,
          width: 0
        };
        n.start = this.timescale.getPosition(this._eras[i].start_date.getTime()), n.end = this.timescale.getPosition(this._eras[i].end_date.getTime()), n.width = n.end - n.start, t ? this._eras[i].setClass("tl-timeera tl-timeera-fast") : this._eras[i].setClass("tl-timeera"), this._eras[i].setPosition({
          left: n.start
        }), this._eras[i].setWidth(n.width), ++e > 5 && (e = 0), this._eras[i].setColor(e)
      }
    }
    createMarker(t, e) {
      this._createMarker(t, e)
    }
    createMarkers(t) {
      this._createMarkers(t)
    }
    destroyMarker(t) {
      this._destroyMarker(t)
    }
    destroyMarkerId(t) {
      this.destroyMarker(this._findMarkerIndex(t))
    }
    goTo(t, e, i) {
      var n = this.options.ease,
        r = this.options.duration,
        a = t < 0 ? 0 : t;
      this._resetMarkersActive(), t >= 0 && t < this._markers.length && this._markers[t].setActive(!0), this.animator && this.animator.stop(), e ? (this._el.slider.className = "tl-timenav-slider", this._el.slider.style.left = -this._markers[a].getLeft() + this.options.width / 2 + "px") : i ? (this._el.slider.className = "tl-timenav-slider tl-timenav-slider-animate", this.animate_css = !0, this._el.slider.style.left = -this._markers[a].getLeft() + this.options.width / 2 + "px") : (this._el.slider.className = "tl-timenav-slider", this.animator = dt(this._el.slider, {
        left: -this._markers[a].getLeft() + this.options.width / 2 + "px",
        duration: r,
        easing: n
      })), t >= 0 && t < this._markers.length ? this.current_id = this._markers[t].data.unique_id : this.current_id = ""
    }
    goToId(t, e, i) {
      this.goTo(this._findMarkerIndex(t), e, i)
    }
    _onLoaded() {
      this.ready = !0, this.fire("loaded", this.config)
    }
    _onMarkerAdded(t) {
      this.fire("dateAdded", this.config)
    }
    _onEraAdded(t) {
      this.fire("eraAdded", this.config)
    }
    _onMarkerRemoved(t) {
      this.fire("dateRemoved", this.config)
    }
    _onMarkerClick(t) {
      this.goToId(t.unique_id), this.fire("change", {
        unique_id: t.unique_id
      })
    }
    _onMouseScroll(t) {
      var e = 0,
        i = 0,
        n = {
          right: -(this.timescale.getPixelWidth() - this.options.width / 2),
          left: this.options.width / 2
        };
      t || (t = window.event), t.originalEvent && (t = t.originalEvent), void 0 !== t.wheelDeltaX && (e = t.wheelDeltaY / 6, e = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? t.wheelDeltaX / 6 : 0), e && (t.preventDefault && t.preventDefault(), t.returnValue = !1), (i = parseInt(this._el.slider.style.left.replace("px", "")) + e) > n.left ? i = n.left : i < n.right && (i = n.right), this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1), this._el.slider.style.left = i + "px"
    }
    _onDragMove(t) {
      this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1)
    }
    _updateDisplay(t, e, i) {
      t && (this.options.width = t), e && e != this.options.height && (this.options.height = e, this.timescale = this._getTimeScale()), this._assignRowsToMarkers(), this._el.slider_background.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._el.slider_background.style.left = -this.options.width / 2 + "px", this._el.slider.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._swipable.updateConstraint({
        top: !1,
        bottom: !1,
        left: this.options.width / 2,
        right: -(this.timescale.getPixelWidth() - this.options.width / 2)
      }), this.goToId(this.current_id, !0)
    }
    _drawTimeline(t) {
      this.timescale = this._getTimeScale(), this.timeaxis.drawTicks(this.timescale, this.options.optimal_tick_width), this._positionMarkers(t), this._assignRowsToMarkers(), this._createGroups(), this._positionGroups(), this.has_eras && this._positionEras(t)
    }
    _updateDrawTimeline(t) {
      var e = !1;
      if (t) {
        var i = new re(this.config, {
          display_width: this._el.container.offsetWidth,
          screen_multiplier: this.options.scale_factor,
          max_rows: this.max_rows
        });
        this.timescale.getMajorScale() == i.getMajorScale() && this.timescale.getMinorScale() == i.getMinorScale() && (e = !0)
      } else e = !0;
      return e ? (this.timescale = this._getTimeScale(), this.timeaxis.positionTicks(this.timescale, this.options.optimal_tick_width), this._positionMarkers(), this._assignRowsToMarkers(), this._positionGroups(), this.has_eras && this._positionEras(), this._updateDisplay()) : this._drawTimeline(!0), e
    }
    _initLayout() {
      this._el.attribution = M("div", "tl-attribution", this._el.container), this._el.line = M("div", "tl-timenav-line", this._el.container), this._el.slider = M("div", "tl-timenav-slider", this._el.container), this._el.slider_background = M("div", "tl-timenav-slider-background", this._el.slider), this._el.marker_container_mask = M("div", "tl-timenav-container-mask", this._el.slider), this._el.marker_container = M("div", "tl-timenav-container", this._el.marker_container_mask), this._el.marker_item_container = M("div", "tl-timenav-item-container", this._el.marker_container), this._el.timeaxis = M("div", "tl-timeaxis", this._el.slider), this._el.timeaxis_background = M("div", "tl-timeaxis-background", this._el.container), this._el.attribution.innerHTML = "<a href='http://timeline.knightlab.com' target='_blank'><span class='tl-knightlab-logo'></span>Timeline JS</a>", this.timeaxis = new se(this._el.timeaxis, this.options, this.language), this._swipable = new Pe(this._el.slider_background, this._el.slider, {
        enable: {
          x: !0,
          y: !1
        },
        constraint: {
          top: !1,
          bottom: !1,
          left: this.options.width / 2,
          right: !1
        },
        snap: !1
      }), this._swipable.enable()
    }
    _initEvents() {
      this._swipable.on("dragmove", this._onDragMove, this), gt.addListener(this._el.container, "mousewheel", this._onMouseScroll, this), gt.addListener(this._el.container, "DOMMouseScroll", this._onMouseScroll, this)
    }
    _initData() {
      this._createMarkers(this.config.events), this.config.eras && (this.has_eras = !0, this._createEras(this.config.eras)), this._drawTimeline()
    }
  }
  B(He, ut, pt);
  class qe {
    constructor(t, e, i, n) {
      n && this.setLanguage(n), this._el = {
        container: {},
        scroll_container: {},
        background: {},
        content_container: {},
        content: {}
      }, this._media = null, this._mediaclass = {}, this._text = {}, this._background_media = null, this._state = {
        loaded: !1
      }, this.has = {
        headline: !1,
        text: !1,
        media: !1,
        title: !1,
        background: {
          image: !1,
          color: !1,
          color_value: ""
        }
      }, this.has.title = i, this.data = {
        unique_id: null,
        background: null,
        start_date: null,
        end_date: null,
        location: null,
        text: null,
        media: null,
        autolink: !0
      }, this.options = {
        duration: 1e3,
        slide_padding_lr: 40,
        ease: st,
        width: 600,
        height: 600,
        skinny_size: 650,
        media_name: ""
      }, this.active = !1, this.animator = {}, N(this.options, e), N(this.data, t), this._initLayout(), this._initEvents()
    }
    show() {
      this.animator = dt(this._el.slider_container, {
        left: -this._el.container.offsetWidth * n + "px",
        duration: this.options.duration,
        easing: this.options.ease
      })
    }
    hide() {}
    setActive(t) {
      this.active = t, this.active ? (this.data.background && this.fire("background_change", this.has.background), this.loadMedia()) : this.stopMedia()
    }
    addTo(t) {
      t.appendChild(this._el.container)
    }
    removeFrom(t) {
      t.removeChild(this._el.container)
    }
    updateDisplay(t, e, i) {
      this._updateDisplay(t, e, i)
    }
    loadMedia() {
      var t = this;
      this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0), this._background_media && !this._background_media._state.loaded && (this._background_media.on("loaded", (function() {
        t._updateBackgroundDisplay()
      })), this._background_media.loadMedia())
    }
    stopMedia() {
      this._media && this._state.loaded && this._media.stopMedia()
    }
    getBackground() {
      return this.has.background
    }
    scrollToTop() {
      this._el.container.scrollTop = 0
    }
    getFormattedDate() {
      if (F(this.data.display_date).length > 0) return this.data.display_date;
      var t = "";
      return this.has.title || (this.data.end_date && (t = " &mdash; " + this.data.end_date.getDisplayDate(this.getLanguage())), this.data.start_date && (t = this.data.start_date.getDisplayDate(this.getLanguage()) + t)), t
    }
    _initLayout() {
      if (this._el.container = M("div", "tl-slide"), this.has.title && (this._el.container.className = "tl-slide tl-slide-titleslide"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._el.scroll_container = M("div", "tl-slide-scrollable-container", this._el.container), this._el.content_container = M("div", "tl-slide-content-container", this._el.scroll_container), this._el.content = M("div", "tl-slide-content", this._el.content_container), this._el.background = M("div", "tl-slide-background", this._el.container), this.data.background) {
        if (this.data.background.url) {
          var t = ze(this.data.background, !0);
          t && (this._background_media = new t.cls(this.data.background, {
            background: 1
          }), this.has.background.image = !0, this._el.container.className += " tl-full-image-background", this.has.background.color_value = "#000", this._el.background.style.display = "block")
        }
        this.data.background.color && (this.has.background.color = !0, this._el.container.className += " tl-full-color-background", this.has.background.color_value = this.data.background.color), this.data.background.text_background && (this._el.container.className += " tl-text-background")
      }
      this.data.media && this.data.media.url && "" != this.data.media.url && (this.has.media = !0), this.data.text && this.data.text.text && (this.has.text = !0), this.data.text && this.data.text.headline && (this.has.headline = !0), this.has.media && (this.data.media.mediatype = ze(this.data.media), this.options.media_name = this.data.media.mediatype.name, this.options.media_type = this.data.media.mediatype.type, this.options.autolink = this.data.autolink, this._media = new this.data.media.mediatype.cls(this.data.media, this.options, this.getLanguage())), (this.has.text || this.has.headline) && (this._text = new le(this.data.text, {
        title: this.has.title,
        language: this.options.language,
        autolink: this.data.autolink
      }), this._text.addDateText(this.getFormattedDate())), this.has.text || this.has.headline || !this.has.media ? this.has.headline && this.has.media && !this.has.text ? (S(this._el.container, "tl-slide-media-only"), this._text.addTo(this._el.content), this._media.addTo(this._el.content)) : this.has.text && this.has.media ? (this._media.addTo(this._el.content), this._text.addTo(this._el.content)) : (this.has.text || this.has.headline) && (S(this._el.container, "tl-slide-text-only"), this._text.addTo(this._el.content)) : (S(this._el.container, "tl-slide-media-only"), this._media.addTo(this._el.content)), this.onLoaded()
    }
    _initEvents() {}
    _updateDisplay(t, e, i) {
      var n, r = this.options.slide_padding_lr,
        a = this.options.slide_padding_lr;
      this.options.width = t || this._el.container.offsetWidth, n = this.options.width - 2 * this.options.slide_padding_lr, c && this.options.width <= this.options.skinny_size ? (r = 0, a = 0, n = this.options.width) : "landscape" == i || this.options.width <= this.options.skinny_size && (r = 50, a = 50, n = this.options.width - r - a), this._el.content.style.paddingLeft = r + "px", this._el.content.style.paddingRight = a + "px", this._el.content.style.width = n + "px", this.options.height = e || this._el.container.offsetHeight, this._media && (!this.has.text && this.has.headline ? this._media.updateDisplay(n, this.options.height - this._text.headlineHeight(), i) : this.has.text || this.has.headline ? this.options.width <= this.options.skinny_size ? this._media.updateDisplay(n, this.options.height, i) : this._media.updateDisplay(n / 2, this.options.height, i) : this._media.updateDisplay(n, this.options.height, i)), this._updateBackgroundDisplay()
    }
    _updateBackgroundDisplay() {
      this._background_media && this._background_media._state.loaded && (this._el.background.style.backgroundImage = "url('" + this._background_media.getImageURL(this.options.width, this.options.height) + "')")
    }
  }
  B(qe, zt, ut, pt);
  class Fe {
    constructor(t, e, i) {
      this._el = {
        container: {},
        content_container: {},
        icon: {},
        title: {},
        description: {}
      }, this.mediatype = {}, this.data = {
        title: "Navigation",
        description: "Description",
        date: "Date"
      }, this.options = {
        direction: "previous"
      }, this.animator = null, N(this.options, e), N(this.data, t), this._el.container = M("div", "tl-slidenav-" + this.options.direction), c && this._el.container.setAttribute("ontouchstart", " "), this._initLayout(), this._initEvents(), i && i.appendChild(this._el.container)
    }
    update(t) {
      var e = {
        title: "",
        description: "",
        date: t.getFormattedDate()
      };
      t.data.text && t.data.text.headline && (e.title = t.data.text.headline), this._update(e)
    }
    setColor(t) {
      this._el.content_container.className = t ? "tl-slidenav-content-container tl-slidenav-inverted" : "tl-slidenav-content-container"
    }
    _onMouseClick() {
      this.fire("clicked", this.options)
    }
    _update(t) {
      this.data = N(this.data, t), this._el.title.innerHTML = Y(this.data.title), this._el.description.innerHTML = Y(this.data.date)
    }
    _initLayout() {
      this._el.content_container = M("div", "tl-slidenav-content-container", this._el.container), this._el.icon = M("div", "tl-slidenav-icon", this._el.content_container), this._el.title = M("div", "tl-slidenav-title", this._el.content_container), this._el.description = M("div", "tl-slidenav-description", this._el.content_container), this._el.icon.innerHTML = "&nbsp;", this._update()
    }
    _initEvents() {
      gt.addListener(this._el.container, "click", this._onMouseClick, this)
    }
  }
  B(Fe, pt, ut);
  class Be {
    constructor(t, e, i, n) {
      n && this.setLanguage(n), this._el = {
        container: {},
        background: {},
        slider_container_mask: {},
        slider_container: {},
        slider_item_container: {}
      }, this._nav = {}, this._nav.previous = {}, this._nav.next = {}, this.slide_spacing = 0, this._slides = [], this._swipable, this.preloadTimer, this._message, this.current_id = "", this.data = {}, this.options = {
        id: "",
        layout: "portrait",
        width: 600,
        height: 600,
        default_bg_color: {
          r: 255,
          g: 255,
          b: 255
        },
        slide_padding_lr: 40,
        start_at_slide: 1,
        slide_default_fade: "0%",
        duration: 1e3,
        ease: ht,
        dragging: !0,
        trackResize: !0
      }, "object" == typeof t ? (this._el.container = t, this.options.id = $(6, "tl")) : (this.options.id = t, this._el.container = T(t)), this._el.container.id || (this._el.container.id = this.options.id), this.animator = null, N(this.options, i), N(this.data, e)
    }
    init() {
      this._initLayout(), this._initEvents(), this._initData(), this._updateDisplay(), this.goTo(this.options.start_at_slide), this._onLoaded()
    }
    _addSlide(t) {
      t.addTo(this._el.slider_item_container), t.on("added", this._onSlideAdded, this), t.on("background_change", this._onBackgroundChange, this)
    }
    _createSlide(t, e, i) {
      var n = new qe(t, this.options, e, this.getLanguage());
      this._addSlide(n), i < 0 ? this._slides.push(n) : this._slides.splice(i, 0, n)
    }
    _createSlides(t) {
      for (var e = 0; e < t.length; e++) "" == t[e].unique_id && (t[e].unique_id = $(6, "tl-slide")), this._createSlide(t[e], !1, -1)
    }
    _removeSlide(t) {
      t.removeFrom(this._el.slider_item_container), t.off("added", this._onSlideRemoved, this), t.off("background_change", this._onBackgroundChange)
    }
    _destroySlide(t) {
      this._removeSlide(this._slides[t]), this._slides.splice(t, 1)
    }
    _findSlideIndex(t) {
      var e = t;
      return ("string" == typeof t || t instanceof String) && (e = G(t, this._slides, "unique_id")), e
    }
    updateDisplay(t, e, i, n) {
      this._updateDisplay(t, e, i, n)
    }
    createSlide(t, e) {
      this._createSlide(t, !1, e)
    }
    createSlides(t) {
      this._createSlides(t)
    }
    destroySlide(t) {
      this._destroySlide(t)
    }
    destroySlideId(t) {
      this.destroySlide(this._findSlideIndex(t))
    }
    goTo(t, e, i) {
      t = parseInt(t), isNaN(t) && (t = 0);
      var n = this;
      this.changeBackground({
        color_value: "",
        image: !1
      }), this.preloadTimer && clearTimeout(this.preloadTimer);
      for (var r = 0; r < this._slides.length; r++) this._slides[r].setActive(!1);
      t < this._slides.length && t >= 0 && (this.current_id = this._slides[t].data.unique_id, this.animator && this.animator.stop(), this._swipable && this._swipable.stopMomentum(), e ? (this._el.slider_container.style.left = -this.slide_spacing * t + "px", this._onSlideChange(i)) : this.animator = dt(this._el.slider_container, {
        left: -this.slide_spacing * t + "px",
        duration: this.options.duration,
        easing: this.options.ease,
        complete: this._onSlideChange(i)
      }), this._slides[t].setActive(!0), this._slides[t + 1] ? (this.showNav(this._nav.next, !0), this._nav.next.update(this._slides[t + 1])) : this.showNav(this._nav.next, !1), this._slides[t - 1] ? (this.showNav(this._nav.previous, !0), this._nav.previous.update(this._slides[t - 1])) : this.showNav(this._nav.previous, !1), this.preloadTimer = setTimeout((function() {
        n.preloadSlides(t)
      }), this.options.duration))
    }
    goToId(t, e, i) {
      this.goTo(this._findSlideIndex(t), e, i)
    }
    preloadSlides(t) {
      this._slides[t + 1] && (this._slides[t + 1].loadMedia(), this._slides[t + 1].scrollToTop()), this._slides[t + 2] && (this._slides[t + 2].loadMedia(), this._slides[t + 2].scrollToTop()), this._slides[t - 1] && (this._slides[t - 1].loadMedia(), this._slides[t - 1].scrollToTop()), this._slides[t - 2] && (this._slides[t - 2].loadMedia(), this._slides[t - 2].scrollToTop())
    }
    next() {
      var t = this._findSlideIndex(this.current_id);
      t + 1 < this._slides.length ? this.goTo(t + 1) : this.goTo(t)
    }
    previous() {
      var t = this._findSlideIndex(this.current_id);
      t - 1 >= 0 ? this.goTo(t - 1) : this.goTo(t)
    }
    showNav(t, e) {
      this.options.width <= 500 && c || (e ? t.show() : t.hide())
    }
    changeBackground(t) {
      var e = {
        r: 256,
        g: 256,
        b: 256
      };
      t.color_value && "" != t.color_value ? (e = C(t.color_value)) || (z("Invalid color value " + t.color_value), e = this.options.default_bg_color) : (e = this.options.default_bg_color, t.color_value = "rgb(" + e.r + " , " + e.g + ", " + e.b + ")"), e.r, e.g, e.b, this._el.background.style.backgroundImage = "none", t.color_value ? this._el.background.style.backgroundColor = t.color_value : this._el.background.style.backgroundColor = "transparent", e.r < 255 || e.g < 255 || e.b < 255 || t.image ? (this._nav.next.setColor(!0), this._nav.previous.setColor(!0)) : (this._nav.next.setColor(!1), this._nav.previous.setColor(!1))
    }
    _updateDisplay(t, e, i, n) {
      var r, a;
      a = void 0 === n ? this.options.layout : n, this.options.layout = a, this.slide_spacing = 2 * this.options.width, this.options.width = t || this._el.container.offsetWidth, this.options.height = e || this._el.container.offsetHeight, r = this.options.height / 2, this._nav.next.setPosition({
        top: r
      }), this._nav.previous.setPosition({
        top: r
      });
      for (var o = 0; o < this._slides.length; o++) this._slides[o].updateDisplay(this.options.width, this.options.height, a), this._slides[o].setPosition({
        left: this.slide_spacing * o,
        top: 0
      });
      this.goToId(this.current_id, !0, !0)
    }
    _updateDrawSlides() {
      for (var t = this.options.layout, e = 0; e < this._slides.length; e++) this._slides[e].updateDisplay(this.options.width, this.options.height, t), this._slides[e].setPosition({
        left: this.slide_spacing * e,
        top: 0
      });
      this.goToId(this.current_id, !0, !1)
    }
    _initLayout() {
      S(this._el.container, "tl-storyslider"), this._el.slider_container_mask = M("div", "tl-slider-container-mask", this._el.container), this._el.background = M("div", "tl-slider-background tl-animate", this._el.container), this._el.slider_container = M("div", "tl-slider-container tlanimate", this._el.slider_container_mask), this._el.slider_item_container = M("div", "tl-slider-item-container", this._el.slider_container), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this._nav.previous = new Fe({
        title: "Previous",
        description: "description"
      }, {
        direction: "previous"
      }), this._nav.next = new Fe({
        title: "Next",
        description: "description"
      }, {
        direction: "next"
      }), this._nav.next.addTo(this._el.container), this._nav.previous.addTo(this._el.container), this._el.slider_container.style.left = "0px", x && (this._swipable = new Pe(this._el.slider_container_mask, this._el.slider_container, {
        enable: {
          x: !0,
          y: !1
        },
        snap: !0
      }), this._swipable.enable(), this._message = new Rt(this._el.container, {
        message_class: "tl-message-full",
        message_icon_class: "tl-icon-swipe-left"
      }, this.getLanguage()), this._message.updateMessage(this._("swipe_to_navigate")), this._message.addTo(this._el.container))
    }
    _initEvents() {
      this._nav.next.on("clicked", this._onNavigation, this), this._nav.previous.on("clicked", this._onNavigation, this), this._message && this._message.on("clicked", this._onMessageClick, this), this._swipable && (this._swipable.on("swipe_left", this._onNavigation, this), this._swipable.on("swipe_right", this._onNavigation, this), this._swipable.on("swipe_nodirection", this._onSwipeNoDirection, this))
    }
    _initData() {
      this.data.title && this._createSlide(this.data.title, !0, -1), this._createSlides(this.data.events)
    }
    _onBackgroundChange(t) {
      var e = this._findSlideIndex(this.current_id),
        i = this._slides[e].getBackground();
      this.changeBackground(t), this.fire("colorchange", i)
    }
    _onMessageClick(t) {
      this._message.hide()
    }
    _onSwipeNoDirection(t) {
      this.goToId(this.current_id)
    }
    _onNavigation(t) {
      "next" == t.direction || "left" == t.direction ? this.next() : "previous" != t.direction && "right" != t.direction || this.previous(), this.fire("nav_" + t.direction, this.data)
    }
    _onSlideAdded(t) {
      z("slideadded"), this.fire("slideAdded", this.data)
    }
    _onSlideRemoved(t) {
      this.fire("slideRemoved", this.data)
    }
    _onSlideChange(t) {
      t || this.fire("change", {
        unique_id: this.current_id
      })
    }
    _onMouseClick(t) {}
    _fireMouseEvent(t) {
      if (this._loaded) {
        var e = t.type;
        e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e) && ("contextmenu" === e && gt.preventDefault(t), this.fire(e, {
          latlng: "something",
          layerPoint: "something else"
        }))
      }
    }
    _onLoaded() {
      this.fire("loaded", this.data)
    }
  }
  B(Be, zt, ut);
  class We {
    constructor(t, e, i) {
      this._el = {
        parent: {},
        container: {},
        button_backtostart: {},
        button_zoomin: {},
        button_zoomout: {},
        arrow: {},
        line: {},
        coverbar: {},
        grip: {}
      }, this.collapsed = !1, this._el.container = "object" == typeof t ? t : T(t), e && (this._el.parent = e), this.options = {
        width: 600,
        height: 600,
        duration: 1e3,
        ease: ht,
        menubar_default_y: 0
      }, this.animator = {}, N(this.options, i), this._initLayout(), this._initEvents()
    }
    show(t) {
      this.options.duration
    }
    hide(t) {}
    toogleZoomIn(t) {
      t ? D(this._el.button_zoomin, "tl-menubar-button-inactive") : S(this._el.button_zoomin, "tl-menubar-button-inactive")
    }
    toogleZoomOut(t) {
      t ? D(this._el.button_zoomout, "tl-menubar-button-inactive") : S(this._el.button_zoomout, "tl-menubar-button-inactive")
    }
    setSticky(t) {
      this.options.menubar_default_y = t
    }
    setColor(t) {
      this._el.container.className = t ? "tl-menubar tl-menubar-inverted" : "tl-menubar"
    }
    updateDisplay(t, e, i, n) {
      this._updateDisplay(t, e, i, n)
    }
    _onButtonZoomIn(t) {
      this.fire("zoom_in", t)
    }
    _onButtonZoomOut(t) {
      this.fire("zoom_out", t)
    }
    _onButtonBackToStart(t) {
      this.fire("back_to_start", t)
    }
    _initLayout() {
      this._el.button_zoomin = M("span", "tl-menubar-button", this._el.container), this._el.button_zoomout = M("span", "tl-menubar-button", this._el.container), this._el.button_backtostart = M("span", "tl-menubar-button", this._el.container), c && this._el.container.setAttribute("ontouchstart", " "), this._el.button_backtostart.innerHTML = "<span class='tl-icon-goback'></span>", this._el.button_zoomin.innerHTML = "<span class='tl-icon-zoom-in'></span>", this._el.button_zoomout.innerHTML = "<span class='tl-icon-zoom-out'></span>"
    }
    _initEvents() {
      gt.addListener(this._el.button_backtostart, "click", this._onButtonBackToStart, this), gt.addListener(this._el.button_zoomin, "click", this._onButtonZoomIn, this), gt.addListener(this._el.button_zoomout, "click", this._onButtonZoomOut, this)
    }
    _updateDisplay(t, e, i) {
      t && (this.options.width = t), e && (this.options.height = e)
    }
  }
  B(We, pt, ut);
  let Ue = null;
  if (document) {
    let t = document.getElementsByTagName("script");
    Ue = t[t.length - 1].src
  }
  class $e {
    constructor(t, e, i) {
      if (i || (i = {}), this.ready = !1, this._el = {
          container: T(t),
          storyslider: {},
          timenav: {},
          menubar: {}
        }, i.lang && !i.language && (i.language = i.lang), this.language = It, this._storyslider = {}, this._timenav = {}, this._menubar = {}, this._loaded = {
          storyslider: !1,
          timenav: !1
        }, this.config = null, this.options = {
          script_path: "",
          height: this._el.container.offsetHeight,
          width: this._el.container.offsetWidth,
          debug: !1,
          is_embed: !1,
          is_full_embed: !1,
          hash_bookmark: !1,
          default_bg_color: {
            r: 255,
            g: 255,
            b: 255
          },
          scale_factor: 2,
          layout: "landscape",
          timenav_position: "bottom",
          optimal_tick_width: 60,
          base_class: "tl-timeline",
          timenav_height: null,
          timenav_height_percentage: 25,
          timenav_mobile_height_percentage: 40,
          timenav_height_min: 175,
          marker_height_min: 30,
          marker_width_min: 100,
          marker_padding: 5,
          start_at_slide: 0,
          start_at_end: !1,
          menubar_height: 0,
          skinny_size: 650,
          medium_size: 800,
          use_bc: !1,
          duration: 1e3,
          ease: ht,
          dragging: !0,
          trackResize: !0,
          map_type: "stamen:toner-lite",
          slide_padding_lr: 100,
          slide_default_fade: "0%",
          zoom_sequence: [.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
          language: "en",
          ga_property_id: null,
          track_events: ["back_to_start", "nav_next", "nav_previous", "zoom_in", "zoom_out"],
          theme: null
        }, this.animator_timenav = null, this.animator_storyslider = null, this.animator_menubar = null, this.message = new Rt(this._el.container, {
          message_class: "tl-message-full"
        }), "string" == typeof i.default_bg_color) {
        var n = C(i.default_bg_color);
        n ? i.default_bg_color = n : (delete i.default_bg_color, z("Invalid default background color. Ignoring."))
      }
      var r, a;
      N(this.options, i), this.options.script_path || (this.options.script_path = this.determineScriptPath()), this._loadStyles(), document.addEventListener("keydown", (r = this, function(t) {
        var e = t.key,
          i = r._getSlideIndex(self.current_id),
          n = r.config.events.length - 1,
          a = r.config.title ? n + 1 : n;
        "ArrowLeft" == e ? 0 != i && r.goToPrev() : "ArrowRight" == e && i != a && r.goToNext()
      })), window.addEventListener("resize", function(t) {
        this.updateDisplay()
      }.bind(this)), this.options.debug && (a = console.log, I.push(a)), S(this._el.container, "tl-timeline"), this.options.is_embed && S(this._el.container, "tl-timeline-embed"), this.options.is_full_embed && S(this._el.container, "tl-timeline-full-embed"), this._loadLanguage(e)
    }
    _loadStyles() {
      let t = null,
        e = null;
      if (this.options.font && 0 == this.options.font.indexOf("http")) t = this.options.font;
      else if (this.options.font) {
        let e = "../css/fonts/font." + this.options.font.toLowerCase() + ".css";
        t = new URL(e, this.options.script_path).toString()
      }
      if (t && de(t), this.options.theme && 0 == this.options.theme.indexOf("http")) e = this.options.theme;
      else if (this.options.theme) {
        let t = "../css/themes/timeline.theme." + this.options.theme.toLowerCase() + ".css";
        e = new URL(t, this.options.script_path).toString()
      }
      e && de(e)
    }
    _loadLanguage(t) {
      try {
        var e = this.options.language,
          i = this.options.script_path;
        this.language = new Ct(e, i), this.message.setLanguage(this.language), this.options.language = this.language, this.showMessage(this._("loading_timeline")), this._initData(t)
      } catch (t) {
        this.showMessage(this._translateError(t))
      }
    }
    _initData(t) {
      "string" == typeof t ? te(t, function(t) {
        this.setConfig(t)
      }.bind(this)) : Gt == t.constructor ? this.setConfig(t) : this.setConfig(new Gt(t))
    }
    _translateError(t) {
      return t.hasOwnProperty("stack") && z(t.stack), t.message_key ? this._(t.message_key) + (t.detail ? " [" + t.detail + "]" : "") : t
    }
    showMessage(t) {
      this.message ? this.message.updateMessage(t) : (z("No message display available."), z(t))
    }
    determineScriptPath() {
      let t = null;
      if (Ue) t = Ue;
      else {
        let e = document.getElementById("timeline-script-tag");
        e && (t = e.src)
      }
      if (!t) {
        let e = document.getElementsByTagName("script");
        for (let i = e.length - 1; i >= 0; i--)
          if (e[i].src) {
            t = e[i].src;
            break
          }
      }
      return t ? t.substr(0, t.lastIndexOf("/") + 1) : ""
    }
    setConfig(t) {
      if (this.config = t, this.config.validate(), this._validateOptions(), this.config.isValid()) try {
        this._onDataLoaded()
      } catch (t) {
        this.showMessage("<strong>" + this._("error") + ":</strong> " + this._translateError(t))
      } else {
        for (var e = [], i = 0, n = this.config.getErrors(); i < n.length; i++) e.push(this._translateError(n[i]));
        this.showMessage("<strong>" + this._("error") + ":</strong> " + e.join("<br>"))
      }
    }
    _onDataLoaded() {
      this.fire("dataloaded"), this._initLayout(), this._initEvents(), this._initAnalytics(), this.message && this.message.hide(), this.ready = !0
    }
    _initLayout() {
      //this.options.initial_zoom = 3
      this.message.removeFrom(this._el.container), this._el.container.innerHTML = "", "top" == this.options.timenav_position ? (this._el.timenav = M("div", "tl-timenav", this._el.container), this._el.storyslider = M("div", "tl-storyslider", this._el.container)) : (this._el.storyslider = M("div", "tl-storyslider", this._el.container), this._el.timenav = M("div", "tl-timenav", this._el.container)), this._el.menubar = M("div", "tl-menubar", this._el.container), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.timenav_height = this._calculateTimeNavHeight(this.options.timenav_height), this._timenav = new He(this._el.timenav, this.config, this.options, this.language), this._timenav.on("loaded", this._onTimeNavLoaded, this), this._timenav.options.height = this.options.timenav_height, this._timenav.init(), this.options.initial_zoom && this.setZoom(this.options.initial_zoom), this._storyslider = new Be(this._el.storyslider, this.config, this.options, this.language), this._storyslider.on("loaded", this._onStorySliderLoaded, this), this._storyslider.init(), this._menubar = new We(this._el.menubar, this._el.container, this.options), "portrait" == this.options.layout ? this.options.storyslider_height = this.options.height - this.options.timenav_height - 1 : this.options.storyslider_height = this.options.height - 1, this._updateDisplay(this._timenav.options.height, !0, 2e3)
    }
    _initEvents() {
      this._timenav.on("change", this._onTimeNavChange, this), this._timenav.on("zoomtoggle", this._onZoomToggle, this), this._storyslider.on("change", this._onSlideChange, this), this._storyslider.on("colorchange", this._onColorChange, this), this._storyslider.on("nav_next", this._onStorySliderNext, this), this._storyslider.on("nav_previous", this._onStorySliderPrevious, this), this._menubar.on("zoom_in", this._onZoomIn, this), this._menubar.on("zoom_out", this._onZoomOut, this), this._menubar.on("back_to_start", this._onBackToStart, this)
    }
    _onColorChange(t) {
      this.fire("color_change", {
        unique_id: this.current_id
      }, this)
    }
    _onSlideChange(t) {
      this.current_id != t.unique_id && (this.current_id = t.unique_id, this._timenav.goToId(this.current_id), this._onChange(t))
    }
    _onTimeNavChange(t) {
      this.current_id != t.unique_id && (this.current_id = t.unique_id, this._storyslider.goToId(this.current_id), this._onChange(t))
    }
    _onZoomToggle(t) {
      "in" == t.zoom ? this._menubar.toogleZoomIn(t.show) : "out" == t.zoom && this._menubar.toogleZoomOut(t.show)
    }
    _onChange(t) {
      this.fire("change", {
        unique_id: this.current_id
      }, this), this.options.hash_bookmark && this.current_id && this._updateHashBookmark(this.current_id)
    }
    _onBackToStart(t) {
      this._storyslider.goTo(0), this.fire("back_to_start", {
        unique_id: this.current_id
      }, this)
    }
    zoomIn() {
      this._timenav.zoomIn()
    }
    zoomOut() {
      this._timenav.zoomOut()
    }
    setZoom(t) {
      this._timenav.setZoom(t)
    }
    _onZoomIn(t) {
      this._timenav.zoomIn(), this.fire("zoom_in", {
        zoom_level: this._timenav.options.scale_factor
      }, this)
    }
    _onZoomOut(t) {
      this._timenav.zoomOut(), this.fire("zoom_out", {
        zoom_level: this._timenav.options.scale_factor
      }, this)
    }
    _onTimeNavLoaded() {
      this._loaded.timenav = !0, this._onLoaded()
    }
    _onStorySliderLoaded() {
      this._loaded.storyslider = !0, this._onLoaded()
    }
    _onStorySliderNext(t) {
      this.fire("nav_next", t)
    }
    _onStorySliderPrevious(t) {
      this.fire("nav_previous", t)
    }
    _updateDisplay(t, e, i) {
      var n, r = this.options.duration,
        a = this.options.base_class,
        o = 0;
      i && (r = i), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.width <= this.options.skinny_size ? (a += " tl-skinny", this.options.layout = "portrait") : this.options.width <= this.options.medium_size ? (a += " tl-medium", this.options.layout = "landscape") : this.options.layout = "landscape", x && (this.options.layout = (n = "portrait", window.innerWidth > window.innerHeight && (n = "landscape"), Math.abs(window.orientation), n)), c ? (a += " tl-mobile", this.options.timenav_height = this._calculateTimeNavHeight(t, this.options.timenav_mobile_height_percentage)) : this.options.timenav_height = this._calculateTimeNavHeight(t), "portrait" == this.options.layout ? a += " tl-layout-portrait" : a += " tl-layout-landscape", this.options.storyslider_height = this.options.height - this.options.timenav_height, o = "top" == this.options.timenav_position ? Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 19.5 : Math.round(this.options.storyslider_height + 1 + Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 17.5), e ? (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this.animator_storyslider && this.animator_storyslider.stop(), this.animator_storyslider = dt(this._el.storyslider, {
        height: this.options.storyslider_height + "px",
        duration: r / 2,
        easing: lt
      }), this.animator_menubar && this.animator_menubar.stop(), this.animator_menubar = dt(this._el.menubar, {
        top: o + "px",
        duration: r / 2,
        easing: lt
      })) : (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this._el.storyslider.style.height = this.options.storyslider_height + "px", this._el.menubar.style.top = o + "px"), this.message && this.message.updateDisplay(this.options.width, this.options.height), this._timenav.updateDisplay(this.options.width, this.options.timenav_height, e), this._storyslider.updateDisplay(this.options.width, this.options.storyslider_height, e, this.options.layout), "rtl" == this.options.language.direction && (a += " tl-rtl"), this._el.container.className = a
    }
    _calculateTimeNavHeight(t, e) {
      var i = 0;
      return t ? i = t : (this.options.timenav_height_percentage || e) && (i = e ? Math.round(this.options.height / 100 * e) : Math.round(this.options.height / 100 * this.options.timenav_height_percentage)), this._timenav.ready && this.options.timenav_height_min < this._timenav.getMinimumHeight() && (this.options.timenav_height_min = this._timenav.getMinimumHeight()), i < this.options.timenav_height_min && (i = this.options.timenav_height_min), i -= 2 * this.options.marker_padding
    }
    _validateOptions() {
      for (var t = ["timenav_height", "timenav_height_min", "marker_height_min", "marker_width_min", "marker_padding", "start_at_slide", "slide_padding_lr"], e = 0; e < t.length; e++) {
        var i = t[e],
          n = this.options[i];
        let r = !0;
        "number" == typeof n ? r = n == parseInt(n) : "string" == typeof n && (r = n.match(/^\s*(\-?\d+)?\s*$/)), r || this.config.logError({
          message_key: "invalid_integer_option",
          detail: i
        })
      }
    }
    _getSlideIndex(t) {
      if (this.config.title && this.config.title.unique_id == t) return 0;
      for (var e = 0; e < this.config.events.length; e++)
        if (t == this.config.events[e].unique_id) return this.config.title ? e + 1 : e;
      return -1
    }
    _onTimeNavLoaded() {
      this._loaded.timenav = !0, this._onLoaded()
    }
    _onStorySliderLoaded() {
      this._loaded.storyslider = !0, this._onLoaded()
    }
    _onLoaded() {
      var t;
      this._loaded.storyslider && this._loaded.timenav && (this.fire("loaded", this.config), this.options.hash_bookmark && "" != window.location.hash ? this.goToId(window.location.hash.replace("#event-", "")) : (null != (t = this.options.start_at_end) && (1 == t || "true" == String(t).toLowerCase() || 1 == Number(t)) || this.options.start_at_slide > this.config.events.length ? this.goToEnd() : this.goTo(this.options.start_at_slide), this.options.hash_bookmark && this._updateHashBookmark(this.current_id)))
    }
    _updateHashBookmark(t) {
      var e = "#event-" + t.toString();
      window.history.replaceState(null, "Browsing TimelineJS", e), this.fire("hash_updated", {
        unique_id: this.current_id,
        hashbookmark: "#event-" + t.toString()
      }, this)
    }
    goToId(t) {
      this.current_id != t && (this.current_id = t, this._timenav.goToId(this.current_id), this._storyslider.goToId(this.current_id, !1, !0), this.fire("change", {
        unique_id: this.current_id
      }, this))
    }
    goTo(t) {
      this.config.title ? 0 == t ? this.goToId(this.config.title.unique_id) : this.goToId(this.config.events[t - 1].unique_id) : this.goToId(this.config.events[t].unique_id)
    }
    goToStart() {
      this.goTo(0)
    }
    goToEnd() {
      var t = this.config.events.length - 1;
      this.goTo(this.config.title ? t + 1 : t)
    }
    goToPrev() {
      this.goTo(this._getSlideIndex(this.current_id) - 1)
    }
    goToNext() {
      this.goTo(this._getSlideIndex(this.current_id) + 1)
    }
    updateDisplay() {
      this.ready && this._updateDisplay()
    }
    _initGoogleAnalytics() {
      var t, e, i, n, r, a;
      t = window, e = document, i = "script", n = "ga", t.GoogleAnalyticsObject = n, t.ga = t.ga || function() {
        (t.ga.q = t.ga.q || []).push(arguments)
      }, t.ga.l = 1 * new Date, r = e.createElement(i), a = e.getElementsByTagName(i)[0], r.async = 1, r.src = "//www.google-analytics.com/analytics.js", a.parentNode.insertBefore(r, a), ga("create", this.options.ga_property_id, "auto"), ga("set", "anonymizeIp", !0)
    }
    _initAnalytics() {
      if (null !== this.options.ga_property_id) {
        this._initGoogleAnalytics(), ga("send", "pageview");
        var t = this.options.track_events;
        for (let i = 0; i < t.length; i++) {
          var e = t[i];
          this.addEventListener(e, (function(t) {
            ga("send", "event", t.type, "clicked")
          }))
        }
      }
    }
  }
  B($e, zt, ut), i(1)
}]);
//# sourceMappingURL=timeline.js.map
