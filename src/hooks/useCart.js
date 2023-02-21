import { useReducer } from "react";
import { products } from "../mock";

const initialState = {
  count: 0,
  products: [],
};

const ACTIONS = {
  ADD_TO_CART: "addToCart",
  REMOVE_FROM_CART: "removeFromCart",
  REMOVE_ALL: "removeAll",
  
};

console.log(products)
const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        count: state.count + 1,
        products: [...state.products, {...action.payload,isSelected : true}],
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        count: state.count - 1,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      };
    case ACTIONS.REMOVE_ALL:
      return {
        ...state,
        count: 0,
        products: [],
      };
     
    default:
      return state;
  }
};
const useCart = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);
  const addToCart = (product) =>
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  const removeFromCart = (product) =>
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: product.id });
  const removeAll = (product) => dispatch({ type: ACTIONS.REMOVE_ALL });

  return { state, addToCart, removeFromCart, removeAll };
};

export default useCart;
