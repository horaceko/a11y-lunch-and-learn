import styles from "../styles/Home.module.scss";
import VercelLogo from "../public/vercel.svg";

export default function NonA11y() {
  return (
    <div className={styles.container}>
      <span className={styles.h1}>My Inaccessible Website</span>
      <p>Welcome to my website! I hope you'll stay a while.</p>
      <div>
        <span className={styles.h2}>Pictures</span>
        <div>
          <img src="/kitty-sad.jpg" />
        </div>
        <div>
          <button>
            <VercelLogo />
          </button>
        </div>
      </div>
      <div>
        <span className={styles.h2}>Interactive elements</span>
        <div>
          <span onClick={() => alert("clicked")}>This is inaccessible</span>
        </div>
      </div>
      <div>
        <span className={styles.h2}>Dashboard</span>
        <div>
          <input type="checkbox" />
          <label>Enable lasers</label>
        </div>
      </div>
    </div>
  );
}
