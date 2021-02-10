import React from 'react';
import { FormControl, Button, Input, Box } from '@chakra-ui/react';
import type { User } from 'types';

interface Props {
  input: string;
  setInput: (input: string) => void;
  setUsers: (users: User[]) => void;
}

export const Search = (props: Props): JSX.Element => {
  const { input, setInput, setUsers } = props;

  return (
    <Box>
      <FormControl id="search">
        <Input
          placeholder="Search users"
          type="text"
          name="text"
          value={input}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setInput(e.currentTarget.value);
          }}
        />

        <Button
          onClick={() => {
            setUsers([]);
            setInput('');
          }}
        >
          Clear
        </Button>
      </FormControl>
    </Box>
  );
};
