import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../config/fconfig';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredintial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredintial.user;
      updateProfile(auth.currentUser, { displayName: name });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container maxW='md'>
      <Box paddingTop='8'>
        <FormControl>
          <FormLabel htmlFor='email'>Full Name</FormLabel>
          <Input
            type='name'
            id='name'
            value={name}
            aria-describedby='name-helper-text'
            onChange={onChange}
          />
          <FormHelperText id='name-helper-text'>
            Please add your full name.
          </FormHelperText>
        </FormControl>
      </Box>
      <Box paddingTop='4'>
        <FormControl>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input
            type='email'
            id='email'
            value={email}
            aria-describedby='email-helper-text'
            onChange={onChange}
          />
          <FormHelperText id='email-helper-text'>
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </Box>
      <Box paddingTop='4'>
        <FormControl>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            type='password'
            id='password'
            value={password}
            aria-describedby='password-helper-text'
            onChange={onChange}
          />
          <FormHelperText id='password-helper-text'>
            Your password will be secured.
          </FormHelperText>
        </FormControl>
      </Box>
      <Box paddingTop='4'>
        <Button colorScheme='teal' size='md' onClick={onSubmit}>
          Sign up
        </Button>
      </Box>
      <Box paddingTop='4'>
        <Text>
          Already have an account <Link to='/signin'>Sign in</Link>
        </Text>
      </Box>
    </Container>
  );
}

export default Signup;
