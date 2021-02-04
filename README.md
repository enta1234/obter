# used
all function do support deep object.

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
      b: undefined,
      c: {
        a: 1,
        b: {
          a: {},
          b: true'
        },
        c: {}
      },
      d: {}
  }
  const rObter = obter.clear(testObj)
  // rObter = {a: 'A', c: {a: 1, b: { b: true }}}
```

### changelog

 * 1.2.2 - support nested empty object
 * 1.2.0 - support deep object
 * 1.0.1 - added README.md
 * 1.0.0 - init