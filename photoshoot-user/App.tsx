
import React, { useState, useEffect } from 'react';
import { auth, db } from './services/firebase';
import { UserProfile } from './types';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (u) => {
      setUser(u);
      if (u) {
        const snap = await db.collection("user").doc(u.uid).get();
        if (snap.exists) {
          setProfile(snap.data() as UserProfile);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-stone-800 border-opacity-50"></div>
        <p className="mt-4 text-stone-600 font-bold">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {!user ? (
        <Login />
      ) : (
        <Dashboard user={user} profile={profile} />
      )}
    </div>
  );
};

export default App;
