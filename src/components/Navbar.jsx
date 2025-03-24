import { Box, Button, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react"


function Navbar() {
  return (
    <Flex as = "nav" p="10px" alignItems={"center"}   bg="gray.100">
        <Heading as="h1" >Ninja Dojo</Heading>
        <Spacer/>

        <HStack  spaceX={"20px"}>
        <Box bg="gray.200" p="10px">M</Box>
        <Text>aditya@samurai.dev</Text>
        <Button colorPalette="purple" >Logout</Button>
        </HStack>
    </Flex>
  )
}

export default Navbar