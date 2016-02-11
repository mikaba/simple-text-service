Simple Text Service
===================

This module is a very basic implementation of a TextService. Here this is meant to deliver texts from a text base
which are distinguished by a unique key. It's like a MessageSource in Spring in the Java world.

The texts/messages are stored in a JSON structure which then can be retrieved via the TextService service,
or, more practical, via filter.

Prerequisites
-------------

- Angular

Setup And Usage
---------------

- Reference to simple-text-service.js
- Import the module

```javascript
angular.module('myModule', ['simple-text-service']);
```

- Fill the JSON via config block in your app:

```javascript
app.config(['TextServiceProvider', function (TextServiceProvider) {
    TextServiceProvider.textBase = {
        'test.message.key': 'Hello world!'
    };
}]);
```


- Use the service in in your app

```javascript
app.module('myModule').controller('Ctrl', ['$scope', 'TextService', function ($scope, TextService) {
    $scope.text = TextService.getText('test.message.key');
}]);
```

- or the filter

```html
<div>
    <span>{{ 'test.message.key' | textService }}</span>
</div>
```
