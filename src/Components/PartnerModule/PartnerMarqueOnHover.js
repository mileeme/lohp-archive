/** @jsxImportSource @emotion/react */

import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import {
  googleFull,
  ibm,
  meta,
  salesforce,
  intuit,
  hubspot,
  illinois,
  duke,
  michigan,
  stanford,
  penn,
  aws,
  amil,
  atlassian,
  caseWestern,
  deepLearningAi,
  imperialCollege,
} from "../Icon/PartnerLogo";
import styles from "./PartnerMarqueOnHover.module.scss";
import useWindowWidth from "../Hooks/useWindowWidth";

export default function PartnerMarqueOnHover(props) {
  const logoRef = useRef(null);

  const partnerList = [
    googleFull,
    ibm,
    meta,
    salesforce,
    intuit,
    hubspot,
    illinois,
    duke,
    michigan,
    stanford,
    penn,
    aws,
    amil,
    atlassian,
    caseWestern,
    deepLearningAi,
    imperialCollege,
  ];
  const showPartners = 6;

  // Listen for window size
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

  // Randomizes order of partners
  let sortPartnerList = partnerList.sort(randomize);
  function randomize(a, b) {
    return 0.5 - Math.random();
  }

  // Pause scroll
  const mouseEnterHandler = () => {
    if (!!logoRef.current) {
      logoRef.current.style.animationPlayState = "running";
      logoRef.current.style.webkitAnimationPlayState = "running";
    }
  };
  const mouseLeaveHandler = () => {
    if (!!logoRef.current) {
      logoRef.current.style.animationPlayState = "paused";
      logoRef.current.style.webkitAnimationPlayState = "paused";
    }
  };

  return (
    <Section
      aria-labelledby='sectionHeading'
      css={{ display: "grid", gap: 32 }}
    >
      {/* Heading */}
      <div css={{ textAlign: "center" }}>
        <h2 id='sectionHeading'>
          <Typography
            label='We collaborate with 200+ leading universities and companies'
            d2Semibold
          />
        </h2>
      </div>

      {/* Brand logos */}
      <div className={styles.logosWrapper}>
        <ul
          className={styles.logos}
          style={{ animationPlayState: "paused" }}
          ref={logoRef}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {windowSize < 1024 &&
            sortPartnerList.slice(0, 8).map((partner) => (
              <li
                className={styles.logo}
                key={sortPartnerList.indexOf(partner)}
              >
                <img src={partner} />
              </li>
            ))}
          {windowSize > 1024 &&
            sortPartnerList.map((partner) => (
              <li
                className={styles.logo}
                key={sortPartnerList.indexOf(partner)}
              >
                <img src={partner} />
              </li>
            ))}
        </ul>
      </div>
    </Section>
  );
}
