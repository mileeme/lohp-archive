/** @jsxImportSource @emotion/react */
import Typography from "../Typography";

export default function CertificateCard(props) {
  const { data } = props;

  return (
    <div
      className='card certificateCard'
      // css={{
      //   position: "relative",
      //   width: 268,
      //   height: "100%",
      //   display: "flex",
      //   flexDirection: "column",
      //   position: "relative",
      //   overflow: "hidden",
      //   borderRadius: 8,
      //   color: "white",
      //   cursor: "pointer",
      // }}
    >
      {/* card image */}
      <img
        css={{
          position: "relative",
          height: 160,
          width: "100%",
          backgroundColor: "lightblue",
        }}
        src={data.course_img}
        alt={data.title}
        aria-hidden='true'
      />

      {/* card content container */}
      <div
        css={{
          position: "relative",
          height: "100%",
          padding: 16,
          "&:before": {
            content: '""',
            position: "absolute",
            top: -40,
            right: 0,
            left: 0,
            bottom: -80,
            backgroundColor: "rgb(0, 37, 93)",
            transform: "skewy(-8deg)",
          },
        }}
      >
        {/* card content */}
        <div
          css={{
            position: "relative",
            height: "100%",
            // padding: 8,
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto",
            rowGap: 8,
          }}
        >
          <img
            css={{
              backgroundColor: "white",
              border: "1px solid #efefef",
              borderRadius: 4,
              width: 72,
              height: 72,
              marginTop: -90,
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
            {/* <p>{data.org}</p> */}
          </div>
          {/* <p css={{ color: "green" }}>
            <Typography label={data.topic} body1 />
          </p> */}
          {/* <p css={{ marginTop: "auto" }}>
            <Typography label={data.product} body1 />
          </p> */}
          <Typography label={data.topic} css={{ color: "green" }} body1 />
          <Typography label={data.product} css={{ marginTop: "auto" }} body1 />
        </div>
      </div>
    </div>
  );
}
