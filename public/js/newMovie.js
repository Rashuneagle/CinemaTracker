var newMovie = document.querySelector("#newMovieForm");

newMovie.addEventListener("submit", event => {
  var title = document.querySelector("#movieTitle").value;
  var year = document.querySelector("#movieYear").value;
  var synopsis = document.querySelector("#movieSynopsis").value;
  var director = document.querySelector("#movieDirector").value;
  var writer = document.querySelector("#movieWriter").value;
  var actors = document.querySelector("#movieActors").value;
  event.preventDefault();
  console.log('click');
  if (!title || !year || !synopsis || !director || !writer || !actors) {
    alert('One of the fields is empty. Please try again!');
    return;
  }
  const blogObj = {
    title: title,
    year: year,
    synopsis: synopsis,
    director: director,
    writer: writer,
    actors: actors,
  }
  fetch('/api/movies', {
    method:'POST',
    body:JSON.stringify(blogObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if(res.ok){
      createNew.setAttribute('hidden', 'false');
      location.reload();
    } else {
      alert('Error - Please Try Again');
    }
  })
})
