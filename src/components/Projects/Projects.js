import React from 'react';
import { List } from '@material-ui/core';
import { ProjectItem } from '../../containers/ProjectItem';

function Projects({ projects }) {
  // console.count('Projects Component');
  // console.log('projects', projects);
  return (
    <List component="div" disablePadding>
      {projects?.map((project) => (
        <ProjectItem key={project.projectId} project={project} />
      ))}
    </List>
  );
}

export default Projects;
