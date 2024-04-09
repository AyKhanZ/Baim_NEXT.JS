import React from "react";
import styles from "./DeleteForm.module.css";

const DeleteForm = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.contentContainer} `}>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`${styles.trash}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            fillRule="evenodd"
          ></path>
        </svg>
        <h2 className={`${styles.question}`}>Are you sure?</h2>
        <p className={` ${styles.text} `}>
          Do you really want to continue ? This process cannot be undone
        </p>
      </div>
      <div className={` ${styles.btnsContainer}`}>
        <button className={`${styles.cancelButton}`}>Cancel</button>
        <button className={`${styles.confirmButton}`}>Confirm</button>
      </div>
    </div>
  );
};

export default DeleteForm;
