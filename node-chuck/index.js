import fetch from 'node-fetch';

fetch('http://api.icndb.com/jokes/random', { method: 'GET' })
  .then((rawResponse) => rawResponse.json())
  .then((response) => {
    console.log(response.value.joke);
  });