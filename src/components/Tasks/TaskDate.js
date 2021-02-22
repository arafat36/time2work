import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
// import { TaskDateIconBtn } from './TaskDateIconBtn';
import { TaskDateMenu } from './TaskDateMenu';

export const TaskDate = ({ taskDateRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleBtnClicked = (e) => {
    setAnchorEl(e.target);
  };
  return (
    <>
      <TaskDate.Icon handleClick={handleBtnClicked} />
      <TaskDateMenu {...{ anchorEl, setAnchorEl, taskDateRef }} />
    </>
  );
};

TaskDate.Icon = function TaskDateIconBtn({ handleClick }) {
  return (
    <IconButton onClick={handleClick}>
      <FaRegCalendarAlt />
    </IconButton>
  );
};
