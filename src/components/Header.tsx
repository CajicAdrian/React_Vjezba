import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { GitHubIcon } from 'assets';

export const Header = (): JSX.Element => {
  return (
    <Box>
      <Image src={GitHubIcon} />
      <Text as="h2">Github Finder</Text>
    </Box>
  );
};
