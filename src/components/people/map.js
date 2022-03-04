import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import { injectIntl } from 'gatsby-plugin-intl';

function Map() {
  mapboxgl.accessToken = process.env.GATSBY_MAPBOX_TOKEN;
  const mapContainer = React.useRef(null);
  const [lng] = React.useState(-70.9);
  const [lat] = React.useState(42.35);
  const [zoom] = React.useState(9);

  React.useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/dimitarangelkov/ckzwd9aev006b14rzs78m3wf1',
      center: [5, 34],
      zoom: 1.5,
      interactive: false,
    });

    map.on('load', () => {
      map.addLayer(
        {
          id: 'country-boundaries',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1',
          },
          'source-layer': 'country_boundaries',
          type: 'fill',
          paint: {
            'fill-color': '#2D5ABE',
            'fill-opacity': 1,
          },
        },
        'country-label'
      );
      map.setFilter('country-boundaries', [
        'in',
        'iso_3166_1_alpha_3',
        'BRA',
        'CHN',
        'JPN',
        'KOR',
        'PHL',
        'RUS',
        'ESP',
        'TUR',
        'UKR',
        'VNM',
        'DZA',
        'BHR',
        'TCD',
        'COM',
        'DJI',
        'EGY',
        'IRQ',
        'JOR',
        'KWT',
        'LBN',
        'LBY',
        'MRT',
        'MAR',
        'OMN',
        'QAT',
        'SAU',
        'SOM',
        'SDN',
        'SYR',
        'TUN',
        'ARE',
        'YEM',
      ]);
    });

    return () => {
      map.remove();
    };
  }, [lat, lng, zoom]);

  return (
    <div>
      <div ref={mapContainer} className='map-container h-[80vh]' />
    </div>
  );
}

export default injectIntl(Map);
