
import 'App.css';
import { ThemeProvider } from '@mui/material';
import Theme from 'assets/styles/Theme';
import AuthBox from 'components/auth/AuthBox';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthBox/>
    </ThemeProvider>
  )
}

export default App;
