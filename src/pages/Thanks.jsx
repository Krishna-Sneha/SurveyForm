import React, { useState } from "react";
import { Box, Text, Button, Center } from "@chakra-ui/react";

export const Thanks = () => {
  return (
    <>
      <Center
        bg="rgba(0,0,0,0.8)"
        h={{ md: "400" }}
        padding={5}
        marginX="auto"
        color="white"
        marginY="200px"
      >
        <Box>
          <Text fontSize="5xl">
            Thank you for taking your time out to fill the form!
          </Text>
          <Center>
            <Box>
              <Text margin={5} fontSize="xl">
                Your responses have been mailed to you.
              </Text>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
};
