import { db } from '../firebase';

const tasksRef = db.collection('tasks');

export const unArchiveTask = (id) =>
  tasksRef.doc(id).update({ archived: false });

export const deleteTask = (id) => tasksRef.doc(id).delete();

export const addTask = (projectId, task, date) =>
  // console.log('projectId, task, date', projectId, task, date);
  tasksRef.add({
    archived: false,
    projectId,
    task,
    date,
  });

export const archiveTask = (id) => tasksRef.doc(id).update({ archived: true });
