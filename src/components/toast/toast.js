import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import  "./toast.css";

const Toast = ({toggleToast,setToggleToast,toastMessage,toastColor}) => {

  const getToastColor = () => {
    switch (toastColor) {
      case "DANGER":
        return "#ff5050";
      case "INFO":
        return "#ff69b4";
      case "WARNING":
        return "#ffa805";
      case "SUCCESS":
        return "#219653";
      case "DEFAULT":
      default:
        return "#ff69b4"; 
    }
  };

  let timer;

  const handleTimeout = () => {
    timer = setTimeout(() => {
      setToggleToast(false);
    }, 5000);
  };

  const handleClose = () => {
    clearTimeout(timer);
    setToggleToast(false);
  };

  useEffect(() => {
    if (toggleToast) {
      handleTimeout();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [toggleToast]);


  return (
    <>
      {toggleToast && (
        <div
          className='container-toast'
          style={{ borderLeft: `0.7rem solid ${getToastColor()}` }}
        >
          <p>{toastMessage}</p>
          <button onClick={handleClose} className='close_button'>
            <FiX />
          </button>
        </div>
      )}
    </>
  );
};

export default Toast;

