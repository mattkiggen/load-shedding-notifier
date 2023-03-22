import { MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Navigation() {
  return (
    <Menu>
      <MenuButton
        px='8px'
        py='4px'
        transition='all 0.2s'
        borderRadius='md'
        borderWidth='1px'>
        Menu <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <Link to='/'>
          <MenuItem>Dashboard</MenuItem>
        </Link>
        <Link to='/settings'>
          <MenuItem>Settings</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}

export default Navigation;
