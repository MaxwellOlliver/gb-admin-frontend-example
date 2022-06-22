import { ThemeProvider } from "styled-components";
import { theme } from "@/config/theme";
import Routes from "@/routes";
import GlobalStyles from "./global/globalStyles";
import GlobalFonts from "./global/globalFonts";
import { SidebarProvider } from "./context/Sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      <SidebarProvider>
        <Routes />
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
