/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { theme } from "../Styles/theme";
import Banner2 from "../Components/Banner/Banner2";
import BannerGuidedSearch from "../Components/Banner/BannerGuidedSearch";
import PopularCourses from "./PopularCourses";
import CollegeDegree from "./CollegeDegree";
import FilteredResults2 from "../Components/Filters/FilteredResults2";
import Container from "../Components/Container/Container";
import RealLearning from "./RealLearning";
import RealLearning2 from "./RealLearning2";
import orgLogos from "../Assets/orgLogos.png";
import PopularRoles from "../Components/PopularRoles";
import PartnerRandomizer from "../Components/PartnerModule/PartnerRandomizer";
import PartnerMarque from "../Components/PartnerModule/PartnerMarque";
import PartnerMarqueOnHover from "../Components/PartnerModule/PartnerMarqueOnHover";
import PartnerCarousel from "../Components/PartnerModule/PartnerCarousel";
import Section from "../Components/Container/Section";
import GuidedSearchTest from "../Components/Search/GuidedSearchTest";
import RoleV2 from "../Components/Role/RoleV2";
// import Progress from "../Components/Progress/Progress";
// import ProgressTest from "../Components/Progress/ProgressTest";
import ProgressSlick from "../Components/Progress/ProgressSlick";
import Goal from "../Components/Goal/Goal";
import goals from "../Assets/goals.png";
import socialProof from "../Assets/socialProof.png";

export default function Main(props) {
  return (
    <main role='main' css={{ backgroundColor: theme.palette.white }}>
      {/* <BannerNoCTA /> */}
      {/* <BannerNoCTABrown /> */}
      {/* <BannerEmailCapture /> */}
      <BannerGuidedSearch />

      {/* Guided search */}
      {/* <Section bgColor='lightgray'>
        <Container md>
          <GuidedSearchTest />
        </Container>
      </Section> */}

      <Container lg>
        <PartnerRandomizer />
        {/* <PartnerCarousel /> */}
        {/* <PartnerMarque /> */}
        {/* <PartnerMarqueOnHover /> */}
        {/* <BannerOrgSocialProof /> */}
      </Container>

      {/* <Role /> */}
      <RoleV2 />

      {/* Goal */}
      <Goal />

      {/* Progress */}
      {/* <Progress /> */}
      {/* <ProgressTest /> */}
      <ProgressSlick />

      {/* Social proof */}
      <Section bgColor={theme.palette.white}>
        <Container
          css={{ position: "relative", display: "flex", overflow: "hidden" }}
          lg
        >
          <img src={socialProof} css={{ width: "100%" }} />
        </Container>
      </Section>
      {/* <CareerAcademy /> */}
      {/* <RealLearning2 /> */}
      {/* <PopularRoles /> */}
      {/* <RealLearning /> */}
      {/* <PopularCourses /> */}
      {/* <FilteredResults2 /> */}
      {/* <CollegeDegree /> */}
      <div>test</div>
    </main>
  );
}
