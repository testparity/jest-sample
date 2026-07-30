const { applyDiscount } = require('../src/discount')
const { maximum, product, quotient } = require('../src/sum')

describe('applyDiscount', () => {
  it('applies the standard discount', () => {
    const subtotal = maximum(product(5, 20), quotient(100, 2))

    expect(applyDiscount(subtotal)).toBe(90)
  })
})
