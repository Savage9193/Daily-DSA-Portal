import styles from '@/ui/login/login.module.css'
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
      <h1 className={styles.h2}>Login</h1>
      <input type='text' placeholder='username' name='username'/>
      <input type='password' placeholder='password' name='password'/>
      <button>Login</button>n
      </form>
    </div>
  )
}

export default LoginPage;