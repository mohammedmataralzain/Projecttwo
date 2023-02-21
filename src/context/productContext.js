import { createContext, useContext } from "react";
import useCart from "../hooks/useCart";
import { products } from "../mock";

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
