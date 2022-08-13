/** @jsxImportSource @emotion/react */

// This is a career academy card
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Button from "../Button/Button";
import ButtonArrow from "../Button/ButtonArrow";
import Icon from "../Icon/Icon";
import { theme } from "../../Styles/theme";
import {mq} from "../../Styles/tokens";

const CardStyle = styled.div({
  width: "324px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  // overflow: hidden,
  cursor: "pointer",
  gap: "16px",
  [mq[1]]: {
    width: 284,
  },
  [mq[2]]: {
    width: 320,
  },
  [mq[3]]: {
    width: 336,
  }
})

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  gap: 8px;
`

export default function CareerAcademyCard(props) {
  const { item } = props;

  return (
    <CardStyle>
      {/* card image */}
      <div css={{
        position: "relative",
        overflow: "hidden",
        height: 216,
        width: "100%",
        borderRadius: 8,
      }}>
        <img
          css={{objectFit: "cover", width: "100%"}}
          src={item.course_img}
          alt={item.title}
          aria-hidden='true'
        />
      </div>

      {/* card content */}
      <CardContent>
        <h4
          css={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            margin: 0,
          }}
        >
          <a css={{ textDecoration: "none", color: "inherit" }}
            href={item.url}>
            <Typography label={`${item.title} (H2Semibold)`} h2Semibold />
          </a>
        </h4>
        <Typography label={`${item.description} (body1)`} css={{color: theme.palette.interactive.neutral.default}} body1 />

        <div css={{marginTop: "auto"}}>
          {/* <Button margin='negativeLeft' size='sm' label="Learn more" button={theme.palette.interactive.neutral.default} ghostNeutral/> */}
          <ButtonArrow label="Learn more" icon={<Icon type="arrowNext" button="ghostNeutral"/>}/>
        </div>
      </CardContent>
    </CardStyle>
  );
}
