// Product types
export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

// User types
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;
  age: number;
  gender: string;
  phone: string;
  role: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

// Sort & Filter interfaces
export type UserSortField = 'name_asc' | 'name_desc' | 'id_asc' | 'id_desc';
export type ProductSortField = 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';

export interface SortOption<T> {
  label: string;
  value: T;
}

export interface UserFilterState {
  lastName: string;
  emailDomain: string;
  sort: UserSortField | null;
}

export interface FilterState {
  search: string;
  sort: ProductSortField | null;
  category: string | null;
}

// Navigation types
export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: number };
  UserList: undefined;
};
