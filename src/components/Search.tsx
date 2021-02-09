import React, { Component } from 'react';
import { FormControl, Button, Input, Box } from '@chakra-ui/react';

export class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <Box>
        <FormControl onSubmit={this.onSubmit} id="search">
          <Input
            placeholder="Search users"
            type="search"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <Button colorScheme="blue">Search</Button>{' '}
        </FormControl>
      </Box>
    );
  }
}
