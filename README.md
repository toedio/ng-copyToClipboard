# ngCopyToClipboard

An AngularJS directive to trigger a method that copy parameter

## The problem

Copy text to clipboard

## The solution

```html
<input type="text" ng-model="model" ng-copy-to-clipboard="{{sometext}}" after-copy="functionAfterCopy()" required>
```

## How to install it

#### Bower:
- Run

```bash
bower install --save ng-copyToClipboard
```

- HTML

```html
<script src="bower_components/angular.js"></script>
<script src="bower_components/ng-copyToClipboard/dist/ng-copyToClipboard.min.js"></script>
```

- AngularJS:

```javascript
var app = angular.module('app', ['ngCopyToClipboard']);
```

#### NPM:
- Run
```bash
npm install --save ng-copytoclipboard
```

- HTML:

```html
<script src="node_modules/angular.js"></script>
<script src="node_modules/ng-copyToClipboard/dist/ng-copyToClipboard.min.js"></script>
```

- AngularJS:

```javascript
var app = angular.module('app', ['ngCopyToClipboard']);
```


## How to use it

Just add the ```ngCopyToClipboard``` attribute and a method to be called when click in html tag:

```html
<input type="text" ng-model="model" ng-copy-to-clipboard="{{sometext}}" required>
```

You can also add the optional attribute ```after-copy``` to call a function after copy

```html
<input type="text" ng-model="model" ng-copy-to-clipboard="{{sometext}}" after-copy="functionAfterCopy()" required>
```

## License

See the [LICENSE](https://github.com/matheusml/ng-valid/blob/master/LICENSE) file.
