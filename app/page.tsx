"use client";
import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack, Heading } from "@chakra-ui/react";
import {
  NUMBERS_ENUM,
  NUMBERS_AS_CONST,
  NUMBERS_AS_CONST_VALUES,
  NUMBERS_ENUMIFY,
} from "./types";

export default function Home() {
  const [valueEnum, setValueEnum] = useState<NUMBERS_ENUM>(NUMBERS_ENUM.ONE);

  const [valueAsConst, setValueAsConst] = useState<NUMBERS_AS_CONST_VALUES>(
    NUMBERS_ENUM.ONE
  );

  const [valueEnumify, setValueEnumify] = useState<NUMBERS_ENUMIFY>(
    NUMBERS_ENUMIFY.ONE
  );

  return (
    <ChakraProvider>
      <Stack spacing={5} padding={10}>
        <Heading>Basic enum</Heading>
        <RadioGroup
          onChange={(nextValue) => setValueEnum(nextValue as NUMBERS_ENUM)}
          value={valueEnum}
        >
          <Radio padding={5} value={NUMBERS_ENUM.ONE}>
            ONE
          </Radio>
          <Radio padding={5} value={NUMBERS_ENUM.TWO}>
            TWO
          </Radio>
          <Radio padding={5} value={NUMBERS_ENUM.THREE}>
            THREE
          </Radio>
        </RadioGroup>
      </Stack>

      <Stack spacing={5} padding={10}>
        <Heading>as const enum</Heading>
        <RadioGroup
          onChange={(nextValue) =>
            setValueAsConst(nextValue as NUMBERS_AS_CONST_VALUES)
          }
          value={valueAsConst}
        >
          <Radio padding={5} value={NUMBERS_AS_CONST.ONE}>
            ONE
          </Radio>
          <Radio padding={5} value={NUMBERS_AS_CONST.TWO}>
            TWO
          </Radio>
          <Radio padding={5} value={NUMBERS_AS_CONST.THREE}>
            THREE
          </Radio>
        </RadioGroup>
      </Stack>

      <Stack spacing={5} padding={10}>
        <Heading>Enumify</Heading>
        <RadioGroup
          onChange={(nextValue) =>
            setValueEnumify(NUMBERS_ENUMIFY.enumValueOf(nextValue)!)
          }
          value={valueEnumify.enumKey}
        >
          {[...NUMBERS_ENUMIFY].map((number) => (
            <Radio key={number.enumKey} value={number.enumKey} padding={5}>
              {number.enumKey}
            </Radio>
          ))}
        </RadioGroup>
      </Stack>
    </ChakraProvider>
  );
}
