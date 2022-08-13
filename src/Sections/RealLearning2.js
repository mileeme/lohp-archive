/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import {theme} from "../Styles/theme";
import { mq } from "../Styles/tokens";
import Typography from "../Components/Typography";
import Container from "../Components/Container/Container";
import Section from "../Components/Container/Section";
import ButtonIcon from "../Components/Button/ButtonIcon";
import ButtonArrow from "../Components/Button/ButtonArrow";
import videoThumbnail2 from "../Assets/videoThumbnail2.png";
import {google, ibm} from "../Components/Icon/PartnerLogo";
import Icon from "../Components/Icon/Icon";
import cBlueBlackBG from "../Assets/cBlueBlackBG.png";

export default function RealLearning2(props) {
  // Avatar images
  const googleLogo = <div css={{height: 40, width: 40, borderRadius: 4, backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center"}}><img css={{width: "80%"}} src={google} alt="google log" /></div>
  
  const ibmLogo = <div css={{height: 40, width: 40, borderRadius: 4, backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center"}}><img css={{width: "80%"}} src={ibm} alt="google log" /></div>

  // Button labels
  const dataScientist = <span css={{display: "flex", flexFlow: "column", alignItems: "start"}}><Typography label="Data scientist" body1Bold/><Typography label="+8% job demand" body1/> </span>  
  const uxDesigner = <span css={{display: "flex", flexFlow: "column", alignItems: "start"}}><Typography label="UX designer" body1Bold/><Typography label="+8% job demand" body1/> </span>  
  const digitalMarketer = <span css={{display: "flex", flexFlow: "column", alignItems: "start"}}><Typography label="Digital marketer" body1Bold/><Typography label="+8% job demand" body1/> </span>

  const ResponsiveContainer = styled.div({
    display: "grid", 
    gridAutoFlow: "row", 
    columnGap: 24, 
    gridAutoColumns: "minMax(0, 1fr)",
    [mq[1]]: {
      gridAutoFlow: "column", 
    }
  })

  return (
    <Section aria-label='Real learning, real outcomes' bgColor={theme.palette.black} css={{background: `url(${cBlueBlackBG})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover",}}>
      <Container css={{display: "grid", gap: 40}} lg>
        {/* Title */}
        <div css={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <h2 css={{margin: 0}}>
            <Typography label='Real learning, real outcomes' css={{color: theme.palette.white}} h1Semibold />
          </h2>
        </div>

        <ResponsiveContainer>
          {/* Left side */}
          <div css={{display: "grid", gap: 32, color: "white"}}>
            {/* Video player */}
            <img src={videoThumbnail2} css={{borderRadius: 16, width: "100%"}}/>
          </div>

          {/* Right side */}
          <div css={{display: "flex", flexFlow: "column", color: "white", gap: 40, justifyContent: "center"}}>
            {/* User quote */}
            <div css={{display: "flex", flexDirection: "column", gap: 16, paddingBottom: 40, borderBottom: `1px solid ${theme.palette.interactive.neutral.default}`}}>
              <Typography label="I never knew how powerful Coursera certificates were until I realized that Google actually worked with them to create these job-ready learning programs." d2Semibold />
              <div css={{display: "flex", gap: 8}}><Typography label="Cory Cordova" body2 />
              <Typography label="Google, Data Scientist" body2Bold /></div>
            </div>

            {/* Certificate buttons */}
            <div css={{display: "grid", gap: 16}}>
              <h3 css={{margin: 0}}>
                <Typography label="Professional certificates for Data Science" h2Semibold />
              </h3>
              <ButtonIcon icon={googleLogo} label="Google data analytics professional certificate" secondary/>
              <ButtonIcon icon={ibmLogo} label="Google data analytics professional certificate" secondary/>
            </div>
          </div>
        </ResponsiveContainer>
      </Container>
    </Section>
  );
}
