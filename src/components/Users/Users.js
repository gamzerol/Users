import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa"
import styles from "./Users.module.css";

const Users = ({ memberList, setUsers }) => {

  const handleDelete = (e) => {
    let newArr = memberList.filter(user => user.id !== Number(e.target.parentElement.id))
    setUsers(newArr);
  }
  const handleChange = (e) => {
    let selectedPerson = memberList.filter(user => user.id === Number(e.target.parentElement.parentElement.parentElement.id));
    console.log(selectedPerson[0])
    // document.querySelector('.name-input').value = selectedPerson['0']['name'];
    // document.querySelector('.age-input').value = selectedPerson['0']['age'];

  }
  return (
    <div className={styles["user-wrapper"]}>
      {memberList.map((member,index) => {
          return(
            <div className={styles.member} key={index} id={member.id}>
              <div>
                <span>{member.name}</span>
                <span>{member.age}</span>
              </div>
              <div className={styles['button-wrapper']}>
              <button className={styles.btn} onClick={handleDelete}><FaTrashAlt /></button>
              <button className={styles.btn} onClick={handleChange}><FaEdit /></button>
              </div>
            </div>
          )
      })}
    </div>
  );
};
export default Users;
