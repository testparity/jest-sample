const { applyDiscount } = require('../src/discount')

describe('applyDiscount', () => {
  it('applies the standard discount', () => {
    expect(applyDiscount(100)).toBe(90)
  })
})
