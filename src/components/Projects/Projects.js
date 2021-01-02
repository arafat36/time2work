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

// export const Projects = ({ activeValue = null }) => {
//   const [active, setActive] = useState(activeValue);
//   const { setSelectedProject } = useSelectedProjectValue();
//   const { projects } = useProjectsValue();

//   return (
//     projects &&
//     projects.map((project) => (
//       <li
//         role="menuitem"
//         key={project.projectId}
//         data-docid={project.docId}
//         data-testid="project-action"
//         className={
//           active === project.projectId
//             ? 'active sidebar__project'
//             : 'sidebar__project'
//         }
//         onClick={() => {
//           setActive(project.projectId);
//           setSelectedProject(project.projectId);
//         }}
//         onKeyDown={() => {
//           setActive(project.projectId);
//           setSelectedProject(project.projectId);
//         }}
//       >
//         <IndividualProject project={project} />
//       </li>
//     ))
//   );
// };
