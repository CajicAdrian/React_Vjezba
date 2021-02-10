import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Header, Users, Search, About } from 'components';
import axios from 'axios';
import { useAsync } from 'react-use';
import type { User } from 'types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      <Router>
        <Header />
        <Box>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search
                    input={input}
                    setInput={setInput}
                    setUsers={setUsers}
                  />
                  <Users loading={loading} users={users} />
                </>
              )}
            />
          </Switch>
          <Route exact path="/about" component={About} />
        </Box>
      </Router>
    </>
  );
};
