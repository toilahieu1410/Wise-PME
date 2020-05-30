        //-------------------------
$(document).ready(function() {

    setInterval(function() {
    $.ajax({
        "url": "http://10.10.15.20:1880/lvmsb-diagram",

        "success": function(data2) {
$("#dv1").html();
$("#dv2").html();
$("#dv3").html();

$("#dv4").html();
$("#dv5").html();
$("#dv6").html();

$("#dv7").html();
$("#dv8").html();
$("#dv9").html();

//LVMSB1
$("#dv10").html();
$("#dv11").html();
$("#dv12").html();

$("#dv13").html();
$("#dv14").html();
$("#dv15").html();

$("#dv16").html();
$("#dv17").html();
$("#dv18").html();

$("#dv19").html();
$("#dv20").html();
$("#dv21").html();
$("#dv22").html();

//LVMSB2
$("#dv23").html(data2.lvmsb2[0].last_CurrentA);
$("#dv24").html(data2.lvmsb2[0].last_CurrentB);
$("#dv25").html(data2.lvmsb2[0].last_CurrentC);

$("#dv26").html(data2.lvmsb2[0].last_VolAB);
$("#dv27").html(data2.lvmsb2[0].last_VolBC);
$("#dv28").html(data2.lvmsb2[0].last_VolCA);

$("#dv29").html(data2.lvmsb2[0].last_VolAN);
$("#dv30").html(data2.lvmsb2[0].last_VolBN);
$("#dv31").html(data2.lvmsb2[0].last_VolCN);

$("#dv32").html(data2.lvmsb2[0].last_powerA);
$("#dv33").html(data2.lvmsb2[0].last_powerB);
$("#dv34").html(data2.lvmsb2[0].last_powerC);
$("#dv35").html(data2.lvmsb2[0].last_powerH);

//LVMSB3
$("#dv36").html(data2.lvmsb3[0].last_CurrentA);
$("#dv37").html(data2.lvmsb3[0].last_CurrentB);
$("#dv38").html(data2.lvmsb3[0].last_CurrentC);

$("#dv39").html(data2.lvmsb3[0].last_VolAB);
$("#dv40").html(data2.lvmsb3[0].last_VolBC);
$("#dv41").html(data2.lvmsb3[0].last_VolCA);

$("#dv42").html(data2.lvmsb3[0].last_VolAN);
$("#dv43").html(data2.lvmsb3[0].last_VolBN);
$("#dv44").html(data2.lvmsb3[0].last_VolCN);

$("#dv45").html(data2.lvmsb3[0].last_powerA);
$("#dv46").html(data2.lvmsb3[0].last_powerB);
$("#dv47").html(data2.lvmsb3[0].last_powerC);
$("#dv48").html(data2.lvmsb3[0].last_powerH);
        },
        "error": function(error) {
        console.log(error);
        }
    })
    }, 1000);
    })

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


        //-------------------------
    $('.sub-menu ul').hide();
    $(".sub-menu a").click(function () {
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
        $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
    });
