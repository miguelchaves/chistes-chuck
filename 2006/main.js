$.get("http://api.icndb.com/jokes/random", (response) => {
	var textoChiste = response.value.joke;
	$('#joke').text(textoChiste);
});
