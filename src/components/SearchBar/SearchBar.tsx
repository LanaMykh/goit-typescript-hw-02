import styles from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { FormEvent } from 'react';

type SearchBarProps = {
  onSearch: (searchValue: string) => void;
};

const SearchBar = ({ onSearch }:SearchBarProps) => {
  
  const handleSubmit = (evt: FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();
    const searchValue = (evt.currentTarget.elements.namedItem('searchValue') as HTMLInputElement).value.trim();;

    if (!searchValue) {
      toast.error('Enter a search term!');
      return;
    }

    onSearch(searchValue);
    evt.currentTarget.reset();
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="searchValue"
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
