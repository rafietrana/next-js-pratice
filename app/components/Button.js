"use client"
import React from 'react';

const Button = () => {
    return (
        <div>
            <button onClick={()=>{console.log('alhamdulillah button clicked');
            }} className='px-3 py-2 bg-red-500 text-white rounded-lg '>Click Me</button>
        </div>
    );
};

export default Button;