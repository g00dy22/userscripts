// ==UserScript==
// @name         informator wrapper
// @namespace    dev/null
// @version      0.4.4
// @description  try to take over the world!
// @author       g00dy22
// @include      /^https?:\/\/[^\.]*\.?informator\.ua\/.*$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function prepare_query(q) {
        return document.evaluate(q, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    }

    function remove_nodes(q) {
        for (var i = 0; i < q.snapshotLength; i++) {
            q.snapshotItem(i).remove();
        }
    }
    function remove_parent_nodes(q) {
        for (var i = 0; i < q.snapshotLength; i++) {
            q.snapshotItem(i).parentNode.remove();
        }
    }
    function remove_grandparent_nodes(q) {
        for (var i = 0; i < q.snapshotLength; i++) {
            q.snapshotItem(i).parentNode.parentNode.remove();
        }
    }
    function extractVideoIframe(q) {
        for (var i = 0; i < q.snapshotLength; i++) {
          var elem = q.snapshotItem(i);
          for (var j = 0; j < elem.children.length; j++) {
            var c = elem.children.item(j);
            if (c.nodeName == 'IFRAME') {
              var replacementNode = document.createElement("a")
              replacementNode.setAttribute("href", c.src);
              replacementNode.appendChild(document.createTextNode(c.src))
              c.replaceWith(replacementNode);
            }
          }
          elem.setAttribute("id", "content-area");
          elem.setAttribute("class", "post type-post status-publish hentry");
        }
    }
    function extractVideoDiv(q) {
        for (var i = 0; i < q.snapshotLength; i++) {
          var elem = q.snapshotItem(i);
          for (var j = 0; j < elem.children.length; j++) {
            elem.children.item(j).remove();
          }
          var replacementNode = document.createElement("a")
          replacementNode.setAttribute("href", elem.getAttribute("data-href"));
          replacementNode.appendChild(document.createTextNode(elem.getAttribute("data-href")))

          elem.appendChild(replacementNode)
          elem.setAttribute("class", "aligncenter");
        }
    }
    function contains_condition(w) {
        return 'contains(#ENTITY#,"' + w + '")';
    }
    function starts_condition(w) {
        return 'starts-with(#ENTITY#,"' + w + '")';
    }
    function text_entity(w) {
        return w.replace(/#ENTITY#/g, 'text()');
    }

    // Your code here...
    function page_ads() {
        // Remove articles by tags
        var tags = ["tag-reklama","tag-shazam","tag-top","tag-kuda-pojti","tag-kursy",
                    "tag-otklyuchenie-sveta","tag-prazdnik","tag-sravnenie-tsen","tag-futbol",
                    "tag-boks", "mistape_caption", "category-seo", "category-ann"];
        for (var tag of tags) {
            for (let item of document.getElementsByClassName(tag)) { item.remove() };
        }

        // Remove articles by keywords
        var t_ckeywords = ["КаВуН", "КавуН", "советы эксперта", "сегодня праздник", "футбол", ": какой сегодня день",
                           "Сравнение цен", ": ТОП ", "ТОП-10", "Кредит", "рассрочка", "черная пятница",
                           "кинопремьер", "куда пойти", "Информатор FM", "Мамахохотала", "Зеленский",
                           "Как сэкономить", "Конкорд", "итоги недели", "Загид", "SOHO", "Stand Up",
                           "Днепр в лицах", "Тимошенко", "кредит", "бойко", "Что подарить", "Concord"
        ]
        var t_skeywords = ["ТОП"]

        // Remove article by title - h1
        var title_expression = t_ckeywords.map(contains_condition).join(' or ') + ' or ' + t_skeywords.map(starts_condition).join(' or ')
        remove_grandparent_nodes(prepare_query('//*[@id="post-header"]/h1[' + text_entity(title_expression) + ']'));
        // Remove article by title - hr
        remove_nodes(prepare_query('//*[@id="post-left-col"]/hr[' + text_entity(title_expression) + ']'));
        // Remove article by title - from archive
        remove_parent_nodes(prepare_query('//li[@class="infinite-post"]/a[' + title_expression.replace(/#ENTITY#/g, '@title') + ']'));

        // Remove paragraphs by keywords
        var p_keywords = ["Ранее мы","Ранее Информатор","быть в курсе всех","SOHO","Хотите узнавать первым",
                          "Напомним, наши коллеги", "Если вы стали свидетелем", "Если вы хотите знать",
                          "Напомним, мы показывали", "Мы продолжим сообщать вам", "если вы стали свидетелем",
                          "Также писали о том, что", "если вы хотите знать", "107,3", "почитают память преподоб"
        ]

        // Remove paragraphs by start keywords
        var p_skeywords = ["Ранее сообщалось, что", "Напомним, что", "Вы можете посмотреть,", "Авто Информатор рассказывал,",
                           "Мы сообщали о том, что", "Ранее Информатор"
        ]

        var paragraph_expression = p_keywords.map(contains_condition).join(' or ') + ' or ' + p_skeywords.map(starts_condition).join(' or ')
        remove_nodes(prepare_query('//*[@id="content-main"]/p[' + text_entity(paragraph_expression) + ']'));
        remove_nodes(prepare_query('//*[contains(@class, "post-info-right")]/p[' + text_entity(paragraph_expression) + ']'));
        remove_nodes(prepare_query('//*[@id="content-main"]/*/p[' + text_entity(paragraph_expression) + ']'));
        remove_nodes(prepare_query('//*[contains(@class, "post-info-right")]/*/p[' + text_entity(paragraph_expression) + ']'));
        remove_parent_nodes(prepare_query('//*[@id="content-main"]/p/span[' + text_entity(paragraph_expression) + ']'));

        // Replace youtube iframes with clickable links
        extractVideoIframe(prepare_query('//div[@id="video-embed"]'));
        // Replace fb divs with clickable links
        extractVideoIframe(prepare_query('//div[@class="video-container"]'));
        extractVideoDiv(prepare_query('//div[@class="fb-video"]'));
    }

    window.setInterval(page_ads, 1000);
})();
