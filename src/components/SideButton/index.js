import React from 'react';

import { Icon, OpenIcon } from './styles';

const SideButton = ({ toggleOpen }) => {
  return (
    <Icon onClick={toggleOpen}>
      <OpenIcon title="Open SideBar" />
    </Icon>
  );
};

export default SideButton;