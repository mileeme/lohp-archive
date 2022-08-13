/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Button from "../Button/Button";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";

const { palette } = theme;

const Input = styled.input({
  height: 56,
  border: 0,
  padding: "0 24px",
  fontSize: 14,
  backgroundColor: "transparent",
  borderRadius: 100,
  cursor: "text",
  "&:focus": { outline: 0 },
  "&:focus:not(:focus-visible)": { outline: 0 },
  "&::placeholder": { color: theme.palette.interactive.neutral.default },
});

const FormWrapper = styled.form({
  background: palette.background.white,
  display: "grid",
  gridAutoColumns: "1fr auto",
  gridAutoFlow: "column",
  gap: 16,
  alignItems: "center",
  padding: "0 8px 0 0",
  border: `1px solid ${palette.interactive.neutral.light}`,
  borderRadius: 100,
  boxShadow: "1px 1px 6px 0px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1)",
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
  [mq[1]]: {
    gap: 4,
  },
});

export default function SearchHeader(props) {
  function handleEmailSubmit(e) {
    e.preventDefault();
    console.log("email submitted");
  }

  return (
    <FormWrapper>
      <Input type='text' placeholder='What do you want to learn?' />
      <Button
        variant='primary'
        size='sm'
        onClick={handleEmailSubmit}
        icon='search'
        css={{ width: 40, height: 40, borderRadius: 50 }}
      />
    </FormWrapper>
  );
}
