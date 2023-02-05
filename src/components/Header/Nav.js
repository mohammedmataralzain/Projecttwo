import { Wrraper ,StyleNav} from "./Style"


const Nav = () => {
  return (
    
    <StyleNav>
      <ul>
        <li>All category</li>
        <li>Hot offers</li>
        <li>Gift boxes</li>
        <li>Projects</li>
        <li>Menu item</li>
        <li>
          <select>
            <option>Help</option>
          </select>
        </li>
      </ul>
      <div>
        <select>
          <option>English,USD</option>
          <option>English,USD</option>
          <option>English,USD</option>
        </select>
        <select>
          <option value="1">Ship to </option>
          <option value="1">Ship to </option>
          <option value="1">Ship to </option>
          <option value="1">Ship to </option>
        </select>
      </div>
    </StyleNav>
    
  );
};

export default Nav;
