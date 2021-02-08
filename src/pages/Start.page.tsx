import React, { Component } from 'react';
import { Box } from '@chakra-ui/react';
import { Header, Users } from 'components';

export class StartPage extends Component {
  render() {
    return (
      <>
        <Header title="GitHub Finder" />
        <Box>
          <Users />
        </Box>
      </>
    );
  }
}
