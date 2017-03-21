var mongoose = require('mongoose');

var schema = mongoose.Schema({

	nome:{
		type:String,
		required: true
	},

	link:{
		type:String,
	},

	valor:{
		type:Number,
		required:true
	}


});

mongoose.model("Produto", schema);