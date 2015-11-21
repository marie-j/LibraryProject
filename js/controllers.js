var bookControllers = angular.module('bookControllers', []);

library.controller('bookCtrl', ['$scope', function($scope){

	$scope.books = [];

	$scope.addLiked = function(e) {

		e.preventDefault();

		$scope.books.push({
			title : $scope.newTitle,
			author : $scope.newAuthor,
			like : true
		});
		$scope.newTitle='';
		$scope.newAuthor='';
	}

	$scope.addUnliked = function(e) {

		e.preventDefault();

		$scope.books.push({
			title : $scope.newTitle,
			author : $scope.newAuthor,
			like : false
		});
	}

	$scope.removeBook = function(index) {
		$scope.books.splice(index,1);
	}


}]);
