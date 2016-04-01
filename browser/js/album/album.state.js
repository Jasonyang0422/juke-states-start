juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    resolve: {
      albums: function(AlbumFactory){
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl',
    templateUrl: '/templates/albums.tmpl.html'
  });

  $stateProvider.state('albumShow', {
  	url: '/albums/:id',
    resolve: {
      album: function(AlbumFactory, $stateParams){
        console.log('id', $stateParams.id);
        console.log('fac', AlbumFactory.fetchById($stateParams));
        return AlbumFactory.fetchById($stateParams.id);
      }
    },
  	controller: 'AlbumCtrl',
  	templateUrl: '/templates/album.tmpl.html'
  });

});
