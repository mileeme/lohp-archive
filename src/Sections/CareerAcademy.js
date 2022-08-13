/** @jsxImportSource @emotion/react */

import { careerAcademy } from "../Data/dataCourses";
import {theme} from "../Styles/theme";
import Typography from "../Components/Typography";
import Container from "../Components/Container/Container";
import Section from "../Components/Container/Section";
import Carousel3 from "../Components/Carousel/Carousel3";

export default function CareerAcademy(props) {

  return (
    <Section aria-label='Browse career academy' bgColor={theme.palette.background.grayLight}>
      <Container lg>
        <div css={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <h2 css={{margin: 0}}>
            <Typography label='Browse career academy' d2Semibold />
          </h2>
          <h3 css={{margin: "8px 0"}}>
            <Typography label='Ensure projects are managed and completed with maximum value in any organization (H2)' css={{color: theme.palette.interactive.neutral.default}} h2 />
          </h3>
        </div>
        
        {/* Career academy cards */}
        <Carousel3 selection={careerAcademy} />
      </Container>
    </Section>
  );
}
