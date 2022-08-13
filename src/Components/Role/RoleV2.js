/** @jsxImportSource @emotion/react */

import {useState, useEffect, useRef} from "react";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Container from "../Container/Container";
import Section from "../Container/Section";
import {theme} from "../../Styles/theme";
import {mq} from "../../Styles/tokens";
import styles from "./RoleV2.module.scss";
import roleGrowth from "../../Assets/roleGrowth.png";
import coryProfile_role from "../../Assets/coryProfile_role.png";
import Icon from "../Icon/IconTest";
import Button from "../Button/Button";
import { metaSmall } from "../Icon/PartnerLogo";
import useOnScreen from "../Hooks/useOnScreen";
import useWindowWidth from "../Hooks/useWindowWidth";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function RoleV2(props) {
  const [selected, setSelected] = useState("IT support specialist");
  const [xPos, setXPos] = useState(0);
  const [gliderWidth, setGliderWidth] = useState(153);
  const tab1 = 153;
  const tab2 = 111;
  const tab3 = 106;
  const tab4 = 97;
  const tab5 = 149;
  const tab6 = 98;
  const tab7 = 126;
  const tab8 = 159;
  // const tab9 = 166;
  const tabGap = 24;


  // Check if bar is in viewport
  const barRef = useRef();
  const isInViewPort = useOnScreen(barRef);
  console.log('isInViewport', isInViewPort)

  // Set glider width and x position when selected
  useEffect(() => {
    if (selected === "Digital marketer") {
      setXPos(tab1 + tabGap);
      setGliderWidth(tab2);
    } else if (selected === "Data scientist") {
      setXPos(tab1 + tab2 + tabGap * 2);
      setGliderWidth(tab3);
    } else if (selected === "Bookkeeper") {
      setXPos(tab1 + tab2 + tab3 + tabGap * 3);
      setGliderWidth(tab4);
    } else if (selected === "Back-end developer") {
      setXPos(tab1 + tab2 + tab3 + tab4 + tabGap * 4);
      setGliderWidth(tab5);
    } else if (selected === "Data analyst") {
      setXPos(tab1 + tab2 + tab3 + tab4 + tab5 + tabGap * 5);
      setGliderWidth(tab6);
    } else if (selected === "Project manager") {
      setXPos(tab1 + tab2 + tab3 + tab4 + tab5 + tab6 + tabGap * 6);
      setGliderWidth(tab7);
    } else if (selected === "Cybersecurity analyst") {
      setXPos(tab1 + tab2 + tab3 + tab4 + tab5 + tab6 + tab7 + tabGap * 7);
      setGliderWidth(tab8);
    } else {
      setXPos(0);
      setGliderWidth(tab1);
    }
  }, [selected]);

  function handleTabClick(e) {
    setSelected(e.currentTarget.innerText);
  }

  // Chart data
  const data = {
    labels: ["2022", "2023", "2024", "2025", "2026"],
    datasets: [
      // {
      //   // label: "Average open positions",
      //   data: [14, 15, 16, 18, 19, 20, 21, 22],
      //   fill: true,
      //   pointBackgroundColor: "rgba(0,0,0,1)",
      //   pointBorderColor: "rgba(0,0,0,1)",
      //   backgroundColor: "rgba(0,0,0,0.8)",
      //   borderColor: "rgba(0,0,0,1)",  
      // },
      {
        // label: "IT support specialist open positions",
        data: [19, 21, 22, 23, 25, 29, 31, 32],
        fill: true,
        pointBackgroundColor: "rgba(0,85,208,0)",
        pointBorderColor: "rgba(0,85,208,1)",
        backgroundColor: "rgba(0,85,208,1)",
        borderColor: "rgba(0,85,208,1)",        
      },
    ]
  };

  // Chart options
  const options = {
    maintainAspectRation: false,
    responsive: true,
    animation: {
      delay: 800,
      duration: 600,
      easing: 'easeInOutBack',
    },

    transitions: {
      show: {
        animations: {
          x: {
            from: 0
          },
          y: {
            from: 0
          }
        }
      },
      hide: {
        animations: {
          x: {
            to: 0
          },
          y: {
            to: 0
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    },
    title: {
      display: false
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: 'rgba(0,85,208,0)',
        },
        ticks: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
          borderColor: 'rgba(0,85,208,0)',
        },
        ticks: {
          display: false,
        }
      }
    },
  }

  return (
    <Section aria-label='career role' bgColor={theme.palette.background.grayLight}>

      {/* Section heading + tab menu */}
      <Container css={{marginBottom: 8}} lg> 
         <div css={{maxWidth: 660, marginBottom: 32}}>
         <h2 css={{marginBottom: 8}}><Typography label="Get job-ready for an in-demand career" h1Semibold /></h2>
          <Typography css={{color: theme.palette.interactive.neutral.default}} label={`Gain a in-demand skillset, and receive a Professional Certificate to demonstrate your knowledge.  Not sure where to start? `} body1 />
          <span><a href="#" css={{color: theme.palette.interactive.neutral.default}}>Get career guidance with this short quiz</a>.</span>
         </div>
        {/* TABS */}
        <div
          className={styles.tabs}
          css={{ gap: tabGap, color: theme.palette.black, paddingBottom: 8, position: "relative" }}
        >
          {/* Glider */}
          <div
            className={styles.glider}
            css={{
              backgroundColor: theme.palette.interactive.primary.default,
              width: `${gliderWidth}px`,
              transform: selected && `translateX(${xPos}px)`,
            }}
          ></div>
          {/* Tabs border bottom */}
          <div className={styles.tabsBorderBottom} css={{borderBottom: `3px solid ${theme.palette.interactive.neutral.light}`}}></div>

          {/* Tab1 */}
          <div className={styles.tab} css={{color: selected === "Front-end developer" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Front-end developer" body1 />
          </div>
          {/* Tab2 */}
          <div className={styles.tab} css={{color: selected === "Digital marketer" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Digital marketer" body1 />
          </div>
          {/* Tab3 */}
          <div className={styles.tab} css={{color: selected === "Data scientist" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Data scientist" body1 />
          </div>
          {/* Tab4 */}
          <div className={styles.tab} css={{color: selected === "Bookkeeper" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Bookkeeper" body1 />
          </div>
          {/* Tab5 */}
          <div className={styles.tab} css={{color: selected === "Back-end developer" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Back-end developer" body1 />
          </div>
          {/* Tab6 */}
          <div className={styles.tab} css={{color: selected === "Data analyst" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Data analyst" body1 />
          </div>
          {/* Tab7 */}
          <div className={styles.tab} css={{color: selected === "Project manager" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Project manager" body1 />
          </div>
          {/* Tab8 */}
          <div className={styles.tab} css={{color: selected === "Cybersecurity analyst" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Cybersecurity analyst" body1 />
          </div>
          {/* Tab9 */}
          {/* <div className={styles.tab} css={{color: selected === "Social media marketer" && theme.palette.interactive.primary.default}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Social media marketer" body1 />
          </div> */}
          {/* <Button label="View all roles" icon="arrowNext" size="md" variant="ghostNeutral" /> */}
          <a css={{textDecoration: "none", display: "flex", gap: 8, alignItems: "center", fontWeight: 600, margin: "0 16px 0 auto", cursor: "pointer", whiteSpace: "nowrap"}}>View all roles <Icon icon="arrowNext" size="md" button="ghostNeutral" /></a>
        </div>
      </Container>

      {/* Graph + social proof */}
      <Container lg>

        {/* Wraps both left + right containers */}
        <div className={styles.roleWrapper} css={{backgroundColor:theme.palette.white}}>

          {/* Title */}
          <h3>
            <Typography label='Front-end developer' h1Semibold />
          </h3>

          {/* TOP */}
          <div className={styles.roleTop}>

            {/* LEFT COLUMN */}
            <div className={styles.roleTopRight}>
              {/* Cory social proof */}
              <h3 css={{margin: "8px 0"}} >
                  <Typography label='Design and develop the look, feel, function, and user experience of a website.' css={{color: theme.palette.interactive.neutral.default}} body1 />
              </h3>

              {/* Social proof */}
              <div css={{display: "grid", gap: 24, [mq[1]]: {gridAutoFlow: "column", alignItems: "center"}}}>
                {/* Image */}
                <div css={{backgroundImage: `url(${coryProfile_role})`, backgroundRepeat: "no-repeat", backgroundPosition: "50% 0%", backgroundSize: "240%", borderRadius: 100, width: 54, height: 54, [mq[1]]: {width: 136, height: 136}}}></div>

                {/* Testimonial */}
                <div>
                  <h3 css={{margin: "0 0 16px 0"}}>
                    <Typography label='Stevenson secured his first role as a developer' h2Semibold />
                  </h3>
                  <p css={{margin: "8px 0"}}>
                    <Typography label='“I don’t have the traditional instructional background in the field but my hands-on learning and what I’ve gained from the Google program propelled me forward.”' css={{color: theme.palette.interactive.neutral.default}} body1 />
                  </p>
                </div>
              </div>

              {/* Links */}
              <div css={{display: "flex", flexFlow: "column", width: "100%"}}>
                <h3 css={{margin: "0 0 16px 0"}}>
                  <Typography label='Start your career with these Professional Certificates' h3Semibold />
                </h3>

                 {/* Button */}
                <div css={{border: `2px solid ${theme.palette.interactive.neutral.light}`, borderRadius: 8, backgroundColor: "transparent", display: "grid", gridAutoFlow: "column", gap: 16, alignItems: "start", padding: 12, [mq[1]]: {alignItems: "center", gridAutoColumns: "auto 1fr"} }}>
                  {/* Logo */}
                  <div className={styles.buttonLogo} css={{
                    border: `1px solid ${theme.palette.interactive.neutral.light}`,
                    background: theme.palette.white,
                  }}>
                    <img css={{ width: 22}} src={metaSmall} alt="" />
                  </div> 
                  
                  {/* title + button */}
                  <div css={{display: "flex", flexFlow: "column", gap: 8, alignItems: "start", justifyContent: "space-between", [mq[1]]: {flexFlow: "row", alignItems: "center"} }}>
                    {/* Text */}
                    <Typography label="Meta Front-End Developer Professional Certificate" body1 />
                    {/* Button */}
                    <Button variant="ghostPrimary" size="md" label="Learn more" icon="arrowNext" margin="negativeRight" />
                  </div>

                </div>
                
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div css={{position: "relative"}}>
              {/* Median salary */}
              <div className={styles.roleTopLeft} css={{borderBottom: `1px solid ${theme.palette.interactive.neutral.light}`}}>
                <h3 css={{margin: 0}}>
                  <Typography label='Median Salary' h3Semibold />
                </h3>

                {/* Start of chart */}
                <div className={styles.bars} ref={barRef}>
                  {/* bar1 */}
                  <div className={styles.barGroup}>
                    <div className={styles.bar1}></div>
                    <Typography className={styles.barLabel1} css={{color: theme.palette.white}} label="Working professional*" body2Bold />
                    <Typography className={styles.barIncome1} css={{color: theme.palette.black}} label="$48,000" body2Bold />
                  </div>

                  {/* bar 2, 3 */}
                  <div className={styles.barGroup}>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                    <Typography className={styles.barLabel2} css={{color: theme.palette.white}} label="Front-end developer*" body2Bold />
                    <Typography className={styles.barIncome2} css={{color: theme.palette.black}} label="$86,900" body2Bold />
                  </div>
                </div>
              </div>

              {/* Chart.js */}
              <div className={styles.canvasWrapper} css={{marginBottom: "-20px"}}>
                {/* Info wrapper */}
                <div css={{display: "grid", position: "absolute", top: 0, left: 0, transform: "translate(0%, 10%)", paddingBottom: 24 }}>
                  {/* 70% role growth % */}
                  <div css={{display: "flex", gap: 8, alignItems: "center", [mq[1]]: {marginBottom: 16}}}>
                    <Icon icon="triangle" size="sm" button="ghostPrimary" />
                    <Typography label="12.1% projected 10 year growth rate" h3Semibold/>
                  </div>
                    {/* open positions */}
                  <Typography label="53,606" h2Semibold />
                  <Typography css={{color: theme.palette.interactive.neutral.default}} label="Job Postings in the past 12 months" body2 />
                </div>

                {/* Canvas */}
                <div className={styles.canvas} ref={barRef}>
                  <Line key="1" data={data} options={options} />
                  {/* Legends */}
                  <div css={{display: "grid", gridAutoFlow: "column", justifyContent: "space-between"}}>
                    {/* 2018 label */}
                    <div css={{display: "grid"}}>
                      <Typography label="2022" body2Bold />
                      <Typography css={{color: theme.palette.interactive.neutral.default}} label="14 million" body2 />
                    </div>
                    {/* 2025 label */}
                    <div css={{display: "grid"}}>
                      <Typography label="2032" body2Bold />
                      <Typography css={{color: theme.palette.interactive.neutral.default}} label="45 million" body2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
