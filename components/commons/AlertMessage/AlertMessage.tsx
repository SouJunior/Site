import React from "react";
import style from "./AlertMessage.module.css";

const AlertMessage = ({ message, onClose }) => (
  <div className={style.overlay}>
    <div className={style.box}>
      <p>{message}</p>
      <button onClick={onClose}>OK</button>
    </div>
  </div>
);

export default AlertMessage;
