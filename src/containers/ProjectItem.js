import React, { useState, useCallback } from 'react';
import { useSelectedProjectValue } from '../context';
import { deleteProject } from '../api/projects';
import ProjectItemUI from '../components/Projects/ProjectItem';

export const ProjectItem = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();

  const handleOnSelected = useCallback(
    () => setSelectedProject(project.projectId),
    [project]
  );

  const handleOnClick = () => setShowConfirm((open) => !open);

  const handleOnDelete = useCallback(() => {
    deleteProject(project.docId).then(() => {
      setSelectedProject('INBOX');
      setShowConfirm((open) => !open);
    });
  }, [project]);

  const props = {
    project,
    handleOnSelected,
    showConfirm,
    handleOnClick,
    selected: selectedProject === project.projectId,
    handleOnDelete,
  };

  return <ProjectItemUI {...props} />;
};
