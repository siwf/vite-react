/*
 * @Description: 
 * @Date: 2022-08-01 21:30:08
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-08-01 21:38:54
 */

import {
  ADD_COUNT,
  SUB_COUNT
} from './constants';

let initialState = {
  count: 200
}
function reducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD_COUNT:
      return { count: state.count + action.num };
    case SUB_COUNT:
      return { count: state.count + action.num };
    default:
      return state;
  }
  
}
export default reducer