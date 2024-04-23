#!/usr/bin/node
const request = require('request');

function countWedgeAntillesMovies (apiUrl) {
  request({ url: apiUrl, json: true }, (error, response) => {
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
    if (response.statusCode !== 200) {
      console.error('Failed to fetch data:', response.statusCode);
      return;
    }

    const films = response.body.results;
    const wedgeMoviesCount = films.filter(film =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    ).length;

    console.log(`Number of movies featuring Wedge Antilles: ${wedgeMoviesCount}`);
  });
}

const apiUrl = process.argv[2];
if (!apiUrl) {
  console.error('Usage: node script.js <API_URL>');
  process.exit(1);
}

countWedgeAntillesMovies(apiUrl);
