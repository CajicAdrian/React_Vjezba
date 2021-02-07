import React, { Component } from 'react';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface Props {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export class UserItem extends Component<UserItem, Props> {
  state: Props = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
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
