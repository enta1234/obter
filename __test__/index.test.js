const obter = require('../index')

describe('merge function', () => {
  test('clear data low level', () => {
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
    for (const obj in targer) {
      expect(targer[obj]).not.toBeUndefined()
    }
  })
})

describe('clear function', () => {
  test('clear data low level', () => {
    const testObj = {
      a: 'A',
      b: undefined
    }
    obter.clear(testObj)
    for (const obj in testObj) {
      expect(testObj[obj]).not.toBeUndefined()
    }
  })

  // test('freeze object', () => {
  //   const testObj = Object.freeze({
  //     a: 'A',
  //     b: undefined
  //   })

  //   expect(obter.clear(testObj)).toThrow(TypeError)
  // })
})
