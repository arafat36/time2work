import React, { useCallback } from 'react';
import { ExpandLess, ExpandMore, Work } from '@material-ui/icons';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export const ProjectsToggle = ({ setShowProjects, showProjects }) => {
  const handleShowProjects = useCallback(() =>
    setShowProjects((show) => !show)
  );

  return (
    <ListItem button onClick={handleShowProjects}>
      <ListItemIcon>
        <Work />
      </ListItemIcon>
      <ListItemText primary="Projects" />
      {showProjects ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  );
};
