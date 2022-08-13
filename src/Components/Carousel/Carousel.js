/** @jsxImportSource @emotion/react */

import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { mq, breakpoints } from "../../Styles/tokens";
import { theme } from "../../Styles/theme";
import Button from "../Button/Button";

const CarouselWrapper = styled.div`
  max-width: 972px;
  overflow: hidden;
  background: #efefcc;
  margin: 24px 0;
`;

const Track = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-auto-flow: column;
  transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s,
    transform 0.5s ease 0s !important;
`;

const Item = styled.div`
  height: 100%;
  width: 324px;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.spacing[100]};
`;
export default function Carousel() {
  const [xPos, setXPos] = useState(0);
  const [trackScrollWidth, setTrackScrollWidth] = useState();
  const [wrapperWidth, setWrapperWidth] = useState();
  const wrapperRef = useRef();
  const trackRef = useRef();

  useEffect(() => {
    setWrapperWidth(wrapperRef.current.offsetWidth);
    setTrackScrollWidth(trackRef.current.scrollWidth);
  }, []);

  function handleNextClick() {
    if (xPos === 0 || trackScrollWidth > trackScrollWidth - xPos) {
      setXPos((prev) => prev + -972);
    }
  }

  function handlePrevClick() {
    if (xPos !== 0) {
      setXPos((prev) => prev + 972);
    }
  }

  return (
    <div css={{ maxWidth: "972px", margin: "0 auto" }}>
      <CarouselWrapper ref={wrapperRef}>
        <Track css={{ transform: `translateX(${xPos}px)` }} ref={trackRef}>
          <Item>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              1
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              2
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              3
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              4
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              5
            </div>
          </Item>
          <Item>
            {" "}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                margin: "16px",
                border: "1px dotted black",
              }}
            >
              6
            </div>
          </Item>
        </Track>
      </CarouselWrapper>
      <Button size='md' onClick={handlePrevClick} label='Prev' />
      <Button size='md' onClick={handleNextClick} label='Next' />
    </div>
  );
}
