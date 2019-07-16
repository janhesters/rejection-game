export const createAskFixture = ({
  id = 'ask-123',
  demand = 'Get a FooBar',
  accepted = false,
} = {}) => ({ id, demand, accepted });
