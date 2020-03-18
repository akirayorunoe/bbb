import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyByyiQMC3J4MEmopib17E1oqAKF-Z0kdZY',
  authDomain: 'beat-beat-beep.firebaseapp.com',
  databaseURL: 'https://beat-beat-beep.firebaseio.com',
  projectId: 'beat-beat-beep',
  storageBucket: 'beat-beat-beep.appspot.com',
  messagingSenderId: '161883564824',
  appId: '1:161883564824:web:9622970b4f201082b58c6d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
