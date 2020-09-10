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
  agreements: Array<BillingAgreement>;
  cartPrice: CartPriceRules;
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

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  totalPrice: Scalars['Float'];
  address: Scalars['String'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
};

export type OrderLine = {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  priceField: Scalars['JSON'];
  stage: Scalars['String'];
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
  verified: Scalars['Boolean'];
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  administrator?: Maybe<Administrator>;
  vendor?: Maybe<Vendor>;
  delivery?: Maybe<Delivery>;
  cart?: Maybe<Cart>;
  view: Array<View>;
  address?: Maybe<Array<Address>>;
  order?: Maybe<Array<Order>>;
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  vendorName: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  zip?: Maybe<Zip>;
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
  vendor?: Maybe<Vendor>;
  cart: Array<CartItem>;
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
  specs?: Maybe<ProductVariantSpecs>;
  seo?: Maybe<Seo>;
  agreements: Array<BillingAgreement>;
  stock: Array<StockKeeping>;
  line: Array<OrderItem>;
  carts: Array<CartItem>;
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
  store?: Maybe<Store>;
  promoprice?: Maybe<PromotionVariantPrice>;
  cartItem?: Maybe<CartItem>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
};

export type ProductOptionGroup = {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
  product: Product;
  options: Array<ProductOption>;
};

export type BillingAgreement = {
  __typename?: 'BillingAgreement';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  type: BillingAgreementEnum;
  state: BillingAgreementState;
  variant: ProductVariant;
  collection?: Maybe<Collection>;
  store: Store;
  request: Array<BillingAgreementRequest>;
};

export enum BillingAgreementEnum {
  Planbase = 'PLANBASE',
  Collectionbase = 'COLLECTIONBASE',
  Comissionbase = 'COMISSIONBASE',
  Prodcommission = 'PRODCOMMISSION'
}

export enum BillingAgreementState {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type ProductVariantSpecs = {
  __typename?: 'ProductVariantSpecs';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  specs: Scalars['JSON'];
  variant: ProductVariant;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  items: Array<CartItem>;
  user?: Maybe<User>;
};

export type View = {
  __typename?: 'View';
  id: Scalars['ID'];
};

export type BillingAgreementRequest = {
  __typename?: 'BillingAgreementRequest';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  state: BillingAgreementState;
};

export type Zip = {
  __typename?: 'Zip';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  code: Scalars['Float'];
};

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
  signIn: Array<DeliverySignIn>;
};

export type DeliveryPool = {
  __typename?: 'DeliveryPool';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  signIn: DeliverySignIn;
  lines: Array<OrderLine>;
};

export type Search = {
  __typename?: 'Search';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  search: Scalars['String'];
  userId: Scalars['String'];
};

export type PromotionVariantPrice = {
  __typename?: 'PromotionVariantPrice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  priceType: Scalars['String'];
  value: Scalars['Float'];
  forever: Scalars['Boolean'];
  startsAt: Scalars['DateTime'];
  endsAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
};

export type CartPriceRules = {
  __typename?: 'CartPriceRules';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  priceType: Scalars['String'];
  value: Scalars['Float'];
};

export type DeliverySignIn = {
  __typename?: 'DeliverySignIn';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  delivery: Delivery;
  pool: DeliveryPool;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  cart: Cart;
  variant: ProductVariant;
  store: Store;
  price: ProductVariantPrice;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName: Scalars['String'];
  addressLine: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  landmark: Scalars['String'];
  postalCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  alternatePhoneNumber: Scalars['String'];
  defaultShippingAddress: Scalars['Boolean'];
  defaultBillingAddress: Scalars['Boolean'];
  addressType: AddressType;
};

export enum AddressType {
  Home = 'HOME',
  Work = 'WORK'
}

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

