import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDtVC3VQ1Z8XzQYDkWwnTOC_NFo8ny5c90", 
    authDomain: "todomanager-5444a.firebaseapp.com",
    databaseURL: "https://todomanager-5444a.firebaseio.com", 
    projectId: "todomanager-5444a",
    storageBucket: "todomanager-5444a.appspot.com", 
    messagingSenderId: "254572727152"
}

export const initializeFirebaseAPI = () => firebase.initializeApp(config);

export const createUserOnFirebaseAsync = async (email, password) => {
    const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    
    return user;
}

export const signInOnFirebaseAsync = async (email, password) => {
    const user = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
    return user;
}

//implementa o padrão Publisher-Subscriber
export const currentFirebaseUser = () => {
    return new Promise((resolve, reject) => {
        var unsubscribe = null;
        unsubscribe = firebase
        .auth()
        .onAuthStateChanged((user) => {
            resolve(user);
        }, (error) => {
            reject(error);
        }, () => { 
            unsubscribe();
        });
    });
}