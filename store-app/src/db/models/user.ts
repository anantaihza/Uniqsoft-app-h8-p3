import { ObjectId } from 'mongodb';
import { getMongoClientInstance } from '../config';
import { hashPassword } from '../helpers/bcrypt';

const DATABASE_NAME = 'h8-gc2-ecommerce';
const COLLECTION_USER = 'users';

// Di export bisa di pakai di tempat lain
export interface UserModel {
  _id: ObjectId;
  name?: string;
  username: string;
  email: string;
  password: string;
}

// Untuk input tidak ada _id, Omit hanya bisa di type
export type UserModelInput = Omit<UserModel, '_id'>;

export const getDB = async () => {
  const client = await getMongoClientInstance();

  const db = client.db(DATABASE_NAME);

  return db;
};

export const createUser = async (user: UserModelInput) => {
  const db = await getDB();

  const modifiedUser: UserModelInput = {
    ...user,
    password: hashPassword(user.password),
  };

  const newUser = await db.collection(COLLECTION_USER).insertOne(modifiedUser);

  return newUser;
};

export const getUserByUsername = async (username: string) => {
  const db = await getDB();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ username: username })) as UserModel;

  return user;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDB();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ email: email })) as UserModel;

  return user;
};
