import { ErrorScreen } from '../../pages/error-screen/error-screen';
import FavortitesScreen from '../../pages/favorites-screen/favorites-screen';
import { Layout } from '../../pages/layout/layout';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import SixCitiesScreen from '../../pages/six-cities-mian-page/six-cities-screen';
import { FavoriteCardListType } from '../../types/FavoriteCard.type';
import { UniversalType } from '../../types/UniversalType.type';
import { UserType } from '../../types/User.type';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRouter } from '../private-route/private-route';
import { CommentDataType } from '../../types/CommentData.type';
import { OfferDataType } from '../../types/OfferData.type';
import { PagePaths } from '../../const';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  countOffersRent: number;
  cityNames: UniversalType[];
  offerCardDataList: OfferDataType[];
  currentSort: UniversalType;
  sortNames: UniversalType[];
  favoriteCardList: FavoriteCardListType;
  commentDataList: CommentDataType[];
  user: UserType;
  hasAccess: boolean;
}

function App({
  countOffersRent,
  cityNames,
  offerCardDataList,
  currentSort,
  sortNames,
  favoriteCardList,
  commentDataList,
  user,
  hasAccess }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PagePaths.MAIN} element={<Layout user={user} />}>
            <Route index element={
              <SixCitiesScreen
                countOffersRent={countOffersRent}
                cityNames={cityNames}
                offerCardDataList={offerCardDataList}
                currentSort={currentSort}
                sortNames={sortNames}
              />
            }
            />
            <Route path={PagePaths.FAVORITES} element={
              <PrivateRouter hasAccess={hasAccess} deniedPath={PagePaths.LOGIN}>
                <FavortitesScreen
                  favoriteCardList={favoriteCardList}
                />
              </PrivateRouter>
            }
            />
            <Route path={`${PagePaths.OFFER}/:id`} element={
              <OfferScreen
                offerCardDataList={offerCardDataList}
                commentDataList={commentDataList}
              />
            }
            />
            <Route path={PagePaths.LOGIN} element={
              <PrivateRouter hasAccess={!hasAccess} deniedPath={PagePaths.MAIN}>
                <LoginScreen />
              </PrivateRouter>
            }
            />
            <Route path='*' element={<ErrorScreen />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </HelmetProvider>
  );
}

export default App;
