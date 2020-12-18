import React, { FC } from 'react';
import styles from './Header.module.scss';

interface Props {
  count: number;
  newGame: () => void;
}

const Header: FC<Props> = ({ newGame, count }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>2048</div>
        <div className={styles.tablo}>
          <div className={styles.score}>
            <span>score</span>
            <span className={styles.count}>{count}</span>
          </div>
          <div className={styles.best}>
            <span>best</span>
            <span className={styles.count}>
              {localStorage.getItem('bestScore')}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={newGame}>
          New Game
        </button>
      </div>
    </>
  );
};

export default Header;
