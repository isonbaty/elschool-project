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
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <Container maxW='md'>
      <Box paddingTop='8'>
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
        <Button colorScheme='teal' size='md'>
          Login
        </Button>
      </Box>
      <Box paddingTop='4'>
        <Text>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </Text>
      </Box>
    </Container>
  );
}

export default Signin;
