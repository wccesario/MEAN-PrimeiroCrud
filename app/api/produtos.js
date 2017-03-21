var api = {};

var mongoose = require('mongoose');

var produtoModel = mongoose.model('Produto');


api.listaProdutos = function(req, res){


	produtoModel.find().then(function(produtos){
	
		res.json(produtos);
	
	}, function(err){

		res.sendStatus(500);
	});

};

api.cadastraProduto = function(req, res){

	produtoModel.create(req.body).then(function(newproduto){
		res.json(newproduto)
	}, function(err){

		console.log(req.body);
		res.sendStatus(500);
	})


};

api.deleteProduto = function(req, res){

	produtoModel.deleteOne({_id:req.params.id}).then(function(data){
		res.sendStatus(204);
	}, function(err){
		res.sendStatus(500);
	})

};


api.getOneProduto = function(req, res){

	produtoModel.findById({_id: req.params.id }).then(function(data){
		res.json(data);
	}, function(err){
		res.sendStatus(500)
	});

}

api.atualizaProduto = function(req, res) {

	console.log(req.params.id);
	console.log(req.body);

	produtoModel.findByIdAndUpdate(req.body._id, req.body).then(function(data){
		
		console.log(req.body._id);
		console.log(data);
		res.json(data);
	}, function(err){
		res.sendStatus(500)
	});
}


module.exports = api;