angular.module('shopping').controller('ProdutoController', function($scope, $routeParams, $http, produtoResource, produtoTransactions){

	$scope.produtos = [];

    $scope.produto = {};

    $scope.produtosfiltro = '';

    $scope.cotacao = '';

    if($routeParams.id){

        produtoResource.get({id:$routeParams.id}, function(produto){
            $scope.produto = produto;
        }, function(err){
            alert(err);
        });

    } else {

        produtoResource.query(function(produtos){

            $scope.produtos = produtos;

        }, function(err){
            console.log(err);
        });
   
    }

    $scope.submitproduto = function(){

        produtoTransactions.cadastrar($scope.produto).then(function(dados){
            alert(dados.mensagem);
            $scope.produto = {};
        }, function(err){
            alert(err);
        });
    }


    $scope.deletaproduto = function(id) {

        produtoTransactions.deleteProduto(id).then(function(dados){
            alert(dados.mensagem);
        }, function(err){
            alert(dados.mensagem);
        });

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