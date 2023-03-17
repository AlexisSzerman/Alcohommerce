import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme"
import '@fontsource/alata/400.css'
import '@fontsource/open-sans/700.css'
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzL8WIXzhwvKcCaa2A5-6QxsQ8gTJKrcE",
  authDomain: "alcohommerce-774b6.firebaseapp.com",
  projectId: "alcohommerce-774b6",
  storageBucket: "alcohommerce-774b6.appspot.com",
  messagingSenderId: "947565298944",
  appId: "1:947565298944:web:c533bd49c678731bcfdfe5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)
