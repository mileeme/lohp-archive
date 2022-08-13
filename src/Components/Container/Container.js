/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { breakpoints, mq } from "../../Styles/tokens";

const ContainerXS = styled.div({
  // display: "grid",
  // justifyContent: "center",
  maxWidth: breakpoints.xs,
  padding: "0 16px",
  margin: "0 auto",
  [mq[1]]: {
    padding: "0 16px",
    maxWidth: breakpoints.xs,
  },
  [mq[2]]: {
    padding: "0 48px",
    maxWidth: breakpoints.xs,
  },
});

const ContainerSM = styled.div({
  // display: "grid",
  // justifyContent: "center",
  padding: "0 16px",
  margin: "0 auto",
  [mq[1]]: {
    padding: "0 16px",
    maxWidth: breakpoints.sm,
  },
  [mq[2]]: {
    padding: "0 48px",
    maxWidth: breakpoints.sm,
  },
});

const ContainerMD = styled.div({
  // display: "grid",
  // justifyContent: "center",
  padding: "0 16px",
  margin: "0 auto",
  [mq[2]]: {
    padding: "0 48px",
    maxWidth: breakpoints.md,
  },
});

const ContainerLG = styled.div({
  // display: "grid",
  // justifyContent: "center",
  padding: "0 16px",
  margin: "0 auto",
  [mq[2]]: {
    padding: "0 48px",
    maxWidth: breakpoints.lg,
  },
});

const ContainerXL = styled.div({
  // display: "grid",
  // justifyContent: "center",
  padding: "0 16px",
  margin: "0 auto",
  [mq[2]]: {
    padding: "0 48px",
    maxWidth: breakpoints.xl,
  },
});

const ContainerFlex = styled.div({
  padding: "0 16px",
  margin: "0 auto",
  [mq[2]]: {
    padding: "0 48px",
  },
});

export default function Container(props) {
  return (
    <>
      {props.flex && <ContainerFlex {...props}>{props.children}</ContainerFlex>}
      {props.xs && <ContainerXS {...props}>{props.children}</ContainerXS>}
      {props.sm && <ContainerSM {...props}>{props.children}</ContainerSM>}
      {props.md && <ContainerMD {...props}>{props.children}</ContainerMD>}
      {props.lg && <ContainerLG {...props}>{props.children}</ContainerLG>}
      {props.xl && <ContainerXL {...props}>{props.children}</ContainerXL>}
    </>
  );
}
