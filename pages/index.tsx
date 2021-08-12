//import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
    <Head>
      <title>Song List | Home</title>
      <meta name="keywords" content="songs"/>
    </Head>
    <div>
      <h2 className={styles.title}>Homepage</h2>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae libero laudantium at perspiciatis maxime voluptate enim officiis quis molestiae earum suscipit ut ex, qui cum aperiam laboriosam amet. Error, aperiam!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae libero laudantium at perspiciatis maxime voluptate enim officiis quis molestiae earum suscipit ut ex, qui cum aperiam laboriosam amet. Error, aperiam!</p>
      <Link href="/songs">
        <a className={styles.btn}>See Song Listing</a>
      </Link>
    </div>
    </>
  )
}

export default Home
