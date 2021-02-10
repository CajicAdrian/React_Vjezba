import React from 'react';
import { Text, Box } from '@chakra-ui/react';

export const About = (): JSX.Element => {
  return (
    <Box>
      <Text as="h1">About this App</Text>
      <Text as="p">App to search Gihub users</Text>
      <Text as="p">Version 1.0.0</Text>
    </Box>
  );
};
