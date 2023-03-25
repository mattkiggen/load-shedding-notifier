import { Box, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <HStack spacing='16px'>
      <Link to='/'>Dashboard</Link>
      <Link to='/settings'>Settings</Link>
    </HStack>
  );
}

export default Navigation;
