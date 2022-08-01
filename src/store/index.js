/*
 * @Description: 
 * @Date: 2022-08-01 17:32:30
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-08-01 22:38:23
 */
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk  from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

export default store
