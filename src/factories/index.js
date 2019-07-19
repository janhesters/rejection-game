import cuid from 'cuid';

const createQuestion = ({
  askee = 'Anonymous',
  id = cuid(),
  status = 'Unanswered',
  timestamp = new Date(),
  question = 'N/A',
} = {}) => ({ askee, id, status, timestamp, question });

const createState = ({
  loading = false,
  questions = [
    createQuestion({
      askee: 'JSCheerleader',
      question: 'Can you give me career advice?',
      status: 'Accepted',
    }),
    createQuestion({
      askee: 'Eric Elliott',
      question: 'Can you mentor me?',
      status: 'Accepted',
      timestamp: new Date('2019-07-01'),
    }),
    createQuestion({
      askee: 'Nader Dabit',
      question: 'Can you give me consulting work?',
      status: 'Rejected',
      timestamp: new Date('2019-07-13'),
    }),
    createQuestion({
      askee: 'Tristan Denyer',
      question: 'Can you hire me as a developer?',
    }),
    createQuestion({
      askee: 'Eric Schmidt',
      question: 'Can I be the CTO of Google?',
      status: 'Rejected',
      timestamp: new Date('2019-05-22'),
    }),
  ],
  auth = { user: { sub: 'user-abc' } },
} = {}) => ({ loading, questions, auth });

export { createQuestion, createState };
