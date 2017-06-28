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