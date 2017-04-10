// MAIN CONTROLLER
function mainController($scope) {
  $scope.newUser = {
    firstName: "",
    lastName: "",
    email: ""
  };

$scope.persons=[];

$scope.addUser = function() {
 $scope.persons.push($scope.newUser);
 $scope.newUser={};
};
console.log($scope.persons);
}
