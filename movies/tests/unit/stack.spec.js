import Stack from '@/stack'
describe('Stack', () => {
  it('Should constructs the stack with a given capacity', () => {
    const stack = new Stack(3)
    expect(stack.items).toEqual([])
    expect(stack.capacity).toBe(3)
  })
})
