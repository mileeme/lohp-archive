/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import Typography from "../Typography";
import Icon from "../Icon/IconTest";

export default function Button(props) {
  const { icon, size, label, variant, margin } = props;
  const { button, spacing, borderRadius } = theme;

  const ButtonStyle = styled.button`
    display: flex;
    gap: 12px;
    align-items: center;
    height: ${size === "md" ? "48px" : "36px"};
    justify-content: center;
    // width: 100%;
    margin-left: ${(margin === "negativeLeft" &&
      size == "md" &&
      `-${spacing[400]}`) ||
    (margin === "negativeLeft" && size === "sm" && `-${spacing[200]}`) ||
    "0"};
    margin-right: ${(margin === "negativeRight" &&
      size == "md" &&
      `-${spacing[400]}`) ||
    (margin === "negativeRight" && size === "sm" && `-${spacing[200]}`) ||
    "0"};
    border-radius: ${borderRadius[50]};
    border: 1px solid
      ${(variant === "primary" && button.border.primary) ||
      (variant === "primaryInverse" && button.border.primaryInverse) ||
      (variant === "secondary" && button.border.secondary) ||
      (variant === "secondaryInverse" && button.border.secondaryInverse) ||
      (variant === "ghostPrimary" && button.border.ghostPrimary) ||
      (variant === "ghostPrimaryInverse" &&
        button.border.ghostPrimaryInverse) ||
      (variant === "ghostNeutral" && button.border.ghostNeutral) ||
      (variant === "ghostNeutralInverse" && button.border.ghostNeutralInverse)};
    background-color: ${(variant === "primary" && button.background.primary) ||
    (variant === "primaryInverse" && button.background.primaryInverse) ||
    (variant === "secondary" && button.background.secondary) ||
    (variant === "secondaryInverse" && button.background.secondaryInverse) ||
    (variant === "ghostPrimary" && button.background.ghostPrimary) ||
    (variant === "ghostPrimaryInverse" &&
      button.background.ghostPrimaryInverse) ||
    (variant === "ghostNeutral" && button.background.ghostNeutral) ||
    (variant === "ghostNeutralInverse" &&
      button.background.ghostNeutralInverse)};
    color: ${(variant === "primary" && button.label.primary) ||
    (variant === "primaryInverse" && button.label.primaryInverse) ||
    (variant === "secondary" && button.label.secondary) ||
    (variant === "secondaryInverse" && button.label.secondaryInverse) ||
    (variant === "ghostPrimary" && button.label.ghostPrimary) ||
    (variant === "ghostPrimaryInverse" && button.label.ghostPrimaryInverse) ||
    (variant === "ghostNeutral" && button.label.ghostNeutral) ||
    (variant === "ghostNeutralInverse" && button.label.ghostNeutralInverse)};
    &:hover {
      text-decoration: ${(variant === "primary" && "none") ||
      (variant === "primaryInverse" && "none") ||
      (variant === "secondary" && "none") ||
      (variant === "secondaryInverse" && "none") ||
      (variant === "ghostPrimary" && "underline") ||
      (variant === "ghostPrimaryInverse" && "underline") ||
      (variant === "ghostNeutral" && "underline") ||
      (variant === "ghostNeutralInverse" && "underline")};
      border: 1px solid
        ${(variant === "primary" && button.border.hover.primary) ||
        (variant === "primaryInverse" && button.border.hover.primaryInverse) ||
        (variant === "secondary" && button.border.hover.secondary) ||
        (variant === "secondaryInverse" &&
          button.border.hover.secondaryInverse) ||
        (variant === "ghostPrimary" && button.border.hover.ghostPrimary) ||
        (variant === "ghostPrimaryInverse" &&
          button.border.hover.ghostPrimaryInverse) ||
        (variant === "ghostNeutral" && button.border.hover.ghostNeutral) ||
        (variant === "ghostNeutralInverse" &&
          button.border.hover.ghostNeutralInverse)};
      background-color: ${(variant === "primary" &&
        button.background.hover.primary) ||
      (variant === "primaryInverse" &&
        button.background.hover.primaryInverse) ||
      (variant === "secondary" && button.background.hover.secondary) ||
      (variant === "secondaryInverse" &&
        button.background.hover.secondaryInverse) ||
      (variant === "ghostPrimary" && button.background.hover.ghostPrimary) ||
      (variant === "ghostPrimaryInverse" &&
        button.background.hover.ghostPrimaryInverse) ||
      (variant === "ghostNeutral" && button.background.hover.ghostNeutral) ||
      (variant === "ghostNeutralInverse" &&
        button.background.hover.ghostNeutralInverse)};
      color: ${(variant === "primary" && button.label.hover.primary) ||
      (variant === "primaryInverse" && button.label.hover.primaryInverse) ||
      (variant === "secondary" && button.label.hover.secondary) ||
      (variant === "secondaryInverse" && button.label.hover.secondaryInverse) ||
      (variant === "ghostPrimary" && button.label.hover.ghostPrimary) ||
      (variant === "ghostPrimaryInverse" &&
        button.label.hover.ghostPrimaryInverse) ||
      (variant === "ghostNeutral" && button.label.hover.ghostNeutral) ||
      (variant === "ghostNeutralInverse" &&
        button.label.hover.ghostNeutralInverse)};
    }
    &:focus {
      border: 1px solid
        ${(variant === "primary" && button.border.focus.primary) ||
        (variant === "primaryInverse" && button.border.focus.primaryInverse) ||
        (variant === "secondary" && button.border.focus.secondary) ||
        (variant === "secondaryInverse" &&
          button.border.focus.secondaryInverse) ||
        (variant === "ghostPrimary" && button.border.focus.ghostPrimary) ||
        (variant === "ghostPrimaryInverse" &&
          button.border.focus.ghostPrimaryInverse) ||
        (variant === "ghostNeutral" && button.border.focus.ghostNeutral) ||
        (variant === "ghostNeutralInverse" &&
          button.border.focus.ghostNeutralInverse)};
      background-color: ${(variant === "primary" &&
        button.background.focus.primary) ||
      (variant === "primaryInverse" &&
        button.background.focus.primaryInverse) ||
      (variant === "secondary" && button.background.focus.secondary) ||
      (variant === "secondaryInverse" &&
        button.background.focus.secondaryInverse) ||
      (variant === "ghostPrimary" && button.background.focus.ghostPrimary) ||
      (variant === "ghostPrimaryInverse" &&
        button.background.focus.ghostPrimaryInverse) ||
      (variant === "ghostNeutral" && button.background.focus.ghostNeutral) ||
      (variant === "ghostNeutralInverse" &&
        button.background.focus.ghostNeutralInverse)};
      color: ${(variant === "primary" && button.label.focus.primary) ||
      (variant === "primaryInverse" && button.label.focus.primaryInverse) ||
      (variant === "secondary" && button.label.focus.secondary) ||
      (variant === "secondaryInverse" && button.label.focus.secondaryInverse) ||
      (variant === "ghostPrimary" && button.label.focus.ghostPrimary) ||
      (variant === "ghostPrimaryInverse" &&
        button.label.focus.ghostPrimaryInverse) ||
      (variant === "ghostNeutral" && button.label.focus.ghostNeutral) ||
      (variant === "ghostNeutralInverse" &&
        button.label.focus.ghostNeutralInverse)};
    }
    &:active {
      border: 1px solid
        ${(variant === "primary" && button.border.active.primary) ||
        (variant === "primaryInverse" && button.border.active.primaryInverse) ||
        (variant === "secondary" && button.border.active.secondary) ||
        (variant === "secondaryInverse" &&
          button.border.active.secondaryInverse) ||
        (variant === "ghostPrimary" && button.border.active.ghostPrimary) ||
        (variant === "ghostPrimaryInverse" &&
          button.border.active.ghostPrimaryInverse) ||
        (variant === "ghostNeutral" && button.border.active.ghostNeutral) ||
        (variant === "ghostNeutralInverse" &&
          button.border.active.ghostNeutralInverse)};
      background-color: ${(variant === "primary" &&
        button.background.active.primary) ||
      (variant === "primaryInverse" &&
        button.background.active.primaryInverse) ||
      (variant === "secondary" && button.background.active.secondary) ||
      (variant === "secondaryInverse" &&
        button.background.active.secondaryInverse) ||
      (variant === "ghostPrimary" && button.background.active.ghostPrimary) ||
      (variant === "ghostPrimaryInverse" &&
        button.background.active.ghostPrimaryInverse) ||
      (variant === "ghostNeutral" && button.background.active.ghostNeutral) ||
      (variant === "ghostNeutralInverse" &&
        button.background.active.ghostNeutralInverse)};
      color: ${(variant === "primary" && button.label.active.primary) ||
      (variant === "primaryInverse" && button.label.active.primaryInverse) ||
      (variant === "secondary" && button.label.active.secondary) ||
      (variant === "secondaryInverse" &&
        button.label.active.secondaryInverse) ||
      (variant === "ghostPrimary" && button.label.active.ghostPrimary) ||
      (variant === "ghostPrimaryInverse" &&
        button.label.active.ghostPrimaryInverse) ||
      (variant === "ghostNeutral" && button.label.active.ghostNeutral) ||
      (variant === "ghostNeutralInverse" &&
        button.label.active.ghostNeutralInverse)};
    }
    > span {
      line-height: 1em;
      white-space: nowrap;
    }
    ${mq[1]} {
      padding: ${(label && size === "md" && `0 ${spacing[400]}`) ||
      (label && size === "sm" && `0 ${spacing[200]}`)};
      // width: auto;
    }
  `;

  return (
    <ButtonStyle {...props} size={size} variant={variant} style={{...props}}>
      {label && size === "md" && <Typography label={label} h3Bold />}
      {label && size === "sm" && <Typography label={label} h4Bold />}
      {icon && <Icon size={size} icon={icon} button={variant} />}
    </ButtonStyle>
  );
}
