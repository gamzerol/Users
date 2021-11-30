import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Modal from '../Modal/Modal';

const UserForm = ({setUsers, users}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [msg, setMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !age) {
      setShowModal(true);
      setMsg('Please fill the inputs.');
    } else if(age < 0) {
      setShowModal(true);
      setMsg('Age must be bigger than 0');
    } else {
      const member = {
        name,
        age,
        id: new Date().getTime()
      };
      setUsers([
          ...users,
          member
      ]);
      setName('');
      setAge('');
      setShowModal(false);
    }
  };
  return (
    <>
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
    {showModal && <Modal message={msg} setModal={setShowModal} />}
    </>
  );
};

export default UserForm;
