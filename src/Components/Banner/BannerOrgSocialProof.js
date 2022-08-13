/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import { mq } from "../../Styles/tokens";
import {
  meta,
  ibm,
  googleFull,
  salesforce,
  intuit,
  hubspot,
} from "../Icon/Avatar";

export default function BannerOrgSocialProof(props) {
  const Logos = styled.ul`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, minmax(118px, 1fr));
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    ${mq[2]} {
      grid-template-columns: repeat(6, minmax(118px, 1fr));
      margin: 0 120px;
    }
  `;
  const Logo = styled.li`
    display: flex;
    max-width: 90px;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    img {
      width: 100%;
    }
    ${mq[3]} {
      max-width: 120px;
    }
  `;

  return (
    <Section aria-labelledby='sectionHeading'>
      {/* Heading */}
      <div css={{ textAlign: "center" }}>
        <h2 id='sectionHeading'>
          <Typography
            label='Companies build, run, and grow with Coursera'
            d2Semibold
          />
        </h2>
        {/* <h3>
          <Typography
            label='The companies you use, use Coursera to grow their employees'
            h2
          />
        </h3> */}
      </div>

      {/* Brand logos */}
      <Logos>
        <Logo>
          <img src={meta} />
        </Logo>
        <Logo>
          <img src={ibm} />
        </Logo>
        <Logo>
          <img src={googleFull} />
        </Logo>
        <Logo>
          <img src={salesforce} />
        </Logo>
        <Logo>
          <img src={intuit} />
        </Logo>
        <Logo>
          <img src={hubspot} />
        </Logo>
      </Logos>
    </Section>
  );
}
