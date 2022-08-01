/*
 * @Description: 
 * @Date: 2022-08-01 21:30:03
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-08-01 21:33:07
 */
import { ADD_COUNT, SUB_COUNT } from "./constants";

const addAction = (num) => ({ type:ADD_COUNT, num})
const subAction = (num) => ({ type: SUB_COUNT, num})

export {
  addAction,
  subAction
}