/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";

const CardStyle = styled.div`
  width: 324px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  &:hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
`

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  row-gap: 8px,

`

export default function CourseCard(props) {
  const { product, data } = props;

  return (
    <CardStyle>
      {/* card image */}
      <img
        css={{
          position: "relative",
          height: 130,
          width: "100%",
          backgroundColor: "lightblue",
        }}
        src={data.course_img}
        alt={data.title}
        aria-hidden='true'
      />

      {/* card content */}
      <CardContent>
        <img
          css={{
            backgroundColor: "white",
            border: "1px solid #efefef",
            borderRadius: 4,
            width: 72,
            height: 72,
            marginTop: -40,
            zIndex: 2,
          }}
          src={data.org_img}
          alt={data.title}
          aria-hidden='true'
        />
        <div>
          <h4
            css={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
          >
            <a
              css={{ textDecoration: "none", color: "inherit" }}
              href={data.url}
            >
              <Typography label={data.title} h2Semibold />
            </a>
          </h4>
          <Typography label={data.org} body1 />
        </div>

        <Typography label={data.topic} css={{ color: "green" }} body1 />
        <Typography label={data.product} css={{ marginTop: "auto" }} body1 />
      </CardContent>
    </CardStyle>
  );
}
