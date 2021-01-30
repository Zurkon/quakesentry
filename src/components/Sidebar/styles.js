import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  display: grid;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  padding: 15px;
  z-index: 600;
  width: 320px;
  height: 100%;
  background-color: #1d8c8f;
  background: linear-gradient(0deg, #3358f4, #1d8cf8);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 50%;
  height: auto;
`

export const CloseIcon = styled(FaTimes)`
  color: ${props => props.iconsize === 'small' ? '#9a9a9a' : '#fff'};
  font-size: ${props => props.iconsize === 'small' ? '1.2rem' : '1.8rem'}
`;

export const Icon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.8rem;
  cursor: pointer;
  outline: none;
`;