export type StoreLinesCountAggregate = {
  __typename?: 'StoreLinesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type StoreLinesMinAggregate = {
  __typename?: 'StoreLinesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type StoreLinesMaxAggregate = {
  __typename?: 'StoreLinesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
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
  lastLogin?: Maybe<Scalars['DateTime']>;
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
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserOrdersCountAggregate = {
  __typename?: 'UserOrdersCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['Int']>;
};

export type UserOrdersSumAggregate = {
  __typename?: 'UserOrdersSumAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type UserOrdersAvgAggregate = {
  __typename?: 'UserOrdersAvgAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type UserOrdersMinAggregate = {
  __typename?: 'UserOrdersMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type UserOrdersMaxAggregate = {
  __typename?: 'UserOrdersMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type UserAddressesCountAggregate = {
  __typename?: 'UserAddressesCountAggregate';
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

export type UserAddressesMinAggregate = {
  __typename?: 'UserAddressesMinAggregate';
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

export type UserAddressesMaxAggregate = {
  __typename?: 'UserAddressesMaxAggregate';
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

export type VendorZipsCountAggregate = {
  __typename?: 'VendorZipsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type VendorZipsSumAggregate = {
  __typename?: 'VendorZipsSumAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsAvgAggregate = {
  __typename?: 'VendorZipsAvgAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsMinAggregate = {
  __typename?: 'VendorZipsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsMaxAggregate = {
  __typename?: 'VendorZipsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
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

export type ProductVariantLinesCountAggregate = {
  __typename?: 'ProductVariantLinesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ProductVariantLinesSumAggregate = {
  __typename?: 'ProductVariantLinesSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesAvgAggregate = {
  __typename?: 'ProductVariantLinesAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesMinAggregate = {
  __typename?: 'ProductVariantLinesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesMaxAggregate = {
  __typename?: 'ProductVariantLinesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
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

export type ProductVariantAgreementsCountAggregate = {
  __typename?: 'ProductVariantAgreementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type ProductVariantAgreementsSumAggregate = {
  __typename?: 'ProductVariantAgreementsSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ProductVariantAgreementsAvgAggregate = {
  __typename?: 'ProductVariantAgreementsAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ProductVariantAgreementsMinAggregate = {
  __typename?: 'ProductVariantAgreementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type ProductVariantAgreementsMaxAggregate = {
  __typename?: 'ProductVariantAgreementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
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
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderLinesCountAggregate = {
  __typename?: 'OrderLinesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type OrderLinesMinAggregate = {
  __typename?: 'OrderLinesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLinesMaxAggregate = {
  __typename?: 'OrderLinesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
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

export type ZipVendorsCountAggregate = {
  __typename?: 'ZipVendorsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  vendorName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type ZipVendorsMinAggregate = {
  __typename?: 'ZipVendorsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ZipVendorsMaxAggregate = {
  __typename?: 'ZipVendorsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
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

export type CollectionSingleResponse = {
  __typename?: 'CollectionSingleResponse';
  collection: Collection;
  facetValues: Array<FacetValue>;
};

export type StockZip = {
  __typename?: 'StockZip';
  stock: Scalars['Boolean'];
  zip: Scalars['Boolean'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  user: User;
  token: Scalars['String'];
};

export type OrderLineCountAggregate = {
  __typename?: 'OrderLineCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type OrderLineMinAggregate = {
  __typename?: 'OrderLineMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLineMaxAggregate = {
  __typename?: 'OrderLineMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderItemCountAggregate = {
  __typename?: 'OrderItemCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type OrderItemSumAggregate = {
  __typename?: 'OrderItemSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemAvgAggregate = {
  __typename?: 'OrderItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemMinAggregate = {
  __typename?: 'OrderItemMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemMaxAggregate = {
  __typename?: 'OrderItemMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type PromotionVariantPriceCountAggregate = {
  __typename?: 'PromotionVariantPriceCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  priceType?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  forever?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['Int']>;
  endsAt?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type PromotionVariantPriceSumAggregate = {
  __typename?: 'PromotionVariantPriceSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type PromotionVariantPriceAvgAggregate = {
  __typename?: 'PromotionVariantPriceAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type PromotionVariantPriceMinAggregate = {
  __typename?: 'PromotionVariantPriceMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
};

export type PromotionVariantPriceMaxAggregate = {
  __typename?: 'PromotionVariantPriceMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
};

export type CartPriceRulesCountAggregate = {
  __typename?: 'CartPriceRulesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  priceType?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type CartPriceRulesSumAggregate = {
  __typename?: 'CartPriceRulesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesAvgAggregate = {
  __typename?: 'CartPriceRulesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesMinAggregate = {
  __typename?: 'CartPriceRulesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesMaxAggregate = {
  __typename?: 'CartPriceRulesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryCountAggregate = {
  __typename?: 'DeliveryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type DeliveryMinAggregate = {
  __typename?: 'DeliveryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryMaxAggregate = {
  __typename?: 'DeliveryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliverySignInsCountAggregate = {
  __typename?: 'DeliverySignInsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type DeliverySignInsMinAggregate = {
  __typename?: 'DeliverySignInsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliverySignInsMaxAggregate = {
  __typename?: 'DeliverySignInsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  GetMenu: MenuResponseTypes;
  getAllCollection: Array<Collection>;
  GetCollectionTree: Array<Collection>;
  GetSingleCollection: CollectionSingleResponse;
  GetFacetsByCollection: Array<FacetValue>;
  GetProductVariantForCollection: Array<ProductVariant>;
  getHomePage: Page;
  getSingleProductVariant: ProductVariant;
  singProductInfo: Product;
  singProductPrice: ProductVariant;
  GetStocksAndZipAvailability: StockZip;
  getProductVariantByProduct: Array<ProductVariant>;
  getProductAsset: Asset;
  GetDefaultStore: Store;
  GetCurrentUser: User;
  GetUserAddress: Array<Address>;
  GetAllSearch: Array<Search>;
  queryFacet: Array<Product>;
  GetCart: Cart;
};


export type QueryGetSingleCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryGetFacetsByCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductVariantForCollectionArgs = {
  search?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type QueryGetSingleProductVariantArgs = {
  id: Scalars['ID'];
};


export type QuerySingProductInfoArgs = {
  id: Scalars['ID'];
};


export type QuerySingProductPriceArgs = {
  id: Scalars['ID'];
};


export type QueryGetStocksAndZipAvailabilityArgs = {
  zipf: Scalars['Int'];
  variantId: Scalars['ID'];
  storeId: Scalars['ID'];
};


export type QueryGetProductVariantByProductArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductAssetArgs = {
  prodId?: Maybe<Scalars['ID']>;
  variantId?: Maybe<Scalars['ID']>;
};


export type QueryQueryFacetArgs = {
  collection?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};


export type QueryGetCartArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateUser: UserResponse;
  LoginUser: UserResponse;
  UpdateAccountInfo: User;
  CreateNewAddress: Address;
  UpdateNewAddress: Address;
  RegisterSearch: Search;
  addToCart: CartItem;
  removeCartItem: CartItem;
};


export type MutationCreateUserArgs = {
  lname: Scalars['String'];
  fname: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdateAccountInfoArgs = {
  lname: Scalars['String'];
  fname: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationCreateNewAddressArgs = {
  type: AddressType;
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  landmark: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  addressLine: Scalars['String'];
  fullName: Scalars['String'];
};


export type MutationUpdateNewAddressArgs = {
  id: Scalars['ID'];
  type: AddressType;
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  landmark: Scalars['String'];
  state: Scalars['String'];
  city: Scalars['String'];
  addressLine: Scalars['String'];
  fullName: Scalars['String'];
};


export type MutationRegisterSearchArgs = {
  search: Scalars['String'];
};


export type MutationAddToCartArgs = {
  price: Scalars['ID'];
  store: Scalars['ID'];
  variant: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationRemoveCartItemArgs = {
  cartId: Scalars['ID'];
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { LoginUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'verified' | 'verificationToken' | 'lastLogin' | 'firstName' | 'lastName' | 'phoneNumber'>
    ) }
  ) }
);

export type UpdateAccountInfoMutationVariables = Exact<{
  lname: Scalars['String'];
  fname: Scalars['String'];
  phone: Scalars['String'];
}>;


export type UpdateAccountInfoMutation = (
  { __typename?: 'Mutation' }
  & { UpdateAccountInfo: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);

export type CreateNewAddressMutationVariables = Exact<{
  fullName: Scalars['String'];
  addressLine: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  landmark: Scalars['String'];
  postalCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  type: AddressType;
}>;


export type CreateNewAddressMutation = (
  { __typename?: 'Mutation' }
  & { CreateNewAddress: (
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  fname: Scalars['String'];
  lname: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { CreateUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'phoneNumber' | 'verified' | 'firstName' | 'lastName'>
    ) }
  ) }
);

export type AddToCartMutationVariables = Exact<{
  userId: Scalars['ID'];
  store: Scalars['ID'];
  variant: Scalars['ID'];
  price: Scalars['ID'];
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & { addToCart: (
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  ) }
);

export type RemoveCartItemMutationVariables = Exact<{
  cartId: Scalars['ID'];
}>;


export type RemoveCartItemMutation = (
  { __typename?: 'Mutation' }
  & { removeCartItem: (
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  ) }
);

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
    & { specs?: Maybe<(
      { __typename?: 'ProductVariantSpecs' }
      & Pick<ProductVariantSpecs, 'id' | 'specs'>
    )>, product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'productName' | 'slug' | 'description'>
      & { options: Array<(
        { __typename?: 'ProductOptionGroup' }
        & Pick<ProductOptionGroup, 'id' | 'name' | 'code'>
        & { options: Array<(
          { __typename?: 'ProductOption' }
          & Pick<ProductOption, 'id' | 'name' | 'code'>
        )> }
      )>, variants: Array<(
        { __typename?: 'ProductVariant' }
        & Pick<ProductVariant, 'id' | 'name'>
      )>, collection?: Maybe<(
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
    ), price?: Maybe<Array<(
      { __typename?: 'ProductVariantPrice' }
      & Pick<ProductVariantPrice, 'id' | 'price'>
      & { store?: Maybe<(
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'storeName'>
      )> }
    )>>, seo?: Maybe<(
      { __typename?: 'Seo' }
      & Pick<Seo, 'id' | 'urlKey' | 'metatitle' | 'metadesc' | 'metakeywords'>
    )> }
  ) }
);

export type GetProductAssetQueryVariables = Exact<{
  prodId?: Maybe<Scalars['ID']>;
  variantId?: Maybe<Scalars['ID']>;
}>;


export type GetProductAssetQuery = (
  { __typename?: 'Query' }
  & { getProductAsset: (
    { __typename?: 'Asset' }
    & Pick<Asset, 'id' | 'preview' | 'source'>
  ) }
);

export type GetDefaultStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDefaultStoreQuery = (
  { __typename?: 'Query' }
  & { GetDefaultStore: (
    { __typename?: 'Store' }
    & Pick<Store, 'id' | 'storeName' | 'phoneNumber' | 'officialemail'>
  ) }
);

export type GetCollectionTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionTreeQuery = (
  { __typename?: 'Query' }
  & { GetCollectionTree: Array<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'name'>
    & { children: Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name'>
      & { children: Array<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
      )> }
    )> }
  )> }
);

export type GetSingleCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSingleCollectionQuery = (
  { __typename?: 'Query' }
  & { GetSingleCollection: (
    { __typename?: 'CollectionSingleResponse' }
    & { collection: (
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name' | 'description'>
      & { children: Array<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
      )> }
    ), facetValues: Array<(
      { __typename?: 'FacetValue' }
      & Pick<FacetValue, 'id' | 'code'>
      & { facet: (
        { __typename?: 'Facet' }
        & Pick<Facet, 'id' | 'code' | 'name'>
      ) }
    )> }
  ) }
);

export type GetFacetsByCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFacetsByCollectionQuery = (
  { __typename?: 'Query' }
  & { GetFacetsByCollection: Array<(
    { __typename?: 'FacetValue' }
    & Pick<FacetValue, 'id' | 'code'>
    & { facet: (
      { __typename?: 'Facet' }
      & Pick<Facet, 'id' | 'name' | 'code'>
    ) }
  )> }
);

export type GetProductVariantForCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetProductVariantForCollectionQuery = (
  { __typename?: 'Query' }
  & { GetProductVariantForCollection: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name'>
    & { asset: (
      { __typename?: 'ProductVariantAsset' }
      & Pick<ProductVariantAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview' | 'source'>
      ) }
    ) }
  )> }
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { GetCurrentUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'verified' | 'verificationToken' | 'lastLogin' | 'firstName' | 'lastName' | 'phoneNumber'>
    & { cart?: Maybe<(
      { __typename?: 'Cart' }
      & Pick<Cart, 'id'>
      & { items: Array<(
        { __typename?: 'CartItem' }
        & Pick<CartItem, 'id'>
        & { variant: (
          { __typename?: 'ProductVariant' }
          & Pick<ProductVariant, 'id' | 'name'>
          & { asset: (
            { __typename?: 'ProductVariantAsset' }
            & Pick<ProductVariantAsset, 'id'>
            & { asset: (
              { __typename?: 'Asset' }
              & Pick<Asset, 'preview'>
            ) }
          ) }
        ), store: (
          { __typename?: 'Store' }
          & Pick<Store, 'id' | 'storeName'>
        ), price: (
          { __typename?: 'ProductVariantPrice' }
          & Pick<ProductVariantPrice, 'id' | 'price'>
        ) }
      )> }
    )> }
  ) }
);

export type GetUserAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAddressQuery = (
  { __typename?: 'Query' }
  & { GetUserAddress: Array<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'fullName' | 'addressLine' | 'city' | 'state' | 'landmark' | 'postalCode' | 'phoneNumber' | 'addressType'>
  )> }
);

