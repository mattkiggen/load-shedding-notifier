import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [route, setRoute] = useState(<MainPage />);
  return (
    <>
      {route}
      <Button onClick={() => setRoute(<MainPage />)}>Main</Button>
      <Button onClick={() => setRoute(<SettingsPage />)}>Settings</Button>
    </>
  );
}

export default App;
