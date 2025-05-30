import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'

import { AuthProvider } from '../context/AuthContext';


import { SepetProvider } from '../context/SepetContext'

export default function App({ Component, pageProps }) {
  return (

    <AuthProvider> 
    <SepetProvider>
      <Component {...pageProps} />
    </SepetProvider>
    </AuthProvider>
  )
}
