// REQUIRE DEPENDENCIES
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

// INITIALIZE EXPRESS APP
const methodOverride = require('method-override');
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
const port = 3000;

/// static
app.use(express.static('public'))

// DEFINE OUR ROUTS

// INDEX
app.get('/pokemon/', (req, res) => {
  res.render('index.ejs', { 
    allPokemon: pokemon 
  });
  });

//NEW
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
});

//DELETE
app.delete("/pokemon/:indexOfPokemonArray", (req, res)=>{
  pokemon.splice(req.params.indexOfPokemonArray, )
  res.redirect("/pokemon")
});


//UPDATE
app.put("/pokemon/:indexOfPokemonArray", (req,res)=>{
  if(req.body.readyToBatle === "on"){
    req.body.readyToBatle = true
  } else {
    req.body.readyToBatle = false
  }
  pokemon[req.params.indexOfPokemonArray] = req.body
  res.redirect("/pokemon")
});

//CREATE
app.post("/pokemon", (req, res)=>{
  res.redirect()
});

//EDIT

//SHOW
app.get('/:id', (req, res) => {
  res.render('show.ejs', { data: pokemon[req.params.id] });
  });

// TELL OUR APP TO LISTEN ON PORT...
app.listen(3000, ()=>{
  console.log(`listening on port `, 3000)
});