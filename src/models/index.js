// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ShippingCartItem, ProductCategory, Products, Customers } = initSchema(schema);

export {
  ShippingCartItem,
  ProductCategory,
  Products,
  Customers
};