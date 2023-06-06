'use client';

import Link from 'next/link';
import styles from './navbar.module.css';
import ToggleMode from '../toggleMode/ToggleMode';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);

  return (
    <header className={styles.container}>
      <Link href='/' className='logo'>
        Blog Logo
      </Link>
      <navbar className={styles.links}>
        <ToggleMode />
        {links.map((link) => {
          const { url, id, title } = link;
          return (
            <Link href={url} key={id} className={styles.link}>
              {title}
            </Link>
          );
        })}
        {session?.user ? (
          <button className={styles.btn} onClick={signOut}>
            Logout
          </button>
        ) : (
          <button
            type='button'
            onClick={() => router.push('/dashboard/login')}
            className={styles.btn}
          >
            Login
          </button>
        )}
        {!session?.user && (
          <button
            type='button'
            onClick={() => router.push('/dashboard/register')}
            className={styles.btn}
          >
            Register
          </button>
        )}
      </navbar>
    </header>
  );
};

export default Navbar;
