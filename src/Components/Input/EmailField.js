/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Button from "../Button/Button";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import Container from "../Container/Container";

const { palette } = theme;

const FormContainer = styled.div({
  display: "block",
  [mq[1]]: {
    display: "flex",
  },
});

const FormWrapper = styled.form({
  display: "grid",
  gridAutoFlow: "row",
  gap: 16,
  alignItems: "center",
  padding: "2px",
  // borderRadius: 24,
  overflow: "hidden",
  maxWidth: 800,
  transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1)",
  // "&:hover": {
  //   border: "1px solid transparent",
  //   boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
  //   transform: "scale3d(1.01, 1.01, 1.01)",
  // },
  "&:focus": {
    outline: 0,
  },
  "&:focus:not(:focus-visible)": {
    outline: 0,
  },
  "&:focus-within": {
    // boxShadow: `0 0 0 2px ${palette.interactive.primary.default}`,
    // transition: "all 250ms ease-in",
  },
  [mq[1]]: {
    // borderRadius: 50,
    background: "transparent",
    // display: "flex",
    // flexDirection: "row",
    gridAutoFlow: "column",
    gridTemplateColumns: "2fr 2fr 1fr",
    gap: 8,
  },
});

const EmailInput = styled.input({
  height: 48,
  border: 0,
  padding: "0 16px",
  fontSize: 14,
  backgroundColor: palette.white,
  borderRadius: 4,
  cursor: "text",
  "&:focus": { outline: 0 },
  "&:focus:not(:focus-visible)": { outline: 0 },
  [mq[1]]: {
    // minWidth: 280,
    // maxWidth: 300,
  },
});

export default function EmailField(props) {
  function handleEmailSubmit(e) {
    e.preventDefault();
    console.log("email submitted");
  }

  return (
      <FormWrapper>
        <EmailInput type='text' placeholder='Email address' />
        <EmailInput type='text' placeholder='Password' />
        <Button
          variant='primary'
          label='Get started for free'
          size='md'
          icon='arrowNext'
          onClick={handleEmailSubmit}
        />
        {/* <Icon variant="primary" icon="search" /> */}
        {/* <ButtonArrow
        label='Learn more'
        icon={<Icon type='arrowNext' button='primary' />}
      /> */}
      </FormWrapper>
  );
}
