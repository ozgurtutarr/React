import React from "react";

const ImageShow = ({ image }) => {
  return (
    <div>
      <img
        alt={image.description}
        src={image.urls.regular}
        style={{ width: "300px", height: "200px" }}
      />
    </div>
  );
};

export default ImageShow;
