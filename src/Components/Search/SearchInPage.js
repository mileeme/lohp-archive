/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Button from "../Button/Button";
import Icon from "../Icon/IconTest";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";

const { palette } = theme;

const EmailInput = styled.input({
  height: 72,
  border: 0,
  padding: "0 24px",
  backgroundColor: "white",
  borderRadius: 100,
  cursor: "text",
  "&:focus": { outline: 0 },
  "&:focus:not(:focus-visible)": { outline: 0 },
  "&::placeholder": { color: theme.palette.interactive.neutral.default },
});

const FormWrapper = styled.div({
  background: palette.white,
  display: "grid",
  gridAutoColumns: "1fr auto",
  gridAutoFlow: "column",
  gap: 16,
  alignItems: "center",
  padding: "0 8px 0 0",
  borderRadius: 100,
  // border: `1px solid ${theme.palette.interactive.neutral.light}`,
  boxShadow: "1px 1px 6px 0px rgb(0 0 0 / 10%)",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1)",
  "&:hover": {
    // border: "1px solid transparent",
    boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
    // transform: "scale3d(1.01, 1.01, 1.01)",
  },
  "&:focus": {
    outline: 0,
  },
  "&:focus:not(:focus-visible)": {
    outline: 0,
  },
  "&:focus-within": {
    boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
    transition: "all 250ms ease-in",
  },
});

export default function SearchInPage(props) {

  function handleEmailSubmit(e) {
    e.preventDefault();
    console.log("email submitted");
  }
  
  return (
    <div>
      <FormWrapper>
      <EmailInput type='text' placeholder='What do you want to learn?'/>
      <Button
        variant='primary'
        size='sm'
        onClick={handleEmailSubmit}
        icon='search'
        // label={showButtonLabel ? "Search" : ""}
        css={{ border: "none", height: 56, width: 56, borderRadius: 50, transition: "width 0.15s ease" }}
      />
    </FormWrapper>
    </div>
  );
}