!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Pikachizer = e() : t.Pikachizer = e()
  }(window, (function() {
    return function(t) {
        var e = {};
        function n(i) {
            if (e[i])
                return e[i].exports;
            var r = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (n.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var r in t)
                    n.d(i, r, function(e) {
                        return t[e]
                    }
                    .bind(null, r));
            return i
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 0)
    }([function(t, e) {
      const n = [
          ['bul', 'bull'],
          ['bul', 'ba', 'saur'],
          ['bull', 'bul-l', 'ba', 'baa', 'saur'],
          ['bulba', 'bulll', 'bulbul', 'basaur', 'baaa', 'saurr'],
          ['bulbbaa', 'bulbaba', 'basaur', 'bullba', 'saurrr'],
          ['bullbaa', 'bulbasaur', 'saurrrr', 'bulba-bul', 'baa-bullbaa-bul'],
          ['bulba-saur', 'bulba-bulba', 'bullbasaur', 'bulbasaur'],
          ['bulba-bulba', 'bullbasaur', 'bul-baaa-saur', 'bul-bulbasaur'],
        ]
          , i = {};
        function r(t, e) {
            return Math.floor(Math.random() * (e - t) + t)
        }
        function o(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        function u(t) {
            if (i[t])
                return i[t];
            let e;
            const o = t.length;
            if (o < 8) {
                const t = n[r(0, n.length)];
                e = t[r(0, t.length)]
            } else {
                const n = r(1, o);
                e = `${u(t.substr(0, n))}-${u(t.substr(n))}`
            }
            return i[t] = e,
            e
        }
        const a = {
            translate: function(t) {
                let e = 0
                  , n = "";
                const i = t.matchAll(/\b\w+\b/g);
                for (const a of i) {
                    const i = a[0]
                      , c = a.index
                      , p = t.substring(e, c);
                    e = c + i.length;
                    const f = u(i);
                    n += `${p}${r = i,
                    /[A-Z]/.test(r.charAt(0)) ? o(f) : f}`
                }
                var r;
                return n += t.substring(e),
                n
            }
        };
        t.exports = a
    }
    ])
  }
  ));
  