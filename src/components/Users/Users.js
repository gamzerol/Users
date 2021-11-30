import React from "react";
import styles from "./Users.module.css";

const Users = ({ memberList, setUsers }) => {

  const handleDelete = (e) => {
    let newArr = memberList.filter(user => user.id !== e.target.id)
    setUsers(newArr);
  }
  return (
    <div className={styles["user-wrapper"]}>
      {memberList.map((member,index) => {
          return(
            <div className={styles.member} key={index} id={member.id} onClick={handleDelete}>
              <span>{member.name}</span>
              <span>{member.age}</span>
            </div>
          )
      })}
    </div>
  );
};
export default Users;
