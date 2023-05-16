"use client";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Numbers } from "./types";

export default function Home() {
  const [value, setValue] = React.useState<Numbers>(Numbers.ONE);

  console.log(value);
  return (
    <ChakraProvider>
      <RadioGroup
        onChange={(nextValue) => setValue(nextValue as Numbers)}
        value={value}
      >
        <Radio value={Numbers.ONE}>First</Radio>
        <Radio value={Numbers.TWO}>Second</Radio>
        <Radio value={Numbers.THREE}>Third</Radio>
      </RadioGroup>
    </ChakraProvider>
  );
}
