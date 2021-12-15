import fetch from 'node-fetch';

//   const joke = await fetch('http://api.icndb.com/jokes/random/', {
//     method: 'GET'
//   });

// async function getJoke() {
//   const joke = await fetch('http://api.icndb.com/jokes/random/', {
//     method: 'GET'
//   });
//   console.log(joke);

fetch('http://api.icndb.com/jokes/random', {
  method: 'GET'
})
  .then((rawResponse) => rawResponse.json())
  .then((response) => {
    console.log(response.value.joke);
  });