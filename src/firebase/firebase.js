import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
        
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Food for March 2018',
//     amount: 400,
//     createdAt: 'March 30, 2018'
// })

// database.ref('notes').push({
//     title: 'course topics',
//     body: 'React Native, Python, JS'
// })

// database.ref('notes/-L3v6PFZVQJAY0jkPSHc').update({
//     body: 'buy food'
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('error with fetching data', e);
// });

// setTimeout(() => {
//     database.ref('job/title').set('Senior Frontend Developer');
// }, 5000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('error fetching data ', e);
// })

// database.ref().set({
//     name: 'Steven Tung',
//     age: 30,
//     stressLevel: 6,
//     job: {
//         title: 'Junior Frontend Developer',
//         company: 'Protato Inc.'
//     },
//     isSingle: true,
//     location: {
//         city: 'Los Angeles',
//         country: 'USA'
//     }
// });

// // database.ref().set('This is my data');

// database.ref('age').set(31);
// database.ref('location/city').set('Chicago');

// database.ref('attributes').set({
//     height: 73,
//     weight: 240
// }).then(() => {
//     console.log('Second set call worked')
// }).catch((e) => {
//     console.log('Something went wrong for the second error: ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
// .remove()
// .then(() => {
//     console.log('data was removed');
// }).catch((e) => {
//     console.log('error occurred: ', e);
// })