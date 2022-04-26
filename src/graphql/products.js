const { gql } = require('apollo-server-koa');

// scalar Date

export const typeDefs = gql`
  type Meetings {
    order: Int
    endedAt: String
    startedAt: String
  }

  type Club {
    id: String
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

export const resolvers = {
  Query: {
    products: () => [
      {
        club: {
          id: 'a1a9a197-904b-42f6-afae-ef568951abab',
          name: '시작 - 이야기',
          type: '클럽장 클럽',
          place: '온라인',
          coverUrl:
            'https://image.trevari.co.kr/file/69c8659a-973f-4fea-bc79-e8a4ab30cbe2.%E1%84%91%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A5%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%A1%E1%84%80%E1%85%A9%E1%84%87%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8-%E1%84%85%E1%85%B5%E1%84%8E%E1%85%B5%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%83%E1%85%B3.png',
          meetings: [
            {
              order: 1,
              endedAt: '2020-10-10',
              startedAt: '2020-02-11',
            },
          ],
          description: 'test query',
        },
        price: 2000,
        leaders: [{ name: 'choi' }],
        partners: [{ name: 'lin' }],
      },
    ],
  },
};
