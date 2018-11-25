$(document).ready(function () {
});

function createMovie(ribbon, img, name, rating, list) {
  var elm = '<div> <div> <div class="project"> <div class="ribbon">' + ribbon + '</div> <img src="' + img + '" alt="My Work"/> <div class="projectTitle"> <h5>' + name + '</h5> ';
  
  for (let i = 0; i < rating; i++) {
    elm += '<div> <div>★</div> </div> ';
  }
  
  for (let i = 0; i < 5 - rating; i++) {
    elm += '<div> <div>☆</div> </div> ';
  }
                  
  elm += '</div> ' + list + ' </div> </div>';
            
  $("#gallery > div").append(elm);
}