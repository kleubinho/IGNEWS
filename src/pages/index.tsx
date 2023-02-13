import { GetServerSideProps } from "next";
import Head from "next/head";
import { SubsribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access ti akk tge publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubsribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      nome: "Kleber",
    },
  };
};