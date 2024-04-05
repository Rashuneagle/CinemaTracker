var newShow = document.querySelector("#newShowForm");

newShow.addEventListener("submit", event => {
  var title = document.querySelector("#showTitle").value;
  var year = document.querySelector("#showYear").value;
  var synopsis = document.querySelector("#showSynopsis").value;
  var creator = document.querySelector("#showCreator").value;
  var writer = document.querySelector("#showWriter").value;
  var actors = document.querySelector("#showActors").value;
  event.preventDefault();
  console.log('click');
  if (!title || !year || !synopsis || !creator || !writer || !actors) {
    alert('One of the fields is empty. Please try again!');
    return;
  }
  const blogObj = {
    title: title,
    year: year,
    synopsis: synopsis,
    creator: creator,
    writer: writer,
    actors: actors,
  }
  fetch('/api/shows', {
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
