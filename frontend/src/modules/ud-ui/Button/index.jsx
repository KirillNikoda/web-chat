import { Button as BaseButton } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, ...restProps }) => {
  return (
    <BaseButton
      {...restProps}
      className={classNames('button', restProps.className)}
    ></BaseButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
