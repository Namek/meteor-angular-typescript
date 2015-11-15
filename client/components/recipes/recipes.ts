class RecipesComponent {
	recipes: RecipesCollection

	constructor(
		private $scope: ng.IScope,
		private $meteor: ng.meteor.IMeteorService,
		private $log: ng.ILogService
	) {
		let vm: RecipesComponent = this
		vm.recipes = $meteor.collection(Recipes).subscribe('best_recipes')
	}
}
RecipesComponent.$inject = ['$scope', '$meteor', '$log']
this.RecipesComponent = RecipesComponent