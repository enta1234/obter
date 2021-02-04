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

/**
 * Clear undefined object support nested.
 * @param {object} source - The Source of object to clear
 * @returns {object} a new object of source
 */
function clear (source = {}) {
  if (typeof source !== 'object') {
    throw new TypeError('target and source should be object.')
  } else {
    source = JSON.parse(JSON.stringify(source))
    source = clearEmpties(source)
  }
  return source
}

function clearEmpties (oo) {
  const o = JSON.parse(JSON.stringify(oo))
  for (var k in o) {
    if (!o[k] || typeof o[k] !== 'object') {
      continue
    }
    clearEmpties(o[k])
    if (Object.keys(o[k]).length === 0) {
      delete o[k]
    }
  }
  return o
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

// function _clearDeepObject (s) {
//   for (const prop in s) {
//     if (s[prop] instanceof Object) {
//       _clearDeepObject(s[prop])
//     } else if (typeof s[prop] === 'undefined') {
//       delete s[prop]
//     }
//   }
// }
