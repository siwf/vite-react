/*
 * @Description: 
 * @Date: 2022-08-01 21:30:03
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-08-01 22:53:39
 */
import { ADD_COUNT, SUB_COUNT, ASYNC_ACTION } from "./constants";

const addAction = (num) => ({ type:ADD_COUNT, num})
const subAction = (num) => ({ type: SUB_COUNT, num})
const asyncAction = () => {
  return (dispatch, getState) => {
    Promise.resolve(1).then(res => {
      console.log(res)
      dispatch({
        type: ASYNC_ACTION,
        asyncData: res
      })
    })
  }
}
export {
  addAction,
  subAction,
  asyncAction
}