import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { fetchImages } from 'services/Api';

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    totalHits: 0,
  };
  componentDidUpdate(prevProps, prevState) {
    const { inputValue, page }= this.state
    if (prevState.inputValue !== inputValue || prevState.page!==page) {
      this.setState({ status: 'pending' });
      
        fetchImages(inputValue, page)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(`we cant find any photo by ${inputValue}`)
            );
          })
          .then(data =>{
            this.setState({totalHits: data.totalHits})
            const hits = data.hits
            this.setState ((prevState) => ({images:  [...prevState.images, ...hits], 
              status: 'resolved',}))
          }
          
          )
          .catch(error => this.setState({ error, status: 'rejected' }));

    }
  }

  handleFormSubmit = inputValue => {
    this.setState({ inputValue });
    this.setState({page: 1, images: []})
  };

  loadMore=(event)=>{
    this.setState((prevState)=>({page: prevState.page+1}))
  }

  render() {
    const { images, error, status, totalHits } = this.state;
    return (
      <div>
        <Searchbar onSubmi={this.handleFormSubmit} />
        <ImageGallery
          images={images}
          error={error}
          status={status}
          onClick={this.loadMore}
          hits = {totalHits}
        />
      </div>
    );
  }
}
