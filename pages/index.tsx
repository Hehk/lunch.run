import Head from "next/head";
import Image from "next/image";
import H1 from "../components/h1";
import Container from "../components/container";
import styles from "../styles/global.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lunch.run</title>
        <meta name="description" content="Kyle Henderson's special place" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.graphPaper}>
        <Container>
          <H1>Yo!</H1>
        </Container>
      </main>
    </div>
  );
}
