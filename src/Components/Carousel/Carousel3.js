/** @jsxImportSource @emotion/react */

// Carousel for career academy
import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { mq } from "../../Styles/tokens";
import Button from "../Button/Button";
import ButtonArrow from "../Button/ButtonArrow";
import CareerAcademyCardList from "../Card/CareerAcademyCardList";
import Icon from "../Icon/Icon";
import useWindowWidth from "../Hooks/useWindowWidth";

// Wrapper style
const CarouselWrapper = styled.div({
  position: "relative",
  overflow: "hidden",
  // margin: "0 auto",
  padding: "48px 0 0 0",
  [mq[2]]: {
    maxWidth: 1024,
  },
  [mq[3]]: {
    maxWidth: 1440,
  },
});

// Track style
const Track = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  margin-bottom: 24px;
  transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s,
    transform 0.5s ease 0s !important;
`;

export default function Carousel3(props) {
  const [xPos, setXPos] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState();
  const [trackScrollWidth, setTrackScrollWidth] = useState();
  const wrapperRef = useRef();
  const trackRef = useRef();
  const windowSize = useWindowWidth();
  const { selection } = props;

  // Get window resize width
  // function useWindowWidth() {
  //   const [windowWidth, setWindowWidth] = useState();

  //   // Listens for window resize
  //   useEffect(() => {
  //     function handleWindowResize() {
  //       setWindowWidth(window.innerWidth);
  //     }
  //     window.addEventListener("resize", handleWindowResize);
  //     handleWindowResize();

  //     return () => window.removeEventListener("resize", handleWindowResize);
  //   }, []);
  //   return windowWidth;
  // }

  // Gets the carousel width on page load
  useEffect(() => {
    setWrapperWidth(wrapperRef.current.offsetWidth);
    setTrackScrollWidth(trackRef.current.scrollWidth);
  }, []);

  // Next track
  function handleNextClick() {
    if (xPos === 0 || trackScrollWidth > trackScrollWidth - xPos) {
      if (windowSize > 1440) {
        // position minus width of track and gap
        setXPos((prev) => prev + -1472);
      } else if ((windowSize > 1024) & (windowSize < 1440)) {
        setXPos((prev) => prev + -1024 - 32);
      } else {
        setXPos((prev) => prev + -600 - 32);
      }
    }
  }

  // Previous track
  function handlePrevClick() {
    if (xPos !== 0) {
      if (windowSize > 1440) {
        // position plus width of track and gap
        setXPos((prev) => prev + 1472);
      } else if ((windowSize > 1024) & (windowSize < 1440)) {
        setXPos((prev) => prev + 1024 + 32);
      } else {
        setXPos((prev) => prev + 600 + 32);
      }
    }
  }

  return (
    <CarouselWrapper ref={wrapperRef}>
      <div
        css={{
          position: "absolute",
          display: "flex",
          gap: 16,
          zIndex: 50,
          top: 0,
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
      <Track css={{ transform: `translateX(${xPos}px)` }} ref={trackRef}>
        <CareerAcademyCardList selection={selection} />
      </Track>
      {/* <ButtonArrow label="View more academy courses" icon={<Icon type="arrowNext" button="ghostNeutral"/>}/> */}
    </CarouselWrapper>
  );
}
