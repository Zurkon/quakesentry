import React from 'react';

import { TileLayer } from 'react-leaflet';

import PlotDisplay from '../PlotDisplay';

import { CustomMap } from './styles';
import 'leaflet/dist/leaflet.css';
import '../../utils/tooltip.css';

const MapContainer = ({ center, zoom, data }) => {
  return (
    <CustomMap id="mapContainer" center={center} zoom={zoom}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <PlotDisplay data={data} />
    </CustomMap>
  )
}

export default MapContainer;