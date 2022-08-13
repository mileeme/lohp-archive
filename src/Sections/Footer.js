/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { theme } from "../Styles/theme";
import { mq } from "../Styles/tokens";
import Section from "../Components/Container/Section";
import Typography from "../Components/Typography";
import footerAppButtons from "../Assets/footerAppButtons.png";
import socialButtons from "../Assets/socialButtons.png";
import Container from "../Components/Container/Container";

export default function Footer(props) {
  const FooterLinks = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    gap: 8px;
  `

  const ResponsiveContainer = styled.div({
    display: "grid", 
    gridAutoFlow: "row", 
    margin: "40px 0",
    [mq[1]]: {
      gridAutoFlow: "column",
      justifyContent: "space-between",
    }
  })

  return (
    <footer role='contentinfo' css={{color: theme.palette.black, borderTop: `1px solid ${theme.palette.interactive.neutral.light}`}}>
      <Container lg>
        <ResponsiveContainer>
          <div>
            <Typography label="Coursera" h2Semibold/>
            <FooterLinks>
              <li>About</li>
              <li>What we offer</li>
              <li>Leadership</li>
              <li>Career</li>
              <li>Catalog</li>
              <li>Coursera Plus</li>
              <li>Professional</li>
              <li>Certificates</li>
              <li>MasterTrack®</li>
              <li>Degrees</li>
              <li>For Enterprise</li>
              <li>For government</li>
              <li>For campus</li>
              <li>Become a partner</li>
              <li>Coronavirus response</li>
              <li></li>
            </FooterLinks>
          </div>
          <div>
            <Typography label="Community" h2Semibold/>
            <FooterLinks>
              <li>Learner</li>
              <li>Partners</li>
              <li>Developers</li>
              <li>Beta testers</li>
              <li>Translators</li>
              <li>Blog</li>
              <li>Teaching center</li>
            </FooterLinks>
          </div>
          <div>
            <Typography label="More" h2Semibold/>
            <FooterLinks>
              <li>Press</li>
              <li>Investors</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Help</li>
              <li>Accessibility</li>
              <li>Contact</li>
              <li>Articles</li>
              <li>Directory</li>
              <li>Affiliates</li>
            </FooterLinks>
          </div>
          <div>
            <img src={footerAppButtons} />
          </div>
        </ResponsiveContainer>
        <div css={{display: "grid", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${theme.palette.interactive.neutral.light}`, padding: "24px 0 0 0", [mq[1]]: {display: "flex", padding: 0}}} flex>
          <Typography label="© 2022 Coursera Inc. All rights reserved." body2 />
          <img src={socialButtons} css={{margin: "24px 0"}}/>
        </div>

      </Container>
    </footer>
  );
}
