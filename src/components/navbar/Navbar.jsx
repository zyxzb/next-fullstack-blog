import Link from 'next/link';
import styles from './navbar.module.css';
import ToggleMode from '../toggleMode/ToggleMode';

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
        <button className={styles.btn}>Logout</button>
      </navbar>
    </header>
  );
};

export default Navbar;
