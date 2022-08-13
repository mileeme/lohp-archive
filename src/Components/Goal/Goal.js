/** @jsxImportSource @emotion/react */

import Typography from "../Typography";
import Container from "../Container/Container";
import Section from "../Container/Section";
import {theme} from "../../Styles/theme";
import GoalTabs from "./GoalTabs";


export default function Goal(props) {

  return (
    <Section aria-label='Goals' bgColor={theme.palette.white}>
      <Container lg> 
        <h2 css={{marginBottom: 8}}><Typography label="Learning built around your goals" h1Semibold /></h2>
        <GoalTabs />
      </Container>
    </Section>

  );
}
