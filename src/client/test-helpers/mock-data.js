/* jshint -W079 */
//jscs:disable
var mockData = (function () {
  return {
    getMockMovies: getMockMovies,
    getMockStates: getMockStates
  };

  function getMockStates() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/',
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'dashboard',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      }
    ];
  }

  function getMockMovies() {
    /*jshint ignore:start*/
    return {
      'Search': [
        {
          Title: 'The Avengers',
          Year: '2012',
          imdbID: 'tt0848228',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
        },
        {
          Title: 'Avengers: Infinity War',
          Year: '2018',
          imdbID: 'tt4154756',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
        },
        {
          Title: 'Avengers: Age of Ultron',
          Year: '2015',
          imdbID: 'tt2395427',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'
        },
        {
          Title: 'Avengers: Endgame',
          Year: '2019',
          imdbID: 'tt4154796',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'
        },
        {
          Title: 'The Avengers',
          Year: '1998',
          imdbID: 'tt0118661',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
        },
        {
          Title: 'Ultimate Avengers',
          Year: '2006',
          imdbID: 'tt0491703',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg'
        },
        {
          Title: 'Ultimate Avengers II',
          Year: '2006',
          imdbID: 'tt0803093',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          Title: 'Next Avengers: Heroes of Tomorrow',
          Year: '2008',
          imdbID: 'tt1259998',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg'
        },
        {
          Title: 'Avengers Confidential: Black Widow & Punisher',
          Year: '2014',
          imdbID: 'tt3482378',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTU2MDg0Njk4MF5BMl5BanBnXkFtZTgwMTY0OTIyMTE@._V1_SX300.jpg'
        },
        {
          Title: 'Avengers Grimm',
          Year: '2015',
          imdbID: 'tt4296026',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTg5NDEzNDIyOV5BMl5BanBnXkFtZTgwODY3ODA5MzE@._V1_SX300.jpg'
        }
      ]
    };
    /*jshint ignore:end*/
  }
})();
