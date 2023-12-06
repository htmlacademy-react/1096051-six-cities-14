import { Link } from 'react-router-dom';
import { AuthorizationStatus, PagePaths } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getFavoriteOffersList } from '../../store/app-data/app-data.selector';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/user-process.selector';
import { changePagePath } from '../../store/app-service/app-service';


function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserData);
  const countFavoriteOffers = useAppSelector(getFavoriteOffersList).length;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link onClick={() => dispatch(changePagePath({ pagePath: PagePaths.MAIN }))} className="header__logo-link header__logo-link--active" to={PagePaths.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.Auth && user !== null ?
                  <Link className="header__nav-link header__nav-link--profile" to={PagePaths.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${user ? user.avatarUrl : ''})` }}>
                    </div>
                    <span className="header__user-name user__name">{user ? user.name : ''}</span>
                    <span className="header__favorite-count">{countFavoriteOffers}</span>
                  </Link>
                  :
                  <Link onClick={() => dispatch(changePagePath({ pagePath: PagePaths.LOGIN }))} className="header__nav-link header__nav-link--profile" to={PagePaths.LOGIN}>
                    <span className="header__user-name user__name">{'Sign in'}</span>
                  </Link>}
              </li>
              {authorizationStatus === AuthorizationStatus.Auth && user !== null ?
                <li className="header__nav-item">
                  <Link onClick={() => {
                    dispatch(changePagePath({ pagePath: PagePaths.MAIN }));
                    dispatch(logoutAction());
                  }} className="header__nav-link" to={PagePaths.MAIN}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
                :
                ''}
            </ul>
          </nav>
        </div>
      </div>
    </header >
  );
}

export default Header;
