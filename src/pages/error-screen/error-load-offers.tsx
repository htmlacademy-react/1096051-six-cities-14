import styles from './error-screen.module.css';
import { useAppDispatch } from '../../hooks';
import { fetchOfferAction } from '../../store/api-actions';

function ErrorLoadOffers(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <main className="page__main page__main--error">
      <h1 className={`page__title ${styles.title}`}>Не удалось загрузить предложения.
      </h1>
      <button onClick={() => {
        dispatch(fetchOfferAction());
      }} className={ styles.link }
      > Попробовать еще раз
      </button>
    </main>
  );
}

export { ErrorLoadOffers };
