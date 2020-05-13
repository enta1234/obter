function merge (target, source) {
  if (typeof target !== 'object' && typeof source !== 'object') {
    throw new TypeError('target and source should be object.')
  } else if (Object.isFrozen(target) && Object.isSealed(target)) {
    throw new TypeError('target and source should be not frozen or sealed.')
  }

  for (const [key, value] of Object.entries(source)) {
    if (typeof value !== 'undefined') {
      target[key] = value
    }
  }
}

/**
 * @description Do not support deep object.
 * @param {Object} source object for clear undefined.
 */
function clear (source = {}) {
  if (typeof source !== 'object') {
    throw new TypeError('target and source should be object.')
  } else if (Object.isFrozen(source) && Object.isSealed(source)) {
    throw new TypeError('target and source should be not frozen or sealed.')
  }

  for (const prop in source) {
    if (typeof source[prop] === 'undefined') delete source[prop]
  }
}

module.exports = {
  merge,
  clear
}