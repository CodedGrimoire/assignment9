import { useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { AuthContext } from "./auth-context";

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password, displayName) =>
    createUserWithEmailAndPassword(auth, email, password).then(async (cred) => {
      if (displayName) {
        await updateProfile(cred.user, { displayName });
        setCurrentUser({ ...cred.user, displayName });
      }
      return cred;
    });

  const signin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const signOut = () => fbSignOut(auth);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = useMemo(
    () => ({ currentUser, signup, signin, signInWithGoogle, signOut, resetPassword }),
    [currentUser]
  );

  if (loading) return null;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider; // ✅ component-only export
