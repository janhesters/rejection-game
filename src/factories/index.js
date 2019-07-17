import cuid from 'cuid';

export const createQuestion = ({
  askee = 'Anonymous',
  id = cuid(),
  status = 'Unanswered',
  timestamp = new Date(),
  question = 'N/A',
} = {}) => ({ askee, id, status, timestamp, question });
