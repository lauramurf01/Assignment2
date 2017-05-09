'use strict'

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

	var ModuleSchema = new mongoose.Schema({
		code: String,
		credits: Number,
		description: String,
		grade: Number
		});

var StudentSchema = new Schema({
	name: String,
	address: String,
	age:{
		type: Number, 
		min:0, 
		max: 120},
	email:{
		type: String,
		required: true,
		validate: function(email) {
	      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    	}
    },
	updates: {
		type: Date, 
		default: Date.now
	},
	studentNumber: Number,
	modules:[ModuleSchema]
});

module.exports = mongoose.model('Student', StudentSchema);