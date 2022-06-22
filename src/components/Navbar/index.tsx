import { Container } from "./styles";
import { FiPhone, FiBell } from "react-icons/fi";
import { theme } from "../../config/theme";
import useSidebar from "../../hooks/useSidebar";
import Avatar from "@/@core/components/Avatar";

export default function Navbar(): JSX.Element {
  const { toggle } = useSidebar();
  return (
    <Container>
      <nav>
        <div className="user-content">
          <FiPhone size={20} color="#fff" />
          <FiBell size={20} color="#fff" />
          <Avatar />
        </div>
      </nav>
    </Container>
  );
}
