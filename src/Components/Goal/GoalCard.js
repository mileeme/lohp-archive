/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import {theme} from "../../Styles/theme";
import Icon from "../Icon/IconTest";

const CardStyle = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 8px;
	overflow: hidden;
	background-color: ${theme.palette.white};
  cursor: pointer;
  box-shadow: 1px 1px 12px rgb(0 0 0 / 10%);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  &:hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
`

const IntroStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: "transparent",
  padding: 16px;
  justify-content: center;
  gap: 8px;
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 216px;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 16px;
  row-gap: 8px;
`

const ContentTop = styled.div`
  display: grid;
  gap: 8px;
`

const ContentBottom = styled.div`
  // display: flex;
  // flex-direction: column;
  // gap: 8px;
  margin-top: auto;
`
const OrgLabel = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.palette.interactive.neutral.default};
`
const OrgAvatar = styled.div`
  border-radius: 4px;
  border: 1px solid ${theme.palette.interactive.neutral.light};
  margin-right: 8px;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  overflow: hidden;
`
const metaData = styled.div`
  color: ${theme.palette.interactive.neutral.default};
`
const tagPlus = {
  height: 16,
  padding: "0 4px",
  display: "flex",
  alignItems: "center",
  borderRadius: 2,
  color: theme.palette.white,
  backgroundColor: theme.palette.interactive.primary.default,
}


export default function GoalCard(props) {
  const { data } = props;

  return (
    <>
    {data.intro && 
    <IntroStyle>
      <Typography label={data.title} h1Semibold />
      <Typography label={data.subTitle} body1 />
    </IntroStyle>
    }

    {!data.intro && 
    <CardStyle>
      {/* card image */}
      <ImageContainer>
        <img css={{ width: "100%"}}
          src={data.course_img}
          alt={data.title}
          aria-hidden='true'
        />
      </ImageContainer>

      {/* card content */}
      <CardContent>

        {/* Top content section */}
        <ContentTop css={{marginBottom: 16}}>
          {/* Organization information */}
          <OrgLabel>
            {/* <OrgAvatar aria-hidden="true">
              <img css={{ width: "100%"}}
                src={data.org_img}
                alt={data.title}
                aria-hidden='true'
              />
            </OrgAvatar> */}
            {data.org_img.length > 0 && data.org_img.map((el) => (    
              <OrgAvatar aria-hidden="true">
                <img css={{ width: "100%"}}
                  src={el}
                  aria-hidden='true'
                />
              </OrgAvatar>
            ))}

            <Typography css={{color: theme.palette.interactive.neutral.default}} label={data.org} body2 />

          </OrgLabel>

          {/* Card title */}
          <h3
            css={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              margin: 0,
            }}
          >
            <a
              css={{ textDecoration: "none", color: "inherit" }}
              href={data.url}
            >
              <Typography label={data.title} h3Semibold />
            </a>
          </h3>
          
          {/* Skillsets */}
          {data.skills && 
            <div css={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}>
            <Typography css={{color: theme.palette.interactive.neutral.default}} label={`Skills you'll gain: ${data.skills}`} body2 />
          </div>
          }
        </ContentTop>

        {/* Bottom content section */}
        <ContentBottom>
          {/* Product type */}
          {data.product === "plus" && 
            <div css={{display: "flex", alignItems: "center", gap: 4, marginBottom: 4}}>
              <Typography label="PLUS" style={tagPlus} body2 /><Typography label="Try free for 7 days with Coursera Plus" body2 />
            </div>
          }          
          {data.product === "degree" && 
            <div css={{display: "flex", alignItems: "center", gap: 4, marginBottom: 4}}>
              <Icon icon="degree" size="md" button="ghostPrimary" /><Typography css={{color: theme.palette.interactive.neutral.default}} label="Earn a degree" body2 />
            </div>
          }          
          {data.product === "credit" && 
            <div css={{display: "flex", alignItems: "center", gap: 4, marginBottom: 4}}>
              <Typography css={{lineHeight: 0}} label={<Icon icon="credit" button="ghostNeutral" />} body2 /><Typography label="Try free for 7 days with Coursera Plus" body2 />
            </div>
          }

          {/* Ratings */}
          {data.rating && 
            <div css={{display: "flex", alignItems: "center", gap: 4, marginBottom: 4}}>
              <Typography css={{lineHeight: 0}} label={data.rating.split(' ')[0]} h4Bold />
              <Icon icon="star" size="sm" button="ghostPrimary" />
              <Typography css={{lineHeight: 0, color: theme.palette.interactive.neutral.default}} label={data.rating.match(/^(\S+)\s(.*)/).slice(2)} body2 />
            </div>
          }

          {/* Category tags */}
          {data.categories && 
            <Typography css={{lineHeight: 0, color: theme.palette.interactive.neutral.default}} label={data.categories.join(' · ')} body2 />
          }
        </ContentBottom>
      </CardContent>
    </CardStyle>
    }
    </>
  );
}
