# Chat App using react and firebase

This is a realtime chat application built using react and firebase.

# Installation steps

## Setup Firebase

Go to the firebase console and create a new project and register an application to firebase. Follow the steps from [here](https://firebase.google.com/docs/web/setup). To setup firebase db follow the steps from [here](https://firebase.google.com/docs/firestore/quickstart)

## Store firestore config in environment variable

The credential from firebase should be stored in .env files. Add the appropriate values as shown below

VITE_FIREBASE_API_KEY=value   
VITE_FIREBASE_AUTH_DOMAIN=value  
VITE_FIREBASE_PROJECT_ID=value  
VITE_FIREBASE_STORAGE_BUCKET=value  
VITE_FIREBASE_MESSAGING_SENDER_ID=value  
VITE_FIREBASE_APP_ID=value  
VITE_FIREBASE_MEASUREMENT_ID=value  
## Run npm install

Run **npm install** to install all dependencie.

## Test the application

Execute **npm run dev** to run and test the application
