//Styles
import { Container } from "../../styles/Container";
import { Wrraper, StyleNav } from "./Style";

const links = [
  "All category",
  "Hot offers",
  "Gift boxes",
  "Projects",
  "Menu item",
  <select>
    <option>Help</option>
    <option>Help</option>
  </select>,
];
const Nav = () => {
  return (
    <Wrraper>
      <Container>
        <StyleNav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
          <div>
            <select>
              <option>English,USD</option>
            </select>
            <select>
              <option value="1">Ship to </option>
            </select>
          </div>
        </StyleNav>
      </Container>
    </Wrraper>
  );
};

export default Nav;