export type GetProductVariantByProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductVariantByProductQuery = (
  { __typename?: 'Query' }
  & { getProductVariantByProduct: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name'>
    & { product: (
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'productName'>
      & { options: Array<(
        { __typename?: 'ProductOptionGroup' }
        & Pick<ProductOptionGroup, 'id' | 'name' | 'code'>
        & { options: Array<(
          { __typename?: 'ProductOption' }
          & Pick<ProductOption, 'id' | 'name' | 'code'>
        )> }
      )> }
    ), asset: (
      { __typename?: 'ProductVariantAsset' }
      & Pick<ProductVariantAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview' | 'source'>
      ) }
    ), price?: Maybe<Array<(
      { __typename?: 'ProductVariantPrice' }
      & Pick<ProductVariantPrice, 'id' | 'price'>
      & { store?: Maybe<(
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'storeName'>
      )> }
    )>>, seo?: Maybe<(
      { __typename?: 'Seo' }
      & Pick<Seo, 'id' | 'urlKey' | 'metatitle' | 'metadesc' | 'metakeywords'>
    )> }
  )> }
);

export type QueryFacetQueryVariables = Exact<{
  id: Scalars['ID'];
  collection?: Maybe<Scalars['ID']>;
}>;


export type QueryFacetQuery = (
  { __typename?: 'Query' }
  & { queryFacet: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'productName' | 'slug'>
    & { collection?: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name'>
    )>, featuredAsset: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'preview' | 'source'>
    ) }
  )> }
);

