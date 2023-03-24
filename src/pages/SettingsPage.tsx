import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { getApiKey, setApiKey } from '../core/storage';

function SettingsPage() {
  const toast = useToast();
  const [apiKey, setApiKeyState] = useState('');
  const [show, setShow] = useState(false);

  const handleSave = () => {
    setApiKey(apiKey);
    toast({
      description: 'Settings saved!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    const key = getApiKey();
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
          onChange={(e) => setApiKeyState(e.target.value)}
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
