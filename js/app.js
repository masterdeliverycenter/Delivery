var score = [true, true, true];

function req(x) {
    score[x] = true;
    if (score[1] == true || score[2] == true || score[3] == true) {
        document.getElementById("feedback").required = true;
    }
}

function unreq(x) {
    score[x] = false;
    if (score[1] == false && score[2] == false && score[3] == false) {
        document.getElementById("feedback").required = false;
    }
}

function showVW() {
    for (var i=0;i<document.getElementsByClassName("salesList").length;i+=1){
        document.getElementsByClassName("salesList")[i].style.display = "none";
    }
    for (var i=0;i<document.getElementsByClassName("vwSales").length;i+=1){
        document.getElementsByClassName("vwSales")[i].style.display = "inherit";
    }
}

function showAudi() {
    for (var i=0;i<document.getElementsByClassName("salesList").length;i+=1){
        document.getElementsByClassName("salesList")[i].style.display = "none";
    }
    for (var i=0;i<document.getElementsByClassName("audiSales").length;i+=1){
        document.getElementsByClassName("audiSales")[i].style.display = "inherit";
    }
}

function showSkoda() {
    for (var i=0;i<document.getElementsByClassName("salesList").length;i+=1){
        document.getElementsByClassName("salesList")[i].style.display = "none";
    }
    for (var i=0;i<document.getElementsByClassName("skodaSales").length;i+=1){
        document.getElementsByClassName("skodaSales")[i].style.display = "inherit";
    }
}

function showSeat() {
    for (var i=0;i<document.getElementsByClassName("salesList").length;i+=1){
        document.getElementsByClassName("salesList")[i].style.display = "none";
    }
    for (var i=0;i<document.getElementsByClassName("seatSales").length;i+=1){
        document.getElementsByClassName("seatSales")[i].style.display = "inherit";
    }
}

$(document).ready(function () {
//  Check Radio-box
    $(".q1 input:radio").attr("checked", false);
    $('.q1 input').click(function () {
        $(".q1 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});

$(document).ready(function () {
//  Check Radio-box
    $(".q2 input:radio").attr("checked", false);
    $('.q2 input').click(function () {
        $(".q2 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});

$(document).ready(function () {
//  Check Radio-box
    $(".q3 input:radio").attr("checked", false);
    $('.q3 input').click(function () {
        $(".q3 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});

$("form").submit(function () {
    $(":submit", this).attr("disabled", "disabled");
});