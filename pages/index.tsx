import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import play from '../playground'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(()=>{
    play()
  },[])
  const message: string = 'Jason'
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="hello">Hello {message}</div>
    </div>
  )
}

export default Home
