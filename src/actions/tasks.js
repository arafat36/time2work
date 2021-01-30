import { firebase } from '../firebase';

const tasksRef = firebase.firestore().collection('tasks');

export const unArchiveTask = (id) => {
  tasksRef.doc(id).update({ archived: false });
};

export const deleteTask = (id) => {
  tasksRef.doc(id).delete();
};

export const addTask = (projectId, task, date) => {
  console.log('projectId, task, date', projectId, task, date);
  return tasksRef.add({
    archived: false,
    projectId,
    task,
    date,
  });
};

export const archiveTask = (id) => {
  tasksRef.doc(id).update({ archived: true });
};
