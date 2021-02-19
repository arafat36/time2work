import { db } from '../firebase';

const projectsRef = db.collection('projects');

/**
 * Deletes the project with docId from firebase
 * @param {number} docId
 */
const deleteProject = (docId) => projectsRef.doc(docId).delete();

/**
 * Adds a new project to firebase
 * @param {*} projectId
 * @param {string} name
 */
const addProject = (projectId, name) =>
  name &&
  projectsRef.add({
    projectId,
    name,
    // userId: 'userid-001', // TODO handle usernames
  });

/**
 * Updates the name of an existing project in firebase
 * @param {*} docId
 * @param {string} newName
 */
const renameProject = (docId, newName) =>
  newName &&
  projectsRef.doc(docId).update({
    name: newName,
  });

export { deleteProject, addProject, renameProject };
