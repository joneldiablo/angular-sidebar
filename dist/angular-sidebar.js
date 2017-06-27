(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angular-sidebar.config', [])
      .value('angular-sidebar.config', {
          debug: true
      });

  // Modules
  
  angular.module('angular-sidebar.directives', []);
  
  
  
  
  angular.module('angular-sidebar',
      [
        'angular-sidebar.config',
        'angular-sidebar.directives'
      ]);

})(angular);

angular.module("angular-sidebar.directives").run(["$templateCache", function($templateCache) {$templateCache.put("angular-sidebar/directives/sidebar.tpl.html","<div class=\"angular-sidebar\"><div>{{title}}</div><ng-transclude></ng-transclude></div>");}]);
/**
 * Created by coichedid on 21/04/15.
 */
'use strict';
angular.module('angular-sidebar').directive('sidebar', [
	function () {
		return {
			//template: '<div></div>',
			templateUrl: '/modules/angular-sidebar/directives/sidebar.tpl.html',
			restrict: 'EA',
			transclude: true,
			replace: false,
			scope: { title: '@' },
			link: function postLink(scope, element, attrs) {
				// Sidebar directive logic
				// ...

				//element.text('this is the sidebar directive');
			}
		};
	}
]);