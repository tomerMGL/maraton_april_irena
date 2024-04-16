import React from 'react'
import './Bg.css';
import close_x from '../../assets/close.png';
const Bg = () => {
  return (
    <div className='bg_general'>
      <img className='close_img' src={close_x} alt="" />
      <div className="title">העלאת תמונה כדי להסיר את הרקע</div>
    </div>
  )
}

export default Bg