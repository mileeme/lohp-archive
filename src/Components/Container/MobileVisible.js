/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { breakpoints, mq } from "../../Styles/tokens";

const MobileHide = styled.div({
  display: "none",
  opacity: 0,
  transform: "all 0.3s ease",
  [mq[1]]: {
    display: "block",
    opacity: 1,
  },
});
const MobileShow = styled.div({
  display: "block",
  opacity: 1,
  transform: "all 0.3s ease",
  [mq[1]]: {
    display: "none",
    opacity: 0,
  },
});

export default function MobileVisible(props) {
  return (
    <>
      {props.hide && <MobileHide {...props}>{props.children}</MobileHide>}
      {props.show && <MobileShow {...props}>{props.children}</MobileShow>}
    </>
  );
}
