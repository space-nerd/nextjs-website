import Head from 'next/head'
import styles from '../styles/Home.module.css'
var Govee = require("node-govee-led");

var Client = new Govee({
	apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
	mac: "1d:e7:7c:a6:b0:13:b8:e9",
	model: "H6003"
});



export default function Home() {
  function turnRed() {
    Client.setColor("#ff0000");
  }

  function turnGreen() {
    Client.setColor("#00ff00");
  }

  function turnBlue() {
    Client.setColor("#0000ff");
  }

  function turnPurple() {
    Client.setColor("#ff00ff");
  }

  function turnAqua() {
    Client.setColor("#00ffff");
  }

  function turnOrange() {
    Client.setColor("#ffff00");
  }

  function turnWhite() {
    Client.setColor("#ffffff");
  }

  function turnOn() {
    Client.turnOn();
  }

  function turnOff() {
    Client.turnOff();
  }

  function brightness100() {
    Client.setBrightness(100);
  }

  function brightness75() {
    Client.setBrightness(75);
  }

  function brightness50() {
    Client.setBrightness(50);
  }

  function brightness25() {
    Client.setBrightness(25);
  }

  function brightness10() {
    Client.setBrightness(10);
  }

  function brightness1() {
    Client.setBrightness(1);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Light Control</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>On/Off Control</h1>
        </header>
        
        <div className={styles.grid}>
        
          <button className={styles.card} onClick={turnOn}>
            <h3>Turn On &rarr;</h3>
            <p>This turns the light on.</p>
          </button>

          <button className={styles.card} onClick={turnOff}>
            <h3>Turn Off &rarr;</h3>
            <p>This turns the light off.</p>
          </button></div>

          <h1>Color Control</h1>

          <div className={styles.grid}>

          <button className={styles.card} onClick={turnWhite}>
            <h3>White &rarr;</h3>
            <p>This changes the color to White.</p>
          </button>

          <button className={styles.card} onClick={turnRed}>
            <h3>Red &rarr;</h3>
            <p>This changes the color to red.</p>
          </button>

          <button className={styles.card} onClick={turnGreen}>
            <h3>Green &rarr;</h3>
            <p>This changes the color to green.</p>
          </button>

          <button className={styles.card} onClick={turnBlue}>
            <h3>Blue &rarr;</h3>
            <p>This changes the color to blue.</p>
          </button>

          <button className={styles.card} onClick={turnPurple}>
            <h3>Purple &rarr;</h3>
            <p>This changes the color to purple.</p>
          </button>

          <button className={styles.card} onClick={turnAqua}>
            <h3>Aqua &rarr;</h3>
            <p>This changes the color to aqua.</p>
          </button>

          <button className={styles.card} onClick={turnOrange}>
            <h3>Orange &rarr;</h3>
            <p>This changes the color to orange.</p>
          </button>
          </div>

          <h1>Brightness Control</h1>

          <div className={styles.grid}>

          <button className={styles.card} onClick={brightness100}>
            <h3>Brightness 100% &rarr;</h3>
            <p>This changes the brightness to 100%.</p>
          </button>

          <button className={styles.card} onClick={brightness75}>
            <h3>Brightness 75% &rarr;</h3>
            <p>This changes the brightness to 75%.</p>
          </button>

          <button className={styles.card} onClick={brightness50}>
            <h3>Brightness 50% &rarr;</h3>
            <p>This changes the brightness to 50%.</p>
          </button>

          <button className={styles.card} onClick={brightness25}>
            <h3>Brightness 25% &rarr;</h3>
            <p>This changes the brightness to 25%.</p>
          </button>

          <button className={styles.card} onClick={brightness10}>
            <h3>Brightness 10% &rarr;</h3>
            <p>This changes the brightness to 10%.</p>
          </button>

          <button className={styles.card} onClick={brightness1}>
            <h3>Brightness 1% &rarr;</h3>
            <p>This changes the brightness to 1%.</p>
          </button>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js, created by Vercel
        </a>
      </footer>
    </div>
  )
}