/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import { mq } from "../../Styles/tokens";
import bannerNoCTA from "../../Assets/bannerNoCTA.png"

export default function BannerNoCTABrown(props) {
  const BackgroundImage = styled.div({
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    minHeight: 470,
    // background: "rgba(255, 246, 221, 1.0)",
    backgroundImage: `linear-gradient(to right, rgba(77,40,17,1) 45%, rgba(77,40,17,0) 100%), url(${bannerNoCTA})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "top center",
    backgroundSize: "cover",
  })

  const Heading = styled.div({
    [mq[1]]: {
      width: 640,
      margin: "0 auto",
      textAlign: "center"
    }
  })

  return (
    <Section aria-labelledby='sectionHeading' css={{position: "relative", padding: "0 0"}} bgColor="gray">
      <BackgroundImage>
        <Heading css={{width: "540px", margin: "0 auto", textAlign: "center"}}>
          <h1 id="sectionHeading">
            <Typography css={{color: "white"}} label="Build your career and train for that job today" d1Semibold />
          </h1>
          <h2 id='sectionHeading'>
            <Typography css={{color: "white"}} label="Choose from over x,xxx+ courses, certificates, degrees and more. First, what are you here to do? (540px width / H2)" h2 />
          </h2>
        </Heading>
      </BackgroundImage>
    </Section>
  );
}
