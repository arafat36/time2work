import React, { useState } from 'react';
import { Collapse, Divider, List, Box } from '@material-ui/core';
import { Projects } from '../../components/Projects/Projects';
import { AddProject } from '../../components/Projects/AddProject';
import { ProjectsToggle } from '../../components/Projects/ProjectsToggle';
import { CollatedTasks } from '../../components/CollatedTasks/CollatedTasks';

export const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <Box m={1} my={3} pr={3}>
      <List component="nav" aria-label="main collated projects">
        <CollatedTasks />
        <ProjectsToggle {...{ setShowProjects, showProjects }} />
      </List>
      <Divider />
      <Collapse in={showProjects} timeout="auto">
        <AddProject />
        <Projects />
      </Collapse>
    </Box>
  );
};

// import React, { useState } from 'react';
// import {
//   FaChevronDown,
//   FaInbox,
//   FaRegCalendarAlt,
//   FaRegCalendar,
// } from 'react-icons/fa';
// import { useSelectedProjectValue } from '../../context';
// import { AddProject } from '../AddProject';
// import { Projects } from '../Projects';

// export const Sidebar = () => {
//   const { setSelectedProject } = useSelectedProjectValue();
//   const [active, setActive] = useState('inbox');
//   const [showProjects, setShowProjects] = useState(1);

//   return (
//     <div className="sidebar" data-testid="sidebar">
//       <ul className="sidebar__generic">
//         <li
//           data-testid="inbox"
//           className={active === 'inbox' ? 'active' : undefined}
//           onClick={() => {
//             setActive('inbox');
//             setSelectedProject('INBOX');
//           }}
//         >
//           <span>
//             <FaInbox />
//           </span>
//           <span>Inbox</span>
//         </li>
//         <li
//           data-testid="today"
//           className={active === 'today' ? 'active' : undefined}
//           onClick={() => {
//             setActive('today');
//             setSelectedProject('TODAY');
//           }}
//         >
//           <span>
//             <FaRegCalendar />
//           </span>
//           <span>Today</span>
//         </li>
//         <li
//           data-testid="next_7"
//           className={active === 'next_7' ? 'active' : undefined}
//           onClick={() => {
//             setActive('next_7');
//             setSelectedProject('NEXT_7');
//           }}
//         >
//           <span>
//             <FaRegCalendarAlt />
//           </span>
//           <span>Next 7 days</span>
//         </li>
//       </ul>

//       <div
//         className="sidebar__middle"
//         onClick={() => setShowProjects(!showProjects)}
//       >
//         <span>
//           <FaChevronDown
//             className={showProjects ? 'hidden-projects' : undefined}
//           />
//         </span>
//         <h2>Projects</h2>
//       </div>

//       <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
//       {showProjects && <AddProject />}
//     </div>
//   );
// };