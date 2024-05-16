//= link_tree ../images
//= link_directory ../stylesheets .css
$(function () {
    var headH = $("header").outerHeight(); //ヘッダーの高さを取得
    var animeSpeed = 500; //アニメーションスピード
    $("a[href^='#']").on({
        "click": function () {
            var href = $(this).attr("href");
            var target = $(href == "#" || href === "" ? "html" : href);
            var position;
            position = target.offset().top - headH; //ターゲットまでの距離からヘッダーの高さを引く
            $("body,html").stop().animate({
                scrollTop: position
            }, animeSpeed);
            return false;
        }
    });
});