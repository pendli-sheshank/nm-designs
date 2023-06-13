import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerShippingCartItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingCartItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customer_id: string;
  readonly Customers?: (Customers | null)[] | null;
  readonly product_id?: string | null;
  readonly Products?: (Products | null)[] | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShippingCartItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShippingCartItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customer_id: string;
  readonly Customers: AsyncCollection<Customers>;
  readonly product_id?: string | null;
  readonly Products: AsyncCollection<Products>;
  readonly quantity?: number | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShippingCartItem = LazyLoading extends LazyLoadingDisabled ? EagerShippingCartItem : LazyShippingCartItem

export declare const ShippingCartItem: (new (init: ModelInit<ShippingCartItem>) => ShippingCartItem) & {
  copyOf(source: ShippingCartItem, mutator: (draft: MutableModel<ShippingCartItem>) => MutableModel<ShippingCartItem> | void): ShippingCartItem;
}

type EagerProductCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code?: number | null;
  readonly description?: string | null;
  readonly parent_code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly code?: number | null;
  readonly description?: string | null;
  readonly parent_code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductCategory = LazyLoading extends LazyLoadingDisabled ? EagerProductCategory : LazyProductCategory

export declare const ProductCategory: (new (init: ModelInit<ProductCategory>) => ProductCategory) & {
  copyOf(source: ProductCategory, mutator: (draft: MutableModel<ProductCategory>) => MutableModel<ProductCategory> | void): ProductCategory;
}

type EagerProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Products, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name: string;
  readonly product_description?: string | null;
  readonly category_id: string;
  readonly price: number;
  readonly product_image?: (string | null)[] | null;
  readonly ProductCategory: ProductCategory;
  readonly shippingcartitemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productsProductCategoryId: string;
}

type LazyProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Products, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly product_name: string;
  readonly product_description?: string | null;
  readonly category_id: string;
  readonly price: number;
  readonly product_image?: (string | null)[] | null;
  readonly ProductCategory: AsyncItem<ProductCategory>;
  readonly shippingcartitemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productsProductCategoryId: string;
}

export declare type Products = LazyLoading extends LazyLoadingDisabled ? EagerProducts : LazyProducts

export declare const Products: (new (init: ModelInit<Products>) => Products) & {
  copyOf(source: Products, mutator: (draft: MutableModel<Products>) => MutableModel<Products> | void): Products;
}

type EagerCustomers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly mobile: string;
  readonly shippingcartitemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly mobile: string;
  readonly shippingcartitemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customers = LazyLoading extends LazyLoadingDisabled ? EagerCustomers : LazyCustomers

export declare const Customers: (new (init: ModelInit<Customers>) => Customers) & {
  copyOf(source: Customers, mutator: (draft: MutableModel<Customers>) => MutableModel<Customers> | void): Customers;
}