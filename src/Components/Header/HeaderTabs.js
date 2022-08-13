/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import Typography from "../Typography";
import styles from "./HeaderTabs.module.scss";

// This is the most up to date Header tab (7/28)
export default function HeaderTabs() {
  const [selected, setSelected] = useState("Learner");
  const [xPos, setXPos] = useState(0);
  const [gliderWidth, setGliderWidth] = useState(45);
  const lWidth = 51;
  const bWidth = 59;
  const cWidth = 54;
  const gWidth = 84;

  // Listen for window size
  const windowSize = useWindowWidth();
  const tabGap = windowSize > 600 ? 24 : 40;

  // Get window resize width
  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
      function handleWindowResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleWindowResize);
      handleWindowResize();
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // If window resize, re-render xPos?
    useEffect(() => {
      if (selected === "Business") {
        setXPos(lWidth + tabGap);
        setGliderWidth(bWidth);
      } else if (selected === "Campus") {
        setXPos(lWidth + bWidth + tabGap * 2);
        setGliderWidth(cWidth);
      } else if (selected === "Government") {
        setXPos(lWidth + bWidth + cWidth + tabGap * 3);
        setGliderWidth(gWidth);
      } else {
        setXPos(0);
        setGliderWidth(lWidth);
      }
    }, [windowWidth]);

    return windowWidth;
  }

  // Set glider width and x position when selected
  useEffect(() => {
    if (selected === "Business") {
      setXPos(lWidth + tabGap);
      setGliderWidth(bWidth);
    } else if (selected === "Campus") {
      setXPos(lWidth + bWidth + tabGap * 2);
      setGliderWidth(cWidth);
    } else if (selected === "Government") {
      setXPos(lWidth + bWidth + cWidth + tabGap * 3);
      setGliderWidth(gWidth);
    } else {
      setXPos(0);
      setGliderWidth(lWidth);
    }
  }, [selected]);

  function handleTabClick(e) {
    setSelected(e.currentTarget.innerText);
  }

  return (
    <nav css={{ background: theme.palette.background.blue }}>
      <Container
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [mq[1]]: { justifyContent: "start" },
        }}
        flex
      >
        <div
          className={styles.tabs}
          css={{ gap: tabGap, color: theme.palette.white }}
        >
          <div
            className={styles.tab}
            css={{ color: selected === "Learner" && theme.palette.white }}
            onClick={handleTabClick}
          >
            <Typography css={{fontWeight: selected === "Learner" && 600}} label='Learner' h3 />
          </div>
          <div
            className={styles.tab}
            css={{ color: selected === "Business" && theme.palette.white }}
            onClick={handleTabClick}
          >
            <Typography css={{fontWeight: selected === "Business" && 600}}label='Business' h3 />
          </div>
          <div
            className={styles.tab}
            css={{ color: selected === "Campus" && theme.palette.white }}
            onClick={handleTabClick}
          >
            <Typography css={{fontWeight: selected === "Campus" && 600}}label='Campus' h3 />
          </div>
          <div
            className={styles.tab}
            css={{ color: selected === "Government" && theme.palette.white }}
            onClick={handleTabClick}
          >
            <Typography css={{fontWeight: selected === "Government" && 600}}label='Government' h3 />
          </div>
          {/* Glider */}
          <div
            className={styles.glider}
            css={{
              backgroundColor: theme.palette.white,
              width: `${gliderWidth}px`,
              transform: selected && `translateX(${xPos}px)`,
            }}
          ></div>
        </div>
      </Container>
    </nav>
  );
}
