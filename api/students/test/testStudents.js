var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:8000");

// UNIT test begin

describe("Students API unit tests",function(){
  // #1 should return student representation in json
  it("should return collection of JSON documents",function(done){

    // calling home page api
    server
    .get("/api/students/")
    .expect("Content-type",/json/)
    .expect(200) // This is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

  // #2 add a student
  it("should add a new student",function(done){

    // post to /api/student
    server.post('/api/students')
    .send({name:"Student 99",address:"123 Strand St"})
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
      res.status.should.equal(201);
      done();
    });
  });
  //#3 update a student
  it("Should update a student", function(done){
    server.put('/api/students/58bef7881da270105c755676')
    .send({name:"Student 99",address:"123 Strand St"})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
  //#4 delete a student 
  it("Should delete a student", function(done){
    server.put('/api/students/58bef7881da270105c755676')
    .send({name:"Student 99",address:"123 Strand St"})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
});

