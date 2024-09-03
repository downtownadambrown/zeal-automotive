'use client';
import * as React from "react";
import { APIProvider, Map as GMap, Marker } from '@vis.gl/react-google-maps';

function Map(): JSX.Element {
  const defaultProps = {
    center: {
      lat: 34.07326,
      lng: -84.72589,
    },
    zoom: 13
  };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GMAPS_KEY ?? ""}>
        <GMap
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          scrollwheel={false}
        >
          <Marker position={defaultProps.center} title="Zeal Automotive" label="Zeal Automotive" />
        </GMap>
      </APIProvider>
    </div>
  )
}
export default Map;