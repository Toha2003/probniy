// import { useReducer } from "react";

import { useContext } from "react";
import { ProductContext } from "../context/Contexts";
import ProductCard from "../components/card/ProductCard";
import DeleteIcon from '../assets/deleteIcon.png'

const BasketPage = () => {
  // const [counter , setCounter] = useState(0)

  // const increase = ()=>{
  //   setCounter(counter+1)
  // }

  // const decrease = ()=>{
  //   setCounter(counter-1)
  // }

  // const reducer = (state, action) => {
  //   // if (action === "increase") return state + 1;
  //   // else if (action === "decrease") return state - 1;
  //   // else state;
  //   const {type, num} = action
  //   switch(type){
  //     case "increase": return state+num
  //     case "decrease": return state-num
  //     default: state;
  //   }

  // };

  // const [counter, dispatch] = useReducer(reducer, 0);

  const { cart } = useContext(ProductContext);

  const deleteProduct = (id)=>{
    console.log(id);
    
  }

  return (
    <div className="pt-5 row">
      {/* <button onClick={() => dispatch({type:"increase", num:3})}>+</button>
      <span>{{counter}}</span>
      <button onClick={() => dispatch({type:"decrease", num:2})}>-</button> */}

      <h1 className="pt-5">Saved Cards</h1>

      <div className="row">
        {cart.map((el,index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3  my-4">
            <ProductCard deleteProduct={deleteProduct} {...el}  deleteIcon={DeleteIcon}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasketPage;
