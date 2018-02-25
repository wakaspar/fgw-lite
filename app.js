angular
  .module('FreeGoldAngular', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider){
  //console.log('angular works!')

  $routeProvider
    .when('/', {
      templateUrl: 'templates/shop.html',
      controller: 'ShopController'
    })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
