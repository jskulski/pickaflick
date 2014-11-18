function addSearchResponseToPage(responseText){
	$('#searchMovie-results').html(responseText);
}

function searchForMovieByInputString(inputString) {
	$.ajax({
  		url: "/movies",
  		data: {q : inputString},
  		success: addSearchResponseToPage
  	});
}

function extractMovieName(){
	var searchMovieInput = $('#searchMovie-input').val();
	searchForMovieByInputString(searchMovieInput);
	console.log(searchMovieInput);
}

function initApp() {
	$('#searchMovie-btn').on('click', extractMovieName);
}