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
            'angular-sidebar.directives',
            'ngTouch'
        ]);

})(angular);

angular.module("angular-sidebar.directives", []).run(["$templateCache", function($templateCache) {$templateCache.put("/modules/angular-sidebar/directives/sidebar.tpl.html","<div class=\"ast-wrap\" ng-class=\"{mask:mask}\" ng-show=\"show\" ng-click=\"show=false\"><div class=\"ast\" ng-swipe-right=\"swipeEvent($event, \'r\')\" ng-swipe-left=\"swipeEvent($event, \'l\')\" ng-class=\"[display, position]\"><header class=\"ast-header\"><div ng-transclude=\"header\"><h4 style=\"text-align: center; margin: 16px 0\">header</h4></div><div class=\"ast-close\" ng-transclude=\"close\"><span ng-click=\"show = false\" style=\"text-align: center; width: 100%; display: block; padding: 26px 16px; box-sizing: border-box; cursor: pointer\">X</span></div></header><aside class=\"ast-body\" ng-transclude></aside><footer class=\"ast-footer\" ng-transclude=\"footer\"><h4 style=\"text-align: center; margin: 11px 0\">footer</h4></footer></div></div><div ng-show=\"!show && swipeToOpen\" ng-swipe-right=\"swipeEvent($event, \'r\')\" ng-swipe-left=\"swipeEvent($event, \'l\')\" class=\"ast-swipe-show\" ng-class=\"position\"></div>");}]);
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
				scope.swipeEvent = function ($event, dir) {
					if (scope.swipeToOpen) {
						if (element[0].querySelector(".ast-wrap").contains($event.target)) {
							if (dir === 'r' && scope.position === 'right') {
								scope.show = false;
							}
							if (dir === 'l' && scope.position === 'left') {
								scope.show = false;
							}
						} else {
							if (dir === 'r' && scope.position === 'left') {
								scope.show = true;
							}
							if (dir === 'l' && scope.position === 'right') {
								scope.show = true;
							}
						}
					}
					//
				}
			}
		};
	}
]);