import { BsEye, Bs1SquareFill } from "react-icons/bs";
import {
  Box,
  Flex,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  SimpleGrid,
  Text,
  CardHeader,
  HStack,
  
  
} from "@chakra-ui/react";
import React from "react";

import { SiWritedotas } from "react-icons/si";

function Dashboard() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SimpleGrid minChildWidth={"300px"} gap={10}>
      {data && data.length ? (
        data.map((task) => (
          <Card.Root key={task.id} divideY={1} divideColor={"gray.200"}>
            <CardHeader>
              <Flex gap={"5"}>
                <Box w={"50px"} h={"50px"}>
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size={"sm"}>
                    {task.title}
                  </Heading>
                  <Text>{task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody my={6}>
              <Text>{task.description}</Text>
            </CardBody>

            

            <CardFooter py={4}>
              <HStack>
                <Button colorPalette={"teal"} variant={"outline"}>
                  
                  <BsEye />
                  Watch
                </Button>
                <Button variant={"ghost"}>
                  <SiWritedotas />
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card.Root>
        ))
      ) : (
        <Text>No tasks found</Text>
      )}
    </SimpleGrid>
  );
}

export default Dashboard;
