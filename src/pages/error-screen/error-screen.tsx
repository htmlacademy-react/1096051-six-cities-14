import { Link } from 'react-router-dom';
import { PagePaths } from '../../const';
import { Helmet } from 'react-helmet-async';
import styles from './error-screen.module.css';

function ErrorScreen(): JSX.Element {
  return (
    <main className="page__main page__main--error">
      <Helmet title="404"></Helmet>
      <h1 className={`page__title ${styles.title}`}>Error 404. Page not found.
      </h1>
      <Link to={PagePaths.MAIN} className={ styles.link }> Main page
      </Link>
    </main>
  );
}

export { ErrorScreen };
