import { createContext, useContext } from "react";
import useCart from "../hooks/useCart";

const productContext = createContext(null);

const ProductProvider = ({ children }) => {
  const cart = useCart();
  return (
    <productContext.Provider value={cart}>{children}</productContext.Provider>
  );
};

export const useProductContext = () => {
    return useContext(productContext);
}

export default ProductProvider;
