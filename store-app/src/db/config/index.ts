import { MongoClient } from 'mongodb';

const connectionString = process.env.DATABASE_URI;

if (!connectionString) throw new Error('Connection string is not defined');

let client: MongoClient;

export const getMongoClientInstance = async () => {
  if (!client) {
    client = new MongoClient(connectionString);

    await client.connect();
  }

  return client;
};
