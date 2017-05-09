'use strict';
var contactEvent = require("../../events.js")
var _ = require('lodash');
var Student = require('./student.model');

// Get list of student
exports.index = function(req, res) {
  console.log (1)
  // Connect to the db
  Student.find(function (err, students) {
    if(err) {
      return handleError(res, err);
    }
    return res.json(200, students);
  });
};

// Creates a new student in datastore.
exports.create = function(req, res) {
  Student.findOne({'email': req.body.email},function(err, result){ //checking if email is already in the system
    if(err) {
      return handleError(result, err);
    }
    if (!result){
      Student.create(req.body, function(err, student) {
        if(err) {
          return handleError(result, err);
        }
        contactEvent.publish('create_student_event', student);
        return result.json(201, student);
      });
    }
    else 
    {
      //res.json({'status': 401,'message': 'Student email is already in use'});
      res.status(401).send('Student email is already in use');
    }
  });
};

// Updates an existing student in the DB.
exports.update = function(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  Student.findById(req.params.id, function(err, student) {
    if(err) {
      return handleError(res, err);
    }
    if(!student) {
      return res.send(404);
    }
    var updated = _.merge(student, req.body);
    updated.save(function(err) {
      if (err) { return handleError(res, err); }
      return res.json(200, student);
    });
  });
};

// delete an existing student in datastore.
exports.delete = function(req, res) {
    Student.findById(req.params.id, function (err, student) {
    if(err) { return handleError(res, err); }
    if(!student) { return res.send(404); }
    student.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.getstudent = function(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  Student.findById(req.params.id, function(err, student) {
    if(err) {
      return handleError(res, err);
    }
    if(!student) {
      return res.send(404);
    }
    return res.json(200, students);
  });
};

function handleError(res, err) {
  return res.send(500, err);
};
