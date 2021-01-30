import moment from 'moment';
import { collatedTasks } from '../constants';

export const collatedTasksExist = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);

export const getTitle = (projects, projectId) =>
  projects.find((project) => project.projectId === projectId);

export const getCollatedTitle = (projects, key) =>
  projects.find((project) => project.key === key);

export const generatePushId = (() => {
  const PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

  const lastRandChars = [];

  return function () {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    let i;
    for (i = 7; i >= 0; i -= 1) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join('');

    for (i = 0; i < 12; i += 1) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();

export const getTaskDate = (taskDateRef, selectedProject) => {
  let taskDate = '';
  if (taskDateRef.current) {
    switch (taskDateRef.current) {
      case 'TODAY':
        taskDate = moment().format('DD/MM/YYYY');
        break;

      case 'TOMORROW':
        taskDate = moment().add(1, 'day').format('DD/MM/YYYY');
        break;

      case 'NEXT_7':
        taskDate = moment().add(7, 'days').format('DD/MM/YYYY');
        break;

      default:
        break;
    }
  } else if (collatedTasksExist(selectedProject)) {
    switch (selectedProject) {
      case 'TODAY':
        taskDate = moment().format('DD/MM/YYYY');
        break;

      case 'NEXT_7':
        taskDate = moment().add(7, 'days').format('DD/MM/YYYY');
        break;

      default:
        break;
    }
  }

  return taskDate;
  // return 'TODAY';
};
