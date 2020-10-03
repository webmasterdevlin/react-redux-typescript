import axios from 'axios';
import { VillainModel } from './villain-types';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export async function getVillains() {
  return await api.get<VillainModel[]>('villains');
}

export async function deleteVillain(id: string) {
  return await api.delete<void>('villains/' + id);
}

export async function postVillain(newVillain: VillainModel) {
  return await api.post<VillainModel>('villains', newVillain);
}

export async function putVillain(updateVillain: VillainModel) {
  return await api.put<void>('villains', updateVillain);
}
