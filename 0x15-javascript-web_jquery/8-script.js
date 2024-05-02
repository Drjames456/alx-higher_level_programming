#!/usr/bin/node

$(document).ready(function() {
    $.ajax({
        url: "https://swapi-api.alx-tools.com/api/films/?format=json",
        type: "GET",
        success: function(response) {
            var movies = response.results;
            var moviesList = $('#list_movies');
            moviesList.empty(); // Clear the existing entries if any

            $.each(movies, function(index, movie) {
                moviesList.append($('<li>').text(movie.title));
            });
        },
        error: function() {
            $('#list_movies').append($('<li>').text("Failed to load movie titles."));
        }
    });
});
