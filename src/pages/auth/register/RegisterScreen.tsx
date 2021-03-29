// React
import React from 'react';

// React Router
import { useHistory } from 'react-router';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { RegisterScreenStyled, Form, GoLogin } from './Styles';

// Components
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

interface Props {}

const RegisterScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  const { register, errors, handleSubmit } = useForm();

  const handleSignUp = handleSubmit((data: {}) => {
    console.log(data);
  });

  return (
    <RegisterScreenStyled>
      <Form onSubmit={handleSignUp}>
        <h2>Sign up</h2>
        <Input
          name="username"
          label="Username"
          placeholder="Your username"
          error={errors.username?.message}
          ref={register({
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters',
            },
            maxLength: {
              value: 20,
              message: 'Username must not be greater than 20 characters',
            },
          })}
        />
        <Input
          name="email"
          label="Email"
          placeholder="Your email"
          error={errors.email?.message}
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email is in wrong format',
            },
          })}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Your password"
          error={errors.password?.message}
          ref={register({
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            maxLength: {
              value: 50,
              message: 'Password must not be greater than 50 characters',
            },
          })}
        />
        <Button width="100%">SIGN UP</Button>

        <GoLogin>
          Already have an acount?
          <span onClick={() => history.push('/login')}>Login</span>
        </GoLogin>
      </Form>
    </RegisterScreenStyled>
  );
};

export default RegisterScreen;
