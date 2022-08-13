/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Button from "../Button/Button";
import { mq } from "../../Styles/tokens";

export default function Banner(props) {
  const {
    mainBanner,
    bgColor,
    bannerAlign,
    heading,
    subHeading,
    button1Type,
    button2Type,
    button1Label,
    button2Label,
    imageSrc,
  } = props;

  const ContentBlock = styled.div({
    display: "none", 
    maxWidth: 730, 
    [mq[2]]: {
      display: props.bannerAlign === "left" ? "inline-block" : "none",
    },
  });

  const ContentBlock2 = styled.div({
    display: props.bannerAlign === "left" ? "block" : "none", 
    maxWidth: 730, 
    [mq[2]]: {
      display: props.bannerAlign === "left" ? "none" : "inline-block",
    }
  });
  
  return (
    <section
      aria-labelledby='sectionHeading'
      css={{
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        [mq[2]]: {
          flexDirection: "row",
          gap: 40,
        }
      }}
    >

      <ContentBlock>
        <h2 id='sectionHeading'>
          {mainBanner ? (
            <Typography label={`${heading} (D1Semibold)`} d1Semibold />
          ) : (
            <Typography label={`${heading} (H1Semibold)`} h1Semibold />
          )}
        </h2>
        <p><Typography label={`${subHeading} (H2)`} h2 /></p>

        <div css={{ display: "flex", flexFlow: "column", gap: 16, [mq[2]]: {flexFlow: "row"} }}>
          {button1Type && <Button size='md' label={button1Label} primary />}
          {button2Type && <Button size='md' label={button2Label} />}
        </div>
      </ContentBlock>

      <div><img css={{ maxWidth: 400 }} src={imageSrc} alt='' /></div>

      <ContentBlock2>
        <h2 id='sectionHeading'>
          {mainBanner ? (
            <Typography label={`${heading} (D1Semibold)`} d1Semibold />
          ) : (
            <Typography label={`${heading} (H1Semibold)`} h1Semibold />
          )}
        </h2>
        <p><Typography label={`${subHeading} (H2)`} h2 /></p>
        <div css={{ display: "flex", gap: 16 }}>
          {button1Type && <Button size='md' label={button1Label} primary />}
          {button2Type && <Button size='md' label={button2Label} />}
        </div>
      </ContentBlock2>

    </section>
  );
}
