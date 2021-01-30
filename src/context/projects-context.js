import React, { createContext, useContext } from 'react';
import { useProjects } from '../hooks/useProjects';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const { projects, loading, error } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, loading, error }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);
