import { createContext, useContext, useReducer, useEffect, act } from "react";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 100,
};

// Reducer
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, product, size } = action.payload;

      // check existed product
      const existingItem = state.cart.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        //updated quantity
        const updatedCart = state.cart.map((item) => {
          if (item.id === id && item.size === size) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      } else {
        // add new item
        const newItem = {
          id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
          size,
        };
       
        console.log(newItem);
        
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case "REMOVE_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id || item.size !== action.payload.size
      );
      return { ...state, cart: updatedCart };
    }

    case "INCREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cart: updatedCart };
    }

    case "DECREASE_QUANTITY": {
      const updatedCart = state.cart
        .map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, cart: updatedCart };
    }

    case "CALCULATE_TOTAL":
      {
        const { total_amount, total_items } = state.cart.reduce(
          (totals, item) => {
            totals.total_items += item.quantity;
            totals.total_amount += item.quantity * item.price;
            return totals;
          },{total_amount :0 , total_items:0}
        );
        return {...state, total_amount,total_items}
      }

      

    default:
        return state
  }
  
};

// create Context
export const CartContext = createContext();

function CartContextProvider({ children }) {


  const [state, dispatch] = useReducer(CartReducer, initialState);


  const addToCart = (id,product,size)=>{
      dispatch({type:"ADD_TO_CART", payload:{id,product,size}})
  }
  const removeCart = (id,size)=>{
    dispatch({type:"REMOVE_CART", payload:{id,size}})
  }
  const increaseQuantity = (id,size)=>{
    dispatch({type:"INCREASE_QUANTITY", payload:{id,size}})
  }

  const decreaseQuantity = (id,size)=>{
    dispatch({type:"DECREASE_QUANTITY", payload:{id,size}})
  }

  

  useEffect(() => {
  dispatch({ type: "CALCULATE_TOTAL" });
}, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, dispatch, addToCart,removeCart,increaseQuantity,decreaseQuantity }}>
      { children }
    </CartContext.Provider>
  );
}
export default CartContextProvider

export const useCart = () => useContext(CartContext);
