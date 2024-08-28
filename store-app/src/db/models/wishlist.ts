import { ObjectId } from 'mongodb';
import { getMongoClientInstance } from '../config';

const DATABASE_NAME = 'h8-gc2-ecommerce';
const COLLECTION_WISHLIST = 'wishlist';

export interface WishlistModel {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type WishlistModelInput = Omit<WishlistModel, '_id'>;

export const getDB = async () => {
  const client = await getMongoClientInstance();

  const db = client.db(DATABASE_NAME);

  return db;
};

export const createWishlist = async (wishlist: WishlistModelInput) => {
  const db = await getDB();

  const modifiedWishlist: WishlistModelInput = {
    userId: new ObjectId(wishlist.userId),
    productId: new ObjectId(wishlist.productId),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const newWishlist = await db
    .collection(COLLECTION_WISHLIST)
    .insertOne(modifiedWishlist);

  return newWishlist;
};

export const deleteWishlist = async (id: string) => {
  const db = await getDB();
  const wishlistId = new ObjectId(id);

  const wishlist = await db.collection(COLLECTION_WISHLIST).deleteOne({
    _id: wishlistId,
  });

  return wishlist;
};
