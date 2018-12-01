$(document).ready(function () {
  createMovie('Family', './images/tombraider.jpg', 'Tomb Raider', 5, '<ul><li>Length: 120m</li><li>Director: Sissy</li></ul>');
  createTopMoviesJSON([ "abc", "abc", "abc", "abc", "abc" ]);
  
  $("#about_me").after('<ul><li>aasdf</li><li>asdf</li><li>asdf</li><li>asdf</li></ul>');
});

function createMovie(ribbon, img, name, rating, list, actors) {
  let elm = '<div> <div> <div class="project"> <div class="ribbon">' + ribbon + '</div> <img src="' + img + '" alt="My Work"/> <div class="projectTitle"> <h5>' + name + '</h5> ';
  
  for (let i = 0; i < rating; i++) {
    elm += '<div> <div>★</div> </div> ';
  }
  
  for (let i = 0; i < 5 - rating; i++) {
    elm += '<div> <div>☆</div> </div> ';
  }
                  
  elm += '</div> ' + list + ' </div> </div>';/*' <p> Actors: ';
  
  for (let i = 0; i < actors.length; i++) {
    elm += '<span>' + actors[i] + '</span> ';
  }

  elm += '</p> </div> </div>';*/
            
  $("#gallery > div").append(elm);
}

function createTopMoviesJSON(list) {
  let elm = "<table> <tbody> ";
  
  for (let i = 0; i < list.length; i++) {
    elm += "<tr> <td> <span>" + (i + 1) + "</span> </td> <td>" + list[i] + "</td> </tr> "
  }
  
  elm += "</tbody> </table>";
  
  $("#quote").before(elm);
}