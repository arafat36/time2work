import { useState, useEffect } from 'react';
import moment from 'moment';
import { db } from '../firebase';
import { collatedTasksExist } from '../helpers';

const tasksRef = db.collection('tasks');

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let unsubscribe = tasksRef;
    // .where('userId', '==', 'userid-001');  // TODO: USER

    switch (true) {
      case selectedProject && !collatedTasksExist(selectedProject):
        unsubscribe = unsubscribe.where('projectId', '==', selectedProject);
        break;
      case selectedProject === 'TODAY':
        unsubscribe = unsubscribe.where(
          'date',
          '==',
          moment().format('DD/MM/YYYY')
        );
        break;
      case selectedProject === 'INBOX' || selectedProject === 0:
        unsubscribe = unsubscribe.where('date', '==', '');
        break;
      default:
        break;
    }

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              (task) =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                !task.archived
            )
          : newTasks.filter((task) => !task.archived)
      );

      setArchivedTasks(newTasks.filter((task) => task.archived));
    });

    return unsubscribe;
  }, [selectedProject]);

  return { tasks, archivedTasks, loading, error };
};
