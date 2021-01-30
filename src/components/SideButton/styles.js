import styled from 'styled-components';
import { CgSidebarOpen } from 'react-icons/cg';

export const Icon = styled.div`
  position: absolute;
  z-index: 500;
  top: 15px;
  left: 15px;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
`;

export const OpenIcon = styled(CgSidebarOpen)`
  color: #fff;

`;