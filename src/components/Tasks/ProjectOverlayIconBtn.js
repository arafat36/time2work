import React from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import { IconButton } from '@material-ui/core';

export const ProjectOverlayIconBtn = ({ handleClick }) => (
  <IconButton onClick={handleClick}>
    <FaRegListAlt />
  </IconButton>
);
