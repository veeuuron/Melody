$(document).ready(function () {
  var currentFloor = 2; // Переменная с текущим этажом
  var floorPath = $(".home-image path"); // этаж в SVG
  var counterUp = $(".counter-up");   // кнопка этаж +
  var counterDown = $(".counter-down"); // кнопка этаж-
  var modal = $(".modal"); // Переменная для окна с этажамт
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var currentFlat=1;
  var flatsPath=$(".flats path"); // квартиры в SVG
  var flatsPathItem=$(".flat-item a"); // х-ки квартир

        // При наведении мышки на этаж
  floorPath.on("mouseover", function () { 
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor"); // значение этажа
    $(".counter").text(currentFloor); 
  });

    // Всплывающее окно
  floorPath.on("click", toggleModal); // При клике на этаж вызывает окно
  modalCloseButton.on("click", toggleModal); // при клике на кнопку закрывает окно
  viewFlatsButton.on("click", toggleModal);

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

    // Наводка на квартиру на макете (функиця)
    flatsPath.on("mouseover", function () {
      currentFlat=$(this).attr("data-flats"); //записываем текущее значение в переменную с квартирами
      flatsPath.removeClass("current-flat"); // удаляем клас(подсветку)
      flatsPathItem.removeClass("current-flat-item"); // удаляем класс характеристик квартиры
      $(`[data-flats=${currentFlat}]`).toggleClass("current-flat"); // добавляем класс квартиры
      $(`[data-item=${currentFlat}]`).toggleClass("current-flat-item"); // добавляем класс характеристик квартиры
    });
    
    // Наводка на квартиру в списке
    flatsPathItem.on("mouseover", function () {
      currentFlat=$(this).attr("data-item");
      flatsPath.removeClass("current-flat");
      flatsPathItem.removeClass("current-flat-item");
      $(`[data-flats=${currentFlat}]`).toggleClass("current-flat");
      $(`[data-item=${currentFlat}]`).toggleClass("current-flat-item");
    });

  function toggleModal(){ // функция открыть-закрыть окно
    modal.toggleClass("is-open");
  }
});