function AgendaCtrl($scope, $http, $window){
		
	$scope.salvar = function(addWine){
		$http.post('service/wines', $scope.contato).success(function(data){
			$scope.contatos.unshift(data);
			$scope.formCadastro.$setPristine();
		});
	}

	

	var init = function(){
		
			$http.get('service/wines').success(function(data){
				//console.log(data);
				$scope.contatos = data;
			});
		
			$scope.contato = {id:0, nome:'', email:''};
			//$scope.contatos = [];
		};

	init();

}