export type SingProductInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SingProductInfoQuery = (
  { __typename?: 'Query' }
  & { singProductInfo: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'productName'>
  ) }
);

export type SingProductPriceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SingProductPriceQuery = (
  { __typename?: 'Query' }
  & { singProductPrice: (
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id'>
    & { price?: Maybe<Array<(
      { __typename?: 'ProductVariantPrice' }
      & Pick<ProductVariantPrice, 'id' | 'price' | 'taxIncluded'>
      & { promoprice?: Maybe<(
        { __typename?: 'PromotionVariantPrice' }
        & Pick<PromotionVariantPrice, 'id' | 'priceType' | 'value'>
      )>, store?: Maybe<(
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'storeName'>
        & { vendor?: Maybe<(
          { __typename?: 'Vendor' }
          & Pick<Vendor, 'id'>
        )> }
      )> }
    )>> }
  ) }
);

export type GetStocksAndZipAvailabilityQueryVariables = Exact<{
  zipf: Scalars['Int'];
  variantId: Scalars['ID'];
  storeId: Scalars['ID'];
}>;


export type GetStocksAndZipAvailabilityQuery = (
  { __typename?: 'Query' }
  & { GetStocksAndZipAvailability: (
    { __typename?: 'StockZip' }
    & Pick<StockZip, 'zip' | 'stock'>
  ) }
);


