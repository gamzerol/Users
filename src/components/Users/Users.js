import React from "react";
import styles from "./Users.module.css";

const Users = ({ memberList }) => {
  return (
    <div className={styles["user-wrapper"]}>
      {memberList.map((member,index) => {
          return(
            <div className={styles.member} key={index}>
              <span>{member.name}</span>
              <span>{member.age}</span>
            </div>
          )
      })}
    </div>
  );
};
export default Users;
