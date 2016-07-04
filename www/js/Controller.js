angular.module('Calculator', [])
  .controller('mainCtrl', function ($scope, $state) {
    $scope.calculatePage = function () {
      $state.go('calculatePage')
    };
  })

  .controller('calculatePageCtrl', function ($scope) {

  $scope.data = {
    first:'',
    sign:'',
    second:'',
    result:''
  };
    $scope.calculate = function () {
      if ($scope.data.sign == '+') {
        $scope.data.result = $scope.data.first + $scope.data.second;
        console.log($scope.data.result)
      }
      else if ($scope.sign == '-') {
        $scope.result = $scope.data.first - $scope.data.second;
        return $scope.result;
      }
      else if ($scope.sign == '*') {
        $scope.result = $scope.data.first * $scope.data.second;
        return $scope.result;
      }
      else if ($scope.sign == '/') {
        $scope.result = $scope.data.first / $scope.data.second;
        return $scope.result;
      }

    }

})
