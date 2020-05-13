function merge (target, source) {
  if (typeof target !== 'object' && typeof source !== 'object') {
    throw new TypeError('target and source should be object.')
  } else if (Object.isFrozen(target) && Object.isSealed(target)) {
    throw new TypeError('target and source should be not frozen or sealed.')
  }

  for (const [key, value] of Object.entries(source)) {
    if (value instanceof Object) {
      _mergeDeepObject(target[key] = {}, value)
    } else if (typeof value !== 'undefined') {
      target[key] = value
    }
  }
}

function clear (source = {}) {
  if (typeof source !== 'object') {
    throw new TypeError('target and source should be object.')
  } else if (Object.isFrozen(source) && Object.isSealed(source)) {
    throw new TypeError('target and source should be not frozen or sealed.')
  }

  for (const prop in source) {
    if (prop instanceof Object) {
      _clearDeepObject(prop)
    } else if (typeof source[prop] === 'undefined') {
      delete source[prop]
    }
  }
}

module.exports = {
  merge,
  clear
}

function _mergeDeepObject (t, s) {
  for (const [key, value] of Object.entries(s)) {
    if (typeof value === 'object') {
      _mergeDeepObject(t[key] = {}, value)
    } else if (typeof value !== 'undefined') {
      t[key] = value
    }
  }
}

function _clearDeepObject (s) {
  for (const prop in s) {
    if (prop instanceof Object) {
      _clearDeepObject(prop)
    } else if (typeof s[prop] === 'undefined') {
      delete s[prop]
    }
  }
}
