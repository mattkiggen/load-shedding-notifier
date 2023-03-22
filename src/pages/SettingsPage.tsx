import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

function SettingsPage() {
  const toast = useToast();
  const [apiKey, setApiKey] = useState('');
  const [show, setShow] = useState(false);

  const handleSave = () => {
    localStorage.setItem('api-key', apiKey);
    toast({
      description: 'Settings saved!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    const key = localStorage.getItem('api-key');
    if (key) setApiKey(key);
  }, []);

  return (
    <>
      <Text fontSize='sm' mb='8px'>
        API Key:
      </Text>
      <InputGroup mb='16px'>
        <Input
          placeholder='Your api key here'
          value={apiKey}
          type={show ? 'text' : 'password'}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button onClick={() => setShow(!show)} size='sm' height='1.75rem'>
            Show
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button onClick={handleSave}>Save</Button>
    </>
  );
}

export default SettingsPage;
