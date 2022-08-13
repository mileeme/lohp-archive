/** @jsxImportSource @emotion/react */

// Banner using the button icon
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import ButtonArrow from "../Button/ButtonArrow";
import { mq } from "../../Styles/tokens";
import Icon from "../Icon/Icon";
import Section from "../Container/Section";
import MobileVisible from "../Container/MobileVisible";

export default function Banner2(props) {
  const {
    mainBanner,
    bgColor,
    heading,
    subHeading,
    buttonLabel,
    imageSrc,
  } = props;

  const ResponsiveContainer = styled.div({
    display: "grid", 
    gridAutoFlow: "row", 
    columnGap: 40, 
    gridAutoColumns: "minMax(0, 1fr)",
    [mq[1]]: {
      gridAutoFlow: "column", 
    }
  })
  
  return (
    <Section aria-labelledby='sectionHeading'>
      <ResponsiveContainer>
        <MobileVisible show>
          <img css={{width: "100%"}} src={imageSrc} alt='' />
        </MobileVisible>
        <div css={{display: "flex", flexFlow: "column", justifyContent: "center"}}>
          <h2 id='sectionHeading'>
            {mainBanner ? (
              <Typography label={`${heading}`} d2Semibold />
            ) : (
              <Typography label={`${heading}`} h2Semibold />
            )}
          </h2>
          <p><Typography label={`${subHeading} (H2)`} h2 /></p>

          <ButtonArrow label={buttonLabel} icon={<Icon type="arrowNext" button="ghostNeutral"/>}/>

        </div>
        {/* <div><img src={imageSrc} alt='' /></div> */}
        <MobileVisible hide>
          <img css={{width: "100%"}} src={imageSrc} alt='' />
        </MobileVisible>

      </ResponsiveContainer>

    </Section>
  );
}
