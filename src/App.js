import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='*'
            element={
              <div>
                <h1>Page note found </h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
