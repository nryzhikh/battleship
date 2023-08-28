import { jestTest } from '../index'

describe('jestTest', () => {
  it("should return 'jest test'", () => {
    expect(jestTest()).toEqual('jest test')
  })
})
