Meteor.startup(function() {
    if (Recipes.find().count() === 0) {
        seedRecipes()
    }
})

function seedRecipes() {
    var recipes = JSON.parse(Assets.getText('Recipes.json'))

    for (var i = 0; i < recipes.length; ++i) {
        Recipes.insert(recipes[i])
    }

    // and one more recipe...
    let recipe: Recipe = {
        name: 'Recipe 6',
        text: 'No text here, sorry',
        rating: 5,
        products: ['product 7']
    }
    Recipes.insert(recipe)
}