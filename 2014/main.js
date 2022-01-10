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

fetch('http://api.icndb.com/jokes/random/10', { method: 'GET'})
  .then((rawResponse) => rawResponse.json())
  .then((response) => {
    const jokes = response.value.map(({ joke }) => joke);
    const container = document.querySelector("#container");
    const jumbotrons = jokes.map(tmplJumbotron).join('');
    container.innerHTML = jumbotrons;
  });
