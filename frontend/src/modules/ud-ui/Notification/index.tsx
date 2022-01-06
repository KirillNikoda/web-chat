import { InfoCircleTwoTone } from '@ant-design/icons';
import { Block } from '@modules/ud-ui';

import styles from './Notification.module.scss';

type Props = {
  title: string;
  description: string;
};

const Notification = ({ title, description }: Props) => {
  return (
    <Block>
      <div className={styles.container}>
        <div>
          <InfoCircleTwoTone style={{ fontSize: '50px' }} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Block>
  );
};

export default Notification;
