# angular-sidebar

Crea una etiqueta `<ast>` y se pueden agregar dentro: `<ast-header>`, `<ast-body>` y `<ast-footer>`.

TODO:

- Responsive
- Tamaño personalizable
- Animaciones
- asegurar que se pueden agregar clases extras

```html
  <div ng-controller="TesterCtrl">
    <ast display="display" position="position" swipe-to-open="swipeToOpen" mask="mask" content-selector="#container" show="showAst">
      <ast-header></ast-header>
      <ast-body></ast-body>
      <ast-footer></ast-footer>
    </ast>
    <div id="container">
      show: <input type="checkbox" ng-model="showAst" />({{showAst}}) swipeToOpen: <input type="checkbox" ng-model="swipeToOpen"
      />({{swipeToOpen}}) mask: <input type="checkbox" ng-model="mask" />({{mask}})
      <select ng-model="display" ng-init="displayOptions = ['reveal','push','overlay']">
        <option ng-repeat="opt in displayOptions" ng-value="opt">{{opt}}</option>
      </select> ({{display}})
      <select ng-model="position" ng-init="positionOptions = ['left','right']">
        <option ng-repeat="opt in positionOptions" ng-value="opt">{{opt}}</option>
      </select> ({{position}})
    </div>
  </div>
```