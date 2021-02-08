import styles from "../styles/Home.module.scss";

export default function Links() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Links</h2>
        <div>
          <span
            className={styles.linkLike}
            onClick={() => (window.location.href = "/target")}
            role="link"
          >
            Homepage
          </span>
        </div>
        <div>
          <a href="/target">Homepage</a>
        </div>
      </div>
    </div>
  );
}
