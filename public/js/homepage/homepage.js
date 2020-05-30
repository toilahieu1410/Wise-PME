
var selector = '.text-content a';

$(selector).on('click', function(){
$(selector).removeClass('active');
$(this).addClass('active');
});


flexFont = function () {
var divs = document.getElementsByClassName("main-panel");
for(var i = 0; i < divs.length; i++) {
var relFontsize = divs[i].offsetWidth*0.05;
divs[i].style.fontSize = relFontsize+'px';
}
};

window.onload = function(event) {
flexFont();
};
window.onresize = function(event) {
flexFont();
};

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
$(this).parent(".sub-menu").children("ul").slideToggle("100");
$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});
