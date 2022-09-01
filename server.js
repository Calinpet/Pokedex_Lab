// REQUIRE DEPENDENCIES
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

// INITIALIZE EXPRESS APP
const methodOverride = require('method-override');
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
const port = 3000;

// DEFINE OUR ROUTS

// INDEX
app.get('/pokemon/', (req, res) => {
  res.render('index.ejs', { data: Pokemon });
  });

//NEW
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
});

//DELETE
app.delete("/pokemon/:indexOfPokemonArray", (req, res)=>{

})
//UPDATE

//CREATE
app.post("/pokemon", (req, res)=>{
  res.redirect()
})
//EDIT

//SHOW
app.get('/:id', (req, res) => {
  res.render('show.ejs', { data: Pokemon[req.params.id] });
  });

// TELL OUR APP TO LISTEN ON PORT...
app.listen(3000, ()=>{
  console.log(`listening on port `, 3000)
});