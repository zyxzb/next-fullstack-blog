import React from 'react';
import styles from './page.module.css';
// import Link from 'next/link';
// import Image from 'next/image';

// const getData = async () => {
//   const res = await fetch('http://localhost:3000/api/posts', {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const data = res.json();
//   return data;
// };

const Blog = async () => {
  // const data = await getData();

  return (
    <div className={styles.mainContainer}>
      Blog
      {/* {data.map((item) => ( */}
      {/* <Link href={`/blog/xx`} className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </Link> */}
      {/* ))} */}
    </div>
  );
};

export default Blog;
