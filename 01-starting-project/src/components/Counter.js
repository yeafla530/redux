import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
  // useSelector : 저장소가 관리하는 상태 부분을 자동으로 선택 가능
  // useSelector를 사용하면 자동으로 구독 설정
  // counter가 변경될 때마다 자동으로 업데이트 되고 최신 카운터 받음
  const counter = useSelector(state => state.counter)
  // dispatch를 호출할 수 있는 function
  const dispatch = useDispatch();

  // type은 Redux Store reducer에서 사용하는 indentifiers중 하나여야함
  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }
  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE {counter}--</div>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
