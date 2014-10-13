# Callback ops

Just a few callback wrappers to abstract out common result or error wrangling code.


## Installation

```
npm install callback-ops
```


## Usage

```js
var co = require('callback-ops');
```


### return(results..., callback)

*Alias:* result.

Overwrites return value(s) passed to a callback. Errors are propagated unchanged.

```js
function insertLinks(links, callback) {
    // Create query
    var query = db.insert('link', links);
    // Run query, but ignore its result, pass number or links inserted instead
    query.run(co.return(links.length, callback));
}
```

Can be used to completely strip results:

```js
// Run query, but don't pass it result to callback
query.run(co.return(callback));
```

### select(keys..., callback)

Select part of result passed to callback.
`keys` could be strings for object properties or numbers for array indexes.

```js
// Pass func2 result to callback
async.serial([func1, func2, func3], co.select(1, callback))

// Select .rows[0].name from result before passing to callback
client.query('select name from user', [],
    co.select('rows', 0, 'name', callback))
```


### fallback(defaultValue, callback)

Passes default to callback instead of error.
