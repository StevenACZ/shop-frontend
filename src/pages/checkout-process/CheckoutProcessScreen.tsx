// React
import React, { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux - Actions
// import { register as registerUser } from '../../../actions/user';

// Redux - Slices
import { selectUserInfo } from '../../slices/user';

// React Router
import { useHistory } from 'react-router';

// Styles
import { CheckoutProcessScreenStyled, Container } from './Styles';

// Antd Components
import { Steps } from 'antd';

// Components

interface Props {}

const CheckoutProcessScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Selector
  const userInfo = useSelector(selectUserInfo);

  const { Step } = Steps;

  const [currentProcess, setCurrentProcess] = useState(0);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [history, userInfo]);

  // const currentStep = (current: number) => {
  // 	setCurrentProcess((e) => e + 1);
  // };

  const steps = [
    {
      title: 'Shipping',
      content: 'Second-content',
      disabled: false,
    },
    {
      title: 'Payment',
      content: 'Three-content',
      disabled: false,
    },
    {
      title: 'Place Order',
      content: 'Four-content',
      disabled: false,
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
        {/* <Step status="finish" title="finish 1" />
        <Step status="finish" title="finish 2" />
        <Step status="process" title="current process" />
        <Step status="wait" title="wait" disabled={false} /> */}
      </Steps>

      <Container>{steps[currentProcess].content}</Container>
    </CheckoutProcessScreenStyled>
  );
};

export default CheckoutProcessScreen;
