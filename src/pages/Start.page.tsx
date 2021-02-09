import React, { Component } from 'react';
import { Box } from '@chakra-ui/react';
import { Header, Users, Search } from 'components';
import axios from 'axios';

export class StartPage extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users`);
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (text: string) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
    );
    this.setState({ users: res.data.items, loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <>
        <Header title={this.title} />
        <Box>
          <Search searchUsers={this.searchUsers} setAlert={this.setAlert} />
          <Users loading={loading} users={users} />
        </Box>
      </>
    );
  }
}
