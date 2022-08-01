// import { useState, useEffect } from "react";

// import store from './store/index'
import { addAction } from './store/actions'


// console.log(store.getState())
// console.log(store.dispatch(addAction(1)))
// console.log(store.getState())




function App() {
  return (
    <>
    <button onClick={() => { store.dispatch(addAction(1)) }}>加一</button>
    <div>{store.getState().count}</div>
    </>
  )
}
export default App