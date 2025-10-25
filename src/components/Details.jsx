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
    <div style={{ maxWidth: 650, margin: "2rem auto" }}>
      <h2>Details (Protected)</h2>
      
      <pre style={{ background:"white", padding:12,
         borderRadius:9, overflowX:"auto" 
         }}>


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
