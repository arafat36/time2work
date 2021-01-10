import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  root: {
    background: '#ca2100',
    marginBottom: '20px',
  },
  toolbar: {
    width: '90%',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  addButton: {
    marginRight: '20px',
    color: '#fbfbfb',
  },
  logo: {
    marginRight: 'auto',
  },
});

export const Header = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();
  const handleDarkMode = () => setDarkMode((dark) => !dark);
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo}>
          Time2Work
        </Typography>
        <IconButton className={classes.addButton}>
          <AddCircle />
        </IconButton>
        <FormControlLabel
          value="darkmode"
          control={
            <Switch
              color="primary"
              checked={darkMode}
              onChange={handleDarkMode}
            />
          }
          label="Dark Mode"
          labelPlacement="end"
        />
      </Toolbar>
    </AppBar>
  );
};

// export const Header = ({ darkMode, setDarkMode }) => {
//   const [shouldShowMain, setShouldShowMain] = useState(false);
//   const [showQuickAddTask, setShowQuickAddTask] = useState(false);

//   return (
//     <header className="header" data-testid="header">
//       <nav>
//         <div className="logo">
//           <img src="/images/logo.png" alt="Todoist" />
//         </div>

//         <div className="settings">
//           <ul>
//             {/* Add button */}
//             <li
//               role="menuitem"
//               data-testid="quick-add-task-action"
//               className="settings__add"
//               onClick={() => {
//                 setShowQuickAddTask(true);
//                 setShouldShowMain(true);
//               }}
//               onKeyDown={() => {
//                 setShowQuickAddTask(true);
//                 setShouldShowMain(true);
//               }}
//             >
//               +
//             </li>

//             {/* Dark mode btn */}
//             <li
//               role="menuitem"
//               data-testid="dark-mode-action"
//               className="settings__dark-mode"
//               onClick={() => setDarkMode(!darkMode)}
//               onKeyDown={() => setDarkMode(!darkMode)}
//             >
//               <FaPizzaSlice />
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <AddTask
//         showAddTaskMain={false}
//         {...{
//           shouldShowMain,
//           showQuickAddTask,
//           setShowQuickAddTask,
//         }}
//       />
//     </header>
//   );
// };
