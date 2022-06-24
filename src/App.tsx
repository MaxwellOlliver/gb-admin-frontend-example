import {theme} from '@/config/theme';
import Routes from '@/routes';
import {ThemeProvider} from 'styled-components';
import {SidebarProvider} from './context/Sidebar';
import GlobalFonts from './global/globalFonts';
import GlobalStyles from './global/globalStyles';

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
