import { useState, useReducer } from 'react';
import { produce } from 'immer';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      // return { ...state, count: state.count + 1 };
      state.count = state.count + 1;
      return;
    case 'decrement':
      // return { ...state, count: state.count - 1 };
      state.count = state.count - 1;
      return;
    case 'setValueToAdd':
      // return { ...state, valueToAdd: action.payload };
      state.valueToAdd = action.payload;

      return;
    case 'addValueToCount':
      // return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
      state.count = state.count + state.valueToAdd;
      return;
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: 'decrement' });
  };

  const handleChange = (event) => {
    //  setValueToAdd(Number(event.target.value) || 0);
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({ type: 'setValueToAdd', payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({ type: 'addValueToCount' });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is : {state.count} </h1>
      <div className="flex flex-row">
        <Button onClick={decrement} danger>
          Decrement
        </Button>
        <Button onClick={increment} primary>
          Increment
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
