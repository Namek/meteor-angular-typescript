Meteor.publish('best_recipes', function() {
    return Recipes.find({rating: 5})
})