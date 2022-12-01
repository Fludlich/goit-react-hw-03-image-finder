import { Component } from 'react';
import Loader from '../Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  
  render() {
    const { status, images, error, onClick, hits } = this.props;

    if (status === 'idle') {
      return ;
    }

    if (status === 'rejected') {
      return error.message;
    }
    if (status === 'resolved' || status === 'pending') {
      return (
        <div style={{textAlign:"center", paddingTop:"50px"}}>
            {images.length>0? <List>
          {images.map(({ webformatURL, largeImageURL, tags, id }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformat={webformatURL}
                largeImage={largeImageURL}
                tag={tags}
              />
            );
          })}
        </List>:  <h2>Sorry we didnt find anything</h2>}
          {status === 'pending' && 
          <Loader />
      }
      {status!=='pending' && images.length<hits && images.length>11 &&<Button onClick={onClick}/>}
        </div>
      );
    }
  }
}



ImageGallery.propTypes = {
    status: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
        id: PropTypes.number,
      })
    ),
    onClick: PropTypes.func,
  };