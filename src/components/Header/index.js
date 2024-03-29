//Components
import Logo from "../Logo";
import Burger from "./Burger";

//Container
import { Container } from "../../styles/Container";

// icons
import { HiShoppingCart } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

//imges
import logo from "../../images/logo1.png";

import { StyleHeader, Wrraper, Ul } from "./Style";

//React-Router
import { Link, NavLink } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Header = (props) => {
 
  const { state } = useProductContext();
  const [,setAuthenticated]= useContext(AuthContext);


  return (
    <Wrraper>
      <Container>
        <StyleHeader>
          <Burger />
          
          <NavLink to="/">
            <Logo src={logo} logo="false" />
          </NavLink>
          {props.Search}
          <Ul>
            <Link to="/Home">
              <li>
                <CgProfile className="icon" />
                Profile
              </li>
            </Link>
            <Link to="/Home/singleproduct">
            <li>
              <MdMessage className="icon" />
              Message
            </li>
            </Link>
            <Link to="/Home/products">
              <li>
                <AiOutlineHeart className="icon" />
                Orders
              </li>
            </Link>
            <Link to="/Home/MyCart">
              <li className="cart">
                <span>{state.count}</span>
                <HiShoppingCart className="icon" />
                Mycart
              </li>
            </Link>
            <li>
            <button onClick={()=>{
            setAuthenticated(false);
            localStorage.removeItem('token');
          }}>logout</button>
            </li>
          </Ul>
            
        </StyleHeader>
      </Container>
      {props.Nav}
    </Wrraper>
  );
};

export default Header;
