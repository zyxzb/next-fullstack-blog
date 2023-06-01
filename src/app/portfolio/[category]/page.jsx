import Button from '@/components/button/Button';
import styles from './page.module.css';
import Image from 'next/image';
import { data } from './data';

const Category = ({ params: { category } }) => {
  const categoryData = data[category];

  if (!categoryData) {
    return (
      <div>
        <h1 className={styles.catTitle}>Category Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.catTitle}>{category}</h1>
      {categoryData.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text='See More' url='#' />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt='alt_text'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
