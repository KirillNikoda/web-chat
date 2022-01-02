import { Button as BaseButton } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <BaseButton {...props} className={`button ${props.className}`} />;
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
