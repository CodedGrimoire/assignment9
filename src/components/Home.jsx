import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const u = auth.currentUser; // PrivateRoute ensures user exists when here
  return (
    <div style={{ maxWidth: 480, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h2>Home</h2>
      <p>Signed in as: <b>{u?.displayName || u?.email}</b></p>
      <button onClick={() => signOut(auth)} style={{ padding: 8 }}>
        Sign out
      </button>
    </div>
  );
}
