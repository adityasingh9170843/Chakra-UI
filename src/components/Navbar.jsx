import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  Avatar,
  Float,
  Circle,
} from "@chakra-ui/react";
import { toaster, Toaster } from "@/components/ui/toaster";
import { useColorMode } from "./ui/color-mode";
function Navbar() {
  const showToast = () => {
    toaster.create({
      title: "Logout",
      description: "You have been logged out",
      duration: 5000,
      isClosable: true,
      icon: "🚀",
      position: "bottom-right",
      type: "success",
    });
  };

  const {toggleColorMode} = useColorMode()
  return (
    <Flex as="nav" p="10px" alignItems={"center"} bg="gray.100">
      <Heading as="h1">Ninja Dojo</Heading>
      <Spacer />

      <HStack spaceX={"20px"}>
        <Avatar.Root colorPalette={"white"}>
          <Avatar.Fallback name="Segun Adebayo" />
          <Float placement="bottom-end" offsetX="1" offsetY="1">
            <Circle
              bg="green.500"
              size="20px"
              outline="0.2em solid"
              outlineColor="bg"
              fontSize={"xs"}
              color={"white"}
            >3</Circle>
          </Float>
          <Avatar.Image src="/img/mario.png" />
        </Avatar.Root>
        <Text>aditya@samurai.dev</Text>
        <Button colorPalette="purple" onClick={toggleColorMode}>
          Logout
        </Button>
      </HStack>
      <Toaster />
    </Flex>
  );
}

export default Navbar;
