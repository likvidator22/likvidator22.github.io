var audio = new Audio(); // Audio() тег
console.log('loadstart');
audio.setAttribute("src", "http://radio.at.aknet.kg:8008/radio_record.aac"); // атрибут scr 
audio.setAttribute("type", "audio/mpeg"); // MIME

// обработчик нажатия на бутон
var init = function () {
    var playing = 0; // 0=стоп 1=пауза 2=плей
    var playpause = document.getElementById('playpause'); // магия онклика
    playpause.addEventListener('click', function () {
        if (playing == 2) {
            audio.pause();
            document.getElementById('playpause').innerHTML = "Воспроизвести";
            playing = 1;
        } else if (playing == 1) {
            audio.play();
            document.getElementById('playpause').innerHTML = "Остановить"; // показываем паузу
            playing = 2;
        } else {
            audio.play();
            document.getElementById('playpause').innerHTML = "Остановить"; // 
            playing = 2;
        }
    }, false);

    // обработчик события громкости
    var volume = document.getElementById('volume');
    volume.addEventListener('change', function () {
        audio.volume = parseFloat(this.value / 100); //
    }, false);


}

function UpdateTrack()
    {
        var url = 'http://www.radiorecord.ru/xml/record_online_v3.txt';

        $.getJSON(url, function(json){
            var key = json.ARTIST + ' - ' + json.NAME;

            $('#track').text('Сейчас играет: ' + key);
            $('#sg').attr('href', 'https://www.google.ru/search?q='  + key);
            $('#sn').attr('href', 'http://namba.kg/#!/search/mp3/'  + key);
        });
    }

//ставим зацикленный повтор
setInterval(UpdateTrack, 5000);

// вместо <body onload="init();">
window.onload = init;


