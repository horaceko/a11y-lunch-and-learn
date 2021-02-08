import styles from "../styles/Home.module.scss";
import pageStyles from "../styles/Controls.module.scss";

export default function Controls() {
  return (
    <div className={styles.container}>
      <div>
        <h2>What should we enable, cap'n?</h2>
        <form method="POST" action="/api/target">
          <div className={pageStyles.clicker}>
            <div className={pageStyles.button}>
              <input type="checkbox" name="thrusters" id="thrusters" />
              <label for="thrusters">Thrusters</label>
            </div>
            <div className={pageStyles.button}>
              <input type="checkbox" name="shields" id="shields" />
              <label for="shields">Shields</label>
            </div>
            <div className={pageStyles.button}>
              <input type="checkbox" name="hyperdrive" id="hyperdrive" />
              <label for="hyperdrive">Hyperdrive</label>
            </div>
          </div>
          <button type="Submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
