export class ChuckNorrisJoke extends HTMLElement {
  constructor() {
    // Siempre llamar primero a super en el constructor
    super();

    // La funcionalidad del elemento se escribe aquí
    var queryParameters = [];
    if (this.hasAttribute('firstName')) {
      queryParameters.push('firstName=' + this.getAttribute('firstName'));
    }
    if (this.hasAttribute('lastName')) {
      queryParameters.push('lastName=' + this.getAttribute('lastName'));
    }
    if (this.hasAttribute('limitTo')) {
      queryParameters.push('limitTo=[' + this.getAttribute('limitTo') + ']');
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/' + (this.getAttribute('joke-id') || 'random') + '?' + queryParameters.join('&'));
    xhr.onload = function(response) {
      var data = JSON.parse(response.currentTarget.response);
      this.innerHTML = data.value.joke;
      this.setAttribute('joke-id', data.value.id);
      this.setAttribute('categories', data.value.categories);
    }.bind(this);
    xhr.send();
  }
}