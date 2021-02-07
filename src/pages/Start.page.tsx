import React, { Component } from 'react';
import { Text } from '@chakra-ui/react';
import { Header, UserItem } from 'components';

export class StartPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Text as="h1">Start here</Text>
        <UserItem />
      </>
    );
  }
}
