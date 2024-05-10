import React, { useRef, useState } from "react";
import axios from "axios";
import "./Bg.css";
import close_x from "../../assets/close.png";
import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";

import DownloadImg from "../Download_img/DownloadImg";
import Remove_bg from "../Remove_bg/Remove_bg";
import Download_popup from "../Download_popup/Download_popup";

const Bg = () => {
  const [selected_tab, setSelected_tab] = useState(true);
  const [show_download_popup, setShow_download_popup] = useState(false);
  const [show_eula_popup, setShow_eula_popup] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showErrorMsgSize, setShowErrorMsgSize] = useState(false);
  const [imageUrlForPrev, setImageUrlForPrev] = useState('');
  const [bg_color, setBg_color] = useState('');

  const replaceSelctedTab = () => setSelected_tab(!selected_tab);
  const replaceShowPopUp = () => setShow_download_popup(!show_download_popup);
  const replaceEulaPopUp = () => setShow_eula_popup(!show_eula_popup);

  const uploadRef = useRef();
  const focusInput = () => {
    uploadRef.current.click();
  };

  const save_color_func = (color) => setBg_color(color);
  //_________________________FORMDATA_______________________________________//

  const upload_file = (e) => {
    let file_info = e.target.files[0];
    let url = "http://localhost:5000/upload_file";

    if (file_info.size <= 1000000) {
      if (
        file_info.type == "image/png" ||
        file_info.type == "image/jpg" ||
        file_info.type == "image/jpeg"
      ) {
        let formData = new FormData(); //formdata object

        formData.append("file", file_info); //append the values with key, value pair
        formData.append("color", bg_color);

        const config = {
          headers: { "content-type": "multipart/form-data" },
        };

        axios
          .post(url, formData, config)
          .then((response) => {
            console.log(response.data);
            setImageUrlForPrev(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setShowErrorMsg(true);
      }
    }
    else{
      setShowErrorMsgSize(true);
    }
  };

  return (
    <>
      <div className="bg_general">
        <img src={close_x} className="close_img" />
        <div className="title"> העלאת תמונה כדי להסיר את הרקע</div>

        <button className="upload_btn" onClick={focusInput}>
          העלאת תמונה
        </button>
        <input
          type="file"
          ref={uploadRef}
          style={{ display: "none" }}
          onChange={upload_file}
        />
        <div className="upload_text"> פורמטים נתמכים png, jpeg</div>
        {showErrorMsg && <div className="error_msg">קובץ לא נתמך</div>}
        {showErrorMsgSize && <div className="error_msg">קובץ גדול מידי</div>}

        <div className="middle_div">
          <div className="right_div">
            <div className="right_div_inner">
              <DownloadImg
                title="תמונה חינם"
                subtitle="תצוגה מקדימה של תמונה"
                top="true"
                btn_text="הורד"
                last_title="איכות טובה עד 0.25 מגה פיקסל"
                show_download_popup_func={replaceShowPopUp}
              ></DownloadImg>

              <DownloadImg
                title="Pro"
                subtitle="תמונה מלאה"
                top="false"
                btn_text="HD הורד"
                last_title="האיכות הטובה ביותר עד 25 מגה פיקסל"
              ></DownloadImg>
            </div>
          </div>

          <div className="left_div">
            <div className="tabs_cont">
              <div
                className={`tab ${selected_tab ? "selected_tab" : ""}`}
                onClick={replaceSelctedTab}
              >
                הסר רקע
              </div>
              <div
                className={`tab ${!selected_tab ? "selected_tab" : ""}`}
                onClick={replaceSelctedTab}
              >
                מקורי
              </div>
            </div>
            <div className="left_div_inner">
              {selected_tab ? (
                <Remove_bg save_color_func={save_color_func} title="Removed" img_name={`/removed_bg_img/${imageUrlForPrev.split('.')[0]}.png`} />
              ) : (
                <Remove_bg title="Original" img_name={`/uploaded_img/${imageUrlForPrev}`} />
              )}
            </div>

            <div className="left_div_footer">
              <button className="takanon_btn" onClick={replaceEulaPopUp}>
                {" "}
                תקנון החברה{" "}
              </button>
              <div className="takanon_text">
                {" "}
                על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן
                וחלים מדיניות ופרטיות{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="footer_cont">
          <img src={logo} className="footer_logo" />

          <img src={banner} className="footer_banner" />
        </div>
      </div>

      {show_download_popup && (
        <>
          <div className="layout"></div>
          <Download_popup close_download_popup={replaceShowPopUp} img_name={`/removed_bg_img/${imageUrlForPrev.split('.')[0]}.png`} />
        </>
      )}

      {show_eula_popup && (
        <>
          <div className="layout"></div>
          <div className="popup_eula">תקנון תקנון תקנון תקנון תקנון</div>
        </>
      )}
    </>
  );
};

export default Bg;
