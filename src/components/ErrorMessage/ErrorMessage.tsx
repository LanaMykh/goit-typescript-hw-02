import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <p className={styles.err}>
      Oops, some error occured. Please, try again later.
    </p>
  );
};

export default ErrorMessage;
