import { ThemeProvider } from "styled-components";
import { theme } from "@/config/theme";
import Routes from "@/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
