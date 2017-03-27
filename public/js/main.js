angular.module('shopping', ['ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){


	$routeProvider.when('/', {
		'templateUrl': '../views/listagem.html',
		'controller': 'ProdutoController'
	});

	$routeProvider.when('/novoProduto', {
		'templateUrl': '../views/cadastro.html',
		'controller': 'ProdutoController'
	});

	$routeProvider.when('/editaProduto/:id', {
		'templateUrl': '../views/cadastro.html',
		'controller': 'ProdutoController'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});




});