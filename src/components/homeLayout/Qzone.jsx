import React from 'react';
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playImg from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 mt-5'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className="space-y-5 justify-center">
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;