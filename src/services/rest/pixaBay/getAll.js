import axios from 'axios';
import options from './options';

const getAll = async (searchQuery, page) => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const { key, per_page } = options;
  const response = await axios.get(
    `?key=${key}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
  );

  return response;
};

export default getAll;
