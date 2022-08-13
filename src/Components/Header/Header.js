/** @jsxImportSource @emotion/react */

// import {useState, useEffect} from "react";
import styled from "@emotion/styled";
import Button from "../Button/Button";
import Container from "../Container/Container";
import MobileVisible from "../Container/MobileVisible";
import SearchHeader from "../Search/SearchHeader";
import Typography from "../Typography";
import Icon from "../Icon/Icon";
import { theme } from "../../Styles/theme";
import { mq } from "../../Styles/tokens";

export default function Header(props) {
  // const [scrollHeight, setScrollHeight] = useState();
  
  // useEffect(() => {
  //   function handleWindowScroll() {
  //     setWindowWidth(window.innerWidth);
  //   }
  //   window.addEventListener("scroll", handleWindowScroll);
  //   handleWindowScroll();
  //   return () => window.removeEventListener("resize", handleWindowScroll);
  // }, []);

  return (
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
          {/* <div css={{
            display: "none",
            [mq[2]]: {
              display: "block",
            },
          }}>
            <SearchHeader />
          </div> */}
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
  );
}
