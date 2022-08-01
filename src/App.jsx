// import { useState, useEffect } from "react";

// import store from './store/index'
import { addAction } from "./store/actions";

import { connect } from "react-redux";
// 1.mapStateToProps方法：告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
// 2.mapDispatchToProps方法：告诉React-Redux, 需要将哪些派发的任务映射到当前组件的props上
const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(addAction(1));
    },
  };
};

function App(props) {
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
    </>
  );
}
// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App);
