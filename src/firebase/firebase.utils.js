import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAuhLDvBBv9LfetWGEYMt1sRhFYW0S-z8s',
  authDomain: 'shopigeedb.firebaseapp.com',
  databaseURL: 'https://shopigeedb.firebaseio.com',
  projectId: 'shopigeedb',
  storageBucket: 'shopigeedb.appspot.com',
  messagingSenderId: '537547954489',
  appId: '1:537547954489:web:8af64c22dc0a86b76870e8',
  measurementId: 'G-BGN3GVLG0T'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
