"use client"

import React from 'react';

const page = () => { 
    
    return (
       <main>
        <div>this is about page</div>
        <div>
        <button
          onClick={() => console.log("alhamdulillah button was clicked")}
          className="bg-red-500 p-5 text-white mt-5"
        >
          Click Me
        </button>
      </div>
       </main>
    );
};

export default page;