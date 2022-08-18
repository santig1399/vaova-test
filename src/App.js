import { Route } from 'wouter';
import Container from './components/layout/container/Container';
import Navbar from './components/navbar/Navbar';
import AuthContextProvider from './contexts/auth/AuthContext';
import HotelsContextProvider from './contexts/hotels/HotelsContext';
import Create from './pages/hotels/Create';
import List from './pages/hotels/List';
import Profile from './pages/hotels/Profile';
import Update from './pages/hotels/Update';
import LoginPage from './pages/auth/LoginPage';
import ForgotPassword from './pages/auth/ForgotPassword';
import Register from './pages/auth/RegisterPage';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Container>
          <Route path="/" component={Home} />
          <HotelsContextProvider>
            <Route path="/hotels" component={List} />
            <Route path="/hotels/profile/:id">
              {({ id }) => <Profile id={id} />}
            </Route>
            <Route path="/hotels/create" component={Create} />
            <Route path="/hotels/update/:id">
              {(params) => <Update id={params.id} />}
            </Route>
          </HotelsContextProvider>
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/forgot-password" component={ForgotPassword} />
        </Container>
      </AuthContextProvider>
    </>
  );
}

export default App;
