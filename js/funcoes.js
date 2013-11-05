function AgendaCtrl($scope, $http, $window){
		
	$scope.salvar = function(addWine){
		$http.post('service/wines', $scope.contato).success(function(data){
			$window.console.log(data);
		});
	}

	/*$scope.salvar = function(){
		$http.get('/service/produtos').success(function(data){

		});
	}*/

	var init = function(){
		$scope.contato = {id_contato:0, nome:'', email:''};
		$scope.contatos = [];
	};

	init();

}