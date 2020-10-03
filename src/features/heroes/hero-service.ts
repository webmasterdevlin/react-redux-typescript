import axios from 'axios';
import { HeroModel } from './hero-types';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export async function getHeroes() {
  return await api.get<HeroModel[]>('heroes');
}

export async function deleteHero(id: string) {
  return await api.delete<void>('heroes/' + id);
}

export async function postHero(newHero: HeroModel) {
  return await api.post<HeroModel>('heroes', newHero);
}

export async function putHero(updateHero: HeroModel) {
  return await api.put<void>('heroes', updateHero);
}
