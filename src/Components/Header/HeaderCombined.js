/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";
import Typography from "../Typography";
import styles from "./HeaderTabs.module.scss";
import Button from "../Button/Button";
import MobileVisible from "../Container/MobileVisible";
import SearchHeader from "../Search/SearchHeader";
import Icon from "../Icon/Icon";

// This is the most up to date Header tab (7/28)
export default function HeaderTabs() {
  const [selected, setSelected] = useState("Learner");
  const [xPos, setXPos] = useState(0);
  const [gliderWidth, setGliderWidth] = useState(45);
  const [scrollPos, setScrollPos] = useState(0);
  const [fixedHeader, setFixedHeader] = useState(false);
  const lWidth = 51;
  const bWidth = 59;
  const cWidth = 54;
  const gWidth = 84;

  // Listen for scroll position 
  useEffect(() => {
    const updatePosition = () => {
      setScrollPos(Math.round(window.scrollY));
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  // Make fixed header
  useEffect(() => {
    console.log(scrollPos)
    if ((scrollPos > 560 && scrollPos < 1760) || (scrollPos > 3870 && scrollPos < 6200)) {
      setFixedHeader(true)
    } else {
      setFixedHeader(false)
    }
  }, [scrollPos])


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

  const addTransition = {
    position: "sticky",
    top: fixedHeader ? 0 : "-150px", 
    width: "100%",
    backgroundColor: theme.palette.white,
    boxShadow: "0px 4px 8px rgb(0 0 0 / 10%)",
    zIndex: 1000,
    transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1)",
  }

  return (
    <div style={addTransition} >
      <div css={{ background: theme.palette.background.blue }}>
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
    </div>
    <nav
    css={{
      height: 96,
      borderBottom: "1px solid #ccc",
      overflow: "hidden",
    }}
    >
      <Container
        css={{
          position: "relative",
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "1fr auto",
          alignItems: "center",
          height: "100%",
        }}
        flex
      >
        {/* Mobile menu */}
        <div css={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            [mq[2]]: {
              display: "none",
            },
          }}>
          <Button
            variant='ghostPrimary'
            size='sm'
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              width: 36,
              height: 36,
            }}
            label={<Icon type='menu' button='ghostPrimary' />}
          />
        </div>

        {/* Logo + search bar */}
        <div
          css={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "auto 1fr",
            gap: 24,
            alignItems: "center",
          }}
        >
          <Icon type='coursera' button='ghostPrimary' />

          {/* Search */}
          <div css={{
            display: "none",
            [mq[2]]: {
              display: fixedHeader ? "block" : "none",
            },
          }}>
            <SearchHeader />
          </div>
        </div>

        {/* menu + join for free button */}
        <div
          css={{
            display: "none",
            [mq[2]]: {
              display: "flex",
              gap: 24,
              alignItems: "center",
            },
          }}
        >
          <ul
            css={{
              listStyle: "none",
              display: "flex",
              gap:32,
              color: theme.palette.black,
            }}
          >
            <li><a css={{display: "flex", alignItems: "center", gap: 8, textDecoration: "none"}} href="#"><Typography css={{whiteSpace: "nowrap"}} label="Explore topics" body1/><Icon type="chevronDown" size="sm" button="ghostNeutral" /></a></li>
            <li><a css={{display: "flex", alignItems: "center", gap: 8, textDecoration: "none"}} href="#"><Typography css={{whiteSpace: "nowrap"}} label="Find online degrees" body1/><Icon type="chevronDown" size="sm" button="ghostNeutral" /></a></li>
            <li><a css={{display: "flex", alignItems: "center", gap: 8, textDecoration: "none"}} href="#"><Typography css={{whiteSpace: "nowrap"}} label="Grow your career" body1/></a></li>
            <li><a css={{display: "flex", alignItems: "center", gap: 8, textDecoration: "none"}} href="#"><Typography css={{whiteSpace: "nowrap"}} label="Login" body1/></a></li>
          </ul>
          <Button variant='primary' size='sm' label='Join for Free' />
        </div>
        
        {/* Mobile search icon */}
        <div css={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            justifyContent: "end",
            [mq[2]]: {
              display: "none",
            },
          }}>
          <Button
            variant='ghostPrimary'
            size='sm'
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              width: 36,
              height: 36,
            }}
            label={<Icon type='search' button='ghostPrimary' />}
          />
        </div>
      </Container>
    </nav>
    </div>
  );
}
