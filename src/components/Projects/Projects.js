import React from 'react';
import { List } from '@material-ui/core';
import { useProjectsValue } from '../../context';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  const { projects } = useProjectsValue();

  return (
    <List component="div" disablePadding>
      {projects?.map((project) => (
        <ProjectItem key={project.projectId} project={project} />
      ))}
    </List>
  );
};
