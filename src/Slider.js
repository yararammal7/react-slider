import React, { useState, useEffect, useRef } from "react";
import "./Slider.scss";

export default function Slider(props) {
  const [percentage, setPercentage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  useInterval(
    () => {
      if (
        count === props.children.length - parseInt(100 / offset) &&
        props.loop
      ) {
        setPercentage(0);
        setCount(0);
      } else {
        setPercentage(percentage => percentage - offset);
        setCount(count => count + 1);
      }
    },
    props.autoPlay &&
      props.children &&
      count <= props.children.length - parseInt(100 / offset) &&
      offset < 50
      ? props.speed
      : null
    // props.speed
  );

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setOffset(20);
    } else if (width > 992 && width < 1200) {
      setOffset(25);
    } else if (width > 768 && width < 992) {
      setOffset(100 / 3);
    } else {
      setOffset(50);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setCount(0);
        setPercentage(0);
        setOffset(20);
      } else if (width > 992 && width < 1200) {
        setCount(0);
        setPercentage(0);
        setOffset(25);
      } else if (width > 768 && width < 992) {
        setCount(0);
        setPercentage(0);
        setOffset(100 / 3);
      } else {
        setCount(0);
        setPercentage(0);
        setOffset(50);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div className="slider">
        <div
          style={{
            transform: "translateX(" + percentage + "%)"
          }}
          className="slides-wrapper"
        >
          {props.children}
        </div>
        {count > 0 && offset < 50 && (
          <button
            className="previous-button"
            onClick={() => {
              setPercentage(percentage => percentage + offset);
              setCount(count => count - 1);
            }}
          >
            p
          </button>
        )}
        {props.children &&
          count < props.children.length - parseInt(100 / offset) &&
          offset < 50 && (
            <button
              className="next-button"
              onClick={() => {
                setPercentage(percentage => percentage - offset);
                setCount(count => count + 1);
              }}
            >
              n
            </button>
          )}
      </div>
    </>
  );
}

export function Slide(props) {
  const styles = {
    padding: " 0 8px"
  };
  return (
    <div className="slide-item" style={styles}>
      {props.children}
    </div>
  );
}
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback]
  );

  // Set up the interval.
  useEffect(
    () => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    },
    [delay]
  );
}
// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   });
//   return width;
// }
