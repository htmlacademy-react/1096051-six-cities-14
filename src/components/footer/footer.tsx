import { Link } from 'react-router-dom';
import { PagePaths } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changePagePath } from '../../store/app-service/app-service';

function Footer(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <footer className="footer container">
      <Link onClick={() => dispatch(changePagePath({ pagePath: PagePaths.MAIN }))} className="footer__logo-link" to={PagePaths.MAIN}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export default Footer;
