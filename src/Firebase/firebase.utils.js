import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const Config = {
    apiKey: "AIzaSyALtzXUEfMO2g-uv11xIrTK0ZkIjJ1CfiQ",
    authDomain: "abdoo-clothing.firebaseapp.com",
    projectId: "abdoo-clothing",
    storageBucket: "abdoo-clothing.appspot.com",
    messagingSenderId: "878721779628",
    appId: "1:878721779628:web:66eda299694ed9abfe1c09",
    measurementId: "G-KX832CNVTM"
};
  
firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
