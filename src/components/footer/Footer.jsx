import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        &#169; {new Date().getFullYear()} Blog Name. All rights reserved.
      </div>
      <div className={styles.socials}>
        <Image src='/1.png' width={15} height={15} alt='fb' />
        <Image src='/2.png' width={15} height={15} alt='instagram' />
        <Image src='/3.png' width={15} height={15} alt='twitter' />
        <Image src='/4.png' width={15} height={15} alt='youtube' />
      </div>
    </footer>
  );
};

export default Footer;
