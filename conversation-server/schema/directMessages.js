export default `
  type DirectMessages {
    id:Int!
    text: String!
    sender: User!
    receiverId:Int!
  }

type Query {
    directMessages:[DirectMessages!]!
  }

  type Mutation {
    createMessage(receiverId:Int!, text:String!):Boolean!
  }

`;