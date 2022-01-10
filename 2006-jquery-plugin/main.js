const tmplJumbotron = (joke) => `
  <div class="jumbotron jumbotron-fluid mb-2">
    <div class="container p">
      <h1 class="h3" id="joke">${joke}</h1>
      <p class="lead text-right mb-0 font-italic">
        Chuck Norris Fact
        <img class="ml-3" src="../assets/chuck-norris.png" width="40"/>
      </p>
    </div>
  </div>`;

$.icndb.getRandomJokes({ 
  number: 10, 
  success: (response) => {
    $("#container").html(''); // Limpiamos el contenido
    response.forEach((element) => {
      $("#container").append(tmplJumbotron(element.joke));
    });
  }});
