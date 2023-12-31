import { Section } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeOfferFavoriteStatus } from '../../store/api-actions';

type BookmarkProps = {
  isFavorite: boolean;
  section: string;
  offerID: string;
}

function Bookmark({ offerID, isFavorite, section }: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();

  let width: number;
  let height: number;
  let classContainer: string;

  switch (section) {
    case Section.OFFER:
      width = 31;
      height = 33;
      classContainer = 'offer';
      break;
    default:
      width = 18;
      height = 19;
      classContainer = 'place-card';
  }

  return (
    <button onClick={() => {
      dispatch(changeOfferFavoriteStatus({
        offerID,
        status: Number(!isFavorite)
      }));
    }} className={`${classContainer}__bookmark-button ${isFavorite ? `${classContainer}__bookmark-button--active` : ''} button`} type="button"
    >
      <svg className={`${classContainer}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button >
  );
}

export default Bookmark;
