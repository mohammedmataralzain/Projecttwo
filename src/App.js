import React, { useEffect, useState } from "react";

import GlobalStyle from "./GlobalStyle";
import ProductProvider from "./context/productContext";
import MyRoutes from "./router/index";
import AuthContext from "./context/AuthContext";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    localStorage.getItem("token") && setAuthenticated(true);
  }, []);
  return (
    <ProductProvider>
      <GlobalStyle />
     
    <AuthContext.Provider value={[authenticated, setAuthenticated]}>
      <MyRoutes />
    </AuthContext.Provider>
    </ProductProvider>
  );
}

export default App;
