import { useEffect, useContext } from 'react';
import { toaster } from 'evergreen-ui';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { auth, db } from '../../config/firebase';
import { useLocation } from 'wouter';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile
} from 'firebase/auth';
import { query, getDocs, collection, where, addDoc } from 'firebase/firestore';

const useAuth = () => {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);
  const [, setLocation] = useLocation();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser({});
        setIsAuthenticated(false);
      }
    });
  }, [setUser, setIsAuthenticated, setLocation]);

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email
        });
      }
      setLocation('/hotels');
    } catch (err) {
      console.error(err);
      toaster.danger('Error al iniciar sesión con Google');
    }
  };

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLocation('/hotels');
    } catch (err) {
      toaster.danger(
        'Error al iniciar sesión. Correo o contraseña incorrectos.'
      );
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await updateProfile(auth.currentUser, { displayName: name });
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email
      });
      setLocation('/hotels');
    } catch (err) {
      console.error(err);
      toaster.danger('Error al registrar usuario');
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toaster.success('Se ha enviado un correo para restablecer la contraseña');
      setLocation('/auth/login');
    } catch (err) {
      console.error(err);
      toaster.danger('Error al enviar el correo de restablecimiento');
    }
  };

  const logout = () => {
    setLocation('/auth/login');
    signOut(auth);
  };

  return {
    user,
    isAuthenticated,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout
  };
};

export default useAuth;
