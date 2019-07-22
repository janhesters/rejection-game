// eslint-disable
// this is an auto generated file. This will be overwritten

export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    askee
    status
    createdAt
    question
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      askee
      status
      createdAt
      question
    }
    nextToken
  }
}
`;
