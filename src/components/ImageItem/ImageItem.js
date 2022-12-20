import ImageModal from 'components/ImageModal/ImageModal';
import { useState } from 'react';

const ImageItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(null);

  const openModal = () => {
    console.log(openModal);
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log(closeModal);
    setIsOpen(null);
  };

  return (
    <>
      <img
        src={`${item.largeImageURL}?w=248&fit=crop&auto=format`}
        srcSet={`${item.largeImageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.tags}
        loading="lazy"
        className="MuiImageListItem-img"
        onClick={() => openModal()}
      />
      <ImageModal data={item} isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default ImageItem;
