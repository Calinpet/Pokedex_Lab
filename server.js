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
    pokemon[req.params.indexOfPokemonArray].name = req.body.name;
    pokemon[req.params.indexOfPokemonArray].img = req.body.img;
    pokemon[req.params.indexOfPokemonArray].type = req.body.type;
    pokemon[req.params.indexOfPokemonArray].stats.hp = req.body.hp;
    pokemon[req.params.indexOfPokemonArray].stats.attack = req.body.attack;
    pokemon[eq.params.indexOfPokemonArray].stats.defence = req.body.defense;
    pokemon[req.params.indexOfPokemonArray].stats.spattack = req.body.spattack;
    pokemon[req.params.indexOfPokemonArray].stats.spdefense = req.body.spdefense;
    pokemon[req.params.indexOfPokemonArray].stats.speed = req.body.speed;
    pokemon[req.params.indexOfPokemonArray] = req.body
  res.redirect("/pokemon")
});

//CREATE
app.post("/pokemon", (req, res)=>{
  pokemon.push({
    name: req.body.name,
    image: req.body.img,
    type: [req.body.type],
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  })

  res.redirect("/pokemon")
});

//EDIT
app.get("/pokemon/:indexOfPokemonArray/edit", (req, res) => {
  res.render("edit.ejs", {
    name: pokemon[req.params.indexOfPokemonArray].name,
    img: pokemon[req.params.indexOfPokemonArray].img,
    type: pokemon[req.params.indexOfPokemonArray].type,
    hp: pokemon[req.params.indexOfPokemonArray].stats.hp,
    attack: pokemon[req.params.indexOfPokemonArray].stats.attack,
    defense: pokemon[req.params.indexOfPokemonArray].stats.defense,
    spattack: pokemon[req.params.indexOfPokemonArray].stats.spattack,
    spdefense: pokemon[req.params.indexOfPokemonArray].stats.spdefense,
    speed: pokemon[req.params.indexOfPokemonArray].stats.speed,
    index: req.params.indexOfPokemonArray
  });
});

//SHOW
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', { allPokemon: pokemon[req.params.id] });
  });

// TELL OUR APP TO LISTEN ON PORT...
app.listen(3000, ()=>{
  console.log(`listening on port `, 3000)
});