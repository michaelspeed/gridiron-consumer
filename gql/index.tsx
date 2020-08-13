import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
};

export type Administrator = {
  __typename?: 'Administrator';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  emailAddress: Scalars['String'];
  type: AdministratorEnum;
  user: User;
};


export enum AdministratorEnum {
  Superadmin = 'SUPERADMIN',
  Staff = 'STAFF'
}

export type Asset = {
  __typename?: 'Asset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  type: Scalars['String'];
  mimeType: Scalars['String'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  fileSize: Scalars['Float'];
  source: Scalars['String'];
  preview: Scalars['String'];
  focalPoint: Scalars['JSONObject'];
};


export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isRoot: Scalars['Boolean'];
  inMenu: Scalars['Boolean'];
  position: Scalars['Float'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  description: Scalars['String'];
  children: Array<Collection>;
  products: Array<Product>;
  seo: Seo;
};

export type Facet = {
  __typename?: 'Facet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  code: Scalars['String'];
};

export type FacetValue = {
  __typename?: 'FacetValue';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  product: Array<Product>;
  facet: Facet;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productName: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  collection?: Maybe<Collection>;
  options: Array<ProductOptionGroup>;
  featuredAsset: Asset;
  facets: Array<FacetValue>;
  assets?: Maybe<Array<ProductAsset>>;
  variants: Array<ProductVariant>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  password: Scalars['String'];
  verified: Scalars['Boolean'];
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  administrator: Administrator;
  vendor: Vendor;
  delivery: Delivery;
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  vendorName: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
};

export type TaxRate = {
  __typename?: 'TaxRate';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  value: Scalars['Float'];
  enabled: Scalars['Boolean'];
};

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  storeName: Scalars['String'];
  phoneNumber: Scalars['String'];
  officialemail: Scalars['String'];
  zipcode: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
  GSTIN: Scalars['String'];
  singleStore: Scalars['Boolean'];
  rentalStore: Scalars['Boolean'];
  channelMarkets: Scalars['Boolean'];
  type: StoreTypeEnum;
};

export enum StoreTypeEnum {
  Default = 'DEFAULT',
  Vendor = 'VENDOR'
}

export type Seo = {
  __typename?: 'Seo';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  urlKey: Scalars['String'];
  metatitle: Scalars['String'];
  metakeywords?: Maybe<Array<Scalars['String']>>;
  metadesc: Scalars['String'];
};

export type ProductAsset = {
  __typename?: 'ProductAsset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  product: Product;
  asset: Asset;
};

export type StockKeeping = {
  __typename?: 'StockKeeping';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
  available_quantity: Scalars['Float'];
  threshold: Scalars['Float'];
  multiple: Scalars['Boolean'];
  backorder: Scalars['Boolean'];
  stockstatus: Scalars['Boolean'];
  sku: Scalars['String'];
  type: Scalars['String'];
  variant: ProductVariant;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  dum_price: Scalars['Float'];
  enabled: Scalars['Boolean'];
  sku: Scalars['String'];
  name: Scalars['String'];
  product: Product;
  trackInventory: Scalars['Boolean'];
  asset: ProductVariantAsset;
  price?: Maybe<Array<ProductVariantPrice>>;
  specs: ProductVariantSpecs;
  seo?: Maybe<Seo>;
  stock: Array<StockKeeping>;
};

export type ProductVariantAsset = {
  __typename?: 'ProductVariantAsset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  asset: Asset;
  variant: ProductVariant;
};

export type ProductVariantPrice = {
  __typename?: 'ProductVariantPrice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  price: Scalars['Float'];
  taxIncluded: Scalars['Boolean'];
  tax: TaxRate;
  variant: ProductVariant;
  store: Store;
};

export type ProductOptionGroup = {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
};

export type ProductVariantSpecs = {
  __typename?: 'ProductVariantSpecs';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  specs: Scalars['JSON'];
  variant: ProductVariant;
};


