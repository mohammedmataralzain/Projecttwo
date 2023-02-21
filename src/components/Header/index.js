//Components
import Logo from "../Logo";
import Burger from "./Burger";
import Button from "../Button";
import Nav from "./Nav";

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

const Header = (props) => {
  const icons = [
    { icon: <CgProfile className="icon" />, title: "Profile" },
    { icon: <MdMessage className="icon" />, title: "Message" },
    { icon: <AiOutlineHeart className="icon" />, title: "Orders" },
    { icon: <HiShoppingCart className="icon" />, title: "Mycart" },
  ];
  const { state } = useProductContext();

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
            <Link to="/">
              <li>
                <CgProfile className="icon" />
                Profile
              </li>
            </Link>
            <li>
              <MdMessage className="icon" />
              Message
            </li>
            <Link to="/Products">
              <li>
                <AiOutlineHeart className="icon" />
                Orders
              </li>
            </Link>
            <Link to="/MyCart">
              <li className="cart">
                <span>{state.count}</span>
                <HiShoppingCart className="icon" />
                Mycart
              </li>
            </Link>
          </Ul>
        </StyleHeader>
      </Container>
      {props.Nav}
    </Wrraper>
  );
};

export default Header;
