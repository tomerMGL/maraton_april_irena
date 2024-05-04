import React, { useState } from "react";
import "./Bg.css";
import close_x from "../../assets/close.png";
import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";

import DownloadImg from "../Download_img/DownloadImg";
import Remove_bg from "../Remove_bg/Remove_bg";
import Download_popup from "../Download_popup/Download_popup";

const Bg = () => {
  const [selected_tab, setSelected_tab] = useState(true);

  const replaceSelctedTab = () => setSelected_tab(!selected_tab);

  return (
    <>
      <div className="bg_general">
        <img src={close_x} className="close_img" />
        <div className="title"> העלאת תמונה כדי להסיר את הרקע</div>

        <button className="upload_btn">העלאת תמונה </button>
        <div className="upload_text"> פורמטים נתמכים png, jpeg</div>

        <div className="middle_div">
          <div className="right_div">
            <div className="right_div_inner">
              <DownloadImg
                title="תמונה חינם"
                subtitle="תצוגה מקדימה של תמונה"
                top="true"
                btn_text="הורד"
                last_title="איכות טובה עד 0.25 מגה פיקסל"
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
                <Remove_bg title="Removed" />
              ) : (
                <Remove_bg title="Original" />
              )}
            </div>

            <div className="left_div_footer">
              <button className="takanon_btn"> תקנון החברה </button>
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

      <Download_popup />
    </>
  );
};

export default Bg;
