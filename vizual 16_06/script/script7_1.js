$(document).ready(function() {
  var start_year = 2018;
  var report_year = new Date().getFullYear();
  for (i = start_year; i < report_year + 1; i++) {
    var option = document.createElement('option');
    option.innerHTML = i;
    calendar.appendChild(option);
  }

});

function change_date() {
  var report_year = document.getElementById("calendar").value;
  for (i = 0; i < 18; i++) {
    document.getElementsByClassName("year")[i].innerHTML = report_year;
  };
};

function change_filter() {
  var curr_filter = document.getElementById("filter").value;
  document.getElementById("selected_filter").innerHTML = curr_filter;
};


$(function() {
  $('button').click(function() {
    $(".mytable").css({
      "font-family": "RussianRail G Pro"
    });
    $(".mytable th").css({
      "border": "1px solid"
    });
    $(".mytable td").css({
      "border": "1px solid"
    });
    $(".mytable thead th").css({
      "text-align": "center",
      "vertical-align": "middle"
    });
    $(".mytable thead tr:nth-child(2)").css({
      "border-top": "double"
    });
    $(".mytable thead tr:nth-child(1)").css({
      "border": "0px solid"
    });
    $("thead tr:nth-child(1) th").css({
      "border": "0px solid"
    });
    $(".background_grey").css({
      "background-color": "#E0E0E0"
    });

    var a = document.createElement('a');
    var data_type = 'data:application/vnd.ms-excel';
    a.href = 'data:application/vnd.ms-excel,' +
      encodeURIComponent($('#tableWrap').html());
    a.download = "Динамика марж. доходности " + document.getElementById("calendar").value + ".xls";
    a.click();
  });
});