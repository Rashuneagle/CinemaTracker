var newMovieForm = document.querySelector("#newMovieForm");

newMovieForm.addEventListener("submit", event => {
  event.preventDefault();

  var title = document.querySelector("#movieTitle").value;
  var year = document.querySelector("#movieYear").value;
  var synopsis = document.querySelector("#movieSynopsis").value;
  var director = document.querySelector("#movieDirector").value;
  var writer = document.querySelector("#movieWriter").value;
  var actors = document.querySelector("#movieActors").value;
  var poster = document.querySelector("#movieImage").value;
  var favorite = document.querySelector("#movieFavorite").checked;

  if (!title || !year || !synopsis || !director || !writer || !actors || !poster) {
    alert('One of the fields is empty. Please try again!');
    return;
  }

  const movieObj = {
    name: title,
    year: year,
    description: synopsis,
    director: director,
    writer: writer,
    actors: actors,
    poster: poster,
    favorite: favorite
  };

  fetch('/api/movies', {
    method: 'POST',
    body: JSON.stringify(movieObj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error - Please Try Again');
  })
  .then(data => {

    console.log(data);
    location.replace('/dashboard');
  })
  .catch(error => {
    console.error('Error:', error);
    alert(error.message);
  });
});
