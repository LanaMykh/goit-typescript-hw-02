import styles from './ImageCard.module.css';
import { ImageCard as ImageCardType } from '../../types/imageTypes';

type ImageCardProps = {
  card: ImageCardType;
  openModal: (card: ImageCardType) => void;
};

const ImageCard = ({ card, openModal }: ImageCardProps) => {
  const onClickCard = (): void => {
    openModal(card);
  };

  return (
    <div>
      <img
        className={styles.card}
        src={card.urls.small}
        alt={card.alt_description || 'Image'}
        onClick={onClickCard}
      />
    </div>
  );
};

export default ImageCard;
