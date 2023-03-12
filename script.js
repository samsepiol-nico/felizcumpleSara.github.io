var lista = document.getElementById('lista-canciones');
var audio = document.getElementById('cancion');

lista.addEventListener('change', function(event) {
  var option = event.target.value;
  if (option) {
    audio.src = option;
    audio.play();
  }
});
