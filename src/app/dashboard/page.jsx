'use client';

import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import useSWR from 'swr';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  // const { data, error, isLoading } = useSWR(
  //   'https://jsonplaceholder.typicode.com/posts/',
  //   fetcher,
  // );

  const session = useSession();
  console.log('session', session);

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

  return <div>Dashboard</div>;
};

export default Dashboard;
