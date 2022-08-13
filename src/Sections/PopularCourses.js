/** @jsxImportSource @emotion/react */

import {theme} from "../Styles/theme";
import Typography from "../Components/Typography";
import Container from "../Components/Container/Container";
import Section from "../Components/Container/Section";
import Tabs from "../Components/Tabs/Tabs";

export default function PopularCourses(props) {

  return (
    <Section aria-label='Most popular courses' bgColor={theme.palette.background.grayLight}>
      <Container lg >
        <div css={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <h2 css={{margin: 0}}>
            <Typography label='Most popular courses' d2Semibold />
          </h2>
        </div>
        
        {/* Mini discovery experience */}
        <Tabs />
        
      </Container>
    </Section>
  );
}
