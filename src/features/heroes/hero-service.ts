import { HeroModel } from './hero-types';
import { api } from '../../axios-http-client/api-config';

export async function getHeroesAxios() {
  return await api.get<HeroModel[]>('heroes');
}

export async function deleteHero(id: string) {
  return await api.delete<void>('heroes/' + id);
}

export async function postHeroAxios(newHero: HeroModel) {
  return await api.post<HeroModel>('heroes', newHero);
}

export async function putHero(updateHero: HeroModel) {
  return await api.put<void>('heroes', updateHero);
}
