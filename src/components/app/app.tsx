import FavortitesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import SixCitiesScreen from '../../pages/six-cities-mian-page/six-cities-screen';
import { CommentDataListType } from '../../types/CommentData.type';
import { FavoriteCardListType } from '../../types/FavoriteCard.type';
import { OfferCardDataType, OfferDataType } from '../../types/OfferData.type';
import { UniversalType } from '../../types/UniversalType.type';
import { UserType } from '../../types/User.type';

type AppProps = {
  countOffersRent: number;
  cityNames: UniversalType[];
  offerData: OfferDataType;
  offerCardDataList: OfferCardDataType[];
  currentSort: UniversalType;
  sortNames: UniversalType[];
  favoriteCardList: FavoriteCardListType;
  commentDataList: CommentDataListType;
  user: UserType;
}

function App({
  countOffersRent,
  cityNames,
  offerCardDataList,
  currentSort,
  sortNames,
  favoriteCardList,
  offerData,
  commentDataList,
  user }: AppProps): JSX.Element {
  return (
    <>
      <SixCitiesScreen
        countOffersRent={countOffersRent}
        cityNames={cityNames}
        offerCardDataList={offerCardDataList}
        currentSort={currentSort}
        sortNames={sortNames}
        user={user}
      />
      <FavortitesScreen
        favoriteCardList={favoriteCardList}
        user={user}
      />
      <OfferScreen
        offerData={offerData}
        offerCardDataList={offerCardDataList}
        commentDataList={commentDataList}
        user={user}
      />
    </>
  );
}

export default App;
