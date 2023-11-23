import { useRef, useEffect } from 'react';
import { Section, UrlMarker } from '../../const';
import { City, OfferDataType } from '../../types/offer-data.type';
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
  city: City;
  offerCardDataList: OfferDataType[];
  selectedPoint: OfferDataType | undefined;
}

function Map({
  section,
  city,
  offerCardDataList,
  selectedPoint
}: MapProps): JSX.Element {

  const className = section === Section.OTHER ? 'offer' : 'cities';

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offerCardDataList.forEach(({ city: point, title }) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && title === selectedPoint.title
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
    <section className={`${className}__map map`} style={{'height': '500px'}} ref={mapRef}>
    </section>
  );
}

export default Map;
