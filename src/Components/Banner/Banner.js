import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    
      <>
        <div className="banner">
          <img src="../../../Images/banner100.png" alt="" />
        </div>
    </>
  );
}

export default Banner;
