/*
 * @Description: 
 * @Date: 2022-08-01 21:30:08
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-08-01 22:52:31
 */

import {
  ADD_COUNT,
  SUB_COUNT,
  ASYNC_ACTION
} from './constants';

let initialState = {
  count: 200,
  asyncData: 10
}
function reducer (state = initialState, action) {
  const { type } = action;
  console.log(action)
  switch (type) {
    case ADD_COUNT:
      return { count: state.count + action.num, asyncData: state.asyncData };
    case SUB_COUNT:
      return { count: state.count + action.num, asyncData: state.asyncData };
    case ASYNC_ACTION:
      return { count: state.count, asyncData: action.asyncData }
    default:
      return state;
  }
  
}
export default reducer