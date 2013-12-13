module.exports = createValidator

function createValidator(value, failureMessage) {

  function validate(key, keyDisplayName, object, cb) {

    var property = object[key]

    // num is NaN or not a number
    if (property !== value) return cb(null, failureMessage)

    // num is a number Success!
    return cb(null)

  }

  return validate

}