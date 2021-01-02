import React from 'react';
import { DateRange, Inbox, Today } from '@material-ui/icons';
import { CollatedTask } from './CollatedTask';
import { useSelectedProjectValue } from '../../context';

const collatedTasks = [
  { title: 'Inbox', icon: Inbox, code: 'INBOX' },
  { title: 'Today', icon: Today, code: 'TODAY' },
  { title: 'Next 7 Days', icon: DateRange, code: 'NEXT_7' },
];

export const CollatedTasks = React.memo(() =>
  collatedTasks.map((item) => (
    <CollatedTask
      key={item.code}
      title={item.title}
      Icon={item.icon}
      code={item.code}
    />
  ))
);
