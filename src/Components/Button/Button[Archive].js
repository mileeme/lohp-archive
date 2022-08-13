/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";

const ButtonStyle = styled.button`
  display: flex; 
  gap: 12px;
  align-items: center;
  border: 1px solid ${props =>
    props.primary && theme.palette.interactive.primary.default ||
    props.secondary && theme.palette.interactive.primary.default ||
    props.ghost && "transparent" ||
    props.ghostNeutral && "transparent"
  };
  border-radius: ${theme.borderRadius[50]};
  background-color: ${(props) =>
    props.primary && theme.palette.interactive.primary.default || 
    props.secondary && "transparent" || 
    props.ghost && "transparent" ||
    props.ghostNeutral && "transparent"
  };
  color: ${(props) =>
    props.primary && theme.palette.white ||
    props.secondary && theme.palette.interactive.primary.default ||
    props.ghost && theme.palette.interactive.primary.default ||
    props.ghostNeutral && theme.palette.black
  };
  height: ${(props) => (props.size === "md" ? "48px" : "36px")};
  padding: ${(props) =>
    props.size === "md"
      ? `0 ${theme.spacing[400]}`
      : `0 ${theme.spacing[200]}`};
  margin-left: ${props => 
    (props.margin === "negativeLeft" && props.size == "md") && `-${theme.spacing[400]}` ||
    (props.margin === "negativeLeft" && props.size === "sm" && `-${theme.spacing[200]}`) || 
    "0"};
  margin-right: ${props => 
    (props.margin === "negativeRight" && props.size == "md") && `-${theme.spacing[400]}` ||
    (props.margin === "negativeRight" && props.size === "sm" && `-${theme.spacing[200]}`) || 
    "0"};
  &:hover {
    border: 1px solid ${props => 
      props.primary && theme.palette.interactive.hover ||
      props.secondary && theme.palette.interactive.hover ||
      props.ghost && "transparent" ||     
      props.ghostNeutral && "transparent"
    };
    background-color: ${(props) =>
      props.primary && theme.palette.interactive.hover || 
      props.secondary && "transparent" || 
      props.ghost && theme.palette.interactive.hoverLight ||
      props.ghostNeutral && theme.palette.interactive.hoverLight
    };
    color: ${(props) =>
      props.primary && theme.palette.white ||
      props.secondary && theme.palette.interactive.hover ||
      props.ghost && theme.palette.interactive.hover ||
      props.ghostNeutral && theme.palette.interactive.hover
    };
  };
  &:active {
    border: 1px solid ${props => 
      props.primary && theme.palette.interactive.active ||
      props.secondary && theme.palette.interactive.active ||
      props.ghost && "transparent" ||
      props.ghostNeutral && "transparent"
    };
    background-color: ${(props) =>
      props.primary && theme.palette.interactive.active ||
      props.secondary && theme.palette.interactive.activeLight ||
      props.ghost && theme.palette.interactive.activeLight};
    color: ${(props) =>
      props.primary && theme.palette.white ||
      props.secondary && theme.palette.interactive.active ||
      props.ghost && theme.palette.interactive.active ||
      props.ghostNeutral && theme.palette.interactive.active
    };
  };
  &:focus {
    border: 1px solid ${props => 
      props.primary && theme.palette.interactive.hover ||
      props.secondary && theme.palette.interactive.hover ||
      props.ghost && "transparent"};
    background-color: ${(props) =>
      props.primary && theme.palette.interactive.hover ||
      props.secondary && theme.palette.interactive.hoverLight ||
      props.ghost && theme.palette.interactive.hoverLight ||
      props.ghostNeutral && theme.palette.interactive.hoverLight
    };
    color: ${(props) =>
      props.primary && theme.palette.white ||
      props.secondary && theme.palette.interactive.hover ||
      props.ghost && theme.palette.interactive.hover ||
      props.ghostNeutral && theme.palette.interactive.hover 
    };
  };
  > span {
    line-height: 1em;
  }
`;


export default function Button(props) {
  const { size, label } = props;

  return (
    <ButtonStyle {...props} style={{ ...props }}>
      {size === "md" && <Typography label={label} h3Bold css={{whiteSpace: "nowrap"}}/>}
      {size === "sm" && <Typography label={label} h4Bold css={{whiteSpace: "nowrap"}}/>}
      {props.icon && props.icon}
    </ButtonStyle>
  );
}
