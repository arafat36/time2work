import React, { useCallback } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useSelectedProjectValue } from '../../context';

export const CollatedTask = ({ title, Icon, code }) => {
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();

  const handleClicked = useCallback(() => {
    setSelectedProject(code);
  }, [code]);

  return (
    <ListItem
      button
      onClick={handleClicked}
      selected={selectedProject === code}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};
