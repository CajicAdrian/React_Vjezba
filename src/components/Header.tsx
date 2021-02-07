import { Box, Text, Image } from '@chakra-ui/react';
import React, { Component } from 'react';
import { GitHubIcon } from 'assets';

export class Header extends Component<{ title: string }> {
  static defaultProps = {
    title: 'GitHub Finder',
  };

  render() {
    return (
      <Box>
        <Image src={GitHubIcon} />
        <Text as="h2">{this.props.title}</Text>
      </Box>
    );
  }
}
