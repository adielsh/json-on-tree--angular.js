
angular.module('myApp', [])
  .controller('myCtrl', function($scope) {

  $scope.childsToShow = [];

	$scope.showMyChilds = function(node){
   if(!$scope.childsToShow.includes(node.id))
		 	$scope.childsToShow.push(node.id);
   else
   		$scope.hideMyChilds(node)
    }	
    
	$scope.hideMyChilds = function(node){
		$scope.childsToShow.splice($scope.childsToShow.indexOf(node.id),1);
    }	
    
  $scope.doesShowChilds = function (node){
 		 return $scope.childsToShow.includes(node.id)
  }

    $scope.data = [
    {
        id:1,
        name: "Friends",
        type: "Group",
        contacts: [
            {id:2, name: "Udi", type: "Contact"},
            {id:3, name: "Tommy", type: "Contact"},
            {
                id:6,
                name: "Old Friends",
                type: "Group",
                contacts: [
                    {id:7, name: "Itay", type: "Contact"},
                ]
            },
        ]
    },
    {
        id:4,
        name: "Family",
        type: "Group",
        contacts: [
            {id:5, name: "Roni", type: "Contact"},
        ]
    },
    {id: 8, name: "Ori", type: "Contact"},
]
;
  });