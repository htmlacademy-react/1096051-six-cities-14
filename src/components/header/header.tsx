import { Link } from 'react-router-dom';
import { UserType } from '../../types/User.type';
import { AuthorizationStatus, PagePaths } from '../../const';

type HeaderProps = {
  user: UserType;
  handlePagePath: (path: string) => void;
  authStatus: string;
}

function Header({ user, handlePagePath, authStatus }: HeaderProps): JSX.Element {
  const {
    avatarUrl,
    name
  } = user;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link onClick={() => handlePagePath(PagePaths.MAIN)} className="header__logo-link header__logo-link--active" to={PagePaths.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authStatus === AuthorizationStatus.Auth ?
                  <Link onClick={() => handlePagePath(PagePaths.FAVORITES)} className="header__nav-link header__nav-link--profile" to={PagePaths.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${avatarUrl})` }}>
                    </div>
                    <span className="header__user-name user__name">{name}</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                  :
                  <Link onClick={() => handlePagePath(PagePaths.LOGIN)} className="header__nav-link header__nav-link--profile" to={PagePaths.LOGIN}>
                    <span className="header__user-name user__name">{'Sign in'}</span>
                  </Link>}
              </li>
              <li className="header__nav-item">
                <Link onClick={() => handlePagePath(PagePaths.MAIN)} className="header__nav-link" to={PagePaths.MAIN}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header >
  );
}

export default Header;
