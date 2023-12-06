import { ErrorScreen } from '../../pages/error-screen/error-screen';
import FavortitesScreen from '../../pages/favorites-screen/favorites-screen';
import { Layout } from '../../pages/layout/layout';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import SixCitiesScreen from '../../pages/six-cities-mian-page/six-cities-screen';
import { Routes, Route } from 'react-router-dom';
import { PrivateRouter } from '../private-route/private-route';
import { OfferDataType } from '../../types/offer-data-type';
import { PagePaths } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { getAuthCheckedStatus } from '../../store/user-process/user-process.selector';
import { getErrorStatus, getIsOffersDataLoading, getOffersList } from '../../store/app-data/app-data.selector';
import { ErrorLoadOffers } from '../../pages/error-screen/error-load-offers';

function App(): JSX.Element {
  const isOfferDataLoading = useAppSelector(getIsOffersDataLoading);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const [selectedPoint, setSelectedPoint] = useState<OfferDataType | undefined>(
    undefined
  );
  const offerCardList = useAppSelector(getOffersList);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isOfferDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorLoadOffers />
    );
  }

  const handleListItemHover = (offerID: string) => {
    const currentPoint = offerCardList
      .find(({ id }) => id === offerID);
    setSelectedPoint(currentPoint);
  };

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={PagePaths.MAIN} element={<Layout />}>
            <Route index element={
              <SixCitiesScreen
                onListItemHover={handleListItemHover}
                selectedPoint={selectedPoint}
              />
            }
            />
            <Route path={PagePaths.FAVORITES} element={
              <PrivateRouter deniedPath={PagePaths.LOGIN}>
                <FavortitesScreen
                  handleListItemHover={handleListItemHover}
                />
              </PrivateRouter>
            }
            />
            <Route path={`${PagePaths.OFFER}/:id`} element={
              <OfferScreen
                handleListItemHover={handleListItemHover}
                selectedPoint={selectedPoint}
              />
            }
            />
            <Route path={PagePaths.LOGIN} element={
              <PrivateRouter deniedPath={PagePaths.MAIN}>
                <LoginScreen />
              </PrivateRouter>
            }
            />
            <Route path='*' element={<ErrorScreen />}></Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
