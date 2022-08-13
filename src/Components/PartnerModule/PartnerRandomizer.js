/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import { mq } from "../../Styles/tokens";
import {
  googleFull,
  meta,
  salesforce,
  hubspot,
  stanford,
  deepLearningAiFull,
  michiganFull,
  ibm

} from "../Icon/PartnerLogo";
import { theme } from "../../Styles/theme";

export default function PartnerRandomizer(props) {
  const partnerList = [
    michiganFull,
    meta,
    googleFull,
    salesforce,
    stanford,
    hubspot,
    ibm,
    deepLearningAiFull,
  ];
  const showPartners = 8;

  // Randomizes order of partners
  // let sortPartnerList = partnerList.sort(randomize);
  // function randomize(a, b) {
  //   return 0.5 - Math.random();
  // }

  const Logos = styled.ul`
    position: relative;
    display: grid;
    row-gap: 24px;
    grid-template-columns: repeat(4, minmax(80px, 1fr));
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    ${mq[2]} {
      grid-template-columns: repeat(8, minmax(118px, 1fr));
    }
  `;
  const Logo = styled.li`
    display: flex;
    max-width: 70px;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    img {
      width: 100%;
    }
    &:last-child {
      max-width: 80%;
    }
    ${mq[2]} {
      max-width: 90px;
    }
  `;

  return (
    <Section
      aria-labelledby='sectionHeading'
      css={{ display: "grid", gap: 8, padding: "40px 0 24px 0"}}
      bgColor={theme.palette.white}
    >
      {/* Heading */}
      <div css={{ textAlign: "center" }}>
        <h2 id='sectionHeading'>
          <Typography
            label='We collaborate with leading companies and universities'
            h1Semibold
          />
        </h2>
      </div>

      {/* Brand logos */}
      <Logos>
        {/* {partnerList.slice(0, 8).map((partner) => (
          <Logo key={partnerList.indexOf(partner)}>
            <img src={partner} />
          </Logo>
        ))} */}
        {partnerList.map((partner) => (
          <Logo key={partnerList.indexOf(partner)}>
            <img src={partner} />
          </Logo>
        ))}
      </Logos>
    </Section>
  );
}
