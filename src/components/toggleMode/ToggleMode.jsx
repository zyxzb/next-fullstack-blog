'use client';

import { useContext } from 'react';
import styles from './toggleMode.module.css';
import { ThemeContext } from '@/context/ThemeContext';

const ToggleMode = () => {
  const { mode, toggleThemeMode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleThemeMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={
          mode === 'light'
            ? { transform: 'translateX(0%)' }
            : { transform: 'translateX(100%)' }
        }
      />
    </div>
  );
};

export default ToggleMode;
