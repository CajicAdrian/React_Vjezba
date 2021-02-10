import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Header, Users, Search } from 'components';
import axios from 'axios';
import { useAsync } from 'react-use';
import type { User } from 'types';

interface Items {
  items: User[];
}
const searchUsers = async (text: string): Promise<Items> => {
  const { data } = await axios.get(
    `https://api.github.com/search/users?q=${text}`,
  );
  return data;
};

export const StartPage = (): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  const { loading } = useAsync(async () => {
    if (input) {
      const data = await searchUsers(input);

      setUsers(data?.items);
      return data;
    }
    return;
  }, [input]);
  return (
    <>
      <Header />
      <Box>
        <Search input={input} setInput={setInput} setUsers={setUsers} />
        <Users loading={loading} users={users} />
      </Box>
    </>
  );
};
