import React from 'react';
import { useProjectsValue } from '../context';
import ProjectUI from '../components/Projects/Projects';

export const Projects = () => {
  const { projects } = useProjectsValue();

  return <ProjectUI projects={projects} />;
};
