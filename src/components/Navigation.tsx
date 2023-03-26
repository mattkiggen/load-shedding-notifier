import { HStack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import NavigationItem from './NavigationItem';

function Navigation() {
  const location = useLocation();

  return (
    <HStack spacing='16px'>
      <NavigationItem
        path='/'
        isActive={location.pathname === '/'}
        text='Dashboard'
      />
      <NavigationItem
        path='/settings'
        isActive={location.pathname === '/settings'}
        text='Settings'
      />
    </HStack>
  );
}

export default Navigation;
