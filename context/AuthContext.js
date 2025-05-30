import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../src/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth"; // Bunu eklemeyi unutma ✅

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (kullanici) => {
      setCurrentUser(kullanici);
      setLoading(false);
    });

    return () => unsubscribe(); // bileşen kaldırılırsa oturum dinlemeyi durdur
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
