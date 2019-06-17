$(document).ready(function() {
  $(".table-detail").css({
    "display": "none"
  });
  $(".table-aggregate").css({
    "display": "none"
  });
});

function start_work() {

  if ($('#calendar').data('datepicker')) {
    $('#calendar').data('datepicker').remove();
    $('#calendar').val('');
  }

  var filter = document.getElementById("filter").value;
  if (filter == "Детальный") {
    $(".table-aggregate").css({
      "display": "none"
    });
    $(".table-detail").css({
      "display": "block"
    });
    detail();
  };
  if (filter == "Агрегированный") {
    $(".table-detail").css({
      "display": "none"
    });
    $(".table-aggregate").css({
      "display": "block"
    });
    aggregate();
  };
};

function detail() {
  $.fn.datepicker.dates['month'] = {
    days: ["Sunday", "Moonday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Moon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
    today: "Today",
    clear: "Clear"
  };
  var today = new Date();
  var startDate = new Date(2017, 12, 1);
  var endDate = new Date(today.getFullYear(), String(today.getMonth()).padStart(2, '0'), String(today.getDate()).padStart(2, '0'));

  $('#calendar').datepicker({
    autoclose: true,
    language: "month",
    startDate: startDate,
    endDate: endDate,
    format: "dd.mm.yyyy",
    firstDay: 1
  }).on("show", function(event) {
    // $(".prev").css({
    //   "visibility": "hidden"
    // });
    // $(".next").css({
    //   "visibility": "hidden"
    // });
    // $(".disabled").css({
    //   "display": "none"
    // });
    $(".datepicker-years .table-condensed tbody>tr>td").css({
      "width": "145px"
    });
    $("th.datepicker-switch").css({
      "visibility": "visible"
    });
    $(".month").css({
      "display": "-webkit-flex",
      "flex-wrap": "wrap",
      "width": "30%",
      "justify-content": "center",
      "align-items": "center"
    });
    // $(".new").css({
    //   "color": "black"
    // });
    $(".year").css({
      "display": "-webkit-flex",
      "flex-wrap": "wrap",
      "width": "30%",
      "justify-content": "center",
      "align-items": "center"
    });
    $(".year + .disabled").css({
      "display": "none"
    });
    $(".month + .disabled").css({
      "display": "none"
    });
    // $(".old").css({
    //   "visibility": "hidden"
    // });
    $(".datepicker-switch :nth-child(3)").css({
      "visibility": "hidden"
    });

    var no_years = document.getElementsByClassName("datepicker-switch");
    no_years[2].style.visibility = "hidden";

    var appBanners = document.getElementsByClassName("year"),
      i;

    for (var i = 0; i < appBanners.length; i++) {
      console.log(appBanners[i]);

    }
  });

  // var str = document.getElementsByClassName('datepicker-switch')

};

function aggregate() {
  $.fn.datepicker.dates['month'] = {
    days: ["Sunday", "Moonday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Moon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
    monthsShort: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
    today: "Today",
    clear: "Clear",
    format: "mm/dd/yyyy",
    titleFormat: "MM yyyy",
    weekStart: 0
  };

  var today = new Date();
  var startDate = new Date(2017, 12, 31);
  var endDate = new Date(2037, 12, 31);
  // var endDate = new Date(today.getFullYear(), String(today.getMonth()).padStart(2, '0'), String(today.getDate()).padStart(2, '0'));

  $('#calendar').datepicker({
    format: "yyyy год, MM",
    minViewMode: 1,
    autoclose: true,
    language: "month",
    forceParse: false,
    startDate: startDate,
    endDate: endDate

  }).on("show", function(event) {

    // $(".prev").css({
    //   "visibility": "hidden"
    // });
    // $(".next").css({
    //   "visibility": "hidden"
    // });
    $(".datepicker-years .table-condensed tbody>tr>td").css({
      "width": "145px"
    });
    $("th.datepicker-switch").css({
      "visibility": "visible"
    });
    $(".month").css({
      "display": "-webkit-flex",
      "flex-wrap": "wrap",
      "width": "30%",
      "justify-content": "center",
      "align-items": "center"
    });
    $(".year").css({
      "display": "-webkit-flex",
      "flex-wrap": "wrap",
      "width": "30%",
      "justify-content": "center",
      "align-items": "center"
    });
    $(".disabled").css({
      "disabled": "true",
      "color": "grey"
    });
    var no_years = document.getElementsByClassName("datepicker-switch");
    no_years[2].style.visibility = "hidden";
  });
};

function change_date() {
  var report_date = document.getElementById("calendar").value
  document.getElementById("date_det").innerHTML = "за " + report_date;
  document.getElementById("date_agr").innerHTML = "за " + report_date;
};