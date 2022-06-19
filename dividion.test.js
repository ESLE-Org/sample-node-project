const { getDivision } = require('./index')

// eslint-disable-next-line no-undef
test('division 4 / 2 to equal 2', () => {
  expect(getDivision(4, 2)).toBe(2)
})

test('division  2 / 0 to equal Infinity', () => {
  expect(getDivision(2, 0)).toBe(Infinity)
})

test('division  0 / 2 to equal 0', () => {
  expect(getDivision(0, 2)).toBe(0)
})
