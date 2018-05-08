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

  type DirectMessageResponce {
    ok: Boolean!
    errors: [Error!]
  }

  type Mutation {
    createMessage(receiverId:Int!, text:String!):DirectMessageResponce!
  }

`;