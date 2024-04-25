import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incremetHandler = () => {
     dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }

  const decrementHandler = () => {
    dispatch (counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch (counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increase by {10}</button>
        <button onClick={incremetHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
