import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyDRYgqMMMQgKWKlSM3J8SSCQc9dxEJjSfc',
  authDomain: 'story-hub-4fd3f.firebaseapp.com',
  projectId: 'story-hub-4fd3f',
  storageBucket: 'story-hub-4fd3f.appspot.com',
  messagingSenderId: '726879343846',
  appId: '1:726879343846:web:1aa6ec3c4b6ddf18d31727',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
