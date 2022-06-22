import { FiChevronDown, FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";

import { Container } from "./styles";
import Avatar from "@/@core/components/Avatar";

export default function Navbar(): JSX.Element {
  return (
    <Container>
      <nav>
        <div className="nav__company-select">
          <label>Empresa:</label>
          <div className="company-select__input">
            <span>Greenbeltti</span>
            <FiChevronDown />
          </div>
        </div>
        <div className="nav__user-content">
          <div className="user-content__menu">
            <div className="menu__icon">
              <FiSearch size={18} />
            </div>
            <div className="menu__icon">
              <RiChat1Line size={18} />
              <div className="icon__notification"></div>
            </div>
            <div className="menu__icon">
              <MdNotificationsNone size={19} />
              <div className="icon__notification"></div>
            </div>
          </div>
          <div className="user-content__info">
            <div className="info__text-column">
              <span className="text-column__username">
                José Fernandes Silva
              </span>
              <span className="text-column__position">Head TI</span>
            </div>
            <Avatar size={42} />
          </div>
        </div>
      </nav>
    </Container>
  );
}
