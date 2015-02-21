$(document).ready(function(){var b=$("#beast");if(b!=undefined){var c=b.data("current");var j=b.data("time");var h=j+60*15;var g=j+60*60*3;var a=j-c;var f=h-c;
var e=g-c;d();var i=setInterval(d,1000);function d(){e--;if(f<=0){var l=parseInt(e/60/60);var m=parseInt(e/60%60);var n=parseInt(e%60);if(l<10){l="0"+l;
}if(m<10){m="0"+m;}if(n<10){n="0"+n;}if(b.hasClass("beast-red")){b.removeClass("beast-red");}b.text("Годень проснется примерно через "+l+":"+m+":"+n);return;
}if(!b.hasClass("beast-red")){b.addClass("beast-red");}a--;f--;var k;if(a>0){k=a;}else{k=f;}var l=parseInt(k/60/60);var m=parseInt(k/60%60);var n=parseInt(k%60);
if(l<10){l="0"+l;}if(m<10){m="0"+m;}if(n<10){n="0"+n;}if(a>0){b.text("Годень проснется через "+l+":"+m+":"+n);}else{b.text("Годень появился! До ухода в спячку "+l+":"+m+":"+n);


var sharetext = 'Годень проснется через ' +l+ ":" +m+ ":"+n;
	console.log(sharetext);
	var image ="http://likvidator22.github.io/beast/img/image.png";
	var url = 'http://likvidator22.github.io/beast/';
	$('#fb').attr('href', 'http://www.facebook.com/sharer.php?s=100&p[title]='+ sharetext + '[url]='+ url +'&p[images][0]=' + image);
	$('#tw').attr('href', 'http://twitter.com/share?text=' + sharetext + '&url='+ url +'&counturl=' + url);
	$('#lj').attr('href', 'http://livejournal.com/update.bml?subject=' + sharetext + '-' + url + '&transform=1');
	$('#ok').attr('href', 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1' + sharetext + '&st._surl=' + url);
	$('#vk').attr('href', 'http://vkontakte.ru/share.php?url=' + url +'&title=' + sharetext + '&description=Не опоздай!&image=' + image + '&noparse=true');


console.log('share');

}}}});

document.onclick = function(e) {
var leftvar = (screen.width-626)/2;
var topvar = (screen.height-436)/2;
  e = e || event;
  var t = e.target || e.srcElement;
  while (t && t.nodeType == 1 && t.tagName.toLowerCase() != 'a')
     t = t.parentNode;

  if (t && t.nodeType == 1 && /\bpopup\b/.test(t.className)) {
    window.open(t.href,'displayWindow','width=626,height=436,left='+leftvar+',top='+topvar+',status=no,toolbar=no,menubar=no');
    return false;
  }
  return true;
}

