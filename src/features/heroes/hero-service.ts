import axios from 'axios'
import { IHeroModel } from './hero-types'

const api = axios.create({
  baseURL: 'http://localhost:5000/',
})

export async function getHeroes() {
  return await api.get<IHeroModel[]>('heroes')
}

export async function deleteHero(id: string) {
  return await api.delete<void>('heroes/' + id)
}

export async function postHero(newHero: IHeroModel) {
  return await api.post<IHeroModel>('heroes', newHero)
}

export async function putHero(updateHero: IHeroModel) {
  return await api.put<void>('heroes', updateHero)
}
