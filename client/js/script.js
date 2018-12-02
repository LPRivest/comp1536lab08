$(document).ready(function () {
  createMovieDetails(0, '<ul><li>Length: 120m</li><li>Director: Sissy</li></ul>');

  for (let i = 0; i < 5; i++) {
    $.ajax({
      url: "/movies/" + i,
      dataType: 'json',
      type: "GET",
      success: function(data) {
        console.log('SUCCESS json object');
        createMovie(i, data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });

    $.ajax({
      url: "/movies/" + i + '/details',
      dataType: 'html',
      type: 'GET',
      success: function(data) {
        console.log('SUCCESS html object');
        createMovieDetails(i, data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    })
  }

  $.ajax({
    url: "/top-movies",
    dataType: "json",
    type: "GET",
    data: {format: 'json'},
    success: function(data) {
      console.log('SUCCESS json list');
      createTopMoviesJSON(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      $("#about_me").text(jqXHR.statusText);
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });

  $.ajax({
    url: "/top-movies",
    dataType: "html",
    type: "GET",
    data: {format: 'html'},
    success: function(data) {
      console.log('SUCCESS html list');
      $("#about_me").after(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      $("#about_me").text(jqXHR.statusText);
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });
});

function createMovie(id, data) {
  let elm = '<div> <div> <div class="project"> <div class="ribbon">' + data.tag + '</div> <img src="' + data.image + '" alt="My Work"/> <div class="projectTitle"> <h5>' + data.title + '</h5> ';
  
  for (let i = 0; i < data.rating; i++) {
    elm += '<div> <div>★</div> </div> ';
  }
  
  for (let i = 0; i < 5 - data.rating; i++) {
    elm += '<div> <div>☆</div> </div> ';
  }
                  
  elm += '</div> <div id="movie' + id + '"></div> </div> </div>';/*' <p> Actors: ';
  
  for (let i = 0; i < actors.length; i++) {
    elm += '<span>' + actors[i] + '</span> ';
  }

  elm += '</p> </div> </div>';*/
            
  $("#gallery > div").append(elm);
}

function createMovieDetails(id, list) {
  console.log("#movie" + id);
  $("#movie" + id).append(list);
}

function createTopMoviesJSON(list) {
  let elm = "<table> <tbody> ";
  
  for (let i = 0; i < list.length; i++) {
    elm += "<tr> <td> <span>" + (i + 1) + "</span> </td> <td>" + list[i] + "</td> </tr> "
  }
  
  elm += "</tbody> </table>";
  
  $("#quote").before(elm);
}