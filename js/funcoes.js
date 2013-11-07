function AgendaCtrl($scope, $http, $window){
	
	$scope.letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var $ = jQuery;

	$scope.salvar = function(){
		
		if($scope.contato.id_contato > 0){
			$http.put('service/wines/'+$scope.contato.id_contato, $scope.contato).success(function(data){
		 	   $('#modalCadastro').modal('hide');
		 	   $('#msg_alert').html("Contato alterado com sucesso!");
               $('.alert').css( "display","block" ).fadeOut(4000);
               $('.alert').addClass("alert-warning");
		 	});

		}else{

			$http.post('service/wines', $scope.contato).success(function(data){
			$scope.contatos.unshift(data);
			});
		}
	}


	$scope.editar = function(contato){
		
		//console.log(contato);
		$scope.contato = contato;
		//console.log(contato);
		// $http.put('service/wines', $scope.contato).success(function(data){
		// 	$scope.contatos.unshift(data);
		// 	//$scope.formCadastro.$setPristine();
		// });
	}

	$scope.visualizar = function($index, contato){
		$scope.contato_view = contato;
		$scope.ativo = $index;
		//console.log($index);
	}

	//Busca


	
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
				//listanomes = $scope.contatos.nome;
				//listanomes.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
                       //return txtVal.toUpperCase();    
                  //});
			});
			
			$scope.contatos
			$scope.ativo = 0;
			$scope.contato = {id:0, nome:'', email:''};
			//$scope.contatos = [];
		};

	init();

}