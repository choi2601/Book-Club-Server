import { gql } from 'apollo-server-koa';

export const ProductTypeDefs = gql`
  scalar Date

  type Meetings {
    order: Int
    endedAt: Date
    startedAt: Date
  }

  type Club {
    id: ID
    name: String
    type: String
    place: String
    coverUrl: String
    meetings: [Meetings]
    description: String
  }

  type Connection {
    name: String
  }

  type Product {
    club: Club
    price: Int
    leaders: [Connection]
    partners: [Connection]
  }

  type Query {
    products: [Product]
  }
`;
