import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Container } from "./styles";

export default function Dashboard(): JSX.Element {
  return (
    <Container>
      <Sidebar />
      <Navbar />
      <div className="dashboard__wrapper">
        <Outlet />
      </div>
    </Container>
  );
}
