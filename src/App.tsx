import { ThemeProvider } from "styled-components";
import { theme } from "@/config/theme";
import Routes from "@/routes";
import GlobalStyles from "./global/globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
