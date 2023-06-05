import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }
  const data = res.json();
  return data;
};

export async function generateMetadata({ params: { id } }) {
  const post = await getData(id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params: { id } }) => {
  const data = await getData(id);

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
