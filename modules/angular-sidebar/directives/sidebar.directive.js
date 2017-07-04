/**
 * Created by coichedid on 21/04/15.
 */
'use strict';
angular.module('angular-sidebar').directive('ast', ["$compile", "$swipe",
	function ($compile, $swipe) {
		return {
			//template: '<div></div>',
			templateUrl: '/modules/angular-sidebar/directives/sidebar.tpl.html',
			restrict: 'EA',
			transclude: {
				'header': '?astHeader',
				'close': '?astClose',
				'footer': '?astFooter'
			},
			scope: {
				contentSelector: '@',
				position: '=?',
				display: '=?',
				show: '=?',
				swipeToOpen: '=?',
				mask: '=?'
			},
			replace: false,
			link: function postLink(scope, element, attrs) {
				scope.show = typeof scope.show === 'undefined' ? true : scope.show;
				scope.position = typeof scope.position !== 'undefined' ? (scope.position) : 'left';
				scope.display = typeof scope.display !== 'undefined' ? scope.display : 'overlay';
				scope.mask = typeof scope.mask !== 'undefined' ? scope.mask : false;
				scope.swipeToOpen = typeof scope.swipeToOpen === 'undefined' ? true : scope.swipeToOpen;
				scope.contentSelector = !scope.contentSelector ? 'body' : scope.contentSelector;
				scope.container = angular.element(document.querySelector(scope.contentSelector));
				var container = scope.container;
				var ast = angular.element(element[0].querySelector('.ast'));
				ast.on("click", function ($event) {
					$event.stopPropagation();
				});
				scope.$watch('position', function (value, oldValue) {
					container.removeClass("ast-" + oldValue);
					container.addClass("ast-" + value);
				}, true);
				scope.$watch('display', function (value, oldValue) {
					if (value === 'push' || value === 'reveal') {
						container.addClass('ast-fixed');

					} else {
						container.removeClass('ast-fixed');
					}
				}, true);
				scope.$watch('show', function watchShow(value, oldValue) {
					if (value) {
						container.removeClass('ast-close');
					} else {
						container.addClass('ast-close');
					}
				}, true);
			}
		};
	}
]);