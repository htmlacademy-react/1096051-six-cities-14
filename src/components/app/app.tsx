import { ErrorScreen } from '../../pages/error-screen/error-screen';
import FavortitesScreen from '../../pages/favorites-screen/favorites-screen';
import { Layout } from '../../pages/layout/layout';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import SixCitiesScreen from '../../pages/six-cities-mian-page/six-cities-screen';
import { FavoriteCardListType } from '../../types/FavoriteCard.type';
import { UserType } from '../../types/User.type';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRouter } from '../private-route/private-route';
import { CommentDataType } from '../../types/CommentData.type';
import { City, OfferDataType } from '../../types/OfferData.type';
import { PagePaths } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

type AppProps = {
  favoriteCardList: FavoriteCardListType;
  commentDataList: CommentDataType[];
  user: UserType;
  authStatus: string;
  city: City;
}

function App({
  city,
  favoriteCardList,
  commentDataList,
  user,
  authStatus }: AppProps): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferDataType | undefined>(
    undefined
  );

  const offerCardList = useAppSelector((state) => state.rentList);
  const handleListItemHover = (listItemName: string) => {
    const currentPoint = offerCardList.find(({ title }) => title === listItemName);

    setSelectedPoint(currentPoint);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PagePaths.MAIN} element={<Layout user={user} authStatus={authStatus} />}>
            <Route index element={
              <SixCitiesScreen
                onListItemHover={handleListItemHover}
                selectedPoint={selectedPoint}
                city={city}
              />
            }
            />
            <Route path={PagePaths.FAVORITES} element={
              <PrivateRouter authStatus={authStatus} deniedPath={PagePaths.LOGIN}>
                <FavortitesScreen
                  handleListItemHover={handleListItemHover}
                  favoriteCardList={favoriteCardList}
                />
              </PrivateRouter>
            }
            />
            <Route path={`${PagePaths.OFFER}/:id`} element={
              <OfferScreen
                handleListItemHover={handleListItemHover}
                offerCardDataList={offerCardList}
                commentDataList={commentDataList}
                city={city}
                selectedPoint={selectedPoint}
              />
            }
            />
            <Route path={PagePaths.LOGIN} element={
              <PrivateRouter authStatus={authStatus} deniedPath={PagePaths.MAIN}>
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
