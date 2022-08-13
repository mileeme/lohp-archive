/** @jsxImportSource @emotion/react */

import {useState, useEffect, useRef} from "react";
import styles from "./Progress.module.scss";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import Dots from "./Dots";
import Arrow from "./Arrow";
import slide1 from "../../Assets/slide1.png";
import slide2 from "../../Assets/slide2.png";
import slide3 from "../../Assets/slide3.png";
import slide4 from "../../Assets/slide4.png";
import slide5 from "../../Assets/slide5.png";
import slide6 from "../../Assets/slide6.png";


export default function ProgressTest(props) {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })
  const {translate, transition, activeIndex} = state;

  // useRef hook allows to set the value of useRef to the most up-to-date version of nextSlide function
  const autoPlayRef = useRef();
  // Makes sure ref has functionality
  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  // executes infinite loop of nextSlide
  useEffect(() => {
    const play = () => {
      autoPlayRef.current() 
    }

    const interval = setInterval(play, 3500)

    return () => clearInterval(interval)
  }, [])

  // Slider image info
  const images = [slide1, slide2, slide3, slide4, slide5, slide6]
  const imageHeight = 448;
  const imageWidth = 600;

  // Main slider container
  const Slider = {
    position: "relative",
    height: imageHeight,
    width: imageWidth,
    margin: "0 auto",
    // overflow: "hidden",
  }

  // Slides container
  const SliderContent = styled.div`
    transform: translateX(-${translate}px);
    transition: all 5s ease-out ${transition}s;
    height: 100%;
    width: ${imageWidth * images.length}px;
    display: flex;
  `

  // Single slide
  const Slide = styled.div({
    height: imageHeight, 
    width: imageWidth, 
    // backgroundImage: `url(${content})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
   })

   // Next and prev button
   const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * imageWidth
    })
   }

   const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * imageWidth,
        activeIndex: images.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * imageWidth
    })
   }

  return (
    <div style={Slider}>
      <SliderContent>

        {/* {images.map((image, i) => (
          <Slide key={i} css={{backgroundImage: `url(${image})`}}></Slide>
        ))} */}

        <Slide css={{backgroundImage: `url(${slide1})`}}></Slide>
        <Slide css={{backgroundImage: `url(${slide2})`}}></Slide>
        <Slide css={{backgroundImage: `url(${slide3})`}}></Slide>
        <Slide css={{backgroundImage: `url(${slide4})`}}></Slide>
        <Slide css={{backgroundImage: `url(${slide5})`}}></Slide>
        <Slide css={{backgroundImage: `url(${slide6})`}}></Slide>

      </SliderContent>

      <Dots slides={images} activeIndex={activeIndex} />
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
}
