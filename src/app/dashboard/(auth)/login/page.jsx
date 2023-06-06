'use client';

import styles from './page.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', {
      email,
      password,
    });
  };

  if (session?.status === 'loading') {
    return <p>loading...</p>;
  }

  if (session?.status === 'authenticated') {
    return router.push('/dashboard');
  }

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
      <button onClick={() => signIn('google')} className={styles.button}>
        Login With Google
      </button>
    </div>
  );
};

export default Login;
