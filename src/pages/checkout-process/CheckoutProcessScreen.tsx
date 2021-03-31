// React
import React, { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux - Slices
import { selectUserInfo } from '../../slices/user';
import { selectShippingAddress, selectPaymentMethod } from '../../slices/cart';

// React Router
import { useHistory } from 'react-router';

// Styles
import { CheckoutProcessScreenStyled, Container } from './Styles';

// Antd Components
import { Steps } from 'antd';

// Components
import Shipping from '../../components/checkout-process/shipping/Shipping';
import Payment from '../../components/checkout-process/payment/Payment';

interface Props {}

const CheckoutProcessScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Selector
  const userInfo = useSelector(selectUserInfo);
  const shippingAddress = useSelector(selectShippingAddress);
  const paymentMethod = useSelector(selectPaymentMethod);

  const { Step } = Steps;

  const [currentProcess, setCurrentProcess] = useState(0);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [history, userInfo]);

  useEffect(() => {
    if (shippingAddress) {
      setCurrentProcess(1);
    }
  }, [shippingAddress]);

  useEffect(() => {
    if (paymentMethod) {
      setCurrentProcess(2);
    }
  }, [paymentMethod]);

  const steps = [
    {
      title: 'Shipping',
      content: <Shipping />,
    },
    {
      title: 'Payment',
      content: <Payment />,
    },
    {
      title: 'Place Order',
      content: 'Four-content',
    },
  ];

  return (
    <CheckoutProcessScreenStyled>
      <Steps
        size="small"
        current={currentProcess}
        className="site-navigation-steps"
      >
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <Container>{steps[currentProcess].content}</Container>
    </CheckoutProcessScreenStyled>
  );
};

export default CheckoutProcessScreen;
