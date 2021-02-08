import styles from "../styles/Home.module.scss";

export default function FormHtml() {
  function handleFormSubmit(e) {
    fetch(e.target.action, {
      method: e.target.method,
      body: new URLSearchParams(new FormData(e.target)).toString(),
    });

    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>Forms Native</h2>
        <form method="POST" action="/api/target" onSubmit={handleFormSubmit}>
          <input type="text" name="anArray[]" />
          <input type="text" name="anArray[]" />
          <input type="text" name="anObject[aKey]" />
          <input type="text" name="anObject[anotherKey]" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
