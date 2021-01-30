import { useEffect, useState } from 'react';
import { db } from '../firebase';

const projectsRef = db.collection('projects');

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /* Attach a listener that listens for changes in firebase firestore */
    const unsubscribe = projectsRef
      // .where('userId', '==', 'userid-001') // TODO: handle usernames
      .onSnapshot((snapshot) => {
        setLoading(true);
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));
        // console.log('[useProjects] allProjects', allProjects);
        setProjects(allProjects);
        setLoading(false);
      });

    return unsubscribe; /* detach the listener */
  }, []);

  return { projects, loading, error };
};
