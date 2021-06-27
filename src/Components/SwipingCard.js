import React from "react";
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";

function SwipingCard({ image, text }) {
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );
  const animControls = useAnimation();
  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#0a043c",
    boxShadow: "5px 10px 18px rgb(234 57 184 / 90%)",
    borderRadius: 10,
    height: 400,
    width: 300,
    marginTop: 50,
  };
  return (
    <div>
      <Frame
        className='swiping-card'
        center
        drag='x'
        x={motionValue}
        rotate={rotateValue}
        opacity={opacityValue}
        dragConstraints={{ left: -1000, right: 1000 }}
        style={style}
        onDragEnd={(event, info) => {
          if (Math.abs(info.point.x) <= 150) {
            animControls.start({ x: 0 });
          } else {
            animControls.start({ x: info.point.x < 0 ? -200 : 200 });
          }
        }}
      >
        {text}
      </Frame>
    </div>
  );
}

export default SwipingCard;
