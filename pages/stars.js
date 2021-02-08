import styles from "../styles/Home.module.scss";
import stars from "../styles/Stars.module.scss";

export default function Stars() {
  return (
    <div className={styles.container}>
      <form action="/api/target" method="POST">
        <h2 id="star-header">How many stars?</h2>
        <div role="group" aria-labeledby="star-header" className={stars.widget}>
          <div className={stars.background} aria-hidden="true">
            ⭐️⭐️️⭐️️⭐⭐
          </div>
          <div className={stars.label}>
            <input type="radio" name="stars" value="5" id="star5" />
            <label aria-label="Five stars" for="star5">
              ⭐️⭐️️⭐️️⭐⭐️
            </label>
          </div>
          <div className={stars.label}>
            <input type="radio" name="stars" value="4" id="star4" />
            <label aria-label="Four stars" for="star4">
              ⭐️⭐️️⭐️️⭐️️
            </label>
          </div>
          <div className={stars.label}>
            <input type="radio" name="stars" value="3" id="star3" />
            <label aria-label="Three stars" for="star3">
              ⭐️⭐️️⭐️️
            </label>
          </div>
          <div className={stars.label}>
            <input type="radio" name="stars" value="2" id="star2" />
            <label aria-label="Two stars" for="star2">
              ⭐️️⭐️️
            </label>
          </div>
          <div className={stars.label}>
            <input type="radio" name="stars" value="1" id="star1" />
            <label aria-label="One star" for="star1">
              ⭐️️️️
            </label>
          </div>
          &nbsp;
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
