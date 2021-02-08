import styles from "../styles/Home.module.scss";
import VercelLogo from "../public/vercel.svg";

export default function A11y() {
  return (
    <div className={styles.container}>
      <h1>My Accessible Website</h1>
      <p>Welcome to my website! I hope you'll stay a while.</p>
      <div>
        <h2>Pictures</h2>
        <div>
          <img src="/kitty-good.jpg" alt="Horace's cat" />
        </div>
        <div>
          <button aria-label="Vercel logo">
            <VercelLogo />
          </button>
        </div>
      </div>
      <div>
        <h2>Interactive elements</h2>
        <div>
          <span role="button" onClick={() => alert("clicked")} tabIndex="0">
            This is accessible
          </span>
        </div>
      </div>
      <div>
        <h2>Dashboard</h2>
        <div>
          <label>
            <input type="checkbox" />
            Enable proton torpedoes
          </label>
        </div>
      </div>
    </div>
  );
}
