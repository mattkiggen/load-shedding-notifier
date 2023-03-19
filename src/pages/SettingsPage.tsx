import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

function SettingsPage() {
  const toast = useToast();
  const [areaId, setAreaId] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [show, setShow] = useState(false);

  const handleSave = () => {
    localStorage.setItem('area-id', areaId);
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
    const id = localStorage.getItem('area-id');

    if (id) setAreaId(id);
    if (key) setApiKey(key);
  }, []);

  return (
    <VStack spacing='16px' padding='16px'>
      <Input
        placeholder='Area ID'
        value={areaId}
        onChange={(e) => setAreaId(e.target.value)}
      />

      <InputGroup>
        <Input
          placeholder='API key'
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

      <Button width='100%' onClick={handleSave}>
        Save
      </Button>
    </VStack>
  );
}

export default SettingsPage;
