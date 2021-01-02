import React from 'react';
import { Icon, ListItemIcon } from '@material-ui/core';
import { randomColor } from 'randomcolor';

export const ColoredBullet = ({ id }) => {
  const iconColor = randomColor({ seed: id });
  return (
    <ListItemIcon>
      <Icon style={{ color: `${iconColor}` }} fontSize="large">
        &bull;
      </Icon>
    </ListItemIcon>
  );
};
