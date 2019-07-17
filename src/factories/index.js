import cuid from 'cuid';

export const createAsk = ({
  id = cuid(),
  dateCreated = new Date(),
  demand = 'N/A',
  accepted = false,
} = {}) => ({ id, dateCreated, demand, accepted });
