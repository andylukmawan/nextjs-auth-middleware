import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Login() {
  const router = useRouter();

  const login = () => {
    // ⌛️ set expires time
    const now = new Date();
    const expiresIn = now.setSeconds(now.getSeconds() + 60); // expires in 60 seconds (custom) after login
    const expires = new Date(expiresIn).toUTCString();

    // 🍪 set cookie
    document.cookie = `isLogin=true; expires=${expires}; Secure`;

    // ➡️ navigate to dashboard page
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Log in</title>
      </Head>

      <main className={styles.main}>
        <h1>Log in with Click</h1>
        <button className={styles.login} onClick={login}>
          Log in
        </button>
      </main>
    </div>
  );
}
