import Link from 'next/link';
import styles from './button.module.css';

const Button = ({ text, url }) => {
  return (
    <Link href={url} className={styles.container}>
      <span>{text}</span>
    </Link>
  );
};

export default Button;
