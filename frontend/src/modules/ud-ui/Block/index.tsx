import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import './Block.scss';

const Block: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <div {...restProps} className={classNames('block', restProps.className)}>
      {children}
    </div>
  );
};

export default Block;
