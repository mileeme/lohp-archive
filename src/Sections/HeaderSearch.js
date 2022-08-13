/** @jsxImportSource @emotion/react */

import {useState, useEffect} from "react";
import styled from "@emotion/styled";
import Button from "../Components/Button/Button";
import Container from "../Components/Container/Container";
import MobileVisible from "../Components/Container/MobileVisible";
import SearchPlaceholder from "../Components/Search/SearchPlaceholder";
import Icon from "../Components/Icon/Icon";
import { theme } from "../Styles/theme";

export default function Header(props) {
  const handleInputClick = (e) => {
    console.log("click me")
  }
  return (
    <nav
      css={{
        height: 80,
        borderBottom: "1px solid #ccc",
        overflow: "hidden",
      }}
    >
      <Container flex
        css={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // margin: "0 16px",
          height: "100%",
        }}
      >
        {/* search bar */}
        {/* <MobileVisible css={{position: "absolute", top: "50%", right: "50%", bottom: 0, transform: "translate(50%, -50%)"}} hide><Search /></MobileVisible> */}

        <MobileVisible show>
          <Button
          ghost
          size='sm'
          css={{display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 50, width: 36, height: 36}}
          label={<Icon type="menu" button="ghost" />}
        />
        </MobileVisible>
        <div css={{ display: "flex", gap: 16 }}>
          <Icon type="coursera" button="ghost" />

          {/* Search */}
          <MobileVisible hide><button onClick={handleInputClick}>test</button></MobileVisible>
        </div>

        <MobileVisible hide>
          <div css={{ display: "flex", gap: 24, alignItems: "center" }}>
            <ul
              css={{
                listStyle: "none",
                display: "flex",
                gap: 24,
              }}
            >
              <li><Button variant="ghostNeutral" icon="chevronDown" size="sm" labe="Explore topics"/></li>
              <li><Button variant="ghostNeutral" icon="chevronDown" size="sm" labe="Find online degrees"/></li>
              <li><Button variant="ghostNeutral" size="sm" labe="Grow your career"/></li>
              <li><Button variant="ghostNeutral" size="sm" labe="Login"/></li>
            </ul>
            <Button size='sm' label='Join for Free' primary/>
          </div>
        </MobileVisible>
        <MobileVisible show><Button
        ghost
        size='sm'
        css={{display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 50, width: 36, height: 36}}
        label={<Icon type="search" button="ghost" />}
      /></MobileVisible>
      </Container>
    </nav>
  );
}
