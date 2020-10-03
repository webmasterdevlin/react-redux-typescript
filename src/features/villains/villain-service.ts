import axios from 'axios';
import { IVillainModel } from './villain-types';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export async function getVillains() {
  return await api.get<IVillainModel[]>('villains');
}

export async function deleteVillain(id: string) {
  return await api.delete<void>('villains/' + id);
}

export async function postVillain(newVillain: IVillainModel) {
  return await api.post<IVillainModel>('villains', newVillain);
}

export async function putVillain(updateVillain: IVillainModel) {
  return await api.put<void>('villains', updateVillain);
}
