/** @jsxImportSource @emotion/react */

import {useState} from "react";
import { degrees } from "../Data/dataCourses";
import {theme} from "../Styles/theme";
import Typography from "../Components/Typography";
import Container from "../Components/Container/Container";
import Section from "../Components/Container/Section";
import DegreeCardList from "../Components/Card/DegreeCardList";
import ButtonArrow from "../Components/Button/ButtonArrow";
import Icon from "../Components/Icon/Icon";

export default function CollegeDegree(props) {
  const [selection, setSelection] = useState(degrees);

  return (
    <Section aria-label='College degree can boost earnings' bgColor={theme.palette.background.grayLight}>
      <Container lg >
        <div css={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <h2 css={{margin: 0}}>
            <Typography label='A college degree can boost earnings' d2Semibold />
          </h2>
          <ButtonArrow label="View degrees" icon={<Icon type="arrowNext" button="ghostNeutral"/>}/>
        </div>
        
        <DegreeCardList selection={selection} />
      </Container>
    </Section>
  );
}
