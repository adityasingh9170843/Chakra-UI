import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Dashboard() {

  

  return (
    <SimpleGrid   gap={10} minChildWidth={"250px"} p={10} >
      <Box bg="white" height={"200px"} border={"1px solid black"}>
        <Text color={{ base: "red", md: "blue" }}>Card 1</Text>
      </Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      

      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>

      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid black"}></Box>
    </SimpleGrid>
  );
}

export default Dashboard;
