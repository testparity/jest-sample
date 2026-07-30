const { difference, sum } = require('../src/sum')

test('covers the core arithmetic operations', () => {
  expect(sum(2, 3)).toBe(5)
  expect(difference(7, 3)).toBe(4)
})
