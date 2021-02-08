import styles from "../styles/Home.module.scss";
import { useState } from "react";

const TARGET_PATH = "/api/target";

export default function FormJavascript() {
  const [formData, setFormData] = useState({});

  function handleFormSubmit(e) {
    fetch(TARGET_PATH, {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
    });

    e.preventDefault();
  }

  function handleChange(e) {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>Forms JS</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="anArray[0]" onChange={handleChange} />
          <input type="text" name="anArray[1]" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
