import { Box, Text, Image, Table, Tbody, Tr, Td } from '@chakra-ui/react';
import React from 'react';
import { GitHubIcon } from 'assets';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <Box>
      <Image src={GitHubIcon} />
      <Text as="h2">Github Finder</Text>

      <Table>
        <Tbody>
          <Tr>
            <Td>
              <Link to="/">Home</Link>
            </Td>
            <Td>
              <Link to="/about">About</Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
