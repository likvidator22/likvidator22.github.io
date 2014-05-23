var init = function () {
    var audio = new Audio();
    var stream = 'http://radio.at.aknet.kg:8008/radio_record.aac';
    console.log('loadstart');
    audio.src = stream;

    $('#playpause').click(function() {
        if (audio.paused) {
            this.textContent = 'Остановить';
            $("#favicon").attr("href","img/fav_play.png");
            audio.play();
            return;
        }

        this.textContent = 'Воспроизвести';
        audio.pause();
        $("#favicon").attr("href","favicon.png");
    });

$('#volume').change(function(){
    audio.volume = this.value / 100;
});


}

var oldartist = '1';
var url = 'http://www.radiorecord.ru/xml/record_online_v3.txt'; // урл json
      function update_track_inline() {  // функция обновления текущего трека
        $.getJSON(url, function(data) {
          var key2 = data.ARTIST + '-' + data.NAME; // собираем
          $('#sg').attr('href', 'https://www.google.ru/search?q='  + key2); // поиск гугл
          $('#sn').attr('href', 'http://namba.kg/#!/search/mp3/'  + key2); // поиск намба
          $('title').text(key2); // меняем тайтл
          $.each(data, function(key, val) { // берем каждое поле из JSON-ответа
            switch (key) {  // смотрим ключ
              case 'ARTIST': { $('#nowtrack').children('#artist').html(val); break; } // артисту заполняем поле артиста
              case 'NAME': { $('#nowtrack').children('#title').html(val); break; }  // треку заполняем поле названия трека
              case 'image': { // а если картинка
                if(oldartist!=val) {  // если новая картинка отличается от прошлой
                  if(val=='false' || val=='null' || val.length<10) {
                    $('#imgcontent').animate({opacity: 0},500, function() { // плавно меняем прозрачность в 0
                      $(this).css("background-image", "none").animate({opacity: 1}, 1000);  // меняем фон на новую картинку и плавно ее показываем
                    });
                  }
                  else {
                    $('#imgcontent').animate({opacity: 0},500, function() { // плавно меняем прозрачность в 0
                      $(this).css("background-image", "url("+val+")").animate({opacity: 1}, 1000);  // меняем фон на новую картинку и плавно ее показываем
                    });
                  }
                  oldartist=val;  // запоминаем вставленную картинку, чтобы она не мерцала каждый раз при проверке трека
                console.log(val);
                }
                break;
              }
            }
          });
        });
console.log('update_track_inline');
      }
setInterval(update_track_inline, 5000); // обновляем




window.onload = init;