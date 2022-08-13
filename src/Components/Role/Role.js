/** @jsxImportSource @emotion/react */

import {useState, useEffect, useRef} from "react";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Container from "../Container/Container";
import Section from "../Container/Section";
import {theme} from "../../Styles/theme";
import {mq} from "../../Styles/tokens";
import styles from "./Role.module.scss";
import roleGrowth from "../../Assets/roleGrowth.png";
import coryVideo from "../../Assets/CoryVideo.png";
import Icon from "../Icon/Icon";
import { google, ibm } from "../Icon/PartnerLogo";
import useOnScreen from "../Hooks/useOnScreen";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function Role(props) {
  const [selected, setSelected] = useState("Data analyst");
  const [xPos, setXPos] = useState(0);
  const [gliderWidth, setGliderWidth] = useState(118);
  const tab1 = 118;
  const tab2 = 185;
  const tab3 = 149;
  const tab4 = 116;
  const tab5 = 193;
  const tab6 = 114;
  const tab7 = 152;
  const tabGap = 32;

  // Check if bar is in viewport
  const barRef = useRef();
  const isInViewPort = useOnScreen(barRef);
  console.log('isInViewport', isInViewPort)


  // Set glider width and x position when selected
  useEffect(() => {
    if (selected === "Front-end developer") {
      setXPos(tab1 + tabGap);
      setGliderWidth(tab2);
    } else if (selected === "Digital marketer") {
      setXPos(tab1 + tab2 + tabGap * 2);
      setGliderWidth(tab3);
    } else if (selected === "Bookkeeper") {
      setXPos(tab1 + tab2 + tab3 + tabGap * 3);
      setGliderWidth(tab4);
    } else if (selected === "Cybersecurity analyst") {
      setXPos(tab1 + tab2 + tab3 + tab4 + tabGap * 4);
      setGliderWidth(tab5);
    } else if (selected === "UX designer") {
      setXPos(tab1 + tab2 + tab3 + tab4 + tab5 + tabGap * 5);
      setGliderWidth(tab6);
    } else if (selected === "Project manager") {
      setXPos(tab1 + tab2 + tab3 + tab4 + tab5 + + tab6 +tabGap * 6);
      setGliderWidth(tab7);
    } else {
      setXPos(0);
      setGliderWidth(tab1);
    }
  }, [selected]);

  function handleTabClick(e) {
    setSelected(e.currentTarget.innerText);
  }

  // Chart
  const data = {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        // label: "Average open positions",
        data: [14, 15, 16, 18, 19, 20, 21, 22],
        fill: true,
        pointBackgroundColor: "rgba(0,0,0,1)",
        pointBorderColor: "rgba(0,0,0,1)",
        backgroundColor: "rgba(0,0,0,0.8)",
        borderColor: "rgba(0,0,0,1)",  
      },
      {
        // label: "Data analyst open positions",
        data: [14, 16, 18, 22, 26, 33, 38, 45],
        fill: true,
        pointBackgroundColor: "rgba(0,85,208,1)",
        pointBorderColor: "rgba(0,85,208,1)",
        backgroundColor: "rgba(0,85,208,1)",
        borderColor: "rgba(0,85,208,1)",        
      },
    ]
  };

  const options = {
    maintainAspectRation: true,
    responsive: true,
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
        },
        ticks: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        }
      }
    }
  }
  

  return (
    <Section aria-label='career role' bgColor={theme.palette.background.grayLight}>
      {/* Section heading + tab menu */}
      <Container css={{marginBottom: 40}} lg> 
        <h2><Typography label="Earn a credential in a high-growth field" d2Semibold /></h2>
        
        {/* TABS */}
        <div
          className={styles.tabs}
          css={{ gap: tabGap, color: theme.palette.black }}
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
          <div className={styles.tabsBorderBottom} css={{borderBottom: `2px solid ${theme.palette.interactive.neutral.light}`}}></div>

          {/* Tab1 */}
          <div className={styles.tab} css={{color: selected === "Data analyst" && theme.palette.interactive.primary.default, paddingBottom: 16}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Data analyst" h2 />
          </div>
          {/* Tab2 */}
          <div className={styles.tab} css={{color: selected === "Front-end developer" && theme.palette.interactive.primary.default, paddingBottom: 16}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Front-end developer" h2 />
          </div>
          {/* Tab3 */}
          <div className={styles.tab} css={{color: selected === "Digital marketer" && theme.palette.interactive.primary.default, paddingBottom: 16}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Digital marketer" h2 />
          </div>
          {/* Tab4 */}
          <div className={styles.tab} css={{color: selected === "Bookkeeper" && theme.palette.interactive.primary.default, paddingBottom: 16}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Bookkeeper" h2 />
          </div>
          {/* Tab5 */}
          <div className={styles.tab} css={{color: selected === "Cybersecurity analyst" && theme.palette.interactive.primary.default, paddingBottom: 16}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Cybersecurity analyst" h2 />
          </div>
          {/* Tab6 */}
          <div className={styles.tab} css={{color: selected === "UX designer" && theme.palette.interactive.primary.default, paddingBottom: 16}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="UX designer" h2 />
          </div>
          {/* Tab7 */}
          <div className={styles.tab} css={{color: selected === "Project manager" && theme.palette.interactive.primary.default, paddingBottom: 16}} onClick={handleTabClick}>
            <Typography css={{whiteSpace: "nowrap"}} label="Project manager" h2 />
          </div>
        </div>
      </Container>

      {/* Graph + social proof */}
      <Container lg>
        {/* Wraps both left + right containers */}
        <div className={styles.roleWrapper} css={{[mq[2]]: {backgroundColor:theme.palette.white}}}>
          {/* Title */}
          <h3 css={{margin: 0}}>
            <Typography label='Data Analyst' d2Semibold />
          </h3>

          {/* TOP */}
          <div className={styles.roleTop} css={{borderBottom: `1px solid ${theme.palette.interactive.neutral.light}`}}>
            {/* LEFT COLUMN */}
            <div>
              {/* Median salary */}
              <div className={styles.roleTopLeft} css={{borderBottom: `1px solid ${theme.palette.interactive.neutral.light}`}}>
                <h3 css={{margin: "8px 0"}} >
                  <Typography label='Data Analysts review data to identify key insights into a business’ customers and ways the data can be used to solve problems.' css={{color: theme.palette.interactive.neutral.default}} h2 />
                </h3>
                <h3 css={{margin: 0}}>
                  <Typography label='Median Salary' h2Semibold />
                </h3>

                {/* Start of chart */}
                <div className={styles.bars} ref={barRef}>
                  <div className={styles.barGroup}>
                    <div className={styles.bar1}></div>
                    <Typography className={styles.barLabel1} css={{color: theme.palette.white}} label="Working professional*" body2Bold />
                    <Typography className={styles.barIncome1} css={{color: theme.palette.black}} label="$67,521" body2Bold />
                  </div>

                  <div className={styles.barGroup}>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                    <Typography className={styles.barLabel2} css={{color: theme.palette.white}} label="Data analyst*" body2Bold />
                    <Typography className={styles.barIncome2} css={{color: theme.palette.interactive.primary.default}} label="$131,000" body2Bold />
                  </div>
                </div>
              </div>

              {/* Open job positions */}
              <div>

                
                {/* Open positions */}
                <div css={{display: "grid", position: "relative", margin: "24px 0"}} ref={barRef}>

                  {/* Graph */}
                  <div css={{position: "relative", maxWidth: 375, [mq[1]]: {maxWidth: 578}, [mq[2]]: {maxWidth: 600}}}>
                    {/* job opening */}
                    <div css={{display: "grid", position: "absolute", top: 0, left: 0, transform: "translate(0%, 10%)", backgroundColor: theme.palette.background.grayLight, paddingBottom: 24, [mq[2]]: {backgroundColor: theme.palette.white, }}}>
                      {/* Growth % */}
                      <div css={{display: "flex", gap: 8, alignItems: "center", [mq[1]]: {marginBottom: 16}}}>
                        <Icon type="triangle" size="sm" button="ghostPrimary" />
                        <Typography label="70% role growth since 2018" h2Semibold/>
                      </div>
                      <Typography label="42,237" d2Semibold />
                      <Typography css={{color: theme.palette.interactive.neutral.default}} label="Open positions in the US" body2 />
                    </div>

                    <Line key="1" data={data} options={options}/>
                    {/* Labels */}
                    <div css={{display: "grid"}}>
                      <Typography label="2018" body2Bold />
                      <Typography css={{color: theme.palette.interactive.neutral.default}} label="14 million" body2 />
                    </div>
                    <div css={{position: "absolute", right: 0, bottom: 0, display: "grid",}}>
                      <Typography label="2025" body2Bold />
                      <Typography css={{color: theme.palette.interactive.neutral.default}} label="45 million" body2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className={styles.roleTopRight}>
              {/* Cory social proof */}
              <img src={coryVideo} css={{width: "100%"}}/>

              <div>
                <h3 css={{margin: "0 0 16px 0"}}>
                  <Typography label='Cory got a job at Google in less than 4 months' d2Semibold />
                </h3>
                <p css={{margin: "8px 0"}}>
                  <Typography label='“I never knew how powerful Coursera certificates were until I realized that Google actually worked with them to create these job-ready learning programs.”' css={{color: theme.palette.interactive.neutral.default}} h2 />
                </p>
              </div>
            </div>
          </div>

          
          {/* BOTTOM */}
          <div>
            {/* Links */}
            <h3 css={{margin: "0 0 16px 0"}}>
              <Typography label='Start your career with these Professional Certificates' h1Semibold />
            </h3>

            <div className={styles.roleBottom}>
              <button className={styles.buttonContainer} css={{border: `1px solid ${theme.palette.black}` }}>
                <div className={styles.buttonContent}>
                  <div className={styles.buttonLogo} css={{
                    border: `1px solid ${theme.palette.interactive.neutral.light}`,
                    background: theme.palette.white,
                  }}>
                    <img css={{height: 18, width: 18}} src={google} alt="" />
                  </div>          
                  <Typography label="Google Data Analyst Professional Certificate" body1Semibold />
                </div>
                <Icon type="arrowNext" size="md" />
              </button>

              <button className={styles.buttonContainer} css={{border: `1px solid ${theme.palette.black}` }}>
                <div className={styles.buttonContent}>
                  <div className={styles.buttonLogo} css={{
                    border: `1px solid ${theme.palette.interactive.neutral.light}`,
                    background: theme.palette.white,
                  }}>
                    <img css={{height: 18, width: 18}} src={ibm} alt="" />
                  </div>          
                  <Typography label="IBM Data Science Professional Certificate" body1Semibold />
                </div>
                <Icon type="arrowNext" size="md" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
