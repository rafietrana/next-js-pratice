import React from "react";
import thumb from "@/public/images/flutterS.png";
import Image from "next/image";
 
 
const page = () => {
  return (
    <div>
      <p>this is mission page</p>
      <Image src={thumb} alt="this is thumbe image" />
    </div>
  );
};

export default page;
