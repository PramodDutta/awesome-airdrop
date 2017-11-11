var app = angular.module("app", []);
app.controller("HelloController", function($scope,$http) {


		$http({
			  method: 'GET',
			  url: 'data.json'
			}).then(function successCallback(response) {
				   console.log(response.data);
			       $scope.data = response.data;
			       $scope.data0 = response.data[0].name;
			       console.log($scope.data0);

			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
  });

});