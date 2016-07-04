angular.module('Calculator',[])
.controller('mainCtrl',function($scope){

})
.controller('calculatePageCtrl',function($scope){
  $scope.variables = {
    first:'',
    sign:'',
    second:''
  };
  $scope.calculate = function($scope){
    $scope.variables.first = $scope.firstNum;
    $scope.variables.sign = $scope.sign;
    $scope.variables.second = $scope.secondNum;
    if($scope.sign == '+'){
      $scope.result = $scope.variables.first + $scope.variables.second;
      return $scope.result;
    }
    else if($scope.sign == '-'){
      $scope.result = $scope.variables.first - $scope.variables.second;
      return $scope.result;
    }
    else if($scope.sign == '*'){
      $scope.result = $scope.variables.first * $scope.variables.second;
      return $scope.result;
    }
    else if($scope.sign == '/'){
      $scope.result = $scope.variables.first / $scope.variables.second;
      return $scope.result;
    }
  }
});
