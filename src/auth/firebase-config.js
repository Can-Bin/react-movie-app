import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAiW1rLtFDxry2i1xc7-w4FTLshaeItQ7U",
    authDomain: "react-movie-app-f4cac.firebaseapp.com",
    projectId: "react-movie-app-f4cac",
    storageBucket: "react-movie-app-f4cac.appspot.com",
    messagingSenderId: "269953693711",
    appId: "1:269953693711:web:26556bfe566b5ed3afcb7a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)