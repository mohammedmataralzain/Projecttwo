import { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/login";
import MyCart from "../pages/MyCart";
import Products from "../pages/Products";
import SignUp from "../pages/SignUp";
import SingleProduct from "../pages/SingleProduct";
import PrivateRoute from "../PriveteRoutes";
import ErrorPage from "../components/Error"

const MyRoutes = ()=>{
    const [ isAuthenticated,  ] = useContext(AuthContext);
    return (
        <Routes>
          <Route index element={<Navigate to='/Login' />} />
          <Route path="/Login" element={isAuthenticated?<Navigate to='/Home' />:<Login/>} />
          <Route path="/Signup" element={isAuthenticated?<Navigate to='/Home' />:<SignUp />} />
          <Route path="/Home" element={<PrivateRoute/>}>
            <Route index element={<Home/>} />
            <Route path="/Home/products" element={<Products/>} />
            <Route path="/Home/singleproduct" element={<SingleProduct/>} />
            <Route path="/Home/MyCart" element={<MyCart/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Route>
            <Route path="/*" element={<ErrorPage/>} />
        </Routes>
    )
}
export default MyRoutes;