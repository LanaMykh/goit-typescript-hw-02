import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';
import { ImageCard as ImageCardType } from '../../types/imageTypes';

type ImageGalleryProps = {
  cards: ImageCardType[];
  openModal: (card: ImageCardType) => void;
};

const ImageGallery = ({ cards, openModal }: ImageGalleryProps) => {
  return (
    <ul className={styles.gallery}>
      {cards.map(card => (
        <li className={styles.galleryItem} key={card.id}>
          <ImageCard card={card} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
