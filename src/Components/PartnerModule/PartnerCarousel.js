/** @jsxImportSource @emotion/react */

import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import Container from "../Container/Container";
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
import styles from "./PartnerCarousel.module.scss";
import useWindowWidth from "../Hooks/useWindowWidth";
import { mq } from "../../Styles/tokens";

export default function PartnerCarousel(props) {
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

  // sort partner list
  let sortPartnerList = partnerList.sort(randomize);
  function randomize(a, b) {
    return 0.5 - Math.random();
  }

  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 3500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

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
      <div lg className={styles.slideshow}>
        <div
          className={styles.slideshowSlider}
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className={styles.slide}
              key={index}
              // style={{ backgroundColor }}
              // css={{height: 100}}
            > 
              {index === 0 && sortPartnerList.slice(0, 8).map((partner) => (
                <span css={{maxWidth: 64, [mq[2]]: {maxWidth: 90}}} key={sortPartnerList.indexOf(partner)}>
                  <img css={{width: "100%"}} src={partner} />
                </span>
              ))}
              {index === 1 && sortPartnerList.slice(0, 8).map((partner) => (
                <span css={{maxWidth: 64, [mq[2]]: {maxWidth: 90}}} key={sortPartnerList.indexOf(partner)}>
                  <img css={{width: "100%"}} src={partner} />
                </span>
              ))}
              {index === 2 && sortPartnerList.slice(0, 8).map((partner) => (
                <span css={{maxWidth: 64, [mq[2]]: {maxWidth: 90}}} key={sortPartnerList.indexOf(partner)}>
                  <img css={{width: "100%"}} src={partner} />
                </span>
              ))}
              
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.slideshowDots} css={{marginTop: 40}}>
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={styles.slideshowDot}
              style={{backgroundColor: index === idx ? "#636363" : ""}}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </Section>
  );
}
