import classNames from 'classnames';

import './Block.scss';

const Block = ({ children, ...restProps }) => {
  return (
    <div {...restProps} className={classNames('block', restProps.className)}>
      {children}
    </div>
  );
};

export default Block;
