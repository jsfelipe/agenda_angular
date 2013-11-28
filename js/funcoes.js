function AgendaCtrl($scope, $http, $window){
	
	$scope.letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var $ = jQuery;

	$scope.passaLetra = function(letra){
		//$scope.letra = letra;
		//console.log(letra);

		
		$http.get('service/letra/'+letra).success(function(data){
				$scope.contatos = data;
							
		});
	}

	$scope.visualizar = function($index, contato){
		$scope.contato_view = contato;
		$scope.ativo = $index;
		//console.log($index);
	}

	//Busca


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

	$scope.visualizar = function(index, contato){
		$scope.contato_view = contato;
		$scope.ativo = index;
	}

	$scope.editar = function(){
		$('#modalCadastro').show();
	}

	

	var init = function(){
		
			$scope.passaLetra('A');
			$scope.contatos
			$scope.ativo = 0;
			$scope.contato = {id:0, nome:'', email:''};
			//$scope.contatos = [];
	};

	init();


}
