# Assignment2
This is my second assignment for Web Services Development

this is a simple API that i have created that allows the user to enter/search/update and delete students in to the system.

once a student has been created an email is sent to them informing them they have been registered using mail gun

Sample code for the ARC
{"name":"laura murphy","email":"murphy.littltlol.laura@gmail.com","address":"Waterford", "age":17, "student number":20062669,"modules":[{"code":"wd04"}]}

an email address can not be added twice or an error is given also validation has been set on the email to make sure it is a valid email eg. has an @ sign or no special characters has been added

a student is registered along with its modules 

testing has been implemented for all the functions (add, update, search and delete)

routes for the ARC to access the different methods
app.get('/api/students',student.index);
app.post('/api/students',student.create);
app.put('/api/students/:id',student.update);
app.delete('/api/students/:id',student.delete);