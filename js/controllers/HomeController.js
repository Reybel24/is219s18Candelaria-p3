app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
  },
  { 
      title:	'Interstellar', 
      iscore:	8.6,
      rating:	'PG-13',
      runtime:	169,
      released:	new Date('2014', '11', '7'),
      country:	'USA',
      posters:	['img/interstellar1.jpg', 'img/interstellar2.jpg'],
      imdb:		'https://www.imdb.com/title/tt0816692',
      website:	'http://www.interstellarmovie.net/',
      likes:	1136,
      dislikes:	117,
      posterindex: 0
  },
    { 
      title:	'Fantastic Mr. Fox', 
      iscore:	7.8,
      rating:	'PG',
      runtime:	87,
      released:	new Date('2009', '11', '25'),
      country:	'USA',
      posters:	['img/fox1.jpg', 'img/fox2.jpg'],
      imdb:		'https://www.imdb.com/title/tt0432283/?ref_=nv_sr_1',
      website:	'http://www.foxsearchlight.com/fantasticmrfox/',
      likes:	957,
      dislikes:	198,
      posterindex: 0
  },
	  { 
      title:	'12 Angry Men', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	96,
      released:	new Date('1957', '4', '10'),
      country:	'USA',
      posters:	['img/12angrymen1.jpg', 'img/12angrymen2.jpg'],
      imdb:		'https://www.imdb.com/title/tt0050083/',
      website:	'https://www.criterion.com/films/27871-12-angry-men',
      likes:	1419,
      dislikes:	84,
      posterindex: 0
  }
	
  ];
	
	

	
  /* ADD VARIABLES FOR STEP 3 HERE */
  $scope.title = "IMDB Reybel's Top 8 Movies";
  $scope.owner = "Reybel";
  $scope.github = "https://github.com/Reybel24";
  
	
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
	function like(index) {
    $scope.movies[index].likes += 1;
  }

  function dislike(index) {
    $scope.movies[index].dislikes += 1;
  }

  function posterClick(index) {
    if ($scope.movies[index].posterindex == $scope.movies[index].posters.length - 1) {
      $scope.movies[index].posterindex = 0;
    } else {
      $scope.movies[index].posterindex += 1;
    }
  }

  function timeText(minutes) {
    return (Math.floor(minutes/60) + "h " + minutes%60 + "m");
  }


  $scope.like = like;
  $scope.dislike = dislike;
  $scope.posterClick = posterClick;
  $scope.timeText = timeText;
	
	
	
	
	
	
	
	
}]);
