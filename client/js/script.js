$(document).ready(function () {
  createMovie('Family', './images/tombraider.jpg', 'Tomb Raider', 5, '<ul><li>Length: 120m</li><li>Director: Sissy</li></ul>', [ "abc", "sf sadf", "Robert", "Phuc Vu"]);
});

function createMovie(ribbon, img, name, rating, list, actors) {
  var elm = '<div> <div> <div class="project"> <div class="ribbon">' + ribbon + '</div> <img src="' + img + '" alt="My Work"/> <div class="projectTitle"> <h5>' + name + '</h5> ';
  
  for (let i = 0; i < rating; i++) {
    elm += '<div> <div>★</div> </div> ';
  }
  
  for (let i = 0; i < 5 - rating; i++) {
    elm += '<div> <div>☆</div> </div> ';
  }
                  
  elm += '</div> ' + list + ' <p> Actors: ';
  
  for (let i = 0; i < actors.length; i++) {
    elm += '<span>' + actors[i] + '</span> ';
  }

  elm += '</p> </div> </div>';
            
  $("#gallery > div").append(elm);
}