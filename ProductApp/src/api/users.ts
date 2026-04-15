import axios from 'axios';
import { User, UsersResponse, UserSortField } from '../types';

const BASE_URL = 'https://dummyjson.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export interface FetchUsersParams {
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
  q?: string;
}

export const fetchUsers = async (params: FetchUsersParams = {}): Promise<UsersResponse> => {
  const { sortBy, order, q, ...rest } = params;
  
  let url = '/users';
  if (q) {
    url = '/users/search';
  }

  const { data } = await api.get<UsersResponse>(url, {
    params: {
      ...rest,
      sortBy,
      order,
      q,
    },
  });
  
  return data;
};

export const fetchUserById = async (id: number): Promise<User> => {
  const { data } = await api.get<User>(`/users/${id}`);
  return data;
};
