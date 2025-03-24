import { List, HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";

function Sidebar() {
  return (
    <List.Root color="white" fontSize="1.2rem" gap={7} listStyle={"none"}>
      <List.Item>
        <NavLink to="/">
          <HStack spacing="20px" align="center">
            <Icon as={HiHeart} color="red" boxSize="24px" />
            <Text>DashBoard</Text>
          </HStack>
        </NavLink>
      </List.Item>
      <List.Item>
        <NavLink to="/create">
          <HStack spacing="10px" align="center">
            <Icon as={HiHeart} color="red" boxSize="24px" />
            <Text>New Task</Text>
          </HStack>
        </NavLink>
      </List.Item>
      <List.Item>
        <NavLink to="/profile">
          <HStack spacing="10px" align="center">
            <Icon as={HiHeart} color="red" boxSize="24px" />
            <Text>Profile</Text>
          </HStack>
        </NavLink>
      </List.Item>
    </List.Root>
  );
}

export default Sidebar;
