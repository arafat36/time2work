import React, { useCallback } from 'react';
import { DateRange, Inbox, Today } from '@material-ui/icons';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useSelectedProjectValue } from '../../context';

const collatedTasks = [
  { title: 'Inbox', icon: Inbox, code: 'INBOX' },
  { title: 'Today', icon: Today, code: 'TODAY' },
  { title: 'Next 7 Days', icon: DateRange, code: 'NEXT_7' },
];

export const CollatedTasks = React.memo(() => (
  <List component="nav" aria-label="main collated projects">
    {collatedTasks.map((item) => (
      <CollatedTasks.Item
        key={item.code}
        title={item.title}
        Icon={item.icon}
        code={item.code}
      />
    ))}
  </List>
));

CollatedTasks.displayName = 'CollatedTasks';

CollatedTasks.Item = function CollatedTask({ title, Icon, code }) {
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();

  const handleClicked = useCallback(() => {
    setSelectedProject(code);
  }, [code]);

  return (
    <ListItem
      button
      onClick={handleClicked}
      selected={selectedProject === code}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};
