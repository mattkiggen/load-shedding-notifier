import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Navigation from './components/Navigation';

function App() {
  return (
    <Box padding='24px'>
      <Box mb='24px'>
        <Navigation />
      </Box>
      <Outlet />
    </Box>
  );
}

export default App;
