import firebase from "firebase/app"; // we need base import for firestore and auth
import "firebase/firestore"; // database
import "firebase/auth";


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
