angular.module('shopping').controller('ProdutoController', function($scope, $http, $routeParams){

	$scope.produtos = [];

    $scope.produto = {};

    $scope.produtosfiltro = '';

    $scope.cotacao = '';


    if($routeParams.id){

        $http.get('/produtos/' + $routeParams.id)
        .then(function(retorno) {
            $scope.produto = retorno.data;
        })
        .catch(function(erro) {
            console.log(erro);
        }); 


    } else {

        $http.get('/produtos')
        .then(function(retorno) {
            $scope.produtos = retorno.data;
        })
        .catch(function(erro) {
            console.log(erro);
        }); 
        
    }



    $scope.submitproduto = function(){


        if($routeParams.id){
            
            $http.put('/produtos', $scope.produto).then(function(){
                
                alert('Produto alterado com sucesso');
                $scope.produto = {};

            }).catch(function(err){
                console.log(err);
            })


        } else {

            $http.post('/produtos', $scope.produto).then(function(){

                console.log($scope.produto);

                alert('Produto inserido com sucesso');
                $scope.produto = {};

            }).catch(function(err){
                console.log(err);
            })
        }


    }


    $scope.deletaproduto = function(id) {

        $http.delete('/produtos/' + id).then(function(response){

            console.log(response);

        }).catch(function(err){
            console.log(err);
        })
    }

    $scope.getTotal = function(currency){

        var total = 0;

        if(currency == 'd'){
            for(var i = 0; i < $scope.produtos.length; i++){
                var product = $scope.produtos[i];
                total += (product.valor);
            }    
        } else {
            for(var i = 0; i < $scope.produtos.length; i++){
                var product = $scope.produtos[i];
                total += (product.valor * $scope.cotacao);
            }
        }
        
        return total;

    }

});