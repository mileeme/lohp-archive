/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";

const IconStyle = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  &:hover > svg {
    fill: ${theme.palette.interactive.hover};
  }
`

const ButtonStyle = styled.button`
  display: flex; 
  gap: 12px;
  height: 32px;
  align-items: center;
  border: none;
  padding-left: 0;
  background-color: transparent;
  color: ${theme.palette.black};
  &:hover {
    color: ${theme.palette.interactive.hover};
  }
  &:hover ${IconStyle} {
    transform: translate3d(5px, 0, 0);
  };
  &:active {
    color: ${theme.palette.interactive.active};
  };
`;

const IconAnimation = styled.span({
  transition: "transform 0.3s ease",
})

export default function ButtonArrow(props) {
  const { icon, label } = props;

  return (
    <ButtonStyle {...props} style={{ ...props }}>
      <Typography label={label} h4Bold css={{whiteSpace: "nowrap"}}/>
      <IconStyle>{icon}</IconStyle>
    </ButtonStyle>
  );
}
