/** @jsxImportSource @emotion/react */

import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { mq } from "../../Styles/tokens";
import Button from "../Button/Button";
// import CardList2 from "../Card/CardList2";
import CardList from "../Card/CardList";
import Icon from "../Icon/Icon";
import useWindowWidth from "../Hooks/useWindowWidth";

const CarouselWrapper = styled.div({
  overflow: "hidden",
  margin: "24px 0",
  [mq[2]]: {
    maxWidth: 1008,
  },
  [mq[3]]: {
    maxWidth: 1344,
  },
});

const Track = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-auto-flow: column;
  transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s,
    transform 0.5s ease 0s !important;
`;

export default function Carousel2(props) {
  const [xPos, setXPos] = useState(0);
  const [trackScrollWidth, setTrackScrollWidth] = useState();
  const [wrapperWidth, setWrapperWidth] = useState();
  const wrapperRef = useRef();
  const trackRef = useRef();
  const { product, filtered } = props;
  const windowSize = useWindowWidth();

  // Get window resize width
  // function useWindowWidth() {
  //   const [windowWidth, setWindowWidth] = useState();
  //   useEffect(() => {
  //     function handleWindowResize() {
  //       setWindowWidth(window.innerWidth);
  //     }
  //     window.addEventListener("resize", handleWindowResize);
  //     handleWindowResize();
  //     return () => window.removeEventListener("resize", handleWindowResize);
  //   }, [])
  //   return windowWidth;
  // }

  useEffect(() => {
    setWrapperWidth(wrapperRef.current.offsetWidth);
    setTrackScrollWidth(trackRef.current.scrollWidth);
  }, []);

  function handleNextClick() {
    if (xPos === 0 || trackScrollWidth > trackScrollWidth - xPos) {
      if (windowSize > 1440) {
        setXPos((prev) => prev + -1344);
      } else if ((windowSize > 1024) & (windowSize < 1440)) {
        setXPos((prev) => prev + -1008);
      } else {
        setXPos((prev) => prev + -972);
      }
    }
  }

  function handlePrevClick() {
    if (xPos !== 0) {
      if (windowSize > 1440) {
        setXPos((prev) => prev + 1344);
      } else if ((windowSize > 1024) & (windowSize < 1440)) {
        setXPos((prev) => prev + 1008);
      } else {
        setXPos((prev) => prev + 972);
      }
    }
  }

  return (
    <div css={{ position: "relative" }}>
      <div
        css={{
          position: "absolute",
          display: "flex",
          gap: 16,
          zIndex: 50,
          top: -60,
          right: 0,
        }}
      >
        <Button
          size='sm'
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            width: 36,
            height: 36,
          }}
          onClick={handlePrevClick}
          label={<Icon type='arrowPrev' button='ghostNeutral' />}
          ghostNeutral
        />
        <Button
          size='sm'
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            width: 36,
            height: 36,
          }}
          onClick={handleNextClick}
          label={<Icon type='arrowNext' button='ghostNeutral' />}
          ghostNeutral
        />
      </div>

      <CarouselWrapper ref={wrapperRef}>
        <Track css={{ transform: `translateX(${xPos}px)` }} ref={trackRef}>
          <CardList product={product} filtered={filtered} />
        </Track>
      </CarouselWrapper>
    </div>
  );
}
