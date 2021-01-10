import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IconButton } from '@material-ui/core';

export const TaskDateIconBtn = ({ handleClick }) => (
  <IconButton onClick={handleClick}>
    <FaRegCalendarAlt />
  </IconButton>
);
