// React
import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { savePaymentMethod } from '../../../actions/cart';

// Styles
import { PaymentStyled, Form } from './Styles';

// Antd Components
import { Radio } from 'antd';

// Components
import Button from '../../button/Button';

interface Props {}

const Payment: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  const [currentValue, setCurrentValue] = useState<string>();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (currentValue) {
      dispatch(savePaymentMethod(currentValue));
    }
  };

  return (
    <PaymentStyled>
      <Form onSubmit={handleSubmit}>
        <h2>Payment method</h2>
        <Radio.Group
          onChange={(e) => setCurrentValue(e.target.value)}
          value={currentValue}
        >
          <Radio value="Paypal">Paypal</Radio>
          <Radio value="Credit Card">Credit Card</Radio>
        </Radio.Group>
        <Button width="100%">CONTINUE</Button>
      </Form>
    </PaymentStyled>
  );
};

export default Payment;
