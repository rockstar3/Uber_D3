define("promotron", ["jquery/nyt", "underscore/nyt", "foundation/views/page-manager"], function($, _, PageManager) {
    var abStatus = "";
    $(document).ready(function() {
        if (window.NYTABTEST && "0" === window.NYTABTEST.engine.isUserVariant("promotron")) {
            abStatus = "intest-hidden";
            var n = window.NYTABTEST.engine.findTest("promotron").testId,
                o = (window.NYTABTEST.engine.findTest("promotron").testName, "");
            if (location.hash.match("#")) {
                var o = location.hash.split("?")[0];
                location.hash.replace(o, "")
            }
            var t = location.href.split("http://www.nytimes.com")[1],
                e = "?",
                r = {};
            if (!location.href.split("http://www.nytimes.com")[1].match("abt=")) {
                location.href.split("http://www.nytimes.com")[1].match("\\?") && (e = "&");
                var a = t.replace(o, ""),
                    a = a.concat(e + "abt=" + n, "&abg=" + NYTABTEST.engine.isUserVariant("promotron") + o);
                history.replaceState(r, "", a)
            }
        }
        if (window.NYTABTEST && "1" === window.NYTABTEST.engine.isUserVariant("promotron")) {
            abStatus = "intest-visible";
            var n = window.NYTABTEST.engine.findTest("promotron").testId,
                o = (window.NYTABTEST.engine.findTest("promotron").testName, "");
            if (location.hash.match("#")) {
                var o = location.hash.split("?")[0];
                location.hash.replace(o, "")
            }
            var t = location.href.split("http://www.nytimes.com")[1],
                e = "?",
                r = {};
            if (!location.href.split("http://www.nytimes.com")[1].match("abt=")) {
                location.href.split("http://www.nytimes.com")[1].match("\\?") && (e = "&");
                var a = t.replace(o, ""),
                    a = a.concat(e + "abt=" + n, "&abg=" + NYTABTEST.engine.isUserVariant("promotron") + o);
                history.replaceState(r, "", a)
            }
        }
        var i = _.once(function() {
            try {
                var n = $('meta[name="CG"]').attr("content"),
                    o = "fail";
                if ($(".promotron")) var o = "success";
                NYTD.pageEventTracker.updateData({
                    campaign: n,
                    campaignGroup: abStatus,
                    campaignStatus: o
                }), NYTD.pageEventTracker.shortCircuit()
            } catch (t) {}
        });
        setTimeout(i, 5e3);
        var s = _.once(function() {
            var n = $(".promotron a"),
                o = $('meta[name="CG"]').attr("content");
            _.each(n, function(n) {
                if (void 0 !== n.href) {
                    var t = {
                        region: "footer",
                        contentId: n.href,
                        contentCollection: o,
                        module: "promotron",
                        state: "visible"
                    };
                    window.NYTABTEST && "0" === window.NYTABTEST.engine.isUserVariant("promotron") && (t.state = "hidden"), TAGX.EventProxy.trigger("promotron-impression", t, "impression")
                }
            }), NYTD.pageEventTracker.shortCircuit()
        });
        window.NYTABTEST && "0" === window.NYTABTEST.engine.isUserVariant("promotron") && setTimeout(s, 5e3), window.NYTABTEST && "1" === window.NYTABTEST.engine.isUserVariant("promotron") && PageManager.listenTo(PageManager, "nyt:page-scroll", function() {
            PageManager.isComponentVisible($(".promotron")) && s()
        })
    });
    var Promotron = {};
    return Promotron.templates = {
        whatsnext: function(obj) {
            var __p = [];
            with(obj || {}) {
                __p.push(""), __p.push("default" == options.renderStyle || "nuke" == options.renderStyle ? '\n	<section class="section-promotron promotron" style="opacity: 1;" >\n' : "\n	<div >\n"), __p.push('\n  <header>\n    <h2 class="section-heading" style="color:#000;" ></h2>\n  </header>\n    ');
                var promoBox = 1;
                __p.push("\n  	"), _.each(data, function(n) {
                    __p.push("		\n  	"), 1 >= promoBox && __p.push("\n  		<ul class='menu layout-horizontal theme-story'>\n  	"), __p.push("\n	"), promoBox++, __p.push("\n	"), __p.push(promoBox >= 4 ? "\n		<li class='last-item'>\n		" : "\n		<li>\n	"), __p.push("\n		<a href='", Promotron.formatLink(n.url), "' class='story-link'>\n			<article class='story theme-summary'>\n				<div class='wide-thumb'>\n					<img src='", n.promo_image.whatsnext.url, '\' width:210px height:140px>\n				</div>\n				<h3 class="kicker">', n.kicker, "</h3>\n				<h2 class='story-heading'>", n.headline, "</h2>\n				"), "defaultsummary" == options.renderStyle && __p.push("\n				<p class='summary'>", n.summary, "</p>\n				"), __p.push("\n			</article>\n		</a>\n		</li> \n	"), promoBox >= 4 && (__p.push("\n		</ul>\n		"), promoBox = 1), __p.push("\n  	")
                }), __p.push("\n"), __p.push("default" == options.renderStyle || "nuke" == options.renderStyle ? "\n	</section>\n" : "\n	</div >\n"), __p.push("\n")
            }
            return __p.join("")
        },
        spottheball: function(obj) {
            var __p = [];
            with(obj || {}) {
                __p.push("\n	<div class='g-refers'>\n		<div class='g-refer-text g-clearfix'>\n			<h4></h4>\n			");
                var promoBox = 1;
                __p.push("\n			"), _.each(data, function(n) {
                    __p.push("		\n			"), 1 >= promoBox && __p.push("\n			<ul class='g-refers-list'>\n			"), __p.push("\n			"), promoBox++, __p.push("\n				<li class='g-refer'>\n					<a href='", Promotron.formatLink(n.url), "' >\n						<img src='", n.promo_image.spottheball.url, "'>\n						<h5>\n						"), "interactive" == n.type_of_material && n.multimedia_label ? __p.push("\n							", n.multimedia_label, "\n						") : "sports.worldcup" == n.section_slug ? __p.push("\n							", "Brazil 2014", "\n						") : __p.push("\n							", n.section, "\n						"), __p.push("\n						</h5>\n						<p>", n.headline, "</p>\n						<p class='summary'>", n.summary, "</p>\n					</a>\n				</li> \n			"), promoBox >= 4 && (__p.push("\n			</ul>\n			"), promoBox = 1), __p.push("\n			")
                }), __p.push("\n			</ul>\n		</div>\n	</div>\n\n\n\n\n")
            }
            return __p.join("")
        },
        matchpage: function(obj) {
            var __p = [];
            with(obj || {}) __p.push("\n"), _.each(data, function(n) {
                console.log(n), __p.push("	\n  	<div class='wc-mm-promo summary'>	\n		<a href='", Promotron.formatLink(n.url), "'>		\n			<img src='", n.promo_image.matchpage.url, "' class='wc-image-link'>\n				\n		</a>\n		<h2>\n			<a href='", Promotron.formatLink(n.url), "'>\n				", n.headline, "\n			</a>\n		</h2>\n		<p>", n.summary, "</p>\n		<div class='nytint-clearfix'></div>\n	</div>\n\n")
            }), __p.push("\n<style>\n.viewport-medium .wc-mm-promo,\n.viewport-medium #wc-mm-promotron{\n	display:block	\n}\n</style>\n");
            return __p.join("")
        },
        bestofpage: function(obj) {
            var __p = [];
            with(obj || {}) __p.push('\n<div class="graphics">\n	'), _.each(data, function(n) {
                __p.push('\n		<div class="graphic">\n		    \n		    <a href="', n.url, '">\n		    	<img class="graphic-frame" src="', Promotron.bestOfSrc(n), '"/>\n		    </a>\n		    <a class="graphic-hed graphic-hed-top" href="', n.url, '">', n.headline, '</a>\n			<div class="graphic-text">\n		   		<a class="graphic-hed graphic-hed-right" href="', n.url, '">\n		   			', n.headline, '</a>\n		    	<div class="graphic-readin">', n.summary, "</div>\n		    </div>  \n		</div>\n	")
            }), __p.push("\n</div>");
            return __p.join("")
        }
    }, Promotron.formatLink = function(n) {
        return n + "?action=click&region=Footer&module=Promotron&pgtype=article"
    }, Promotron.bestOfSrc = function(n) {
        return n.promo_override_image ? n.promo_override_image : n.promo_image.bestof ? n.promo_image.bestof.url : n.promo_image.matchpage ? n.promo_image.matchpage.url : ""
    }, Promotron.renderPromo = function(n) {
        try {
            n.endpoint || (n.endpoint = "promos"), n.targetEl || (n.targetEl = "#whats-next"), n.promotronName || (n.promotronName = "Our"), n.clickTrack || (n.clickTrack = ".promotron a"), n.template || (n.template = "whatsnext");
            var o = /facebook.com|twitter.com|t.co|fb.me/,
                t = document.referrer;
            t.match(o) && (n.limit = 9), n.limit || (n.limit = 3), $.ajax({
                url: "http://int-promos.nytimes.com/" + n.promotron + "/" + n.endpoint + "?limit=" + n.limit + "&template=" + n.template,
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0,
                page_refer: document.referrer,
                success: function(o) {
                    n.data = o;
                    var t = !1,
                        e = !1;
                    if (_.every(o, function(n) {
                            e = 1 == n.best_of ? !0 : !1
                        }), _.each(o, function(n) {
                            void 0 !== n.promo_image && (t = !0)
                        }), t = !0) {
                        var r = Promotron.templates[n.template]({
                            data: o,
                            options: n
                        });
                        "nuke" == n.renderStyle ? $(n.targetEl).html(r) : "insert" == n.renderStyle ? setTimeout(function() {
                            $div = $($(n.targetEl + " .last-item").last()[0]), $div.after(r), 1e3
                        }) : $(n.targetEl).html(r)
                    }
                    "bestofpage" !== n.template && $(n.clickTrack).click(function(o) {
                        $.ajax({
                            type: "POST",
                            url: "http://int-promos.nytimes.com/" + n.promotron + "/click",
                            data: {
                                url: $(o.currentTarget).attr("href")
                            },
                            success: function() {},
                            xhrFields: {
                                withCredentials: !0
                            },
                            crossDomain: !0
                        })
                    }), 1 == e && "insert" != n.renderStyle ? ($(".promotron header h2").append("Best of " + n.promotronName), $(".promotrons .g-refer-text h4").append("Best of " + n.promotronName)) : 0 == e && "insert" != n.renderStyle && ($(".promotron header h2").append(n.promotronName + " Editors' Picks"), $(".promotrons .g-refer-text h4").append(n.promotronName + " Editors' Picks")), 1 == $.isEmptyObject(o) && "insert" != n.renderStyle && ($(".promotron").css("display", "none"), $("#wc-mm-promotron").css("display", "none")), window.NYTABTEST && "0" === window.NYTABTEST.engine.isUserVariant("promotron") && $(".promotron").css("display", "none")
                }
            })
        } catch (e) {}
    }, Promotron
});