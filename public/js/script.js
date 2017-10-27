
angular.module('myApp', [])
    .constant('dataURL', '/data/data.json')
    .controller('myCtrl', function ($scope, $http, dataURL) {

        $scope.childsToShow = [];

        $scope.showMyChilds = function (node) {
            if (!$scope.childsToShow.includes(node.id))
                $scope.childsToShow.push(node.id);
            else
                $scope.hideMyChilds(node)
        }

        $scope.hideMyChilds = function (node) {
            $scope.childsToShow.splice($scope.childsToShow.indexOf(node.id), 1);
        }

        $scope.doesShowChilds = function (node) {
            return $scope.childsToShow.includes(node.id)
        }

        $http.get(dataURL)
            .then(function (res) {
                $scope.data = res.data;
            })
            .catch(function (err) {
                alert('Data fetch error: ' + err.status + ' ' + err.statusText);
            })
        ;
    });