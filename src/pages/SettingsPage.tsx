import {
  Box,
  Button,
  Checkbox,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { API_KEY, AREA_ID, AUTO_SHUTDOWN } from "../core/constants";

function SettingsPage() {
  const toast = useToast();
  const [areaId, setAreaId] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [autoShutdown, setAutoShutdown] = useState(false);
  const [show, setShow] = useState(false);

  const handleSave = () => {
    localStorage.setItem(AREA_ID, areaId);
    localStorage.setItem(API_KEY, apiKey);

    toast({
      description: "Settings saved!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    setAreaId(localStorage.getItem(AREA_ID) ?? "");
    setApiKey(localStorage.getItem(API_KEY) ?? "");
    setAutoShutdown(Boolean(localStorage.getItem(AUTO_SHUTDOWN)));
  }, []);

  return (
    <VStack align="start" spacing="16px">
      <Box w="100%">
        <Text fontSize="sm" mb="8px">
          Area id:
        </Text>
        <Input
          placeholder="Your AreaId"
          value={areaId}
          onChange={(e) => setAreaId(e.target.value)}
        />
      </Box>

      <Box w="100%">
        <Text fontSize="sm" mb="8px">
          Api key:
        </Text>
        <InputGroup>
          <Input
            placeholder="Your api key here"
            value={apiKey}
            type={show ? "text" : "password"}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button onClick={() => setShow(!show)} size="sm" height="1.75rem">
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>

      <Checkbox
        isChecked={autoShutdown}
        onChange={() => setAutoShutdown(!autoShutdown)}
      >
        Automatically shutdown PC
      </Checkbox>

      <Button onClick={handleSave}>Save</Button>
    </VStack>
  );
}

export default SettingsPage;
