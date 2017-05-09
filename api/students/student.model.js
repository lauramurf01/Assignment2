'use strict'

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var StudentSchema = new Schema({
	name: String,
	address: String,
	age:{
		type: Number, 
		min:0, 
		max: 120},
	email: String,
	updates: {
		type: Date, 
		default: Date.now},
	studentNumber: Number
});

module.exports = mongoose.model('Student', StudentSchema);