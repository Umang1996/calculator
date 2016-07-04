angular.module('Calculator',[])
.controller('mainCtrl',function($scope, $state){
  $scope.calculatePage = function () {
    $state.go('calculatePage')
};
})
.controller('calculatePageCtrl',function($scope){

  $scope.calculate = function($scope){
    $scope.firstNum = '';
    $scope.secondNum = '';
    $scope.variables = {
      first:'',
      sign:'',
      second:''
    };
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
