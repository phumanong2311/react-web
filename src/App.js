import { MantineProvider } from '@mantine/core';
import './App.css';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <PrivateRoute />
    </MantineProvider>
  );
}

export default App;
