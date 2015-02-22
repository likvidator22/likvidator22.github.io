window.onload = function(){
    var canvas = document.getElementById('canvas');
    var video = document.getElementById('video');
    var button = document.getElementById('button');
    var allow = document.getElementById('allow');
    var bad = document.getElementById('bad');
    var context = canvas.getContext('2d');
    var videoStreamUrl = false;
   
    var captureMe = function(){
      if(!videoStreamUrl) alert('не разрешили')
      
      // переворачиваем канвас зеркально
      // context.translate(canvas.width, 0);
      // context.scale(-1, 1);

      // текущий кадр видео в канвас
      context.drawImage(video, 0, 0, video.width, video.height);

      // получаем base64data url изображения
      var base64dataUrl = canvas.toDataURL('image/png');
      context.setTransform(1, 0, 0, 1, 0, 0);

      var img = new Image();
      img.src = base64dataUrl;
      window.document.body.appendChild(img);
   }

  button.addEventListener('click', captureMe);

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL.createObjectURL = window.URL.createObjectURL || window.URL.webkitCreateObjectURL || window.URL.mozCreateObjectURL || window.URL.msCreateObjectURL;
console.log('request',navigator.getUserMedia);
    // запрашиваем разрешение на доступ к камере
    navigator.getUserMedia({video: true}, function(stream) {
      // удачно
      console.log('все хорошо');
      // скрываем подсказку
      allow.style.display = "none";
      // получаем видео
      videoStreamUrl = window.URL.createObjectURL(stream);
      // src video 
      video.src = videoStreamUrl;
    }, function(){
      // неудачно
      bad.style.display = "inline";
      bad.innerHTML = 'Что-то пошло не так!'

     
      console.log('все плохо');

    });







};
