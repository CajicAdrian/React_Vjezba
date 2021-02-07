import React, { Component } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Header, Users } from 'components';

export class StartPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Box>
          <Users />
        </Box>
      </>
    );
  }
}
