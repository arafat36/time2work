import React, { useState } from 'react';
import { TaskDateIconBtn } from './TaskDateIconBtn';
import { TaskDateMenu } from './TaskDateMenu';

export const TaskDate = ({ taskDateRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleBtnClicked = (e) => {
    setAnchorEl(e.target);
  };
  return (
    <>
      <TaskDateIconBtn handleClick={handleBtnClicked} />
      <TaskDateMenu {...{ anchorEl, setAnchorEl, taskDateRef }} />
    </>
  );
};
