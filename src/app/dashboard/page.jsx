'use client';

import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher,
  );

  console.log('session', session);
  console.log('data', data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  // useSWR instead of fetching with useEffect (recommended)

  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts/', {
  //       cache: 'no-store',
  //       // next: { revalidate: 60 },
  //     });

  //     if (!res.ok) {
  //       // throw new Error('Failed to fetch data');
  //       setError(true);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  if (session?.status === 'loading') {
    return <p>loading...</p>;
  }

  if (session?.status === 'unauthenticated') {
    return router.push('/dashboard/login');
  }

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <div className={styles.posts}>
          {data?.length > 0 ? (
            data.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={200}
                    height={100}
                    className={styles.img}
                  />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))
          ) : (
            <p>
              No Content
              <br />
              <br />
              Add Your First Post
            </p>
          )}
        </div>
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input
          type='text'
          placeholder='Title'
          className={styles.input}
          required
        />
        <input
          type='text'
          placeholder='Desc'
          className={styles.input}
          required
        />
        <input
          type='text'
          placeholder='Image'
          className={styles.input}
          required
        />
        <textarea
          placeholder='Content'
          className={styles.textArea}
          cols='30'
          rows='10'
          required
        ></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Dashboard;
