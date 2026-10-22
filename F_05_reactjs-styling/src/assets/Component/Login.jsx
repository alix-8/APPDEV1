import styles from './Login.module.css'

function Login() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className={styles.card} aria-label="Account access">
      <div
        className={styles.artwork}
        role="img"
        aria-label="Decorative blue botanical leaves"
      />

      <div className={styles.content}>
        <header className={styles.heading}>
          <h1>Hello,</h1>
          <span>Guyss!</span>
        </header>

        <div className={styles.tabs}>
          <button type="button" className={`${styles.tab} ${styles.selected}`}>
            Login
          </button>
          <button type="button" className={styles.tab}>
            SignUp
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.visuallyHidden} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          <label className={styles.visuallyHidden} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            autoComplete="current-password"
            required
          />

          <button className={styles.submit} type="submit">
            Login
          </button>
        </form>

        <p className={styles.divider}>Or</p>

        <div className={styles.socials}>
          <button type="button" aria-label="Continue with Google">
            <img src="/google.svg" alt="" />
          </button>
          <button type="button" aria-label="Continue with Facebook">
            <img src="/facebook.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Login
