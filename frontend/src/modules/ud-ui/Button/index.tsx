import { Button as BaseButton } from 'antd';
import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <BaseButton
      {...restProps}
      className={classNames('button', restProps.className)}
    ></BaseButton>
  );
};

export default Button;
