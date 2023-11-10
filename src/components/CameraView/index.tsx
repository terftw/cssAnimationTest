import React from "react";

const CameraView = () => {
  const numImages = 24; // Adjust based on the number of images
  const angle = 360 / numImages;
  const testArr = Array.apply(null, Array(numImages))
    .map(function (y, i) { return i; });;

  const getImageStyle = (index: number) => {
    const rotateAngle = index * angle;
    const translateX = Math.cos((rotateAngle * Math.PI) / 180) * 300; // Adjust the radius as needed
    const translateY = Math.sin((rotateAngle * Math.PI) / 180) * 300;

    return {
      transform: `translate(${translateX}px, ${translateY}px) rotate(${rotateAngle - 90}deg)`,
    };
  };

  const imageMap = ["https://placekitten.com/100/100"];

    return <div className="circle-container">
        {testArr.map((img, index) => (
          <div key={index} className="circle-img">
                    <img
          key={index}
          src={imageMap[0]}
          alt={`Image ${index + 1}`}
          style={getImageStyle(index)}
        />
          </div>
      ))}
    </div>
}

export { CameraView };