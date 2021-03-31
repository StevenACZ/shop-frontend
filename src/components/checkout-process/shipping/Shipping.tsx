// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { saveShippingAddress } from '../../../actions/cart';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { ShippingStyled, Form } from './Styles';

// Components
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

interface Props {}

const Shipping: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm();

  const handleSignUp = handleSubmit(
    (data: {
      address: string;
      city: string;
      postalCode: string;
      country: string;
    }) => {
      dispatch(saveShippingAddress(data));
    }
  );

  return (
    <ShippingStyled>
      <Form onSubmit={handleSignUp}>
        <h2>Shipping</h2>
        <Input
          name="address"
          label="Address"
          placeholder="Your Address"
          error={errors.address?.message}
          ref={register({
            required: 'Address is required',
            minLength: {
              value: 3,
              message: 'Address must be at least 3 characters',
            },
            maxLength: {
              value: 200,
              message: 'Address must not be greater than 200 characters',
            },
          })}
        />
        <Input
          name="city"
          label="City"
          placeholder="Your City"
          error={errors.city?.message}
          ref={register({
            required: 'City is required',
            minLength: {
              value: 3,
              message: 'City must be at least 3 characters',
            },
            maxLength: {
              value: 100,
              message: 'City must not be greater than 100 characters',
            },
          })}
        />
        <Input
          name="postalCode"
          label="Postal Code"
          placeholder="Your Postal Code"
          error={errors.postalCode?.message}
          ref={register({
            required: 'Postal Code is required',
            minLength: {
              value: 3,
              message: 'Postal Code must be at least 3 characters',
            },
            maxLength: {
              value: 15,
              message: 'Postal Code must not be greater than 15 characters',
            },
          })}
        />
        <Input
          name="country"
          label="Country"
          placeholder="Your Country"
          error={errors.country?.message}
          ref={register({
            required: 'Country is required',
            minLength: {
              value: 3,
              message: 'Country must be at least 3 characters',
            },
            maxLength: {
              value: 100,
              message: 'Country must not be greater than 100 characters',
            },
          })}
        />
        <Button width="100%">CONTINUE</Button>
      </Form>
    </ShippingStyled>
  );
};

export default Shipping;
