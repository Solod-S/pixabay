import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MasonryImageList from 'components/ImageList/ImageList';
import StickyFooter from 'components/Footer/Footer';

import rest from 'services/rest';

function HomePage() {
  const query = useSelector(state => state.query);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const { pixaBay } = rest;
    async function fetch() {
      if (!query) {
        return;
      }
      // setIsLoading(true);

      const imagesResponse = await pixaBay.getAll(query, page);
      const imageResponse = await imagesResponse.data.hits;
      const result = imageResponse.map(
        ({
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => ({
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        })
      );
      setImages(result);
      console.log(result);
    }
    try {
      fetch();
    } catch (error) {
      throw new Error();
    }
  }, [page, query]);

  return (
    <>
      <MasonryImageList images={images} />
      <StickyFooter />
    </>
  );
}

export default HomePage;
