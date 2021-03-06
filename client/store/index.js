import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import songs from './songs'
import numSingers from './numSingers'
import songGenre from './songGenre'
import songType from './songType'
import singleSong from './singleSong'

const reducer = combineReducers({user, songs, numSingers, songGenre, songType, singleSong})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './songs'
export * from './numSingers'
export * from './songGenre'
export * from './songType'
export * from './singleSong'
