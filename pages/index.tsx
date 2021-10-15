import Layout from '../components/Layout';
import style from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
      <Layout pageTitle="Home Page">
        <Image src="/profile.jpg" width={200} height={200} alt="profile" />
        <h1 className={style['title-homepage']}>Home Page</h1>
      </Layout>

  )
}
