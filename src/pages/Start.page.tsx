import React, { Component } from 'react';
import { Box } from '@chakra-ui/react';
import { Header, Users } from 'components';
import axios from 'axios';

export class StartPage extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <>
        <Header title={this.title} />
        <Box>
          <Users loading={this.state.loading} users={this.state.users} />
        </Box>
      </>
    );
  }
}
