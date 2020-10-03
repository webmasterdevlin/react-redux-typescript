import { api, EndPoints } from './api-config';

export async function getAxios<T>(endpoint: string) {
  return await api.get<T>(`${endpoint}`);
}

export async function getByIdAxios<T>(endpoint: string, id: string) {
  return await api.get<T>(`${endpoint}/${id}`);
}

export async function deleteAxios<T>(endpoint: string, id: string) {
  return await api.delete<T>(`${endpoint}/${id}`);
}

export async function postAxios<T>(endpoint: string, obj: T) {
  return await api.post<T>(`${endpoint}`, obj);
}

export async function putAxios<T>(endpoint: string, id: string, obj: T) {
  return await api.put<T>(`${endpoint}/${id}`, obj);
}
