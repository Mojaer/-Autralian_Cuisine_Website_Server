const express = require('express')
const app = express();

const port = 4000;



const chefs = require('./Resources/Chefs-Australia.json')
const recipes = require('./Resources/recipes.json')

app.get('/', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {

    const id = req.params.id
    const selectedChef = chefs.find((chef) => chef.id == id)
    res.send(selectedChef)
})

app.get('/chefs/recipe/:id', (req, res) => {

    const id = req.params.id
    const chefRecipes = recipes.filter((recipe) => recipe.chef_id == id)
    res.send(chefRecipes)
})

app.listen(port, () => {
    console.log(`the app is running at http://localhost:${port}`)
})