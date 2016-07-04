angular.module('Calculator', [])
  .controller('mainCtrl', function ($scope, $state) {
    $scope.calculatePage = function () {
      $state.go('calculatePage')
    };
  })
  .controller('calculatePageCtrl', function ($scope, $ionicPopup) {

    $scope.data = {
      first: '',
      sign: '',
      second: '',
      result: ''
    };
    $scope.calculate = function () {

      switch ($scope.data.sign) {
        case "+":
          $scope.data.result = $scope.data.first + $scope.data.second;
          alert($scope.data.result);
          break;


        case "-":
          $scope.data.result = $scope.data.first - $scope.data.second;
          alert($scope.data.result);
          break;

        case "/":
          $scope.data.result = $scope.data.first / $scope.data.second;


          if ($scope.data.second == '0' && $scope.data.sign == '/') {

            alert("На ноль делить нельзя");
          }
          // $scope.showAlert = function() {
          //   $ionicPopup.alert({
          //     title: 'Эй, Миша',
          //     template: 'ты урод'
          //   });
          //
          // }




          else {
            alert($scope.data.result);
          }
          break;

        case "*":
          $scope.data.result = $scope.data.first * $scope.data.second;
          alert($scope.data.result);
          break;

      }
    }
  })
