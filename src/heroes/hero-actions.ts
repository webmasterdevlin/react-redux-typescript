/* action creators of Saga */
import {IHeroModel, HeroActionTypes} from "./hero-types";
import {Action} from "redux";

interface IAction extends Action{
    readonly payload?: any
}

export const fetchHeroes = (): IAction => ({
    type: HeroActionTypes.FETCH_HEROES_REQUEST,
});

export const removeHero = (id: string): IAction => ({
    type: HeroActionTypes.REMOVE_HERO_REQUEST,
    payload: id,
});

export const addHero = (hero: IHeroModel): IAction => ({
    type: HeroActionTypes.ADD_HERO_REQUEST,
    payload: hero,
});

export const updateHero = (hero: IHeroModel) => ({
   type: HeroActionTypes.UPDATE_HERO_REQUEST,
   payload: hero,
});
