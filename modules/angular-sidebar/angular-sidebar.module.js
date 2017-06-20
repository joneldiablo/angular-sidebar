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
