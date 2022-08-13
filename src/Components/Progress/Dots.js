/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";

export default function Dots(props) {
  const {slides, activeIndex} = props;

  //  Dots
  const Dot = ({active}) => (
    <span css={{
      padding: 4,
      // marginRight: 16,
      cursor: "pointer",
      borderRadius: 50,
      background: active ? theme.palette.interactive.neutral.default : theme.palette.interactive.neutral.light,
    }} />
  ) 

  return (
    <div css={{
      position: "relative",
      bottom: 0,
      width: "100%",
      display: "flex",
      gap: 8,
      alignItems: "center",
      justifyContent: "center"
    }}>
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))}
    </div>
  );
}
