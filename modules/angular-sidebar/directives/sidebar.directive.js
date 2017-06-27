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