import Head from "next/head";
import Image from "next/image";
import H1 from "../components/h1";
import Container from "../components/container";
import styles from "../styles/global.module.css";
import Text from "../components/text";
import regDumb from "../public/reg_dumb.jpg";
import regCute from "../public/reg_cute.jpg";
import regForest from "../public/reg_forest.jpeg";

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
          <H1>Reg</H1>
          <Text className="pb-4">
            He goes by Greg. This page is still work in progress because the
            nextjs image component is really annoying
          </Text>
          <Image
            className="pb-4"
            layout="fill"
            src={regDumb}
            alt="Reg being special"
          />
          <Image
            className="pb-4"
            layout="fill"
            src={regCute}
            alt="Reg being special"
          />
          <Image
            className="pb-4"
            layout="fill"
            src={regForest}
            alt="Reg being special"
          />
        </Container>
      </main>
    </div>
  );
}
