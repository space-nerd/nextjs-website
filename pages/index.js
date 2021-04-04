import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <img src="icon.png" alt="" className={styles.icon}></img>
          <h1 className={styles.title}>
          Change the color of my <h1 className={styles.name}>light</h1>
        </h1>
        </header>
        
        <div className={styles.grid}>
          <a href="http://192.168.1.100:3000/color?red" className={styles.card}>
            <h3>Red &rarr;</h3>
            <p>This changes the color to red.</p>
          </a>

          <a href="http://192.168.1.100:3000/color?green" className={styles.card}>
            <h3>Green &rarr;</h3>
            <p>This changes the color to green.</p>
          </a>

          <a
            href="http://192.168.1.100:3000/color?blue" className={styles.card}>
            <h3>Blue &rarr;</h3>
            <p>This changes the color to blue.</p>
          </a>

          <a
            href="http://192.168.1.100:3000/colorselector" className={styles.card}>
            <h3>Custom Color &rarr;</h3>
            <p>Choose a custom color.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js, created by Vercel
        </a><br></br>
        <div className={styles.iconCredit}>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart" className={styles.iconCreator}>smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.iconWebsite}>www.flaticon.com</a></div>
      </footer>
    </div>
  )
}
