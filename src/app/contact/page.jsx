import styles from './page.module.css';
import Image from 'next/image';
import Form from '@/components/form/Form';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Let's Keep in Touch`}</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt='alt_text'
            fill={true}
            className={styles.image}
          />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
