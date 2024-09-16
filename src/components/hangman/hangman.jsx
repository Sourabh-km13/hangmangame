import {useNavigate } from "react-router-dom";
import level1 from "../../assets/images/image1.svg";
import level2 from "../../assets/images/image2.svg";
import level3 from "../../assets/images/image3.svg";
import level4 from "../../assets/images/image4.svg";
import level5 from "../../assets/images/image5.svg";
import level6 from "../../assets/images/image6.svg";
import level7 from "../../assets/images/image7.svg";
import React from 'react'
const images=[level1,level2,level3,level4,level5,level6,level7]
export function Hangman({step,orignalWord}) {
    
    
    return (
        <>
            <div className="w-[300px] h-[300px]">
                <img src={step>=images.length?level7:images[step]} alt="" />
            </div>

        </>
    )
}
