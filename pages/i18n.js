import styles from "../styles/Home.module.scss";
import pageStyles from "../styles/I18n.module.scss";

export default function I18n() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Overflowing content</h2>
        <div className={pageStyles.overflow}>
          <h2>law for regulating the labeling of beef</h2>
        </div>
        <div className={pageStyles.overflow}>
          <h2>
            Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz
          </h2>
        </div>
      </div>
    </div>
  );
}
