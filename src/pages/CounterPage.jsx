import { useReducer } from "react";

const CounterPage = () => {
  // const [counter , setCounter] = useState(0)

  // const increase = ()=>{
  //   setCounter(counter+1)
  // }

  // const decrease = ()=>{
  //   setCounter(counter-1)
  // }

  const reducer = (state, action) => {
    // if (action === "increase") return state + 1;
    // else if (action === "decrease") return state - 1;
    // else state;
    const {type, num} = action
    switch(type){
      case "increase": return state+num
      case "decrease": return state-num
      default: state;
    }

  };

  const [counter, dispatch] = useReducer(reducer, 0);

  console.log(counter);

  return (
    <div>
      <button onClick={() => dispatch({type:"increase", num:3})}>+</button>
      <span>{counter}</span>
      <button onClick={() => dispatch({type:"decrease", num:2})}>-</button>
    </div>
  );
};

export default CounterPage;
