import React, { useRef, useState } from "react";

import "./Remove_bg.css";
import upload_img from "../../assets/img_1.png";
import warning from "../../assets/warning.png";

const Remove_bg = (props) => {
  const inputElement = useRef();
    const [color_hex, setColor_hex] = useState('');

  const choose_color_func = () => {
    inputElement.current.click();
  };

  const bg_color = (e) => {
    setColor_hex(e.target.value);
    props.save_color_func(e.target.value)
  }

  return (
    <div className="np_bg_cont">
      {props.title == "Removed" ? (
        <>
          <div className="no_bg_title">
            אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף
          </div>
          <img src={warning} className="warning" />

          <button className="choose_color" onClick={choose_color_func}>
            צבע רקע
            <span className="span_color" style={{ backgroundColor: color_hex }}></span>
          </button>
          <input type="color" ref={inputElement} className="input_color" onChange={bg_color} />
        </>
      ) : (
        <></>
      )}
      {props.img_name && (
        <img
          src={`http://localhost:5000${props.img_name}`}
          className="uploaded_img"
        />
      )}
    </div>
  );
};

export default Remove_bg;
