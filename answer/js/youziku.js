(function (n, t) { var i = function (t) { var r = { Version: 3, ServerUrl: t + "//api.youziku.com/webfont/FastJSPost", MD5UrlTemplate: t + "//vip-youzikuwebfont.oss-cn-beijing.aliyuncs.com/selectors/webUrl/", OSSBlackListUrlTemplate: t + "//youziku.oss-cn-beijing.aliyuncs.com/userAuth/", Protocol: t, HttpMethod: { GET: "GET", POST: "POST" } }, u = { drawed: !1, promises: [], localArray: [], remoteArray: [], applyFontfaceArray: [], isSync: !1, url: "", md5jsURl: "", preContents: [], init: function () { var i = decodeURI($youziku.UrlModule.getUrl()), f = $youziku.Md5Module.encrypt(encodeURI(i)), u = r.MD5UrlTemplate + f + ".js?rom=" + Math.random(), t; this.url = i; this.md5jsURl = u; this.requestAndRunMd5js(u); t = this; n.addEventListener ? n.addEventListener("load", function () { t.checkLoad() }) : n.attachEvent("onload", function () { t.checkLoad() }) }, submitToServer: function () { var i = 0, n = [], u, f, h, e, t, o, s, r; for (t in this.localArray) (u = this.preContents[this.localArray[t].selector], u == undefined && (u = ""), f = $youziku.TextModule.getText(this.localArray[t].selector, u), h = $youziku.Md5Module.encrypt(f), f !== "") && (undefined == this.remoteArray[t] || h !== this.remoteArray[t].contentMd5 || this.localArray[t].accessKey !== this.remoteArray[t].accessKey) && (n.push({ k: "s" + i, v: this.localArray[t].selector }), n.push({ k: "k" + i, v: this.localArray[t].accessKey }), n.push({ k: "a" + i, v: !0 }), n.push({ k: "m" + i, v: h }), u !== "" ? n.push({ k: "t" + i, v: $youziku.TextModule.getText(this.localArray[t].selector, "") }) : n.push({ k: "t" + i, v: f }), i++); e = []; for (t in this.remoteArray) t !== "" && undefined === this.localArray[t] && (n.push({ k: "s" + i, v: this.remoteArray[t].selector }), n.push({ k: "k" + i, v: $youziku.TextModule.trim(this.remoteArray[t].accessKey) }), n.push({ k: "a" + i, v: !1 }), n.push({ k: "m" + i, v: "" }), n.push({ k: "t" + i, v: "" }), i++ , e.push(t)); for (o = 0; o < e.length; o++)delete this.remoteArray[e[o]]; if (i > 0) { for (n.push({ k: "num", v: i }), n.push({ k: "url", v: encodeURI(decodeURI(this.url ? this.url : location.href)) }), s = "", r = 0; r < n.length; r++)s += r >= n.length - 1 ? n[r].k + "=" + encodeURIComponent($youziku.TextModule.trim(n[r].v)) : n[r].k + "=" + encodeURIComponent($youziku.TextModule.trim(n[r].v)) + "&"; location.hostname !== "" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1" ? this.validateOSS(s) : this.makeWebFont(s) } }, checkLoad: function () { this.isSync ? this.syncMode() : this.asyncMode() }, asyncMode: function () { if (!(this.promises.length <= 0)) { var n = this; Promise.all(n.promises).then(function (t) { t.length === n.promises.length && (n.isSync || (n.isSync = !0, n.syncMode())) }, function (n) { console.error("$youziku:" + n) }) } }, syncMode: function () { this.drawed || (this.drawed = !0, this.submitToServer()) }, makeWebFont: function (n) { var t = this; $youziku.HttpModule.request(r.HttpMethod.POST, r.ServerUrl, !0, n, function (n) { var i = JSON.parse(n); t.showMsg(i) }, function () { }) }, validateOSS: function (n) { var i = r.OSSBlackListUrlTemplate + $youziku.Md5Module.encrypt(location.hostname) + ".backlist.json?rom=" + Math.random(), t = this, u = function (n, t) { navigator.userAgent.indexOf("Firefox") >= 0 && n.setHours(n.getHours() + 8); var i = new Date(t); return (navigator.userAgent.indexOf("Firefox") >= 0 && i.setHours(i.getHours() + 8), n.getTime() > i.getTime()) ? !0 : !1 }; $youziku.HttpModule.request(r.HttpMethod.GET, i, !0, null, function (i) { var r = JSON.parse(i), f = r.Expires.toString(), o = r.AddTime.toString(), s = u(new Date, f), e; s ? t.makeWebFont(n) : (e = { Code: 403, Result: "warn", Value: location.hostname + "璇锋眰杩囦簬棰戠箒,绯荤粺宸茶嚜鍔ㄦ嫤鎴紝璇蜂簬" + f + "閲嶈瘯锛佹嫤鎴椂闂�:" + o }, t.showMsg(e)) }, function () { t.makeWebFont(n) }) }, showMsg: function (n) { console.log("%c鏈夊瓧搴揂pi鐢熸垚缁撴灉:", "background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #9A32CD), color-stop(0.6, #8B4789),color-stop(0.75, #006400), color-stop(0.9, #4876FF) );color:transparent;-webkit-background-clip: text;font-size:23px;"); var i = n.Result, t = "green"; i === "warn" || i === "null" ? t = "#FF7F24" : i === "error" && (t = "red"); console.log("\t%c code:" + n.Code, " font-size:16px;color:" + t); console.log("\t%c errMsg:" + n.Value, " font-size:16px;color:" + t); this.requestAndRunMd5js(this.md5jsURl + "&refreshToken=" + Math.random()) }, requestAndRunMd5js: function (n) { var t; $youziku.HttpModule.request(r.HttpMethod.GET, n, !1, null, function (n) { t = n }, function () { t = "$youziku.verify('', '','');" }); try { window.execScript(t) } catch (i) { window.eval(t) } }, writeContent: function (n, t) { this.preContents[n] = t }, applyNewFontface: function () { var e = this.applyFontfaceArray, h, t, y, r, p, u, c, f, n, l; if (e) for (h in e) if (e.hasOwnProperty(h)) { var o = e[h], w = o.Tag, a = o.Fontfamily, s = o.YzkSysFontfamily, v = o.ApplyFontface, i = this.localArray[w]; if (!i) continue; if (t = "", typeof i.fontFamily == "function") { if (y = function (n, t) { this.userFontfamily = ""; this.userInput = ""; this.changeFontfamily = function (i) { this.userInput = i; i = i.replace(n, t); this.userFontfamily = i.replace("$yzk", t) } }, r = new y(a, s), i.fontFamily(r), r.userFontfamily !== "" && (t = r.userFontfamily, t === r.userInput)) continue } else { if (!i.fontFamily) continue; if (p = i.fontFamily.replace(a, s), t = p.replace("$yzk", s), t === i.fontFamily) continue } if (t === "") continue; if (u = t.split(","), u.length <= 1) continue; for (c = "", f = 0; f < u.length; f++)n = u[f], n = $youziku.TextModule.trim(n), c += f === u.length - 1 ? n.indexOf("'") !== -1 && n.lastIndexOf("'") !== -1 || n.indexOf('"') !== -1 && n.lastIndexOf('"') !== -1 ? n : "'" + n + "'" : n.indexOf("'") !== -1 && n.lastIndexOf("'") !== -1 || n.indexOf('"') !== -1 && n.lastIndexOf('"') !== -1 ? n + "," : "'" + n + "',"; $youziku.FontfaceModule.remove(v); l = v.replace($youziku.TextModule.trim("'" + s + "'"), c); $youziku.FontfaceModule.remove(l); $youziku.FontfaceModule.add(l) } } }; return new i.prototype.ApiModule(r, u) }, r; i.fn = i.prototype = { ApiModule: function (n, t) { this.run = function () { t.init() }; this.load = function (n, i, r, u) { var f = n.replace(/(^\s*)|(\s*$)/g, ""); t.localArray[f] = { selector: f, accessKey: i, fontFamily: r, a: u || !1 } }; this.attach = function (n) { var i = new Promise(n); return t.promises.push(i), i }; this.submit = function (i, r) { var u = r ? i + "_" + r : i; var f = decodeURI(this.UrlModule.getUrl()), o = this.Md5Module.encrypt(encodeURI(f + "_" + u)), e = n.MD5UrlTemplate + o + ".js?rom=" + Math.random(); t.requestAndRunMd5js(e); t.md5jsURl = e; t.url = f + "_" + u; t.submitToServer() }; this.ajaxfont = function () { t.isSync || (t.isSync = !0, t.syncMode()) }; this.verify = function (n, i, r) { t.remoteArray[n] = { selector: n, contentMd5: i, accessKey: r } }; this.draw = function (n) { t.isSync = n == null ? !0 : !1; this.load = function () { }; t.applyNewFontface() }; this.css = function (n) { $youziku.FontfaceModule.remove(n); $youziku.FontfaceModule.add(n) }; this.applyFontface = function (n, i, r, u) { t.applyFontfaceArray[u] = { Tag: u, Fontfamily: r, ApplyFontface: n, YzkSysFontfamily: i }; $youziku.FontfaceModule.remove(n); $youziku.FontfaceModule.add(n); t.applyNewFontface() }; this.writeContent = function (n, i) { t.writeContent(n, i) } }, Md5Module: { encrypt: function (n) { var s = 0, e = 8, o = function (n, t, i, r, u, e) { return f(h(f(f(t, n), f(r, e)), u), i) }, t = function (n, t, i, r, u, f, e) { return o(t & i | ~t & r, n, t, u, f, e) }, i = function (n, t, i, r, u, f, e) { return o(t & r | i & ~r, n, t, u, f, e) }, r = function (n, t, i, r, u, f, e) { return o(t ^ i ^ r, n, t, u, f, e) }, u = function (n, t, i, r, u, f, e) { return o(i ^ (t | ~r), n, t, u, f, e) }, h = function (n, t) { return n << t | n >>> 32 - t }, f = function (n, t) { var i = (n & 65535) + (t & 65535), r = (n >> 16) + (t >> 16) + (i >> 16); return r << 16 | i & 65535 }, c = function (n) { for (var i = Array(), r = (1 << e) - 1, t = 0; t < n.length * e; t += e)i[t >> 5] |= (n.charCodeAt(t / e) & r) << t % 32; return i }, l = function (n) { for (var i = s ? "0123456789ABCDEF" : "0123456789abcdef", r = "", t = 0; t < n.length * 4; t++)r += i.charAt(n[t >> 2] >> t % 4 * 8 + 4 & 15) + i.charAt(n[t >> 2] >> t % 4 * 8 & 15); return r }, a = function (n, e) { var l; n[e >> 5] |= 128 << e % 32; n[(e + 64 >>> 9 << 4) + 14] = e; var o = 1732584193, s = -271733879, h = -1732584194, c = 271733878; for (l = 0; l < n.length; l += 16) { var a = o, v = s, y = h, p = c; o = t(o, s, h, c, n[l + 0], 7, -680876936); c = t(c, o, s, h, n[l + 1], 12, -389564586); h = t(h, c, o, s, n[l + 2], 17, 606105819); s = t(s, h, c, o, n[l + 3], 22, -1044525330); o = t(o, s, h, c, n[l + 4], 7, -176418897); c = t(c, o, s, h, n[l + 5], 12, 1200080426); h = t(h, c, o, s, n[l + 6], 17, -1473231341); s = t(s, h, c, o, n[l + 7], 22, -45705983); o = t(o, s, h, c, n[l + 8], 7, 1770035416); c = t(c, o, s, h, n[l + 9], 12, -1958414417); h = t(h, c, o, s, n[l + 10], 17, -42063); s = t(s, h, c, o, n[l + 11], 22, -1990404162); o = t(o, s, h, c, n[l + 12], 7, 1804603682); c = t(c, o, s, h, n[l + 13], 12, -40341101); h = t(h, c, o, s, n[l + 14], 17, -1502002290); s = t(s, h, c, o, n[l + 15], 22, 1236535329); o = i(o, s, h, c, n[l + 1], 5, -165796510); c = i(c, o, s, h, n[l + 6], 9, -1069501632); h = i(h, c, o, s, n[l + 11], 14, 643717713); s = i(s, h, c, o, n[l + 0], 20, -373897302); o = i(o, s, h, c, n[l + 5], 5, -701558691); c = i(c, o, s, h, n[l + 10], 9, 38016083); h = i(h, c, o, s, n[l + 15], 14, -660478335); s = i(s, h, c, o, n[l + 4], 20, -405537848); o = i(o, s, h, c, n[l + 9], 5, 568446438); c = i(c, o, s, h, n[l + 14], 9, -1019803690); h = i(h, c, o, s, n[l + 3], 14, -187363961); s = i(s, h, c, o, n[l + 8], 20, 1163531501); o = i(o, s, h, c, n[l + 13], 5, -1444681467); c = i(c, o, s, h, n[l + 2], 9, -51403784); h = i(h, c, o, s, n[l + 7], 14, 1735328473); s = i(s, h, c, o, n[l + 12], 20, -1926607734); o = r(o, s, h, c, n[l + 5], 4, -378558); c = r(c, o, s, h, n[l + 8], 11, -2022574463); h = r(h, c, o, s, n[l + 11], 16, 1839030562); s = r(s, h, c, o, n[l + 14], 23, -35309556); o = r(o, s, h, c, n[l + 1], 4, -1530992060); c = r(c, o, s, h, n[l + 4], 11, 1272893353); h = r(h, c, o, s, n[l + 7], 16, -155497632); s = r(s, h, c, o, n[l + 10], 23, -1094730640); o = r(o, s, h, c, n[l + 13], 4, 681279174); c = r(c, o, s, h, n[l + 0], 11, -358537222); h = r(h, c, o, s, n[l + 3], 16, -722521979); s = r(s, h, c, o, n[l + 6], 23, 76029189); o = r(o, s, h, c, n[l + 9], 4, -640364487); c = r(c, o, s, h, n[l + 12], 11, -421815835); h = r(h, c, o, s, n[l + 15], 16, 530742520); s = r(s, h, c, o, n[l + 2], 23, -995338651); o = u(o, s, h, c, n[l + 0], 6, -198630844); c = u(c, o, s, h, n[l + 7], 10, 1126891415); h = u(h, c, o, s, n[l + 14], 15, -1416354905); s = u(s, h, c, o, n[l + 5], 21, -57434055); o = u(o, s, h, c, n[l + 12], 6, 1700485571); c = u(c, o, s, h, n[l + 3], 10, -1894986606); h = u(h, c, o, s, n[l + 10], 15, -1051523); s = u(s, h, c, o, n[l + 1], 21, -2054922799); o = u(o, s, h, c, n[l + 8], 6, 1873313359); c = u(c, o, s, h, n[l + 15], 10, -30611744); h = u(h, c, o, s, n[l + 6], 15, -1560198380); s = u(s, h, c, o, n[l + 13], 21, 1309151649); o = u(o, s, h, c, n[l + 4], 6, -145523070); c = u(c, o, s, h, n[l + 11], 10, -1120210379); h = u(h, c, o, s, n[l + 2], 15, 718787259); s = u(s, h, c, o, n[l + 9], 21, -343485551); o = f(o, a); s = f(s, v); h = f(h, y); c = f(c, p) } return Array(o, s, h, c) }; return l(a(c(n), n.length * e)) } }, UrlModule: { getUrl: function () { var f = function (n, t, i) { var h = n.split("?")[1], r, s, e; if (h == null || h == "") return n.split("?")[0]; var u = h.split("&"), o = "", c = h; for (r = 0; r < u.length; r++)for (s = 0; s < t.length; s++)if (u[r].split("=")[0].toLowerCase() == t[s]) if (i) u[r].split("=")[1].indexOf("%3F") == -1 ? o = o + u[r] + "&" : (e = u[r].split("=")[1], e = e.replace(/%3A/g, ":").replace(/%2F/g, "/").replace(/%3F/g, "?").replace(/%3D/g, "=").replace(/%26/g, "&"), e = f(e, t, i), e = e.replace(/:/g, "%3A").replace(/\//g, "%2F").replace(/\?/g, "%3F").replace(/=/g, "%3D").replace(/&/g, "%26"), o = o + t[s] + "=" + e + "&"); else { var l = new RegExp(u[r] + "&", "gi"), a = new RegExp("&" + u[r], "gi"), v = new RegExp(u[r], "gi"); c = c.replace(l, "").replace(a, "").replace(v, "") } return i ? o == "" ? n.split("?")[0] : n.split("?")[0] + "?" + o.substr(0, o.length - 1) : c == "" ? n.split("?")[0] : n.split("?")[0] + "?" + c }, i = location.href, n = i.toLowerCase(), e, r, u, o; return n.indexOf("openid=") !== -1 || n.indexOf("&token=") !== -1 || n.indexOf("?token=") !== -1 || n.indexOf("&openid=") !== -1 || n.indexOf("?accesstoken=") !== -1 || n.indexOf("&accesstoken=") !== -1 || n.indexOf("?callback=") !== -1 || n.indexOf("&callback=") !== -1 || n.indexOf("?refresh_token=") !== -1 || n.indexOf("&refresh_token=") !== -1 || n.indexOf("?access_token=") !== -1 || n.indexOf("&access_token=") !== -1 ? f(i, "openid,token,accesstoken,callback,access_token,refresh_token".split(","), !1) : (e = t.scripts[t.scripts.length - 1].src, e.indexOf("?") == -1) ? i : (r = e.split("?")[1].split("&")[0].split("|"), u = r[0].split("=")[1], u == null || u == "noparam" || u == "") ? i.split("?")[0] : (o = r[0].split("=")[0] == "param", r[0] = u, f(i, r, o)) } }, HttpModule: { request: function (n, t, i, r, u, f) { var o = function () { var t, n; if (window.ActiveXObject) for (t = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"], n = 0; n < t.length; n++)try { return new ActiveXObject(t[n]) } catch (i) { } else try { return new XMLHttpRequest } catch (r) { } }, e = o(); try { e.open(n, t, i); (n === "POST" || n === "post") && e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"); e.onreadystatechange = function () { e.readyState === 4 && (e.status === 200 || e.status === 304 ? u(e.responseText) : e.status === 404 && f()) }; e.send(r) } catch (s) { } } }, TextModule: { trim: function (n) { return n.toString().replace(/(^\s*)|(\s*$)/g, "") }, removeDuplicate2: function (n) { return n.replace(/(.)(?=.*\1)/g, "") }, getText: function (n, t) { for (var i = t, u = {}, u = document.querySelectorAll(n), r = 0; r < u.length; r++)i += u[r].innerHTML.replace(/[\r\n]/g, "").replace(/<!--.*?-->/g, "").replace(/<script.*?>.*?<\/script>/ig, "").replace(/<select.*?>.*?<\/select>/ig, "").replace(/<\/?[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "").replace(/&nbsp;/g, "").replace(/&quot;/g, '"').replace(/&/g, "").replace(/\s/g, "").replace("<", "<="); return new RegExp("[A-Za-z]").test(i) && (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + i), new RegExp("[0-9]").test(i) && (i = "0123456789" + i), i = this.removeDuplicate2(i), i.split("").sort(function (n, t) { return n.charCodeAt(0) - t.charCodeAt(0) }).join("") } }, FontfaceModule: { remove: function (n) { var f = t.getElementsByTagName("head")[0], r, i, u; try { for (r = t.getElementsByTagName("style"), i = 0; i < r.length; i++)u = r[i], $youziku.TextModule.trim(u.innerHTML) === $youziku.TextModule.trim(n) && f.removeChild(u) } catch (e) { } }, add: function (n) { var r = t.getElementsByTagName("head")[0], i = t.createElement("style"); i.setAttribute("type", "text/css"); r.appendChild(i); i.styleSheet ? i.styleSheet.cssText = n : t.getBoxObjectFor ? i.innerHTML = n : i.appendChild(t.createTextNode(n)) } } }; i.prototype.ApiModule.prototype = i.fn; r = "https:" === document.location.protocol ? "https:" : "http:"; n.$youziku = i(r); n.$youziku.run() })(window, document);