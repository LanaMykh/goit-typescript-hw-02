import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { ImageCard  } from '../../types/imageTypes';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    width: '90vw',
    height: '90vh',
    padding: '20px',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

Modal.setAppElement('#root');

type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  dataModal: Partial<ImageCard>;
};

const ImageModal = ({ modalIsOpen, closeModal, dataModal }:ImageModalProps) => {
  function afterOpenModal() {
    document.body.style.overflow = 'hidden';
  }

  function afterCloseModal() {
    document.body.style.overflow = 'auto';
  }

  function closeCard() {
    closeModal();
  }

  return (
    <div className={styles.modalBox}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onAfterClose={afterCloseModal}
        onRequestClose={closeCard}
        style={customStyles}
      >
        <div
          className={styles.modalCard}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <img
            className={styles.modalImg}
            src={dataModal.urls?.regular}
            alt={dataModal.alt_description  || 'Image'}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
          {dataModal && (
            <div className={styles.photoInfo}>
              <p className={styles.description}>
                <strong>{dataModal.description || 'No description'}</strong>
              </p>
              <ul className={styles.listInfo}>
                <li>
                  <p>
                    <strong>Autor:</strong> {dataModal.user?.name}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Likes:</strong> {dataModal.likes}
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
