import * as React from 'react';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageItem from 'components/ImageItem/ImageItem';

export default function MasonryImageList({ images }) {
  return (
    <Box
      sx={{
        padding: 5,
        backgroundColor: 'white',
        minHeight: 'calc(100vh - 157px)',
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map(item => (
          <ImageListItem key={item.largeImageURL}>
            <ImageItem item={item} />
            {/* <img
              src={`${item.largeImageURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item.largeImageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.tags}
              loading="lazy"
              onClick={() => openModal()}
            /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
