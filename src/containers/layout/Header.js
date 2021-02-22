import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  FormControlLabel,
  Switch,
  Drawer,
  Hidden,
} from '@material-ui/core';
import { AddCircle, MenuRounded } from '@material-ui/icons';
import { Sidebar } from './Sidebar';

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerToggle() {
    setDrawerOpen((state) => !state);
  }
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Header.SideDrawerBtn handleToggle={handleDrawerToggle} />
          <Header.Logo className={classes.logo} />
          {/* <Header.AddTaskButton className={classes.addButton} />
          <Header.DarkModeSwitch checked={darkMode} onChange={handleDarkMode} /> */}
        </Toolbar>
        <Header.SideDrawer
          open={drawerOpen}
          handleToggle={handleDrawerToggle}
        />
      </AppBar>
    </>
  );
};

Header.Logo = function Logo(props) {
  return (
    <Typography variant="h6" {...props}>
      Time2Work
    </Typography>
  );
};

Header.AddTaskButton = function addTaskButton(props) {
  return (
    <IconButton {...props}>
      <AddCircle />
    </IconButton>
  );
};

Header.DarkModeSwitch = function darkModeSwitch(props) {
  return (
    <FormControlLabel
      value="darkmode"
      control={<Switch color="primary" {...props} />}
      label="Dark Mode"
      labelPlacement="end"
    />
  );
};

Header.SideDrawer = function SideDrawer({ open, handleToggle }) {
  return (
    <Hidden lgUp>
      <Drawer open={open} onClose={handleToggle}>
        <Sidebar />
      </Drawer>
    </Hidden>
  );
};

Header.SideDrawerBtn = function SideDrawerBtn({ handleToggle }) {
  return (
    <Hidden lgUp>
      <IconButton onClick={handleToggle}>
        <MenuRounded />
      </IconButton>
    </Hidden>
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
