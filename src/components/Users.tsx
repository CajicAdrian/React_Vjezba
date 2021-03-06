import { Box } from '@chakra-ui/react';
import React from 'react';
import type { User } from 'types';
import { UserItem } from 'components';

interface Props {
  users: User[];
  loading: boolean;
}

export const Users = (props: Props): JSX.Element => {
  const { users } = props;
  return (
    <Box style={userStyle}>
      {users.map((user) => (
        <UserItem key={`key-${user.id}`} user={user} />
      ))}
    </Box>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '2rem',
};
