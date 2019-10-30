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

export const createUserProfileDocument = async (userAuth, addintionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addintionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
