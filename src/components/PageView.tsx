import React from "react";
import { Box, ScrollView } from "native-base";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function PageView({ children }: Props) {
  return (
    <Box flex={1} px={6} py={4} bg={"gray.100"}>
      <ScrollView>{children}</ScrollView>
    </Box>
  );
}
