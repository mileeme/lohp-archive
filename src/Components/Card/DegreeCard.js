/** @jsxImportSource @emotion/react */

// This is a career academy card
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import ButtonArrow from "../Button/ButtonArrow";
import Icon from "../Icon/Icon";
import { theme } from "../../Styles/theme";
import {mq} from "../../Styles/tokens";

const CardStyle = styled.div({
  // width: "324px",
  // height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  // overflow: hidden,
  cursor: "pointer",
  gap: "16px",
  // backgroundColor: theme.palette.white, 
  // transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1)",
  // "&:hover": {
  //   boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
  //   transform: "scale3d(1.01, 1.01, 1.01)",
  // },
  // [mq[1]]: {
  //   width: 284,
  // },
  // [mq[2]]: {
  //   width: 320,
  // },
  // [mq[3]]: {
  //   width: 336,
  // }
})

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  gap: 8px;
`

const OrgLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.palette.interactive.neutral.default};
`
const OrgAvatar = styled.div`
  border-radius: 100px;
  // border: 1px solid ${theme.palette.interactive.neutral.light};
  margin-right: 8px;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  overflow: hidden;
`

export default function DegreeCard(props) {
  const { item } = props;

  return (
    <CardStyle>
      {/* card image */}
      <div css={{
        position: "relative",
        overflow: "hidden",
        height: 144,
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
        {/* Organization information */}
        <OrgLabel>
          <OrgAvatar aria-hidden="true">
            <img css={{ width:"100%", borderRadius: 100}}
                src={item.org_img}
                alt={item.title}
                aria-hidden='true'
              />
          </OrgAvatar>
          <div css={{display: "flex", flexFlow: "column"}}>
            <Typography label={item.org} body1Bold />
            <Typography label={`${item.total_courses}`} css={{color: theme.palette.interactive.neutral.default}} body1 />
          </div>
        </OrgLabel>

      </CardContent>
    </CardStyle>
  );
}
