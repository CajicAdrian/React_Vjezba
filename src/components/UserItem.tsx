import React, { Component } from 'react';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import type { User } from 'types';

export class UserItem extends Component<UserItem, User> {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <Box>
        <Image src={avatar_url} htmlWidth="50rem" borderRadius="50%" />
        <Text as="h3">{login}</Text>
        <Link href={html_url} isExternal>
          More <ExternalLinkIcon mx="5px" />
        </Link>
      </Box>
    );
  }
}
