import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { GitHubIcon } from 'assets';

interface defaultProps {
  title: string;
}

export const Header = (props: defaultProps): JSX.Element => {
  const { title = 'GitHub Finder' } = props;
  return (
    <Box>
      <Image src={GitHubIcon} />
      <Text as="h2">{title}</Text>
    </Box>
  );
};
