import React from 'react';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import type { User } from 'types';

interface Props {
  user: User;
}

export const UserItem = (props: Props): JSX.Element => {
  const { user } = props;
  return (
    <Box>
      <Image src={user.avatar_url} htmlWidth="50rem" borderRadius="50%" />
      <Text as="h3">{user.login}</Text>
      <Link href={user.html_url} isExternal>
        More <ExternalLinkIcon mx="5px" />
      </Link>
    </Box>
  );
};
