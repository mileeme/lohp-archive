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

export default function RealLearning(props) {
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
    <Section aria-label='Real learning, real outcomes' bgColor={theme.palette.black}>
      <Container css={{display: "grid", gap: 40}} lg>
        <div css={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h2 css={{margin: 0}}>
            <Typography label='Real learning, real outcomes' css={{color: theme.palette.white}} h1Semibold />
          </h2>
        </div>

        <ResponsiveContainer>
          {/* Left side */}
          <div css={{display: "grid", gap: 32, color: "white"}}>
            {/* Video player */}
            <img src={videoThumbnail2} css={{borderRadius: 16, width: "100%"}}/>
            
            {/* User quote */}
            <div css={{display: "flex", flexDirection: "column", gap: 16}}>
              <Typography label="I never knew how powerful Coursera certificates were until I realized that Google actually worked with them to create these job-ready learning programs." h2Semibold />
              <div css={{display: "flex", gap: 8}}><Typography label="Cory Cordova" body2 />
              <Typography label="Google, Data Scientist" body2Bold /></div>
            </div>
          </div>
          {/* Right side */}
          <div css={{display: "flex", flexFlow: "column", color: "white", gap: 80}}>
            
            {/* Top content */}
            <div>
              <h3>
                <Typography label="Professional certificates for Data Science" h2Semibold />
              </h3>
              {/* Certificate buttons */}
              <div css={{display: "grid", gap: 16}}>
                <ButtonIcon icon={googleLogo} label="Google data analytics professional certificate" secondary/>
                <ButtonIcon icon={ibmLogo} label="Google data analytics professional certificate" secondary/>
              </div>
            </div>

            {/* Bottom content */}
            <div>
              <Typography label="Certificates for popular roles" h3Semibold/>
              <div css={{display: "grid"}}>
                <ButtonArrow css={{display: "flex", justifyContent: "space-between", color: "white", "&:hover": {color: "white"}, padding: "0 16px", height: 80, borderBottom: `1px solid ${theme.palette.interactive.neutral.default}`}} label={dataScientist} icon={<Icon type="arrowNext" button="primary"/>}/>
                <ButtonArrow css={{display: "flex", justifyContent: "space-between", color: "white", "&:hover": {color: "white"}, padding: "0 16px", height: 80, borderBottom: `1px solid ${theme.palette.interactive.neutral.default}`}} label={uxDesigner} icon={<Icon type="arrowNext" button="primary"/>}/>
                <ButtonArrow css={{display: "flex", justifyContent: "space-between", color: "white", "&:hover": {color: "white"}, padding: "0 16px", height: 80, borderBottom: `1px solid ${theme.palette.interactive.neutral.default}`}} label={digitalMarketer} icon={<Icon type="arrowNext" button="primary"/>}/>              <ButtonArrow css={{display: "flex", justifyContent: "space-between", color: "white", "&:hover": {color: "white"}, padding: "0 16px", height: 80}} label="View other roles" icon={<Icon type="arrowNext" button="primary"/>}/>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
        <div css={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: 24}}>
          <p css={{color: theme.palette.interactive.neutral.light}}><Typography label="*From job inflation report of USA, some real report here pls, 2022" body2 /></p>
        </div>
      </Container>
    </Section>
  );
}
