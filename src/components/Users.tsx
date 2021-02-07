import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';
import type { User } from 'types';
import { UserItem } from 'components';

interface State {
  users: User[];
}

export class Users extends Component<Users, State> {
  state: State = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: '2',
        login: 'defunkt',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: '3',
        login: 'pihyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
    ],
  };

  render() {
    return (
      <Box style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={`key-${user.id}`} user={user} />
        ))}
      </Box>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
