import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import { Item, Image } from './ImageGallryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformat, largeImage, tag, id } = this.props;
    return (
      <li key={id}>
        <Item>
          <Image src={webformat} alt={tag} onClick={this.toggleModal} />
        </Item>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={tag} />
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformat: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
