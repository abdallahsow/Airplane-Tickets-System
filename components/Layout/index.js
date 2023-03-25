import Header from "./Header";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
