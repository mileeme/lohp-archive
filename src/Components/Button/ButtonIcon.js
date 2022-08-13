/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";

const IconStyle = styled.span`
  display: flex;
  align-items: center;
`

const ButtonStyle = styled.button`
  display: flex;
  gap: 12px;
  height: 64px;
  align-items: center;
  border: 1px solid ${theme.palette.interactive.neutral.default};
  border-radius: 8px;
  padding: 0 16px;
  background-color: transparent;
  color: ${theme.palette.white};
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  &:hover {
    border: 1px solid ${theme.palette.white};
    color: ${theme.palette.white};
  };
  &:active {
    border: 1px solid ${theme.palette.white};
    color: ${theme.palette.white};
  };
`;


export default function ButtonArrow(props) {
  const { icon, label } = props;

  return (
    <ButtonStyle {...props} style={{ ...props }}>
      <IconStyle>{icon}</IconStyle>
      <Typography label={label} h4Bold css={{whiteSpace: "nowrap"}}/>
    </ButtonStyle>
  );
}
