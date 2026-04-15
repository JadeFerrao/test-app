import axios from 'axios';
import { Product, ProductsResponse, Category } from '../types';

const BASE_URL = 'https://dummyjson.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const fetchProducts = async (): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsResponse>('/products?limit=100');
  return data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
};

export const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await api.get<Category[]>('/products/categories');
  return data;
};
