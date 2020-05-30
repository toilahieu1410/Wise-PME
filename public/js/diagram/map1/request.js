        // ----------------------------
$(document).ready(function() {
    setInterval(function() {
    $.ajax({
        "url": "http://10.10.15.20:1880/lvmsb-diagram",

        "success": function(data2) {
$("#dv1").html(data2.lvmsb1[0].last_powerH);
$("#dv2").html(data2.lvmsb2[0].last_powerH);
$("#dv3").html(data2.lvmsb3[0].last_powerH);

$("#dv4").html(data2.lvmsb1[0].last_CurrentAvg);
$("#dv5").html(data2.lvmsb2[0].last_CurrentAvg);
$("#dv6").html(data2.lvmsb3[0].last_CurrentAvg);

$("#dv7").html(data2.lvmsb1[0].last_VolLL);
$("#dv8").html(data2.lvmsb2[0].last_VolLL);
$("#dv9").html(data2.lvmsb3[0].last_VolLL);

//LVMSB1
$("#dv10").html(data2.lvmsb1[0].last_CurrentA);
$("#dv11").html(data2.lvmsb1[0].last_CurrentB);
$("#dv12").html(data2.lvmsb1[0].last_CurrentC);

$("#dv13").html(data2.lvmsb1[0].last_VolAB);
$("#dv14").html(data2.lvmsb1[0].last_VolBC);
$("#dv15").html(data2.lvmsb1[0].last_VolCA);

$("#dv16").html(data2.lvmsb1[0].last_VolAN);
$("#dv17").html(data2.lvmsb1[0].last_VolBN);
$("#dv18").html(data2.lvmsb1[0].last_VolCN);

$("#dv19").html(data2.lvmsb1[0].last_powerA);
$("#dv20").html(data2.lvmsb1[0].last_powerB);
$("#dv21").html(data2.lvmsb1[0].last_powerC);
$("#dv22").html(data2.lvmsb1[0].last_powerH);

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

        // ----------------------------
var selector = '.text-content a';
        $(selector).on('click', function(){
            $(selector).removeClass('active');
            $(this).addClass('active');
        });

        // ----------------------------
$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});


        // ----------------------------
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