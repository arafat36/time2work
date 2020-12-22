import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCLWMJS-MCA4gDcLJk5m_gt8AR-8akMT9Q',
  authDomain: 'todoist-tut-b2595.firebaseapp.com',
  databaseURL: 'https://todoist-tut-b2595.firebaseio.com',
  projectId: 'todoist-tut-b2595',
  storageBucket: 'todoist-tut-b2595.appspot.com',
  messagingSenderId: '1046451458105',
  appId: '1:1046451458105:web:ac1109e93fa295f5a03de8',
});

export { firebaseConfig as firebase };
