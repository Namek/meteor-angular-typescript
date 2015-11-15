angular.module('recipes', [
	'angular-meteor',
	'ui.router',
])
.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', configureApp])
.controller('RecipesComponent', RecipesComponent)

function configureApp($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true)

	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('recipes', {
			url: '/',
			templateUrl: 'client/components/recipes/recipes.html',
			controller: 'RecipesComponent',
			controllerAs: 'vm'
		})
}