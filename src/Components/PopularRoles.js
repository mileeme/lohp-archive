/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import {theme} from "../Styles/theme";
import { mq } from "../Styles/tokens";
import Typography from "../Components/Typography";
import Container from "../Components/Container/Container";
import Section from "../Components/Container/Section";
import ButtonArrow from "../Components/Button/ButtonArrow";
import Icon from "../Components/Icon/Icon";

export default function PopularRoles(props) {

  const ResponsiveContainer = styled.div({
    display: "grid", 
    gridAutoFlow: "row", 
    columnGap: 24, 
    gridAutoColumns: "minMax(0, 1fr)",
    [mq[1]]: {
      gridAutoFlow: "column", 
    }
  })

  // Button labels
  const dataScientist = <span css={{display: "flex", flexFlow: "column", alignItems: "start"}}><Typography label="Data scientist" body1Bold/><Typography label="+8% job demand" body1/> </span>  
  const uxDesigner = <span css={{display: "flex", flexFlow: "column", alignItems: "start"}}><Typography label="UX designer" body1Bold/><Typography label="+8% job demand" body1/> </span>  
  const digitalMarketer = <span css={{display: "flex", flexFlow: "column", alignItems: "start"}}><Typography label="Digital marketer" body1Bold/><Typography label="+8% job demand" body1/> </span>

  return (
    <Section aria-label='Certificates for popular roles'>
      <Container css={{display: "grid", gap: 40}} lg>
        <div css={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <h2 css={{margin: 0}}>
            <Typography label='Certificates for popular roles' h2Semibold />
          </h2>
        </div>

        <ResponsiveContainer>
          {/* Left side */}
          <div css={{display: "grid", gap: 32, color: "black"}}>
            <div css={{display: "grid"}}>
                <ButtonArrow css={{display: "flex", justifyContent: "space-between", color: "black", "&:hover": {color: "black"}, padding: "0 16px", height: 80, borderBottom: `1px solid ${theme.palette.interactive.neutral.light}`, borderTop: `1px solid ${theme.palette.interactive.neutral.light}`}} label={dataScientist} icon={<Icon type="arrowNext" button="ghostNeutral"/>}/>
                
                <ButtonArrow css={{display: "flex", justifyContent: "space-between", color: "black", "&:hover": {color: "black"}, padding: "0 16px", height: 80, borderBottom: `1px solid ${theme.palette.interactive.neutral.light}`}} label={uxDesigner} icon={<Icon type="arrowNext" button="ghostNeutral"/>}/>
              </div>
          </div>
          {/* Right side */}
          <div css={{display: "flex", flexFlow: "column", color: "black", gap: 80}}>
            
            <div css={{display: "grid"}}>
              <ButtonArrow css={{display: "flex", justifyContent: "space-between", color: "black", "&:hover": {color: "black"}, padding: "0 16px", height: 80, borderBottom: `1px solid ${theme.palette.interactive.neutral.light}`, borderTop: `1px solid ${theme.palette.interactive.neutral.light}`}} label={digitalMarketer} icon={<Icon type="arrowNext" button="ghostNeutral"/>}/>              
              
              <ButtonArrow css={{display: "flex", justifyContent: "space-between", color: "black", "&:hover": {color: "black"}, padding: "0 16px", height: 80, borderBottom: `1px solid ${theme.palette.interactive.neutral.light}`}} label="View other roles" icon={<Icon type="arrowNext" button="ghostNeutral"/>}/>
            </div>
          </div>
        </ResponsiveContainer>
        <div css={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: 24}}>
          <p css={{color: theme.palette.interactive.neutral}}><Typography label="*From job inflation report of USA, some real report here pls, 2022" body2 /></p>
        </div>
      </Container>
    </Section>
  );
}
