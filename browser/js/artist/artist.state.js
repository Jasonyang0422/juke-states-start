juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    controller: 'ArtistsCtrl',
    templateUrl: '/templates/artists.tmpl.html'
  });

  $stateProvider
  .state('artistShow', {
  	url: '/artists/:id',
  	controller: 'ArtistCtrl',
  	templateUrl: '/templates/artist.tmpl.html'
  })
  .state('artistShow.albums', {
  	url: '/albums',
  	templateUrl: '/templates/artistAlbums.tmpl.html'
  })
  .state('artistShow.songs', {
  	url: '/songs',
  	templateUrl: '/templates/artistSongs.tmpl.html'
  });

});