import jwt, { JwtPayload } from 'jsonwebtoken';
import * as jose from 'jose';

// ? kenapa harus as string?
const SECRET = process.env.JWT_SECRET as string;

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET);
};

export const verifyTokenJose = async <T>(token: string) => {
  const secretKey = new TextEncoder().encode(SECRET);
  const payloadJose = await jose.jwtVerify<T>(token, secretKey); // { _id: string }

  // payload: { _id: '66cdd504628ee53c8663e5a0', iat: 1724841526 },
  // console.log(payloadJose, 'Payload jose');

  return payloadJose.payload;
};
