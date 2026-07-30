function sum(left, right) {
  return left + right
}

function difference(left, right) {
  return left - right
}

function product(left, right) {
  return left * right
}

function quotient(left, right) {
  return left / right
}

function maximum(left, right) {
  return Math.max(left, right)
}

function minimum(left, right) {
  return Math.min(left, right)
}

module.exports = { sum, difference, product, quotient, maximum, minimum }
