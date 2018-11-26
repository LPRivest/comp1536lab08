//list of HTML lists to return. Describe the Director(s)/Length/ESRB rating
let ralphMovie = '<ul><li>Director: Phil Jonston, Rich Moore</li><li>Length: 1h52min</li><li>ESRB: PG</li></ul>';
let creedMovie = '<ul><li>Director: Steven Caple Jr.</li><li>Length: 2h10min</li><li>ESRB: PG-13</li></ul>';
let beastsMovie = '<ul><li>Director: David Yates</li><li>Length: 2h14min</li><li>ESRB: PG-13</li></ul>';
let robinMovie = '<ul><li>Director: Otto Bathurst</li><li>Length: 1h56min</li><li>ESRB: PG-13</li></ul>';
let grinchMovie = "<ul><li>Director: Yarrow Cheney, Scott Mosier</li><li>Length: 1h26min</li><li>ESRB: PG</li></ul>";
let bookMovie = '<ul><li>Director: Peter Farrelly</li><li>Length</li><li>Interesting!</li></ul>';
let widowsMovie = '<ul><li>Director: Widows</li><li>Length: 2h9min</li><li>ESRB: R</li></ul>';
let familyMovie = '<ul><li>Director: Sean Anders</li><li>Length: 1h58min</li><li>ESRB: PG-13</li></ul>';
let bohemianMovie = '<ul><li>Director: Bryan Singer</li><li>Length: 2h14min</li><li>ESRB: PG-13</li></ul>';
let starMovie = '<ul><li>Director: Bradley Cooper</li><li>Length: 2h16min</li><li>ESRB: R</li></ul>';

//list of JSON objects to return. Object describes a movie. Parameters include Title/Image/Rating/Genre(tag)
let ralphObj = {title: "Ralph Breaks the Internet", image: "https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_UX182_CR0,0,182,268_AL_.jpg", rating: 3.9, tag: "Animation"};  
let creedObj = {title: "Creed II", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Creed_II_poster.png/220px-Creed_II_poster.png", rating: 4, tag: "Drama"};
let beastsObj = {title: "Fantastic Beasts: The Crimes of Grindelwald", image: "http://digitalspyuk.cdnds.net/18/39/480x711/gallery-1537826028-fantastic-beasts-2-gellert-grindelwald.jpg", rating: 3.5, tag: "Adventure"};
let robinObj = {title: "Robin Hood", image: "https://cdn.traileraddict.com/content/lionsgate/robin-hood-2018-6.jpg", rating: 2.6, tag: "Action"};
let grinchObj = {title: "Dr.Seuss' the Grinch", image: "http://www.stunmore.com/uploads/9/0/2/4/90246451/the-grinch-movie-poster-2018_orig.jpg", rating: 3.2, tag: "Family"};
let bookObj = {title: "Green Book", image: "https://m.media-amazon.com/images/M/MV5BMjMyNzExNzQ5OV5BMl5BanBnXkFtZTgwNjM2MjIxNjM@._V1_.jpg", rating: 4, tag: "Biography"};
let widowsObj = {title: "Widows", image: "https://s3.birthmoviesdeath.com/images/made/Widows-Poster-1_1200_1901_81_s.jpg", rating: 3.7, tag: "Crime"};
let familyObj = {title: "Instant Family", image: "http://www.impawards.com/2018/posters/instant_family_ver2.jpg", rating: 3.8, tag: "Comedy"};
let bohemianObj = {title: "Bohemian Rhapsody", image: "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_UX182_CR0,0,182,268_AL_.jpg", rating: 4.2, tag: "Drama"};
let starObj = {title: "A Star is Born", image: "https://m.media-amazon.com/images/M/MV5BMjE3MDQ0MTA3M15BMl5BanBnXkFtZTgwMDMwNDY2NTM@._V1_.jpg", rating: 4.1, tag: "Romance"};

//list of JSON lists to return. Describe the main 3 actors in the movie, as described on IMDB.
let ralphCast = ['John C. Reilly', 'Sarah Silverman', 'Gal Gadot'];
let creedCast = ['Michael B. Jordan', 'Sylvester Stallone', 'Tessa Thompson'];
let beastsCast = ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'];
let robinCast = ['Taron Egerton','Jamie Foxx','Ben Mendelsohn'];
let grinchCast = ['Benedict Cumberbatch','Cameron Seely','Rashida Jones'];
let bookCast = ['Viggo Mortensen', 'Mahershala Ali', 'Linda Cardellini'];
let widowsCast = ['Viola Davis', 'Michelle Rodriguez', 'Elizabeth Debicki'];
let familyCast = ['Mark Wahlberg', 'Rose Byrne', 'Isabela Moner'];
let bohemianCast = ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'];
let starCast = ['Lady Gaga', 'Bradley Cooper', 'Sam Elliot'];