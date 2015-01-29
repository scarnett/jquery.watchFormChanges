# jquery.watchFormChanges

jquery.watchFormChanges - a simple jquery plugin to watch for form changes

## Installation

Load the javascript
```html
<body>
	...
	<script type="text/javascript" src="jquery.watchFormChanges.js"></script>
</body>
```

## Usage:

```javascript
$('#form').watchFormChanges();
$('#form,#form2').watchFormChanges();
```

## Options:

Here is list of all available

| Option | Default | Type | Description
|--------|---------|------|------------
| `submit` | `input[type=submit]` | string | Selector for the form submit button
| `fieldSelector` | `:input:not(input[type=submit]):not(input[type=button])` | string | Selector for the fields to target
| `fieldEvents` | `change keyup propertychange input` | string | Events to watch for

## Changelog

`1.0.0` / `01.29.2015`

- Plugin release

## License:
Copyright (c) 2015 Scott Carnett  
Licensed under the [The MIT License](http://opensource.org/licenses/MIT)