export type BillingAgreementRequest = {
  __typename?: 'BillingAgreementRequest';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  state: BillingAgreementState;
};

export enum BillingAgreementState {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  targetId: Scalars['String'];
  single?: Maybe<Scalars['JSON']>;
  list?: Maybe<Array<Scalars['String']>>;
  pageType: PageType;
  pageCategory: PageCategory;
};

export enum PageType {
  List = 'LIST',
  Single = 'SINGLE'
}

export enum PageCategory {
  Home = 'HOME',
  Category = 'CATEGORY',
  Singleprod = 'SINGLEPROD',
  Prodvariant = 'PRODVARIANT'
}

export type Delivery = {
  __typename?: 'Delivery';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type AssetCountAggregate = {
  __typename?: 'AssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  mimeType?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  fileSize?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Int']>;
};

export type AssetSumAggregate = {
  __typename?: 'AssetSumAggregate';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
};

export type AssetAvgAggregate = {
  __typename?: 'AssetAvgAggregate';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
};

export type AssetMinAggregate = {
  __typename?: 'AssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

export type AssetMaxAggregate = {
  __typename?: 'AssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

export type AssetFeaturedsCountAggregate = {
  __typename?: 'AssetFeaturedsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type AssetFeaturedsMinAggregate = {
  __typename?: 'AssetFeaturedsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AssetFeaturedsMaxAggregate = {
  __typename?: 'AssetFeaturedsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AssetProductAssetsCountAggregate = {
  __typename?: 'AssetProductAssetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type AssetProductAssetsMinAggregate = {
  __typename?: 'AssetProductAssetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AssetProductAssetsMaxAggregate = {
  __typename?: 'AssetProductAssetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionCountAggregate = {
  __typename?: 'CollectionCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  isRoot?: Maybe<Scalars['Int']>;
  inMenu?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionSumAggregate = {
  __typename?: 'CollectionSumAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionAvgAggregate = {
  __typename?: 'CollectionAvgAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionMinAggregate = {
  __typename?: 'CollectionMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionMaxAggregate = {
  __typename?: 'CollectionMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionChildrenCountAggregate = {
  __typename?: 'CollectionChildrenCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  isRoot?: Maybe<Scalars['Int']>;
  inMenu?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionChildrenSumAggregate = {
  __typename?: 'CollectionChildrenSumAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionChildrenAvgAggregate = {
  __typename?: 'CollectionChildrenAvgAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionChildrenMinAggregate = {
  __typename?: 'CollectionChildrenMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionChildrenMaxAggregate = {
  __typename?: 'CollectionChildrenMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionProductsCountAggregate = {
  __typename?: 'CollectionProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionProductsMinAggregate = {
  __typename?: 'CollectionProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionProductsMaxAggregate = {
  __typename?: 'CollectionProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionAgreementsCountAggregate = {
  __typename?: 'CollectionAgreementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type CollectionAgreementsSumAggregate = {
  __typename?: 'CollectionAgreementsSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsAvgAggregate = {
  __typename?: 'CollectionAgreementsAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsMinAggregate = {
  __typename?: 'CollectionAgreementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsMaxAggregate = {
  __typename?: 'CollectionAgreementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type ChannelCountAggregate = {
  __typename?: 'ChannelCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['Int']>;
  defaultLanguageCode?: Maybe<Scalars['Int']>;
  currencyCode?: Maybe<Scalars['Int']>;
  pricesIncludeTax?: Maybe<Scalars['Int']>;
};

export type ChannelMinAggregate = {
  __typename?: 'ChannelMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ChannelMaxAggregate = {
  __typename?: 'ChannelMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type StoreCountAggregate = {
  __typename?: 'StoreCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type StoreMinAggregate = {
  __typename?: 'StoreMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type StoreMaxAggregate = {
  __typename?: 'StoreMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type StorePricesCountAggregate = {
  __typename?: 'StorePricesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  taxamount?: Maybe<Scalars['Int']>;
  finalamount?: Maybe<Scalars['Int']>;
  transactionID?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StorePricesSumAggregate = {
  __typename?: 'StorePricesSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StorePricesAvgAggregate = {
  __typename?: 'StorePricesAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StorePricesMinAggregate = {
  __typename?: 'StorePricesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export enum SettlementType {
  Processing = 'PROCESSING',
  Processed = 'PROCESSED'
}

export type StorePricesMaxAggregate = {
  __typename?: 'StorePricesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StoreSettlementsCountAggregate = {
  __typename?: 'StoreSettlementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  taxamount?: Maybe<Scalars['Int']>;
  finalamount?: Maybe<Scalars['Int']>;
  transactionID?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StoreSettlementsSumAggregate = {
  __typename?: 'StoreSettlementsSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StoreSettlementsAvgAggregate = {
  __typename?: 'StoreSettlementsAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StoreSettlementsMinAggregate = {
  __typename?: 'StoreSettlementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StoreSettlementsMaxAggregate = {
  __typename?: 'StoreSettlementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StoreSkusCountAggregate = {
  __typename?: 'StoreSkusCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StoreSkusSumAggregate = {
  __typename?: 'StoreSkusSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StoreSkusAvgAggregate = {
  __typename?: 'StoreSkusAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StoreSkusMinAggregate = {
  __typename?: 'StoreSkusMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StoreSkusMaxAggregate = {
  __typename?: 'StoreSkusMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type TaxCategoryCountAggregate = {
  __typename?: 'TaxCategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type TaxCategoryMinAggregate = {
  __typename?: 'TaxCategoryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxCategoryMaxAggregate = {
  __typename?: 'TaxCategoryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxCategoryRatesCountAggregate = {
  __typename?: 'TaxCategoryRatesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type TaxCategoryRatesSumAggregate = {
  __typename?: 'TaxCategoryRatesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesAvgAggregate = {
  __typename?: 'TaxCategoryRatesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesMinAggregate = {
  __typename?: 'TaxCategoryRatesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesMaxAggregate = {
  __typename?: 'TaxCategoryRatesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateCountAggregate = {
  __typename?: 'TaxRateCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type TaxRateSumAggregate = {
  __typename?: 'TaxRateSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateAvgAggregate = {
  __typename?: 'TaxRateAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateMinAggregate = {
  __typename?: 'TaxRateMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateMaxAggregate = {
  __typename?: 'TaxRateMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsCountAggregate = {
  __typename?: 'TaxRateVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type TaxRateVariantsSumAggregate = {
  __typename?: 'TaxRateVariantsSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsAvgAggregate = {
  __typename?: 'TaxRateVariantsAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsMinAggregate = {
  __typename?: 'TaxRateVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsMaxAggregate = {
  __typename?: 'TaxRateVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  verificationToken?: Maybe<Scalars['Int']>;
  passwordResetToken?: Maybe<Scalars['Int']>;
  identifierChangeToken?: Maybe<Scalars['Int']>;
  pendingIdentifier?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type VendorCountAggregate = {
  __typename?: 'VendorCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  vendorName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type VendorMinAggregate = {
  __typename?: 'VendorMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type VendorMaxAggregate = {
  __typename?: 'VendorMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ZoneCountAggregate = {
  __typename?: 'ZoneCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type ZoneMinAggregate = {
  __typename?: 'ZoneMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMaxAggregate = {
  __typename?: 'ZoneMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMembersCountAggregate = {
  __typename?: 'ZoneMembersCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type ZoneMembersMinAggregate = {
  __typename?: 'ZoneMembersMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMembersMaxAggregate = {
  __typename?: 'ZoneMembersMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneStoresCountAggregate = {
  __typename?: 'ZoneStoresCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type ZoneStoresMinAggregate = {
  __typename?: 'ZoneStoresMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type ZoneStoresMaxAggregate = {
  __typename?: 'ZoneStoresMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type ZoneTaxratesCountAggregate = {
  __typename?: 'ZoneTaxratesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type ZoneTaxratesSumAggregate = {
  __typename?: 'ZoneTaxratesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesAvgAggregate = {
  __typename?: 'ZoneTaxratesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesMinAggregate = {
  __typename?: 'ZoneTaxratesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesMaxAggregate = {
  __typename?: 'ZoneTaxratesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CountryCountAggregate = {
  __typename?: 'CountryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type CountryMinAggregate = {
  __typename?: 'CountryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryMaxAggregate = {
  __typename?: 'CountryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryStoresCountAggregate = {
  __typename?: 'CountryStoresCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type CountryStoresMinAggregate = {
  __typename?: 'CountryStoresMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type CountryStoresMaxAggregate = {
  __typename?: 'CountryStoresMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type CountryZonesCountAggregate = {
  __typename?: 'CountryZonesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type CountryZonesMinAggregate = {
  __typename?: 'CountryZonesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryZonesMaxAggregate = {
  __typename?: 'CountryZonesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type SeoCountAggregate = {
  __typename?: 'SeoCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  urlKey?: Maybe<Scalars['Int']>;
  metatitle?: Maybe<Scalars['Int']>;
};

export type SeoMinAggregate = {
  __typename?: 'SeoMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
};

export type SeoMaxAggregate = {
  __typename?: 'SeoMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
};

export type FacetCountAggregate = {
  __typename?: 'FacetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetMinAggregate = {
  __typename?: 'FacetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetMaxAggregate = {
  __typename?: 'FacetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetProductsCountAggregate = {
  __typename?: 'FacetProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type FacetProductsMinAggregate = {
  __typename?: 'FacetProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetProductsMaxAggregate = {
  __typename?: 'FacetProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetValuesCountAggregate = {
  __typename?: 'FacetValuesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetValuesMinAggregate = {
  __typename?: 'FacetValuesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValuesMaxAggregate = {
  __typename?: 'FacetValuesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValueCountAggregate = {
  __typename?: 'FacetValueCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetValueMinAggregate = {
  __typename?: 'FacetValueMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValueMaxAggregate = {
  __typename?: 'FacetValueMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValueProductsCountAggregate = {
  __typename?: 'FacetValueProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type FacetValueProductsMinAggregate = {
  __typename?: 'FacetValueProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetValueProductsMaxAggregate = {
  __typename?: 'FacetValueProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductOptionsCountAggregate = {
  __typename?: 'ProductOptionsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionsMinAggregate = {
  __typename?: 'ProductOptionsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionsMaxAggregate = {
  __typename?: 'ProductOptionsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductFacetsCountAggregate = {
  __typename?: 'ProductFacetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductFacetsMinAggregate = {
  __typename?: 'ProductFacetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductFacetsMaxAggregate = {
  __typename?: 'ProductFacetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductVariantsCountAggregate = {
  __typename?: 'ProductVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductVariantsSumAggregate = {
  __typename?: 'ProductVariantsSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductVariantsAvgAggregate = {
  __typename?: 'ProductVariantsAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductVariantsMinAggregate = {
  __typename?: 'ProductVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductVariantsMaxAggregate = {
  __typename?: 'ProductVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductAssetsCountAggregate = {
  __typename?: 'ProductAssetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductAssetsMinAggregate = {
  __typename?: 'ProductAssetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetsMaxAggregate = {
  __typename?: 'ProductAssetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantCountAggregate = {
  __typename?: 'ProductVariantCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductVariantSumAggregate = {
  __typename?: 'ProductVariantSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductVariantAvgAggregate = {
  __typename?: 'ProductVariantAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductVariantMinAggregate = {
  __typename?: 'ProductVariantMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductVariantMaxAggregate = {
  __typename?: 'ProductVariantMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductVariantStocksCountAggregate = {
  __typename?: 'ProductVariantStocksCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type ProductVariantStocksSumAggregate = {
  __typename?: 'ProductVariantStocksSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type ProductVariantStocksAvgAggregate = {
  __typename?: 'ProductVariantStocksAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type ProductVariantStocksMinAggregate = {
  __typename?: 'ProductVariantStocksMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductVariantStocksMaxAggregate = {
  __typename?: 'ProductVariantStocksMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductVariantPricesCountAggregate = {
  __typename?: 'ProductVariantPricesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type ProductVariantPricesSumAggregate = {
  __typename?: 'ProductVariantPricesSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesAvgAggregate = {
  __typename?: 'ProductVariantPricesAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesMinAggregate = {
  __typename?: 'ProductVariantPricesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesMaxAggregate = {
  __typename?: 'ProductVariantPricesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductOptionCountAggregate = {
  __typename?: 'ProductOptionCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionMinAggregate = {
  __typename?: 'ProductOptionMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionMaxAggregate = {
  __typename?: 'ProductOptionMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionVariantsCountAggregate = {
  __typename?: 'ProductOptionVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductOptionVariantsSumAggregate = {
  __typename?: 'ProductOptionVariantsSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductOptionVariantsAvgAggregate = {
  __typename?: 'ProductOptionVariantsAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductOptionVariantsMinAggregate = {
  __typename?: 'ProductOptionVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductOptionVariantsMaxAggregate = {
  __typename?: 'ProductOptionVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupCountAggregate = {
  __typename?: 'ProductOptionGroupCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroupMinAggregate = {
  __typename?: 'ProductOptionGroupMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupMaxAggregate = {
  __typename?: 'ProductOptionGroupMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupOptionsCountAggregate = {
  __typename?: 'ProductOptionGroupOptionsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroupOptionsMinAggregate = {
  __typename?: 'ProductOptionGroupOptionsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupOptionsMaxAggregate = {
  __typename?: 'ProductOptionGroupOptionsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductVariantPriceCountAggregate = {
  __typename?: 'ProductVariantPriceCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type ProductVariantPriceSumAggregate = {
  __typename?: 'ProductVariantPriceSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceAvgAggregate = {
  __typename?: 'ProductVariantPriceAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceMinAggregate = {
  __typename?: 'ProductVariantPriceMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceMaxAggregate = {
  __typename?: 'ProductVariantPriceMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantAssetCountAggregate = {
  __typename?: 'ProductVariantAssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductVariantAssetMinAggregate = {
  __typename?: 'ProductVariantAssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantAssetMaxAggregate = {
  __typename?: 'ProductVariantAssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetCountAggregate = {
  __typename?: 'ProductAssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductAssetMinAggregate = {
  __typename?: 'ProductAssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetMaxAggregate = {
  __typename?: 'ProductAssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VendorPlansCountAggregate = {
  __typename?: 'VendorPlansCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  planValue?: Maybe<Scalars['Int']>;
};

export type VendorPlansSumAggregate = {
  __typename?: 'VendorPlansSumAggregate';
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansAvgAggregate = {
  __typename?: 'VendorPlansAvgAggregate';
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansMinAggregate = {
  __typename?: 'VendorPlansMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansMaxAggregate = {
  __typename?: 'VendorPlansMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansLicencesCountAggregate = {
  __typename?: 'VendorPlansLicencesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  tenureStart?: Maybe<Scalars['Int']>;
  tenureEnd?: Maybe<Scalars['Int']>;
};

export type VendorPlansLicencesMinAggregate = {
  __typename?: 'VendorPlansLicencesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorPlansLicencesMaxAggregate = {
  __typename?: 'VendorPlansLicencesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorLicenseCountAggregate = {
  __typename?: 'VendorLicenseCountAggregate';
  id?: Maybe<Scalars['Int']>;
  tenureStart?: Maybe<Scalars['Int']>;
  tenureEnd?: Maybe<Scalars['Int']>;
};

export type VendorLicenseMinAggregate = {
  __typename?: 'VendorLicenseMinAggregate';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorLicenseMaxAggregate = {
  __typename?: 'VendorLicenseMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type MenuResponseTypes = {
  __typename?: 'MenuResponseTypes';
  menu: Scalars['String'];
};

export type StockKeepingCountAggregate = {
  __typename?: 'StockKeepingCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StockKeepingSumAggregate = {
  __typename?: 'StockKeepingSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StockKeepingAvgAggregate = {
  __typename?: 'StockKeepingAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StockKeepingMinAggregate = {
  __typename?: 'StockKeepingMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StockKeepingMaxAggregate = {
  __typename?: 'StockKeepingMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StockKeepingSalesCountAggregate = {
  __typename?: 'StockKeepingSalesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingSalesSumAggregate = {
  __typename?: 'StockKeepingSalesSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesAvgAggregate = {
  __typename?: 'StockKeepingSalesAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesMinAggregate = {
  __typename?: 'StockKeepingSalesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesMaxAggregate = {
  __typename?: 'StockKeepingSalesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsCountAggregate = {
  __typename?: 'StockKeepingCancelsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingCancelsSumAggregate = {
  __typename?: 'StockKeepingCancelsSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsAvgAggregate = {
  __typename?: 'StockKeepingCancelsAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsMinAggregate = {
  __typename?: 'StockKeepingCancelsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsMaxAggregate = {
  __typename?: 'StockKeepingCancelsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsCountAggregate = {
  __typename?: 'StockKeepingMovementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingMovementsSumAggregate = {
  __typename?: 'StockKeepingMovementsSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsAvgAggregate = {
  __typename?: 'StockKeepingMovementsAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsMinAggregate = {
  __typename?: 'StockKeepingMovementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsMaxAggregate = {
  __typename?: 'StockKeepingMovementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleCountAggregate = {
  __typename?: 'SaleCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type SaleSumAggregate = {
  __typename?: 'SaleSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleAvgAggregate = {
  __typename?: 'SaleAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleMinAggregate = {
  __typename?: 'SaleMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleMaxAggregate = {
  __typename?: 'SaleMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementCountAggregate = {
  __typename?: 'StockMovementCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockMovementSumAggregate = {
  __typename?: 'StockMovementSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementAvgAggregate = {
  __typename?: 'StockMovementAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementMinAggregate = {
  __typename?: 'StockMovementMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementMaxAggregate = {
  __typename?: 'StockMovementMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationCountAggregate = {
  __typename?: 'CancellationCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CancellationSumAggregate = {
  __typename?: 'CancellationSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationAvgAggregate = {
  __typename?: 'CancellationAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationMinAggregate = {
  __typename?: 'CancellationMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationMaxAggregate = {
  __typename?: 'CancellationMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  orderPlacedAt?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['Int']>;
};

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type ZipCountAggregate = {
  __typename?: 'ZipCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ZipSumAggregate = {
  __typename?: 'ZipSumAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type ZipAvgAggregate = {
  __typename?: 'ZipAvgAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type ZipMinAggregate = {
  __typename?: 'ZipMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type ZipMaxAggregate = {
  __typename?: 'ZipMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type MenuCountAggregate = {
  __typename?: 'MenuCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

export type MenuMinAggregate = {
  __typename?: 'MenuMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuMaxAggregate = {
  __typename?: 'MenuMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuChildrenCountAggregate = {
  __typename?: 'MenuChildrenCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

export type MenuChildrenMinAggregate = {
  __typename?: 'MenuChildrenMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuChildrenMaxAggregate = {
  __typename?: 'MenuChildrenMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type PageCountAggregate = {
  __typename?: 'PageCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  pageType?: Maybe<Scalars['Int']>;
  pageCategory?: Maybe<Scalars['Int']>;
};

export type PageMinAggregate = {
  __typename?: 'PageMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export type PageMaxAggregate = {
  __typename?: 'PageMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export type AddressCountAggregate = {
  __typename?: 'AddressCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['Int']>;
  addressLine?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  landmark?: Maybe<Scalars['Int']>;
  postalCode?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  alternatePhoneNumber?: Maybe<Scalars['Int']>;
  defaultShippingAddress?: Maybe<Scalars['Int']>;
  defaultBillingAddress?: Maybe<Scalars['Int']>;
  addressType?: Maybe<Scalars['Int']>;
};

export type AddressMinAggregate = {
  __typename?: 'AddressMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export enum AddressType {
  Home = 'HOME',
  Work = 'WORK'
}

export type AddressMaxAggregate = {
  __typename?: 'AddressMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** The node containing the User */
  node: User;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};


export type PageInfo = {
  __typename?: 'PageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type AddressUsersCountAggregate = {
  __typename?: 'AddressUsersCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  verificationToken?: Maybe<Scalars['Int']>;
  passwordResetToken?: Maybe<Scalars['Int']>;
  identifierChangeToken?: Maybe<Scalars['Int']>;
  pendingIdentifier?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
};

export type AddressUsersMinAggregate = {
  __typename?: 'AddressUsersMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type AddressUsersMaxAggregate = {
  __typename?: 'AddressUsersMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type SettlementsCountAggregate = {
  __typename?: 'SettlementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  taxamount?: Maybe<Scalars['Int']>;
  finalamount?: Maybe<Scalars['Int']>;
  transactionID?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type SettlementsSumAggregate = {
  __typename?: 'SettlementsSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type SettlementsAvgAggregate = {
  __typename?: 'SettlementsAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type SettlementsMinAggregate = {
  __typename?: 'SettlementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type SettlementsMaxAggregate = {
  __typename?: 'SettlementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type Query = {
  __typename?: 'Query';
  GetMenu: MenuResponseTypes;
  getAllCollection: Array<Collection>;
  getHomePage: Page;
  getSingleProductVariant: ProductVariant;
};


export type QueryGetSingleProductVariantArgs = {
  id: Scalars['ID'];
};

export type GetMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuQuery = (
  { __typename?: 'Query' }
  & { GetMenu: (
    { __typename?: 'MenuResponseTypes' }
    & Pick<MenuResponseTypes, 'menu'>
  ) }
);

export type GetAllCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCollectionQuery = (
  { __typename?: 'Query' }
  & { getAllCollection: Array<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'name' | 'description'>
  )> }
);

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = (
  { __typename?: 'Query' }
  & { getHomePage: (
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'title' | 'targetId' | 'single' | 'list'>
  ) }
);

export type GetSingleProductVariantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSingleProductVariantQuery = (
  { __typename?: 'Query' }
  & { getSingleProductVariant: (
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name'>
    & { product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'productName' | 'slug' | 'description'>
      & { collection?: Maybe<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
        & { seo: (
          { __typename?: 'Seo' }
          & Pick<Seo, 'urlKey' | 'metadesc' | 'metatitle' | 'metakeywords'>
        ) }
      )>, facets: Array<(
        { __typename?: 'FacetValue' }
        & Pick<FacetValue, 'id' | 'code'>
        & { facet: (
          { __typename?: 'Facet' }
          & Pick<Facet, 'id' | 'name' | 'code'>
        ) }
      )>, assets?: Maybe<Array<(
        { __typename?: 'ProductAsset' }
        & Pick<ProductAsset, 'id'>
        & { asset: (
          { __typename?: 'Asset' }
          & Pick<Asset, 'id' | 'preview' | 'source'>
        ) }
      )>> }
    ), asset: (
      { __typename?: 'ProductVariantAsset' }
      & Pick<ProductVariantAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview' | 'source'>
      ) }
    ), seo?: Maybe<(
      { __typename?: 'Seo' }
      & Pick<Seo, 'id' | 'urlKey' | 'metatitle' | 'metadesc' | 'metakeywords'>
    )> }
  ) }
);


export const GetMenuDocument = gql`
    query GetMenu {
  GetMenu {
    menu
  }
}
    `;

/**
 * __useGetMenuQuery__
 *
 * To run a query within a React component, call `useGetMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMenuQuery(baseOptions?: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
        return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, baseOptions);
      }
export function useGetMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
          return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, baseOptions);
        }
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>;
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>;
export type GetMenuQueryResult = Apollo.QueryResult<GetMenuQuery, GetMenuQueryVariables>;
export const GetAllCollectionDocument = gql`
    query getAllCollection {
  getAllCollection {
    id
    name
    description
  }
}
    `;

/**
 * __useGetAllCollectionQuery__
 *
 * To run a query within a React component, call `useGetAllCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCollectionQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCollectionQuery, GetAllCollectionQueryVariables>) {
        return Apollo.useQuery<GetAllCollectionQuery, GetAllCollectionQueryVariables>(GetAllCollectionDocument, baseOptions);
      }
export function useGetAllCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCollectionQuery, GetAllCollectionQueryVariables>) {
          return Apollo.useLazyQuery<GetAllCollectionQuery, GetAllCollectionQueryVariables>(GetAllCollectionDocument, baseOptions);
        }
export type GetAllCollectionQueryHookResult = ReturnType<typeof useGetAllCollectionQuery>;
export type GetAllCollectionLazyQueryHookResult = ReturnType<typeof useGetAllCollectionLazyQuery>;
export type GetAllCollectionQueryResult = Apollo.QueryResult<GetAllCollectionQuery, GetAllCollectionQueryVariables>;
export const GetHomePageDocument = gql`
    query getHomePage {
  getHomePage {
    id
    title
    targetId
    single
    list
  }
}
    `;

/**
 * __useGetHomePageQuery__
 *
 * To run a query within a React component, call `useGetHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
        return Apollo.useQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, baseOptions);
      }
export function useGetHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          return Apollo.useLazyQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, baseOptions);
        }
export type GetHomePageQueryHookResult = ReturnType<typeof useGetHomePageQuery>;
export type GetHomePageLazyQueryHookResult = ReturnType<typeof useGetHomePageLazyQuery>;
export type GetHomePageQueryResult = Apollo.QueryResult<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetSingleProductVariantDocument = gql`
    query getSingleProductVariant($id: ID!) {
  getSingleProductVariant(id: $id) {
    id
    name
    product {
      id
      productName
      slug
      description
      collection {
        id
        name
        seo {
          urlKey
          metadesc
          metatitle
          metakeywords
        }
      }
      facets {
        id
        code
        facet {
          id
          name
          code
        }
      }
      assets {
        id
        asset {
          id
          preview
          source
        }
      }
    }
    asset {
      id
      asset {
        id
        preview
        source
      }
    }
    seo {
      id
      urlKey
      metatitle
      metadesc
      metakeywords
    }
  }
}
    `;

/**
 * __useGetSingleProductVariantQuery__
 *
 * To run a query within a React component, call `useGetSingleProductVariantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleProductVariantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleProductVariantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSingleProductVariantQuery(baseOptions?: Apollo.QueryHookOptions<GetSingleProductVariantQuery, GetSingleProductVariantQueryVariables>) {
        return Apollo.useQuery<GetSingleProductVariantQuery, GetSingleProductVariantQueryVariables>(GetSingleProductVariantDocument, baseOptions);
      }
export function useGetSingleProductVariantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleProductVariantQuery, GetSingleProductVariantQueryVariables>) {
          return Apollo.useLazyQuery<GetSingleProductVariantQuery, GetSingleProductVariantQueryVariables>(GetSingleProductVariantDocument, baseOptions);
        }
export type GetSingleProductVariantQueryHookResult = ReturnType<typeof useGetSingleProductVariantQuery>;
export type GetSingleProductVariantLazyQueryHookResult = ReturnType<typeof useGetSingleProductVariantLazyQuery>;
export type GetSingleProductVariantQueryResult = Apollo.QueryResult<GetSingleProductVariantQuery, GetSingleProductVariantQueryVariables>;