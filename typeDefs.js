const {
    gql
} = require('apollo-server');

module.exports = gql `
type User {
    _id: ID
    name: String
    email: String
    picture: String
}
type pin {
    _id: ID
    createdAt: String
    title: String
    content: String
    image: String
    latitude: Float
    longitude: Float
    author: User
    comment: [Comment]
}

type Comment {
    text: String
    createdAt: String
    author: User
}

type Query {
    me: User
}
`