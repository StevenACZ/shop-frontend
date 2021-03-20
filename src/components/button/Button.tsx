// React
import React, { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

// Styles
import { ButtonStyled } from './Styles';

// Components
import { Spin } from 'antd';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  loading?: boolean;
  spinnerColor?: string;
  spinnerHeight?: number;
  spinnerWidth?: number;
}

const Button = forwardRef(
  (
    {
      children,
      disabled,
      height = '2.7rem',
      width = '9rem',
      loading = false,
      spinnerColor,
      spinnerHeight,
      spinnerWidth,
      ...props
    }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        disabled={disabled}
        height={height}
        width={width}
        loading={loading}
        {...props}
      >
        <Spin spinning={loading} delay={500}>
          <span>{children}</span>
        </Spin>
      </ButtonStyled>
    );
  }
);

export default Button;
