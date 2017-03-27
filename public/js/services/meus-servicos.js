angular.module('meusServicos', ['ngResource'])
.factory('produtoResource', function($resource){

	return $resource('/produtos/:id', null, {
		update: {
			method:'PUT'
		}
	});

})

.factory('produtoTransactions', function($q, produtoResource){

	var service = {};

	service.cadastrar = function(produto){

		return $q(function(resolve, reject){

			if(produto._id){
				produtoResource.update({_id:produto._id}, produto, function(){
					resolve({
						mensagem: 'Produto atualizado com sucesso',
						inclusao: false
					});
				}, function(err){
					reject({
						mensagem: 'Produto não foi atualizado'
					});
				});

			} else {

				produtoResource.save(produto, function(){
					resolve({
						mensagem: 'Produto inserido com sucesso'
					});
				}, function(err){
					reject({
						mensagem: 'Produto não foi inserido'
					});
				});

			}

		});

	},

	service.deleteProduto = function(id){

		return $q(function(resolve, reject){

			produtoResource.remove({id:id}, null, function(){
				resolve({
					mensagem: 'Produto apagado com sucesso'
				});
			}, function(err){
				reject({
					mensagem: 'Não foi possivel deletar o produto' + err
				});
			});

		});

	}

	return service;

});