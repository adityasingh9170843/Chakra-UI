import React from "react";
import { Form } from "react-router-dom";
import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
  Box,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
function Create() {
  return (
    <Box maxW="480px" p={"20px"} >
      <Form method="post" action="/create" >
        <Fieldset.Root size="lg" maxW="md">
          <Stack>
            <Fieldset.Legend>Contact details</Fieldset.Legend>
            <Fieldset.HelperText>
              Please provide your contact details below.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input name="name" />
              <Fieldset.HelperText>Enter your name above</Fieldset.HelperText>
            </Field.Root>

            <Field.Root>
              <Field.Label>Task Description</Field.Label>
              <Textarea
                placeholder="Enter your task description here"
                name="description"
              />
            </Field.Root>

            <Field.Root>
              <Checkbox.Root colorPalette={"red"} size={"sm"} name="isUrgent">
                <Checkbox.HiddenInput />
                <Checkbox.Control mr={2} />
                <Checkbox.Label>Urgent?</Checkbox.Label>
              </Checkbox.Root>
            </Field.Root>

            <Field.Root>
              <Field.Label>Country</Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field name="country">
                  <For each={["United Kingdom", "Canada", "United States"]}>
                    {(item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )}
                  </For>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </Field.Root>
          </Fieldset.Content>

          <Button type="submit" colorPalette={"purple"} alignSelf="flex-start">
            Submit
          </Button>
        </Fieldset.Root>
      </Form>
    </Box>
  );
}

export default Create;

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("name"),
    description: data.get("description"),
    isUrgent: data.get("isUrgent") === "",
  };
  }

