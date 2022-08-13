/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Button from "../Button/Button";
import { theme } from "../../Styles/theme";
import Icon from "../Icon/Icon";

const SearchInput = styled.input({
  height: "100%",
  width: "100%",
  border: 0,
  padding: "0 8px",
  fontSize: 14,
  backgroundColor: "white",
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  cursor: "text",
  "&:focus": { outline: 0 },
  "&:focus:not(:focus-visible)": { outline: 0 },
})

const SearchWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  height: 48,
  padding: "4px",
  borderRadius: 8,
  border: "1px solid transparent",
  borderRadius: 8,
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1)",
  "&:hover": {
    // border: "1px solid transparent",
    // boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
    // transform: "scale3d(1.01, 1.01, 1.01)",
  },
  "&:focus": {
    outline: 0
  },  
  "&:focus:not(:focus-visible)": {
    outline: 0
  },
  "&:focus-within": {
    boxShadow: `0 0 0 1px ${theme.palette.white}`,
    transition: "all 250ms ease-in",
  }  
})

export default function Email(props) {

  return (
    <SearchWrapper>
      <SearchInput type='text' placeholder='Email address'/>
      {/* <Button variant="primary" label="Submit now" size="md" />   */}
      {/* <Icon variant="primary" icon="search" /> */}
  </SearchWrapper>
  );
}