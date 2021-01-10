import React, { useState } from 'react';
import { ProjectOverlayIconBtn } from './ProjectOverlayIconBtn';
import { ProjectOverlayMenu } from './ProjectOverlayMenu';

export const ProjectOverlay = ({ projectIdRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleBtnClicked = (e) => {
    setAnchorEl(e.target);
  };
  return (
    <>
      <ProjectOverlayIconBtn handleClick={handleBtnClicked} />
      <ProjectOverlayMenu {...{ anchorEl, setAnchorEl, projectIdRef }} />
    </>
  );
};

// export const ProjectOverlay = ({
//   setProject,
//   showProjectOverlay,
//   setShowProjectOverlay,
// }) => {
//   const { projects } = useProjectsValue();

//   return (
//     projects &&
//     showProjectOverlay && (
//       <div className="project-overlay" data-testid="project-overlay">
//         <ul className="project-overlay__list">
//           {projects.map((project) => (
//             <li
//               role="menuitem"
//               key={project.projectId}
//               data-testid="project-overlay-action"
//               onClick={() => {
//                 setProject(project.projectId);
//                 setShowProjectOverlay(false);
//               }}
//               onKeyDown={() => {
//                 setProject(project.projectId);
//                 setShowProjectOverlay(false);
//               }}
//             >
//               {project.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   );
// };
