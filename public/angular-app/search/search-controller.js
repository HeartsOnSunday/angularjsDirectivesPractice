angular.module("directivewalkthrough").controller('SearchController', SearchController);

function SearchController() {
	var vm = this;

	console.log('inside searchController', vm);
	vm.title ='Inside the SearchController';
	
	vm.customers = [{
			firstName: 'Josh',
			lastName: 'Bristol'
		},
		{
			firstName: 'John',
			lastName: 'Smith'
		},
		{
			firstName: 'Nick',
			lastName: 'Johnson'
		},
		{
			firstName: 'Sarah',
			lastName: 'Rogers'
		},
		{
			firstName: 'Rachel',
			lastName: 'Roberts'
		}
	];


	vm.names = ['Alex', 'Josh', 'Matt', 'Alex']


}