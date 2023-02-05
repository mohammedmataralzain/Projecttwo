import { Container} from "../../styles/Container";
import Logo from "../Logo";
import logo from "../../images/logo1.png";
import logo2 from "../../images/Logo.png";
import logo3 from "../../images/Subtract.png";
import { NavLink } from "react-router-dom";

import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { Footr, Icon, Icons, Row } from "./Style";


const socialIcons = [
  <BsFacebook />,
  <BsTwitter />,
  <BsLinkedin />,
  <BsInstagram />,
  <BsYoutube />,
];

const links = [
  {
    title: "About",
    links: ["About Us", "Find store", "Categories", "Blogs"],
    li: true,
  },
  {
    title: "Partnership",
    links: ["About Us", "Find store", "Categories", "Blogs"],
    li: true,
  },
  {
    title: "Information",
    links: ["Help Center", "Money Refund", "Shipping", "Contact us"],
    li: true,
  },
  {
    title: "For users",
    links: ["Login", "Register", "Settings", "My Orders"],
    li: true,
  },
  {
    title: "Get app",
    links: [logo2, logo3],
    li: false,
  },
];

const Footer = () => {
  return (
    <>
        <Footr>
      <Container>
          <div className="colums">
            <div className="firstColum">
              <NavLink to="/">
                <Logo src={logo} logo="false" />
              </NavLink>
              <p>
                Best information about the company gies here but now lorem ipsum
                is
              </p>
              <Icons>
                {socialIcons.map((icon, index) => {
                  return (
                    <Icon className="icon" key={index}>
                      {icon}
                    </Icon>
                  );
                })}
              </Icons>
            </div>
            {links.map(({ title, links, li }) => {
              return (
                <div className="links" key={title}>
                  <h3>{title}</h3>
                  <ul>
                    {links.map((link) =>
                      li === true ? (
                        <li key={link}>
                          <a href="">{link}</a>
                        </li>
                      ) : (
                        <Logo src={link} logo="true" />
                      )
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
      </Container>
        </Footr>
      <Row>
        <Container className="ContainerSection">
          <p>© {new Date().getFullYear()}  Ecommerce.</p>
          <select>
            <option>English</option>
          </select>
        </Container>
      </Row>
    </>
  );
};

export default Footer;
