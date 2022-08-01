// import { useState, useEffect } from "react";

// import store from './store/index'
import { addAction,asyncAction } from "./store/actions";

import { connect } from "react-redux";
// 1.mapStateToProps方法：告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapStateToProps = (state) => {
  return {
    count: state.count,
    asyncData: state.asyncData
  };
};
// 2.mapDispatchToProps方法：告诉React-Redux, 需要将哪些派发的任务映射到当前组件的props上
const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(addAction(1));
    },
    get() {
      dispatch(asyncAction())
    }
  };
};

function App(props) {
  console.log(props)
  return (
    <>
      {/* 3.通过props来使用redux中保存的数据 */}
      <p>{props.count}</p>
      <button
        onClick={() => {
          props.increment();
        }}
      >
        递增
      </button>
      <p>{props.asyncData}</p>
      <button onClick={ () => props.get()}>异步</button>
    </>
  );
}
// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App);
