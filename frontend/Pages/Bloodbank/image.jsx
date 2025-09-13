import React from "react";
import sampleImage from "../../Assets/blood.png"; // ✅ path relative to this file

const ImageExample = () => {
  return (
   <div style={{ padding: "100px",display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img 
    src={sampleImage} 
    alt="Sample" 
    style={{ width: "700px", borderRadius: "10px" }} 
  />
</div>
  );
};

export default ImageExample;
