import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import PropTypes from 'prop-types'

const MapComponent = ({mapCenter, markerPosition}) => {

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={mapCenter}
    >
      <Marker position={markerPosition} />
    </GoogleMap>
  )
}

MapComponent.propTypes = {
  mapCenter: PropTypes.object,
  markerPosition: PropTypes.object
}

export const Map = withScriptjs(withGoogleMap(MapComponent));