import Stack from '@/stack'

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack(3)
  })

  afterEach(() => {
    stack.items = []
  })

  it('Should construct the stack with a given capacity', () => {
    expect(stack.items).toEqual([])
    expect(stack.capacity).toBe(3)
  })

  it('Should have an isEmpty function that returns true if the stack is empty and false otherwise', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.items.push(2)
    expect(stack.isEmpty()).toBe(false)
  })

  it('Should have an isFull function that returns true if the stack is full and false otherwise', () => {
    expect(stack.isFull()).toBe(false)
    stack.items = [4, 5, 6]
    expect(stack.isFull()).toBe(true)
  })

  describe('Push', () => {
    it('Should add a new element on top of the stack', () => {
      stack.push(2)
      expect(stack.items[stack.items.length - 1]).toBe(2)
    })

    it('Should return the new element pushed at the top of the stack', () => {
      const elementPushed = stack.push(2)
      expect(elementPushed).toBe(2)
    })

    it('Should return full if one tries to push at the top of the stack while it is full', () => {
      stack.items = [1, 2, 3]
      const element = stack.push(4)
      expect(stack.items[stack.items.length - 1]).toBe(3)
      expect(element).toBe('Full')
    })
  })

  describe('Pop', () => {
    it('Should removes the last element at the top of a stack', () => {
      stack.items = [1, 2, 3]
      stack.pop()
      expect(stack.items).toEqual([1, 2])
    })

    it('Should returns the element that have been just removed', () => {
      stack.items = [1, 2, 3]
      const element = stack.pop()
      expect(element).toBe(3)
    })

    it('Should return Empty if one tries to pop an empty stack', () => {
      // By default, the stack is empty
      expect(stack.pop()).toBe('Empty')
    })
  })

  describe('Peek', () => {
    it('Should returns the element at the top of the stack', () => {
      stack.items = [1, 2, 3]
      const element = stack.peek()
      expect(element).toBe(3)
    })

    it('Should return Empty if one tries to peek an empty stack', () => {
      // By default, the stack is empty
      expect(stack.peek()).toBe('Empty')
    })
  })
})
