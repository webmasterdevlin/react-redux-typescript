// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the pages are mounted sometime in your application's life.
  So, not available always
*/

import { AntiHeroStateType } from '../../features/anti-heroes/anti-hero.types';
import { heroReducer } from '../../features/heroes/hero-reducer';
import { villainReducer } from '../../features/villains/villain-reducer';
import { HeroStateType } from '../../features/heroes/hero-types';
import { VillainStateType } from '../../features/villains/villain-types';
import { AnyAction, Reducer } from 'redux';

export interface RootState {
  antiHero?: AntiHeroStateType;
  hero?: any;
  villain?: any;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
