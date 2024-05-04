import React from "react";

import "./DownloadImg.css";
import new_img from '../../assets/new.png';
import check from '../../assets/check.png';




const DownloadImg = (props) => {
  return (
    <div className={`download_img_cont ${props.top == "false" ? "download_img_cont_border" : ""} `}>
      <div
        className={
          "download_img_title " +
          (props.top == "true" ? " padding_top_title " : "")
        }
      >
        {props.title}{" "}
      </div>

      {props.top == "false" ? (
        <img src={new_img} className="download_img_new" />
      ) : (
        <></>
      )}

      <div className="download_img_subtitle"> {props.subtitle} </div>

      <button className="download_btn">{props.btn_text}</button>

      <img src={check} className="check_img" />
      <div className="last_title">{props.last_title}</div>
    </div>
  );
};

export default DownloadImg;
