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
  };

  render() {
    return (
      <Box>
        <FormControl onSubmit={this.onSubmit} id="search">
          <Input
            placeholder="Search users"
            type="search"
            name="search"
            value={this.state.text}
            onChange={this.onChange}
          />
          <Button colorScheme="blue">Search</Button>{' '}
        </FormControl>
      </Box>
    );
  }
}
