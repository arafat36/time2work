import React, { useEffect, useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { useProjectsValue } from '../../context';

export const ProjectOverlayMenu = ({ anchorEl, setAnchorEl, projectIdRef }) => {
  const { projects } = useProjectsValue();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    projectIdRef.current = selected;
  }, [selected]);

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
      {projects.map((project) => (
        <MenuItem
          key={project.projectId}
          onClick={itemClickCallback(project.projectId)}
          selected={project.projectId === selected}
        >
          {project.name}
        </MenuItem>
      ))}
    </Menu>
  );
};
