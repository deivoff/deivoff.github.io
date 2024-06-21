import s from './index.module.scss';

export const Background = () => (
  <div className={s.background}>
    <div className={s.leftAngle} />
    <div className={s.leftAngleParallelepipedWrapper}>
      <div className={s.leftAngleParallelepiped} />
    </div>
    <div className={s.rightAngle} />
  </div>
);
