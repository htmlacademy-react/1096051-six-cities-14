import { nanoid } from 'nanoid';

type GalleryImageProps = {
  imageUrl: string;
}

function GalleryImage({ imageUrl }: GalleryImageProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={imageUrl} alt="Photo studio" />
    </div>
  );
}

type GalleryProps = {
  images: string[];
}

function Gallery({ images }: GalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((imageUrl) => <GalleryImage imageUrl={imageUrl} key={nanoid()}/>)}
      </div>
    </div>
  );
}

export default Gallery;
