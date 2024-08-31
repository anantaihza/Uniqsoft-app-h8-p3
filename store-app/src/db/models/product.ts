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

export const getProducts = async (
  queryPage: string | null,
  querySearch: string | null
) => {
  const db = await getDB();

  const limit = 8;
  let offset: number;

  let products: ProductModel[];

  if (querySearch || querySearch === "") {
    let search = {
      name: {
        $regex: querySearch,
        $options: 'i',
      },
    };

    products = (await db
      .collection(COLLECTION_PRODUCT)
      .find(search)
      .toArray()) as ProductModel[];
    
  } else {
    if (!queryPage) {
      offset = 0;
    } else {
      offset = (Number(queryPage) - 1) * limit;
    }

    products = (await db
      .collection(COLLECTION_PRODUCT)
      .find()
      .skip(offset)
      .limit(8)
      .toArray()) as ProductModel[];
  
  }

  // console.log(products.length);
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

export const getNewProducts = async () => {
  const db = await getDB();
  const products = (await db
    .collection(COLLECTION_PRODUCT)
    .find()
    .sort({ price: -1 })
    .limit(4)
    .toArray()) as ProductModel[];

  return products;
};
