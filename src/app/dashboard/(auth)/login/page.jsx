'use client';

import styles from './page.module.css';
import { signIn } from 'next-auth/react';

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', {
      email,
      password,
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          className={styles.input}
          required
        />
        <input
          type='password'
          placeholder='password'
          className={styles.input}
          required
        />
        <button type='submit' className={styles.button}>
          Login
        </button>
      </form>
      <button onClick={() => signIn('google')}>Login With Google</button>
    </div>
  );
};

export default Login;
