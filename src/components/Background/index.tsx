import styles from './index.module.scss';

export const Background = () => (
  <div className={styles.background}>
    <div className={styles.leftAngle} />
    <div className={styles.leftAngleParallelepipedWrapper}>
      <div className={styles.leftAngleParallelepiped} />
    </div>
    <div className={styles.rightAngle} />
  </div>
);
