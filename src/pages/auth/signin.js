
import { signIn } from 'next-auth/react';
import styles from '@/ui/login/login.module.css'; // Adjust the path based on your setup

export default function SignInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Sign In</h1>
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        <button onClick={() => signIn('google')}>Sign in with Google</button>
        <button onClick={() => signIn('linkedin')}>Sign in with LinkedIn</button>
      </div>
    </div>
  );
}
