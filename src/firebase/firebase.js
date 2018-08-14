import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};

firebase.initializeApp(config);

const database = firebase.database();


export { firebase, database as default};


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//     })
//     .catch((e) => {
//         console.log('Error fetching expense', e)
//     })



// const expenses = [{
//     description: 'Rent',
//     note: 'End of Month',
//     amount: 100,
//     createdAt: 1000
//     }, {
//     description: 'Car',
//     note: 'Car Insurance',
//     amount: 200,
//     createdAt: 400
//     }, {
//     description: 'Cell',
//     note: 'Cellular Payment',
//     amount: 100,
//     createdAt: 10
//     }];

// database.ref('expense').push(expenses[0]);
// database.ref('expense').push(expenses[1]);
// database.ref('expense').push(expenses[2]);

// database.ref('notes/-LJroCAVPFNhdvibISqQ').update({
//     body: 'Buy Food'
// })

// database.ref('notes').push({
//     title: 'Coding Challenge',
//     body: 'Coders'
// });

// const firebaseNotes = {
//     notes: {
//         afdasg: {
//             title: 'First Title',
//             body: 'This is my note'
//         },
//         asbbdgh: {
//             title: 'Another Title',
//             body: 'This is another note'
//         }
//     }
// }

// const onValueChange = (snapshot) => {
//     console.log(snapshot.val())
// };

// database.ref()
//     .on('value', (snapshot) => {
//         const snap =  snapshot.val();
//         console.log(`${snap.name} is a ${snap.job.title} at ${snap.job.company}`)
//     }, (e) => {
//         console.log('error with fetchin data', e);
//     });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('job/title').set('Dev Ops');
// },8000);


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error Fetching Data' ,e)
//     })

// database.ref().set({
//     name: 'Aaron Hunt',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Syracuse',
//         country: 'United States'
//     }

// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e)
// });

// // Removing with Set
// // database.red('isSingle').set(null)

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Seattle',
//     'job/company': 'Amazon'
// });

// database.ref('age').set(27);
// database.ref('location/city').set('San Francisco');
// database.ref('attributes').set({
//     height: '74 inches',
//     weight: '175 lbs'
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e)
// });;

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('Removed Succeeded');
//     }).catch((e) => {
//         console.log('Removed Failed', e.message)
//     });
//