export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
  LoginUser(email: $email, password: $password) {
    user {
      id
      email
      verified
      verificationToken
      lastLogin
      firstName
      lastName
      phoneNumber
    }
    token
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const UpdateAccountInfoDocument = gql`
    mutation UpdateAccountInfo($lname: String!, $fname: String!, $phone: String!) {
  UpdateAccountInfo(lname: $lname, fname: $fname, phone: $phone) {
    id
    email
  }
}
    `;
export type UpdateAccountInfoMutationFn = Apollo.MutationFunction<UpdateAccountInfoMutation, UpdateAccountInfoMutationVariables>;

/**
 * __useUpdateAccountInfoMutation__
 *
 * To run a mutation, you first call `useUpdateAccountInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountInfoMutation, { data, loading, error }] = useUpdateAccountInfoMutation({
 *   variables: {
 *      lname: // value for 'lname'
 *      fname: // value for 'fname'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useUpdateAccountInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountInfoMutation, UpdateAccountInfoMutationVariables>) {
        return Apollo.useMutation<UpdateAccountInfoMutation, UpdateAccountInfoMutationVariables>(UpdateAccountInfoDocument, baseOptions);
      }
export type UpdateAccountInfoMutationHookResult = ReturnType<typeof useUpdateAccountInfoMutation>;
export type UpdateAccountInfoMutationResult = Apollo.MutationResult<UpdateAccountInfoMutation>;
export type UpdateAccountInfoMutationOptions = Apollo.BaseMutationOptions<UpdateAccountInfoMutation, UpdateAccountInfoMutationVariables>;
export const CreateNewAddressDocument = gql`
    mutation CreateNewAddress($fullName: String!, $addressLine: String!, $city: String!, $state: String!, $landmark: String!, $postalCode: String!, $phoneNumber: String!, $type: AddressType!) {
  CreateNewAddress(fullName: $fullName, addressLine: $addressLine, city: $city, state: $state, landmark: $landmark, postalCode: $postalCode, phoneNumber: $phoneNumber, type: $type) {
    id
  }
}
    `;
export type CreateNewAddressMutationFn = Apollo.MutationFunction<CreateNewAddressMutation, CreateNewAddressMutationVariables>;

/**
 * __useCreateNewAddressMutation__
 *
 * To run a mutation, you first call `useCreateNewAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewAddressMutation, { data, loading, error }] = useCreateNewAddressMutation({
 *   variables: {
 *      fullName: // value for 'fullName'
 *      addressLine: // value for 'addressLine'
 *      city: // value for 'city'
 *      state: // value for 'state'
 *      landmark: // value for 'landmark'
 *      postalCode: // value for 'postalCode'
 *      phoneNumber: // value for 'phoneNumber'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateNewAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewAddressMutation, CreateNewAddressMutationVariables>) {
        return Apollo.useMutation<CreateNewAddressMutation, CreateNewAddressMutationVariables>(CreateNewAddressDocument, baseOptions);
      }
export type CreateNewAddressMutationHookResult = ReturnType<typeof useCreateNewAddressMutation>;
export type CreateNewAddressMutationResult = Apollo.MutationResult<CreateNewAddressMutation>;
export type CreateNewAddressMutationOptions = Apollo.BaseMutationOptions<CreateNewAddressMutation, CreateNewAddressMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($fname: String!, $lname: String!, $phone: String!, $password: String!, $email: String!) {
  CreateUser(fname: $fname, lname: $lname, phone: $phone, password: $password, email: $email) {
    user {
      id
      email
      phoneNumber
      verified
      firstName
      lastName
    }
    token
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      fname: // value for 'fname'
 *      lname: // value for 'lname'
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const AddToCartDocument = gql`
    mutation AddToCart($userId: ID!, $store: ID!, $variant: ID!, $price: ID!) {
  addToCart(userId: $userId, store: $store, variant: $variant, price: $price) {
    id
  }
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      store: // value for 'store'
 *      variant: // value for 'variant'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, baseOptions);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const RemoveCartItemDocument = gql`
    mutation RemoveCartItem($cartId: ID!) {
  removeCartItem(cartId: $cartId) {
    id
  }
}
    `;
export type RemoveCartItemMutationFn = Apollo.MutationFunction<RemoveCartItemMutation, RemoveCartItemMutationVariables>;

/**
 * __useRemoveCartItemMutation__
 *
 * To run a mutation, you first call `useRemoveCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCartItemMutation, { data, loading, error }] = useRemoveCartItemMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *   },
 * });
 */
export function useRemoveCartItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>) {
        return Apollo.useMutation<RemoveCartItemMutation, RemoveCartItemMutationVariables>(RemoveCartItemDocument, baseOptions);
      }
