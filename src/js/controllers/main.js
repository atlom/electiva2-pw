/*Controller del INDEX*/
app.controller("MainCtrl",["$scope",function($scope){
    $scope.togglebar = function(e){
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }
}])
