import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({ archived: true });
  };

  return (
    <div
      role="checkbox"
      aria-checked="true"
      tabIndex={0}
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={archiveTask}
      onKeyDown={archiveTask}
    >
      <span className="checkbox" />
    </div>
  );
};
