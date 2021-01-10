import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { AddTaskForm } from './AddTaskForm';

export const AddTask = () => {
  const [show, setShow] = useState(false);
  const btnClicked = () => setShow(true);
  return show ? (
    <AddTaskForm setShowForm={setShow} />
  ) : (
    <Box m={1} alignSelf="flex-end">
      <Button
        startIcon={<Add />}
        color="primary"
        variant="contained"
        onClick={btnClicked}
      >
        Add New Task
      </Button>
    </Box>
  );
};
// export const AddTask = ({
//   showAddTaskMain = true,
//   shouldShowMain = false,
//   showQuickAddTask,
//   setShowQuickAddTask,
// }) => {
//   const [task, setTask] = useState('');
//   const [taskDate, setTaskDate] = useState('');
//   const [project, setProject] = useState('');
//   const [showMain, setShowMain] = useState(shouldShowMain);
//   const [showProjectOverlay, setShowProjectOverlay] = useState(false);
//   const [showTaskDate, setShowTaskDate] = useState(false);

//   const { selectedProject } = useSelectedProjectValue();

//   const addTask = () => {
//     const projectId = project || selectedProject;
//     let collatedDate = '';
//     switch (projectId) {
//       case 'TODAY':
//         collatedDate = moment().format('DD/MM/YYYY');
//         break;

//       case 'NEXT_7':
//         collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
//         break;

//       default:
//         break;
//     }

//     return (
//       task &&
//       projectId &&
//       firebase
//         .firestore()
//         .collection('tasks')
//         .add({
//           archived: false,
//           projectId,
//           task,
//           date: collatedDate || taskDate,
//           userId: 'userid-001',
//         })
//         .then(() => {
//           setTask('');
//           setProject('');
//           setShowMain('');
//           setShowProjectOverlay(false);
//         })
//     );
//   };

//   return (
//     <div
//       className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
//       data-testid="add-task-comp"
//     >
//       {showAddTaskMain && (
//         <div
//           role="button"
//           tabIndex={0}
//           className="add-task__shallow"
//           data-testid="show-main-action"
//           onClick={() => setShowMain(!showMain)}
//           onKeyDown={() => setShowMain(!showMain)}
//         >
//           <span className="add-task__plus">+</span>
//           <span className="add-task__text">Add Task</span>
//         </div>
//       )}

//       {(showMain || showQuickAddTask) && (
//         <div className="add-task__main" data-testid="add-task-main">
//           {showQuickAddTask && (
//             <>
//               <div data-testid="quick-add-task">
//                 <h2 className="header">Quick Add Task</h2>
//                 <span
//                   role="button"
//                   tabIndex={0}
//                   className="add-task__cancel-x"
//                   data-testid="add-task-quick-cancel"
//                   onClick={() => {
//                     setShowMain(false);
//                     setShowProjectOverlay(false);
//                     setShowQuickAddTask(false);
//                   }}
//                   onKeyDown={() => {
//                     setShowMain(false);
//                     setShowProjectOverlay(false);
//                     setShowQuickAddTask(false);
//                   }}
//                 >
//                   &times;
//                 </span>
//               </div>
//             </>
//           )}
//           <ProjectOverlay
//             {...{
//               setProject,
//               showProjectOverlay,
//               setShowProjectOverlay,
//             }}
//           />

//           <TaskDate
//             {...{
//               setTaskDate,
//               showTaskDate,
//               setShowTaskDate,
//             }}
//           />
//           <input
//             className="add-task__content"
//             data-testid="add-task-content"
//             type="text"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="add-task__submit"
//             onClick={() =>
//               showQuickAddTask
//                 ? addTask() && setShowQuickAddTask(false)
//                 : addTask()
//             }
//           >
//             Add Task
//           </button>
//           {!showQuickAddTask && (
//             <span
//               role="button"
//               tabIndex={0}
//               className="add-task__cancel"
//               data-testid="add-task-main-cancel"
//               onClick={() => {
//                 setShowMain(false);
//                 setShowProjectOverlay(false);
//               }}
//               onKeyDown={() => {
//                 setShowMain(false);
//                 setShowProjectOverlay(false);
//               }}
//             >
//               Cancel
//             </span>
//           )}
//           <span
//             role="menu"
//             tabIndex={0}
//             className="add-task__project"
//             data-testid="show-project-overlay"
//             onClick={() => setShowProjectOverlay(!showProjectOverlay)}
//             onKeyDown={() => setShowProjectOverlay(!showProjectOverlay)}
//           >
//             <FaRegListAlt />
//           </span>
//           <span
//             role="menu"
//             tabIndex={0}
//             className="add-task__date"
//             data-testid="show-task-date-overlay"
//             onClick={() => setShowTaskDate(!showTaskDate)}
//             onKeyDown={() => setShowTaskDate(!showTaskDate)}
//           >
//             <FaRegCalendarAlt />
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };
