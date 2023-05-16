"use client";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { NUMBERS, Numbers } from "./types";

export default function Home() {
  const [value, setValue] = React.useState<Numbers>('ONE');

  console.log(value);
  return (
    <ChakraProvider>
      <RadioGroup
        onChange={(nextValue) => setValue(nextValue as Numbers)}
        value={value}
      >
        <Radio value={NUMBERS.ONE}>First</Radio>
        <Radio value={NUMBERS.TWO}>Second</Radio>
        <Radio value={NUMBERS.THREE}>Third</Radio>
      </RadioGroup>
    </ChakraProvider>
  );
}
