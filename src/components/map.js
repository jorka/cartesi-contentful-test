import React from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  mapboxgl.accessToken = process.env.GATSBY_MAPBOX_TOKEN;
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [lng] = React.useState(-70.9);
  const [lat] = React.useState(42.35);
  const [zoom] = React.useState(9);

  React.useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/dimitarangelkov/ckzwd9aev006b14rzs78m3wf1",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lat, lng, zoom]);

  return (
    <div>
      <div ref={mapContainer} className="map-container h-[50vh]" />
    </div>
  );
}

export default Map;
