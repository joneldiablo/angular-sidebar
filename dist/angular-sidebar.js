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

angular.module("angular-sidebar.directives").run(["$templateCache", function($templateCache) {$templateCache.put("angular-sidebar/directives/sidebar.tpl.html","<b>hola mundo</b><div>varios divs con saltos de línea!!!</div><div>comprobar compresión!!</div>");}]);
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
			replace: false,
			scope: false,
			link: function postLink(scope, element, attrs) {
				// Sidebar directive logic
				// ...

				//element.text('this is the sidebar directive');
			}
		};
	}
]);