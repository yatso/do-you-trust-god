angular.module('app.controllers', [])

    .controller('dOYOUTRUSTGODCtrl', ['$scope', '$stateParams', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $timeout) {

            $scope.showmeFunction = function () {
                $scope.showme = true;
                $timeout(function () {
                    $scope.showme = false;
                }, 5000);
            }
}])