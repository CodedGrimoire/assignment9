// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Helper: support BOTH custom names and Vite-prefixed names.
// e.g. FIREBASE_API_KEY or VITE_FIREBASE_API_KEY
const readEnv = (k) =>
  import.meta.env[k] ??
  import.meta.env[`VITE_${k}`] ??
  "";

// Build config from env
const firebaseConfig = {
  apiKey: readEnv("FIREBASE_API_KEY"),
  authDomain: readEnv("FIREBASE_AUTH_DOMAIN"),
  projectId: readEnv("FIREBASE_PROJECT_ID"),
  storageBucket: readEnv("FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: readEnv("FIREBASE_MESSAGING_SENDER_ID"),
  appId: readEnv("FIREBASE_APP_ID"),
  measurementId: readEnv("FIREBASE_MEASUREMENT_ID"),
};

// Fail loudly if anything is missing (prevents silent blank screens)
const missing = Object.entries(firebaseConfig)
  .filter(([, v]) => !v)
  .map(([k]) => k);

if (missing.length) {
  throw new Error(
    `[firebase] Missing env(s): ${missing.join(", ")}.
Ensure your .env(.local) has either FIREBASE_* or VITE_FIREBASE_* keys and restart the dev server.`
  );
}

// Init
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Optional analytics (no-op if unsupported)
export let analytics = null;
isSupported().then((ok) => {
  if (ok) analytics = getAnalytics(app);
});

export default app;
