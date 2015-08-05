# bdp

(Birth-death process)[https://en.wikipedia.org/wiki/Birth%E2%80%93death_process]

### Install
```npm install bdp```

### Example:

```javascript
var bdp = require('bdp');
var model = new bdp.BDP([5,4,2], [4,5,10]);
for(var i = 0;i < 4;++i) {
    console.log(model.probability(i));
}
```

### LICENCE
MIT
