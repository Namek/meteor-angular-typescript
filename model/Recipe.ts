interface Recipe {
    _id?: string
    name: string
    text: string
    products: Array<string>,
    rating: number
}

declare var Recipes: Mongo.Collection<Recipe>
Recipes = new Mongo.Collection<Recipe>('recipes')

type RecipesCollection = angular.meteor.AngularMeteorCollection2<Recipe, Recipe>
