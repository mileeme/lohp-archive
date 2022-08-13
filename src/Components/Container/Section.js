/** @jsxImportSource @emotion/react */

// This is career academy card list
import styled from "@emotion/styled";

export default function Section(props) {
  const Section = styled.section`
    background-color: ${props.bgColor};
    padding: 64px 0;
  `;

  return <Section {...props}>{props.children}</Section>;
}
