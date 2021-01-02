import React from 'react';
import { DateRange, Inbox, Today } from '@material-ui/icons';
import { SidebarItem } from './SidebarItem';
import { useSelectedProjectValue } from '../../context';

const collatedTasks = [
  { title: 'Inbox', icon: Inbox, code: 'INBOX' },
  { title: 'Today', icon: Today, code: 'TODAY' },
  { title: 'Next 7 Days', icon: DateRange, code: 'NEXT_7' },
];

export const CollatedTasks = () => {
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();

  return collatedTasks.map((item) => (
    <SidebarItem
      key={item.code}
      title={item.title}
      Icon={item.icon}
      onClick={() => {
        setSelectedProject(item.code);
      }}
      selected={selectedProject === item.code}
    />
  ));
};
