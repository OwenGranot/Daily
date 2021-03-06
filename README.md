# Daily
![image](https://user-images.githubusercontent.com/58481800/115999874-5ca83f00-a5f6-11eb-9f78-3e47aaeb44ef.png)

## Description

An app to monitor and review how you **REALLY** spend your time.
It's time to find out how much that extra binge episode really takes from your day.

## Installation

1) Clone repository
2) `yarn` or `yarn install` to install
3) Open a new firebase project, set up a firestore db with appropriate rules
4) Create `src/firebase.js` and copy this inside:
```
import firebase from "firebase";
const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  projectId: YOUR_PROJECT_ID,
  storageBucket: YOUR_STORAGE_BUCKET,
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  appId: YOUR_APP_ID,
};
let app = firebase.initializeApp(firebaseConfig);
export default app;

export const db = firebase.firestore(app);
```
5) `yarn run start` or `npm run start`. Note that this project uses `craco` to make `tailwind` work.

## Features

- [x] Add and remove tasks
- [x] Start and stop a timer, get realtime updates
- [x] Visualize time distribution using visual aid
- [x] Filter by day/all-time
- [x] Add a daily report, listing timesheets, sort by various fields
- [ ] Edit an existing task (change colors, change name, purge timesheets)
- [ ] Daily Goals handler (conditionally check your daily goals and monitor your progress towards them)

## Technologies

1) React
3) Firebase
4) TailwindCSS
5) Craco

