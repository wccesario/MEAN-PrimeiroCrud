module.exports = function(app) {

	var produtos = app.api.produtos;

	app.get('/produtos', produtos.listaProdutos);

	app.post('/produtos', produtos.cadastraProduto);

	app.put('/produtos', produtos.atualizaProduto);

	app.get('/produtos/:id', produtos.getOneProduto);

	app.delete('/produtos/:id', produtos.deleteProduto);

} 