---
layout: default
---

## ElementPosition.getCoordinates

> Calculate element's absolute position.
>
> This method's return value appears element's exact coordinates on your screen.

### Syntax

```js
ElementPosition.getCoordinates(target);
```

#### Parameters

<dl>
<dt>target</dt>
<dd>The HTML element you want to calculate.</dd>
</dl>

#### Return

<dl>
<dt>type</dt>
<dd>The object containing top/left/right/bottom properties.</dd>
</dl>

### Example
```js
var el = document.getElementById('id1');

window.addEventListener('scroll', function() {
    var pos = ElementPosition.getCoordinates(el);
    if (pos.bottom < 0) {
        console.log('Oh no! I cannot see that OTL.');
    }
});
```