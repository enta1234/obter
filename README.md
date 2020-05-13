# used
all function do not support deep object.

### merge data

```js
  const obter = require('obter')

  const targer = {
      a: 'A'
    }

    const source = {
      a: 'B',
      b: undefined,
      c: 123,
      d: undefined,
      e: null
    }

    obter.merge(targer, source)
    // a {a: 'B', c: 123, e: null}
```

### clear data

```js
  const obter = require('obter')

  const testObj = {
      a: 'A',
      b: undefined
  }
  obter.clear(testObj)
    // a {a: 'A'}
```