export type RemoveCartItemMutationHookResult = ReturnType<typeof useRemoveCartItemMutation>;
export type RemoveCartItemMutationResult = Apollo.MutationResult<RemoveCartItemMutation>;
export type RemoveCartItemMutationOptions = Apollo.BaseMutationOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>;
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
    specs {
      id
      specs
    }
    product {
      id
      productName
      slug
      options {
        id
        name
        code
        options {
          id
          name
          code
        }
      }
      description
      variants {
        id
        name
      }
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
    price {
      id
      price
      store {
        id
        storeName
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
export const GetProductAssetDocument = gql`
    query getProductAsset($prodId: ID, $variantId: ID) {
  getProductAsset(prodId: $prodId, variantId: $variantId) {
    id
    preview
    source
  }
}
    `;

/**
 * __useGetProductAssetQuery__
 *
 * To run a query within a React component, call `useGetProductAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductAssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductAssetQuery({
 *   variables: {
 *      prodId: // value for 'prodId'
 *      variantId: // value for 'variantId'
 *   },
 * });
 */
export function useGetProductAssetQuery(baseOptions?: Apollo.QueryHookOptions<GetProductAssetQuery, GetProductAssetQueryVariables>) {
        return Apollo.useQuery<GetProductAssetQuery, GetProductAssetQueryVariables>(GetProductAssetDocument, baseOptions);
      }
export function useGetProductAssetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductAssetQuery, GetProductAssetQueryVariables>) {
          return Apollo.useLazyQuery<GetProductAssetQuery, GetProductAssetQueryVariables>(GetProductAssetDocument, baseOptions);
        }
export type GetProductAssetQueryHookResult = ReturnType<typeof useGetProductAssetQuery>;
export type GetProductAssetLazyQueryHookResult = ReturnType<typeof useGetProductAssetLazyQuery>;
export type GetProductAssetQueryResult = Apollo.QueryResult<GetProductAssetQuery, GetProductAssetQueryVariables>;
export const GetDefaultStoreDocument = gql`
    query GetDefaultStore {
  GetDefaultStore {
    id
    storeName
    phoneNumber
    officialemail
  }
}
    `;

/**
 * __useGetDefaultStoreQuery__
 *
 * To run a query within a React component, call `useGetDefaultStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDefaultStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDefaultStoreQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDefaultStoreQuery(baseOptions?: Apollo.QueryHookOptions<GetDefaultStoreQuery, GetDefaultStoreQueryVariables>) {
        return Apollo.useQuery<GetDefaultStoreQuery, GetDefaultStoreQueryVariables>(GetDefaultStoreDocument, baseOptions);
      }
export function useGetDefaultStoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDefaultStoreQuery, GetDefaultStoreQueryVariables>) {
          return Apollo.useLazyQuery<GetDefaultStoreQuery, GetDefaultStoreQueryVariables>(GetDefaultStoreDocument, baseOptions);
        }
export type GetDefaultStoreQueryHookResult = ReturnType<typeof useGetDefaultStoreQuery>;
export type GetDefaultStoreLazyQueryHookResult = ReturnType<typeof useGetDefaultStoreLazyQuery>;
export type GetDefaultStoreQueryResult = Apollo.QueryResult<GetDefaultStoreQuery, GetDefaultStoreQueryVariables>;
export const GetCollectionTreeDocument = gql`
    query GetCollectionTree {
  GetCollectionTree {
    id
    name
    children {
      id
      name
      children {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetCollectionTreeQuery__
 *
 * To run a query within a React component, call `useGetCollectionTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionTreeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCollectionTreeQuery(baseOptions?: Apollo.QueryHookOptions<GetCollectionTreeQuery, GetCollectionTreeQueryVariables>) {
        return Apollo.useQuery<GetCollectionTreeQuery, GetCollectionTreeQueryVariables>(GetCollectionTreeDocument, baseOptions);
      }
export function useGetCollectionTreeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionTreeQuery, GetCollectionTreeQueryVariables>) {
          return Apollo.useLazyQuery<GetCollectionTreeQuery, GetCollectionTreeQueryVariables>(GetCollectionTreeDocument, baseOptions);
        }
export type GetCollectionTreeQueryHookResult = ReturnType<typeof useGetCollectionTreeQuery>;
export type GetCollectionTreeLazyQueryHookResult = ReturnType<typeof useGetCollectionTreeLazyQuery>;
export type GetCollectionTreeQueryResult = Apollo.QueryResult<GetCollectionTreeQuery, GetCollectionTreeQueryVariables>;
export const GetSingleCollectionDocument = gql`
    query GetSingleCollection($id: ID!) {
  GetSingleCollection(id: $id) {
    collection {
      id
      name
      description
      children {
        id
        name
      }
    }
    facetValues {
      id
      code
      facet {
        id
        code
        name
      }
    }
  }
}
    `;

/**
 * __useGetSingleCollectionQuery__
 *
 * To run a query within a React component, call `useGetSingleCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSingleCollectionQuery(baseOptions?: Apollo.QueryHookOptions<GetSingleCollectionQuery, GetSingleCollectionQueryVariables>) {
        return Apollo.useQuery<GetSingleCollectionQuery, GetSingleCollectionQueryVariables>(GetSingleCollectionDocument, baseOptions);
      }
export function useGetSingleCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleCollectionQuery, GetSingleCollectionQueryVariables>) {
          return Apollo.useLazyQuery<GetSingleCollectionQuery, GetSingleCollectionQueryVariables>(GetSingleCollectionDocument, baseOptions);
        }
export type GetSingleCollectionQueryHookResult = ReturnType<typeof useGetSingleCollectionQuery>;
export type GetSingleCollectionLazyQueryHookResult = ReturnType<typeof useGetSingleCollectionLazyQuery>;
export type GetSingleCollectionQueryResult = Apollo.QueryResult<GetSingleCollectionQuery, GetSingleCollectionQueryVariables>;
export const GetFacetsByCollectionDocument = gql`
    query GetFacetsByCollection($id: ID!) {
  GetFacetsByCollection(id: $id) {
    id
    code
    facet {
      id
      name
      code
    }
  }
}
    `;

/**
 * __useGetFacetsByCollectionQuery__
 *
 * To run a query within a React component, call `useGetFacetsByCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFacetsByCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFacetsByCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFacetsByCollectionQuery(baseOptions?: Apollo.QueryHookOptions<GetFacetsByCollectionQuery, GetFacetsByCollectionQueryVariables>) {
        return Apollo.useQuery<GetFacetsByCollectionQuery, GetFacetsByCollectionQueryVariables>(GetFacetsByCollectionDocument, baseOptions);
      }
export function useGetFacetsByCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFacetsByCollectionQuery, GetFacetsByCollectionQueryVariables>) {
          return Apollo.useLazyQuery<GetFacetsByCollectionQuery, GetFacetsByCollectionQueryVariables>(GetFacetsByCollectionDocument, baseOptions);
        }
export type GetFacetsByCollectionQueryHookResult = ReturnType<typeof useGetFacetsByCollectionQuery>;
export type GetFacetsByCollectionLazyQueryHookResult = ReturnType<typeof useGetFacetsByCollectionLazyQuery>;
export type GetFacetsByCollectionQueryResult = Apollo.QueryResult<GetFacetsByCollectionQuery, GetFacetsByCollectionQueryVariables>;
export const GetProductVariantForCollectionDocument = gql`
    query GetProductVariantForCollection($id: ID!, $limit: Int, $search: String) {
  GetProductVariantForCollection(id: $id, limit: $limit, search: $search) {
    id
    name
    asset {
      id
      asset {
        id
        preview
        source
      }
    }
  }
}
    `;

/**
 * __useGetProductVariantForCollectionQuery__
 *
 * To run a query within a React component, call `useGetProductVariantForCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductVariantForCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductVariantForCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetProductVariantForCollectionQuery(baseOptions?: Apollo.QueryHookOptions<GetProductVariantForCollectionQuery, GetProductVariantForCollectionQueryVariables>) {
        return Apollo.useQuery<GetProductVariantForCollectionQuery, GetProductVariantForCollectionQueryVariables>(GetProductVariantForCollectionDocument, baseOptions);
      }
export function useGetProductVariantForCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductVariantForCollectionQuery, GetProductVariantForCollectionQueryVariables>) {
          return Apollo.useLazyQuery<GetProductVariantForCollectionQuery, GetProductVariantForCollectionQueryVariables>(GetProductVariantForCollectionDocument, baseOptions);
        }
export type GetProductVariantForCollectionQueryHookResult = ReturnType<typeof useGetProductVariantForCollectionQuery>;
export type GetProductVariantForCollectionLazyQueryHookResult = ReturnType<typeof useGetProductVariantForCollectionLazyQuery>;
export type GetProductVariantForCollectionQueryResult = Apollo.QueryResult<GetProductVariantForCollectionQuery, GetProductVariantForCollectionQueryVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  GetCurrentUser {
    id
    email
    verified
    verificationToken
    lastLogin
    firstName
    lastName
    phoneNumber
    cart {
      id
      items {
        id
        variant {
          id
          name
          asset {
            id
            asset {
              preview
            }
          }
        }
        store {
          id
          storeName
        }
        price {
          id
          price
        }
      }
    }
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetUserAddressDocument = gql`
    query GetUserAddress {
  GetUserAddress {
    id
    fullName
    addressLine
    city
    state
    landmark
    postalCode
    phoneNumber
    addressType
  }
}
    `;

/**
 * __useGetUserAddressQuery__
 *
 * To run a query within a React component, call `useGetUserAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserAddressQuery(baseOptions?: Apollo.QueryHookOptions<GetUserAddressQuery, GetUserAddressQueryVariables>) {
        return Apollo.useQuery<GetUserAddressQuery, GetUserAddressQueryVariables>(GetUserAddressDocument, baseOptions);
      }
export function useGetUserAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserAddressQuery, GetUserAddressQueryVariables>) {
          return Apollo.useLazyQuery<GetUserAddressQuery, GetUserAddressQueryVariables>(GetUserAddressDocument, baseOptions);
        }
export type GetUserAddressQueryHookResult = ReturnType<typeof useGetUserAddressQuery>;
export type GetUserAddressLazyQueryHookResult = ReturnType<typeof useGetUserAddressLazyQuery>;
export type GetUserAddressQueryResult = Apollo.QueryResult<GetUserAddressQuery, GetUserAddressQueryVariables>;
export const GetProductVariantByProductDocument = gql`
    query getProductVariantByProduct($id: ID!) {
  getProductVariantByProduct(id: $id) {
    id
    name
    product {
      id
      productName
      options {
        id
        name
        code
        options {
          id
          name
          code
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
    price {
      id
      price
      store {
        id
        storeName
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
 * __useGetProductVariantByProductQuery__
 *
 * To run a query within a React component, call `useGetProductVariantByProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductVariantByProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductVariantByProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductVariantByProductQuery(baseOptions?: Apollo.QueryHookOptions<GetProductVariantByProductQuery, GetProductVariantByProductQueryVariables>) {
        return Apollo.useQuery<GetProductVariantByProductQuery, GetProductVariantByProductQueryVariables>(GetProductVariantByProductDocument, baseOptions);
      }
export function useGetProductVariantByProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductVariantByProductQuery, GetProductVariantByProductQueryVariables>) {
          return Apollo.useLazyQuery<GetProductVariantByProductQuery, GetProductVariantByProductQueryVariables>(GetProductVariantByProductDocument, baseOptions);
        }
export type GetProductVariantByProductQueryHookResult = ReturnType<typeof useGetProductVariantByProductQuery>;
export type GetProductVariantByProductLazyQueryHookResult = ReturnType<typeof useGetProductVariantByProductLazyQuery>;
export type GetProductVariantByProductQueryResult = Apollo.QueryResult<GetProductVariantByProductQuery, GetProductVariantByProductQueryVariables>;
export const QueryFacetDocument = gql`
    query QueryFacet($id: ID!, $collection: ID) {
  queryFacet(id: $id, collection: $collection) {
    id
    productName
    slug
    collection {
      id
      name
    }
    featuredAsset {
      id
      preview
      source
    }
  }
}
    `;

/**
 * __useQueryFacetQuery__
 *
 * To run a query within a React component, call `useQueryFacetQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryFacetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryFacetQuery({
 *   variables: {
 *      id: // value for 'id'
 *      collection: // value for 'collection'
 *   },
 * });
 */
export function useQueryFacetQuery(baseOptions?: Apollo.QueryHookOptions<QueryFacetQuery, QueryFacetQueryVariables>) {
        return Apollo.useQuery<QueryFacetQuery, QueryFacetQueryVariables>(QueryFacetDocument, baseOptions);
      }
export function useQueryFacetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryFacetQuery, QueryFacetQueryVariables>) {
          return Apollo.useLazyQuery<QueryFacetQuery, QueryFacetQueryVariables>(QueryFacetDocument, baseOptions);
        }
export type QueryFacetQueryHookResult = ReturnType<typeof useQueryFacetQuery>;
export type QueryFacetLazyQueryHookResult = ReturnType<typeof useQueryFacetLazyQuery>;
export type QueryFacetQueryResult = Apollo.QueryResult<QueryFacetQuery, QueryFacetQueryVariables>;
export const SingProductInfoDocument = gql`
    query singProductInfo($id: ID!) {
  singProductInfo(id: $id) {
    id
    productName
  }
}
    `;

/**
 * __useSingProductInfoQuery__
 *
 * To run a query within a React component, call `useSingProductInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingProductInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingProductInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingProductInfoQuery(baseOptions?: Apollo.QueryHookOptions<SingProductInfoQuery, SingProductInfoQueryVariables>) {
        return Apollo.useQuery<SingProductInfoQuery, SingProductInfoQueryVariables>(SingProductInfoDocument, baseOptions);
      }
export function useSingProductInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingProductInfoQuery, SingProductInfoQueryVariables>) {
          return Apollo.useLazyQuery<SingProductInfoQuery, SingProductInfoQueryVariables>(SingProductInfoDocument, baseOptions);
        }
export type SingProductInfoQueryHookResult = ReturnType<typeof useSingProductInfoQuery>;
export type SingProductInfoLazyQueryHookResult = ReturnType<typeof useSingProductInfoLazyQuery>;
export type SingProductInfoQueryResult = Apollo.QueryResult<SingProductInfoQuery, SingProductInfoQueryVariables>;
export const SingProductPriceDocument = gql`
    query SingProductPrice($id: ID!) {
  singProductPrice(id: $id) {
    id
    price {
      id
      price
      promoprice {
        id
        priceType
        value
      }
      taxIncluded
      store {
        id
        storeName
        vendor {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useSingProductPriceQuery__
 *
 * To run a query within a React component, call `useSingProductPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingProductPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingProductPriceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingProductPriceQuery(baseOptions?: Apollo.QueryHookOptions<SingProductPriceQuery, SingProductPriceQueryVariables>) {
        return Apollo.useQuery<SingProductPriceQuery, SingProductPriceQueryVariables>(SingProductPriceDocument, baseOptions);
      }
export function useSingProductPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingProductPriceQuery, SingProductPriceQueryVariables>) {
          return Apollo.useLazyQuery<SingProductPriceQuery, SingProductPriceQueryVariables>(SingProductPriceDocument, baseOptions);
        }
export type SingProductPriceQueryHookResult = ReturnType<typeof useSingProductPriceQuery>;
export type SingProductPriceLazyQueryHookResult = ReturnType<typeof useSingProductPriceLazyQuery>;
export type SingProductPriceQueryResult = Apollo.QueryResult<SingProductPriceQuery, SingProductPriceQueryVariables>;
export const GetStocksAndZipAvailabilityDocument = gql`
    query GetStocksAndZipAvailability($zipf: Int!, $variantId: ID!, $storeId: ID!) {
  GetStocksAndZipAvailability(zipf: $zipf, variantId: $variantId, storeId: $storeId) {
    zip
    stock
  }
}
    `;

/**
 * __useGetStocksAndZipAvailabilityQuery__
 *
 * To run a query within a React component, call `useGetStocksAndZipAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStocksAndZipAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStocksAndZipAvailabilityQuery({
 *   variables: {
 *      zipf: // value for 'zipf'
 *      variantId: // value for 'variantId'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useGetStocksAndZipAvailabilityQuery(baseOptions?: Apollo.QueryHookOptions<GetStocksAndZipAvailabilityQuery, GetStocksAndZipAvailabilityQueryVariables>) {
        return Apollo.useQuery<GetStocksAndZipAvailabilityQuery, GetStocksAndZipAvailabilityQueryVariables>(GetStocksAndZipAvailabilityDocument, baseOptions);
      }
export function useGetStocksAndZipAvailabilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStocksAndZipAvailabilityQuery, GetStocksAndZipAvailabilityQueryVariables>) {
          return Apollo.useLazyQuery<GetStocksAndZipAvailabilityQuery, GetStocksAndZipAvailabilityQueryVariables>(GetStocksAndZipAvailabilityDocument, baseOptions);
        }
export type GetStocksAndZipAvailabilityQueryHookResult = ReturnType<typeof useGetStocksAndZipAvailabilityQuery>;
export type GetStocksAndZipAvailabilityLazyQueryHookResult = ReturnType<typeof useGetStocksAndZipAvailabilityLazyQuery>;
export type GetStocksAndZipAvailabilityQueryResult = Apollo.QueryResult<GetStocksAndZipAvailabilityQuery, GetStocksAndZipAvailabilityQueryVariables>;