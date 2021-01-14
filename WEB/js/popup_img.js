
$(document).ready(function() { // Ждём загрузки страницы
  
  $(".image").click(function(){ // Событие клика на маленькое изображение
      var img = $(this);  // Получаем изображение, на которое кликнули
    var src = img.attr('src'); // Достаем из этого изображения путь до картинки
    $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
             "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
             "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
             "</div>");
    $(".popup").fadeIn(200); // Медленно выводим изображение
    $(".popup_bg").click(function(){  // Событие клика на затемненный фон    
      $(".popup").fadeOut(200); // Медленно убираем всплывающее окн 
      setTimeout(function() { // Выставляем таймер
        $(".popup").remove(); // Удаляем разметку всплывающего окна
      }, 200);
    });
  });
  
});


var color = 0;
   function colorDiv() {
    if (color) {
      document.getElementById("color").style.background = "#c9d2fc";
      color = 0;
    }
    else {
      document.getElementById("color").style.background = "#e7edd5";
      color = 1;
    }
   }


    $(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topNubex').fadeIn();
  } else {
  $('#topNubex').fadeOut();
  }
  });
  $('#topNubex').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
  });