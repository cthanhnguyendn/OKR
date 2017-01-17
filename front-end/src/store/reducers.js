import { combineReducers } from 'redux'
import locationReducer from './location'
import {user,okrGroup} from 'reducers'
import { reducer as form } from 'redux-form'


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    form,
    user,
    okrGroup,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
