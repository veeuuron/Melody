$(document).ready(function () {
  var currentFloor = 2; // Переменная с текущим этажом
  var floorPath = $(".home-image path"); // этаж в SVG
  var counterUp = $(".counter-up");   // кнопка этаж +
  var counterDown = $(".counter-down"); // кнопка этаж-

        // При наведении мышки на этаж
  floorPath.on("mouseover", function () { 
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor"); // значение этажа
    $(".counter").text(currentFloor); 
  });

    // Кнопка этаж + 
  counterUp.on("click", function () { 
    if(currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false}); // 02...09 вместо 2...9
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечивание этажа
    }
  });
    // Кнопка этаж -
  counterDown.on("click", function () {
    if(currentFloor > 2){
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false}); // 02...09 вместо 2...9
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечивание этажа
    }
  });
});