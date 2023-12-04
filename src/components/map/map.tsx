import { useRef, useEffect } from 'react';
import { Section, UrlMarker } from '../../const';
import { OfferDataType } from '../../types/offer-data-type';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 20]
});

type MapProps = {
  section: string;
  offerCardDataList: OfferDataType[];
  selectedPoint: OfferDataType | undefined;
}

function Map({
  section,
  offerCardDataList,
  selectedPoint
}: MapProps): JSX.Element {
  const className = section === Section.OTHER ? 'offer' : 'cities';
  const city = offerCardDataList[0].city;
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offerCardDataList.forEach((offer) => {
        const { location, id } = offer;
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offerCardDataList, selectedPoint]);

  return (
    <section className={`${className}__map map`} style={{ 'height': '500px' }} ref={mapRef}>
    </section>
  );
}

export default Map;
