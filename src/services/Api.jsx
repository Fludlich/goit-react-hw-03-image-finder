const API_KEY = '30854424-1209f63ff7d7cc0fa6ddacf5b';
const params = 'image_type=photo&orientation=horizontal';

export const fetchImages = (inputValue, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${inputValue}&key=${API_KEY}&${params}&page=${page}&per_page=12`
  )
    
};