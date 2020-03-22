import {buildSchema} from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    author(id: Int!): Author
    authors: [Author]
    article(id: Int!): Article
    articles: [Article]
    comment(id: Int!): Comment
  },
  type Author {
    id: Int
    firstName: String
    lastName: String
    email: String
    birthday: Date
    bio: String
    createdAt: Date
    updatedAt: Date
    articles: [Article]
  },
  type Article {
    id: Int
    title: String
    content: String
    createdAt: Date
    updatedAt: Date
    author: Author
    comments: [Comment]
  },
  type Comment {
    id: Int
    content: String
    author: Author
    createdAt: Date
    updatedAt: Date
  },
  type Date {
    timestamp: Int
    date: String
    dateTime: String
  }
`);

export default schema;
