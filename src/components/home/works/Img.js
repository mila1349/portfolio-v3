import React, { useEffect, useState, useRef } from "react";

export default ({ url, active, index, x, y }) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const ref = useRef(null);

  useEffect(() => {
    setDimension({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight
    });
  }, []);

  return (
    <img
      ref={ref}
      className={active && "is-active"}
      src={url}
      alt="sample"
      style={{
        transform: `translate3d(${x - dimension.width / 2}px, ${
          y - dimension.height / 2
        }px, 0)`
      }}
    />
  );
};
