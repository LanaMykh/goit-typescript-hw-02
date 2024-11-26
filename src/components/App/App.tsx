import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import { fetchImage } from '../../image-api.js';
import './App.css';
import { ImageCard } from '../../types/imageTypes';
import { useState } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [gallery, setGallery] = useState<ImageCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<Partial<ImageCard>>({});

  const handleSearch = async (searchValue: string, page = 1) => {
    try {
      setError(false);
      setLoading(true);

      if (page === 1) {
        setGallery([]);
        setSearchValue(searchValue);
      }

      const data = await fetchImage(searchValue, page);
      const galleryCards = data.results;
      setTotalPages(data.total_pages);

      if (page > 1) {
        setGallery(prevCards => {
          return [...(prevCards || []), ...galleryCards];
        });
      } else {
        setGallery(galleryCards);
      }

      setCurrentPage(page + 1);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (imageData: ImageCard) => {
    setModalIsOpen(true);
    setDataModal(imageData);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}

      {gallery !== null && (
        <ImageGallery cards={gallery} openModal={openModal} />
      )}

      {gallery !== null && !loading && currentPage < totalPages && (
        <LoadMoreBtn
          onClick={handleSearch}
          page={currentPage}
          searchValue={searchValue}
        />
      )}

      {loading && <Loader />}

      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          dataModal={dataModal}
        />
      )}
    </>
  );
};

export default App;
