//styles
import { Container } from "../../styles/Container";

//component
import Logo from "../Logo";

//images
import logo from "../../images/logo1.png";
import logo2 from "../../images/Logo.png";
import logo3 from "../../images/Subtract.png";

//react-router
import { NavLink } from "react-router-dom";

//icons
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

import { FooterStyle, Row } from "./Style";

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
      <FooterStyle>
        <Container>
          <div className="columns">
            <div>
              <NavLink to="/">
                <Logo src={logo} logo="false" />
              </NavLink>
              <p>
                Best information about the company gies here but now lorem ipsum
                is
              </p>
              <div className="icons">
                {socialIcons.map((icon, index) => {
                  return (
                    <span className="icon" key={index}>
                      {icon}
                    </span>
                  );
                })}
              </div>
            </div>
            {links.map(({ title, links, li }, id) => {
              return (
                <div className="links" key={id}>
                  <h3>{title}</h3>
                  <ul>
                    {links.map((link, id) =>
                      li === true ? (
                        <li key={id}>
                          <a href="/">{link}</a>
                        </li>
                      ) : (
                        <Logo src={link} logo="true" key={id} />
                      )
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </FooterStyle>
      <Row>
        <Container className="bottomFooter">
          <p>© {new Date().getFullYear()} E-commerce</p>
          <select>
            <option>English</option>
          </select>
        </Container>
      </Row>
    </>
  );
};

export default Footer;
