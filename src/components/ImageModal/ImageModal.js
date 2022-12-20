import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ isOpen, onClose, data }) => {
  console.log(data.largeImageURL);
  return (
    <Modal
      isOpen={isOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={data.largeImageURL} alt="" />
      {/* <button onClick={onClose}>close</button> */}
    </Modal>
  );
};

export default ImageModal;
