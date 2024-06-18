import styles from './index.module.scss';

export const Background = () => (
  <div className={styles.background}>
    <div className={styles.leftAngleWrapper}>
      <div className={styles.leftAngle} />
    </div>
    <div className={styles.rightAngle} />
  </div>
);
