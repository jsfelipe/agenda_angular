function AgendaCtrl($scope, $http, $window){
	
	$ = jQuery;
	$scope.letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	
	$scope.passaLetra = function(letra){
		//$scope.letra = letra;
		//$scope.contat = {id:0, nome:'teste', email:''};
		console.log($scope.contato.nome);
	}


	$scope.salvar = function(){

		if($scope.contato.id > 0){

			$http.put('service/wines/'+$scope.contato.id, $scope.contato).success(function(data){
				$(".alert").css({display: 'block'});
				$(".alert").addClass('alert-warning');
				$("#msg_alert").html('Alterado com sucesso!');
			
			});

		}else{

			$http.post('service/wines', $scope.contato).success(function(data){
				$scope.contatos.unshift(data);
				$(".alert").css({display: 'block'});
				$(".alert").addClass('alert-success');
				$("#msg_alert").html('Cadastrado com sucesso!');
				
			});

		}
		$('#modalCadastro').modal('hide');
		$(".alert").css({display: ''}).fadeOut(5000);
	}

	$scope.visualizar = function(contato){
		$scope.contato = contato;
	}

	$scope.editar = function(){
		$('#modalCadastro').show();
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