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
import Orders from "../../images/Orders.png";
import Profile from "../../images/Profile.png";
import Message from "../../images/Message.png";
import MyCart from "../../images/My cart.png";
import { StyleHeader, Wrraper, Ul, FormStyle } from "./Style";

//React-Router
import { NavLink } from "react-router-dom";
import { RiLinksFill } from "react-icons/ri";

const Header = () => {
  const icons = [
    { icon: <CgProfile className="icon" />, title: "Profile" },
    { icon: <MdMessage className="icon" />, title: "Message" },
    { icon: <AiOutlineHeart className="icon" />, title: "Orders" },
    { icon: <HiShoppingCart className="icon" />, title: "Mycart" },
  ];
  return (
    <Wrraper>
      <Container>
        <StyleHeader>
          <Burger />  
          <NavLink to="/">
            <Logo src={logo} logo="false" />
          </NavLink>
          <FormStyle>
            <input type="text" placeholder="Search" />
            <select name="cars" id="cars">
              <option value="volvo">All category</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <Button background="#0D6EFD">Search</Button>
          </FormStyle>
          <Ul>
            {icons.map((icon, index) => (
              <li key={index}>
                {icon.icon}
                {icon.title}
              </li>
            ))}
          </Ul>
        </StyleHeader>
      </Container>
      <Nav />
    </Wrraper>
  );
};

export default Header;
