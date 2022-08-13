/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
// import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { theme } from "../../Styles/theme";

// const SearchInput = styled.div({
//   height: "100%",
//   width: "100%",
//   border: "none",
//   padding: "0 8px",
//   fontSize: 14,
//   backgroundColor: "transparent",
//   "&:focus": { outline: 0 },
// })

const SearchWrapper = styled.div({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 36,
  minWidth: 280,
  padding: "4px 4px 4px 12px",
  border: "1px solid #ccc",
  borderRadius: 50,
  color: theme.palette.interactive.neutral.default,
  transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1)",
  "&:hover": {
    border: "1px solid transparent",
    boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
    transform: "scale3d(1.01, 1.01, 1.01)",
  },
  "&:focus": {
    outline: 0
  },
  "&:focus-within": {
    boxShadow: `0 0 0 2px ${theme.palette.interactive.focus}`,
    transition: "box-shadow 250ms ease-in",
  }
})

export default function SearchPlaceholder(props) {

  return (
    <SearchWrapper>
      <span>What do you want to learn?</span>
      <div css={{display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 50, width: 36, height: 36, backgroundColor: theme.palette.interactive.primary.default}}><Icon type="search" button="primary" /></div>
  </SearchWrapper>
  );
}
