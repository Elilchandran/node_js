const express = require('express');
const app=express();

//middleware
app.use(express.json());

let notes = [
  { id: '1', title: 'hello', body: 'world', important: true },
  { id: '2', title: 'hello', body: 'world', important: true },
  { id: '3', title: 'hello', body: 'world', important: false },
  { id: '4', title: 'hello', body: 'world', important: true },
  { id: '5', title: 'hello', body: 'world', important: true },
  { id: '6', title: 'hello', body: 'world', important: true },
  { id: '7', title: 'backend using node.js', body: 'Important note about backend', important: false }
];

//end point for getting:
app.get('/', (request,response) => {
  response.send("api request");
});
//to get all the notes end point:
app.get('/api/notes', (request,response)=>{
  //response.json(notes); 
  response.status(200).json(notes);//when the new added data(id 8:veera cant be visible while fetching single resources)
});
//to create *new resource* based on request data(post request end point):
app.post("/api/notes",(request, response) =>{
  notes = notes.concat(request.body);
  response.status(201).json({message:'note created successfully'});
});

//fetches a *single resource* based on id:
app.get("/api/notes/:id",(request, response) =>{
const id=request.params.id;
const note=notes.find(note => note.id == id);
if(note){
  response.status(200).json(note);
}else{
  response.status(404).json({message:'id does not found'});//or.end("id not exsit");//404 status means id not /data not found
}
//response.status(200).json(note);//returning if data avaiable(ex:1 to 7 id we can return data in postman)
});



const PORT =3001;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});
