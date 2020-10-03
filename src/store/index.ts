// @ts-ignore
import logger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware, compose, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { heroReducer } from '../features/heroes/hero-reducer'
import { IHeroState } from '../features/heroes/hero-types'
import { heroSaga } from '../features/heroes/hero-saga'
import { villainReducer } from '../features/villains/villain-reducer'
import { IVillainState } from '../features/villains/villain-types'

export interface IApplicationState {
  heroReducer: IHeroState
  villainReducer: IVillainState
}

const rootReducer = combineReducers<IApplicationState>({
  heroReducer: heroReducer,
  villainReducer: villainReducer,
})

// @ts-ignore
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, sagaMiddleware, logger] // side-effect middleware
const store: Store<IApplicationState, any> = createStore(rootReducer, withDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(heroSaga)

export default store
