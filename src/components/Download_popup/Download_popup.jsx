import React from 'react'
import './Download_popup.css'
import close_img from '../../assets/close1.png'
import not_robot from '../../assets/not_robot.png'


const Download_popup = (props) => {
  return (
    <div className='download_popup_cont'>

      <div className="top_div"></div>

      <img src={close_img} className='close_img' onClick={props.close_download_popup} />

      <div className='download_title'>אישור להורדת תמונה</div>

      <div className="subtitle">האם להוריד את התמונה?</div>

      <div className='checkbox_cont'>
        <input type="checkbox" name="" id="" />
        <div>אני לא רובוט</div>
        <img src={not_robot} className='not_robot_img' alt="" />
      </div>

      <div className='download_btn_cont'>
        <button className='cancel_btn' onClick={props.close_download_popup}>ביטול</button>
        <button className='accept_btn'>אישור</button>
      </div>
    </div>
  )
}

export default Download_popup