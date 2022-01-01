import { Button as BaseButton } from 'antd';
import React from 'react';

const Button = ({ children, ...rest }) => {
  return <BaseButton {...rest}>{children}</BaseButton>;
};

export default Button;
