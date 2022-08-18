import { useEffect } from 'react';
import { useLocation } from 'wouter';
import useAuth from '../../hooks/auth/useAuth';
const Home = () => {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  useEffect(() => {
    console.log('render home');
    if (!isAuthenticated) {
      setLocation('/auth/login');
    }
  }, [isAuthenticated, setLocation]);

  return <></>;
};

export default Home;
