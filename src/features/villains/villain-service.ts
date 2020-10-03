import { VillainModel } from './villain-types';
import { api } from '../../axios-http-client/api-config';

export async function getVillainsAxios() {
  return await api.get<VillainModel[]>('villains');
}

export async function deleteVillainAxios(id: string) {
  return await api.delete<void>('villains/' + id);
}

export async function postVillainAxios(newVillain: VillainModel) {
  return await api.post<VillainModel>('villains', newVillain);
}

export async function putVillainAxios(updateVillain: VillainModel) {
  return await api.put<void>('villains', updateVillain);
}
