import { ThemeProvider } from "styled-components";
import { theme } from "@/config/theme";
import Routes from "@/routes";
import GlobalStyles from "./global/globalStyles";
import GlobalFonts from "./global/globalFonts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
