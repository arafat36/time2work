import { useState, useEffect } from 'react';
import moment from 'moment';
import isEqual from 'lodash.isequal';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'userid-001');

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

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'userid-001')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));

        if (!isEqual(allProjects, projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
