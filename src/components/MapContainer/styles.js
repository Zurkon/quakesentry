import styled from 'styled-components';
import { Map } from 'react-leaflet';

export const CustomMap = styled(Map)`
  height: 100vh;
  & .leaflet-top {
    display: none;
  }
`;