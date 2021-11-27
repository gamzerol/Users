import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = ({setUsers, users}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const member = {
      name,
      age,
    };
    setUsers([
        ...users,
        member
    ]);
    setName('');
    setAge('');
  };
  return (
    <form className={styles["form-wrapper"]} onSubmit={handleSubmit}>
      <div className={styles["form-item"]}>
        <label>Username</label>
        <input
          type="text"
          className={styles["form-input"]}
          value={name}
          onChange={nameChangeHandler}
        />
      </div>
      <div className={styles["form-item"]}>
        <label>Age(Years)</label>
        <input
          type="number"
          className={styles["form-input"]}
          value={age}
          onChange={ageChangeHandler}
        />
      </div>
      <button type="submit" className={styles.btn}>
        Add User
      </button>
    </form>
  );
};

export default UserForm;
