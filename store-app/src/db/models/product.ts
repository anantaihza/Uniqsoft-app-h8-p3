import { ObjectId } from 'mongodb';
import { getMongoClientInstance } from '../config';

const DATABASE_NAME = 'h8-gc2-ecommerce';
const COLLECTION_PRODUCT = 'products';

export interface ProductModel {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const getDB = async () => {
  const client = await getMongoClientInstance();

  const db = client.db(DATABASE_NAME);

  return db;
};

export const getProducts = async () => {
  const db = await getDB();

  const products = (await db
    .collection(COLLECTION_PRODUCT)
    .find()
    .toArray()) as ProductModel[];

  return products;
};

export const getProductById = async (id: string) => {
  const db = await getDB();
  const productId = new ObjectId(id);

  const product = (await db
    .collection(COLLECTION_PRODUCT)
    .findOne({ _id: productId })) as ProductModel;

  return product;
};
