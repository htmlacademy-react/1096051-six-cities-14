import { Link } from 'react-router-dom';
import { PagePaths } from '../../const';

type FooterProps = {
  handlePagePath: (path: string) => void;
}

function Footer({handlePagePath}: FooterProps): JSX.Element {
  return (
    <footer className="footer container">
      <Link onClick={() => handlePagePath(PagePaths.MAIN)} className="footer__logo-link" to={PagePaths.MAIN}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export default Footer;
