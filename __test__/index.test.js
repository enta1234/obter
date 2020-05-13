const obter = require('../index')

describe('merge function', () => {
  test('clear data', () => {
    const targer = {
      a: 'A'
    }

    const source = {
      a: 'B',
      b: undefined,
      c: 123,
      d: undefined,
      e: null,
      f: {
        a: 'a',
        b: undefined,
        c: {
          a: 1,
          b: {
            a: 'a'
          }
        }
      }
    }

    obter.merge(targer, source)
    for (const obj in targer) {
      expect(targer[obj]).not.toBeUndefined()
    }
  })
})

describe('clear function', () => {
  test('clear data low level', () => {
    const testObj = {
      a: 'A',
      b: undefined,
      c: {
        a: 'a',
        b: undefined,
        c: {
          a: 123,
          b: undefined
        }
      }
    }
    obter.clear(testObj)
    for (const obj in testObj) {
      expect(testObj[obj]).not.toBeUndefined()
    }
  })
})
