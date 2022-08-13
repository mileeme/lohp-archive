/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import bannerPersonSmiling from "../../Assets/bannerPersonSmiling.png";
import Cs from "../../Assets/Cs.png";
import EmailField from "../Input/EmailField";
import { google, facebook } from "../Icon/PartnerLogo";
import Button from "../Button/Button";

export default function BannerEmailCapture(props) {
  const { palette } = theme;

  const BannerContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    minHeight: 470,
    backgroundImage: `url(${Cs}),linear-gradient(to right, rgba(77,40,17,1) 45%, rgba(77,40,17,0) 100%), url(${bannerPersonSmiling})`,
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    [mq[1]]: {
      backgroundImage: `url(${Cs}),linear-gradient(to right, rgba(77,40,17,1) 45%, rgba(77,40,17,0) 100%), url(${bannerPersonSmiling})`,
      backgroundPosition: "top right",
    },
  });

  const Heading = styled.div({
    // margin: "0 16px",
    [mq[1]]: {
      width: 640,
    },
  });

  return (
    <Section aria-labelledby='sectionHeading' css={{ padding: 0 }}>
      <BannerContainer>
        <Container css={{ margin: 0}} md>
          <div css={{maxWidth: 600}}>
            <h1 id='sectionHeading'>
              <Typography
                css={{ color: "white" }}
                label='Build your career and gain new skills'
                d2Semibold
              />
            </h1>
          </div>
          <EmailField />

          {/* Disclosure statement */}
          <div css={{marginTop: 16, color: palette.white}}>
            <Typography
              label='I accept Coursera&#39;
              s '
              body2
            />
            <a href="#"><Typography
              label='Terms of Use'
              body2
            /></a>
            <Typography
              label=' and '
              body2
            />
            <a href="#"><Typography
              label='Privacy Policy'
              body2
            /></a>
            <Typography
              label='.'
              body2
            />
          </div>

          {/* Alternative sign-in */}
          <div
            css={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 32,
            }}
          >
            <Typography label='Or sign up using:' css={{ color: palette.white }} body1Bold />
            <button css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                border: `1px solid ${palette.interactive.neutral.light}`,
                borderRadius: 4,
                overflow: "hidden",
                background: palette.white,
              }}>
              <img css={{height: 18, width: 18}} src={google} alt="" />
            </button>    
            <button css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                border: `1px solid ${palette.interactive.neutral.light}`,
                borderRadius: 4,
                overflow: "hidden",
                background: palette.white,
              }}>
              <img css={{height: 18, width: 18}} src={facebook} alt="" />
            </button>
          </div>
        </Container>
      </BannerContainer>
    </Section>
  );
}
