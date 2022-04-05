import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  const router = useRouter();

  const logout = () => {
    // ⌛️ set expires time
    const expires = new Date(0).toUTCString();

    // 🍪 set cookie to expire
    document.cookie = `isLogin=false; expires=${expires}`;

    // ⬅️ navigate to login page
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>

      <main className={styles.main}>
        <h1>Welcome to Dashboard!</h1>
        <button className={styles.logout} onClick={logout}>
          Log out
        </button>
      </main>
    </div>
  );
}
