const express = require('express');
const app=express();

const notes = [
  { id: '1', title: 'hello', body: 'world', important: true },
  { id: '2', title: 'hello', body: 'world', important: true },
  { id: '3', title: 'hello', body: 'world', important: false },
  { id: '4', title: 'hello', body: 'world', important: true },
  { id: '5', title: 'hello', body: 'world', important: true },
  { id: '6', title: 'hello', body: 'world', important: true },
  { id: '7', title: 'backend using node.js', body: 'Important note about backend', important: false }
];

//setting end point:
app.get('/', (req,res)=>{
  res.send("api request"); 
});
//to get all the notes end point:
app.get('/api/notes', (req,res)=>{
  res.json(notes); 
});


const PORT =3001;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});
