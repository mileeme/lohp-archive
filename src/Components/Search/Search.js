/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Button from "../Button/Button";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
// import ButtonArrow from "../Button/ButtonArrow";
// import Icon from "../Icon/Icon";

const { palette } = theme;

const EmailInput = styled.input({
  height: 36,
  width: 200,
  border: 0,
  padding: "0 8px",
  fontSize: 14,
  backgroundColor: "transparent",
  borderRadius: 4,
  cursor: "text",
  "&:focus": { outline: 0 },
  "&:focus:not(:focus-visible)": { outline: 0 },
  "&::placeholder": { color: theme.palette.interactive.neutral.default },
});

const FormContainer = styled.div({
  display: "block",
  [mq[1]]: {
    display: "flex",
  },
});

const FormWrapper = styled.form({
  // background: palette.background.grayLight,
  display: "grid",
  gridAutoFlow: "row",
  gap: 16,
  alignItems: "center",
  padding: "4px",
  borderRadius: 50,
  border: `1px solid ${theme.palette.interactive.neutral.light}`,
  overflow: "hidden",
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
    boxShadow: `0 0 0 2px ${theme.palette.white}`,
    transition: "all 250ms ease-in",
  },
  [mq[1]]: {
    display: "flex",
    flexDirection: "row",
    // gridAutoFlow: "column",
    // gridTemplateColumns: "1fr auto",
    gap: 4,
  },
});

export default function SearchTest(props) {
  function handleEmailSubmit(e) {
    e.preventDefault();
    console.log("email submitted");
  }

  return (
    <FormContainer>
      <FormWrapper>
        <EmailInput type='text' placeholder='What do you want to learn?' />
        <Button
          variant='primary'
          size='sm'
          onClick={handleEmailSubmit}
          icon='search'
          css={{ width: 36, borderRadius: 50 }}
        />
        {/* <Icon variant="primary" icon="search" /> */}
        {/* <ButtonArrow
        label='Learn more'
        icon={<Icon type='arrowNext' button='primary' />}
      /> */}
      </FormWrapper>
    </FormContainer>
  );
}
