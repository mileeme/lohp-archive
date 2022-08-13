/** @jsxImportSource @emotion/react */

import { useState } from "react";
import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";

const ChipLabel = styled.label`
cursor: pointer;
position: relative;
`;

const ChipSpan = styled.span`
display: flex;
flex-wrap: nowrap;
align-items: center;
height: 38px;
background-color: ${theme.palette.white};
border: 1px solid ${theme.palette.interactive.neutral.default};
border-radius: 50px;
padding: 0 12px;
color: ${theme.palette.black};
white-space: nowrap;
`;

const ChipInput = styled.input`
opacity: 0;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
cursor: pointer;
&:hover + ${ChipSpan} {
  background-color: ${theme.palette.interactive.hoverLight};
  border: 1px solid ${theme.palette.interactive.hover};
  outline: 1px solid ${theme.palette.interactive.hover};
  color: ${theme.palette.interactive.hover};
}
&:active + ${ChipSpan} {
  background-color: ${theme.palette.interactive.activeLight};
  border: 1px solid ${theme.palette.interactive.active};
  outline: 1px solid ${theme.palette.interactive.active};
  color: ${theme.palette.interactive.active};
}
&:checked + ${ChipSpan} {
  background: ${theme.palette.black};
  border: 1px solid ${theme.palette.black};
  outline: 1px solid ${"transparent"};
  color: ${theme.palette.white};
}
&:checked:hover + ${ChipSpan} {
  background: ${theme.palette.interactive.hover};
  border: 1px solid ${theme.palette.interactive.hover};
  outline: 1px solid ${theme.palette.interactive.hover};
  color: ${theme.palette.white};
}
&:checked:active + ${ChipSpan} {
  background: ${theme.palette.interactive.active};
  border: 1px solid ${theme.palette.interactive.active};
  outline: 1px solid ${theme.palette.interactive.active};
  color: ${theme.palette.white};
}
`;

export default function Chip(props) {
  // const [filter, setFilter] = useState(props.filter);
  // console.log(filter)
  return (
    <ChipLabel key={props.chipKey} htmlFor={props.htmlFor}>
      <ChipInput
        id={props.htmlFor}
        type={props.type}
        name={props.name}
        key={props.chipKey}
        value={props.value}
        // onClick={props.onClick}
        checked={props.checked}
        onChange={props.onChange}
      />
      <ChipSpan><Typography css={{fontWeight: 600}} label={props.content} h4 /></ChipSpan>
    </ChipLabel>
  );
}
