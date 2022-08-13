/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import bannerPersonSitting from "../../Assets/bannerPersonSitting.png";
import Cs from "../../Assets/Cs.png";
import Cs_v2 from "../../Assets/Cs_v2.png";
import GuidedSearch from "../Search/GuidedSearch";
import SearchInPage from "../Search/SearchInPage";

export default function BannerGuidedSearch(props) {
  
  const BannerContainer = styled.div({
    position: "relative",
    overflow: "hidden",
    display: "grid",
    alignItems: "center",
    height: 400,
    backgroundImage: `linear-gradient(to right, rgba(61,72,95,1) 100%, rgba(8,22,52,1) 0%, rgba(255,255,255,0) 0%), url(${bannerPersonSitting})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "275%",
    [mq[1]]: {
      backgroundImage: `linear-gradient(to right, rgba(61,72,95,0.95) 0%, rgba(8,22,52,0.95) 100%, rgba(255,255,255,0) 100%), url(${bannerPersonSitting})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "100% 24%",
      backgroundSize: "cover",
    },
    [mq[2]]: {
      backgroundImage: `linear-gradient(to right, rgba(61,72,95,1) 40%, rgba(8,22,52,0.6) 56%, rgba(255,255,255,0) 100%), url(${bannerPersonSitting})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "100% 24%",
      backgroundSize: "cover",
    },
  });

  const ContentWrapper = styled.div({
    display: "grid",
    padding: "0 16px",
    gap: 32,
    [mq[1]]: {
      margin: "0 auto",
      width: 600,
    },
    [mq[2]]: {
      padding: "0 48px",
      width: 1024,
    },
    [mq[3]]: {
      padding: "0 48px",
      width: 1440,
    },
  })


  return (
    <Section aria-labelledby='sectionHeading' css={{ padding: 0 }}>
      <BannerContainer>
        <img css={{position: "absolute", right: 0, top: 0, transform: "translate3d(80%, -20%, 1px) scale(100%) rotate(-0.4turn)", [mq[1]]: {transform: "translate3d(48%, -20%, 10px) scale(90%) rotate(-.2turn)"}, [mq[2]]: {transform: "translate3d(-4%, -24%, 30px) scale(100%)"}, transition: "transform 0.8s ease"}} src={Cs_v2} />
        <ContentWrapper>
           <div>
            <h1 id='sectionHeading' css={{ [mq[2]]: {maxWidth: 600, paddingBottom: 0, marginBottom: 8}}}>
                <Typography
                  css={{ color: "white" }}
                  label='Develop in-demand skills to start, switch or advance your career'
                  d2Semibold
                />
              </h1>
              <Typography css={{color: theme.palette.white}} label="Choose from over 10,000 Courses, Professional Certificates, and Degrees." body1 />
           </div>
            <div css={{maxWidth: 700}}><SearchInPage /></div>
        </ContentWrapper>
      </BannerContainer>
    </Section>
  );
}
