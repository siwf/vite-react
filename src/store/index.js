/*
 * @Description: 
 * @Date: 2022-08-01 17:32:30
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-08-01 21:34:30
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
