/** @jsxImportSource @emotion/react */

import {useState, useEffect, useRef} from "react";
import styles from "./Progress.module.scss";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import slide1 from "../../Assets/slide1.png";
import slide2 from "../../Assets/slide2.png";
import slide3 from "../../Assets/slide3.png";
import slide4 from "../../Assets/slide4.png";
import slide5 from "../../Assets/slide5.png";
import slide6 from "../../Assets/slide6.png";

export default function Progress(props) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  const delay = 2500;
  
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () => setIndex(
        (prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      ), 
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const slideshow = {
    margin: "0 auto", 
    overflow: "hidden",
    maxWidth: 600
  }

  const slideshowSlider = {
    whiteSpace: "nowrap",
  }

  const slide = {
    display: "inline-block",
    height: 437,
    width: "100%",
  }


  return (
    <Section aria-labelledby='sectionHeading' bgColor={theme.palette.background.grayLight}>

      <Container css={{display: "grid", gap: 40, [mq[1]]: {gridAutoFlow: "column", gridAutoColumns: "minmax(0, 1fr)", alignItems: "center"} }} lg>
        <div css={{[mq[1]]: {maxWidth: 400, margin: "0 auto"} }}>
          <h3 id='sectionHeading'>
            <Typography
              label='Make progress at your own pace and track your progress'
              h1Semibold
            />
          </h3>
          <Typography label="Whether it’s just a few minutes or an afternoon, whenever you have time to learn, Coursera can help you make progress towards your goals." body1 />
        </div>
        
        {/* Carousel */}
        <div style={slideshow}>
          <div style={slideshowSlider} css={{transform: `translate3d(-${index * 100}%, 0, 0)`,
 transition: "transform 3s ease 1s"}}>

            {/* {slides.map((el, index) => (
              <div key={index} style={slide}><img css={{width: "100%"}} src={el} /></div>
            ))} */}
            <div style={slide}><img css={{width: "100%"}} src={slide1} /></div>
            <div style={slide}><img css={{width: "100%"}} src={slide2} /></div>
            <div style={slide}><img css={{width: "100%"}} src={slide3} /></div>
            <div style={slide}><img css={{width: "100%"}} src={slide4} /></div>
            <div style={slide}><img css={{width: "100%"}} src={slide5} /></div>
            <div style={slide}><img css={{width: "100%"}} src={slide6} /></div>

          </div>
        </div>

      </Container>

    </Section>
  );
}
