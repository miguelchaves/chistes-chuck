window.onload = function() {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'http://api.icndb.com/jokes/random/', true);
  xmlhttp.onload = function() {
      var textoChiste = JSON.parse(this.response).value.joke;
      console.log('chiste recibido: ' + textoChiste);
      var joke = document.getElementById('joke');
      joke.innerHTML = textoChiste;
  }
  xmlhttp.send();
}
