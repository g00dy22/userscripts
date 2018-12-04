// ==UserScript==
// @name           gorod wrapper
// @version        0.2
// @description    Toggle comments_answers on gorod.dp.ua.
// @namespace      dev/null
// @license        MIT
// @author         g00dy22
// @grant          none
// @include        /^https?:\/\/gorod\.dp\.ua\/.*$/
// ==/UserScript==

(function() {
    "use strict";

    function page_news() {
        for (let item of document.getElementById("comments").getElementsByClassName("comments_answers")) { item.removeAttribute("style") };
    }

    function main() {
        document.body.querySelectorAll("a").forEach(function(itm) { if ((!itm.hasAttribute("class")) && (itm.hasAttribute("style"))) itm.remove()})
        if(document.getElementById("comments")) {
            page_news();
        }

    }

    window.setInterval(main, 1000);

    // Keyboard navigation logic
    var elem = document.getElementsByClassName('mainbox2');
    if ((elem) && (elem.length > 0)) {
        var list = elem[0].getElementsByTagName('a');
        if ((list) && (list.length > 1)) {
            var href = window.location.href.split("/")
            var forwurl = href[0] + "//" + href[2] + list[0].getAttribute("href");
            var backurl = href[0] + "//" + href[2] + list[2].getAttribute("href");

            function checkKey(e) {
                e = e || window.event;
                if(e.keyCode == 39)
                {
                    window.location.href = backurl;
                }
                if(e.keyCode == 37)
                {
                    window.location.href = forwurl;
                }
            }

            document.onkeydown = checkKey;
        }
    }
})();
