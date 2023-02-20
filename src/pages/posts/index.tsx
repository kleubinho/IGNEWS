import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import * as prismic from '@prismicio/client'
import { useFirstPrismicDocument } from "@prismicio/react/dist/clientHooks";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2023</time>
            <strong>Criando coisas insanas para pessoas insanas</strong>
            <p>Nesse guia eu nào sei oque estou fazendo apenas estou fazedno</p>
          </a>
          <a href="#">
            <time>12 de março de 2023</time>
            <strong>Criando coisas insanas para pessoas insanas</strong>
            <p>Nesse guia eu nào sei oque estou fazendo apenas estou fazedno</p>
          </a>
          <a href="#">
            <time>12 de março de 2023</time>
            <strong>Criando coisas insanas para pessoas insanas</strong>
            <p>Nesse guia eu nào sei oque estou fazendo apenas estou fazedno</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const [document] = useFirstPrismicDocument()

//   const response = prismic.usePrismicDocumentByUID('document.type','post')

  console.log(document)

  return {
    props: {},
  };
};
