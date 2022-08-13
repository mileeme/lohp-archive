/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";
import Icon from "../Icon/Icon";

const { buttonColor } = theme;

export default function ButtonAnimate(props) {
  const { variant, size, label, icon } = props;

//   const IconStyle = styled.span`
//   display: flex;
//   align-items: center;
//   transition: transform 0.3s ease;
// `
  // const ButtonStyle = styled.button`
  //   display: flex; 
  //   gap: 12px;
  //   align-items: center;
  //   justify-content: center;
  //   height: ${(props) => (props.size === "md" ? "48px" : "36px")};
  //   padding: ${(props) =>
  //     props.size === "md"
  //       ? `0 ${theme.spacing[400]}`
  //       : `0 ${theme.spacing[200]}`};
  //   margin-left: ${props => 
  //     (props.margin === "negativeLeft" && props.size == "md") && `-${theme.spacing[400]}` ||
  //     (props.margin === "negativeLeft" && props.size === "sm" && `-${theme.spacing[200]}`) || 
  //     "0"};
  //   margin-right: ${props => 
  //     (props.margin === "negativeRight" && props.size == "md") && `-${theme.spacing[400]}` ||
  //     (props.margin === "negativeRight" && props.size === "sm" && `-${theme.spacing[200]}`) || 
  //     "0"};
  //   border-radius: ${theme.borderRadius[50]};
  //   border: 1px solid ${(props) =>
  //     props.variant === "primary" && buttonColor.border.primary ||
  //     props.variant === "primaryInverse" && buttonColor.border.primaryInverse ||
  //     props.variant === "secondary" && buttonColor.border.secondary ||
  //     props.variant === "secondaryInverse" && buttonColor.border.secondaryInverse ||
  //     props.variant === "ghostPrimary" && buttonColor.border.ghostPrimary ||
  //     props.variant === "ghostPrimaryInverse" && buttonColor.border.ghostPrimaryInverse ||
  //     props.variant === "ghostNeutral" && buttonColor.border.ghostNeutral ||
  //     props.variant === "ghostNeutralInverse" && buttonColor.border.ghostNeutralInverse
  //   };
  //   background-color: ${(props) =>
  //     props.variant === "primary" && buttonColor.background.primary || 
  //     props.variant === "primaryInverse" && buttonColor.background.primaryInverse ||
  //     props.variant === "secondary" && buttonColor.background.secondary || 
  //     props.variant === "secondaryInverse" && buttonColor.background.secondaryInverse ||
  //     props.variant === "ghostPrimary" && buttonColor.background.ghostPrimary ||
  //     props.variant === "ghostPrimaryInverse" && buttonColor.background.ghostPrimaryInverse ||
  //     props.variant === "ghostNeutral" && buttonColor.background.ghostNeutral ||
  //     props.variant === "ghostNeutralInverse" && buttonColor.background.ghostNeutralInverse
  //   };
  //   color: ${(props) =>
  //     props.variant === "primary" && buttonColor.label.primary ||
  //     props.variant === "primaryInverse" && buttonColor.label.primaryInverse ||
  //     props.variant === "secondary" && buttonColor.label.secondary ||
  //     props.variant === "secondaryInverse" && buttonColor.label.secondaryInverse ||
  //     props.variant === "ghostPrimary" && buttonColor.label.ghostPrimary ||
  //     props.variant === "ghostPrimaryInverse" && buttonColor.label.ghostPrimaryInverse ||
  //     props.variant === "ghostNeutral" && buttonColor.label.ghostNeutral ||
  //     props.variant === "ghostNeutralInverse" && buttonColor.label.ghostNeutralInverse
  //   };
  //   &:hover {
  //     border: 1px solid ${props => 
  //       props.variant === "primary" && buttonColor.border.hover.primary ||
  //       props.variant === "primaryInverse" && buttonColor.border.hover.primaryInverse ||
  //       props.variant === "secondary" && buttonColor.border.hover.secondary ||
  //       props.variant === "secondaryInverse" && buttonColor.border.hover.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.border.hover.ghostPrimary ||    
  //       props.variant === "ghostPrimaryInverse" && buttonColor.border.hover.ghostPrimaryInverse || 
  //       props.variant === "ghostNeutral" && buttonColor.border.hover.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.border.hover.ghostNeutralInverse
  //     };
  //     background-color: ${(props) =>
  //       props.variant === "primary" && buttonColor.background.hover.primary ||
  //       props.variant === "primaryInverse" && buttonColor.background.hover.primaryInverse || 
  //       props.variant === "secondary" && buttonColor.background.hover.secondary || 
  //       props.variant === "secondaryInverse" && buttonColor.background.hover.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.background.hover.ghostPrimary ||
  //       props.variant === "ghostPrimaryInverse" && buttonColor.background.hover.ghostPrimaryInverse ||
  //       props.variant === "ghostNeutral" && buttonColor.background.hover.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.background.hover.ghostNeutralInverse
  //     };
  //     color: ${(props) =>
  //       props.variant === "primary" && buttonColor.label.hover.primary ||
  //       props.variant === "primaryInverse" && buttonColor.label.hover.primaryInverse ||
  //       props.variant === "secondary" && buttonColor.label.hover.secondary ||
  //       props.variant === "secondaryInverse" && buttonColor.label.hover.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.label.hover.ghostPrimary ||
  //       props.variant === "ghostPrimaryInverse" && buttonColor.label.hover.ghostPrimaryInverse ||
  //       props.variant === "ghostNeutral" && buttonColor.label.hover.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.label.hover.ghostNeutralInverse
  //     };
  //     text-decoration: ${props => 
  //       props.variant === "ghostPrimary" && "underline" ||
  //       props.variant === "ghostPrimaryInverse" && "underline" ||
  //       props.variant === "ghostNeutral" && "underline" ||
  //       props.variant === "ghostNeutralInverse" && "underline"    
  //     };
  //   };
  //   &:hover ${IconStyle} {
  //     transform: translate3d(5px, 0, 0);
  //   };
  //   &:active {
  //     border: 1px solid ${props => 
  //       props.variant === "primary" && buttonColor.border.active.primary ||
  //       props.variant === "primaryInverse" && buttonColor.border.active.primaryInverse ||
  //       props.variant === "secondary" && buttonColor.border.active.secondary ||
  //       props.variant === "secondaryLight" && buttonColor.border.active.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.border.active.ghostPrimary ||
  //       props.variant === "ghostPrimaryInverse" && buttonColor.border.active.ghostPrimaryInverse ||
  //       props.variant === "ghostNeutral" && buttonColor.border.active.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.border.active.ghostNeutralInverse
  //     };
  //     background-color: ${(props) =>
  //       props.variant === "primary" && buttonColor.background.active.primary ||
  //       props.variant === "primaryInverse" && buttonColor.background.active.primaryInverse ||
  //       props.variant === "secondary" && buttonColor.background.active.secondary ||
  //       props.variant === "secondaryInverse" && buttonColor.background.active.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.background.active.ghostPrimary ||
  //       props.variant === "ghostPrimaryInverse" && buttonColor.background.active.ghostPrimaryInverse ||
  //       props.variant === "ghostNeutral" && buttonColor.background.active.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.background.active.ghostNeutralInverse
  //     };
  //     color: ${(props) =>
  //       props.variant === "primary" && buttonColor.label.active.primary ||
  //       props.variant === "primaryInverse" && buttonColor.label.active.primaryInverse ||
  //       props.variant === "secondary" && buttonColor.label.active.secondary ||
  //       props.variant === "secondaryInverse" && buttonColor.label.active.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.label.active.ghostPrimary ||
  //       props.variant === "ghostPrimaryInverse" && buttonColor.label.active.ghostPrimaryInverse ||
  //       props.variant === "ghostNeutral" && buttonColor.label.active.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.label.active.ghostNeutralInverse
  //     };
  //     text-decoration: ${props => 
  //       props.variant === "ghostPrimary" && "underline" ||
  //       props.variant === "ghostPrimaryInverse" && "underline" ||
  //       props.variant === "ghostNeutral" && "underline" ||
  //       props.variant === "ghostNeutralInverse" && "underline"    
  //     };
  //   };
  //   &:focus {
  //     border: 1px solid ${props => 
  //       props.variant === "primary" && buttonColor.border.focus.primary ||
  //       props.variant === "primaryInverse" && buttonColor.border.focus.primaryInverse ||
  //       props.variant === "secondary" && buttonColor.border.focus.secondary ||
  //       props.variant === "secondaryInverse" && buttonColor.border.focus.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.border.focus.ghostPrimary ||
  //       props.variant === "ghostPrimaryInverse" && buttonColor.border.focus.ghostPrimaryInverse ||
  //       props.variant === "ghostNeutral" && buttonColor.border.focus.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.border.focus.ghostNeutralInverse
  //     };
  //     background-color: ${(props) =>
  //       props.variant === "primary" && buttonColor.background.focus.primary ||
  //       props.variant === "primaryInverse" && buttonColor.background.focus.primaryInverse ||
  //       props.variant === "secondary" && buttonColor.background.focus.secondary ||
  //       props.variant === "secondaryInverse" && buttonColor.background.focus.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.background.focus.ghostPrimary ||
  //       props.variant === "ghostPrimaryInverse" && buttonColor.background.focus.ghostPrimaryInverse ||
  //       props.variant === "ghostNeutral" && buttonColor.background.focus.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.background.focus.ghostNeutralInverse
  //     };
  //     color: ${(props) =>
  //       props.variant === "primary" && buttonColor.label.focus.primary ||
  //       props.variant === "primaryInverse" && buttonColor.label.focus.primaryInverse ||
  //       props.variant === "secondary" && buttonColor.label.focus.secondary ||
  //       props.variant === "secondaryInverse" && buttonColor.label.focus.secondaryInverse ||
  //       props.variant === "ghostPrimary" && buttonColor.label.focus.ghostPrimary ||
  //       props.variant === "ghostPrimaryInverse" && buttonColor.label.focus.ghostPrimaryInverse ||
  //       props.variant === "ghostNeutral" && buttonColor.label.focus.ghostNeutral ||
  //       props.variant === "ghostNeutralInverse" && buttonColor.label.focus.ghostNeutralInverse
  //     };
  //     text-decoration: ${props => 
  //       props.variant === "ghostPrimary" && "underline" ||
  //       props.variant === "ghostPrimaryInverse" && "underline" ||
  //       props.variant === "ghostNeutral" && "underline" ||
  //       props.variant === "ghostNeutralInverse" && "underline"    
  //     };
  //   };
  //   > span {
  //     line-height: 1em;
  //   };
  // `;
  return (
    <>
      {size === "md" && <Typography label={label} h3Bold css={{whiteSpace: "nowrap"}}/>}
      {size === "sm" && <Typography label={label} h4Bold css={{whiteSpace: "nowrap"}}/>}
      <Icon variant={variant} size={size} icon={icon}/>
    </>
  );
}
