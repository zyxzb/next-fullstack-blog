import Image from 'next/image';
import styles from './page.module.css';
import HeroImg from 'public/hero.png';
import Button from '@/components/button/Button';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design Your Digital Products</h1>
        <p className={styles.description}>
          Turning your idea into reality. We bring together the temas from the
          global tech industry.
        </p>
        <Button url='/portfolio' text='See Our Works' />
      </div>
      <div className={styles.item}>
        <Image src={HeroImg} alt='' className={styles.image} />
      </div>
    </div>
  );
};

export default Home;
