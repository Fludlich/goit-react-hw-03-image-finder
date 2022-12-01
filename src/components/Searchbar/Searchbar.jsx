import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Button, Input, Label, Searchbarr } from './Searchbar.styled';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };
  handleChangeInput = event => {
    this.setState({ inputValue: event.target.value });
  };
  handleSend = event => {
    event.preventDefault();
    if (this.state.inputValue.trim() === '') {
      toast.error('Please, enter a valid value', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    this.props.onSubmi(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <Searchbarr>
        <Form onSubmit={this.handleSend}>
          <Button type="submit">
            <AiOutlineSearch />
            <Label>Search</Label>
          </Button>
          <Input
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
            value={this.state.inputValue}
          />
          <ToastContainer></ToastContainer>
        </Form>
      </Searchbarr>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
