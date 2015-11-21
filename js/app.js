var library = angular.module('library', [
  'ngRoute',
  'bookControllers'
]);

library.config(['$routeProvider',

  function($routeProvider){

    $routeProvider
      .when('/library', {

        templateUrl: 'views/books.html',
        controller: 'bookCtrl'
      })

			.otherwise({
				redirectTo: '/library'
			});
  }
]);
