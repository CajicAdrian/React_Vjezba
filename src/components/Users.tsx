import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';
import type { User } from 'types';
import { UserItem } from 'components';

interface State {
  users: User[];
}

export class Users extends Component<Users, State> {
  render() {
    return (
      <Box style={userStyle}>
        {this.props.users.map((user) => (
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
