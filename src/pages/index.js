import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <div className={styles.container}>
      <Head>
        <title>API Musiko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          API <a href="https://musiko.app">Musiko</a>
        </h1>

        <p className={styles.description}>
          API do aplicativo Musiko
          <code className={styles.code}>V0.0.1</code>
        </p>

        <div className={styles.grid}>
          <a href="https://musiko.app/docs" className={styles.card}>
            <h3>Documentação &rarr;</h3>
            <p>Encontre documentação relacionada ao uso do app.</p>
          </a>

          <a href="https://musiko.app/#dl" className={styles.card}>
            <h3>Site oficial &rarr;</h3>
            <p>Visite nosso site oficial e baixe o aplicativo de graça</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href={"https://musiko.app"} className="text-reset">
          &copy; {currentYear}, {`Musiko`} - Desenvolvido por {`HB.me`}
        </a>
      </footer>
    </div>
  );
}
