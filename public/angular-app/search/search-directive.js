angular.module('directivewalkthrough').directive('searchCustomer', searchCustomer);

function searchCustomer(){
	return{
		restrict: 'E',
		// template:'<h2>Inside the searchStock</h2>'
		templateUrl: 'angular-app/search/search-directive.html',
		controller: SearchController,
		controllerAs: 'vm'
	}
}