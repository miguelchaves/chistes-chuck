window.onload = function() {
  const tmplJumbotron = (joke) => '<div class="jumbotron jumbotron-fluid mb-2">' +
    '<div class="container p">' +
    `<h1 class="h3" id="joke">${joke}</h1>` +
    '<p class="lead text-right pr-5">Chuck Norris</p>' +
    '</div>' +
    '</div>';

  return fetch('http://api.icndb.com/jokes/random/10', {
    method: 'GET'
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      const container = document.querySelector("#container");
      container.innerHTML = ''; // Limpiamos el contenido
      response.value.forEach(element => {
        container.innerHTML += tmplJumbotron(element.joke);
      });
      console.log(response);
    });
}
