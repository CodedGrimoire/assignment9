import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Details() {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
  }, []);

  return (
    <div style={{ maxWidth: 640, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Details (Protected)</h2>
      <pre style={{ background:"#f6f6f6", padding:12, borderRadius:8, overflowX:"auto" }}>
{JSON.stringify(
  {
    uid: user?.uid,
    email: user?.email,
    displayName: user?.displayName,
    photoURL: user?.photoURL,
  },
  null,
  2
)}
      </pre>
    </div>
  );
}
