import { Box, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  path: string;
  isActive: boolean;
  text: string;
};

function NavigationItem({ path, isActive, text }: Props) {
  return (
    <Box>
      <RouterLink to={path}>
        <Text fontSize='xs'>{text}</Text>
      </RouterLink>
      <Box
        h='2px'
        mt='4px'
        backgroundColor={isActive ? 'blue.500' : 'gray.100'}
      />
    </Box>
  );
}

export default NavigationItem;
