import React from 'react';

import { CircleMarker, Popup, Tooltip } from 'react-leaflet';

import { getMagnitudeScaleColor } from '../../utils';

const PlotDisplay = ({ data }) => {

  return (
    <React.Fragment>
      {
        data.length > 0 && data.map(quake => (
          <CircleMarker
            key={quake.id}
            center={[quake.geometry.coordinates[1], quake.geometry.coordinates[0]]}
            fillOpacity={0.4}
            color={getMagnitudeScaleColor(quake.properties.mag)}
            fillColor={getMagnitudeScaleColor(quake.properties.mag)}
            radius={20}
            title={quake.properties.place}
          >
            <Tooltip direction="center" opacity={1} permanent> {quake.properties.mag} </Tooltip>
          </CircleMarker>
        ))
      }
    </React.Fragment>
  )
};

export default PlotDisplay;