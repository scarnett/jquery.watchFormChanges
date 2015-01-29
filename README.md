# jquery.watchFormChanges

// jquery.watchFormChanges v0.0.1
// by Scott Carnett -- scott.carnett@gmail.com

watchFormChanges - a simple jquery plugin to watch for form changes

## Installation

```html
<script type="text/javascript" src="jquery.watchFormChanges.js"></script>
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

## License:
jquery.watchFormChanges is Copyright © 2014 Scott Carnett and is licensed under the terms of the [GNU General Public License](http://opensource.org/licenses/GPL-2.0).