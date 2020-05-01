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

export const writeTaskOnFirebaseAsync = async (task) => {
    const user = await currentFirebaseUser();

    var taskReference = firebase
        .database()
        .ref(user.uid);

    const key = task.key ? task.key : taskReference
        .child('tasks')
        .push()
        .key;

    return await taskReference
        .child(`tasks/${key}`)
        .update(task);
}

export const readTasksFromFirebaseAsync = async (listener) => {
    const user = await currentFirebaseUser();

    var tasksReference = firebase
        .database()
        .ref(user.uid)
        .child('tasks')

    tasksReference
        .on('value', (snapshot) => {
            var tasks = []
            snapshot.forEach(function (element) {
                var task = element.val();
                task.key = element.key;
                tasks.push(task);
            });
            listener(tasks);
        });
}