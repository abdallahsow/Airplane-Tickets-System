import Head from "next/head";
import Layout from "components/Layout";
import styles from "styles/globals.module.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <body className={styles.body} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
