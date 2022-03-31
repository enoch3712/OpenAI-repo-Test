angular.module("clickApp", [])


angular.module("clickApp").controller("clickCtrl",function($scope){

$scope.count = 0; 
// let num = 10; works as well as a global variable can change let to $scope
  
// uncomment and try this function
// $scope.addNum = () => {
//   let num = 10;
//   return $scope.count += num;
// };

  $scope.addNum = () => {
   $scope.count ++;
};
  
  
  $scope.reset = () => {
    $scope.count = 0; 
};


});