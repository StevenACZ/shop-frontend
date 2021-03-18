// React
import React from 'react';

// Etc
import Loader from 'react-loader-spinner';

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

const Spinner: React.FC<Props> = ({
  color = 'red',
  height = 10,
  width = 10,
}) => {
  return (
    <Loader
      type="Oval"
      color={color}
      height={height}
      width={width}
      timeout={20000}
    />
  );
};

export default Spinner;
