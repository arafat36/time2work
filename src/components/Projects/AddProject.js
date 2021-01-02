import React, { useState } from 'react';
import { Box, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { firebase } from '../../firebase';
import { generatePushId } from '../../helpers';
import { useProjectsValue } from '../../context';

export const AddProject = () => {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState('');

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: 'userid-001',
      })
      .then(() => {
        setProjects([]);
        setProjectName('');
        setShow(false);
      });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject();
    setShow((sh) => !sh);
  };

  const handleProjectName = (e) => setProjectName(e.target.value);

  const handleShowAddProject = () => setShow((sh) => !sh);
  return show ? (
    <form onSubmit={handleSubmit}>
      <Box
        // style={{ background: 'lightyellow' }}
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-end"
        mb={2}
      >
        <Box m={1} mr="auto" flexGrow={1}>
          {/* <TextField label="Enter project name:" fullWidth required /> */}
          <FormControl fullWidth>
            <InputLabel htmlFor="add-project-input">
              Enter project name:
            </InputLabel>
            <Input
              id="add-project-input"
              placeholder="Project name"
              value={projectName}
              onChange={handleProjectName}
              required
            />
          </FormControl>
        </Box>
        <Box m={0.5}>
          <Button
            htmlFor="add-project-input"
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Add Project
          </Button>
        </Box>
        <Box m={0.5}>
          <Button
            variant="contained"
            size="small"
            onClick={handleShowAddProject}
            onKeyDown={handleShowAddProject}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  ) : (
    <Box display="flex" justifyContent="flex-end" m={1} mt={2}>
      <Button
        startIcon={<Add />}
        onClick={handleShowAddProject}
        onKeyDown={handleShowAddProject}
        color="primary"
        size="small"
        variant="outlined"
      >
        Add New Project
      </Button>
    </Box>
  );
};

// export const AddProject = ({ shouldShow = false }) => {
//   const [show, setShow] = useState(shouldShow);
//   const [projectName, setProjectName] = useState('');

//   const projectId = generatePushId();
//   const { setProjects } = useProjectsValue();

//   const addProject = () =>
//     projectName &&
//     firebase
//       .firestore()
//       .collection('projects')
//       .add({
//         projectId,
//         name: projectName,
//         userId: 'userid-001',
//       })
//       .then(() => {
//         setProjects([]);
//         setProjectName('');
//         setShow(false);
//       });

//   return (
//     <div className="add-project" data-test-id="add-project">
//       {show && (
//         <div className="add-project__input">
//           <input
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//             className="add-project__name"
//             data-testid="project-name"
//             type="text"
//             placeholder="Name your project"
//           />
//           <button
//             className="add-project__submit"
//             type="button"
//             onClick={() => addProject()}
//             data-testid="add-project-submit"
//           >
//             Add Project
//           </button>
//           <span
//             role="button"
//             tabIndex={0}
//             data-testid="hide-project-overlay"
//             className="add-project__cancel"
//             onClick={() => setShow(false)}
//             onKeyDown={() => setShow(false)}
//           >
//             Cancel
//           </span>
//         </div>
//       )}

//       <span className="add-project__plus">+</span>
//       <span
//         role="button"
//         tabIndex={0}
//         data-testid="add-project-action"
//         className="add-project__text"
//         onClick={() => setShow(!show)}
//         onKeyDown={() => setShow(!show)}
//       >
//         Add Project
//       </span>
//     </div>
//   );
// };
