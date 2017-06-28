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
			transclude: {
				'header': '?astHeader',
				'body': 'astBody',
				'footer': '?astFooter'
			},
			replace: false,
			scope: {
				widths: '=',
				heights: '=',
			},
			link: function postLink(scope, element, attrs) {
				scope.hh = element[0].querySelector(".ast-header").offsetHeight;
				scope.hf = element[0].querySelector(".ast-footer").offsetHeight;
				console.log(scope.hh, scope.hf);
				// Sidebar directive logic
				// ...

				//element.text('this is the sidebar directive');
			}
		};
	}
]);
angular.module("angular-sidebar.directives", []).run(["$templateCache", function($templateCache) {$templateCache.put("/modules/angular-sidebar/directives/sidebar.tpl.html","<div class=\"ast\"><div class=\"ast-header\" ng-transclude=\"header\"></div><div class=\"ast-body\" ng-transclude=\"body\"></div><div class=\"ast-footer\" ng-transclude=\"footer\"></div></div>");}]);