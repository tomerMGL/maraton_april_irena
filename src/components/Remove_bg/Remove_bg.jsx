import React, { useRef } from 'react'

import './Remove_bg.css';
import upload_img from '../../assets/img_1.png'
import warning from '../../assets/warning.png'


const Remove_bg = (props) => {

    const inputElement = useRef();
    const choose_color_func = () => {
        inputElement.current.click()
    }

  return (
    <div className='np_bg_cont'>
    {
        props.title == "Removed" ? (
            <>
                <div className='no_bg_title'>אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף</div>
                <img src={warning} className='warning' />

                <button className='choose_color' onClick={choose_color_func}>צבע רקע</button>
                <input type="color" ref={inputElement} className='input_color' />
            </>
        ) : (
            <></>
        )
    }

        <img src={upload_img} className='uploaded_img' />
    </div>
  )
}

export default Remove_bg