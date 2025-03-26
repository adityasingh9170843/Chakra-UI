import { List } from "@chakra-ui/react";
import { Icon, Tabs } from "@chakra-ui/react";
import React from "react";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";
import { HiBanknotes } from "react-icons/hi2";



function Profile() {
  return (
    <Tabs.Root
      mt="40px"
      p="20px"
      colorPalette={"purple"}
      defaultValue="tab-1"
      variant={"enclosed"}
    >
      <Tabs.List>
        <Tabs.Trigger
          value="tab-1"
          _selected={{ colorPalette: "red", bg: "cyan.100" }}
        >
          Account Info
        </Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Tasks</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Advanced Tasks</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab-1">
        <List.Root gap={4} listStyle={"none"}>
          <List.Item >
            <Icon as={HiAcademicCap} mr={3} />
            Email:aditya@ninja.slash
          </List.Item>
          <List.Item>
            <Icon as={HiBanknotes} mr={3}  />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, rem?
          </List.Item>
          <List.Item>
            <Icon as={HiBadgeCheck} mr={3} />
            yes
          </List.Item>
        </List.Root>
      </Tabs.Content>

      <Tabs.Content value="tab-2">Tasks</Tabs.Content>

      <Tabs.Content value="tab-3">Advanced Tasks</Tabs.Content>
    </Tabs.Root>
  );
}

export default Profile;
