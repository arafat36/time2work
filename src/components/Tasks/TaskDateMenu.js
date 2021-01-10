import React, { useState, useEffect } from 'react';
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from 'react-icons/fa';
import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import { useSelectedProjectValue } from '../../context';
import { collatedTasksExist } from '../../helpers';

const taskDates = [
  { title: 'Today', icon: FaSpaceShuttle, code: 'TODAY' },
  { title: 'Tomorrow', icon: FaSun, code: 'TOMORROW' },
  { title: 'Next 7 Days', icon: FaRegPaperPlane, code: 'NEXT_7' },
];

const useStyles = makeStyles({
  taskDateIcon: {
    marginRight: '.5em',
  },
});

export const TaskDateMenu = ({ anchorEl, setAnchorEl, taskDateRef }) => {
  const classes = useStyles();
  const { selectedProject } = useSelectedProjectValue();
  const [selected, setSelected] = useState(taskDateRef.current);

  useEffect(() => {
    taskDateRef.current = selected;
  }, [selected]);

  useEffect(() => {
    if (collatedTasksExist(selectedProject)) setSelected(selectedProject);
    else setSelected('');
  }, [selectedProject]);

  const handleMenuClose = () => setAnchorEl(null);

  const itemClickCallback = (code) => () => {
    setSelected(code);
    handleMenuClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {taskDates.map((item) => (
        <MenuItem
          key={item.code}
          onClick={itemClickCallback(item.code)}
          selected={item.code === selected}
        >
          <item.icon className={classes.taskDateIcon} />
          {item.title}
        </MenuItem>
      ))}
    </Menu>
  );
};
